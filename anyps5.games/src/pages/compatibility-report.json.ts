import {compatibilityReport} from '../../../packages/content/compatibility-report';
export function GET(){return new Response(JSON.stringify(compatibilityReport,null,2),{headers:{'Content-Type':'application/json; charset=utf-8'}})}
