import type {APIRoute} from 'astro';
import {renderLlms} from '../../../packages/content/agent-policy';

export const GET:APIRoute=()=>new Response(renderLlms('cc'),{headers:{'Content-Type':'text/plain; charset=utf-8'}});
