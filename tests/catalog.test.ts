import test from 'node:test';
import assert from 'node:assert/strict';
import {filterGames,matchesReport,games} from '../packages/content/games';
import {localPath,localeConfig,locales} from '../packages/content/locales';
test('platform, stage and evidence must match one report, not separate reports',()=>{
 assert.equal(matchesReport({platform:'windows',stage:'ingame',evidence:'official'} as any,{platform:'linux',evidence:'official'}),false);
 assert.deepEqual(filterGames('Sarah',{platform:'linux',evidence:'official'}),[]);
 assert.equal(filterGames('silt',{platform:'linux',stage:'ingame'}).length,0);
});
test('search supports exact title ID and case-insensitive names',()=>{assert.equal(filterGames('  ppsa02929  ')[0]?.slug,'dreaming-sarah');assert.equal(filterGames('SILKSONG').length,1);assert.equal(filterGames('unreported-title').length,0);assert.equal(filterGames('').length,games.length)});
test('missing official build and test date are preserved',()=>{const r=games.find(g=>g.slug==='dreaming-sarah')!.reports[0];assert.equal(r.build,null);assert.equal(r.testDate,null);assert.equal(r.benchmarks[0].fps,'60')});
test('locale paths are stable across both sites, including Arabic RTL',()=>{for(const l of locales)assert.equal(localPath('/games/silt/',l),localeConfig[l].prefix+'/games/silt/');assert.equal(localeConfig.ar.dir,'rtl')});

test('official evidence and patched gameplay are classified separately',async()=>{
 const {stageNeedsPatches}=await import('../packages/content/games');
 assert.equal(stageNeedsPatches(games.find(g=>g.slug==='dreaming-sarah')!),false);
 assert.equal(stageNeedsPatches(games.find(g=>g.slug==='astro-bot')!),true);
});

test('unspecified patches stay unknown and homebrew observations retain source scope',()=>{
 const silt=games.find(g=>g.slug==='silt')!.reports.find(r=>r.platform==='linux')!;
 assert.equal(silt.patched,null);
 const doom=games.find(g=>g.slug==='doom-homebrew')!.reports[0];
 assert.equal(doom.stage,'boot');
 assert.equal(doom.cpu,'AMD Ryzen 5 7600X');
 assert.equal(doom.benchmarks.length,0);
});


test('unreported popular games are unknown, searchable and excluded from measured platform filters',async()=>{
 const {bestStage,stageNeedsPatches}=await import('../packages/content/games');
 const game=filterGames('黑神话')[0];assert.equal(game.slug,'black-myth-wukong');assert.equal(game.titleId,null);assert.equal(game.reports.length,0);assert.equal(bestStage(game),'notTested');assert.equal(stageNeedsPatches(game),false);
 assert.equal(filterGames('wukong',{stage:'notTested'}).length,1);
 for(const filters of [{platform:'windows'},{platform:'linux'},{stage:'blocked'},{evidence:'official'},{evidence:'community'}])assert.equal(filterGames('wukong',filters).length,0);
 assert.equal(filterGames('',{stage:'notTested'}).length,10);
});

test('a merged technical fix does not silently create a new game report',async()=>{
 const {developmentNotes,developmentSource}=await import('../packages/content/github-progress');
 const note=developmentNotes.find(n=>n.number===3176)!;assert.equal(developmentSource(note).state,'merged');assert.ok(developmentSource(note).commit);
 const returnal=games.find(g=>g.slug==='returnal')!;
 assert.equal(returnal.reports.length,1);
 assert.ok(returnal.reports[0].source.endsWith('/issues/4239'));
 assert.equal(returnal.reports[0].stage,'blocked');
 assert.equal(games.find(g=>g.slug==='cyberpunk-2077')!.reports[0].benchmarks.length,0);
 const ratchet=games.find(g=>g.slug==='ratchet-clank-rift-apart')!;assert.equal(ratchet.reports.length,2);assert.equal(ratchet.reports.find(r=>r.id==='3338-linux')!.stage,'boot');
});

