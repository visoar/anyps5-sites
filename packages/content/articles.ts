import {quickStart,downloadTitle,downloadDescription} from './growth-content';
import {guideSupplements} from './guide-supplements';
import {L,UPSTREAM,sourceDoc,type Article} from './model';

const usage=sourceDoc('USAGE');
const buildDoc=UPSTREAM+'/blob/main/docs/dev/BUILD.md';
const baseArticles:Article[]=[
 {slug:'start',title:L("How to install AnyPS5 on PC: Windows and Linux","在 PC 上安装 AnyPS5：Windows 与 Linux 指南","تثبيت AnyPS5 على الكمبيوتر: Windows وLinux","Como instalar AnyPS5 no PC: Windows e Linux","AnyPS5 auf dem PC installieren: Windows und Linux","Installer AnyPS5 sur PC : Windows et Linux","Cómo instalar AnyPS5 en PC: Windows y Linux"),description:L("Install and set up AnyPS5 on Windows or Linux: choose matching downloads, prepare your PS5 files, convert the executable and check the first launch.","在 Windows 或 Linux 上安装与设置 AnyPS5：选择配套下载文件、准备自己的 PS5 文件、转换可执行文件，再检查首次启动。","ثبّت AnyPS5 وأعدّه على Windows أو Linux: اختر الأداة والمكتبات المتوافقة، وجهّز ملفات PS5، وحوّل البرنامج ثم تحقق من أول تشغيل.","Instale e configure o AnyPS5 no Windows ou Linux: escolha ficheiros compatíveis, prepare os seus ficheiros PS5, converta o executável e verifique o primeiro arranque.","Installiere AnyPS5 unter Windows oder Linux: passende Downloads wählen, eigene PS5-Dateien vorbereiten, das Programm konvertieren und den ersten Start prüfen.","Installez AnyPS5 sous Windows ou Linux : choisissez les fichiers adaptés, préparez vos fichiers PS5, convertissez l’exécutable et vérifiez le premier lancement.","Instala AnyPS5 en Windows o Linux: elige archivos compatibles, prepara tus archivos PS5, convierte el ejecutable y comprueba el primer inicio."),sources:[usage,buildDoc,sourceDoc('COMPATIBILITY')],sections:[
 {id:'expectations',title:L('01 / Know what you are testing','01 / 先明确测试目标','01 / حدّد ما تريد اختباره','01 / Saiba o que vai testar','01 / Kläre dein Testziel','01 / Définissez votre objectif','01 / Define qué vas a probar'),body:[L('AnyPS5 translates PS5 executables into native Windows or Linux programs and supplies replacement system libraries. It is experimental. A title reaching a menu is different from working gameplay, and a patched community build is different from a published release.','AnyPS5 将 PS5 可执行文件转换为 Windows 或 Linux 原生程序，并提供替代系统库。项目仍处于实验阶段：能进入菜单不等于能正常游玩，社区补丁构建也不等于官方发行版。',"يحوّل AnyPS5 ملفات PS5 التنفيذية إلى برامج تعمل مباشرة على Windows أو Linux، ويوفر مكتبات بديلة للنظام. المشروع تجريبي؛ الوصول إلى القائمة لا يثبت إمكانية اللعب، كما أن بناءً عدّله المجتمع يختلف عن الإصدار المنشور.",'O AnyPS5 converte executáveis de PS5 em programas nativos de Windows ou Linux e fornece bibliotecas de sistema alternativas. É experimental: chegar ao menu não equivale a jogar normalmente, e uma compilação modificada pela comunidade não é a versão publicada.','AnyPS5 übersetzt PS5-Programme in native Windows- oder Linux-Programme und stellt Ersatzbibliotheken bereit. Das Projekt ist experimentell: Ein funktionierendes Menü belegt kein funktionierendes Gameplay. Ein Community-Build mit Patches ist außerdem kein veröffentlichter Build.','AnyPS5 transforme les exécutables PS5 en programmes natifs Windows ou Linux et fournit des bibliothèques système de remplacement. Le projet reste expérimental : atteindre un menu ne prouve pas que le jeu fonctionne, et une version communautaire modifiée diffère d’une version publiée.','AnyPS5 convierte ejecutables de PS5 en programas nativos de Windows o Linux y ofrece bibliotecas de sistema alternativas. Es experimental: llegar al menú no demuestra que se pueda jugar, y una compilación con parches de la comunidad difiere de una versión publicada.'),L('Look up the exact PPSA ID, platform, build and patch list first. Frame rates only describe the hardware and scene in the original report. No report should be read as a guarantee that you can finish the game.','优先核对准确的 PPSA ID、系统、构建和补丁列表。帧数只描述来源报告中的硬件与场景，任何记录都不应被理解为通关保证。','ابدأ بمعرّف PPSA الدقيق والنظام والبناء وقائمة التعديلات. معدل الإطارات يخص الجهاز والمشهد في التقرير الأصلي فقط، ولا يضمن إكمال اللعبة.','Confirme primeiro o ID PPSA, o sistema, a compilação e os patches. Os FPS referem-se apenas ao equipamento e à cena do relatório original; não garantem que seja possível terminar o jogo.','Vergleiche zuerst PPSA-ID, Plattform, Build und Patchliste. FPS-Werte gelten nur für die Hardware und Szene des Originalberichts. Sie sind keine Zusage, dass sich das gesamte Spiel durchspielen lässt.','Vérifiez d’abord l’identifiant PPSA exact, la plateforme, la version et les correctifs. Les FPS décrivent uniquement le matériel et la scène du rapport original ; ils ne garantissent pas que le jeu puisse être terminé.','Comprueba primero el ID PPSA, el sistema, la compilación y los parches. Los FPS corresponden al equipo y la escena del informe original; no garantizan que puedas terminar el juego.')]},
 {id:'get-tools',title:L("02 / Download the tool and matching libraries","02 / 下载转换工具与配套运行库","02 / نزّل الأداة والمكتبات المتوافقة","02 / Transfira a ferramenta e as bibliotecas","02 / Werkzeug und passende Bibliotheken herunterladen","02 / Télécharger l’outil et les bibliothèques","02 / Descarga la herramienta y las bibliotecas"),body:[L("Choose Windows or Linux on the downloads page and get both the conversion tool and runtime libraries from the same release. The libraries archive is not optional: extract it before launching the converted game. If a report requires a source build or local patches, follow the build guide and keep its relinker and libraries together; release v0.1.2 does not include later main changes.","在下载页选择 Windows 或 Linux，同时获取同一发行版的转换工具和运行库。运行库不是可选附件，启动转换后的游戏前需解压并放好。如果报告依赖源码构建或本地补丁，应按编译指南配套构建 relinker 与运行库；v0.1.2 不包含后续 main 的改动。","اختر Windows أو Linux في صفحة التنزيل، ونزّل أداة التحويل ومكتبات التشغيل من الإصدار نفسه. المكتبات ليست اختيارية؛ فكّها وجهّزها قبل التشغيل. إذا تطلب التقرير بناءً من المصدر أو تعديلات محلية، ابنِ الأداة والمكتبات معاً وفق الدليل؛ لا يتضمن v0.1.2 تغييرات main اللاحقة.","Na página de transferências, escolha Windows ou Linux e obtenha a ferramenta e as bibliotecas da mesma versão. As bibliotecas não são opcionais: extraia-as antes de executar o jogo convertido. Se o relatório exigir código-fonte ou alterações locais, siga o guia de compilação e use a ferramenta e as bibliotecas desse mesmo código; v0.1.2 não inclui alterações posteriores de main.","Wähle Windows oder Linux auf der Downloadseite und lade Konvertierungswerkzeug und Laufzeitbibliotheken desselben Releases herunter. Die Bibliotheken sind erforderlich und müssen vor dem Spielstart entpackt werden. Benötigt der Bericht einen Quellbuild oder lokale Patches, baue Werkzeug und Bibliotheken zusammen nach der Anleitung; v0.1.2 enthält spätere main-Änderungen nicht.","Choisissez Windows ou Linux sur la page de téléchargement et prenez l’outil et les bibliothèques de la même version. Les bibliothèques sont nécessaires : extrayez-les avant de lancer le jeu converti. Si le rapport demande une compilation ou des modifications locales, suivez le guide avec un relinker et des bibliothèques issus du même code ; v0.1.2 n’inclut pas les changements ultérieurs de main.","Elige Windows o Linux en la página de descargas y obtén la herramienta y las bibliotecas de la misma versión. Las bibliotecas son necesarias: extráelas antes de iniciar el juego convertido. Si el informe requiere compilar o aplicar cambios locales, sigue la guía y usa herramienta y bibliotecas del mismo código; v0.1.2 no incluye cambios posteriores de main.")],links:[{label:L("Download tool and libraries","下载工具与运行库","تنزيل الأداة والمكتبات","Transferir ferramenta e bibliotecas","Werkzeug und Bibliotheken herunterladen","Télécharger outil et bibliothèques","Descargar herramienta y bibliotecas"),url:'/downloads/'},{label:L("Check system requirements","核对系统要求","متطلبات النظام","Requisitos do sistema","Systemanforderungen prüfen","Vérifier les prérequis","Revisar requisitos"),url:'/requirements/'},{label:L("Build from source when required","按需要从源码构建","البناء من المصدر عند الحاجة","Compilar quando necessário","Bei Bedarf aus Quellen bauen","Compiler si nécessaire","Compilar cuando sea necesario"),url:'/guides/build/'}]},
 {id:'runtime',title:L('03 / Prepare the runtime folder','03 / 准备运行目录','03 / جهّز مجلد التشغيل','03 / Prepare a pasta de execução','03 / Bereite den Laufzeitordner vor','03 / Préparez le dossier d’exécution','03 / Prepara la carpeta de ejecución'),body:[L('The relinker needs a clean ELF executable. A SELF container is not accepted as clean input. Use your own files; this site does not distribute games, firmware or keys. Keep the original executable, bundled modules and data together before relinking.','relinker 需要干净的 ELF 可执行文件，SELF 容器不能直接当作这一输入。使用你自己的文件；本站不分发游戏、固件或密钥。转换前保留原可执行文件、随游戏模块与数据的对应关系。','تحتاج أداة relinker إلى ملف ELF تنفيذي نظيف، وليس حاوية SELF. استخدم ملفاتك الخاصة؛ لا يوزّع الموقع ألعاباً أو برامج ثابتة أو مفاتيح. احتفظ بالملف التنفيذي ووحداته وبياناته معاً قبل التحويل.','O relinker precisa de um executável ELF limpo, não de um contentor SELF. Use os seus próprios ficheiros; este site não distribui jogos, firmware nem chaves. Mantenha juntos o executável original, os módulos incluídos e os dados.',"Der Relinker benötigt eine unverpackte ausführbare ELF-Datei; ein SELF-Container eignet sich nicht als solche Eingabe. Verwende deine eigenen Dateien. Diese Website verteilt keine Spiele, Firmware oder Schlüssel. Bewahre die ursprüngliche Programmdatei, die mitgelieferten Module und die Spieldaten vor der Konvertierung zusammen auf.",'Le relinker attend un exécutable ELF non encapsulé, pas un conteneur SELF. Utilisez vos propres fichiers ; le site ne distribue ni jeux, ni firmware, ni clés. Conservez ensemble l’exécutable, les modules fournis et les données.','El relinker necesita un ejecutable ELF limpio, no un contenedor SELF. Usa tus propios archivos; el sitio no distribuye juegos, firmware ni claves. Conserva juntos el ejecutable original, sus módulos y los datos.'),L('Put host-native AnyPS5 libraries in libs/. Put game resources and converted game modules in app0/. PS5 modules from the original game are relinker inputs, not substitutes for the host libraries.','libs/ 放主机系统对应的 AnyPS5 原生库；app0/ 放游戏资源和转换后的游戏模块。原始 PS5 模块属于转换输入，不能替代主机原生库。','ضع مكتبات AnyPS5 الأصلية لنظامك في libs/، وموارد اللعبة ووحداتها المحوّلة في app0/. وحدات PS5 الأصلية مدخلات للتحويل، وليست بدائل لمكتبات المضيف.','Coloque as bibliotecas AnyPS5 nativas do sistema em libs/ e os recursos e módulos convertidos em app0/. Os módulos PS5 originais são dados de entrada do relinker, não substitutos das bibliotecas do computador.','In libs/ gehören die für dein Hostsystem gebauten AnyPS5-Bibliotheken. In app0/ liegen Spielressourcen und übersetzte Spielmodule. Originale PS5-Module dienen als Relinker-Eingabe und ersetzen keine Hostbibliotheken.','Placez les bibliothèques AnyPS5 natives du système dans libs/, puis les ressources et modules convertis du jeu dans app0/. Les modules PS5 d’origine servent d’entrée au relinker, pas de bibliothèques pour l’ordinateur.','Coloca las bibliotecas AnyPS5 nativas del sistema en libs/ y los recursos y módulos convertidos del juego en app0/. Los módulos PS5 originales son entradas del relinker, no bibliotecas nativas del equipo.')],code:'runtime/\n  app.exe  # Windows; app.elf on Linux\n  libs/    # AnyPS5 host-native libraries\n  app0/    # game resources + converted game modules'},
 ]},
 {slug:'downloads',title:L("AnyPS5 downloads and release files","AnyPS5 下载与发行版文件","تنزيلات AnyPS5 وملفات الإصدارات","Transferências e versões do AnyPS5","AnyPS5-Downloads und Release-Dateien","Téléchargements et fichiers AnyPS5","Descargas y archivos de AnyPS5"),description:L("Find upstream AnyPS5 release files for Windows and Linux, understand relinker and library archives, and choose between a release and source build.","查找 AnyPS5 上游 Windows、Linux 发行文件，了解 relinker 与库文件的用途、解压目录及发行版和源码构建的选择方法。","نزّل ملفات إصدارات AnyPS5 الأصلية لـWindows وLinux، وتعرّف إلى حزم relinker والمكتبات والفرق بين الإصدار المنشور والبناء من المصدر.","Encontre os ficheiros oficiais do AnyPS5 para Windows e Linux, saiba o que incluem as ferramentas e bibliotecas e escolha entre uma versão publicada e a compilação do código.","Finde die AnyPS5-Downloads für Windows und Linux und erfahre, welche Relinker und Bibliotheken du brauchst und wann ein Quellcode-Build sinnvoll ist.","Trouvez les téléchargements d’AnyPS5 pour Windows et Linux, identifiez les outils et bibliothèques nécessaires et choisissez entre une version publiée et une compilation.","Encuentra los archivos de AnyPS5 para Windows y Linux, identifica el relinker y las bibliotecas necesarios y elige entre una versión publicada y la compilación del código."),sources:[UPSTREAM+'/releases/tag/v0.1.3',usage],sections:[
 {
 "id": "release",
 "title": {
  "en": "Published release / v0.1.3",
  "zh": "已发布版本 / v0.1.3",
  "ar": "الإصدار المنشور / v0.1.3",
  "pt": "Versão publicada / v0.1.3",
  "de": "Veröffentlicht / v0.1.3",
  "fr": "Version publiée / v0.1.3",
  "es": "Versión publicada / v0.1.3"
 },
 "body": [
  {
   "en": "v0.1.3 was published 20 October 2026 at 09:31 UTC, revision 3fd1cc393. Windows/Linux tools and libraries are released together, with usage/input/change notes and a web converter ZIP. We verified both live browser manifests use this tag and revision; this resolves the earlier mismatched-library publication. Download matching platform files. No games or Mac runtime archive are included. Later main features and local game fixes remain separate.",
   "zh": "v0.1.3于2026年10月20日09:31 UTC发布，对应3fd1cc393。Windows／Linux工具与库同期提供，另有使用／输入／变更文档及web转换器ZIP。已核对在线两份清单均为此标签／提交，旧库错配发布问题已解决；按平台配对下载。不含游戏或Mac运行库，后续main功能和游戏本地修复仍分开。",
   "ar": "نشرv0.1.3 في20أكتوبر2026،09:31 UTC عند3fd1cc393. أدوات ومكتبات Windows/Linux مع وثائق وZIP للمحول الويب. تحققنا أن قائمتي الويب تستخدمان نفس الوسم والمراجعة، فتحل مشكلة النشر القديم. نزّل ملفات منصة متطابقة؛ لا ألعاب أوruntimeMac. تغييراتmain اللاحقة والتعديلات المحلية منفصلة.",
   "pt": "v0.1.3 publicado20outubro2026 às09:31 UTC,3fd1cc393. Ferramentas/bibliotecas Windows/Linux com documentação e ZIP web. Ambos manifestos online usam este tag/revisão, resolvendo a publicação incompatível anterior. Transfira pares da plataforma; sem jogos/runtimeMac. Main posterior e fixes locais separados.",
   "de": "v0.1.3 erschien20.Oktober2026 um09:31 UTC,3fd1cc393. Windows/Linux-Werkzeuge und Bibliotheken samt Dokumenten/Web-ZIP. Beide Browsermanifeste passen zu Tag/Revision; alte Veröffentlichung mit falschen Bibliotheken behoben. Passende Plattformdateien laden; keine Spiele/Mac-Runtime. SpäteresMain/lokale Fixes getrennt.",
   "fr": "v0.1.3 publié20octobre2026 à09:31 UTC,3fd1cc393. Outils/bibliothèques Windows/Linux, documents et ZIP web. Les deux manifestes en ligne portent ce tag/révision, résolvant l’ancienne publication incohérente. Téléchargez les paires adaptées ; sans jeux/runtimeMac. Main ultérieur et correctifs locaux distincts.",
   "es": "v0.1.3 publicado20octubre2026 a09:31 UTC,3fd1cc393. Herramientas/bibliotecas Windows/Linux, documentos y ZIP web. Ambos manifiestos online coinciden en etiqueta/revisión y resuelven publicación incompatible anterior. Descarga pares de plataforma; sin juegos/runtimeMac. Main posterior/parches locales aparte."
  }
 ],
 "links": [
  {
   "label": "v0.1.3",
   "url": "https://github.com/boykopovar/AnyPS5/releases/tag/v0.1.3"
  }
 ]
},
 {id:'source',title:L('A source build is a separate track',"发行版与源码构建如何选择",'البناء من المصدر مسار مستقل',"Escolher entre versão publicada e código-fonte",'Quellcode-Builds sind ein eigener Weg',"Choisir entre version publiée et compilation",'Compilar el código es otra vía'),body:[L('Current main may include fixes that are absent from v0.1.2. Conversely, a community test can depend on unmerged changes that main does not contain. Match relinker and libraries to the same source tree, keep the commit hash, and read the patch conditions on the game page.','当前 main 可能包含 v0.1.2 没有的修复；社区测试又可能依赖尚未进入 main 的改动。relinker 与库应来自同一源码树，保留提交哈希，并核对游戏页的补丁条件。','قد يحتوي main الحالي على إصلاحات غير موجودة في v0.1.2، وقد يعتمد تقرير المجتمع على تعديلات لم تُدمج في main. استخدم relinker والمكتبات من الشجرة نفسها، واحفظ معرّف التعديل واقرأ شروط صفحة اللعبة.','O main atual pode incluir correções ausentes de v0.1.2. Por sua vez, um teste da comunidade pode depender de alterações ainda não integradas. Use relinker e bibliotecas da mesma árvore, guarde o commit e consulte os requisitos de patches na página do jogo.','Der aktuelle main-Branch kann Fehler beheben, die in v0.1.2 noch auftreten. Community-Tests können wiederum Änderungen voraussetzen, die main nicht enthält. Nutze Relinker und Bibliotheken aus demselben Quellstand, notiere den Commit und prüfe die Patchbedingungen auf der Spielseite.','Le main actuel peut contenir des corrections absentes de v0.1.2. Un test communautaire peut aussi dépendre de changements non fusionnés. Utilisez relinker et bibliothèques issus du même code, gardez le commit et consultez les conditions sur la page du jeu.','El main actual puede incluir correcciones ausentes de v0.1.2. Una prueba de la comunidad puede depender de cambios aún no integrados. Usa relinker y bibliotecas del mismo código, guarda el commit y revisa las condiciones en la página del juego.')]}]},
 {
 "slug": "requirements",
 "title": {
  "en": "AnyPS5 system and build requirements",
  "zh": "AnyPS5 系统与编译环境要求",
  "ar": "متطلبات النظام والبناء لـAnyPS5",
  "pt": "Requisitos do sistema e compilação do AnyPS5",
  "de": "System- und Build-Voraussetzungen für AnyPS5",
  "fr": "Prérequis système et compilation d’AnyPS5",
  "es": "Requisitos de sistema y compilación de AnyPS5"
 },
 "description": {
  "en": "Check AnyPS5 operating-system, Vulkan and source-build requirements. Learn how to compare hardware reports and diagnose memory allocation limits.",
  "zh": "核对 AnyPS5 的操作系统、Vulkan 与源码编译要求，了解硬件报告的比较方法及内存分配限制，避免将实验结果当作通用配置。",
  "ar": "راجع متطلبات النظام وVulkan وأدوات بناء AnyPS5، وقارن تقارير العتاد وتعرّف إلى أسباب فشل تخصيص الذاكرة.",
  "pt": "Consulte os requisitos de sistema, Vulkan e compilação do AnyPS5. Saiba como comparar relatórios de equipamento e identificar limites de atribuição de memória.",
  "de": "Prüfe die System-, Vulkan- und Build-Anforderungen von AnyPS5. Erfahre, wie du Hardwareberichte vergleichst und Fehler bei der Speicherzuweisung einordnest.",
  "fr": "Consultez les prérequis système, Vulkan et compilation d’AnyPS5. Apprenez à comparer les rapports matériels et à diagnostiquer les limites d’allocation mémoire.",
  "es": "Consulta los requisitos de sistema, Vulkan y compilación de AnyPS5. Aprende a comparar informes de hardware y a diagnosticar los límites de asignación de memoria."
 },
 "sources": [
  "https://github.com/boykopovar/AnyPS5/blob/main/docs/dev/BUILD.md",
  "https://github.com/boykopovar/AnyPS5/blob/main/docs/user/USAGE.md",
  "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/dev/BUILD.md"
 ],
 "sections": [
  {
   "id": "host",
   "title": {
    "en": "Host and graphics",
    "zh": "主机与图形环境",
    "ar": "الجهاز والرسوميات",
    "pt": "Sistema e gráficos",
    "de": "Host und Grafik",
    "fr": "Système et graphismes",
    "es": "Sistema y gráficos"
   },
   "body": [
    {
     "en": "The documented runtime targets are x86-64 Windows and Linux. The graphics device needs Vulkan 1.1 and suitable graphics/compute queues and swapchain support. A Vulkan version number alone does not establish that a game’s shader and memory paths work.",
     "zh": "当前文档的运行目标是 x86-64 Windows 和 Linux。显卡需要 Vulkan 1.1、合适的图形与计算队列以及 swapchain 支持。仅满足 Vulkan 版本号，并不能证明某个游戏的着色器与内存路径已经可用。",
     "ar": "تستهدف بيئة التشغيل الموثقة Windows وLinux على x86-64. يلزم جهاز رسوميات يدعم Vulkan 1.1 وصفوف الرسوميات والحوسبة وswapchain. رقم إصدار Vulkan وحده لا يثبت عمل مسارات الذاكرة والمظللات للعبة.",
     "pt": "A execução documentada destina-se a Windows e Linux x86-64. A GPU precisa de Vulkan 1.1, filas de gráficos e computação adequadas e suporte de swapchain. A versão de Vulkan, por si só, não comprova que os caminhos de shaders e memória de um jogo funcionem.",
     "de": "Die dokumentierte Laufzeit zielt auf x86-64 unter Windows und Linux. Die GPU braucht Vulkan 1.1 sowie passende Grafik-/Compute-Queues und Swapchain-Unterstützung. Die Vulkan-Version allein belegt noch keine funktionierenden Shader- und Speicherpfade eines Spiels.",
     "fr": "L’exécution documentée vise Windows et Linux x86-64. Le GPU doit prendre en charge Vulkan 1.1, des files graphiques et de calcul adaptées ainsi que le swapchain. Le numéro de version Vulkan ne suffit pas à prouver que les chemins mémoire et shaders d’un jeu fonctionnent.",
     "es": "La ejecución documentada apunta a Windows y Linux x86-64. La GPU necesita Vulkan 1.1, colas gráficas y de cómputo adecuadas y soporte de swapchain. La versión de Vulkan por sí sola no demuestra que funcionen los shaders y la memoria de un juego."
    },
    {
     "en": "There is no verified universal minimum RAM or GPU specification for every title. Memory use depends on the game and build. On Windows, direct-memory allocations consume commit capacity backed by RAM and the page file; an allocation failure is not necessarily a lack of physical RAM.",
     "zh": "目前没有经过验证、适用于所有游戏的最低内存或显卡配置。内存使用取决于游戏和构建。Windows 的 direct-memory 分配消耗由内存与页面文件共同支撑的提交额度，分配失败不一定只是物理内存不足。",
     "ar": "لا توجد مواصفات دنيا موثقة للذاكرة أو البطاقة تصلح لكل الألعاب. يعتمد الاستهلاك على اللعبة والبناء. في Windows تستخدم الذاكرة المباشرة سعة الالتزام المدعومة بذاكرة الجهاز وملف الترحيل؛ فشل التخصيص لا يعني دائماً نقص RAM.",
     "pt": "Não existe um mínimo de RAM ou GPU verificado para todos os títulos. O consumo depende do jogo e da compilação. No Windows, a memória direta usa a capacidade de memória comprometida, apoiada pela RAM e pelo ficheiro de paginação; uma falha não significa necessariamente falta de RAM física.",
     "de": "Es gibt keine bestätigte Mindestmenge an RAM oder GPU-Leistung für alle Spiele. Der Bedarf hängt von Spiel und Build ab. Unter Windows verbrauchen direkte Speicherzuweisungen Commit-Kapazität aus RAM und Auslagerungsdatei; ein Fehler muss daher nicht an zu wenig physischem RAM liegen.",
     "fr": "Aucun minimum de RAM ou de GPU n’a été validé pour tous les jeux. La consommation dépend du jeu et de la version. Sous Windows, les allocations de mémoire directe consomment la capacité d’engagement fournie par la RAM et le fichier d’échange ; un échec n’indique pas forcément un manque de RAM physique.",
     "es": "No hay un mínimo de RAM o GPU verificado para todos los juegos. El consumo depende del juego y la compilación. En Windows, la memoria directa consume capacidad de compromiso respaldada por RAM y archivo de paginación; un fallo no implica siempre falta de RAM física."
    }
   ]
  },
  {
   "id": "toolchain",
   "title": {
    "en": "Source-build tools",
    "zh": "源码编译工具",
    "ar": "أدوات البناء من المصدر",
    "pt": "Ferramentas de compilação",
    "de": "Werkzeuge für den Quellcode-Build",
    "fr": "Outils de compilation",
    "es": "Herramientas de compilación"
   },
   "body": [
    {
     "en": "Current main needs Git/submodules, CMake3.22.1+, Ninja and C++20. For the Windows full runtime it now accepts x86-64 MinGW-w64 GCC with POSIX threads and either supported DWARF or System-V SEH exceptions: WinLibs15.2r7 and MSYS2 UCRT64 GCC16.2.0-6 are documented examples. Keep compiler/runtime DLLs matched. The unchanged v0.1.3 release and older attached build instructions retain their own toolchain context.",
     "zh": "当前main需Git／子模块、CMake3.22.1+、Ninja及C++20。Windows完整runtime现接受POSIX线程的x86-64 MinGW-w64 GCC及受支持DWARF或System-V SEH异常，文档示例为WinLibs15.2r7和MSYS2 UCRT64 GCC16.2.0-6。编译器与runtime DLL配套；未变v0.1.3及旧附带构建指南保留自身环境。",
     "ar": "main الحالي يحتاج Git/submodules وCMake3.22.1+ وNinja وC++20. runtime Windows يقبل MinGW-w64 x86-64/POSIX مع DWARF أو SEH System-V مدعومين؛ أمثلة WinLibs15.2r7 وMSYS2 UCRT64 GCC16.2.0-6. طابق DLLs؛ v0.1.3 ودليله القديم لهما سياقهما.",
     "pt": "Main atual exige Git/submódulos,CMake3.22.1+,Ninja/C++20. Runtime Windows aceita MinGW-w64 x86-64/POSIX e DWARF ou SEH System-V suportados; exemplos WinLibs15.2r7/MSYS2 UCRT64 GCC16.2.0-6. DLLs correspondentes; v0.1.3 e guia antigo conservam contexto.",
     "de": "Main benötigt Git/Submodule,CMake3.22.1+,Ninja/C++20. Windows-Runtime akzeptiert MinGW-w64 x86-64/POSIX mit unterstütztem DWARF/System-V-SEH; Beispiele WinLibs15.2r7/MSYS2 UCRT64 GCC16.2.0-6. DLLs passend halten; unverändertes v0.1.3 und altes Handbuch getrennt.",
     "fr": "Main requiert Git/sous-modules,CMake3.22.1+,Ninja/C++20. Runtime Windows accepte MinGW-w64 x86-64/POSIX avec DWARF ou SEH System-V pris en charge ; exemples WinLibs15.2r7/MSYS2 UCRT64 GCC16.2.0-6. DLLs adaptées ; v0.1.3 et ancien guide gardent leur contexte.",
     "es": "Main requiere Git/submódulos,CMake3.22.1+,Ninja/C++20. Runtime Windows acepta MinGW-w64 x86-64/POSIX con DWARF o SEH System-V admitidos; ejemplos WinLibs15.2r7/MSYS2 UCRT64 GCC16.2.0-6. DLLs a juego; v0.1.3 y guía antigua conservan contexto."
    }
   ]
  }
 ],
 "reviewed": "2026-10-23"
},
 {slug:'guides/windows',reviewed:'2026-10-12',title:L('Set up AnyPS5 on Windows','在 Windows 上设置 AnyPS5','إعداد AnyPS5 على Windows','Configurar o AnyPS5 no Windows','AnyPS5 unter Windows einrichten','Configurer AnyPS5 sous Windows','Configurar AnyPS5 en Windows'),description:L("Set up AnyPS5 on Windows with matching libraries, the --windows relinker option and a consistent runtime folder. Diagnose errors 193 and 126 and missing DLLs.","使用配套 Windows 库和 --windows 参数设置 AnyPS5，核对运行目录，并排查错误 193、126、缺失 DLL 与内存分配问题。","أعدّ AnyPS5 على Windows باستخدام المكتبات المناسبة وخيار --windows. راجع مجلد التشغيل وتعرّف إلى تشخيص الخطأين 193 و126 وملفات DLL المفقودة.","Configure o AnyPS5 no Windows com bibliotecas compatíveis e a opção --windows. Verifique a pasta de execução e resolva erros 193, 126 e DLL em falta.","Richte AnyPS5 unter Windows mit passenden Bibliotheken und --windows ein. Prüfe den Laufzeitordner und behebe Fehler 193, 126 sowie fehlende DLLs.","Configurez AnyPS5 sous Windows avec les bibliothèques adaptées et l’option --windows. Vérifiez le dossier d’exécution et les erreurs 193, 126 ou DLL manquantes.","Configura AnyPS5 en Windows con bibliotecas compatibles y --windows. Revisa la carpeta de ejecución y diagnostica los errores 193, 126 y las DLL que faltan."),sources:[usage,buildDoc],sections:[
 {id:'relink',title:L('Relink for the correct platform','明确指定 Windows 转换目标','حدّد Windows كهدف للتحويل','Indique Windows como destino','Gib Windows als Ziel an','Précisez Windows comme cible','Indica Windows como destino'),body:[L('Use the Windows relinker and Windows-native library archive, or build both from the same source tree. The --windows flag selects PE output; naming the output app.exe does not select Windows by itself. Place the input’s bundled modules in sce_module/ or sce_modules/ beside the input ELF, or provide their parent with --sce-module-path.','使用 Windows relinker 与 Windows 原生库压缩包，或从同一源码树构建二者。--windows 才是选择 PE 输出的参数，仅把文件命名为 app.exe 不会自动选择 Windows。输入 ELF 旁保留 sce_module/ 或 sce_modules/；也可用 --sce-module-path 指定其父目录。','استخدم relinker ومكتبات Windows، أو ابنِهما من المصدر نفسه. يختار --windows إخراج PE؛ الاسم app.exe وحده لا يختار Windows. احتفظ بوحدات الإدخال في sce_module/ أو sce_modules/ بجانب ELF، أو مرّر المجلد الأب عبر --sce-module-path.','Use o relinker e as bibliotecas nativas Windows, ou compile ambos a partir do mesmo código. É --windows que seleciona a saída PE; chamar app.exe ao ficheiro não basta. Mantenha sce_module/ ou sce_modules/ junto do ELF, ou indique a pasta-mãe com --sce-module-path.','Nutze Windows-Relinker und Windows-Bibliotheken oder baue beide aus demselben Quellstand. Erst --windows wählt PE-Ausgabe; der Dateiname app.exe allein reicht nicht. Lege sce_module/ oder sce_modules/ neben die Eingabe-ELF oder gib mit --sce-module-path den übergeordneten Ordner an.','Utilisez le relinker et les bibliothèques Windows, ou compilez les deux depuis le même code. --windows sélectionne la sortie PE ; nommer le fichier app.exe ne suffit pas. Gardez sce_module/ ou sce_modules/ à côté de l’ELF, ou indiquez leur dossier parent avec --sce-module-path.','Usa el relinker y las bibliotecas Windows, o compila ambos desde el mismo código. --windows selecciona la salida PE; llamar app.exe al archivo no basta. Conserva sce_module/ o sce_modules/ junto al ELF, o indica su carpeta superior con --sce-module-path.')],code:'.\\relinker-v0.1.2.exe --windows .\\source\\input.elf .\\runtime\\app.exe\ncd .\\runtime\n.\\app.exe'},
 {id:'dll',title:L('Read the error before replacing files','先看错误，再替换文件','اقرأ الخطأ قبل تبديل الملفات','Leia o erro antes de trocar ficheiros','Lies den Fehler vor einem Dateiaustausch','Lisez l’erreur avant de remplacer les fichiers','Lee el error antes de sustituir archivos'),body:[L('Error 193 usually indicates the wrong binary format: do not put original PS5 libraries in libs/. Error 126 can mean a missing dependent DLL, not only a missing named PRX. Custom builds need matching libgcc_s_seh-1.dll, libstdc++-6.dll and libwinpthread-1.dll in libs/. The release archives include their matching runtime dependencies.','错误 193 通常表示二进制格式不对：不要将原始 PS5 库放入 libs/。错误 126 可能缺少依赖 DLL，不一定是报错中的 PRX 本身缺失。自建库需要将匹配的 libgcc_s_seh-1.dll、libstdc++-6.dll、libwinpthread-1.dll 放入 libs/；发行版压缩包包含对应运行库依赖。','يشير الخطأ 193 غالباً إلى صيغة ملف خاطئة؛ لا تضع مكتبات PS5 الأصلية في libs/. وقد يعني 126 غياب DLL تابعة، لا ملف PRX المذكور فقط. تحتاج مكتباتك المبنية إلى libgcc_s_seh-1.dll وlibstdc++-6.dll وlibwinpthread-1.dll المتوافقة في libs/. تشمل الأرشيفات المنشورة تبعياتها.','O erro 193 costuma indicar um formato binário errado: não coloque bibliotecas PS5 originais em libs/. O erro 126 pode indicar uma DLL dependente em falta. Compilações próprias precisam de libgcc_s_seh-1.dll, libstdc++-6.dll e libwinpthread-1.dll correspondentes em libs/. Os arquivos publicados incluem essas dependências.','Fehler 193 weist meist auf das falsche Binärformat hin: Originale PS5-Bibliotheken gehören nicht in libs/. Fehler 126 kann auch eine fehlende abhängige DLL bedeuten. Eigene Builds benötigen passende libgcc_s_seh-1.dll, libstdc++-6.dll und libwinpthread-1.dll in libs/. Die Release-Archive enthalten ihre Laufzeitabhängigkeiten.','L’erreur 193 indique souvent un mauvais format binaire : ne placez pas les bibliothèques PS5 d’origine dans libs/. L’erreur 126 peut signaler une DLL dépendante absente. Les compilations personnelles ont besoin des fichiers correspondants libgcc_s_seh-1.dll, libstdc++-6.dll et libwinpthread-1.dll dans libs/. Les archives publiées incluent ces dépendances.','El error 193 suele indicar un formato binario incorrecto: no pongas bibliotecas PS5 originales en libs/. El error 126 puede indicar una DLL dependiente ausente. Las compilaciones propias necesitan libgcc_s_seh-1.dll, libstdc++-6.dll y libwinpthread-1.dll correspondientes en libs/. Los archivos publicados incluyen esas dependencias.'),L('Run from a terminal and preserve the earliest error. For direct-memory allocation failures, check total system commit and page-file configuration before blaming the GPU. Do not copy unrelated DLLs from download sites or change the global PATH to hide a dependency mismatch.','在终端运行并保留最早的错误。direct-memory 分配失败时先检查系统提交额度与页面文件配置。不要从不相关下载站拼凑 DLL，也不要用修改全局 PATH 掩盖依赖版本错配。','شغّل من الطرفية واحتفظ بأول خطأ. عند فشل الذاكرة المباشرة افحص التزام الذاكرة وملف الترحيل. لا تجمع DLL من مواقع عشوائية ولا تغيّر PATH العام لإخفاء عدم تطابق التبعيات.','Execute num terminal e guarde o primeiro erro. Nas falhas de memória direta, verifique a memória comprometida e a paginação. Não misture DLL de sites aleatórios nem altere o PATH global para disfarçar incompatibilidades.','Starte im Terminal und bewahre den ersten Fehler auf. Prüfe bei Fehlern direkter Speicherzuweisungen System-Commit und Auslagerungsdatei. Mische keine DLLs aus fremden Downloadquellen und kaschiere Versionskonflikte nicht über den globalen PATH.','Lancez le programme dans un terminal et conservez la première erreur. Pour les échecs de mémoire directe, vérifiez l’engagement mémoire et le fichier d’échange. Ne récupérez pas de DLL au hasard et ne modifiez pas le PATH global pour masquer un conflit.','Ejecuta desde una terminal y conserva el primer error. Si falla la memoria directa, comprueba el compromiso de memoria y la paginación. No mezcles DLL de sitios ajenos ni cambies el PATH global para ocultar incompatibilidades.')]}]},
 {slug:'guides/linux',reviewed:'2026-10-12',title:L('Set up AnyPS5 on Linux','在 Linux 上设置 AnyPS5','إعداد AnyPS5 على Linux','Configurar o AnyPS5 no Linux','AnyPS5 unter Linux einrichten','Configurer AnyPS5 sous Linux','Configurar AnyPS5 en Linux'),description:L("Set up AnyPS5 on Linux: convert the game executable to ELF, organize runtime libraries and resources, select a Vulkan GPU and check udmabuf permissions and memory limits.","设置 AnyPS5 的 Linux 运行环境：转换 ELF、整理库与游戏资源、选择 Vulkan 显卡，并检查 udmabuf 权限和内存限制。","أعدّ AnyPS5 على Linux: حوّل الملف التنفيذي إلى ELF، ونظّم المكتبات والموارد، واختر جهاز Vulkan، وافحص أذونات udmabuf وحدود الذاكرة.","Configure o AnyPS5 no Linux: converta para ELF, organize bibliotecas e recursos, escolha a GPU Vulkan e verifique as permissões de udmabuf e os limites de memória.","Richte AnyPS5 unter Linux ein: ELF erzeugen, Bibliotheken und Ressourcen ordnen, Vulkan-GPU wählen und udmabuf-Rechte sowie Speicherlimits prüfen.","Configurez AnyPS5 sous Linux : conversion ELF, bibliothèques, ressources, choix du GPU Vulkan, permissions udmabuf et limites mémoire.","Configura AnyPS5 en Linux: conversión a ELF, bibliotecas y recursos, elección de GPU Vulkan, permisos de udmabuf y límites de memoria."),sources:[usage,buildDoc],sections:[
 {id:'run',title:L('Relink and launch from the runtime folder','转换后，从运行目录启动','حوّل وشغّل من مجلد التشغيل','Converta e execute na pasta preparada','Relinke und starte im Laufzeitordner','Convertissez puis lancez depuis le dossier prévu','Convierte e inicia desde la carpeta de ejecución'),body:[L('Choose the Linux relinker and Linux-native libraries. Linux output is ELF by default. Keep app0/ resources next to the output, put AnyPS5 libraries in libs/, and run from that directory so relative paths resolve consistently. The commands below use example paths, which you must replace with your own.','选择 Linux relinker 和 Linux 原生库。默认输出为 ELF。将 app0/ 游戏资源与输出放在同一运行目录，AnyPS5 库放入 libs/，在该目录启动以保持相对路径一致。以下路径为示例，需替换成你自己的文件。','اختر relinker ومكتبات Linux. الإخراج الافتراضي ELF. ضع app0/ بجانب الملف الناتج ومكتبات AnyPS5 في libs/، وشغّل من المجلد نفسه لتثبيت المسارات النسبية. استبدل مسارات المثال بملفاتك.','Escolha o relinker e as bibliotecas Linux. A saída predefinida é ELF. Coloque app0/ junto do executável e as bibliotecas AnyPS5 em libs/. Execute nessa pasta para resolver corretamente os caminhos relativos. Substitua os caminhos do exemplo pelos seus.','Wähle Linux-Relinker und Linux-Bibliotheken. Standardmäßig entsteht ELF-Ausgabe. Lege app0/ neben die Ausgabe und AnyPS5-Bibliotheken in libs/. Starte aus diesem Verzeichnis, damit relative Pfade stimmen. Ersetze die Beispielpfade durch deine eigenen.','Choisissez le relinker et les bibliothèques Linux. La sortie par défaut est ELF. Placez app0/ à côté de l’exécutable et les bibliothèques AnyPS5 dans libs/. Lancez depuis ce dossier pour résoudre correctement les chemins relatifs. Remplacez les chemins d’exemple par les vôtres.','Elige el relinker y las bibliotecas Linux. La salida predeterminada es ELF. Coloca app0/ junto al ejecutable y las bibliotecas AnyPS5 en libs/. Inicia desde esa carpeta para resolver las rutas relativas. Sustituye las rutas de ejemplo por las tuyas.')],code:'chmod +x ./relinker-v0.1.2\n./relinker-v0.1.2 ./source/input.elf ./runtime/app.elf\ncd ./runtime\nchmod +x ./app.elf\n./app.elf'},
 {id:'memory',title:L('Check the driver’s memory route','检查驱动使用的内存路径','افحص مسار الذاكرة في التعريف','Verifique o caminho de memória do controlador','Prüfe den Speicherpfad des Treibers','Vérifiez le chemin mémoire du pilote','Revisa la ruta de memoria del controlador'),body:[L('Some Linux driver paths use dma-buf through /dev/udmabuf; NVIDIA uses a different path. A missing device, denied permission or too-small size limit can prevent a run. Identify which path your driver uses and read the current upstream udmabuf instructions before changing system settings.','部分 Linux 驱动路径通过 /dev/udmabuf 使用 dma-buf，NVIDIA 使用不同路径。设备缺失、权限不足或大小限制过低均可能阻止运行。先确认驱动实际路径，再按上游最新 udmabuf 文档调整系统设置。','تستخدم بعض تعريفات Linux مسار dma-buf عبر /dev/udmabuf، بينما يستخدم NVIDIA مساراً مختلفاً. قد يمنع التشغيل غياب الجهاز أو الصلاحيات أو حد الحجم. حدّد مسار تعريفك واقرأ تعليمات udmabuf الحالية قبل تغيير النظام.','Alguns controladores Linux usam dma-buf através de /dev/udmabuf; a NVIDIA usa outro caminho. Um dispositivo ausente, permissões insuficientes ou um limite pequeno podem impedir a execução. Identifique o caminho usado e leia as instruções udmabuf atuais antes de alterar o sistema.','Einige Linux-Treiber verwenden dma-buf über /dev/udmabuf; NVIDIA nutzt einen anderen Pfad. Ein fehlendes Gerät, fehlende Berechtigungen oder ein zu kleines Größenlimit können den Start verhindern. Kläre zuerst den Treiberpfad und lies die aktuellen udmabuf-Anweisungen, bevor du Systemeinstellungen änderst.','Certains pilotes Linux utilisent dma-buf via /dev/udmabuf ; NVIDIA suit un autre chemin. Un périphérique absent, une permission refusée ou une limite trop basse peuvent bloquer l’exécution. Identifiez le chemin utilisé et lisez les instructions udmabuf actuelles avant de modifier le système.','Algunos controladores Linux usan dma-buf mediante /dev/udmabuf; NVIDIA sigue otra ruta. Un dispositivo ausente, permisos insuficientes o un límite pequeño pueden impedir la ejecución. Identifica la ruta usada y consulta las instrucciones actuales de udmabuf antes de cambiar el sistema.'),L('Shader caches, window visibility, compositor and first-run compilation can change FPS substantially. Report whether the cache was warm, whether the window was visible and how long the sample ran. Keep menu, cutscene and gameplay measurements separate.','着色器缓存、窗口可见状态、合成器和首次编译会显著影响 FPS。报告需注明缓存是否预热、窗口是否可见以及采样时长，菜单、过场动画和实际游戏的测量应分开。','قد يغيّر معدل الإطارات التخزين المؤقت للمظللات، وظهور النافذة، ومدير التركيب، وتجميع التشغيل الأول. اذكر حالة الذاكرة المؤقتة وظهور النافذة ومدة القياس، وافصل القائمة والمشهد السينمائي واللعب.','A cache de shaders, a visibilidade da janela, o compositor e a compilação inicial podem alterar bastante os FPS. Indique se a cache estava preparada, se a janela estava visível e a duração da amostra. Separe menu, cinematográficas e jogo.','Shadercache, Fenstersichtbarkeit, Compositor und Erstkompilierung können FPS stark beeinflussen. Notiere Cache-Zustand, Sichtbarkeit und Messdauer. Trenne Werte für Menü, Zwischensequenzen und Gameplay.','Le cache des shaders, la visibilité de la fenêtre, le compositeur et la première compilation peuvent fortement changer les FPS. Précisez l’état du cache, la visibilité et la durée de mesure. Séparez menu, cinématique et jeu.','La caché de shaders, la visibilidad de la ventana, el compositor y la primera compilación pueden cambiar mucho los FPS. Indica el estado de la caché, si la ventana era visible y la duración de la muestra. Separa menú, cinemáticas y juego.')]}]},
 {slug:'guides/build',reviewed:'2026-10-12',title:L("Build AnyPS5 from source","从源码编译 AnyPS5","بناء AnyPS5 من المصدر","Compilar o AnyPS5 a partir do código","AnyPS5 aus dem Quellcode bauen","Compiler AnyPS5 depuis les sources","Compilar AnyPS5 desde el código"),description:L("Build AnyPS5 from source with Git submodules, the documented toolchain and CMake. Rebuild the libs target and keep matching tools, libraries and commit details.","按上游工具链要求编译 AnyPS5：克隆 Git 子模块、配置 CMake、构建 libs 目标，并保留配套工具、库与准确提交记录。","ابنِ AnyPS5 من المصدر باستخدام وحدات Git الفرعية وسلسلة الأدوات الموثقة وCMake. أعد بناء هدف libs واحتفظ بالأدوات والمكتبات ومعرّف التعديل المتطابق.","Compile o AnyPS5 a partir do código com os submódulos Git, as ferramentas documentadas e CMake. Reconstrua o alvo libs e registe a revisão utilizada.","Baue AnyPS5 aus dem Quellcode mit Git-Submodulen, der dokumentierten Toolchain und CMake. Erzeuge das libs-Ziel und halte Tools, Bibliotheken und Commit zusammen.","Compilez AnyPS5 depuis les sources avec les sous-modules Git, les outils documentés et CMake. Reconstruisez la cible libs et conservez la révision utilisée.","Compila AnyPS5 desde el código con los submódulos Git, las herramientas documentadas y CMake. Reconstruye el objetivo libs y registra la revisión utilizada."),sources:[buildDoc],sections:[
 {id:'checkout',title:L('Use a recorded source revision','保留准确的源码版本','احفظ نسخة المصدر الدقيقة','Registe a revisão do código','Halte den Quellstand fest','Conservez la révision du code','Registra la revisión del código'),body:[L('Install the documented toolchain first. Clone recursively, record git rev-parse HEAD, and keep local patches in a separate branch. A PR number alone does not identify the exact patch tested: commits and conflict resolutions can change.','先安装文档指定的工具链。递归克隆并记录 git rev-parse HEAD，将本地补丁保留在独立分支。仅有 PR 编号不足以标识测试补丁，提交和冲突处理方式都可能变化。','ثبّت سلسلة الأدوات الموثقة أولاً. استنسخ مع الوحدات الفرعية واحفظ git rev-parse HEAD، وضع التعديلات المحلية في فرع مستقل. رقم PR وحده لا يحدد التعديل المختبَر؛ قد تتغير الالتزامات وحلول التعارض.','Instale primeiro as ferramentas documentadas. Clone com submódulos, registe git rev-parse HEAD e mantenha patches locais num ramo próprio. O número de um PR não identifica, por si só, a alteração testada: commits e resoluções de conflitos podem mudar.','Installiere zuerst die dokumentierte Toolchain. Klone rekursiv, notiere git rev-parse HEAD und halte lokale Patches in einem eigenen Branch. Eine PR-Nummer identifiziert den getesteten Patch nicht vollständig: Commits und Konfliktlösungen können sich ändern.','Installez d’abord les outils documentés. Clonez avec les sous-modules, notez git rev-parse HEAD et gardez vos correctifs sur une branche distincte. Le numéro d’une PR ne suffit pas à identifier le code testé : commits et résolutions de conflits peuvent changer.','Instala primero las herramientas documentadas. Clona con submódulos, registra git rev-parse HEAD y guarda los parches locales en una rama propia. El número de una PR no identifica por sí solo el código probado: los commits y la resolución de conflictos pueden cambiar.')],code:'git clone --recursive https://github.com/boykopovar/AnyPS5.git\ncd AnyPS5\ngit rev-parse HEAD\ncmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release\ncmake --build build --parallel\ncmake --build build --target libs --parallel'},
 {id:'libraries',title:L('Do not skip the libraries target','不要漏掉 libs 构建目标','لا تتجاوز هدف libs','Não ignore o alvo libs','Überspringe das libs-Ziel nicht','N’oubliez pas la cible libs','No omitas el objetivo libs'),body:[L('The explicit libs target is required to rebuild replacement system libraries. Copy the produced host libraries from build/core/libs/libs/ into the runtime libs/ folder. Relinker-only builds do not provide a complete runtime. macOS-related relinker options do not establish supported macOS gameplay.','必须显式构建 libs 目标以更新替代系统库。将 build/core/libs/libs/ 中生成的主机库复制到运行目录的 libs/。仅构建 relinker 不会得到完整运行环境；出现 macOS 转换选项也不能证明支持 macOS 游戏运行。','يلزم هدف libs الصريح لإعادة بناء مكتبات النظام البديلة. انسخ مكتبات المضيف من build/core/libs/libs/ إلى libs/ في بيئة التشغيل. بناء relinker وحده لا يوفّر بيئة كاملة، وخيارات macOS في الأداة لا تثبت دعم اللعب عليه.','É necessário executar explicitamente o alvo libs para reconstruir as bibliotecas de sistema alternativas. Copie o resultado de build/core/libs/libs/ para libs/ na pasta de execução. Compilar apenas o relinker não produz um ambiente completo; opções macOS não comprovam suporte de jogo nesse sistema.','Das explizite libs-Ziel baut die Ersatz-Systembibliotheken neu. Kopiere die Hostbibliotheken aus build/core/libs/libs/ nach libs/ im Laufzeitordner. Ein reiner Relinker-Build liefert keine vollständige Laufzeit. macOS-Optionen im Relinker belegen keine unterstützte Spielausführung auf macOS.','La cible explicite libs est nécessaire pour reconstruire les bibliothèques système de remplacement. Copiez les fichiers de build/core/libs/libs/ dans le dossier libs/ d’exécution. Compiler seulement le relinker ne fournit pas un environnement complet ; ses options macOS ne prouvent pas une prise en charge du jeu sur macOS.','Debes ejecutar explícitamente el objetivo libs para reconstruir las bibliotecas de sistema alternativas. Copia el resultado de build/core/libs/libs/ a libs/ en la carpeta de ejecución. Compilar solo el relinker no crea un entorno completo; sus opciones macOS no demuestran soporte para jugar en macOS.')]}]},
 {slug:'guides/input',title:L("AnyPS5 controller and keyboard settings","AnyPS5 手柄与键盘设置","إعداد التحكم ولوحة المفاتيح في AnyPS5","Configurar comandos e teclado no AnyPS5","Controller und Tastatur in AnyPS5 einrichten","Configurer manettes et clavier dans AnyPS5","Configurar mandos y teclado en AnyPS5"),description:L("Configure AnyPS5 keyboard mappings and SDL controllers, use an INI example, and check touchpad limitations and input failures.","设置 AnyPS5 键盘映射与 SDL 手柄，查看 INI 示例、触摸板限制和输入故障排查方法，并区分稳定功能与待审核方案。","اضبط لوحة المفاتيح ووحدات التحكم المتوافقة مع SDL في AnyPS5 باستخدام مثال INI، وتحقق من دعم لوحة اللمس وأسباب عدم استجابة الإدخال.","Configure o teclado e os comandos compatíveis com SDL no AnyPS5. Use um exemplo INI e verifique as limitações do painel tátil e as falhas de entrada.","Konfiguriere Tastatur und SDL-Controller in AnyPS5 mit einem INI-Beispiel. Prüfe Touchpad-Unterstützung und Ursachen für fehlende Eingaben.","Configurez le clavier et les manettes compatibles SDL dans AnyPS5 avec un exemple INI. Vérifiez le pavé tactile et les causes d’une absence de réponse.","Configura el teclado y los mandos compatibles con SDL en AnyPS5 con un ejemplo INI. Revisa las limitaciones del panel táctil y los fallos de entrada."),sources:[sourceDoc('INPUT_MAPPING'),usage],sections:[
 {id:'mapping',title:L('Use the documented INI mapping','使用文档规定的 INI 配置','استخدم تعيين INI الموثق','Use o ficheiro INI documentado','Nutze die dokumentierte INI-Konfiguration','Utilisez le fichier INI documenté','Usa la configuración INI documentada'),body:[L('The current input layer uses SDL-compatible controllers and supports an INI mapping beside the output executable. ANYPS5_INPUT_CONFIG selects an explicit configuration path. Actions omitted from the file retain their defaults, so you can change only the bindings you need. Copy the upstream mapping example rather than inventing key names.','当前输入层识别 SDL 兼容手柄，支持在输出可执行文件旁放置 INI 映射。ANYPS5_INPUT_CONFIG 可指定配置路径；配置中省略的动作保留默认值，因此可以只修改需要的按键。请以文档样例为基础，不要自行猜测配置键名。','تتعرف طبقة الإدخال الحالية إلى وحدات التحكم المتوافقة مع SDL، وتدعم ملف INI بجانب البرنامج. يحدد ANYPS5_INPUT_CONFIG مساراً صريحاً. تحتفظ الأفعال غير المذكورة بقيمها الافتراضية، لذا عدّل المطلوب فقط. استخدم مثال المشروع بدلاً من تخمين أسماء المفاتيح.','A camada de entrada atual reconhece comandos compatíveis com SDL e aceita um INI junto do executável. ANYPS5_INPUT_CONFIG seleciona um caminho explícito. As ações omitidas mantêm os valores predefinidos; altere apenas o necessário. Parta do exemplo original, sem inventar nomes de opções.','Die aktuelle Eingabeschicht erkennt SDL-kompatible Controller und unterstützt eine INI-Datei neben der Programmdatei. ANYPS5_INPUT_CONFIG legt einen expliziten Pfad fest. Nicht aufgeführte Aktionen behalten ihre Standardwerte. Ändere nur benötigte Tasten und verwende die Originalvorlage statt erfundener Schlüsselnamen.','La couche d’entrée actuelle reconnaît les manettes compatibles SDL et accepte un fichier INI près de l’exécutable. ANYPS5_INPUT_CONFIG définit un chemin explicite. Les actions absentes conservent leurs valeurs par défaut. Modifiez seulement les touches nécessaires à partir de l’exemple original.','La capa de entrada actual reconoce mandos compatibles con SDL y admite un INI junto al ejecutable. ANYPS5_INPUT_CONFIG selecciona una ruta concreta. Las acciones omitidas conservan sus valores predeterminados; cambia solo lo necesario y usa el ejemplo original para los nombres de las opciones.')],links:[{label:'INPUT_MAPPING.md',url:sourceDoc('INPUT_MAPPING')}]},
 {id:'limits',title:L('Test the actual action','按具体操作验证','اختبر الفعل نفسه','Teste a ação concreta','Prüfe die konkrete Aktion','Testez l’action réelle','Prueba la acción concreta'),body:[L('Touchpad click support does not imply touch coordinates. Check movement, camera, confirmation, cancellation and any game-specific touch actions separately. If a menu does not advance, report the attempted action and whether keyboard and controller behave differently; do not classify that as working gameplay.','支持触控板点击不代表支持触点坐标。分别验证移动、镜头、确认、取消与游戏专用触控操作。菜单无法前进时，报告尝试的操作及键盘、手柄是否表现不同，不要因此写成已能正常游玩。','دعم نقر لوحة اللمس لا يعني دعم إحداثيات اللمس. اختبر الحركة والكاميرا والتأكيد والإلغاء وأفعال اللمس الخاصة باللعبة على حدة. إذا لم تتقدم القائمة، سجّل الفعل والفرق بين لوحة المفاتيح ووحدة التحكم، ولا تعتبر ذلك لعباً يعمل.','Suportar o clique do touchpad não implica suportar coordenadas de toque. Teste movimento, câmara, confirmação, cancelamento e ações específicas separadamente. Se o menu não avançar, indique a ação tentada e as diferenças entre teclado e comando; isso não comprova jogo funcional.','Touchpad-Klicks bedeuten keine Unterstützung für Berührungskoordinaten. Teste Bewegung, Kamera, Bestätigung, Abbruch und spielspezifische Touch-Aktionen einzeln. Wenn ein Menü nicht weitergeht, dokumentiere die Aktion und Unterschiede zwischen Tastatur und Controller; das ist noch kein funktionierendes Gameplay.','Le clic du pavé tactile ne signifie pas que ses coordonnées sont prises en charge. Testez séparément déplacement, caméra, validation, annulation et gestes propres au jeu. Si le menu ne progresse pas, précisez l’action et les différences entre clavier et manette ; cela ne valide pas le gameplay.','Soportar el clic del panel táctil no implica soportar coordenadas táctiles. Prueba movimiento, cámara, confirmación, cancelación y acciones especiales por separado. Si el menú no avanza, indica qué acción intentaste y las diferencias entre teclado y mando; eso no demuestra que el juego funcione.')]}]},
 {slug:'guides/language-fonts',title:L("AnyPS5 language, font and GPU settings","AnyPS5 语言、字体与显卡设置","إعداد اللغة والخطوط وGPU في AnyPS5","Idioma, fontes e GPU no AnyPS5","Sprache, Schrift und GPU in AnyPS5","Langue, polices et GPU dans AnyPS5","Idioma, fuentes y GPU en AnyPS5"),description:L("Set AnyPS5 game language, system-font paths and Vulkan GPU selection. Check Noto file formats and distinguish missing fonts from untranslated content.","了解 AnyPS5 游戏语言、系统字体目录与 Vulkan 显卡选择设置，核对 Noto 文件格式，区分缺字体和游戏未提供翻译。","اضبط لغة اللعبة وخطوط النظام وجهاز Vulkan في AnyPS5. تحقق من صيغ ملفات Noto وميّز بين غياب الخطوط وعدم توفر ترجمة اللعبة.","Defina o idioma do jogo, os tipos de letra do sistema e a GPU Vulkan no AnyPS5. Verifique os formatos Noto e distinga texto invisível de traduções em falta.","Stelle Spielsprache, Systemschriftarten und Vulkan-GPU in AnyPS5 ein. Prüfe Noto-Dateiformate und unterscheide fehlende Schrift von fehlenden Übersetzungen.","Réglez la langue du jeu, les polices système et le GPU Vulkan dans AnyPS5. Vérifiez les formats Noto et distinguez les polices absentes des traductions manquantes.","Configura el idioma del juego, las fuentes del sistema y la GPU Vulkan en AnyPS5. Comprueba los formatos Noto y distingue las fuentes ausentes de las traducciones que faltan."),sources:[usage],sections:[
 {id:'language',title:L('Set the game’s system language','设置游戏读取的系统语言','حدّد لغة النظام للعبة','Defina o idioma de sistema do jogo','Stelle die Systemsprache für das Spiel ein','Définissez la langue système du jeu','Configura el idioma de sistema del juego'),body:[L('ANYPS5_LANGUAGE sets the emulated system-language value in current main. The values below are those documented upstream. A game may not include every language, and changing this website’s language does not change the game. Confirm that your build contains this setting before using it.','当前 main 中的 ANYPS5_LANGUAGE 设置游戏读取的系统语言值，下列数值来自上游文档。游戏本身可能不包含所有语言，切换本站语言也不会修改游戏。使用前确认构建已包含这一设置。','يضبط ANYPS5_LANGUAGE لغة النظام التي تراها اللعبة في main الحالي. القيم أدناه من وثائق المشروع. قد لا تضم اللعبة كل اللغات، وتغيير لغة الموقع لا يغيرها. تأكد من وجود الإعداد في بنائك أولاً.','ANYPS5_LANGUAGE define o valor do idioma de sistema no main atual. Os valores abaixo vêm da documentação original. Um jogo pode não incluir todos os idiomas, e mudar o idioma deste site não altera o jogo. Confirme que a sua compilação suporta a opção.','ANYPS5_LANGUAGE setzt im aktuellen main die vom Spiel gelesene Systemsprache. Die Werte unten stammen aus der Originaldokumentation. Nicht jedes Spiel enthält alle Sprachen, und die Website-Sprache ändert keine Spieleinstellung. Prüfe zuerst, ob dein Build die Option enthält.','ANYPS5_LANGUAGE définit la langue système lue par le jeu dans le main actuel. Les valeurs ci-dessous viennent de la documentation originale. Un jeu peut ne pas inclure toutes les langues ; changer celle du site ne modifie pas le jeu. Vérifiez que votre version prend en charge cette option.','ANYPS5_LANGUAGE define el idioma de sistema que lee el juego en el main actual. Los valores siguientes proceden de la documentación original. El juego puede no incluir todos los idiomas; cambiar el del sitio no cambia el juego. Comprueba que tu compilación admite la opción.')],code:'ANYPS5_LANGUAGE\n1  English (US)\n2  Français\n3  Español\n4  Deutsch\n7  Português (Portugal)\n11 简体中文\n21 العربية'},
 {id:'fonts',title:L('Missing text and multiple GPUs','缺字与多显卡环境','النص المفقود وتعدد البطاقات','Texto em falta e várias GPU','Fehlende Schrift und mehrere GPUs','Texte absent et plusieurs GPU','Texto ausente y varias GPU'),body:[L('ANYPS5_SYSTEM_FONTS can point to system-font replacements. Open-source Noto fonts must be named as the runtime expects; a font folder alone does not repair every rendering or font-atlas bug. ANYPS5_GPU selects a Vulkan device by name substring. Confirm the selected device in the log, especially on laptops with integrated and discrete graphics.','ANYPS5_SYSTEM_FONTS 可指定系统字体替代文件，开源 Noto 字体需要使用运行库期望的文件名。字体目录不会自动修复所有渲染或字形图集问题。ANYPS5_GPU 通过设备名子串选择 Vulkan 显卡；尤其在双显卡笔记本上，应在日志中确认实际选择。','يمكن أن يحدد ANYPS5_SYSTEM_FONTS بدائل خطوط النظام. تحتاج خطوط Noto المفتوحة إلى الأسماء التي تتوقعها البيئة؛ مجلد الخطوط لا يصلح كل عيوب الرسم أو أطلس الخط. يختار ANYPS5_GPU جهاز Vulkan بجزء من اسمه. تأكد من الجهاز في السجل، خصوصاً في الحواسيب ذات بطاقتين.','ANYPS5_SYSTEM_FONTS pode indicar tipos de letra de substituição. Os Noto de código aberto devem ter os nomes esperados pela execução; uma pasta não resolve todos os erros gráficos ou de atlas. ANYPS5_GPU seleciona um dispositivo Vulkan por parte do nome. Confirme-o no registo, sobretudo em portáteis com duas GPU.','ANYPS5_SYSTEM_FONTS verweist auf Ersatz-Systemschriftarten. Offene Noto-Schriften müssen die von der Laufzeit erwarteten Dateinamen haben; ein Schriftordner behebt nicht jeden Render- oder Fontatlasfehler. ANYPS5_GPU wählt ein Vulkan-Gerät über einen Teil seines Namens. Prüfe das gewählte Gerät im Log, besonders bei Laptops mit integrierter und dedizierter Grafik.','ANYPS5_SYSTEM_FONTS peut désigner des polices système de remplacement. Les polices Noto doivent porter les noms attendus ; un dossier de polices ne corrige pas tous les défauts de rendu ou d’atlas. ANYPS5_GPU sélectionne un périphérique Vulkan par une partie de son nom. Vérifiez le choix dans le journal, surtout sur un portable à deux GPU.','ANYPS5_SYSTEM_FONTS puede indicar fuentes de sistema alternativas. Las fuentes Noto deben llevar los nombres esperados; una carpeta no corrige todos los fallos de renderizado o atlas. ANYPS5_GPU selecciona un dispositivo Vulkan por parte de su nombre. Confirma la elección en el registro, sobre todo en portátiles con dos GPU.')]}]},
];

