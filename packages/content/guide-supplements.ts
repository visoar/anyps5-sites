import {L,type Section} from './model';
export const guideSupplements:Record<string,Section[]>={
 start:[{id:'first-run',title:L("04 / Convert and check the first launch","04 / 转换并检查首次启动","04 / حوّل الملفات وتحقق من أول تشغيل","04 / Converta e verifique o primeiro arranque","04 / Konvertieren und ersten Start prüfen","04 / Convertir et vérifier le premier lancement","04 / Convierte y comprueba el primer inicio"),body:[L("Open the guide for your operating system and run its conversion command with your own input paths. Windows needs --windows; a filename ending in .exe does not select the output format. Keep every converted game module in the path printed by the relinker, copy game resources into app0/, then launch from the prepared runtime folder. Successful conversion alone does not prove that the game starts.","打开对应系统指南，将转换命令中的输入路径替换为你自己的文件。Windows 需要 --windows，仅把输出命名为 .exe 不会选择转换格式。生成的游戏模块保留在 relinker 打印的路径中，游戏资源复制到 app0/，然后从准备好的运行目录启动。转换成功本身不能证明游戏能启动。","افتح دليل نظامك واستخدم مسارات ملفاتك في أمر التحويل. يحتاج Windows إلى --windows؛ الامتداد .exe لا يختار الصيغة. أبقِ الوحدات المحوّلة في المسارات التي تطبعها الأداة، وانسخ الموارد إلى app0/ ثم شغّل من مجلد التشغيل. نجاح التحويل لا يثبت نجاح بدء اللعبة.","Abra o guia do seu sistema e substitua os caminhos do comando pelos seus ficheiros. Windows exige --windows; o nome .exe não escolhe o formato. Mantenha os módulos nas pastas indicadas pelo relinker, copie os recursos para app0/ e execute na pasta preparada. A conversão bem-sucedida não confirma o arranque do jogo.","Öffne die Anleitung für dein System und setze eigene Eingabepfade in den Befehl ein. Windows benötigt --windows; die Endung .exe wählt das Format nicht aus. Belasse konvertierte Module in den ausgegebenen Pfaden, kopiere Ressourcen nach app0/ und starte aus dem vorbereiteten Laufzeitordner. Erfolgreiche Konvertierung allein belegt keinen Spielstart.","Ouvrez le guide de votre système et remplacez les chemins par ceux de vos fichiers. Windows exige --windows ; le nom .exe ne choisit pas le format. Gardez les modules aux chemins indiqués, copiez les ressources dans app0/ et lancez depuis le dossier préparé. La réussite de la conversion ne prouve pas que le jeu démarre.","Abre la guía de tu sistema y usa las rutas de tus archivos en el comando. Windows requiere --windows; el nombre .exe no elige el formato. Conserva los módulos en las rutas indicadas, copia los recursos a app0/ e inicia desde la carpeta preparada. Una conversión correcta no confirma que el juego arranque."),L('Make the first launch from a terminal rather than a shortcut. Observe conversion, library loading, window creation and the first interactive screen in that order. Record the earliest failure before adjusting settings. If the program starts, test input and sound, then saving and loading; a visible window alone is not a successful game test. Recheck the same short sequence after changing any build or driver.','第一次启动建议从终端执行。按顺序观察转换、库加载、窗口创建及首个可操作画面，修改设置前记录最早的故障。能启动后再检查操作、声音、存档与读档，不能仅凭窗口出现判断测试成功。更换构建或驱动后，应重复同一段简短流程。','شغّل أول مرة من الطرفية. راقب التحويل وتحميل المكتبات والنافذة وأول شاشة تفاعلية. سجّل أول فشل قبل تعديل الإعدادات. ثم اختبر الإدخال والصوت والحفظ والتحميل؛ النافذة وحدها ليست نجاحاً. كرر التسلسل عند تغيير البناء أو التعريف.','Faça o primeiro arranque no terminal. Observe conversão, bibliotecas, janela e primeiro ecrã interativo. Registe a primeira falha antes de alterar definições. Depois teste controlos, som, guardar e carregar; uma janela não basta. Repita a mesma sequência após mudar compilação ou controlador.',"Starte das Spiel beim ersten Versuch aus einem Terminal. Beobachte nacheinander die Konvertierung, das Laden der Bibliotheken, das Öffnen des Fensters und den ersten interaktiven Bildschirm. Notiere den ersten Fehler, bevor du Einstellungen änderst. Prüfe danach Eingabe, Ton sowie Speichern und Laden; ein sichtbares Fenster allein ist noch kein erfolgreicher Spieltest. Wiederhole diese Schritte nach einem Build- oder Treiberwechsel.","Effectuez le premier lancement depuis un terminal. Observez successivement la conversion, le chargement des bibliothèques, l’ouverture de la fenêtre et le premier écran interactif. Notez la première erreur avant de modifier les réglages. Si le programme démarre, testez les commandes, le son, puis la sauvegarde et le chargement. Une fenêtre visible ne suffit pas à confirmer que le jeu fonctionne. Répétez ces étapes après un changement de version ou de pilote.",'Inicia primero desde el terminal. Observa conversión, bibliotecas, ventana y primera pantalla interactiva. Anota el primer fallo antes de cambiar ajustes. Prueba controles, sonido, guardado y carga; una ventana no basta. Repite el recorrido tras cambiar versión o controlador.')],links:[{label:'Windows',url:'/guides/windows/'},{label:'Linux',url:'/guides/linux/'}]}],
 downloads:[{id:'choose-archive',title:L('Choose and unpack the right archive','选择与解压正确的文件','اختيار الأرشيف وفكّه','Escolher e extrair o arquivo certo','Das passende Archiv entpacken','Choisir et extraire la bonne archive','Elegir y extraer el archivo correcto'),body:[L('Use the release page’s Assets section and select the platform shown in the filename. Keep the relinker and replacement libraries from that release together. Check that the archive was fully extracted: an outer archive folder can otherwise leave the actual libraries one directory too deep. For Windows, verify that the matching MinGW DLLs are present alongside the host libraries; for Linux, keep the native library directory rather than substituting a Windows package.','从发行页的 Assets 列表按文件名中的平台选择下载，并将同一发行版的 relinker 与替代库配套使用。解压后检查真实目录，外层压缩包文件夹可能使库多套一层。Windows 应确认配套 MinGW DLL 与宿主库放在一起；Linux 应保留原生库目录，不能用 Windows 包替代。','اختر النظام من أسماء ملفات Assets، وأبقِ relinker والمكتبات من الإصدار نفسه. تحقق من فك الأرشيف كاملاً؛ قد تضع مجلداته المكتبات أعمق بدرجة. في Windows تأكد من DLL الخاصة بـMinGW بجانب المكتبات؛ في Linux احتفظ بالمكتبات الأصلية للنظام لا حزمة Windows.',"Na secção Assets da página da versão, escolha os ficheiros destinados ao seu sistema e mantenha o relinker e as bibliotecas dessa versão juntos. Confirme que o ficheiro comprimido foi totalmente extraído: uma pasta exterior pode deixar as bibliotecas um nível abaixo do esperado. No Windows, verifique as DLL de MinGW junto das bibliotecas; no Linux, use a pasta de bibliotecas nativas, sem a substituir pelo pacote Windows.",'Wähle im Assets-Bereich die Plattform im Dateinamen und halte Relinker und Bibliotheken desselben Releases zusammen. Prüfe das Entpacken; ein äußerer Ordner kann die Bibliotheken eine Ebene zu tief ablegen. Unter Windows gehören MinGW-DLLs daneben, unter Linux die nativen Bibliotheken statt des Windows-Pakets.',"Dans la section Assets de la page de publication, choisissez les fichiers destinés à votre système et conservez ensemble le relinker et les bibliothèques de cette version. Vérifiez que l’archive est entièrement extraite : un dossier supplémentaire peut placer les bibliothèques un niveau trop bas. Sous Windows, vérifiez les DLL MinGW correspondantes ; sous Linux, conservez les bibliothèques natives au lieu d’utiliser le paquet Windows.",'Elige la plataforma en los nombres de Assets y conserva relinker y bibliotecas de la misma versión. Revisa la extracción: una carpeta exterior puede dejar bibliotecas un nivel por debajo. En Windows comprueba las DLL MinGW; en Linux usa bibliotecas nativas, no el paquete Windows.'),L('A repository source ZIP is not a ready-made runtime and does not include the recursively checked-out submodule contents needed for a normal source build. Use a recursive Git checkout when building. Keep downloads from a local test fork labelled with the fork and commit instead of presenting them as official AnyPS5 releases. This site links to upstream tools and does not mirror executable downloads.','仓库源码 ZIP 不是可直接使用的运行环境，也不包含常规源码构建所需的递归子模块内容。编译时应使用递归 Git 克隆。测试分支的下载应注明分支与提交，不能称为 AnyPS5 官方发行版。本站只导航至上游工具，不镜像分发可执行文件。','ملف ZIP للمصدر ليس بيئة جاهزة ولا يحتوي محتويات الوحدات الفرعية المطلوبة. استخدم Git بصورة recursive للبناء. سمّ تنزيلات الفروع باسمها والتزامها، لا كإصدارات رسمية. الموقع يربط الأدوات الأصلية ولا يستضيف نسخاً منها.','O ZIP do código não é um runtime pronto e não contém os submódulos necessários. Use Git recursivo para compilar. Identifique ficheiros de forks pelo fork e commit, não como versões oficiais. Este site liga às ferramentas de origem e não as espelha.','Ein Quell-ZIP ist keine fertige Laufzeit und enthält nicht die benötigten Submodulinhalte. Nutze einen rekursiven Git-Checkout. Kennzeichne Fork-Downloads mit Fork und Commit statt als offiziellen Release. Diese Website verlinkt Werkzeuge, sie spiegelt keine Binärdateien.','Un ZIP des sources n’est pas un environnement prêt et ne contient pas les sous-modules nécessaires. Utilisez un clone Git récursif. Identifiez les téléchargements de forks par branche et commit, pas comme versions officielles. Ce site fournit des liens sans miroir de binaires.','El ZIP del código no es un entorno listo y no incluye los submódulos necesarios. Usa Git recursivo para compilar. Identifica descargas de forks por fork y commit, no como versiones oficiales. Este sitio enlaza herramientas y no aloja copias ejecutables.')]}],
 requirements:[{id:'compare-hardware',title:L('Read hardware reports before upgrading','先核对硬件报告，再考虑升级','راجع تقارير العتاد قبل الترقية','Consultar os testes antes de atualizar o PC','Vor einem Upgrade Hardwareberichte prüfen','Lire les rapports avant une mise à niveau','Revisa informes antes de ampliar el equipo'),body:[L('Compare the operating system, GPU family, driver, build and scene, not just the FPS column. A faster GPU cannot implement a missing API or fix an invalid shader translation. A menu running at 60 FPS says little about a later level. If a report uses an experimental flag or fork, account for it before treating the hardware as a recommended configuration. No universal minimum or “all PS5 games” hardware tier is established by these reports.','比较时应同时核对系统、显卡系列、驱动、构建及场景，而不只看帧数。更快的显卡无法补齐缺失 API，也不能修复错误的着色器转换。菜单 60 FPS 不能代表后续关卡；实验开关或分支也必须纳入条件。这些报告尚不能得出适用于全部 PS5 游戏的通用最低配置。','قارن النظام وGPU والتعريف والبناء والمشهد، لا FPS فقط. بطاقة أسرع لا تنفذ API مفقودة أو تصلح ترجمة shader. قائمة 60 FPS لا تثبت مستوى لاحقاً. احسب الفروع والخيارات التجريبية؛ لا تحدد التقارير حداً أدنى لكل ألعاب PS5.','Compare sistema, GPU, controlador, compilação e cena, não só FPS. Uma GPU mais rápida não implementa APIs em falta nem corrige shaders. Um menu a 60 FPS não representa níveis posteriores. Considere forks e opções; estes relatos não definem mínimos universais.','Vergleiche System, GPU, Treiber, Build und Szene statt nur FPS. Eine schnellere GPU implementiert keine fehlende API und korrigiert keine Shaderübersetzung. Ein 60-FPS-Menü sagt wenig über spätere Level. Beachte Forks und Optionen; allgemeine Mindestdaten ergeben sich daraus nicht.','Comparez système, GPU, pilote, version et scène, pas seulement les FPS. Un GPU plus rapide n’implémente pas une API manquante ni ne corrige les shaders. Un menu à 60 FPS ne représente pas les niveaux suivants. Tenez compte des forks ; aucun minimum universel n’est établi.','Compara sistema, GPU, controlador, versión y escena, no solo FPS. Una GPU más rápida no implementa APIs ni corrige shaders. Un menú a 60 FPS no representa niveles posteriores. Considera forks y opciones; estos informes no fijan mínimos universales.')]}],
 'guides/windows':[{id:'module-folders',title:L("Runtime-loaded game modules on current main","当前 main 的动态游戏模块","وحدات اللعبة الديناميكية في main","Módulos dinâmicos no main atual","Dynamische Spielmodule auf aktuellem main","Modules dynamiques sur main actuel","Módulos dinámicos en main actual"),body:[{"en": "v0.1.2 USAGE documents repeated --module-dir for game modules outside sce_module/, such as Unity Media/Modules and Media/Plugins. Pass each directory explicitly, preserve the module layout and pair the relinker with its libraries. These options do not verify a title or justify deprecated skip-module, syscall-check or lazy-binding workarounds.", "zh": "v0.1.2 的 USAGE 已记录可重复 --module-dir，处理 sce_module/ 之外的游戏模块，如 Unity Media/Modules、Media/Plugins。明确传入每个目录，保留模块布局，转换器与库配套。选项存在不证明游戏已验证，也不应把弃用的 skip-module、syscall-check 或 lazy-binding 当作通用修复。", "ar": "يوثق USAGE v0.1.2 تكرار --module-dir لوحدات خارج sce_module/ مثل Unity. مرر الدلائل واحفظ التنظيم وطابق الأداة والمكتبات. الخيارات لا تختبر اللعبة أو تبرر حلول skip-module/syscall-check/lazy-binding القديمة.", "pt": "USAGE v0.1.2 documenta --module-dir repetível para módulos fora de sce_module/, como Unity. Indique cada pasta, preserve organização e emparelhe ferramenta/libs. Opções não validam títulos nem justificam workarounds antigos skip-module/syscall-check/lazy-binding.", "de": "USAGE v0.1.2 dokumentiert wiederholtes --module-dir für Module außerhalb sce_module/, etwa Unity. Ordner angeben, Layout behalten, Werkzeug/Libs paaren. Optionen testen keinen Titel und rechtfertigen keine veralteten Skip-/Syscall-/Lazy-Binding-Workarounds.", "fr": "USAGE v0.1.2 documente --module-dir répété hors sce_module/, dont Unity. Indiquez les dossiers, gardez structure et paire outil/libs. Options ne valident pas un jeu ni les anciens contournements skip-module/syscall-check/lazy-binding.", "es": "USAGE v0.1.2 documenta --module-dir repetido fuera de sce_module/, como Unity. Indica cada carpeta, conserva estructura y pareja herramienta/libs. Opciones no verifican títulos ni justifican workarounds antiguos skip-module/syscall-check/lazy-binding."}]},{id:'launch-check',title:L('Verify the folder and first launch','核对目录并完成首次启动','التحقق من المجلد والتشغيل الأول','Verificar a pasta e o primeiro arranque','Ordner und ersten Start prüfen','Vérifier les dossiers et le premier lancement','Verificar carpetas y primer inicio'),body:[{"en": "After conversion, compare the output against the runtime layout in the getting-started guide. Do not move only app.exe and leave its generated game modules behind. Resources must remain under app0/ in the layout expected by the game, while AnyPS5 host libraries belong under libs/. Changing the current working directory can make relative resources disappear even when the executable itself starts. Quote paths containing spaces when running commands in your shell.", "zh": "转换后按新手指南核对运行目录，不要只移动 app.exe 而漏掉生成的游戏模块。资源应按游戏预期放在 app0/ 内，AnyPS5 宿主库则放在 libs/。即使程序已经启动，更换工作目录也可能导致相对路径资源无法找到。在终端使用含空格的路径时，请加引号。", "ar": "قارن الناتج بمخطط المجلدات. لا تنقل app.exe وحده وتترك الوحدات المحولة. الموارد في app0/ ومكتبات المضيف في libs/. تغيير مجلد العمل قد يخفي الموارد النسبية رغم بدء البرنامج. ضع المسارات ذات الفراغات بين علامتي اقتباس.", "pt": "Compare o resultado com a estrutura do guia inicial. Não mova apenas app.exe deixando módulos para trás. Recursos ficam em app0/ e bibliotecas do anfitrião em libs/. Mudar a pasta de trabalho pode impedir encontrar recursos. Coloque caminhos com espaços entre aspas.", "de": "Vergleiche das Ergebnis mit dem Verzeichnisplan. Verschiebe nicht nur app.exe und lasse erzeugte Spielmodule zurück. Ressourcen gehören nach app0/, Hostbibliotheken nach libs/. Ein anderes Arbeitsverzeichnis kann relative Ressourcen verbergen. Setze Pfade mit Leerzeichen in Anführungszeichen.", "fr": "Après la conversion, comparez les dossiers générés avec la structure présentée dans le guide de démarrage. Ne déplacez pas uniquement app.exe en laissant les modules du jeu derrière. Les ressources doivent rester dans app0/ selon la structure attendue par le jeu, tandis que les bibliothèques AnyPS5 vont dans libs/. Un changement de dossier de travail peut empêcher la résolution des chemins relatifs, même si l’exécutable démarre. Entourez de guillemets les chemins contenant des espaces.", "es": "Tras la conversión, compara los archivos generados con la estructura del tutorial inicial. No muevas solo app.exe dejando atrás los módulos del juego. Los recursos deben permanecer en app0/ según la estructura esperada por el juego, y las bibliotecas de AnyPS5 van en libs/. Cambiar la carpeta de trabajo puede impedir que se encuentren los recursos con rutas relativas, aunque el ejecutable se inicie. Pon entre comillas las rutas que contengan espacios."}, {"en": "If the window opens without responding, test simple keyboard input and one controller separately before blaming rendering. v0.1.2 includes #5580 for the vendor-HID enumeration hang in #1042; DirectInput-only devices remain a limitation. Keep the earliest error and peripheral list. For black output, record shader/presentation errors and the build rather than calling it a DLL problem.", "zh": "窗口出现但操作无响应时，先分别测试简单键盘输入与单个手柄，不要立即归因于渲染。v0.1.2 已包含 #5580，处理 #1042 厂商 HID 枚举挂起，仅 DirectInput 设备仍有边界。保留最早错误与外设列表；黑屏应记录 shader／呈现错误及构建，不笼统归为 DLL 问题。", "ar": "إذا فتحت النافذة دون استجابة فاختبر لوحة المفاتيح وجهاز تحكم منفصلين. v0.1.2 يتضمن #5580 لتعليق HID في #1042، وأجهزة DirectInput فقط لها قيد. احفظ أول خطأ والأجهزة؛ سجل أخطاء shader/العرض والبناء للصورة السوداء، لا تسمها مشكلة DLL.", "pt": "Janela sem resposta: teste teclado e um comando separadamente. v0.1.2 inclui #5580 para bloqueio HID #1042, com limite DirectInput-only. Guarde primeiro erro/periféricos; para imagem preta registe shader/apresentação/build, não chame problema DLL.", "de": "Bei nicht reagierendem Fenster Tastatur und einzelnen Controller prüfen. v0.1.2 enthält #5580 gegen HID-Hang #1042, DirectInput-only bleibt begrenzt. Ersten Fehler/Geräte behalten; bei Schwarzbild Shader-/Präsentationsfehler und Build statt pauschal DLL notieren.", "fr": "Fenêtre sans réponse : tester clavier et un contrôleur séparément. v0.1.2 inclut #5580 pour blocage HID #1042, limite DirectInput-only maintenue. Garder première erreur/périphériques ; écran noir : shader/présentation/build, pas diagnostic DLL générique.", "es": "Ventana sin respuesta: prueba teclado y un mando aparte. v0.1.2 incluye #5580 para bloqueo HID #1042, con límite DirectInput-only. Guarda primer error/periféricos; pantalla negra: shader/presentación/build, no diagnóstico DLL genérico."}]}],
 'guides/linux':[{id:'module-folders',title:L("Runtime-loaded game modules on current main","当前 main 的动态游戏模块","وحدات اللعبة الديناميكية في main","Módulos dinâmicos no main atual","Dynamische Spielmodule auf aktuellem main","Modules dynamiques sur main actuel","Módulos dinámicos en main actual"),body:[{"en": "v0.1.2 USAGE documents repeated --module-dir for game modules outside sce_module/, such as Unity Media/Modules and Media/Plugins. Pass each directory explicitly, preserve the module layout and pair the relinker with its libraries. These options do not verify a title or justify deprecated skip-module, syscall-check or lazy-binding workarounds.", "zh": "v0.1.2 的 USAGE 已记录可重复 --module-dir，处理 sce_module/ 之外的游戏模块，如 Unity Media/Modules、Media/Plugins。明确传入每个目录，保留模块布局，转换器与库配套。选项存在不证明游戏已验证，也不应把弃用的 skip-module、syscall-check 或 lazy-binding 当作通用修复。", "ar": "يوثق USAGE v0.1.2 تكرار --module-dir لوحدات خارج sce_module/ مثل Unity. مرر الدلائل واحفظ التنظيم وطابق الأداة والمكتبات. الخيارات لا تختبر اللعبة أو تبرر حلول skip-module/syscall-check/lazy-binding القديمة.", "pt": "USAGE v0.1.2 documenta --module-dir repetível para módulos fora de sce_module/, como Unity. Indique cada pasta, preserve organização e emparelhe ferramenta/libs. Opções não validam títulos nem justificam workarounds antigos skip-module/syscall-check/lazy-binding.", "de": "USAGE v0.1.2 dokumentiert wiederholtes --module-dir für Module außerhalb sce_module/, etwa Unity. Ordner angeben, Layout behalten, Werkzeug/Libs paaren. Optionen testen keinen Titel und rechtfertigen keine veralteten Skip-/Syscall-/Lazy-Binding-Workarounds.", "fr": "USAGE v0.1.2 documente --module-dir répété hors sce_module/, dont Unity. Indiquez les dossiers, gardez structure et paire outil/libs. Options ne valident pas un jeu ni les anciens contournements skip-module/syscall-check/lazy-binding.", "es": "USAGE v0.1.2 documenta --module-dir repetido fuera de sce_module/, como Unity. Indica cada carpeta, conserva estructura y pareja herramienta/libs. Opciones no verifican títulos ni justifican workarounds antiguos skip-module/syscall-check/lazy-binding."}]},{id:'driver-check',title:L('Separate launch, device and memory failures','区分启动、设备与内存问题','تمييز أخطاء البدء والعتاد والذاكرة','Distinguir arranque, dispositivo e memória','Start-, Geräte- und Speicherfehler trennen','Distinguer lancement, périphérique et mémoire','Distinguir inicio, dispositivo y memoria'),body:[L('Check the log for the selected Vulkan device before comparing a community benchmark. On a machine with two GPUs, a valid Vulkan device can still be the integrated one. Current main accepts ANYPS5_GPU as a case-insensitive part of the device name and fails with a list of candidates if none match. Use the exact names printed by your build; do not assume this setting exists in an older release.','比较社区性能结果前，先查看日志中的实际 Vulkan 设备。双显卡机器选中的有效设备仍可能是集显。当前 main 的 ANYPS5_GPU 接受不区分大小写的设备名片段，无匹配时会列出候选设备。使用构建打印的准确名称，不要假设旧发行版也支持该设置。',"تحقق من جهاز Vulkan المحدد في السجل قبل مقارنة نتائج الأداء. قد تختار آلة ذات بطاقتين البطاقة المدمجة حتى لو كانت تدعم Vulkan. يقبل فرع main الحالي ANYPS5_GPU كجزء من اسم الجهاز دون تمييز بين الأحرف الكبيرة والصغيرة، ويعرض الأجهزة المرشحة إذا لم يجد تطابقاً. استخدم الأسماء التي يطبعها بناؤك، ولا تفترض أن الإصدار الأقدم يدعم هذا الإعداد.","Confirme no registo qual o dispositivo Vulkan selecionado antes de comparar resultados de desempenho. Num computador com duas GPU, o dispositivo escolhido pode ser o integrado. O ramo main atual aceita ANYPS5_GPU como parte do nome, sem distinguir maiúsculas de minúsculas, e mostra os candidatos se não houver correspondência. Use os nomes apresentados pela sua compilação; não presuma que a opção existe numa versão antiga.","Prüfe im Log, welches Vulkan-Gerät tatsächlich gewählt wurde, bevor du Leistungsmessungen vergleichst. Bei zwei GPUs kann auch die integrierte gewählt worden sein. Der aktuelle main-Branch akzeptiert ANYPS5_GPU als Teil des Gerätenamens ohne Unterscheidung zwischen Groß- und Kleinschreibung. Bei fehlender Übereinstimmung werden Kandidaten aufgelistet. Verwende die Namen aus deinem Build und setze die Option bei älteren Releases nicht voraus.","Vérifiez dans le journal quel périphérique Vulkan est sélectionné avant de comparer les performances. Sur un ordinateur à deux GPU, le périphérique choisi peut être celui intégré. La branche main actuelle accepte ANYPS5_GPU comme une partie du nom, sans distinction entre majuscules et minuscules, et liste les candidats si aucun ne correspond. Utilisez les noms affichés par votre version ; ne présumez pas que cette option existe dans un ancien logiciel.","Comprueba en el registro qué dispositivo Vulkan se ha seleccionado antes de comparar el rendimiento. En un equipo con dos GPU puede haberse elegido la integrada. La rama main actual admite ANYPS5_GPU como parte del nombre, sin distinguir mayúsculas de minúsculas, y muestra los candidatos si no hay coincidencias. Usa los nombres que imprime tu compilación; no supongas que una versión anterior admite esta opción."),L('For dma-buf drivers, a permission error opening /dev/udmabuf can lead to copy-based fallback and later GPU memory failures. First check whether the device exists and whether your session has access; group changes require a new login. A size limit is a separate condition from access permission. Follow the driver-specific upstream instructions and retain the original settings for comparison instead of raising unrelated system limits for every GPU.','使用 dma-buf 的驱动打开 /dev/udmabuf 时，权限不足可能导致回退到拷贝路径，并进一步出现 GPU 内存错误。先确认设备存在、当前会话有访问权限；修改用户组后需重新登录。大小上限与访问权限是不同条件。按对应驱动的上游说明处理，并保留原设置作对比，不对所有显卡统一增大无关系统限制。','قد يؤدي منع /dev/udmabuf في تعريف dma-buf إلى النسخ ثم فشل ذاكرة GPU. تحقق من وجود الجهاز ووصول الجلسة؛ تغيير المجموعة يحتاج دخولاً جديداً. حد الحجم مختلف عن الإذن. اتبع تعليمات التعريف واحتفظ بالإعدادات الأصلية، لا ترفع حدوداً لكل GPU.',"Nos controladores que usam dma-buf, a falta de permissão para abrir /dev/udmabuf pode levar a uma alternativa baseada em cópias e a falhas posteriores de memória GPU. Confirme se o dispositivo existe e se a sessão tem acesso; alterações de grupo exigem voltar a iniciar sessão. O limite de tamanho é independente da permissão. Siga as instruções do controlador e guarde as definições originais para comparação, sem aumentar limites indiscriminadamente.",'Bei dma-buf-Treibern können fehlende udmabuf-Rechte zu Kopieren und GPU-Speicherfehlern führen. Prüfe Gerät und Sitzungsrechte; Gruppenänderungen brauchen eine neue Anmeldung. Größenlimit und Zugriff sind getrennt. Folge Treiberanweisungen und bewahre Ausgangswerte, statt pauschal Systemlimits zu erhöhen.',"Pour les pilotes utilisant dma-buf, un refus d’accès à /dev/udmabuf peut entraîner un repli vers des copies, puis des erreurs de mémoire GPU. Vérifiez que le périphérique existe et que la session y a accès ; une modification de groupe nécessite une nouvelle connexion. La limite de taille est indépendante des permissions. Suivez les instructions du pilote et conservez les réglages initiaux pour comparaison.",'Con dma-buf, no poder abrir udmabuf puede provocar copias y fallos de memoria GPU. Comprueba dispositivo y acceso de sesión; cambiar grupos requiere volver a iniciar sesión. Tamaño y permisos son distintos. Sigue las instrucciones del controlador y conserva los valores originales.')]}],
 'guides/build':[{id:'macos-source',title:L("macOS remains a separate source target","macOS 属于独立源码目标","macOS هدف مصدر مستقل","macOS continua a ser um alvo experimental de compilação","macOS als experimentelles Build-Ziel","macOS reste une cible de compilation distincte","macOS sigue siendo un destino de compilación independiente"),body:[L("Current upstream usage also documents --macos for x86-64 Mach-O and --to-rosetta for Apple silicon through Rosetta. The reviewed v0.1.2 assets remain Windows/Linux files. Successful conversion or a passing macOS build job does not verify a commercial game; use the upstream build and usage documents for that experimental target.","当前上游用法还记录了 --macos 输出 x86-64 Mach-O，以及 Apple silicon 经 Rosetta 使用 --to-rosetta。已复核的 v0.1.2 附件仍为 Windows/Linux 文件。转换成功或 macOS 构建任务通过不等于商业游戏测试通过；实验目标以原始构建及用法文档为准。","توثق التعليمات الحالية --macos لـx86-64 Mach-O و--to-rosetta لأجهزة Apple silicon عبر Rosetta. ملفات v0.1.2 المراجعة Windows/Linux. نجاح التحويل أو بناء macOS لا يثبت لعبة تجارية؛ راجع وثائق المصدر لهذا الهدف التجريبي.","A documentação atual inclui --macos para x86-64 Mach-O e --to-rosetta em Apple silicon via Rosetta. Os ficheiros v0.1.2 revistos continuam Windows/Linux. Converter ou compilar macOS não valida um jogo comercial; consulte os documentos para esse destino experimental.","Aktuelle Anleitung nennt --macos für x86-64 Mach-O und --to-rosetta auf Apple silicon über Rosetta. Geprüfte v0.1.2-Dateien bleiben Windows/Linux. Konvertierung oder macOS-Build bestätigt kein kommerzielles Spiel; nutze die Originaldokumente für das experimentelle Ziel.","La documentation actuelle décrit --macos pour x86-64 Mach-O et --to-rosetta sur Apple silicon via Rosetta. Les fichiers v0.1.2 vérifiés restent Windows/Linux. Conversion ou compilation macOS ne valide pas un jeu commercial ; consultez les sources pour cette cible expérimentale.","La documentación actual incluye --macos para x86-64 Mach-O y --to-rosetta en Apple silicon vía Rosetta. Los archivos v0.1.2 revisados siguen siendo Windows/Linux. Convertir o compilar macOS no verifica un juego comercial; consulta las fuentes para ese destino experimental.")]},{id:'validate-build',title:L('Keep a build that can be reproduced','保留可复现的构建','الاحتفاظ ببناء قابل للتكرار','Manter uma compilação reproduzível','Einen reproduzierbaren Build behalten','Conserver une compilation reproductible','Conservar una compilación reproducible'),body:[L('A source checkout, build directory and runtime directory serve different purposes. Record the source commit and compiler version before configuring CMake. If you merge a testing PR, record its exact commits and any conflict resolution. Rebuild both the executable tools and libs target after source changes, then copy the matching outputs into a fresh runtime directory. Mixing an old relinker with newly built libraries makes a reported result harder to reproduce.','源码目录、构建目录与运行目录各有用途。配置 CMake 前记录提交与编译器版本。合入测试 PR 时，应记录确切提交和冲突处理。源码变动后同时重建工具与 libs，再把配套输出复制到新的运行目录。旧 relinker 与新库混用会让结果难以复现。',"تؤدي مجلدات المصدر والبناء والتشغيل وظائف مختلفة. سجّل معرّف تعديل المصدر وإصدار المترجم قبل إعداد CMake. إذا دمجت طلب تعديل تجريبياً، فاحتفظ بمعرّفات تعديلاته وكيفية حل التعارضات. أعد بناء الأدوات وهدف libs بعد تغييرات المصدر، ثم انسخ النواتج المتطابقة إلى مجلد تشغيل جديد. خلط relinker قديم مع مكتبات جديدة يجعل إعادة الاختبار أصعب.","As pastas do código, da compilação e da execução têm funções diferentes. Registe o commit e a versão do compilador antes de configurar CMake. Ao integrar um PR de teste, indique os commits exatos e a resolução de conflitos. Reconstrua as ferramentas e o alvo libs após alterações ao código, e copie os resultados correspondentes para uma pasta de execução nova. Misturar um relinker antigo com bibliotecas novas dificulta a reprodução.",'Quell-, Build- und Laufzeitordner haben eigene Aufgaben. Notiere Commit und Compiler vor CMake sowie PR-Commits und Konfliktlösungen. Baue nach Änderungen Werkzeuge und libs neu und kopiere passende Ausgaben in einen frischen Laufzeitordner. Alte Relinker mit neuen Bibliotheken erschweren Reproduktion.',"Les dossiers des sources, de compilation et d’exécution ont des fonctions distinctes. Notez le commit et la version du compilateur avant de configurer CMake. Si vous intégrez une PR de test, enregistrez ses commits et la résolution des conflits. Après une modification du code, reconstruisez les outils et la cible libs, puis copiez les fichiers correspondants dans un nouveau dossier d’exécution. Mélanger un ancien relinker avec de nouvelles bibliothèques complique la reproduction.",'Código, build y ejecución usan carpetas distintas. Anota commit y compilador antes de CMake y commits/resoluciones de PR. Reconstruye herramientas y libs tras cambios y copia resultados compatibles a una carpeta nueva. Mezclar relinker antiguo y bibliotecas nuevas dificulta reproducir.'),L('Run relevant upstream tests for the subsystem you changed and preserve failures with the build record. Passing library or relinker tests confirms those test cases, not a playable PS5 title. When a build fails, keep the configure command and the first compiler error; hundreds of later messages can be consequences of one missing dependency or unsupported toolchain. Avoid importing random precompiled submodule libraries into a source build.','修改某个子系统后运行对应上游测试，将失败和构建记录一起保留。库或 relinker 测试通过只验证相应用例，不能证明 PS5 游戏可玩。编译失败时保留配置命令及第一个编译错误，后续大量消息可能只是缺失依赖或工具链不支持造成的连锁结果。不要随意混入预编译子模块库。','شغّل اختبارات الجزء المعدل واحفظ الفشل مع سجل البناء. نجاح المكتبات أو relinker ليس لعبة قابلة للعب. احتفظ بأمر التهيئة وأول خطأ مترجم؛ البقية قد تنتج من اعتماد واحد. لا تخلط مكتبات وحدات فرعية جاهزة عشوائياً.','Execute testes do subsistema alterado e guarde falhas. Testes de libs ou relinker não comprovam jogo funcional. Mantenha comando de configuração e primeiro erro; mensagens seguintes podem resultar de uma dependência. Não misture bibliotecas pré-compiladas de origem arbitrária.','Teste das geänderte Subsystem und dokumentiere Fehler. Bibliotheks- oder Relinker-Tests bestätigen kein spielbares PS5-Spiel. Sichere Konfigurationsbefehl und ersten Compilerfehler; Folgemeldungen können von einer Abhängigkeit stammen. Keine beliebigen vorkompilierten Submodulbibliotheken einmischen.','Testez le sous-système modifié et gardez les échecs. Les tests de libs ou relinker ne prouvent pas un jeu jouable. Conservez commande et première erreur ; les suivantes peuvent provenir d’une dépendance. Ne mélangez pas des bibliothèques précompilées arbitraires.','Prueba el subsistema modificado y conserva fallos. Las pruebas de libs o relinker no demuestran juego funcional. Guarda configuración y primer error; los posteriores pueden derivarse de una dependencia. No mezcles bibliotecas precompiladas arbitrarias.')]}],
 'guides/input':[{id:'ini-example',title:L('A small keyboard configuration example','最小键盘设置示例','مثال بسيط لإعداد لوحة المفاتيح','Exemplo simples para o teclado','Ein kleines Tastaturbeispiel','Exemple simple de clavier','Ejemplo sencillo de teclado'),body:[L('Save the following as anyps5-input.ini beside the generated executable. It maps the Cross action to F or Space and leaves omitted actions at their default bindings. The first line for an action replaces its built-in mapping; later lines add alternatives. Controller bindings are managed separately and are not remapped by these keyboard overrides. A malformed line stops input initialisation and reports the filename and line, so change a few actions at a time.','将下方内容保存为生成程序旁的 anyps5-input.ini。它把 Cross 操作映射为 F 或空格，未列出的操作保留默认键位。同一操作的第一行替换内置映射，后续行添加备选输入。手柄映射单独处理，不会被这些键盘配置改写。格式错误会停止输入初始化并报告文件、行号，建议每次只修改少量操作。',"احفظ المثال التالي باسم anyps5-input.ini بجانب الملف التنفيذي الناتج. يربط إجراء Cross بالمفتاحين F وSpace، وتحتفظ الإجراءات غير المذكورة بتعييناتها الافتراضية. يستبدل السطر الأول لكل إجراء التعيين المدمج، بينما تضيف الأسطر التالية بدائل. تُدار تعيينات وحدة التحكم بشكل مستقل ولا تغيرها إعدادات لوحة المفاتيح هذه. يوقف السطر غير الصحيح تهيئة الإدخال ويحدد الملف ورقم السطر، لذا عدّل بضعة إجراءات في كل مرة.","Guarde o exemplo seguinte como anyps5-input.ini junto do executável gerado. A ação Cross fica associada a F ou à barra de espaços, e as ações omitidas mantêm os valores predefinidos. A primeira linha de cada ação substitui a associação original; as linhas seguintes acrescentam alternativas. As associações dos comandos são geridas separadamente e não são alteradas por estas definições do teclado. Uma linha inválida interrompe a inicialização e indica o ficheiro e a linha; altere poucas ações de cada vez.","Speichere das Beispiel als anyps5-input.ini neben der erzeugten Programmdatei. Es legt die Cross-Aktion auf F oder die Leertaste; nicht aufgeführte Aktionen behalten ihre Standardbelegung. Die erste Zeile einer Aktion ersetzt die ursprüngliche Belegung, weitere Zeilen ergänzen Alternativen. Controllerbelegungen werden separat verwaltet und von diesen Tastatureinstellungen nicht verändert. Eine ungültige Zeile stoppt die Initialisierung mit Dateiname und Zeilennummer. Ändere daher nur wenige Aktionen gleichzeitig.","Enregistrez l’exemple sous le nom anyps5-input.ini à côté de l’exécutable généré. Il associe l’action Cross à F ou à la barre d’espace ; les actions absentes conservent leurs valeurs par défaut. La première ligne d’une action remplace son association d’origine, tandis que les suivantes ajoutent des alternatives. Les associations des manettes sont gérées séparément et ne changent pas avec ces réglages du clavier. Une ligne invalide arrête l’initialisation et indique le fichier et la ligne. Modifiez donc peu d’actions à la fois.","Guarda el ejemplo como anyps5-input.ini junto al ejecutable generado. Asocia la acción Cross a F o a la barra espaciadora; las acciones omitidas conservan sus valores predeterminados. La primera línea de una acción sustituye su asignación original y las siguientes añaden alternativas. Los mandos se configuran por separado y estos ajustes del teclado no cambian sus asignaciones. Una línea incorrecta detiene la inicialización e indica el archivo y la línea. Cambia pocas acciones a la vez.")],code:'Cross = KEY:F\nCross = KEY:Space\nLeftStickLeft = KEY:J\nLeftStickRight = KEY:L\nLeftStickUp = KEY:I\nLeftStickDown = KEY:K'},{id:'input-progress',title:L('Input features still under review','仍在审核的输入功能','ميزات إدخال قيد المراجعة','Funções de controlos em revisão','Eingabefunktionen in Prüfung','Fonctions de commandes en revue','Funciones de controles en revisión'),body:[L('The separate native editor discussed in PR #674 is still a proposal in our reviewed snapshot. Do not follow F10 or editor-install instructions as if they were supported by every release. Touchpad clicks and actual finger coordinates are different features. For a game-specific problem, record the controller model, connection type, attempted action and whether keyboard input differs.','复核快照中，PR #674 的独立原生编辑器仍属提案。不能将 F10 或编辑器安装写成每个发行版都支持的步骤。触摸板点击与真实手指坐标也不是同一功能。排查具体游戏时，请记录手柄型号、连接方式、尝试的动作，以及键盘输入是否不同。',"لا يزال المحرر الأصلي المنفصل المطروح في PR #674 مقترحاً في المصادر التي راجعناها. لا تتعامل مع F10 أو خطوات تثبيت المحرر كميزات مدعومة في كل إصدار. نقر لوحة اللمس وقراءة إحداثيات الأصابع ميزتان مختلفتان. عند فحص مشكلة في لعبة، سجّل طراز وحدة التحكم ونوع الاتصال والإجراء المجرب وما إذا كان سلوك لوحة المفاتيح مختلفاً.","O editor nativo separado proposto no PR #674 continua a ser uma proposta nas fontes revistas. Não trate F10 ou a instalação do editor como funcionalidades de todas as versões. O clique do painel tátil e as coordenadas do dedo são funções distintas. Para um problema específico, registe o modelo do comando, o tipo de ligação, a ação tentada e as diferenças face ao teclado.",'Der Editor in #674 bleibt ein Vorschlag. F10 und Installation gelten nicht für jeden Release. Touchpadklick und Fingerkoordinaten sind getrennt. Notiere Modell, Verbindung, Aktion und Unterschiede zur Tastatur.',"L’éditeur natif distinct proposé dans la PR #674 reste une proposition dans les sources vérifiées. Ne considérez pas F10 ou l’installation de cet éditeur comme des fonctions disponibles dans toutes les versions. Le clic du pavé tactile et les coordonnées des doigts sont distincts. Pour un problème propre à un jeu, notez le modèle de manette, la connexion, l’action tentée et les différences avec le clavier.",'El editor #674 sigue siendo propuesta. F10 e instalación no valen para todas las versiones. Clic y coordenadas táctiles son distintos. Anota modelo, conexión, acción y diferencias con el teclado.')]}],
 'guides/language-fonts':[{id:'font-files',title:L('Distinguish missing fonts from missing translations','区分缺字体与缺翻译','تمييز الخطوط المفقودة والترجمة','Distinguir fontes de traduções em falta','Fehlende Schrift und Übersetzung trennen','Distinguer polices et traductions absentes','Distinguir fuentes y traducciones ausentes'),body:[L('A game can include translated text but still fail to display it when a system font set is unavailable. Current documentation expects anyps5-fonts/ beside the executable unless ANYPS5_SYSTEM_FONTS selects another directory. Noto substitutes must use the documented filenames and formats; the CJK family is a .ttc collection, not just any renamed .ttf. The example names below identify files, not an instruction to rename incompatible font formats.','游戏即使包含翻译，系统字体集不可用时仍可能无法显示文字。当前文档默认在程序旁查找 anyps5-fonts/，或使用 ANYPS5_SYSTEM_FONTS 指定目录。Noto 替代字体须符合文档规定的文件名与格式；CJK 使用 .ttc 字体集合，不能将任意 .ttf 改名冒充。下方仅列出文件示例，不是格式转换方法。','قد توجد الترجمة لكن يغيب النص عند فقد خط النظام. تتوقع الوثائق anyps5-fonts/ بجانب التنفيذ أو مسار ANYPS5_SYSTEM_FONTS. يجب مطابقة أسماء Noto وصيغها؛ CJK مجموعة .ttc لا ملف .ttf معاد التسمية. الأسماء أمثلة وليست تحويل صيغة.',"Um jogo pode ter texto traduzido que não aparece se faltarem tipos de letra do sistema. A documentação atual procura anyps5-fonts/ junto do executável, salvo quando ANYPS5_SYSTEM_FONTS indica outra pasta. Os substitutos Noto devem respeitar os nomes e formatos documentados; a família CJK usa uma coleção .ttc, não um ficheiro .ttf renomeado. Os nomes abaixo identificam ficheiros e não são instruções para converter formatos incompatíveis.",'Eine Übersetzung kann vorhanden sein, während Systemschriften fehlen. Erwartet wird anyps5-fonts/ oder ANYPS5_SYSTEM_FONTS. Noto-Dateinamen und Formate müssen passen; CJK ist eine .ttc-Sammlung, keine umbenannte .ttf. Die Beispiele sind Dateinamen, keine Formatkonvertierung.',"Un jeu peut contenir une traduction sans l’afficher si les polices système sont absentes. La documentation actuelle attend anyps5-fonts/ à côté de l’exécutable, sauf si ANYPS5_SYSTEM_FONTS indique un autre dossier. Les polices Noto doivent respecter les noms et formats documentés ; CJK utilise une collection .ttc, pas un fichier .ttf renommé. Les noms ci-dessous identifient des fichiers, sans autoriser le remplacement par un format incompatible.",'Puede haber traducción sin texto visible si falta la fuente. Se espera anyps5-fonts/ o ANYPS5_SYSTEM_FONTS. Noto debe respetar nombres y formatos; CJK es .ttc, no un .ttf renombrado. Los nombres son ejemplos, no conversión.')],code:'anyps5-fonts/\n  NotoSans-Regular.ttf\n  NotoSans-Bold.ttf\n  NotoSansCJK-Regular.ttc\n  NotoSansCJK-Bold.ttc'},{id:'language-check',title:L('Confirm the setting and available content','确认设置与游戏自带语言','التحقق من الإعداد والمحتوى','Confirmar definição e conteúdo','Einstellung und Spielinhalt prüfen','Vérifier réglage et contenu','Comprobar ajuste y contenido'),body:[L('Language numbers select a system-language value, not downloaded language packs. Some games require their own language assets or settings. Invalid ANYPS5_LANGUAGE values stop at the first language query; an empty value behaves like an unset variable. Change one setting, restart and keep the first message. For right-to-left text, a font loading successfully does not establish correct shaping, ordering or the game’s layout.','语言编号只设置系统语言值，不会下载语言包。部分游戏还需要对应资源或内部设置。无效的 ANYPS5_LANGUAGE 值会在首次语言查询时停止；空值相当于未设置。每次只改一个设置，重启并保留首个提示。对从右向左的文字，字体加载成功也不能证明字形塑形、顺序或游戏布局正确。',"تحدد أرقام اللغة القيمة التي تراها اللعبة كلغة للنظام، ولا تنزّل حزم لغات. قد تحتاج اللعبة إلى موارد اللغة الخاصة بها أو إلى إعداد داخلي. توقف قيم ANYPS5_LANGUAGE غير الصالحة التشغيل عند أول استعلام عن اللغة؛ والقيمة الفارغة تعادل عدم تعيين المتغير. غيّر إعداداً واحداً ثم أعد التشغيل واحتفظ بأول رسالة. نجاح تحميل الخط لا يثبت صحة تشكيل النص من اليمين إلى اليسار أو ترتيبه أو تخطيطه.","Os números selecionam o idioma do sistema, mas não descarregam pacotes de idiomas. Alguns jogos precisam dos seus próprios recursos ou definições de língua. Um valor inválido de ANYPS5_LANGUAGE interrompe a primeira consulta de idioma; um valor vazio equivale a não definir a variável. Altere uma definição, reinicie e guarde a primeira mensagem. Carregar um tipo de letra não comprova a composição, a ordem ou a disposição correta de texto da direita para a esquerda.","Sprachnummern wählen den Systemsprachwert aus; sie laden keine Sprachpakete herunter. Manche Spiele brauchen eigene Sprachressourcen oder Einstellungen. Ungültige ANYPS5_LANGUAGE-Werte stoppen bei der ersten Sprachabfrage; ein leerer Wert entspricht einer nicht gesetzten Variable. Ändere jeweils eine Einstellung, starte neu und bewahre die erste Meldung auf. Eine geladene Schrift belegt noch kein korrektes Shaping, keine korrekte Reihenfolge und kein korrektes Layout bei Text von rechts nach links.","Les numéros sélectionnent la langue système, sans télécharger de packs de langue. Certains jeux exigent leurs propres ressources ou réglages. Une valeur ANYPS5_LANGUAGE invalide provoque un arrêt à la première demande de langue ; une valeur vide équivaut à une variable non définie. Changez un réglage, relancez et conservez le premier message. Une police chargée ne prouve pas que la mise en forme, l’ordre ou la disposition du texte de droite à gauche sont corrects.","Los números seleccionan el idioma del sistema, pero no descargan paquetes de idiomas. Algunos juegos necesitan sus propios recursos o ajustes de idioma. Un valor incorrecto de ANYPS5_LANGUAGE detiene la primera consulta de idioma; un valor vacío equivale a no definir la variable. Cambia un ajuste, reinicia y guarda el primer mensaje. Cargar una fuente no demuestra que la composición, el orden o el diseño del texto de derecha a izquierda sean correctos.")]}],
};

guideSupplements.start.push({id:'diagnose',title:L('05 / Keep a useful test record','05 / 留下可复现的记录','05 / سجّل اختباراً مفيداً','05 / Registe um teste útil','05 / Dokumentiere den Test','05 / Gardez une trace utile du test','05 / Guarda un registro útil'),body:[L('Record the AnyPS5 commit or release, game version, patches, CPU, GPU, driver, resolution and exact stop. Keep the first meaningful error and the steps that reproduce it. When changing a build, rebuild its libraries too and keep old results separate.','记录 AnyPS5 提交或发行版、游戏版本、补丁、CPU、GPU、驱动、分辨率和准确的停止位置。保留最早有意义的错误与复现步骤。更换构建时也重建对应系统库，旧结果单独保存。','دوّن إصدار AnyPS5 أو معرّف التعديل، وإصدار اللعبة والتعديلات والمعالج والبطاقة والتعريف والدقة ونقطة التوقف. احتفظ بأول خطأ مفيد وخطوات تكراره. عند تغيير البناء، أعد بناء مكتباته أيضاً وافصل النتائج القديمة.','Registe o commit ou a versão de AnyPS5, a versão do jogo, os patches, CPU, GPU, controlador, resolução e ponto de paragem. Guarde o primeiro erro relevante e os passos para o reproduzir. Ao mudar de compilação, reconstrua também as bibliotecas e mantenha os resultados anteriores separados.','Notiere Commit oder Release, Spielversion, Patches, CPU, GPU, Treiber, Auflösung und genaue Abbruchstelle. Bewahre den ersten relevanten Fehler und die Reproduktionsschritte auf. Baue bei einem Buildwechsel auch die Bibliotheken neu und trenne alte Ergebnisse.','Notez la version ou le commit d’AnyPS5, la version du jeu, les correctifs, CPU, GPU, pilote, résolution et point d’arrêt. Conservez la première erreur pertinente et les étapes pour la reproduire. Recompilez aussi les bibliothèques après un changement de version et séparez les anciens résultats.','Anota la versión o commit de AnyPS5, versión del juego, parches, CPU, GPU, controlador, resolución y punto de parada. Guarda el primer error relevante y los pasos para reproducirlo. Al cambiar de compilación, reconstruye también las bibliotecas y separa los resultados anteriores.')]});

guideSupplements.start.push({id:'test-scope',title:L('Choose a report you can reproduce','选择能按条件复现的报告','اختر تقريراً يمكن إعادة اختباره','Escolha um relatório reproduzível','Wähle einen reproduzierbaren Bericht','Choisir un rapport reproductible','Elige un informe reproducible'),body:[L('Check the PS5 edition before selecting a build: a sequel, demo, expansion, regional PPSA or PS4 version can have different inputs. On the game page, read the edition review and each platform report together. Menu, character creation and an interactive world are different milestones. A process still running after a timeout does not prove that it displayed a frame.','选择构建前先确认 PS5 版本：续作、试玩版、扩展、地区 PPSA 及 PS4 版可能对应不同输入。游戏页中的版本核对与分平台报告应一起阅读。菜单、角色创建和可操作世界是不同阶段；超时检查时进程仍存活，不能证明已经呈现画面。','تحقق من إصدار PS5 أولاً: التتمة والتجربة والإضافة ومعرّف المنطقة ونسخة PS4 قد تستخدم ملفات مختلفة. اقرأ مراجعة الإصدار وتقارير النظام معاً. القائمة وإنشاء الشخصية والعالم التفاعلي مراحل مختلفة؛ بقاء العملية حية لا يثبت عرض إطار.','Confirme primeiro a edição PS5: sequela, demo, expansão, PPSA regional ou PS4 podem usar ficheiros diferentes. Leia a revisão da edição e os relatórios por sistema em conjunto. Menu, criação de personagem e mundo interativo são etapas diferentes; um processo ativo não prova que apresentou uma imagem.','Prüfe zuerst die PS5-Ausgabe: Fortsetzung, Demo, Erweiterung, regionale PPSA-ID oder PS4 können andere Eingaben haben. Lies Ausgabeprüfung und Plattformberichte zusammen. Menü, Charaktererstellung und steuerbare Welt sind verschiedene Stufen; ein laufender Prozess belegt kein dargestelltes Bild.','Vérifiez d’abord l’édition PS5 : suite, démo, extension, PPSA régional ou PS4 peuvent utiliser d’autres fichiers. Lisez ensemble l’édition et les rapports par système. Menu, création de personnage et monde interactif sont des étapes distinctes ; une application encore active ne prouve pas qu’elle affiche une image.','Confirma primero la edición PS5: secuela, demo, expansión, PPSA regional o PS4 pueden usar archivos distintos. Lee edición e informes por sistema juntos. Menú, creación de personaje y mundo interactivo son fases distintas; un proceso activo no demuestra que presentó imagen.'),L('This site curates upstream reports and has not performed its own game benchmarks. Source checks and automated content validation do not independently reproduce the game. Keep failed runs and patch requirements when a later source reports progress; do not present an API test or a closed issue as a new playable result.','本站整理上游报告，没有进行自己的游戏基准测试。来源核对与自动内容校验不会独立复现游戏。后续来源报告进展时，仍应保留失败记录与补丁要求，不能把 API 测试或 issue 关闭当成新的可玩结果。','يجمع الموقع تقارير المشروع ولم يقس الألعاب بنفسه. مراجعة المصادر والتحقق الآلي لا يعيدان تشغيل اللعبة. احتفظ بالفشل وشروط التعديلات؛ اختبار API أو إغلاق مشكلة لا يثبت اللعب.','O site organiza relatórios do projeto e não fez benchmarks próprios. Revisão de fontes e validação automática não reproduzem o jogo. Preserve falhas e patches; testes API ou issues encerrados não são resultados jogáveis novos.','Diese Website ordnet Upstream-Berichte und hat keine eigenen Spielbenchmarks durchgeführt. Quellenprüfung und Inhaltsvalidierung reproduzieren das Spiel nicht. Bewahre Fehler und Patchbedingungen; API-Test oder geschlossenes Issue bestätigt kein neues Gameplay.','Ce site organise les rapports du projet et n’a pas réalisé de benchmarks de jeux. Vérification des sources et validation automatique ne reproduisent pas le jeu. Conservez échecs et conditions de correctifs ; un test API ou une issue fermée ne prouve pas un nouveau résultat jouable.','El sitio organiza informes del proyecto y no hizo benchmarks propios. Revisar fuentes y validar contenido no reproduce el juego. Conserva fallos y parches; pruebas API o issues cerradas no son nuevos resultados jugables.')]});

guideSupplements.requirements=[{id:'cpu-conversion',title:L('Intel conversion has a specific limit','Intel 转换的适用边界','حدود التحويل لأجهزة Intel','Limites da conversão para Intel','Grenzen der Intel-Konvertierung','Limites de la conversion Intel','Límites de conversión para Intel'),body:[L('Current upstream documents --to-intel for supported AMD-specific instructions in the executable and bundled modules. It does not translate AMD-specific instructions generated by the game at runtime; such a path can still require an AMD host. Record the CPU and conversion flags with the report instead of assuming every x86-64 machine can run the same output.','当前上游的 --to-intel 可处理可执行文件及附带模块中受支持的 AMD 专用指令，但不能转换游戏在运行时生成的 AMD 专用指令，这类路径仍可能需要 AMD 主机。记录报告时应同时保留 CPU 与转换参数，不能假设所有 x86-64 电脑都可使用同一输出。','يعالج --to-intel التعليمات الخاصة بـAMD المدعومة في الملف والوحدات، لا التعليمات التي تولدها اللعبة أثناء التشغيل. قد يبقى هذا المسار بحاجة لمضيف AMD. سجّل المعالج وخيارات التحويل ولا تفترض أن كل x86-64 يشغل الناتج نفسه.','--to-intel trata instruções AMD suportadas no executável e nos módulos, não as geradas pelo jogo durante a execução. Esses caminhos podem continuar a exigir um processador AMD. Registe CPU e opções; não presuma que todos os x86-64 executam a mesma saída.','--to-intel behandelt unterstützte AMD-spezifische Befehle im Programm und in Modulen, nicht zur Laufzeit erzeugte. Solche Pfade können weiterhin einen AMD-Host benötigen. Notiere CPU und Flags; nicht jeder x86-64-Rechner führt dieselbe Ausgabe aus.','--to-intel traite les instructions AMD prises en charge dans l’exécutable et les modules, pas celles générées à l’exécution. Ces chemins peuvent encore exiger un hôte AMD. Notez CPU et options ; toutes les machines x86-64 ne peuvent pas forcément lancer le même résultat.','--to-intel trata instrucciones AMD admitidas en el ejecutable y módulos, no las generadas durante la ejecución. Esas rutas pueden seguir necesitando un host AMD. Registra CPU y opciones; no supongas que todo x86-64 ejecuta la misma salida.')]}];

guideSupplements['guides/windows'].push({id:'current-diagnostics',title:L('Keep conversion and startup diagnostics','保留转换与启动诊断','احتفظ بتشخيص التحويل والبدء','Guarde o diagnóstico de conversão e arranque','Konvertierung und Start diagnostizieren','Conserver le diagnostic de conversion et de démarrage','Conserva diagnósticos de conversión e inicio'),body:[{"en": "--windows-diagnostics adds dependency diagnostics and --registry writes import registries. Use matching tools and libraries and inspect the earliest loader error. Zero absent imports does not rule out throwing stubs, memory faults or presentation failures. These options are documented in the v0.1.2 USAGE file.", "zh": "--windows-diagnostics 增加依赖诊断，--registry 写出导入注册表。转换器与库需配套，并检查最早加载错误；没有缺失导入仍可能遇到抛错 stub、内存或呈现失败。这些选项已记录于 v0.1.2 USAGE。", "ar": "--windows-diagnostics يضيف تشخيص التبعيات و--registry سجلات الاستيراد. طابق الأداة والمكتبات وافحص أول خطأ؛ غياب واردات ناقصة لا ينفي stubs أو الذاكرة أو العرض. هذه الخيارات موثقة في USAGE v0.1.2.", "pt": "--windows-diagnostics acrescenta diagnóstico e --registry registos. Emparelhe ferramenta/libs e leia primeiro erro; zero imports ausentes não exclui stubs, memória ou imagem. Estas opções constam do USAGE v0.1.2.", "de": "--windows-diagnostics ergänzt Diagnose, --registry Importregister. Werkzeug/Libs paaren, ersten Fehler prüfen; keine fehlenden Imports schließt Stubs, Speicher-/Bildfehler nicht aus. Diese Optionen stehen in USAGE v0.1.2.", "fr": "--windows-diagnostics ajoute diagnostic, --registry registres. Appariez outil/libs, examinez premier arrêt ; aucun import absent n’exclut stubs, mémoire/rendu. Ces options figurent dans USAGE v0.1.2.", "es": "--windows-diagnostics añade diagnóstico, --registry registros. Empareja herramienta/libs, revisa primer error; cero imports ausentes no excluye stubs, memoria/imagen. Estas opciones figuran en USAGE v0.1.2."}],code:'.\\build\\core\\relinker\\relinker.exe --windows --windows-diagnostics --registry .\\source\\input.elf .\\runtime\\app.exe'});

guideSupplements['guides/linux'].push({id:'build-backends',title:L('Check display and audio build dependencies','检查显示与音频构建依赖','تحقق من اعتماديات العرض والصوت','Verifique as dependências de imagem e som','Anzeige- und Audiodependenzen prüfen','Vérifier les dépendances d’affichage et de son','Comprueba dependencias de pantalla y audio'),body:[L("The full Linux source build requires SDL X11, Xext and XRandR development files, plus PipeWire, PulseAudio or ALSA development support. Debian/Ubuntu: libx11-dev, libxext-dev, libxrandr-dev; Fedora: include libXrandr-devel. Keep SDL_X11_XRANDR enabled; current configuration rejects missing refresh-query support. Fedora Threads errors may need glibc-static and libstdc++-static.","完整 Linux 源码构建需要 SDL 的 X11、Xext、XRandR 开发文件及 PipeWire／PulseAudio／ALSA 中一种开发支持。Debian／Ubuntu 安装 libx11-dev、libxext-dev、libxrandr-dev；Fedora 包括 libXrandr-devel。保留 SDL_X11_XRANDR，当前配置会拒绝缺少刷新率查询支持。Fedora Threads 错误可能需 glibc-static 和 libstdc++-static。","يتطلب بناء Linux الكامل تطوير X11 وXext وXRandR وصوت PipeWire/PulseAudio/ALSA. Debian/Ubuntu: libx11-dev وlibxext-dev وlibxrandr-dev؛ Fedora: libXrandr-devel. أبق SDL_X11_XRANDR؛ يرفض الإعداد نقص استعلام التحديث. خطأ Threads قد يحتاج glibc-static وlibstdc++-static.","O build Linux completo precisa de desenvolvimento X11/Xext/XRandR e PipeWire/PulseAudio/ALSA. Debian/Ubuntu: libx11-dev, libxext-dev, libxrandr-dev; Fedora: libXrandr-devel. Mantenha SDL_X11_XRANDR; sem consultas de atualização a configuração falha. Threads Fedora pode precisar de glibc-static/libstdc++-static.","Der volle Linux-Build braucht X11/Xext/XRandR- und PipeWire/PulseAudio/ALSA-Entwicklungspakete. Debian/Ubuntu: libx11-dev, libxext-dev, libxrandr-dev; Fedora: libXrandr-devel. SDL_X11_XRANDR beibehalten; fehlende Refresh-Abfragen scheitern beim Konfigurieren. Fedora Threads kann glibc-static/libstdc++-static benötigen.","Le build Linux complet exige développement X11/Xext/XRandR et PipeWire/PulseAudio/ALSA. Debian/Ubuntu : libx11-dev, libxext-dev, libxrandr-dev ; Fedora : libXrandr-devel. Gardez SDL_X11_XRANDR ; absence d’interrogation de fréquence bloque la configuration. Threads Fedora peut exiger glibc-static/libstdc++-static.","El build Linux completo requiere desarrollo X11/Xext/XRandR y PipeWire/PulseAudio/ALSA. Debian/Ubuntu: libx11-dev, libxext-dev, libxrandr-dev; Fedora: libXrandr-devel. Mantén SDL_X11_XRANDR; falta de consultas de refresco bloquea configuración. Threads Fedora puede requerir glibc-static/libstdc++-static."),L('Current main prefers a suitable discrete Vulkan device. Confirm the printed device rather than assuming the laptop used the intended GPU; ANYPS5_GPU selects a case-insensitive name fragment. Keep /dev/udmabuf access checks separate from its size limit and from shader failures. A working window or audio backend is still only one part of a game test.','当前 main 优先选择合适的独立 Vulkan 显卡。以日志打印的设备为准，不假定笔记本已使用目标显卡；ANYPS5_GPU 按不区分大小写的名称片段选择。/dev/udmabuf 访问权限、大小上限与着色器失败应分别排查。窗口或音频后端正常仍只验证游戏测试的一部分。','يفضل main الحالي جهاز Vulkan منفصلاً مناسباً. تحقق من الاسم في السجل؛ يختار ANYPS5_GPU جزءاً من الاسم دون حساسية للحالة. افصل أذونات /dev/udmabuf وحد الحجم وفشل التظليل. النافذة أو الصوت جزء فقط من اختبار اللعبة.','O main atual prefere uma GPU Vulkan dedicada adequada. Confirme o dispositivo no registo; ANYPS5_GPU escolhe parte do nome sem distinguir maiúsculas. Separe acesso a /dev/udmabuf, limite de tamanho e shaders. Janela ou áudio funcionais são apenas parte do teste.','Aktuelles main bevorzugt eine geeignete dedizierte Vulkan-GPU. Prüfe das Gerät im Log; ANYPS5_GPU wählt einen Namensteil ohne Groß-/Kleinschreibung. Trenne /dev/udmabuf-Rechte, Größenlimit und Shaderfehler. Fenster oder Audiobackend sind nur Teil eines Spieltests.','Le main actuel préfère un GPU Vulkan dédié adapté. Vérifiez le périphérique dans le journal ; ANYPS5_GPU sélectionne un fragment sans distinction de casse. Séparez permissions de /dev/udmabuf, limite de taille et erreurs de shaders. Fenêtre ou audio fonctionnels ne sont qu’une partie du test.','El main actual prefiere una GPU Vulkan dedicada adecuada. Confirma el dispositivo en el registro; ANYPS5_GPU elige un fragmento sin distinguir mayúsculas. Separa acceso a /dev/udmabuf, límite de tamaño y shaders. Ventana o audio funcionales son solo parte de la prueba.') ]});

guideSupplements['guides/build'].push({id:'import-audit',title:L('Audit imports before judging compatibility','先审计导入，再判断运行结果','دقّق الاستيرادات قبل الحكم على التوافق','Audite imports antes de avaliar o jogo','Imports vor der Spielbewertung prüfen','Vérifier les imports avant de juger le résultat','Audita imports antes de valorar el resultado'),body:[L('Current upstream tools/import_audit.py reads the registries produced by --registry against the actual built libraries. Pass the executable registry and every generated module registry, and use --libs for the matching host-library directory and --modules for the title’s module directories. The example includes only one bundled libc module; add every other registry and module directory your title generates.','当前上游的 tools/import_audit.py 根据 --registry 生成的注册表和实际构建库核对导入。传入主程序及每个生成模块的注册表，--libs 指向配套主机库目录，--modules 指向游戏模块目录。下例仅包含一个附带 libc 模块，实际需补齐游戏生成的其他注册表与模块目录。','تقرأ tools/import_audit.py سجلات --registry مقابل المكتبات المبنية فعلياً. مرّر سجل البرنامج وكل وحدة، و--libs للمكتبات المطابقة و--modules لمجلدات وحدات اللعبة. المثال يضم libc واحدة؛ أضف باقي السجلات والمجلدات.','tools/import_audit.py compara registos de --registry com as bibliotecas realmente compiladas. Passe o registo do programa e de cada módulo, --libs para as libs correspondentes e --modules para as pastas do jogo. O exemplo só inclui libc; acrescente todos os outros registos e diretórios.','tools/import_audit.py prüft --registry-Register gegen tatsächlich gebaute Bibliotheken. Übergib Programm- und alle Modulregister, --libs für passende Hostbibliotheken und --modules für Spielmodulordner. Das Beispiel enthält nur libc; ergänze alle weiteren Register und Ordner.','tools/import_audit.py compare les registres --registry aux bibliothèques réellement compilées. Passez le registre du programme et de chaque module, --libs pour les bibliothèques correspondantes et --modules pour les dossiers du jeu. L’exemple inclut seulement libc ; ajoutez les autres registres et dossiers.','tools/import_audit.py compara registros --registry con bibliotecas realmente compiladas. Pasa el registro del programa y de cada módulo, --libs para bibliotecas correspondientes y --modules para carpetas del juego. El ejemplo solo incluye libc; añade los demás registros y carpetas.'),L("implemented marks an export without a whole-function throwing stub, not complete behaviour. stub loads and throws; absent prevents loading; module identifies a title-supplied provider. Current main also audits every --modules file’s undefined symbols and needed libraries, including sectionless ELF dynamic tables. A clean import audit does not prove correct rendering, gameplay or multiplayer.","implemented 表示导出不是整函数抛错占位，不表示行为完整；stub 可加载但调用时抛错，absent 阻止加载，module 标识随游戏提供的库。当前 main 还审计每个 --modules 文件的未定义符号和依赖库，支持无节头 ELF 的动态表。导入无缺失不证明画面、游戏过程或多人正确。","implemented تصدير لا يرمي دائماً، وليس سلوكاً كاملاً. stub يحمل ثم يرمي، absent يمنع التحميل، module مزود مرفق. يفحص main الحالي رموز واعتماديات كل ملف --modules وحتى جداول ELF بلا ترويسات أقسام. التدقيق السليم لا يثبت الرسم أو اللعب أو الشبكة.","implemented é um export sem stub que sempre lança erro, não comportamento completo. stub carrega e falha; absent impede carregar; module é fornecedor do jogo. Main atual audita símbolos e dependências de cada --modules, incluindo ELF sem secções. Auditoria limpa não prova imagem, jogo ou rede.","implemented ist ein Export ohne vollständig werfenden Stub, kein vollständiges Verhalten. stub lädt und wirft; absent verhindert Laden; module ist ein Spielprovider. Aktuelles main prüft Symbole und Abhängigkeiten jeder --modules-Datei, auch ELF ohne Sektionsheader. Ein sauberes Audit belegt kein Rendering, Gameplay oder Netzwerk.","implemented est un export sans stub toujours bloquant, pas un comportement complet. stub charge puis échoue ; absent empêche de charger ; module est fourni par le jeu. Main actuel audite symboles et dépendances de chaque --modules, même ELF sans sections. Audit propre ne valide ni rendu, ni jeu, ni réseau.","implemented es un export sin stub que siempre falla, no comportamiento completo. stub carga y falla; absent impide cargar; module lo aporta el juego. Main actual audita símbolos y dependencias de cada --modules, incluso ELF sin secciones. Auditoría limpia no valida gráficos, juego ni red.")],code:'./build/core/relinker/relinker --registry source/input.elf runtime/app.elf\npython3 tools/import_audit.py runtime/app.registry.json runtime/app.libc.prx.guest.prx.registry.json --libs runtime/libs --modules source/sce_module'});

guideSupplements["downloads"]??=[];
guideSupplements["downloads"].push({
 "id": "browser-converter",
 "title": {
  "en": "Browser converter paired with v0.1.3",
  "zh": "网页转换器已配对v0.1.3",
  "ar": "محوّل الويب مقترن بـv0.1.3",
  "pt": "Conversor web emparelhado comv0.1.3",
  "de": "Browserkonverter mitv0.1.3 gepaart",
  "fr": "Convertisseur web associé àv0.1.3",
  "es": "Conversor web emparejado conv0.1.3"
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
   "label": "Web converter",
   "url": "https://boykopovar.github.io/AnyPS5/"
  },
  {
   "label": "PR#5710",
   "url": "https://github.com/boykopovar/AnyPS5/pull/5710"
  }
 ]
});

guideSupplements["start"]??=[];
guideSupplements["start"].push({
 "id": "browser-converter",
 "title": {
  "en": "Browser converter paired with v0.1.3",
  "zh": "网页转换器已配对v0.1.3",
  "ar": "محوّل الويب مقترن بـv0.1.3",
  "pt": "Conversor web emparelhado comv0.1.3",
  "de": "Browserkonverter mitv0.1.3 gepaart",
  "fr": "Convertisseur web associé àv0.1.3",
  "es": "Conversor web emparejado conv0.1.3"
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
   "label": "Web converter",
   "url": "https://boykopovar.github.io/AnyPS5/"
  },
  {
   "label": "PR#5710",
   "url": "https://github.com/boykopovar/AnyPS5/pull/5710"
  }
 ]
});

guideSupplements["guides/linux"]??=[];
guideSupplements["guides/linux"].push({id:"release-display",title:L("Linux release display support and a remaining collision","Linux 发行版显示支持与残留符号冲突","عرض إصدار Linux وتعارض رمز متبقٍّ","Imagem no Linux e um conflito restante","Linux-Release: Anzeige und Symbolkonflikt","Affichage Linux et conflit de symbole restant","Pantalla Linux y conflicto de símbolo pendiente"),body:[L("v0.1.1 was offscreen-only; #5383 is now closed after a matching v0.1.2 pair opened X11 and ran Sarah on an MX230. #5396 was closed unmerged because its extra packages were already dependencies, not the cause fix. v0.1.2 predates #5738: YNw9Xk5iNWo can abort first presentation. The cited Linux run uses the preload below; later main fixes the helper collision. This workaround is tied to that error, not general compatibility.","v0.1.1 只有 offscreen 后端；作者用配套 v0.1.2 在 MX230 上打开 X11 并运行莎拉后，#5383 已关闭。#5396 添加的包原本就是依赖，关闭且未合并，不是原因修复。v0.1.2 早于 #5738，首次呈现可能在 YNw9Xk5iNWo 上终止；来源 Linux 复测用了下方 preload，后续 main 修复内部 helper 冲突。此绕行仅针对该错误，不代表普遍兼容。","كان v0.1.1 بلا واجهة سوى offscreen. أغلق #5383 بعد فتح X11 وتشغيل Sarah على MX230 بزوج v0.1.2. أغلق #5396 دون دمج لأن الحزم موجودة كتبعيات، لا كإصلاح السبب. يسبق v0.1.2 إصلاح #5738؛ قد يوقف YNw9Xk5iNWo أول عرض. استخدم الاختبار المذكور preload أدناه؛ أصلح main التعارض لاحقاً. الحل خاص بهذا الخطأ، لا بالتوافق العام.","v0.1.1 tinha apenas offscreen. #5383 foi fechado após um par v0.1.2 abrir X11 e executar Sarah numa MX230. #5396 foi fechado sem integração: os pacotes já eram dependências. v0.1.2 é anterior a #5738; YNw9Xk5iNWo pode abortar a primeira apresentação. O teste Linux citado usou o preload abaixo; main posterior corrigiu o helper. É uma solução para esse erro, não compatibilidade geral.","v0.1.1 hatte nur offscreen. #5383 wurde nach einem X11-/Sarah-Test mit passendem v0.1.2-Paar auf MX230 geschlossen. #5396 blieb ungemergt: die Pakete waren bereits Abhängigkeiten. v0.1.2 liegt vor #5738; YNw9Xk5iNWo kann die erste Präsentation abbrechen. Der Linux-Test nutzte das folgende Preload; späteres main behebt die Helper-Kollision. Das ist eine gezielte Umgehung, kein allgemeiner Kompatibilitätsnachweis.","v0.1.1 n’avait qu’offscreen. #5383 a été fermée après un test X11/Sarah sur MX230 avec la paire v0.1.2. #5396 a été fermée sans fusion : ses paquets étaient déjà des dépendances. v0.1.2 précède #5738 ; YNw9Xk5iNWo peut interrompre la première présentation. Le test Linux cité utilise le preload ci-dessous ; main ultérieur corrige le helper. Ce contournement concerne cette erreur précise.","v0.1.1 solo tenía offscreen. #5383 se cerró tras probar X11/Sarah en una MX230 con el par v0.1.2. #5396 se cerró sin integrar: sus paquetes ya eran dependencias. v0.1.2 precede a #5738; YNw9Xk5iNWo puede abortar la primera presentación. La prueba Linux citada usó el preload inferior; main posterior corrige el helper. Es una solución para ese error concreto.")],code:"LD_PRELOAD=libs/libSceMouse.prx ./app.elf",links:[{"label": "Issue #5383 · retest", "url": "https://github.com/boykopovar/AnyPS5/issues/5383#issuecomment-6173567108"}, {"label": "PR #5738 · merged after v0.1.2", "url": "https://github.com/boykopovar/AnyPS5/pull/5738"}, {"label": "PR #5396 · closed unmerged", "url": "https://github.com/boykopovar/AnyPS5/pull/5396"}]});

guideSupplements["guides/linux"]??=[];
guideSupplements["guides/linux"].push({id:"udmabuf-size",title:L("dma-buf permissions and size are different limits","dma-buf 权限与尺寸是不同限制","حد الحجم مختلف عن صلاحيات dma-buf","Permissões e tamanho dma-buf são limites diferentes","dma-buf-Rechte und Größe sind verschiedene Limits","Droits et taille dma-buf sont deux limites","Permisos y tamaño dma-buf son límites distintos"),body:[L("Permission denied and an EINVAL UDMABUF_CREATE failure need different checks. In #5329 a single 147.6 MiB range exceeds that host’s 64 MiB size_limit_mb; a temporary 2048 MiB limit passes the import but does not solve the later Vulkan timeout. A run-list PR does not automatically cover an oversized single run. Inspect the host’s actual limit and failed range before changing it; the reported temporary setting resets on reboot.","Permission denied 与 EINVAL 的 UDMABUF_CREATE 失败需要不同检查。#5329 中单个 147.6 MiB 范围超过该主机 64 MiB 的 size_limit_mb，临时提高到 2048 MiB 后可导入，但没有解决后来 Vulkan 超时。run-list PR 不自动覆盖单个过大范围。先核对真实上限和失败范围；来源临时设置重启后恢复。","Permission denied و EINVAL في UDMABUF_CREATE مختلفان. في #5329 تجاوز نطاق 147.6 MiB حد 64 MiB ؛ رفع مؤقت إلى 2048 يمرر الاستيراد لا مهلة Vulkan التالية. PR run-list لا يغطي كل نطاق كبير. افحص الحد الفعلي قبل تغييره؛ المؤقت ينتهي عند إعادة التشغيل.","Permission denied e EINVAL UDMABUF_CREATE são diferentes. #5329:147,6 MiB excede64 MiB;2048 temporário passa importação, não timeout Vulkan posterior. PR run-list não cobre todo intervalo grande. Verifique limite real antes de alterar; ajuste temporário reinicia com o sistema.","Permission denied und EINVAL bei UDMABUF_CREATE unterscheiden sich. #5329:147,6 MiB über 64 MiB; temporär2048 ermöglicht Import, nicht späteren Vulkan-Timeout. Run-list-PR deckt nicht jeden großen Bereich ab. Tatsächliches Limit prüfen; temporärer Wert endet beim Neustart.","Permission denied et EINVAL UDMABUF_CREATE diffèrent. #5329 :147,6 MiB dépasse64 MiB ;2048 temporaire permet import, pas correction du timeout suivant. PR run-list ne couvre pas chaque grande plage. Vérifiez limite réelle avant modification ; temporaire réinitialisé au redémarrage.","Permission denied y EINVAL UDMABUF_CREATE difieren. #5329:147,6 MiB supera64 MiB;2048 temporal permite import, no corrige timeout posterior. PR run-list no cubre todo rango grande. Comprueba límite real antes de cambiar; temporal se reinicia al arrancar.")],code:"cat /sys/module/udmabuf/parameters/size_limit_mb",links:[{"label": "Issue #5329", "url": "https://github.com/boykopovar/AnyPS5/issues/5329"}, {"label": "Issue #5332", "url": "https://github.com/boykopovar/AnyPS5/issues/5332"}]});

guideSupplements["guides/windows"]??=[];
guideSupplements["guides/windows"].push({id:"trace-imports",title:L("Select the libraries to trace on Windows","选择 Windows 调用追踪的运行库","اختر مكتبات التتبع على Windows","Escolher bibliotecas para rastrear no Windows","Windows-Bibliotheken für den Trace wählen","Choisir les bibliothèques à tracer sous Windows","Selecciona las bibliotecas que rastrear en Windows"),body:[L("The v0.1.2 usage document specifies --windows --trace-imports and APS5_TRACE_CALLS as a comma-separated library list or all. Without the variable, calls are not recorded. Abort/crash reports retain the last 64 calls and 32 most-called imports, not arguments or a complete execution trace. --lazy-binding conflicts with this conversion mode. Use matching libraries; --windows-fixed-base is an address-placement diagnostic, with failure if that address is occupied.","v0.1.2 使用文档要求 --windows --trace-imports，APS5_TRACE_CALLS 设为逗号分隔的库名或 all；不设置时不记录调用。异常报告保留最后 64 次调用及调用最多的 32 个导入，不包含参数或完整执行追踪。此转换模式与 --lazy-binding 冲突，需使用配套库。--windows-fixed-base 是地址定位诊断，指定地址被占用时会失败。","توثق v0.1.2 الخيارين --windows --trace-imports ومتغير APS5_TRACE_CALLS بقائمة مكتبات مفصولة بفواصل أو all. بدونه لا تُسجّل النداءات. يحتفظ تقرير التعطل بآخر 64 نداء وأكثر 32 استيراداً، لا بالوسائط أو تتبع كامل. يتعارض مع --lazy-binding ويتطلب مكتبات مطابقة. --windows-fixed-base لتشخيص الموضع، ويفشل إذا شُغل العنوان.","A documentação v0.1.2 usa --windows --trace-imports e APS5_TRACE_CALLS com bibliotecas separadas por vírgulas ou all. Sem a variável não regista chamadas. O relatório de falha guarda as últimas 64 e os 32 imports mais chamados, não argumentos nem execução completa. É incompatível com --lazy-binding. Use bibliotecas correspondentes; --windows-fixed-base diagnostica o endereço e falha se estiver ocupado.","v0.1.2 dokumentiert --windows --trace-imports und APS5_TRACE_CALLS als kommagetrennte Bibliotheksliste oder all. Ohne Variable werden keine Aufrufe aufgezeichnet. Fehlerberichte behalten die letzten 64 Aufrufe und 32 häufigsten Imports, keine Argumente oder vollständigen Abläufe. --lazy-binding ist inkompatibel. Nutze passende Bibliotheken; --windows-fixed-base prüft die Platzierung und scheitert bei belegter Adresse.","La documentation v0.1.2 utilise --windows --trace-imports et APS5_TRACE_CALLS comme liste de bibliothèques séparées par virgules ou all. Sans variable, aucun appel n’est enregistré. Le rapport conserve les 64 derniers appels et 32 imports les plus appelés, sans arguments ni trace complète. --lazy-binding est incompatible. Utilisez les bibliothèques correspondantes ; --windows-fixed-base échoue si l’adresse est occupée.","La documentación v0.1.2 usa --windows --trace-imports y APS5_TRACE_CALLS como lista de bibliotecas separadas por comas o all. Sin variable no registra llamadas. El informe guarda las últimas 64 y los 32 imports más llamados, sin argumentos ni traza completa. --lazy-binding es incompatible. Usa bibliotecas correspondientes; --windows-fixed-base falla si la dirección está ocupada.")],code:"relinker --windows --trace-imports source/eboot.elf runtime/app.exe\ncd runtime\n$env:APS5_TRACE_CALLS = 'all'\n.\\app.exe",links:[{"label": "USAGE · v0.1.2", "url": "https://github.com/boykopovar/AnyPS5/blob/a48c00660eae7afd204fdb7513a52380dddf5a04/docs/user/USAGE.md"}]});

guideSupplements["guides/build"]??=[];
guideSupplements["guides/build"].push({id:"module-and-executable",title:L("Module warnings and additional executables","模块警告与额外可执行文件","تحذيرات الوحدات والملفات التنفيذية الإضافية","Avisos de módulos e executáveis adicionais","Modulwarnungen und weitere Programme","Avertissements modules et exécutables supplémentaires","Avisos de módulos y ejecutables adicionales"),body:[{"en": "On main after v0.1.2, #5588 adds tools/unwrap_self.py for already-decrypted SELF/fSELF containers; it is not a decryption tool. The relinker still expects clean ELF and warns when containers are skipped, so inspect all modules. #5443 makes Linux multi-executable modules depend on their own system-library union; Windows output is unchanged and macOS was not run in that PR. Peace Walker’s Linux hand-over now starts the game process, but later image failures remain. Neither tool change is in the v0.1.2 tag.", "zh": "v0.1.2 之后的 main 通过 #5588 加入 tools/unwrap_self.py，处理已经解密的 SELF／fSELF，不是解密工具。relinker 仍要求干净 ELF，跳过容器会警告，应核对全部模块。#5443 让 Linux 多程序模块只依赖模块自身系统库并集；Windows 输出不变，该 PR 未运行 macOS。Peace Walker 的 Linux 交接现能启动游戏进程，但后续图像失败仍在；两项工具改动均不在 v0.1.2 tag。", "ar": "بعد v0.1.2 أضاف #5588 أداة unwrap_self.py لحاويات مفكوكة التشفير، لا فك تشفير. relinker يحتاج ELF نظيفاً ويحذر عند التخطي. #5443 يجعل وحدات Linux تعتمد اتحاد مكتباتها؛ Windows دون تغيير وmacOS غير مختبر. Peace Walker يسلم للعملية لكن الصورة تفشل لاحقاً. ليستا في tag v0.1.2.", "pt": "Depois de v0.1.2, #5588 acrescenta unwrap_self.py para SELF/fSELF já decifrados, não decifra. Relinker exige ELF e avisa ao ignorar contentores. #5443 usa união das libs dos módulos Linux; Windows igual e macOS não testado. Peace Walker passa ao processo mas falha depois na imagem. Ambos fora do tag v0.1.2.", "de": "Nach v0.1.2 ergänzt #5588 unwrap_self.py für bereits entschlüsselte SELF/fSELF, kein Entschlüsseler. Relinker verlangt ELF und warnt bei übersprungenen Containern. #5443 nutzt moduleigene Linux-Libunion; Windows gleich, macOS ungeprüft. Peace Walker startet Folgeprozess, spätere Bildfehler bleiben. Beide außerhalb v0.1.2.", "fr": "Après v0.1.2, #5588 ajoute unwrap_self.py pour SELF/fSELF déjà déchiffrés, sans déchiffrer. Relinker exige ELF et avertit des conteneurs ignorés. #5443 utilise l’union propre des libs Linux ; Windows inchangé, macOS non testé. Peace Walker lance le processus mais image échoue ensuite. Hors tag v0.1.2.", "es": "Tras v0.1.2, #5588 añade unwrap_self.py para SELF/fSELF ya descifrados, no descifra. Relinker exige ELF y avisa contenedores omitidos. #5443 usa unión propia de libs Linux; Windows igual, macOS sin probar. Peace Walker entrega al proceso, fallos de imagen posteriores siguen. Ambos fuera de v0.1.2."}],links:[{"label": "USAGE · 411e5e6d9", "url": "https://github.com/boykopovar/AnyPS5/blob/411e5e6d9fe3e09206490ccc0d260229851c2310/docs/user/USAGE.md"}, {"label": "Peace Walker · #5268", "url": "https://github.com/boykopovar/AnyPS5/discussions/5268"}]});

guideSupplements["guides/linux"].push({id:"display-backends",title:L("Choose the backend supported by your source build","选择源码构建支持的显示后端","اختر واجهة العرض في بناء المصدر","Escolher a interface do build de código","Anzeige-Backend des Quellbuilds wählen","Choisir le backend du build source","Elige el backend de la compilación"),body:[L("Main added native Wayland after v0.1.2 in #3664. With the documented Wayland, xkbcommon, EGL and libdecor development files, SDL prefers Wayland when WAYLAND_DISPLAY is set. Without them it builds X11 only. SDL_VIDEODRIVER=x11 selects XWayland, but a title bundling its own SDL may reject that backend. Check the actual build and session rather than treating an offscreen window or background-window FPS as a game result.","#3664 在 v0.1.2 之后为 main 加入原生 Wayland。安装文档所列的 Wayland、xkbcommon、EGL、libdecor 开发文件时，SDL 在 WAYLAND_DISPLAY 存在时优先使用 Wayland；缺少这些依赖则只构建 X11。SDL_VIDEODRIVER=x11 可选 XWayland，但随游戏的 SDL 可能不支持该后端。核对实际构建与会话，不能把离屏窗口或后台窗口 FPS 当作游戏结果。","أضاف main Wayland الأصلي بعد v0.1.2 عبر #3664. مع ملفات تطوير Wayland وxkbcommon وEGL وlibdecor يفضّل SDL واجهة Wayland عند ضبط WAYLAND_DISPLAY؛ دونها يُبنى X11 فقط. يختار SDL_VIDEODRIVER=x11 واجهة XWayland، وقد يرفضه SDL المرفق باللعبة. افحص البناء والجلسة؛ النافذة الخفية وعدادها ليسا نتيجة لعب.","Main acrescentou Wayland nativo depois de v0.1.2 em #3664. Com os ficheiros de desenvolvimento Wayland, xkbcommon, EGL e libdecor, SDL prefere Wayland quando WAYLAND_DISPLAY existe; sem eles compila apenas X11. SDL_VIDEODRIVER=x11 escolhe XWayland, mas o SDL do próprio jogo pode recusá-lo. Confirme o build e a sessão antes de interpretar uma janela oculta ou os seus FPS.","Main erhielt natives Wayland nach v0.1.2 durch #3664. Mit Wayland-, xkbcommon-, EGL- und libdecor-Entwicklungsdateien bevorzugt SDL Wayland bei gesetztem WAYLAND_DISPLAY; sonst entsteht nur X11. SDL_VIDEODRIVER=x11 wählt XWayland, kann aber von spielseitigem SDL abgelehnt werden. Prüfe Build und Sitzung; unsichtbare Fenster und deren FPS sind kein Gameplaynachweis.","Main a ajouté Wayland natif après v0.1.2 via #3664. Avec les fichiers de développement Wayland, xkbcommon, EGL et libdecor, SDL préfère Wayland quand WAYLAND_DISPLAY existe ; sinon seul X11 est construit. SDL_VIDEODRIVER=x11 choisit XWayland, mais le SDL fourni par le jeu peut le refuser. Vérifiez build et session avant d’interpréter une fenêtre cachée ou ses FPS.","Main añadió Wayland nativo después de v0.1.2 en #3664. Con archivos de desarrollo Wayland, xkbcommon, EGL y libdecor, SDL prefiere Wayland si existe WAYLAND_DISPLAY; sin ellos solo compila X11. SDL_VIDEODRIVER=x11 elige XWayland, pero el SDL del juego puede rechazarlo. Comprueba compilación y sesión antes de interpretar una ventana oculta o sus FPS.")],links:[{"label": "BUILD \u00b7 411e5e6d9", "url": "https://github.com/boykopovar/AnyPS5/blob/411e5e6d9fe3e09206490ccc0d260229851c2310/docs/dev/BUILD.md"}, {"label": "PR #3664", "url": "https://github.com/boykopovar/AnyPS5/pull/3664"}]});

guideSupplements.requirements.push({id:"release-scope",title:{"en": "Match the release and reported environment", "zh": "匹配发行版与报告环境", "ar": "طابق الإصدار والبيئة", "pt": "Comparar versão e ambiente", "de": "Release und Umgebung abgleichen", "fr": "Comparer version et environnement", "es": "Compara versión y entorno"},body:[{"en": "v0.1.2 distributes Windows and Linux runtime archives. The source’s macOS conversion target and the community macos-runtime fork are separate experiments; an M1 Pro report with an unpinned build is not a general Mac requirement. Vulkan header/SDK versions used to compile the runtime are also distinct from a tested driver requirement. Match a game report’s actual GPU, driver, settings and build.", "zh": "v0.1.2 分发 Windows 与 Linux runtime 包。源码的 macOS 转换目标与社区 macos-runtime 分支属于独立实验，构建未固定的 M1 Pro 报告不是通用 Mac 配置要求。编译使用的 Vulkan 头文件／SDK 版本也不同于已实测驱动要求；应匹配具体游戏的 GPU、驱动、设置及构建。", "ar": "v0.1.2 يوزع Windows/Linux. هدف macOS وفرع المجتمع تجارب مستقلة؛ تقرير M1 Pro دون بناء محدد ليس متطلبات عامة. نسخة Vulkan SDK للبناء مختلفة عن متطلبات برنامج التشغيل المختبرة. طابق GPU والبرنامج والإعدادات والبناء.", "pt": "v0.1.2 distribui Windows/Linux. Alvo macOS/fork são experiências separadas; M1 Pro sem build fixo não define requisitos. Versões Vulkan SDK de compilação distintas de driver testado. Compare GPU, driver, opções e build.", "de": "v0.1.2 verteilt Windows/Linux. macOS-Ziel/Fork getrennte Experimente; M1 Pro ohne Buildpin keine allgemeinen Anforderungen. Vulkan-SDK-Version zum Bauen ist nicht getestete Treiberanforderung. GPU, Treiber, Einstellungen/Build abgleichen.", "fr": "v0.1.2 distribue Windows/Linux. Cible macOS/fork sont des expériences séparées ; M1 Pro sans build précis ne définit pas de prérequis. SDK Vulkan de compilation distinct du pilote testé. Comparer GPU, pilote, réglages/build.", "es": "v0.1.2 distribuye Windows/Linux. Destino macOS/fork son experimentos separados; M1 Pro sin build fijo no define requisitos. SDK Vulkan al compilar distinto de driver probado. Compara GPU, driver, ajustes/build."}],links:[{label:"v0.1.2",url:"https://github.com/boykopovar/AnyPS5/releases/tag/v0.1.2"},{label:"macOS · FAQ",url:"/faq/#mac"}]});

guideSupplements["guides/windows"].push({"id": "hid-enumeration", "title": {"en": "Windows HID fix is included in v0.1.2", "zh": "v0.1.2 已包含 Windows HID 修复", "ar": "إصلاح HID Windows ضمن v0.1.2", "pt": "Correção HID Windows incluída em v0.1.2", "de": "Windows-HID-Fix in v0.1.2 enthalten", "fr": "Correctif HID Windows inclus en v0.1.2", "es": "Arreglo HID Windows incluido en v0.1.2"}, "body": [{"en": "#1050 closed in favour of #5580, which merged as d7bb2fee3 at 01:02 UTC and is an ancestor of the v0.1.2 tag. It disables DirectInput joystick enumeration by default to address the reproduced vendor-HID hang before video output. XInput and HIDAPI remain available; DirectInput-only controllers are not detected and were not tested. SDL_DIRECTINPUT_ENABLED can override the default. This is a device-specific startup fix, not a game compatibility result.", "zh": "#1050 关闭并转由 #5580 接续；后者在 01:02 UTC 于 d7bb2fee3 合入，已核验属于 v0.1.2 tag 的祖先。默认禁用 DirectInput 手柄枚举，处理已复现的厂商 HID 导致的显示初始化挂起。XInput 与 HIDAPI 仍可用，仅 DirectInput 手柄不被检测、也未实测；SDL_DIRECTINPUT_ENABLED 可覆盖默认。这是设备相关启动修复，不是游戏兼容结果。", "ar": "#1050 أُغلق لصالح #5580، دمج d7bb2fee3 في01:02 UTC وهو سلف tag v0.1.2. يعطل تعداد DirectInput افتراضياً لعطل HID عند فتح العرض. XInput/HIDAPI متاحان؛ أجهزة DirectInput فقط لا تكتشف ولم تختبر. SDL_DIRECTINPUT_ENABLED يتجاوز الافتراضي. إصلاح جهاز، لا توافق لعبة.", "pt": "#1050 fechada em favor de #5580, integrada d7bb2fee3 às01:02 UTC, antepassado do tag v0.1.2. Desativa enumeração DirectInput por defeito para bloqueio HID no arranque. XInput/HIDAPI mantidos; comandos só DirectInput não detetados nem testados. SDL_DIRECTINPUT_ENABLED altera o padrão. Correção específica, não resultado de jogo.", "de": "#1050 zugunsten #5580 geschlossen, Merge d7bb2fee3 um01:02 UTC, Vorfahr von v0.1.2. DirectInput-Enumeration standardmäßig aus gegen reproduzierten HID-Startblock. XInput/HIDAPI bleiben, reine DirectInput-Pads nicht erkannt/ungeprüft. SDL_DIRECTINPUT_ENABLED überschreibt Standard. Gerätefix, kein Spielkompatibilitätsbeleg.", "fr": "#1050 fermé pour #5580, merge d7bb2fee3 à01:02 UTC, ancêtre du tag v0.1.2. Énumération DirectInput désactivée par défaut contre blocage HID au démarrage. XInput/HIDAPI conservés ; pads DirectInput-only non détectés/non testés. SDL_DIRECTINPUT_ENABLED surcharge le défaut. Correctif appareil, pas résultat de jeu.", "es": "#1050 cerrada por #5580, merge d7bb2fee3 a01:02 UTC, ancestro de v0.1.2. Desactiva enumeración DirectInput por defecto contra bloqueo HID inicial. XInput/HIDAPI siguen; pads solo DirectInput no detectados/sin probar. SDL_DIRECTINPUT_ENABLED cambia defecto. Arreglo de dispositivo, no compatibilidad de juego."}], "links": [{"label": "PR #5580", "url": "https://github.com/boykopovar/AnyPS5/pull/5580"}, {"label": "Issue #1042", "url": "https://github.com/boykopovar/AnyPS5/issues/1042"}]});

for(const slug of ["start","downloads"]){guideSupplements[slug].push({
 "id": "browser-folder-output",
 "title": {
  "en": "Browser folder output and incomplete conversions",
  "zh": "浏览器目录输出与未完成转换",
  "ar": "مجلد إخراج المتصفح والتحويل الناقص",
  "pt": "Pasta do navegador e conversões incompletas",
  "de": "Browser-Ordnerausgabe und unvollständige Konvertierung",
  "fr": "Dossier navigateur et conversions incomplètes",
  "es": "Carpeta del navegador y conversiones incompletas"
 },
 "body": [
  {
   "en": "The current web path can write uncompressed Linux output to a new folder in supported browsers. It refuses an existing destination and attempts to remove its new folder after cancellation or failure. If cleanup is blocked, inspect the named partial folder before using it. This live-web behavior is separate from the v0.1.2 offline assets and does not resolve the open import-pairing issue.",
   "zh": "当前网页流程可在支持的浏览器向新目录输出未压缩 Linux 文件，不覆盖已有目标；取消／失败后尝试删除新建目录。若清理受阻，使用前核对错误提示中的残留目录。这是 live 网页行为，与 v0.1.2 离线资产分开，也未解决仍开放的导入配对问题。",
   "ar": "مسار الويب الحالي يكتب Linux غير مضغوط إلى مجلد جديد في متصفح مدعوم، ويرفض الموجود ويحاول التنظيف بعد فشل/إلغاء. افحص المجلد الجزئي المسمى إذا تعذر حذفه. سلوك الويب منفصل عن v0.1.2 ولا يحل مشكلة اقتران الاستيراد.",
   "pt": "O fluxo web atual grava Linux sem compressão numa pasta nova em navegadores compatíveis. Recusa destino existente e tenta remover a pasta após falha/cancelamento. Se não conseguir, confira a pasta parcial indicada. É comportamento web separado dos ficheiros v0.1.2 e não resolve a associação de imports.",
   "de": "Der aktuelle Webpfad schreibt Linux unkomprimiert in einen neuen Ordner unterstützter Browser. Bestehende Ziele werden abgelehnt, neue Ordner nach Abbruch/Fehler möglichst entfernt. Bei blockierter Bereinigung den genannten Teilordner prüfen. Separat von v0.1.2-Dateien; Import-Paarungsproblem bleibt offen.",
   "fr": "Le flux web actuel écrit Linux non compressé dans un nouveau dossier des navigateurs compatibles. Il refuse un dossier existant et tente de nettoyer après annulation/échec. Si cela échoue, vérifiez le dossier partiel indiqué. Distinct des fichiers v0.1.2 ; problème d’association des imports toujours ouvert.",
   "es": "El flujo web actual escribe Linux sin comprimir en carpeta nueva en navegadores compatibles. Rechaza destinos existentes e intenta limpiar tras error/cancelación. Si no puede, revisa la carpeta parcial indicada. Separado de archivos v0.1.2; sigue abierto el problema de emparejar imports."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/44df21632125dbe3113a19173e7ebb879da53003/docs/user/USAGE.md"
  }
 ]
});}
for(const slug of ["guides/windows","guides/linux","guides/build"]){guideSupplements[slug].push({
 "id": "original-metadata",
 "title": {
  "en": "Keep the title’s original metadata and ELF modules",
  "zh": "保留游戏原元数据及 ELF 模块",
  "ar": "احتفظ ببيانات اللعبة ووحدات ELF الأصلية",
  "pt": "Conserve metadata e módulos ELF originais",
  "de": "Originale Metadaten und ELF-Module behalten",
  "fr": "Conserver métadonnées et modules ELF originaux",
  "es": "Conserva metadatos y módulos ELF originales"
 },
 "body": [
  {
   "en": "Preserve app0/sce_sys/param.json from your own title, including its titleId and localized titleName. Main uses it for metadata and directory creation; do not change budgets to imitate another report. For import_audit.py --modules use original unwrapped ELF modules, plus every generated registry as positional input. Converted .guest.prx files on Windows are PE output, not those audit inputs.",
   "zh": "保留自己游戏的 app0/sce_sys/param.json，包括 titleId 和本地化 titleName。main 依它获取元数据并创建目录，不要为模仿报告修改预算。import_audit.py --modules 传原始解包 ELF 模块，所有生成 registry 作为位置参数；Windows 转换后的 .guest.prx 是 PE 输出，不是该审计输入。",
   "ar": "احفظ param.json الأصلي ومعرّف titleId وtitleName؛ يستخدمه main للبيانات والمجلدات ولا تغيّر الميزانيات لتقليد تقرير. --modules في import_audit.py يأخذ ELF الأصلية المفكوكة مع كل registry كوسيط. .guest.prx المحولة في Windows مخرجات PE وليست مدخلات التدقيق.",
   "pt": "Conserve param.json original com titleId/titleName; main usa-o para metadata e pastas. Não altere orçamentos para imitar relatos. --modules recebe ELF originais desembrulhados e todos os registos como argumentos. .guest.prx convertido no Windows é saída PE, não entrada dessa auditoria.",
   "de": "Originales param.json mit titleId/titleName behalten; main nutzt es für Metadaten/Ordner. Budgets nicht für Berichtsnachahmung ändern. --modules bekommt ursprüngliche entpackte ELF-Module, alle Registries als Argumente. Konvertierte Windows-.guest.prx sind PE-Ausgaben, keine solchen Prüfeingaben.",
   "fr": "Gardez param.json original avec titleId/titleName ; main l’utilise pour métadonnées/dossiers. Ne changez pas les budgets pour imiter un rapport. --modules reçoit les ELF originaux déballés et tous les registres en arguments. Les .guest.prx Windows convertis sont des sorties PE, pas ces entrées d’audit.",
   "es": "Conserva param.json original con titleId/titleName; main lo usa para metadatos/carpetas. No cambies presupuestos para imitar informes. --modules recibe ELF originales desempaquetados y todos los registros como argumentos. Los .guest.prx Windows convertidos son salidas PE, no esas entradas de auditoría."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/44df21632125dbe3113a19173e7ebb879da53003/docs/user/USAGE.md"
  }
 ]
});}
guideSupplements["guides/linux"].push({
 "id": "execute-and-cache",
 "title": {
  "en": "Executable permissions and rebuildable shader caches",
  "zh": "可执行权限与可重建着色器缓存",
  "ar": "أذونات التنفيذ وذاكرة التظليل المؤقتة",
  "pt": "Permissões de execução e cache reconstruível",
  "de": "Ausführungsrechte und erneuerbare Shader-Caches",
  "fr": "Permissions et caches de shaders reconstruisibles",
  "es": "Permisos y cachés de shaders reconstruibles"
 },
 "body": [
  {
   "en": "After-release main marks every generated executable executable. Browser downloads or copies may lose that mode: chmod +x each listed executable, including launchers’ child programs. Shaders are cached beside the output under shader_cache/ unless ANYPS5_SHADER_CACHE_DIR changes it. Deleting that cache triggers recompilation; a cold/warm timing difference is not itself a game fix.",
   "zh": "发行后的 main 为每个生成程序设置可执行权限；浏览器下载／复制可能丢失权限，应对列出的每个程序 chmod +x，包括启动器子程序。着色器默认缓存在输出旁 shader_cache/，可用 ANYPS5_SHADER_CACHE_DIR 改位置。删除会重编译，冷／预热时间差本身不是游戏修复。",
   "ar": "main بعد الإصدار يحدد إذن التنفيذ لكل ملف؛ تنزيل/نسخ المتصفح قد يفقده، فطبّق chmod +x على كل برنامج ومنها الأبناء. shader_cache/ بجانب الإخراج قابل لتغيير المسار بـANYPS5_SHADER_CACHE_DIR. حذفه يعيد الترجمة؛ فرق البارد/الدافئ ليس إصلاح لعبة.",
   "pt": "Main após o release dá permissão a cada executável; transferências/cópias podem perdê-la: chmod +x em todos, incluindo programas filhos. shader_cache/ fica junto da saída, alterável por ANYPS5_SHADER_CACHE_DIR. Apagar recompila; diferença frio/quente não é correção do jogo.",
   "de": "main nach dem Release setzt Ausführungsrechte für alle Programme. Downloads/Kopien können sie verlieren: chmod +x für jedes, auch Kindprogramme. shader_cache/ liegt neben der Ausgabe, per ANYPS5_SHADER_CACHE_DIR verlegbar. Löschen erzwingt Neukompilierung; kalt/warm allein kein Spiel-Fix.",
   "fr": "Main après publication définit les permissions de chaque programme ; téléchargements/copies peuvent les perdre : chmod +x sur chacun, y compris programmes enfants. shader_cache/ près de la sortie, configurable par ANYPS5_SHADER_CACHE_DIR. Supprimer recompile ; écart froid/chaud seul n’est pas un correctif.",
   "es": "Main posterior al release da permisos a cada ejecutable; descargas/copias pueden perderlos: chmod +x en todos, incluidos hijos. shader_cache/ queda junto a salida, configurable por ANYPS5_SHADER_CACHE_DIR. Borrar recompila; diferencia frío/caliente no es solución del juego."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/44df21632125dbe3113a19173e7ebb879da53003/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["start"].push({
 "id": "app0-archive",
 "title": {
  "en": "Optional app0 archive on current main",
  "zh": "当前main的可选app0压缩包",
  "ar": "أرشيف app0 اختياري على main",
  "pt": "Arquivo app0 opcional no main",
  "de": "Optionales app0-Archiv auf main",
  "fr": "Archive app0 optionnelle sur main",
  "es": "Archivo app0 opcional en main"
 },
 "body": [
  {
   "en": "After v0.1.2, main adds read-only app0.zar beside app0/, rooted at app0. Loose files win; keep the executable, sce_module and sce_sys loose. Reads/seeks/stat are supported, but directory listing and several other calls still refuse archive-only paths. A damaged archive stops on access. This is not a v0.1.2 feature or a reason to replace a working loose-file setup.",
   "zh": "v0.1.2之后main加入与app0/并列、根为app0的只读app0.zar。松散文件优先，程序、sce_module及sce_sys仍留在磁盘。支持读／定位／stat，目录枚举等调用仍拒绝仅压缩包路径；损坏包在访问时停止。这不是v0.1.2功能，也不必替换可用的松散文件配置。",
   "ar": "بعد v0.1.2 يضيف main أرشيف app0.zar للقراءة بجانب app0/ وبجذر app0. الملفات العادية أولاً؛ أبقِ البرنامج وsce_module وsce_sys خارج الأرشيف. قراءة/seek/stat مدعومة، سرد الأدلة ونداءات أخرى ترفض المسار المؤرشف. التالف يتوقف عند الوصول؛ ليس ميزة v0.1.2.",
   "pt": "Após v0.1.2, main aceita app0.zar só de leitura junto de app0/, com raiz app0. Ficheiros soltos prevalecem; programa, sce_module e sce_sys ficam soltos. Leitura/seek/stat suportados; listar diretórios e outras chamadas recusam caminhos só no arquivo. Arquivo danificado falha ao aceder; não é funcionalidade v0.1.2.",
   "de": "Nach v0.1.2 unterstützt main app0.zar schreibgeschützt neben app0/, mit Wurzel app0. Lose Dateien haben Vorrang; Programm, sce_module und sce_sys bleiben lose. Lesen/Seek/stat unterstützt; Verzeichnislisten und weitere Aufrufe verweigern Archivpfade. Beschädigung stoppt beim Zugriff; kein v0.1.2-Feature.",
   "fr": "Après v0.1.2, main accepte app0.zar en lecture seule à côté d’app0/, racine app0. Fichiers libres prioritaires ; programme, sce_module et sce_sys restent libres. Lecture/seek/stat pris en charge ; listes de répertoires et autres appels refusent les chemins archivés. Archive endommagée arrêtée à l’accès ; pas v0.1.2.",
   "es": "Tras v0.1.2, main admite app0.zar de solo lectura junto a app0/, raíz app0. Archivos sueltos prevalecen; programa, sce_module y sce_sys quedan sueltos. Lectura/seek/stat admitidos; listar directorios y otras llamadas rechazan rutas archivadas. Archivo dañado falla al acceder; no es función v0.1.2."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["downloads"].push({
 "id": "app0-archive",
 "title": {
  "en": "Optional app0 archive on current main",
  "zh": "当前main的可选app0压缩包",
  "ar": "أرشيف app0 اختياري على main",
  "pt": "Arquivo app0 opcional no main",
  "de": "Optionales app0-Archiv auf main",
  "fr": "Archive app0 optionnelle sur main",
  "es": "Archivo app0 opcional en main"
 },
 "body": [
  {
   "en": "After v0.1.2, main adds read-only app0.zar beside app0/, rooted at app0. Loose files win; keep the executable, sce_module and sce_sys loose. Reads/seeks/stat are supported, but directory listing and several other calls still refuse archive-only paths. A damaged archive stops on access. This is not a v0.1.2 feature or a reason to replace a working loose-file setup.",
   "zh": "v0.1.2之后main加入与app0/并列、根为app0的只读app0.zar。松散文件优先，程序、sce_module及sce_sys仍留在磁盘。支持读／定位／stat，目录枚举等调用仍拒绝仅压缩包路径；损坏包在访问时停止。这不是v0.1.2功能，也不必替换可用的松散文件配置。",
   "ar": "بعد v0.1.2 يضيف main أرشيف app0.zar للقراءة بجانب app0/ وبجذر app0. الملفات العادية أولاً؛ أبقِ البرنامج وsce_module وsce_sys خارج الأرشيف. قراءة/seek/stat مدعومة، سرد الأدلة ونداءات أخرى ترفض المسار المؤرشف. التالف يتوقف عند الوصول؛ ليس ميزة v0.1.2.",
   "pt": "Após v0.1.2, main aceita app0.zar só de leitura junto de app0/, com raiz app0. Ficheiros soltos prevalecem; programa, sce_module e sce_sys ficam soltos. Leitura/seek/stat suportados; listar diretórios e outras chamadas recusam caminhos só no arquivo. Arquivo danificado falha ao aceder; não é funcionalidade v0.1.2.",
   "de": "Nach v0.1.2 unterstützt main app0.zar schreibgeschützt neben app0/, mit Wurzel app0. Lose Dateien haben Vorrang; Programm, sce_module und sce_sys bleiben lose. Lesen/Seek/stat unterstützt; Verzeichnislisten und weitere Aufrufe verweigern Archivpfade. Beschädigung stoppt beim Zugriff; kein v0.1.2-Feature.",
   "fr": "Après v0.1.2, main accepte app0.zar en lecture seule à côté d’app0/, racine app0. Fichiers libres prioritaires ; programme, sce_module et sce_sys restent libres. Lecture/seek/stat pris en charge ; listes de répertoires et autres appels refusent les chemins archivés. Archive endommagée arrêtée à l’accès ; pas v0.1.2.",
   "es": "Tras v0.1.2, main admite app0.zar de solo lectura junto a app0/, raíz app0. Archivos sueltos prevalecen; programa, sce_module y sce_sys quedan sueltos. Lectura/seek/stat admitidos; listar directorios y otras llamadas rechazan rutas archivadas. Archivo dañado falla al acceder; no es función v0.1.2."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "app0-archive",
 "title": {
  "en": "Optional app0 archive on current main",
  "zh": "当前main的可选app0压缩包",
  "ar": "أرشيف app0 اختياري على main",
  "pt": "Arquivo app0 opcional no main",
  "de": "Optionales app0-Archiv auf main",
  "fr": "Archive app0 optionnelle sur main",
  "es": "Archivo app0 opcional en main"
 },
 "body": [
  {
   "en": "After v0.1.2, main adds read-only app0.zar beside app0/, rooted at app0. Loose files win; keep the executable, sce_module and sce_sys loose. Reads/seeks/stat are supported, but directory listing and several other calls still refuse archive-only paths. A damaged archive stops on access. This is not a v0.1.2 feature or a reason to replace a working loose-file setup.",
   "zh": "v0.1.2之后main加入与app0/并列、根为app0的只读app0.zar。松散文件优先，程序、sce_module及sce_sys仍留在磁盘。支持读／定位／stat，目录枚举等调用仍拒绝仅压缩包路径；损坏包在访问时停止。这不是v0.1.2功能，也不必替换可用的松散文件配置。",
   "ar": "بعد v0.1.2 يضيف main أرشيف app0.zar للقراءة بجانب app0/ وبجذر app0. الملفات العادية أولاً؛ أبقِ البرنامج وsce_module وsce_sys خارج الأرشيف. قراءة/seek/stat مدعومة، سرد الأدلة ونداءات أخرى ترفض المسار المؤرشف. التالف يتوقف عند الوصول؛ ليس ميزة v0.1.2.",
   "pt": "Após v0.1.2, main aceita app0.zar só de leitura junto de app0/, com raiz app0. Ficheiros soltos prevalecem; programa, sce_module e sce_sys ficam soltos. Leitura/seek/stat suportados; listar diretórios e outras chamadas recusam caminhos só no arquivo. Arquivo danificado falha ao aceder; não é funcionalidade v0.1.2.",
   "de": "Nach v0.1.2 unterstützt main app0.zar schreibgeschützt neben app0/, mit Wurzel app0. Lose Dateien haben Vorrang; Programm, sce_module und sce_sys bleiben lose. Lesen/Seek/stat unterstützt; Verzeichnislisten und weitere Aufrufe verweigern Archivpfade. Beschädigung stoppt beim Zugriff; kein v0.1.2-Feature.",
   "fr": "Après v0.1.2, main accepte app0.zar en lecture seule à côté d’app0/, racine app0. Fichiers libres prioritaires ; programme, sce_module et sce_sys restent libres. Lecture/seek/stat pris en charge ; listes de répertoires et autres appels refusent les chemins archivés. Archive endommagée arrêtée à l’accès ; pas v0.1.2.",
   "es": "Tras v0.1.2, main admite app0.zar de solo lectura junto a app0/, raíz app0. Archivos sueltos prevalecen; programa, sce_module y sce_sys quedan sueltos. Lectura/seek/stat admitidos; listar directorios y otras llamadas rechazan rutas archivadas. Archivo dañado falla al acceder; no es función v0.1.2."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  }
 ]
},{
 "id": "pipeline-journal",
 "title": {
  "en": "Warm pipeline replay has its own cache",
  "zh": "流水线预热有独立缓存",
  "ar": "إعادة pipelines بذاكرة خاصة",
  "pt": "Replay de pipelines com cache própria",
  "de": "Pipeline-Replay mit eigenem Cache",
  "fr": "Relecture pipelines avec cache propre",
  "es": "Reproducción pipelines con caché propia"
 },
 "body": [
  {
   "en": "Current main journals exact graphics/compute pipelines in pipelines.journal, then replays them in background on the next run. GPU/driver or format changes reset it; deleting it loses that head start, not game saves. APS5_NO_PIPELINE_JOURNAL=1 disables it. APS5_PIPELINE_JOURNAL_THREADS defaults to half the CPU threads; 0 records without replay. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES and APS5_PIPELINE_JOURNAL_MAX_MIB default to 1024. Warm-cache differences are not a measured universal FPS gain.",
   "zh": "当前main将精确图形／计算流水线写入pipelines.journal，下次后台重放。GPU／驱动或格式变更会重置，删除只失去预热，不影响游戏存档。APS5_NO_PIPELINE_JOURNAL=1禁用；APS5_PIPELINE_JOURNAL_THREADS默认半数CPU线程，0仅记录不重放。APS5_PIPELINE_JOURNAL_ENTRIES、APS5_PIPELINE_STORE_ENTRIES、APS5_PIPELINE_JOURNAL_MAX_MIB默认1024；缓存差异不等于普遍FPS增益。",
   "ar": "main يسجل pipelines.journal ويعيده بالخلفية لاحقاً. تغييرGPU/تعريف/صيغة يعيده؛ الحذف لا يمس الحفظ. APS5_NO_PIPELINE_JOURNAL=1 يعطله. APS5_PIPELINE_JOURNAL_THREADS نصف خيوطCPU،0 يسجل فقط. APS5_PIPELINE_JOURNAL_ENTRIES وAPS5_PIPELINE_STORE_ENTRIES وAPS5_PIPELINE_JOURNAL_MAX_MIB افتراضها1024. ليس مكسب FPS عاماً.",
   "pt": "Main regista pipelines.journal e repete em fundo no arranque seguinte. GPU/driver/formato reinicia; apagar não elimina saves. APS5_NO_PIPELINE_JOURNAL=1 desativa. APS5_PIPELINE_JOURNAL_THREADS usa metade dos threads;0 só regista. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES e APS5_PIPELINE_JOURNAL_MAX_MIB valem1024. Cache quente não prova ganho FPS geral.",
   "de": "main protokolliert pipelines.journal für Hintergrund-Replay beim nächsten Start. GPU/Treiber/Formatwechsel setzen zurück; Löschen berührt keine Spielstände. APS5_NO_PIPELINE_JOURNAL=1 deaktiviert. APS5_PIPELINE_JOURNAL_THREADS: halbe CPU-Threads,0 nur Aufzeichnen. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES und APS5_PIPELINE_JOURNAL_MAX_MIB:1024. Kein allgemeiner FPS-Nachweis.",
   "fr": "Main enregistre pipelines.journal puis relit en arrière-plan au prochain lancement. ChangementGPU/pilote/format réinitialise ; suppression sans perte des sauvegardes. APS5_NO_PIPELINE_JOURNAL=1 désactive. APS5_PIPELINE_JOURNAL_THREADS : moitié des threadsCPU,0 enregistre seulement. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES et APS5_PIPELINE_JOURNAL_MAX_MIB :1024. Aucun gain FPS universel prouvé.",
   "es": "Main registra pipelines.journal y reproduce en segundo plano al iniciar después. CambioGPU/driver/formato reinicia; borrar no afecta partidas. APS5_NO_PIPELINE_JOURNAL=1 desactiva. APS5_PIPELINE_JOURNAL_THREADS: mitad de hilosCPU,0 solo registra. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES y APS5_PIPELINE_JOURNAL_MAX_MIB:1024. No demuestra mejora FPS universal."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  }
 ]
},{
 "id": "submission-stall-diagnostics",
 "title": {
  "en": "Collect bounded stall evidence",
  "zh": "收集有界卡死证据",
  "ar": "تشخيص توقف محدود",
  "pt": "Diagnóstico limitado de bloqueios",
  "de": "Begrenzte Stall-Diagnose",
  "fr": "Diagnostic borné des blocages",
  "es": "Diagnóstico acotado de bloqueos"
 },
 "body": [
  {
   "en": "Current-main APS5_PM4_RING keeps16 submissions per queue by default, up to512 dwords each; 0 disables, maximum4096. APS5_STALL_WATCHDOG_SECS defaults to0; a positive value up to86400 dumps once per stalled wait and continues waiting. It is distinct from the Windows aborting hang dump. Invalid settings stop at submission. The new TRACING reference lists diagnostic switches; tracing changes timing, so retain an ordinary control run.",
   "zh": "当前main默认APS5_PM4_RING每队列留16次提交、各最多512个dword，0禁用、最多4096。APS5_STALL_WATCHDOG_SECS默认0，正值最多86400，每次停滞等待只输出一次并继续等待，区别于Windows中止型hang dump。无效设置在提交时停止。新TRACING列出诊断开关；追踪会影响计时，应保留普通对照。",
   "ar": "APS5_PM4_RING يحتفظ16submission/طابور،512dword؛0 تعطيل وحد4096. APS5_STALL_WATCHDOG_SECS افتراضي0، حتى86400 يطبع مرة لكل انتظار ثم يستمر، مختلف عن hang dump الموقف في Windows. الإعداد الخاطئ يتوقف. TRACING يشرح التشخيص؛ احتفظ بتجربة عادية لأن التتبع يغير الزمن.",
   "pt": "APS5_PM4_RING guarda16submissões/fila,512dwords;0 desativa, máximo4096. APS5_STALL_WATCHDOG_SECS predefinido0, até86400 imprime uma vez e continua à espera, diferente do hang dump Windows que aborta. Valor inválido para. TRACING lista opções; mantenha controlo normal pois traçar altera tempos.",
   "de": "APS5_PM4_RING behält16Einreichungen/Queue,512Dwords;0 aus, maximal4096. APS5_STALL_WATCHDOG_SECS standard0, bis86400: einmal ausgeben und weiter warten, anders als abbrechender Windows-Hangdump. Ungültige Werte stoppen. TRACING erläutert Optionen; normale Kontrolle behalten, Tracing verändert Timing.",
   "fr": "APS5_PM4_RING garde16soumissions/file,512dwords ;0 désactive, maximum4096. APS5_STALL_WATCHDOG_SECS défaut0, jusqu’à86400 : affiche une fois et continue d’attendre, distinct du hang dump Windows qui termine. Valeurs invalides arrêtent. TRACING détaille options ; gardez contrôle normal, traces modifient temps.",
   "es": "APS5_PM4_RING guarda16envíos/cola,512dwords;0 desactiva, máximo4096. APS5_STALL_WATCHDOG_SECS defecto0, hasta86400: muestra una vez y sigue esperando, distinto del hang dump Windows que aborta. Valores inválidos paran. TRACING detalla opciones; conserva control normal, trazas cambian tiempos."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  },
  {
   "label": "TRACING",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/dev/TRACING.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "app0-archive",
 "title": {
  "en": "Optional app0 archive on current main",
  "zh": "当前main的可选app0压缩包",
  "ar": "أرشيف app0 اختياري على main",
  "pt": "Arquivo app0 opcional no main",
  "de": "Optionales app0-Archiv auf main",
  "fr": "Archive app0 optionnelle sur main",
  "es": "Archivo app0 opcional en main"
 },
 "body": [
  {
   "en": "After v0.1.2, main adds read-only app0.zar beside app0/, rooted at app0. Loose files win; keep the executable, sce_module and sce_sys loose. Reads/seeks/stat are supported, but directory listing and several other calls still refuse archive-only paths. A damaged archive stops on access. This is not a v0.1.2 feature or a reason to replace a working loose-file setup.",
   "zh": "v0.1.2之后main加入与app0/并列、根为app0的只读app0.zar。松散文件优先，程序、sce_module及sce_sys仍留在磁盘。支持读／定位／stat，目录枚举等调用仍拒绝仅压缩包路径；损坏包在访问时停止。这不是v0.1.2功能，也不必替换可用的松散文件配置。",
   "ar": "بعد v0.1.2 يضيف main أرشيف app0.zar للقراءة بجانب app0/ وبجذر app0. الملفات العادية أولاً؛ أبقِ البرنامج وsce_module وsce_sys خارج الأرشيف. قراءة/seek/stat مدعومة، سرد الأدلة ونداءات أخرى ترفض المسار المؤرشف. التالف يتوقف عند الوصول؛ ليس ميزة v0.1.2.",
   "pt": "Após v0.1.2, main aceita app0.zar só de leitura junto de app0/, com raiz app0. Ficheiros soltos prevalecem; programa, sce_module e sce_sys ficam soltos. Leitura/seek/stat suportados; listar diretórios e outras chamadas recusam caminhos só no arquivo. Arquivo danificado falha ao aceder; não é funcionalidade v0.1.2.",
   "de": "Nach v0.1.2 unterstützt main app0.zar schreibgeschützt neben app0/, mit Wurzel app0. Lose Dateien haben Vorrang; Programm, sce_module und sce_sys bleiben lose. Lesen/Seek/stat unterstützt; Verzeichnislisten und weitere Aufrufe verweigern Archivpfade. Beschädigung stoppt beim Zugriff; kein v0.1.2-Feature.",
   "fr": "Après v0.1.2, main accepte app0.zar en lecture seule à côté d’app0/, racine app0. Fichiers libres prioritaires ; programme, sce_module et sce_sys restent libres. Lecture/seek/stat pris en charge ; listes de répertoires et autres appels refusent les chemins archivés. Archive endommagée arrêtée à l’accès ; pas v0.1.2.",
   "es": "Tras v0.1.2, main admite app0.zar de solo lectura junto a app0/, raíz app0. Archivos sueltos prevalecen; programa, sce_module y sce_sys quedan sueltos. Lectura/seek/stat admitidos; listar directorios y otras llamadas rechazan rutas archivadas. Archivo dañado falla al acceder; no es función v0.1.2."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  }
 ]
},{
 "id": "pipeline-journal",
 "title": {
  "en": "Warm pipeline replay has its own cache",
  "zh": "流水线预热有独立缓存",
  "ar": "إعادة pipelines بذاكرة خاصة",
  "pt": "Replay de pipelines com cache própria",
  "de": "Pipeline-Replay mit eigenem Cache",
  "fr": "Relecture pipelines avec cache propre",
  "es": "Reproducción pipelines con caché propia"
 },
 "body": [
  {
   "en": "Current main journals exact graphics/compute pipelines in pipelines.journal, then replays them in background on the next run. GPU/driver or format changes reset it; deleting it loses that head start, not game saves. APS5_NO_PIPELINE_JOURNAL=1 disables it. APS5_PIPELINE_JOURNAL_THREADS defaults to half the CPU threads; 0 records without replay. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES and APS5_PIPELINE_JOURNAL_MAX_MIB default to 1024. Warm-cache differences are not a measured universal FPS gain.",
   "zh": "当前main将精确图形／计算流水线写入pipelines.journal，下次后台重放。GPU／驱动或格式变更会重置，删除只失去预热，不影响游戏存档。APS5_NO_PIPELINE_JOURNAL=1禁用；APS5_PIPELINE_JOURNAL_THREADS默认半数CPU线程，0仅记录不重放。APS5_PIPELINE_JOURNAL_ENTRIES、APS5_PIPELINE_STORE_ENTRIES、APS5_PIPELINE_JOURNAL_MAX_MIB默认1024；缓存差异不等于普遍FPS增益。",
   "ar": "main يسجل pipelines.journal ويعيده بالخلفية لاحقاً. تغييرGPU/تعريف/صيغة يعيده؛ الحذف لا يمس الحفظ. APS5_NO_PIPELINE_JOURNAL=1 يعطله. APS5_PIPELINE_JOURNAL_THREADS نصف خيوطCPU،0 يسجل فقط. APS5_PIPELINE_JOURNAL_ENTRIES وAPS5_PIPELINE_STORE_ENTRIES وAPS5_PIPELINE_JOURNAL_MAX_MIB افتراضها1024. ليس مكسب FPS عاماً.",
   "pt": "Main regista pipelines.journal e repete em fundo no arranque seguinte. GPU/driver/formato reinicia; apagar não elimina saves. APS5_NO_PIPELINE_JOURNAL=1 desativa. APS5_PIPELINE_JOURNAL_THREADS usa metade dos threads;0 só regista. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES e APS5_PIPELINE_JOURNAL_MAX_MIB valem1024. Cache quente não prova ganho FPS geral.",
   "de": "main protokolliert pipelines.journal für Hintergrund-Replay beim nächsten Start. GPU/Treiber/Formatwechsel setzen zurück; Löschen berührt keine Spielstände. APS5_NO_PIPELINE_JOURNAL=1 deaktiviert. APS5_PIPELINE_JOURNAL_THREADS: halbe CPU-Threads,0 nur Aufzeichnen. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES und APS5_PIPELINE_JOURNAL_MAX_MIB:1024. Kein allgemeiner FPS-Nachweis.",
   "fr": "Main enregistre pipelines.journal puis relit en arrière-plan au prochain lancement. ChangementGPU/pilote/format réinitialise ; suppression sans perte des sauvegardes. APS5_NO_PIPELINE_JOURNAL=1 désactive. APS5_PIPELINE_JOURNAL_THREADS : moitié des threadsCPU,0 enregistre seulement. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES et APS5_PIPELINE_JOURNAL_MAX_MIB :1024. Aucun gain FPS universel prouvé.",
   "es": "Main registra pipelines.journal y reproduce en segundo plano al iniciar después. CambioGPU/driver/formato reinicia; borrar no afecta partidas. APS5_NO_PIPELINE_JOURNAL=1 desactiva. APS5_PIPELINE_JOURNAL_THREADS: mitad de hilosCPU,0 solo registra. APS5_PIPELINE_JOURNAL_ENTRIES, APS5_PIPELINE_STORE_ENTRIES y APS5_PIPELINE_JOURNAL_MAX_MIB:1024. No demuestra mejora FPS universal."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  }
 ]
},{
 "id": "submission-stall-diagnostics",
 "title": {
  "en": "Collect bounded stall evidence",
  "zh": "收集有界卡死证据",
  "ar": "تشخيص توقف محدود",
  "pt": "Diagnóstico limitado de bloqueios",
  "de": "Begrenzte Stall-Diagnose",
  "fr": "Diagnostic borné des blocages",
  "es": "Diagnóstico acotado de bloqueos"
 },
 "body": [
  {
   "en": "Current-main APS5_PM4_RING keeps16 submissions per queue by default, up to512 dwords each; 0 disables, maximum4096. APS5_STALL_WATCHDOG_SECS defaults to0; a positive value up to86400 dumps once per stalled wait and continues waiting. It is distinct from the Windows aborting hang dump. Invalid settings stop at submission. The new TRACING reference lists diagnostic switches; tracing changes timing, so retain an ordinary control run.",
   "zh": "当前main默认APS5_PM4_RING每队列留16次提交、各最多512个dword，0禁用、最多4096。APS5_STALL_WATCHDOG_SECS默认0，正值最多86400，每次停滞等待只输出一次并继续等待，区别于Windows中止型hang dump。无效设置在提交时停止。新TRACING列出诊断开关；追踪会影响计时，应保留普通对照。",
   "ar": "APS5_PM4_RING يحتفظ16submission/طابور،512dword؛0 تعطيل وحد4096. APS5_STALL_WATCHDOG_SECS افتراضي0، حتى86400 يطبع مرة لكل انتظار ثم يستمر، مختلف عن hang dump الموقف في Windows. الإعداد الخاطئ يتوقف. TRACING يشرح التشخيص؛ احتفظ بتجربة عادية لأن التتبع يغير الزمن.",
   "pt": "APS5_PM4_RING guarda16submissões/fila,512dwords;0 desativa, máximo4096. APS5_STALL_WATCHDOG_SECS predefinido0, até86400 imprime uma vez e continua à espera, diferente do hang dump Windows que aborta. Valor inválido para. TRACING lista opções; mantenha controlo normal pois traçar altera tempos.",
   "de": "APS5_PM4_RING behält16Einreichungen/Queue,512Dwords;0 aus, maximal4096. APS5_STALL_WATCHDOG_SECS standard0, bis86400: einmal ausgeben und weiter warten, anders als abbrechender Windows-Hangdump. Ungültige Werte stoppen. TRACING erläutert Optionen; normale Kontrolle behalten, Tracing verändert Timing.",
   "fr": "APS5_PM4_RING garde16soumissions/file,512dwords ;0 désactive, maximum4096. APS5_STALL_WATCHDOG_SECS défaut0, jusqu’à86400 : affiche une fois et continue d’attendre, distinct du hang dump Windows qui termine. Valeurs invalides arrêtent. TRACING détaille options ; gardez contrôle normal, traces modifient temps.",
   "es": "APS5_PM4_RING guarda16envíos/cola,512dwords;0 desactiva, máximo4096. APS5_STALL_WATCHDOG_SECS defecto0, hasta86400: muestra una vez y sigue esperando, distinto del hang dump Windows que aborta. Valores inválidos paran. TRACING detalla opciones; conserva control normal, trazas cambian tiempos."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/user/USAGE.md"
  },
  {
   "label": "TRACING",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/dev/TRACING.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "lazy-preparation",
 "title": {
  "en": "Lazy preparation remains opt-in",
  "zh": "延迟准备仍需显式启用",
  "ar": "تحضير lazy اختياري",
  "pt": "Preparação lazy opcional",
  "de": "Lazy-Vorbereitung bleibt optional",
  "fr": "Préparation lazy optionnelle",
  "es": "Preparación lazy opcional"
 },
 "body": [
  {
   "en": "Main APS5_LAZY_SHADER_PREPARE=1 still validates and decodes shaders at registration, but defers preparation until use; explicit ABI preparation remains. Default off. This moves work and can cause first-use stalls; one memory-constrained title reaching an intro is not a universal RAM minimum or gameplay fix. Relinker-only --macos output is x86-64 Mach-O; released runtime libraries remain Windows/Linux.",
   "zh": "main的APS5_LAZY_SHADER_PREPARE=1仍在注册时验证／解码，延后准备到使用时，显式ABI准备仍执行，默认关闭。它会转移工作、可能首次使用卡顿；单个内存受限游戏到片头不能推导通用内存要求或游戏修复。relinker-only的--macos输出x86-64 Mach-O，发行运行时库仍为Windows/Linux。",
   "ar": "APS5_LAZY_SHADER_PREPARE=1 يؤجل التحضير لا التحقق/فك الترميز؛ ABI الصريح يبقى، والافتراضي مغلق. قد يؤخر أول استخدام؛ مقدمة لعبة لا تثبت RAM دنيا أو إصلاحاً عاماً. --macos relinker-only ينتج x86-64 Mach-O؛ مكتبات الإصدار Windows/Linux.",
   "pt": "APS5_LAZY_SHADER_PREPARE=1 adia preparação, não validação/descodificação; ABI explícita mantém-se, predefinido desligado. Pode pausar no primeiro uso; intro não define RAM mínima/fix geral. --macos relinker-only gera x86-64 Mach-O; bibliotecas lançadas Windows/Linux.",
   "de": "APS5_LAZY_SHADER_PREPARE=1 verschiebt Vorbereitung, nicht Validierung/Dekodierung; explizites ABI bleibt, standardmäßig aus. Erstnutzung kann stocken; Intro belegt keine RAM-Mindestwerte/allgemeinen Fix. --macos relinker-only erzeugt x86-64 Mach-O; Releasebibliotheken Windows/Linux.",
   "fr": "APS5_LAZY_SHADER_PREPARE=1 diffère préparation, pas validation/décodage ; ABI explicite conservée, défaut désactivé. Premier usage peut bloquer ; intro ne définit pas RAM minimale/fix général. --macos relinker-only produit x86-64 Mach-O ; bibliothèques publiées Windows/Linux.",
   "es": "APS5_LAZY_SHADER_PREPARE=1 aplaza preparación, no validación/decodificación; ABI explícita permanece, defecto apagado. Primer uso puede pausar; intro no define RAM mínima/arreglo general. --macos relinker-only genera x86-64 Mach-O; bibliotecas publicadas Windows/Linux."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/b260d8d792c81a21a638340979ae2f98243547d5/docs/dev/ARCHITECTURE.md"
  }
 ]
});

guideSupplements["start"].push({
 "id": "playgo-metadata-policy",
 "title": {
  "en": "Choose PlayGo answers by title",
  "zh": "按游戏选择PlayGo回答",
  "ar": "إجابات PlayGo حسب اللعبة",
  "pt": "Respostas PlayGo por jogo",
  "de": "PlayGo-Antworten je Spiel",
  "fr": "Réponses PlayGo par jeu",
  "es": "Respuestas PlayGo por juego"
 },
 "body": [
  {
   "en": "After v0.1.2, merged #6236 adds APS5_PLAYGO_UNLISTED_CHUNKS for dumps without playgo-chunk.dat and playgo-scenario.json. Unset still stops on unknown nonzero IDs. installed helps High on Life save loading; absent ends the Sifu and Demon Slayer searches. installed can make Demon Slayer allocate without end. Metadata-bearing dumps are unaffected. These are emulator observations, not console validation; preserve the exact tested build.",
   "zh": "v0.1.2之后合入的#6236为缺playgo-chunk.dat及playgo-scenario.json的dump增加APS5_PLAYGO_UNLISTED_CHUNKS；未设仍在未知非零ID停止。installed有助High on Life读档，absent让Sifu／鬼灭结束搜索，鬼灭用installed可能无限分配。有元数据的dump不受影响。这些是模拟运行观察，未经主机验证，需保留实测构建。",
   "ar": "بعدv0.1.2 يضيف#6236 APS5_PLAYGO_UNLISTED_CHUNKS للنسخ بلا الملفين. الافتراضي يوقف ID غير معروف؛ installed يساعد حفظ High on Life، absent ينهي بحث Sifu/Demon Slayer. installed قد يخصص بلا نهاية. النسخ بmetadata لا تتأثر؛ ملاحظات محاكاة لا تحقق كونسول.",
   "pt": "Após v0.1.2, #6236 integra APS5_PLAYGO_UNLISTED_CHUNKS para dumps sem os dois ficheiros PlayGo. Predefinição recusa IDs desconhecidos; installed ajuda saves High on Life, absent termina buscas Sifu/Demon Slayer. installed pode alocar indefinidamente neste último. Metadata presente não muda; observações do emulador, não da consola.",
   "de": "Nach v0.1.2 ergänzt #6236 APS5_PLAYGO_UNLISTED_CHUNKS bei fehlenden PlayGo-Dateien. Unset verweigert unbekannte IDs; installed hilft High-on-Life-Spielständen, absent beendet Sifu/Demon-Slayer-Suche. installed kann dort endlos allokieren. Mit Metadaten unverändert; Emulatorbeobachtungen ohne Konsolenprüfung.",
   "fr": "Après v0.1.2, #6236 ajoute APS5_PLAYGO_UNLISTED_CHUNKS sans les deux fichiers PlayGo. Défaut refuse IDs inconnus ; installed aide les sauvegardes High on Life, absent termine les recherches Sifu/Demon Slayer. installed peut surallouer ce dernier. Métadonnées présentes inchangées ; observations émulateur, pas console.",
   "es": "Tras v0.1.2, #6236 añade APS5_PLAYGO_UNLISTED_CHUNKS sin ambos archivos PlayGo. Defecto rechaza IDs desconocidos; installed ayuda saves High on Life, absent termina búsquedas Sifu/Demon Slayer. installed puede asignar sin fin en este último. Con metadata no cambia; observación de emulador, no consola."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["downloads"].push({
 "id": "playgo-metadata-policy",
 "title": {
  "en": "Choose PlayGo answers by title",
  "zh": "按游戏选择PlayGo回答",
  "ar": "إجابات PlayGo حسب اللعبة",
  "pt": "Respostas PlayGo por jogo",
  "de": "PlayGo-Antworten je Spiel",
  "fr": "Réponses PlayGo par jeu",
  "es": "Respuestas PlayGo por juego"
 },
 "body": [
  {
   "en": "After v0.1.2, merged #6236 adds APS5_PLAYGO_UNLISTED_CHUNKS for dumps without playgo-chunk.dat and playgo-scenario.json. Unset still stops on unknown nonzero IDs. installed helps High on Life save loading; absent ends the Sifu and Demon Slayer searches. installed can make Demon Slayer allocate without end. Metadata-bearing dumps are unaffected. These are emulator observations, not console validation; preserve the exact tested build.",
   "zh": "v0.1.2之后合入的#6236为缺playgo-chunk.dat及playgo-scenario.json的dump增加APS5_PLAYGO_UNLISTED_CHUNKS；未设仍在未知非零ID停止。installed有助High on Life读档，absent让Sifu／鬼灭结束搜索，鬼灭用installed可能无限分配。有元数据的dump不受影响。这些是模拟运行观察，未经主机验证，需保留实测构建。",
   "ar": "بعدv0.1.2 يضيف#6236 APS5_PLAYGO_UNLISTED_CHUNKS للنسخ بلا الملفين. الافتراضي يوقف ID غير معروف؛ installed يساعد حفظ High on Life، absent ينهي بحث Sifu/Demon Slayer. installed قد يخصص بلا نهاية. النسخ بmetadata لا تتأثر؛ ملاحظات محاكاة لا تحقق كونسول.",
   "pt": "Após v0.1.2, #6236 integra APS5_PLAYGO_UNLISTED_CHUNKS para dumps sem os dois ficheiros PlayGo. Predefinição recusa IDs desconhecidos; installed ajuda saves High on Life, absent termina buscas Sifu/Demon Slayer. installed pode alocar indefinidamente neste último. Metadata presente não muda; observações do emulador, não da consola.",
   "de": "Nach v0.1.2 ergänzt #6236 APS5_PLAYGO_UNLISTED_CHUNKS bei fehlenden PlayGo-Dateien. Unset verweigert unbekannte IDs; installed hilft High-on-Life-Spielständen, absent beendet Sifu/Demon-Slayer-Suche. installed kann dort endlos allokieren. Mit Metadaten unverändert; Emulatorbeobachtungen ohne Konsolenprüfung.",
   "fr": "Après v0.1.2, #6236 ajoute APS5_PLAYGO_UNLISTED_CHUNKS sans les deux fichiers PlayGo. Défaut refuse IDs inconnus ; installed aide les sauvegardes High on Life, absent termine les recherches Sifu/Demon Slayer. installed peut surallouer ce dernier. Métadonnées présentes inchangées ; observations émulateur, pas console.",
   "es": "Tras v0.1.2, #6236 añade APS5_PLAYGO_UNLISTED_CHUNKS sin ambos archivos PlayGo. Defecto rechaza IDs desconocidos; installed ayuda saves High on Life, absent termina búsquedas Sifu/Demon Slayer. installed puede asignar sin fin en este último. Con metadata no cambia; observación de emulador, no consola."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "playgo-metadata-policy",
 "title": {
  "en": "Choose PlayGo answers by title",
  "zh": "按游戏选择PlayGo回答",
  "ar": "إجابات PlayGo حسب اللعبة",
  "pt": "Respostas PlayGo por jogo",
  "de": "PlayGo-Antworten je Spiel",
  "fr": "Réponses PlayGo par jeu",
  "es": "Respuestas PlayGo por juego"
 },
 "body": [
  {
   "en": "After v0.1.2, merged #6236 adds APS5_PLAYGO_UNLISTED_CHUNKS for dumps without playgo-chunk.dat and playgo-scenario.json. Unset still stops on unknown nonzero IDs. installed helps High on Life save loading; absent ends the Sifu and Demon Slayer searches. installed can make Demon Slayer allocate without end. Metadata-bearing dumps are unaffected. These are emulator observations, not console validation; preserve the exact tested build.",
   "zh": "v0.1.2之后合入的#6236为缺playgo-chunk.dat及playgo-scenario.json的dump增加APS5_PLAYGO_UNLISTED_CHUNKS；未设仍在未知非零ID停止。installed有助High on Life读档，absent让Sifu／鬼灭结束搜索，鬼灭用installed可能无限分配。有元数据的dump不受影响。这些是模拟运行观察，未经主机验证，需保留实测构建。",
   "ar": "بعدv0.1.2 يضيف#6236 APS5_PLAYGO_UNLISTED_CHUNKS للنسخ بلا الملفين. الافتراضي يوقف ID غير معروف؛ installed يساعد حفظ High on Life، absent ينهي بحث Sifu/Demon Slayer. installed قد يخصص بلا نهاية. النسخ بmetadata لا تتأثر؛ ملاحظات محاكاة لا تحقق كونسول.",
   "pt": "Após v0.1.2, #6236 integra APS5_PLAYGO_UNLISTED_CHUNKS para dumps sem os dois ficheiros PlayGo. Predefinição recusa IDs desconhecidos; installed ajuda saves High on Life, absent termina buscas Sifu/Demon Slayer. installed pode alocar indefinidamente neste último. Metadata presente não muda; observações do emulador, não da consola.",
   "de": "Nach v0.1.2 ergänzt #6236 APS5_PLAYGO_UNLISTED_CHUNKS bei fehlenden PlayGo-Dateien. Unset verweigert unbekannte IDs; installed hilft High-on-Life-Spielständen, absent beendet Sifu/Demon-Slayer-Suche. installed kann dort endlos allokieren. Mit Metadaten unverändert; Emulatorbeobachtungen ohne Konsolenprüfung.",
   "fr": "Après v0.1.2, #6236 ajoute APS5_PLAYGO_UNLISTED_CHUNKS sans les deux fichiers PlayGo. Défaut refuse IDs inconnus ; installed aide les sauvegardes High on Life, absent termine les recherches Sifu/Demon Slayer. installed peut surallouer ce dernier. Métadonnées présentes inchangées ; observations émulateur, pas console.",
   "es": "Tras v0.1.2, #6236 añade APS5_PLAYGO_UNLISTED_CHUNKS sin ambos archivos PlayGo. Defecto rechaza IDs desconocidos; installed ayuda saves High on Life, absent termina búsquedas Sifu/Demon Slayer. installed puede asignar sin fin en este último. Con metadata no cambia; observación de emulador, no consola."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
},{
 "id": "cache-budgets",
 "title": {
  "en": "Larger caches can reduce performance",
  "zh": "更大缓存可能降低性能",
  "ar": "الذاكرة الأكبر قد تبطئ",
  "pt": "Caches maiores podem abrandar",
  "de": "Größere Caches können bremsen",
  "fr": "Des caches plus grands peuvent ralentir",
  "es": "Cachés mayores pueden ralentizar"
 },
 "body": [
  {
   "en": "Current main dynamically budgets sampled textures and storage images against available device memory. Leave APS5_TEXTURE_CACHE_MIB unset unless a same-card measurement supports overriding it: oversized caches can spill to host memory and slow PCIe reads. Shader-cache current-version entries have no size cap and are not aged out; monitor free disk space. Large host-import budgets and experimental settle-floor patches are also hardware/title-specific, not universal FPS settings.",
   "zh": "当前main按可用显存动态调整采样纹理及存储图像预算。除非同卡测量支持覆盖，否则保持APS5_TEXTURE_CACHE_MIB未设；过大缓存可溢出到主机内存，使PCIe读取变慢。当前版本着色器缓存无大小上限，也不会因陈旧清理，应关注磁盘余量。大导入预算及实验settle下限同样依赖硬件／游戏，不是通用提速配置。",
   "ar": "main يضبط ميزانيات الصور حسب ذاكرةGPU. اترك APS5_TEXTURE_CACHE_MIB دون ضبط إلا بقياس على نفس البطاقة؛ الكبير قد ينتقل لذاكرة المضيف ويبطئ PCIe. cache shaders الحالي بلا حد أو حذف بالعمر، راقب القرص. import/floor تجريبي ليس ضبط FPS عاماً.",
   "pt": "Main ajusta texturas/imagens à memória GPU. Deixe APS5_TEXTURE_CACHE_MIB por definir sem medição na mesma placa; exceder pode usar RAM e atrasar PCIe. Shader cache da versão atual não tem limite nem expira; vigie disco. Budgets import/floor experimentais dependem do jogo/placa.",
   "de": "Main budgetiert Texturen/Storageimages nach verfügbarem VRAM. APS5_TEXTURE_CACHE_MIB ohne Vergleichsmessung ungesetzt lassen; Übergröße kann RAM/PCIe nutzen und bremsen. Aktuelle Shadercache-Version ohne Größenlimit/Alterslöschung; freien Speicher prüfen. Importbudgets/experimentelle Floors sind spiel-/hardwareabhängig.",
   "fr": "Main ajuste textures/images au budget GPU. Laissez APS5_TEXTURE_CACHE_MIB absent sans mesure sur la même carte ; débordement RAM/PCIe peut ralentir. Cache shaders courant sans limite ni expiration ; surveillez le disque. Budgets import/seuils expérimentaux dépendent du jeu et matériel.",
   "es": "Main ajusta texturas/imágenes al presupuesto GPU. Deja APS5_TEXTURE_CACHE_MIB sin definir sin medir en la misma tarjeta; desbordar a RAM/PCIe puede ralentizar. Caché shader actual sin límite ni caducidad; vigila disco. Budgets import/umbrales experimentales dependen de juego/hardware."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
},{
 "id": "touch-and-audit",
 "title": {
  "en": "Touchpad input and dependency diagnosis",
  "zh": "触控板输入与依赖诊断",
  "ar": "إدخال اللمس وتشخيص الاعتمادات",
  "pt": "Touchpad e diagnóstico de dependências",
  "de": "Touchpad und Abhängigkeitsdiagnose",
  "fr": "Touchpad et diagnostic des dépendances",
  "es": "Touchpad y diagnóstico de dependencias"
 },
 "body": [
  {
   "en": "Current main pad_input.py accepts touch-left/touch-right. Default keyboard touch halves are Backspace/Tab; L2 is now bound to R/mouse X1. Import audit now follows host-library dependencies transitively and accepts literal ELF symbol names before hashed NIDs. A passing audit proves dependency discovery, not correct API behavior or gameplay. Profiling and trace buffers alter timing/memory; retain ordinary control runs.",
   "zh": "当前main的pad_input.py支持touch-left／touch-right；默认键盘两半为Backspace／Tab，L2现绑定R／鼠标X1。导入审计会递归追踪主机库依赖，先匹配ELF符号原名再匹配NID。审计通过只证明依赖发现，不证明API行为正确或游戏可玩。性能分析／追踪缓存会影响时间和内存，应保留普通运行对照。",
   "ar": "pad_input.py يدعم touch-left/right؛ Backspace/Tab افتراضياً، L2 الآنR/X1. audit يتبع اعتماد المكتبات ويطابق ELF الحرفي قبل NID؛ النجاح ليس صحة API أو لعباً. trace يغير الزمن/الذاكرة، أبق تجارب عادية.",
   "pt": "pad_input.py aceita touch-left/right; Backspace/Tab, L2 agoraR/X1. Audit segue dependências e símbolos ELF antes de NID; passar não prova API/jogo. Perfil/trace altera tempo/memória; mantenha controlo normal.",
   "de": "pad_input.py unterstützt touch-left/right; Backspace/Tab, L2 jetztR/X1. Audit verfolgt Bibliotheken und prüft ELF-Namen vor NIDs; Erfolg belegt keine API-/Spielkorrektheit. Profiling/Tracing verändert Zeit/Speicher; normale Kontrolle behalten.",
   "fr": "pad_input.py accepte touch-left/right ; Backspace/Tab, L2 maintenantR/X1. Audit suit dépendances et noms ELF avant NID ; succès ne prouve pas API/jeu. Profilage/traces changent temps/mémoire ; gardez contrôle normal.",
   "es": "pad_input.py acepta touch-left/right; Backspace/Tab, L2 ahoraR/X1. Audit sigue dependencias y nombres ELF antes de NID; pasar no prueba API/juego. Perfil/trazas cambian tiempo/memoria; conserva control normal."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "playgo-metadata-policy",
 "title": {
  "en": "Choose PlayGo answers by title",
  "zh": "按游戏选择PlayGo回答",
  "ar": "إجابات PlayGo حسب اللعبة",
  "pt": "Respostas PlayGo por jogo",
  "de": "PlayGo-Antworten je Spiel",
  "fr": "Réponses PlayGo par jeu",
  "es": "Respuestas PlayGo por juego"
 },
 "body": [
  {
   "en": "After v0.1.2, merged #6236 adds APS5_PLAYGO_UNLISTED_CHUNKS for dumps without playgo-chunk.dat and playgo-scenario.json. Unset still stops on unknown nonzero IDs. installed helps High on Life save loading; absent ends the Sifu and Demon Slayer searches. installed can make Demon Slayer allocate without end. Metadata-bearing dumps are unaffected. These are emulator observations, not console validation; preserve the exact tested build.",
   "zh": "v0.1.2之后合入的#6236为缺playgo-chunk.dat及playgo-scenario.json的dump增加APS5_PLAYGO_UNLISTED_CHUNKS；未设仍在未知非零ID停止。installed有助High on Life读档，absent让Sifu／鬼灭结束搜索，鬼灭用installed可能无限分配。有元数据的dump不受影响。这些是模拟运行观察，未经主机验证，需保留实测构建。",
   "ar": "بعدv0.1.2 يضيف#6236 APS5_PLAYGO_UNLISTED_CHUNKS للنسخ بلا الملفين. الافتراضي يوقف ID غير معروف؛ installed يساعد حفظ High on Life، absent ينهي بحث Sifu/Demon Slayer. installed قد يخصص بلا نهاية. النسخ بmetadata لا تتأثر؛ ملاحظات محاكاة لا تحقق كونسول.",
   "pt": "Após v0.1.2, #6236 integra APS5_PLAYGO_UNLISTED_CHUNKS para dumps sem os dois ficheiros PlayGo. Predefinição recusa IDs desconhecidos; installed ajuda saves High on Life, absent termina buscas Sifu/Demon Slayer. installed pode alocar indefinidamente neste último. Metadata presente não muda; observações do emulador, não da consola.",
   "de": "Nach v0.1.2 ergänzt #6236 APS5_PLAYGO_UNLISTED_CHUNKS bei fehlenden PlayGo-Dateien. Unset verweigert unbekannte IDs; installed hilft High-on-Life-Spielständen, absent beendet Sifu/Demon-Slayer-Suche. installed kann dort endlos allokieren. Mit Metadaten unverändert; Emulatorbeobachtungen ohne Konsolenprüfung.",
   "fr": "Après v0.1.2, #6236 ajoute APS5_PLAYGO_UNLISTED_CHUNKS sans les deux fichiers PlayGo. Défaut refuse IDs inconnus ; installed aide les sauvegardes High on Life, absent termine les recherches Sifu/Demon Slayer. installed peut surallouer ce dernier. Métadonnées présentes inchangées ; observations émulateur, pas console.",
   "es": "Tras v0.1.2, #6236 añade APS5_PLAYGO_UNLISTED_CHUNKS sin ambos archivos PlayGo. Defecto rechaza IDs desconocidos; installed ayuda saves High on Life, absent termina búsquedas Sifu/Demon Slayer. installed puede asignar sin fin en este último. Con metadata no cambia; observación de emulador, no consola."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
},{
 "id": "cache-budgets",
 "title": {
  "en": "Larger caches can reduce performance",
  "zh": "更大缓存可能降低性能",
  "ar": "الذاكرة الأكبر قد تبطئ",
  "pt": "Caches maiores podem abrandar",
  "de": "Größere Caches können bremsen",
  "fr": "Des caches plus grands peuvent ralentir",
  "es": "Cachés mayores pueden ralentizar"
 },
 "body": [
  {
   "en": "Current main dynamically budgets sampled textures and storage images against available device memory. Leave APS5_TEXTURE_CACHE_MIB unset unless a same-card measurement supports overriding it: oversized caches can spill to host memory and slow PCIe reads. Shader-cache current-version entries have no size cap and are not aged out; monitor free disk space. Large host-import budgets and experimental settle-floor patches are also hardware/title-specific, not universal FPS settings.",
   "zh": "当前main按可用显存动态调整采样纹理及存储图像预算。除非同卡测量支持覆盖，否则保持APS5_TEXTURE_CACHE_MIB未设；过大缓存可溢出到主机内存，使PCIe读取变慢。当前版本着色器缓存无大小上限，也不会因陈旧清理，应关注磁盘余量。大导入预算及实验settle下限同样依赖硬件／游戏，不是通用提速配置。",
   "ar": "main يضبط ميزانيات الصور حسب ذاكرةGPU. اترك APS5_TEXTURE_CACHE_MIB دون ضبط إلا بقياس على نفس البطاقة؛ الكبير قد ينتقل لذاكرة المضيف ويبطئ PCIe. cache shaders الحالي بلا حد أو حذف بالعمر، راقب القرص. import/floor تجريبي ليس ضبط FPS عاماً.",
   "pt": "Main ajusta texturas/imagens à memória GPU. Deixe APS5_TEXTURE_CACHE_MIB por definir sem medição na mesma placa; exceder pode usar RAM e atrasar PCIe. Shader cache da versão atual não tem limite nem expira; vigie disco. Budgets import/floor experimentais dependem do jogo/placa.",
   "de": "Main budgetiert Texturen/Storageimages nach verfügbarem VRAM. APS5_TEXTURE_CACHE_MIB ohne Vergleichsmessung ungesetzt lassen; Übergröße kann RAM/PCIe nutzen und bremsen. Aktuelle Shadercache-Version ohne Größenlimit/Alterslöschung; freien Speicher prüfen. Importbudgets/experimentelle Floors sind spiel-/hardwareabhängig.",
   "fr": "Main ajuste textures/images au budget GPU. Laissez APS5_TEXTURE_CACHE_MIB absent sans mesure sur la même carte ; débordement RAM/PCIe peut ralentir. Cache shaders courant sans limite ni expiration ; surveillez le disque. Budgets import/seuils expérimentaux dépendent du jeu et matériel.",
   "es": "Main ajusta texturas/imágenes al presupuesto GPU. Deja APS5_TEXTURE_CACHE_MIB sin definir sin medir en la misma tarjeta; desbordar a RAM/PCIe puede ralentizar. Caché shader actual sin límite ni caducidad; vigila disco. Budgets import/umbrales experimentales dependen de juego/hardware."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
},{
 "id": "touch-and-audit",
 "title": {
  "en": "Touchpad input and dependency diagnosis",
  "zh": "触控板输入与依赖诊断",
  "ar": "إدخال اللمس وتشخيص الاعتمادات",
  "pt": "Touchpad e diagnóstico de dependências",
  "de": "Touchpad und Abhängigkeitsdiagnose",
  "fr": "Touchpad et diagnostic des dépendances",
  "es": "Touchpad y diagnóstico de dependencias"
 },
 "body": [
  {
   "en": "Current main pad_input.py accepts touch-left/touch-right. Default keyboard touch halves are Backspace/Tab; L2 is now bound to R/mouse X1. Import audit now follows host-library dependencies transitively and accepts literal ELF symbol names before hashed NIDs. A passing audit proves dependency discovery, not correct API behavior or gameplay. Profiling and trace buffers alter timing/memory; retain ordinary control runs.",
   "zh": "当前main的pad_input.py支持touch-left／touch-right；默认键盘两半为Backspace／Tab，L2现绑定R／鼠标X1。导入审计会递归追踪主机库依赖，先匹配ELF符号原名再匹配NID。审计通过只证明依赖发现，不证明API行为正确或游戏可玩。性能分析／追踪缓存会影响时间和内存，应保留普通运行对照。",
   "ar": "pad_input.py يدعم touch-left/right؛ Backspace/Tab افتراضياً، L2 الآنR/X1. audit يتبع اعتماد المكتبات ويطابق ELF الحرفي قبل NID؛ النجاح ليس صحة API أو لعباً. trace يغير الزمن/الذاكرة، أبق تجارب عادية.",
   "pt": "pad_input.py aceita touch-left/right; Backspace/Tab, L2 agoraR/X1. Audit segue dependências e símbolos ELF antes de NID; passar não prova API/jogo. Perfil/trace altera tempo/memória; mantenha controlo normal.",
   "de": "pad_input.py unterstützt touch-left/right; Backspace/Tab, L2 jetztR/X1. Audit verfolgt Bibliotheken und prüft ELF-Namen vor NIDs; Erfolg belegt keine API-/Spielkorrektheit. Profiling/Tracing verändert Zeit/Speicher; normale Kontrolle behalten.",
   "fr": "pad_input.py accepte touch-left/right ; Backspace/Tab, L2 maintenantR/X1. Audit suit dépendances et noms ELF avant NID ; succès ne prouve pas API/jeu. Profilage/traces changent temps/mémoire ; gardez contrôle normal.",
   "es": "pad_input.py acepta touch-left/right; Backspace/Tab, L2 ahoraR/X1. Audit sigue dependencias y nombres ELF antes de NID; pasar no prueba API/juego. Perfil/trazas cambian tiempo/memoria; conserva control normal."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "relinker-build-scope",
 "title": {
  "en": "Browser relinker build is not a browser runtime",
  "zh": "浏览器转换器构建不等于网页运行时",
  "ar": "بناء محول الويب ليس runtime",
  "pt": "Build do conversor não é execução web",
  "de": "Browser-Konverter ist keine Browser-Laufzeit",
  "fr": "Construire le convertisseur ne crée pas un runtime web",
  "es": "Compilar conversor no es runtime web"
 },
 "body": [
  {
   "en": "Current main adds ANYPS5_BUILD_WASM=ON for the relinker_web target, using Emscripten emcmake and BUILD_TESTING=OFF. It converts executables; it does not run PS5 games in a browser. Relinker regression tests require Python3.9+. Upstream also documents a Bitdefender-specific guest_raise_exception test hang; review its scoped diagnosis rather than disabling antivirus globally.",
   "zh": "当前main增加ANYPS5_BUILD_WASM=ON构建relinker_web，需Emscripten emcmake与BUILD_TESTING=OFF；它转换程序，并非浏览器运行PS5游戏。转换器回归测试需Python3.9+。上游还记录Bitdefender特定guest_raise_exception测试卡死，应查针对性诊断，不全局关闭杀毒。",
   "ar": "ANYPS5_BUILD_WASM=ON يبني relinker_web مع emcmake وBUILD_TESTING=OFF؛ تحويل لا تشغيل ألعاب بالمتصفح. اختبارات relinker تحتاج Python3.9+. تشخيص Bitdefender محدد لا تعطيل شامل للحماية.",
   "pt": "ANYPS5_BUILD_WASM=ON compila relinker_web com emcmake/BUILD_TESTING=OFF; converte, não executa jogos no navegador. Testes exigem Python3.9+. Diagnóstico Bitdefender específico, sem desativar proteção global.",
   "de": "ANYPS5_BUILD_WASM=ON baut relinker_web mit emcmake/BUILD_TESTING=OFF; Konvertierung, keine Browserspiele. Tests brauchen Python3.9+. Bitdefender-Hinweis betrifft bestimmten Test, kein pauschales Abschalten.",
   "fr": "ANYPS5_BUILD_WASM=ON construit relinker_web avec emcmake/BUILD_TESTING=OFF ; conversion, pas jeux dans le navigateur. Tests exigent Python3.9+. Diagnostic Bitdefender ciblé, pas désactivation globale.",
   "es": "ANYPS5_BUILD_WASM=ON compila relinker_web con emcmake/BUILD_TESTING=OFF; convierte, no ejecuta juegos web. Tests requieren Python3.9+. Diagnóstico Bitdefender específico, sin desactivar protección global."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/5229b5b829881ab3cef400aa351db197aec032c3/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["start"].push({
 "id": "explicit-module-root",
 "title": {
  "en": "Explicit module roots and backup files",
  "zh": "显式模块目录与备份文件",
  "ar": "جذور الوحدات والنسخ الاحتياطية",
  "pt": "Diretórios explícitos e backups",
  "de": "Explizite Modulordner und Backups",
  "fr": "Dossiers explicites et sauvegardes",
  "es": "Directorios explícitos y copias"
 },
 "body": [
  {
   "en": "Current main accepts a title with no standard module directory only when --module-dir is explicit; homebrew root libraries can use --module-dir . without empty placeholder folders. The CLI skips a backup ELF only beside another ELF with the same SONAME; a lone ELF backup beside a SELF still converts. Keep original relative module paths and matching runtime libraries.",
   "zh": "当前main仅在显式给出--module-dir时允许没有标准模块目录；根目录库可用--module-dir .，不用造空占位目录。CLI仅在旁边还有相同SONAME的ELF时跳过ELF备份；SELF旁唯一ELF备份仍转换。保留模块相对路径，并配套运行库。",
   "ar": "main يسمح بغياب مجلد معياري فقط مع--module-dir؛ مكتبات الجذر تستخدم--module-dir . بلا مجلدات فارغة. يتجاوز ELF احتياطياً بجوار ELF بنفسSONAME فقط؛ الوحيد بجوارSELF يحول. احفظ المسارات والمكتبات المطابقة.",
   "pt": "Main permite faltar diretório padrão só com--module-dir; libs na raiz usam--module-dir . sem pastas vazias. Backup ELF só é saltado junto de outroELF com mesmoSONAME; sozinho juntoSELF converte. Preserve caminhos/libs.",
   "de": "Main erlaubt fehlenden Standardordner nur mit--module-dir; Rootlibs nutzen--module-dir . ohne Leerordner. ELF-Backup nur neben anderemELF gleicherSONAME übersprungen; einzelnes nebenSELF wird konvertiert. Pfade/Runtime beibehalten.",
   "fr": "Main accepte absence de dossier standard seulement avec--module-dir ; libs racine utilisent--module-dir . sans dossiers vides. BackupELF ignoré seulement près d’un autreELF mêmeSONAME ; seul prèsSELF converti. Gardez chemins/libs associés.",
   "es": "Main permite faltar carpeta estándar solo con--module-dir; libs raíz usan--module-dir . sin carpetas vacías. BackupELF se omite solo junto a otroELF mismoSONAME; único juntoSELF se convierte. Conserva rutas/libs."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["downloads"].push({
 "id": "explicit-module-root",
 "title": {
  "en": "Explicit module roots and backup files",
  "zh": "显式模块目录与备份文件",
  "ar": "جذور الوحدات والنسخ الاحتياطية",
  "pt": "Diretórios explícitos e backups",
  "de": "Explizite Modulordner und Backups",
  "fr": "Dossiers explicites et sauvegardes",
  "es": "Directorios explícitos y copias"
 },
 "body": [
  {
   "en": "Current main accepts a title with no standard module directory only when --module-dir is explicit; homebrew root libraries can use --module-dir . without empty placeholder folders. The CLI skips a backup ELF only beside another ELF with the same SONAME; a lone ELF backup beside a SELF still converts. Keep original relative module paths and matching runtime libraries.",
   "zh": "当前main仅在显式给出--module-dir时允许没有标准模块目录；根目录库可用--module-dir .，不用造空占位目录。CLI仅在旁边还有相同SONAME的ELF时跳过ELF备份；SELF旁唯一ELF备份仍转换。保留模块相对路径，并配套运行库。",
   "ar": "main يسمح بغياب مجلد معياري فقط مع--module-dir؛ مكتبات الجذر تستخدم--module-dir . بلا مجلدات فارغة. يتجاوز ELF احتياطياً بجوار ELF بنفسSONAME فقط؛ الوحيد بجوارSELF يحول. احفظ المسارات والمكتبات المطابقة.",
   "pt": "Main permite faltar diretório padrão só com--module-dir; libs na raiz usam--module-dir . sem pastas vazias. Backup ELF só é saltado junto de outroELF com mesmoSONAME; sozinho juntoSELF converte. Preserve caminhos/libs.",
   "de": "Main erlaubt fehlenden Standardordner nur mit--module-dir; Rootlibs nutzen--module-dir . ohne Leerordner. ELF-Backup nur neben anderemELF gleicherSONAME übersprungen; einzelnes nebenSELF wird konvertiert. Pfade/Runtime beibehalten.",
   "fr": "Main accepte absence de dossier standard seulement avec--module-dir ; libs racine utilisent--module-dir . sans dossiers vides. BackupELF ignoré seulement près d’un autreELF mêmeSONAME ; seul prèsSELF converti. Gardez chemins/libs associés.",
   "es": "Main permite faltar carpeta estándar solo con--module-dir; libs raíz usan--module-dir . sin carpetas vacías. BackupELF se omite solo junto a otroELF mismoSONAME; único juntoSELF se convierte. Conserva rutas/libs."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "explicit-module-root",
 "title": {
  "en": "Explicit module roots and backup files",
  "zh": "显式模块目录与备份文件",
  "ar": "جذور الوحدات والنسخ الاحتياطية",
  "pt": "Diretórios explícitos e backups",
  "de": "Explizite Modulordner und Backups",
  "fr": "Dossiers explicites et sauvegardes",
  "es": "Directorios explícitos y copias"
 },
 "body": [
  {
   "en": "Current main accepts a title with no standard module directory only when --module-dir is explicit; homebrew root libraries can use --module-dir . without empty placeholder folders. The CLI skips a backup ELF only beside another ELF with the same SONAME; a lone ELF backup beside a SELF still converts. Keep original relative module paths and matching runtime libraries.",
   "zh": "当前main仅在显式给出--module-dir时允许没有标准模块目录；根目录库可用--module-dir .，不用造空占位目录。CLI仅在旁边还有相同SONAME的ELF时跳过ELF备份；SELF旁唯一ELF备份仍转换。保留模块相对路径，并配套运行库。",
   "ar": "main يسمح بغياب مجلد معياري فقط مع--module-dir؛ مكتبات الجذر تستخدم--module-dir . بلا مجلدات فارغة. يتجاوز ELF احتياطياً بجوار ELF بنفسSONAME فقط؛ الوحيد بجوارSELF يحول. احفظ المسارات والمكتبات المطابقة.",
   "pt": "Main permite faltar diretório padrão só com--module-dir; libs na raiz usam--module-dir . sem pastas vazias. Backup ELF só é saltado junto de outroELF com mesmoSONAME; sozinho juntoSELF converte. Preserve caminhos/libs.",
   "de": "Main erlaubt fehlenden Standardordner nur mit--module-dir; Rootlibs nutzen--module-dir . ohne Leerordner. ELF-Backup nur neben anderemELF gleicherSONAME übersprungen; einzelnes nebenSELF wird konvertiert. Pfade/Runtime beibehalten.",
   "fr": "Main accepte absence de dossier standard seulement avec--module-dir ; libs racine utilisent--module-dir . sans dossiers vides. BackupELF ignoré seulement près d’un autreELF mêmeSONAME ; seul prèsSELF converti. Gardez chemins/libs associés.",
   "es": "Main permite faltar carpeta estándar solo con--module-dir; libs raíz usan--module-dir . sin carpetas vacías. BackupELF se omite solo junto a otroELF mismoSONAME; único juntoSELF se convierte. Conserva rutas/libs."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
},{
 "id": "performance-overlay",
 "title": {
  "en": "Read the performance overlay in context",
  "zh": "按场景解读性能叠加层",
  "ar": "اقرأ طبقة الأداء في سياقها",
  "pt": "Leia a sobreposição no contexto",
  "de": "Leistungsanzeige im Kontext lesen",
  "fr": "Lire la surimpression en contexte",
  "es": "Lee la superposición en contexto"
 },
 "body": [
  {
   "en": "Post-v0.1.2 main adds F10 or ANYPS5_OVERLAY=1, with tl/tr/bl/br positions. FPS counts every present, including black/loading frames. PROFILED marks runs with GPU/draw profiling: compare against an ordinary control. GPU timings overlap and can exceed frame time; RAM excludes shared direct memory. The overlay adds a render pass, not an FPS boost. Invalid nonempty settings stop at first presentation.",
   "zh": "v0.1.2之后的main支持F10或ANYPS5_OVERLAY=1，位置tl／tr／bl／br。FPS统计所有呈现，包括黑屏／加载帧；PROFILED表示启用了GPU／draw分析，需保留普通运行对照。GPU计时可重叠并超过帧时间，RAM不含共享直接内存。叠加层增加渲染pass，并非提速开关；非空无效设置会在首次呈现停止。",
   "ar": "main بعدv0.1.2 يضيف F10 أوANYPS5_OVERLAY=1 ومواضعtl/tr/bl/br. FPS يشمل السواد/التحميل؛ PROFILED يحتاج ضبطاً عادياً. أزمنةGPU متداخلة وRAM لا يشمل direct المشترك. الطبقة تزيد pass لا سرعة؛ إعداد غير صالح يوقف العرض الأول.",
   "pt": "Main após v0.1.2 oferece F10/ANYPS5_OVERLAY=1 e posições tl/tr/bl/br. FPS inclui preto/carregamento; PROFILED exige controlo normal. TemposGPU sobrepõem-se, RAM exclui direct partilhada. Adiciona pass, não velocidade; opção inválida para na primeira apresentação.",
   "de": "Main nach v0.1.2 bietet F10/ANYPS5_OVERLAY=1 und tl/tr/bl/br. FPS zählt schwarze/Ladebilder; PROFILED mit normaler Kontrolle vergleichen. GPU-Zeiten überlappen, RAM ohne gemeinsamen Direktspeicher. Zusätzlicher Renderpass, kein Boost; ungültige Werte stoppen erste Präsentation.",
   "fr": "Main après v0.1.2 ajoute F10/ANYPS5_OVERLAY=1 et tl/tr/bl/br. FPS inclut noir/chargement ; PROFILED exige contrôle ordinaire. TempsGPU se chevauchent, RAM exclut mémoire directe partagée. Passe supplémentaire, pas gain ; réglage invalide arrête première présentation.",
   "es": "Main tras v0.1.2 añade F10/ANYPS5_OVERLAY=1 y tl/tr/bl/br. FPS incluye negro/carga; PROFILED requiere control normal. TiemposGPU solapados, RAM excluye memoria directa compartida. Añade pass, no velocidad; ajuste inválido para primera presentación."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
},{
 "id": "local-trophies",
 "title": {
  "en": "Local trophies have explicit limits",
  "zh": "本地奖杯的支持边界",
  "ar": "حدود الجوائز المحلية",
  "pt": "Limites dos troféus locais",
  "de": "Grenzen lokaler Trophäen",
  "fr": "Limites des trophées locaux",
  "es": "Límites de trofeos locales"
 },
 "body": [
  {
   "en": "Current main stores unlocks in _trophy/<userid>_<label>.txt and statistics in .stats.txt, using original trophy/UDS UCP data. Only latest uint32/uint64 statistics and simple event rules are supported. Missing data uses placeholders; icons still throw. No trophy notifications, callbacks or PSN sync. Corrupt saved records stop rather than silently reset; retain a backup when reporting a failure.",
   "zh": "当前main用_trophy/<userid>_<label>.txt存解锁，.stats.txt存统计，读取原始trophy／UDS UCP数据；仅支持最新uint32／uint64统计和简单事件规则。缺数据用占位，图标仍抛错；没有通知、回调或PSN同步。损坏记录会停止，不会静默重置，报告故障时保留备份。",
   "ar": "main يخزن الفتح في_trophy/<userid>_<label>.txt والإحصاءات.stats.txt من بيانات trophy/UDS الأصلية. أحدثuint32/64 وقواعد بسيطة فقط؛ بيانات ناقصة placeholders وأيقونات ترمي. لا إشعار/رد نداء/PSN؛ السجل التالف يوقف، احفظ نسخة.",
   "pt": "Main guarda desbloqueios em_trophy/<userid>_<label>.txt e estatísticas.stats.txt com dados trophy/UDS originais. Só último uint32/64 e regras simples; faltas usam placeholders, ícones falham. Sem notificações/callbacks/PSN; registos corrompidos param, preserve backup.",
   "de": "Main speichert Freischaltungen in_trophy/<userid>_<label>.txt und Statistik.stats.txt mit originalen Trophy/UDS-Daten. Nur neueste uint32/64 und einfache Regeln; Platzhalter bei fehlenden Daten, Icons werfen Fehler. Keine Benachrichtigungen/Callbacks/PSN; beschädigte Daten stoppen, Backup behalten.",
   "fr": "Main garde déblocages dans_trophy/<userid>_<label>.txt et statistiques.stats.txt avec données trophy/UDS originales. Derniers uint32/64 et règles simples seuls ; placeholders si données absentes, icônes échouent. Pas notifications/callbacks/PSN ; corruption arrête, gardez copie.",
   "es": "Main guarda desbloqueos en_trophy/<userid>_<label>.txt y estadísticas.stats.txt con datos trophy/UDS originales. Solo últimos uint32/64 y reglas simples; faltas usan placeholders, iconos fallan. Sin notificaciones/callbacks/PSN; corrupción detiene, conserva copia."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "explicit-module-root",
 "title": {
  "en": "Explicit module roots and backup files",
  "zh": "显式模块目录与备份文件",
  "ar": "جذور الوحدات والنسخ الاحتياطية",
  "pt": "Diretórios explícitos e backups",
  "de": "Explizite Modulordner und Backups",
  "fr": "Dossiers explicites et sauvegardes",
  "es": "Directorios explícitos y copias"
 },
 "body": [
  {
   "en": "Current main accepts a title with no standard module directory only when --module-dir is explicit; homebrew root libraries can use --module-dir . without empty placeholder folders. The CLI skips a backup ELF only beside another ELF with the same SONAME; a lone ELF backup beside a SELF still converts. Keep original relative module paths and matching runtime libraries.",
   "zh": "当前main仅在显式给出--module-dir时允许没有标准模块目录；根目录库可用--module-dir .，不用造空占位目录。CLI仅在旁边还有相同SONAME的ELF时跳过ELF备份；SELF旁唯一ELF备份仍转换。保留模块相对路径，并配套运行库。",
   "ar": "main يسمح بغياب مجلد معياري فقط مع--module-dir؛ مكتبات الجذر تستخدم--module-dir . بلا مجلدات فارغة. يتجاوز ELF احتياطياً بجوار ELF بنفسSONAME فقط؛ الوحيد بجوارSELF يحول. احفظ المسارات والمكتبات المطابقة.",
   "pt": "Main permite faltar diretório padrão só com--module-dir; libs na raiz usam--module-dir . sem pastas vazias. Backup ELF só é saltado junto de outroELF com mesmoSONAME; sozinho juntoSELF converte. Preserve caminhos/libs.",
   "de": "Main erlaubt fehlenden Standardordner nur mit--module-dir; Rootlibs nutzen--module-dir . ohne Leerordner. ELF-Backup nur neben anderemELF gleicherSONAME übersprungen; einzelnes nebenSELF wird konvertiert. Pfade/Runtime beibehalten.",
   "fr": "Main accepte absence de dossier standard seulement avec--module-dir ; libs racine utilisent--module-dir . sans dossiers vides. BackupELF ignoré seulement près d’un autreELF mêmeSONAME ; seul prèsSELF converti. Gardez chemins/libs associés.",
   "es": "Main permite faltar carpeta estándar solo con--module-dir; libs raíz usan--module-dir . sin carpetas vacías. BackupELF se omite solo junto a otroELF mismoSONAME; único juntoSELF se convierte. Conserva rutas/libs."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
},{
 "id": "performance-overlay",
 "title": {
  "en": "Read the performance overlay in context",
  "zh": "按场景解读性能叠加层",
  "ar": "اقرأ طبقة الأداء في سياقها",
  "pt": "Leia a sobreposição no contexto",
  "de": "Leistungsanzeige im Kontext lesen",
  "fr": "Lire la surimpression en contexte",
  "es": "Lee la superposición en contexto"
 },
 "body": [
  {
   "en": "Post-v0.1.2 main adds F10 or ANYPS5_OVERLAY=1, with tl/tr/bl/br positions. FPS counts every present, including black/loading frames. PROFILED marks runs with GPU/draw profiling: compare against an ordinary control. GPU timings overlap and can exceed frame time; RAM excludes shared direct memory. The overlay adds a render pass, not an FPS boost. Invalid nonempty settings stop at first presentation.",
   "zh": "v0.1.2之后的main支持F10或ANYPS5_OVERLAY=1，位置tl／tr／bl／br。FPS统计所有呈现，包括黑屏／加载帧；PROFILED表示启用了GPU／draw分析，需保留普通运行对照。GPU计时可重叠并超过帧时间，RAM不含共享直接内存。叠加层增加渲染pass，并非提速开关；非空无效设置会在首次呈现停止。",
   "ar": "main بعدv0.1.2 يضيف F10 أوANYPS5_OVERLAY=1 ومواضعtl/tr/bl/br. FPS يشمل السواد/التحميل؛ PROFILED يحتاج ضبطاً عادياً. أزمنةGPU متداخلة وRAM لا يشمل direct المشترك. الطبقة تزيد pass لا سرعة؛ إعداد غير صالح يوقف العرض الأول.",
   "pt": "Main após v0.1.2 oferece F10/ANYPS5_OVERLAY=1 e posições tl/tr/bl/br. FPS inclui preto/carregamento; PROFILED exige controlo normal. TemposGPU sobrepõem-se, RAM exclui direct partilhada. Adiciona pass, não velocidade; opção inválida para na primeira apresentação.",
   "de": "Main nach v0.1.2 bietet F10/ANYPS5_OVERLAY=1 und tl/tr/bl/br. FPS zählt schwarze/Ladebilder; PROFILED mit normaler Kontrolle vergleichen. GPU-Zeiten überlappen, RAM ohne gemeinsamen Direktspeicher. Zusätzlicher Renderpass, kein Boost; ungültige Werte stoppen erste Präsentation.",
   "fr": "Main après v0.1.2 ajoute F10/ANYPS5_OVERLAY=1 et tl/tr/bl/br. FPS inclut noir/chargement ; PROFILED exige contrôle ordinaire. TempsGPU se chevauchent, RAM exclut mémoire directe partagée. Passe supplémentaire, pas gain ; réglage invalide arrête première présentation.",
   "es": "Main tras v0.1.2 añade F10/ANYPS5_OVERLAY=1 y tl/tr/bl/br. FPS incluye negro/carga; PROFILED requiere control normal. TiemposGPU solapados, RAM excluye memoria directa compartida. Añade pass, no velocidad; ajuste inválido para primera presentación."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
},{
 "id": "local-trophies",
 "title": {
  "en": "Local trophies have explicit limits",
  "zh": "本地奖杯的支持边界",
  "ar": "حدود الجوائز المحلية",
  "pt": "Limites dos troféus locais",
  "de": "Grenzen lokaler Trophäen",
  "fr": "Limites des trophées locaux",
  "es": "Límites de trofeos locales"
 },
 "body": [
  {
   "en": "Current main stores unlocks in _trophy/<userid>_<label>.txt and statistics in .stats.txt, using original trophy/UDS UCP data. Only latest uint32/uint64 statistics and simple event rules are supported. Missing data uses placeholders; icons still throw. No trophy notifications, callbacks or PSN sync. Corrupt saved records stop rather than silently reset; retain a backup when reporting a failure.",
   "zh": "当前main用_trophy/<userid>_<label>.txt存解锁，.stats.txt存统计，读取原始trophy／UDS UCP数据；仅支持最新uint32／uint64统计和简单事件规则。缺数据用占位，图标仍抛错；没有通知、回调或PSN同步。损坏记录会停止，不会静默重置，报告故障时保留备份。",
   "ar": "main يخزن الفتح في_trophy/<userid>_<label>.txt والإحصاءات.stats.txt من بيانات trophy/UDS الأصلية. أحدثuint32/64 وقواعد بسيطة فقط؛ بيانات ناقصة placeholders وأيقونات ترمي. لا إشعار/رد نداء/PSN؛ السجل التالف يوقف، احفظ نسخة.",
   "pt": "Main guarda desbloqueios em_trophy/<userid>_<label>.txt e estatísticas.stats.txt com dados trophy/UDS originais. Só último uint32/64 e regras simples; faltas usam placeholders, ícones falham. Sem notificações/callbacks/PSN; registos corrompidos param, preserve backup.",
   "de": "Main speichert Freischaltungen in_trophy/<userid>_<label>.txt und Statistik.stats.txt mit originalen Trophy/UDS-Daten. Nur neueste uint32/64 und einfache Regeln; Platzhalter bei fehlenden Daten, Icons werfen Fehler. Keine Benachrichtigungen/Callbacks/PSN; beschädigte Daten stoppen, Backup behalten.",
   "fr": "Main garde déblocages dans_trophy/<userid>_<label>.txt et statistiques.stats.txt avec données trophy/UDS originales. Derniers uint32/64 et règles simples seuls ; placeholders si données absentes, icônes échouent. Pas notifications/callbacks/PSN ; corruption arrête, gardez copie.",
   "es": "Main guarda desbloqueos en_trophy/<userid>_<label>.txt y estadísticas.stats.txt con datos trophy/UDS originales. Solo últimos uint32/64 y reglas simples; faltas usan placeholders, iconos fallan. Sin notificaciones/callbacks/PSN; corrupción detiene, conserva copia."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "guest-time-scale",
 "title": {
  "en": "Guest time scaling changes timing, not throughput",
  "zh": "guest时间缩放改变计时，不提高吞吐",
  "ar": "تحجيم الوقت لا يزيد الإنتاجية",
  "pt": "Escala de tempo não aumenta desempenho",
  "de": "Zeitskalierung erhöht keinen Durchsatz",
  "fr": "Échelle temporelle sans gain de débit",
  "es": "Escala temporal sin aumentar rendimiento"
 },
 "body": [
  {
   "en": "APS5_TIME_SCALE accepts a positive factor, otherwise1. It scales guest processTime/TSC-derived clocks from the first observation and Windows monotonic time; Linux native clocks, hardware rdtsc, reported TSC frequency and host waits remain unscaled. It does not accelerate CPU/GPU work. Scripted input uses scaled durations/polling: at0.02, a one-second press lasts50 real seconds and reload polling can take five. Always disclose the factor in a run report.",
   "zh": "APS5_TIME_SCALE接受正因子，否则为1；从首次读取起缩放guest processTime／TSC派生时钟及Windows单调时钟。Linux原生时钟、硬件rdtsc、报告TSC频率及主机等待不缩放；不会加快CPU／GPU工作。脚本输入时长／轮询也缩放：0.02下1秒按键持续实际50秒，重载轮询可到5秒。报告必须写明因子。",
   "ar": "APS5_TIME_SCALE موجب وإلا1؛ يحجم processTime/ساعةTSC وضبطWindows، لا ساعةLinux الأصلية/rdtsc/التردد/انتظارالمضيف. لا يسرعCPU/GPU؛ إدخال0.02 يجعل ضغطة1ث=50ث حقيقية وpoll خمس ثوان. سجّل العامل.",
   "pt": "APS5_TIME_SCALE positivo, senão1; escala processTime/relógioTSC e monotónicoWindows, não Linux nativo/rdtsc/frequência/esperas. Não aceleraCPU/GPU. Input0,02: pressão1s dura50s reais, reload poll até5s. Declare fator.",
   "de": "APS5_TIME_SCALE positiv, sonst1; skaliert processTime/TSC-Uhr und Windows-monoton, nicht Linux-Uhr/rdtsc/Frequenz/Hostwarten. Kein CPU/GPU-Boost. Bei0,02 dauert1s-Skripttaste50s real, Reloadpoll bis5s. Faktor angeben.",
   "fr": "APS5_TIME_SCALE positif sinon1 ; scale processTime/horlogeTSC et monotoneWindows, pas Linux natif/rdtsc/fréquence/attentes. N’accélère pasCPU/GPU. À0,02, touche1s dure50s réelles, reload poll jusqu’à5s. Indiquez facteur.",
   "es": "APS5_TIME_SCALE positivo, si no1; escala processTime/relojTSC y monótonoWindows, no Linux nativo/rdtsc/frecuencia/esperas. No aceleraCPU/GPU. A0,02, tecla1s dura50s reales, reload poll hasta5s. Declara factor."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "sparse-import-capability",
 "title": {
  "en": "Check sparse import capability before changing kernel limits",
  "zh": "调内核上限前先检查稀疏导入能力",
  "ar": "افحص الاستيراد sparse قبل الحد",
  "pt": "Verifique import sparse antes dos limites",
  "de": "Sparse-Importfähigkeit vor Limits prüfen",
  "fr": "Vérifier import sparse avant limites",
  "es": "Comprueba import sparse antes de límites"
 },
 "body": [
  {
   "en": "The reviewed main documents a sparse fallback for imports above64 MiB when the device supports sparse blocks of at most64 KiB. This is a device capability condition, not proof that every oversized import succeeds. Permission, actual udmabuf limit and unsupported driver paths remain separate checks; preserve the failing build before comparing a newer main.",
   "zh": "本次复核main说明：超过64MiB的导入，在设备支持不大于64KiB稀疏块时可用稀疏回退。这是设备能力条件，不保证所有超大导入成功。权限、实际udmabuf上限及驱动路径仍需分别检查，比较新main前保留原失败构建。",
   "ar": "main يصف fallback sparse فوق64MiB إذا كانت الكتلة≤64KiB. شرط جهاز لا ضمان كل import؛ الصلاحية وحدudmabuf ومسار المشغل فحوص منفصلة، احفظ بناء الفشل.",
   "pt": "Main documenta fallback sparse acima64MiB com blocos≤64KiB; capacidade não garante todos os imports. Permissão/limiteudmabuf/driver separados, preserve build falhado.",
   "de": "Main dokumentiert Sparse-Fallback über64MiB bei Blöcken≤64KiB; Fähigkeit garantiert nicht jeden Import. Rechte/udmabuf-Limit/Treiber getrennt prüfen, Fehlerbuild behalten.",
   "fr": "Main documente fallback sparse au-delà64MiB si blocs≤64KiB ; capacité ne garantit pas chaque import. Droits/limiteudmabuf/pilote distincts, garder build fautif.",
   "es": "Main documenta fallback sparse sobre64MiB si bloques≤64KiB; capacidad no garantiza cada import. Permiso/límiteudmabuf/driver separados, guarda build fallido."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "windows-crash-stack-bytes",
 "title": {
  "en": "Bound Windows crash stack diagnostics",
  "zh": "限制Windows崩溃栈诊断范围",
  "ar": "حد تشخيص stack Windows",
  "pt": "Limite diagnóstico stack Windows",
  "de": "Windows-Stackdiagnose begrenzen",
  "fr": "Limiter diagnostic stack Windows",
  "es": "Limita diagnóstico stack Windows"
 },
 "body": [
  {
   "en": "APS5_CRASH_STACK_BYTES accepts decimal or hexadecimal up to1048576 bytes. It expands stack and pointed-object diagnostics, not a crash fix. Review logs for personal paths and captured memory before sharing, and keep build/driver details with the earliest exception.",
   "zh": "APS5_CRASH_STACK_BYTES接受十进制或十六进制，最多1048576字节；扩大栈及指向对象诊断，不是崩溃修复。分享前检查个人路径和捕获内存，连同构建／驱动记录最早异常。",
   "ar": "APS5_CRASH_STACK_BYTES عشري/hex حتى1048576؛ يوسع التشخيص لا يصلح العطل. راجع المسارات/الذاكرة قبل المشاركة وسجل البناء/المشغل وأول خطأ.",
   "pt": "APS5_CRASH_STACK_BYTES decimal/hex até1048576 amplia diagnóstico, não corrige crash. Reveja caminhos/memória antes de partilhar, registe build/driver/primeira exceção.",
   "de": "APS5_CRASH_STACK_BYTES dezimal/hex bis1048576 erweitert Diagnose, behebt keinen Absturz. Pfade/Speicher vor Teilen prüfen, Build/Treiber/erste Ausnahme festhalten.",
   "fr": "APS5_CRASH_STACK_BYTES décimal/hex jusqu’à1048576 étend diagnostic, pas correctif. Vérifiez chemins/mémoire avant partage, notez build/pilote/première exception.",
   "es": "APS5_CRASH_STACK_BYTES decimal/hex hasta1048576 amplía diagnóstico, no arregla fallo. Revisa rutas/memoria antes de compartir, registra build/driver/primera excepción."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/48d61f53b46f1d0726889e4dd39c5ef2b3eb30cd/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "mac-converter-runtime-boundary",
 "title": {
  "en": "Mac converter and experimental runtime have different scope",
  "zh": "Mac转换器与实验运行时范围不同",
  "ar": "نطاق محول Mac وruntime تجريبي مختلف",
  "pt": "Conversor Mac e runtime experimental distintos",
  "de": "Mac-Konverter und experimentelle Runtime getrennt",
  "fr": "Convertisseur Mac et runtime expérimental distincts",
  "es": "Conversor Mac y runtime experimental distintos"
 },
 "body": [
  {
   "en": "The converter can produce Mach-O/Rosetta output, but v0.1.3 ships no Mac runtime. Integration PR #7332 closed unmerged on 20 October. Its pinned Apple-silicon experiments remain branch results, including later local Lana tests; closure is not a merge or a released runtime. No general Mac requirements or nativeARM gameplay are established.",
   "zh": "转换器可生成Mach-O／Rosetta输出，但v0.1.3无Mac运行库。整合PR#7332在10月20日关闭且未合并；其固定Apple芯片实验及后续本地Lana测试仍是分支结果，关闭不等于合入或发行。未建立通用Mac要求或原生ARM游玩结论。",
   "ar": "المحول ينتجMach-O/Rosetta لكنv0.1.3 بلاruntimeMac. أغلق#7332 دون دمج20أكتوبر؛ تجاربApple وLana المحلية نتائج فرع، لا إصدار أوARM أصلي أو متطلبات عامة.",
   "pt": "Conversor geraMach-O/Rosetta, masv0.1.3 semruntimeMac. #7332 fechado sem integração20outubro; experiências Apple/Lana mantêm pins de ramo, não release/ARMnativo/requisitos gerais.",
   "de": "Konverter erzeugtMach-O/Rosetta, v0.1.3 ohneMac-Runtime. #7332 am20.Oktober ungemergt geschlossen; gepinnte Apple-/Lana-Experimente bleiben Zweigergebnisse, kein Release/ARM-nativ/allgemeine Anforderungen.",
   "fr": "Convertisseur produitMach-O/Rosetta, maisv0.1.3 sansruntimeMac. #7332 fermé sans fusion20octobre ; essais Apple/Lana épinglés restent résultats de branche, ni release/ARMnatif/exigences générales.",
   "es": "Conversor produceMach-O/Rosetta, perov0.1.3 sinruntimeMac. #7332 cerrado sin fusionar20octubre; experimentos Apple/Lana conservan pins de rama, no release/ARMnativo/requisitos generales."
  },
  {
   "en": "Mac work continues on separate integration trees. The M5 report uses ci/macos-series-2 53db0badb with #7524, #7937 code, #7332 SSL and open #9789; its converter is main 8b3e39832a. Doom 3 still lacks game data and ccleste still lacks GPU capabilities. A Linux container under Rosetta with llvmpipe is a different runtime. These observations do not provide a ready-to-download Mac package or general Apple silicon game requirements.",
   "zh": "Mac 工作仍在独立集成树继续。M5 报告的运行库是 ci/macos-series-2 53db0badb，加 #7524、#7937 代码、#7332 的 SSL 及开放 #9789；转换器为 main 8b3e39832a。Doom 3 仍缺游戏数据，ccleste 仍缺 GPU 能力。Rosetta 下的 Linux 容器与 llvmpipe 属于不同运行环境；这些记录不代表现成 Mac 包或通用 Apple 芯片游戏要求。",
   "ar": "يستمر عمل Mac في أشجار دمج منفصلة. تقرير M5 يستخدم ci/macos-series-2 53db0badb مع #7524 وكود #7937 وSSL #7332 و#9789 المفتوح؛ المحول main 8b3e39832a. Doom 3 يفتقد البيانات وccleste قدرات GPU. Linux داخل Rosetta مع llvmpipe بيئة أخرى؛ لا حزمة Mac جاهزة أو متطلبات عامة.",
   "pt": "O trabalho Mac continua em árvores separadas. M5 usa ci/macos-series-2 53db0badb com #7524, código #7937, SSL #7332 e #9789 aberto; conversor main 8b3e39832a. Doom 3 ainda sem dados e ccleste sem capacidades GPU. Linux/Rosetta/llvmpipe é outro ambiente; não há pacote Mac pronto nem requisitos gerais Apple silicon.",
   "de": "Mac-Arbeit läuft auf separaten Integrationsbäumen weiter. M5 nutzt ci/macos-series-2 53db0badb mit #7524, #7937-Code, #7332-SSL und offenem #9789; Konverter Main 8b3e39832a. Doom 3 fehlen Daten, ccleste GPU-Fähigkeiten. Linux unter Rosetta/llvmpipe ist eine andere Runtime. Kein fertiges Mac-Paket oder allgemeine Apple-Silicon-Spielanforderung.",
   "fr": "Le travail Mac continue sur des arbres distincts. M5 utilise ci/macos-series-2 53db0badb avec #7524, code #7937, SSL #7332 et #9789 ouvert ; convertisseur main 8b3e39832a. Doom 3 manque de données, ccleste de capacités GPU. Linux/Rosetta/llvmpipe est un autre runtime ; pas de paquet Mac prêt ni de prérequis généraux Apple silicon.",
   "es": "El trabajo Mac continúa en árboles separados. M5 usa ci/macos-series-2 53db0badb con #7524, código #7937, SSL #7332 y #9789 abierto; conversor main 8b3e39832a. Doom 3 sigue sin datos y ccleste sin capacidades GPU. Linux/Rosetta/llvmpipe es otro runtime; no paquete Mac listo ni requisitos generales Apple silicon."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/pull/7332"
  },
  {
   "label": "Pinned M5 environment and linked proposal",
   "url": "https://github.com/boykopovar/AnyPS5/issues/9783"
  },
  {
   "label": "Homebrew scope",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9788"
  }
 ]
});

guideSupplements["start"].push({
 "id": "version-checked-game-patches",
 "title": {
  "en": "Record automatically discovered game patches",
  "zh": "记录自动发现的游戏补丁",
  "ar": "سجّل ترقيعات اللعبة التلقائية",
  "pt": "Registe patches automáticos",
  "de": "Automatische Spielpatches dokumentieren",
  "fr": "Documenter les patches automatiques",
  "es": "Registra parches automáticos"
 },
 "body": [
  {
   "en": "Post-v0.1.2 main discovers relinker-patches.toml beside the input and announces Patches:. --patches selects a file; --no-patches disables discovery. Expected bytes are checked against the actual title version. Keep the applied-patch manifest and converted build with the report: a clean emulator source can still produce a patched game. Do not transfer a byte patch between content versions.",
   "zh": "v0.1.2后main会发现输入旁relinker-patches.toml并输出Patches:；--patches选文件，--no-patches禁自动发现。expected字节需匹配实际游戏版本。报告保留应用清单和转换构建，纯模拟器源码也可能生成已修改游戏；不同内容版本不能照搬字节补丁。",
   "ar": "main بعدv0.1.2 يكتشفrelinker-patches.toml بجوارالمدخل ويعلنPatches:. --patches يختار و--no-patches يعطل. expected يطابق نسخةاللعبة؛ احفظالبيان والبناء، فالمصدرالنظيف قدينتج لعبةمرقعة. لاتنقل بينالنسخ.",
   "pt": "Main após v0.1.2 descobre relinker-patches.toml junto do input e anuncia Patches:. --patches escolhe, --no-patches desativa. Bytes expected devem corresponder à versão; guarde manifesto/build. Fonte limpa pode gerar jogo modificado; não transfira patches entre versões.",
   "de": "Main nachv0.1.2 entdeckt relinker-patches.toml neben Eingabe und meldet Patches:. --patches wählt, --no-patches deaktiviert. Expected-Bytes müssen zur Inhaltsversion passen. Manifest/Build behalten; sauberer Quellcode kann ein gepatchtes Spiel erzeugen. Nicht auf andere Versionen übertragen.",
   "fr": "Main aprèsv0.1.2 découvre relinker-patches.toml près de l’entrée et annonce Patches:. --patches choisit, --no-patches désactive. Octets expected doivent correspondre à la version. Gardez manifeste/build ; source propre peut produire jeu modifié. Ne transposez pas entre versions.",
   "es": "Main trasv0.1.2 descubre relinker-patches.toml junto al input y anuncia Patches:. --patches elige, --no-patches desactiva. Bytes expected deben coincidir con versión. Guarda manifiesto/build; fuente limpia puede producir juego modificado. No traslades entre versiones."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["downloads"].push({
 "id": "version-checked-game-patches",
 "title": {
  "en": "Record automatically discovered game patches",
  "zh": "记录自动发现的游戏补丁",
  "ar": "سجّل ترقيعات اللعبة التلقائية",
  "pt": "Registe patches automáticos",
  "de": "Automatische Spielpatches dokumentieren",
  "fr": "Documenter les patches automatiques",
  "es": "Registra parches automáticos"
 },
 "body": [
  {
   "en": "Post-v0.1.2 main discovers relinker-patches.toml beside the input and announces Patches:. --patches selects a file; --no-patches disables discovery. Expected bytes are checked against the actual title version. Keep the applied-patch manifest and converted build with the report: a clean emulator source can still produce a patched game. Do not transfer a byte patch between content versions.",
   "zh": "v0.1.2后main会发现输入旁relinker-patches.toml并输出Patches:；--patches选文件，--no-patches禁自动发现。expected字节需匹配实际游戏版本。报告保留应用清单和转换构建，纯模拟器源码也可能生成已修改游戏；不同内容版本不能照搬字节补丁。",
   "ar": "main بعدv0.1.2 يكتشفrelinker-patches.toml بجوارالمدخل ويعلنPatches:. --patches يختار و--no-patches يعطل. expected يطابق نسخةاللعبة؛ احفظالبيان والبناء، فالمصدرالنظيف قدينتج لعبةمرقعة. لاتنقل بينالنسخ.",
   "pt": "Main após v0.1.2 descobre relinker-patches.toml junto do input e anuncia Patches:. --patches escolhe, --no-patches desativa. Bytes expected devem corresponder à versão; guarde manifesto/build. Fonte limpa pode gerar jogo modificado; não transfira patches entre versões.",
   "de": "Main nachv0.1.2 entdeckt relinker-patches.toml neben Eingabe und meldet Patches:. --patches wählt, --no-patches deaktiviert. Expected-Bytes müssen zur Inhaltsversion passen. Manifest/Build behalten; sauberer Quellcode kann ein gepatchtes Spiel erzeugen. Nicht auf andere Versionen übertragen.",
   "fr": "Main aprèsv0.1.2 découvre relinker-patches.toml près de l’entrée et annonce Patches:. --patches choisit, --no-patches désactive. Octets expected doivent correspondre à la version. Gardez manifeste/build ; source propre peut produire jeu modifié. Ne transposez pas entre versions.",
   "es": "Main trasv0.1.2 descubre relinker-patches.toml junto al input y anuncia Patches:. --patches elige, --no-patches desactiva. Bytes expected deben coincidir con versión. Guarda manifiesto/build; fuente limpia puede producir juego modificado. No traslades entre versiones."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "self-build-runtime-dlls",
 "title": {
  "en": "Include toolchain DLLs in a Windows self-build",
  "zh": "Windows自编译需带工具链DLL",
  "ar": "ضم DLL الأدوات ببناء Windows",
  "pt": "Inclua DLLs no build Windows",
  "de": "Toolchain-DLLs im Windows-Eigenbau",
  "fr": "Inclure les DLLs du build Windows",
  "es": "Incluye DLLs en build Windows"
 },
 "body": [
  {
   "en": "After building libs, copy libgcc_s_seh-1.dll, libstdc++-6.dll and libwinpthread-1.dll from that toolchain beside the patched PRX files. The runtime loader does not search PATH for these dependencies; error126 can occur even when the named PRX exists. Release archives already include them. Keep Unity guest modules in their original relative folders, not libs.",
   "zh": "构建libs后，将该工具链的libgcc_s_seh-1.dll、libstdc++-6.dll和libwinpthread-1.dll放在patched PRX旁。加载器不从PATH找这些依赖，报错PRX存在也可能126。发行包已包含；Unity客体模块仍放原相对目录，不放libs。",
   "ar": "انسخDLL الثلاثةlibgcc_s_seh-1/libstdc++-6/libwinpthread-1 مننفسالأدوات بجوارPRX. loader لايبحثPATH؛126 ممكن معوجودPRX. الإصدارتضمها؛ وحداتUnity تبقىبمساراتها لاlibs.",
   "pt": "Copie libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll do mesmo toolchain junto dos PRX. Loader não pesquisa PATH;126 pode surgir com PRX presente. Releases incluem-nas; módulos Unity ficam nos caminhos originais.",
   "de": "libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll derselben Toolchain neben PRX kopieren. Loader durchsucht PATH nicht;126 trotz vorhandener PRX möglich. Releases enthalten sie; Unity-Module im Originalpfad.",
   "fr": "Copiez libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll du même toolchain près des PRX. Loader ne cherche pas dans PATH ;126 malgré PRX présente possible. Releases les incluent ; modules Unity au chemin d’origine.",
   "es": "Copia libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll del mismo toolchain junto aPRX. Loader no busca PATH;126 posible conPRX presente. Releases las incluyen; módulosUnity en ruta original."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "self-build-runtime-dlls",
 "title": {
  "en": "Include toolchain DLLs in a Windows self-build",
  "zh": "Windows自编译需带工具链DLL",
  "ar": "ضم DLL الأدوات ببناء Windows",
  "pt": "Inclua DLLs no build Windows",
  "de": "Toolchain-DLLs im Windows-Eigenbau",
  "fr": "Inclure les DLLs du build Windows",
  "es": "Incluye DLLs en build Windows"
 },
 "body": [
  {
   "en": "After building libs, copy libgcc_s_seh-1.dll, libstdc++-6.dll and libwinpthread-1.dll from that toolchain beside the patched PRX files. The runtime loader does not search PATH for these dependencies; error126 can occur even when the named PRX exists. Release archives already include them. Keep Unity guest modules in their original relative folders, not libs.",
   "zh": "构建libs后，将该工具链的libgcc_s_seh-1.dll、libstdc++-6.dll和libwinpthread-1.dll放在patched PRX旁。加载器不从PATH找这些依赖，报错PRX存在也可能126。发行包已包含；Unity客体模块仍放原相对目录，不放libs。",
   "ar": "انسخDLL الثلاثةlibgcc_s_seh-1/libstdc++-6/libwinpthread-1 مننفسالأدوات بجوارPRX. loader لايبحثPATH؛126 ممكن معوجودPRX. الإصدارتضمها؛ وحداتUnity تبقىبمساراتها لاlibs.",
   "pt": "Copie libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll do mesmo toolchain junto dos PRX. Loader não pesquisa PATH;126 pode surgir com PRX presente. Releases incluem-nas; módulos Unity ficam nos caminhos originais.",
   "de": "libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll derselben Toolchain neben PRX kopieren. Loader durchsucht PATH nicht;126 trotz vorhandener PRX möglich. Releases enthalten sie; Unity-Module im Originalpfad.",
   "fr": "Copiez libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll du même toolchain près des PRX. Loader ne cherche pas dans PATH ;126 malgré PRX présente possible. Releases les incluent ; modules Unity au chemin d’origine.",
   "es": "Copia libgcc_s_seh-1.dll/libstdc++-6.dll/libwinpthread-1.dll del mismo toolchain junto aPRX. Loader no busca PATH;126 posible conPRX presente. Releases las incluyen; módulosUnity en ruta original."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/dev/BUILD.md"
  }
 ]
},{
 "id": "counters-and-cache-comparisons",
 "title": {
  "en": "Compare the same scene and counter window",
  "zh": "对齐场景与计数窗口",
  "ar": "طابق المشهد ونافذة العداد",
  "pt": "Alinhe cena e janela dos contadores",
  "de": "Szene und Zählerfenster abgleichen",
  "fr": "Aligner scène et fenêtre des compteurs",
  "es": "Alinea escena y ventana de contadores"
 },
 "body": [
  {
   "en": "Profile lines mix10s windows and cumulative totals. Use differences of cumulative values, disclose profiling overhead, cache state and streaming. ASTRO BOT/LEGO cache-budget observations apply to their measured hosts; larger budgets can exhaust VRAM. Fewer pipeline drains alone did not improve Sword of the Sea. Do not turn one host’s switch into a universal preset.",
   "zh": "分析日志混合10秒窗口与累计值，累计值需取差，并说明分析开销、缓存与串流状态。ASTRO BOT／LEGO纹理预算观察只适用实测主机，增预算可耗尽显存；Sword of the Sea排空少未单独提速。不能把单主机开关写成通用预设。",
   "ar": "السجلات تمزج10ث وتراكماً؛ خذالفروق وسجّلprofiling/cache/streaming. ميزانيةASTRO/LEGO تخصأجهزتها وقدتنفدVRAM. drains أقللمتسرعSword؛ لا إعدادعام.",
   "pt": "Logs misturam janelas10s e acumulados; use diferenças, declare profiling/cache/streaming. Orçamentos ASTRO/LEGO são por host e podem esgotarVRAM. Menos drains não aceleraramSword; sem preset universal.",
   "de": "Logs mischen10s-Fenster und Gesamtsummen; Differenzen nutzen, Profiling/Cache/Streaming angeben. ASTRO/LEGO-Budgets gelten jeHost und können VRAM füllen. WenigerDrains beschleunigtenSword nicht; keinUniversalpreset.",
   "fr": "Logs mélangent fenêtres10s et cumuls ; utilisez différences, indiquez profilage/cache/streaming. Budgets ASTRO/LEGO propres aux hôtes, risque saturationVRAM. Moinsdrains sans gainSword ; pas préréglage universel.",
   "es": "Logs mezclan ventanas10s y acumulados; usa diferencias, declara profiling/cache/streaming. Presupuestos ASTRO/LEGO porhost pueden agotarVRAM. Menosdrains no aceleraronSword; sinpreset universal."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/input"].push({
 "id": "analog-keyboard-and-shake",
 "title": {
  "en": "New main keyboard controls",
  "zh": "新版main键盘控制",
  "ar": "تحكم لوحة مفاتيح main الجديد",
  "pt": "Novos controlos de teclado",
  "de": "Neue Main-Tastatursteuerung",
  "fr": "Nouvelles commandes clavier",
  "es": "Nuevos controles de teclado"
 },
 "body": [
  {
   "en": "Current main binds L2 to R/mouse X1, Shake to held X and mouse capture to middle button or F7. Shake synthesizes motion every50ms; it does not verify a title’s sensor behavior. Optional StickModifierScale defaults0.5 with no modifier binding; KeyboardRampMs/TriggerRampMs default0. These change keyboard emulation, not controller sticks. Releasev0.1.2 may differ.",
   "zh": "当前main将L2绑定R／鼠标X1，按住X模拟Shake，中键或F7切换鼠标捕获。Shake每50ms合成运动，不证明游戏体感正确。可选StickModifierScale默认0.5且未绑修饰键，KeyboardRampMs／TriggerRampMs默认0；它们影响键盘模拟，不改变手柄摇杆。v0.1.2可能不同。",
   "ar": "main يربطL2 بـR/X1 وShakeبـX والتقاطالفأرة بالوسط/F7. حركةمصطنعة كل50ms ليست تحققحساس اللعبة. StickModifierScale0.5 بلازر افتراضي، ramp0؛ لوحةالمفاتيح لا عصااليد، وقديختلفv0.1.2.",
   "pt": "Main ligaL2 aR/X1, Shake aX e captura a botão central/F7. Movimento sintético50ms não valida sensores do jogo. StickModifierScale0,5 sem tecla padrão, ramps0; afetam teclado, não sticks. v0.1.2 pode diferir.",
   "de": "Main bindetL2 anR/X1, Shake anX und Mausfang anMitteltaste/F7. Synthetische Bewegung50ms belegt keine Spielsensorik. StickModifierScale0,5 ohne Standardtaste, Ramps0; Tastaturemulation statt Controllersticks. v0.1.2 kann abweichen.",
   "fr": "Main lieL2 àR/X1, Shake àX et capture au bouton central/F7. Mouvement synthétique50ms sans validation des capteurs du jeu. StickModifierScale0,5 sans touche par défaut, ramps0 ; clavier, pas sticks. v0.1.2 peut différer.",
   "es": "Main vinculaL2 aR/X1, Shake aX y captura a botón central/F7. Movimiento sintético50ms no valida sensores del juego. StickModifierScale0,5 sin tecla predeterminada, ramps0; afectan teclado, no sticks. v0.1.2 puede diferir."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/user/INPUT_MAPPING.md"
  }
 ]
});

guideSupplements["guides/language-fonts"].push({
 "id": "font-errors-can-look-like-memory",
 "title": {
  "en": "A font failure can look like an allocation failure",
  "zh": "字体失败可能表现为分配失败",
  "ar": "فشل الخط قد يبدو فشل ذاكرة",
  "pt": "Fontes podem parecer falha de memória",
  "de": "Fontfehler können wie Speicherfehler aussehen",
  "fr": "Une police manquante peut sembler un manque de mémoire",
  "es": "Una fuente ausente puede parecer fallo de memoria"
 },
 "body": [
  {
   "en": "The Playroom Linux report at maina373e85 traces Global Heap/nativeTex assertions to missing fonts and invalid text-layout dimensions; Noto substitutes pass six100–150s runs. Check the earliest font log and the documented font directory before treating this exact failure as RAM exhaustion. It does not establish the cause of similar errors in other titles.",
   "zh": "Playroom Linux maina373e85把Global Heap／nativeTex追溯到缺字体及异常文本布局尺寸，Noto替代字体六次100–150秒通过。遇此特定故障先核对最早字体日志及文档字体目录，再判断内存不足；不据此认定其他游戏同类报错根因。",
   "ar": "تقريرPlayroom Linuxa373e85 يربطGlobalHeap/nativeTex بخطوطناقصة وأبعادغيرصالحة؛Noto يمر6×100–150ث. افحصأولسجلخطوط والمجلدلهذاالفشل، لا تعمم لألعابأخرى.",
   "pt": "Relato Playroom Linuxa373e85 liga GlobalHeap/nativeTex a fontes ausentes/dimensões inválidas; Noto passa6×100–150s. Veja primeiro log/diretório antes de inferir falta deRAM neste caso; outros jogos não diagnosticados.",
   "de": "Playroom-Linuxa373e85 führt GlobalHeap/nativeTex auf fehlendeFonts/ungültigeTextmaße zurück; Noto besteht6×100–150s. Erst Fontlog/Ordner prüfen, bevor dieser Fehler als RAM-Mangel gilt; keine Diagnose anderer Titel.",
   "fr": "Rapport Playroom Linuxa373e85 relie GlobalHeap/nativeTex à polices absentes/dimensions invalides ; Noto passe6×100–150s. Vérifiez premier log/dossier avant d’inférer manqueRAM dans ce cas ; autres jeux non diagnostiqués.",
   "es": "Informe Playroom Linuxa373e85 vincula GlobalHeap/nativeTex a fuentes ausentes/dimensiones inválidas; Noto pasa6×100–150s. Revisa primer log/carpeta antes de inferir faltaRAM aquí; otros juegos sin diagnosticar."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/8075b6af190ff8f83c1bff9a7f74cd71e5902140/docs/user/USAGE.md"
  },
  {
   "label": "Playroom report",
   "url": "https://github.com/boykopovar/AnyPS5/issues/7714"
  }
 ]
});

guideSupplements["guides/input"].push({
 "id": "main-screenshots-timelines",
 "title": {
  "en": "Later main: screenshots and timed input",
  "zh": "后续main：截图与定时输入",
  "ar": "main لاحق: صور وإدخال مجدول",
  "pt": "Main posterior: capturas e input agendado",
  "de": "SpäteresMain: Screenshots/Zeitplan",
  "fr": "Main ultérieur : captures/entrées planifiées",
  "es": "Main posterior: capturas/input programado"
 },
 "body": [
  {
   "en": "These features are in the reviewed main, absent from v0.1.3’s attached input guide. F12 saves the next displayed frame as PNG in anyps5-screenshots/ or ANYPS5_SCREENSHOTS, without overlay/window scaling; PQ becomes SDR. Write failure stops the game. tools/pad_timeline.py validates ordered nonoverlapping button events (≤4096,≤1h, holds1–5000ms). Timelines follow wall time/controller reads, can miss events during loading and do not reproduce game state.",
   "zh": "这些功能在已复核main文档，v0.1.3附带输入指南未包含。F12将下一显示帧存PNG到anyps5-screenshots/或ANYPS5_SCREENSHOTS，不含叠加／窗口缩放，PQ转SDR，写失败会停止游戏。tools/pad_timeline.py验证有序不重叠按钮事件（≤4096、≤1小时、按住1–5000ms）。序列依墙钟／手柄读取，加载可漏事件，不能复现游戏状态。",
   "ar": "الميزات فيmain المراجع، لا دليلv0.1.3 المرفق. F12 يحفظ إطارPNG بلاoverlay/تحجيم فيanyps5-screenshots/ أوANYPS5_SCREENSHOTS،PQ إلىSDR وفشل الكتابة يوقف اللعبة. pad_timeline.py يتحقق≤4096 حدث/ساعة ومدة1–5000ms؛ توقيت حقيقي قد يفوت أثناء التحميل ولا يعيد حالة اللعبة.",
   "pt": "Funcionalidades do main revisto, ausentes no guia anexov0.1.3. F12 guardaPNG sem overlay/escala emanyps5-screenshots/ ouANYPS5_SCREENSHOTS, PQ→SDR; erro de escrita para jogo. pad_timeline.py valida≤4096 eventos/1h, durações1–5000ms. Tempo real/leitura do comando pode perder eventos ao carregar, sem reproduzir estado.",
   "de": "Im geprüften Main, nicht im angehängtenv0.1.3-Handbuch. F12 speichertPNG ohne Overlay/Fensterskalierung inanyps5-screenshots/ oderANYPS5_SCREENSHOTS, PQ→SDR; Schreibfehler stoppt Spiel. pad_timeline.py prüft≤4096 Ereignisse/1h mit1–5000ms. Echtzeit/Controllerabfragen können Ladeereignisse verpassen, kein Spielzustandsreplay.",
   "fr": "Fonctions du main vérifié, absentes du guide jointv0.1.3. F12 sauvePNG sans overlay/échelle dansanyps5-screenshots/ ouANYPS5_SCREENSHOTS, PQ→SDR ; échec écrit arrête jeu. pad_timeline.py valide≤4096 événements/1h, durées1–5000ms. Horloge/lectures manette peuvent rater entrées au chargement, sans rejouer état.",
   "es": "Funciones de main revisado, ausentes del manual adjuntov0.1.3. F12 guardaPNG sin overlay/escala enanyps5-screenshots/ oANYPS5_SCREENSHOTS, PQ→SDR; fallo al escribir para juego. pad_timeline.py valida≤4096 eventos/1h, duración1–5000ms. Reloj/lecturas de mando pueden perder eventos al cargar, sin reproducir estado."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/2185dbf92e8d9013a1620d2dfc95de50494e19f8/docs/user/INPUT_MAPPING.md"
  }
 ]
});

guideSupplements["guides/language-fonts"].push({
 "id": "main-arabic-script-font-fallback",
 "title": {
  "en": "Later main: script fallback files",
  "zh": "后续main：文字脚本回退文件",
  "ar": "main لاحق: خطوط بديلة للنصوص",
  "pt": "Main posterior: fontes por escrita",
  "de": "SpäteresMain: Schriftfallback",
  "fr": "Main ultérieur : polices de secours",
  "es": "Main posterior: fuentes por escritura"
 },
 "body": [
  {
   "en": "Later main adds NotoSansArabic-{Light,Regular,Medium,Bold}.ttf and clarifies Japanese/Chinese/Korean CJK fallback. Multi-script font sets open the additional script files for missing characters; one Latin font is insufficient. Keep files beside the executable in anyps5-fonts/ or ANYPS5_SYSTEM_FONTS. This change is absent from v0.1.3’s attached usage guide; rendering still needs title-specific checks.",
   "zh": "后续main增加NotoSansArabic-{Light,Regular,Medium,Bold}.ttf，并明确日／中／韩CJK回退。多脚本字体集会为缺字打开其他脚本文件，单个拉丁字体不够；文件放可执行文件旁anyps5-fonts/或ANYPS5_SYSTEM_FONTS。v0.1.3附带使用指南未包含此变化，游戏字形仍需单测。",
   "ar": "main اللاحق يضيف NotoSansArabic-{Light,Regular,Medium,Bold}.ttf ويوضح CJK الياباني/الصيني/الكوري. مجموعات متعددة النص تحتاج ملفاتها الإضافية، لا خط لاتيني فقط. ضعها فيanyps5-fonts/ أوANYPS5_SYSTEM_FONTS. غائب من دليلv0.1.3؛ اختبر كل عنوان.",
   "pt": "Main posterior adicionaNotoSansArabic-{Light,Regular,Medium,Bold}.ttf e CJK japonês/chinês/coreano. Conjuntos mistos abrem fontes adicionais para glifos ausentes; só latim não chega. anyps5-fonts/ ouANYPS5_SYSTEM_FONTS. Ausente do guião v0.1.3; teste por título.",
   "de": "SpäteresMain ergänztNotoSansArabic-{Light,Regular,Medium,Bold}.ttf und japanisch/chinesisch/koreanisches CJK. Mehrschriftsets benötigen Zusatzdateien; nur Latin reicht nicht. anyps5-fonts/ oderANYPS5_SYSTEM_FONTS. Nicht imv0.1.3-Handbuch; titelbezogen prüfen.",
   "fr": "Main ultérieur ajouteNotoSansArabic-{Light,Regular,Medium,Bold}.ttf et CJK japonais/chinois/coréen. Jeux multialphabets ouvrent d’autres fichiers pour glyphes manquants ; latin seul insuffisant. anyps5-fonts/ ouANYPS5_SYSTEM_FONTS. Absent du guidev0.1.3 ; vérifier par titre.",
   "es": "Main posterior añadeNotoSansArabic-{Light,Regular,Medium,Bold}.ttf y CJK japonés/chino/coreano. Fuentes multiescritura abren archivos extra para glifos ausentes; solo latín no basta. anyps5-fonts/ oANYPS5_SYSTEM_FONTS. Ausente del manualv0.1.3; prueba por título."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/2185dbf92e8d9013a1620d2dfc95de50494e19f8/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-bench-report-boundaries",
 "title": {
  "en": "Later main: capture benchmark intervals",
  "zh": "后续main：保留基准区间",
  "ar": "main لاحق: فترات القياس",
  "pt": "Main posterior: intervalos de medição",
  "de": "SpäteresMain: Messintervalle",
  "fr": "Main ultérieur : intervalles de mesure",
  "es": "Main posterior: intervalos de medición"
 },
 "body": [
  {
   "en": "Later main documents APS5_TRACE_SUMMARY_EVERY=30 with APS5_TRACE_BENCH=1: compressed per-present intervals plus build/host/title metadata where available. First interval includes compilation and the unfinished final interval is omitted. Compare matching later scenes and starting saves, keep missing metadata unknown, and report profiling overhead. These switches are absent from v0.1.3’s usage attachment.",
   "zh": "后续main文档给出APS5_TRACE_SUMMARY_EVERY=30配APS5_TRACE_BENCH=1，记录压缩逐呈现区间和可取得的构建／主机／游戏元数据。首区间含编译，退出时未完末区间不写。比较相同后续场景及起始存档、缺失保持未知，披露分析开销；v0.1.3附带指南未列这些开关。",
   "ar": "main يوثقSUMMARY_EVERY=30 معTRACE_BENCH=1 لقياسات مضغوطة وبيانات متاحة. الأول يشمل التجميع والأخير غير المكتمل يحذف. قارن نفس المشهد والحفظ، اترك المجهول واذكر كلفة التحليل؛ ليس في دليلv0.1.3.",
   "pt": "Main documentaSUMMARY_EVERY=30/TRACE_BENCH=1 para intervalos comprimidos e metadados disponíveis. Primeiro inclui compilação, último incompleto omitido. Compare cenas/saves iguais e declare overhead/dados desconhecidos; ausente nov0.1.3.",
   "de": "Main dokumentiertSUMMARY_EVERY=30/TRACE_BENCH=1 für komprimierte Intervalle/Metadaten. Erstes enthält Kompilierung, unvollständiges letztes entfällt. Gleiche Szenen/Saves vergleichen, Lücken/Profilkosten nennen; nicht imv0.1.3-Handbuch.",
   "fr": "Main documenteSUMMARY_EVERY=30/TRACE_BENCH=1 pour intervalles compressés/métadonnées disponibles. Premier inclut compilation, dernier incomplet omis. Comparez scènes/saves identiques, indiquez inconnues/surcoût ; absent du guidev0.1.3.",
   "es": "Main documentaSUMMARY_EVERY=30/TRACE_BENCH=1 para intervalos comprimidos/metadatos disponibles. Primero incluye compilación y último incompleto se omite. Compara escenas/saves iguales, declara lagunas/coste; ausente del manualv0.1.3."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/2185dbf92e8d9013a1620d2dfc95de50494e19f8/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-linux-import-tracing",
 "title": {
  "en": "Later main: import tracing on Linux",
  "zh": "后续main：Linux导入追踪",
  "ar": "main اللاحق: تتبع Linux",
  "pt": "Main posterior: trace de imports Linux",
  "de": "Späteres Main: Linux-Importtrace",
  "fr": "Main ultérieur : trace des imports Linux",
  "es": "Main posterior: trace de imports Linux"
 },
 "body": [
  {
   "en": "Current main documents --trace-imports for Windows and Linux; it conflicts with --lazy-binding and records nothing without APS5_TRACE_CALLS. Linux prints the recent calls only on abort, not a Windows-style crash report. Output includes the global last 64 calls, the reporting thread’s last 32 from a 65536-call ring, and 32 top imports. These are diagnostic traces with overhead, not gameplay benchmarks; the v0.1.3 attached usage guide still limits this option to Windows.",
   "zh": "当前main文档把--trace-imports扩展到Windows和Linux，与--lazy-binding冲突，未设APS5_TRACE_CALLS则不记录。Linux仅abort打印调用，不提供Windows式崩溃报告。输出全局末64次、65536调用环中报告线程末32次及高频32导入。追踪有开销，非游玩基准；v0.1.3附带指南仍将该选项限于Windows。",
   "ar": "يوثق main تتبع --trace-imports لـWindows/Linux، يتعارض مع --lazy-binding ويحتاج APS5_TRACE_CALLS. Linux يطبع عند abort فقط، لا تقرير انهيار Windows. يعرض آخر 64 نداء عاماً وآخر 32 للخيط من حلقة 65536 وأعلى 32 import. تشخيص ذو كلفة لا benchmark؛ دليل v0.1.3 المرفق يقصره على Windows.",
   "pt": "Main documenta --trace-imports em Windows/Linux; incompatível com --lazy-binding e exige APS5_TRACE_CALLS. Linux imprime só em abort, sem relatório Windows. Últimas 64 chamadas globais, 32 da thread num anel de 65536 e 32 imports principais. Diagnóstico com custo, não benchmark; guia anexo v0.1.3 ainda diz Windows.",
   "de": "Main dokumentiert --trace-imports für Windows/Linux, unvereinbar mit --lazy-binding, ohne APS5_TRACE_CALLS keine Aufzeichnung. Linux druckt nur bei Abort, kein Windows-Crashbericht. Letzte 64 globale Aufrufe, 32 des Meldethreads aus 65536er Ring und 32 häufigste Imports. Diagnose mit Aufwand; v0.1.3-Handbuch nennt nur Windows.",
   "fr": "Main documente --trace-imports sur Windows/Linux, incompatible avec --lazy-binding, sans enregistrement sans APS5_TRACE_CALLS. Linux imprime seulement sur abort, sans rapport Windows. Derniers 64 appels globaux, 32 du thread dans un anneau de 65536 et 32 imports principaux. Diagnostic coûteux, pas benchmark ; guide joint v0.1.3 limité à Windows.",
   "es": "Main documenta --trace-imports en Windows/Linux, incompatible con --lazy-binding y sin registro sin APS5_TRACE_CALLS. Linux imprime solo en abort, sin reporte Windows. Últimas 64 llamadas globales, 32 del hilo desde anillo de 65536 y 32 imports principales. Diagnóstico con coste; guía adjunta v0.1.3 aún dice Windows."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/7202f120d5b641ce27fcc9bae6166202c52a621d/docs/user/USAGE.md"
  }
 ]
},{
 "id": "main-module-start-boundaries",
 "title": {
  "en": "Later main: module initialization boundaries",
  "zh": "后续main：模块初始化边界",
  "ar": "main اللاحق: حدود تهيئة الوحدات",
  "pt": "Main posterior: limites de inicialização",
  "de": "Späteres Main: Modulinitialisierung",
  "fr": "Main ultérieur : initialisation des modules",
  "es": "Main posterior: inicialización de módulos"
 },
 "body": [
  {
   "en": "With --module-dir, dependencies of another module initialize at startup; Linux/macOS also eagerly initialize executable dependencies. Other modules initialize when sceKernelLoadStartModule supplies their start arguments, including mono-ps4.sprx on Windows. Discovering every file does not prove correct title initialization: Cult of the Lamb and LEGO Voyagers retain separate startup failures. --module-dir conflicts with --skip-sce-module.",
   "zh": "--module-dir下，被其他模块依赖的模块启动时初始化；Linux／macOS还提前初始化可执行文件依赖。其他模块待sceKernelLoadStartModule提供启动参数时初始化，包括Windows的mono-ps4.sprx。发现全部文件不证明游戏初始化正确：咩咩启示录与LEGO Voyagers仍有不同启动失败。此选项与--skip-sce-module冲突。",
   "ar": "مع --module-dir تبدأ تبعيات الوحدات فوراً؛ Linux/macOS يبدآن أيضاً تبعيات الملف التنفيذي. الباقي مع معاملات sceKernelLoadStartModule، مثل mono-ps4.sprx في Windows. اكتشاف الملفات لا يثبت البدء الصحيح؛ Cult وLEGO يبقيان بفشل منفصل. يتعارض مع --skip-sce-module.",
   "pt": "Com --module-dir, dependências de módulos iniciam no arranque; Linux/macOS também iniciam dependências do executável. Outras aguardam argumentos de sceKernelLoadStartModule, incluindo mono-ps4.sprx no Windows. Descobrir ficheiros não valida inicialização: Cult e LEGO têm falhas distintas. Incompatível com --skip-sce-module.",
   "de": "Mit --module-dir starten Modulabhängigkeiten sofort; Linux/macOS auch Abhängigkeiten des Executables. Andere starten mit Argumenten von sceKernelLoadStartModule, etwa mono-ps4.sprx unter Windows. Dateifund beweist keine korrekte Initialisierung: Cult und LEGO scheitern getrennt. Konflikt mit --skip-sce-module.",
   "fr": "Avec --module-dir, dépendances de modules initialisées au départ ; Linux/macOS aussi celles de l’exécutable. Les autres attendent les arguments de sceKernelLoadStartModule, dont mono-ps4.sprx sous Windows. Trouver les fichiers ne valide pas le démarrage : Cult et LEGO ont des échecs distincts. Conflit avec --skip-sce-module.",
   "es": "Con --module-dir, dependencias de módulos inician al arrancar; Linux/macOS también las del ejecutable. Otras esperan argumentos de sceKernelLoadStartModule, incluido mono-ps4.sprx en Windows. Encontrar archivos no valida inicio: Cult y LEGO tienen fallos distintos. Conflicto con --skip-sce-module."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/7202f120d5b641ce27fcc9bae6166202c52a621d/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-module-start-boundaries",
 "title": {
  "en": "Later main: module initialization boundaries",
  "zh": "后续main：模块初始化边界",
  "ar": "main اللاحق: حدود تهيئة الوحدات",
  "pt": "Main posterior: limites de inicialização",
  "de": "Späteres Main: Modulinitialisierung",
  "fr": "Main ultérieur : initialisation des modules",
  "es": "Main posterior: inicialización de módulos"
 },
 "body": [
  {
   "en": "With --module-dir, dependencies of another module initialize at startup; Linux/macOS also eagerly initialize executable dependencies. Other modules initialize when sceKernelLoadStartModule supplies their start arguments, including mono-ps4.sprx on Windows. Discovering every file does not prove correct title initialization: Cult of the Lamb and LEGO Voyagers retain separate startup failures. --module-dir conflicts with --skip-sce-module.",
   "zh": "--module-dir下，被其他模块依赖的模块启动时初始化；Linux／macOS还提前初始化可执行文件依赖。其他模块待sceKernelLoadStartModule提供启动参数时初始化，包括Windows的mono-ps4.sprx。发现全部文件不证明游戏初始化正确：咩咩启示录与LEGO Voyagers仍有不同启动失败。此选项与--skip-sce-module冲突。",
   "ar": "مع --module-dir تبدأ تبعيات الوحدات فوراً؛ Linux/macOS يبدآن أيضاً تبعيات الملف التنفيذي. الباقي مع معاملات sceKernelLoadStartModule، مثل mono-ps4.sprx في Windows. اكتشاف الملفات لا يثبت البدء الصحيح؛ Cult وLEGO يبقيان بفشل منفصل. يتعارض مع --skip-sce-module.",
   "pt": "Com --module-dir, dependências de módulos iniciam no arranque; Linux/macOS também iniciam dependências do executável. Outras aguardam argumentos de sceKernelLoadStartModule, incluindo mono-ps4.sprx no Windows. Descobrir ficheiros não valida inicialização: Cult e LEGO têm falhas distintas. Incompatível com --skip-sce-module.",
   "de": "Mit --module-dir starten Modulabhängigkeiten sofort; Linux/macOS auch Abhängigkeiten des Executables. Andere starten mit Argumenten von sceKernelLoadStartModule, etwa mono-ps4.sprx unter Windows. Dateifund beweist keine korrekte Initialisierung: Cult und LEGO scheitern getrennt. Konflikt mit --skip-sce-module.",
   "fr": "Avec --module-dir, dépendances de modules initialisées au départ ; Linux/macOS aussi celles de l’exécutable. Les autres attendent les arguments de sceKernelLoadStartModule, dont mono-ps4.sprx sous Windows. Trouver les fichiers ne valide pas le démarrage : Cult et LEGO ont des échecs distincts. Conflit avec --skip-sce-module.",
   "es": "Con --module-dir, dependencias de módulos inician al arrancar; Linux/macOS también las del ejecutable. Otras esperan argumentos de sceKernelLoadStartModule, incluido mono-ps4.sprx en Windows. Encontrar archivos no valida inicio: Cult y LEGO tienen fallos distintos. Conflicto con --skip-sce-module."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/7202f120d5b641ce27fcc9bae6166202c52a621d/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-linux-import-tracing",
 "title": {
  "en": "Later main: import tracing on Linux",
  "zh": "后续main：Linux导入追踪",
  "ar": "main اللاحق: تتبع Linux",
  "pt": "Main posterior: trace de imports Linux",
  "de": "Späteres Main: Linux-Importtrace",
  "fr": "Main ultérieur : trace des imports Linux",
  "es": "Main posterior: trace de imports Linux"
 },
 "body": [
  {
   "en": "Current main documents --trace-imports for Windows and Linux; it conflicts with --lazy-binding and records nothing without APS5_TRACE_CALLS. Linux prints the recent calls only on abort, not a Windows-style crash report. Output includes the global last 64 calls, the reporting thread’s last 32 from a 65536-call ring, and 32 top imports. These are diagnostic traces with overhead, not gameplay benchmarks; the v0.1.3 attached usage guide still limits this option to Windows.",
   "zh": "当前main文档把--trace-imports扩展到Windows和Linux，与--lazy-binding冲突，未设APS5_TRACE_CALLS则不记录。Linux仅abort打印调用，不提供Windows式崩溃报告。输出全局末64次、65536调用环中报告线程末32次及高频32导入。追踪有开销，非游玩基准；v0.1.3附带指南仍将该选项限于Windows。",
   "ar": "يوثق main تتبع --trace-imports لـWindows/Linux، يتعارض مع --lazy-binding ويحتاج APS5_TRACE_CALLS. Linux يطبع عند abort فقط، لا تقرير انهيار Windows. يعرض آخر 64 نداء عاماً وآخر 32 للخيط من حلقة 65536 وأعلى 32 import. تشخيص ذو كلفة لا benchmark؛ دليل v0.1.3 المرفق يقصره على Windows.",
   "pt": "Main documenta --trace-imports em Windows/Linux; incompatível com --lazy-binding e exige APS5_TRACE_CALLS. Linux imprime só em abort, sem relatório Windows. Últimas 64 chamadas globais, 32 da thread num anel de 65536 e 32 imports principais. Diagnóstico com custo, não benchmark; guia anexo v0.1.3 ainda diz Windows.",
   "de": "Main dokumentiert --trace-imports für Windows/Linux, unvereinbar mit --lazy-binding, ohne APS5_TRACE_CALLS keine Aufzeichnung. Linux druckt nur bei Abort, kein Windows-Crashbericht. Letzte 64 globale Aufrufe, 32 des Meldethreads aus 65536er Ring und 32 häufigste Imports. Diagnose mit Aufwand; v0.1.3-Handbuch nennt nur Windows.",
   "fr": "Main documente --trace-imports sur Windows/Linux, incompatible avec --lazy-binding, sans enregistrement sans APS5_TRACE_CALLS. Linux imprime seulement sur abort, sans rapport Windows. Derniers 64 appels globaux, 32 du thread dans un anneau de 65536 et 32 imports principaux. Diagnostic coûteux, pas benchmark ; guide joint v0.1.3 limité à Windows.",
   "es": "Main documenta --trace-imports en Windows/Linux, incompatible con --lazy-binding y sin registro sin APS5_TRACE_CALLS. Linux imprime solo en abort, sin reporte Windows. Últimas 64 llamadas globales, 32 del hilo desde anillo de 65536 y 32 imports principales. Diagnóstico con coste; guía adjunta v0.1.3 aún dice Windows."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/7202f120d5b641ce27fcc9bae6166202c52a621d/docs/user/USAGE.md"
  }
 ]
},{
 "id": "main-windows-committer-sampling",
 "title": {
  "en": "Later main: sample the Windows committer",
  "zh": "后续main：采样Windows committer",
  "ar": "main اللاحق: أخذ عينات committer",
  "pt": "Main posterior: amostrar o committer Windows",
  "de": "Späteres Main: Windows-Committer sampeln",
  "fr": "Main ultérieur : échantillonner le committer Windows",
  "es": "Main posterior: muestreo del committer Windows"
 },
 "body": [
  {
   "en": "Windows APS5_SAMPLE_COMMITTER=<file> samples queue 0’s draw committer with the worker sampler’s two-file/offline-symbol workflow. It starts at the first pipelined draw; APS5_PIPELINED_DRAWS=0 produces no samples. A worker waiting in DrawPipeline::Enqueue does not prove the committer is idle. Keep profiling runs separate from unprofiled FPS, including Hi-Fi RUSH’s observed tracing overhead.",
   "zh": "Windows的APS5_SAMPLE_COMMITTER=<file>按worker采样器的双文件／离线符号流程采样queue 0 draw committer，首次pipeline draw才开始，APS5_PIPELINED_DRAWS=0无样本。worker停在DrawPipeline::Enqueue不证明committer空闲；剖析与无追踪FPS分开，保留Hi-Fi RUSH已观察到的追踪开销。",
   "ar": "في Windows يأخذ APS5_SAMPLE_COMMITTER=<file> عينات committer للطابور 0 بنفس مسار ملفي worker والرموز غير المتصلة. يبدأ مع أول draw متوازي؛ القيمة PIPELINED_DRAWS=0 بلا عينات. انتظار Enqueue لا يثبت خمول committer. افصل التتبع عن FPS، كما توضح كلفة Hi-Fi RUSH.",
   "pt": "Windows APS5_SAMPLE_COMMITTER=<file> amostra o committer da fila 0 com dois ficheiros e símbolos offline como no worker. Começa no primeiro draw em pipeline; PIPELINED_DRAWS=0 não produz amostras. Esperar em Enqueue não prova inatividade. Separe perfil de FPS sem trace, incluindo custo observado em Hi-Fi RUSH.",
   "de": "Windows APS5_SAMPLE_COMMITTER=<file> sampelt Queue-0-Committer wie Worker mit zwei Dateien und Offline-Symbolen. Beginn beim ersten Pipeline-Draw; PIPELINED_DRAWS=0 ohne Samples. Warten in Enqueue beweist keinen inaktiven Committer. Profile von ungetraceten FPS trennen; Hi-Fi RUSH zeigt Tracekosten.",
   "fr": "Windows APS5_SAMPLE_COMMITTER=<file> échantillonne le committer de queue 0 comme le worker, deux fichiers et symboles hors ligne. Début au premier draw en pipeline ; PIPELINED_DRAWS=0 sans échantillons. Attendre dans Enqueue ne prouve pas l’inactivité. Séparez profils et FPS sans trace, dont le surcoût Hi-Fi RUSH.",
   "es": "Windows APS5_SAMPLE_COMMITTER=<file> muestrea committer de cola 0 como worker, dos archivos y símbolos offline. Empieza con primer draw en pipeline; PIPELINED_DRAWS=0 sin muestras. Esperar en Enqueue no prueba inactividad. Separa perfiles y FPS sin trace, incluido coste observado en Hi-Fi RUSH."
  }
 ],
 "links": [
  {
   "label": "Upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/7202f120d5b641ce27fcc9bae6166202c52a621d/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/language-fonts"].push({
 "id": "playroom-linux-font-control",
 "title": {
  "en": "Linux font control: ASTRO’s PLAYROOM",
  "zh": "Linux字体对照：ASTRO’s PLAYROOM",
  "ar": "مقارنة خطوط Linux: ASTRO’s PLAYROOM",
  "pt": "Fontes Linux: ASTRO’s PLAYROOM",
  "de": "Linux-Fontvergleich: ASTRO’s PLAYROOM",
  "fr": "Polices Linux : ASTRO’s PLAYROOM",
  "es": "Fuentes Linux: ASTRO’s PLAYROOM"
 },
 "body": [
  {
   "en": "Same build without fonts asserts after about 28s; Noto substitutes reach the title screen for 240s, window median about 20 FPS with dips to 13–16. No input or gameplay. Local CMake LTO toggle was OFF, with no source changes or -flto; Windows was not tested.",
   "zh": "同构建缺字体约28秒断言；Noto替代字体后标题运行240秒，窗口中位约20FPS、低点13–16，无输入或游玩。仅本地CMake LTO开关且设为OFF，无源码修改／-flto；Windows未测。",
   "ar": "البناء نفسه يفشل دون خطوط بعد نحو 28ث؛ خطوط Noto تصل إلى العنوان 240ث بوسيط عداد نحو 20 وانخفاض 13–16. لا إدخال أو لعب. مفتاح CMake المحلي لإعداد LTO كان OFF دون تعديل المصدر أو -flto؛ Windows غير مختبر.",
   "pt": "Sem fontes, o mesmo build falha aos 28s; Noto permite 240s no título, mediana da janela perto de 20 FPS e quedas a 13–16. Sem input/jogo. Só há um interruptor CMake LTO local, OFF e sem -flto ou alterações de fonte; Windows não testado.",
   "de": "Ohne Fonts bricht derselbe Build nach etwa 28s ab; Noto ermöglicht 240s Titelbild mit Zählermedian um 20 FPS, Dips 13–16. Keine Eingabe/Gameplay. Lokaler CMake-LTO-Schalter OFF, keine Quelländerung oder -flto; Windows ungeprüft.",
   "fr": "Sans polices, le même build échoue vers 28s ; Noto permet 240s au titre, médiane du compteur vers 20 FPS et baisses à 13–16. Sans entrée/jeu. Seul commutateur CMake LTO local, OFF, sans -flto ni changement source ; Windows non testé.",
   "es": "Sin fuentes, el mismo build falla hacia 28s; Noto permite 240s en el título, mediana del contador cerca de 20 FPS y caídas a 13–16. Sin entrada/juego. Interruptor local CMake LTO en OFF, sin -flto ni cambios fuente; Windows sin probar."
  }
 ],
 "links": [
  {
   "label": "PPSA01325 01.905.000 · Linux report",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/3232#discussioncomment-19087348"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-msys2-exception-toolchains",
 "title": {
  "en": "Later main: choose a compatible Windows exception toolchain",
  "zh": "后续main：选择兼容Windows异常工具链",
  "ar": "main اللاحق: أداة استثناءات Windows متوافقة",
  "pt": "Main posterior: toolchain Windows compatível",
  "de": "Späteres Main: kompatible Windows-Exceptions",
  "fr": "Main ultérieur : exceptions Windows compatibles",
  "es": "Main posterior: excepciones Windows compatibles"
 },
 "body": [
  {
   "en": "CMake now checks exception capabilities instead of requiring only one compiler distribution. MSYS2 UCRT64 GCC16.2.0-6 supports System-V SEH; WinLibs15.2r7 uses DWARF with -fno-asynchronous-unwind-tables. Use separate build directories and matching gcc/g++/DLLs. Scoop standalone GCC15.2 cannot build the runtime: SjLj fallback or incompatible SEH fails the required ABI handlers. Relinker-only builds are a narrower scope; a converter build does not validate game runtime.",
   "zh": "CMake现检查异常能力，不再仅限定一个发行工具链。MSYS2 UCRT64 GCC16.2.0-6支持System-V SEH，WinLibs15.2r7用DWARF及-fno-asynchronous-unwind-tables。各工具链分开构建目录，gcc／g++／DLL配套。Scoop独立GCC15.2的SjLj回退或不兼容SEH不能构建runtime所需ABI handler。仅转换器构建范围更窄，不验证游戏runtime。",
   "ar": "CMake يفحص قدرات exceptions: MSYS2 UCRT64 GCC16.2.0-6 يدعم System-V SEH، وWinLibs15.2r7 DWARF مع -fno-asynchronous-unwind-tables. افصل build dirs وطابق gcc/g++/DLL. Scoop GCC15.2 المستقل يفشل runtime بسبب SjLj/SEH غير متوافق. بناء relinker فقط لا يثبت runtime لعبة.",
   "pt": "CMake verifica exceptions: MSYS2 UCRT64 GCC16.2.0-6 suporta System-V SEH, WinLibs15.2r7 usa DWARF/-fno-asynchronous-unwind-tables. Separe diretórios e combine gcc/g++/DLLs. Scoop GCC15.2 autónomo falha runtime por SjLj/SEH incompatível. Relinker-only não valida runtime de jogo.",
   "de": "CMake prüft Exceptions: MSYS2 UCRT64 GCC16.2.0-6 mit System-V-SEH, WinLibs15.2r7 mit DWARF/-fno-asynchronous-unwind-tables. Buildordner trennen, gcc/g++/DLLs abstimmen. Scoop-Einzel-GCC15.2 scheitert an SjLj/SEH-ABI. Relinker-only bestätigt keine Spielruntime.",
   "fr": "CMake vérifie les exceptions : MSYS2 UCRT64 GCC16.2.0-6 System-V SEH, WinLibs15.2r7 DWARF/-fno-asynchronous-unwind-tables. Dossiers séparés et gcc/g++/DLLs assortis. Scoop GCC15.2 autonome échoue runtime par SjLj/SEH incompatible. Relinker-only ne valide pas la runtime jeu.",
   "es": "CMake verifica excepciones: MSYS2 UCRT64 GCC16.2.0-6 System-V SEH, WinLibs15.2r7 DWARF/-fno-asynchronous-unwind-tables. Directorios separados y gcc/g++/DLLs a juego. Scoop GCC15.2 autónomo falla runtime por SjLj/SEH incompatible. Relinker-only no valida runtime de juego."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-msys2-exception-toolchains",
 "title": {
  "en": "Later main: choose a compatible Windows exception toolchain",
  "zh": "后续main：选择兼容Windows异常工具链",
  "ar": "main اللاحق: أداة استثناءات Windows متوافقة",
  "pt": "Main posterior: toolchain Windows compatível",
  "de": "Späteres Main: kompatible Windows-Exceptions",
  "fr": "Main ultérieur : exceptions Windows compatibles",
  "es": "Main posterior: excepciones Windows compatibles"
 },
 "body": [
  {
   "en": "CMake now checks exception capabilities instead of requiring only one compiler distribution. MSYS2 UCRT64 GCC16.2.0-6 supports System-V SEH; WinLibs15.2r7 uses DWARF with -fno-asynchronous-unwind-tables. Use separate build directories and matching gcc/g++/DLLs. Scoop standalone GCC15.2 cannot build the runtime: SjLj fallback or incompatible SEH fails the required ABI handlers. Relinker-only builds are a narrower scope; a converter build does not validate game runtime.",
   "zh": "CMake现检查异常能力，不再仅限定一个发行工具链。MSYS2 UCRT64 GCC16.2.0-6支持System-V SEH，WinLibs15.2r7用DWARF及-fno-asynchronous-unwind-tables。各工具链分开构建目录，gcc／g++／DLL配套。Scoop独立GCC15.2的SjLj回退或不兼容SEH不能构建runtime所需ABI handler。仅转换器构建范围更窄，不验证游戏runtime。",
   "ar": "CMake يفحص قدرات exceptions: MSYS2 UCRT64 GCC16.2.0-6 يدعم System-V SEH، وWinLibs15.2r7 DWARF مع -fno-asynchronous-unwind-tables. افصل build dirs وطابق gcc/g++/DLL. Scoop GCC15.2 المستقل يفشل runtime بسبب SjLj/SEH غير متوافق. بناء relinker فقط لا يثبت runtime لعبة.",
   "pt": "CMake verifica exceptions: MSYS2 UCRT64 GCC16.2.0-6 suporta System-V SEH, WinLibs15.2r7 usa DWARF/-fno-asynchronous-unwind-tables. Separe diretórios e combine gcc/g++/DLLs. Scoop GCC15.2 autónomo falha runtime por SjLj/SEH incompatível. Relinker-only não valida runtime de jogo.",
   "de": "CMake prüft Exceptions: MSYS2 UCRT64 GCC16.2.0-6 mit System-V-SEH, WinLibs15.2r7 mit DWARF/-fno-asynchronous-unwind-tables. Buildordner trennen, gcc/g++/DLLs abstimmen. Scoop-Einzel-GCC15.2 scheitert an SjLj/SEH-ABI. Relinker-only bestätigt keine Spielruntime.",
   "fr": "CMake vérifie les exceptions : MSYS2 UCRT64 GCC16.2.0-6 System-V SEH, WinLibs15.2r7 DWARF/-fno-asynchronous-unwind-tables. Dossiers séparés et gcc/g++/DLLs assortis. Scoop GCC15.2 autonome échoue runtime par SjLj/SEH incompatible. Relinker-only ne valide pas la runtime jeu.",
   "es": "CMake verifica excepciones: MSYS2 UCRT64 GCC16.2.0-6 System-V SEH, WinLibs15.2r7 DWARF/-fno-asynchronous-unwind-tables. Directorios separados y gcc/g++/DLLs a juego. Scoop GCC15.2 autónomo falla runtime por SjLj/SEH incompatible. Relinker-only no valida runtime de juego."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/dev/BUILD.md"
  }
 ]
},{
 "id": "main-linux-fixed-default",
 "title": {
  "en": "Later main: Linux default image base and patch verification",
  "zh": "后续main：Linux默认基址与补丁验收",
  "ar": "main اللاحق: أساس Linux والتحقق",
  "pt": "Main posterior: base Linux e verificação",
  "de": "Späteres Main: Linux-Basis und Patchprüfung",
  "fr": "Main ultérieur : base Linux et vérification",
  "es": "Main posterior: base Linux y verificación"
 },
 "body": [
  {
   "en": "Ordinary Linux output is now ET_EXEC at0x400000 without ASLR; --linux-fixed-base selects another aligned base. Deprecated --lazy-binding keeps ET_DYN and cannot use bundled modules. A generated patch manifest records linux_base: --verify-output checks ET_EXEC offsets with that value, while ET_DYN requires no linux_base. PE/Mach-O remain refused; module entries are not verified. Do not apply this current-main behavior retrospectively to v0.1.3 or older tests.",
   "zh": "普通Linux输出现默认0x400000的ET_EXEC、无ASLR，--linux-fixed-base选其他对齐基址。弃用的--lazy-binding保持ET_DYN且不能配bundled modules。生成补丁manifest记录linux_base；--verify-output用其核验ET_EXEC偏移，ET_DYN则不能有此字段。仍拒绝PE／Mach-O且不验模块条目；不倒推到v0.1.3或旧测试。",
   "ar": "Linux العادي الآن ET_EXEC عند0x400000 بلاASLR؛ --linux-fixed-base يختار غيره. --lazy-binding المهمل يبقيET_DYN دون bundled modules. manifest يسجل linux_base للتحقق ET_EXEC، ET_DYN يجب ألا يحويه. PE/Mach-O والوحدات خارج التحقق؛ لا تعمم على v0.1.3/اختبارات قديمة.",
   "pt": "Linux normal agora ET_EXEC em0x400000 semASLR; --linux-fixed-base muda base. --lazy-binding obsoleto mantémET_DYN sem módulos. Manifest regista linux_base para verificarET_EXEC;ET_DYN não o aceita. PE/Mach-O e módulos fora; não aplique a v0.1.3/testes antigos.",
   "de": "Linux standardmäßig ET_EXEC bei0x400000 ohneASLR, andere Basis via --linux-fixed-base. Veraltetes --lazy-binding behältET_DYN ohne Module. Manifest-linux_base für ET_EXEC-Prüfung, beiET_DYN unzulässig. PE/Mach-O/Module ungeprüft; nicht auf v0.1.3/alte Tests übertragen.",
   "fr": "Linux ordinaire désormais ET_EXEC à0x400000 sansASLR ; --linux-fixed-base change la base. --lazy-binding obsolète gardeET_DYN sans modules. linux_base du manifeste vérifieET_EXEC, absent pourET_DYN. PE/Mach-O/modules exclus ; ne pas reporter sur v0.1.3/anciens essais.",
   "es": "Linux normal ahora ET_EXEC en0x400000 sinASLR; --linux-fixed-base cambia base. --lazy-binding obsoleto mantieneET_DYN sin módulos. linux_base del manifest verificaET_EXEC, ausente paraET_DYN. PE/Mach-O/módulos fuera; no aplicar a v0.1.3/pruebas antiguas."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-linux-fixed-default",
 "title": {
  "en": "Later main: Linux default image base and patch verification",
  "zh": "后续main：Linux默认基址与补丁验收",
  "ar": "main اللاحق: أساس Linux والتحقق",
  "pt": "Main posterior: base Linux e verificação",
  "de": "Späteres Main: Linux-Basis und Patchprüfung",
  "fr": "Main ultérieur : base Linux et vérification",
  "es": "Main posterior: base Linux y verificación"
 },
 "body": [
  {
   "en": "Ordinary Linux output is now ET_EXEC at0x400000 without ASLR; --linux-fixed-base selects another aligned base. Deprecated --lazy-binding keeps ET_DYN and cannot use bundled modules. A generated patch manifest records linux_base: --verify-output checks ET_EXEC offsets with that value, while ET_DYN requires no linux_base. PE/Mach-O remain refused; module entries are not verified. Do not apply this current-main behavior retrospectively to v0.1.3 or older tests.",
   "zh": "普通Linux输出现默认0x400000的ET_EXEC、无ASLR，--linux-fixed-base选其他对齐基址。弃用的--lazy-binding保持ET_DYN且不能配bundled modules。生成补丁manifest记录linux_base；--verify-output用其核验ET_EXEC偏移，ET_DYN则不能有此字段。仍拒绝PE／Mach-O且不验模块条目；不倒推到v0.1.3或旧测试。",
   "ar": "Linux العادي الآن ET_EXEC عند0x400000 بلاASLR؛ --linux-fixed-base يختار غيره. --lazy-binding المهمل يبقيET_DYN دون bundled modules. manifest يسجل linux_base للتحقق ET_EXEC، ET_DYN يجب ألا يحويه. PE/Mach-O والوحدات خارج التحقق؛ لا تعمم على v0.1.3/اختبارات قديمة.",
   "pt": "Linux normal agora ET_EXEC em0x400000 semASLR; --linux-fixed-base muda base. --lazy-binding obsoleto mantémET_DYN sem módulos. Manifest regista linux_base para verificarET_EXEC;ET_DYN não o aceita. PE/Mach-O e módulos fora; não aplique a v0.1.3/testes antigos.",
   "de": "Linux standardmäßig ET_EXEC bei0x400000 ohneASLR, andere Basis via --linux-fixed-base. Veraltetes --lazy-binding behältET_DYN ohne Module. Manifest-linux_base für ET_EXEC-Prüfung, beiET_DYN unzulässig. PE/Mach-O/Module ungeprüft; nicht auf v0.1.3/alte Tests übertragen.",
   "fr": "Linux ordinaire désormais ET_EXEC à0x400000 sansASLR ; --linux-fixed-base change la base. --lazy-binding obsolète gardeET_DYN sans modules. linux_base du manifeste vérifieET_EXEC, absent pourET_DYN. PE/Mach-O/modules exclus ; ne pas reporter sur v0.1.3/anciens essais.",
   "es": "Linux normal ahora ET_EXEC en0x400000 sinASLR; --linux-fixed-base cambia base. --lazy-binding obsoleto mantieneET_DYN sin módulos. linux_base del manifest verificaET_EXEC, ausente paraET_DYN. PE/Mach-O/módulos fuera; no aplicar a v0.1.3/pruebas antiguas."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/user/USAGE.md"
  }
 ]
},{
 "id": "main-linux-symlink-boundary",
 "title": {
  "en": "Later main: linked resource directories",
  "zh": "后续main：符号链接资源目录",
  "ar": "main اللاحق: مجلدات الموارد المرتبطة",
  "pt": "Main posterior: diretórios ligados",
  "de": "Späteres Main: verlinkte Ressourcen",
  "fr": "Main ultérieur : dossiers liés",
  "es": "Main posterior: directorios enlazados"
 },
 "body": [
  {
   "en": "Current Linux directory listing follows a symlink inside app0 to the file/directory type, so the title can walk a linked directory. Nested links inside a linked directory targeting outside app0 keep link type: for nested trees link only top-level entries, or copy/use hard links. This supersedes the older blanket no-symlink instruction only on builds carrying this change. Preserve the original title metadata and resources.",
   "zh": "当前Linux在app0内列目录时，符号链接返回目标文件／目录类型，游戏可遍历链接目录；若链接目录目标在app0外，其内部嵌套链接仍保留link类型。嵌套树仅链接顶层，或复制／硬链接。仅含此修改的构建替代旧一概禁symlink说明，保留原metadata及资源。",
   "ar": "Linux الحالي يتبع نوع هدف symlink داخلapp0 فتُجتاز المجلدات. الروابط المتداخلة داخل هدف خارجapp0 تبقى link type؛ اربط المستوى الأعلى فقط أو انسخ/استخدم hardlinks. يبدل المنع القديم فقط للبناء الجديد؛ احفظ metadata والموارد الأصلية.",
   "pt": "Linux atual segue tipo do alvo symlink dentroapp0. Links internos num alvo foraapp0 mantêm tipo link; ligue só topo ou copie/use hardlinks. Substitui proibição antiga só nos builds novos; preserve metadados/recursos.",
   "de": "Linux folgt Zieltyp von Symlinks inapp0. Innere Links in externem Ziel behalten Linktyp; nur Top-Level verlinken oder kopieren/Hardlinks. Ersetzt altes Pauschalverbot nur in passenden Builds; Originaldaten behalten.",
   "fr": "Linux suit le type cible du symlink dansapp0. Liens imbriqués d’une cible externe gardent type link ; lier seulement le haut ou copier/hardlinks. Remplace l’ancien interdit sur builds concernés seuls ; préserver données.",
   "es": "Linux sigue tipo destino symlink dentroapp0. Enlaces anidados en destino externo conservan tipo link; enlaza solo nivel superior o copia/hardlinks. Sustituye prohibición antigua solo en builds nuevos; conserva datos originales."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/input"].push({
 "id": "main-f10-overlay-binding",
 "title": {
  "en": "Documented default: F10 performance overlay",
  "zh": "文档默认键：F10性能叠层",
  "ar": "المفتاح الموثق: F10 للأداء",
  "pt": "Predefinição documentada: F10",
  "de": "Dokumentierter Standard: F10",
  "fr": "Touche documentée : F10",
  "es": "Tecla documentada: F10"
 },
 "body": [
  {
   "en": "The current default binding table explicitly lists F10 for TogglePerformanceOverlay and F12 for Screenshot. Configurations may override them. Toggle support and screenshot availability have their own release boundaries; a documentation row is not evidence of a new game-performance improvement.",
   "zh": "当前默认绑定表明确F10为TogglePerformanceOverlay、F12为Screenshot，配置可覆盖。叠层及截图各有发行版边界，新增文档行不等于游戏性能提升。",
   "ar": "الجدول الحالي يحددF10 لـTogglePerformanceOverlay وF12 لـScreenshot؛ الإعدادات قد تغيرهما. دعم كل فعل له إصدار، وسطر وثيقة لا يثبت تحسن أداء لعبة.",
   "pt": "Tabela atual listaF10 TogglePerformanceOverlay/F12 Screenshot, configuração pode mudar. Ações têm limites de versão; linha documental não prova FPS melhor.",
   "de": "Aktuelle Tabelle nenntF10 TogglePerformanceOverlay/F12 Screenshot, überschreibbar. Aktionen haben eigene Releasegrenzen; Dokumentzeile kein FPS-Gewinn.",
   "fr": "Table actuelle :F10 TogglePerformanceOverlay/F12 Screenshot, modifiables. Actions selon version ; ligne documentaire sans gain FPS prouvé.",
   "es": "Tabla actual:F10 TogglePerformanceOverlay/F12 Screenshot, configurables. Acciones según versión; línea documental no prueba mejora FPS."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/001d132f4752b21e018bda0da86e2ab3f411e7a5/docs/user/INPUT_MAPPING.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-runtime-module-not-relinked",
 "title": {
  "en": "Later main: a missing converted module is an error, not a library substitute",
  "zh": "后续main：缺少转换模块不是替换系统库的问题",
  "ar": "main اللاحق: وحدة غير محولة ليست بديلاً للمكتبة",
  "pt": "Main posterior: módulo não convertido não é substituto",
  "de": "Späteres Main: unkonvertiertes Modul ist kein Bibliotheksersatz",
  "fr": "Main ultérieur : module non converti, pas substitut",
  "es": "Main posterior: módulo no convertido no es sustituto"
 },
 "body": [
  {
   "en": "A title can load a module after startup. Current main reports “[module] dlopen: … was not relinked” once per file, returns a load error and lets the title continue; a later null fault may follow. Add that module directory with --module-dir and keep the generated guest module in app0. Original PS5 PRX files do not belong in Windows libs/. This does not prove every missing-module crash has the same cause.",
   "zh": "游戏可在启动后再载模块；当前main每文件只报一次“dlopen…was not relinked”、返回加载错误并让标题继续，后面仍可能空地址故障。用--module-dir包含相应目录，把生成guest模块保留在app0；原PS5 PRX不放Windows libs/。不把所有缺模块崩溃归为同因。",
   "ar": "قد تحمل اللعبة وحدة بعد البدء؛ main يبلغ was not relinked مرة لكل ملف ويرجع خطأ ثم يتابع، وقد يفشل لاحقاً. أدرج المجلد بـ--module-dir وضع الناتج فيapp0، لا PRX أصلي فيWindows libs. لا تعميم السبب.",
   "pt": "Um título pode carregar módulos depois do arranque; main avisa was not relinked uma vez e devolve erro, podendo falhar depois. Inclua a pasta em--module-dir, mantenha guest emapp0, não PRX original emWindows libs. Sem causa universal.",
   "de": "Titel lädt Module später: Main meldet was not relinked einmal jeDatei und gibt Fehler zurück, späterer Nullfehler möglich. Ordner mit--module-dir konvertieren, Guestmodul inapp0; keinePS5-PRX inWindows libs. Kein allgemeinerUrsachenbeleg.",
   "fr": "Un titre charge aussi après démarrage : main signale was not relinked une fois/fichier, rend erreur puis continue, parfois faute null ensuite. Ajoutez dossier par--module-dir et guest dansapp0, pasPRX original enWindows libs. Cause non universelle.",
   "es": "El título puede cargar módulos después: main avisa was not relinked una vez/archivo, devuelve error y sigue, pudiendo fallar luego. Incluye carpeta con--module-dir yguest enapp0, noPRX original enWindows libs. Sin causa universal."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-self-padding-limit",
 "title": {
  "en": "Later main: unwrap padding limit",
  "zh": "后续main：SELF解包padding上限",
  "ar": "main اللاحق: حد padding SELF",
  "pt": "Main posterior: limite padding SELF",
  "de": "Späteres Main: SELF-Paddinggrenze",
  "fr": "Main ultérieur : limite padding SELF",
  "es": "Main posterior: límite padding SELF"
 },
 "body": [
  {
   "en": "The SELF unwrapper refuses more than64MiB total alignment padding before allocating output. This counts padding across file-backed and empty segments, not their data bytes. Refusal preserves input and an existing output. It does not decrypt encrypted content, and it is a current-main boundary rather than a new v0.1.3 release.",
   "zh": "SELF unwrapper在分配输出前拒绝总对齐padding超过64MiB；统计有文件数据及空segment之间的padding，不是segment数据量。拒绝保留输入与已有输出，仍不解密内容；这是当前main边界，不是v0.1.3新发行。",
   "ar": "يرفض unwrapper أكثر من64MiB padding إجمالي قبل التخصيص، عبر segments الفارغة والمخزنة لا بياناتها. يحفظ المدخل والمخرج الموجود، لا يفك تشفيراً، تغييرmain لا إصدارv0.1.3.",
   "pt": "Unwrapper recusa padding total>64MiB antes de alocar, incluindo segmentos vazios/ficheiro, não bytes de dados. Preserva entrada/saída existente, não desencripta; main, não nova releasev0.1.3.",
   "de": "Unwrapper verweigert>64MiB Gesamtpadding vorAllokation, einschließlich leerer/dateibasierterSegmente, keineDatenbytes. Ein-/vorhandeneAusgabe bleiben; keineEntschlüsselung, Main keinv0.1.3-Release.",
   "fr": "Unwrapper refuse>64MiB padding total avant allocation, segments vides/fichier, pas données. Préserve entrée/sortie existante, sansdécryptage ; main, pas nouveauv0.1.3.",
   "es": "Unwrapper rechaza>64MiB padding total antes de asignar, segmentos vacíos/archivo, no datos. Conserva entrada/salida existente, sin descifrar; main, no nuevov0.1.3."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-runtime-module-not-relinked",
 "title": {
  "en": "Later main: a missing converted module is an error, not a library substitute",
  "zh": "后续main：缺少转换模块不是替换系统库的问题",
  "ar": "main اللاحق: وحدة غير محولة ليست بديلاً للمكتبة",
  "pt": "Main posterior: módulo não convertido não é substituto",
  "de": "Späteres Main: unkonvertiertes Modul ist kein Bibliotheksersatz",
  "fr": "Main ultérieur : module non converti, pas substitut",
  "es": "Main posterior: módulo no convertido no es sustituto"
 },
 "body": [
  {
   "en": "A title can load a module after startup. Current main reports “[module] dlopen: … was not relinked” once per file, returns a load error and lets the title continue; a later null fault may follow. Add that module directory with --module-dir and keep the generated guest module in app0. Original PS5 PRX files do not belong in Windows libs/. This does not prove every missing-module crash has the same cause.",
   "zh": "游戏可在启动后再载模块；当前main每文件只报一次“dlopen…was not relinked”、返回加载错误并让标题继续，后面仍可能空地址故障。用--module-dir包含相应目录，把生成guest模块保留在app0；原PS5 PRX不放Windows libs/。不把所有缺模块崩溃归为同因。",
   "ar": "قد تحمل اللعبة وحدة بعد البدء؛ main يبلغ was not relinked مرة لكل ملف ويرجع خطأ ثم يتابع، وقد يفشل لاحقاً. أدرج المجلد بـ--module-dir وضع الناتج فيapp0، لا PRX أصلي فيWindows libs. لا تعميم السبب.",
   "pt": "Um título pode carregar módulos depois do arranque; main avisa was not relinked uma vez e devolve erro, podendo falhar depois. Inclua a pasta em--module-dir, mantenha guest emapp0, não PRX original emWindows libs. Sem causa universal.",
   "de": "Titel lädt Module später: Main meldet was not relinked einmal jeDatei und gibt Fehler zurück, späterer Nullfehler möglich. Ordner mit--module-dir konvertieren, Guestmodul inapp0; keinePS5-PRX inWindows libs. Kein allgemeinerUrsachenbeleg.",
   "fr": "Un titre charge aussi après démarrage : main signale was not relinked une fois/fichier, rend erreur puis continue, parfois faute null ensuite. Ajoutez dossier par--module-dir et guest dansapp0, pasPRX original enWindows libs. Cause non universelle.",
   "es": "El título puede cargar módulos después: main avisa was not relinked una vez/archivo, devuelve error y sigue, pudiendo fallar luego. Incluye carpeta con--module-dir yguest enapp0, noPRX original enWindows libs. Sin causa universal."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-self-padding-limit",
 "title": {
  "en": "Later main: unwrap padding limit",
  "zh": "后续main：SELF解包padding上限",
  "ar": "main اللاحق: حد padding SELF",
  "pt": "Main posterior: limite padding SELF",
  "de": "Späteres Main: SELF-Paddinggrenze",
  "fr": "Main ultérieur : limite padding SELF",
  "es": "Main posterior: límite padding SELF"
 },
 "body": [
  {
   "en": "The SELF unwrapper refuses more than64MiB total alignment padding before allocating output. This counts padding across file-backed and empty segments, not their data bytes. Refusal preserves input and an existing output. It does not decrypt encrypted content, and it is a current-main boundary rather than a new v0.1.3 release.",
   "zh": "SELF unwrapper在分配输出前拒绝总对齐padding超过64MiB；统计有文件数据及空segment之间的padding，不是segment数据量。拒绝保留输入与已有输出，仍不解密内容；这是当前main边界，不是v0.1.3新发行。",
   "ar": "يرفض unwrapper أكثر من64MiB padding إجمالي قبل التخصيص، عبر segments الفارغة والمخزنة لا بياناتها. يحفظ المدخل والمخرج الموجود، لا يفك تشفيراً، تغييرmain لا إصدارv0.1.3.",
   "pt": "Unwrapper recusa padding total>64MiB antes de alocar, incluindo segmentos vazios/ficheiro, não bytes de dados. Preserva entrada/saída existente, não desencripta; main, não nova releasev0.1.3.",
   "de": "Unwrapper verweigert>64MiB Gesamtpadding vorAllokation, einschließlich leerer/dateibasierterSegmente, keineDatenbytes. Ein-/vorhandeneAusgabe bleiben; keineEntschlüsselung, Main keinv0.1.3-Release.",
   "fr": "Unwrapper refuse>64MiB padding total avant allocation, segments vides/fichier, pas données. Préserve entrée/sortie existante, sansdécryptage ; main, pas nouveauv0.1.3.",
   "es": "Unwrapper rechaza>64MiB padding total antes de asignar, segmentos vacíos/archivo, no datos. Conserva entrada/salida existente, sin descifrar; main, no nuevov0.1.3."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-self-padding-limit",
 "title": {
  "en": "Later main: unwrap padding limit",
  "zh": "后续main：SELF解包padding上限",
  "ar": "main اللاحق: حد padding SELF",
  "pt": "Main posterior: limite padding SELF",
  "de": "Späteres Main: SELF-Paddinggrenze",
  "fr": "Main ultérieur : limite padding SELF",
  "es": "Main posterior: límite padding SELF"
 },
 "body": [
  {
   "en": "The SELF unwrapper refuses more than64MiB total alignment padding before allocating output. This counts padding across file-backed and empty segments, not their data bytes. Refusal preserves input and an existing output. It does not decrypt encrypted content, and it is a current-main boundary rather than a new v0.1.3 release.",
   "zh": "SELF unwrapper在分配输出前拒绝总对齐padding超过64MiB；统计有文件数据及空segment之间的padding，不是segment数据量。拒绝保留输入与已有输出，仍不解密内容；这是当前main边界，不是v0.1.3新发行。",
   "ar": "يرفض unwrapper أكثر من64MiB padding إجمالي قبل التخصيص، عبر segments الفارغة والمخزنة لا بياناتها. يحفظ المدخل والمخرج الموجود، لا يفك تشفيراً، تغييرmain لا إصدارv0.1.3.",
   "pt": "Unwrapper recusa padding total>64MiB antes de alocar, incluindo segmentos vazios/ficheiro, não bytes de dados. Preserva entrada/saída existente, não desencripta; main, não nova releasev0.1.3.",
   "de": "Unwrapper verweigert>64MiB Gesamtpadding vorAllokation, einschließlich leerer/dateibasierterSegmente, keineDatenbytes. Ein-/vorhandeneAusgabe bleiben; keineEntschlüsselung, Main keinv0.1.3-Release.",
   "fr": "Unwrapper refuse>64MiB padding total avant allocation, segments vides/fichier, pas données. Préserve entrée/sortie existante, sansdécryptage ; main, pas nouveauv0.1.3.",
   "es": "Unwrapper rechaza>64MiB padding total antes de asignar, segmentos vacíos/archivo, no datos. Conserva entrada/salida existente, sin descifrar; main, no nuevov0.1.3."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-draw-pipeline-boundaries",
 "title": {
  "en": "Later main: opt-in draw pipeline and measurement",
  "zh": "后续main：可选draw pipeline及测量边界",
  "ar": "main اللاحق: draw pipeline اختياري والقياس",
  "pt": "Main posterior: draw pipeline opcional e medição",
  "de": "Späteres Main: optionale Drawpipeline und Messung",
  "fr": "Main ultérieur : draw pipeline optionnel et mesure",
  "es": "Main posterior: draw pipeline opcional y medición"
 },
 "body": [
  {
   "en": "APS5_DRAW_PIPELINE=1 is off by default and intended with PIPELINED_DRAWS=32 and PIPELINE_DISPATCH=1. It hands work to a finisher and reuses validity proofs. VERIFY_DRAW_PIPELINE samples full checks at a speed cost; nonzero epoch-proofs differences are bugs. PROFILE_DRAW=1 instead finishes draws on the reading thread, so that run cannot measure the handoff. PIPELINE_STATS reports finisher counters; value1 adds costly Vulkan statistics. No universal FPS gain is established.",
   "zh": "APS5_DRAW_PIPELINE=1默认关闭，配PIPELINED_DRAWS=32与PIPELINE_DISPATCH=1，把工作交给finisher并复用有效性证明。VERIFY_DRAW_PIPELINE以速度代价采样全检查，epoch-proofs非零差异即bug。PROFILE_DRAW=1却在读取线程完成draw，因此不能测handoff；PIPELINE_STATS输出计数，值1另开有成本的Vulkan统计。无通用FPS收益结论。",
   "ar": "DRAW_PIPELINE=1 افتراضيoff معPIPELINED_DRAWS=32/PIPELINE_DISPATCH=1؛ finisher وإعادة proofs. VERIFY يفحص عينات بكلفة، فروق epoch-proofs خطأ. PROFILE_DRAW ينهي علىreading-thread فلا يقيسhandoff. STATS=1 يزيد كلفةVulkan؛ لاFPS عام.",
   "pt": "DRAW_PIPELINE=1 off por defeito comPIPELINED_DRAWS=32/PIPELINE_DISPATCH=1; finisher/provas reutilizadas. VERIFY amostra com custo, diferenças epoch-proofs são bugs. PROFILE_DRAW termina na thread leitora, não medehandoff. STATS=1 custaVulkan; sem ganho geral.",
   "de": "DRAW_PIPELINE=1 standardmäßig aus, mitPIPELINED_DRAWS=32/PIPELINE_DISPATCH=1; Finisher/Proofreuse. VERIFY prüft stichprobenartig mitKosten, epoch-proofs-Differenzen Fehler. PROFILE_DRAW beendet imLesethread, misst keinHandoff. STATS=1 kostetVulkan; kein allgemeinerFPS-Gewinn.",
   "fr": "DRAW_PIPELINE=1 désactivé avecPIPELINED_DRAWS=32/PIPELINE_DISPATCH=1 ; finisher/proofs réutilisés. VERIFY échantillonne aveccoût, différences epoch-proofs bugs. PROFILE_DRAW finit surthread lecteur, ne mesure pashandoff. STATS=1 coûteVulkan ; pas gain général.",
   "es": "DRAW_PIPELINE=1 apagado conPIPELINED_DRAWS=32/PIPELINE_DISPATCH=1; finisher/proofs reutilizados. VERIFY muestrea concoste, diferencias epoch-proofs sonbugs. PROFILE_DRAW acaba enthread lector, no midehandoff. STATS=1 cuestaVulkan; sin ganancia general."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-amd-checkpoint-fallback",
 "title": {
  "en": "Later main: AMD dispatch markers for device-loss reports",
  "zh": "后续main：AMD设备丢失的dispatch标记",
  "ar": "main اللاحق: علامات AMD لتقارير device loss",
  "pt": "Main posterior: marcadores AMD em device loss",
  "de": "Späteres Main: AMD-Marker bei Geräteverlust",
  "fr": "Main ultérieur : marqueurs AMD et perte du périphérique",
  "es": "Main posterior: marcadores AMD ante device loss"
 },
 "body": [
  {
   "en": "APS5_GPU_CHECKPOINTS=1 remains off by default. Without NV diagnostic checkpoints, supported AMD devices can use VK_AMD_buffer_marker to record dispatch reached/finished markers, naming the last programs and up to eight between them. Unsupported devices ignore it. A last marker narrows a hang investigation, not proof that the named shader caused it; keep diagnostics separate from unprofiled speed.",
   "zh": "APS5_GPU_CHECKPOINTS=1仍默认关闭；没有NV诊断checkpoint时，支持的AMD设备可用VK_AMD_buffer_marker记录dispatch到达／完成、最后program及中间最多八个。不支持设备忽略。最后标记仅缩小hang排查，不证明该shader致因，诊断与无剖析速度分开。",
   "ar": "GPU_CHECKPOINTS=1 off؛ بدونNV قد يستخدمAMD buffer_marker للوصول/الانتهاء وآخرprogram وحتى8بينهما. غير المدعوم يتجاهل. آخرmarker دليل بحث لا سبب مثبت، افصل السرعة.",
   "pt": "GPU_CHECKPOINTS=1 off; semNV, AMD suportado usa buffer_marker para reached/finished e até8programs. Outros ignoram. Último marker não prova causa; separe diagnóstico/velocidade.",
   "de": "GPU_CHECKPOINTS=1 aus; ohneNV AMD-buffer_marker für erreicht/fertig/letzte und bis8Programme. Unsupported ignoriert. LetzterMarker keinUrsachenbeweis; Diagnose vonTempo trennen.",
   "fr": "GPU_CHECKPOINTS=1 off ; sansNV, AMD buffer_marker pour atteint/fini/derniers etjusqu’à8programmes. Autres ignorent. Derniermarker pascause prouvée ; séparezvitesse.",
   "es": "GPU_CHECKPOINTS=1 off; sinNV, AMD buffer_marker para alcanzado/finalizado/últimos yhasta8programas. Otros ignoran. Últimomarker noprueba causa; separavelocidad."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-bundled-ogg-vorbis",
 "title": {
  "en": "Later main: system dependencies still need submodules",
  "zh": "后续main：系统依赖模式仍需子模块",
  "ar": "main اللاحق: تبعيات النظام لا تلغي submodules",
  "pt": "Main posterior: dependências do sistema ainda precisam submódulos",
  "de": "Späteres Main: Systemabhängigkeiten brauchen weiter Submodule",
  "fr": "Main ultérieur : dépendances système et sous-modules",
  "es": "Main posterior: dependencias sistema aún necesitan submódulos"
 },
 "body": [
  {
   "en": "ANYPS5_USE_SYSTEM_DEPS=ON still keeps FFmpeg, JPEG, stb, VMA, LibAtrac9, ogg and vorbis bundled: initialize the pinned submodules. The system SDL2 must supply HIDAPI, and configure errors do not silently fall back. This is a source-build rule, not a new game hardware requirement.",
   "zh": "ANYPS5_USE_SYSTEM_DEPS=ON仍把FFmpeg、JPEG、stb、VMA、LibAtrac9、ogg及vorbis作为bundled，需初始化固定子模块。系统SDL2须有HIDAPI，configure错误不会静默回退；这是源码规则，非游戏硬件新要求。",
   "ar": "SYSTEM_DEPS=ON يبقي FFmpeg/JPEG/stb/VMA/LibAtrac9/ogg/vorbis bundled، فعّل submodules المحددة. SDL2 النظام يحتاجHIDAPI ولا fallback صامت. قاعدة بناء لا عتاد لعبة.",
   "pt": "SYSTEM_DEPS=ON mantém FFmpeg/JPEG/stb/VMA/LibAtrac9/ogg/vorbis bundled: inicialize submódulos. SDL2 precisaHIDAPI, semfallback silencioso. Regra build, não hardware jogo.",
   "de": "SYSTEM_DEPS=ON behältFFmpeg/JPEG/stb/VMA/LibAtrac9/ogg/vorbis bundled: Submodule initialisieren. SystemSDL2 brauchtHIDAPI, kein stillerFallback. Buildregel keinSpielhardwarebedarf.",
   "fr": "SYSTEM_DEPS=ON gardeFFmpeg/JPEG/stb/VMA/LibAtrac9/ogg/vorbis bundled : initialisez sous-modules. SDL2 exigeHIDAPI, pasfallback silencieux. Règle build, pasmatérieljeu.",
   "es": "SYSTEM_DEPS=ON mantieneFFmpeg/JPEG/stb/VMA/LibAtrac9/ogg/vorbis bundled: inicializa submódulos. SDL2 requiereHIDAPI, sinfallback silencioso. Regla build, nohardwarejuego."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/input"].push({
 "id": "main-pad-button-combinations",
 "title": {
  "en": "Later main: simultaneous buttons in file input",
  "zh": "后续main：文件输入的组合按键",
  "ar": "main اللاحق: أزرار متزامنة بملف الإدخال",
  "pt": "Main posterior: botões simultâneos no ficheiro",
  "de": "Späteres Main: gleichzeitige Tasten per Datei",
  "fr": "Main ultérieur : boutons simultanés par fichier",
  "es": "Main posterior: botones simultáneos por archivo"
 },
 "body": [
  {
   "en": "pad_input.py accepts names joined by +, such as l1+r1, as one simultaneous press. release cannot be combined. Keep the existing release observation between commands: rapid file writes replace the previous command, and scripted input does not establish physical-controller, touch or rumble coverage.",
   "zh": "pad_input.py接受以+连接的按钮名（如l1+r1）同时按下，release不能组合；仍需等游戏观察到释放，快速写文件会替换前一命令。脚本输入不证明实体手柄／触摸／震动已验证。",
   "ar": "pad_input.py يقبل l1+r1 كضغط واحد؛ release لا يدمج. انتظر رصد release، فالكتابة السريعة تستبدل السابق. script لا يثبت يد فعلية/لمس/rumble.",
   "pt": "pad_input.py aceita l1+r1 simultâneo; release não combina. Espere release observado; escritas rápidas substituem comando. Script não valida pad físico/toque/rumble.",
   "de": "pad_input.py akzeptiert l1+r1 gleichzeitig; release nicht kombinierbar. BeobachtetesLoslassen abwarten, schnelleWrites ersetzenBefehl. Skript keinPad-/Touch-/Rumblebeleg.",
   "fr": "pad_input.py accepte l1+r1 simultané ; release non combinable. Attendez release observé, écritures rapides remplacent commande. Script ne valide pasmanette/toucher/rumble.",
   "es": "pad_input.py acepta l1+r1 simultáneo; release no combina. Espera release observado; escrituras rápidas reemplazan comando. Script no valida padfísico/táctil/rumble."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/input"].push({
 "id": "main-four-controller-ports",
 "title": {
  "en": "Later main: four controller slots",
  "zh": "后续main：四个手柄端口",
  "ar": "main اللاحق: أربع خانات يد",
  "pt": "Main posterior: quatro comandos",
  "de": "Späteres Main: vier Controllerplätze",
  "fr": "Main ultérieur : quatre manettes",
  "es": "Main posterior: cuatro mandos"
 },
 "body": [
  {
   "en": "Merged #7881 assigns the first SDL controller to Player1 with keyboard/mouse, then Players2–4, with dynamic connection and matching user-service IDs. The remote-control port remains disconnected, not an alias of Player1. Per-title local multiplayer and physical DualSense features still require real tests; the separate ImGui configuration editor remains an open proposal.",
   "zh": "已合#7881按连接顺序分配SDL手柄给玩家1至4；玩家1合成键鼠输入，支持动态连接与对应user-service编号。remote-control端口保持断开，不冒充玩家1；每款本地多人及实体DualSense功能仍需实测，独立ImGui配置编辑器仍是提案。",
   "ar": "#7881 المدمج يوزع أيدي SDL على1–4، واللوحة/الفأرة مع1، مع اتصال ديناميكي ومعرفات مستخدم. المنفذ البعيد منفصل؛ لعب متعدد وميزات DualSense تحتاج اختباراً، ومحرر ImGui ما زال مقترحاً.",
   "pt": "O #7881 integrado atribui comandos SDL aos jogadores1–4, teclado/rato ao1, com ligação dinâmica e IDs correspondentes. Porta remota fica desligada; multiplayer/DualSense requerem testes, editor ImGui ainda proposto.",
   "de": "Gemergtes #7881 weist SDL-Controller1–4 zu, Tastatur/Maus zu1, mit Hotplug und Nutzer-IDs. Remoteport bleibt getrennt; Titel-Multiplayer/DualSense real prüfen, ImGui-Editor weiterhin Vorschlag.",
   "fr": "#7881 fusionné affecte SDL aux joueurs1–4, clavier/souris au1, avec connexion dynamique/IDs correspondants. Port distant déconnecté ; multijoueur/DualSense à tester, éditeur ImGui encore proposé.",
   "es": "#7881 fusionado asigna SDL a jugadores1–4, teclado/ratón al1, con conexión dinámica/IDs. Puerto remoto desconectado; multijugador/DualSense requieren pruebas, editor ImGui aún propuesto."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/INPUT_MAPPING.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-deferred-extra-modules",
 "title": {
  "en": "Later main: map a module before starting it",
  "zh": "后续main：映射模块与执行初始化分开",
  "ar": "main اللاحق: ربط الوحدة وبدؤها منفصلان",
  "pt": "Main posterior: mapear e iniciar módulos",
  "de": "Späteres Main: Module abbilden und starten",
  "fr": "Main ultérieur : mapper puis initialiser",
  "es": "Main posterior: mapear e iniciar módulos"
 },
 "body": [
  {
   "en": "Convert Unity’s extra directories with --module-dir Media/Modules --module-dir Media/Plugins, retaining originals and each printed Guest module output. Later Linux main maps needed modules at startup but starts extra-directory modules only on explicit load, with the title’s arguments. Windows/macOS initialization rules differ. Lost in Play and Coffee Talk provide bounded setup follow-ups, not a universal null-call fix; keep matching relinker/runtime builds.",
   "zh": "Unity额外目录使用--module-dir Media/Modules --module-dir Media/Plugins，保留原文件及打印出的Guest module输出。后续Linux main启动时映射需要的模块，但额外目录模块仅显式加载时带游戏参数初始化；Windows／macOS规则不同。Lost in Play与Coffee Talk仅为有边界设置跟进，不是所有空调用的修复，转换器与运行库须配套。",
   "ar": "حوّل مجلدي Unity الإضافيين مع --module-dir واحتفظ بالأصل وGuest module. Linux الأحدث يربط المطلوب عند البدء ويهيئ الإضافي عند تحميل صريح بوسائط اللعبة؛ Windows/macOS مختلفان. تقريران محدودان لا إصلاح عام لـnull، وطابق الأدوات.",
   "pt": "Converta pastas Unity Media/Modules e Media/Plugins com --module-dir, mantendo originais/Guest module. Linux posterior mapeia módulos no início, inicializa extras só na carga explícita; Windows/macOS diferem. Relatos Coffee/Lost não são fix null universal; use builds correspondentes.",
   "de": "Unity-Zusatzordner Media/Modules und Media/Plugins mit --module-dir konvertieren, Originale/Guest module behalten. Späteres Linux mappt benötigte Module beim Start, initialisiert Extras erst beim expliziten Laden; Windows/macOS anders. Coffee/Lost keine universelle Null-Fehlerbehebung, passende Builds verwenden.",
   "fr": "Convertissez Media/Modules et Media/Plugins avec --module-dir, gardez originaux/Guest module. Linux ultérieur mappe au départ mais initialise les extras au chargement explicite ; Windows/macOS diffèrent. Coffee/Lost ne prouvent pas un fix null universel, appariez les builds.",
   "es": "Convierte Media/Modules y Media/Plugins con --module-dir, conserva originales/Guest module. Linux posterior mapea al inicio e inicializa extras al cargar explícitamente; Windows/macOS difieren. Coffee/Lost no son fix null universal, usa builds compatibles."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-local-patch-advisor",
 "title": {
  "en": "Later main: a local patch advisor",
  "zh": "后续main：本地补丁建议工具",
  "ar": "main اللاحق: مساعد patches محلي",
  "pt": "Main posterior: sugestões de patches locais",
  "de": "Späteres Main: lokaler Patchberater",
  "fr": "Main ultérieur : conseil de patches locaux",
  "es": "Main posterior: asesor de parches locales"
 },
 "body": [
  {
   "en": "suggest_patches.py requires Python3.11+, an explicit param.json, local catalog and relinker. It matches title/version and target-file hashes, then invokes --verify-patches; it never downloads or applies a patch. Multiple valid entries yield no recommendation. Hashes identify bytes, not trust or playability. Keep catalog files outside the input directory to avoid automatic patch discovery, and repeat the same module/additional-executable options during conversion.",
   "zh": "suggest_patches.py需Python3.11+、明确param.json、本地catalog及转换器；匹配游戏／版本／目标哈希再调用--verify-patches，不下载或应用补丁。多个有效项不推荐；哈希识别字节而非可信度或可玩性。catalog放输入目录外避免自动发现，转换时沿用相同模块及额外程序选项。",
   "ar": "يتطلب suggest_patches.py Python3.11+ وparam.json وcatalog/relinker محليين. يطابق النسخة/الهاش ويشغل --verify-patches دون تنزيل/تطبيق. تعدد النتائج بلا توصية؛ الهاش ليس ثقة/لعباً. أبق catalog خارج الإدخال وطابق خيارات الوحدات.",
   "pt": "suggest_patches.py exige Python3.11+, param.json, catálogo/relinker locais. Confere versão/hashes e --verify-patches, sem transferir/aplicar. Várias entradas válidas: sem recomendação. Hash não prova confiança/jogo; catálogo fora da pasta de entrada, mesmas opções na conversão.",
   "de": "suggest_patches.py braucht Python3.11+, param.json, lokalen Katalog/Relinker. Prüft Version/Hashes/--verify-patches, lädt/wendet nichts an. Mehrere Treffer: keine Empfehlung. Hash kein Vertrauens-/Spielbeleg; Katalog außerhalb Eingabeordner, gleiche Moduloptionen verwenden.",
   "fr": "suggest_patches.py exige Python3.11+, param.json, catalogue/relinker locaux. Vérifie version/hashes/--verify-patches sans télécharger/appliquer. Plusieurs résultats : pas de conseil. Hash pas confiance/jouabilité ; catalogue hors entrée, mêmes options de modules.",
   "es": "suggest_patches.py requiere Python3.11+, param.json, catálogo/relinker locales. Verifica versión/hashes/--verify-patches sin descargar/aplicar. Varios válidos: sin recomendación. Hash no prueba confianza/juego; catálogo fuera de entrada, mismas opciones."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-windows-red-zone-option",
 "title": {
  "en": "Later main: explicit Windows red-zone conversion",
  "zh": "后续main：显式Windows red-zone转换",
  "ar": "main اللاحق: تحويل red-zone صريح",
  "pt": "Main posterior: red-zone explícita no Windows",
  "de": "Späteres Main: explizite Windows-Red-Zone",
  "fr": "Main ultérieur : red-zone Windows explicite",
  "es": "Main posterior: red-zone explícita Windows"
 },
 "body": [
  {
   "en": "--frame-red-zone is Windows-only and opt-in. It gives supported leaf functions stack frames so host-delivered exceptions do not overwrite live System-V red-zone values. Bounds require .eh_frame; absent metadata fails, unsupported leaves are reported, and patches overlapping framed sites are refused. It is not a general crash fix, Linux flag or proof that an older patched GTA run now works unchanged.",
   "zh": "--frame-red-zone仅Windows且显式开启，为支持的leaf函数建立栈帧，防主机异常覆盖System-V red-zone存活值；边界需.eh_frame，缺失会失败，未支持函数有报告，与改写站点重叠的补丁会拒绝。非通用崩溃修复、Linux选项或旧GTA补丁结果已可原版复现的证明。",
   "ar": "--frame-red-zone اختياري لويندوز، يؤطر leaf مدعومة لحماية قيم System-V من الاستثناءات. يحتاج .eh_frame ويفشل بدونه، يبلغ المتروك ويرفض patch متداخلاً. ليس إصلاحاً عاماً أو علم Linux أو إثبات GTA نظيف.",
   "pt": "--frame-red-zone é opt-in Windows, enquadra folhas suportadas contra exceções. Exige .eh_frame, falha sem ele, relata omissões e recusa patches sobrepostos. Não é fix geral, opção Linux ou prova GTA sem patches.",
   "de": "--frame-red-zone nur Windows/Opt-in, rahmt unterstützte Blattfunktionen gegen Ausnahmeüberschreiben. Braucht .eh_frame, sonst Fehler; Auslassungen gemeldet, überlappende Patches abgelehnt. Kein allgemeiner Fix/Linuxflag/Stock-GTA-Beleg.",
   "fr": "--frame-red-zone réservé Windows/opt-in protège les feuilles prises en charge contre les exceptions. Exige .eh_frame, échoue sinon, signale exclusions/refuse patches chevauchants. Pas correctif général/option Linux/preuve GTA sans patches.",
   "es": "--frame-red-zone solo Windows/opt-in protege hojas admitidas de excepciones. Exige .eh_frame, falla sin él, informa exclusiones/rechaza parches solapados. No fix general/opción Linux/prueba GTA sin parches."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-optional-mimalloc-files",
 "title": {
  "en": "Later main: confirm the allocator actually loaded",
  "zh": "后续main：确认实际加载了分配器",
  "ar": "main اللاحق: تأكد من تحميل المخصص",
  "pt": "Main posterior: confirmar o alocador",
  "de": "Späteres Main: geladenen Allocator prüfen",
  "fr": "Main ultérieur : vérifier l’allocateur chargé",
  "es": "Main posterior: confirmar el asignador"
 },
 "body": [
  {
   "en": "With APS5_MIMALLOC set, Windows loads mimalloc.dll and mimalloc-redirect.dll from matching libs/. If either is absent it silently keeps the C runtime heap; a variable alone does not prove which allocator ran. Preserve compiler/runtime pairing and measure a specific scene rather than assuming a universal FPS gain.",
   "zh": "设置APS5_MIMALLOC后Windows从配套libs/加载mimalloc.dll及mimalloc-redirect.dll；缺文件会静默沿用C运行时heap，仅设变量不能证明分配器已切换。保留工具链／运行库配套，按场景测量，不预设通用FPS提升。",
   "ar": "مع APS5_MIMALLOC يحمل Windows مكتبتين من libs؛ غيابهما يبقي CRT بصمت. المتغير لا يثبت المخصص، طابق build وقس مشهداً لا تفترض تسريعاً عاماً.",
   "pt": "APS5_MIMALLOC carrega duas DLL de libs no Windows; ausentes mantém CRT sem aviso. Variável não prova alocador, use builds correspondentes e meça cena sem ganho geral presumido.",
   "de": "APS5_MIMALLOC lädt zwei DLLs aus libs auf Windows; fehlen sie, bleibt CRT still aktiv. Variable beweist keinen Allocator; passende Builds/Szene messen, keinen allgemeinen FPS-Gewinn annehmen.",
   "fr": "APS5_MIMALLOC charge deux DLL de libs sous Windows ; absentes, CRT reste sans message. Variable ne prouve pas allocateur ; builds appariés/scène mesurée, sans gain général supposé.",
   "es": "APS5_MIMALLOC carga dos DLL de libs en Windows; ausentes conserva CRT sin aviso. Variable no prueba asignador; builds compatibles y escena medida, sin mejora general supuesta."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-deferred-extra-modules",
 "title": {
  "en": "Later main: map a module before starting it",
  "zh": "后续main：映射模块与执行初始化分开",
  "ar": "main اللاحق: ربط الوحدة وبدؤها منفصلان",
  "pt": "Main posterior: mapear e iniciar módulos",
  "de": "Späteres Main: Module abbilden und starten",
  "fr": "Main ultérieur : mapper puis initialiser",
  "es": "Main posterior: mapear e iniciar módulos"
 },
 "body": [
  {
   "en": "Convert Unity’s extra directories with --module-dir Media/Modules --module-dir Media/Plugins, retaining originals and each printed Guest module output. Later Linux main maps needed modules at startup but starts extra-directory modules only on explicit load, with the title’s arguments. Windows/macOS initialization rules differ. Lost in Play and Coffee Talk provide bounded setup follow-ups, not a universal null-call fix; keep matching relinker/runtime builds.",
   "zh": "Unity额外目录使用--module-dir Media/Modules --module-dir Media/Plugins，保留原文件及打印出的Guest module输出。后续Linux main启动时映射需要的模块，但额外目录模块仅显式加载时带游戏参数初始化；Windows／macOS规则不同。Lost in Play与Coffee Talk仅为有边界设置跟进，不是所有空调用的修复，转换器与运行库须配套。",
   "ar": "حوّل مجلدي Unity الإضافيين مع --module-dir واحتفظ بالأصل وGuest module. Linux الأحدث يربط المطلوب عند البدء ويهيئ الإضافي عند تحميل صريح بوسائط اللعبة؛ Windows/macOS مختلفان. تقريران محدودان لا إصلاح عام لـnull، وطابق الأدوات.",
   "pt": "Converta pastas Unity Media/Modules e Media/Plugins com --module-dir, mantendo originais/Guest module. Linux posterior mapeia módulos no início, inicializa extras só na carga explícita; Windows/macOS diferem. Relatos Coffee/Lost não são fix null universal; use builds correspondentes.",
   "de": "Unity-Zusatzordner Media/Modules und Media/Plugins mit --module-dir konvertieren, Originale/Guest module behalten. Späteres Linux mappt benötigte Module beim Start, initialisiert Extras erst beim expliziten Laden; Windows/macOS anders. Coffee/Lost keine universelle Null-Fehlerbehebung, passende Builds verwenden.",
   "fr": "Convertissez Media/Modules et Media/Plugins avec --module-dir, gardez originaux/Guest module. Linux ultérieur mappe au départ mais initialise les extras au chargement explicite ; Windows/macOS diffèrent. Coffee/Lost ne prouvent pas un fix null universel, appariez les builds.",
   "es": "Convierte Media/Modules y Media/Plugins con --module-dir, conserva originales/Guest module. Linux posterior mapea al inicio e inicializa extras al cargar explícitamente; Windows/macOS difieren. Coffee/Lost no son fix null universal, usa builds compatibles."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-local-patch-advisor",
 "title": {
  "en": "Later main: a local patch advisor",
  "zh": "后续main：本地补丁建议工具",
  "ar": "main اللاحق: مساعد patches محلي",
  "pt": "Main posterior: sugestões de patches locais",
  "de": "Späteres Main: lokaler Patchberater",
  "fr": "Main ultérieur : conseil de patches locaux",
  "es": "Main posterior: asesor de parches locales"
 },
 "body": [
  {
   "en": "suggest_patches.py requires Python3.11+, an explicit param.json, local catalog and relinker. It matches title/version and target-file hashes, then invokes --verify-patches; it never downloads or applies a patch. Multiple valid entries yield no recommendation. Hashes identify bytes, not trust or playability. Keep catalog files outside the input directory to avoid automatic patch discovery, and repeat the same module/additional-executable options during conversion.",
   "zh": "suggest_patches.py需Python3.11+、明确param.json、本地catalog及转换器；匹配游戏／版本／目标哈希再调用--verify-patches，不下载或应用补丁。多个有效项不推荐；哈希识别字节而非可信度或可玩性。catalog放输入目录外避免自动发现，转换时沿用相同模块及额外程序选项。",
   "ar": "يتطلب suggest_patches.py Python3.11+ وparam.json وcatalog/relinker محليين. يطابق النسخة/الهاش ويشغل --verify-patches دون تنزيل/تطبيق. تعدد النتائج بلا توصية؛ الهاش ليس ثقة/لعباً. أبق catalog خارج الإدخال وطابق خيارات الوحدات.",
   "pt": "suggest_patches.py exige Python3.11+, param.json, catálogo/relinker locais. Confere versão/hashes e --verify-patches, sem transferir/aplicar. Várias entradas válidas: sem recomendação. Hash não prova confiança/jogo; catálogo fora da pasta de entrada, mesmas opções na conversão.",
   "de": "suggest_patches.py braucht Python3.11+, param.json, lokalen Katalog/Relinker. Prüft Version/Hashes/--verify-patches, lädt/wendet nichts an. Mehrere Treffer: keine Empfehlung. Hash kein Vertrauens-/Spielbeleg; Katalog außerhalb Eingabeordner, gleiche Moduloptionen verwenden.",
   "fr": "suggest_patches.py exige Python3.11+, param.json, catalogue/relinker locaux. Vérifie version/hashes/--verify-patches sans télécharger/appliquer. Plusieurs résultats : pas de conseil. Hash pas confiance/jouabilité ; catalogue hors entrée, mêmes options de modules.",
   "es": "suggest_patches.py requiere Python3.11+, param.json, catálogo/relinker locales. Verifica versión/hashes/--verify-patches sin descargar/aplicar. Varios válidos: sin recomendación. Hash no prueba confianza/juego; catálogo fuera de entrada, mismas opciones."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-windows-build-tool-errors",
 "title": {
  "en": "Later main: distinguish build-tool failures",
  "zh": "后续main：区分构建工具故障",
  "ar": "main اللاحق: تمييز أخطاء أدوات البناء",
  "pt": "Main posterior: erros das ferramentas",
  "de": "Späteres Main: Buildwerkzeugfehler trennen",
  "fr": "Main ultérieur : erreurs des outils",
  "es": "Main posterior: distinguir errores de herramientas"
 },
 "body": [
  {
   "en": "The python.org Windows installer may provide python/py but no python3: use py -3 instead of the Store alias; other distributions differ. CTest fixes relinker test temp files under build/core/relinker/test-temp, so changing the parent shell’s TEMP does not move them. For libusb version_describe.h, check Git Bash and any overriding PowerShell Group Policy; upstream documents a Git-Bash wrapper via LIBUSB_POWERSHELL_EXECUTABLE without changing policy.",
   "zh": "python.org的Windows安装可能只有python／py而无python3，遇Store别名用py -3，其他发行不同。CTest把转换器测试临时目录固定在build/core/relinker/test-temp，改父shell TEMP无效。libusb的version_describe.h失败需核对Git Bash及PowerShell组策略；上游给出LIBUSB_POWERSHELL_EXECUTABLE指向Git-Bash包装器，无需改策略。",
   "ar": "قد يوفر Python ويندوز python/py دون python3؛ استخدم py -3 بدلاً من Store. CTest يثبت temp في build/core/relinker/test-temp فلا يغيره TEMP الأب. راجع Git Bash وسياسة PowerShell عند فشل libusb؛ wrapper موثق دون تعديل السياسة.",
   "pt": "Python.org Windows pode ter python/py sem python3: use py -3, não alias Store. CTest fixa temporários em build/core/relinker/test-temp. Para libusb confira Git Bash/Group Policy; wrapper LIBUSB_POWERSHELL_EXECUTABLE documentado sem mudar política.",
   "de": "Python.org-Windows kann python/py ohne python3 liefern: py -3 statt Storealias. CTest fixiert Temp unter build/core/relinker/test-temp. Bei libusb Git Bash/PowerShell-Gruppenrichtlinie prüfen; dokumentierter Wrapper ohne Richtlinienänderung.",
   "fr": "Python.org Windows peut fournir python/py sans python3 : utilisez py -3. CTest fixe temp sous build/core/relinker/test-temp. Pour libusb, vérifiez Git Bash/stratégie PowerShell ; wrapper documenté sans modifier la stratégie.",
   "es": "Python.org Windows puede traer python/py sin python3: usa py -3. CTest fija temp en build/core/relinker/test-temp. Para libusb comprueba Git Bash/política PowerShell; wrapper documentado sin cambiar política."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-windows-red-zone-option",
 "title": {
  "en": "Later main: explicit Windows red-zone conversion",
  "zh": "后续main：显式Windows red-zone转换",
  "ar": "main اللاحق: تحويل red-zone صريح",
  "pt": "Main posterior: red-zone explícita no Windows",
  "de": "Späteres Main: explizite Windows-Red-Zone",
  "fr": "Main ultérieur : red-zone Windows explicite",
  "es": "Main posterior: red-zone explícita Windows"
 },
 "body": [
  {
   "en": "--frame-red-zone is Windows-only and opt-in. It gives supported leaf functions stack frames so host-delivered exceptions do not overwrite live System-V red-zone values. Bounds require .eh_frame; absent metadata fails, unsupported leaves are reported, and patches overlapping framed sites are refused. It is not a general crash fix, Linux flag or proof that an older patched GTA run now works unchanged.",
   "zh": "--frame-red-zone仅Windows且显式开启，为支持的leaf函数建立栈帧，防主机异常覆盖System-V red-zone存活值；边界需.eh_frame，缺失会失败，未支持函数有报告，与改写站点重叠的补丁会拒绝。非通用崩溃修复、Linux选项或旧GTA补丁结果已可原版复现的证明。",
   "ar": "--frame-red-zone اختياري لويندوز، يؤطر leaf مدعومة لحماية قيم System-V من الاستثناءات. يحتاج .eh_frame ويفشل بدونه، يبلغ المتروك ويرفض patch متداخلاً. ليس إصلاحاً عاماً أو علم Linux أو إثبات GTA نظيف.",
   "pt": "--frame-red-zone é opt-in Windows, enquadra folhas suportadas contra exceções. Exige .eh_frame, falha sem ele, relata omissões e recusa patches sobrepostos. Não é fix geral, opção Linux ou prova GTA sem patches.",
   "de": "--frame-red-zone nur Windows/Opt-in, rahmt unterstützte Blattfunktionen gegen Ausnahmeüberschreiben. Braucht .eh_frame, sonst Fehler; Auslassungen gemeldet, überlappende Patches abgelehnt. Kein allgemeiner Fix/Linuxflag/Stock-GTA-Beleg.",
   "fr": "--frame-red-zone réservé Windows/opt-in protège les feuilles prises en charge contre les exceptions. Exige .eh_frame, échoue sinon, signale exclusions/refuse patches chevauchants. Pas correctif général/option Linux/preuve GTA sans patches.",
   "es": "--frame-red-zone solo Windows/opt-in protege hojas admitidas de excepciones. Exige .eh_frame, falla sin él, informa exclusiones/rechaza parches solapados. No fix general/opción Linux/prueba GTA sin parches."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-frame-capture-boundaries",
 "title": {
  "en": "Later main: replay captures have different evidence limits",
  "zh": "后续main：整帧重放的证据边界",
  "ar": "main اللاحق: حدود دليل إعادة الإطار",
  "pt": "Main posterior: limites da repetição de frames",
  "de": "Späteres Main: Beleggrenzen von Frame-Replays",
  "fr": "Main ultérieur : limites des relectures",
  "es": "Main posterior: límites de reproducir frames"
 },
 "body": [
  {
   "en": "APS5_FRAME_CAPTURE records calls and guest-memory snapshots, including the title image; treat capture archives as potentially containing game data, not shareable logs. The default is10frames from flip1, with a low-disk stop below4GiB free. agc_frame_replay can pace calls and release or synthesize waits; record those choices and compare actual reference pixels. Replay timing is not native gameplay FPS, and the new synthetic tests do not certify every game capture.",
   "zh": "APS5_FRAME_CAPTURE记录调用与guest内存快照，含游戏image，档案可能含游戏数据，不能当可直接分享的日志。默认flip1起10帧、磁盘不足4GiB停止；agc_frame_replay可节奏控制并释放或合成等待，须记选项、比较真实参考像素。重放耗时不等于原生游玩FPS，合成测试不保证所有游戏采集正确。",
   "ar": "يلتقط APS5_FRAME_CAPTURE نداءات وذاكرة guest بما فيها صورة البرنامج، فالأرشيف قد يحمل بيانات لعبة لا سجلاً للنشر. الافتراضي10إطارات منflip1 ويتوقف دون4GiB. replay قد يصطنع waits؛ سجل الخيارات وقارن pixels، لا تعادل توقيته بـFPS لعبة.",
   "pt": "APS5_FRAME_CAPTURE inclui chamadas/memória guest e imagem do jogo: arquivo pode conter dados, não um log para partilhar.10frames desdeflip1, para abaixo4GiB livres. Replay pode sintetizar waits; registe opções/pixels de referência, tempo não é FPS nativo.",
   "de": "APS5_FRAME_CAPTURE enthält Aufrufe/Guest-Speicher samt Spielimage: Archiv kann Spieldaten enthalten, kein frei teilbares Log.10Frames ab Flip1, Stopp unter4GiB. Replay kann Waits synthetisieren; Optionen/Referenzpixel prüfen, Zeit keine nativen Spiel-FPS.",
   "fr": "APS5_FRAME_CAPTURE contient appels/mémoire guest/image du jeu : archive potentiellement avec données, pas simple log partageable.10frames dèsflip1, arrêt sous4GiB libres. Replay peut synthétiser des waits ; notez options/pixels, durée pas FPS natif.",
   "es": "APS5_FRAME_CAPTURE incluye llamadas/memoria guest/imagen del juego: archivo puede contener datos, no simple log compartible.10frames desdeflip1, para bajo4GiB libres. Replay puede sintetizar waits; registra opciones/píxeles, tiempo no es FPS nativo."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-rosetta-xsaveopt",
 "title": {
  "en": "Later main: Rosetta instruction conversion remains explicit",
  "zh": "后续main：Rosetta指令转换仍需显式开启",
  "ar": "main اللاحق: تحويل Rosetta صريح",
  "pt": "Main posterior: Rosetta explícito",
  "de": "Späteres Main: Rosetta explizit",
  "fr": "Main ultérieur : Rosetta explicite",
  "es": "Main posterior: Rosetta explícito"
 },
 "body": [
  {
   "en": "--to-rosetta now also rewrites XSAVEOPT to XSAVE. It implies --to-intel and conflicts with --windows; --macos alone does not enable instruction lowering. Instruction-level M2 evidence is not a Mac commercial-game test, matching runtime build or official Mac release.",
   "zh": "--to-rosetta现在也把XSAVEOPT改为XSAVE；隐含--to-intel且与--windows冲突，单用--macos不启用指令lowering。M2指令级证据不是Mac商业游戏、配套运行库或官方Mac发行证明。",
   "ar": "--to-rosetta يحول XSAVEOPT إلى XSAVE ويضم --to-intel، يتعارض مع --windows؛ --macos وحده لا يحول التعليمات. دليل M2 ليس لعبة Mac أو runtime/إصداراً رسمياً.",
   "pt": "--to-rosetta também converte XSAVEOPT em XSAVE, implica --to-intel e conflita --windows; --macos só não baixa instruções. Prova M2 não é jogo/runtime/release Mac.",
   "de": "--to-rosetta wandelt auch XSAVEOPT zu XSAVE, impliziert --to-intel, widerspricht --windows; --macos allein senkt keine Instruktionen. M2-Beleg kein Mac-Spiel/Runtime/Release.",
   "fr": "--to-rosetta convertit aussi XSAVEOPT en XSAVE, implique --to-intel, incompatible --windows ; --macos seul ne traduit pas les instructions. Preuve M2 pas jeu/runtime/release Mac.",
   "es": "--to-rosetta también convierte XSAVEOPT a XSAVE, implica --to-intel y choca con --windows; --macos solo no baja instrucciones. Prueba M2 no es juego/runtime/release Mac."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-import-audit-name-mismatch",
 "title": {
  "en": "Later main: a counted implementation can still fail the import audit",
  "zh": "后续main：计为implemented也可能导入审计失败",
  "ar": "main اللاحق: تنفيذ محسوب قد يفشل تدقيق الاستيراد",
  "pt": "Main posterior: implementação pode falhar audit",
  "de": "Späteres Main: Implementierung kann Importaudit verfehlen",
  "fr": "Main ultérieur : implémentation et audit diffèrent",
  "es": "Main posterior: implementación puede fallar audit"
 },
 "body": [
  {
   "en": "For an import naming a library, import_audit now requires the literal export name. A hash-only match may still count as implemented/stub, but records symbol_mismatch and exits1; a strong mismatch is a current stop. Imports without a library retain name-to-NID fallback. Review weak bindings and exact module registries, not just the implemented count.",
   "zh": "带library的import现在需字面export名匹配；仅hash命中即使计implemented／stub，仍标symbol_mismatch并退出1，强import不匹配属当前阻碍。无library者保留name-to-NID回退；须核对weak绑定和准确模块registry，不能只看implemented计数。",
   "ar": "استيراد باسم مكتبة يحتاج اسم export حرفياً؛ تطابق hash قد يعد implemented/stub لكنه symbol_mismatch وخروج1، والقوي حاجز حالي. دون مكتبة يبقى fallback؛ راجع weak/registry لا العداد فقط.",
   "pt": "Import com biblioteca exige nome literal; match só hash pode contar implemented/stub mas marca symbol_mismatch/saída1, forte é bloqueio. Sem biblioteca mantém fallback; confira weak/registry, não só contagem.",
   "de": "Import mit Bibliothek braucht wörtlichen Exportnamen; Hash allein kann als implemented/stub zählen, aber symbol_mismatch/Exit1, starker Import blockiert. Ohne Bibliothek Fallback; Weak/Registry prüfen statt nur Zähler.",
   "fr": "Import avec bibliothèque exige nom littéral ; hash seul peut compter implemented/stub mais symbol_mismatch/sortie1, import fort bloquant. Sans bibliothèque repli conservé ; vérifiez weak/registry, pas seul compteur.",
   "es": "Import con biblioteca exige nombre literal; solo hash puede contar implemented/stub pero symbol_mismatch/salida1, fuerte bloquea. Sin biblioteca mantiene fallback; revisa weak/registry, no solo contador."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/50757b01c6d8853954da4698f74bd903e01358c4/docs/user/USAGE.md"
  }
 ]
});

for(const sections of Object.values(guideSupplements)){for(const section of sections){section.body=section.body.map(body=>body.en.includes("APS5_PIPELINE_JOURNAL_ENTRIES")&&body.en.includes("APS5_PIPELINE_STORE_ENTRIES")?{
 "en": "Later main records pipelines.journal and replays the newest4096 entries. Graphics retention starts1024 and grows to4096 for replay/reused evictions; APS5_PIPELINE_STORE_ENTRIES fixes the count when set. This is a count bound, not a memory budget. Replay threads default to half the CPU threads;0 records only. APS5_NO_PIPELINE_JOURNAL =1 disables it; MAX_MIB remains1024. Different GPU/driver resets the journal; warm cache is not a gameplay FPS guarantee. v0.1.3 keeps its original behavior.",
 "zh": "后续main将pipelines.journal最新4096条重放，图形保留从1024按重放／被逐出后复用需求增至4096；设置APS5_PIPELINE_STORE_ENTRIES则固定数量，非内存预算。重放默认半数CPU线程，0只记录；APS5_NO_PIPELINE_JOURNAL=1禁用，MAX_MIB仍1024。换GPU／驱动重置，热缓存不是游戏FPS保证，v0.1.3保留原行为。",
 "ar": "main اللاحق يعيد أحدث 4096 سجلاً؛ store يبدأ 1024 وينمو 4096 للإعادة/المعاد استخدامه. APS5_PIPELINE_STORE_ENTRIES يثبت العدد لا الذاكرة. الخيوط نصف CPU، 0 يسجل فقط؛ APS5_NO_PIPELINE_JOURNAL =1 يعطل، MAX_MIB يبقى 1024. GPU/تعريف جديد يعيد الكاش؛ ليس ضمان FPS. v0.1.3 أصلي.",
 "pt": "Main posterior repete últimos4096registos; retenção1024→4096para replay/reutilização. APS5_PIPELINE_STORE_ENTRIES fixa contagem, não memória. Threads: metadeCPU,0só regista; APS5_NO_PIPELINE_JOURNAL =1desativa, MAX_MIB1024. GPU/driverreinicia, não garanteFPS. v0.1.3mantém original.",
 "de": "Späteres main spielt neueste4096ab; Haltung1024→4096für Replay/wiederkehrende Evictions. APS5_PIPELINE_STORE_ENTRIES fixiert Anzahl, nicht Speicher. Threads: halbeCPU,0nur aufzeichnen; APS5_NO_PIPELINE_JOURNAL =1aus, MAX_MIB1024. GPU/Treiberwechsel setzt zurück, keineFPSgarantie. v0.1.3bleibt original.",
 "fr": "Main ultérieur rejoue derniers4096; stockage1024→4096pour replay/réutilisation. APS5_PIPELINE_STORE_ENTRIES fixe nombre, pas mémoire. Threads: moitiéCPU,0enregistre seul; APS5_NO_PIPELINE_JOURNAL =1désactive, MAX_MIB1024. GPU/pilote réinitialise, pas garantieFPS. v0.1.3reste original.",
 "es": "Main posterior reproduce últimos4096; retención1024→4096para replay/reutilización. APS5_PIPELINE_STORE_ENTRIES fija cantidad, no memoria. Hilos: mitadCPU,0sólo registra; APS5_NO_PIPELINE_JOURNAL =1desactiva, MAX_MIB1024. GPU/driverreinicia, no garantizaFPS. v0.1.3conserva original."
}:body);}}

guideSupplements["guides/windows"].push({
 "id": "main-windows-image-base",
 "title": {
  "en": "Later main: preferred image placement",
  "zh": "后续main：默认程序装载地址",
  "ar": "موضع الصورة في main لاحق",
  "pt": "Main posterior: base preferida",
  "de": "Späteres main: bevorzugte Adresse",
  "fr": "Main ultérieur: adresse préférée",
  "es": "Main posterior: base preferida"
 },
 "body": [
  {
   "en": "The lowest Windows ELF load page now prefers0x400000, with PE headers at0x3f0000. Ordinary output keeps relocations and can move if occupied;--windows-fixed-base removes relocations and fails if its exact aligned address is occupied. Bundled modules retain DYNAMIC_BASE. This differs from earlier0x140000000 preferred PE bases; reconvert only when testing that change, not to reinterpret old reports.",
   "zh": "Windows最低ELF装载页现首选0x400000，PE头在0x3f0000。普通输出保留重定位，地址占用可搬移；--windows-fixed-base移除重定位，指定对齐地址占用则失败。模块保留DYNAMIC_BASE。不同于旧0x140000000 PE首选基址，测试该变更才重新转换，不能改写旧报告。",
   "ar": "أدنى صفحة ELF في Windows تفضل 0x400000 والرؤوس 0x3f0000. الخرج العادي يحتفظ relocations ويتغير عند الاحتلال؛ --windows-fixed-base يزيلها ويفشل إذا شُغل العنوان المحاذى. الوحدات DYNAMIC_BASE. يختلف عن PE0x140000000 الأقدم، لا تعد تفسير تقاريره.",
   "pt": "PáginaELFWindows prefere0x400000, cabeçalhosPE0x3f0000. Normal mantém relocations, pode mover;--windows-fixed-baseretira-as e falha em endereço ocupado. MódulosDYNAMIC_BASE. Difere dePE0x140000000antigo; não reinterprete relatos antigos.",
   "de": "Windows-ELF-Seite bevorzugt0x400000, PE-Header0x3f0000. Standard behält Relokationen/kann ausweichen;--windows-fixed-baseentfernt sie, belegte Zieladresse scheitert. ModuleDYNAMIC_BASE. Anders als früherePE0x140000000; alte Berichte nicht umdeuten.",
   "fr": "PageELFWindows préfère0x400000, en-têtesPE0x3f0000. Sortie normale garde relocations/déplacement;--windows-fixed-baseles retire, adresse occupée échoue. ModulesDYNAMIC_BASE. Diffère dePE0x140000000ancien; ne réinterprétez pas anciens rapports.",
   "es": "PáginaELFWindows prefiere0x400000, cabecerasPE0x3f0000. Normal conserva relocations/puede moverse;--windows-fixed-baselas elimina, falla si ocupada. MódulosDYNAMIC_BASE. Difiere dePE0x140000000antiguo; no reinterpretar informes."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/windows"].push({
 "id": "main-converted-module-layout",
 "title": {
  "en": "Follow the generated module layout",
  "zh": "按生成布局放置转换模块",
  "ar": "اتبع ترتيب الوحدات المولد",
  "pt": "Siga a disposição gerada",
  "de": "Erzeugtes Modullayout verwenden",
  "fr": "Suivre la disposition générée",
  "es": "Sigue la disposición generada"
 },
 "body": [
  {
   "en": "Current main prints app0/<module folder>/<name>.guest.prx. Its dynamic loader explicitly chooses the converted sibling; GAME_TESTING now says keep the original beside it. Silt’s earlier2dc8e456 report removed originals to avoid its older resolver: preserve that recipe with its version. New module-parent scanning suggests --module-dir for matching unconverted modules but cannot report unreadable files. A clean scan is not proof every runtime load exists.",
   "zh": "当前main打印app0／模块目录／<name>.guest.prx，动态加载器明确选择转换副本，GAME_TESTING现要求原件留旁。Silt旧2dc8e456报告通过移走原件避开旧解析器，应保留其版本配方。新增模块父目录扫描为匹配的未转换模块提示--module-dir，但不报告不可读文件；扫描无警告不证明运行期模块齐全。",
   "ar": "main الحالي يطبع app0/<folder>/<name>.guest.prx والـ loader يختار المحول؛ GAME_TESTING يبقي الأصل بجانبه. Silt2dc8e456 أزال الأصل لحل قديم، احفظ وصفته بإصداره. فحص الأب يقترح--module-dir للمطابق غير المحول، ولا يرى غير المقروء؛ نظافته لا تثبت كل تحميل.",
   "pt": "Main imprimeapp0/<pasta>/<nome>.guest.prxe loaderescolhe convertido; GAME_TESTINGguarda original ao lado. Silt2dc8e456removeu originais pelo resolverantigo, mantenha receita/versionada. Scan do pai sugere--module-dirpara módulos, não vê ilegíveis; sem aviso não prova todos loads.",
   "de": "Main drucktapp0/<Ordner>/<Name>.guest.prx, Loader wählt konvertierte Kopie; GAME_TESTINGbehält Original daneben. Silt2dc8e456entfernte Originale wegen altem Resolver, Rezept bleibt versioniert. Parent-Scan schlägt--module-dirvor, übersieht unlesbare Dateien; kein Warnhinweis beweist keine Vollständigkeit.",
   "fr": "Main afficheapp0/<dossier>/<nom>.guest.prx, loaderchoisit converti; GAME_TESTINGgarde original à côté. Silt2dc8e456retirait originaux pour ancien resolver, recette reste versionnée. Scan parent propose--module-dir, ignore illisibles; sans avertissement ne prouve tous loads.",
   "es": "Main imprimeapp0/<carpeta>/<nombre>.guest.prx, loaderelige convertido; GAME_TESTINGconserva original al lado. Silt2dc8e456quitó originales por resolverviejo, mantén receta versionada. Scan del padre propone--module-dir, no informa ilegibles; sin aviso no prueba todos loads."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/user/USAGE.md"
  },
  {
   "label": "Pinned dynamic loader",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/core/libs/prx/libkernel/Module/src/DynamicLoader.cpp#L253-L283"
  },
  {
   "label": "Older Silt report",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10843"
  }
 ]
});

guideSupplements["guides/linux"].push({
 "id": "main-converted-module-layout",
 "title": {
  "en": "Follow the generated module layout",
  "zh": "按生成布局放置转换模块",
  "ar": "اتبع ترتيب الوحدات المولد",
  "pt": "Siga a disposição gerada",
  "de": "Erzeugtes Modullayout verwenden",
  "fr": "Suivre la disposition générée",
  "es": "Sigue la disposición generada"
 },
 "body": [
  {
   "en": "Current main prints app0/<module folder>/<name>.guest.prx. Its dynamic loader explicitly chooses the converted sibling; GAME_TESTING now says keep the original beside it. Silt’s earlier2dc8e456 report removed originals to avoid its older resolver: preserve that recipe with its version. New module-parent scanning suggests --module-dir for matching unconverted modules but cannot report unreadable files. A clean scan is not proof every runtime load exists.",
   "zh": "当前main打印app0／模块目录／<name>.guest.prx，动态加载器明确选择转换副本，GAME_TESTING现要求原件留旁。Silt旧2dc8e456报告通过移走原件避开旧解析器，应保留其版本配方。新增模块父目录扫描为匹配的未转换模块提示--module-dir，但不报告不可读文件；扫描无警告不证明运行期模块齐全。",
   "ar": "main الحالي يطبع app0/<folder>/<name>.guest.prx والـ loader يختار المحول؛ GAME_TESTING يبقي الأصل بجانبه. Silt2dc8e456 أزال الأصل لحل قديم، احفظ وصفته بإصداره. فحص الأب يقترح--module-dir للمطابق غير المحول، ولا يرى غير المقروء؛ نظافته لا تثبت كل تحميل.",
   "pt": "Main imprimeapp0/<pasta>/<nome>.guest.prxe loaderescolhe convertido; GAME_TESTINGguarda original ao lado. Silt2dc8e456removeu originais pelo resolverantigo, mantenha receita/versionada. Scan do pai sugere--module-dirpara módulos, não vê ilegíveis; sem aviso não prova todos loads.",
   "de": "Main drucktapp0/<Ordner>/<Name>.guest.prx, Loader wählt konvertierte Kopie; GAME_TESTINGbehält Original daneben. Silt2dc8e456entfernte Originale wegen altem Resolver, Rezept bleibt versioniert. Parent-Scan schlägt--module-dirvor, übersieht unlesbare Dateien; kein Warnhinweis beweist keine Vollständigkeit.",
   "fr": "Main afficheapp0/<dossier>/<nom>.guest.prx, loaderchoisit converti; GAME_TESTINGgarde original à côté. Silt2dc8e456retirait originaux pour ancien resolver, recette reste versionnée. Scan parent propose--module-dir, ignore illisibles; sans avertissement ne prouve tous loads.",
   "es": "Main imprimeapp0/<carpeta>/<nombre>.guest.prx, loaderelige convertido; GAME_TESTINGconserva original al lado. Silt2dc8e456quitó originales por resolverviejo, mantén receta versionada. Scan del padre propone--module-dir, no informa ilegibles; sin aviso no prueba todos loads."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/user/USAGE.md"
  },
  {
   "label": "Pinned dynamic loader",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/core/libs/prx/libkernel/Module/src/DynamicLoader.cpp#L253-L283"
  },
  {
   "label": "Older Silt report",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10843"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-converter-only-macos",
 "title": {
  "en": "Building the converter is not building a Mac runtime",
  "zh": "能构建转换器不等于Mac运行时就绪",
  "ar": "بناء المحول ليس تشغيل Mac",
  "pt": "Compilar conversor não é runtimeMac",
  "de": "Konverterbuild ist keinMac-Runtimebuild",
  "fr": "Compiler convertisseur ne fournit pas runtimeMac",
  "es": "Compilar conversor no es runtimeMac"
 },
 "body": [
  {
   "en": "The converter-only build supports Apple Silicon with AppleClang from Xcode command-line tools, CMake and Ninja from Homebrew. This does not provide the full PS5 runtime libraries. Current Mac title experiments still combine open patches and use x86-64/Rosetta; v0.1.3 has no Mac runtime package.",
   "zh": "仅转换器构建支持Apple Silicon，使用Xcode命令行工具AppleClang及Homebrew的CMake／Ninja；不提供完整PS5运行库。当前Mac游戏实验仍叠开放补丁并用x86-64／Rosetta，v0.1.3没有Mac运行包。",
   "ar": "بناء المحول فقط يدعم AppleSilicon بـ AppleClang/CMake/Ninja؛ لا يوفر مكتبات التشغيل الكاملة. تجارب Mac تجمع patches مفتوحة و x86-64/Rosetta، ولا حزمة Mac في v0.1.3.",
   "pt": "Conversor apenas suportaAppleSilicon/AppleClang/CMake/Ninja, não libs completas. ExperiênciasMacjuntam patches abertos, x86-64/Rosetta; v0.1.3sem pacoteMac.",
   "de": "Nur-Konverter unterstütztAppleSilicon/AppleClang/CMake/Ninja, nicht volle Runtime-Libs. Mac-Versuche brauchen offene Patches/x86-64/Rosetta; v0.1.3ohneMac-Paket.",
   "fr": "Convertisseur seul supporteAppleSilicon/AppleClang/CMake/Ninja, pas libs complètes. EssaisMacavecpatches ouverts/x86-64/Rosetta; v0.1.3sans paquetMac.",
   "es": "Sólo conversor soportaAppleSilicon/AppleClang/CMake/Ninja, no libs completas. PruebasMacconparches abiertos/x86-64/Rosetta; v0.1.3sin paqueteMac."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-import-count-snapshots",
 "title": {
  "en": "Keep a bounded import-call snapshot",
  "zh": "保留有边界的导入调用快照",
  "ar": "لقطة عدد نداءات الاستيراد",
  "pt": "Guardar contagens de imports",
  "de": "Importaufrufe als Snapshot",
  "fr": "Instantané des appels importés",
  "es": "Instantánea de llamadas importadas"
 },
 "body": [
  {
   "en": "With --trace-imports and APS5_TRACE_CALLS , set APS5_TRACE_CALLS_FILE to a local path for per-import call counts rewritten every10s, most called first. A killed run retains only the latest rewrite; absence there does not prove never called. trace_digest skips window-capture lines and reports identity changes. Cold/warm caches, scene and all switches must match before comparing timings.",
   "zh": "配合--trace-imports和APS5_TRACE_CALLS，APS5_TRACE_CALLS_FILE指定本地路径，每10秒重写导入调用数、频次降序。进程被杀只保留最后重写，未出现不等于从未调用。trace_digest跳过窗口抓取行并报告身份变化；比较计时前对齐冷／热缓存、场景及全部开关。",
   "ar": "مع--trace-imports و APS5_TRACE_CALLS يكتب APS5_TRACE_CALLS_FILE عدادات محلية كل 10 ث. القتل يبقي آخر كتابة فقط، الغياب ليس عدم نداء. trace_digest يتجاوز windowcaptures ويبلغ تغير الهوية. طابق الكاش/المشهد/المفاتيح للمقارنة.",
   "pt": "Com--trace-importse APS5_TRACE_CALLS , APS5_TRACE_CALLS_FILE reescreve contagens locais10s. Processo morto guarda última escrita, ausência não prova nunca chamado. trace_digestsalta capturas e avisa identidade. Compare cache/cena/opções iguais.",
   "de": "Mit--trace-imports/ APS5_TRACE_CALLS schreibt APS5_TRACE_CALLS_FILE alle10s lokale Zähler. Getöteter Lauf behält letzten Stand, Fehlen beweist keinen Nichtaufruf. trace_digestüberspringt Fenstercaptures, meldet Identitätswechsel. Cache/Szene/Schalter abgleichen.",
   "fr": "Avec--trace-imports/ APS5_TRACE_CALLS , APS5_TRACE_CALLS_FILE réécrit compteurs locaux10s. Processus tué garde dernier état, absence ne prouve jamais appelé. trace_digestsaute captures, signale identité. Appariez cache/scène/options.",
   "es": "Con--trace-imports/ APS5_TRACE_CALLS , APS5_TRACE_CALLS_FILE reescribe contadores10s. Proceso muerto conserva última escritura, ausencia no prueba nunca llamado. trace_digestomite capturas, informa identidad. Empareja caché/escena/opciones."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-verified-stack-sampling",
 "title": {
  "en": "Symbolize the binary that actually ran",
  "zh": "用实际运行二进制解释采样",
  "ar": "اربط العينات بالملف المنفذ",
  "pt": "Simbolize o binário executado",
  "de": "Tatsächlich gelaufenen Build symbolisieren",
  "fr": "Symboliser le binaire exécuté",
  "es": "Simboliza el binario ejecutado"
 },
 "body": [
  {
   "en": "Windows APS5_SAMPLE_WORKER now writes collapsed stacks as well as self/inclusive samples; truncated walks are marked. symbolize_samples checks module size and PE timestamp before naming frames;--unverified bypasses that identity check, not a fix. APS5_SAMPLE_THREADS uses a shallower .pdata-only walk. Inclusive counts can double-count recursion; sampling overhead and incomplete stacks limit comparisons.",
   "zh": "Windows APS5_SAMPLE_WORKER现另写collapsed堆栈，截断有标记；symbolize_samples先核模块尺寸／PE时间戳，--unverified绕过身份检查而非修复。APS5_SAMPLE_THREADS只浅层.pdata展开，inclusive可能重复计递归，采样开销／缺帧限制比较。",
   "ar": "APS5_SAMPLE_WORKER في Windows يكتب collapsedstacks مع علامة الاقتطاع. symbolize_samples يفحص الحجم/PEtimestamp؛ --unverified يتجاوز الهوية لا يصلح. SAMPLE_THREADS بـ.pdata ضحل. inclusive قد يكرر recursion، والكلفة/النقص يحدان المقارنة.",
   "pt": "SAMPLE_WORKERWindowsgera collapsedstacks/marca truncados. symbolize_samplesconfere tamanho/PEtimestamp;--unverifiedignora identidade, não corrige. SAMPLE_THREADSusa.pdata raso. Inclusive duplica recursão; overhead/pilhas incompletas limitam.",
   "de": "WindowsSAMPLE_WORKERliefert collapsedstacks/Abbruchmarken. symbolize_samplesprüft Größe/PE-Zeitstempel;--unverifiedumgeht Identität, kein Fix. SAMPLE_THREADSflacher.pdata-Walk. Inclusive kann Rekursion mehrfach zählen, Overhead/Lücken begrenzen Vergleich.",
   "fr": "SAMPLE_WORKERWindowsécrit pilescollapsed/troncature marquée. symbolize_samplesvérifie taille/datePE;--unverifiedignore identité, pas fix. SAMPLE_THREADSpile.pdata peu profonde. Inclusive peut doubler récursion, coût/lacunes limitent comparaison.",
   "es": "SAMPLE_WORKERWindowsescribe pilascollapsed/truncadas marcadas. symbolize_samplesverifica tamaño/fechaPE;--unverifiedsalta identidad, no fix. SAMPLE_THREADSusa.pdata superficial. Inclusive duplica recursión, coste/huecos limitan comparación."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/dev/BUILD.md"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-local-trophy-statistics",
 "title": {
  "en": "Local trophy statistics have a limited rule set",
  "zh": "本地奖杯统计只覆盖有限规则",
  "ar": "قواعد محدودة لإحصاء الكؤوس",
  "pt": "Regras limitadas de troféus",
  "de": "Begrenzte lokale Trophäenregeln",
  "fr": "Règles limitées de trophées",
  "es": "Reglas limitadas de trofeos"
 },
 "body": [
  {
   "en": "Later main stores local statistic values in _trophy/<user>_<service>.stats.txt across runs. Only documented latest/max integer statistics and simple event-property rules are applied; unsupported rules are logged. APS5_TRACE_UDS logs events/statistics and ignored reasons. Local unlocks do not establish PSN synchronization. A reset concerns both statistics and unlock files, not just one.",
   "zh": "后续main用_trophy／<用户>_<服务>.stats.txt跨运行保存统计，只应用已列出的latest／max整数及简单事件属性规则，其他规则记日志。APS5_TRACE_UDS记录事件、统计及忽略原因；本地解锁不证明PSN同步。重置涉及统计与解锁两个文件，不能只处理一个。",
   "ar": "main اللاحق يحفظ_trophy/<user>_<service>.stats.txt بين التشغيلات، بقواعد latest/max للأعداد والأحداث البسيطة فقط؛ الباقي يسجل. TRACE_UDS يسجل السبب. فتح محلي لا يثبت PSN؛ reset يشمل الإحصاء والفتح معاً.",
   "pt": "Main guarda_trophy/<user>_<service>.stats.txtentre execuções, só regraslatest/maxinteiras/eventos simples; resto no log. TRACE_UDSmostra razões. Desbloqueio local não provaPSN; resetafeta estatísticas e unlock.",
   "de": "Main speichert_trophy/<user>_<service>.stats.txtüber Läufe, nur dokumentiertelatest/maxGanzzahl-/Ereignisregeln, andere geloggt. TRACE_UDSzeigt Gründe. Lokal keinPSN-Nachweis; Resetbetrifft Statistik und Unlock.",
   "fr": "Main garde_trophy/<user>_<service>.stats.txtentre essais, règleslatest/maxentières/événements simples seulement; reste journalisé. TRACE_UDSdonne raisons. Local ne prouvePSN; resetconcerne statistiques et unlock.",
   "es": "Main guarda_trophy/<user>_<service>.stats.txtentre ejecuciones, sólo reglaslatest/maxenteras/eventos simples; resto registrado. TRACE_UDSmuestra razones. Local no pruebaPSN; resetafecta estadísticas y unlock."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/user/USAGE.md"
  }
 ]
});

guideSupplements["guides/input"].push({
 "id": "controller-only-name-prompt",
 "title": {
  "en": "A name prompt can still need a keyboard",
  "zh": "命名窗口仍可能需要键盘",
  "ar": "قد يحتاج الاسم لوحة مفاتيح",
  "pt": "Nome pode exigir teclado",
  "de": "Namenseingabe braucht eventuell Tastatur",
  "fr": "Un nom peut exiger un clavier",
  "es": "El nombre puede necesitar teclado"
 },
 "body": [
  {
   "en": "OCTOPATH0’s63a863d3b0 report reaches character creation, but the IME name dialog accepts host keyboard text; controller-only completion is not verified. A proposed on-screen keyboard is not a merged feature. DriftCheck’s real USB Xbox test is on a separate patched Mac/Rosetta tree and does not prove every game, DualSense sensor or rumble path.",
   "zh": "OCTOPATH0的63a863d3b0报告到角色创建，IME命名仅接收电脑键盘文字，未验证纯手柄完成；屏幕键盘提议不是已合功能。DriftCheck实体USB Xbox测试在另一补丁Mac／Rosetta树，不证明所有游戏、DualSense传感器或震动。",
   "ar": "تقرير OCTOPATH0 على 63a863d3b0 يبلغ الإنشاء لكن IME يأخذ لوحة المضيف، لا إكمال بذراع فقط. لوحة الشاشة مقترحة لا مدمجة. DriftCheckXboxUSB على Mac/Rosetta معدل لا يثبت كل لعبة/حساس DualSense/اهتزاز.",
   "pt": "OCTOPATH063a863d3b0chega à criação, masIMEusa teclado anfitrião; comando só não validado. Teclado virtual proposto, não integrado. DriftCheckXboxUSBnumMac/Rosettamodificado não prova todos jogos/sensoresDualSense/vibração.",
   "de": "OCTOPATH063a863d3b0erreicht Erstellung, IMEbraucht Hosttastatur; Controller allein ungeprüft. Bildschirmtastatur nur Vorschlag. DriftCheckXboxUSBaufMac/Rosetta-Patchbaum beweist nicht alle Spiele/DualSense-Sensoren/Vibration.",
   "fr": "OCTOPATH063a863d3b0atteint création, IMEprend clavier hôte; manette seule non validée. Clavier écran proposé, pas fusionné. DriftCheckXboxUSBsurMac/Rosettamodifié ne prouve tous jeux/capteursDualSense/vibration.",
   "es": "OCTOPATH063a863d3b0llega a creación, IMEusa teclado anfitrión; mando sólo sin verificar. Teclado virtual propuesto, no fusionado. DriftCheckXboxUSBconMac/Rosettamodificado no prueba todos juegos/sensoresDualSense/vibración."
  }
 ],
 "links": [
  {
   "label": "Reviewed primary source",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/11114"
  }
 ]
});

guideSupplements["guides/language-fonts"].push({
 "id": "main-font-first-strong-direction",
 "title": {
  "en": "Default direction follows the first strong character",
  "zh": "默认方向跟随首个强方向字符",
  "ar": "الاتجاه حسب أول حرف قوي",
  "pt": "Direção pelo primeiro caráter forte",
  "de": "Richtung nach erstem starken Zeichen",
  "fr": "Sens selon premier caractère fort",
  "es": "Dirección por primer carácter fuerte"
 },
 "body": [
  {
   "en": "Merged10021 chooses a default string’s direction at creation, with LRM/RLM and isolate handling; the getter reads the stored byte. Explicit forms stay explicit. The13.42 harness measured nonempty strings before a later glyph-stage failure, not full RTL rendering; block-range classification still has limits. This does not certify every game’s Arabic layout.",
   "zh": "合入10021后，默认字符串在创建时按首个强方向字符决定方向，处理LRM／RLM及isolate，getter读取存储值，保留显式方向。13.42测试非空串在后续字形失败前读值，不是完整RTL渲染，Unicode区块分类也有限，不证明所有游戏阿语排版。",
   "ar": "10021 المدمج يقرر الاتجاه عند الإنشاء بأول قوي، مع LRM/RLM وعزل؛ getter يقرأ البايت والصريح محفوظ. قياس 13.42 قبل فشل glyph لاحق، لا RTL كامل، وتصنيف النطاق محدود؛ لا تصديق لكل تنسيق عربي.",
   "pt": "10021integrado decide na criação pelo primeiro forte, LRM/RLM/isolates; getterlê byte, explícitos mantidos.13.42medido antes de falhaglyph, nãoRTLcompleto; faixas limitadas, sem validar árabe em todos jogos.",
   "de": "10021gemergt bestimmt bei Erstellung nach erstem starken Zeichen, LRM/RLM/Isolates; Getterliest Byte, explizit bleibt.13.42vor späterem Glyphenfehler gemessen, kein vollesRTL; Blockbereiche begrenzt, keine allgemeine Arabischqualifikation.",
   "fr": "10021fusionné décide à création selon premier fort, LRM/RLM/isolats; getterlit octet, explicite gardé.13.42mesuré avant échecglyph, pasRTLcomplet; plages limitées, pas validation arabe universelle.",
   "es": "10021fusionado decide al crear por primer fuerte, LRM/RLM/aislados; getterlee byte, explícitos mantenidos.13.42medido antes de falloglyph, noRTLcompleto; rangos limitados, no valida árabe universal."
  }
 ],
 "links": [
  {
   "label": "Reviewed primary source",
   "url": "https://github.com/boykopovar/AnyPS5/pull/10021"
  }
 ]
});

guideSupplements["guides/build"].push({
 "id": "main-native-import-patching",
 "title": {
  "en": "Native import patching is a separate tool",
  "zh": "原生程序导入修补是独立工具",
  "ar": "ترقيع واردات الأصل أداة منفصلة",
  "pt": "Imports nativos: uma ferramenta distinta",
  "de": "Native Importanpassung als eigenes Werkzeug",
  "fr": "Imports natifs: outil distinct",
  "es": "Imports nativos: herramienta aparte"
 },
 "body": [
  {
   "en": "Later main’s nid_patcher --exec detects native PE/ELF64/Mach-O64 from bytes and rewrites imports in place while preserving application exports; unsupported layouts fail before writing. Use a working copy and preserve host imports explicitly with the documented export exclusions or narrower --only-sce mode. It is not the relinker command or proof of game compatibility; build a separate executable per target.",
   "zh": "后续main的nid_patcher --exec按字节识别原生PE／ELF64／Mach-O64，原位改写导入、保留程序导出，不支持布局在写入前失败。使用工作副本，通过导出排除或较窄--only-sce明确保留主机导入；它不是relinker命令或兼容证明，每个目标单独构建。",
   "ar": "nid_patcher --exec في main لاحق يحدد PE/ELF64/Mach-O64 ويغير الواردات مكانياً ويحفظ الصادرات؛ غير المدعوم يفشل قبل الكتابة. نسخة عمل واستثناءات exports أو--only-sce لحفظ المضيف. ليس relinker/توافقاً؛ برنامج منفصل لكل هدف.",
   "pt": "nid_patcher --execdetetaPE/ELF64/Mach-O64e altera imports in-place, preserva exports; layout inválido falha antes de escrever. Use cópia/exclusões ou--only-scepara preservar host. Não érelinker/compatibilidade; buildpor alvo.",
   "de": "nid_patcher --execerkenntPE/ELF64/Mach-O64, ändert Imports direkt, behält Exports; unbekanntes Layout scheitert vor Schreiben. Arbeitskopie/Exportausnahmen oder--only-scefür Hostimports. KeinRelinker/Kompatibilitätsnachweis; pro Ziel bauen.",
   "fr": "nid_patcher --execdétectePE/ELF64/Mach-O64, modifie imports sur place, garde exports; layout inconnu échoue avant écriture. Copie/exclusions ou--only-scepour hostimports. Pasrelinker/preuve de compatibilité; buildpar cible.",
   "es": "nid_patcher --execdetectaPE/ELF64/Mach-O64, cambia imports in-place, conserva exports; layoutinválido falla antes de escribir. Copia/exclusiones o--only-scepara hostimports. No esrelinker/compatibilidad; buildpor destino."
  }
 ],
 "links": [
  {
   "label": "Reviewed primary source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/6bc113969895900890ae9bb4c473beb840ba12db/docs/user/USAGE.md"
  }
 ]
});