test('new source reviews distinguish setup screens, patched integrations and actual gameplay',async()=>{
 const {conclusionReports}=await import('../packages/content/game-conclusions');
 const {gameResearch}=await import('../packages/content/game-research');
 for(const [slug,platform,stage,patched]of [
  ['horizon-forbidden-west','linux','menu',true],
  ['resident-evil-4-remake','windows','blocked',false],
  ['returnal','windows','blocked',false],
  ['palworld','windows','menu',true],
 ]as const){
  const game=games.find(g=>g.slug===slug)!;
  const report=conclusionReports(game,platform)[0];
  assert.equal(report.stage,stage);assert.equal(report.patched,patched);
  assert.equal(report.testDate,null);assert.equal(report.benchmarks.length,0);
  assert.equal(filterGames(game.titleId!,{stage:'ingame'}).length,0);
  assert.equal(conclusionReports(game,platform==='windows'?'linux':'windows').length,0);
  assert.ok(gameResearch[slug]);
 }
 for(const slug of ['elden-ring','marvels-spider-man-2','gran-turismo-7','black-myth-wukong']){
  const game=games.find(g=>g.slug===slug)!;
  assert.equal(game.titleId,null);assert.equal(game.reports.length,0);
 }
 assert.equal(filterGames('PPSA01341').some(game=>game.slug==='marvels-spider-man-2'),false);
 assert.equal(filterGames('PPSA25380').length,0);
 const cyberpunk=games.find(g=>g.slug==='cyberpunk-2077')!;
 assert.equal(cyberpunk.reports.length,2);
 assert.equal(cyberpunk.reports[0].build,'main 961b25fe');
 assert.equal(conclusionReports(cyberpunk,'linux')[0].build,'main a11c8f7f');
 assert.equal(conclusionReports(cyberpunk,'linux')[0].stage,'blocked');
});

test('regional PPSA reports remain separate in search and platform filters',()=>{
 assert.equal(filterGames('PPSA01342',{platform:'windows',stage:'menu'})[0]?.slug,'demons-souls-ppsa01342');
 assert.equal(filterGames('PPSA01342',{platform:'linux'}).length,0);
 assert.equal(filterGames('PPSA02101',{stage:'menu'}).length,0);
 assert.equal(filterGames('PPSA02101',{platform:'linux',stage:'blocked'})[0]?.slug,'stray-ppsa02101');
 assert.equal(filterGames('PPSA02100',{stage:'menu'})[0]?.slug,'stray');
});

test('new menu and software-rendered results retain their experimental scope',()=>{
 const silk=games.find(g=>g.slug==='hollow-knight-silksong')!;
 const menu=silk.reports.find(r=>r.source.endsWith('/issues/3731'))!;
 assert.equal(menu.stage,'menu');
 assert.equal(menu.patched,true);
 const doom=games.find(g=>g.slug==='doom-homebrew')!;
 const software=doom.reports.find(r=>r.gpu?.includes('llvmpipe'))!;
 assert.equal(software.patched,true);
 assert.equal(software.evidence,'community');
 assert.equal(software.testDate,null);
 assert.ok(software.build?.includes('0e173a46'));
 assert.equal(doom.reports[0].stage,'boot');
 assert.ok(!doom.reports[0].build?.includes('0e173a46'));
});