export const articles:Article[]=baseArticles.map(article=>({...article,...(article.slug==='downloads'?{title:downloadTitle,description:downloadDescription}:{}),...(['start','downloads','guides/windows','guides/linux','guides/build','guides/input','guides/language-fonts'].includes(article.slug)?{reviewed:'2026-10-20'}:article.slug==='requirements'?{reviewed:'2026-10-15'}:{}),sections:[...(article.slug==='start'?[quickStart]:[]),...article.sections,...(guideSupplements[article.slug]||[])]}));

for(const article of articles){if(["start","downloads","guides/build","guides/input","guides/language-fonts"].includes(article.slug))article.reviewed="2026-10-21";}

for(const article of articles){if(["guides/linux","guides/windows","guides/build"].includes(article.slug))article.reviewed="2026-10-22";}

articles.find(article=>article.slug==="guides/language-fonts")!.reviewed="2026-10-22";

for(const article of articles){if(["requirements","guides/windows","guides/build","guides/linux","guides/input"].includes(article.slug))article.reviewed="2026-10-23";}

for(const article of articles){if(["guides/windows","guides/linux","guides/build","guides/input"].includes(article.slug))article.reviewed="2026-10-24";}

for(const article of articles){if(["guides/windows","guides/linux","guides/build","guides/input"].includes(article.slug))article.reviewed="2026-10-25";}

