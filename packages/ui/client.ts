import {trackEvent} from './analytics';
const theme = document.querySelector<HTMLButtonElement>('#theme-button');
const defaultTheme=document.documentElement.dataset.defaultTheme||'dark';
let preference=defaultTheme;
try{preference=localStorage.getItem('anyps5-theme')||defaultTheme}catch{}
if(!['light','dark'].includes(preference))preference=defaultTheme;
function applyTheme(){const current=preference;document.documentElement.dataset.theme=current;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',current==='dark'?'#101720':'#f7f8f4');if(theme){theme.setAttribute('aria-pressed',String(current==='dark'));theme.title=(current==='dark'?theme.dataset.light:theme.dataset.dark)||''}}
applyTheme();
theme?.addEventListener('click',()=>{preference=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('anyps5-theme',preference)}catch{}applyTheme();trackEvent('theme_change',{theme:preference})});
document.addEventListener('click',event=>{for(const details of document.querySelectorAll<HTMLDetailsElement>('.language-picker,.mobile-nav'))if(!details.contains(event.target as Node))details.open=false});
document.addEventListener('keydown',event=>{if(event.key==='Escape')for(const details of document.querySelectorAll<HTMLDetailsElement>('.language-picker,.mobile-nav'))if(details.open){details.open=false;details.querySelector<HTMLElement>('summary')?.focus()}});
for(const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]'))button.addEventListener('click',async()=>{const code=document.getElementById(button.dataset.copy!);if(!code)return;const status=button.closest('.code-block')?.querySelector<HTMLElement>('[role="status"]');const section=button.closest('section')?.id||'';try{await navigator.clipboard.writeText(code.textContent||'');if(status)status.textContent=button.dataset.success||'';trackEvent('code_copy',{section,success:true})}catch{if(status)status.textContent=button.dataset.error||'';trackEvent('code_copy',{section,success:false})}setTimeout(()=>{if(status)status.textContent=''},4000)});

document.addEventListener('click',event=>{
 const link=(event.target as Element).closest<HTMLAnchorElement>('a[href]');
 if(!link)return;
 const url=new URL(link.href);
 if(!['http:','https:'].includes(url.protocol)||link.getAttribute('href')?.startsWith('#'))return;
 const placement=link.closest('header.site-header')?'header':link.closest('footer')?'footer':link.closest('.hero')?'hero':link.closest('.steps')?'steps':link.closest('.related-links')?'related':'content';
 if(link.closest('.language-options')){trackEvent('locale_change',{to_locale:link.hreflang||link.lang});return}
 if(['anyps5.cc','anyps5.games'].includes(url.hostname)&&url.hostname!==location.hostname){trackEvent('cross_site_click',{destination:url.hostname,placement});return}
 if(url.origin!==location.origin){
  if(url.hostname==='github.com'&&url.pathname.includes('/releases/download/'))trackEvent('download_click',{file:url.pathname.split('/').at(-1)!,placement});
  else if(link.closest('.source-list,.report-source,.commit-reference,#overview,#media'))trackEvent('source_click',{host:url.hostname,path:url.pathname,placement});
  return;
 }
 const path=url.pathname.replace(/^\/(zh|ar|pt|de|fr|es)(?=\/|$)/,'');
 if(['/tested/','/untested/'].includes(path))trackEvent('catalog_category_click',{category:path.slice(1,-1),placement});
 else if(path==='/contribute/')trackEvent('contribution_open',{placement});
 else if(document.body.dataset.site==='cc'&&(/^\/guides\//.test(path)||['/start/','/downloads/','/requirements/','/troubleshooting/','/faq/','/development-notes/','/progress/','/updates/'].includes(path)))trackEvent('guide_open',{guide:path,placement});
});
