import {trackEvent} from './analytics';
interface SearchEntry {name:string;search:string;titleId:string|null;hasReports:boolean;url:string;slug:string}
const element=document.getElementById('global-search-data');
if(element){
 const {games,labels,root}=JSON.parse(element.textContent||'{}') as {games:SearchEntry[];labels:Record<string,string>;root:string};
 const details=document.querySelector<HTMLDetailsElement>('#global-game-search')!;
 const input=document.querySelector<HTMLInputElement>('#global-query')!;
 const results=document.getElementById('global-search-results')!;
 const status=document.getElementById('global-search-status')!;
 const all=document.querySelector<HTMLAnchorElement>('#global-search-all')!;
 let suggestions:SearchEntry[]=[];
 let active=-1;
 function setActive(index:number){
  active=index;
  for(const [i,option] of Array.from(results.children).entries())option.setAttribute('aria-selected',String(i===active));
  if(active>=0)input.setAttribute('aria-activedescendant','global-result-'+active);else input.removeAttribute('aria-activedescendant');
 }
 function update(){
  const query=input.value.trim().toLocaleLowerCase();
  suggestions=query?games.filter(game=>game.search.toLocaleLowerCase().includes(query)).slice(0,6):[];
  results.replaceChildren();
  suggestions.forEach((game,index)=>{
   const option=document.createElement('li');option.id='global-result-'+index;option.role='option';option.setAttribute('aria-selected','false');
   const link=document.createElement('a');link.href=game.url;link.tabIndex=-1;
   const name=document.createElement('strong');name.textContent=game.name;name.dir='auto';
   const meta=document.createElement('small');meta.textContent=[game.titleId,game.hasReports?labels.withReports:labels.withoutReports].filter(Boolean).join(' · ');meta.dir='auto';
   link.append(name,meta);option.append(link);results.append(option);
   link.addEventListener('click',()=>trackEvent('global_game_open',{game:game.slug,query_length:input.value.trim().length}));
  });
  setActive(-1);results.hidden=suggestions.length===0;input.setAttribute('aria-expanded',String(suggestions.length>0));
  status.textContent=query&&!suggestions.length?labels.noResults:'';
  const target=new URL(root,location.href);if(query)target.searchParams.set('q',input.value.trim());all.href=target.href;
 }
 input.addEventListener('input',update);
 input.addEventListener('keydown',event=>{
  if(event.isComposing)return;
  if(['ArrowDown','ArrowUp'].includes(event.key)&&suggestions.length){event.preventDefault();setActive(event.key==='ArrowDown'?(active+1)%suggestions.length:(active<=0?suggestions.length-1:active-1))}
  if(event.key==='Enter'&&active>=0){event.preventDefault();trackEvent('global_game_open',{game:suggestions[active].slug,query_length:input.value.trim().length});location.assign(suggestions[active].url)}
 });
 document.getElementById('global-search-form')!.addEventListener('submit',()=>trackEvent('global_game_search',{query_length:input.value.trim().length,result_count:games.filter(game=>game.search.toLocaleLowerCase().includes(input.value.trim().toLocaleLowerCase())).length}));
 details.addEventListener('toggle',()=>{if(details.open){input.focus();update()}else{results.hidden=true;input.setAttribute('aria-expanded','false');setActive(-1)}});
 document.addEventListener('click',event=>{if(details.open&&!details.contains(event.target as Node))details.open=false});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&details.open){event.preventDefault();details.open=false;details.querySelector<HTMLElement>('summary')!.focus()}});
}