for(const article of articles){if(["guides/windows","guides/linux","guides/build"].includes(article.slug)){article.reviewed="2026-10-26";}}

for(const article of articles){if(["guides/input","guides/language-fonts"].includes(article.slug))article.reviewed="2026-10-26";}

for(const article of articles){if(["guides/input","guides/build","guides/windows","guides/linux"].includes(article.slug))article.reviewed="2026-10-27";}

for(const article of articles){if(["guides/build", "guides/input", "guides/linux", "guides/windows", "start", "troubleshooting"].includes(article.slug))article.reviewed="2026-10-28";}

for(const article of articles){if(["download", "getting-started", "guides/build", "guides/linux", "guides/windows", "troubleshooting"].includes(article.slug))article.reviewed="2026-10-30";}

// Release and source documentation reviewed 3 November 2026.
for(const article of articles){if(["start","downloads"].includes(article.slug)){for(const section of article.sections){if(["release","browser-converter"].includes(section.id)){section.body=[{
 "en": "v0.1.4 was published on 30 October 2026 at 23:09 UTC, revision 7fcab08f71e463b1768730a626a0f5472d336708. Windows and Linux relinkers, runtime libraries, input/usage notes and the web converter are available. Both live browser manifests match this revision and the library archive hashes. Use matching platform files; no games or Mac runtime are included. Later main changes and local game patches remain separate from this release.",
 "zh": "v0.1.4 于 2026 年 10 月 30 日 23:09 UTC 发布，提交为 7fcab08f71e463b1768730a626a0f5472d336708，提供 Windows／Linux 转换器、运行库、输入／使用文档和网页转换器。两份在线清单的提交及库压缩包哈希均已核对一致。工具与库按平台配套；不含游戏或 Mac 运行库，后续 main 修改和游戏本地补丁另行区分。",
 "ar": "صدر v0.1.4 في 30 أكتوبر 2026 الساعة 23:09 UTC، بالمراجعة 7fcab08f71e463b1768730a626a0f5472d336708. تتوفر أدوات Windows وLinux ومكتبات التشغيل والوثائق ومحول الويب. تطابق القائمتان المباشرتان المراجعة وبصمات أرشيف المكتبات. استخدم ملفات متوافقة للنظام نفسه؛ لا ألعاب ولا مكتبات تشغيل Mac. تغييرات main اللاحقة والتعديلات المحلية منفصلة.",
 "pt": "v0.1.4 foi publicado em 30 de outubro de 2026 às 23:09 UTC, revisão 7fcab08f71e463b1768730a626a0f5472d336708. Inclui conversores e bibliotecas Windows/Linux, documentação e conversor web. Os dois manifestos online coincidem na revisão e nos hashes das bibliotecas. Use pares da mesma plataforma; não inclui jogos nem runtime Mac. Alterações posteriores de main e patches locais são distintos desta versão.",
 "de": "v0.1.4 erschien am 30. Oktober 2026 um 23:09 UTC, Revision 7fcab08f71e463b1768730a626a0f5472d336708. Verfügbar sind Windows-/Linux-Konverter, Laufzeitbibliotheken, Dokumentation und Web-Konverter. Beide Live-Manifeste stimmen bei Revision und Bibliotheks-Hashes überein. Passende Plattformdateien verwenden; Spiele und Mac-Runtime sind nicht enthalten. Spätere Main-Änderungen und lokale Spielpatches bleiben getrennt.",
 "fr": "v0.1.4 a été publié le 30 octobre 2026 à 23:09 UTC, révision 7fcab08f71e463b1768730a626a0f5472d336708. Il propose les convertisseurs et bibliothèques Windows/Linux, la documentation et le convertisseur web. Les deux manifestes en ligne correspondent à cette révision et aux empreintes des bibliothèques. Utilisez des fichiers de même plateforme ; aucun jeu ni runtime Mac n’est inclus. Les modifications ultérieures de main et les correctifs locaux restent distincts.",
 "es": "v0.1.4 se publicó el 30 de octubre de 2026 a las 23:09 UTC, revisión 7fcab08f71e463b1768730a626a0f5472d336708. Ofrece conversores y bibliotecas Windows/Linux, documentación y conversor web. Ambos manifiestos online coinciden en revisión y hashes de las bibliotecas. Usa archivos de la misma plataforma; no incluye juegos ni runtime Mac. Los cambios posteriores de main y los parches locales quedan separados."
}];section.title=section.id==="release"?{
 "en": "Published release / v0.1.4",
 "zh": "正式发行版 / v0.1.4",
 "ar": "الإصدار المنشور / v0.1.4",
 "pt": "Versão publicada / v0.1.4",
 "de": "Veröffentlichte Version / v0.1.4",
 "fr": "Version publiée / v0.1.4",
 "es": "Versión publicada / v0.1.4"
}:{
 "en": "Browser converter paired with v0.1.4",
 "zh": "与 v0.1.4 配套的网页转换器",
 "ar": "محول الويب المتوافق مع v0.1.4",
 "pt": "Conversor web para v0.1.4",
 "de": "Web-Konverter passend zu v0.1.4",
 "fr": "Convertisseur web associé à v0.1.4",
 "es": "Conversor web para v0.1.4"
};section.links=[{label:"v0.1.4",url:"https://github.com/boykopovar/AnyPS5/releases/tag/v0.1.4"}];}}article.sources=article.sources.map(source=>source.endsWith("/releases/tag/v0.1.3")?"https://github.com/boykopovar/AnyPS5/releases/tag/v0.1.4":source);}}
for(const section of articles.find(a=>a.slug==="guides/input")!.sections){if(section.id==="main-screenshots-timelines")section.body=[{
 "en": "v0.1.4 now documents F12 screenshots and timed input. F12 saves the next displayed frame as PNG in anyps5-screenshots/ or ANYPS5_SCREENSHOTS, without overlay/window scaling; PQ becomes SDR. Write failure stops the game. tools/pad_timeline.py validates ordered nonoverlapping button events (≤4096,≤1h, holds1–5000ms). Timelines follow wall time/controller reads, can miss events during loading and do not reproduce game state.",
 "zh": "v0.1.4 已记录 F12 截图及定时输入。F12将下一显示帧存PNG到anyps5-screenshots/或ANYPS5_SCREENSHOTS，不含叠加／窗口缩放，PQ转SDR，写失败会停止游戏。tools/pad_timeline.py验证有序不重叠按钮事件（≤4096、≤1小时、按住1–5000ms）。序列依墙钟／手柄读取，加载可漏事件，不能复现游戏状态。",
 "ar": "يوثق v0.1.4 الآن صور F12 والإدخال الموقّت. F12 يحفظ إطارPNG بلاoverlay/تحجيم فيanyps5-screenshots/ أوANYPS5_SCREENSHOTS،PQ إلىSDR وفشل الكتابة يوقف اللعبة. pad_timeline.py يتحقق≤4096 حدث/ساعة ومدة1–5000ms؛ توقيت حقيقي قد يفوت أثناء التحميل ولا يعيد حالة اللعبة.",
 "pt": "v0.1.4 documenta agora capturas F12 e entrada temporizada. F12 guardaPNG sem overlay/escala emanyps5-screenshots/ ouANYPS5_SCREENSHOTS, PQ→SDR; erro de escrita para jogo. pad_timeline.py valida≤4096 eventos/1h, durações1–5000ms. Tempo real/leitura do comando pode perder eventos ao carregar, sem reproduzir estado.",
 "de": "v0.1.4 dokumentiert jetzt F12-Screenshots und zeitgesteuerte Eingaben. F12 speichertPNG ohne Overlay/Fensterskalierung inanyps5-screenshots/ oderANYPS5_SCREENSHOTS, PQ→SDR; Schreibfehler stoppt Spiel. pad_timeline.py prüft≤4096 Ereignisse/1h mit1–5000ms. Echtzeit/Controllerabfragen können Ladeereignisse verpassen, kein Spielzustandsreplay.",
 "fr": "v0.1.4 documente désormais les captures F12 et les entrées temporisées. F12 sauvePNG sans overlay/échelle dansanyps5-screenshots/ ouANYPS5_SCREENSHOTS, PQ→SDR ; échec écrit arrête jeu. pad_timeline.py valide≤4096 événements/1h, durées1–5000ms. Horloge/lectures manette peuvent rater entrées au chargement, sans rejouer état.",
 "es": "v0.1.4 ya documenta capturas F12 y entrada temporizada. F12 guardaPNG sin overlay/escala enanyps5-screenshots/ oANYPS5_SCREENSHOTS, PQ→SDR; fallo al escribir para juego. pad_timeline.py valida≤4096 eventos/1h, duración1–5000ms. Reloj/lecturas de mando pueden perder eventos al cargar, sin reproducir estado."
}];}
for(const article of articles){if([
 "start",
 "downloads",
 "guides/windows",
 "guides/linux",
 "guides/build"
].includes(article.slug)){article.sections.push({
 "id": "main-dry-run-boundary",
 "title": {
  "en": "Preview conversion without writing output",
  "zh": "只预检转换，不写入输出",
  "ar": "معاينة التحويل دون كتابة",
  "pt": "Pré-visualizar a conversão sem escrever",
  "de": "Konvertierung ohne Dateiausgabe prüfen",
  "fr": "Prévisualiser la conversion sans écrire",
  "es": "Previsualizar la conversión sin escribir"
 },
 "body": [
  {
   "en": "Reviewed main adds relinker --dry-run; it is not documented in the v0.1.4 usage attachment. Output paths are still required, but conversion is prepared in memory without creating directories, files or permissions. This cannot validate destination write access. It conflicts with --autorun and --verify-patches; conversion failures return 2. A successful preview is neither a launch nor a patch-byte verification.",
   "zh": "复核的 main 新增 relinker --dry-run，v0.1.4 附带使用文档尚无此选项。仍须给输出路径，但只在内存中准备转换，不创建目录、文件或修改权限，因此不验证目标写权限。它与 --autorun、--verify-patches 冲突，转换失败退出 2。预检成功不等于启动成功或补丁字节验证。",
   "ar": "يضيف main المراجَع relinker --dry-run، وهو غير موثق في مرفق v0.1.4. يلزم مسار إخراج، لكن التحضير في الذاكرة دون إنشاء ملفات أو تغيير الصلاحيات، ولا يتحقق من إمكانية الكتابة. يتعارض مع --autorun و--verify-patches؛ فشل التحويل يعيد 2. نجاح المعاينة ليس تشغيل اللعبة أو تحقق بايتات التعديل.",
   "pt": "Main revisto acrescenta relinker --dry-run, ausente da documentação anexada a v0.1.4. Exige caminhos de saída, mas prepara tudo em memória sem criar ficheiros, pastas ou permissões. Não verifica acesso de escrita. É incompatível com --autorun e --verify-patches; falhas devolvem 2. Sucesso não prova arranque nem valida bytes de patches.",
   "de": "Geprüftes Main ergänzt relinker --dry-run; die v0.1.4-Anleitung dokumentiert es noch nicht. Ausgabepfade bleiben nötig, die Vorbereitung erfolgt aber im Speicher ohne Dateien, Ordner oder Rechteänderungen. Schreibzugriff wird nicht geprüft. Unvereinbar mit --autorun und --verify-patches; Konvertierungsfehler liefern 2. Erfolg bestätigt weder Spielstart noch Patchbytes.",
   "fr": "Main ajoute relinker --dry-run, absent du guide joint à v0.1.4. Les chemins de sortie restent obligatoires, mais la préparation en mémoire ne crée ni fichiers, ni dossiers, ni permissions. Elle ne vérifie pas les droits d’écriture. Incompatible avec --autorun et --verify-patches ; un échec renvoie 2. La réussite ne prouve ni lancement ni validité des octets d’un correctif.",
   "es": "Main añade relinker --dry-run, ausente de la guía adjunta a v0.1.4. Exige rutas de salida, pero prepara todo en memoria sin crear archivos, carpetas ni permisos. No comprueba acceso de escritura. Es incompatible con --autorun y --verify-patches; un fallo devuelve 2. El éxito no confirma inicio ni bytes de parches."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · a4eca2a056",
   "url": "https://github.com/boykopovar/AnyPS5/blob/a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8/docs/user/USAGE.md"
  }
 ]
});}}
for(const article of articles){if([
 "guides/windows",
 "guides/linux",
 "guides/input",
 "requirements"
].includes(article.slug)){article.sections.push({
 "id": "main-videoout-output-policy",
 "title": {
  "en": "Output class, display and frame limits are different settings",
  "zh": "输出档位、显示器与限帧是不同设置",
  "ar": "فئة العرض والشاشة وحد الإطارات إعدادات مختلفة",
  "pt": "Classe de saída, monitor e limite de imagens",
  "de": "Ausgabeklasse, Monitor und Bildlimit unterscheiden",
  "fr": "Classe de sortie, écran et limite d’images",
  "es": "Clase de salida, pantalla y límite de imágenes"
 },
 "body": [
  {
   "en": "Reviewed main documents APS5_OUTPUT_RESOLUTION=WxH: both dimensions below 3840×2160 select the 1080p VideoOut class; otherwise it reports the 2160 class. This does not force internal rendering resolution, and some games ignore it. ANYPS5_DISPLAY_INDEX chooses a connected SDL display by zero-based index. ANYPS5_FPS_LIMIT accepts 0.5–1000000 with at most three decimals; 0/empty/unset disables it. A cap cannot accelerate a slow game or exceed its output cadence. These settings are absent from v0.1.4’s usage attachment; preserve the actual tested commit.",
   "zh": "复核 main 的 APS5_OUTPUT_RESOLUTION=WxH 只有宽小于 3840 且高小于 2160 才选择 1080p VideoOut 档位，否则报告 2160 档位；不强制内部渲染分辨率，部分游戏会忽略。ANYPS5_DISPLAY_INDEX 用从 0 开始的索引选择已连接 SDL 显示器。ANYPS5_FPS_LIMIT 接受 0.5–1000000、最多三位小数，0／空值／未设置为不限帧；它不能加速慢游戏或突破输出节奏。v0.1.4 附带使用文档尚无这些设置，报告须保留实际提交。",
   "ar": "في main، يختار APS5_OUTPUT_RESOLUTION=WxH فئة VideoOut ‏1080p إذا كان العرض أقل من 3840 والارتفاع أقل من 2160، وإلا فئة 2160. لا يفرض دقة الرسم الداخلية وقد تتجاهله اللعبة. يختار ANYPS5_DISPLAY_INDEX شاشة SDL بفهرس يبدأ من صفر. يقبل ANYPS5_FPS_LIMIT ‏0.5–1000000 حتى ثلاث منازل؛ 0 أو الفراغ أو الغياب يعطله. لا يسرّع لعبة بطيئة أو يتجاوز إيقاعها. هذه الخيارات غائبة عن مرفق v0.1.4؛ سجّل التعديل المختبَر.",
   "pt": "Em main, APS5_OUTPUT_RESOLUTION=WxH escolhe a classe VideoOut 1080p apenas com largura inferior a 3840 e altura inferior a 2160; caso contrário, 2160. Não força a resolução interna e alguns jogos ignoram-no. ANYPS5_DISPLAY_INDEX escolhe um monitor SDL ligado, com índice a partir de zero. ANYPS5_FPS_LIMIT aceita 0.5–1000000 e até três casas decimais; 0/vazio/ausente desativa. Não acelera jogos lentos nem ultrapassa a cadência de saída. Opções ausentes do anexo v0.1.4; registe o commit.",
   "de": "In Main wählt APS5_OUTPUT_RESOLUTION=WxH nur bei Breite unter 3840 und Höhe unter 2160 die VideoOut-Klasse 1080p, sonst 2160. Interne Renderauflösung wird nicht erzwungen; manche Spiele ignorieren es. ANYPS5_DISPLAY_INDEX wählt einen verbundenen SDL-Monitor ab Index null. ANYPS5_FPS_LIMIT erlaubt 0.5–1000000 mit höchstens drei Nachkommastellen; 0/leer/ungesetzt deaktiviert. Das beschleunigt kein langsames Spiel und überschreitet keine Ausgaberate. Im v0.1.4-Anhang fehlen diese Optionen; Testcommit festhalten.",
   "fr": "Dans main, APS5_OUTPUT_RESOLUTION=WxH choisit la classe VideoOut 1080p seulement si largeur <3840 et hauteur <2160, sinon 2160. Il ne force pas la résolution interne et certains jeux l’ignorent. ANYPS5_DISPLAY_INDEX choisit un écran SDL connecté, à partir de zéro. ANYPS5_FPS_LIMIT accepte 0.5–1000000 avec trois décimales au plus ; 0/vide/absent désactive la limite. Cela n’accélère pas un jeu lent et ne dépasse pas sa cadence. Options absentes du guide v0.1.4 ; conservez le commit testé.",
   "es": "En main, APS5_OUTPUT_RESOLUTION=WxH elige la clase VideoOut 1080p solo con ancho <3840 y alto <2160; si no, 2160. No fuerza la resolución interna y algunos juegos lo ignoran. ANYPS5_DISPLAY_INDEX selecciona una pantalla SDL conectada desde el índice cero. ANYPS5_FPS_LIMIT admite 0.5–1000000 y hasta tres decimales; 0/vacío/ausente lo desactiva. No acelera un juego lento ni supera su cadencia. Opciones ausentes de la guía v0.1.4; conserva el commit probado."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · a4eca2a056",
   "url": "https://github.com/boykopovar/AnyPS5/blob/a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8/docs/user/USAGE.md"
  }
 ]
});}}
for(const article of articles){if([
 "guides/input"
].includes(article.slug)){article.sections.push({
 "id": "released-host-input-audio",
 "title": {
  "en": "Host comfort controls do not validate controller features",
  "zh": "宿主输入与音频选项的边界",
  "ar": "حدود إعدادات الإدخال والصوت المضيفة",
  "pt": "Limites dos controlos e áudio do anfitrião",
  "de": "Grenzen der Host-Eingabe und Audiooptionen",
  "fr": "Limites des options d’entrée et audio de l’hôte",
  "es": "Límites de las opciones de entrada y audio del host"
 },
 "body": [
  {
   "en": "v0.1.4 documents ANYPS5_RUMBLE=0–100 (default 100): zero silences rumble, trigger impulses and haptic fallback, not adaptive-trigger effects. APS5_PAD_SPEAKER_FALLBACK_DB accepts −60 to 0 or mute/off/-inf; it affects AudioOut2’s host fallback, not the main mix, actual controller speaker or legacy AudioOut. Empty/invalid values fail. F5/F6/F8 adjust host volume; they do not change game state. In reviewed main, ANYPS5_PAD_PORT0_STATE=controller logs user 0 out after a debounced controller disconnect, unlike other player slots. APS5_NO_PAD_INPUT suppresses keyboard/mouse and F keys even when set empty, not physical controllers or file-injected input.",
   "zh": "v0.1.4 记录 ANYPS5_RUMBLE=0–100，默认 100；0 静音震动、扳机脉冲及触觉回退，不是自适应扳机效果开关。APS5_PAD_SPEAKER_FALLBACK_DB 接受 −60 至 0 或 mute／off／-inf，仅影响 AudioOut2 的宿主回退，不影响主混音、真实手柄扬声器或旧 AudioOut；空值／无效值报错。F5／F6／F8 调整宿主音量，不改游戏状态。复核 main 的 ANYPS5_PAD_PORT0_STATE=controller 在去抖后的手柄断开时登出用户 0，其余玩家槽不同。APS5_NO_PAD_INPUT 即使设置为空也屏蔽键鼠及 F 键，不屏蔽物理手柄或文件注入输入。",
   "ar": "يوثق v0.1.4 ‏ANYPS5_RUMBLE=0–100، الافتراضي 100؛ الصفر يوقف الاهتزاز والنبضات والبديل اللمسي، لا تأثيرات الزناد التكيفية. يقبل APS5_PAD_SPEAKER_FALLBACK_DB من −60 إلى 0 أو mute/off/-inf لبديل AudioOut2 المضيف فقط، لا المزيج الرئيسي أو سماعة اليد الفعلية أو AudioOut القديم؛ الفراغ والقيم الخاطئة تفشل. F5/F6/F8 لصوت المضيف لا حالة اللعبة. في main، يسجل ANYPS5_PAD_PORT0_STATE=controller خروج المستخدم 0 بعد فصل اليد المؤكد. يمنع APS5_NO_PAD_INPUT لوحة المفاتيح والفأرة ومفاتيح F حتى بقيمة فارغة، لا اليد الفعلية أو إدخال الملف.",
   "pt": "v0.1.4 documenta ANYPS5_RUMBLE=0–100, padrão 100; zero silencia vibração, impulsos e fallback háptico, não efeitos dos gatilhos adaptativos. APS5_PAD_SPEAKER_FALLBACK_DB aceita −60 a 0 ou mute/off/-inf apenas para o fallback AudioOut2 do anfitrião, não a mistura principal, altifalante real ou AudioOut antigo; vazio/inválido falha. F5/F6/F8 ajustam volume do anfitrião. Em main, ANYPS5_PAD_PORT0_STATE=controller termina a sessão do utilizador 0 após desligação confirmada. APS5_NO_PAD_INPUT bloqueia teclado/rato/F mesmo vazio, não comandos físicos ou entrada por ficheiro.",
   "de": "v0.1.4 dokumentiert ANYPS5_RUMBLE=0–100, Standard 100; null stoppt Rumpeln, Triggerimpulse und Haptik-Fallback, keine adaptiven Triggereffekte. APS5_PAD_SPEAKER_FALLBACK_DB erlaubt −60 bis 0 oder mute/off/-inf nur für den Host-Fallback von AudioOut2, nicht Hauptmix, echten Controllerlautsprecher oder altes AudioOut; leer/ungültig führt zum Fehler. F5/F6/F8 regeln Hostlautstärke. Main meldet mit ANYPS5_PAD_PORT0_STATE=controller Benutzer 0 nach entprellter Trennung ab. APS5_NO_PAD_INPUT sperrt Tastatur/Maus/F-Tasten auch leer, nicht echte Controller oder Dateieingabe.",
   "fr": "v0.1.4 documente ANYPS5_RUMBLE=0–100, défaut 100 ; zéro coupe vibrations, impulsions et repli haptique, pas les effets adaptatifs. APS5_PAD_SPEAKER_FALLBACK_DB accepte −60 à 0 ou mute/off/-inf pour le repli hôte d’AudioOut2 seulement, sans changer mix principal, véritable haut-parleur de manette ou ancien AudioOut ; vide/invalide échoue. F5/F6/F8 règlent le volume hôte. Dans main, ANYPS5_PAD_PORT0_STATE=controller déconnecte l’utilisateur 0 après débranchement confirmé. APS5_NO_PAD_INPUT bloque clavier/souris/F même vide, pas les manettes physiques ou entrées par fichier.",
   "es": "v0.1.4 documenta ANYPS5_RUMBLE=0–100, valor 100; cero silencia vibración, impulsos y fallback háptico, no efectos adaptativos. APS5_PAD_SPEAKER_FALLBACK_DB acepta −60 a 0 o mute/off/-inf solo para el fallback del host de AudioOut2, no mezcla principal, altavoz real o AudioOut antiguo; vacío/inválido falla. F5/F6/F8 ajustan volumen del host. En main, ANYPS5_PAD_PORT0_STATE=controller desconecta al usuario 0 tras confirmar la desconexión del mando. APS5_NO_PAD_INPUT bloquea teclado/ratón/F incluso vacío, no mandos físicos ni entrada por archivo."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · a4eca2a056",
   "url": "https://github.com/boykopovar/AnyPS5/blob/a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8/docs/user/INPUT_MAPPING.md"
  }
 ]
});}}
for(const article of articles){if([
 "start",
 "guides/windows",
 "guides/linux"
].includes(article.slug)){article.sections.push({
 "id": "main-playgo-lists-init",
 "title": {
  "en": "Preserve title metadata before overriding startup answers",
  "zh": "先保留元数据，再考虑启动策略",
  "ar": "احفظ البيانات قبل تجاوز إجابات البدء",
  "pt": "Preserve metadados antes de alterar respostas",
  "de": "Metadaten vor Startüberschreibungen erhalten",
  "fr": "Préserver les métadonnées avant les dérogations",
  "es": "Conserva metadatos antes de cambiar respuestas"
 },
 "body": [
  {
   "en": "Main now accepts decimal ID lists such as APS5_PLAYGO_UNLISTED_CHUNKS=0,1, only when both original PlayGo metadata files are absent. Existing scenario JSON takes precedence; this cannot repair an incomplete dump. installed and absent are title-specific diagnostics, not universal fixes. Windows now starts extra-directory modules only when explicitly requested or needed transitively by modules outside extra; mapping a module is not starting it. Keep the exact source revision and test save loading separately.",
   "zh": "main 新接受 APS5_PLAYGO_UNLISTED_CHUNKS=0,1 这样的十进制 ID 列表，仅在两个原始 PlayGo 元数据文件均缺失时使用；已有 scenario JSON 优先，不能据此修复不完整转储。installed／absent 是按游戏验证的诊断策略，不是通用修复。Windows 对 extra 目录模块仅显式请求或被目录外模块传递依赖时初始化，映射模块不等于启动。保留准确提交，另测读档。",
   "ar": "يقبل main قوائم عشرية مثل APS5_PLAYGO_UNLISTED_CHUNKS=0,1 فقط عند غياب ملفي PlayGo الأصليين. لملف scenario JSON أولوية؛ الخيار لا يصلح تفريغاً ناقصاً. installed وabsent تشخيصان خاصان باللعبة. يبدأ Windows وحدات extra عند طلب صريح أو اعتماد متعد من خارجها؛ ربط الوحدة ليس بدءها. سجّل المراجعة واختبر تحميل الحفظ منفصلاً.",
   "pt": "Main aceita listas decimais como APS5_PLAYGO_UNLISTED_CHUNKS=0,1 apenas sem os dois ficheiros PlayGo originais. scenario JSON tem prioridade; isto não repara dumps incompletos. installed/absent são diagnósticos por jogo. Windows inicia módulos extra apenas por pedido explícito ou dependência transitiva externa; mapear não é iniciar. Registe a revisão e teste o carregamento de saves à parte.",
   "de": "Main akzeptiert Dezimallisten wie APS5_PLAYGO_UNLISTED_CHUNKS=0,1 nur ohne beide ursprünglichen PlayGo-Dateien. Vorhandenes scenario JSON hat Vorrang; unvollständige Dumps werden nicht repariert. installed/absent bleiben titelspezifische Diagnosen. Windows startet Extra-Module nur auf Anforderung oder als transitive Abhängigkeit außerhalb von extra; Mapping ist kein Start. Revision und Laden von Spielständen separat prüfen.",
   "fr": "Main accepte des listes décimales comme APS5_PLAYGO_UNLISTED_CHUNKS=0,1 seulement sans les deux fichiers PlayGo originaux. Le scenario JSON existant prime ; cela ne répare pas un dump incomplet. installed/absent restent des diagnostics par jeu. Windows démarre les modules extra uniquement sur demande ou dépendance transitive extérieure ; mapper n’est pas démarrer. Conservez la révision et testez les sauvegardes séparément.",
   "es": "Main acepta listas decimales como APS5_PLAYGO_UNLISTED_CHUNKS=0,1 solo sin ambos archivos PlayGo originales. scenario JSON existente tiene prioridad; no repara dumps incompletos. installed/absent son diagnósticos por juego. Windows inicia módulos extra solo por petición explícita o dependencia transitiva externa; mapear no es iniciar. Conserva la revisión y prueba la carga de partidas aparte."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · a4eca2a056",
   "url": "https://github.com/boykopovar/AnyPS5/blob/a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8/docs/user/USAGE.md"
  }
 ]
});}}
for(const article of articles){if([
 "guides/language-fonts"
].includes(article.slug)){article.sections.push({
 "id": "main-language-auto",
 "title": {
  "en": "Automatic language selection follows the host locale",
  "zh": "自动语言选择读取宿主区域",
  "ar": "اللغة التلقائية تتبع إعداد المضيف",
  "pt": "Idioma automático segue a configuração local",
  "de": "Automatische Sprache folgt Host-Locale",
  "fr": "Langue automatique selon les paramètres de l’hôte",
  "es": "Idioma automático según la configuración del host"
 },
 "body": [
  {
   "en": "Reviewed main adds ANYPS5_LANGUAGE=auto, absent from v0.1.4’s usage attachment. The host locale is read once; unsupported locales fall back to English and the result is logged. Linux checks LC_ALL, LC_MESSAGES and LANG, with LANGUAGE considered outside the C locale. Regional variants such as pt-PT remain distinct. This chooses a system-language answer, not a translation or missing-font repair.",
   "zh": "复核 main 新增 ANYPS5_LANGUAGE=auto，v0.1.4 附带使用文档尚无此值。宿主区域只读取一次，不支持时回退英语并记录选择；Linux 检查 LC_ALL、LC_MESSAGES、LANG，在非 C 区域下考虑 LANGUAGE。pt-PT 等地区变体保持区分。它只选择系统语言答复，不提供翻译，也不修复缺字体。",
   "ar": "يضيف main ‏ANYPS5_LANGUAGE=auto، غير الموجود في مرفق v0.1.4. يقرأ إعداد المضيف مرة واحدة، ويسجل النتيجة مع الرجوع للإنجليزية عند عدم الدعم. يفحص Linux ‏LC_ALL وLC_MESSAGES وLANG، ثم LANGUAGE خارج C. تبقى صيغ مثل pt-PT مميزة. يختار إجابة لغة النظام، ولا يترجم أو يصلح الخطوط.",
   "pt": "Main acrescenta ANYPS5_LANGUAGE=auto, ausente do anexo v0.1.4. Lê a configuração local uma vez, regista o resultado e usa inglês se não suportada. Linux consulta LC_ALL, LC_MESSAGES e LANG, considerando LANGUAGE fora de C. Variantes como pt-PT são distintas. Só escolhe a resposta de idioma; não traduz nem corrige fontes.",
   "de": "Main ergänzt ANYPS5_LANGUAGE=auto, nicht im v0.1.4-Anhang. Die Host-Locale wird einmal gelesen, die Auswahl protokolliert und bei fehlender Unterstützung Englisch verwendet. Linux prüft LC_ALL, LC_MESSAGES, LANG sowie LANGUAGE außerhalb von C. Varianten wie pt-PT bleiben getrennt. Das wählt nur die Systemsprache und übersetzt oder repariert keine Schriften.",
   "fr": "Main ajoute ANYPS5_LANGUAGE=auto, absent du guide v0.1.4. La locale hôte est lue une fois, le choix journalisé et l’anglais utilisé en repli. Linux consulte LC_ALL, LC_MESSAGES, LANG et LANGUAGE hors locale C. Les variantes comme pt-PT restent distinctes. Cela sélectionne une langue système, sans traduction ni réparation des polices.",
   "es": "Main añade ANYPS5_LANGUAGE=auto, ausente de la guía v0.1.4. Lee la configuración regional una vez, registra la elección y recurre al inglés si no es compatible. Linux consulta LC_ALL, LC_MESSAGES, LANG y LANGUAGE fuera de C. Variantes como pt-PT siguen separadas. Elige el idioma del sistema; no traduce ni repara fuentes."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · a4eca2a056",
   "url": "https://github.com/boykopovar/AnyPS5/blob/a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8/docs/user/USAGE.md"
  }
 ]
});}}
for(const article of articles){article.reviewed="2026-11-03";}

