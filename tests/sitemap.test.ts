import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {prepareSitemapCompatibility} from '../scripts/sitemap-compat.mjs';

test('single sitemap exposes a URL list and an index without breaking the old chunk',async()=>{
 const folder=await mkdtemp(join(tmpdir(),'anyps5-sitemap-'));
 const dir=pathToFileURL(folder+'/');
 const urls='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://anyps5.cc/zh/</loc></url></urlset>';
 try{
  await writeFile(new URL('sitemap-0.xml',dir),urls);
  await writeFile(new URL('sitemap-index.xml',dir),'<sitemapindex><sitemap><loc>https://anyps5.cc/sitemap-0.xml</loc></sitemap></sitemapindex>');
  await prepareSitemapCompatibility(dir);
  assert.equal(await readFile(new URL('sitemap.xml',dir),'utf8'),urls);
  assert.equal(await readFile(new URL('sitemap-0.xml',dir),'utf8'),urls);
  assert.equal(await readFile(new URL('sitemap-index.xml',dir),'utf8'),'<sitemapindex><sitemap><loc>https://anyps5.cc/sitemap.xml</loc></sitemap></sitemapindex>');
 }finally{await rm(folder,{recursive:true,force:true})}
});

test('multiple chunks preserve their index instead of creating an oversized or recursive sitemap',async()=>{
 const folder=await mkdtemp(join(tmpdir(),'anyps5-sitemap-'));
 const dir=pathToFileURL(folder+'/');
 const index='<sitemapindex><sitemap><loc>https://anyps5.games/sitemap-0.xml</loc></sitemap><sitemap><loc>https://anyps5.games/sitemap-1.xml</loc></sitemap></sitemapindex>';
 try{
  await writeFile(new URL('sitemap-index.xml',dir),index);
  await prepareSitemapCompatibility(dir);
  assert.equal(await readFile(new URL('sitemap.xml',dir),'utf8'),index);
  assert.equal(await readFile(new URL('sitemap-index.xml',dir),'utf8'),index);
 }finally{await rm(folder,{recursive:true,force:true})}
});
