import sharp from 'sharp';
import {createHash} from 'node:crypto';
import {mkdir,readFile,writeFile,rename} from 'node:fs/promises';
import path from 'node:path';
import sources from '../packages/content/game-media.json';
import type {LocalGameMedia,MediaAsset} from '../packages/content/game-media-assets';

const root=path.resolve(import.meta.dirname,'..');
const cache=path.join(root,'work/media-originals');
const assetRoot=path.join(root,'packages/ui/assets/games');
const manifestFile=path.join(root,'packages/content/game-media-local.json');
const refresh=process.argv.includes('--refresh');
const hosts=new Set(['image.api.playstation.com','gmedia.playstation.com','shared.akamai.steamstatic.com']);
const hash=(data:Buffer|string)=>createHash('sha256').update(data).digest('hex');
const maxBytes=25*1024*1024;
let previous:Record<string,LocalGameMedia>={};
try{previous=JSON.parse(await readFile(manifestFile,'utf8'))}catch(error){if((error as NodeJS.ErrnoException).code!=='ENOENT')throw error}
await mkdir(cache,{recursive:true});

async function download(url:string):Promise<Buffer>{
 if(!hosts.has(new URL(url).hostname)||!url.startsWith('https://'))throw Error('Unexpected media source '+url);
 const cached=path.join(cache,hash(url)+'.bin');
 if(!refresh){try{return await readFile(cached)}catch(error){if((error as NodeJS.ErrnoException).code!=='ENOENT')throw error}}
 for(let attempt=0;attempt<3;attempt++){
  const response=await fetch(url,{signal:AbortSignal.timeout(45000),headers:{'User-Agent':'AnyPS5-site-media/1.0'}});
  if((response.status===429||response.status>=500)&&attempt<2){await new Promise(resolve=>setTimeout(resolve,1000*(attempt+1)));continue}
  if(!response.ok)throw Error(`Media HTTP ${response.status}: ${url}`);
  if(!hosts.has(new URL(response.url).hostname))throw Error('Unexpected media redirect '+response.url);
  if(Number(response.headers.get('content-length'))>maxBytes)throw Error('Media exceeds size limit '+url);
  const chunks:Uint8Array[]=[];let size=0;
  for await(const chunk of response.body!){size+=chunk.length;if(size>maxBytes)throw Error('Media exceeds size limit '+url);chunks.push(chunk)}
  const data=Buffer.concat(chunks);
  // Decode before caching: a 200 HTML response must never become an image asset.
  await sharp(data).metadata();
  await writeFile(cached,data);
  return data;
 }
 throw Error('Media download failed '+url);
}

async function optimize(slug:string,name:string,url:string,old:MediaAsset|undefined|null):Promise<MediaAsset>{
 const file=`${slug}/${name}.webp`;
 const destination=path.join(assetRoot,file);
 const request=new URL(url);
 if(request.hostname==='gmedia.playstation.com'){
  // Image Serving defaults to a small preview unless width is explicit.
  request.searchParams.set('wid','1920');request.searchParams.set('fmt','jpg');request.searchParams.set('qlt','90');
 }
 const downloadUrl=request.href;
 if(!refresh&&old?.source===url&&old.downloadUrl===downloadUrl&&old.file===file){
  try{const data=await readFile(destination);if(hash(data)===old.sha256)return old}catch(error){if((error as NodeJS.ErrnoException).code!=='ENOENT')throw error}
 }
 const data=await download(downloadUrl);
 const maxEdge=name==='cover'?1200:1920;
 const encoded=await sharp(data).rotate().resize({width:maxEdge,height:maxEdge,fit:'inside',withoutEnlargement:true}).webp({quality:82,effort:5}).toBuffer({resolveWithObject:true});
 await mkdir(path.dirname(destination),{recursive:true});
 const temporary=destination+'.tmp';
 await writeFile(temporary,encoded.data);await rename(temporary,destination);
 return {file,source:url,downloadUrl,sourceSha256:hash(data),sourceBytes:data.length,sha256:hash(encoded.data),bytes:encoded.data.length,width:encoded.info.width,height:encoded.info.height};
}

const next:Record<string,LocalGameMedia>={};
const jobs:{slug:string;name:string;url:string;index?:number}[]=[];
for(const [slug,source] of Object.entries(sources)){
 if(!/^[a-z0-9-]+$/.test(slug))throw Error('Invalid media slug '+slug);
 next[slug]={cover:null,screenshots:[]};
 if(source.cover)jobs.push({slug,name:'cover',url:source.cover});
 source.screenshots.forEach((url,index)=>jobs.push({slug,name:`screenshot-${index+1}`,url,index}));
}
let completed=0,cursor=0;
async function worker(){
 while(cursor<jobs.length){
  const job=jobs[cursor++];
  const old=job.index===undefined?previous[job.slug]?.cover:previous[job.slug]?.screenshots[job.index];
  const asset=await optimize(job.slug,job.name,job.url,old);
  if(job.index===undefined)next[job.slug].cover=asset;else next[job.slug].screenshots[job.index]=asset;
  completed++;if(completed%10===0||completed===jobs.length)console.log(`Media ${completed}/${jobs.length}`);
 }
}
await Promise.all(Array.from({length:4},worker));
await writeFile(manifestFile,JSON.stringify(next,null,2)+'\n');
const assets=Object.values(next).flatMap(game=>[game.cover,...game.screenshots].filter((asset):asset is MediaAsset=>!!asset));
const before=assets.reduce((sum,asset)=>sum+asset.sourceBytes,0),after=assets.reduce((sum,asset)=>sum+asset.bytes,0);
console.log(`Saved ${assets.length} WebP assets: ${(before/1048576).toFixed(2)} MiB → ${(after/1048576).toFixed(2)} MiB (${(100*(1-after/before)).toFixed(1)}% smaller).`);
