import {articles} from './articles';
import {extraArticles,policyArticles} from './extra-articles';
import {games} from './games';
import {locales,localeConfig,type Site} from './locales';
export function getRoutes(site:Site){return locales.flatMap(locale=>{
 const root=localeConfig[locale].prefix.slice(1);
 const path=(slug:string)=>[root,slug].filter(Boolean).join('/')||undefined;
 const content=site==='cc'?[...articles,...extraArticles,...policyArticles]:policyArticles;
 return [{params:{path:path('')},props:{locale,kind:'home'}},...content.map(article=>({params:{path:path(article.slug)},props:{locale,kind:'article',article}})),...(site==='games'?games.map(game=>({params:{path:path('games/'+game.slug)},props:{locale,kind:'game',game}})):[])];
})}
