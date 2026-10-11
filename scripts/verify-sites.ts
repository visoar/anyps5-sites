import {readFile,readdir,stat} from 'node:fs/promises';
import {parse} from 'node-html-parser';
import path from 'node:path';
const roots={'anyps5.cc':path.resolve('anyps5.cc/dist'),'anyps5.games':path.resolve('anyps5.games/dist')};
async function walk(dir:string):Promise<string[]>{const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?walk(path.join(dir,e.name)):Promise.resolve([path.join(dir,e.name)])))).flat()}
let pages=0;const problems:string[]=[];
const indexableUrls=new Map(Object.keys(roots).map(host=>[host,new Set<string>()]));
for(const [host,root]of Object.entries(roots))for(const file of (await walk(root)).filter(f=>f.endsWith('.html'))){
 const dom=parse(await readFile(file,'utf8'));const rel=path.relative(root,file);const url='https://'+host+'/'+rel.replace(/index\.html$/,'');pages++;
 if(!dom.querySelector('html')?.getAttribute('lang')||!dom.querySelector('title')?.textContent||!dom.querySelector('meta[name=description]')?.getAttribute('content'))problems.push(rel+': missing metadata');
 const canonical=dom.querySelector('link[rel=canonical]')?.getAttribute('href');if(!canonical?.startsWith('https://'+host+'/'))problems.push(rel+': invalid canonical');
 if(canonical&&!dom.querySelector('meta[name=robots]')?.getAttribute('content')?.includes('noindex'))indexableUrls.get(host)!.add(canonical);
 for(const node of dom.querySelectorAll('a[href],link[rel=alternate][href],img[src],script[src],link[rel=stylesheet][href]')){
  const raw=node.getAttribute('href')||node.getAttribute('src')!;if(!raw||raw.startsWith('#'))continue;
  const target=new URL(raw,url);const targetRoot=roots[target.hostname as keyof typeof roots];if(!targetRoot)continue;
  const filename=path.join(targetRoot,decodeURIComponent(target.pathname),target.pathname.endsWith('/')?'index.html':'');
  try{await stat(filename)}catch{if(target.pathname!=='/404.html')problems.push(`${host}/${rel}: broken link ${raw}`)}
 }
 if(rel!=='404.html'&&dom.querySelectorAll('link[rel=alternate][hreflang]').length!==8)problems.push(rel+': incomplete hreflang');
}
async function sitemapUrls(host:string,root:string,filename:string):Promise<string[]>{
 const dom=parse(await readFile(path.join(root,filename),'utf8'));
 if(dom.querySelector('urlset'))return dom.querySelectorAll('url > loc').map(node=>node.textContent);
 if(!dom.querySelector('sitemapindex'))throw Error(`${host}/${filename}: invalid sitemap root`);
 const chunks=dom.querySelectorAll('sitemap > loc');
 if(!chunks.length)throw Error(`${host}/${filename}: empty sitemap index`);
 return (await Promise.all(chunks.map(async node=>{
  const url=new URL(node.textContent);
  if(url.origin!=='https://'+host)throw Error(`${host}/${filename}: external sitemap ${url}`);
  const chunk=parse(await readFile(path.join(root,url.pathname),'utf8'));
  if(!chunk.querySelector('urlset'))throw Error(`${host}/${filename}: child must be a URL list`);
  return chunk.querySelectorAll('url > loc').map(node=>node.textContent);
 }))).flat();
}
for(const [host,root] of Object.entries(roots)){
 const expected=indexableUrls.get(host)!;
 for(const file of ['sitemap.xml','sitemap-index.xml']){
  const urls=await sitemapUrls(host,root,file);
  if(urls.length!==expected.size||new Set(urls).size!==expected.size||urls.some(url=>!expected.has(url)))problems.push(`${host}/${file}: sitemap does not match indexable canonical pages`);
 }
 const robots=await readFile(path.join(root,'robots.txt'),'utf8');
 if(!robots.includes(`Sitemap: https://${host}/sitemap.xml`))problems.push(`${host}: robots.txt must reference /sitemap.xml`);
}
if(problems.length)throw Error([...new Set(problems)].join('\n'));
console.log(`Verified ${pages} static pages: metadata, seven-language alternates, internal links/assets, and both sitemap entrypoints.`);
