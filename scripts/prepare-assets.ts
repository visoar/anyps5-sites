import sharp from 'sharp';
import {mkdir,writeFile} from 'node:fs/promises';
for(const site of ['cc','games']){
 const dir=`anyps5.${site}/public`;
 await mkdir(dir,{recursive:true});
 await sharp('packages/ui/assets/brand-mark.png').trim().resize(26,26,{fit:'contain',background:'#eef3e9'}).extend({top:3,bottom:3,left:3,right:3,background:'#eef3e9'}).flatten({background:'#eef3e9'}).png().toFile(dir+'/favicon.png');
 await sharp('packages/ui/assets/brand-mark.png').trim().resize(148,148,{fit:'contain',background:'#eef3e9'}).extend({top:16,bottom:16,left:16,right:16,background:'#eef3e9'}).flatten({background:'#eef3e9'}).png().toFile(dir+'/apple-touch-icon.png');
 await sharp(`packages/ui/assets/${site==='cc'?'portal':'games'}-hero.png`).resize(1200,630,{fit:'cover'}).jpeg({quality:82}).toFile(dir+'/social.jpg');
 await writeFile(dir+'/robots.txt',`User-agent: *\nAllow: /\nSitemap: https://anyps5.${site}/sitemap-index.xml\n`);
}
