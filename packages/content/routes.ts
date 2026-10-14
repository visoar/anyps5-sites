import {articles} from './articles';
import {developmentArticle} from './development-article';
import {extraArticles,policyArticles} from './extra-articles';
import {games} from './games';
import {locales,localeConfig,type Site} from './locales';
export function getRoutes(site:Site){return locales.flatMap(locale=>{
 const root=localeConfig[locale].prefix.slice(1);
 const path=(slug:string)=>[root,slug].filter(Boolean).join('/')||undefined;
 const content=site==='cc'?[...articles,...extraArticles,developmentArticle,...policyArticles]:policyArticles;
 return [{params:{path:path('')},props:{locale,kind:'home'}},...(site==='games'?[{params:{path:path('compatibility-report')},props:{locale,kind:'compatibility-report'}}]:[]),...(site==='games'?[true,false].map(tested=>({params:{path:path(tested?'tested':'untested')},props:{locale,kind:'catalog',tested}})):[]),...content.map(article=>({params:{path:path(article.slug)},props:{locale,kind:'article',article}})),...(site==='games'?games.map(game=>({params:{path:path('games/'+game.slug)},props:{locale,kind:'game',game}})):[])];
})}
