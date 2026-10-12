import {games} from './games';
import {type Game,type Platform,type PlatformConclusion} from './model';

// Select representative evidence explicitly; never infer a current verdict from the highest stage.
const selections:Record<string,{reviewed:string;reportIds:string[]}>={
 'horizon-forbidden-west':{reviewed:'2026-10-13',reportIds:['1616-linux']},
 'resident-evil-4-remake':{reviewed:'2026-10-13',reportIds:['2776-windows']},
 'returnal':{reviewed:'2026-10-13',reportIds:['4239-windows']},
 'palworld':{reviewed:'2026-10-13',reportIds:['3832-windows']},
 'dreaming-sarah':{reviewed:'2026-10-12',reportIds:['3018-windows-review-20261012','official-sarah-windows','3180-linux-main']},
 'animal-well':{reviewed:'2026-10-12',reportIds:['966-windows']},
 'hollow-knight-silksong':{reviewed:'2026-10-12',reportIds:['726-windows-review-20261012','1996-windows','1519-linux-review-20261012','3731-linux-review-20261012']},
 'silt':{reviewed:'2026-10-12',reportIds:['2810-windows','2126-linux']},
 'balatro':{reviewed:'2026-10-12',reportIds:['1142-windows']},
 'hades':{reviewed:'2026-10-12',reportIds:['3234-linux']},
 'hades-ii':{reviewed:'2026-10-12',reportIds:['1965-linux']},
 'astro-bot':{reviewed:'2026-10-12',reportIds:['357-windows','3480-linux-review-20261012']},
 'astros-playroom':{reviewed:'2026-10-12',reportIds:['3232-linux-review-20261012']},
 'demons-souls':{reviewed:'2026-10-12',reportIds:['1283-linux']},
 'ghost-of-yotei':{reviewed:'2026-10-12',reportIds:['675-windows','2884-linux-review-20261012']},
 'god-of-war-sons-of-sparta':{reviewed:'2026-10-12',reportIds:['1742-windows']},
 'gta-v':{reviewed:'2026-10-12',reportIds:['1203-windows']},
 'epic-mickey-rebrushed':{reviewed:'2026-10-12',reportIds:['2255-linux']},
 '3d-mini-golf':{reviewed:'2026-10-12',reportIds:['2431-windows']},
 'hello-kitty-island-adventure':{reviewed:'2026-10-12',reportIds:['2690-windows']},
 'minecraft-preview':{reviewed:'2026-10-12',reportIds:['1277-windows-review-20261012']},
 'sonic-origins':{reviewed:'2026-10-12',reportIds:['2021-linux']},
 'stray':{reviewed:'2026-10-12',reportIds:['2461-linux']},
 'wobbly-life':{reviewed:'2026-10-12',reportIds:['2211-linux-review-20261012']},
 'rise-of-the-ronin':{reviewed:'2026-10-12',reportIds:['2171-linux']},
 'ratchet-clank-rift-apart':{reviewed:'2026-10-12',reportIds:['3338-linux']},
 'star-wars-galactic-racer':{reviewed:'2026-10-12',reportIds:['3086-windows']},
 'doom-homebrew':{reviewed:'2026-10-12',reportIds:['690-windows-review-20261012','690-linux-review-20261012']},
 'cyberpunk-2077':{reviewed:'2026-10-13',reportIds:['3308-linux-main-review-20261013']},
 'the-last-of-us-part-ii-remastered':{reviewed:'2026-10-12',reportIds:['2883-windows']},
 'big-helmet-heroes':{reviewed:'2026-10-12',reportIds:['3873-linux-review-20261012']},
 'hot-shots-golf-2':{reviewed:'2026-10-12',reportIds:['3839-windows-review-20261012']},
 'vampire-survivors':{reviewed:'2026-10-12',reportIds:['3745-windows-review-20261012']},
 'killing-floor-3':{reviewed:'2026-10-12',reportIds:['3413-linux-review-20261012']},
 'pac-man-world-re-pac':{reviewed:'2026-10-12',reportIds:['3443-windows-review-20261012']},
 'demons-souls-ppsa01342':{reviewed:'2026-10-12',reportIds:['1283-windows-review-20261012']},
 'stray-ppsa02101':{reviewed:'2026-10-12',reportIds:['3504-linux-review-20261012']},
};

export const gameConclusions:Record<string,PlatformConclusion[]>=Object.fromEntries(Object.entries(selections).map(([slug,selection])=>{
 const game=games.find(g=>g.slug===slug);
 if(!game)throw Error('Unknown conclusion game '+slug);
 const reports=selection.reportIds.map(id=>{const report=game.reports.find(r=>r.id===id);if(!report)throw Error('Unknown conclusion report '+id);return report});
 return [slug,(['windows','linux'] as Platform[]).filter(platform=>reports.some(r=>r.platform===platform)).map(platform=>({platform,reportIds:reports.filter(r=>r.platform===platform).map(r=>r.id),reviewed:selection.reviewed}))];
}));

export const conclusionReports=(game:Game,platform:Platform)=>{
 const conclusion=gameConclusions[game.slug]?.find(c=>c.platform===platform);
 return (conclusion?.reportIds||[]).map(id=>game.reports.find(r=>r.id===id)!);
};

export const recentEvidence=[
 {slug:'dreaming-sarah',reportId:'3180-linux-main'},
 {slug:'hollow-knight-silksong',reportId:'726-windows-review-20261012'},
 {slug:'wobbly-life',reportId:'2211-linux-review-20261012'},
 {slug:'doom-homebrew',reportId:'690-linux-review-20261012'},
];
