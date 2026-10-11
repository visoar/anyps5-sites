const data=document.getElementById('catalog-data');
if(data){
 const parsed=JSON.parse(data.textContent||'{}') as {games:{slug:string;reports:{platform:string;stage:string;evidence:string;patched:boolean|null}[]}[];resultFormats:{one:string;two:string;other:string};labels:Record<string,string>};
 const reports=new Map(parsed.games.map(g=>[g.slug,g.reports]));
 const search=document.querySelector<HTMLInputElement>('#q')!;
 const form=document.querySelector<HTMLFormElement>('#game-search')!;
 const filters=document.querySelector<HTMLFormElement>('#game-filters')!;
 const params=new URLSearchParams(location.search);
 search.value=params.get('q')||'';
 for(const key of ['platform','stage','evidence']){const select=filters.elements.namedItem(key) as HTMLSelectElement;select.value=params.get(key)||'';if(select.selectedIndex<0)select.value=''}
 const rows=Array.from(document.querySelectorAll<HTMLElement>('[data-game]'));
 let timer:ReturnType<typeof setTimeout>;
 function update(sync=true){
  const q=search.value.trim().toLocaleLowerCase();const selection=Object.fromEntries(['platform','stage','evidence'].map(k=>[k,(filters.elements.namedItem(k) as HTMLSelectElement).value]));
  let visible=0;for(const row of rows){
   const matching=reports.get(row.dataset.game!)!.filter(r=>Object.entries(selection).every(([key,value])=>!value||r[key as keyof typeof r]===value));
   const matched=(!q||row.dataset.search!.toLocaleLowerCase().includes(q))&&matching.length>0;row.hidden=!matched;
   if(matched){visible++;const rank=['blocked','boot','menu','ingame'];const stage=matching.reduce((best,r)=>rank.indexOf(r.stage)>rank.indexOf(best)?r.stage:best,'blocked');const badge=row.querySelector<HTMLElement>('[data-stage]')!;const patched=matching.filter(r=>r.stage===stage).every(r=>r.patched);badge.className='badge '+(patched?'experimental':stage);badge.textContent=parsed.labels[stage];row.querySelector<HTMLElement>('[data-patch]')!.hidden=!patched;const evidence=matching.some(r=>r.evidence==='official')?'official':'community';row.querySelector('[data-evidence-label]')!.textContent=parsed.labels[evidence];for(const chip of row.querySelectorAll<HTMLElement>('[data-platform]'))chip.hidden=!matching.some(r=>r.platform===chip.dataset.platform)}
  }
  document.querySelector('#result-count')!.textContent=parsed.resultFormats[visible===1?'one':visible===2?'two':'other'].replace('{count}',String(visible));document.getElementById('empty-state')!.hidden=visible>0;
  if(sync){const next=new URL(location.href);next.search='';if(search.value.trim())next.searchParams.set('q',search.value.trim());for(const [k,v]of Object.entries(selection))if(v)next.searchParams.set(k,v);history.replaceState(null,'',next)}
 }
 function reset(){clearTimeout(timer);search.value='';for(const key of ['platform','stage','evidence'])(filters.elements.namedItem(key) as HTMLSelectElement).value='';update();search.focus()}
 form.addEventListener('submit',e=>{e.preventDefault();clearTimeout(timer);update();document.getElementById('catalog-heading')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'})});
 filters.addEventListener('submit',e=>e.preventDefault());filters.addEventListener('change',()=>update());search.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>update(),120)});
 document.getElementById('reset-filters')?.addEventListener('click',reset);document.getElementById('empty-reset')?.addEventListener('click',reset);
 document.getElementById('share-search')?.addEventListener('click',async(e)=>{update();const button=e.currentTarget as HTMLElement;const status=document.getElementById('share-status')!;try{await navigator.clipboard.writeText(location.href);status.textContent=button.dataset.success||''}catch{status.textContent=button.dataset.error||''}setTimeout(()=>status.textContent='',4000)});
 window.addEventListener('popstate',()=>{const p=new URLSearchParams(location.search);search.value=p.get('q')||'';for(const key of ['platform','stage','evidence'])(filters.elements.namedItem(key) as HTMLSelectElement).value=p.get(key)||'';update(false)});
 update(false);
}
