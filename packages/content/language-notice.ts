import {localeConfig,type Locale} from './locales';

const copy:Record<Locale,{switched:string;returnEnglish:string}>={
 en:{switched:'Switched to {language} based on your browser language',returnEnglish:'Return to English'},
 zh:{switched:'已根据浏览器语言切换为{language}',returnEnglish:'返回 English'},
 ar:{switched:'تم التبديل إلى {language} حسب لغة المتصفح',returnEnglish:'العودة إلى English'},
 pt:{switched:'Idioma alterado para {language} de acordo com o navegador',returnEnglish:'Voltar a English'},
 de:{switched:'Anhand der Browsersprache zu {language} gewechselt',returnEnglish:'Zurück zu English'},
 fr:{switched:'Langue changée pour {language} selon la langue du navigateur',returnEnglish:'Revenir à English'},
 es:{switched:'Idioma cambiado a {language} según el idioma del navegador',returnEnglish:'Volver a English'},
};
export function languageNotice(locale:Locale){return {...copy[locale],switched:copy[locale].switched.replace('{language}',localeConfig[locale].name)}}
