import {games} from './games';
import {type Game,type Platform,type PlatformConclusion} from './model';

// Select representative evidence explicitly; never infer a current verdict from the highest stage.
const selections:Record<string,{reviewed:string;reportIds:string[]}>={
 "tomba-2":{reviewed:"2026-10-14",reportIds:["3646-windows-review-20261014"]},
 "pragmata":{reviewed:"2026-10-14",reportIds:["3043-windows-review-20261014"]},
 "ccleste-homebrew":{reviewed:"2026-10-14",reportIds:["5079-windows-review-20261014"]},
 "sword-of-the-sea":{reviewed:"2026-10-14",reportIds:["5436-windows-review-20261014"]},
 "sifu":{reviewed:"2026-10-14",reportIds:["4491-windows-review-20261014"]},
 "dying-light-2":{reviewed:"2026-10-14",reportIds:["1794-windows-review-20261014"]},
 "slay-the-princess":{reviewed:"2026-10-14",reportIds:["4369-windows-review-20261014"]},
 "high-on-life":{reviewed:"2026-10-14",reportIds:["4736-linux-review-20261014"]},
 "ride-4":{reviewed:"2026-10-14",reportIds:["3468-linux-review-20261014"]},
 "dead-cells":{reviewed:"2026-10-14",reportIds:["3553-linux-review-20261014"]},
 "kena-bridge-of-spirits":{reviewed:"2026-10-14",reportIds:["5099-linux-review-20261014"]},
 "void-terrarium-plus":{reviewed:"2026-10-14",reportIds:["5055-windows-review-20261014"]},
 "call-of-duty-black-ops":{reviewed:"2026-10-14",reportIds:["5389-windows-review-20261014", "5389-windows-main-review-20261014"]},
 "nhl-26":{reviewed:"2026-10-14",reportIds:["5398-linux-review-20261014"]},
 "dragon-quest-iii-hd2d":{reviewed:"2026-10-14",reportIds:["5332-linux-review-20261014"]},
 "red-dead-redemption":{reviewed:"2026-10-14",reportIds:["5345-windows-review-20261014"]},
 "mgs-peace-walker":{reviewed:"2026-10-14",reportIds:["5268-linux-review-20261014"]},
 "olliolli-world":{reviewed:"2026-10-14",reportIds:["5316-windows-review-20261014"]},
 "remnant-2":{reviewed:"2026-10-14",reportIds:["5320-windows-review-20261014"]},
 "planet-coaster":{reviewed:"2026-10-14",reportIds:["5342-windows-review-20261014"]},
 "tourist-bus-simulator":{reviewed:"2026-10-14",reportIds:["5346-windows-review-20261014"]},
 "sonic-superstars":{reviewed:"2026-10-14",reportIds:["5382-windows-review-20261014"]},
 "diablo-ii-resurrected":{reviewed:"2026-10-14",reportIds:["5146-linux-review-20261014"]},
 "death-stranding-2":{reviewed:"2026-10-14",reportIds:["5424-windows-review-20261014"]},
 "resident-evil-village":{reviewed:"2026-10-14",reportIds:["5169-windows-review-20261014"]},
 "astro-bot-ppsa21559":{reviewed:"2026-10-14",reportIds:["357-linux-ppsa21559-review-20261014"]},
 "astro-bot-ppsa21567":{reviewed:"2026-10-14",reportIds:["357-windows-ppsa21567-review-20261014"]},
 "black-myth-wukong":{reviewed:"2026-10-14",reportIds:["4508-windows-review-20261014"]},
 'ready-or-not':{reviewed:'2026-10-13',reportIds:["4184-windows-review-20261013"]},
 'phasmophobia':{reviewed:'2026-10-13',reportIds:["4680-windows-review-20261013"]},
 'blasphemous-2':{reviewed:'2026-10-13',reportIds:["4687-linux-review-20261013"]},
 'nhl-27':{reviewed:'2026-10-13',reportIds:["4275-windows-review-20261013"]},
 "ghost-of-tsushima-directors-cut":{reviewed:"2026-10-14",reportIds:["4461-windows-review-20261014"]},
 'lost-soul-aside':{reviewed:'2026-10-13',reportIds:["4387-windows-review-20261013"]},
 'minecraft':{reviewed:'2026-10-13',reportIds:["4216-linux-review-20261013"]},
 "gran-turismo-7":{reviewed:"2026-10-14",reportIds:["4697-windows-music-rally-review-20261013", "4697-windows-review-20261014"]},
 'horizon-forbidden-west':{reviewed:'2026-10-13',reportIds:['1616-linux']},
 'resident-evil-4-remake':{reviewed:'2026-10-13',reportIds:['2776-windows']},
 'returnal':{reviewed:'2026-10-13',reportIds:['4239-windows']},
 'palworld':{reviewed:'2026-10-13',reportIds:['3832-windows']},
 "dreaming-sarah":{reviewed:"2026-10-14",reportIds:["3180-linux-review-20261013", "3003-windows-review-20261014"]},
 'animal-well':{reviewed:'2026-10-12',reportIds:['966-windows']},
 "hollow-knight-silksong":{reviewed:"2026-10-14",reportIds:["1996-windows-review-20261014", "1519-linux-review-20261012", "3731-linux-review-20261012"]},
 "silt":{reviewed:"2026-10-14",reportIds:["2126-windows-review-20261014", "2126-linux"]},
 'balatro':{reviewed:'2026-10-12',reportIds:['1142-windows']},
 'hades':{reviewed:'2026-10-12',reportIds:['3234-linux']},
 'hades-ii':{reviewed:'2026-10-13',reportIds:['1965-linux']},
 "astro-bot":{reviewed:"2026-10-14",reportIds:["357-windows", "357-linux-integration-review-20261013", "357-linux-review-20261014"]},
 "astros-playroom":{reviewed:"2026-10-14",reportIds:["3232-linux-review-20261014"]},
 'demons-souls':{reviewed:'2026-10-12',reportIds:['1283-linux']},
 "ghost-of-yotei":{reviewed:"2026-10-14",reportIds:["675-linux-review-20261014", "675-windows"]},
 'god-of-war-sons-of-sparta':{reviewed:'2026-10-12',reportIds:['1742-windows']},
 'gta-v':{reviewed:'2026-10-12',reportIds:['1203-windows']},
 "epic-mickey-rebrushed":{reviewed:"2026-10-14",reportIds:["2255-linux-review-20261014"]},
 '3d-mini-golf':{reviewed:'2026-10-12',reportIds:['2431-windows']},
 'hello-kitty-island-adventure':{reviewed:'2026-10-12',reportIds:['2690-windows']},
 'minecraft-preview':{reviewed:'2026-10-12',reportIds:['1277-windows-review-20261012']},
 'sonic-origins':{reviewed:'2026-10-12',reportIds:['2021-linux']},
 'stray':{reviewed:'2026-10-12',reportIds:['2461-linux']},
 "wobbly-life":{reviewed:"2026-10-14",reportIds:["5335-linux-review-20261014", "2211-linux-review-20261014"]},
 'rise-of-the-ronin':{reviewed:'2026-10-12',reportIds:['2171-linux']},
 'ratchet-clank-rift-apart':{reviewed:'2026-10-12',reportIds:['3338-linux']},
 'star-wars-galactic-racer':{reviewed:'2026-10-12',reportIds:['3086-windows']},
 'doom-homebrew':{reviewed:'2026-10-13',reportIds:["4312-windows-rdna4", "4312-windows-rdna2", "2475-windows-nvidia-startup-review-20261013", "2475-linux-intel-review-20261013","2475-linux-nvidia-archived-review-20261013","2475-linux-amd-archived-review-20261013"]},
 'cyberpunk-2077':{reviewed:'2026-10-13',reportIds:["4634-linux-main", "4634-linux-4216"]},
 'the-last-of-us-part-ii-remastered':{reviewed:'2026-10-12',reportIds:['2883-windows']},
 'big-helmet-heroes':{reviewed:'2026-10-12',reportIds:['3873-linux-review-20261012']},
 'hot-shots-golf-2':{reviewed:'2026-10-12',reportIds:['3839-windows-review-20261012']},
 'vampire-survivors':{reviewed:'2026-10-12',reportIds:['3745-windows-review-20261012']},
 "killing-floor-3":{reviewed:"2026-10-14",reportIds:["3413-linux-review-20261014", "3413-linux-hub-review-20261014"]},
 "pac-man-world-re-pac":{reviewed:"2026-10-14",reportIds:["3443-windows-review-20261014"]},
 'demons-souls-ppsa01342':{reviewed:'2026-10-14',reportIds:['1283-windows-review-20261012','3710-windows-review-20261014']},
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
 {slug:'dreaming-sarah',reportId:'3003-windows-review-20261014'},
 {slug:'hollow-knight-silksong',reportId:'1996-windows-review-20261014'},
 {slug:'astros-playroom',reportId:'3232-linux-review-20261014'},
 {slug:'resident-evil-village',reportId:'5169-windows-review-20261014'},
 {slug:'remnant-2',reportId:'5320-windows-review-20261014'},
 {slug:'wobbly-life',reportId:'5335-linux-review-20261014'},
];