articles.find(a=>a.slug==="requirements")!.sections.find(s=>s.id==="release-scope")!.body=[{
 "en": "v0.1.4 distributes Windows and Linux runtime archives. The source’s macOS conversion target and the community macos-runtime fork are separate experiments; an M1 Pro report with an unpinned build is not a general Mac requirement. Vulkan header/SDK versions used to compile the runtime are also distinct from a tested driver requirement. Match a game report’s actual GPU, driver, settings and build.",
 "zh": "v0.1.4 分发 Windows 与 Linux runtime 包。源码的 macOS 转换目标与社区 macos-runtime 分支属于独立实验，构建未固定的 M1 Pro 报告不是通用 Mac 配置要求。编译使用的 Vulkan 头文件／SDK 版本也不同于已实测驱动要求；应匹配具体游戏的 GPU、驱动、设置及构建。",
 "ar": "v0.1.4 يوزع Windows/Linux. هدف macOS وفرع المجتمع تجارب مستقلة؛ تقرير M1 Pro دون بناء محدد ليس متطلبات عامة. نسخة Vulkan SDK للبناء مختلفة عن متطلبات برنامج التشغيل المختبرة. طابق GPU والبرنامج والإعدادات والبناء.",
 "pt": "v0.1.4 distribui Windows/Linux. Alvo macOS/fork são experiências separadas; M1 Pro sem build fixo não define requisitos. Versões Vulkan SDK de compilação distintas de driver testado. Compare GPU, driver, opções e build.",
 "de": "v0.1.4 verteilt Windows/Linux. macOS-Ziel/Fork getrennte Experimente; M1 Pro ohne Buildpin keine allgemeinen Anforderungen. Vulkan-SDK-Version zum Bauen ist nicht getestete Treiberanforderung. GPU, Treiber, Einstellungen/Build abgleichen.",
 "fr": "v0.1.4 distribue Windows/Linux. Cible macOS/fork sont des expériences séparées ; M1 Pro sans build précis ne définit pas de prérequis. SDK Vulkan de compilation distinct du pilote testé. Comparer GPU, pilote, réglages/build.",
 "es": "v0.1.4 distribuye Windows/Linux. Destino macOS/fork son experimentos separados; M1 Pro sin build fijo no define requisitos. SDK Vulkan al compilar distinto de driver probado. Compara GPU, driver, ajustes/build."
}];