test('localized titles and established aliases remain searchable alongside canonical names',async()=>{
 const {gameName,gameSearchText}=await import('../packages/content/game-editorial');
 for(const query of ['Uma Dimensão à Parte','Una dimensión aparte','Rift Apart'])assert.equal(filterGames(query)[0]?.slug,'ratchet-clank-rift-apart');
 assert.equal(filterGames('L’Héritage de Poudlard')[0]?.slug,'hogwarts-legacy');
 for(const query of ['黯海','淤泥','SILT'])assert.equal(filterGames(query)[0]?.slug,'silt');
 for(const query of ['Sala de Jogos do ASTRO','ASTRO’s PLAYROOM','宇宙机器人无线控制器使用指南'])assert.equal(filterGames(query)[0]?.slug,'astros-playroom');
 const ratchet=games.find(g=>g.slug==='ratchet-clank-rift-apart')!;
 assert.equal(gameName(ratchet,'pt'),'Ratchet & Clank: Uma Dimensão à Parte');
 assert.equal(gameName(ratchet,'de'),ratchet.name);
 assert.ok(gameSearchText(ratchet).includes(ratchet.titleId!));
 const regional=games.find(g=>g.slug==='demons-souls-ppsa01342')!;
 assert.ok(gameName(regional,'zh').includes('PPSA01342'));
 assert.equal(gameName(regional,'en'),regional.name);
});

test('a Linux fix notice preserves failed runs without creating a gameplay result',()=>{
 const sarah=games.find(g=>g.slug==='dreaming-sarah')!;
 assert.equal(sarah.reports.find(r=>r.id==='3180-linux-release')!.build,'v0.1.1');
 const main=sarah.reports.find(r=>r.id==='3180-linux-main')!;
 assert.equal(main.stage,'boot');assert.equal(main.build,'main c60c123f');assert.equal(main.testDate,null);
 assert.equal(filterGames('PPSA02929',{platform:'linux',stage:'ingame'}).length,0);
 assert.equal(filterGames('PPSA02929',{platform:'linux',evidence:'official'}).length,0);
 assert.equal(filterGames('PPSA02929',{platform:'linux',stage:'boot'}).length,1);
 const experimental=sarah.reports.find(r=>r.id==='3291-windows-title')!;
 assert.equal(experimental.stage,'boot');assert.equal(experimental.patched,true);
 const fps=experimental.benchmarks[0].fps;assert.ok(typeof fps!=='string');assert.equal(fps.zh,'标题画面 60');
});

test('editorial platform summaries choose evidence explicitly rather than historical maximum',async()=>{
 const {conclusionReports}=await import('../packages/content/game-conclusions');
 const silk=games.find(g=>g.slug==='hollow-knight-silksong')!;
 assert.equal(conclusionReports(silk,'windows')[0].id,'726-windows-review-20261012');
 assert.equal(conclusionReports(silk,'linux')[0].id,'1519-linux-review-20261012');
 assert.deepEqual(conclusionReports(games.find(g=>g.slug==='black-myth-wukong')!,'windows'),[]);
 const ghost=conclusionReports(games.find(g=>g.slug==='ghost-of-yotei')!,'linux');
 assert.equal(ghost[0].id,'2884-linux-review-20261012');assert.equal(ghost[0].stage,'blocked');
});

test('catalog order keeps test dates separate from review dates and puts unknown tests last',async()=>{
 const {compareCatalogEntries}=await import('../packages/content/catalog-order');
 const data=[
  {name:'A',index:0,reviewed:'2026-10-12',reports:[{testDate:null}]},
  {name:'B',index:1,reviewed:'2026-10-10',reports:[{testDate:'2026-10-09'}]},
  {name:'C',index:2,reviewed:'2026-10-11',reports:[{testDate:'2026-10-08'},{testDate:'2026-10-10'}]},
 ];
 assert.deepEqual([...data].sort((a,b)=>compareCatalogEntries(a,b,'reviewed','en')).map(g=>g.name),['A','C','B']);
 assert.deepEqual([...data].sort((a,b)=>compareCatalogEntries(a,b,'tested','en')).map(g=>g.name),['C','B','A']);
 assert.equal(compareCatalogEntries({...data[2],reports:[{testDate:'2026-10-08'}]},data[1],'tested','en')>0,true);
 assert.deepEqual([...data].reverse().sort((a,b)=>compareCatalogEntries(a,b,'featured','en')).map(g=>g.name),['A','B','C']);
});
