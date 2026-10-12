import {validateLocales,locales} from '../packages/content/locales';
import {articles} from '../packages/content/articles';
import {extraArticles,policyArticles} from '../packages/content/extra-articles';
import {games} from '../packages/content/games';
import {editorial,media} from '../packages/content/game-editorial';
import {localMedia} from '../packages/content/game-media-assets';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {gameCopy,genres} from '../packages/content/game-copy';
import {developmentArticle} from '../packages/content/development-article';
import {developmentNotes,developmentSource} from '../packages/content/github-progress';
import type {Text} from '../packages/content/model';
import {discoveryCopy} from '../packages/content/discovery-copy';
import {gameConclusions,recentEvidence} from '../packages/content/game-conclusions';
import {releaseAssets} from '../packages/content/release-assets';
import {relinkerFlow} from '../packages/content/relinker-flow';
import {gameResearch,researchCopy} from '../packages/content/game-research';
validateLocales();
function checkText(text:Text,label:string){for(const l of locales)if(!text[l]?.trim())throw Error(`Missing ${l}: ${label}`)}
const slugs=new Set<string>();
for(const article of [...articles,...extraArticles,developmentArticle,...policyArticles]){if(slugs.has(article.slug))throw Error('Duplicate article '+article.slug);slugs.add(article.slug);checkText(article.title,article.slug);checkText(article.description,article.slug);for(const section of article.sections){checkText(section.title,article.slug);section.body.forEach(p=>checkText(p,article.slug));if(section.code&&typeof section.code!=='string')checkText(section.code,article.slug+' template');for(const link of section.links||[])if(typeof link.label!=='string')checkText(link.label,article.slug+' link')}}
for(const [label,text]of Object.entries(relinkerFlow))checkText(text,'relinker flow '+label);
for(const [label,text]of Object.entries(researchCopy))checkText(text,'research '+label);
for(const [slug,review]of Object.entries(gameResearch)){
 if(!games.some(game=>game.slug===slug)||!/^\d{4}-\d{2}-\d{2}$/.test(review.checked)||!review.sources.length)throw Error('Invalid game research '+slug);
 for(const field of ['edition','finding','nextTest'] as const)checkText(review[field],slug+' '+field);
 for(const source of review.sources)if(!source.label||!source.url.startsWith('https://'))throw Error('Invalid research provenance '+slug);
}
const ids=new Set<string>();
for(const game of games){
 if(ids.has(game.slug)||(game.titleId!==null&&!/^PPSA\d{5}$/.test(game.titleId))||(game.reports.length>0&&!game.titleId))throw Error('Invalid game '+game.slug);
 ids.add(game.slug);
 const info=editorial[game.slug];if(!info||!genres[info.genre])throw Error('Missing editorial information '+game.slug);
 checkText(info.overview,game.slug);checkText(info.editionNote,game.slug);for(const [locale,name]of Object.entries(info.names))if(!locales.includes(locale as typeof locales[number])||!name.trim())throw Error('Invalid localized game name '+game.slug);
 for(const related of info.related)if(!games.some(g=>g.slug===related)||related===game.slug)throw Error('Invalid related game '+related);
 for(const r of game.reports){checkText(r.summary,game.slug);if(!r.source.startsWith('https://github.com/'))throw Error('Missing original source');if(r.evidence==='official'&&r.patched)throw Error('Official patch misclassification');for(const b of r.benchmarks){checkText(b.context,game.slug);if(typeof b.fps!=='string')checkText(b.fps,game.slug+' FPS')}}
}
for(const [label,text]of Object.entries(gameCopy))checkText(text,label);
for(const [label,text]of Object.entries(discoveryCopy))checkText(text,label);
for(const game of games){
 const conclusions=gameConclusions[game.slug]||[];
 for(const platform of new Set(game.reports.map(r=>r.platform)))if(!conclusions.some(c=>c.platform===platform))throw Error('Missing platform conclusion '+game.slug+' '+platform);
 for(const conclusion of conclusions){
  if(!conclusion.reviewed||!conclusion.reportIds.length||new Set(conclusion.reportIds).size!==conclusion.reportIds.length)throw Error('Invalid conclusion '+game.slug);
  for(const id of conclusion.reportIds)if(!game.reports.some(r=>r.id===id&&r.platform===conclusion.platform))throw Error('Conclusion crosses platform scope '+id);
 }
}
for(const item of recentEvidence)if(!games.find(g=>g.slug===item.slug)?.reports.some(r=>r.id===item.reportId))throw Error('Invalid recent evidence '+item.slug);
for(const file of releaseAssets.files)if(!file.url.startsWith('https://github.com/boykopovar/AnyPS5/releases/download/'+releaseAssets.tag+'/')||file.url.split('/').at(-1)!==file.name||file.bytes<=0)throw Error('Invalid release asset '+file.name);
for(const [slug,source]of Object.entries(media)){
 if(!ids.has(slug)||!source.source.startsWith('https://')||!source.checked)throw Error('Invalid media provenance '+slug);
 for(const url of [source.cover,...source.screenshots].filter(Boolean))if(!['image.api.playstation.com','gmedia.playstation.com','shared.akamai.steamstatic.com'].includes(new URL(url!).hostname))throw Error('Unexpected media host '+url);
 const assets=localMedia[slug];
 if(!assets||Boolean(assets.cover)!==Boolean(source.cover)||assets.screenshots.length!==source.screenshots.length)throw Error('Local media inventory mismatch '+slug);
 const pairs=[...(source.cover?[[source.cover,assets.cover!] as const]:[]),...source.screenshots.map((url,index)=>[url,assets.screenshots[index]] as const)];
 for(const [url,asset] of pairs){
  if(asset.source!==url||!asset.downloadUrl||!asset.downloadUrl.startsWith('https://')||new URL(asset.downloadUrl).hostname!==new URL(url).hostname||!new RegExp('^'+slug+'/[a-z0-9-]+\\.webp$').test(asset.file))throw Error('Invalid local media provenance '+slug);
  const data=await readFile(new URL('../packages/ui/assets/games/'+asset.file,import.meta.url));
  const metadata=await sharp(data).metadata();
  if(metadata.format!=='webp'||metadata.width!==asset.width||metadata.height!==asset.height||data.length!==asset.bytes||createHash('sha256').update(data).digest('hex')!==asset.sha256)throw Error('Local media integrity mismatch '+asset.file);
 }
}
for(const slug of Object.keys(localMedia))if(!media[slug])throw Error('Orphaned local media '+slug);
for(const note of developmentNotes){checkText(note.title,'development '+note.number);checkText(note.summary,'development '+note.number);const source=developmentSource(note);if(!source?.reviewed||!source.url.startsWith('https://github.com/boykopovar/AnyPS5/'))throw Error('Missing development provenance');if(source.state==='merged'&&!source.commit)throw Error('Merged source lacks commit');for(const slug of note.games)if(!ids.has(slug))throw Error('Unknown development game '+slug)}
console.log(`Validated ${locales.length} languages, ${slugs.size} articles, ${games.length} games, ${games.reduce((n,g)=>n+g.reports.length,0)} reports.`);
