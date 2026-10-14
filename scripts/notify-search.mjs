import {readFile,writeFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {searchHosts} from './search-manifest.mjs';

export function changedUrls(previous,current){
 if(previous&&previous.host!==current.host)throw Error('Search state crosses hosts');
 const old=previous?.pages||{};
 return [...new Set([...Object.keys(current.pages).filter(url=>old[url]!==current.pages[url]),...Object.keys(old).filter(url=>!(url in current.pages))])].sort();
}
export function notificationPayload(host,urls){
 const key=searchHosts[host];if(!key||urls.length>10000)throw Error('Invalid IndexNow batch');
 for(const raw of urls){const url=new URL(raw);if(url.origin!==`https://${host}`||url.search||url.hash)throw Error('Invalid notification URL '+raw)}
 return {host,key,keyLocation:`https://${host}/${key}.txt`,urlList:urls};
}
export async function waitForRelease(manifest,{request=fetch,timeoutMs=900000,intervalMs=15000}={}){
 const deadline=Date.now()+timeoutMs;
 do{
  try{
   const response=await request(`https://${manifest.host}/search-manifest.json`,{cache:'no-store',signal:AbortSignal.timeout(15000)});
   const live=response.ok?await response.json():null;
   if(live?.host===manifest.host&&live.revision===manifest.revision){
    if(JSON.stringify(live.pages)!==JSON.stringify(manifest.pages))throw Error('Published page fingerprints differ from this build');
    return;
   }
  }catch(error){if(error.message==='Published page fingerprints differ from this build')throw error}
  if(Date.now()>=deadline)break;
  await new Promise(resolve=>setTimeout(resolve,Math.min(intervalMs,Math.max(0,deadline-Date.now()))));
 }while(Date.now()<deadline);
 throw Error('Release not published before timeout: '+manifest.host);
}
export async function submitBatch(host,urls,request=fetch){
 const payload=notificationPayload(host,urls);
 const proof=await request(payload.keyLocation,{signal:AbortSignal.timeout(15000)});
 if(!proof.ok||(await proof.text()).trim()!==payload.key)throw Error('IndexNow ownership file is unavailable: '+host);
 const response=await request('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify(payload),signal:AbortSignal.timeout(30000)});
 if(![200,202].includes(response.status))throw Error(`IndexNow rejected ${host}: HTTP ${response.status}`);
 return {host,count:urls.length,status:response.status,validationPending:response.status===202};
}
async function main(){
 const submit=process.argv.includes('--submit');const stateDir=path.resolve('.cache/search-notify');
 await mkdir(stateDir,{recursive:true});
 for(const host of Object.keys(searchHosts)){
  const current=JSON.parse(await readFile(`${host}/dist/search-manifest.json`,'utf8'));
  const stateFile=path.join(stateDir,host+'.json');let previous;
  try{previous=JSON.parse(await readFile(stateFile,'utf8'))}catch(error){if(error.code!=='ENOENT')throw error}
  const urls=changedUrls(previous,current);
  console.log(JSON.stringify({host,mode:submit?'submit':'plan',changed:urls.length,firstSubmission:!previous}));
  if(!submit)continue;
  await waitForRelease(current);
  for(let start=0;start<urls.length;start+=10000)console.log(JSON.stringify(await submitBatch(host,urls.slice(start,start+10000))));
  await writeFile(stateFile,JSON.stringify(current));
 }
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)main().catch(error=>{console.error(error.message);process.exitCode=1});
