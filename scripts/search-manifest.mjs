import {createHash} from 'node:crypto';
import {readFile,readdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {parse} from 'node-html-parser';

export const searchHosts={
 'anyps5.cc':'89d76327ecf743b3a606d96b2c8b7f53',
 'anyps5.games':'6d51f93c28134fc480c82764e34c9af2',
};
async function files(dir){
 const entries=await readdir(dir,{withFileTypes:true});
 return (await Promise.all(entries.filter(e=>!['node_modules','dist','.astro','.cache','.DS_Store','__pycache__'].includes(e.name)&&!e.name.startsWith('.env')).map(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]))).flat().sort();
}
export function pageFingerprint(html){
 // Astro's CSS scope IDs depend on the checkout path, not page content.
 return createHash('sha256').update(html.replace(/data-astro-cid-[a-z0-9]+/gi,'data-astro-cid')).digest('hex');
}
export async function createSearchManifest(root,host,sourceRoot){
 if(!searchHosts[host])throw Error('Unknown search host');
 const pages={};
 for(const file of await files(root)){
  if(!file.endsWith('.html'))continue;
  const html=await readFile(file,'utf8');const dom=parse(html);
  if(dom.querySelector('meta[name=robots]')?.getAttribute('content')?.includes('noindex'))continue;
  const url=dom.querySelector('link[rel=canonical]')?.getAttribute('href');
  if(!url||new URL(url).origin!==`https://${host}`)throw Error('Invalid canonical in '+file);
  pages[url]=pageFingerprint(html);
 }
 // Hash build inputs rather than a Git SHA: the Docker build has no .git directory.
 const hash=createHash('sha256');
 const inputs=[path.join(sourceRoot,'package.json'),path.join(sourceRoot,'package-lock.json'),...await files(path.join(sourceRoot,'packages')),...await files(path.join(sourceRoot,host)),path.join(sourceRoot,'deploy',host==='anyps5.cc'?'nginx-cc.conf':'nginx-games.conf'),path.join(sourceRoot,'scripts/search-manifest.mjs'),path.join(sourceRoot,'scripts/sitemap-compat.mjs')].sort();
 for(const file of inputs)hash.update(path.relative(sourceRoot,file)).update('\0').update(await readFile(file)).update('\0');
 const manifest={host,revision:hash.digest('hex'),pages};
 await writeFile(path.join(root,'search-manifest.json'),JSON.stringify(manifest));
 await writeFile(path.join(root,searchHosts[host]+'.txt'),searchHosts[host]);
 return manifest;
}
export default function searchManifest(host){
 return {name:'anyps5-search-manifest',hooks:{'astro:build:done':({dir})=>createSearchManifest(fileURLToPath(dir),host,fileURLToPath(new URL('../',import.meta.url)))}};
}
