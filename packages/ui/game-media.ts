import type {ImageMetadata} from 'astro';
import {localMedia,type MediaAsset} from '../content/game-media-assets';

const images=import.meta.glob<ImageMetadata>('./assets/games/*/*.webp',{eager:true,import:'default'});
function image(asset:MediaAsset):ImageMetadata{
 const metadata=images['./assets/games/'+asset.file];
 if(!metadata)throw Error('Missing local game media '+asset.file);
 return metadata;
}
export function gameArtwork(slug:string){
 const media=localMedia[slug];
 return media?{cover:media.cover?image(media.cover):null,screenshots:media.screenshots.map(image)}:undefined;
}
export function imageWidths(image:ImageMetadata,widths:number[]){
 return [...new Set(widths.map(width=>Math.min(width,image.width)))];
}
