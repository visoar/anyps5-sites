import {readFile,readdir,stat} from 'node:fs/promises';
import {parse} from 'node-html-parser';
import path from 'node:path';
const roots={'anyps5.cc':path.resolve('anyps5.cc/dist'),'anyps5.games':path.resolve('anyps5.games/dist')};
async function walk(dir:string):Promise<string[]>{const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?walk(path.join(dir,e.name)):Promise.resolve([path.join(dir,e.name)])))).flat()}
let pages=0;const problems:string[]=[];
for(const [host,root]of Object.entries(roots))for(const file of (await walk(root)).filter(f=>f.endsWith('.html'))){
 const dom=parse(await readFile(file,'utf8'));const rel=path.relative(root,file);const url='https://'+host+'/'+rel.replace(/index\.html$/,'');pages++;
 if(!dom.querySelector('html')?.getAttribute('lang')||!dom.querySelector('title')?.textContent||!dom.querySelector('meta[name=description]')?.getAttribute('content'))problems.push(rel+': missing metadata');
 const canonical=dom.querySelector('link[rel=canonical]')?.getAttribute('href');if(!canonical?.startsWith('https://'+host+'/'))problems.push(rel+': invalid canonical');
 for(const node of dom.querySelectorAll('a[href],link[rel=alternate][href],img[src],script[src],link[rel=stylesheet][href]')){
  const raw=node.getAttribute('href')||node.getAttribute('src')!;if(!raw||raw.startsWith('#'))continue;
  const target=new URL(raw,url);const targetRoot=roots[target.hostname as keyof typeof roots];if(!targetRoot)continue;
  const filename=path.join(targetRoot,decodeURIComponent(target.pathname),target.pathname.endsWith('/')?'index.html':'');
  try{await stat(filename)}catch{if(target.pathname!=='/404.html')problems.push(`${host}/${rel}: broken link ${raw}`)}
 }
 if(rel!=='404.html'&&dom.querySelectorAll('link[rel=alternate][hreflang]').length!==8)problems.push(rel+': incomplete hreflang');
}
if(problems.length)throw Error([...new Set(problems)].join('\n'));
console.log(`Verified ${pages} static pages: metadata, seven-language alternates, and internal links/assets.`);
