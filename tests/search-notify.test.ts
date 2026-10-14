import test from 'node:test';
import assert from 'node:assert/strict';
import {changedUrls,notificationPayload,submitBatch,waitForRelease} from '../scripts/notify-search.mjs';
import {searchHosts,pageFingerprint} from '../scripts/search-manifest.mjs';

test('content fingerprints ignore checkout-dependent CSS scope IDs but retain actual content and style changes',()=>{
 const html='<style>p[data-astro-cid-abc123]{color:red}</style><p data-astro-cid-abc123>Windows: menu</p>';
 assert.equal(pageFingerprint(html),pageFingerprint(html.replaceAll('abc123','def456')));
 assert.notEqual(pageFingerprint(html),pageFingerprint(html.replace('menu','gameplay')));
 assert.notEqual(pageFingerprint(html),pageFingerprint(html.replace('color:red','color:blue')));
});

test('notification diff includes added, changed and deleted pages without resubmitting unchanged pages',()=>{
 const host='anyps5.cc';
 const old={host,pages:{'https://anyps5.cc/':'same','https://anyps5.cc/start/':'old','https://anyps5.cc/removed/':'old'}};
 const current={host,pages:{'https://anyps5.cc/':'same','https://anyps5.cc/start/':'new','https://anyps5.cc/faq/':'new'}};
 assert.deepEqual(changedUrls(old,current),['https://anyps5.cc/faq/','https://anyps5.cc/removed/','https://anyps5.cc/start/']);
 assert.throws(()=>changedUrls({...old,host:'anyps5.games'},current));
 assert.throws(()=>notificationPayload(host,['https://anyps5.games/']));
 assert.throws(()=>notificationPayload(host,['http://anyps5.cc/']));
 assert.throws(()=>notificationPayload(host,['https://anyps5.cc/?utm_source=test']));
});
test('notification waits for the matching public build and rejects differing page fingerprints',async()=>{
 const manifest={host:'anyps5.cc',revision:'release',pages:{'https://anyps5.cc/':'new'}};
 await assert.rejects(waitForRelease(manifest,{timeoutMs:1,request:async()=>new Response(JSON.stringify({...manifest,revision:'old'}))}));
 await assert.rejects(waitForRelease(manifest,{request:async()=>new Response(JSON.stringify({...manifest,pages:{'https://anyps5.cc/':'old'}}))}));
 await waitForRelease(manifest,{request:async()=>new Response(JSON.stringify(manifest))});
});
test('ownership failures and IndexNow rejection fail; 202 remains pending validation',async()=>{
 const host='anyps5.cc';let sent=false;
 await assert.rejects(submitBatch(host,['https://anyps5.cc/'],async()=>new Response('wrong')));
 const request=async(url:string)=>{if(url.endsWith('.txt'))return new Response(searchHosts[host]);sent=true;return new Response('',{status:202})};
 assert.deepEqual(await submitBatch(host,['https://anyps5.cc/'],request),{host,count:1,status:202,validationPending:true});assert.ok(sent);
 await assert.rejects(submitBatch(host,['https://anyps5.cc/'],async(url:string)=>url.endsWith('.txt')?new Response(searchHosts[host]):new Response('',{status:429})));
});
