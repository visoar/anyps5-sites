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
 assert.equal(filterGames('',{stage:'notTested'}).length,14);
});

test('a merged technical fix does not silently create a new game report',async()=>{
 const {developmentNotes,developmentSource}=await import('../packages/content/github-progress');
 const note=developmentNotes.find(n=>n.number===3176)!;assert.equal(developmentSource(note).state,'merged');assert.ok(developmentSource(note).commit);
 assert.equal(games.find(g=>g.slug==='returnal')!.reports.length,0);
 assert.equal(games.find(g=>g.slug==='cyberpunk-2077')!.reports[0].benchmarks.length,0);
 const ratchet=games.find(g=>g.slug==='ratchet-clank-rift-apart')!;assert.equal(ratchet.reports.length,2);assert.equal(ratchet.reports.find(r=>r.id==='3338-linux')!.stage,'boot');
});