for(const article of articles){if(["guides/windows","guides/linux","guides/build","requirements"].includes(article.slug))article.sections.push({
 "id": "host-report-log-and-policy",
 "title": {
  "en": "Capture the host before changing runtime policy",
  "zh": "调整策略前，先记录宿主环境",
  "ar": "سجّل المضيف قبل تغيير السياسة",
  "pt": "Registe o anfitrião antes de mudar políticas",
  "de": "Host vor Änderungen an Laufzeitregeln erfassen",
  "fr": "Relever l’hôte avant de modifier les règles",
  "es": "Registra el host antes de cambiar políticas"
 },
 "body": [
  {
   "en": "v0.1.4 documents ANYPS5_LOG_FILE=<path>: it duplicates executable stdout/stderr to an append-only file, without filename expansion. It does not collect relinker output or separate trace files. Opening failure stops startup with status 1; there is no size limit. Reviewed main adds ANYPS5_HOST_REPORT=1 after GPU selection, including a report before a missing-feature failure. Review paths and title output before sharing logs; redaction is not a guarantee. A missing-feature list diagnoses that device/build, not whole-game compatibility.",
   "zh": "v0.1.4 记录 ANYPS5_LOG_FILE=<path>：将可执行程序 stdout／stderr 复制追加到文件，不展开文件名，不收集 relinker 或独立追踪文件。打开失败以状态 1 停止启动，无文件大小上限。复核 main 的 ANYPS5_HOST_REPORT=1 在选定 GPU 后打印环境，缺功能失败前也会输出。分享前检查路径和游戏输出，不能依赖自动遮盖；缺功能清单只诊断该设备／构建，不代表整部游戏兼容。",
   "ar": "يوثق v0.1.4 ‏ANYPS5_LOG_FILE=<path> لنسخ stdout/stderr إلى ملف تراكمي دون توسيع الاسم، وليس خرج relinker أو ملفات التتبع المنفصلة. فشل الفتح يوقف البدء بالحالة 1، ولا حد للحجم. يضيف main ‏ANYPS5_HOST_REPORT=1 بعد اختيار GPU، حتى قبل فشل ميزة مفقودة. راجع المسارات وخرج اللعبة قبل المشاركة؛ التنقيح ليس ضماناً. القائمة تشخص الجهاز والبناء، لا توافق اللعبة بالكامل.",
   "pt": "v0.1.4 documenta ANYPS5_LOG_FILE=<path>: copia stdout/stderr do executável para um ficheiro em modo acrescentar, sem expandir nomes. Não inclui relinker nem traces separados. Falha de abertura termina com estado 1; não há limite de tamanho. Main acrescenta ANYPS5_HOST_REPORT=1 após escolher GPU, também antes de falhar por funcionalidades ausentes. Reveja caminhos e texto antes de partilhar; a ocultação não é garantida. A lista diagnostica dispositivo/build, não compatibilidade completa.",
   "de": "v0.1.4 dokumentiert ANYPS5_LOG_FILE=<path>: stdout/stderr des Programms werden ohne Namensexpansion angehängt, nicht Relinker-Ausgabe oder separate Traces. Öffnungsfehler stoppt mit Status 1; keine Größenbegrenzung. Main ergänzt ANYPS5_HOST_REPORT=1 nach GPU-Auswahl, auch vor Fehlern wegen fehlender Features. Pfade und Spielausgaben vor Weitergabe prüfen; Schwärzung ist keine Garantie. Die Liste diagnostiziert Gerät/Build, keine vollständige Spielkompatibilität.",
   "fr": "v0.1.4 documente ANYPS5_LOG_FILE=<path> : copie stdout/stderr de l’exécutable en ajout dans un fichier, sans expansion du nom, sans sortie du relinker ni traces séparées. Un échec d’ouverture arrête avec le statut 1 ; aucune limite de taille. Main ajoute ANYPS5_HOST_REPORT=1 après choix GPU, avant un échec de fonctionnalité manquante également. Vérifiez chemins et texte avant partage ; le masquage n’est pas garanti. La liste diagnostique appareil/version, pas toute la compatibilité.",
   "es": "v0.1.4 documenta ANYPS5_LOG_FILE=<path>: copia stdout/stderr del ejecutable a un archivo acumulativo sin expandir nombres; no recoge relinker ni trazas separadas. Fallar al abrir detiene con estado 1; no hay límite de tamaño. Main añade ANYPS5_HOST_REPORT=1 tras elegir GPU, también antes de un fallo por funciones ausentes. Revisa rutas y texto antes de compartir; el ocultamiento no es garantía. La lista diagnostica dispositivo/compilación, no compatibilidad completa."
  },
  {
   "en": "Other reviewed-main policies remain opt-in: ANYPS5_FREE_SPACE=host checks the save volume when creating a new save; fixed is the default and console behavior is unmeasured. A default-sized 16384-block save needs 1 GiB. APS5_GAME_MODE=on/auto requests host performance mode, off by default; a request is not a measured speed gain. ANYPS5_PSN_DIALOGS=show adds a host notice while retaining the same cancellation result, not PSN access. Record each policy and keep real save/load tests separate.",
   "zh": "其他已复核 main 策略需主动选择：ANYPS5_FREE_SPACE=host 在新建存档时检查存档卷，默认 fixed，console 行为未测；默认 16384 块存档需 1 GiB。APS5_GAME_MODE=on／auto 请求宿主性能模式，默认 off；请求不等于实测提速。ANYPS5_PSN_DIALOGS=show 增加宿主提示但仍返回相同取消结果，不提供 PSN。逐项记录策略，存／读档另行实测。",
   "ar": "سياسات main اختيارية: يفحص ANYPS5_FREE_SPACE=host قرص الحفظ عند إنشاء حفظ جديد، والافتراضي fixed وسلوك الجهاز غير مقاس؛ 16384 كتلة افتراضية تحتاج 1 GiB. يطلب APS5_GAME_MODE=on/auto وضع أداء المضيف، والافتراضي off؛ الطلب لا يثبت تسريعاً. يضيف ANYPS5_PSN_DIALOGS=show إشعاراً مع نتيجة الإلغاء نفسها، لا وصول PSN. سجّل الخيارات واختبر الحفظ والتحميل منفصلين.",
   "pt": "Outras políticas de main são opcionais: ANYPS5_FREE_SPACE=host verifica o volume ao criar saves; fixed é padrão e o comportamento da consola não foi medido. 16384 blocos exigem 1 GiB. APS5_GAME_MODE=on/auto pede desempenho ao anfitrião, padrão off; não prova ganho. ANYPS5_PSN_DIALOGS=show mostra um aviso com o mesmo resultado de cancelamento, sem PSN. Registe políticas e teste guardar/carregar separadamente.",
   "de": "Weitere Main-Regeln sind optional: ANYPS5_FREE_SPACE=host prüft das Laufwerk bei neuen Spielständen; Standard fixed, Konsolenverhalten ungemessen. 16384 Blöcke benötigen 1 GiB. APS5_GAME_MODE=on/auto fordert Host-Leistungsmodus an, Standard off; keine gemessene Beschleunigung. ANYPS5_PSN_DIALOGS=show ergänzt einen Hinweis bei gleichem Abbruchresultat, keinen PSN-Zugang. Regeln dokumentieren und Speichern/Laden separat testen.",
   "fr": "Autres règles main facultatives : ANYPS5_FREE_SPACE=host vérifie le volume lors d’une nouvelle sauvegarde ; fixed par défaut, comportement console non mesuré. 16384 blocs exigent 1 GiB. APS5_GAME_MODE=on/auto demande le mode performance hôte, off par défaut, sans gain mesuré. ANYPS5_PSN_DIALOGS=show ajoute un avis avec le même résultat d’annulation, sans accès PSN. Notez les règles et testez sauvegarde/chargement séparément.",
   "es": "Otras políticas main son opcionales: ANYPS5_FREE_SPACE=host comprueba el volumen al crear partidas; fixed es el valor predeterminado y la consola no se midió. 16384 bloques necesitan 1 GiB. APS5_GAME_MODE=on/auto solicita rendimiento al host, off por defecto; no prueba mejora. ANYPS5_PSN_DIALOGS=show añade un aviso con la misma cancelación, sin acceso PSN. Registra las políticas y prueba guardar/cargar por separado."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · a4eca2a056",
   "url": "https://github.com/boykopovar/AnyPS5/blob/a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8/docs/user/USAGE.md"
  },
  {
   "label": "v0.1.4",
   "url": "https://github.com/boykopovar/AnyPS5/blob/v0.1.4/docs/user/USAGE.md"
  }
 ]
});}

