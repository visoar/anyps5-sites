import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://anyps5.cc', output:'static', devToolbar:{enabled:false}, trailingSlash:'always', integrations:[sitemap({filter:url=>!url.includes('/404/'), customPages:[], i18n:{defaultLocale:'en',locales:{en:'en',zh:'zh-Hans',ar:'ar',pt:'pt-PT',de:'de',fr:'fr',es:'es'}}})],server:{host:true},vite:{server:{fs:{allow:['..']}}}});
