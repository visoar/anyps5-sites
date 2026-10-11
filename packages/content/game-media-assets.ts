import assets from './game-media-local.json';

export interface MediaAsset {
 file:string;
 source:string;
 downloadUrl:string;
 sourceSha256:string;
 sourceBytes:number;
 sha256:string;
 bytes:number;
 width:number;
 height:number;
}
export interface LocalGameMedia {cover:MediaAsset|null;screenshots:MediaAsset[]}
export const localMedia=assets as Record<string,LocalGameMedia>;
