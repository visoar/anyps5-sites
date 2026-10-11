export const umamiSites = {
 cc: {id:'60f340a2-4cd3-49fd-a95c-25f01ab47701',domain:'anyps5.cc'},
 games: {id:'7f69f436-bf20-4bb1-8fdb-bf34e74ae085',domain:'anyps5.games'},
} as const;

type EventData = Record<string,string|number|boolean>;
declare global {
 interface Window {
  umami?: {track:(name:string,data:EventData)=>Promise<unknown>|void};
 }
}

export function trackEvent(name:string,data:EventData={}){
 if(!Object.values(umamiSites).some(({domain})=>window.location.hostname===domain||window.location.hostname==='www.'+domain))return;
 const pending=window.umami?.track(name,{site:document.body.dataset.site||'',locale:document.body.dataset.locale||'',...data});
 if(pending)void pending.catch(()=>{});
}
