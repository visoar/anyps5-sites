export type CatalogOrder='featured'|'name'|'reviewed'|'tested';
export const catalogOrders:CatalogOrder[]=['featured','name','reviewed','tested'];
export interface OrderEntry {name:string;reviewed:string;index:number;reports:{testDate:string|null}[]}
export function compareCatalogEntries(a:OrderEntry,b:OrderEntry,order:CatalogOrder,locale:string):number {
 const name=()=>a.name.localeCompare(b.name,locale)||a.index-b.index;
 if(order==='name')return name();
 if(order==='reviewed')return b.reviewed.localeCompare(a.reviewed)||name();
 if(order==='tested'){
  const latest=(entry:OrderEntry)=>entry.reports.reduce((date,report)=>report.testDate&&report.testDate>date?report.testDate:date,'');
  return latest(b).localeCompare(latest(a))||name();
 }
 return a.index-b.index;
}
