import test from 'node:test';
import assert from 'node:assert/strict';
import {browserLocale,browserLanguageRedirect,initLanguageNavigation,languagePreferenceKey,languageRedirectKey,languageUrl,type LanguageAlternative} from '../packages/ui/language';
import {localeConfig,locales,localPath} from '../packages/content/locales';
import {languageNotice} from '../packages/content/language-notice';

const alternatives:LanguageAlternative[]=locales.map(locale=>({locale,href:localPath('/games/silt/',locale)}));

test('browser language matching respects preference order and regional language tags',()=>{
 for(const [language,locale] of [['zh-CN','zh'],['zh-SG','zh'],['zh-Hans','zh'],['ar-SA','ar'],['pt-BR','pt'],['de-DE','de'],['fr-CA','fr'],['es-MX','es'],['EN-us','en']])assert.equal(browserLocale([language]),locale);
 assert.equal(browserLocale(['ja-JP','fr-CA','zh-CN']),'fr');
 assert.equal(browserLocale(['en-US','zh-CN']),'en');
 assert.equal(browserLocale(['ja-JP','ko-KR']),undefined);
});

test('both sites redirect English deep links to the same translation with query and fragment intact',()=>{
 for(const host of ['anyps5.cc','anyps5.games']){
  const path=host==='anyps5.cc'?'/start/':'/games/silt/';
  const pageAlternatives=locales.map(locale=>({locale,href:localPath(path,locale)}));
  const current=new URL(`https://${host}${path}?q=a%2Bb&platform=linux#report-linux`);
  assert.equal(browserLanguageRedirect(current,['zh-CN'],null,pageAlternatives)?.href,`https://${host}/zh${path}?q=a%2Bb&platform=linux#report-linux`);
  assert.equal(browserLanguageRedirect(new URL(`https://${host}${path.slice(0,-1)}`),['fr-CA'],null,pageAlternatives)?.pathname,'/fr'+path);
 }
});

test('every saved manual choice, including English, suppresses browser redirects',()=>{
 for(const preference of locales)assert.equal(browserLanguageRedirect(new URL('https://anyps5.games/games/silt/'),['zh-CN'],preference,alternatives),undefined);
});

test('explicit language links, English browsers, and unpublished translations keep the current page',()=>{
 for(const locale of locales.filter(locale=>locale!=='en'))assert.equal(browserLanguageRedirect(new URL('https://anyps5.games'+localPath('/games/silt/',locale)),['zh-CN'],null,alternatives),undefined);
 const current=new URL('https://anyps5.games/games/silt/');
 assert.equal(browserLanguageRedirect(current,['en-US','zh-CN'],null,alternatives),undefined);
 assert.equal(browserLanguageRedirect(current,['ja'],null,alternatives),undefined);
 assert.equal(browserLanguageRedirect(current,['zh-CN','fr'],null,alternatives.filter(alternative=>alternative.locale!=='zh')),undefined);
 assert.equal(browserLanguageRedirect(current,['zh-CN'],null,[]),undefined);
 assert.equal(browserLanguageRedirect(current,['zh-CN'],null,[{locale:'en',href:'/other/'},{locale:'zh',href:'/zh/other/'}]),undefined);
 assert.equal(browserLanguageRedirect(current,['zh-CN'],null,[{locale:'en',href:current.href},{locale:'zh',href:'https://external.example/zh/games/silt/'}]),undefined);
});

test('localized notices name their own language and language links preserve page state',()=>{
 for(const locale of locales)assert.ok(languageNotice(locale).switched.includes(localeConfig[locale].name));
 assert.equal(languageNotice('zh').switched,'已根据浏览器语言切换为简体中文');
 assert.equal(languageUrl('/games/silt/',new URL('https://anyps5.games/zh/games/silt/?q=silt#media')).href,'https://anyps5.games/games/silt/?q=silt#media');
});

class MemoryStorage {
 data=new Map<string,string>();
 getItem(key:string){return this.data.get(key)??null}
 setItem(key:string,value:string){this.data.set(key,value)}
 removeItem(key:string){this.data.delete(key)}
}
class MockLink extends EventTarget {
 dataset:{languageChoice:string};
 constructor(public href:string,locale:string,private picker=true){super();this.dataset={languageChoice:locale}}
 closest(){return this.picker?{}:null}
}
function browserFixture(callback:(context:{local:MemoryStorage;session:MemoryStorage;load:(href:string)=>{links:MockLink[];notice:{hidden:boolean};dismiss:EventTarget};redirects:string[];browser:any})=>void){
 const previousWindow=Object.getOwnPropertyDescriptor(globalThis,'window');
 const previousDocument=Object.getOwnPropertyDescriptor(globalThis,'document');
 const local=new MemoryStorage();const session=new MemoryStorage();const redirects:string[]=[];
 const browser={localStorage:local,sessionStorage:session,navigator:{languages:['zh-CN'],language:'zh-CN'},location:{href:'',replace:(href:string)=>redirects.push(href)}};
 const load=(href:string)=>{
  browser.location.href=href;
  const links=alternatives.map(alternative=>new MockLink(new URL(alternative.href,href).href,alternative.locale));
  if(new URL(href).pathname.startsWith('/zh/'))links.push(new MockLink(new URL('/games/silt/',href).href,'en',false));
  const dismiss=new EventTarget();const notice={hidden:true,querySelector:()=>dismiss};
  Object.defineProperty(globalThis,'document',{configurable:true,value:{querySelectorAll:()=>links,querySelector:()=>notice}});
  initLanguageNavigation();
  return {links,notice,dismiss};
 };
 try{
  Object.defineProperty(globalThis,'window',{configurable:true,value:browser});
  callback({local,session,load,redirects,browser});
 }finally{
  if(previousWindow)Object.defineProperty(globalThis,'window',previousWindow);else Reflect.deleteProperty(globalThis,'window');
  if(previousDocument)Object.defineProperty(globalThis,'document',previousDocument);else Reflect.deleteProperty(globalThis,'document');
 }
}

