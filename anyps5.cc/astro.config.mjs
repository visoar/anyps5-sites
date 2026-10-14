import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import searchManifest from '../scripts/search-manifest.mjs';
import sitemapCompatibility from '../scripts/sitemap-compat.mjs';
export default defineConfig({site:'https://anyps5.cc', output:'static', devToolbar:{enabled:false}, trailingSlash:'always', integrations:[sitemap({filter:url=>!url.includes('/404/'), customPages:[], i18n:{defaultLocale:'en',locales:{en:'en',zh:'zh-Hans',ar:'ar',pt:'pt-PT',de:'de',fr:'fr',es:'es'}}}),sitemapCompatibility(),searchManifest('anyps5.cc')],server:{host:true},vite:{server:{fs:{allow:['..']}}}});
