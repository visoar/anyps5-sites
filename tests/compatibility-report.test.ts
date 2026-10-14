import test from 'node:test';
import assert from 'node:assert/strict';
import {compatibilityReport,reportGames,gameSearchMetadata} from '../packages/content/compatibility-report';
import {gameConclusions} from '../packages/content/game-conclusions';
import {locales} from '../packages/content/locales';

test('citable reports preserve selected source records and keep platform/date/patch scope',()=>{
 assert.equal(compatibilityReport.games.length,5);
 for(const item of compatibilityReport.games){
  const game=reportGames.find(game=>game.slug===item.slug)!;
  assert.equal(item.titleId,game.titleId);
  for(const platform of item.platforms){
   assert.deepEqual(platform.reports.map(report=>report.id),gameConclusions[game.slug].find(c=>c.platform===platform.platform)?.reportIds||[]);
   for(const report of platform.reports){assert.equal(report.platform,platform.platform);assert.deepEqual(report,game.reports.find(r=>r.id===report.id))}
  }
 }
 assert.ok(!('playablePercentage' in compatibilityReport));
});
test('search descriptions use selected evidence, never a historical maximum from another report',()=>{
 const game=reportGames.find(g=>g.slug==='gran-turismo-7')!;
 const selected=new Set(gameConclusions[game.slug].find(c=>c.platform==='windows')!.reportIds);
 const fixture={...game,reports:game.reports.map(r=>({...r,stage:selected.has(r.id)?'blocked' as const:'ingame' as const}))};
 const metadata=gameSearchMetadata(fixture,'en');
 assert.ok(metadata.description.includes('Windows: Blocked'));
 assert.ok(!metadata.description.includes('Windows: Gameplay'));
 assert.ok(metadata.title.includes(game.titleId!));
 for(const locale of locales){const metadata=gameSearchMetadata(game,locale);assert.ok(metadata.title.trim());assert.ok(!metadata.description.includes('{results}'))}
});
