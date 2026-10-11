import sharp from 'sharp';
import {mkdir,writeFile} from 'node:fs/promises';
const background='#eef3e9';
const brand='packages/ui/assets/brand-mark.png';
async function icon(size:number,padding:number){
 return sharp(brand).trim().resize(size-padding*2,size-padding*2,{fit:'contain',background}).extend({top:padding,bottom:padding,left:padding,right:padding,background}).flatten({background}).png().toBuffer();
}
// ICO supports embedded PNG entries; keep real small sizes rather than one oversized icon.
async function ico(){
 const sizes=[16,32,48];const images=await Promise.all(sizes.map(size=>icon(size,size===16?1:size===32?3:4)));
 const header=Buffer.alloc(6+sizes.length*16);header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);
 let offset=header.length;
 for(let i=0;i<sizes.length;i++){
  const entry=6+i*16;header[entry]=sizes[i];header[entry+1]=sizes[i];header.writeUInt16LE(1,entry+4);header.writeUInt16LE(32,entry+6);header.writeUInt32LE(images[i].length,entry+8);header.writeUInt32LE(offset,entry+12);offset+=images[i].length;
 }
 return Buffer.concat([header,...images]);
}
for(const site of ['cc','games']){
 const dir=`anyps5.${site}/public`;
 await mkdir(dir,{recursive:true});
 await writeFile(dir+'/favicon.png',await icon(32,3));
 await writeFile(dir+'/favicon-96.png',await icon(96,8));
 await writeFile(dir+'/favicon.ico',await ico());
 await writeFile(dir+'/apple-touch-icon.png',await icon(180,20));
 const social=await sharp(`packages/ui/assets/${site==='cc'?'portal':'games'}-social.png`).resize(1200,630,{fit:'cover'}).jpeg({quality:88,mozjpeg:true}).toBuffer();
 await writeFile(dir+'/social-v2.jpg',social);
 // Preserve the previously public URL for existing shares.
 await writeFile(dir+'/social.jpg',social);
 await writeFile(dir+'/robots.txt',`User-agent: *\nAllow: /\nSitemap: https://anyps5.${site}/sitemap-index.xml\n`);
}