// Source documentation reviewed 6 November 2026.
for(const article of articles){if([
 "start",
 "guides/windows",
 "guides/linux",
 "guides/build"
].includes(article.slug)){article.sections.push({
 "id": "main-local-run-report",
 "title": {
  "en": "Local run reports and missing milestones",
  "zh": "本地运行报告与缺失里程碑",
  "ar": "تقارير تشغيل محلية ومراحل مفقودة",
  "pt": "Relatórios locais e marcos ausentes",
  "de": "Lokale Laufberichte und fehlende Meilensteine",
  "fr": "Rapports locaux et jalons absents",
  "es": "Informes locales e hitos ausentes"
 },
 "body": [
  {
   "en": "Reviewed main writes anyps5-report.json locally on normal exit, with build/title/frame and stop metadata; this is later than v0.1.4. Killed, crashed or aborted runs produce no report. Windows requires guest exit/_exit; entry return is insufficient. Linux/Windows do not record loaded/started, so absence is not failure. Windows/macOS paths are not runtime-validated by the upstream document. Redaction is a filter, not a privacy guarantee: inspect before manually sharing. Nothing is uploaded automatically; a first present does not prove gameplay.",
   "zh": "复核main在正常exit时本地写anyps5-report.json，含构建／游戏／帧数及停止信息，晚于v0.1.4。杀进程、崩溃及abort不出报告；Windows须客体exit／_exit，入口返回无报告。Linux／Windows不记loaded／started，缺项不等于失败。上游文档说明Windows／macOS路径未做运行验证。脱敏只是过滤，手动分享前须阅读；不会自动上传，首个present亦非游戏过程证明。",
   "ar": "main يكتب anyps5-report.json محلياً عند exit الطبيعي، بعد v0.1.4. القتل/الانهيار/abort لا يكتب؛ Windows يحتاج exit/_exit لا مجرد عودة. Linux/Windows لا يسجلان loaded/started، فغيابهما ليس فشلاً. مسارا Windows/macOS غير مختبرين عملياً وفق الوثيقة. التنقيح ليس ضماناً؛ افحص قبل المشاركة اليدوية، بلا رفع تلقائي، وأول present لا يثبت اللعب.",
   "pt": "Main escreve anyps5-report.json local noexit normal, apósv0.1.4. Matar/crash/abort não gera relatório; Windows exigeexit/_exit, não retorno. Linux/Windows não registamloaded/started: ausência não é falha. Documento não valida execução Windows/macOS. Redação não garante privacidade: leia antes de partilhar manualmente. Nada é enviado; primeiro present não prova jogo.",
   "de": "Main schreibt anyps5-report.json lokal bei normalemexit, nachv0.1.4. Kill/Crash/abort ohne Bericht; Windows braucht Gast-exit/_exit, keine bloße Rückkehr. Linux/Windows erfassenloaded/started nicht: Fehlen kein Fehler. Windows/macOS laut Dokument nicht laufzeitgeprüft. Redaktion keine Datenschutzgarantie: vor manuellem Teilen prüfen. Kein Upload; erstesPresent kein Gameplaybeleg.",
   "fr": "Main écrit anyps5-report.json localement àexit normal, aprèsv0.1.4. Kill/crash/abort sans rapport ; Windows exigeexit/_exit invité, pas simple retour. Linux/Windows ne consignent pasloaded/started : absence sans échec. Windows/macOS non validés en exécution selon document. Filtrage sans garantie : relire avant partage manuel. Aucun envoi automatique ; premierPresent sans jeu validé.",
   "es": "Main escribe anyps5-report.json local alexit normal, posterior av0.1.4. Kill/fallo/abort sin informe; Windows exigeexit/_exit huésped, no simple retorno. Linux/Windows no registranloaded/started: ausencia no es fallo. Windows/macOS sin validar en ejecución según documento. Filtrado sin garantía: leer antes de compartir manualmente. Nada se sube; primerPresent no prueba juego."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · 8ce5134fbd",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/user/run-report.md"
  }
 ]
});article.reviewed="2026-11-06";}}
for(const article of articles){if([
 "guides/input"
].includes(article.slug)){article.sections.push({
 "id": "main-per-title-input-profiles",
 "title": {
  "en": "Per-game bindings override only named settings",
  "zh": "逐游戏配置只覆盖列出的设置",
  "ar": "ملف اللعبة يبدل الإعدادات المذكورة فقط",
  "pt": "Perfis por jogo substituem só o indicado",
  "de": "Spielprofile überschreiben nur genannte Werte",
  "fr": "Profils par jeu : seuls les réglages cités changent",
  "es": "Perfiles por juego cambian solo lo indicado"
 },
 "body": [
  {
   "en": "Later main reads anyps5-input.<TITLEID>.ini after the shared input file, beside that file or ANYPS5_INPUT_CONFIG’s target. Only listed actions/settings override the shared configuration; other titles keep their bindings. IDs allow letters, digits, underscore and hyphen. Invalid lines report profile path and line. Keep the actual build pin: this is not established in v0.1.4’s attached input guide.",
   "zh": "后续main在共享输入文件之后读取同目录anyps5-input.<TITLEID>.ini；ANYPS5_INPUT_CONFIG指定文件时也以其目录为准。只覆盖列出动作／设置，其他游戏不受影响。ID允许字母、数字、下划线和连字符；错误报告文件与行号。保留实际构建，此项未在v0.1.4附带输入指南中确立。",
   "ar": "main اللاحق يقرأ anyps5-input.<TITLEID>.ini بعد الملف المشترك وبجواره، أو بجوار هدف ANYPS5_INPUT_CONFIG. يستبدل المذكور فقط ولا يغير الألعاب الأخرى. ID حروف/أرقام/_/-، والخطأ يذكر الملف والسطر. احتفظ بالبناء؛ ليس مثبتاً في مرفق v0.1.4.",
   "pt": "Main lê anyps5-input.<TITLEID>.ini após e ao lado do ficheiro comum/ANYPS5_INPUT_CONFIG. Só ações/opções listadas substituem; outros jogos mantêm definições. ID permite letras/dígitos/_/-; erros indicam ficheiro/linha. Guarde o pin, ausente do guia anexov0.1.4.",
   "de": "Main liest anyps5-input.<TITLEID>.ini nach/neben gemeinsamer Datei/ANYPS5_INPUT_CONFIG. Nur genannte Aktionen/Werte ersetzen, andere Spiele bleiben. ID erlaubt Buchstaben/Ziffern/_/-; Fehler mit Datei/Zeile. Buildpin behalten, nicht imv0.1.4-Anhang belegt.",
   "fr": "Main lit anyps5-input.<TITLEID>.ini après/à côté du fichier commun/ANYPS5_INPUT_CONFIG. Seuls éléments cités remplacent, autres jeux inchangés. ID lettres/chiffres/_/-, erreur avec fichier/ligne. Garder le pin, absent du guide jointv0.1.4.",
   "es": "Main lee anyps5-input.<TITLEID>.ini después/junto al común/ANYPS5_INPUT_CONFIG. Solo acciones/valores listados reemplazan; otros juegos conservan ajustes. ID letras/dígitos/_/-, errores con archivo/línea. Guarda pin, ausente de guía adjuntav0.1.4."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · 8ce5134fbd",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/user/INPUT_MAPPING.md"
  }
 ]
});article.reviewed="2026-11-06";}}
for(const article of articles){if([
 "start",
 "guides/windows",
 "guides/linux"
].includes(article.slug)){article.sections.push({
 "id": "verify-original-resource-layout",
 "title": {
  "en": "Check the game’s resource layout before renderer diagnosis",
  "zh": "先检查原始资源布局，再判断渲染故障",
  "ar": "تحقق من الملفات قبل تشخيص الرسم",
  "pt": "Verificar recursos antes do renderizador",
  "de": "Dateilayout vor Rendererdiagnose prüfen",
  "fr": "Vérifier les ressources avant le rendu",
  "es": "Revisar recursos antes del renderizador"
 },
 "body": [
  {
   "en": "A converted executable does not guarantee a complete game layout. Astro Bot’s latest report restores missing args.txt and app0/data mapping without changing code; Sea of Stars and Smurfs reports restore files hidden in a repack. Compare with your own original title layout and preserve originals. Do not copy another title’s command line or treat promotional images, present counts or resource-audit success as gameplay validation. Version/environment details still belong to each report.",
   "zh": "可执行文件转换成功不保证游戏布局完整。Astro Bot新报告补回args.txt与app0/data映射，无需改代码；Sea of Stars及Smurfs补回重打包隐藏文件。应与自己的原始游戏布局核对并保留原件，不复制别作命令行，也不把宣传图、呈现计数或资源审计成功当游戏验证；版本环境仍按各报告记录。",
   "ar": "تحويل التنفيذي لا يضمن اكتمال الملفات. تقرير Astro Bot يستعيد args.txt وربط app0/data بلا كود؛ Sea of Stars/Smurfs يستعيدان ملفات repack. قارن بأصلك واحفظه، لا تنسخ إعداد عنوان آخر ولا تعتبر الصور/العداد/التدقيق لعباً. النسخة والبيئة لكل تقرير.",
   "pt": "Converter executável não garante layout completo. Astro Bot repõeargs.txt/app0/data sem código; Sea of Stars/Smurfs recuperam ficheiros de repack. Compare com o seu original e preserve-o. Não copie comandos de outro título nem confunda arte/contador/auditoria com jogo; versões/ambientes separados.",
   "de": "Konvertierte EXE garantiert keine vollständigen Dateien. Astro Bot stelltargs.txt/app0/data ohne Codefix wieder her; Sea of Stars/Smurfs fehlende Repack-Dateien. Mit eigenen Originalen vergleichen/bewahren. Keine fremden Titelargumente oder Werbung/Zähler/Audit als Spielbeleg; Version/Umgebung getrennt.",
   "fr": "EXE converti ne garantit pas tous les fichiers. Astro Bot rétablitargs.txt/app0/data sans code ; Sea of Stars/Smurfs fichiers du repack. Comparer à ses originaux et les préserver. Ne pas copier arguments d’un autre titre ni confondre art/compteur/audit avec jeu ; versions/environnements distincts.",
   "es": "EXE convertido no garantiza archivos completos. Astro Bot restauraargs.txt/app0/data sin código; Sea of Stars/Smurfs archivos de repack. Compara con tus originales y consérvalos. No copies argumentos ajenos ni confundas arte/contador/auditoría con juego; versiones/entornos separados."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · 8ce5134fbd",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/dev/GAME_TESTING.md"
  }
 ]
});article.reviewed="2026-11-06";}}
for(const article of articles){if([
 "guides/linux",
 "guides/build"
].includes(article.slug)){article.sections.push({
 "id": "main-omit-unused-missing-dependencies",
 "title": {
  "en": "Optional Linux dependency omission has narrow conditions",
  "zh": "Linux依赖省略有严格前提",
  "ar": "حذف تبعيات Linux بشروط محددة",
  "pt": "Omissão Linux com condições restritas",
  "de": "Linux-Abhängigkeiten nur gezielt auslassen",
  "fr": "Omission Linux sous conditions précises",
  "es": "Omitir dependencias Linux con límites"
 },
 "body": [
  {
   "en": "Main’s --omit-unavailable-dependencies omits only an unavailable bundled dependency with no imports, no converted provider and no copy in any --rpath directory. All those directories must exist during conversion. Without the flag the dependency remains and is noted. Use it only with all system libraries already in rpath: an omitted library found later through LD_LIBRARY_PATH will not load. This is not permission to discard real imports or a universal startup fix.",
   "zh": "main的--omit-unavailable-dependencies只省略没有导入、没有转换后提供者、且所有--rpath目录中均无文件的缺失捆绑依赖；转换时目录必须存在。不启用则保留并提示。须确保所有系统库已在rpath，省略后即使LD_LIBRARY_PATH后来找到也不加载；不能删真实导入，也非通用启动修复。",
   "ar": "الخيار يحذف تبعية مفقودة بلا واردات أو مزود محول أو ملف في rpath؛ كل المجلدات موجودة وقت التحويل. بدونه تبقى مع ملاحظة. يلزم وجود كل مكتبات النظام في rpath، فالعثور لاحقاً عبر LD_LIBRARY_PATH لا يعيدها. ليس حذف واردات حقيقية أو إصلاحاً عاماً.",
   "pt": "Opção só omite dependência ausente sem imports/provedor convertido/cópia emrpath; diretórios devem existir. Sem flag mantém e avisa. Todas as libs devem estar emrpath: LD_LIBRARY_PATH posterior não a carrega. Não elimina imports reais nem resolve todos os arranques.",
   "de": "Flag lässt nur fehlende Abhängigkeit ohne Imports/konvertierten Provider/Kopie inrpath aus; Verzeichnisse müssen existieren. Ohne Flag behalten+Hinweis. Alle Systemlibs inrpath nötig; spätereLD_LIBRARY_PATH-Funde werden nicht geladen. Keine echten Imports löschen, kein Universalfix.",
   "fr": "Option omet seulement dépendance absente sans imports/fournisseur converti/copie dansrpath ; dossiers existants requis. Sans flag elle reste avec note. Toutes bibliothèques système enrpath ; trouvée plus tard parLD_LIBRARY_PATH ne charge pas. Ni suppression d’imports réels ni fix universel.",
   "es": "Opción solo omite dependencia ausente sin imports/proveedor convertido/copia enrpath; directorios deben existir. Sin flag queda con aviso. Todas las libs en rpath; LD_LIBRARY_PATH posterior no la carga. No elimina imports reales ni arregla cualquier inicio."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · 8ce5134fbd",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/user/USAGE.md"
  }
 ]
});article.reviewed="2026-11-06";}}
for(const article of articles){if([
 "guides/windows",
 "guides/linux"
].includes(article.slug)){article.sections.push({
 "id": "main-included-addon-labels",
 "title": {
  "en": "List only add-ons included in your copy",
  "zh": "只登记自己副本包含的附加内容",
  "ar": "سجل الإضافات الموجودة في نسختك فقط",
  "pt": "Listar só extras incluídos na sua cópia",
  "de": "Nur enthaltene Add-ons eintragen",
  "fr": "Lister les extensions de sa copie",
  "es": "Listar solo complementos de tu copia"
 },
 "body": [
  {
   "en": "Later main reads anyps5-entitlements.ini beside the executable, or the ANYPS5_ENTITLEMENTS path: one included add-on label per line, up to 16 characters; # and ; begin comments. Unlisted labels are reported not installed. Some titles wait rather than proceed without an expected add-on. A loading spinner alone does not identify missing data, and declaring a label neither supplies content nor proves a DLC test. Keep this source behavior separate from v0.1.4.",
   "zh": "后续main读取可执行文件旁anyps5-entitlements.ini或ANYPS5_ENTITLEMENTS路径，每行登记自己副本包含的一个附加内容label、最多16字符，#及;为注释。未列出按未安装报告，部分游戏会等待。加载转圈不能独自证明缺数据，登记label既不提供内容也不证明DLC测试；与v0.1.4分别记录。",
   "ar": "main يقرأ ملف entitlements بجوار التنفيذي أو المسار المحدد: label واحد لإضافة نسختك/سطر حتى 16 حرفاً،# و; تعليقات. غير المدرج غير مثبت وبعض العناوين تنتظر. الدوران لا يشخص البيانات، وال label لا يوفر محتوى أو يثبت DLC؛ افصله عن v0.1.4.",
   "pt": "Main lê entitlements junto ao EXE/ou caminho configurado: label de extra incluído/linha até16caracteres;# e; comentários. Não listado=ausente, certos títulos esperam. Spinner não diagnostica dados; label não fornece conteúdo nem valida DLC. Separar dev0.1.4.",
   "de": "Main liest entitlements neben EXE/konfiguriertem Pfad: ein enthaltenes Add-on-Label/Zeile bis16Zeichen,#/; Kommentare. Ungelistet=nicht installiert, manche Spiele warten. Spinner keine Datendiagnose; Label liefert keinen Inhalt/kein DLC-Test. Vonv0.1.4 trennen.",
   "fr": "Main lit entitlements près EXE/chemin configuré : label d’extension incluse/ligne jusqu’à16caractères,#/; commentaires. Non listé=non installé, certains titres attendent. Spinner sans diagnostic ; label sans contenu ou validation DLC. Distinct dev0.1.4.",
   "es": "Main lee entitlements junto EXE/ruta configurada: label de complemento incluido/línea hasta16caracteres,#/; comentarios. No listado=no instalado, algunos esperan. Spinner no diagnostica datos; label no suministra contenido ni valida DLC. Separar dev0.1.4."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · 8ce5134fbd",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/user/USAGE.md"
  }
 ]
});article.reviewed="2026-11-06";}}
for(const article of articles){for(const section of article.sections){if(section.id==="main-module-start-boundaries"){section.body=[{
 "en": "With --module-dir, reviewed main maps required modules at startup. Linux starts extra-directory modules only on explicit load with the title’s arguments. Windows starts a deferred module after its deferred dependencies with the same arguments; dependencies needed from outside those directories initialize at startup, and the first explicit load also starts remaining dependency providers best effort. macOS starts executable/module dependencies eagerly. These rules differ from older builds; converting all files alone does not prove correct initialization.",
 "zh": "--module-dir下复核main在启动时映射所需模块。Linux额外目录模块仅显式加载时以游戏参数初始化；Windows延迟模块先初始化其延迟依赖并传同参数，目录外模块所需依赖在启动初始化，首次显式加载也尽力启动其余依赖提供者。macOS提前初始化可执行／模块依赖。规则与旧构建不同，文件全转换不证明初始化正确。",
 "ar": "main يربط الوحدات اللازمة عند البدء. Linux يبدأ وحدات المجلد الإضافي عند التحميل الصريح بمعاملات اللعبة. Windows يبدأ تبعيات الوحدة المؤجلة أولاً بنفس المعاملات، واللازم من خارج المجلد عند البدء، ويحاول باقي المزودين عند أول تحميل. macOS يبدأ التبعيات مبكراً. يختلف عن القديم؛ تحويل الملفات ليس صحة التهيئة.",
 "pt": "Main mapeia módulos necessários no início. Linux inicia extras ao carregar explicitamente com argumentos do jogo. Windows inicia dependências adiadas primeiro com mesmos argumentos; necessárias fora das pastas iniciam logo, outras por melhor esforço no primeiro load. macOS inicia dependências cedo. Regras mudaram; conversão completa não prova inicialização.",
 "de": "Main mappt nötige Module beim Start. Linux initialisiert Extras erst explizit mit Spielargumenten. Windows startet verzögerte Abhängigkeiten zuerst mit denselben Argumenten; von außerhalb benötigte starten früh, übrige beim ersten Load best effort. macOS initialisiert Abhängigkeiten früh. Alte Builds anders; vollständige Konvertierung kein Initialisierungsbeleg.",
 "fr": "Main mappe modules requis au démarrage. Linux initialise extras au chargement explicite avec arguments du jeu. Windows commence par dépendances différées avec mêmes arguments ; requises depuis hors dossiers démarrent tôt, autres au premier load au mieux. macOS initialise dépendances tôt. Règles différentes des anciens builds ; conversion complète sans preuve.",
 "es": "Main mapea módulos necesarios al inicio. Linux inicia extras al cargar explícitamente con argumentos del juego. Windows inicia dependencias diferidas primero con mismos argumentos; requeridas desde fuera inician temprano, restantes al primer load según posible. macOS inicia dependencias temprano. Reglas distintas de builds viejos; conversión completa no prueba inicialización."
}];section.links=[{label:"Reviewed main · 8ce5134fbd",url:"https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/user/USAGE.md"}];article.reviewed="2026-11-06";}}}

