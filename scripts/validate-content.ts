import {validateLocales,locales} from '../packages/content/locales';
import {articles} from '../packages/content/articles';
import {extraArticles,policyArticles} from '../packages/content/extra-articles';
import {games} from '../packages/content/games';
import {editorial,media} from '../packages/content/game-editorial';
import {gameCopy,genres} from '../packages/content/game-copy';
import {developmentArticle} from '../packages/content/development-article';
import {developmentNotes,developmentSource} from '../packages/content/github-progress';
import type {Text} from '../packages/content/model';
validateLocales();
function checkText(text:Text,label:string){for(const l of locales)if(!text[l]?.trim())throw Error(`Missing ${l}: ${label}`)}
const slugs=new Set<string>();
for(const article of [...articles,...extraArticles,developmentArticle,...policyArticles]){if(slugs.has(article.slug))throw Error('Duplicate article '+article.slug);slugs.add(article.slug);checkText(article.title,article.slug);checkText(article.description,article.slug);for(const section of article.sections){checkText(section.title,article.slug);section.body.forEach(p=>checkText(p,article.slug))}}
const ids=new Set<string>();
for(const game of games){
 if(ids.has(game.slug)||(game.titleId!==null&&!/^PPSA\d{5}$/.test(game.titleId))||(game.reports.length>0&&!game.titleId))throw Error('Invalid game '+game.slug);
 ids.add(game.slug);
 const info=editorial[game.slug];if(!info||!genres[info.genre])throw Error('Missing editorial information '+game.slug);
 checkText(info.overview,game.slug);checkText(info.editionNote,game.slug);
 for(const related of info.related)if(!games.some(g=>g.slug===related)||related===game.slug)throw Error('Invalid related game '+related);
 for(const r of game.reports){checkText(r.summary,game.slug);if(!r.source.startsWith('https://github.com/'))throw Error('Missing original source');if(r.evidence==='official'&&r.patched)throw Error('Official patch misclassification');for(const b of r.benchmarks)checkText(b.context,game.slug)}
}
for(const [label,text]of Object.entries(gameCopy))checkText(text,label);
for(const [slug,source]of Object.entries(media)){
 if(!ids.has(slug)||!source.source.startsWith('https://')||!source.checked)throw Error('Invalid media provenance '+slug);
 for(const url of [source.cover,...source.screenshots].filter(Boolean))if(!['image.api.playstation.com','gmedia.playstation.com','shared.akamai.steamstatic.com'].includes(new URL(url!).hostname))throw Error('Unexpected media host '+url);
}
for(const note of developmentNotes){checkText(note.title,'development '+note.number);checkText(note.summary,'development '+note.number);const source=developmentSource(note);if(!source?.reviewed||!source.url.startsWith('https://github.com/boykopovar/AnyPS5/'))throw Error('Missing development provenance');if(source.state==='merged'&&!source.commit)throw Error('Merged source lacks commit');for(const slug of note.games)if(!ids.has(slug))throw Error('Unknown development game '+slug)}
console.log(`Validated ${locales.length} languages, ${slugs.size} articles, ${games.length} games, ${games.reduce((n,g)=>n+g.reports.length,0)} reports.`);