test('automatic redirect shows one notice; dismissing it saves no choice and still allows later redirects',()=>browserFixture(({load,local,session,redirects})=>{
 load('https://anyps5.games/games/silt/?q=silt#media');
 assert.equal(redirects[0],'https://anyps5.games/zh/games/silt/?q=silt#media');
 assert.equal(local.getItem(languagePreferenceKey),null);
 const translated=load(redirects[0]);
 assert.equal(translated.notice.hidden,false);
 assert.equal(session.getItem(languageRedirectKey),null);
 translated.dismiss.dispatchEvent(new Event('click'));
 assert.equal(translated.notice.hidden,true);
 assert.equal(local.getItem(languagePreferenceKey),null);
 assert.equal(load(redirects[0]).notice.hidden,true);
 load('https://anyps5.games/games/silt/');
 assert.equal(redirects.length,2);
}));

test('returning to English saves a manual preference and does not bounce back to the browser language',()=>browserFixture(({load,local,redirects})=>{
 load('https://anyps5.games/games/silt/?q=silt#media');
 const translated=load(redirects[0]);
 const back=translated.links.at(-1)!;
 back.dispatchEvent(new Event('click'));
 assert.equal(local.getItem(languagePreferenceKey),'en');
 assert.equal(back.href,'https://anyps5.games/games/silt/?q=silt#media');
 load(back.href);
 assert.equal(redirects.length,1);
}));

test('choosing any picker language, including the current language, saves the preference',()=>{
 for(const locale of locales)browserFixture(({load,local,browser,redirects})=>{
  browser.navigator.languages=['en'];
  const page=load('https://anyps5.games/games/silt/');
  browser.location.href='https://anyps5.games/games/silt/?platform=linux#media';
  const link=page.links.find(link=>link.dataset.languageChoice===locale)!;
  link.dispatchEvent(new Event('click'));
  assert.equal(local.getItem(languagePreferenceKey),locale);
  assert.equal(link.href,'https://anyps5.games'+localPath('/games/silt/',locale)+'?platform=linux#media');
  browser.navigator.languages=['zh-CN'];
  load('https://anyps5.games/games/silt/');
  assert.equal(redirects.length,0);
 });
});

test('unrelated prefixed visits and corrupt redirect markers never show an automatic notice',()=>browserFixture(({load,session})=>{
 session.setItem(languageRedirectKey,JSON.stringify({target:'https://anyps5.games/zh/other/'}));
 assert.equal(load('https://anyps5.games/zh/games/silt/').notice.hidden,true);
 session.setItem(languageRedirectKey,'invalid json');
 assert.doesNotThrow(()=>load('https://anyps5.games/zh/games/silt/'));
}));

test('blocked browser storage keeps navigation usable without an automatic redirect loop',()=>browserFixture(({load,browser,redirects})=>{
 browser.localStorage={getItem:()=>{throw Error('Unavailable')},setItem:()=>{throw Error('Unavailable')}};
 const page=load('https://anyps5.games/games/silt/');
 assert.equal(redirects.length,0);
 assert.doesNotThrow(()=>page.links[1].dispatchEvent(new Event('click')));
}));

test('a rejected persistent write preserves the manual choice for the session',()=>browserFixture(({load,browser,session,redirects})=>{
 browser.localStorage={getItem:()=>null,setItem:()=>{throw Error('Quota exceeded')}};
 load('https://anyps5.games/games/silt/');
 const translated=load(redirects[0]);
 translated.links.at(-1)!.dispatchEvent(new Event('click'));
 assert.equal(session.getItem(languagePreferenceKey),'en');
 load('https://anyps5.games/games/silt/');
 assert.equal(redirects.length,1);
}));

test('unavailable session storage keeps the entry page instead of losing the redirect notice',()=>browserFixture(({load,browser,redirects})=>{
 browser.sessionStorage={getItem:()=>{throw Error('Unavailable')},setItem:()=>{throw Error('Unavailable')},removeItem:()=>{throw Error('Unavailable')}};
 assert.doesNotThrow(()=>load('https://anyps5.games/games/silt/'));
 assert.equal(redirects.length,0);
}));
