import {localeConfig,locales,type Locale} from '../content/locales';

export const languagePreferenceKey='anyps5-locale';
export const languageRedirectKey='anyps5-language-redirect';
export type LanguageAlternative={locale:Locale;href:string};

export function browserLocale(languages:readonly string[]):Locale|undefined {
 for(const language of languages){
  const base=language.toLowerCase().split(/[-_]/)[0];
  if(locales.includes(base as Locale))return base as Locale;
 }
}

export function languageUrl(href:string,current:URL):URL {
 const target=new URL(href,current);
 target.search=current.search;
 target.hash=current.hash;
 return target;
}

export function browserLanguageRedirect(current:URL,languages:readonly string[],preference:string|null,alternatives:readonly LanguageAlternative[]):URL|undefined {
 if(preference!==null)return;
 const english=alternatives.find(alternative=>alternative.locale==='en');
 if(!english)return;
 const entry=new URL(english.href,current);
 if(entry.origin!==current.origin||entry.pathname.replace(/\/$/,'')!==current.pathname.replace(/\/$/,''))return;
 const locale=browserLocale(languages);
 if(!locale||locale==='en')return;
 const translation=alternatives.find(alternative=>alternative.locale===locale);
 if(!translation)return;
 const target=languageUrl(translation.href,current);
 if(target.origin===current.origin&&target.pathname!==current.pathname)return target;
}

export function initLanguageNavigation() {
 const current=new URL(window.location.href);
 const links=Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-language-choice]'));
 const alternatives=links.filter(link=>link.closest('.language-options')).map(link=>({locale:link.dataset.languageChoice as Locale,href:link.href}));
 const notice=document.querySelector<HTMLElement>('#language-notice');
 let preference:string|null=null;
 let storageAvailable=true;
 try{preference=window.localStorage.getItem(languagePreferenceKey)}catch{storageAvailable=false}
 try{preference??=window.sessionStorage.getItem(languagePreferenceKey)}catch{}

 for(const link of links){
  const href=link.href;
  link.href=languageUrl(href,current).href;
  const choose=()=>{
   link.href=languageUrl(href,new URL(window.location.href)).href;
   try{window.localStorage.setItem(languagePreferenceKey,link.dataset.languageChoice!)}catch{
    try{window.sessionStorage.setItem(languagePreferenceKey,link.dataset.languageChoice!)}catch{}
   }
  };
  link.addEventListener('click',choose);
  link.addEventListener('auxclick',event=>{if(event.button===1)choose()});
 }

 // Only the navigation that performed the redirect may show the notice.
 try{
  const pending=window.sessionStorage.getItem(languageRedirectKey);
  window.sessionStorage.removeItem(languageRedirectKey);
  if(pending&&notice){
   const {target}=JSON.parse(pending);
   if(target===current.href)notice.hidden=false;
  }
 }catch{}
 notice?.querySelector<HTMLButtonElement>('[data-language-dismiss]')?.addEventListener('click',()=>{notice.hidden=true});

 // Without storage, keep the entry page so an English return cannot loop.
 if(!storageAvailable)return;
 const target=browserLanguageRedirect(current,window.navigator.languages?.length?window.navigator.languages:[window.navigator.language],preference,alternatives);
 if(!target)return;
 try{window.sessionStorage.setItem(languageRedirectKey,JSON.stringify({target:target.href}))}catch{return}
 window.location.replace(target.href);
}
