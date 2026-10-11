import {readFile,writeFile} from 'node:fs/promises';

export async function prepareSitemapCompatibility(dir){
 const indexFile=new URL('sitemap-index.xml',dir);
 const index=await readFile(indexFile,'utf8');
 const locations=[...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
 if(!locations.length)throw Error('The generated sitemap index is empty.');
 let sitemap=index;
 if(locations.length===1){
  const location=new URL(locations[0]);
  const filename=location.pathname.split('/').at(-1);
  if(!/^sitemap-\d+\.xml$/.test(filename))throw Error('Unexpected generated sitemap filename.');
  sitemap=await readFile(new URL(filename,dir),'utf8');
  location.pathname=location.pathname.replace(filename,'sitemap.xml');
  await writeFile(indexFile,index.replace(locations[0],location.href));
 }
 // A multi-file sitemap stays an index to preserve the protocol's size limits.
 await writeFile(new URL('sitemap.xml',dir),sitemap);
}

export default function sitemapCompatibility(){
 return {name:'anyps5-sitemap-compatibility',hooks:{'astro:build:done':({dir})=>prepareSitemapCompatibility(dir)}};
}
