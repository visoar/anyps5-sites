import {games} from './games';
import {conclusionReports,gameConclusions} from './game-conclusions';
import {growthCopy,caseNotes} from './growth-content';
import {gameName} from './game-editorial';
import {t,type Locale} from './locales';
import type {Game,Platform} from './model';

export const reportGames=['gran-turismo-7','hollow-knight-silksong','dreaming-sarah','astro-bot','doom-homebrew'].map(slug=>games.find(game=>game.slug===slug)!);
export const reportReviewed=reportGames.flatMap(game=>gameConclusions[game.slug].map(c=>c.reviewed)).sort().at(-1)!;
export function gameSearchMetadata(game:Game,locale:Locale){
 const name=gameName(game,locale);
 const identity=game.titleId&&!name.includes(game.titleId)?name+' · '+game.titleId:name;
 const results=(['windows','linux'] as Platform[]).map(platform=>{
  const reports=conclusionReports(game,platform);
  const stages=[...new Set(reports.map(report=>t(locale,report.stage)+(report.patched===true?' ('+t(locale,'localPatch')+')':report.patched===null?' ('+growthCopy.unknownPatch[locale]+')':'')))];
  return t(locale,platform)+': '+(stages.join(' / ')||growthCopy.noReport[locale]);
 }).join('; ');
 return {title:identity+' | '+growthCopy.compatibility[locale],description:growthCopy.meta[locale].replace('{name}',identity).replace('{results}',results)};
}
export const compatibilityReport={
 schemaVersion:1,
 url:'https://anyps5.games/compatibility-report/',
 reviewed:reportReviewed,
 scope:growthCopy.reportScope,
 citationGuidance:growthCopy.cite,
 games:reportGames.map(game=>({slug:game.slug,name:game.name,titleId:game.titleId,edition:game.edition,interpretation:caseNotes[game.slug as keyof typeof caseNotes],url:'https://anyps5.games/games/'+game.slug+'/',platforms:(['windows','linux'] as Platform[]).map(platform=>({platform,reviewed:gameConclusions[game.slug].find(c=>c.platform===platform)?.reviewed??null,reports:conclusionReports(game,platform)}))})),
};
