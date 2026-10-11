import test from 'node:test';
import assert from 'node:assert/strict';
import {trackEvent} from '../packages/ui/analytics';

test('analytics isolates production domains and keeps locale context',()=>{
 const windowDescriptor=Object.getOwnPropertyDescriptor(globalThis,'window');
 const documentDescriptor=Object.getOwnPropertyDescriptor(globalThis,'document');
 const events:{name:string;data:Record<string,unknown>}[]=[];
 const mockWindow={location:{hostname:'localhost'},umami:{track:(name:string,data:Record<string,unknown>)=>{events.push({name,data})}}};
 try{
  Object.defineProperty(globalThis,'window',{configurable:true,value:mockWindow});
  Object.defineProperty(globalThis,'document',{configurable:true,value:{body:{dataset:{site:'games',locale:'zh'}}}});
  for(const hostname of ['localhost','127.0.0.1','preview.example.com','anyps5.games.example.com']){
   mockWindow.location.hostname=hostname;trackEvent('catalog_search',{query_length:4,result_count:1});
  }
  assert.equal(events.length,0);
  for(const hostname of ['anyps5.cc','www.anyps5.cc','anyps5.games','www.anyps5.games']){
   mockWindow.location.hostname=hostname;trackEvent('catalog_search',{query_length:4,result_count:1});
  }
  assert.equal(events.length,4);
  assert.deepEqual(events[0],{name:'catalog_search',data:{site:'games',locale:'zh',query_length:4,result_count:1}});
 }finally{
  if(windowDescriptor)Object.defineProperty(globalThis,'window',windowDescriptor);else Reflect.deleteProperty(globalThis,'window');
  if(documentDescriptor)Object.defineProperty(globalThis,'document',documentDescriptor);else Reflect.deleteProperty(globalThis,'document');
 }
});

test('missing or rejected analytics never interrupts an interaction',async()=>{
 const windowDescriptor=Object.getOwnPropertyDescriptor(globalThis,'window');
 const documentDescriptor=Object.getOwnPropertyDescriptor(globalThis,'document');
 const mockWindow:{location:{hostname:string};umami?:{track:()=>Promise<unknown>}}={location:{hostname:'anyps5.cc'}};
 try{
  Object.defineProperty(globalThis,'window',{configurable:true,value:mockWindow});
  Object.defineProperty(globalThis,'document',{configurable:true,value:{body:{dataset:{site:'cc',locale:'en'}}}});
  assert.doesNotThrow(()=>trackEvent('guide_open',{guide:'/start/'}));
  mockWindow.umami={track:()=>Promise.reject(new Error('Tracker unavailable'))};
  assert.doesNotThrow(()=>trackEvent('guide_open',{guide:'/start/'}));
  await new Promise(resolve=>setImmediate(resolve));
 }finally{
  if(windowDescriptor)Object.defineProperty(globalThis,'window',windowDescriptor);else Reflect.deleteProperty(globalThis,'window');
  if(documentDescriptor)Object.defineProperty(globalThis,'document',documentDescriptor);else Reflect.deleteProperty(globalThis,'document');
 }
});