// Focused build and tracing clarification, 6 November 2026.
articles.find(a=>a.slug==="requirements")!.sections.find(s=>s.id==="toolchain")!.body=[{
 "en": "Reviewed main uses Git/submodules, CMake 3.22.1+, Ninja and C++20. Windows runtime builds accept supported POSIX-thread MinGW-w64 DWARF or System-V SEH toolchains; match their runtime DLLs. Python 3.11+ enables the tomllib patch-catalog test. Node 26+ is only for the named memory64 Emscripten tests, not an ordinary Windows/Linux game requirement. v0.1.4 and its attached build instructions retain their own dated scope.",
 "zh": "复核main需要Git／子模块、CMake 3.22.1+、Ninja及C++20。Windows运行库接受受支持的POSIX线程MinGW-w64 DWARF或System-V SEH工具链，运行DLL须配套。Python 3.11+启用tomllib补丁目录测试；Node 26+仅用于指定memory64 Emscripten测试，不是普通Windows／Linux游戏要求。v0.1.4及附带构建文档保留各自日期范围。",
 "ar": "main يحتاج Git/submodules و CMake3.22.1+ و Ninja و C++20. Windows يقبل MinGW-w64 POSIX مع DWARF أو System-V SEH المدعوم، مع DLL مطابقة. Python3.11+ لاختبار tomllib؛ Node26+ فقط لاختبارات memory64 Emscripten المحددة، لا متطلب لعب عام. وثائق v0.1.4 تبقى بتاريخها.",
 "pt": "Main exigeGit/submodules,CMake3.22.1+,Ninja,C++20. Windows aceitaMinGW-w64 POSIX DWARF ouSystem-V SEH suportados comDLL correspondentes. Python3.11+ ativa testetomllib; Node26+ só para testesmemory64 Emscripten, não requisito de jogo comum. v0.1.4/documentos mantêm âmbito datado.",
 "de": "Main brauchtGit/Submodule,CMake3.22.1+,Ninja,C++20. Windows unterstützt passendePOSIX-MinGW-w64-DWARF/System-V-SEH mit passendenDLLs. Python3.11+ aktivierttomllib-Test; Node26+ nur genannteMemory64-Emscripten-Tests, keine normaleSpielanforderung. v0.1.4-Dokumente behalten Datumsgrenzen.",
 "fr": "Main exigeGit/sous-modules,CMake3.22.1+,Ninja,C++20. Windows accepteMinGW-w64 POSIX DWARF/System-V SEH pris en charge avecDLL assorties. Python3.11+ active testtomllib ; Node26+ seulement pourmemory64 Emscripten, pas exigence de jeu ordinaire. Documentsv0.1.4 gardent leur portée datée.",
 "es": "Main exigeGit/submódulos,CMake3.22.1+,Ninja,C++20. Windows aceptaMinGW-w64 POSIX DWARF/System-V SEH compatibles conDLL a juego. Python3.11+ activa testtomllib; Node26+ solo paramemory64 Emscripten, no requisito de juego común. Documentosv0.1.4 conservan alcance fechado."
}];
articles.find(a=>a.slug==="requirements")!.reviewed="2026-11-06";
for(const article of articles){if(["guides/build","guides/windows","guides/linux"].includes(article.slug)){article.sections.push({
 "id": "main-unlabelled-import-tracing",
 "title": {
  "en": "Trace the actual host module name",
  "zh": "按实际宿主模块名追踪",
  "ar": "تتبع اسم وحدة المضيف الفعلي",
  "pt": "Seguir o módulo real do anfitrião",
  "de": "Tatsächlichen Hostmodulnamen verfolgen",
  "fr": "Tracer le vrai module hôte",
  "es": "Trazar el módulo anfitrión real"
 },
 "body": [
  {
   "en": "With --trace-imports, later main labels an import lacking a library name by the host module containing its function, such as libSceAvPlayer.native. Select that filename in APS5_TRACE_CALLS rather than a guest alias. Trace collection, a clean audit and a missing error are diagnostics; preserve actual build, platform and reached scene before claiming a fix.",
   "zh": "--trace-imports下，后续main对没有库标签的导入使用其函数所在宿主模块名，例如libSceAvPlayer.native；APS5_TRACE_CALLS须选该文件名，不能用客体别名。追踪、审计通过及未见错误均属诊断，声称修复前仍须记录实际构建、平台及场景。",
   "ar": "مع trace-imports يسمي main الوارد بلا مكتبة باسم وحدة المضيف مثل libSceAvPlayer.native؛ اختره في APS5_TRACE_CALLS لا الاسم الضيف. التتبع/التدقيق/غياب الخطأ تشخيصات، سجّل البناء والنظام والمشهد قبل إثبات إصلاح.",
   "pt": "Comtrace-imports, main usa módulo anfitrião para import sem rótulo, ex.libSceAvPlayer.native; selecione esse nome emAPS5_TRACE_CALLS. Trace/auditoria/ausência de erro são diagnósticos; registe build/plataforma/cena antes de afirmar fix.",
   "de": "Mittrace-imports benenntmain Imports ohne Bibliothekslabel nach Hostmodul, etwa libSceAvPlayer.native; inAPS5_TRACE_CALLS diesen Namen wählen. Trace/Audit/fehlender Fehler nur Diagnose; Build/Plattform/Szene für Fixbeleg behalten.",
   "fr": "Avectrace-imports, main nomme import sans bibliothèque par module hôte, ex.libSceAvPlayer.native ; le choisir dansAPS5_TRACE_CALLS. Trace/audit/absence d’erreur restent diagnostics ; garder build/plateforme/scène avant fix validé.",
   "es": "Contrace-imports, main nombra import sin biblioteca por módulo anfitrión, ej.libSceAvPlayer.native; elegirlo enAPS5_TRACE_CALLS. Trace/auditoría/ausencia de fallo son diagnósticos; guardar build/plataforma/escena antes de validar arreglo."
  }
 ],
 "links": [
  {
   "label": "Reviewed main · 8ce5134fbd",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8ce5134fbd59338cd4a4d04887539ad2e5677c9f/docs/user/USAGE.md"
  }
 ]
});article.reviewed="2026-11-06";}}
