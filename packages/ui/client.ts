const theme = document.querySelector<HTMLButtonElement>('#theme-button');
const defaultTheme=document.documentElement.dataset.defaultTheme||'dark';
let preference=defaultTheme;
try{preference=localStorage.getItem('anyps5-theme')||defaultTheme}catch{}
if(!['light','dark'].includes(preference))preference=defaultTheme;
function applyTheme(){const current=preference;document.documentElement.dataset.theme=current;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',current==='dark'?'#101720':'#f7f8f4');if(theme){theme.setAttribute('aria-pressed',String(current==='dark'));theme.title=(current==='dark'?theme.dataset.light:theme.dataset.dark)||''}}
applyTheme();
theme?.addEventListener('click',()=>{preference=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('anyps5-theme',preference)}catch{}applyTheme()});
document.addEventListener('click',event=>{for(const details of document.querySelectorAll<HTMLDetailsElement>('.language-picker,.mobile-nav'))if(!details.contains(event.target as Node))details.open=false});
document.addEventListener('keydown',event=>{if(event.key==='Escape')for(const details of document.querySelectorAll<HTMLDetailsElement>('.language-picker,.mobile-nav'))if(details.open){details.open=false;details.querySelector<HTMLElement>('summary')?.focus()}});
for(const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]'))button.addEventListener('click',async()=>{const code=document.getElementById(button.dataset.copy!);if(!code)return;const status=button.closest('.code-block')?.querySelector<HTMLElement>('[role="status"]');try{await navigator.clipboard.writeText(code.textContent||'');if(status)status.textContent=button.dataset.success||''}catch{if(status)status.textContent=button.dataset.error||''}setTimeout(()=>{if(status)status.textContent=''},4000)});
