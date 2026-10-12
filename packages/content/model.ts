import {locales, type Locale} from './locales';
export type Text = Record<Locale,string>;
export const L = (en:string,zh:string,ar:string,pt:string,de:string,fr:string,es:string):Text => Object.fromEntries(locales.map((locale,i)=>[locale,[en,zh,ar,pt,de,fr,es][i]])) as Text;
export const UPSTREAM = 'https://github.com/boykopovar/AnyPS5';
export const REVIEW_DATE = '2026-10-12';
export const sourceDoc = (name:string) => `${UPSTREAM}/blob/main/docs/user/${name}.md`;
export type Stage = 'ingame'|'menu'|'boot'|'blocked';
export type Platform = 'windows'|'linux';
export interface Benchmark {cpu:string|null;gpu:string;fps:string|Text;context:Text}
export interface Report {
 id:string; platform:Platform; stage:Stage; evidence:'official'|'community';
 source:string; updated:string|null; testDate:string|null; build:string|null;
 os:string; cpu:string|null; gpu:string|null; driver:string|null; version:string|null;
 patched:boolean|null; summary:Text; benchmarks:Benchmark[]; media:string[];
}
export interface Game {slug:string;name:string;titleId:string|null;edition:string|null;reports:Report[];reviewed?:string}
export interface PlatformConclusion {platform:Platform;reportIds:string[];reviewed:string}
export interface Section {id:string;title:Text;body:Text[];code?:string|Text; links?:{label:string|Text;url:string}[]}
export interface Article {slug:string; title:Text; description:Text; sections:Section[]; sources:string[];reviewed?:string}
