import {L,type Report,type Text} from './model';
import metadata from './source-metadata.json';

const sources=metadata as Record<string,{url:string;updated:string}>;
function report(number:number,fields:Partial<Report>&Pick<Report,'id'|'platform'|'stage'|'os'|'summary'>,fps?:Text):Report {
 return {evidence:'community',build:null,cpu:null,gpu:null,driver:null,version:null,patched:null,testDate:null,benchmarks:fps&&fields.gpu?[{cpu:fields.cpu||null,gpu:fields.gpu,fps,context:fields.summary}]:[],media:[],source:sources[number].url,updated:sources[number].updated,...fields};
}

export const discoveryReports:Record<string,Report[]>={
 'dreaming-sarah':[
  report(2663,{id:'2663-windows-regression',platform:'windows',stage:'blocked',build:'Reporter-built main; exact commit not provided',os:'Windows 11 64-bit',cpu:'AMD Ryzen 5 3600',gpu:'NVIDIA RTX 2070 SUPER',summary:L(
   'A historical main build fails conversion while scanning a malformed module under sce_sys. Later comments verify successful conversion and gameplay on a local fix, followed by a current-main success. This failure is not the latest outcome of the thread.',
   '较早的 main 构建扫描 sce_sys 下异常模块时转换失败。后续评论验证本地修复后成功转换并进入游戏，又反馈最新 main 运行成功；这条失败记录不是该讨论的最新结果。',
   'فشل بناء سابق من main في التحويل عند فحص وحدة تالفة داخل sce_sys. أكدت التعليقات اللاحقة نجاح إصلاح محلي والوصول للعب ثم نجاح main أحدث. الفشل ليس آخر نتيجة للنقاش.',
   'Uma compilação anterior de main falhou ao converter um módulo malformado em sce_sys. Os comentários posteriores confirmam conversão e jogo com uma correção local, seguidos de sucesso no main mais recente. Esta falha não é o resultado mais recente da discussão.',
   'Ein früherer main-Build scheitert bei der Konvertierung eines fehlerhaften Moduls unter sce_sys. Spätere Kommentare bestätigen Konvertierung und Gameplay mit einem lokalen Fix, danach Erfolg auf neuerem main. Dieser Fehler ist nicht der letzte Stand des Threads.',
   'Une ancienne version de main échoue lors de la conversion d’un module malformé dans sce_sys. Les commentaires suivants confirment la conversion et le jeu avec un correctif local, puis un succès sur main plus récent. Cet échec n’est pas le dernier résultat du fil.',
   'Una versión anterior de main falla al convertir un módulo malformado en sce_sys. Los comentarios posteriores confirman conversión y juego con un arreglo local, seguidos de éxito en main más reciente. Este fallo no es el último resultado del hilo.') }),
  report(2663,{id:'2663-windows-fix',platform:'windows',stage:'ingame',build:'DavidSamir/fix/relinker-module-search-skips-sce-sys · 3d831a99',os:'Windows 11 64-bit',cpu:'AMD Ryzen 5 3600',gpu:'NVIDIA RTX 2070 SUPER',patched:true,source:'https://github.com/boykopovar/AnyPS5/issues/2663#issuecomment-6097511276',summary:L(
   'The reporter verifies conversion and gameplay on local fix 3d831a99, at approximately 17–20 FPS in menus and 7–10 FPS in game. A later latest-build comment reports 60 FPS without naming its commit or scene; it cannot replace these pinned measurements. The maintainer separately confirms the conversion fix on main through #2708.',
   '报告者在本地修复 3d831a99 上验证转换和游戏过程，菜单约 17–20 FPS，游戏内约 7–10 FPS。后来“最新构建 60 FPS”的评论未注明提交和场景，不能替换这次固定构建的测量；维护者另确认 #2708 已在 main 修复转换问题。',
   'أكد الكاتب التحويل واللعب على الإصلاح المحلي 3d831a99: القوائم 17–20 FPS واللعب 7–10. تعليق لاحق يذكر 60 FPS بلا معرّف بناء أو مشهد، فلا يستبدل القياس المحدد. أكد المشرف إصلاح التحويل على main عبر #2708.',
   'O autor verifica conversão e jogo na correção local 3d831a99: cerca de 17–20 FPS nos menus e 7–10 no jogo. Um comentário posterior refere 60 FPS sem indicar commit ou cena; não substitui estas medições. O responsável confirma separadamente a correção em main através de #2708.',
   'Der Autor bestätigt Konvertierung und Gameplay auf lokalem Fix 3d831a99: etwa 17–20 FPS im Menü und 7–10 im Spiel. Später genannte 60 FPS ohne Commit oder Szene ersetzen diese Messung nicht. Der Maintainer bestätigt den Konvertierungsfix auf main durch #2708.',
   'L’auteur vérifie la conversion et le jeu avec le correctif local 3d831a99 : environ 17–20 FPS dans les menus et 7–10 en jeu. Un commentaire ultérieur cite 60 FPS sans commit ni scène ; il ne remplace pas ces mesures. Le mainteneur confirme séparément le correctif sur main via #2708.',
   'El autor verifica conversión y juego con el arreglo local 3d831a99: unos 17–20 FPS en menús y 7–10 en juego. Un comentario posterior cita 60 FPS sin commit ni escena; no sustituye estas mediciones. El mantenedor confirma por separado el arreglo en main mediante #2708.') },L('menu 17–20; game 7–10','菜单 17–20；游戏 7–10','القائمة 17–20؛ اللعب 7–10','menu 17–20; jogo 7–10','Menü 17–20; Spiel 7–10','menu 17–20 ; jeu 7–10','menú 17–20; juego 7–10')),
  report(3180,{id:'3180-linux-release',platform:'linux',stage:'blocked',build:'v0.1.1',os:'Ubuntu 26.04.1 LTS',cpu:'AMD Ryzen 7 5700X',gpu:'NVIDIA RTX 4060 Ti',driver:'595.99.02',patched:false,summary:L(
   'The v0.1.1 run crashes in the bundled libc module. It is distinct from the later main run that renders artwork. Neither record establishes Linux gameplay.',
   'v0.1.1 测试在随游戏 libc 模块中崩溃，与后来 main 渲染图片后的停止属于不同构建；两条记录均未证明 Linux 游戏过程。',
   'يتعطل v0.1.1 داخل وحدة libc المرفقة باللعبة. هذا مختلف عن main اللاحق الذي عرض صورة. لا يثبت أي منهما اللعب على Linux.',
   'O teste de v0.1.1 falha no módulo libc incluído no jogo. É distinto do teste posterior de main que apresenta uma imagem. Nenhum comprova jogo em Linux.',
   'Der v0.1.1-Lauf stürzt im mitgelieferten libc-Modul ab. Er ist vom späteren main-Lauf mit sichtbarer Grafik zu trennen. Keiner belegt Linux-Gameplay.',
   'Le test de v0.1.1 plante dans le module libc fourni avec le jeu. Il est distinct du test ultérieur sur main qui affiche une image. Aucun ne prouve du jeu sous Linux.',
   'La prueba de v0.1.1 falla en el módulo libc incluido con el juego. Es distinta de la prueba posterior de main que muestra una imagen. Ninguna demuestra juego en Linux.') }),
  report(3180,{id:'3180-linux-main',platform:'linux',stage:'boot',build:'main c60c123f',os:'Ubuntu 26.04.1 LTS',cpu:'AMD Ryzen 7 5700X',gpu:'NVIDIA RTX 4060 Ti',driver:'595.99.02',patched:false,source:'https://github.com/boykopovar/AnyPS5/issues/3180#issuecomment-6108006291',summary:L(
   'On main c60c123f the reporter sees a window and artwork before another crash. The closing comment attributes the device loss to a regression fixed by merged #3425. No post-fix game retest is supplied in this thread, so Linux gameplay remains unverified.',
   'main c60c123f 显示窗口与图片后再次崩溃。关闭说明将设备丢失归因于已合并 #3425 修复的回归；该讨论没有修复后的游戏复测，因此 Linux 游戏过程仍未验证。',
   'يعرض main c60c123f نافذة وصورة ثم يتعطل. ينسب تعليق الإغلاق فقدان الجهاز إلى تراجع أصلحه #3425 المدمج. لا توجد إعادة اختبار للعبة بعد الإصلاح، لذا اللعب على Linux غير متحقق.',
   'Em main c60c123f surgem janela e imagem antes de outra falha. O comentário de fecho atribui a perda do dispositivo a uma regressão corrigida por #3425. Sem novo teste do jogo após a correção, o jogo em Linux continua por verificar.',
   'Auf main c60c123f erscheinen Fenster und Grafik vor einem weiteren Absturz. Der Schlusskommentar nennt eine durch #3425 behobene Device-Loss-Regression. Ohne Spieltest nach dem Fix bleibt Linux-Gameplay ungeprüft.',
   'Sur main c60c123f, une fenêtre et une image apparaissent avant un nouveau plantage. Le commentaire de clôture cite une régression corrigée par #3425. Sans nouveau test du jeu après le correctif, le jeu sous Linux reste non vérifié.',
   'En main c60c123f aparecen ventana e imagen antes de otro fallo. El comentario de cierre señala una regresión corregida por #3425. Sin una nueva prueba del juego tras el arreglo, el juego en Linux sigue sin verificar.') }),
  report(3291,{id:'3291-windows-title',platform:'windows',stage:'boot',build:'main + fix/bda-span-read-split; initial fix 870b8bdf',os:'Windows Server 2025',gpu:'NVIDIA RTX 3060',driver:'32.0.15.9186',patched:true,summary:L(
   'The experimental BDA-read branch renders the Dreaming Sarah title screen at a reported 60 FPS on RTX 3060. Gameplay, full-game stability and the published release are not tested by this observation. Later API-test results on other GPUs are separate evidence.',
   '实验 BDA 读取分支在 RTX 3060 上显示 Dreaming Sarah 标题画面，据报 60 FPS；此观察未验证游戏过程、全流程稳定性或已发布版本。其他显卡的后续 API 测试属于不同证据。',
   'يعرض فرع BDA التجريبي شاشة عنوان Dreaming Sarah بنحو 60 FPS على RTX 3060. لا يختبر ذلك اللعب أو الاستقرار الكامل أو الإصدار المنشور. اختبارات API على بطاقات أخرى أدلة منفصلة.',
   'O ramo BDA experimental mostra o ecrã de título de Dreaming Sarah a cerca de 60 FPS na RTX 3060. Não verifica jogo, estabilidade completa ou versão publicada. Os testes de API posteriores noutras GPU são provas distintas.',
   'Der experimentelle BDA-Zweig zeigt den Dreaming-Sarah-Titelbildschirm mit gemeldeten 60 FPS auf RTX 3060. Gameplay, Gesamtstabilität und Release-Version sind damit nicht getestet. Spätere API-Tests anderer GPUs sind getrennte Belege.',
   'La branche BDA expérimentale affiche le titre de Dreaming Sarah à environ 60 FPS sur RTX 3060. Cette observation ne vérifie ni le jeu, ni la stabilité complète, ni la version publiée. Les tests d’API ultérieurs sur d’autres GPU sont des preuves distinctes.',
   'La rama BDA experimental muestra el título de Dreaming Sarah a unos 60 FPS en RTX 3060. No verifica juego, estabilidad completa ni versión publicada. Las pruebas posteriores de API en otras GPU son pruebas separadas.') },L('title screen 60','标题画面 60','شاشة العنوان 60','ecrã de título 60','Titelbildschirm 60','écran de titre 60','pantalla de título 60')),
 ],
};
