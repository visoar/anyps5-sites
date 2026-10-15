import {games} from './games';
import {type Game,type Platform,type PlatformConclusion} from './model';

// Select representative evidence explicitly; never infer a current verdict from the highest stage.
const selections:Record<string,{reviewed:string;reportIds:string[]}>={
 "tomba-2":{reviewed:"2026-10-14",reportIds:["3646-windows-review-20261014"]},
 "pragmata":{reviewed:"2026-10-15",reportIds:["3043-windows-review-20261015"]},
 "ccleste-homebrew":{reviewed:"2026-10-16",reportIds:["5079-windows-review-20261014", "5079-linux-review-20261016"]},
 "sword-of-the-sea":{reviewed:"2026-10-15",reportIds:["5436-windows-review-20261014", "5692-windows-review-20261015"]},
 "sifu":{reviewed:"2026-10-15",reportIds:["5908-windows-review-20261015"]},
 "dying-light-2":{reviewed:"2026-10-14",reportIds:["1794-windows-review-20261014"]},
 "slay-the-princess":{reviewed:"2026-10-15",reportIds:["4369-windows-review-20261015"]},
 "high-on-life":{reviewed:"2026-10-16",reportIds:["5488-linux-amd-review-20261015", "5485-linux-review-20261016", "6205-linux-review-20261016"]},
 "ride-4":{reviewed:"2026-10-16",reportIds:["3468-linux-review-20261016"]},
 "dead-cells":{reviewed:"2026-10-14",reportIds:["3553-linux-review-20261014"]},
 "kena-bridge-of-spirits":{reviewed:"2026-10-16",reportIds:["5099-linux-review-20261014", "6205-windows-review-20261016"]},
 "void-terrarium-plus":{reviewed:"2026-10-14",reportIds:["5055-windows-review-20261014"]},
 "call-of-duty-black-ops":{reviewed:"2026-10-14",reportIds:["5389-windows-review-20261014", "5389-windows-main-review-20261014"]},
 "nhl-26":{reviewed:"2026-10-16",reportIds:["5398-linux-review-20261016"]},
 "dragon-quest-iii-hd2d":{reviewed:"2026-10-16",reportIds:["6536-linux-review-20261016"]},
 "red-dead-redemption":{reviewed:"2026-10-15",reportIds:["5895-windows-review-20261015"]},
 "mgs-peace-walker":{reviewed:"2026-10-16",reportIds:["5268-linux-review-20261016"]},
 "olliolli-world":{reviewed:"2026-10-16",reportIds:["5316-windows-review-20261016", "5316-windows-exec-fix-review-20261016"]},
 "remnant-2":{reviewed:"2026-10-14",reportIds:["5320-windows-review-20261014"]},
 "planet-coaster":{reviewed:"2026-10-14",reportIds:["5342-windows-review-20261014"]},
 "tourist-bus-simulator":{reviewed:"2026-10-14",reportIds:["5346-windows-review-20261014"]},
 "sonic-superstars":{reviewed:"2026-10-16",reportIds:["5382-windows-review-20261016", "5382-windows-main-depth-review-20261016"]},
 "diablo-ii-resurrected":{reviewed:"2026-10-15",reportIds:["5146-linux-review-20261015"]},
 "death-stranding-2":{reviewed:"2026-10-16",reportIds:["5424-windows-review-20261014", "5424-linux-review-20261016"]},
 "resident-evil-village":{reviewed:"2026-10-16",reportIds:["5169-windows-review-20261016"]},
 "astro-bot-ppsa21559":{reviewed:"2026-10-14",reportIds:["357-linux-ppsa21559-review-20261014"]},
 "astro-bot-ppsa21567":{reviewed:"2026-10-16",reportIds:["357-windows-ppsa21567-review-20261014", "357-windows-review-20261015", "357-windows-fork-review-20261015", "357-linux-review-20261016"]},
 "black-myth-wukong":{reviewed:"2026-10-14",reportIds:["4508-windows-review-20261014"]},
 "ready-or-not":{reviewed:"2026-10-15",reportIds:["4184-windows-baseline-review-20261015", "4184-windows-review-20261015"]},
 "phasmophobia":{reviewed:"2026-10-15",reportIds:["4680-windows-review-20261015"]},
 'blasphemous-2':{reviewed:'2026-10-13',reportIds:["4687-linux-review-20261013"]},
 'nhl-27':{reviewed:'2026-10-13',reportIds:["4275-windows-review-20261013"]},
 "ghost-of-tsushima-directors-cut":{reviewed:"2026-10-14",reportIds:["4461-windows-review-20261014"]},
 'lost-soul-aside':{reviewed:'2026-10-13',reportIds:["4387-windows-review-20261013"]},
 "minecraft":{reviewed:"2026-10-15",reportIds:["4216-linux-review-20261013", "5744-windows-review-20261015"]},
 "gran-turismo-7":{reviewed:"2026-10-16",reportIds:["4697-windows-review-20261015", "6350-linux-review-20261016"]},
 'horizon-forbidden-west':{reviewed:'2026-10-13',reportIds:['1616-linux']},
 'resident-evil-4-remake':{reviewed:'2026-10-13',reportIds:['2776-windows']},
 'returnal':{reviewed:'2026-10-13',reportIds:['4239-windows']},
 'palworld':{reviewed:'2026-10-13',reportIds:['3832-windows']},
 "dreaming-sarah":{reviewed:"2026-10-16",reportIds:["3003-windows-review-20261014", "5383-linux-review-20261015", "6151-linux-review-20261016"]},
 "animal-well":{reviewed:"2026-10-16",reportIds:["966-windows-review-20261016"]},
 "hollow-knight-silksong":{reviewed:"2026-10-16",reportIds:["1519-linux-review-20261012", "3731-linux-review-20261012", "726-windows-review-20261016"]},
 "silt":{reviewed:"2026-10-14",reportIds:["2126-windows-review-20261014", "2126-linux"]},
 'balatro':{reviewed:'2026-10-12',reportIds:['1142-windows']},
 "hades":{reviewed:"2026-10-16",reportIds:["3234-linux", "3234-windows-review-20261016"]},
 "hades-ii":{reviewed:"2026-10-16",reportIds:["1965-linux", "6206-linux-review-20261016"]},
 "astro-bot":{reviewed:"2026-10-16",reportIds:["357-windows", "357-windows-review-20261016", "6284-windows-review-20261016", "357-linux-draw-ahead-review-20261016", "357-linux-user-masks-review-20261016"]},
 "astros-playroom":{reviewed:"2026-10-14",reportIds:["3232-linux-review-20261014"]},
 "demons-souls":{reviewed:"2026-10-15",reportIds:["1283-linux-baseline-review-20261015", "1283-linux-review-20261015"]},
 "ghost-of-yotei":{reviewed:"2026-10-16",reportIds:["675-windows-review-20261016", "675-linux-review-20261016", "675-windows-4090-review-20261016"]},
 'god-of-war-sons-of-sparta':{reviewed:'2026-10-12',reportIds:['1742-windows']},
 'gta-v':{reviewed:'2026-10-12',reportIds:['1203-windows']},
 "epic-mickey-rebrushed":{reviewed:"2026-10-16",reportIds:["2255-linux-review-20261014", "6236-windows-review-20261016"]},
 '3d-mini-golf':{reviewed:'2026-10-12',reportIds:['2431-windows']},
 'hello-kitty-island-adventure':{reviewed:'2026-10-12',reportIds:['2690-windows']},
 'minecraft-preview':{reviewed:'2026-10-12',reportIds:['1277-windows-review-20261012']},
 'sonic-origins':{reviewed:'2026-10-12',reportIds:['2021-linux']},
 "stray":{reviewed:"2026-10-15",reportIds:["2461-linux-review-20261015", "2461-linux-perf-review-20261015", "5879-windows-review-20261015"]},
 "wobbly-life":{reviewed:"2026-10-16",reportIds:["2211-linux-review-20261016"]},
 'rise-of-the-ronin':{reviewed:'2026-10-12',reportIds:['2171-linux']},
 "ratchet-clank-rift-apart":{reviewed:"2026-10-16",reportIds:["2172-linux-review-20261016"]},
 'star-wars-galactic-racer':{reviewed:'2026-10-12',reportIds:['3086-windows']},
 "doom-homebrew":{reviewed:"2026-10-15",reportIds:["2475-linux-intel-review-20261013", "2475-linux-nvidia-archived-review-20261013", "2475-linux-amd-archived-review-20261013", "2475-windows-review-20261015"]},
 "cyberpunk-2077":{reviewed:"2026-10-16",reportIds:["4634-linux-review-20261016"]},
 "the-last-of-us-part-ii-remastered":{reviewed:"2026-10-15",reportIds:["5468-windows-review-20261015"]},
 'big-helmet-heroes':{reviewed:'2026-10-12',reportIds:['3873-linux-review-20261012']},
 'hot-shots-golf-2':{reviewed:'2026-10-12',reportIds:['3839-windows-review-20261012']},
 'vampire-survivors':{reviewed:'2026-10-12',reportIds:['3745-windows-review-20261012']},
 "killing-floor-3":{reviewed:"2026-10-15",reportIds:["3413-linux-review-20261015"]},
 "pac-man-world-re-pac":{reviewed:"2026-10-14",reportIds:["3443-windows-review-20261014"]},
 'demons-souls-ppsa01342':{reviewed:'2026-10-14',reportIds:['1283-windows-review-20261012','3710-windows-review-20261014']},
 "stray-ppsa02101":{reviewed:"2026-10-15",reportIds:["5894-linux-review-20261015"]},
 "ea-sports-ufc-6":{reviewed:"2026-10-16",reportIds:["5996-windows-review-20261016", "5996-linux-review-20261016", "5996-windows-amd-menu-review-20261016"]},
 "syobon-action-homebrew":{reviewed:"2026-10-15",reportIds:["5932-windows-review-20261015"]},
 "dave-the-diver":{reviewed:"2026-10-16",reportIds:["5963-windows-review-20261015", "5963-windows-baseline-review-20261015", "5963-linux-review-20261015", "5436-windows-review-20261016"]},
 "marvels-wolverine":{reviewed:"2026-10-16",reportIds:["5516-windows-review-20261015", "5516-linux-review-20261016"]},
 "resident-evil-2-remake":{reviewed:"2026-10-16",reportIds:["5935-windows-review-20261015", "5935-windows-review-20261016"]},
 "doom-doom-ii":{reviewed:"2026-10-16",reportIds:["5921-windows-baseline-review-20261015", "5921-windows-review-20261015", "5921-linux-review-20261016"]},
 "heretic-hexen":{reviewed:"2026-10-15",reportIds:["5912-windows-baseline-review-20261015", "5912-windows-review-20261015"]},
 "castlevania-belmonts-curse":{reviewed:"2026-10-16",reportIds:["5832-linux-review-20261016"]},
 "onimusha-way-of-the-sword":{reviewed:"2026-10-16",reportIds:["5769-windows-review-20261016"]},
 "cat-quest-iii":{reviewed:"2026-10-15",reportIds:["5888-windows-review-20261015"]},
 "withering-rooms":{reviewed:"2026-10-15",reportIds:["5809-linux-review-20261015"]},
 "007-first-light":{reviewed:"2026-10-16",reportIds:["6172-linux-review-20261016"]},
 "void-terrarium-ppsa03042":{reviewed:"2026-10-15",reportIds:["5665-linux-review-20261015"]},
 "hollow-knight-voidheart":{reviewed:"2026-10-15",reportIds:["5593-windows-review-20261015"]},
 "marvel-cosmic-invasion":{reviewed:"2026-10-15",reportIds:["5557-windows-review-20261015"]},
 "mgs4-master-collection":{reviewed:"2026-10-15",reportIds:["5518-windows-review-20261015"]},
 "saros":{reviewed:"2026-10-16",reportIds:["1504-linux-review-20261015", "1504-linux-review-20261016", "1504-windows-review-20261016"]},
 "fifa-21":{reviewed:"2026-10-15",reportIds:["5954-windows-review-20261015"]},
 "lies-of-p":{reviewed:"2026-10-15",reportIds:["5983-windows-review-20261015"]},
 "ghostrunner":{reviewed:"2026-10-15",reportIds:["5951-windows-review-20261015"]},
 "guardians-of-the-galaxy":{reviewed:"2026-10-16",reportIds:["6526-linux-review-20261016"]},
 "hello-neighbor-2":{reviewed:"2026-10-15",reportIds:["5529-windows-review-20261015"]},
 "steins-gate-reboot":{reviewed:"2026-10-15",reportIds:["5677-linux-review-20261015"]},
 "resonance-plague-tale-legacy":{reviewed:"2026-10-15",reportIds:["5922-windows-review-20261015"]},
 "puyo-puyo-tetris-2":{reviewed:"2026-10-16",reportIds:["6421-windows-review-20261016"]},
 "ea-sports-fc-27":{reviewed:"2026-10-16",reportIds:["6344-windows-review-20261016"]},
 "tevi":{reviewed:"2026-10-16",reportIds:["6496-windows-review-20261016"]},
 "quake":{reviewed:"2026-10-16",reportIds:["6477-linux-review-20261016"]},
 "lodoss-deedlit":{reviewed:"2026-10-16",reportIds:["6460-linux-review-20261016"]},
 "super-mario-sunshine-homebrew":{reviewed:"2026-10-16",reportIds:["6468-windows-review-20261016"]},
 "goosebumps-terror-little-creek":{reviewed:"2026-10-16",reportIds:["6434-windows-review-20261016"]},
 "plants-vs-zombies-replanted":{reviewed:"2026-10-16",reportIds:["6404-windows-review-20261016"]},
 "code-violet":{reviewed:"2026-10-16",reportIds:["6256-windows-review-20261016"]},
 "blasphemous-2-ppsa13580":{reviewed:"2026-10-16",reportIds:["4687-windows-review-20261016"]},
 "little-nightmares-enhanced":{reviewed:"2026-10-16",reportIds:["6275-windows-review-20261016"]},
 "horizon-call-of-the-mountain":{reviewed:"2026-10-16",reportIds:["6214-windows-review-20261016"]},
 "mxgp-26":{reviewed:"2026-10-16",reportIds:["6117-linux-review-20261016"]},
 "borderlands-4":{reviewed:"2026-10-16",reportIds:["6294-linux-review-20261016"]},
 "sackboy-big-adventure":{reviewed:"2026-10-16",reportIds:["6236-windows-review-20261016"]},
 "sonic-unleashed-recompiled":{reviewed:"2026-10-16",reportIds:["4443-windows-review-20261016"]},
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
 {
  "slug": "plants-vs-zombies-replanted",
  "reportId": "6404-windows-review-20261016"
 },
 {
  "slug": "tevi",
  "reportId": "6496-windows-review-20261016"
 },
 {
  "slug": "hollow-knight-silksong",
  "reportId": "726-windows-review-20261016"
 },
 {
  "slug": "hades",
  "reportId": "3234-windows-review-20261016"
 },
 {
  "slug": "astro-bot",
  "reportId": "357-linux-user-masks-review-20261016"
 },
 {
  "slug": "blasphemous-2-ppsa13580",
  "reportId": "4687-windows-review-20261016"
 }
];
