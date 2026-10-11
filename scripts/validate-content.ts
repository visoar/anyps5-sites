import {validateLocales,locales} from '../packages/content/locales';
import {articles} from '../packages/content/articles';
import {extraArticles,policyArticles} from '../packages/content/extra-articles';
import {games} from '../packages/content/games';
import type {Text} from '../packages/content/model';
validateLocales();
function checkText(text:Text,label:string){for(const l of locales)if(!text[l]?.trim())throw Error(`Missing ${l}: ${label}`)}
const slugs=new Set<string>();
for(const article of [...articles,...extraArticles,...policyArticles]){if(slugs.has(article.slug))throw Error('Duplicate article '+article.slug);slugs.add(article.slug);checkText(article.title,article.slug);checkText(article.description,article.slug);for(const section of article.sections){checkText(section.title,article.slug);section.body.forEach(p=>checkText(p,article.slug))}}
const ids=new Set<string>();
for(const game of games){if(ids.has(game.slug)||!/^PPSA\d{5}$/.test(game.titleId)||game.reports.length===0)throw Error('Invalid game '+game.slug);ids.add(game.slug);for(const r of game.reports){checkText(r.summary,game.slug);if(!r.source.startsWith('https://github.com/'))throw Error('Missing original source');if(r.evidence==='official'&&r.patched)throw Error('Official patch misclassification');for(const b of r.benchmarks)checkText(b.context,game.slug)}}
console.log(`Validated ${locales.length} languages, ${slugs.size} articles, ${games.length} games, ${games.reduce((n,g)=>n+g.reports.length,0)} reports.`);
