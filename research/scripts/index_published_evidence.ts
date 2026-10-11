import {writeFileSync} from 'node:fs';
import {games} from '../../packages/content/games';
import {REVIEW_DATE} from '../../packages/content/model';

// Index curated evidence; keep raw upstream text in research/raw only.
const index={
 scope:'Published editorial evidence, not a complete upstream report inventory or independent reproduction.',
 games:games.map(game=>({
  slug:game.slug,name:game.name,titleId:game.titleId,reviewed:game.reviewed||REVIEW_DATE,
  reports:game.reports.map(report=>({
   id:report.id,source:report.source,sourceUpdated:report.updated,testDate:report.testDate,
   platform:report.platform,stage:report.stage,evidence:report.evidence,
   version:report.version,build:report.build,patched:report.patched,
  })),
 })),
};
writeFileSync(new URL('../published-evidence-index.json',import.meta.url),JSON.stringify(index,null,2)+'\n');
