import {L,type Report,type Game,type Text} from './model';
import metadata from './source-metadata.json';
const sources=metadata as Record<string,{url:string;updated:string;media:string[]}>;
function R(number:number,fields:Partial<Report>&Pick<Report,'id'|'platform'|'stage'|'os'>,summary:Text,fps?:string|Text):Report {
 return {evidence:'community',source:sources[number].url,updated:sources[number].updated,testDate:null,build:null,cpu:null,gpu:null,driver:null,version:null,patched:null,media:sources[number].media,benchmarks:fps&&fields.gpu?[{cpu:fields.cpu||null,gpu:fields.gpu,fps,context:summary}]:[],...fields,summary};
}

export const maintenanceReports:Record<string,Report[]>={
"dreaming-sarah":[R(3180,{"id": "3180-linux-review-20261013", "platform": "linux", "stage": "ingame", "os": "Linux · follow-up environment not restated", "source": "https://github.com/boykopovar/AnyPS5/issues/3180#issuecomment-6129282979", "updated": "2026-10-12T17:29:55Z", "media": ["https://github.com/user-attachments/assets/e67c026a-358b-4a9a-81b0-55c50c8953bb"]},L("The reporter now confirms Linux success and supplies a forest scene screenshot. The visible 59.93 counter is a single screenshot, not a timed benchmark. The follow-up does not pin its new commit, patch set, game version or hardware; audio, controls and completion remain unverified. Keep the older release and c60c123f failures separate.","作者在后续评论中确认 Linux 已运行，并提供森林场景截图。截图上的 59.93 只是单帧计数，不是计时基准；新评论没有固定提交、补丁、游戏版本或硬件。音频、操作和通关未验证，旧发行版及 c60c123f 失败记录仍单独保留。","أكد الكاتب نجاح Linux مع صورة مشهد غابة. رقم 59.93 في صورة واحدة ليس قياساً زمنياً. لم يحدد التعليق الجديد الالتزام أو التعديلات أو النسخة أو العتاد؛ الصوت والتحكم والإكمال غير موثقين. تبقى حالات الفشل السابقة منفصلة.","O autor confirma sucesso em Linux com uma imagem da floresta. O contador 59,93 numa só imagem não é um benchmark cronometrado. Não fixa novo commit, patches, versão ou equipamento; áudio, controlo e conclusão não verificados. Mantêm-se os relatos anteriores de falha.","Der Autor bestätigt Linux-Erfolg mit einem Waldbild. Der Zähler 59,93 auf einem Screenshot ist kein zeitlich gemessener Benchmark. Neuer Commit, Patches, Spielversion und Hardware fehlen; Ton, Steuerung und Abschluss sind ungeprüft. Frühere Fehlerberichte bleiben getrennt.","L’auteur confirme un succès Linux avec une image de forêt. Le compteur 59,93 sur une seule capture n’est pas un benchmark chronométré. Le nouveau commit, les correctifs, la version et le matériel restent inconnus ; son, commandes et fin du jeu non vérifiés. Les échecs antérieurs restent séparés.","El autor confirma que funciona en Linux y aporta una imagen del bosque. El contador 59,93 de una captura no es un benchmark cronometrado. No fija nuevo commit, parches, versión ni equipo; audio, controles y finalización sin verificar. Se conservan los fallos anteriores."))],
"gran-turismo-7":[R(4697,{"id": "4697-windows-review-20261013", "platform": "windows", "stage": "menu", "build": "main 6741e90a1c + 95 local commits + uncommitted driver/recompiler changes", "os": "Windows 11 Pro · 26220", "gpu": "NVIDIA RTX 5090 Laptop GPU", "driver": "616.92", "version": "01.710.000", "patched": true},L("The local integration renders the title, World Map and Garage at about 10–14 FPS; roulette scenes are 1–4. Car lighting works in only about two of seven boots, with black/grey cars otherwise and overexposed interiors. Menu input and saves are reported, network falls back offline, and audio was muted. No race was tested; these are menu results, not racing performance.","本地整合可显示标题、世界地图和车库，约 10–14 FPS；抽奖场景约 1–4。约七次启动中仅两次车身正确受光，其余黑色或灰色，内饰也会过曝。据报菜单操作与存档可用，网络回退到离线，音频被静音。没有测试比赛，这些帧数属于菜单而非赛车过程。","يعرض الدمج المحلي العنوان والخريطة والمرآب بنحو 10–14 FPS، والسحب 1–4. تظهر إضاءة السيارة في نحو تشغيلين من سبعة؛ البقية سوداء أو رمادية والمقصورة مفرطة الإضاءة. ورد عمل القوائم والحفظ مع رجوع الشبكة للوضع غير المتصل وصوت مكتوم. لم يُختبر سباق.","A integração local apresenta título, mapa e garagem a 10–14 FPS; sorteios a 1–4. A iluminação do carro funciona em cerca de dois de sete arranques; nos restantes fica preto/cinzento e os interiores sobreexpostos. Há relatos de comandos e gravações, rede offline e som silenciado. Não foram testadas corridas.","Die lokale Integration zeigt Titel, Weltkarte und Garage mit etwa 10–14 FPS, Lose mit 1–4. Das Auto ist nur bei etwa zwei von sieben Starts beleuchtet, sonst schwarz/grau; Innenräume sind überbelichtet. Menüeingaben und Speichern werden berichtet, Netzwerk fällt auf offline zurück, Ton war stumm. Keine Rennen getestet.","L’intégration locale affiche titre, carte et garage à environ 10–14 FPS ; tirages à 1–4. La voiture est éclairée dans environ deux démarrages sur sept, sinon noire/grise ; intérieurs surexposés. Commandes et sauvegardes rapportées, réseau hors ligne, son coupé. Aucune course testée.","La integración local muestra título, mapa y garaje a unos 10–14 FPS; sorteos a 1–4. El coche se ilumina en unos dos de siete arranques; el resto queda negro/gris y el interior sobreexpuesto. Se indican controles y guardado, red offline y sonido silenciado. No se probaron carreras."),L("title / World Map 10–14","标题 / 世界地图 10–14","العنوان والخريطة 10–14","título / mapa 10–14","Titel / Weltkarte 10–14","titre / carte 10–14","título / mapa 10–14"))],
"doom-homebrew":[R(4312,{"id": "4312-windows-rdna4", "platform": "windows", "stage": "ingame", "build": "main b42ef24e0", "os": "Windows 11 Pro · 26300", "cpu": null, "gpu": "AMD Radeon RX 9060 XT", "driver": "32.0.31041.1004", "version": "01.001.001 · homebrew v1.1.1", "patched": false, "source": "https://github.com/boykopovar/AnyPS5/pull/4312"},L("Unmodified main b42ef24e0 reaches E1M1 with menus, movement, firing, pickups, Xbox controller input and audible audio on this AMD device. The homebrew SELF/fSELF files were unwrapped and guest libc converted. First runs stuttered; FPS, later maps and save/load were not measured. This is DOOM homebrew v1.1.1, not a commercial PS5 DOOM edition.","未加额外 PR 的 main b42ef24e0 在这块 AMD 设备上运行到 E1M1，菜单、移动、射击、拾取、Xbox 手柄和可听音频均有记录。自制版 SELF/fSELF 已解包并转换游戏自带 libc。首次运行卡顿，未测量 FPS、后续地图或存档重载；这是 DOOM 自制版 v1.1.1，不是商业 PS5 DOOM。","يصل main b42ef24e0 بلا PR إضافية إلى E1M1 على جهاز AMD هذا، مع قوائم وحركة وإطلاق والتقاط وتحكم Xbox وصوت مسموع. فُكت SELF/fSELF وحُول libc المرفق. البداية متقطعة؛ لم تُقَس FPS أو المراحل التالية أو إعادة الحفظ. هذا DOOM homebrew v1.1.1 لا إصدار تجاري.","O main b42ef24e0 sem PR adicionais chega a E1M1 neste dispositivo AMD, com menus, movimento, disparos, objetos, comando Xbox e som audível. SELF/fSELF desembrulhados e libc do jogo convertido. Primeiro arranque irregular; FPS, mapas posteriores e gravação/reabertura não medidos. É DOOM homebrew v1.1.1.","Unverändertes main b42ef24e0 erreicht auf diesem AMD-Gerät E1M1 mit Menüs, Bewegung, Schießen, Gegenständen, Xbox-Eingaben und hörbarem Ton. SELF/fSELF und Gast-libc wurden konvertiert. Erststarts ruckelten; FPS, spätere Karten und Speicher-Rundlauf ungeprüft. DOOM-Homebrew v1.1.1, keine Handelsversion.","Main b42ef24e0 sans PR supplémentaires atteint E1M1 sur cet appareil AMD, avec menus, déplacement, tirs, objets, manette Xbox et son audible. SELF/fSELF déballés et libc invité converti. Premier lancement saccadé ; FPS, cartes suivantes et rechargement non mesurés. DOOM homebrew v1.1.1, pas une édition commerciale.","Main b42ef24e0 sin PR adicionales llega a E1M1 en este dispositivo AMD con menús, movimiento, disparos, objetos, mando Xbox y sonido audible. SELF/fSELF desempaquetados y libc invitado convertido. Primer inicio con tirones; sin medir FPS, mapas posteriores ni recarga. Es DOOM homebrew v1.1.1, no una edición comercial.")),R(4312,{"id": "4312-windows-rdna2", "platform": "windows", "stage": "ingame", "build": "main b42ef24e0", "os": "Windows 11 Pro · 26300", "cpu": "AMD Ryzen 9 7950X", "gpu": "AMD Ryzen 9 7950X integrated graphics", "driver": "32.0.21045.5002", "version": "01.001.001 · homebrew v1.1.1", "patched": false, "source": "https://github.com/boykopovar/AnyPS5/pull/4312"},L("Unmodified main b42ef24e0 reaches E1M1 with menus, movement, firing, pickups, Xbox controller input and audible audio on this AMD device. The homebrew SELF/fSELF files were unwrapped and guest libc converted. First runs stuttered; FPS, later maps and save/load were not measured. This is DOOM homebrew v1.1.1, not a commercial PS5 DOOM edition.","未加额外 PR 的 main b42ef24e0 在这块 AMD 设备上运行到 E1M1，菜单、移动、射击、拾取、Xbox 手柄和可听音频均有记录。自制版 SELF/fSELF 已解包并转换游戏自带 libc。首次运行卡顿，未测量 FPS、后续地图或存档重载；这是 DOOM 自制版 v1.1.1，不是商业 PS5 DOOM。","يصل main b42ef24e0 بلا PR إضافية إلى E1M1 على جهاز AMD هذا، مع قوائم وحركة وإطلاق والتقاط وتحكم Xbox وصوت مسموع. فُكت SELF/fSELF وحُول libc المرفق. البداية متقطعة؛ لم تُقَس FPS أو المراحل التالية أو إعادة الحفظ. هذا DOOM homebrew v1.1.1 لا إصدار تجاري.","O main b42ef24e0 sem PR adicionais chega a E1M1 neste dispositivo AMD, com menus, movimento, disparos, objetos, comando Xbox e som audível. SELF/fSELF desembrulhados e libc do jogo convertido. Primeiro arranque irregular; FPS, mapas posteriores e gravação/reabertura não medidos. É DOOM homebrew v1.1.1.","Unverändertes main b42ef24e0 erreicht auf diesem AMD-Gerät E1M1 mit Menüs, Bewegung, Schießen, Gegenständen, Xbox-Eingaben und hörbarem Ton. SELF/fSELF und Gast-libc wurden konvertiert. Erststarts ruckelten; FPS, spätere Karten und Speicher-Rundlauf ungeprüft. DOOM-Homebrew v1.1.1, keine Handelsversion.","Main b42ef24e0 sans PR supplémentaires atteint E1M1 sur cet appareil AMD, avec menus, déplacement, tirs, objets, manette Xbox et son audible. SELF/fSELF déballés et libc invité converti. Premier lancement saccadé ; FPS, cartes suivantes et rechargement non mesurés. DOOM homebrew v1.1.1, pas une édition commerciale.","Main b42ef24e0 sin PR adicionales llega a E1M1 en este dispositivo AMD con menús, movimiento, disparos, objetos, mando Xbox y sonido audible. SELF/fSELF desempaquetados y libc invitado convertido. Primer inicio con tirones; sin medir FPS, mapas posteriores ni recarga. Es DOOM homebrew v1.1.1, no una edición comercial.")),R(2475,{"id": "2475-linux-intel-review-20261013", "platform": "linux", "stage": "ingame", "build": "main 9aa5fd290", "os": "Fedora 44 Toolbx · KDE Wayland · kernel 6.19.10", "cpu": "Intel Core i5-6300U", "gpu": "Intel HD Graphics 520", "driver": "Mesa 26.2.4 ANV", "version": "01.001.001 · homebrew v1.1.1", "patched": false, "source": "https://github.com/boykopovar/AnyPS5/discussions/2475#discussioncomment-18886593", "updated": "2026-10-12T19:13:22Z"},L("Intel HD 520 main testing reaches E1M1 movement, firing and automap. Frame-dump timestamps average about 29 FPS in game and 28 in the launcher. A cold first frame takes about five minutes; warm launch takes 2.1 seconds, but both still use the CPU scaler. Audio was not listened to; later maps, saves and physical controllers remain unchecked. This does not contradict a different NVIDIA cold-start test.","Intel HD 520 的 main 测试已到 E1M1，可移动、射击和查看地图。按帧导出时间戳测得游戏约 29 FPS、启动器约 28；冷缓存首帧约五分钟，预热后启动 2.1 秒，但两者仍回退 CPU scaler。没有监听音频，也未测试后续地图、存档或实体手柄；不能用不同 NVIDIA 环境的冷启动测试覆盖此结果。","يصل اختبار main على Intel HD 520 إلى حركة وإطلاق وخريطة E1M1. توقيت الصور يعطي نحو 29 FPS للعب و28 للمشغل. أول إطار بارد نحو خمس دقائق والدافئ 2.1 ثانية؛ كلاهما يستخدم CPU scaler. لم يُسمع الصوت ولم تُختبر المراحل والحفظ والتحكم الفعلي. يبقى منفصلاً عن تجربة NVIDIA.","O teste main com Intel HD 520 chega a movimento, disparos e mapa em E1M1. Os tempos dos fotogramas exportados dão cerca de 29 FPS no jogo e 28 no launcher. Primeiro fotograma frio em cinco minutos; arranque quente em 2,1 s, ambos com CPU scaler. Sem áudio ouvido, mapas posteriores, saves ou comando físico verificados.","Der main-Test auf Intel HD 520 erreicht Bewegung, Schießen und Automap in E1M1. Frame-Dump-Zeitstempel ergeben etwa 29 FPS im Spiel und 28 im Launcher. Erstes kaltes Bild nach fünf Minuten, warmer Start nach 2,1 s; beide nutzen CPU scaler. Ton, weitere Karten, Speichern und echte Controller ungeprüft. Separat vom NVIDIA-Test.","Le test main sur Intel HD 520 atteint déplacement, tirs et carte E1M1. Les horodatages des captures donnent environ 29 FPS en jeu et 28 au lanceur. Première image à froid en cinq minutes ; démarrage chaud en 2,1 s, tous deux avec CPU scaler. Son, cartes suivantes, sauvegardes et manette physique non vérifiés.","El test main con Intel HD 520 llega a movimiento, disparos y mapa E1M1. Los tiempos de capturas dan unos 29 FPS en juego y 28 en el lanzador. Primera imagen fría en cinco minutos; inicio caliente en 2,1 s, ambos con CPU scaler. Sin escuchar audio ni probar más mapas, saves o mando físico."),"≈29"),R(2475,{"platform": "linux", "stage": "ingame", "build": "main a11c8f7f7", "version": "01.001.001 · homebrew v1.1.1", "patched": false, "source": "https://github.com/boykopovar/AnyPS5/discussions/2475#discussioncomment-18886410", "updated": "2026-10-12T18:59:45Z", "os": "CachyOS · KDE Plasma Wayland", "gpu": "NVIDIA RTX 3080 Ti", "driver": "610.57.04", "id": "2475-linux-nvidia-archived-review-20261013"},L("The archived Linux NVIDIA main report reaches E1M1 at 35 FPS after a 60 FPS launcher. Movement, firing, item pickup and automap were checked with file-driven controller input. Audio opened at 48000 Hz but was not listened to; later maps and save/load were not tested. Guest libc was converted; no extra PR or deprecated module exclusion was used.","归档的 Linux NVIDIA main 报告到达 E1M1，约 35 FPS，启动器为 60。用文件驱动的手柄输入检查移动、射击、拾取和地图；音频虽以 48000 Hz 打开但未监听，后续地图及存档重载未测试。已转换游戏自带 libc，没有额外 PR 或弃用的模块排除。","تقرير Linux NVIDIA main المؤرشف يصل إلى E1M1 عند 35 FPS بعد مشغل 60. اختبرت الحركة والإطلاق والالتقاط والخريطة بإدخال تحكم من ملف. فُتح صوت 48000 Hz دون سماع؛ لا مراحل لاحقة أو حفظ. حُول libc الضيف بلا PR إضافية أو استبعاد وحدات مهجور.","O relato Linux NVIDIA main arquivado chega a E1M1 a 35 FPS após launcher a 60. Movimento, disparos, objetos e mapa testados por controlo em ficheiro. Áudio 48000 Hz aberto mas não ouvido; sem mapas posteriores ou saves. Libc convidado convertido, sem PR extra ou exclusão obsoleta.","Der archivierte Linux-NVIDIA-main-Bericht erreicht E1M1 mit 35 FPS nach einem 60-FPS-Launcher. Bewegung, Schießen, Gegenstände und Karte mit Datei-Eingaben geprüft. 48000-Hz-Audio geöffnet, nicht gehört; weitere Karten und Speichern ungeprüft. Gast-libc konvertiert, keine zusätzlichen PRs oder veraltete Modulausschlüsse.","Le rapport Linux NVIDIA main archivé atteint E1M1 à 35 FPS après un lanceur à 60. Déplacement, tirs, objets et carte testés par entrées de fichier. Audio ouvert à 48000 Hz mais non écouté ; cartes suivantes et sauvegardes non testées. Libc invité converti, sans PR supplémentaire ni exclusion obsolète.","El informe Linux NVIDIA main archivado llega a E1M1 a 35 FPS tras lanzador a 60. Movimiento, disparos, objetos y mapa probados por entrada de archivo. Audio 48000 Hz abierto sin escuchar; sin más mapas ni saves. Libc invitado convertido, sin PR extra ni exclusión obsoleta."),"35"),R(2475,{"platform": "linux", "stage": "ingame", "build": "main a11c8f7f7", "version": "01.001.001 · homebrew v1.1.1", "patched": false, "source": "https://github.com/boykopovar/AnyPS5/discussions/2475#discussioncomment-18886410", "updated": "2026-10-12T18:59:45Z", "os": "CachyOS · kernel 7.2.9 · KDE Plasma 6.7.5 Wayland", "cpu": "AMD Ryzen 5 PRO 5650U", "gpu": "AMD RENOIR integrated graphics", "driver": "Mesa 26.2.4 RADV", "id": "2475-linux-amd-archived-review-20261013"},L("The archived Linux AMD integrated-GPU report completes E1M1 and E1M2 at 35 FPS with DualShock 4 input, heard audio and a save/load round trip. Warm-cache AGC presentation works; the first cache-empty run stays on compute presentation. Accessible udmabuf was part of this host setup. Keep these conditions with main a11c8f7f7; this is the homebrew port, not a retail DOOM game.","归档的 Linux AMD 集显报告以 35 FPS 完成 E1M1 和 E1M2，验证 DualShock 4、可听音频与存档重载。预热缓存的 AGC 呈现可用，首个空缓存运行卡在计算呈现；该主机也具备 udmabuf 访问权限。条件绑定 main a11c8f7f7，仍是自制移植版而非商业 DOOM。","يكمل تقرير Linux AMD المدمج المؤرشف E1M1 وE1M2 عند 35 FPS مع DualShock 4 وصوت مسموع وحفظ وإعادة تحميل. عرض AGC يعمل بالذاكرة الدافئة؛ أول تشغيل فارغ يبقى بعرض compute. وصول udmabuf شرط للمضيف. الشروط تخص main a11c8f7f7 ومنفذ homebrew لا DOOM التجاري.","O relato AMD integrado Linux arquivado termina E1M1/E1M2 a 35 FPS com DualShock 4, áudio ouvido e gravação/reabertura. AGC funciona com cache quente; primeiro teste vazio fica na apresentação compute. UdmaBuf acessível faz parte do ambiente. Condições de main a11c8f7f7, port homebrew e não DOOM comercial.","Der archivierte Linux-AMD-iGPU-Bericht schließt E1M1/E1M2 mit 35 FPS ab, mit DualShock 4, hörbarem Ton und Speicher-Rundlauf. Warmes AGC funktioniert; der erste leere Cache-Lauf bleibt bei Compute-Präsentation. Zugängliches udmabuf gehört zum Host. Bedingungen von main a11c8f7f7 und Homebrew-Port, kein Handels-DOOM.","Le rapport Linux AMD intégré archivé termine E1M1/E1M2 à 35 FPS avec DualShock 4, son audible et sauvegarde/rechargement. AGC chaud fonctionne ; le premier essai sans cache reste sur la présentation compute. UdmaBuf accessible fait partie de l’environnement. Conditions de main a11c8f7f7, port homebrew et non DOOM commercial.","El informe Linux AMD integrado archivado completa E1M1/E1M2 a 35 FPS con DualShock 4, audio y guardar/cargar. AGC caliente funciona; la primera prueba vacía queda en presentación compute. UdmaBuf accesible forma parte del entorno. Condiciones de main a11c8f7f7 y port homebrew, no DOOM comercial."),"35")],
"cyberpunk-2077":[R(4634,{"id": "4634-linux-main", "platform": "linux", "stage": "blocked", "build": "main d592d54e", "os": "Linux · kernel 7.2.5 · GCC 16.2.1", "gpu": "NVIDIA RTX 3090", "driver": "610.57.04", "version": "02.120.000", "patched": false, "source": "https://github.com/boykopovar/AnyPS5/issues/4634"},L("Unmodified d592d54e still trips EngineWatchdog at 139 seconds in two cold runs and one warm run, with zero compute dispatches. Earlier startup fixes and merged #4321 do not establish rendering. This report pins PPSA04029 content 02.120.000 and the RTX 3090 host separately from earlier runs.","未修改的 d592d54e 在两次冷缓存、一次预热运行中均于 139 秒触发 EngineWatchdog，计算 dispatch 为零。早期启动修复及已合并 #4321 没有证明渲染成功；本报告单独固定 PPSA04029 的 02.120.000 版本与 RTX 3090 环境。","يتوقف d592d54e الأصلي عند EngineWatchdog بعد 139 ثانية في تشغيلين باردين وواحد دافئ، بلا compute dispatch. إصلاحات البدء ودمج #4321 لا تثبت الرسم. يُثبت التقرير PPSA04029 02.120.000 وRTX 3090 منفصلين عن السابق.","O d592d54e original atinge EngineWatchdog aos 139 s em dois testes frios e um quente, sem dispatch compute. Correções iniciais e #4321 integrado não comprovam renderização. Fixa PPSA04029 02.120.000 e RTX 3090 separados dos relatos anteriores.","Unverändertes d592d54e trifft in zwei kalten und einem warmen Lauf nach 139 s den EngineWatchdog, ohne Compute-Dispatches. Startkorrekturen und #4321 belegen kein Rendering. PPSA04029 02.120.000 und RTX 3090 bleiben separat dokumentiert.","D592d54e non modifié déclenche EngineWatchdog après 139 s dans deux essais froids et un chaud, sans dispatch compute. Les correctifs initiaux et #4321 ne prouvent pas le rendu. PPSA04029 02.120.000 et RTX 3090 sont identifiés séparément.","D592d54e sin modificar dispara EngineWatchdog a los 139 s en dos pruebas frías y una caliente, sin dispatch compute. Las correcciones iniciales y #4321 no demuestran renderizado. PPSA04029 02.120.000 y RTX 3090 quedan separados de informes anteriores.")),R(4634,{"id": "4634-linux-4216", "platform": "linux", "stage": "boot", "build": "main d592d54e + #4216 head 327e3b81", "os": "Linux · kernel 7.2.5 · GCC 16.2.1", "gpu": "NVIDIA RTX 3090", "driver": "610.57.04", "version": "02.120.000", "patched": true, "source": "https://github.com/boykopovar/AnyPS5/issues/4634"},L("With #4216 cherry-picked, all four cold runs still time out at 212–253 seconds. One warm-cache run reaches 14,664 compute dispatches, then aborts at the first presentation after 184 seconds on unsupported clip/cull state. No visible menu or gameplay is established; escaping the watchdog is not rendering success.","额外应用 #4216 后，四次冷缓存运行仍在 212–253 秒超时。一次预热运行达到 14,664 个计算 dispatch，随后于 184 秒首次呈现处因不支持的 clip/cull 状态中止。未证明可见菜单或游戏过程，越过 watchdog 不等于渲染成功。","مع #4216 تنتهي التشغيلات الباردة الأربعة بمهلة 212–253 ثانية. تشغيل دافئ يبلغ 14,664 compute dispatch ثم يتوقف عند أول عرض بعد 184 ثانية بسبب clip/cull غير مدعوم. لا قائمة مرئية أو لعب مثبت؛ تجاوز watchdog لا يثبت الرسم.","Com #4216, os quatro testes frios expiram aos 212–253 s. Um teste quente chega a 14 664 dispatches compute e falha na primeira apresentação aos 184 s por clip/cull não suportado. Não há menu visível ou jogo comprovado; ultrapassar o watchdog não garante renderização.","Mit #4216 laufen alle vier kalten Tests nach 212–253 s aus. Ein warmer Lauf erreicht 14.664 Compute-Dispatches und scheitert bei der ersten Präsentation nach 184 s an Clip-/Cull-Zustand. Kein sichtbares Menü oder Gameplay; überwundener Watchdog bedeutet kein korrektes Bild.","Avec #4216, les quatre essais froids expirent après 212–253 s. Un essai chaud atteint 14 664 dispatches compute puis plante au premier affichage après 184 s sur clip/cull non pris en charge. Ni menu visible ni jeu établi ; franchir le watchdog ne prouve pas le rendu.","Con #4216, las cuatro pruebas frías agotan 212–253 s. Una prueba caliente llega a 14.664 dispatch compute y aborta en la primera presentación a los 184 s por clip/cull no compatible. Sin menú visible ni juego demostrado; superar el watchdog no garantiza imagen."))]
};
export const maintenanceGames:Game[]=[
{...{"slug": "ready-or-not", "name": "Ready or Not", "titleId": "PPSA18605", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4184,{"id": "4184-windows-review-20261013", "platform": "windows", "stage": "ingame", "build": "main bab7b3285 + extensive PR/draft stack + local view, wait, module and auth fixes", "os": "Windows 11 Pro · 22631", "cpu": "AMD Ryzen 7 7800X3D", "gpu": "AMD Radeon RX 7900 XTX", "version": "01.001.008", "patched": true, "testDate": "2026-10-12"},L("The large local PR integration reaches the station and a first mission that the author says can be played through slowly. Station performance is about 4 FPS after warm-up; 2.4–2.7 FPS in the mission belongs to an earlier build. First mission loading took about 14 minutes. Intermittent colour casts, settings-file corruption and a menu grid remain. This does not establish stock-main gameplay or stable full-game completion.","大规模本地 PR 整合到达警局和首个任务，作者称可缓慢完成该任务。预热后警局约 4 FPS；任务 2.4–2.7 FPS 属于更早构建，不能混作同一次测试。首次任务加载约 14 分钟，仍有间歇偏色、设置文件损坏和菜单网格。未证明原始 main 可运行游戏或全流程稳定。","يصل دمج PR الكبير إلى المحطة والمهمة الأولى التي يقول الكاتب إنه اجتازها ببطء. المحطة نحو 4 FPS؛ رقم المهمة 2.4–2.7 يعود لبناء أقدم. تحميل أول مهمة نحو 14 دقيقة. تبقى ألوان متقطعة وفساد إعدادات وشبكة بالقائمة. لا لعب main أصلي أو إكمال مستقر مثبت.","A grande integração local chega à esquadra e à primeira missão, que o autor diz conseguir terminar lentamente. Esquadra a cerca de 4 FPS; 2,4–2,7 na missão pertence a um build anterior. Primeiro carregamento em 14 minutos. Persistem cores intermitentes, corrupção de definições e grelha no menu. Não prova main original ou conclusão estável.","Die große lokale PR-Integration erreicht Station und erste Mission, laut Autor langsam durchspielbar. Station etwa 4 FPS; Missionswerte 2,4–2,7 stammen aus einem älteren Build. Erstes Laden etwa 14 Minuten. Farbfehler, beschädigte Einstellungen und Menügitter bleiben. Kein Beleg für unverändertes main oder einen stabilen Gesamtdurchlauf.","La grande intégration locale atteint le commissariat et la première mission, que l’auteur dit pouvoir terminer lentement. Commissariat à environ 4 FPS ; les 2,4–2,7 de la mission concernent une version antérieure. Chargement initial de 14 minutes. Teintes intermittentes, paramètres corrompus et grille du menu persistent. Aucun main original ou parcours complet stable établi.","La gran integración local llega a comisaría y primera misión, que el autor afirma completar lentamente. Comisaría a unos 4 FPS; los 2,4–2,7 de la misión son de un build anterior. Primera carga de 14 minutos. Persisten tintes, ajustes corruptos y rejilla de menú. No demuestra juego en main original ni finalización estable."),L("station ≈4","警局 ≈4","المحطة ≈4","esquadra ≈4","Station ≈4","commissariat ≈4","comisaría ≈4"))]},
{...{"slug": "phasmophobia", "name": "Phasmophobia", "titleId": "PPSA09030", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4680,{"id": "4680-windows-review-20261013", "platform": "windows", "stage": "ingame", "build": "bubblegg/AnyPS5 phasmophobia-port · 2026-10-12 main + 82 commits; exact head unknown", "os": "Windows 11", "gpu": "NVIDIA RTX 5070 Ti", "patched": true},L("An 82-commit fork based on main of 12 October reaches a lobby and contract, with save loading and voice recognition reported. The lobby presents about 25 frames/s and the truck about 10 on RTX 5070 Ti. Stock main still has missing imports; the fork is not pinned to a complete hash here. Online cooperation, audio and a full contract completion are not established.","基于 10 月 12 日 main 的 82 提交分支到达大厅和合约，来源报告存档加载与语音识别可用；RTX 5070 Ti 上大厅约每秒呈现 25 帧，卡车约 10 帧。原始 main 仍缺导入，报告也没有固定分支完整哈希。未证明在线合作、音频或完整完成合约。","فرع من 82 التزاماً فوق main بتاريخ 12 أكتوبر يصل للردهة والعقد، مع تحميل حفظ وتعرف صوتي مبلّغ عنهما. RTX 5070 Ti يعرض نحو 25 إطاراً/ث بالردهة و10 بالشاحنة. main الأصلي ناقص الاستيرادات ولا توجد بصمة كاملة للفرع. التعاون عبر الشبكة والصوت وإكمال العقد غير مثبتة.","Um fork de 82 commits sobre main de 12 de outubro chega ao lobby e contrato, com carregamento de saves e reconhecimento de voz relatados. RTX 5070 Ti apresenta cerca de 25 fotogramas/s no lobby e 10 no camião. Main original ainda tem imports em falta; o hash completo não é indicado. Cooperação online, áudio e contrato completo não comprovados.","Ein Fork mit 82 Commits auf main vom 12. Oktober erreicht Lobby und Auftrag, mit berichteter Speicherladung und Spracherkennung. RTX 5070 Ti präsentiert etwa 25 Bilder/s in der Lobby und 10 im Lkw. Main fehlen Importe; ein vollständiger Fork-Hash fehlt. Online-Koop, Ton und vollständiger Auftrag ungeprüft.","Un fork de 82 commits sur main du 12 octobre atteint le hall et un contrat, avec chargement de sauvegarde et reconnaissance vocale rapportés. RTX 5070 Ti présente environ 25 images/s au hall et 10 au camion. Main manque d’imports ; hash complet absent. Coopération en ligne, son et contrat terminé non établis.","Un fork de 82 commits sobre main del 12 de octubre llega al vestíbulo y contrato, con carga de saves y reconocimiento de voz indicados. RTX 5070 Ti presenta unos 25 cuadros/s en vestíbulo y 10 en camión. Main tiene imports ausentes; falta hash completo del fork. Cooperación online, audio y contrato completo sin verificar."),L("lobby ≈25; truck ≈10","大厅 ≈25；卡车 ≈10","الردهة ≈25؛ الشاحنة ≈10","lobby ≈25; camião ≈10","Lobby ≈25; Lkw ≈10","hall ≈25 ; camion ≈10","vestíbulo ≈25; camión ≈10"))]},
{...{"slug": "blasphemous-2", "name": "Blasphemous 2", "titleId": "PPSA13579", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4687,{"id": "4687-linux-review-20261013", "platform": "linux", "stage": "menu", "build": "unspecified main + #4688 + #3295", "os": "Linux x86-64", "patched": true},L("Two open PRs, #4688 and #3295, reach the title screen for 240 seconds at a reported 59.9 frames/s. No input was sent; gameplay and audio were not tested. The main commit and hardware are unspecified, so this is a title-screen observation without a hardware-scoped benchmark. The PSNCore and descriptor failures on unmodified main remain distinct.","额外加入两个待合并 PR #4688 和 #3295 后，标题画面据报保持 240 秒，约每秒 59.9 帧；没有发送输入，也没有测试游戏过程或音频。来源未固定 main 提交与硬件，因此不生成硬件性能基准。原始 main 的 PSNCore 和描述符故障分别保留。","مع PR المفتوحين #4688 و#3295 تبقى شاشة العنوان 240 ثانية بنحو 59.9 إطاراً/ث. لم يُرسل إدخال ولم يُختبر لعب أو صوت. التزام main والعتاد مجهولان، فلا قياس مرتبط بجهاز. تبقى أخطاء PSNCore والواصف على main الأصلي منفصلة.","Com os PR abertos #4688 e #3295, o título mantém-se 240 s a cerca de 59,9 fotogramas/s. Sem entrada enviada, jogo ou áudio testados. Commit main e equipamento não indicados; não há benchmark por hardware. Falhas PSNCore e descritor do main original continuam distintas.","Mit den offenen PRs #4688 und #3295 bleibt der Titel 240 s bei berichteten 59,9 Bildern/s. Keine Eingabe; Gameplay und Ton ungeprüft. Main-Commit und Hardware fehlen, daher kein hardwarebezogener Benchmark. PSNCore- und Deskriptorfehler des ursprünglichen main bleiben separat.","Avec les PR ouverts #4688 et #3295, le titre reste 240 s à environ 59,9 images/s. Aucune entrée ; jeu et son non testés. Commit main et matériel inconnus, donc aucun benchmark matériel. Les erreurs PSNCore et descripteur de main original restent distinctes.","Con PR abiertas #4688 y #3295, el título permanece 240 s a unos 59,9 cuadros/s. No se envió entrada ni se probó juego o audio. Commit main y hardware desconocidos, sin benchmark de equipo. Los fallos PSNCore y descriptor del main original siguen separados."))]},
{...{"slug": "nhl-27", "name": "EA SPORTS NHL 27", "titleId": "PPSA34063", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4275,{"id": "4275-windows-review-20261013", "platform": "windows", "stage": "menu", "build": "poonasor/AnyPS5 dev 8d541cfdd · upstream 379d8b4e + local integration", "os": "Windows 11", "cpu": "Intel Core i7-7700K", "gpu": "AMD Radeon RX 6700 XT", "driver": "Adrenalin 25.10.45.05 · amdvlk64 B026363", "patched": true},L("The older fork reaches menus, team selection and match loading at roughly 1.3–2 FPS, with menu music, then aborts. No hockey gameplay was tested. On separately checked main d146ec1b6, conversion stops before launch. The fork uses rendering shortcuts and loop guards; its results must not be assigned to current main or newer fixes.","较旧分支到达菜单、选队和比赛加载，约 1.3–2 FPS，可听菜单音乐，随后中止；没有测试冰球比赛过程。另行检查的 main d146ec1b6 在转换时就停止。分支涉及渲染简化与循环保护，不能把其结果归到当前 main 或之后的修复。","الفرع القديم يصل للقوائم واختيار الفرق وتحميل المباراة بنحو 1.3–2 FPS مع موسيقى ثم يتوقف. لم يُختبر لعب هوكي. main d146ec1b6 المنفصل يفشل بالتحويل قبل البدء. الفرع يستخدم اختصارات رسم وحماية حلقات؛ النتيجة لا تخص main الحالي أو إصلاحاته اللاحقة.","O fork antigo chega a menus, equipas e carregamento de partida a 1,3–2 FPS, com música, e aborta. Não foi jogada uma partida. Main d146ec1b6 testado separadamente para na conversão. Há atalhos gráficos e guardas de ciclos; não atribuir resultados ao main atual ou a fixes posteriores.","Der ältere Fork erreicht Menüs, Teamauswahl und Laden mit etwa 1,3–2 FPS und Musik, dann Abbruch. Kein Eishockey-Gameplay getestet. Separates main d146ec1b6 scheitert schon bei der Konvertierung. Renderabkürzungen und Schleifenwächter gehören zum Fork, nicht zum aktuellen main.","Le fork ancien atteint menus, équipes et chargement à environ 1,3–2 FPS avec musique, puis plante. Aucun match joué. Main d146ec1b6 vérifié séparément échoue dès la conversion. Raccourcis graphiques et garde de boucles appartiennent au fork, pas au main actuel.","El fork antiguo llega a menús, equipos y carga a unos 1,3–2 FPS con música, y aborta. No se probó hockey jugable. Main d146ec1b6 separado falla en la conversión. El fork usa atajos de render y guardas de bucles; sus resultados no pertenecen al main actual."),L("menus 1.3–2","菜单 1.3–2","القائمة 1.3–2","menus 1,3–2","Menüs 1,3–2","menus 1,3–2","menús 1,3–2"))]},
{...{"slug": "ghost-of-tsushima-directors-cut", "name": "Ghost of Tsushima Director’s Cut", "titleId": "PPSA02225", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4461,{"id": "4461-windows-review-20261013", "platform": "windows", "stage": "boot", "build": "main 961b25fe24582361833a90b912eff5793550afdf + Oct 11 staged driver SHA256 856d90ed96c14afbcb9dc3283dc9057918ecf7cefe83c01953be937e55e87db7", "os": "Windows 11 Home Single Language · 26200", "cpu": "AMD Ryzen 7 7840HS", "gpu": "NVIDIA RTX 4060 Laptop GPU", "driver": "32.0.16.1742", "version": "02.024 · inferred; not console-verified", "patched": true, "testDate": "2026-10-11"},L("The preserved 11 October driver run creates a window and presents buffers, but all five captured frames are black and scene geometry was not observed. The roughly 59 title counter measures presentation, not playable scenes. Content 02.024 is inferred, not console-verified. Later diagnostic draws lack pixel captures and do not establish a fix or gameplay.","保留的 10 月 11 日驱动测试创建窗口并呈现缓冲区，但五张捕获画面均为黑色，未观察到场景几何。标题约 59 的计数反映呈现，不是可玩场景性能。内容版本 02.024 来自推断，未经主机核验；后续诊断绘制没有像素捕获，也未证明已修复或运行到游戏。","اختبار 11 أكتوبر المحفوظ ينشئ نافذة ويعرض مخازن، لكن الصور الخمس سوداء ولا هندسة مشهد مرصودة. عداد نحو 59 هو عرض لا أداء لعب. النسخة 02.024 مستنتجة لا موثقة على الجهاز. الرسم التشخيصي اللاحق بلا صور لا يثبت إصلاحاً أو لعباً.","O teste preservado de 11 de outubro cria janela e apresenta buffers, mas os cinco fotogramas são pretos e não se observou geometria de cena. O contador de cerca de 59 mede apresentação, não jogo. Versão 02.024 inferida, não verificada na consola. Diagnósticos posteriores sem capturas não comprovam correção ou jogo.","Der erhaltene Treiberlauf vom 11. Oktober erstellt Fenster und präsentiert Puffer, doch alle fünf Bilder sind schwarz; Szenengeometrie fehlt. Der Zähler um 59 misst Präsentation, kein Gameplay. Version 02.024 ist abgeleitet, nicht konsolenbestätigt. Spätere Diagnosedraws ohne Pixelbilder belegen keinen Fix.","L’essai conservé du 11 octobre crée une fenêtre et présente des buffers, mais les cinq images sont noires ; aucune géométrie de scène observée. Le compteur proche de 59 mesure la présentation, pas le jeu. Version 02.024 déduite, non vérifiée sur console. Les diagnostics suivants sans captures ne prouvent pas de correction.","La prueba conservada del 11 de octubre abre ventana y presenta buffers, pero las cinco imágenes son negras y no se observó geometría. El contador cercano a 59 mide presentación, no juego. Versión 02.024 inferida, sin verificar en consola. Los diagnósticos posteriores sin capturas no prueban arreglo ni juego."))]},
{...{"slug": "lost-soul-aside", "name": "Lost Soul Aside", "titleId": "PPSA26358", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4387,{"id": "4387-windows-review-20261013", "platform": "windows", "stage": "menu", "build": "main d146ec1b667c3e34bebf817efcc094bdac393423 + #3739/#3763/#3831/#4150/#4271/#4281/#1077/#3878/#3952 + local integration", "os": "Windows 11", "cpu": "AMD Ryzen 7 7800X3D", "gpu": "NVIDIA RTX 5070 12 GB", "driver": "617.14 · 32.0.16.1714", "patched": true, "source": "https://github.com/boykopovar/AnyPS5/issues/4387"},L("A local integration reaches the title screen with flashing green fragments on the recorded build. The issue was later closed and linked to the array-slice XOR fix #4551, but that closure does not provide a new fixed-build game test here. Gameplay, input, audio and FPS remain unverified. Preserve the original integration and artifact observation.","已记录的本地整合到达标题画面，但有绿色闪烁碎片。问题后来关闭并关联数组切片 XOR 修复 #4551；关闭状态本身并没有在这里提供修复构建的新游戏复测。游戏过程、输入、音频和 FPS 仍未验证，原整合与伪影观察继续保留。","يصل الدمج المسجل إلى العنوان مع شظايا خضراء وامضة. أُغلقت المشكلة لاحقاً وربطت بإصلاح XOR للشرائح #4551، لكن الإغلاق لا يقدم اختبار لعبة جديداً للبناء المصحح. اللعب والتحكم والصوت وFPS غير موثقة؛ يحتفظ بالملاحظة الأصلية.","A integração registada chega ao título com fragmentos verdes intermitentes. A issue foi fechada e associada ao XOR de slices #4551, mas o fecho não fornece um novo teste do jogo corrigido. Jogo, entrada, áudio e FPS não verificados; mantém-se a observação original.","Die dokumentierte Integration erreicht den Titel mit grün flackernden Fragmenten. Das Issue wurde geschlossen und #4551 zugeordnet, liefert hier aber keinen neuen Spieltest des korrigierten Builds. Gameplay, Eingaben, Ton und FPS ungeprüft; ursprüngliche Beobachtung bleibt erhalten.","L’intégration documentée atteint le titre avec des fragments verts clignotants. L’issue a été fermée et liée au XOR de tranches #4551, sans nouveau test de jeu corrigé fourni ici. Jeu, commandes, son et FPS non vérifiés ; observation originale conservée.","La integración registrada llega al título con fragmentos verdes intermitentes. La issue se cerró y se vinculó al XOR de slices #4551, sin aportar aquí un nuevo test del juego corregido. Juego, entrada, audio y FPS sin verificar; se conserva la observación original."))]},
{...{"slug": "minecraft", "name": "Minecraft · PS5 retail", "titleId": "PPSA17221", "edition": "PS5", "reviewed": "2026-10-13"},reports:[R(4216,{"id": "4216-linux-review-20261013", "platform": "linux", "stage": "ingame", "build": "main d592d54e1 + #4215/#4218/#454/#3633/#3604 + #4216", "os": "CachyOS · kernel 7.2.2 · GCC 16.2.1", "gpu": "AMD Radeon RX 6650 XT", "driver": "RADV Mesa 26.2.4", "patched": true, "source": "https://github.com/boykopovar/AnyPS5/pull/4216#issuecomment-6128187954", "updated": "2026-10-12T16:18:28Z"},L("This retail PPSA17221 Linux world test uses a local PR stack, separate from Minecraft Preview PPSA19639. Adding #4216 changes the reported in-world counter from about 2 to about 6 FPS on RX 6650 XT; registry-copy time falls from 111 to 6 seconds over comparable three-minute runs. No version, CPU, save cycle, audio or multiplayer verification is supplied. These are stack-specific observations.","这份 PPSA17221 正式版 Linux 世界测试使用本地 PR 栈，与 Minecraft Preview PPSA19639 分开。加入 #4216 后，RX 6650 XT 世界内计数据报从约 2 升至约 6 FPS；相近三分钟运行中的注册表复制耗时从 111 降到 6 秒。未提供游戏版本、CPU、存档周期、音频或联机验证，结果仅适用该整合。","اختبار عالم Linux للإصدار التجاري PPSA17221 يستخدم دمج PR محلياً، منفصلاً عن Preview PPSA19639. إضافة #4216 ترفع العداد المبلغ من نحو 2 إلى 6 FPS على RX 6650 XT؛ نسخ السجل ينخفض من 111 إلى 6 ث في تشغيلات نحو ثلاث دقائق. النسخة وCPU والحفظ والصوت والشبكة غير موثقة.","Este teste Linux de mundo PPSA17221 comercial usa PR locais, separado do Preview PPSA19639. #4216 altera o contador relatado de cerca de 2 para 6 FPS na RX 6650 XT; cópias do registo passam de 111 para 6 s em testes comparáveis de três minutos. Versão, CPU, saves, áudio e multiplayer não indicados.","Dieser Linux-Welttest der Handelsversion PPSA17221 nutzt lokale PRs, getrennt von Preview PPSA19639. #4216 hebt den berichteten Zähler auf RX 6650 XT von etwa 2 auf 6 FPS; Registerkopien sinken bei vergleichbaren Dreiminutenläufen von 111 auf 6 s. Version, CPU, Speichern, Ton und Multiplayer fehlen.","Cet essai Linux en monde de PPSA17221 commercial utilise des PR locaux, séparément de Preview PPSA19639. #4216 fait passer le compteur rapporté sur RX 6650 XT de 2 à 6 FPS environ ; les copies de registre passent de 111 à 6 s sur trois minutes comparables. Version, CPU, sauvegarde, son et multijoueur inconnus.","Este test Linux de mundo de PPSA17221 comercial usa PR locales, separado de Preview PPSA19639. #4216 eleva el contador indicado en RX 6650 XT de unos 2 a 6 FPS; las copias del registro bajan de 111 a 6 s en tres minutos comparables. Versión, CPU, saves, audio y multijugador no especificados."),"≈6")]}
];

// Follow-ups retain their own build and test scope.
maintenanceReports['gran-turismo-7']=[...(maintenanceReports['gran-turismo-7']||[]),{"id": "4697-windows-music-rally-review-20261013", "platform": "windows", "stage": "ingame", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/4697#discussioncomment-18892537", "updated": "2026-10-13T02:47:34Z", "testDate": null, "build": "Same local integration as #4697; race-test revision and full patch set not pinned", "os": "Windows", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "benchmarks": [], "media": ["https://raw.githubusercontent.com/gjonn/AnyPS5/discussion-media/ppsa01317-2026-10-12-v3-race.jpg", "https://raw.githubusercontent.com/gjonn/AnyPS5/discussion-media/ppsa01317-2026-10-12-v3-race2.jpg"],summary:L("The local branch loads the first Music Rally song with HUD and Auto Drive and reaches TRY AGAIN at its end, at about 2 FPS. The minimap is corrupted; green/cyan rendering may recur, one of eight loads lost the GPU device, and skipping the intro caused a crash. Offline networking remains enabled. Manual driving, other races and completion are unverified. The follow-up does not restate its content version or hardware; this is not stock main.","本地分支加载Music Rally 的第一首曲目，显示 HUD 并使用 Auto Drive，歌曲结束后到达 TRY AGAIN，来源称约 2 FPS。小地图仍损坏，绿色与青色异常可能重现；八次加载中一次设备丢失，跳过开场也曾崩溃。仍启用离线网络设置。手动驾驶、其他比赛与通关未验证，跟进未重述内容版本与硬件，不能视为原始 main 结果。","يحمل الفرع المحلي أول أغنية Music Rally مع HUD وAuto Drive ويصل إلى TRY AGAIN عند نهايتها، بنحو 2 FPS بحسب المصدر. الخريطة المصغرة تالفة وقد تعود الألوان الخضراء والسماوية؛ فُقد GPU مرة من ثماني وتعطل تجاوز المقدمة. الشبكة دون اتصال. القيادة اليدوية والسباقات الأخرى والإكمال غير متحققة، ولم تذكر المتابعة الإصدار والعتاد مجدداً؛ ليس main الأصلي.","O ramo local carrega a primeira música de Music Rally com HUD e Auto Drive e chega a TRY AGAIN no fim, a cerca de 2 FPS segundo a fonte. O minimapa está corrompido; tons verdes/cianos podem voltar, uma de oito cargas perdeu a GPU e saltar a introdução causou uma falha. A rede continua offline. Condução manual, outras corridas e conclusão não foram verificadas; versão e equipamento não foram repetidos. Não é main sem alterações.","Der lokale Zweig lädt den ersten Music-Rally-Song mit HUD und Auto Drive und erreicht danach TRY AGAIN, laut Quelle mit etwa 2 FPS. Die Minikarte ist defekt; Grün-/Cyanfehler könnten wiederkehren, einer von acht Starts verlor die GPU und das Überspringen des Intros verursachte einen Absturz. Offline-Netzwerk bleibt aktiv. Manuelles Fahren, andere Rennen und Abschluss sind ungeprüft; Version und Hardware werden nicht erneut angegeben. Kein unverändertes main.","La branche locale charge la première chanson de Music Rally avec HUD et Auto Drive, puis atteint TRY AGAIN, à environ 2 FPS selon la source. La minicarte est corrompue ; les teintes vertes/cyan peuvent revenir, un chargement sur huit a perdu le GPU et passer l’introduction a causé un plantage. Le réseau reste hors ligne. Conduite manuelle, autres courses et fin du jeu sont non vérifiées ; version et matériel ne sont pas reprécisés. Ce n’est pas main sans modification.","La rama local carga la primera canción de Music Rally con HUD y Auto Drive y llega a TRY AGAIN al terminar, a unos 2 FPS según la fuente. El minimapa está dañado; los tonos verdes/cian pueden volver, una de ocho cargas perdió la GPU y saltar la introducción causó un fallo. La red sigue offline. Conducción manual, otras carreras y finalización no se verificaron; versión y equipo no se repiten. No es main sin cambios.")}];
maintenanceReports['astro-bot']=[...(maintenanceReports['astro-bot']||[]),{"id": "357-linux-integration-review-20261013", "platform": "linux", "stage": "ingame", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18889584", "updated": "2026-10-12T22:41:41Z", "testDate": null, "build": "astro-main/integration-1013a bdb0ba35 · main 682ef0c1 + PR stack", "os": "Linux", "cpu": null, "gpu": "NVIDIA RTX 4090", "driver": null, "version": null, "patched": true, "benchmarks": [], "media": [],summary:L("Three quiet Linux runs per configuration observe title, menu, first-level space and Space Station scenes on integration bdb0ba35. The stack reports 26.4 FPS at title and 24.8 in menus; level frame times are 33.1 ms and 317 ms, not whole-game FPS. Clouds and sky remain missing, and not all astrobot optimizations are ported. Plain main still needs depth/stencil fixes before title startup. Controls, audio, saves and completion are not retested.","整合 bdb0ba35 在 Linux 上每组设置运行三次，观察标题、菜单、首关太空与 Space Station 场景。来源称标题 26.4 FPS、菜单 24.8 FPS；关卡帧时间为 33.1 ms 与 317 ms，不能当作整部游戏帧数。云海与天空仍缺失，astrobot 优化也尚未全部移植。原始 main 仍需深度／模板修复才能进入标题。此次未复测操作、声音、存档与通关。","يرصد الدمج bdb0ba35 على Linux ثلاث تشغيلات لكل إعداد للعنوان والقائمة وفضاء المستوى الأول وSpace Station. يذكر المصدر 26.4 FPS للعنوان و24.8 للقوائم؛ أزمنة الإطار 33.1 و317 ms ليست معدل اللعبة كاملة. السحب والسماء مفقودة ولم تنقل كل تحسينات astrobot. يحتاج main الأصلي إصلاحات العمق/stencil قبل العنوان. لم تعاد اختبارات التحكم والصوت والحفظ والإكمال.","A integração bdb0ba35 observa título, menu, espaço do primeiro nível e Space Station em três execuções Linux por configuração. A fonte indica 26,4 FPS no título e 24,8 nos menus; tempos de quadro de 33,1 e 317 ms não representam todo o jogo. Nuvens e céu continuam ausentes, e faltam otimizações astrobot. Main original precisa de correções depth/stencil antes do título. Controlos, áudio, dados guardados e conclusão não foram repetidos.","Integration bdb0ba35 beobachtet unter Linux je drei Läufe von Titel, Menü, Weltraum des ersten Levels und Space Station. Die Quelle nennt 26,4 FPS im Titel und 24,8 in Menüs; Frametimes von 33,1 und 317 ms sind keine Gesamtspiel-FPS. Wolken und Himmel fehlen; nicht alle astrobot-Optimierungen sind portiert. Unverändertes main benötigt Tiefen-/Stencil-Fixes vor dem Titel. Eingabe, Ton, Speichern und Abschluss wurden nicht erneut geprüft.","L’intégration bdb0ba35 observe titre, menu, espace du premier niveau et Space Station pendant trois essais Linux par configuration. La source indique 26,4 FPS au titre et 24,8 dans les menus ; les temps de trame de 33,1 et 317 ms ne décrivent pas tout le jeu. Nuages et ciel restent absents, et toutes les optimisations astrobot ne sont pas portées. Main original exige des correctifs profondeur/stencil avant le titre. Commandes, son, sauvegardes et fin du jeu ne sont pas retestés.","La integración bdb0ba35 observa título, menú, espacio del primer nivel y Space Station en tres ejecuciones Linux por configuración. La fuente indica 26,4 FPS en título y 24,8 en menús; tiempos de cuadro de 33,1 y 317 ms no describen todo el juego. Faltan nubes y cielo y no se portaron todas las optimizaciones astrobot. Main original necesita arreglos de profundidad/stencil antes del título. No se repitieron controles, sonido, guardado ni finalización.")}];
maintenanceReports['doom-homebrew']=[...(maintenanceReports['doom-homebrew']||[]),{"id": "2475-windows-nvidia-startup-review-20261013", "platform": "windows", "stage": "boot", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/2475#discussioncomment-18887166", "updated": "2026-10-12T19:53:08Z", "testDate": null, "build": "main 59a2167a9", "os": "Windows 11", "cpu": null, "gpu": "NVIDIA RTX 4070 Laptop GPU", "driver": "32.0.16.1692", "version": "01.001.000 · DOOM Shareware", "patched": false, "benchmarks": [], "media": [],summary:L("Unmodified main 59a2167a9 keeps AGC compute presentation in four Windows/NVIDIA startup runs, each with an empty AnyPS5 shader cache. The NVIDIA driver cache was not cleared, so only the first run was driver-cold. Temporary-delay experiments are separate. Gameplay, audio and FPS were not retested, and Linux Intel CPU-scaler fallback remains unexplained. This is DOOM Shareware homebrew PPSA99666, not a retail DOOM edition.","原始 main 59a2167a9 在 Windows/NVIDIA 上四次启动均保持 AGC compute 呈现，每次清空 AnyPS5 着色器缓存。NVIDIA 驱动缓存未清空，只有首轮对驱动而言是冷启动。临时延迟对照实验另列。本次未复测游戏操作、声音或 FPS，也未解释 Linux Intel 的 CPU scaler 回退。对象为 PPSA99666 的 DOOM Shareware 自制移植版，不是商业 DOOM 版本。","يحافظ main الأصلي 59a2167a9 على عرض AGC compute في أربع تشغيلات Windows/NVIDIA بذاكرة shaders فارغة للأداة. لم تمسح ذاكرة تعريف NVIDIA، لذا الأولى فقط باردة للتعريف. تجارب التأخير المؤقت منفصلة. لم يعد اختبار اللعب والصوت وFPS، ويبقى رجوع Linux Intel إلى CPU scaler غير مفسر. هذه نسخة DOOM Shareware المنزلية PPSA99666، لا إصدار تجاري.","O main original 59a2167a9 mantém apresentação AGC compute em quatro arranques Windows/NVIDIA, com cache AnyPS5 vazia em cada um. A cache do controlador não foi limpa: só o primeiro arranque estava frio para ele. Experiências temporárias com atraso são separadas. Jogo, áudio e FPS não foram repetidos; o CPU scaler no Linux Intel continua por explicar. É DOOM Shareware homebrew PPSA99666, não uma edição comercial.","Unverändertes main 59a2167a9 behält AGC-Compute-Präsentation in vier Windows/NVIDIA-Starts mit jeweils leerem AnyPS5-Shadercache bei. Der Treibercache wurde nicht geleert; nur der erste Lauf war treiberkalt. Temporäre Verzögerungstests sind getrennt. Gameplay, Ton und FPS wurden nicht erneut geprüft; der Linux-Intel-CPU-Scaler bleibt ungeklärt. Es geht um DOOM-Shareware-Homebrew PPSA99666, keine kommerzielle Ausgabe.","Main sans modification 59a2167a9 conserve la présentation AGC compute pendant quatre démarrages Windows/NVIDIA, chacun avec un cache AnyPS5 vide. Le cache du pilote n’a pas été vidé ; seul le premier essai est froid pour le pilote. Les expériences de retard sont distinctes. Jeu, son et FPS ne sont pas retestés ; le repli CPU scaler sous Linux Intel reste inexpliqué. Il s’agit de DOOM Shareware homebrew PPSA99666, pas d’une édition commerciale.","Main sin modificar 59a2167a9 mantiene presentación AGC compute en cuatro inicios Windows/NVIDIA, con caché AnyPS5 vacía cada vez. No se limpió la caché del controlador: solo el primer inicio estaba frío para él. Los experimentos con retraso son distintos. No se repitieron juego, sonido ni FPS; el CPU scaler de Linux Intel sigue sin explicación. Es DOOM Shareware homebrew PPSA99666, no una edición comercial.")}];

// 2026-10-14: independent source observations preserve historical builds.
maintenanceReports["dreaming-sarah"]=[...(maintenanceReports["dreaming-sarah"]||[]),{...{"id": "3003-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/3003#discussioncomment-18908200", "updated": "2026-10-13T19:46:10Z", "testDate": null, "build": "main 18c438b10", "cpu": "AMD Ryzen 9 7950X", "gpu": "NVIDIA RTX 4070 Ti SUPER", "driver": null, "version": null, "patched": false, "media": [], "benchmarks": [{"cpu": "AMD Ryzen 9 7950X", "gpu": "NVIDIA RTX 4070 Ti SUPER", "fps": "60", "context": {"en": "RAM: 128 GB. Toolchain: MinGW-w64 GCC 15.2.0 · Release. The author reports steady 60 FPS in tested gameplay on clean main with matching libraries. An earlier build on this PC gave about 15 FPS; no responsible change was isolated. Driver, content version, test duration, audio and completion are not stated.", "zh": "内存：128 GB。构建工具：MinGW-w64 GCC 15.2.0 · Release。作者在原始 main 与配套运行库上报告已测试游戏过程稳定 60 FPS。同一电脑旧构建约 15 FPS，但没有隔离出具体原因。驱动、内容版本、测试时长、声音与通关未说明。", "ar": "الذاكرة: 128 GB. الأدوات: MinGW-w64 GCC 15.2.0 · Release. يذكر الكاتب 60 FPS ثابتة في اللعب المختبر على main الأصلي ومكتبات مطابقة. بلغ بناء سابق نحو 15 ؛ لم يعزل سبب الفرق. التعريف ونسخة المحتوى والمدة والصوت والإكمال غير مذكورة.", "pt": "RAM: 128 GB. Ferramentas: MinGW-w64 GCC 15.2.0 · Release. O autor relata 60 FPS estáveis no jogo testado, com main original e bibliotecas correspondentes. Um build anterior dava cerca de 15; a causa não foi isolada. Controlador, versão, duração, áudio e conclusão não indicados.", "de": "RAM: 128 GB. Werkzeuge: MinGW-w64 GCC 15.2.0 · Release. Der Autor berichtet stabile 60 FPS im getesteten Gameplay mit unverändertem main und passenden Bibliotheken. Ein früherer Build erreichte etwa 15; die Ursache ist nicht isoliert. Treiber, Inhaltsversion, Dauer, Ton und Abschluss fehlen.", "fr": "RAM : 128 GB. Outils : MinGW-w64 GCC 15.2.0 · Release. L’auteur rapporte 60 FPS stables dans le jeu testé sur main sans modification et avec les bibliothèques correspondantes. Un ancien build donnait environ 15 ; cause non isolée. Pilote, version, durée, son et fin non précisés.", "es": "RAM: 128 GB. Herramientas: MinGW-w64 GCC 15.2.0 · Release. El autor indica 60 FPS estables en el juego probado con main original y bibliotecas correspondientes. Un build anterior daba unos 15; no se aisló la causa. Sin datos de controlador, versión, duración, audio o finalización."}}], "platform": "windows", "stage": "ingame", "os": "Windows 11"},summary:L("RAM: 128 GB. Toolchain: MinGW-w64 GCC 15.2.0 · Release. The author reports steady 60 FPS in tested gameplay on clean main with matching libraries. An earlier build on this PC gave about 15 FPS; no responsible change was isolated. Driver, content version, test duration, audio and completion are not stated.","内存：128 GB。构建工具：MinGW-w64 GCC 15.2.0 · Release。作者在原始 main 与配套运行库上报告已测试游戏过程稳定 60 FPS。同一电脑旧构建约 15 FPS，但没有隔离出具体原因。驱动、内容版本、测试时长、声音与通关未说明。","الذاكرة: 128 GB. الأدوات: MinGW-w64 GCC 15.2.0 · Release. يذكر الكاتب 60 FPS ثابتة في اللعب المختبر على main الأصلي ومكتبات مطابقة. بلغ بناء سابق نحو 15 ؛ لم يعزل سبب الفرق. التعريف ونسخة المحتوى والمدة والصوت والإكمال غير مذكورة.","RAM: 128 GB. Ferramentas: MinGW-w64 GCC 15.2.0 · Release. O autor relata 60 FPS estáveis no jogo testado, com main original e bibliotecas correspondentes. Um build anterior dava cerca de 15; a causa não foi isolada. Controlador, versão, duração, áudio e conclusão não indicados.","RAM: 128 GB. Werkzeuge: MinGW-w64 GCC 15.2.0 · Release. Der Autor berichtet stabile 60 FPS im getesteten Gameplay mit unverändertem main und passenden Bibliotheken. Ein früherer Build erreichte etwa 15; die Ursache ist nicht isoliert. Treiber, Inhaltsversion, Dauer, Ton und Abschluss fehlen.","RAM : 128 GB. Outils : MinGW-w64 GCC 15.2.0 · Release. L’auteur rapporte 60 FPS stables dans le jeu testé sur main sans modification et avec les bibliothèques correspondantes. Un ancien build donnait environ 15 ; cause non isolée. Pilote, version, durée, son et fin non précisés.","RAM: 128 GB. Herramientas: MinGW-w64 GCC 15.2.0 · Release. El autor indica 60 FPS estables en el juego probado con main original y bibliotecas correspondientes. Un build anterior daba unos 15; no se aisló la causa. Sin datos de controlador, versión, duración, audio o finalización.")}];
maintenanceReports["hollow-knight-silksong"]=[...(maintenanceReports["hollow-knight-silksong"]||[]),{...{"id": "1996-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/1996#discussioncomment-18906815", "updated": "2026-10-13T18:24:31Z", "testDate": null, "build": "main 18c438b10", "cpu": "Intel Core i9-10850K", "gpu": "NVIDIA RTX 3080 · 10 GB", "driver": "610.74", "version": "01.000.010", "patched": false, "media": [], "benchmarks": [{"cpu": "Intel Core i9-10850K", "gpu": "NVIDIA RTX 3080 · 10 GB", "fps": "50–60", "context": {"en": "RAM: 32 GB. Toolchain: WinLibs GCC 15.2.0 r7 · Release. Plain main boots into a new game with DualSense, correct text, rendering and audio, without runtime overrides. The window counter stays above 50 and mostly 60 FPS in focused gameplay. Background FIFO measurements fell to 3.9; mailbox held 59.95 only in a separate menu test. Completion is unverified.", "zh": "内存：32 GB。构建工具：WinLibs GCC 15.2.0 r7 · Release。原始 main 无运行变量即可新开游戏，DualSense、文字、画面与声音均有记录。前台游戏窗口计数超过 50、通常 60 FPS。后台 FIFO 测量降至 3.9；mailbox 的 59.95 仅属另一菜单测试。未验证通关。", "ar": "الذاكرة: 32 GB. الأدوات: WinLibs GCC 15.2.0 r7 · Release. يدخل main الأصلي لعبة جديدة مع DualSense ونص ورسم وصوت صحيح دون متغيرات إضافية. عداد اللعب الأمامي فوق 50 وغالباً 60 FPS. بلغ FIFO بالخلفية 3.9 ؛ 59.95 مع mailbox اختبار قائمة منفصل. الإكمال غير موثق.", "pt": "RAM: 32 GB. Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Main original inicia um novo jogo com DualSense, texto, imagem e áudio corretos, sem variáveis extra. Contador acima de 50, sobretudo 60 FPS em primeiro plano. FIFO em segundo plano deu 3,9; mailbox a 59,95 é outro teste de menu. Conclusão não verificada.", "de": "RAM: 32 GB. Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Unverändertes main startet ein neues Spiel mit DualSense, korrektem Text, Bild und Ton ohne zusätzliche Variablen. Vordergrund-Zähler über 50, meist 60 FPS. Hintergrund-FIFO ergab 3,9; mailbox mit 59,95 betrifft einen separaten Menütest. Abschluss ungeprüft.", "fr": "RAM : 32 GB. Outils : WinLibs GCC 15.2.0 r7 · Release. Main sans modification lance une nouvelle partie avec DualSense, texte, rendu et son corrects, sans variables supplémentaires. Compteur au premier plan supérieur à 50, surtout 60 FPS. FIFO en arrière-plan : 3,9 ; mailbox à 59,95 est un autre test de menu. Fin non vérifiée.", "es": "RAM: 32 GB. Herramientas: WinLibs GCC 15.2.0 r7 · Release. Main original inicia una partida con DualSense, texto, gráficos y audio correctos sin variables extra. Contador en primer plano superior a 50, normalmente 60 FPS. FIFO en segundo plano dio 3,9; mailbox a 59,95 pertenece a otra prueba de menú. Finalización sin verificar."}}], "platform": "windows", "stage": "ingame", "os": "Windows 11"},summary:L("RAM: 32 GB. Toolchain: WinLibs GCC 15.2.0 r7 · Release. Plain main boots into a new game with DualSense, correct text, rendering and audio, without runtime overrides. The window counter stays above 50 and mostly 60 FPS in focused gameplay. Background FIFO measurements fell to 3.9; mailbox held 59.95 only in a separate menu test. Completion is unverified.","内存：32 GB。构建工具：WinLibs GCC 15.2.0 r7 · Release。原始 main 无运行变量即可新开游戏，DualSense、文字、画面与声音均有记录。前台游戏窗口计数超过 50、通常 60 FPS。后台 FIFO 测量降至 3.9；mailbox 的 59.95 仅属另一菜单测试。未验证通关。","الذاكرة: 32 GB. الأدوات: WinLibs GCC 15.2.0 r7 · Release. يدخل main الأصلي لعبة جديدة مع DualSense ونص ورسم وصوت صحيح دون متغيرات إضافية. عداد اللعب الأمامي فوق 50 وغالباً 60 FPS. بلغ FIFO بالخلفية 3.9 ؛ 59.95 مع mailbox اختبار قائمة منفصل. الإكمال غير موثق.","RAM: 32 GB. Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Main original inicia um novo jogo com DualSense, texto, imagem e áudio corretos, sem variáveis extra. Contador acima de 50, sobretudo 60 FPS em primeiro plano. FIFO em segundo plano deu 3,9; mailbox a 59,95 é outro teste de menu. Conclusão não verificada.","RAM: 32 GB. Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Unverändertes main startet ein neues Spiel mit DualSense, korrektem Text, Bild und Ton ohne zusätzliche Variablen. Vordergrund-Zähler über 50, meist 60 FPS. Hintergrund-FIFO ergab 3,9; mailbox mit 59,95 betrifft einen separaten Menütest. Abschluss ungeprüft.","RAM : 32 GB. Outils : WinLibs GCC 15.2.0 r7 · Release. Main sans modification lance une nouvelle partie avec DualSense, texte, rendu et son corrects, sans variables supplémentaires. Compteur au premier plan supérieur à 50, surtout 60 FPS. FIFO en arrière-plan : 3,9 ; mailbox à 59,95 est un autre test de menu. Fin non vérifiée.","RAM: 32 GB. Herramientas: WinLibs GCC 15.2.0 r7 · Release. Main original inicia una partida con DualSense, texto, gráficos y audio correctos sin variables extra. Contador en primer plano superior a 50, normalmente 60 FPS. FIFO en segundo plano dio 3,9; mailbox a 59,95 pertenece a otra prueba de menú. Finalización sin verificar.")}];
maintenanceReports["silt"]=[...(maintenanceReports["silt"]||[]),{...{"id": "2126-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/2126#discussioncomment-18901855", "updated": "2026-10-13T14:26:10Z", "testDate": null, "build": "main ff8fe4dbc", "cpu": null, "gpu": "AMD Radeon RX 5700 XT", "driver": "32.0.21045.5002", "version": "01.003.000", "patched": false, "media": [], "benchmarks": [], "platform": "windows", "stage": "ingame", "os": "Windows 11 · 10.0.26200"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7. Unmodified main with no environment overrides reaches gameplay with audio and writes GameSave.bin. The former MSAA override and four local changes are unnecessary on this pin. Unity modules stay in Media/Modules and Media/Plugins and are converted with --module-dir. FPS, reload and completion are untested.","构建工具：WinLibs GCC 15.2.0 r7。原始 main 无环境变量即可到达游戏过程，声音可听并写入 GameSave.bin；本提交不再需要旧 MSAA 变量和四项本地改动。Unity 模块留在 Media/Modules 与 Media/Plugins，用 --module-dir 转换。FPS、重载及通关未验证。","الأدوات: WinLibs GCC 15.2.0 r7. يصل main الأصلي بلا متغيرات إضافية إلى اللعب والصوت ويكتب GameSave.bin. لا يحتاج تغيير MSAA أو التعديلات الأربعة القديمة. تبقى وحدات Unity بمجلداتها وتحول عبر --module-dir. FPS وإعادة التحميل والإكمال غير مختبرة.","Ferramentas: WinLibs GCC 15.2.0 r7. Main original, sem variáveis extra, chega ao jogo com áudio e escreve GameSave.bin. Já não precisa do ajuste MSAA nem das quatro alterações locais. Módulos Unity ficam nas pastas originais, convertidos com --module-dir. FPS, recarga e conclusão não testados.","Werkzeuge: WinLibs GCC 15.2.0 r7. Unverändertes main erreicht ohne Zusatzvariablen Gameplay mit Ton und schreibt GameSave.bin. Alte MSAA-Option und vier lokale Änderungen entfallen auf diesem Stand. Unity-Module bleiben in ihren Ordnern und werden mit --module-dir konvertiert. FPS, Laden und Abschluss ungeprüft.","Outils : WinLibs GCC 15.2.0 r7. Main sans modification atteint le jeu avec son et écrit GameSave.bin, sans variables supplémentaires. L’ancien réglage MSAA et quatre changements locaux ne sont plus nécessaires. Modules Unity conservés dans leurs dossiers, convertis avec --module-dir. FPS, rechargement et fin non testés.","Herramientas: WinLibs GCC 15.2.0 r7. Main original llega al juego con sonido y escribe GameSave.bin sin variables extra. Ya no necesita el ajuste MSAA ni cuatro cambios locales. Los módulos Unity conservan sus carpetas y se convierten con --module-dir. FPS, recarga y finalización sin probar.")}];
maintenanceReports["pac-man-world-re-pac"]=[...(maintenanceReports["pac-man-world-re-pac"]||[]),{...{"id": "3443-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/3443#discussioncomment-18901719", "updated": "2026-10-13T14:27:21Z", "testDate": null, "build": "main ff8fe4dbc", "cpu": null, "gpu": "AMD Radeon RX 5700 XT", "driver": "32.0.21045.5002", "version": "01.000.002", "patched": false, "media": [], "benchmarks": [], "platform": "windows", "stage": "ingame", "os": "Windows 11 · 10.0.26200"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7. Plain main boots, accepts the EULA, loads save data and plays a level with audio, without patches or environment overrides. No errors were logged. The formerly problematic level-complete transition was not reached; FPS and completion remain unknown.","构建工具：WinLibs GCC 15.2.0 r7。原始 main 无补丁或环境变量即可启动、接受 EULA、加载存档并游玩关卡，声音可听且日志无错误。此前有问题的关卡完成切换本次没有到达，FPS 和通关仍未知。","الأدوات: WinLibs GCC 15.2.0 r7. يبدأ main الأصلي ويقبل EULA ويحمل الحفظ ويشغل مستوى بصوت دون تعديلات أو متغيرات. لا أخطاء بالسجل. لم يصل الاختبار إلى انتقال نهاية المستوى السابق؛ FPS والإكمال مجهولان.","Ferramentas: WinLibs GCC 15.2.0 r7. Main original arranca, aceita a EULA, carrega dados guardados e joga um nível com áudio, sem patches ou variáveis. Registo sem erros. A transição de fim do nível problemática não foi atingida; FPS e conclusão desconhecidos.","Werkzeuge: WinLibs GCC 15.2.0 r7. Unverändertes main startet, akzeptiert EULA, lädt Daten und spielt einen Level mit Ton ohne Patches oder Variablen. Keine Logfehler. Der zuvor problematische Levelabschluss wurde nicht erreicht; FPS und Abschluss unbekannt.","Outils : WinLibs GCC 15.2.0 r7. Main sans modification démarre, accepte la licence, charge les sauvegardes et joue un niveau avec son, sans correctifs ni variables. Aucun journal d’erreur. Transition de fin de niveau problématique non atteinte ; FPS et fin inconnus.","Herramientas: WinLibs GCC 15.2.0 r7. Main original arranca, acepta la licencia, carga datos guardados y juega un nivel con audio sin parches ni variables. Sin errores registrados. No se alcanzó la transición problemática al terminar el nivel; FPS y finalización desconocidos.")}];
maintenanceReports["astros-playroom"]=[...(maintenanceReports["astros-playroom"]||[]),{...{"id": "3232-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/3232", "updated": "2026-10-13T16:21:33Z", "testDate": "2026-10-13", "build": "main e152ba8f6", "cpu": null, "gpu": "NVIDIA RTX 5080", "driver": "615.78.08", "version": "01.905.000", "patched": false, "media": [], "benchmarks": [{"cpu": null, "gpu": "NVIDIA RTX 5080", "fps": "6.0–6.3", "context": {"en": "RAM: 31 GiB. Toolchain: GCC 16.2.1. Plain main reaches cpuplaza_mini_04; scripted Cross jumps and Square punches. Opening-area presents measure 6.0–6.3 FPS over 20 seconds with a hidden window and immediate mode. Substitute fonts and a 16384 MiB host-import budget are used. Audio, stick input and later progression are untested; local 15–16 FPS experiments are separate.", "zh": "内存：31 GiB。构建工具：GCC 16.2.1。原始 main 到达 cpuplaza_mini_04，脚本 Cross 跳跃、Square 出拳。隐藏窗口及 immediate 模式下，开场区域按 20 秒呈现计数为 6.0–6.3 FPS。使用替代字体与 16384 MiB 导入预算；声音、摇杆及后续进度未测。本地 15–16 FPS 实验另列。", "ar": "الذاكرة: 31 GiB. الأدوات: GCC 16.2.1. يصل main الأصلي إلى cpuplaza_mini_04 مع قفز Cross ولكم Square آليين. قياس العرض 20 ثانية يعطي 6.0–6.3 FPS بنافذة مخفية ووضع immediate. خطوط بديلة وميزانية استيراد 16384 MiB ؛ الصوت والعصا والتقدم غير مختبرة. تجربة 15–16 المحلية منفصلة.", "pt": "RAM: 31 GiB. Ferramentas: GCC 16.2.1. Main original chega a cpuplaza_mini_04; Cross salta e Square ataca por script. Apresentações em 20 segundos: 6,0–6,3 FPS, janela oculta e modo immediate. Tipos de letra substitutos e orçamento de importação 16384 MiB. Áudio, analógico e progressão não testados; experiência local de 15–16 separada.", "de": "RAM: 31 GiB. Werkzeuge: GCC 16.2.1. Unverändertes main erreicht cpuplaza_mini_04 mit geskriptetem Springen und Schlagen. Präsentationen über 20 Sekunden: 6,0–6,3 FPS bei verborgenem Fenster und immediate-Modus. Ersatzschriften und 16384 MiB Importbudget. Ton, Stick und weiterer Fortschritt ungeprüft; lokale 15–16-FPS-Experimente getrennt.", "fr": "RAM : 31 GiB. Outils : GCC 16.2.1. Main sans modification atteint cpuplaza_mini_04 avec sauts et coups scriptés. Comptage sur 20 secondes : 6,0–6,3 FPS, fenêtre masquée et mode immediate. Polices de remplacement et budget d’import 16384 MiB. Son, stick et suite non testés ; expériences locales à 15–16 séparées.", "es": "RAM: 31 GiB. Herramientas: GCC 16.2.1. Main original alcanza cpuplaza_mini_04 con saltos y golpes por script. Presentaciones durante 20 segundos: 6,0–6,3 FPS con ventana oculta y modo immediate. Fuentes alternativas y presupuesto de importación de 16384 MiB. Audio, palanca y progreso sin probar; experimento local de 15–16 separado."}}], "platform": "linux", "stage": "ingame", "os": "Arch Linux"},summary:L("RAM: 31 GiB. Toolchain: GCC 16.2.1. Plain main reaches cpuplaza_mini_04; scripted Cross jumps and Square punches. Opening-area presents measure 6.0–6.3 FPS over 20 seconds with a hidden window and immediate mode. Substitute fonts and a 16384 MiB host-import budget are used. Audio, stick input and later progression are untested; local 15–16 FPS experiments are separate.","内存：31 GiB。构建工具：GCC 16.2.1。原始 main 到达 cpuplaza_mini_04，脚本 Cross 跳跃、Square 出拳。隐藏窗口及 immediate 模式下，开场区域按 20 秒呈现计数为 6.0–6.3 FPS。使用替代字体与 16384 MiB 导入预算；声音、摇杆及后续进度未测。本地 15–16 FPS 实验另列。","الذاكرة: 31 GiB. الأدوات: GCC 16.2.1. يصل main الأصلي إلى cpuplaza_mini_04 مع قفز Cross ولكم Square آليين. قياس العرض 20 ثانية يعطي 6.0–6.3 FPS بنافذة مخفية ووضع immediate. خطوط بديلة وميزانية استيراد 16384 MiB ؛ الصوت والعصا والتقدم غير مختبرة. تجربة 15–16 المحلية منفصلة.","RAM: 31 GiB. Ferramentas: GCC 16.2.1. Main original chega a cpuplaza_mini_04; Cross salta e Square ataca por script. Apresentações em 20 segundos: 6,0–6,3 FPS, janela oculta e modo immediate. Tipos de letra substitutos e orçamento de importação 16384 MiB. Áudio, analógico e progressão não testados; experiência local de 15–16 separada.","RAM: 31 GiB. Werkzeuge: GCC 16.2.1. Unverändertes main erreicht cpuplaza_mini_04 mit geskriptetem Springen und Schlagen. Präsentationen über 20 Sekunden: 6,0–6,3 FPS bei verborgenem Fenster und immediate-Modus. Ersatzschriften und 16384 MiB Importbudget. Ton, Stick und weiterer Fortschritt ungeprüft; lokale 15–16-FPS-Experimente getrennt.","RAM : 31 GiB. Outils : GCC 16.2.1. Main sans modification atteint cpuplaza_mini_04 avec sauts et coups scriptés. Comptage sur 20 secondes : 6,0–6,3 FPS, fenêtre masquée et mode immediate. Polices de remplacement et budget d’import 16384 MiB. Son, stick et suite non testés ; expériences locales à 15–16 séparées.","RAM: 31 GiB. Herramientas: GCC 16.2.1. Main original alcanza cpuplaza_mini_04 con saltos y golpes por script. Presentaciones durante 20 segundos: 6,0–6,3 FPS con ventana oculta y modo immediate. Fuentes alternativas y presupuesto de importación de 16384 MiB. Audio, palanca y progreso sin probar; experimento local de 15–16 separado.")}];
maintenanceReports["gran-turismo-7"]=[...(maintenanceReports["gran-turismo-7"]||[]),{...{"id": "4697-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/4697#discussioncomment-18903431", "updated": "2026-10-13T14:49:01Z", "testDate": null, "build": "local integration · write-watch changes · exact head not stated", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "ingame", "os": "Windows · follow-up hardware not restated"},summary:L("With profiling enabled, a local write-watch comparison on the same Music Rally song changes about 0.6 FPS to 0.6–1.2. Memory-table rebuilds still cause swings. This is not stock main, and the head, hardware and content version are not restated. Do not replace the earlier roughly 2 FPS observation with this different measured run.","开启性能分析后，同首 Music Rally 的本地写入跟踪对照从约 0.6 FPS 变为 0.6–1.2，内存表重建仍造成波动。不是原始 main，未重述提交、硬件与内容版本。不能用此不同测量覆盖此前约 2 FPS 观察。","مع التحليل، تغيرت أغنية Music Rally نفسها من نحو 0.6 إلى 0.6–1.2 FPS بتعديلات تتبع الكتابة المحلية. إعادة بناء جدول الذاكرة تسبب تذبذباً. ليس main الأصلي؛ الالتزام والعتاد والنسخة غير مكررة. قياس 2 FPS السابق يبقى منفصلاً.","Com profiling, a mesma música Music Rally passa de cerca de 0,6 a 0,6–1,2 FPS com alterações locais de write-watch. Recriar a tabela de memória ainda causa variação. Não é main original; commit, equipamento e versão não repetidos. Não substitui a observação anterior de cerca de 2 FPS.","Mit Profiling steigt derselbe Music-Rally-Song durch lokale Write-Watch-Änderungen von etwa 0,6 auf 0,6–1,2 FPS. Speicher-Neuaufbau verursacht Schwankungen. Kein unverändertes main; Stand, Hardware und Version fehlen erneut. Frühere etwa 2 FPS bleiben ein anderer Lauf.","Avec profilage, le même morceau Music Rally passe d’environ 0,6 à 0,6–1,2 FPS grâce au suivi d’écriture local. La reconstruction des tables fait encore varier le résultat. Ce n’est pas main original ; commit, matériel et version non répétés. L’observation précédente de 2 FPS reste distincte.","Con perfilado, la misma canción Music Rally pasa de unos 0,6 a 0,6–1,2 FPS con cambios locales de write-watch. Reconstruir tablas aún causa variaciones. No es main original; no se repiten commit, equipo ni versión. La observación previa de unos 2 FPS se conserva aparte.")}];
maintenanceReports["wobbly-life"]=[...(maintenanceReports["wobbly-life"]||[]),{...{"id": "5335-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5335", "updated": "2026-10-13T17:23:45Z", "testDate": null, "build": "main fdefd76 + #4341", "cpu": "Intel Core i5-12400", "gpu": "NVIDIA RTX 3060 Ti", "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "ingame", "os": "CachyOS"},summary:L("The tutorial world renders, but about three map open/close cycles cause smearing, duplication, dark decals or a black world. More cycles partially recover it; a smeared shadow remains. Ordinary play alone did not trigger it. Inverting the keep-stale branch did not fix it; no root cause, FPS or completion is established.","教程世界可以显示，但约三次开关地图后出现拖影、复制、黑色贴花或整个世界变黑。继续切换可部分恢复，残留拖影阴影；只正常游玩没有触发。反转 keep-stale 分支也未修复，根因、FPS 与通关未知。","يظهر عالم التدريب لكن نحو ثلاث دورات فتح الخريطة وإغلاقها تسبب تلطيخاً وتكراراً أو عالماً أسود. تتعافى أجزاء لاحقاً مع بقاء ظل مشوه. اللعب وحده لم يسببها. عكس keep-stale لم يصلحها؛ السبب و FPS والإكمال غير مثبتة.","O mundo do tutorial aparece, mas cerca de três aberturas/fechos do mapa causam manchas, duplicações ou mundo negro. Mais ciclos recuperam parte, com sombra deformada. Jogo normal não desencadeou isto. Inverter keep-stale não resolveu; causa, FPS e conclusão desconhecidos.","Die Tutorialwelt erscheint, aber etwa drei Kartenwechsel verursachen Schlieren, Duplikate oder schwarze Welt. Weitere Wechsel stellen Teile wieder her; Schattenreste bleiben. Normales Spielen allein löste es nicht aus. Umkehr von keep-stale hilft nicht; Ursache, FPS und Abschluss ungeklärt.","Le monde du tutoriel apparaît, mais environ trois ouvertures/fermetures de carte provoquent bavures, duplications ou monde noir. D’autres cycles restaurent une partie, avec ombre déformée. Le jeu normal seul ne déclenche pas cela. Inverser keep-stale ne corrige rien ; cause, FPS et fin inconnus.","El mundo tutorial aparece, pero unas tres aperturas/cierres del mapa causan manchas, duplicados o mundo negro. Más ciclos recuperan parte, con sombra deformada. Jugar normalmente no lo desencadenó. Invertir keep-stale no lo arregla; causa, FPS y finalización desconocidos.")},{...{"id": "2211-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/2211#discussioncomment-18908086", "updated": "2026-10-13T19:37:55Z", "testDate": "2026-10-13", "build": "main 8cf6a0b · #4341 still required beyond main", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "ingame", "os": "Linux · follow-up hardware not restated"},summary:L("The author labels a main FPS session: menu 27, loading 120, in-game map 120 and gameplay 9 FPS. The same update says #4341 is still needed beyond main for the vertex wall, so this is not an unconditional clean-main gameplay claim. Build scope and map-corruption reports remain distinct.","作者将此称作 main 帧数记录：菜单 27、加载 120、游戏内地图 120、游戏过程 9 FPS。同一更新仍说需要 main 之外的 #4341 绕过顶点阻碍，故不能当作无条件原始 main 游戏结果；版本范围及地图损坏记录分开。","يسمي الكاتب جلسة main: القائمة 27 والتحميل 120 والخريطة 120 واللعب 9 FPS. لكنه يقول أيضاً إن #4341 ما زال ضرورياً بعد main ؛ لا يثبت لعباً بلا تعديلات. نطاق البناء وتقارير فساد الخريطة منفصلة.","O autor indica uma sessão main: menu 27, carga 120, mapa 120 e jogo 9 FPS. Diz também que #4341 continua necessário além de main; não confirma jogo sem alterações. Âmbito do build e corrupção do mapa mantidos separados.","Der Autor nennt eine main-Messung: Menü 27, Laden 120, Karte 120 und Gameplay 9 FPS. Derselbe Beitrag verlangt weiterhin #4341 zusätzlich; kein uneingeschränkter Gameplay-Nachweis für main. Buildumfang und Kartenfehler bleiben getrennt.","L’auteur décrit une session main : menu 27, chargement 120, carte 120 et jeu 9 FPS. Le même texte exige encore #4341 en plus de main ; jeu sans modification non confirmé. Périmètre du build et corruption de carte restent distincts.","El autor llama a esta sesión main: menú 27, carga 120, mapa 120 y juego 9 FPS. El mismo texto aún requiere #4341 además de main; no confirma juego sin cambios. Alcance del build y corrupción del mapa se conservan aparte.")}];
maintenanceReports["black-myth-wukong"]=[...(maintenanceReports["black-myth-wukong"]||[]),{...{"id": "4508-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/pull/4508#issuecomment-6140523198", "updated": "2026-10-13T07:25:35Z", "testDate": null, "build": "unspecified main + #4508/#4960 + other open PRs", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows"},summary:L("PPSA23226 declares 800 MiB flexible memory. On the local stack, #4508 removes the earlier exhaustion message, but a cold-cache run ends after 270 seconds at a 120-second render-thread watchdog. No menu or presented game image is confirmed. Exact main commit, hardware and content version are unknown.","PPSA23226 声明 800 MiB 灵活内存。本地 PR 栈加入 #4508 后不再出现旧内存耗尽信息，但冷缓存运行 270 秒后仍被 120 秒渲染线程 watchdog 终止。未确认菜单或游戏画面，准确 main 提交、硬件和内容版本未知。","يعلن PPSA23226 ذاكرة مرنة 800 MiB. يزيل #4508 نفاد الذاكرة في الدمج المحلي، لكن التشغيل البارد يتوقف بعد 270 ثانية عند watchdog للرسم مدته 120 ثانية. لا قائمة أو صورة لعبة مؤكدة؛ الالتزام والعتاد والنسخة مجهولة.","PPSA23226 declara 800 MiB de memória flexível. #4508 elimina a antiga falta de memória na integração local, mas o arranque frio termina após 270 segundos no watchdog gráfico de 120 segundos. Menu e imagem não confirmados; commit, equipamento e versão desconhecidos.","PPSA23226 deklariert 800 MiB flexiblen Speicher. #4508 entfernt im lokalen Stack den alten Speicherfehler; ein Kaltlauf endet nach 270 Sekunden am 120-Sekunden-Render-Watchdog. Kein bestätigtes Menü oder Spielbild; Commit, Hardware und Version fehlen.","PPSA23226 déclare 800 MiB de mémoire flexible. #4508 supprime l’ancien épuisement dans la pile locale, mais un lancement froid termine après 270 secondes au watchdog de rendu de 120 secondes. Menu et image non confirmés ; commit, matériel et version inconnus.","PPSA23226 declara 800 MiB de memoria flexible. #4508 elimina el agotamiento previo en la integración local, pero el inicio frío termina tras 270 segundos en el watchdog gráfico de 120 segundos. Menú e imagen sin confirmar; commit, equipo y versión desconocidos.")}];
maintenanceReports["astro-bot"]=[...(maintenanceReports["astro-bot"]||[]),{...{"id": "357-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18894768", "updated": "2026-10-13T19:41:41Z", "testDate": "2026-10-13", "build": "JJenkx combined integration 54cb611d61c · pipeline ON", "cpu": "AMD Ryzen 9 7950X", "gpu": "AMD Radeon RX 6650 XT · 8 GiB", "driver": "Mesa 26.2.4 RADV", "version": "01.018.000", "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "ingame", "os": "Arch Linux"},summary:L("Toolchain: GCC 16.2.1 · Release. Combined integration 54cb611d61c renders Crash Site arrival and verifies a scripted jump and landing in a planned 600-second test. It uses direct level selection, a 16 GiB import budget and temporary 8 GiB udmabuf limit. Audio, ordinary New Game progression and matched FPS gain are unverified. Newer c058cf416b3 profiling has no published result; do not attach this run to it.","构建工具：GCC 16.2.1 · Release。整合 54cb611d61c 在预定 600 秒测试中显示 Crash Site 到达过程，并验证脚本跳跃与落地。使用直接选关、16 GiB 导入预算和临时 8 GiB udmabuf 上限。声音、正常新开游戏流程和同条件 FPS 增益未验证。更新的 c058cf416b3 分析尚无结果，不能替换本报告提交。","الأدوات: GCC 16.2.1 · Release. يعرض الدمج 54cb611d61c الوصول إلى Crash Site ويثبت قفزة وهبوطاً آليين خلال 600 ثانية مخططة. اختيار مستوى مباشر وميزانية استيراد 16 GiB وحد udmabuf مؤقت 8 GiB. الصوت ومسار New Game وكسب FPS المطابق غير موثقة. لا نتيجة منشورة لـ c058cf416b3 الأحدث.","Ferramentas: GCC 16.2.1 · Release. A integração 54cb611d61c mostra a chegada a Crash Site e salto/aterragem por script num teste previsto de 600 segundos. Seleção direta de nível, orçamento de importação 16 GiB e limite udmabuf temporário 8 GiB. Áudio, New Game normal e ganho FPS comparável não verificados. c058cf416b3 mais recente ainda sem resultado.","Werkzeuge: GCC 16.2.1 · Release. Integration 54cb611d61c zeigt Crash-Site-Ankunft sowie geskripteten Sprung und Landung in einem geplanten 600-Sekunden-Test. Direkte Levelwahl, 16-GiB-Importbudget, temporäres 8-GiB-udmabuf-Limit. Ton, normaler New-Game-Ablauf und vergleichbarer FPS-Gewinn ungeprüft. Neueres c058cf416b3 hat noch kein Ergebnis.","Outils : GCC 16.2.1 · Release. L’intégration 54cb611d61c montre l’arrivée à Crash Site et un saut/atterrissage scripté sur 600 secondes prévues. Sélection directe du niveau, budget d’import 16 GiB et limite udmabuf temporaire 8 GiB. Son, New Game normal et gain FPS comparable non vérifiés. Aucun résultat pour c058cf416b3 plus récent.","Herramientas: GCC 16.2.1 · Release. La integración 54cb611d61c muestra llegada a Crash Site y salto/aterrizaje por script en 600 segundos previstos. Selección directa del nivel, presupuesto de importación 16 GiB y límite udmabuf temporal 8 GiB. Audio, New Game normal y mejora FPS comparable sin verificar. c058cf416b3 más reciente aún sin resultado.")}];
maintenanceReports["ghost-of-yotei"]=[...(maintenanceReports["ghost-of-yotei"]||[]),{...{"id": "675-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-18905212", "updated": "2026-10-13T16:35:52Z", "testDate": "2026-10-13", "build": "main 37795977 + #757/#758 + local changes and skipped dispatches", "cpu": null, "gpu": "AMD Radeon RX 9070 XT", "driver": "Mesa 26.2.4 RADV", "version": "01.008.000", "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "boot", "os": "CachyOS"},summary:L("RAM: 31 GB. The splash plays, then 55 sampled frames over 30 minutes remain black with a static white bar. Draws and about eight presents per second continue, but no menu, spinner or gameplay is confirmed. Warm shaders, skipped dispatches and local descriptor workarounds are part of this integration; eight presents are not gameplay FPS.","内存：31 GB。开场片播放后，30 分钟内 55 张抽样帧均为黑色与静止白条。绘制及约每秒八次呈现仍继续，但未确认菜单、加载转圈或游戏过程。此整合含预热着色器、跳过调度及本地描述符绕行；八次呈现不等于游戏 FPS。","الذاكرة: 31 GB. تعمل المقدمة ثم تبقى 55 صورة خلال 30 دقيقة سوداء بشريط ثابت. تستمر الرسوم ونحو ثمانية عروض بالثانية، دون قائمة أو لعب. دمج بذاكرة دافئة وتجاوزات محلية؛ عدد العروض ليس FPS للعب.","RAM: 31 GB. A introdução toca, mas 55 imagens em 30 minutos ficam negras com uma barra fixa. Desenhos e cerca de oito apresentações/segundo continuam, sem menu ou jogo. Integração com cache quente e desvios locais; apresentações não são FPS de jogo.","RAM: 31 GB. Der Vorspann läuft, danach bleiben 55 Bilder in 30 Minuten schwarz mit festem Balken. Zeichnen und etwa acht Präsentationen/Sekunde gehen weiter; kein Menü oder Gameplay. Integration mit warmem Cache und lokalen Umgehungen; Präsentationen sind keine Gameplay-FPS.","RAM : 31 GB. L’introduction joue, puis 55 images sur 30 minutes restent noires avec une barre fixe. Dessins et environ huit présentations/seconde continuent sans menu ou jeu confirmé. Cache chaud et contournements locaux ; présentations ne sont pas des FPS de jeu.","RAM: 31 GB. La introducción funciona, pero 55 imágenes en 30 minutos permanecen negras con una barra fija. Continúan dibujos y unas ocho presentaciones/segundo, sin menú o juego confirmado. Caché caliente y cambios locales; presentaciones no son FPS de juego.")}];
maintenanceReports["epic-mickey-rebrushed"]=[...(maintenanceReports["epic-mickey-rebrushed"]||[]),{...{"id": "2255-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/2255#discussioncomment-18897308", "updated": "2026-10-13T09:19:29Z", "testDate": "2026-10-13", "build": "local integration + #4551/#4603/#5030 · exact head not stated", "cpu": null, "gpu": "AMD Radeon RX 7600", "driver": null, "version": null, "patched": true, "media": ["https://raw.githubusercontent.com/johnmaia/AnyPS5/mickey-assets/lightmap-before-after.jpg"], "benchmarks": [{"cpu": null, "gpu": "AMD Radeon RX 7600", "fps": "4–5", "context": {"en": "Castle walls and floors gain clean textures and lighting after local #5030 write-back handling, with the earlier color/rendering fixes. Level speed stays about 4–5 FPS; object popping remains. This comparison uses a local PR stack, not a clean-main retest; exact head, content version and completion are unknown.", "zh": "本地 #5030 写回处理配合此前颜色／绘制修复后，城堡墙面和地面纹理与照明改善；关卡仍约 4–5 FPS，物体闪现尚存。对照使用本地 PR 栈，不是原始 main 复测，准确提交、内容版本和通关未知。", "ar": "تحسن جدران وأرضيات القلعة بعد #5030 المحلي وإصلاحات اللون والرسم. السرعة نحو 4–5 FPS وظهور الأجسام المتقطع باق. دمج PR محلي لا إعادة اختبار main الأصلي؛ الالتزام والنسخة والإكمال مجهولة.", "pt": "Paredes e pisos melhoram com #5030 local e correções anteriores. Nível ainda a 4–5 FPS, com objetos a surgir/desaparecer. Pilha de PR local, não reteste de main original; commit, versão e conclusão desconhecidos.", "de": "Wände und Böden verbessern sich mit lokalem #5030 und früheren Korrekturen. Level weiterhin etwa 4–5 FPS, Objekt-Popping bleibt. Lokaler PR-Stack, kein unverändertes-main-Test; Stand, Version und Abschluss fehlen.", "fr": "Murs et sols améliorés avec #5030 local et corrections antérieures. Niveau encore à 4–5 FPS, objets apparaissant brusquement. Pile de PR locale, pas de retest main original ; commit, version et fin inconnus.", "es": "Muros y suelos mejoran con #5030 local y arreglos previos. Nivel aún a 4–5 FPS con aparición brusca de objetos. Pila local de PR, no prueba de main original; commit, versión y finalización desconocidos."}}], "platform": "linux", "stage": "ingame", "os": "Linux"},summary:L("Castle walls and floors gain clean textures and lighting after local #5030 write-back handling, with the earlier color/rendering fixes. Level speed stays about 4–5 FPS; object popping remains. This comparison uses a local PR stack, not a clean-main retest; exact head, content version and completion are unknown.","本地 #5030 写回处理配合此前颜色／绘制修复后，城堡墙面和地面纹理与照明改善；关卡仍约 4–5 FPS，物体闪现尚存。对照使用本地 PR 栈，不是原始 main 复测，准确提交、内容版本和通关未知。","تحسن جدران وأرضيات القلعة بعد #5030 المحلي وإصلاحات اللون والرسم. السرعة نحو 4–5 FPS وظهور الأجسام المتقطع باق. دمج PR محلي لا إعادة اختبار main الأصلي؛ الالتزام والنسخة والإكمال مجهولة.","Paredes e pisos melhoram com #5030 local e correções anteriores. Nível ainda a 4–5 FPS, com objetos a surgir/desaparecer. Pilha de PR local, não reteste de main original; commit, versão e conclusão desconhecidos.","Wände und Böden verbessern sich mit lokalem #5030 und früheren Korrekturen. Level weiterhin etwa 4–5 FPS, Objekt-Popping bleibt. Lokaler PR-Stack, kein unverändertes-main-Test; Stand, Version und Abschluss fehlen.","Murs et sols améliorés avec #5030 local et corrections antérieures. Niveau encore à 4–5 FPS, objets apparaissant brusquement. Pile de PR locale, pas de retest main original ; commit, version et fin inconnus.","Muros y suelos mejoran con #5030 local y arreglos previos. Nivel aún a 4–5 FPS con aparición brusca de objetos. Pila local de PR, no prueba de main original; commit, versión y finalización desconocidos.")}];
maintenanceReports["killing-floor-3"]=[...(maintenanceReports["killing-floor-3"]||[]),{...{"id": "3413-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/3413", "updated": "2026-10-13T18:53:34Z", "testDate": "2026-10-13", "build": "main 8bcd97cd5", "cpu": "AMD Ryzen 5 5600G", "gpu": "NVIDIA RTX 3060 · 12 GB", "driver": "615.78.08", "version": "02.011.000", "patched": false, "media": [], "benchmarks": [], "platform": "linux", "stage": "boot", "os": "CachyOS · kernel 7.2.9"},summary:L("RAM: 31 GiB. Toolchain: GCC 16.2.1. Plain main loads modules and renders the logo movies and first loading-tip screen, then aborts on unsupported mipmapped/DCC 3D color targets. It does not reach the fork’s menu or hub. Screenshot dumping is enabled; no gameplay, audio or FPS is established on this build.","内存：31 GiB。构建工具：GCC 16.2.1。原始 main 加载模块并显示标志视频与首个加载提示，随后因不支持 mipmapped／DCC 3D 颜色目标终止。没有到达分支中的菜单或大厅。启用截图导出，本构建未证实游戏过程、声音或 FPS。","الذاكرة: 31 GiB. الأدوات: GCC 16.2.1. يحمل main الأصلي الوحدات ويعرض الشعارات وأول شاشة تحميل ثم يفشل عند هدف لون 3D غير مدعوم. لا يبلغ قائمة الفرع أو مركزه. تفريغ صور مفعل؛ لا لعب أو صوت أو FPS مثبت.","RAM: 31 GiB. Ferramentas: GCC 16.2.1. Main original carrega módulos, mostra logótipos e a primeira dica de carga, depois falha no alvo de cor 3D não suportado. Não chega ao menu/hub do fork. Capturas ativas; jogo, áudio e FPS não demonstrados.","RAM: 31 GiB. Werkzeuge: GCC 16.2.1. Unverändertes main lädt Module, zeigt Logos und ersten Ladehinweis, dann Abbruch am nicht unterstützten 3D-Farbziel. Kein Fork-Menü oder Hub. Bildexport aktiv; Gameplay, Ton und FPS unbelegt.","RAM : 31 GiB. Outils : GCC 16.2.1. Main original charge les modules, affiche les logos et le premier conseil de chargement, puis bloque sur une cible couleur 3D non prise en charge. Pas de menu/hub du fork. Captures activées ; jeu, son et FPS non établis.","RAM: 31 GiB. Herramientas: GCC 16.2.1. Main original carga módulos, muestra logos y primer consejo de carga y falla en un destino de color 3D no admitido. No alcanza menú/hub del fork. Capturas activas; juego, audio y FPS sin demostrar.")},{...{"id": "3413-linux-hub-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/3413", "updated": "2026-10-13T18:53:34Z", "testDate": "2026-10-14", "build": "hypermoist/wip/ppsa08427-sync-fix d2e0e116c · APS5_NO_ALIAS_BORROW=1", "cpu": "AMD Ryzen 5 5600G", "gpu": "NVIDIA RTX 3060 · 12 GB", "driver": "615.78.08", "version": "02.011.000", "patched": true, "media": [], "benchmarks": [{"cpu": "AMD Ryzen 5 5600G", "gpu": "NVIDIA RTX 3060 · 12 GB", "fps": "1.2–1.7", "context": {"en": "RAM: 31 GiB. Toolchain: GCC 16.2.1. The fork reaches the Solo hub; disabling its alias borrowing makes 80/80 sampled hub frames lit. Speed remains about 1.2–1.7 FPS, with heavy memory transfers. Local shader/driver approximations, skipped failed work, raised budgets and UE garbage-collection settings are required. Audio, combat, saves and completion are not verified.", "zh": "内存：31 GiB。构建工具：GCC 16.2.1。分支进入 Solo 大厅；关闭其 alias borrow 后 80／80 抽样大厅帧有照明，仍约 1.2–1.7 FPS，内存传输负担很大。需要本地着色器／驱动近似实现、跳过失败工作、提高预算及 UE 垃圾回收设置。声音、战斗、存档与通关未验证。", "ar": "الذاكرة: 31 GiB. الأدوات: GCC 16.2.1. يبلغ الفرع مركز Solo ؛ تعطيل alias borrow يجعل 80/80 صورة مضاءة. السرعة 1.2–1.7 FPS مع نقل كثيف. يحتاج تقريباً محلياً وتجاوز العمل الفاشل وميزانيات وإعدادات UE. الصوت والقتال والحفظ والإكمال غير موثقة.", "pt": "RAM: 31 GiB. Ferramentas: GCC 16.2.1. O fork chega ao hub Solo; desligar alias borrow ilumina 80/80 imagens. Continua a 1,2–1,7 FPS com transferências pesadas. Exige aproximações locais, trabalho ignorado, orçamentos e ajustes UE. Áudio, combate, gravações e conclusão não verificados.", "de": "RAM: 31 GiB. Werkzeuge: GCC 16.2.1. Der Fork erreicht den Solo-Hub; deaktiviertes alias borrow beleuchtet 80/80 Bilder. Weiterhin 1,2–1,7 FPS mit viel Datentransfer. Lokale Näherungen, übersprungene Arbeit, Budgets und UE-Einstellungen nötig. Ton, Kampf, Speichern und Abschluss ungeprüft.", "fr": "RAM : 31 GiB. Outils : GCC 16.2.1. Le fork atteint le hub Solo ; désactiver alias borrow éclaire 80/80 captures. Toujours 1,2–1,7 FPS et transferts lourds. Approximations locales, travaux ignorés, budgets et réglages UE requis. Son, combat, sauvegardes et fin non vérifiés.", "es": "RAM: 31 GiB. Herramientas: GCC 16.2.1. El fork alcanza el hub Solo; desactivar alias borrow ilumina 80/80 capturas. Sigue a 1,2–1,7 FPS con mucho tráfico. Requiere aproximaciones locales, trabajo omitido, presupuestos y ajustes UE. Audio, combate, guardado y finalización sin verificar."}}], "platform": "linux", "stage": "ingame", "os": "CachyOS · kernel 7.2.9"},summary:L("RAM: 31 GiB. Toolchain: GCC 16.2.1. The fork reaches the Solo hub; disabling its alias borrowing makes 80/80 sampled hub frames lit. Speed remains about 1.2–1.7 FPS, with heavy memory transfers. Local shader/driver approximations, skipped failed work, raised budgets and UE garbage-collection settings are required. Audio, combat, saves and completion are not verified.","内存：31 GiB。构建工具：GCC 16.2.1。分支进入 Solo 大厅；关闭其 alias borrow 后 80／80 抽样大厅帧有照明，仍约 1.2–1.7 FPS，内存传输负担很大。需要本地着色器／驱动近似实现、跳过失败工作、提高预算及 UE 垃圾回收设置。声音、战斗、存档与通关未验证。","الذاكرة: 31 GiB. الأدوات: GCC 16.2.1. يبلغ الفرع مركز Solo ؛ تعطيل alias borrow يجعل 80/80 صورة مضاءة. السرعة 1.2–1.7 FPS مع نقل كثيف. يحتاج تقريباً محلياً وتجاوز العمل الفاشل وميزانيات وإعدادات UE. الصوت والقتال والحفظ والإكمال غير موثقة.","RAM: 31 GiB. Ferramentas: GCC 16.2.1. O fork chega ao hub Solo; desligar alias borrow ilumina 80/80 imagens. Continua a 1,2–1,7 FPS com transferências pesadas. Exige aproximações locais, trabalho ignorado, orçamentos e ajustes UE. Áudio, combate, gravações e conclusão não verificados.","RAM: 31 GiB. Werkzeuge: GCC 16.2.1. Der Fork erreicht den Solo-Hub; deaktiviertes alias borrow beleuchtet 80/80 Bilder. Weiterhin 1,2–1,7 FPS mit viel Datentransfer. Lokale Näherungen, übersprungene Arbeit, Budgets und UE-Einstellungen nötig. Ton, Kampf, Speichern und Abschluss ungeprüft.","RAM : 31 GiB. Outils : GCC 16.2.1. Le fork atteint le hub Solo ; désactiver alias borrow éclaire 80/80 captures. Toujours 1,2–1,7 FPS et transferts lourds. Approximations locales, travaux ignorés, budgets et réglages UE requis. Son, combat, sauvegardes et fin non vérifiés.","RAM: 31 GiB. Herramientas: GCC 16.2.1. El fork alcanza el hub Solo; desactivar alias borrow ilumina 80/80 capturas. Sigue a 1,2–1,7 FPS con mucho tráfico. Requiere aproximaciones locales, trabajo omitido, presupuestos y ajustes UE. Audio, combate, guardado y finalización sin verificar.")}];
const updatedMaintenanceGhostOfTsushimaDirectorsCut=maintenanceGames.find(g=>g.slug==="ghost-of-tsushima-directors-cut")!;
updatedMaintenanceGhostOfTsushimaDirectorsCut.reports.push({...{"id": "4461-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/4461#discussioncomment-18908288", "updated": "2026-10-13T19:53:20Z", "testDate": "2026-10-13", "build": "instrumented local driver for #5431 · tested head not stated", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows · isolated Release runtime"},summary:L("A new isolated trace records 600 draw commands and 2807 successful submissions, without shader-preparation failure events. A black window is shown, but validated pixel data is absent. Earlier failures therefore do not establish the black-output cause. Exact head, hardware and game version are not restated; no recognizable game scene or FPS.","新隔离追踪记录 600 个绘制命令与 2807 次成功提交，没有着色器准备失败事件。截图显示黑色窗口，但缺乏已验证像素数据，因此旧失败不能证明黑屏原因。未重述准确提交、硬件及游戏版本，没有可辨认场景或 FPS。","يسجل تتبع معزول 600 أمر رسم و 2807 إرسالاً ناجحاً بلا فشل تجهيز shaders. نافذة سوداء بلا بيانات بكسل موثقة؛ الأخطاء القديمة لا تثبت السبب. الالتزام والعتاد والنسخة غير مكررة، ولا مشهد أو FPS مثبت.","Novo trace isolado:600 comandos e 2807 submissões, sem falhas de preparação. Janela negra sem píxeis validados; falhas antigas não provam a causa. Commit, equipamento e versão não repetidos; sem cena reconhecível ou FPS.","Neuer isolierter Trace:600 Zeichenbefehle und 2807 erfolgreiche Submits ohne Shaderfehler. Schwarzes Fenster ohne validierte Pixel; alte Fehler beweisen keine Ursache. Commit, Hardware und Version fehlen; kein erkennbarer Spielbereich oder FPS.","Nouveau trace isolé :600 commandes et 2807 soumissions réussies sans erreur shader. Fenêtre noire sans pixels validés ; anciens échecs ne prouvent pas la cause. Commit, matériel et version non répétés ; aucune scène ou FPS.","Nuevo trace aislado:600 comandos y 2807 envíos correctos sin fallos shader. Ventana negra sin píxeles validados; fallos previos no prueban la causa. Commit, equipo y versión no repetidos; sin escena reconocible ni FPS.")}); updatedMaintenanceGhostOfTsushimaDirectorsCut.reviewed="2026-10-14";
maintenanceGames.push({...{"slug": "resident-evil-village", "name": "Resident Evil Village", "titleId": "PPSA01556", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5169-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5169", "updated": "2026-10-13T19:42:29Z", "testDate": null, "build": "main 18c438b10 + PR stack and local checkerboard/descriptor/memory approximations", "cpu": null, "gpu": "NVIDIA RTX 3070 Laptop GPU · 8 GB", "driver": null, "version": "01.210.000", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "menu", "os": "Windows 11 Home · 26300"},summary:L("RAM: 16 GB. Toolchain: WinLibs GCC 15.2.0 r7 · Release. The local stack renders setup, a forest title background and the opening storybook at about 2–3 FPS, then crashes on the Wwise thread before the first playable scene in 2/2 runs. Save/load is reported. #4949 merged, but clean main was not retested. Missing calibration images, triangle artifacts and memory pressure remain; opening playback is not controllable gameplay.","内存：16 GB。构建工具：WinLibs GCC 15.2.0 r7 · Release。本地整合显示设置、森林标题背景和约 2–3 FPS 的开场绘本，随后两次均在首个可操作场景前因 Wwise 线程崩溃。据报可存档加载。#4949 已合入，但原始 main 未复测；校准图缺失、三角瑕疵和内存压力仍存，开场播放不等于可操作游戏过程。","الذاكرة: 16 GB. الأدوات: WinLibs GCC 15.2.0 r7 · Release. يعرض الدمج الإعدادات وخلفية الغابة وقصة البداية عند 2–3 FPS ، ثم يتعطل Wwise قبل المشهد القابل للتحكم في 2/2 تشغيل. الحفظ والتحميل مذكوران. #4949 مدمج لكن main الأصلي غير معاد اختباره؛ عيوب الرسم وضغط الذاكرة باقيان. القصة ليست لعباً تفاعلياً.","RAM: 16 GB. Ferramentas: WinLibs GCC 15.2.0 r7 · Release. A integração mostra opções, floresta e abertura a 2–3 FPS; Wwise falha antes da primeira cena controlável em 2/2 execuções. Há gravação/carga. #4949 integrado, sem reteste de main original; imagens ausentes, triângulos e pressão de memória persistem. Abertura não é jogo interativo.","RAM: 16 GB. Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Der Stack zeigt Einstellungen, Waldtitel und Storybook mit 2–3 FPS, dann Wwise-Absturz vor der ersten steuerbaren Szene in 2/2 Läufen. Speichern/Laden berichtet. #4949 gemergt, main nicht erneut getestet. Bildfehler und Speicherdruck bleiben; Intro ist kein steuerbares Gameplay.","RAM : 16 GB. Outils : WinLibs GCC 15.2.0 r7 · Release. La pile affiche réglages, forêt et ouverture à 2–3 FPS, puis Wwise plante avant la première scène contrôlable dans 2/2 essais. Sauvegarde/chargement rapportés. #4949 intégré, main non retesté. Défauts visuels et mémoire persistent ; ouverture non interactive.","RAM: 16 GB. Herramientas: WinLibs GCC 15.2.0 r7 · Release. La integración muestra ajustes, bosque y apertura a 2–3 FPS; Wwise falla antes de la primera escena controlable en 2/2 ejecuciones. Guardado/carga indicados. #4949 integrado, main sin repetir. Persisten defectos y presión de memoria; apertura no es juego controlable.")}]});
maintenanceGames.push({...{"slug": "death-stranding-2", "name": "Death Stranding 2: On the Beach", "titleId": "PPSA02015", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5424-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5424", "updated": "2026-10-13T19:36:21Z", "testDate": null, "build": "local 4ad8dbe5b · checkpoint a10640220900d96e609f7a251a215f198d9fdbb2 · base ea2bbefb2 + experimental changes", "cpu": null, "gpu": "NVIDIA RTX 3080 Laptop GPU · 8 GiB", "driver": "616.64", "version": "01.013.000", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows 10 Pro 22H2 · 19045"},summary:L("RAM: 16 GiB. Toolchain: MinGW GCC 15.2.0. An experimental Windows package executes graphics and 63 presents, but no recognizable game frame, menu or gameplay is established. Three scaled readbacks are RGB-black; this does not prove every full-resolution pixel is black. A roughly 300-second watchdog ends the run. Decoder/import-audit PR tests are separate from title success.","内存：16 GiB。构建工具：MinGW GCC 15.2.0。实验 Windows 包执行图形调用并呈现 63 次，但没有可辨认游戏画面、菜单或游戏过程。三次缩放读回为 RGB 黑色，不证明所有全分辨率像素均黑。约 300 秒 watchdog 结束运行；解码及导入审计 PR 测试与游戏成功分开。","الذاكرة: 16 GiB. الأدوات: MinGW GCC 15.2.0. تنفذ الحزمة التجريبية الرسوم و 63 عرضاً دون صورة لعبة معروفة أو قائمة أو لعب. ثلاث قراءات مصغرة سوداء لا تثبت كل البكسلات. ينتهي الاختبار عند watchdog نحو 300 ثانية. اختبارات PR منفصلة عن نجاح اللعبة.","RAM: 16 GiB. Ferramentas: MinGW GCC 15.2.0. O pacote experimental executa gráficos e 63 apresentações, sem imagem reconhecível, menu ou jogo. Três leituras reduzidas negras não provam todos os píxeis. Watchdog termina aos cerca de 300 segundos. Testes de PR não equivalem a sucesso do título.","RAM: 16 GiB. Werkzeuge: MinGW GCC 15.2.0. Das experimentelle Paket führt Grafik und 63 Präsentationen aus, ohne erkennbares Spielbild, Menü oder Gameplay. Drei verkleinerte schwarze Readbacks beweisen nicht alle Pixel. Watchdog nach etwa 300 Sekunden. PR-Tests sind kein Titel-Erfolg.","RAM : 16 GiB. Outils : MinGW GCC 15.2.0. Le paquet expérimental exécute des graphismes et 63 présentations sans image reconnaissable, menu ou jeu. Trois lectures réduites noires ne prouvent pas tous les pixels. Watchdog vers 300 secondes. Tests PR distincts du succès du titre.","RAM: 16 GiB. Herramientas: MinGW GCC 15.2.0. El paquete experimental ejecuta gráficos y 63 presentaciones sin imagen reconocible, menú o juego. Tres lecturas reducidas negras no prueban todos los píxeles. Watchdog termina hacia 300 segundos. Pruebas PR separadas del éxito del título.")}]});
maintenanceGames.push({...{"slug": "diablo-ii-resurrected", "name": "Diablo II: Resurrected", "titleId": "PPSA03912", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5146-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5146", "updated": "2026-10-13T19:16:25Z", "testDate": null, "build": "main 14036cb0e + local sceSslSetVerifyCallback throwing stub", "cpu": null, "gpu": "NVIDIA RTX 3080 Ti", "driver": "615.71.09", "version": "01.039.000", "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "boot", "os": "Ubuntu 26.10"},summary:L("Toolchain: GCC 15.3.0. The patched build shows only an animated corner logo with audible audio; no menu or input test. Counter observations fluctuate from 0.2–1.4 to 20–30 FPS and are not gameplay performance. After about five minutes it aborts on unsupported depth-plane sampling. Unmodified main fails earlier on the missing SSL export.","构建工具：GCC 15.3.0。补丁构建仅显示角落动画标志，声音可听，未到菜单或测试输入。计数在 0.2–1.4 与 20–30 FPS 间波动，不是游戏性能。约五分钟后因未支持深度平面采样终止；原始 main 更早因 SSL 导出缺失失败。","الأدوات: GCC 15.3.0. يعرض البناء المعدل شعار زاوية متحركاً وصوتاً فقط، دون قائمة أو إدخال. العداد 0.2–1.4 أو 20–30 ليس أداء لعب. يفشل بعد خمس دقائق بعينة عمق غير مدعومة؛ main الأصلي يتوقف عند تصدير SSL المفقود.","Ferramentas: GCC 15.3.0. O build alterado mostra só logótipo animado e áudio, sem menu ou controlo testado. Contador 0,2–1,4 ou 20–30 não mede jogo. Falha após cinco minutos na amostragem de profundidade; main original para no export SSL ausente.","Werkzeuge: GCC 15.3.0. Der geänderte Build zeigt nur Ecklogo und Ton, ohne Menü/Eingabetest. Zähler 0,2–1,4 oder 20–30 misst kein Gameplay. Abbruch nach fünf Minuten an Tiefensampling; main scheitert früher am SSL-Export.","Outils : GCC 15.3.0. Le build modifié affiche seulement un logo animé et du son, sans menu ou entrée testée. Compteur 0,2–1,4 ou 20–30, pas une mesure de jeu. Blocage après cinq minutes au sampling profondeur ; main échoue à l’export SSL absent.","Herramientas: GCC 15.3.0. El build modificado solo muestra logo animado y audio, sin menú ni entrada probada. Contador 0,2–1,4 o 20–30 no mide juego. Falla tras cinco minutos en muestreo de profundidad; main falla antes en export SSL ausente.")}]});
maintenanceGames.push({...{"slug": "sonic-superstars", "name": "Sonic Superstars", "titleId": "PPSA06888", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5382-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5382", "updated": "2026-10-13T18:24:31Z", "testDate": null, "build": "main 18c438b10 + #4474 + local 3D-access-on-1D-T# fix", "cpu": null, "gpu": "AMD Radeon RX 5700 XT", "driver": "32.0.21045.5002", "version": "01.001.008", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows 11 · 10.0.26200"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7. The integration loads save data and plays the intro, then aborts at a depth-comparison sample of a 1D descriptor through a 3D interface. No menu is reached. Plain main stops earlier on freed-target register reads. A separate window-move movie-thread crash is unresolved; FPS and gameplay are unknown.","构建工具：WinLibs GCC 15.2.0 r7。整合加载存档并播放开场，随后在通过 3D 接口对 1D 描述符作深度比较采样时终止，未到菜单。原始 main 更早停在已释放目标的寄存器读取。移动窗口时另有视频线程崩溃未解决；FPS 与游戏过程未知。","الأدوات: WinLibs GCC 15.2.0 r7. يحمل الدمج الحفظ ويعرض المقدمة ثم يتوقف عند عينة مقارنة عمق 1D عبر واجهة 3D ، بلا قائمة. main الأصلي يتوقف أبكر. تعطل منفصل عند تحريك النافذة غير محلول؛ FPS واللعب مجهولان.","Ferramentas: WinLibs GCC 15.2.0 r7. A integração carrega dados e toca a introdução, depois falha numa amostra depth 1D por interface 3D, sem menu. Main original para antes. Falha separada ao mover a janela não resolvida; FPS e jogo desconhecidos.","Werkzeuge: WinLibs GCC 15.2.0 r7. Die Integration lädt Daten und Intro, dann Abbruch beim 1D-Tiefenvergleich durch eine 3D-Schnittstelle; kein Menü. main stoppt früher. Separater Absturz beim Fensterbewegen ungeklärt; FPS und Gameplay unbekannt.","Outils : WinLibs GCC 15.2.0 r7. L’intégration charge les données et l’introduction puis bloque sur un échantillon profondeur 1D via interface 3D, sans menu. main s’arrête avant. Plantage au déplacement de fenêtre non résolu ; FPS et jeu inconnus.","Herramientas: WinLibs GCC 15.2.0 r7. La integración carga datos e introducción y falla en una muestra depth 1D por interfaz 3D, sin menú. main se detiene antes. Falla al mover la ventana sin resolver; FPS y juego desconocidos.")}]});
maintenanceGames.push({...{"slug": "tourist-bus-simulator", "name": "Tourist Bus Simulator", "titleId": "PPSA04433", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5346-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5346", "updated": "2026-10-13T17:37:29Z", "testDate": null, "build": "61b8742b6b4508db14e8d253e60cfaa7d105379b", "cpu": null, "gpu": "AMD Radeon RX 7900 XTX", "driver": "32.0.31041.1004", "version": "01.000.000", "patched": false, "media": [], "benchmarks": [], "platform": "windows", "stage": "menu", "os": "Windows"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7. A clean build reaches character/company creation, route planning, bus selection and settings menus. The author reports no audio. Driving, FPS, saves and completion are not tested; usable planning menus do not establish a playable bus route.","构建工具：WinLibs GCC 15.2.0 r7。干净构建到达角色／公司创建、线路规划、选车与设置菜单。作者报告没有声音；驾驶、FPS、存档和通关未测，规划菜单可用不证明线路可游玩。","الأدوات: WinLibs GCC 15.2.0 r7. يبلغ البناء النظيف قوائم الشخصية والشركة والخطوط والحافلات والإعدادات بلا صوت. القيادة و FPS والحفظ والإكمال غير مختبرة؛ قوائم التخطيط لا تثبت رحلة قابلة للعب.","Ferramentas: WinLibs GCC 15.2.0 r7. O build limpo chega a criação, planeamento de linhas, seleção de autocarro e opções, sem áudio. Condução, FPS, gravações e conclusão não testados; menus não comprovam uma rota jogável.","Werkzeuge: WinLibs GCC 15.2.0 r7. Der saubere Build erreicht Erstellung, Linienplanung, Buswahl und Einstellungen ohne Ton. Fahren, FPS, Speichern und Abschluss ungeprüft; Planungsmenüs beweisen keine spielbare Fahrt.","Outils : WinLibs GCC 15.2.0 r7. Le build propre atteint création, planification, choix de bus et réglages, sans son. Conduite, FPS, sauvegardes et fin non testés ; menus ne prouvent pas un trajet jouable.","Herramientas: WinLibs GCC 15.2.0 r7. El build limpio alcanza creación, planificación, selección de bus y ajustes sin audio. Conducción, FPS, guardado y finalización sin probar; menús no prueban una ruta jugable.")}]});
maintenanceGames.push({...{"slug": "planet-coaster", "name": "Planet Coaster: Console Edition", "titleId": "PPSA01736", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5342-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5342", "updated": "2026-10-13T17:29:40Z", "testDate": null, "build": "61b8742b6b4508db14e8d253e60cfaa7d105379b + local 807642a29/85e0d98bb", "cpu": null, "gpu": "NVIDIA RTX 3060", "driver": "610.88", "version": "01.017.000", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows 11 Enterprise"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7. The intro renders at about 6 FPS; incomplete main-menu frames then slow to about 0.8 with a black coaster globe. Audio is heard, input is unresponsive and unverified. The build includes local fiber/stencil fixes; park building, rides and saves are untested.","构建工具：WinLibs GCC 15.2.0 r7。开场约 6 FPS，不完整主菜单帧随后降至约 0.8，过山车球体为黑色。声音可听，输入无响应且未验证。构建含本地 fiber／模板修复，未测试建园、游乐设施或存档。","الأدوات: WinLibs GCC 15.2.0 r7. المقدمة نحو 6 FPS ثم قائمة ناقصة عند 0.8 بكرة سوداء. الصوت مسموع والإدخال غير موثق. البناء بتعديلات fiber/stencil ؛ إنشاء الحديقة والحفظ غير مختبرين.","Ferramentas: WinLibs GCC 15.2.0 r7. Introdução a cerca de 6 FPS, depois menu incompleto a0,8 com globo negro. Há áudio; entrada sem resposta e não validada. Alterações fiber/stencil locais; parque, atrações e gravações não testados.","Werkzeuge: WinLibs GCC 15.2.0 r7. Intro etwa6 FPS, unvollständiges Menü danach0,8 mit schwarzer Kugel. Ton hörbar, Eingaben ungeprüft. Lokale Fiber-/Stencil-Fixes; Parkbau, Fahrten und Speichern ungeprüft.","Outils : WinLibs GCC 15.2.0 r7. Introduction à environ6 FPS puis menu incomplet à 0,8 avec globe noir. Son audible, entrée non validée. Correctifs fiber/stencil locaux ; parc, attractions et sauvegardes non testés.","Herramientas: WinLibs GCC 15.2.0 r7. Introducción a unos6 FPS y menú incompleto a0,8 con globo negro. Audio audible, entrada sin validar. Cambios fiber/stencil locales; parque, atracciones y guardado sin probar.")}]});
maintenanceGames.push({...{"slug": "remnant-2", "name": "Remnant II", "titleId": "PPSA06694", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5320-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5320", "updated": "2026-10-13T17:13:47Z", "testDate": null, "build": "main e152ba8f + #5321/#5322/#5323/#5324 · APS5_STORE_AT_LABEL=1", "cpu": "AMD Ryzen 7 9800X3D", "gpu": "NVIDIA RTX 5090", "driver": "617.42", "version": "01.000.000", "patched": true, "media": [], "benchmarks": [{"cpu": "AMD Ryzen 7 9800X3D", "gpu": "NVIDIA RTX 5090", "fps": "≈3.5", "context": {"en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. With four local PRs and store-at-label enabled, Create Character renders with input and audio, but a strongly green model. Thirty presents in 8.5 seconds give about 3.5 FPS for that screen. Warm load is about 20 seconds versus two minutes cold. No world, combat, network session or save test.", "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release。四项本地 PR 与 store-at-label 设置下，创建角色界面有操作与声音，但模型明显偏绿。该界面 8.5 秒呈现 30 帧，约 3.5 FPS；预热加载约 20 秒，冷启动约两分钟。未测试世界、战斗、联网会话或存档。", "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. أربع PR محلية و store-at-label تعرض إنشاء الشخصية مع تحكم وصوت ونموذج أخضر. 30 إطاراً في 8.5 ثانية:3.5 FPS لهذه الشاشة. التحميل الدافئ 20 ثانية مقابل دقيقتين باردتين. لا عالم أو قتال أو شبكة أو حفظ مختبر.", "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Quatro PR locais e store-at-label mostram criação com controlo/áudio e modelo verde. 30 apresentações/8,5 s:3,5 FPS nesse ecrã. Carga quente20 s, fria2 min. Mundo, combate, rede e gravações não testados.", "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Vier lokale PRs und store-at-label zeigen Charaktererstellung mit Eingabe/Ton und grünem Modell. 30 Präsentationen/8,5 s:3,5 FPS dieses Bildschirms. Warm20 s, kalt2 min. Welt, Kampf, Netzwerk und Speichern ungeprüft.", "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Quatre PR locales et store-at-label affichent création avec commandes/son et modèle vert. 30 présentations/8,5 s :3,5 FPS pour cet écran. Chargement chaud20 s, froid2 min. Monde, combat, réseau et sauvegarde non testés.", "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. Cuatro PR locales y store-at-label muestran creación con controles/audio y modelo verde. 30 presentaciones/8,5 s:3,5 FPS en esa pantalla. Carga caliente20 s, fría2 min. Mundo, combate, red y guardado sin probar."}}], "platform": "windows", "stage": "menu", "os": "Windows 11 Pro"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7 · Release. With four local PRs and store-at-label enabled, Create Character renders with input and audio, but a strongly green model. Thirty presents in 8.5 seconds give about 3.5 FPS for that screen. Warm load is about 20 seconds versus two minutes cold. No world, combat, network session or save test.","构建工具：WinLibs GCC 15.2.0 r7 · Release。四项本地 PR 与 store-at-label 设置下，创建角色界面有操作与声音，但模型明显偏绿。该界面 8.5 秒呈现 30 帧，约 3.5 FPS；预热加载约 20 秒，冷启动约两分钟。未测试世界、战斗、联网会话或存档。","الأدوات: WinLibs GCC 15.2.0 r7 · Release. أربع PR محلية و store-at-label تعرض إنشاء الشخصية مع تحكم وصوت ونموذج أخضر. 30 إطاراً في 8.5 ثانية:3.5 FPS لهذه الشاشة. التحميل الدافئ 20 ثانية مقابل دقيقتين باردتين. لا عالم أو قتال أو شبكة أو حفظ مختبر.","Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Quatro PR locais e store-at-label mostram criação com controlo/áudio e modelo verde. 30 apresentações/8,5 s:3,5 FPS nesse ecrã. Carga quente20 s, fria2 min. Mundo, combate, rede e gravações não testados.","Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Vier lokale PRs und store-at-label zeigen Charaktererstellung mit Eingabe/Ton und grünem Modell. 30 Präsentationen/8,5 s:3,5 FPS dieses Bildschirms. Warm20 s, kalt2 min. Welt, Kampf, Netzwerk und Speichern ungeprüft.","Outils : WinLibs GCC 15.2.0 r7 · Release. Quatre PR locales et store-at-label affichent création avec commandes/son et modèle vert. 30 présentations/8,5 s :3,5 FPS pour cet écran. Chargement chaud20 s, froid2 min. Monde, combat, réseau et sauvegarde non testés.","Herramientas: WinLibs GCC 15.2.0 r7 · Release. Cuatro PR locales y store-at-label muestran creación con controles/audio y modelo verde. 30 presentaciones/8,5 s:3,5 FPS en esa pantalla. Carga caliente20 s, fría2 min. Mundo, combate, red y guardado sin probar.")}]});
maintenanceGames.push({...{"slug": "olliolli-world", "name": "OlliOlli World", "titleId": "PPSA02327", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5316-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5316", "updated": "2026-10-13T17:03:30Z", "testDate": null, "build": "main 2a2a3dc650b9245fb0fb9b088afb1a6c27637f7d · APS5_STORE_AT_FLIP=1", "cpu": "AMD Ryzen 5 5600X", "gpu": "AMD Radeon RX 6700 XT", "driver": "32.0.21045.5002", "version": "01.005.000", "patched": false, "media": [], "benchmarks": [], "platform": "windows", "stage": "menu", "os": "Windows 11 Pro · 10.0.26200"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. Clothing customization renders with store-at-flip; the default run stays almost white. The screenshot counter near 85 FPS is a single observation, not a benchmark. Profiling also differs, so attribution is not isolated. Skating, audio, saves and an earlier menu abort remain unverified.","构建工具：WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. store-at-flip 下服饰定制可显示，默认运行几乎全白。截图约 85 FPS 只是一帧观察，非基准；性能分析设置也不同，未隔离因果。滑板过程、声音、存档与旧菜单崩溃未验证。","الأدوات: WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. تظهر الملابس مع store-at-flip ، والافتراضي أبيض تقريباً. عداد 85 بصورة واحدة ليس قياساً. تختلف إعدادات التحليل فلا سبب معزول. التزلج والصوت والحفظ وتعطل سابق غير موثقة.","Ferramentas: WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. Personalização aparece com store-at-flip; padrão quase branco. Contador85 numa imagem não é benchmark. Profiling também difere, sem causa isolada. Skate, áudio, gravações e falha anterior não verificados.","Werkzeuge: WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. Kleidung erscheint mit store-at-flip, Standard fast weiß. Zähler85 auf einem Bild ist kein Benchmark. Profiling unterscheidet sich ebenfalls, Ursache nicht isoliert. Skaten, Ton, Speichern und alter Absturz ungeprüft.","Outils : WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. Personnalisation visible avec store-at-flip, défaut presque blanc. Compteur85 sur une image, pas un benchmark. Profilage différent, cause non isolée. Skate, son, sauvegardes et ancien plantage non vérifiés.","Herramientas: WinLibs GCC 15.2.0 r7 · Release · SPIRV-Tools ON. Personalización visible con store-at-flip, predeterminado casi blanco. Contador85 en una imagen no es benchmark. Perfilado también difiere, causa no aislada. Skate, audio, guardado y fallo previo sin verificar.")}]});
maintenanceGames.push({...{"slug": "mgs-peace-walker", "name": "Metal Gear Solid: Peace Walker · Master Collection", "titleId": "PPSA18216", "edition": "PS5 · Master Collection", "reviewed": "2026-10-14"},reports:[{...{"id": "5268-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5268", "updated": "2026-10-13T16:06:03Z", "testDate": null, "build": "main 146f17154 + local export implementations", "cpu": null, "gpu": "NVIDIA RTX 3080 Ti", "driver": "615.71.09", "version": "01.301.000", "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "boot", "os": "Ubuntu 26.10"},summary:L("Toolchain: GCC 15.3.0. The Unity launcher runs, but hand-over to mgspw.elf fails because converted modules differ. Relinking the game alone with local exports gives a black window without useful frames for four minutes. The launcher counter near 52 is not game FPS. Start arguments, audio, input and gameplay remain unresolved.","构建工具：GCC 15.3.0. Unity 启动器可运行，但因转换后模块不一致，无法交接到 mgspw.elf。单独转换游戏并加本地导出后，四分钟黑屏且无有效帧；启动器约 52 的计数不是游戏 FPS。启动参数、声音、输入和游戏过程未解决。","الأدوات: GCC 15.3.0. يعمل مشغل Unity لكن تسليم mgspw.elf يفشل لاختلاف الوحدات. اللعبة منفردة بتصديرات محلية تبقى سوداء أربع دقائق. عداد المشغل 52 ليس FPS اللعبة. الوسائط والصوت والإدخال واللعب غير محسومة.","Ferramentas: GCC 15.3.0. O lançador Unity corre, mas a passagem a mgspw.elf falha por módulos diferentes. Jogo isolado com exports locais fica negro quatro minutos. Contador52 do lançador não é FPS de jogo. Argumentos, áudio, entrada e jogo por resolver.","Werkzeuge: GCC 15.3.0. Unity-Launcher läuft, Übergabe an mgspw.elf scheitert an unterschiedlichen Modulen. Einzelnes Spiel mit lokalen Exports bleibt vier Minuten schwarz. Launcher-Zähler52 ist keine Gameplay-FPS. Argumente, Ton, Eingabe und Spiel ungeklärt.","Outils : GCC 15.3.0. Le lanceur Unity fonctionne, mais transfert vers mgspw.elf échoue à cause des modules différents. Jeu seul avec exports locaux : noir quatre minutes. Compteur52 du lanceur, pas du jeu. Arguments, son, entrée et jeu non résolus.","Herramientas: GCC 15.3.0. El lanzador Unity funciona, pero el traspaso a mgspw.elf falla por módulos distintos. Juego aislado con exports locales queda negro cuatro minutos. Contador52 del lanzador no es FPS del juego. Argumentos, audio, entrada y juego sin resolver.")}]});
maintenanceGames.push({...{"slug": "red-dead-redemption", "name": "Red Dead Redemption", "titleId": "PPSA30528", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5345-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5345", "updated": "2026-10-13T18:03:53Z", "testDate": null, "build": "981acf21ed70 · patch status not stated", "cpu": null, "gpu": "NVIDIA RTX 4070 SUPER", "driver": "616.64", "version": null, "patched": null, "media": [], "benchmarks": [{"cpu": null, "gpu": "NVIDIA RTX 4070 SUPER", "fps": "≈2.6–2.7", "context": {"en": "A warm 4K capture measures 13 presents over 4.93 seconds while idle in Armadillo; median frame time is 378 ms (about 2.7 FPS). Menu 60 FPS and early cutscene 10 FPS are separate scenes. The queue worker is CPU-bound and a larger draw cache does not solve it. CPU model, content version, patches, input and completion are unknown.", "zh": "预热 4K 抓取在 Armadillo 静止场景中 4.93 秒呈现 13 帧，中位帧时间 378 ms（约 2.7 FPS）。菜单 60 与开场约 10 FPS 属不同场景。队列线程受 CPU 限制，增大绘制缓存未解决；CPU 型号、内容版本、补丁、操作和通关未知。", "ar": "التقاط دافئ 4K في Armadillo يسجل 13 عرضاً خلال 4.93 ثانية؛ وسيط 378 ms ، نحو 2.7 FPS. قائمة 60 ومقدمة 10 مشاهد منفصلة. العامل محدود بالـ CPU وكبر cache لا يحل ذلك. طراز CPU والنسخة والتعديلات والإدخال والإكمال مجهولة.", "pt": "Captura quente4K em Armadillo:13 apresentações/4,93 s, mediana378 ms, cerca de 2,7 FPS. Menu 60 e abertura10 são cenas distintas. Worker limitado pela CPU; cache maior não resolve. CPU, versão, patches, controlo e conclusão desconhecidos.", "de": "Warme4K-Aufnahme in Armadillo:13 Präsentationen/4,93 s, Median378 ms, etwa2,7 FPS. Menü60 und Intro10 sind andere Szenen. Worker CPU-limitiert; größerer Cache hilft nicht. CPU-Modell, Version, Patches, Eingabe und Abschluss fehlen.", "fr": "Capture chaude4K à Armadillo :13 présentations/4,93 s, médiane378 ms, environ2,7 FPS. Menu 60 et ouverture10 sont distincts. Worker limité CPU ; cache agrandi ne résout rien. CPU, version, correctifs, commandes et fin inconnus.", "es": "Captura caliente4K en Armadillo:13 presentaciones/4,93 s, mediana378 ms, unos2,7 FPS. Menú60 y apertura10 son escenas distintas. Worker limitado por CPU; caché mayor no resuelve. CPU, versión, parches, controles y finalización desconocidos."}}], "platform": "windows", "stage": "ingame", "os": "Windows 11 · 10.0.26200"},summary:L("A warm 4K capture measures 13 presents over 4.93 seconds while idle in Armadillo; median frame time is 378 ms (about 2.7 FPS). Menu 60 FPS and early cutscene 10 FPS are separate scenes. The queue worker is CPU-bound and a larger draw cache does not solve it. CPU model, content version, patches, input and completion are unknown.","预热 4K 抓取在 Armadillo 静止场景中 4.93 秒呈现 13 帧，中位帧时间 378 ms（约 2.7 FPS）。菜单 60 与开场约 10 FPS 属不同场景。队列线程受 CPU 限制，增大绘制缓存未解决；CPU 型号、内容版本、补丁、操作和通关未知。","التقاط دافئ 4K في Armadillo يسجل 13 عرضاً خلال 4.93 ثانية؛ وسيط 378 ms ، نحو 2.7 FPS. قائمة 60 ومقدمة 10 مشاهد منفصلة. العامل محدود بالـ CPU وكبر cache لا يحل ذلك. طراز CPU والنسخة والتعديلات والإدخال والإكمال مجهولة.","Captura quente4K em Armadillo:13 apresentações/4,93 s, mediana378 ms, cerca de 2,7 FPS. Menu 60 e abertura10 são cenas distintas. Worker limitado pela CPU; cache maior não resolve. CPU, versão, patches, controlo e conclusão desconhecidos.","Warme4K-Aufnahme in Armadillo:13 Präsentationen/4,93 s, Median378 ms, etwa2,7 FPS. Menü60 und Intro10 sind andere Szenen. Worker CPU-limitiert; größerer Cache hilft nicht. CPU-Modell, Version, Patches, Eingabe und Abschluss fehlen.","Capture chaude4K à Armadillo :13 présentations/4,93 s, médiane378 ms, environ2,7 FPS. Menu 60 et ouverture10 sont distincts. Worker limité CPU ; cache agrandi ne résout rien. CPU, version, correctifs, commandes et fin inconnus.","Captura caliente4K en Armadillo:13 presentaciones/4,93 s, mediana378 ms, unos2,7 FPS. Menú60 y apertura10 son escenas distintas. Worker limitado por CPU; caché mayor no resuelve. CPU, versión, parches, controles y finalización desconocidos.")}]});
maintenanceGames.push({...{"slug": "dragon-quest-iii-hd2d", "name": "Dragon Quest III HD-2D Remake", "titleId": "PPSA20612", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5332-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5332", "updated": "2026-10-13T17:19:01Z", "testDate": null, "build": "242bae744 + local #4449 port · udmabuf limit 2048 MiB", "cpu": "AMD Ryzen 5 7640U", "gpu": "AMD Radeon 760M", "driver": "RADV · version unknown", "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "menu", "os": "Nobara Linux · Xwayland"},summary:L("RAM: 14 GiB. Title, naming and new-adventure menus reach the Autosaving tutorial before a Vulkan acquire timeout. The window counter shows about 8–11 FPS in menus with draw profiling; no trace or exploration/battle test. Raising the temporary udmabuf limit bypasses a 147.6 MiB import failure; it is not an upstream code fix.","内存：14 GiB。标题、命名及新冒险菜单到达自动存档教程，随后 Vulkan acquire 超时。开启绘制分析时菜单窗口计数约 8–11 FPS，没有追踪或探索／战斗测试。临时提高 udmabuf 上限绕过 147.6 MiB 导入失败，不是上游代码修复。","الذاكرة: 14 GiB. تبلغ قوائم العنوان والاسم والمغامرة تعليم الحفظ ثم مهلة Vulkan. عداد القائمة 8–11 FPS مع profiling ، بلا تتبع أو استكشاف/قتال. رفع udmabuf المؤقت يتجاوز استيراد 147.6 MiB ولا يعد إصلاحاً upstream.","RAM: 14 GiB. Título, nome e aventura chegam ao tutorial de gravação antes do timeout Vulkan. Contador de menu 8–11 com profiling, sem trace ou exploração/combate. Limite udmabuf temporário passa import147,6 MiB; não é correção upstream.","RAM: 14 GiB. Titel, Name und Abenteuer erreichen Speicherhinweis vor Vulkan-Timeout. Menüzähler8–11 mit Profiling, kein Trace oder Erkundungs-/Kampftest. Temporäres udmabuf-Limit umgeht147,6-MiB-Import; kein Upstream-Fix.","RAM : 14 GiB. Titre, nom et aventure atteignent tutoriel de sauvegarde avant timeout Vulkan. Compteur menu 8–11 avec profilage, sans trace ni exploration/combat. Limite udmabuf temporaire contourne import147,6 MiB ; pas de correction upstream.","RAM: 14 GiB. Título, nombre y aventura alcanzan tutorial de guardado antes de timeout Vulkan. Contador menú 8–11 con perfilado, sin trace ni exploración/combate. Límite udmabuf temporal evita import147,6 MiB; no es arreglo upstream.")}]});
maintenanceGames.push({...{"slug": "nhl-26", "name": "EA SPORTS NHL 26", "titleId": "PPSA26785", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5398-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5398", "updated": "2026-10-13T19:44:30Z", "testDate": null, "build": "main 18c438b10 + local Vdecsw/guest-module registration changes", "cpu": "Intel Core i9-14900KF", "gpu": "NVIDIA RTX 3070", "driver": "595.99.02", "version": "01.060.000", "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "blocked", "os": "Linux Mint 22.3 · kernel 7.0.0-38"},summary:L("Toolchain: GCC 13.3.0 · Release. The integration creates a swapchain and registers shaders but presents no frame, aborting within about 90 seconds on a wave64 pixel lane-63 read with a 32-lane host. Local decoder exports and module registration are prerequisites. Neither 0 absent imports nor older busy-thread runs establish a menu or match.","构建工具：GCC 13.3.0 · Release。整合创建交换链并注册着色器，但没有呈现帧，约 90 秒内因 32-lane 主机上的 wave64 像素 lane-63 读取终止。此前需本地解码导出和模块注册。导入零缺失及旧线程繁忙记录均不证明菜单或比赛。","الأدوات: GCC 13.3.0 · Release. ينشئ الدمج swapchain وشيدرات بلا إطار ثم يفشل خلال 90 ثانية بقراءة lane63 pixel wave64 على مضيف 32. يحتاج تصديرات وتسجيل وحدات محلية. صفر واردات مفقودة لا يثبت قائمة أو مباراة.","Ferramentas: GCC 13.3.0 · Release. A integração cria swapchain/shaders sem quadro e falha em90 s na leitura lane63 pixel wave64 num host32. Exports/registo locais necessários. Zero imports ausentes não comprova menu ou partida.","Werkzeuge: GCC 13.3.0 · Release. Integration erstellt Swapchain/Shader ohne Bild, Abbruch binnen90 s bei lane63 pixel-wave64 auf32-Lane-Host. Lokale Exports/Registrierung nötig. Keine fehlenden Imports beweisen kein Menü oder Match.","Outils : GCC 13.3.0 · Release. L’intégration crée swapchain/shaders sans image puis échoue en 90 s à lane63 pixel-wave64 sur hôte32. Exports/enregistrement locaux nécessaires. Zéro import absent ne prouve menu ou match.","Herramientas: GCC 13.3.0 · Release. La integración crea swapchain/shaders sin imagen y falla en 90 s en lane63 pixel-wave64 sobre host32. Exports/registro locales necesarios. Cero imports ausentes no prueba menú o partido.")}]});
maintenanceGames.push({...{"slug": "call-of-duty-black-ops", "name": "Call of Duty: Black Ops", "titleId": "PPSA34501", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5389-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5389", "updated": "2026-10-13T18:41:46Z", "testDate": "2026-10-13", "build": "alexpournaras/games/blackops · base c422b57fb · tested fork head not stated", "cpu": "AMD Ryzen 9 9900X", "gpu": "NVIDIA RTX 2060", "driver": "617.42", "version": "01.008.000", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "ingame", "os": "Windows 11 Pro"},summary:L("RAM: 32 GB DDR5-6000. Toolchain: GCC 15.2.0. The fork reaches Cuba campaign play and Solo Zombies with rendering, HUD and audio. APS5_TIME_SCALE=4 is required to avoid slow motion; reported gameplay ranges are indoors 5–15 and outdoors 3–10 FPS. The separate “Performance” row and 9.52 FPS capture replay are not the same run. Multiplayer, online/split-screen Zombies and completion are unverified or fail.","内存：32 GB DDR5-6000。构建工具：GCC 15.2.0. 分支进入古巴战役与单人 Zombies，画面、HUD 和声音有记录。需 APS5_TIME_SCALE=4 避免慢放；报告游戏过程室内 5–15、室外 3–10 FPS。“Performance” 行及 9.52 FPS 抓取重放不是同一运行。多人、在线／分屏 Zombies 与通关未验证或失败。","الذاكرة: 32 GB DDR5-6000. الأدوات: GCC 15.2.0. يبلغ الفرع حملة كوبا و Zombies الفردي مع رسم وصوت. APS5_TIME_SCALE=4 ضروري؛ داخلي 5–15 وخارجي 3–10 FPS. صف Performance وإعادة الالتقاط 9.52 تجربة أخرى. الشبكة والتقسيم والإكمال غير مثبتة أو تفشل.","RAM: 32 GB DDR5-6000. Ferramentas: GCC 15.2.0. O fork chega à campanha Cuba e Zombies Solo com imagem/áudio. APS5_TIME_SCALE=4 necessário; interiores5–15, exteriores3–10 FPS. Linha Performance e replay9,52 são outros testes. Rede, ecrã dividido e conclusão não validados ou falham.","RAM: 32 GB DDR5-6000. Werkzeuge: GCC 15.2.0. Der Fork erreicht Kuba und Solo-Zombies mit Bild/Ton. APS5_TIME_SCALE=4 nötig; innen5–15, außen3–10 FPS. Performance-Zeile und 9,52-Replay sind andere Tests. Netzwerk, Splitscreen und Abschluss ungeprüft oder fehlerhaft.","RAM : 32 GB DDR5-6000. Outils : GCC 15.2.0. Le fork atteint Cuba et Zombies Solo avec image/son. APS5_TIME_SCALE=4 requis ; intérieur5–15, extérieur3–10 FPS. Ligne Performance et replay9,52 distincts. Réseau, écran partagé et fin non vérifiés ou échouent.","RAM: 32 GB DDR5-6000. Herramientas: GCC 15.2.0. El fork alcanza Cuba y Zombies Solo con gráficos/audio. APS5_TIME_SCALE=4 necesario; interiores5–15, exteriores3–10 FPS. Fila Performance y replay9,52 son otros ensayos. Red, pantalla dividida y finalización sin validar o fallan.")},{...{"id": "5389-windows-main-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5389", "updated": "2026-10-13T18:41:46Z", "testDate": "2026-10-13", "build": "main c422b57fb", "cpu": "AMD Ryzen 9 9900X", "gpu": "NVIDIA RTX 2060", "driver": "617.42", "version": "01.008.000", "patched": false, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows 11 Pro"},summary:L("RAM: 32 GB DDR5-6000. Toolchain: GCC 15.2.0. The same author reports that current unmodified main stops at startup. No precise error or frame observation is supplied for this control. Keep it separate from the campaign/Zombies fork and do not promise the release downloads reproduce that fork.","内存：32 GB DDR5-6000。构建工具：GCC 15.2.0. 同一作者报告当前原始 main 在启动阶段受阻，但未提供此对照的准确错误或画面观察。与战役／Zombies 分支分开，不能承诺发行下载复现分支结果。","الذاكرة: 32 GB DDR5-6000. الأدوات: GCC 15.2.0. يذكر الكاتب فشل main الأصلي عند البداية دون خطأ دقيق أو صورة لهذا الضبط. منفصل عن فرع الحملة؛ تنزيل الإصدار لا يضمن نتيجته.","RAM: 32 GB DDR5-6000. Ferramentas: GCC 15.2.0. O autor relata falha de main original no arranque, sem erro exato ou imagem deste controlo. Separado do fork; downloads não garantem o resultado.","RAM: 32 GB DDR5-6000. Werkzeuge: GCC 15.2.0. Der Autor meldet main-Startfehler ohne genaue Fehlermeldung oder Bild dieses Vergleichs. Vom Fork getrennt; Release-Downloads versprechen dessen Ergebnis nicht.","RAM : 32 GB DDR5-6000. Outils : GCC 15.2.0. L’auteur rapporte un échec main au lancement sans erreur précise ou image de ce contrôle. Distinct du fork ; les téléchargements ne garantissent pas ce résultat.","RAM: 32 GB DDR5-6000. Herramientas: GCC 15.2.0. El autor indica fallo de main al iniciar sin error exacto o imagen del control. Separado del fork; las descargas no garantizan ese resultado.")}]});
maintenanceGames.push({...{"slug": "void-terrarium-plus", "name": "Void Terrarium++", "titleId": "PPSA03061", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5055-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5055", "updated": "2026-10-13T16:49:15Z", "testDate": null, "build": "main bb9a4d8a2 · --skip-sce-module workaround", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": false, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows"},summary:L("Toolchain: MinGW-w64 GCC 15.2.0 · Release. The converted executable fails at unresolved libc NID BKSCW2bCACA after bundled modules are skipped. The author suspects a truncated dump and separately reports an AudioIn build error; input integrity and a complete runtime are not established. Content version, hardware, images and gameplay are unknown.","构建工具：MinGW-w64 GCC 15.2.0 · Release。跳过随游戏模块后，转换程序因 libc NID BKSCW2bCACA 未解析失败。作者怀疑转储截断，另报 AudioIn 构建错误，尚不能确认输入完整性和完整运行库。内容版本、硬件、画面及游戏过程未知。","الأدوات: MinGW-w64 GCC 15.2.0 · Release. يفشل الناتج عند NID libc بعد تجاوز الوحدات. يشتبه الكاتب بنقص dump ويذكر خطأ بناء AudioIn ؛ سلامة المدخلات والمكتبات غير مثبتة. النسخة والعتاد والصورة واللعب مجهولة.","Ferramentas: MinGW-w64 GCC 15.2.0 · Release. O executável falha num NID libc após ignorar módulos. Autor suspeita dump truncado e relata erro AudioIn; integridade/runtime não confirmados. Versão, equipamento, imagem e jogo desconhecidos.","Werkzeuge: MinGW-w64 GCC 15.2.0 · Release. Der Output scheitert am libc-NID nach Modulüberspringen. Autor vermutet gekürzten Dump und meldet AudioIn-Buildfehler; Eingaben/Runtime ungeklärt. Version, Hardware, Bild und Gameplay fehlen.","Outils : MinGW-w64 GCC 15.2.0 · Release. L’exécutable échoue au NID libc après omission des modules. Dump tronqué suspecté, erreur AudioIn signalée ; intégrité/runtime non établis. Version, matériel, image et jeu inconnus.","Herramientas: MinGW-w64 GCC 15.2.0 · Release. El ejecutable falla en NID libc tras omitir módulos. Se sospecha dump truncado y error AudioIn; integridad/runtime sin confirmar. Versión, equipo, imagen y juego desconocidos.")}]});
maintenanceGames.push({...{"slug": "kena-bridge-of-spirits", "name": "Kena: Bridge of Spirits", "titleId": "PPSA01746", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5099-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5099", "updated": "2026-10-13T18:26:55Z", "testDate": null, "build": "main b1328fc0f · diagnostic backtrace · guest module integrity unverified", "cpu": null, "gpu": "NVIDIA RTX 5080", "driver": "615.78.08", "version": null, "patched": null, "media": [], "benchmarks": [], "platform": "linux", "stage": "blocked", "os": "Arch Linux"},summary:L("Toolchain: GCC 16.2.1 · Release. Seven runs stop before the first present: four at an unreadable SRT pointer and three at depth/stencil storage access. The author cannot verify the game modules are unmodified. A local print locates the walk, not its cause. Content version, input, audio and FPS remain unknown.","构建工具：GCC 16.2.1 · Release。七次运行均在首帧前停止：四次 SRT 指针不可读，三次深度／模板 storage 访问失败。作者无法确认游戏模块未经修改，本地打印仅定位遍历而非原因。内容版本、输入、声音与 FPS 未知。","الأدوات: GCC 16.2.1 · Release. سبعة تشغيلات تتوقف قبل أول إطار: أربع مؤشر SRT وثلاث depth/stencil. وحدات اللعبة غير مؤكدة السلامة. الطباعة تحدد المسار لا السبب. النسخة والإدخال والصوت و FPS مجهولة.","Ferramentas: GCC 16.2.1 · Release. Sete execuções param antes do primeiro quadro: quatro no SRT, três no depth/stencil. Módulos do jogo não confirmados intactos. Print localiza o percurso, não a causa. Versão, entrada, áudio e FPS desconhecidos.","Werkzeuge: GCC 16.2.1 · Release. Sieben Läufe stoppen vor dem ersten Bild: vier SRT, drei Depth/Stencil. Unveränderte Spielmodule nicht bestätigt. Ausgabe lokalisiert den Weg, keine Ursache. Version, Eingabe, Ton, FPS unbekannt.","Outils : GCC 16.2.1 · Release. Sept essais stoppent avant image: quatre SRT, trois depth/stencil. Modules intacts non confirmés. Print localise le chemin, pas la cause. Version, entrée, son, FPS inconnus.","Herramientas: GCC 16.2.1 · Release. Siete ejecuciones paran antes de imagen: cuatro SRT, tres depth/stencil. Módulos intactos sin confirmar. Print localiza ruta, no causa. Versión, entrada, audio, FPS desconocidos.")}]});
maintenanceGames.push({...{"slug": "dead-cells", "name": "Dead Cells", "titleId": "PPSA15552", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "3553-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/3553#issuecomment-6150091545", "updated": "2026-10-13T16:24:32Z", "testDate": null, "build": "main fdefd7660 + #4417 runtime 1d5190d0", "cpu": null, "gpu": "AMD Radeon · GFX1036", "driver": "Mesa 22.3.6 RADV", "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "blocked", "os": "Debian 12"},summary:L("Toolchain: GCC 14.4. The local rack implementation gets past creation, then stops in sceNgs2GeomCalcListener on a nondefault listener orientation. No rotation fix or visible game result is verified. Plain main still stops earlier at rack 0x4001. Version, CPU, audio and FPS are unknown.","构建工具：GCC 14.4。本地 rack 实现绕过创建后，仍在 sceNgs2GeomCalcListener 的非默认监听方向停止。没有已验证旋转修复或可见游戏结果，原始 main 仍更早停在 rack 0x4001。版本、CPU、声音与 FPS 未知。","الأدوات: GCC 14.4. يتجاوز تنفيذ rack المحلي الإنشاء ثم يتوقف عند اتجاه مستمع غير افتراضي. لا إصلاح دوران أو صورة لعبة مؤكدة. main يتوقف أبكر عند 0x4001. النسخة و CPU والصوت و FPS مجهولة.","Ferramentas: GCC 14.4. O rack local passa a criação, depois para na orientação não padrão. Sem correção de rotação ou jogo visível confirmado. main para antes em0x4001. Versão, CPU, áudio, FPS desconhecidos.","Werkzeuge: GCC 14.4. Lokaler Rack-Code passiert Erstellung, stoppt dann an anderer Hörerausrichtung. Kein bestätigter Rotationsfix oder Spielbild. main stoppt früher an0x4001. Version, CPU, Ton, FPS fehlen.","Outils : GCC 14.4. Le rack local dépasse création puis bloque à l’orientation du récepteur. Pas de correctif de rotation ou image confirmé. main stoppe avant à 0x4001. Version, CPU, son, FPS inconnus.","Herramientas: GCC 14.4. El rack local pasa creación y para en orientación del oyente. Sin arreglo de rotación o imagen confirmados. main para antes en 0x4001. Versión, CPU, audio, FPS desconocidos.")}]});
maintenanceGames.push({...{"slug": "ride-4", "name": "RIDE 4", "titleId": "PPSA01599", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "3468-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/3468", "updated": "2026-10-13T14:55:33Z", "testDate": null, "build": "main 99c1c263 + #3435/#3440/#3458", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "menu", "os": "Linux"},summary:L("The local integration reaches the title screen, then aborts after about 290 seconds on a nonzero audio-resampling ratio change. A later PS5 firmware 13.60 probe cannot resolve the batch-builder exports, so it does not validate ramp semantics or a fix. Racing, audio quality, hardware and FPS are unknown.","本地整合到达标题画面，约 290 秒后因非零音频重采样比率变化终止。后续 PS5 固件 13.60 探针无法解析批处理导出，没有验证 ramp 语义或修复。比赛、声音质量、硬件与 FPS 未知。","يصل الدمج إلى العنوان ثم يفشل بعد 290 ثانية بتغيير نسبة الصوت. مسبار PS5 13.60 لا يجد exports ولا يثبت السلوك أو الإصلاح. السباق والصوت والعتاد و FPS مجهولة.","A integração chega ao título, falha após 290 s numa variação áudio. Probe PS5 13.60 não resolve exports nem valida semântica/correção. Corridas, qualidade áudio, equipamento, FPS desconhecidos.","Integration erreicht Titel, Abbruch nach 290 s an Audio-Ratenänderung. PS5-13.60-Probe findet Exports nicht; keine Semantik/Fix-Bestätigung. Rennen, Tonqualität, Hardware, FPS fehlen.","Intégration au titre, blocage après290 s au changement audio. Probe PS5 13.60 sans exports, ni sémantique/correction validée. Course, qualité sonore, matériel, FPS inconnus.","Integración alcanza título, falla tras 290 s en cambio de audio. Probe PS5 13.60 sin exports, no valida semántica/arreglo. Carreras, calidad audio, equipo, FPS desconocidos.")}]});
maintenanceGames.push({...{"slug": "high-on-life", "name": "High on Life", "titleId": "PPSA15388", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "4736-linux-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/4736#issuecomment-6138987832", "updated": "2026-10-13T05:38:25Z", "testDate": null, "build": "main 3377986a + #1077/#425/#3202/#4937/#1418/#4487 + local sampler approximations", "cpu": null, "gpu": "NVIDIA RTX 4090", "driver": "615.78", "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "linux", "stage": "ingame", "os": "CachyOS · kernel 7.2"},summary:L("Toolchain: GCC 16 · Release. In a later save, home-base/city direct lighting and inventory render, but sky and indirect lighting remain black. Local cube-XOR and sampler changes are required; eager write-back produces alternating rainbow/black output, not a verified fix. Version, CPU, FPS, control, audio and completion are unknown.","构建工具：GCC 16 · Release。后段存档中基地／城市直射光及物品栏可显示，天空和间接照明仍黑。需要本地 cube-XOR 与采样近似改动；eager write-back 只产生彩虹／黑色交替，非已验证修复。版本、CPU、FPS、操作、声音与通关未知。","الأدوات: GCC 16 · Release. في حفظ لاحق تظهر إضاءة مباشرة وجرد، بينما السماء والإضاءة غير المباشرة سوداء. تعديلات cube-XOR/sampler محلية؛ eager write-back يعطي قوس قزح/أسود وليس إصلاحاً. النسخة و CPU و FPS والتحكم والصوت والإكمال مجهولة.","Ferramentas: GCC 16 · Release. Num save posterior há luz direta e inventário, mas céu/luz indireta negros. Alterações cube-XOR/sampler locais; eager write-back dá arco-íris/negro, não correção. Versão, CPU, FPS, controlo, áudio, conclusão desconhecidos.","Werkzeuge: GCC 16 · Release. Späterer Spielstand zeigt Direktlicht und Inventar, Himmel/indirektes Licht schwarz. Lokale cube-XOR/Sampler-Näherungen; eager write-back ergibt Regenbogen/Schwarz, keinen Fix. Version, CPU, FPS, Eingabe, Ton, Abschluss fehlen.","Outils : GCC 16 · Release. Une sauvegarde ultérieure montre éclairage direct/inventaire, ciel et lumière indirecte noirs. Modifications cube-XOR/sampler locales ; eager write-back donne arc-en-ciel/noir, pas un correctif. Version, CPU, FPS, commandes, son, fin inconnus.","Herramientas: GCC 16 · Release. Guardado posterior muestra luz directa/inventario, cielo e iluminación indirecta negros. Cambios cube-XOR/sampler locales; eager write-back da arcoíris/negro, no arreglo. Versión, CPU, FPS, controles, audio, finalización desconocidos.")}]});
maintenanceGames.push({...{"slug": "slay-the-princess", "name": "Slay the Princess: The Pristine Cut", "titleId": "PPSA24423", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "4369-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/4369", "updated": "2026-10-13T08:50:28Z", "testDate": null, "build": "main d06c06565 + #3840", "cpu": null, "gpu": "NVIDIA RTX 4080 SUPER", "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows 10"},summary:L("One roughly 70-second run aborts because a vertex buffer aliases a color target. No visible scene or FPS is documented. Further main repeats were requested but not supplied; #4408 covers a different skipped-prefix case and is not a verified fix for this draw. Content version and completion are unknown.","一次约 70 秒运行因顶点缓冲区与颜色目标重叠终止，没有记录可见场景或 FPS。后续 main 重复测试仍未提供；#4408 覆盖另一 skipped-prefix 情况，不是对此绘制的已验证修复。内容版本与通关未知。","تشغيل واحد 70 ثانية يفشل بتداخل vertex/target ، دون مشهد أو FPS. تكرار main المطلوب غير متاح؛ #4408 حالة أخرى لا إصلاح مؤكد. النسخة والإكمال مجهولان.","Uma execução70 s falha por sobreposição vertex/target, sem cena/FPS. Repetições main pedidas não fornecidas; #4408 trata outro caso, não fix confirmado. Versão/conclusão desconhecidas.","Ein 70-s-Lauf scheitert an Vertex/Target-Überlappung, ohne Szene/FPS. Angefragte main-Wiederholungen fehlen; #4408 betrifft anderen Fall, kein bestätigter Fix. Version/Abschluss unbekannt.","Un essai 70 s bloque au chevauchement vertex/target, sans scène/FPS. Répétitions main demandées absentes ; #4408 autre cas, pas un fix confirmé. Version/fin inconnues.","Una ejecución 70 s falla por solapamiento vertex/target, sin escena/FPS. Repeticiones main pedidas ausentes; #4408 otro caso, no arreglo confirmado. Versión/finalización desconocidas.")}]});
maintenanceGames.push({...{"slug": "dying-light-2", "name": "Dying Light 2 Stay Human", "titleId": "PPSA02262", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "1794-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/1794", "updated": "2026-10-13T11:55:44Z", "testDate": null, "build": "main 4ddbf049 + local loader/provider/export/mprotect placeholders", "cpu": null, "gpu": "NVIDIA RTX 3070", "driver": null, "version": "01.090.000", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows 11"},summary:L("Toolchain: MinGW GCC 15.2.0. The old local stack reaches title initialization but stops at Net_StartUp failed. Plain main could not start on that pin. Socket/kqueue fixes have since merged and #5109 proposes foreign-image protection, but no new clean-main title run is supplied. No menu, image, audio or FPS result.","构建工具：MinGW GCC 15.2.0。旧本地整合到达游戏初始化后停在 Net_StartUp failed，对应原始 main 无法启动。socket／kqueue 修复后来已合入，#5109 提议外部模块保护，但没有新的原始 main 游戏复测。无菜单、画面、声音或 FPS 结果。","الأدوات: MinGW GCC 15.2.0. الدمج القديم يبلغ التهيئة ثم Net_StartUp failed ؛ main القديم لا يبدأ. دمج socket/kqueue وطرح #5109 لا يتبعه اختبار لعبة main جديد. لا قائمة أو صورة أو صوت أو FPS.","Ferramentas: MinGW GCC 15.2.0. O stack antigo inicia e para em Net_StartUp failed; main desse pin não arranca. Fixes socket/kqueue e proposta #5109 sem novo teste main. Sem menu, imagem, áudio, FPS.","Werkzeuge: MinGW GCC 15.2.0. Alter Stack initialisiert bis Net_StartUp failed; damaliges main startet nicht. Socket/Kqueue-Merges und #5109 ohne neuen main-Titeltest. Kein Menü, Bild, Ton, FPS.","Outils : MinGW GCC 15.2.0. Ancienne pile initialise puis Net_StartUp failed ; main du pin ne démarre pas. Merges socket/kqueue et #5109 sans nouveau test main. Pas de menu, image, son, FPS.","Herramientas: MinGW GCC 15.2.0. Stack antiguo inicializa hasta Net_StartUp failed; main del pin no arranca. Merges socket/kqueue y #5109 sin nueva prueba main. Sin menú, imagen, audio, FPS.")}]});
maintenanceGames.push({...{"slug": "sifu", "name": "Sifu", "titleId": "PPSA03001", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "4491-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/pull/4491#issuecomment-6147267523", "updated": "2026-10-13T13:59:34Z", "testDate": null, "build": "main 8299b2f7e + #4491 head 51c7206fd", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows 10"},summary:L("Toolchain: WinLibs GCC 15.2.0. The run shows the logo and bypasses the former allocation trap, then aborts around 109 seconds on depth/stencil storage access. Chunk IDs were not traced and the older negative controls use other main commits. This neither isolates causality nor proves a menu, combat, FPS or a Returnal fix.","构建工具：WinLibs GCC 15.2.0。运行显示标志并绕过旧内存分配陷阱，约 109 秒后仍因深度／模板 storage 访问终止。没有追踪 chunk ID，旧失败对照使用其他 main 提交，不能隔离因果或证明菜单、战斗、FPS，也不证明 Returnal 修复。","الأدوات: WinLibs GCC 15.2.0. يظهر الشعار ويتجاوز فخ الذاكرة ثم يفشل نحو 109 ثانية عند depth/stencil. لا تتبع chunk وضوابط قديمة على commits أخرى. لا سبب معزول أو قائمة/قتال/FPS أو إصلاح Returnal.","Ferramentas: WinLibs GCC 15.2.0. Mostra logótipo e passa a armadilha memória, depois falha aos 109 s em depth/stencil. Chunk sem trace, negativos noutros commits. Não isola causa nem prova menu/combate/FPS ou fix Returnal.","Werkzeuge: WinLibs GCC 15.2.0. Logo und kein alter Speichertrap, dann Abbruch nach 109 s bei Depth/Stencil. Chunk-IDs ungetraced, alte Kontrollen andere Commits. Keine isolierte Ursache oder Menü/Kampf/FPS/Returnal-Fix.","Outils : WinLibs GCC 15.2.0. Logo et piège mémoire évité, puis blocage vers 109 s en depth/stencil. Chunks non tracés, anciens contrôles autres commits. Pas de cause isolée ou menu/combat/FPS/fix Returnal.","Herramientas: WinLibs GCC 15.2.0. Logo y trampa de memoria evitada, falla hacia109 s en depth/stencil. Chunks sin trace, controles viejos otros commits. Sin causa aislada ni menú/combate/FPS/arreglo Returnal.")}]});
maintenanceGames.push({...{"slug": "sword-of-the-sea", "name": "Sword of the Sea", "titleId": "PPSA25344", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "5436-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/5436", "updated": "2026-10-13T19:42:35Z", "testDate": null, "build": "unspecified main + #5315/#290/#4515/#4517 · APS5_PROFILE_DRAW=1", "cpu": "AMD Ryzen AI 9 365", "gpu": "NVIDIA RTX 5070 Laptop GPU · 8 GB", "driver": "616.92", "version": null, "patched": true, "media": [], "benchmarks": [{"cpu": "AMD Ryzen AI 9 365", "gpu": "NVIDIA RTX 5070 Laptop GPU · 8 GB", "fps": "6.6–6.8", "context": {"en": "A performance proposal reports gameplay 6.6–6.8 FPS and a cold title-to-game load above 700 seconds on a local stack. CPU queue and GPU timing both exceed a 30 FPS budget, so the proposed 30/60 FPS milestones are targets, not results. Exact head, scene, version, controls, audio and completion are not supplied.", "zh": "性能提案记录本地 PR 栈游戏过程 6.6–6.8 FPS、冷缓存标题至游戏加载超过 700 秒。CPU 队列与 GPU 时间均超出 30 FPS 预算，因此提议的 30／60 FPS 只是目标。准确提交、场景、版本、操作、声音与通关未提供。", "ar": "يسجل مقترح أداء اللعب 6.6–6.8 FPS وتحميلاً بارداً فوق 700 ثانية على دمج محلي. CPU و GPU يتجاوزان ميزانية 30 FPS ؛ أهداف 30/60 ليست نتائج. الالتزام والمشهد والنسخة والتحكم والصوت والإكمال غير مقدمة.", "pt": "Proposta mede jogo6,6–6,8 FPS e carga fria acima 700 s num stack local. CPU/GPU excedem orçamento30 FPS; metas30/60 não são resultados. Commit, cena, versão, controlo, áudio, conclusão ausentes.", "de": "Vorschlag berichtet Gameplay 6,6–6,8 FPS und Kaltladen über 700 s im lokalen Stack. CPU/GPU über 30-FPS-Budget;30/60 sind Ziele. Commit, Szene, Version, Eingabe, Ton, Abschluss fehlen.", "fr": "Proposition rapporte jeu6,6–6,8 FPS et charge froide plus 700 s localement. CPU/GPU dépassent budget30 FPS ;30/60 sont objectifs. Commit, scène, version, commandes, son, fin absents.", "es": "Propuesta indica juego6,6–6,8 FPS y carga fría superior700 s localmente. CPU/GPU exceden presupuesto30 FPS;30/60 son metas. Commit, escena, versión, controles, audio, finalización ausentes."}}], "platform": "windows", "stage": "ingame", "os": "Windows 11"},summary:L("A performance proposal reports gameplay 6.6–6.8 FPS and a cold title-to-game load above 700 seconds on a local stack. CPU queue and GPU timing both exceed a 30 FPS budget, so the proposed 30/60 FPS milestones are targets, not results. Exact head, scene, version, controls, audio and completion are not supplied.","性能提案记录本地 PR 栈游戏过程 6.6–6.8 FPS、冷缓存标题至游戏加载超过 700 秒。CPU 队列与 GPU 时间均超出 30 FPS 预算，因此提议的 30／60 FPS 只是目标。准确提交、场景、版本、操作、声音与通关未提供。","يسجل مقترح أداء اللعب 6.6–6.8 FPS وتحميلاً بارداً فوق 700 ثانية على دمج محلي. CPU و GPU يتجاوزان ميزانية 30 FPS ؛ أهداف 30/60 ليست نتائج. الالتزام والمشهد والنسخة والتحكم والصوت والإكمال غير مقدمة.","Proposta mede jogo6,6–6,8 FPS e carga fria acima 700 s num stack local. CPU/GPU excedem orçamento30 FPS; metas30/60 não são resultados. Commit, cena, versão, controlo, áudio, conclusão ausentes.","Vorschlag berichtet Gameplay 6,6–6,8 FPS und Kaltladen über 700 s im lokalen Stack. CPU/GPU über 30-FPS-Budget;30/60 sind Ziele. Commit, Szene, Version, Eingabe, Ton, Abschluss fehlen.","Proposition rapporte jeu6,6–6,8 FPS et charge froide plus 700 s localement. CPU/GPU dépassent budget30 FPS ;30/60 sont objectifs. Commit, scène, version, commandes, son, fin absents.","Propuesta indica juego6,6–6,8 FPS y carga fría superior700 s localmente. CPU/GPU exceden presupuesto30 FPS;30/60 son metas. Commit, escena, versión, controles, audio, finalización ausentes.")}]});
maintenanceGames.push({...{"slug": "ccleste-homebrew", "name": "ccleste · PS5 homebrew", "titleId": "PPSA59322", "edition": "PS5 · homebrew", "reviewed": "2026-10-14"},reports:[{...{"id": "5079-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/5079", "updated": "2026-10-13T13:01:22Z", "testDate": null, "build": "#4795 head 1eeb2c664 · main cac4e9688 cold control", "cpu": "Intel Core Ultra 9 285H", "gpu": "Intel Arc 140T · 16 GB", "driver": "32.0.101.8991", "version": "1.00 · ccleste homebrew", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows 11 Home"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7 · Release. The homebrew stops before its first frame: a cold pipeline cache hits the title’s ten-second watchdog, while a warm cache exposes an unsupported barycentric-emulation route on the mesh path. The cache-saving PR enables the warm comparison, not gameplay. This is ccleste, not commercial Celeste; no image, audio or FPS result.","构建工具：WinLibs GCC 15.2.0 r7 · Release。自制版首帧前受阻：冷管线缓存触发游戏十秒 watchdog，暖缓存暴露 mesh 路径不支持的重心坐标模拟。缓存保存 PR 只使暖缓存对照可行，没有游戏过程结果。对象是 ccleste，非商业 Celeste；没有画面、声音或 FPS。","الأدوات: WinLibs GCC 15.2.0 r7 · Release. يتوقف homebrew قبل إطار: cache بارد يضرب watchdog10 ثوان،ودافئ يظهر مسار barycentric غير مدعوم. PR للحفظ يسمح بالمقارنة لا اللعب. ccleste لا Celeste التجارية؛ بلا صورة/صوت/FPS.","Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Homebrew para antes da imagem: cache fria watchdog10 s, quente rota barycentric não suportada. PR de cache permite comparação, não jogo. ccleste, não Celeste comercial; sem imagem/áudio/FPS.","Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Homebrew stoppt vor Bild: kalter Cache10-s-Watchdog, warmer Cache fehlender Barycentric-Pfad. Cache-PR erlaubt Vergleich, kein Gameplay. ccleste, nicht kommerzielles Celeste; kein Bild/Ton/FPS.","Outils : WinLibs GCC 15.2.0 r7 · Release. Homebrew bloque avant image : cache froid watchdog10 s, chaud route barycentric absente. PR cache permet comparaison, pas jeu. ccleste, pas Celeste commercial ; sans image/son/FPS.","Herramientas: WinLibs GCC 15.2.0 r7 · Release. Homebrew para antes de imagen: caché fría watchdog10 s, caliente ruta barycentric ausente. PR caché permite comparar, no jugar. ccleste, no Celeste comercial; sin imagen/audio/FPS.")}]});
maintenanceGames.push({...{"slug": "astro-bot-ppsa21567", "name": "ASTRO BOT · PPSA21567", "titleId": "PPSA21567", "edition": "PS5 · PPSA21567", "reviewed": "2026-10-14"},reports:[{...{"id": "357-windows-ppsa21567-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18900788", "updated": "2026-10-13T12:25:04Z", "testDate": "2026-10-13", "build": "danielradosa/astro-windows-1013 9d2b7af30 · main a11c8f7f7 + local stack", "cpu": "AMD Ryzen 5 7600", "gpu": "NVIDIA RTX 4060 · 8 GB", "driver": null, "version": "01.018.000", "patched": true, "media": [], "benchmarks": [{"cpu": "AMD Ryzen 5 7600", "gpu": "NVIDIA RTX 4060 · 8 GB", "fps": "8–13", "context": {"en": "RAM: 16 GB. Toolchain: WinLibs GCC 15.2.0. Controller-played Crash Site presents 8–13 FPS, median about 10.5, in 10-second windows with CPU/GPU profiling. Title 13–16 FPS is separate. This fork has many ported PRs and local optimizations; logic runs in slow motion below 60. Resuming a world-map save asserts. Audio, later levels and completion are not established.", "zh": "内存：16 GB。构建工具：WinLibs GCC 15.2.0。手柄游玩的 Crash Site 在开启 CPU／GPU 分析的 10 秒窗口内为 8–13 FPS，中位约 10.5；标题 13–16 FPS 另列。分支含大量 PR 移植与本地优化，低于 60 时游戏逻辑慢放。恢复世界地图存档会触发断言；声音、后续关卡与通关未证实。", "ar": "الذاكرة: 16 GB. الأدوات: WinLibs GCC 15.2.0. Crash Site مع تحكم يدوي يعطي 8–13 FPS ، وسيط 10.5 ، بنافذة 10 ثوان وتحليل CPU/GPU. العنوان 13–16 منفصل. فرع بتعديلات كثيرة؛ المنطق بطيء دون 60. استئناف حفظ الخريطة يفشل. الصوت والمستويات التالية والإكمال غير مثبتة.", "pt": "RAM: 16 GB. Ferramentas: WinLibs GCC 15.2.0. Crash Site com comando: 8–13 FPS, mediana 10,5 em janelas de 10 segundos com profiling CPU/GPU. Título 13–16 separado. Fork com muitas alterações; lógica lenta abaixo de 60. Retomar gravação no mapa falha. Áudio, níveis posteriores e conclusão não demonstrados.", "de": "RAM: 16 GB. Werkzeuge: WinLibs GCC 15.2.0. Crash Site mit Controller: 8–13 FPS, Median etwa 10,5 in 10-Sekunden-Fenstern mit CPU/GPU-Profiling. Titel 13–16 getrennt. Umfangreicher Fork; Logik unter 60 in Zeitlupe. Weltkarten-Speicherstand scheitert beim Fortsetzen. Ton, spätere Level und Abschluss unbelegt.", "fr": "RAM : 16 GB. Outils : WinLibs GCC 15.2.0. Crash Site à la manette : 8–13 FPS, médiane 10,5 sur 10 secondes avec profilage CPU/GPU. Titre 13–16 séparé. Fork très modifié ; logique ralentie sous 60. Reprise d’une sauvegarde sur carte en échec. Son, niveaux suivants et fin non établis.", "es": "RAM: 16 GB. Herramientas: WinLibs GCC 15.2.0. Crash Site con mando: 8–13 FPS, mediana 10,5 en ventanas de 10 segundos con perfilado CPU/GPU. Título 13–16 separado. Fork con muchos cambios; lógica lenta bajo 60. Reanudar guardado del mapa falla. Audio, niveles posteriores y finalización sin demostrar."}}], "platform": "windows", "stage": "ingame", "os": "Windows 11"},summary:L("RAM: 16 GB. Toolchain: WinLibs GCC 15.2.0. Controller-played Crash Site presents 8–13 FPS, median about 10.5, in 10-second windows with CPU/GPU profiling. Title 13–16 FPS is separate. This fork has many ported PRs and local optimizations; logic runs in slow motion below 60. Resuming a world-map save asserts. Audio, later levels and completion are not established.","内存：16 GB。构建工具：WinLibs GCC 15.2.0。手柄游玩的 Crash Site 在开启 CPU／GPU 分析的 10 秒窗口内为 8–13 FPS，中位约 10.5；标题 13–16 FPS 另列。分支含大量 PR 移植与本地优化，低于 60 时游戏逻辑慢放。恢复世界地图存档会触发断言；声音、后续关卡与通关未证实。","الذاكرة: 16 GB. الأدوات: WinLibs GCC 15.2.0. Crash Site مع تحكم يدوي يعطي 8–13 FPS ، وسيط 10.5 ، بنافذة 10 ثوان وتحليل CPU/GPU. العنوان 13–16 منفصل. فرع بتعديلات كثيرة؛ المنطق بطيء دون 60. استئناف حفظ الخريطة يفشل. الصوت والمستويات التالية والإكمال غير مثبتة.","RAM: 16 GB. Ferramentas: WinLibs GCC 15.2.0. Crash Site com comando: 8–13 FPS, mediana 10,5 em janelas de 10 segundos com profiling CPU/GPU. Título 13–16 separado. Fork com muitas alterações; lógica lenta abaixo de 60. Retomar gravação no mapa falha. Áudio, níveis posteriores e conclusão não demonstrados.","RAM: 16 GB. Werkzeuge: WinLibs GCC 15.2.0. Crash Site mit Controller: 8–13 FPS, Median etwa 10,5 in 10-Sekunden-Fenstern mit CPU/GPU-Profiling. Titel 13–16 getrennt. Umfangreicher Fork; Logik unter 60 in Zeitlupe. Weltkarten-Speicherstand scheitert beim Fortsetzen. Ton, spätere Level und Abschluss unbelegt.","RAM : 16 GB. Outils : WinLibs GCC 15.2.0. Crash Site à la manette : 8–13 FPS, médiane 10,5 sur 10 secondes avec profilage CPU/GPU. Titre 13–16 séparé. Fork très modifié ; logique ralentie sous 60. Reprise d’une sauvegarde sur carte en échec. Son, niveaux suivants et fin non établis.","RAM: 16 GB. Herramientas: WinLibs GCC 15.2.0. Crash Site con mando: 8–13 FPS, mediana 10,5 en ventanas de 10 segundos con perfilado CPU/GPU. Título 13–16 separado. Fork con muchos cambios; lógica lenta bajo 60. Reanudar guardado del mapa falla. Audio, niveles posteriores y finalización sin demostrar.")}]});
maintenanceGames.push({...{"slug": "astro-bot-ppsa21559", "name": "ASTRO BOT · PPSA21559", "titleId": "PPSA21559", "edition": "PS5 · PPSA21559", "reviewed": "2026-10-14"},reports:[{...{"id": "357-linux-ppsa21559-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18908157", "updated": "2026-10-13T19:43:16Z", "testDate": "2026-10-13", "build": "main 8cf6a0bc3", "cpu": "Intel Core Ultra 5 225F", "gpu": "Intel Arc Pro B50 · 16 GB", "driver": "Mesa 26.2.2 ANV", "version": "01.018.000", "patched": false, "media": [], "benchmarks": [], "platform": "linux", "stage": "blocked", "os": "Fedora 44 · kernel 7.2.5 · Xwayland"},summary:L("RAM: 32 GB. Toolchain: GCC 13.3 · Ubuntu 24.04 container · Release. Plain main finishes resident loading without presenting a frame. Default imports hit the OOM killer; APS5_HOST_IMPORT_MIB=20480 avoids that limit but giant ANV compute compilation still stalls. One offline pipeline takes 763 seconds and 13.9 GB peak RSS. Prewarming it only moves the stop to the next pipeline; no menu or gameplay is confirmed.","内存：32 GB。构建工具：GCC 13.3 · Ubuntu 24.04 container · Release。原始 main 完成常驻加载后没有呈现帧。默认导入预算触发 OOM；APS5_HOST_IMPORT_MIB=20480 避免该限制，但 ANV 巨大计算管线编译仍停滞。单个离线管线耗时 763 秒、峰值 RSS 13.9 GB。预热只将阻碍移至下一管线，未确认菜单或游戏过程。","الذاكرة: 32 GB. الأدوات: GCC 13.3 · Ubuntu 24.04 container · Release. ينهي main الأصلي التحميل دون إطار. الميزانية الافتراضية تضرب OOM ؛ رفعها إلى 20480 يتجاوز ذلك لكن تجميع ANV الكبير يتوقف. إعادة تشغيل أنبوب واحد تستغرق 763 ثانية و 13.9 GB RSS. تسخينه ينقل التعطل للأنبوب التالي؛ لا قائمة أو لعب.","RAM: 32 GB. Ferramentas: GCC 13.3 · Ubuntu 24.04 container · Release. Main original termina a carga sem apresentar imagem. Orçamento padrão causa OOM; 20480 evita-o mas compilações ANV enormes bloqueiam. Um pipeline offline leva 763 segundos e 13,9 GB RSS. Pré-aquecer só transfere o bloqueio para o próximo; menu e jogo não confirmados.","RAM: 32 GB. Werkzeuge: GCC 13.3 · Ubuntu 24.04 container · Release. Unverändertes main lädt residente Daten ohne Bild. Standardbudget führt zu OOM; 20480 vermeidet dies, riesige ANV-Compute-Kompilierung bleibt hängen. Eine Offline-Pipeline braucht 763 Sekunden und 13,9 GB RSS. Vorwärmen verlagert den Stopp nur; Menü und Gameplay unbelegt.","RAM : 32 GB. Outils : GCC 13.3 · Ubuntu 24.04 container · Release. Main original termine le chargement sans image. Budget par défaut : OOM ; 20480 évite cela mais ANV bloque sur les grandes compilations compute. Une pipeline hors ligne prend 763 secondes et 13,9 GB RSS. Préchauffage déplace seulement le blocage ; menu et jeu non confirmés.","RAM: 32 GB. Herramientas: GCC 13.3 · Ubuntu 24.04 container · Release. Main original termina la carga sin imagen. Presupuesto predeterminado causa OOM; 20480 lo evita pero ANV se atasca compilando grandes pipelines. Una offline tarda 763 segundos y 13,9 GB RSS. Precalentar solo desplaza el bloqueo; menú y juego sin confirmar.")}]});
export const maintenanceReviewed:Record<string,string>={"dreaming-sarah": "2026-10-14", "hollow-knight-silksong": "2026-10-14", "silt": "2026-10-14", "pac-man-world-re-pac": "2026-10-14", "astros-playroom": "2026-10-14", "gran-turismo-7": "2026-10-14", "wobbly-life": "2026-10-14", "black-myth-wukong": "2026-10-14", "astro-bot": "2026-10-14", "ghost-of-yotei": "2026-10-14", "epic-mickey-rebrushed": "2026-10-14", "killing-floor-3": "2026-10-14"};

maintenanceGames.push({...{"slug": "pragmata", "name": "PRAGMATA", "titleId": "PPSA02530", "edition": "PS5", "reviewed": "2026-10-14"},reports:[{...{"id": "3043-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/3043", "updated": "2026-10-12T23:53:53Z", "testDate": null, "build": "main 262c0316 + local export branches + fixed-image-base experiment", "cpu": null, "gpu": "NVIDIA RTX 4080 SUPER", "driver": null, "version": "01.200.000", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "blocked", "os": "Windows 10 · 19045"},summary:L("Toolchain: WinLibs GCC 15.2.0 r7, Release. With local missing-export additions, allocator initialization rejects a high ASLR image address. A fixed-base experiment gets past allocation but stops at the JSON format API; no menu, picture or FPS. This older Windows 10 experiment does not validate current main, Windows 11 or module placement.","构建工具：WinLibs GCC 15.2.0 r7、Release。本地补齐导出后，分配器初始化拒绝高位 ASLR 映像地址；固定基址实验绕过分配后仍停在 JSON 格式 API，没有菜单、画面或 FPS。这是较早 Windows 10 实验，不验证当前 main、Windows 11 或模块位置。","الأدوات WinLibs GCC 15.2.0 r7، Release. بعد تصديرات محلية يرفض المخصص عنوان ASLR العالي. قاعدة ثابتة تتجاوز الذاكرة ثم تتوقف عند JSON ، بلا قائمة أو صورة أو FPS. تجربة Windows 10 قديمة لا تحقق main الحالي أو Windows 11 أو الوحدات.","Ferramentas: WinLibs GCC 15.2.0 r7, Release. Exports locais chegam à recusa do endereço ASLR alto. Base fixa passa memória mas para no JSON, sem menu/imagem/FPS. Experiência Windows 10 antiga, não valida main atual, Windows 11 ou módulos.","Werkzeuge: WinLibs GCC 15.2.0 r7, Release. Lokale Exports führen zur Ablehnung hoher ASLR-Adresse. Feste Basis passiert Speicher, stoppt bei JSON, kein Menü/Bild/FPS. Alter Windows-10-Versuch, kein aktuelles-main/Windows-11/Modulnachweis.","Outils : WinLibs GCC 15.2.0 r7, Release. Exports locaux puis refus d’adresse ASLR haute. Base fixe dépasse mémoire mais bloque au JSON, sans menu/image/FPS. Ancien essai Windows 10, ne valide pas main actuel, Windows 11 ou modules.","Herramientas: WinLibs GCC 15.2.0 r7, Release. Exports locales llegan al rechazo de dirección ASLR alta. Base fija pasa memoria pero para en JSON, sin menú/imagen/FPS. Ensayo Windows 10 antiguo, no valida main actual, Windows 11 o módulos.")}]});
maintenanceGames.push({...{"slug": "tomba-2", "name": "Tomba! 2 Special Edition", "titleId": "PPSA29866", "edition": "PS5 · Special Edition", "reviewed": "2026-10-14"},reports:[{...{"id": "3646-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/3646", "updated": "2026-10-13T02:08:50Z", "testDate": null, "build": "main a11c8f7f7 + local export branches and workload NOP substitutes", "cpu": null, "gpu": null, "driver": null, "version": null, "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows"},summary:L("A local 60-second title run generates shaders/storage-image activity without a reported error, but the author did not inspect the picture or hear audio. Missing exports are supplied and workload packets replaced by local NOPs with unknown console semantics. Later exports/packet merges have no clean-main title rerun. No menu, gameplay or FPS is confirmed.","本地 60 秒游戏运行产生着色器／storage-image 活动且未报错，但作者没有检查画面或声音。补齐缺失导出并以本地 NOP 代替 workload 包，主机语义未知。后来导出／包处理合入没有原始 main 游戏复测；未确认菜单、游戏过程或 FPS。","تشغيل محلي 60 ثانية ينتج نشاط shaders/storage بلا خطأ، لكن الصورة والصوت لم يفحصا. تصديرات محلية و NOP بدل workload بمعنى جهاز غير معروف. الم erges اللاحقة بلا تشغيل main جديد؛ لا قائمة أو لعب أو FPS مؤكدة.","Execução local 60 segundos gera shaders/storage sem erro, mas imagem/áudio não observados. Exports locais e NOP substituem workload, sem semântica consola medida. Merges posteriores sem reteste main; menu/jogo/FPS não confirmados.","Lokaler 60-Sekunden-Lauf erzeugt Shader/Storage-Aktivität ohne Fehler, Bild/Ton ungeprüft. Lokale Exports und NOP ersetzen Workloads ohne gemessene Konsolensemantik. Spätere Merges ohne main-Titeltest; Menü/Gameplay/FPS unbelegt.","Essai local 60 secondes produit activité shaders/storage sans erreur, mais image/son non examinés. Exports locaux et NOP remplacent workload sans sémantique console mesurée. Merges ultérieurs sans retest main ; menu/jeu/FPS non confirmés.","Ensayo local 60 segundos genera shaders/storage sin error, pero imagen/audio no examinados. Exports locales y NOP sustituyen workload sin semántica consola medida. Merges posteriores sin retest main; menú/juego/FPS sin confirmar.")}]});
maintenanceReports["demons-souls-ppsa01342"]=[...(maintenanceReports["demons-souls-ppsa01342"]||[]),{...{"id": "3710-windows-review-20261014", "evidence": "community", "source": "https://github.com/boykopovar/AnyPS5/issues/3710", "updated": "2026-10-13T02:09:06Z", "testDate": null, "build": "main f1ae427b + #1482/#846 + local Acm-unavailable switch · SPIRV-Tools ON", "cpu": null, "gpu": "AMD Radeon RX 9070 XT", "driver": null, "version": "v1.005 · source notation", "patched": true, "media": [], "benchmarks": [], "platform": "windows", "stage": "boot", "os": "Windows 11"},summary:L("Toolchain: WinLibs GCC 15.2.0. Historical Radeon v1.005 experiment suppresses an early audio-graph crash by reporting Acm unavailable, then stays black with no flip. A later request to rerun after module registration merged has no answer. Keep it separate from v1.004/NVIDIA menus; the local fallback is not a verified production fix.","构建工具：WinLibs GCC 15.2.0。历史 Radeon v1.005 实验通过报告 Acm 不可用抑制早期音频图崩溃，之后仍黑屏且无 flip。模块注册后来合入，要求复测的评论尚无结果。与 v1.004／NVIDIA 菜单分别保留，本地回退不是已验证正式修复。","الأدوات WinLibs GCC 15.2.0. تجربة Radeon v1.005 التاريخية تخفي تعطل الصوت بإعلان Acm غائباً، ثم شاشة سوداء بلا flip. لا جواب لاختبار بعد دمج التسجيل. منفصلة عن قائمة v1.004/NVIDIA ؛ ليست إصلاحاً مثبتاً.","Ferramentas: WinLibs GCC 15.2.0. Experiência histórica Radeon v1.005 evita falha áudio declarando Acm ausente, depois negra sem flip. Sem reteste após registo integrado. Separada dos menus v1.004/NVIDIA; fallback não é fix validado.","Werkzeuge: WinLibs GCC 15.2.0. Historischer Radeon-v1.005-Versuch verhindert Audiocrash mit Acm-Abwesenheit, dann schwarz ohne Flip. Retest nach Registrierungsmerge fehlt. Getrennt von v1.004/NVIDIA-Menüs; kein bestätigter Produktionsfix.","Outils : WinLibs GCC 15.2.0. Ancien essai Radeon v1.005 évite plantage audio en déclarant Acm absent, puis noir sans flip. Retest après enregistrement intégré absent. Distinct des menus v1.004/NVIDIA ; contournement non validé.","Herramientas: WinLibs GCC 15.2.0. Ensayo histórico Radeon v1.005 evita fallo audio declarando Acm ausente, luego negro sin flip. Sin retest tras registro integrado. Separado de menús v1.004/NVIDIA; no arreglo validado.")}];
maintenanceReviewed["demons-souls-ppsa01342"]="2026-10-14";

// Reviewed source updates preserve earlier build-specific observations.
const nightlyReports15:Record<string,Report[]>={
 "ea-sports-ufc-6": [
  {
   "id": "5996-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5996",
   "updated": "2026-10-14T18:38:42Z",
   "testDate": "2026-10-14",
   "build": "0xcrstn/ufc6/testing c222bd2c2ec3d1d9df4f98bda4ee625fd1d9ba62 · base 84b01f9cd + local correctness/performance stack",
   "os": "Windows 11 Pro",
   "cpu": "Intel Core i9-13900K",
   "gpu": "NVIDIA RTX 5090",
   "driver": "32.0.16.1742",
   "version": "01.004.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. Interactive octagon combat has audio and input. The final 61.330-second sample presents 127 frames, about 2.07 FPS, with verification/profiling enabled. Thirteen frame waits fail; a complete match and other modes are untested. The sped-up 60 FPS video is an edit, not game speed.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：64 GB. 八角笼战斗有操作和声音，启用验证／分析时，最后 61.330 秒呈现 127 帧，约 2.07 FPS。13 次等待失败，未验证完整比赛及其他模式。60 FPS 加速视频是剪辑，不是实际游戏速度。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 64 GB. قتال الحلبة يستجيب مع صوت. العينة الأخيرة 127 إطاراً خلال 61.330 ثانية، نحو 2.07 FPS مع التحقق والتشخيص. فشلت 13 مهلة؛ مباراة كاملة وأوضاع أخرى غير مختبرة. فيديو 60 FPS المسرّع مونتاج وليس سرعة اللعبة.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. O combate responde com som. A amostra final apresenta 127 imagens em 61,330 s, cerca de 2,07 FPS com verificação e diagnóstico. Há 13 falhas de espera; partidas completas e outros modos não foram testados. O vídeo acelerado a 60 FPS é montagem.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. Kampf und Ton funktionieren. Die letzte Probe zeigt 127 Präsentationen in 61,330 s, etwa 2,07 FPS mit Prüfung/Profiling. 13 Frame-Wartevorgänge scheitern; vollständige Kämpfe und andere Modi fehlen. Das beschleunigte 60-FPS-Video ist ein Schnitt.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 64 GB. Le combat répond avec du son. La dernière mesure compte 127 images en 61,330 s, environ 2,07 FPS avec vérification/profilage. Treize attentes échouent ; aucun match complet ni autre mode validé. La vidéo accélérée à 60 FPS est un montage.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. El combate responde con sonido. La muestra final presenta 127 imágenes en 61,330 s, unos 2,07 FPS con verificación/perfilado. Fallan 13 esperas; no hay partido completo ni otros modos validados. El vídeo acelerado a 60 FPS es una edición."
   },
   "benchmarks": [
    {
     "cpu": "Intel Core i9-13900K",
     "gpu": "NVIDIA RTX 5090",
     "fps": "≈2.07",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. Interactive octagon combat has audio and input. The final 61.330-second sample presents 127 frames, about 2.07 FPS, with verification/profiling enabled. Thirteen frame waits fail; a complete match and other modes are untested. The sped-up 60 FPS video is an edit, not game speed.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：64 GB. 八角笼战斗有操作和声音，启用验证／分析时，最后 61.330 秒呈现 127 帧，约 2.07 FPS。13 次等待失败，未验证完整比赛及其他模式。60 FPS 加速视频是剪辑，不是实际游戏速度。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 64 GB. قتال الحلبة يستجيب مع صوت. العينة الأخيرة 127 إطاراً خلال 61.330 ثانية، نحو 2.07 FPS مع التحقق والتشخيص. فشلت 13 مهلة؛ مباراة كاملة وأوضاع أخرى غير مختبرة. فيديو 60 FPS المسرّع مونتاج وليس سرعة اللعبة.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. O combate responde com som. A amostra final apresenta 127 imagens em 61,330 s, cerca de 2,07 FPS com verificação e diagnóstico. Há 13 falhas de espera; partidas completas e outros modos não foram testados. O vídeo acelerado a 60 FPS é montagem.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. Kampf und Ton funktionieren. Die letzte Probe zeigt 127 Präsentationen in 61,330 s, etwa 2,07 FPS mit Prüfung/Profiling. 13 Frame-Wartevorgänge scheitern; vollständige Kämpfe und andere Modi fehlen. Das beschleunigte 60-FPS-Video ist ein Schnitt.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 64 GB. Le combat répond avec du son. La dernière mesure compte 127 images en 61,330 s, environ 2,07 FPS avec vérification/profilage. Treize attentes échouent ; aucun match complet ni autre mode validé. La vidéo accélérée à 60 FPS est un montage.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 64 GB. El combate responde con sonido. La muestra final presenta 127 imágenes en 61,330 s, unos 2,07 FPS con verificación/perfilado. Fallan 13 esperas; no hay partido completo ni otros modos validados. El vídeo acelerado a 60 FPS es una edición."
     }
    }
   ],
   "media": [
    "https://github.com/user-attachments/assets/f207a411-d2c1-4835-b29e-d48c41a2c883",
    "https://github.com/user-attachments/assets/86c8889a-4fc0-49b3-ad9a-ddc1da29171a"
   ]
  }
 ],
 "syobon-action-homebrew": [
  {
   "id": "5932-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5932",
   "updated": "2026-10-14T18:20:10Z",
   "testDate": null,
   "build": "main e34c4792",
   "os": "Windows 11 Pro · 26200",
   "cpu": null,
   "gpu": "NVIDIA RTX 3060 Ti",
   "driver": "617.14",
   "version": "01.001.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. Enter advances from the title to the lives screen, with a counter around 30 FPS. No playable level is verified. Closing the window aborts in four baseline runs; the separately tested #5843 changes shutdown, not the established gameplay scope.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. Enter 从标题进入生命数画面，计数约 30 FPS，尚未验证可操作关卡。四次基线关闭窗口均终止异常；单独测试的 #5843 改变退出行为，不扩展游戏过程证据。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. ينقل Enter العنوان إلى شاشة الأرواح، والعداد نحو 30 FPS. لا مستوى لعب موثق. أغلق الأساس أربع مرات بتعطل؛ يغير #5843 المختبر منفصلاً الخروج، لا نطاق اللعب المثبت.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Enter avança do título para as vidas, com contador perto de 30 FPS. Nenhum nível jogável foi verificado. Quatro fechos abortam na base; #5843 foi testada à parte e altera a saída, não o alcance do jogo.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Enter führt vom Titel zur Lebensanzeige, Zähler etwa 30 FPS. Kein spielbarer Level bestätigt. Vier Basisschließungen brechen ab; das getrennt getestete #5843 ändert den Ausstieg, nicht den Gameplaynachweis.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Enter passe du titre aux vies, compteur vers 30 FPS. Aucun niveau jouable vérifié. Quatre fermetures de base plantent ; #5843, testé séparément, change la sortie sans étendre la preuve de jeu.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. Enter pasa del título a las vidas, contador cerca de 30 FPS. Ningún nivel jugable verificado. Cuatro cierres básicos abortan; #5843, probada aparte, cambia la salida sin ampliar la prueba de juego."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 3060 Ti",
     "fps": "≈30",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. Enter advances from the title to the lives screen, with a counter around 30 FPS. No playable level is verified. Closing the window aborts in four baseline runs; the separately tested #5843 changes shutdown, not the established gameplay scope.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. Enter 从标题进入生命数画面，计数约 30 FPS，尚未验证可操作关卡。四次基线关闭窗口均终止异常；单独测试的 #5843 改变退出行为，不扩展游戏过程证据。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. ينقل Enter العنوان إلى شاشة الأرواح، والعداد نحو 30 FPS. لا مستوى لعب موثق. أغلق الأساس أربع مرات بتعطل؛ يغير #5843 المختبر منفصلاً الخروج، لا نطاق اللعب المثبت.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Enter avança do título para as vidas, com contador perto de 30 FPS. Nenhum nível jogável foi verificado. Quatro fechos abortam na base; #5843 foi testada à parte e altera a saída, não o alcance do jogo.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Enter führt vom Titel zur Lebensanzeige, Zähler etwa 30 FPS. Kein spielbarer Level bestätigt. Vier Basisschließungen brechen ab; das getrennt getestete #5843 ändert den Ausstieg, nicht den Gameplaynachweis.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Enter passe du titre aux vies, compteur vers 30 FPS. Aucun niveau jouable vérifié. Quatre fermetures de base plantent ; #5843, testé séparément, change la sortie sans étendre la preuve de jeu.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. Enter pasa del título a las vidas, contador cerca de 30 FPS. Ningún nivel jugable verificado. Cuatro cierres básicos abortan; #5843, probada aparte, cambia la salida sin ampliar la prueba de juego."
     }
    }
   ],
   "media": []
  }
 ],
 "dave-the-diver": [
  {
   "id": "5963-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5963",
   "updated": "2026-10-14T17:14:39Z",
   "testDate": null,
   "build": "main 956269ad1 + #4820/#5496/#5445/#5892/#5558 + local MSAA proof/identity bypasses",
   "os": "Windows 11 Pro · 26200",
   "cpu": "AMD Ryzen 7 5800X",
   "gpu": "NVIDIA RTX 5060",
   "driver": "596.36",
   "version": "01.041.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. Local MSAA approximations reach gameplay around 20 FPS, with audio, keyboard input and return to the boat checked. The cold-cache intro reaches 60 FPS separately. These include skipped initial-state proofs and format fallbacks; they are experimental workarounds, not verified main fixes or completion.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 本地 MSAA 近似处理后，游戏过程约 20 FPS，核对了声音、键盘及回到船上。冷缓存开场 60 FPS 单独记录。涉及跳过初态证明与格式回退，属于实验绕行，不是已验证 main 修复或通关。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. تبلغ تعديلات MSAA المحلية اللعب بنحو 20 FPS مع صوت ولوحة مفاتيح والعودة للقارب. مقدمة الذاكرة الباردة 60 FPS منفصلة. تخطي إثبات الحالة وتبديل الصيغ حلول تجريبية، لا إصلاح main موثق أو إكمال.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Aproximações MSAA locais chegam a cerca de 20 FPS, com som, teclado e regresso ao barco verificados. A introdução com cache fria chega a 60 FPS separadamente. Há provas iniciais ignoradas e alternativas de formato: experiências, não correções main nem conclusão.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Lokale MSAA-Näherungen erreichen etwa 20 FPS mit Ton, Tastatur und Rückkehr zum Boot. Das Intro mit kaltem Cache zeigt separat 60 FPS. Anfangszustandsprüfungen werden ausgelassen und Formate ersetzt: Experimente, keine bestätigten main-Fixes oder Abschlussprüfung.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Les approximations MSAA locales atteignent environ 20 FPS, avec son, clavier et retour au bateau vérifiés. L’introduction à cache froid donne 60 FPS séparément. Des preuves initiales sont ignorées et des formats remplacés : contournements expérimentaux, pas correctifs main ni fin validés.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. Las aproximaciones MSAA locales alcanzan unos 20 FPS con sonido, teclado y regreso al barco comprobados. La introducción con caché fría llega a 60 FPS aparte. Se omiten pruebas de estado inicial y cambian formatos: soluciones experimentales, no arreglos main ni finalización."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 5800X",
     "gpu": "NVIDIA RTX 5060",
     "fps": "≈20",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. Local MSAA approximations reach gameplay around 20 FPS, with audio, keyboard input and return to the boat checked. The cold-cache intro reaches 60 FPS separately. These include skipped initial-state proofs and format fallbacks; they are experimental workarounds, not verified main fixes or completion.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 本地 MSAA 近似处理后，游戏过程约 20 FPS，核对了声音、键盘及回到船上。冷缓存开场 60 FPS 单独记录。涉及跳过初态证明与格式回退，属于实验绕行，不是已验证 main 修复或通关。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. تبلغ تعديلات MSAA المحلية اللعب بنحو 20 FPS مع صوت ولوحة مفاتيح والعودة للقارب. مقدمة الذاكرة الباردة 60 FPS منفصلة. تخطي إثبات الحالة وتبديل الصيغ حلول تجريبية، لا إصلاح main موثق أو إكمال.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. Aproximações MSAA locais chegam a cerca de 20 FPS, com som, teclado e regresso ao barco verificados. A introdução com cache fria chega a 60 FPS separadamente. Há provas iniciais ignoradas e alternativas de formato: experiências, não correções main nem conclusão.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Lokale MSAA-Näherungen erreichen etwa 20 FPS mit Ton, Tastatur und Rückkehr zum Boot. Das Intro mit kaltem Cache zeigt separat 60 FPS. Anfangszustandsprüfungen werden ausgelassen und Formate ersetzt: Experimente, keine bestätigten main-Fixes oder Abschlussprüfung.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Les approximations MSAA locales atteignent environ 20 FPS, avec son, clavier et retour au bateau vérifiés. L’introduction à cache froid donne 60 FPS séparément. Des preuves initiales sont ignorées et des formats remplacés : contournements expérimentaux, pas correctifs main ni fin validés.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. Las aproximaciones MSAA locales alcanzan unos 20 FPS con sonido, teclado y regreso al barco comprobados. La introducción con caché fría llega a 60 FPS aparte. Se omiten pruebas de estado inicial y cambian formatos: soluciones experimentales, no arreglos main ni finalización."
     }
    }
   ],
   "media": []
  },
  {
   "id": "5963-windows-baseline-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5963",
   "updated": "2026-10-14T17:14:39Z",
   "testDate": null,
   "build": "main 956269ad1",
   "os": "Windows 11 Pro · 26200",
   "cpu": "AMD Ryzen 7 5800X",
   "gpu": "NVIDIA RTX 5060",
   "driver": "596.36",
   "version": "01.041.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The unmodified baseline stops at its first frames because a multisampled image has no descriptor shape. Later local integrations must not be attributed to this main build.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 原始基线在首帧附近因多重采样图像缺少描述形状停止，不能把后来的本地整合结果套用于此 main 构建。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. يتوقف الأساس قرب أول إطار لغياب شكل وصف صورة متعددة العينات. نتائج الدمج المحلي اللاحقة لا تخص هذا main.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. A base original para nos primeiros fotogramas por falta de forma do descritor MSAA. Integrações locais posteriores não pertencem a este main.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Die unveränderte Basis stoppt an ersten Frames wegen fehlender MSAA-Deskriptorform. Spätere lokale Ergebnisse gehören nicht diesem main-Build.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La base originale s’arrête aux premières images faute de forme de descripteur MSAA. Les résultats locaux ultérieurs ne concernent pas ce main.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. La base original para en los primeros fotogramas por faltar una forma de descriptor MSAA. Las integraciones locales posteriores no pertenecen a este main."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "5963-linux-review-20261015",
   "platform": "linux",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5963",
   "updated": "2026-10-14T17:14:39Z",
   "testDate": null,
   "build": "main 956269ad1 + recorded local MSAA/audio stack",
   "os": "Arch Linux",
   "cpu": null,
   "gpu": "Intel Alder Lake-P integrated GPU",
   "driver": "Mesa ANV 26.2.4",
   "version": "01.041.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC. The separate Linux check reports an allocator crash after a scene load and a module-finalizer fault at exit. It does not provide a verified Linux gameplay image or FPS; Windows performance cannot be reused for the iGPU.",
    "zh": "构建工具：GCC. 独立 Linux 检查在场景加载后发生分配器崩溃，退出时又有模块终结函数故障。没有已验证 Linux 游戏画面或 FPS，不能套用 Windows 的帧数。",
    "ar": "الأدوات: GCC. اختبار Linux المنفصل يسجل تعطل المخصص بعد تحميل مشهد وعطل الوحدة عند الخروج. لا صورة لعب Linux أو FPS موثقة؛ لا تنقل أرقام Windows إلى البطاقة المدمجة.",
    "pt": "Ferramentas: GCC. A verificação Linux relata falha do alocador após carregar uma cena e do finalizador ao sair. Não fornece imagem de jogo ou FPS Linux verificados; os valores Windows não se aplicam à GPU integrada.",
    "de": "Werkzeuge: GCC. Der Linux-Check meldet einen Allokatorcrash nach Szenenladen und einen Modulabschlussfehler. Verifiziertes Linux-Gameplay/FPS fehlen; Windows-Werte gelten nicht für die iGPU.",
    "fr": "Outils : GCC. Le test Linux distinct rapporte un crash d’allocateur après chargement et du finaliseur à la sortie. Aucune image de jeu ni FPS Linux vérifiés ; les chiffres Windows ne valent pas pour l’iGPU.",
    "es": "Herramientas: GCC. La prueba Linux separada falla en el asignador tras cargar una escena y en el finalizador al salir. No hay imagen de juego ni FPS Linux verificados; las cifras Windows no se aplican a la iGPU."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "marvels-wolverine": [
  {
   "id": "5516-linux-review-20261015",
   "platform": "linux",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5516#discussioncomment-18929601",
   "updated": "2026-10-14T16:40:52Z",
   "testDate": null,
   "build": "main e34c47921 + local drop-on-failure patch",
   "os": "Ubuntu 26.10",
   "cpu": null,
   "gpu": "NVIDIA RTX 3080 Ti · 12 GB",
   "driver": "615.71.09",
   "version": "01.001.005",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 15.3.0. Earlier local builds show a partial 3D scene. This later build fixes several shader refusals but exhausts device memory around 175 seconds; its counter is 0.1–0.17 FPS. Dropping failed work does not prove correct rendering, control or that a larger GPU would solve the allocation failure.",
    "zh": "构建工具：GCC 15.3.0. 较早本地构建显示不完整 3D 场景；此后构建消除多项着色器拒绝，却约 175 秒耗尽设备内存，计数仅 0.1–0.17 FPS。跳过失败工作不能证明画面正确、可操作，也不能证明换更大显存就能解决。",
    "ar": "الأدوات: GCC 15.3.0. تعرض أبنية محلية أقدم مشهداً ثلاثي الأبعاد جزئياً. يصلح هذا البناء رفض مظللات لكنه ينفد من ذاكرة الجهاز قرب 175 ثانية؛ العداد 0.1–0.17 FPS. إسقاط العمل الفاشل لا يثبت الرسم أو التحكم أو حل المشكلة ببطاقة أكبر.",
    "pt": "Ferramentas: GCC 15.3.0. Builds locais anteriores mostram uma cena 3D parcial. Este elimina recusas de shaders mas esgota a memória da GPU perto de 175 s; contador 0,1–0,17 FPS. Ignorar trabalho falhado não prova imagem correta, controlo ou solução com mais VRAM.",
    "de": "Werkzeuge: GCC 15.3.0. Frühere lokale Builds zeigen eine unvollständige 3D-Szene. Dieser behebt Shaderablehnungen, erschöpft aber nach etwa 175 s Gerätespeicher; Zähler 0,1–0,17 FPS. Übersprungene Arbeit beweist weder korrektes Bild noch Steuerung oder eine Lösung durch mehr VRAM.",
    "fr": "Outils : GCC 15.3.0. Des builds locaux antérieurs montrent une scène 3D partielle. Celui-ci supprime des refus de shaders mais épuise la mémoire GPU vers 175 s ; compteur 0,1–0,17 FPS. Ignorer le travail défaillant ne prouve ni rendu correct, ni contrôle, ni solution par davantage de VRAM.",
    "es": "Herramientas: GCC 15.3.0. Builds locales anteriores muestran una escena 3D parcial. Este elimina rechazos de shaders pero agota la memoria GPU cerca de 175 s; contador 0,1–0,17 FPS. Omitir trabajo fallido no prueba imagen correcta, control ni solución con más VRAM."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "5516-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5516#discussioncomment-18911784",
   "updated": "2026-10-14T00:09:02Z",
   "testDate": null,
   "build": "main d1670009f + local Pad/WebApi stubs + drop-failed work + large SPIR-V validation bypass",
   "os": "Windows 11 · 26200",
   "cpu": null,
   "gpu": "NVIDIA RTX 5070 Ti",
   "driver": "616.64",
   "version": "01.001.005",
   "patched": true,
   "summary": {
    "en": "The opening presentation card and render loop appear at a reported 2–3.5 FPS in two four-minute runs. Local stubs, skipped draws/dispatches and validation changes remain required. No menu, controllable scene or full rendering result is established.",
    "zh": "两次四分钟运行出现开场标题卡和渲染循环，据报 2–3.5 FPS，仍需本地 stub、跳过绘制／调度及验证改动；没有菜单、可操作场景或完整画面结论。",
    "ar": "تظهر بطاقة الافتتاح وحلقة الرسم بنحو 2–3.5 FPS في تجربتين لأربع دقائق. ما زالت بدائل محلية وتجاوزات الرسم والتحقق لازمة. لا قائمة أو مشهد متحكم به أو رسم كامل موثق.",
    "pt": "O cartão inicial e o ciclo de imagem aparecem a 2–3,5 FPS em duas execuções de quatro minutos. Requer stubs locais, trabalho ignorado e mudanças de validação. Sem menu, cena controlável ou imagem completa demonstrados.",
    "de": "Startkarte und Renderloop erscheinen mit gemeldeten 2–3,5 FPS in zwei Vier-Minuten-Läufen. Lokale Stubs, ausgelassene Draws/Dispatches und Prüfänderungen bleiben nötig. Menü, steuerbare Szene oder vollständiges Rendering sind nicht belegt.",
    "fr": "La carte d’ouverture et la boucle de rendu apparaissent à 2–3,5 FPS dans deux essais de quatre minutes. Stubs locaux, travail ignoré et validations modifiées restent nécessaires. Aucune preuve de menu, scène contrôlable ou rendu complet.",
    "es": "La tarjeta inicial y el bucle de render aparecen a 2–3,5 FPS en dos pruebas de cuatro minutos. Requiere stubs locales, trabajo omitido y cambios de validación. No prueba menú, escena controlable ni imagen completa."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "resident-evil-2-remake": [
  {
   "id": "5935-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5935",
   "updated": "2026-10-14T16:21:50Z",
   "testDate": null,
   "build": "main 0214069e3 + recorded PR stack + local per-lane planning/MSAA and memory approximations",
   "os": "Windows 11 Pro · 26200",
   "cpu": "AMD Ryzen 5 5600X",
   "gpu": "AMD Radeon RX 9070 XT",
   "driver": "Adrenalin 26.9.1",
   "version": "01.000.003",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Setup, campaign selection and the rainy menu background render around 3.8 FPS after several minutes. Ray tracing is off; New Game was not attempted. Local mixed-sample and memory changes remain, with a 20 GB process cap. Menu success does not establish gameplay or safe whole-machine memory limits.",
    "zh": "构建工具：WinLibs GCC 15.2.0 · Release. 内存：32 GB · page file 19 GB. 数分钟后，设置、战役选择及雨景菜单约 3.8 FPS；关闭光追，未尝试新游戏。仍有本地混合采样与内存改动，进程限制 20 GB。菜单成功不能证明游戏过程或安全的整机内存门槛。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 · Release. الذاكرة: 32 GB · page file 19 GB. تظهر الإعدادات واختيار الحملة وخلفية المطر بنحو 3.8 FPS بعد دقائق. تتبع الأشعة مغلق ولم تُجرّب لعبة جديدة. توجد تغييرات عينات وذاكرة محلية وحد 20 GB للعملية. القائمة لا تثبت اللعب أو حدود ذاكرة آمنة للجهاز.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Definições, campanha e fundo chuvoso chegam a cerca de 3,8 FPS após vários minutos. Ray tracing desligado; Novo Jogo não foi tentado. Mantém aproximações locais e limite de processo de 20 GB. O menu não prova jogo nem requisitos de memória seguros.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Einrichtung, Kampagnenwahl und Regenhintergrund zeigen nach Minuten etwa 3,8 FPS. Raytracing aus; Neues Spiel ungetestet. Lokale Sample-/Speicheränderungen und 20-GB-Prozesslimit bleiben. Menüerfolg beweist weder Gameplay noch sichere Systemspeichergrenzen.",
    "fr": "Outils : WinLibs GCC 15.2.0 · Release. Mémoire : 32 GB · page file 19 GB. Réglages, sélection de campagne et fond pluvieux donnent environ 3,8 FPS après plusieurs minutes. Ray tracing désactivé ; Nouvelle partie non essayée. Approximations locales et limite processus de 20 GB restent présentes. Le menu ne prouve ni jeu ni seuil mémoire système sûr.",
    "es": "Herramientas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Ajustes, selección de campaña y fondo lluvioso muestran unos 3,8 FPS tras varios minutos. Ray tracing desactivado; Nueva partida no probada. Siguen aproximaciones locales y límite de proceso de 20 GB. El menú no prueba juego ni umbrales seguros de memoria."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 5 5600X",
     "gpu": "AMD Radeon RX 9070 XT",
     "fps": "≈3.8",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Setup, campaign selection and the rainy menu background render around 3.8 FPS after several minutes. Ray tracing is off; New Game was not attempted. Local mixed-sample and memory changes remain, with a 20 GB process cap. Menu success does not establish gameplay or safe whole-machine memory limits.",
      "zh": "构建工具：WinLibs GCC 15.2.0 · Release. 内存：32 GB · page file 19 GB. 数分钟后，设置、战役选择及雨景菜单约 3.8 FPS；关闭光追，未尝试新游戏。仍有本地混合采样与内存改动，进程限制 20 GB。菜单成功不能证明游戏过程或安全的整机内存门槛。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 · Release. الذاكرة: 32 GB · page file 19 GB. تظهر الإعدادات واختيار الحملة وخلفية المطر بنحو 3.8 FPS بعد دقائق. تتبع الأشعة مغلق ولم تُجرّب لعبة جديدة. توجد تغييرات عينات وذاكرة محلية وحد 20 GB للعملية. القائمة لا تثبت اللعب أو حدود ذاكرة آمنة للجهاز.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Definições, campanha e fundo chuvoso chegam a cerca de 3,8 FPS após vários minutos. Ray tracing desligado; Novo Jogo não foi tentado. Mantém aproximações locais e limite de processo de 20 GB. O menu não prova jogo nem requisitos de memória seguros.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Einrichtung, Kampagnenwahl und Regenhintergrund zeigen nach Minuten etwa 3,8 FPS. Raytracing aus; Neues Spiel ungetestet. Lokale Sample-/Speicheränderungen und 20-GB-Prozesslimit bleiben. Menüerfolg beweist weder Gameplay noch sichere Systemspeichergrenzen.",
      "fr": "Outils : WinLibs GCC 15.2.0 · Release. Mémoire : 32 GB · page file 19 GB. Réglages, sélection de campagne et fond pluvieux donnent environ 3,8 FPS après plusieurs minutes. Ray tracing désactivé ; Nouvelle partie non essayée. Approximations locales et limite processus de 20 GB restent présentes. Le menu ne prouve ni jeu ni seuil mémoire système sûr.",
      "es": "Herramientas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB · page file 19 GB. Ajustes, selección de campaña y fondo lluvioso muestran unos 3,8 FPS tras varios minutos. Ray tracing desactivado; Nueva partida no probada. Siguen aproximaciones locales y límite de proceso de 20 GB. El menú no prueba juego ni umbrales seguros de memoria."
     }
    }
   ],
   "media": [
    "https://github.com/user-attachments/assets/bac75bfc-0852-467f-8b6f-833b0f3a455a"
   ]
  }
 ],
 "doom-doom-ii": [
  {
   "id": "5921-windows-baseline-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5921",
   "updated": "2026-10-14T15:55:40Z",
   "testDate": null,
   "build": "main 84b01f9cd",
   "os": "Windows 11 Home · 26200",
   "cpu": "AMD Ryzen 9 9950X3D",
   "gpu": "NVIDIA RTX 5090",
   "driver": "616.92",
   "version": "03.000.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The unmodified build aborts during NGS2 audio setup, before any frame, on an out-of-range rack voice. #5916’s later demo result belongs to a different runtime.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 原始构建在首帧前的 NGS2 音频设置阶段，因 rack voice 越界终止；#5916 后的演示属于另一运行环境。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. ينهي البناء الأصلي إعداد صوت NGS2 قبل أي إطار بسبب رقم صوت خارج rack. نتيجة العرض مع #5916 تخص مكتبات أخرى.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. O build original aborta antes da imagem no áudio NGS2 por uma voz fora do rack. A demonstração com #5916 pertence a outro runtime.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Der Originalbuild bricht vor jedem Bild beim NGS2-Audio mit ungültiger Rack-Stimme ab. Das spätere #5916-Demo gehört einer anderen Laufzeit.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La base interrompt l’audio NGS2 avant toute image pour une voix hors rack. La démonstration avec #5916 appartient à une autre bibliothèque.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. El build original aborta antes de cualquier imagen en audio NGS2 por una voz fuera del rack. La demostración con #5916 pertenece a otro runtime."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "5921-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5921",
   "updated": "2026-10-14T15:55:40Z",
   "testDate": null,
   "build": "main 84b01f9cd + #5916",
   "os": "Windows 11 Home · 26200",
   "cpu": "AMD Ryzen 9 9950X3D",
   "gpu": "NVIDIA RTX 5090",
   "driver": "616.92",
   "version": "03.000.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The automatic attract demo and menu render at a 120 FPS window counter. No user input or audible output was checked. This is rendered demo progression, not verified interactive play or completion. The observed scene is Master Levels, Level 1: Attack.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 自动演示与菜单的窗口计数为 120 FPS；未检查用户操作或实际声音。这是自动演示画面进展，不是已验证交互游戏或通关。 观察场景为 Master Levels 的第一关 Attack。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. يُعرض المشهد التجريبي التلقائي والقائمة بعداد 120 FPS. لم يُختبر إدخال أو صوت مسموع. تقدم العرض ليس لعباً تفاعلياً أو إكمالاً موثقاً. المشهد Master Levels، المستوى 1: Attack.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. A demonstração automática e o menu mostram 120 FPS no contador. Não foram verificados comandos nem som audível. É progresso da demonstração, não jogo interativo ou conclusão validados. Cena Master Levels, nível 1: Attack.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Automatische Demo und Menü zeigen einen 120-FPS-Fensterzähler. Eingabe und hörbarer Ton wurden nicht geprüft. Das ist Demofortschritt, kein bestätigtes interaktives Spielen oder Abschluss. Beobachtete Szene: Master Levels, Level 1: Attack.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La démo automatique et le menu affichent un compteur à 120 FPS. Entrée et son audible non vérifiés. Il s’agit d’une démo rendue, pas de jeu interactif ou de fin validés. Scène observée : Master Levels, niveau 1: Attack.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. La demo automática y el menú muestran un contador de 120 FPS. No se comprobaron controles ni sonido audible. Es una demostración renderizada, no juego interactivo ni finalización verificados. Escena observada: Master Levels, nivel 1: Attack."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 9 9950X3D",
     "gpu": "NVIDIA RTX 5090",
     "fps": "120",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The automatic attract demo and menu render at a 120 FPS window counter. No user input or audible output was checked. This is rendered demo progression, not verified interactive play or completion. The observed scene is Master Levels, Level 1: Attack.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 自动演示与菜单的窗口计数为 120 FPS；未检查用户操作或实际声音。这是自动演示画面进展，不是已验证交互游戏或通关。 观察场景为 Master Levels 的第一关 Attack。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. يُعرض المشهد التجريبي التلقائي والقائمة بعداد 120 FPS. لم يُختبر إدخال أو صوت مسموع. تقدم العرض ليس لعباً تفاعلياً أو إكمالاً موثقاً. المشهد Master Levels، المستوى 1: Attack.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. A demonstração automática e o menu mostram 120 FPS no contador. Não foram verificados comandos nem som audível. É progresso da demonstração, não jogo interativo ou conclusão validados. Cena Master Levels, nível 1: Attack.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Automatische Demo und Menü zeigen einen 120-FPS-Fensterzähler. Eingabe und hörbarer Ton wurden nicht geprüft. Das ist Demofortschritt, kein bestätigtes interaktives Spielen oder Abschluss. Beobachtete Szene: Master Levels, Level 1: Attack.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La démo automatique et le menu affichent un compteur à 120 FPS. Entrée et son audible non vérifiés. Il s’agit d’une démo rendue, pas de jeu interactif ou de fin validés. Scène observée : Master Levels, niveau 1: Attack.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. La demo automática y el menú muestran un contador de 120 FPS. No se comprobaron controles ni sonido audible. Es una demostración renderizada, no juego interactivo ni finalización verificados. Escena observada: Master Levels, nivel 1: Attack."
     }
    }
   ],
   "media": []
  }
 ],
 "heretic-hexen": [
  {
   "id": "5912-windows-baseline-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5912",
   "updated": "2026-10-14T15:33:55Z",
   "testDate": null,
   "build": "main 69e7138ac",
   "os": "Windows 11 Home · 26200",
   "cpu": "AMD Ryzen 9 9950X3D",
   "gpu": "NVIDIA RTX 5090",
   "driver": "616.92",
   "version": "01.003.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The unmodified build aborts during NGS2 audio setup, before any frame, on an out-of-range rack voice. #5916’s later demo result belongs to a different runtime.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 原始构建在首帧前的 NGS2 音频设置阶段，因 rack voice 越界终止；#5916 后的演示属于另一运行环境。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. ينهي البناء الأصلي إعداد صوت NGS2 قبل أي إطار بسبب رقم صوت خارج rack. نتيجة العرض مع #5916 تخص مكتبات أخرى.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. O build original aborta antes da imagem no áudio NGS2 por uma voz fora do rack. A demonstração com #5916 pertence a outro runtime.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Der Originalbuild bricht vor jedem Bild beim NGS2-Audio mit ungültiger Rack-Stimme ab. Das spätere #5916-Demo gehört einer anderen Laufzeit.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La base interrompt l’audio NGS2 avant toute image pour une voix hors rack. La démonstration avec #5916 appartient à une autre bibliothèque.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. El build original aborta antes de cualquier imagen en audio NGS2 por una voz fuera del rack. La demostración con #5916 pertenece a otro runtime."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "5912-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5912",
   "updated": "2026-10-14T15:33:55Z",
   "testDate": null,
   "build": "main 84b01f9cd + #5916",
   "os": "Windows 11 Home · 26200",
   "cpu": "AMD Ryzen 9 9950X3D",
   "gpu": "NVIDIA RTX 5090",
   "driver": "616.92",
   "version": "01.003.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The automatic attract demo and menu render at a 120 FPS window counter. No user input or audible output was checked. This is rendered demo progression, not verified interactive play or completion. Heretic attract demo only; Hexen was not started.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 自动演示与菜单的窗口计数为 120 FPS；未检查用户操作或实际声音。这是自动演示画面进展，不是已验证交互游戏或通关。 仅 Heretic 自动演示，未启动 Hexen。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. يُعرض المشهد التجريبي التلقائي والقائمة بعداد 120 FPS. لم يُختبر إدخال أو صوت مسموع. تقدم العرض ليس لعباً تفاعلياً أو إكمالاً موثقاً. عرض Heretic فقط؛ لم يبدأ Hexen.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. A demonstração automática e o menu mostram 120 FPS no contador. Não foram verificados comandos nem som audível. É progresso da demonstração, não jogo interativo ou conclusão validados. Apenas demonstração Heretic; Hexen não foi iniciado.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Automatische Demo und Menü zeigen einen 120-FPS-Fensterzähler. Eingabe und hörbarer Ton wurden nicht geprüft. Das ist Demofortschritt, kein bestätigtes interaktives Spielen oder Abschluss. Nur Heretic-Demo; Hexen nicht gestartet.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La démo automatique et le menu affichent un compteur à 120 FPS. Entrée et son audible non vérifiés. Il s’agit d’une démo rendue, pas de jeu interactif ou de fin validés. Démo Heretic seule ; Hexen non lancé.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. La demo automática y el menú muestran un contador de 120 FPS. No se comprobaron controles ni sonido audible. Es una demostración renderizada, no juego interactivo ni finalización verificados. Solo demo Heretic; Hexen no se inició."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 9 9950X3D",
     "gpu": "NVIDIA RTX 5090",
     "fps": "120",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. The automatic attract demo and menu render at a 120 FPS window counter. No user input or audible output was checked. This is rendered demo progression, not verified interactive play or completion. Heretic attract demo only; Hexen was not started.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 自动演示与菜单的窗口计数为 120 FPS；未检查用户操作或实际声音。这是自动演示画面进展，不是已验证交互游戏或通关。 仅 Heretic 自动演示，未启动 Hexen。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. يُعرض المشهد التجريبي التلقائي والقائمة بعداد 120 FPS. لم يُختبر إدخال أو صوت مسموع. تقدم العرض ليس لعباً تفاعلياً أو إكمالاً موثقاً. عرض Heretic فقط؛ لم يبدأ Hexen.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. A demonstração automática e o menu mostram 120 FPS no contador. Não foram verificados comandos nem som audível. É progresso da demonstração, não jogo interativo ou conclusão validados. Apenas demonstração Heretic; Hexen não foi iniciado.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. Automatische Demo und Menü zeigen einen 120-FPS-Fensterzähler. Eingabe und hörbarer Ton wurden nicht geprüft. Das ist Demofortschritt, kein bestätigtes interaktives Spielen oder Abschluss. Nur Heretic-Demo; Hexen nicht gestartet.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. La démo automatique et le menu affichent un compteur à 120 FPS. Entrée et son audible non vérifiés. Il s’agit d’une démo rendue, pas de jeu interactif ou de fin validés. Démo Heretic seule ; Hexen non lancé.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. La demo automática y el menú muestran un contador de 120 FPS. No se comprobaron controles ni sonido audible. Es una demostración renderizada, no juego interactivo ni finalización verificados. Solo demo Heretic; Hexen no se inició."
     }
    }
   ],
   "media": []
  }
 ],
 "castlevania-belmonts-curse": [
  {
   "id": "5832-linux-review-20261015",
   "platform": "linux",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5832",
   "updated": "2026-10-14T15:46:36Z",
   "testDate": null,
   "build": "main 9a3e2ac4d",
   "os": "Ubuntu 26.10",
   "cpu": null,
   "gpu": "NVIDIA RTX 3080 Ti",
   "driver": "615.71.09",
   "version": "01.000.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: GCC 15.3.0. The menu renders and accepts input. New Game, or about 100 seconds idle, reaches a refused 3D comparison sample on a 1D placeholder. #5375 does not change it. Gameplay, audio, saving and FPS remain unverified.",
    "zh": "构建工具：GCC 15.3.0. 菜单显示且接受操作；新游戏或约 100 秒闲置后，因在 1D 占位图像上进行 3D 比较采样而停止，#5375 未改变结果。游戏过程、声音、存档及 FPS 未验证。",
    "ar": "الأدوات: GCC 15.3.0. تظهر القائمة وتستجيب. تؤدي لعبة جديدة أو انتظار نحو 100 ثانية لرفض مقارنة 3D على صورة 1D بديلة؛ لا يغير #5375 ذلك. اللعب والصوت والحفظ وFPS غير موثقة.",
    "pt": "Ferramentas: GCC 15.3.0. O menu responde. Novo Jogo ou cerca de 100 s de espera termina numa comparação 3D recusada numa imagem 1D. #5375 não muda o resultado. Jogo, som, gravação e FPS por verificar.",
    "de": "Werkzeuge: GCC 15.3.0. Das Menü reagiert. Neues Spiel oder etwa 100 s Leerlauf enden an verweigertem 3D-Vergleich auf einem 1D-Platzhalter. #5375 ändert das nicht. Gameplay, Ton, Speichern und FPS fehlen.",
    "fr": "Outils : GCC 15.3.0. Le menu répond. Nouvelle partie ou environ 100 s d’attente mène à une comparaison 3D refusée sur un substitut 1D. #5375 ne change rien. Jeu, son, sauvegarde et FPS non vérifiés.",
    "es": "Herramientas: GCC 15.3.0. El menú responde. Nueva partida o unos 100 s de espera termina en una comparación 3D rechazada sobre un marcador 1D. #5375 no cambia el resultado. Juego, sonido, guardado y FPS sin verificar."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "onimusha-way-of-the-sword": [
  {
   "id": "5769-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5769#discussioncomment-18927702",
   "updated": "2026-10-14T15:40:47Z",
   "testDate": null,
   "build": "main 0b97f8b9f + recorded PR stack + #5861/#5907/#5555 + local image-capacity/scan changes",
   "os": "Windows 11 Pro · 26200",
   "cpu": "AMD Ryzen 7 9800X3D",
   "gpu": "NVIDIA RTX 5070",
   "driver": "617.42",
   "version": "01.000.001",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. With the combined stack, health warning and language selection hold around 15 FPS with a warm cache. Two of four recent runs still fault in the audio thread before a screen. No gameplay or complete startup reliability is established; the local capacity changes remain experimental.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：31 GB. 整合后，预热缓存的健康警告和语言选择约 15 FPS；最近四次中两次仍在首屏前的音频线程崩溃。未验证游戏过程或稳定启动，本地容量改动仍属实验。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 31 GB. مع المجموعة تظهر تحذيرات الصحة واختيار اللغة بنحو 15 FPS وذاكرة مؤقتة دافئة. تتعطل تجربتان من أربع في الصوت قبل الشاشة. لا لعب أو بدء موثوق كامل؛ تغييرات السعة المحلية تجريبية.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. Com a integração, aviso de saúde e idioma chegam a cerca de 15 FPS com cache quente. Duas de quatro execuções falham no áudio antes da imagem. Sem jogo ou arranque estável validado; alterações de capacidade são experimentais.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. Mit dem Stack zeigen Gesundheitswarnung und Sprachauswahl etwa 15 FPS bei warmem Cache. Zwei von vier Läufen scheitern zuvor im Audiothread. Gameplay und zuverlässiger Start fehlen; lokale Kapazitätsänderungen bleiben experimentell.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 31 GB. La pile montre l’avertissement santé et le choix de langue vers 15 FPS avec cache chaud. Deux essais sur quatre plantent dans le thread audio avant l’image. Jeu et démarrage fiable non validés ; capacités locales expérimentales.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. La integración muestra aviso de salud e idioma a unos 15 FPS con caché caliente. Dos de cuatro pruebas fallan en audio antes de la pantalla. Sin juego ni inicio fiable validados; cambios locales de capacidad experimentales."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 9800X3D",
     "gpu": "NVIDIA RTX 5070",
     "fps": "≈15",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. With the combined stack, health warning and language selection hold around 15 FPS with a warm cache. Two of four recent runs still fault in the audio thread before a screen. No gameplay or complete startup reliability is established; the local capacity changes remain experimental.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：31 GB. 整合后，预热缓存的健康警告和语言选择约 15 FPS；最近四次中两次仍在首屏前的音频线程崩溃。未验证游戏过程或稳定启动，本地容量改动仍属实验。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 31 GB. مع المجموعة تظهر تحذيرات الصحة واختيار اللغة بنحو 15 FPS وذاكرة مؤقتة دافئة. تتعطل تجربتان من أربع في الصوت قبل الشاشة. لا لعب أو بدء موثوق كامل؛ تغييرات السعة المحلية تجريبية.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. Com a integração, aviso de saúde e idioma chegam a cerca de 15 FPS com cache quente. Duas de quatro execuções falham no áudio antes da imagem. Sem jogo ou arranque estável validado; alterações de capacidade são experimentais.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. Mit dem Stack zeigen Gesundheitswarnung und Sprachauswahl etwa 15 FPS bei warmem Cache. Zwei von vier Läufen scheitern zuvor im Audiothread. Gameplay und zuverlässiger Start fehlen; lokale Kapazitätsänderungen bleiben experimentell.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 31 GB. La pile montre l’avertissement santé et le choix de langue vers 15 FPS avec cache chaud. Deux essais sur quatre plantent dans le thread audio avant l’image. Jeu et démarrage fiable non validés ; capacités locales expérimentales.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 31 GB. La integración muestra aviso de salud e idioma a unos 15 FPS con caché caliente. Dos de cuatro pruebas fallan en audio antes de la pantalla. Sin juego ni inicio fiable validados; cambios locales de capacidad experimentales."
     }
    }
   ],
   "media": []
  },
  {
   "id": "6006-windows-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/6006",
   "updated": "2026-10-14T19:34:13Z",
   "testDate": null,
   "build": "main revision not stated + local mprotect mask; trace also records SPHIA-BYPASS-SUCCESS",
   "os": "Windows 11 · 28000.3086",
   "cpu": null,
   "gpu": "NVIDIA RTX 5070 Ti",
   "driver": null,
   "version": "01.000.001",
   "patched": true,
   "summary": {
    "en": "A different machine stays black after initialization, with no visible gameplay or audio. A semaphore wait is observed, but its cause is unresolved. The exact main commit and complete local bypass scope are missing, so this cannot contradict the separately pinned RTX 5070 settings result.",
    "zh": "另一台机器在初始化后持续黑屏，无可见游戏或声音；观察到信号量等待，但原因未定。缺少准确 main 提交和完整本地绕行范围，不能据此否定另一个固定 RTX 5070 设置画面的结果。",
    "ar": "يبقى جهاز آخر أسود بعد التهيئة بلا لعب مرئي أو صوت. رُصد انتظار semaphore دون سبب مثبت. التزام main ونطاق التجاوزات غير كاملين؛ لا ينفي نتيجة إعدادات RTX 5070 المنفصلة.",
    "pt": "Outra máquina permanece negra após iniciar, sem jogo visível ou som. Há uma espera de semáforo, sem causa estabelecida. Falta o commit main e o alcance das alterações; não invalida as definições na RTX 5070.",
    "de": "Ein anderer Rechner bleibt nach Initialisierung schwarz, ohne sichtbares Spiel oder Ton. Ein Semaphor-Warten ist beobachtet, die Ursache offen. Exakter main-Commit und lokale Umgehungen fehlen; das widerlegt den getrennten RTX-5070-Einstellungsfall nicht.",
    "fr": "Une autre machine reste noire après initialisation, sans jeu visible ni son. Une attente de sémaphore est observée, sa cause reste inconnue. Commit main et contournements incomplets : cela n’invalide pas le cas RTX 5070 distinct.",
    "es": "Otra máquina permanece negra tras iniciar, sin juego visible ni sonido. Se observa espera de semáforo sin causa confirmada. Faltan el commit main y el alcance de los cambios; no invalida el caso separado de ajustes RTX 5070."
   },
   "benchmarks": [],
   "media": [
    "https://github.com/user-attachments/assets/f18b3722-e852-44d3-ac1c-c414ac231fcb"
   ]
  }
 ],
 "cat-quest-iii": [
  {
   "id": "5888-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5888",
   "updated": "2026-10-14T14:50:09Z",
   "testDate": null,
   "build": "main 5a6ad0ed3 + #5892 and locally merged #5627",
   "os": "Windows 11 Pro · 26200",
   "cpu": "AMD Ryzen 7 9800X3D",
   "gpu": "NVIDIA RTX 5070",
   "driver": "616.92",
   "version": "01.000.001",
   "patched": true,
   "summary": {
    "en": "Toolchain: MinGW GCC 15.2.0. Overworld, caves, sailing and menus work with audio, pad input and a loaded save. The modified overworld is reported at 107–115 FPS; new shaders hitch once. It uses audio latency 100 ms and local visibility fixes. No full playthrough, clean-main equivalent or broader save stability is established.",
    "zh": "构建工具：MinGW GCC 15.2.0. 带声音、手柄和载入存档的世界、洞穴、航行及菜单已有观察，本地改动下世界约 107–115 FPS，新着色器会暂时卡顿。使用 100 ms 音频延迟及本地可见性修复，未证明通关、原始 main 等效或更广泛存档稳定性。",
    "ar": "الأدوات: MinGW GCC 15.2.0. تعمل الخريطة والكهوف والإبحار والقوائم بصوت وتحكم وحفظ محمّل. العالم المعدل نحو 107–115 FPS مع توقف أول مظللات جديدة. تأخير الصوت 100 ms وإصلاحات محلية؛ لا إكمال أو نتيجة main الأصلية أو ثبات حفظ شامل.",
    "pt": "Ferramentas: MinGW GCC 15.2.0. Mapa, cavernas, navegação e menus funcionam com som, comando e gravação carregada. O mundo modificado apresenta 107–115 FPS e pausas em shaders novos. Usa latência áudio de 100 ms e correções locais; sem conclusão, equivalente main ou estabilidade geral de gravação.",
    "de": "Werkzeuge: MinGW GCC 15.2.0. Welt, Höhlen, Schiffe und Menüs funktionieren mit Ton, Pad und geladenem Save. Die modifizierte Welt zeigt 107–115 FPS und einmalige Shaderhänger. 100-ms-Audiolatenz und lokale Sichtbarkeitsfixes; Abschluss, reines main und umfassende Save-Stabilität fehlen.",
    "fr": "Outils : MinGW GCC 15.2.0. Monde, grottes, navigation et menus fonctionnent avec son, manette et sauvegarde chargée. Le monde modifié donne 107–115 FPS avec pauses sur nouveaux shaders. Latence audio 100 ms et correctifs locaux ; fin, main seul et stabilité générale des sauvegardes non établis.",
    "es": "Herramientas: MinGW GCC 15.2.0. Mundo, cuevas, navegación y menús funcionan con sonido, mando y guardado cargado. El mundo modificado muestra 107–115 FPS y pausas con shaders nuevos. Latencia de audio 100 ms y arreglos locales; no prueba finalización, main puro ni estabilidad general del guardado."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 9800X3D",
     "gpu": "NVIDIA RTX 5070",
     "fps": "107–115",
     "context": {
      "en": "Toolchain: MinGW GCC 15.2.0. Overworld, caves, sailing and menus work with audio, pad input and a loaded save. The modified overworld is reported at 107–115 FPS; new shaders hitch once. It uses audio latency 100 ms and local visibility fixes. No full playthrough, clean-main equivalent or broader save stability is established.",
      "zh": "构建工具：MinGW GCC 15.2.0. 带声音、手柄和载入存档的世界、洞穴、航行及菜单已有观察，本地改动下世界约 107–115 FPS，新着色器会暂时卡顿。使用 100 ms 音频延迟及本地可见性修复，未证明通关、原始 main 等效或更广泛存档稳定性。",
      "ar": "الأدوات: MinGW GCC 15.2.0. تعمل الخريطة والكهوف والإبحار والقوائم بصوت وتحكم وحفظ محمّل. العالم المعدل نحو 107–115 FPS مع توقف أول مظللات جديدة. تأخير الصوت 100 ms وإصلاحات محلية؛ لا إكمال أو نتيجة main الأصلية أو ثبات حفظ شامل.",
      "pt": "Ferramentas: MinGW GCC 15.2.0. Mapa, cavernas, navegação e menus funcionam com som, comando e gravação carregada. O mundo modificado apresenta 107–115 FPS e pausas em shaders novos. Usa latência áudio de 100 ms e correções locais; sem conclusão, equivalente main ou estabilidade geral de gravação.",
      "de": "Werkzeuge: MinGW GCC 15.2.0. Welt, Höhlen, Schiffe und Menüs funktionieren mit Ton, Pad und geladenem Save. Die modifizierte Welt zeigt 107–115 FPS und einmalige Shaderhänger. 100-ms-Audiolatenz und lokale Sichtbarkeitsfixes; Abschluss, reines main und umfassende Save-Stabilität fehlen.",
      "fr": "Outils : MinGW GCC 15.2.0. Monde, grottes, navigation et menus fonctionnent avec son, manette et sauvegarde chargée. Le monde modifié donne 107–115 FPS avec pauses sur nouveaux shaders. Latence audio 100 ms et correctifs locaux ; fin, main seul et stabilité générale des sauvegardes non établis.",
      "es": "Herramientas: MinGW GCC 15.2.0. Mundo, cuevas, navegación y menús funcionan con sonido, mando y guardado cargado. El mundo modificado muestra 107–115 FPS y pausas con shaders nuevos. Latencia de audio 100 ms y arreglos locales; no prueba finalización, main puro ni estabilidad general del guardado."
     }
    }
   ],
   "media": []
  }
 ],
 "withering-rooms": [
  {
   "id": "5809-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5809",
   "updated": "2026-10-14T11:51:05Z",
   "testDate": null,
   "build": "main 23be5a02b",
   "os": "CachyOS · kernel 7.2.9 · KDE Wayland",
   "cpu": "AMD Ryzen 7 7800X3D",
   "gpu": "AMD Radeon RX 9070 XT",
   "driver": "Mesa 26.2.4 RADV",
   "version": "01.000.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: GCC 16.2.1. RAM: 31 GB. Room exploration and walking render at captured counters of 14–27 FPS with cold caches. HUD corruption, wall patches and audio hiccups remain. Two default runs crash at 154 and 232 seconds in the guest allocator; a late storage-image write-back is a hypothesis, not an established cause.",
    "zh": "构建工具：GCC 16.2.1. 内存：31 GB. 冷缓存下，房间探索和行走画面的计数为 14–27 FPS；HUD 损坏、墙面斑块和音频卡顿仍在。两次默认运行于 154、232 秒在游戏分配器崩溃，后到的存储图像回写只是待验证假设。",
    "ar": "الأدوات: GCC 16.2.1. الذاكرة: 31 GB. يُعرض استكشاف الغرف والمشي بعدادات 14–27 FPS مع ذاكرة باردة. فساد HUD وبقع وصوت متقطع. تتعطل تجربتان افتراضيتان عند 154 و232 ثانية في مخصص اللعبة؛ كتابة صورة متأخرة فرضية وليست سبباً مثبتاً.",
    "pt": "Ferramentas: GCC 16.2.1. RAM: 31 GB. Exploração e caminhada mostram contadores de 14–27 FPS com cache fria. HUD corrompido, manchas e som entrecortado permanecem. Duas execuções falham aos 154 e 232 s no alocador; escrita tardia de imagem é hipótese, não causa confirmada.",
    "de": "Werkzeuge: GCC 16.2.1. RAM: 31 GB. Raumerkundung und Gehen zeigen 14–27 FPS mit kaltem Cache. HUD-Fehler, Wandflecken und Tonaussetzer bleiben. Zwei Standardläufe crashen nach 154/232 s im Gastallokator; spätes Bild-Writeback ist eine Hypothese, keine bestätigte Ursache.",
    "fr": "Outils : GCC 16.2.1. Mémoire : 31 GB. Exploration et marche affichent 14–27 FPS à cache froid. HUD corrompu, taches et son haché persistent. Deux essais plantent à 154/232 s dans l’allocateur du jeu ; l’écriture tardive d’image reste une hypothèse.",
    "es": "Herramientas: GCC 16.2.1. RAM: 31 GB. Exploración y caminar muestran 14–27 FPS con caché fría. Persisten HUD corrupto, manchas y audio entrecortado. Dos pruebas fallan a 154/232 s en el asignador del juego; escritura tardía de imagen es hipótesis, no causa confirmada."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 7800X3D",
     "gpu": "AMD Radeon RX 9070 XT",
     "fps": "14–27",
     "context": {
      "en": "Toolchain: GCC 16.2.1. RAM: 31 GB. Room exploration and walking render at captured counters of 14–27 FPS with cold caches. HUD corruption, wall patches and audio hiccups remain. Two default runs crash at 154 and 232 seconds in the guest allocator; a late storage-image write-back is a hypothesis, not an established cause.",
      "zh": "构建工具：GCC 16.2.1. 内存：31 GB. 冷缓存下，房间探索和行走画面的计数为 14–27 FPS；HUD 损坏、墙面斑块和音频卡顿仍在。两次默认运行于 154、232 秒在游戏分配器崩溃，后到的存储图像回写只是待验证假设。",
      "ar": "الأدوات: GCC 16.2.1. الذاكرة: 31 GB. يُعرض استكشاف الغرف والمشي بعدادات 14–27 FPS مع ذاكرة باردة. فساد HUD وبقع وصوت متقطع. تتعطل تجربتان افتراضيتان عند 154 و232 ثانية في مخصص اللعبة؛ كتابة صورة متأخرة فرضية وليست سبباً مثبتاً.",
      "pt": "Ferramentas: GCC 16.2.1. RAM: 31 GB. Exploração e caminhada mostram contadores de 14–27 FPS com cache fria. HUD corrompido, manchas e som entrecortado permanecem. Duas execuções falham aos 154 e 232 s no alocador; escrita tardia de imagem é hipótese, não causa confirmada.",
      "de": "Werkzeuge: GCC 16.2.1. RAM: 31 GB. Raumerkundung und Gehen zeigen 14–27 FPS mit kaltem Cache. HUD-Fehler, Wandflecken und Tonaussetzer bleiben. Zwei Standardläufe crashen nach 154/232 s im Gastallokator; spätes Bild-Writeback ist eine Hypothese, keine bestätigte Ursache.",
      "fr": "Outils : GCC 16.2.1. Mémoire : 31 GB. Exploration et marche affichent 14–27 FPS à cache froid. HUD corrompu, taches et son haché persistent. Deux essais plantent à 154/232 s dans l’allocateur du jeu ; l’écriture tardive d’image reste une hypothèse.",
      "es": "Herramientas: GCC 16.2.1. RAM: 31 GB. Exploración y caminar muestran 14–27 FPS con caché fría. Persisten HUD corrupto, manchas y audio entrecortado. Dos pruebas fallan a 154/232 s en el asignador del juego; escritura tardía de imagen es hipótesis, no causa confirmada."
     }
    }
   ],
   "media": [
    "https://github.com/user-attachments/assets/a2a354b8-3bde-480b-984a-aa298cdf140a",
    "https://github.com/user-attachments/assets/2b4697dd-251a-4936-955b-f379349ed479",
    "https://github.com/user-attachments/assets/8b1cd945-a324-4aa8-a063-df74d317ba71",
    "https://github.com/user-attachments/assets/ac7baff9-a796-4633-9323-c00daf8d46f8",
    "https://github.com/user-attachments/assets/f3d4a903-6749-43cd-bf70-f06454486175",
    "https://github.com/user-attachments/assets/adb8ecbd-e4b3-43e8-9332-c196fba0e7c9"
   ]
  }
 ],
 "007-first-light": [
  {
   "id": "5714-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5714",
   "updated": "2026-10-14T07:45:39Z",
   "testDate": null,
   "build": "SleglJan/share/007-v5 65c5b68f3 · main 34355eeea + 159 integration commits",
   "os": "CachyOS · kernel 7.2.9",
   "cpu": "AMD Ryzen 9 7950X3D",
   "gpu": "NVIDIA RTX 3080 · 10 GB",
   "driver": "615.71.09",
   "version": "01.018.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. The patched checkpoint reaches beach movement/look tutorials with keyboard, DualSense and audio, around 0.2–0.35 FPS. Colour washouts remain; five of twelve resumed loads segfault. The earlier hour-long run used another base. Extensive local shader, memory and cache settings remain; there is no newer clean-main or completion result.",
    "zh": "构建工具：GCC 16.2.1 · Release · SPIRV-Tools OFF. 内存：64 GB. 补丁栈从检查点进入海滩移动／视角教程，键盘、DualSense 与声音有观察，约 0.2–0.35 FPS。颜色冲白仍在，十二次恢复加载中五次崩溃；较早一小时运行使用另一基线。仍需大量本地着色器、内存与缓存设置，没有更新原始 main 或通关结果。",
    "ar": "الأدوات: GCC 16.2.1 · Release · SPIRV-Tools OFF. الذاكرة: 64 GB. تبلغ المجموعة المعدلة تعليم الحركة والنظر على الشاطئ بتحكم وصوت، نحو 0.2–0.35 FPS. ألوان باهتة وخمس أعطال من 12 استئنافاً. تجربة الساعة القديمة على أساس آخر. إعدادات مظللات وذاكرة محلية كثيرة؛ لا main أصلي أحدث أو إكمال.",
    "pt": "Ferramentas: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. A integração chega aos tutoriais da praia com teclado, DualSense e som, cerca de 0,2–0,35 FPS. Cores lavadas e cinco falhas em doze retomas. A sessão anterior de uma hora tinha outra base. Mantém muitas alterações locais; sem main recente original nem conclusão.",
    "de": "Werkzeuge: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. Der Stack erreicht Strand-Bewegungs-/Blicktutorials mit Tastatur, DualSense und Ton, etwa 0,2–0,35 FPS. Farbauswaschungen und fünf Crashes bei zwölf Resume-Ladevorgängen. Der frühere Stundenlauf nutzte eine andere Basis. Viele lokale Shader-/Speicheroptionen bleiben; kein neuer reiner main-Test oder Abschluss.",
    "fr": "Outils : GCC 16.2.1 · Release · SPIRV-Tools OFF. Mémoire : 64 GB. La pile atteint les tutoriels de plage avec clavier, DualSense et son, vers 0,2–0,35 FPS. Couleurs délavées et cinq crashes sur douze reprises. L’ancienne session d’une heure utilisait une autre base. Nombreux réglages locaux restent requis ; aucun main récent seul ni fin validés.",
    "es": "Herramientas: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. La integración alcanza tutoriales de playa con teclado, DualSense y sonido, unos 0,2–0,35 FPS. Colores lavados y cinco fallos en doce cargas retomadas. La sesión previa de una hora usó otra base. Siguen muchos ajustes locales; sin main reciente puro ni finalización."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 9 7950X3D",
     "gpu": "NVIDIA RTX 3080 · 10 GB",
     "fps": "0.2–0.35",
     "context": {
      "en": "Toolchain: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. The patched checkpoint reaches beach movement/look tutorials with keyboard, DualSense and audio, around 0.2–0.35 FPS. Colour washouts remain; five of twelve resumed loads segfault. The earlier hour-long run used another base. Extensive local shader, memory and cache settings remain; there is no newer clean-main or completion result.",
      "zh": "构建工具：GCC 16.2.1 · Release · SPIRV-Tools OFF. 内存：64 GB. 补丁栈从检查点进入海滩移动／视角教程，键盘、DualSense 与声音有观察，约 0.2–0.35 FPS。颜色冲白仍在，十二次恢复加载中五次崩溃；较早一小时运行使用另一基线。仍需大量本地着色器、内存与缓存设置，没有更新原始 main 或通关结果。",
      "ar": "الأدوات: GCC 16.2.1 · Release · SPIRV-Tools OFF. الذاكرة: 64 GB. تبلغ المجموعة المعدلة تعليم الحركة والنظر على الشاطئ بتحكم وصوت، نحو 0.2–0.35 FPS. ألوان باهتة وخمس أعطال من 12 استئنافاً. تجربة الساعة القديمة على أساس آخر. إعدادات مظللات وذاكرة محلية كثيرة؛ لا main أصلي أحدث أو إكمال.",
      "pt": "Ferramentas: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. A integração chega aos tutoriais da praia com teclado, DualSense e som, cerca de 0,2–0,35 FPS. Cores lavadas e cinco falhas em doze retomas. A sessão anterior de uma hora tinha outra base. Mantém muitas alterações locais; sem main recente original nem conclusão.",
      "de": "Werkzeuge: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. Der Stack erreicht Strand-Bewegungs-/Blicktutorials mit Tastatur, DualSense und Ton, etwa 0,2–0,35 FPS. Farbauswaschungen und fünf Crashes bei zwölf Resume-Ladevorgängen. Der frühere Stundenlauf nutzte eine andere Basis. Viele lokale Shader-/Speicheroptionen bleiben; kein neuer reiner main-Test oder Abschluss.",
      "fr": "Outils : GCC 16.2.1 · Release · SPIRV-Tools OFF. Mémoire : 64 GB. La pile atteint les tutoriels de plage avec clavier, DualSense et son, vers 0,2–0,35 FPS. Couleurs délavées et cinq crashes sur douze reprises. L’ancienne session d’une heure utilisait une autre base. Nombreux réglages locaux restent requis ; aucun main récent seul ni fin validés.",
      "es": "Herramientas: GCC 16.2.1 · Release · SPIRV-Tools OFF. RAM: 64 GB. La integración alcanza tutoriales de playa con teclado, DualSense y sonido, unos 0,2–0,35 FPS. Colores lavados y cinco fallos en doce cargas retomadas. La sesión previa de una hora usó otra base. Siguen muchos ajustes locales; sin main reciente puro ni finalización."
     }
    }
   ],
   "media": []
  }
 ],
 "void-terrarium-ppsa03042": [
  {
   "id": "5665-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5665",
   "updated": "2026-10-14T06:13:54Z",
   "testDate": null,
   "build": "private bc738cbbbb2893e020f30eccb89e5c2881743d03 · main 90d0cb481 + #5139 ac6d3c0a + #5660 9808345f",
   "os": "Linux · 7.2.9-arch1-1",
   "cpu": null,
   "gpu": "AMD Radeon RX 6650 XT",
   "driver": "Mesa 26.2.4-arch1.1 RADV",
   "version": null,
   "patched": true,
   "summary": {
    "en": "User-controlled progression reaches the robot and Scrapyard Layer 02, then the profiled run segfaults at 451.76 seconds near a sphere. Earlier planned timeouts were not crashes. The approximate 60 FPS counter is not a benchmark. Retained conversion, peer libraries, 16 GiB import budget and temporary udmabuf limit are required; audio and completion remain unverified.",
    "zh": "用户操作进入机器人及废品场第二层，随后带分析的运行在球体附近于 451.76 秒段错误终止；此前计划超时并非崩溃。约 60 FPS 窗口计数不是基准，使用保留的转换、同行库改动、16 GiB 导入预算和临时 udmabuf 上限，声音与通关未验证。",
    "ar": "يصل التحكم إلى الروبوت والطابق الثاني ثم يتعطل التشغيل المشخّص عند 451.76 ثانية قرب كرة. المهلات المخططة السابقة ليست أعطالاً. عداد نحو 60 FPS ليس معياراً. تحويل محفوظ وتغييرات المكتبات وميزانية 16 GiB وحد udmabuf مؤقت؛ الصوت والإكمال غير موثقين.",
    "pt": "O utilizador chega ao robô e Scrapyard Layer 02, mas a execução com diagnóstico falha aos 451,76 s perto de uma esfera. Limites anteriores não eram crashes. O contador perto de 60 FPS não é benchmark. Conversão retida, alterações de bibliotecas, orçamento 16 GiB e udmabuf temporário; som e conclusão por verificar.",
    "de": "Steuerung erreicht Roboter und Scrapyard Layer 02, dann Segfault nach 451,76 s nahe einer Kugel im Profiling-Lauf. Frühere geplante Timeouts waren keine Crashes. Etwa 60 FPS im Fenster sind kein Benchmark. Alte Konvertierung, Peer-Bibliotheken, 16-GiB-Importbudget und temporäres udmabuf-Limit; Ton und Abschluss fehlen.",
    "fr": "Le joueur atteint le robot et Scrapyard Layer 02, puis le run profilé plante à 451,76 s près d’une sphère. Les anciens timeouts planifiés n’étaient pas des crashes. Le compteur vers 60 FPS n’est pas un benchmark. Conversion conservée, bibliothèques modifiées, budget 16 GiB et udmabuf temporaire ; son et fin non vérifiés.",
    "es": "El usuario alcanza el robot y Scrapyard Layer 02; la prueba perfilada falla a 451,76 s cerca de una esfera. Los límites previos no fueron crashes. El contador cercano a 60 FPS no es benchmark. Conversión conservada, bibliotecas modificadas, presupuesto 16 GiB y udmabuf temporal; sonido y finalización sin verificar."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "hollow-knight-voidheart": [
  {
   "id": "5593-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5593",
   "updated": "2026-10-14T00:36:26Z",
   "testDate": null,
   "build": "main 30f961266 · decrypted SELF input unwrapped with #5588 tool",
   "os": "Windows 11 Pro · 10.0.26200",
   "cpu": "AMD Ryzen 5 5500",
   "gpu": "NVIDIA RTX 3070",
   "driver": "32.0.16.1062",
   "version": "01.000.002",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Gameplay is observed at 60 FPS, menus at 120, with a written save slot and scripted pad buttons. Audio, analog sticks and later progression were not checked; storage-image hazard warnings remain. The later feddf7f4c executable was rebuilt but not played, so it is not the tested build.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：32 GiB. 游戏过程计数 60 FPS、菜单 120，有写出的存档槽及脚本手柄按键；未检查声音、摇杆及后续进度，仍有存储图像风险警告。之后 feddf7f4c 只重新生成程序，未运行，不能替换实测构建。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 32 GiB. لوحظ اللعب عند 60 FPS والقائمة 120 مع ملف حفظ وأزرار آلية. الصوت والعصي والتقدم اللاحق غير مختبرة؛ تحذيرات الصور باقية. أُعيد بناء feddf7f4c دون لعب، فلا يحل محل البناء المختبر.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Jogo a 60 FPS, menus a 120, ficheiro de gravação e botões simulados. Som, sticks e progressão posterior não foram testados; avisos de imagens persistem. feddf7f4c foi recompilado mas não jogado, pelo que não substitui o build testado.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Gameplay mit 60 FPS, Menü 120, Save-Datei und geskriptete Pad-Tasten. Ton, Analogsticks und weiterer Fortschritt ungeprüft; Speicherbildwarnungen bleiben. feddf7f4c wurde nur neu gebaut, nicht gespielt, und ersetzt den getesteten Build nicht.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 32 GiB. Jeu à 60 FPS, menus à 120, fichier de sauvegarde et boutons simulés. Son, sticks et suite non testés ; avertissements d’images persistants. feddf7f4c a été reconstruit sans jouer et ne remplace pas le build testé.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Juego a 60 FPS, menús a 120, archivo de guardado y botones simulados. Sonido, sticks y progreso posterior sin probar; siguen avisos de imágenes. feddf7f4c se recompiló sin jugar, así que no sustituye el build probado."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 5 5500",
     "gpu": "NVIDIA RTX 3070",
     "fps": "60",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Gameplay is observed at 60 FPS, menus at 120, with a written save slot and scripted pad buttons. Audio, analog sticks and later progression were not checked; storage-image hazard warnings remain. The later feddf7f4c executable was rebuilt but not played, so it is not the tested build.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：32 GiB. 游戏过程计数 60 FPS、菜单 120，有写出的存档槽及脚本手柄按键；未检查声音、摇杆及后续进度，仍有存储图像风险警告。之后 feddf7f4c 只重新生成程序，未运行，不能替换实测构建。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 32 GiB. لوحظ اللعب عند 60 FPS والقائمة 120 مع ملف حفظ وأزرار آلية. الصوت والعصي والتقدم اللاحق غير مختبرة؛ تحذيرات الصور باقية. أُعيد بناء feddf7f4c دون لعب، فلا يحل محل البناء المختبر.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Jogo a 60 FPS, menus a 120, ficheiro de gravação e botões simulados. Som, sticks e progressão posterior não foram testados; avisos de imagens persistem. feddf7f4c foi recompilado mas não jogado, pelo que não substitui o build testado.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Gameplay mit 60 FPS, Menü 120, Save-Datei und geskriptete Pad-Tasten. Ton, Analogsticks und weiterer Fortschritt ungeprüft; Speicherbildwarnungen bleiben. feddf7f4c wurde nur neu gebaut, nicht gespielt, und ersetzt den getesteten Build nicht.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 32 GiB. Jeu à 60 FPS, menus à 120, fichier de sauvegarde et boutons simulés. Son, sticks et suite non testés ; avertissements d’images persistants. feddf7f4c a été reconstruit sans jouer et ne remplace pas le build testé.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GiB. Juego a 60 FPS, menús a 120, archivo de guardado y botones simulados. Sonido, sticks y progreso posterior sin probar; siguen avisos de imágenes. feddf7f4c se recompiló sin jugar, así que no sustituye el build probado."
     }
    }
   ],
   "media": []
  }
 ],
 "marvel-cosmic-invasion": [
  {
   "id": "5557-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5557",
   "updated": "2026-10-13T23:52:20Z",
   "testDate": null,
   "build": "8d98e8851 · patch state not stated",
   "os": "Windows 11 · 26200",
   "cpu": null,
   "gpu": "NVIDIA RTX 3070 Ti",
   "driver": "32.0.16.1074",
   "version": "02.002.000",
   "patched": null,
   "summary": {
    "en": "Toolchain: MinGW GCC 16.2.0. The template says before the first frame, while the body mentions publisher videos. Image-interface and unallocated-page failures are reported. The conflicting description establishes no verified menu, controllable scene, audio or FPS; no later main result is inferred.",
    "zh": "构建工具：MinGW GCC 16.2.0. 模板写首帧前停止，正文却提到发行商视频，并记录图像接口及未分配页面错误。描述矛盾，没有已验证菜单、可操作场景、声音或 FPS，也不推断后续 main 结果。",
    "ar": "الأدوات: MinGW GCC 16.2.0. يقول القالب قبل أول إطار بينما يذكر النص فيديوهات الناشر، مع أخطاء واجهة الصور والصفحات. الوصف المتعارض لا يثبت قائمة أو تحكماً أو صوتاً أو FPS ولا نتيجة main لاحقة.",
    "pt": "Ferramentas: MinGW GCC 16.2.0. O formulário diz antes da primeira imagem, mas o texto menciona vídeos do editor e falhas de imagens/páginas. A descrição contraditória não valida menu, controlo, som ou FPS, nem main posterior.",
    "de": "Werkzeuge: MinGW GCC 16.2.0. Vorlage sagt vor dem ersten Bild, Text nennt Publisher-Videos und Bild-/Seitenfehler. Der Widerspruch belegt kein Menü, steuerbare Szene, Ton oder FPS und keinen späteren main-Erfolg.",
    "fr": "Outils : MinGW GCC 16.2.0. Le formulaire dit avant toute image, le texte mentionne des vidéos éditeur et erreurs d’images/pages. Ce désaccord ne valide ni menu, contrôle, son ou FPS, ni résultat main ultérieur.",
    "es": "Herramientas: MinGW GCC 16.2.0. El formulario dice antes de la primera imagen, el texto menciona vídeos del editor y errores de imágenes/páginas. La contradicción no valida menú, control, sonido ni FPS, ni un main posterior."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "mgs4-master-collection": [
  {
   "id": "5518-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5518",
   "updated": "2026-10-13T22:04:02Z",
   "testDate": null,
   "build": "main dacd78525 + #5411/#5514/#5515/#5517 (on #5075)/#5425 + local PS_ITER_SAMPLE acceptance",
   "os": "Windows 11",
   "cpu": "Intel Core i9-10850K",
   "gpu": "NVIDIA RTX 3080 · 10 GB",
   "driver": "610.74",
   "version": "1.004.003 · title screen 1.4.1",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. The launcher hands over to the game, with intro audio and DualSense gameplay around 3 FPS. Launcher 60 FPS is separate. Italian output was tested; local sample-iteration acceptance was not validated for MSAA on hardware. Other languages, complete gameplay and an unmodified release remain unverified.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：32 GB. 启动器交接到游戏，开场声音和 DualSense 游戏过程约 3 FPS；启动器 60 FPS 单独记录。测试意大利语，本地放行 sample-iteration 未在硬件上核验 MSAA；其他语言、完整流程和原始发行版仍未知。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 32 GB. يسلّم المشغل للعبة مع صوت المقدمة وتحكم DualSense بنحو 3 FPS؛ 60 FPS للمشغل منفصلة. اختُبرت الإيطالية، وقبول sample-iteration المحلي غير مثبت على عتاد MSAA. لغات أخرى والإكمال والإصدار الأصلي غير موثقة.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. O lançador passa ao jogo, com som da introdução e DualSense perto de 3 FPS; os 60 FPS do lançador são separados. Testado em italiano. A aceitação local de sample-iteration não foi validada em MSAA real; outras línguas, conclusão e versão original por verificar.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. Launcher übergibt an das Spiel, Introton und DualSense-Gameplay etwa 3 FPS; Launcher-60-FPS separat. Italienisch getestet. Lokale Sample-Iteration-Freigabe ist für Hardware-MSAA ungeprüft; andere Sprachen, Abschluss und Originalrelease bleiben offen.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 32 GB. Le lanceur transmet au jeu, avec son d’introduction et DualSense vers 3 FPS ; ses 60 FPS sont distincts. Italien testé. L’acceptation locale de sample-iteration n’est pas validée en MSAA matériel ; autres langues, fin et release originale restent inconnues.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. El lanzador pasa al juego, con sonido inicial y DualSense a unos 3 FPS; sus 60 FPS son aparte. Se probó italiano. La aceptación local de sample-iteration no se validó en MSAA real; otros idiomas, finalización y versión original siguen sin verificar."
   },
   "benchmarks": [
    {
     "cpu": "Intel Core i9-10850K",
     "gpu": "NVIDIA RTX 3080 · 10 GB",
     "fps": "≈3",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. The launcher hands over to the game, with intro audio and DualSense gameplay around 3 FPS. Launcher 60 FPS is separate. Italian output was tested; local sample-iteration acceptance was not validated for MSAA on hardware. Other languages, complete gameplay and an unmodified release remain unverified.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：32 GB. 启动器交接到游戏，开场声音和 DualSense 游戏过程约 3 FPS；启动器 60 FPS 单独记录。测试意大利语，本地放行 sample-iteration 未在硬件上核验 MSAA；其他语言、完整流程和原始发行版仍未知。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 32 GB. يسلّم المشغل للعبة مع صوت المقدمة وتحكم DualSense بنحو 3 FPS؛ 60 FPS للمشغل منفصلة. اختُبرت الإيطالية، وقبول sample-iteration المحلي غير مثبت على عتاد MSAA. لغات أخرى والإكمال والإصدار الأصلي غير موثقة.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. O lançador passa ao jogo, com som da introdução e DualSense perto de 3 FPS; os 60 FPS do lançador são separados. Testado em italiano. A aceitação local de sample-iteration não foi validada em MSAA real; outras línguas, conclusão e versão original por verificar.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. Launcher übergibt an das Spiel, Introton und DualSense-Gameplay etwa 3 FPS; Launcher-60-FPS separat. Italienisch getestet. Lokale Sample-Iteration-Freigabe ist für Hardware-MSAA ungeprüft; andere Sprachen, Abschluss und Originalrelease bleiben offen.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 32 GB. Le lanceur transmet au jeu, avec son d’introduction et DualSense vers 3 FPS ; ses 60 FPS sont distincts. Italien testé. L’acceptation locale de sample-iteration n’est pas validée en MSAA matériel ; autres langues, fin et release originale restent inconnues.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 32 GB. El lanzador pasa al juego, con sonido inicial y DualSense a unos 3 FPS; sus 60 FPS son aparte. Se probó italiano. La aceptación local de sample-iteration no se validó en MSAA real; otros idiomas, finalización y versión original siguen sin verificar."
     }
    }
   ],
   "media": []
  }
 ],
 "saros": [
  {
   "id": "1504-linux-review-20261015",
   "platform": "linux",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/1504#discussioncomment-18918796",
   "updated": "2026-10-14T08:56:54Z",
   "testDate": null,
   "build": "main 31bfc4e869 + recorded mouse/ordered-append/table/shader-call/NGS2 peer stack + local AudioPropagation fork #56",
   "os": "Linux · kernel 7.2.9",
   "cpu": null,
   "gpu": "AMD Radeon RX 6650 XT",
   "driver": "Mesa 26.2.4 RADV",
   "version": "01.000.000",
   "patched": true,
   "summary": {
    "en": "Language selection and cycle-saving information respond; title-menu and gameplay are not established. Later local audio changes pass the observed path lookup, then a computed shader call and unaligned BDA fault remain. A frozen counter during core collection is not FPS. Active acoustic rendering and a complete run remain unverified.",
    "zh": "语言选择和周期存档说明可操作，但未证实游戏主菜单或实际游戏。后续本地音频改动绕过路径查询后，仍有计算目标着色器调用及 BDA 未对齐故障；收集 core 时冻结的窗口计数不算 FPS，活跃声学渲染与完整流程未验证。",
    "ar": "تستجيب اللغة ومعلومات حفظ الدورة دون إثبات قائمة اللعبة أو اللعب. تتجاوز تغييرات الصوت المحلية استعلام المسار ثم تبقى دعوة مظلل محسوبة وعطل BDA غير محاذٍ. العداد المتجمد أثناء core ليس FPS؛ الصوت الفعّال وتشغيل كامل غير موثقين.",
    "pt": "Idioma e informação de gravação de ciclos respondem, sem menu principal ou jogo validados. Alterações áudio passam a consulta de caminhos, mas continuam chamada de shader calculada e falha BDA. O contador congelado durante o core não é FPS; acústica ativa e execução completa por verificar.",
    "de": "Sprachwahl und Zyklus-Speicherhinweis reagieren, Spielmenü/Gameplay bleiben unbewiesen. Lokale Audioänderungen passieren die Pfadabfrage, dann bleiben berechneter Shaderaufruf und unalignierter BDA-Fehler. Ein eingefrorener Core-Zähler ist kein FPS-Wert; aktive Akustik und Vollablauf ungeprüft.",
    "fr": "Langue et information de sauvegarde répondent, sans menu du jeu ni gameplay validés. Les changements audio passent la recherche de chemin, puis restent un appel shader calculé et un défaut BDA. Le compteur figé pendant le core n’est pas un FPS ; acoustique active et exécution complète non validées.",
    "es": "Idioma e información de guardado responden, sin menú principal ni juego validados. Los cambios de audio superan la consulta de rutas, pero persisten llamada de shader calculada y error BDA. El contador congelado durante el core no es FPS; acústica activa y ejecución completa sin verificar."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "minecraft": [
  {
   "id": "5744-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5744",
   "updated": "2026-10-14T15:05:39Z",
   "testDate": null,
   "build": "main 31bfc4e86",
   "os": "Windows 11",
   "cpu": "Intel Core i5-12500H",
   "gpu": "NVIDIA GeForce RTX 3050 Laptop GPU",
   "driver": null,
   "version": "01.008.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: MinGW-w64 GCC 15.2.0. A created/loaded world responds to movement around 40 FPS after reducing render distance; menus are about 60. Saving on quit and reloading world data are reported, with a clean exit. Audit success does not validate every stub; audio, driver version and full-session coverage are unknown. This retail Bedrock edition is separate from Preview.",
    "zh": "构建工具：MinGW-w64 GCC 15.2.0. 调低视距后，创建／载入的世界可移动，约 40 FPS，菜单约 60。来源记录退出存档与世界数据读写、正常退出；导入审计不证明所有 stub 正确，声音、驱动及完整测试时长未知。正式 Bedrock 版本与 Preview 分开。",
    "ar": "الأدوات: MinGW-w64 GCC 15.2.0. يستجيب عالم جديد أو محمّل بنحو 40 FPS بعد خفض المسافة؛ القائمة نحو 60. الحفظ والخروج النظيف موثقان. تدقيق الاستيراد لا يثبت كل stub؛ الصوت ونسخة التعريف ومدة كاملة مجهولة. Bedrock التجاري منفصل عن Preview.",
    "pt": "Ferramentas: MinGW-w64 GCC 15.2.0. Um mundo criado/carregado responde a cerca de 40 FPS após reduzir a distância; menus perto de 60. Há gravação e saída limpa. A auditoria não valida todos os stubs; som, versão do controlador e sessão completa desconhecidos. Bedrock comercial é distinto de Preview.",
    "de": "Werkzeuge: MinGW-w64 GCC 15.2.0. Eine erzeugte/geladene Welt reagiert mit etwa 40 FPS bei reduzierter Sichtweite; Menü etwa 60. Save und sauberer Ausstieg dokumentiert. Audit validiert nicht jeden Stub; Ton, Treiberversion und Sitzungslänge fehlen. Handels-Bedrock ist getrennt von Preview.",
    "fr": "Outils : MinGW-w64 GCC 15.2.0. Un monde créé/chargé répond vers 40 FPS après réduction de distance ; menus vers 60. Sauvegarde et sortie propre rapportées. L’audit ne valide pas tous les stubs ; son, pilote et durée complète inconnus. Bedrock commercial reste distinct de Preview.",
    "es": "Herramientas: MinGW-w64 GCC 15.2.0. Un mundo creado/cargado responde a unos 40 FPS tras reducir distancia; menús cerca de 60. Hay guardado y salida limpia. La auditoría no valida cada stub; sonido, versión del controlador y sesión completa desconocidos. Bedrock comercial es distinto de Preview."
   },
   "benchmarks": [
    {
     "cpu": "Intel Core i5-12500H",
     "gpu": "NVIDIA GeForce RTX 3050 Laptop GPU",
     "fps": "≈40",
     "context": {
      "en": "Toolchain: MinGW-w64 GCC 15.2.0. A created/loaded world responds to movement around 40 FPS after reducing render distance; menus are about 60. Saving on quit and reloading world data are reported, with a clean exit. Audit success does not validate every stub; audio, driver version and full-session coverage are unknown. This retail Bedrock edition is separate from Preview.",
      "zh": "构建工具：MinGW-w64 GCC 15.2.0. 调低视距后，创建／载入的世界可移动，约 40 FPS，菜单约 60。来源记录退出存档与世界数据读写、正常退出；导入审计不证明所有 stub 正确，声音、驱动及完整测试时长未知。正式 Bedrock 版本与 Preview 分开。",
      "ar": "الأدوات: MinGW-w64 GCC 15.2.0. يستجيب عالم جديد أو محمّل بنحو 40 FPS بعد خفض المسافة؛ القائمة نحو 60. الحفظ والخروج النظيف موثقان. تدقيق الاستيراد لا يثبت كل stub؛ الصوت ونسخة التعريف ومدة كاملة مجهولة. Bedrock التجاري منفصل عن Preview.",
      "pt": "Ferramentas: MinGW-w64 GCC 15.2.0. Um mundo criado/carregado responde a cerca de 40 FPS após reduzir a distância; menus perto de 60. Há gravação e saída limpa. A auditoria não valida todos os stubs; som, versão do controlador e sessão completa desconhecidos. Bedrock comercial é distinto de Preview.",
      "de": "Werkzeuge: MinGW-w64 GCC 15.2.0. Eine erzeugte/geladene Welt reagiert mit etwa 40 FPS bei reduzierter Sichtweite; Menü etwa 60. Save und sauberer Ausstieg dokumentiert. Audit validiert nicht jeden Stub; Ton, Treiberversion und Sitzungslänge fehlen. Handels-Bedrock ist getrennt von Preview.",
      "fr": "Outils : MinGW-w64 GCC 15.2.0. Un monde créé/chargé répond vers 40 FPS après réduction de distance ; menus vers 60. Sauvegarde et sortie propre rapportées. L’audit ne valide pas tous les stubs ; son, pilote et durée complète inconnus. Bedrock commercial reste distinct de Preview.",
      "es": "Herramientas: MinGW-w64 GCC 15.2.0. Un mundo creado/cargado responde a unos 40 FPS tras reducir distancia; menús cerca de 60. Hay guardado y salida limpia. La auditoría no valida cada stub; sonido, versión del controlador y sesión completa desconocidos. Bedrock comercial es distinto de Preview."
     }
    }
   ],
   "media": []
  }
 ],
 "diablo-ii-resurrected": [
  {
   "id": "5146-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5146",
   "updated": "2026-10-14T17:33:02Z",
   "testDate": null,
   "build": "main 19e020a27 · APS5_HOST_IMPORT_MIB=16384",
   "os": "Ubuntu 26.10",
   "cpu": null,
   "gpu": "NVIDIA RTX 3080 Ti",
   "driver": "615.71.09",
   "version": "01.039.000",
   "patched": false,
   "summary": {
    "en": "Toolchain: GCC 15.3.0. Offline character creation reaches Rogue Encampment with world, HUD and sound. Two idle ten-second samples give about 4 FPS. Roughly one in five boots has a null-lookup crash; one run later faults in background HTTP. Online authentication fails. This main result is not an uninterrupted playthrough or a universal memory requirement.",
    "zh": "构建工具：GCC 15.3.0. 离线建角进入萝格营地，世界、HUD 与声音已有观察，两次十秒静止采样约 4 FPS。约五次启动一次空查询崩溃，另一次稍后在后台 HTTP 出错；联网认证失败。该 main 结果不是连续通关，也不是通用内存要求。",
    "ar": "الأدوات: GCC 15.3.0. يبلغ إنشاء شخصية دون شبكة المخيم بعالم وHUD وصوت. عينتان ثابتتان لعشر ثوانٍ نحو 4 FPS. تعطل بدء من كل خمس ومحاولة تتعطل لاحقاً في HTTP؛ المصادقة تفشل. ليس إكمالاً متصلاً أو متطلب ذاكرة عامّاً.",
    "pt": "Ferramentas: GCC 15.3.0. Criar personagem offline chega ao acampamento com mundo, HUD e som. Duas amostras de dez segundos dão perto de 4 FPS. Cerca de uma falha de arranque em cinco e outra em HTTP posterior; autenticação online falha. Não é conclusão contínua nem requisito geral de memória.",
    "de": "Werkzeuge: GCC 15.3.0. Offline-Charakterwahl erreicht Lager, Welt, HUD und Ton. Zwei stationäre Zehn-Sekunden-Proben ergeben etwa 4 FPS. Ungefähr jeder fünfte Boot crasht; ein späterer HTTP-Crash ist dokumentiert. Online-Anmeldung scheitert. Kein durchgehender Abschluss oder allgemeines Speicherminimum.",
    "fr": "Outils : GCC 15.3.0. La création hors ligne atteint le camp avec monde, HUD et son. Deux échantillons immobiles de dix secondes donnent environ 4 FPS. Environ un boot sur cinq plante et un autre plus tard en HTTP ; authentification en ligne échoue. Ce n’est ni fin continue ni prérequis mémoire général.",
    "es": "Herramientas: GCC 15.3.0. La creación offline alcanza el campamento con mundo, HUD y sonido. Dos muestras quietas de diez segundos dan unos 4 FPS. Cerca de uno de cinco inicios falla y otro después en HTTP; autenticación online falla. No es finalización continua ni requisito general de memoria."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 3080 Ti",
     "fps": "≈4",
     "context": {
      "en": "Toolchain: GCC 15.3.0. Offline character creation reaches Rogue Encampment with world, HUD and sound. Two idle ten-second samples give about 4 FPS. Roughly one in five boots has a null-lookup crash; one run later faults in background HTTP. Online authentication fails. This main result is not an uninterrupted playthrough or a universal memory requirement.",
      "zh": "构建工具：GCC 15.3.0. 离线建角进入萝格营地，世界、HUD 与声音已有观察，两次十秒静止采样约 4 FPS。约五次启动一次空查询崩溃，另一次稍后在后台 HTTP 出错；联网认证失败。该 main 结果不是连续通关，也不是通用内存要求。",
      "ar": "الأدوات: GCC 15.3.0. يبلغ إنشاء شخصية دون شبكة المخيم بعالم وHUD وصوت. عينتان ثابتتان لعشر ثوانٍ نحو 4 FPS. تعطل بدء من كل خمس ومحاولة تتعطل لاحقاً في HTTP؛ المصادقة تفشل. ليس إكمالاً متصلاً أو متطلب ذاكرة عامّاً.",
      "pt": "Ferramentas: GCC 15.3.0. Criar personagem offline chega ao acampamento com mundo, HUD e som. Duas amostras de dez segundos dão perto de 4 FPS. Cerca de uma falha de arranque em cinco e outra em HTTP posterior; autenticação online falha. Não é conclusão contínua nem requisito geral de memória.",
      "de": "Werkzeuge: GCC 15.3.0. Offline-Charakterwahl erreicht Lager, Welt, HUD und Ton. Zwei stationäre Zehn-Sekunden-Proben ergeben etwa 4 FPS. Ungefähr jeder fünfte Boot crasht; ein späterer HTTP-Crash ist dokumentiert. Online-Anmeldung scheitert. Kein durchgehender Abschluss oder allgemeines Speicherminimum.",
      "fr": "Outils : GCC 15.3.0. La création hors ligne atteint le camp avec monde, HUD et son. Deux échantillons immobiles de dix secondes donnent environ 4 FPS. Environ un boot sur cinq plante et un autre plus tard en HTTP ; authentification en ligne échoue. Ce n’est ni fin continue ni prérequis mémoire général.",
      "es": "Herramientas: GCC 15.3.0. La creación offline alcanza el campamento con mundo, HUD y sonido. Dos muestras quietas de diez segundos dan unos 4 FPS. Cerca de uno de cinco inicios falla y otro después en HTTP; autenticación online falla. No es finalización continua ni requisito general de memoria."
     }
    }
   ],
   "media": []
  }
 ],
 "stray": [
  {
   "id": "2461-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/2461#discussioncomment-18921800",
   "updated": "2026-10-14T10:33:32Z",
   "testDate": null,
   "build": "main eecf90953",
   "os": "CachyOS · kernel 7.2.9 · KDE Wayland",
   "cpu": null,
   "gpu": "NVIDIA RTX 3090",
   "driver": "615.78.08",
   "version": "01.005.000",
   "patched": false,
   "summary": {
    "en": "Gameplay renders correctly in a roughly four-minute check, and the next launch loads its save. The counter is measured while standing in one corner; the performance PR stack is a separate arm. Earlier brightness-only tests and other PPSA/GPU failures remain independent. Audio, complete traversal and long-term stability are unverified.",
    "zh": "约四分钟检查有正确游戏画面，下次启动能加载存档。计数取同一角落静止场景，性能 PR 栈作为独立比较组。较早亮度设置测试和其他 PPSA／显卡失败分别保留；声音、完整流程及长期稳定性未验证。",
    "ar": "يرسم اللعب صحيحاً في نحو أربع دقائق ويحمّل الحفظ في البدء التالي. القياس ثابت في زاوية، ومجموعة PR للأداء ذراع منفصل. اختبارات السطوع ومعرّفات وبطاقات أخرى مستقلة؛ الصوت والإكمال والثبات الطويل غير موثقة.",
    "pt": "Jogo correto durante cerca de quatro minutos e gravação carregada no arranque seguinte. O contador é medido parado num canto; a pilha de PR é um braço separado. Calibração antiga e outros PPSA/GPU ficam distintos. Som, percurso completo e estabilidade prolongada por verificar.",
    "de": "Korrektes Gameplay in etwa vier Minuten, Save beim nächsten Start geladen. Zähler an einer festen Ecke; Performance-PRs bilden einen separaten Arm. Frühere Helligkeitsfälle und andere PPSA/GPU bleiben getrennt. Ton, vollständiger Ablauf und Langzeitstabilität fehlen.",
    "fr": "Rendu correct durant environ quatre minutes et sauvegarde chargée au prochain lancement. Compteur immobile dans un coin ; pile de PR de performance distincte. Anciens réglages de luminosité et autres PPSA/GPU restent séparés. Son, parcours complet et stabilité longue non vérifiés.",
    "es": "Juego correcto durante unos cuatro minutos y guardado cargado al iniciar otra vez. El contador se mide quieto en una esquina; la pila de PR de rendimiento es un brazo aparte. Casos antiguos de brillo y otros PPSA/GPU separados. Sonido, recorrido completo y estabilidad larga sin verificar."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 3090",
     "fps": "≈12",
     "context": {
      "en": "Gameplay renders correctly in a roughly four-minute check, and the next launch loads its save. The counter is measured while standing in one corner; the performance PR stack is a separate arm. Earlier brightness-only tests and other PPSA/GPU failures remain independent. Audio, complete traversal and long-term stability are unverified.",
      "zh": "约四分钟检查有正确游戏画面，下次启动能加载存档。计数取同一角落静止场景，性能 PR 栈作为独立比较组。较早亮度设置测试和其他 PPSA／显卡失败分别保留；声音、完整流程及长期稳定性未验证。",
      "ar": "يرسم اللعب صحيحاً في نحو أربع دقائق ويحمّل الحفظ في البدء التالي. القياس ثابت في زاوية، ومجموعة PR للأداء ذراع منفصل. اختبارات السطوع ومعرّفات وبطاقات أخرى مستقلة؛ الصوت والإكمال والثبات الطويل غير موثقة.",
      "pt": "Jogo correto durante cerca de quatro minutos e gravação carregada no arranque seguinte. O contador é medido parado num canto; a pilha de PR é um braço separado. Calibração antiga e outros PPSA/GPU ficam distintos. Som, percurso completo e estabilidade prolongada por verificar.",
      "de": "Korrektes Gameplay in etwa vier Minuten, Save beim nächsten Start geladen. Zähler an einer festen Ecke; Performance-PRs bilden einen separaten Arm. Frühere Helligkeitsfälle und andere PPSA/GPU bleiben getrennt. Ton, vollständiger Ablauf und Langzeitstabilität fehlen.",
      "fr": "Rendu correct durant environ quatre minutes et sauvegarde chargée au prochain lancement. Compteur immobile dans un coin ; pile de PR de performance distincte. Anciens réglages de luminosité et autres PPSA/GPU restent séparés. Son, parcours complet et stabilité longue non vérifiés.",
      "es": "Juego correcto durante unos cuatro minutos y guardado cargado al iniciar otra vez. El contador se mide quieto en una esquina; la pila de PR de rendimiento es un brazo aparte. Casos antiguos de brillo y otros PPSA/GPU separados. Sonido, recorrido completo y estabilidad larga sin verificar."
     }
    }
   ],
   "media": []
  },
  {
   "id": "2461-linux-perf-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/2461#discussioncomment-18921800",
   "updated": "2026-10-14T10:33:32Z",
   "testDate": null,
   "build": "main eecf90953 + #5372/#5441/#5520/#5687",
   "os": "CachyOS · kernel 7.2.9 · KDE Wayland",
   "cpu": null,
   "gpu": "NVIDIA RTX 3090",
   "driver": "615.78.08",
   "version": "01.005.000",
   "patched": true,
   "summary": {
    "en": "Gameplay renders correctly in a roughly four-minute check, and the next launch loads its save. The counter is measured while standing in one corner; the performance PR stack is a separate arm. Earlier brightness-only tests and other PPSA/GPU failures remain independent. Audio, complete traversal and long-term stability are unverified.",
    "zh": "约四分钟检查有正确游戏画面，下次启动能加载存档。计数取同一角落静止场景，性能 PR 栈作为独立比较组。较早亮度设置测试和其他 PPSA／显卡失败分别保留；声音、完整流程及长期稳定性未验证。",
    "ar": "يرسم اللعب صحيحاً في نحو أربع دقائق ويحمّل الحفظ في البدء التالي. القياس ثابت في زاوية، ومجموعة PR للأداء ذراع منفصل. اختبارات السطوع ومعرّفات وبطاقات أخرى مستقلة؛ الصوت والإكمال والثبات الطويل غير موثقة.",
    "pt": "Jogo correto durante cerca de quatro minutos e gravação carregada no arranque seguinte. O contador é medido parado num canto; a pilha de PR é um braço separado. Calibração antiga e outros PPSA/GPU ficam distintos. Som, percurso completo e estabilidade prolongada por verificar.",
    "de": "Korrektes Gameplay in etwa vier Minuten, Save beim nächsten Start geladen. Zähler an einer festen Ecke; Performance-PRs bilden einen separaten Arm. Frühere Helligkeitsfälle und andere PPSA/GPU bleiben getrennt. Ton, vollständiger Ablauf und Langzeitstabilität fehlen.",
    "fr": "Rendu correct durant environ quatre minutes et sauvegarde chargée au prochain lancement. Compteur immobile dans un coin ; pile de PR de performance distincte. Anciens réglages de luminosité et autres PPSA/GPU restent séparés. Son, parcours complet et stabilité longue non vérifiés.",
    "es": "Juego correcto durante unos cuatro minutos y guardado cargado al iniciar otra vez. El contador se mide quieto en una esquina; la pila de PR de rendimiento es un brazo aparte. Casos antiguos de brillo y otros PPSA/GPU separados. Sonido, recorrido completo y estabilidad larga sin verificar."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 3090",
     "fps": "≈24",
     "context": {
      "en": "Gameplay renders correctly in a roughly four-minute check, and the next launch loads its save. The counter is measured while standing in one corner; the performance PR stack is a separate arm. Earlier brightness-only tests and other PPSA/GPU failures remain independent. Audio, complete traversal and long-term stability are unverified.",
      "zh": "约四分钟检查有正确游戏画面，下次启动能加载存档。计数取同一角落静止场景，性能 PR 栈作为独立比较组。较早亮度设置测试和其他 PPSA／显卡失败分别保留；声音、完整流程及长期稳定性未验证。",
      "ar": "يرسم اللعب صحيحاً في نحو أربع دقائق ويحمّل الحفظ في البدء التالي. القياس ثابت في زاوية، ومجموعة PR للأداء ذراع منفصل. اختبارات السطوع ومعرّفات وبطاقات أخرى مستقلة؛ الصوت والإكمال والثبات الطويل غير موثقة.",
      "pt": "Jogo correto durante cerca de quatro minutos e gravação carregada no arranque seguinte. O contador é medido parado num canto; a pilha de PR é um braço separado. Calibração antiga e outros PPSA/GPU ficam distintos. Som, percurso completo e estabilidade prolongada por verificar.",
      "de": "Korrektes Gameplay in etwa vier Minuten, Save beim nächsten Start geladen. Zähler an einer festen Ecke; Performance-PRs bilden einen separaten Arm. Frühere Helligkeitsfälle und andere PPSA/GPU bleiben getrennt. Ton, vollständiger Ablauf und Langzeitstabilität fehlen.",
      "fr": "Rendu correct durant environ quatre minutes et sauvegarde chargée au prochain lancement. Compteur immobile dans un coin ; pile de PR de performance distincte. Anciens réglages de luminosité et autres PPSA/GPU restent séparés. Son, parcours complet et stabilité longue non vérifiés.",
      "es": "Juego correcto durante unos cuatro minutos y guardado cargado al iniciar otra vez. El contador se mide quieto en una esquina; la pila de PR de rendimiento es un brazo aparte. Casos antiguos de brillo y otros PPSA/GPU separados. Sonido, recorrido completo y estabilidad larga sin verificar."
     }
    }
   ],
   "media": []
  },
  {
   "id": "5879-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5879",
   "updated": "2026-10-14T17:13:18Z",
   "testDate": null,
   "build": "main 066b58fa1",
   "os": "Windows 11",
   "cpu": null,
   "gpu": "NVIDIA RTX 5070",
   "driver": null,
   "version": null,
   "patched": false,
   "summary": {
    "en": "Toolchain: MinGW GCC 15 · Release. Brightness calibration accepts input, then first-level loading stops on an image descriptor used as a buffer. A locally empty buffer merely moves the refusal to another image mismatch. The later hardware probe is an API test, not a post-fix game rerun. No Windows gameplay or FPS is established.",
    "zh": "构建工具：MinGW GCC 15 · Release. 亮度校准可操作，首次关卡加载时因图像描述符被作为缓冲区使用而停止。本地改成空缓冲区只把拒绝移到另一图像错配；之后的硬件探针是 API 测试，不是修复后游戏复测。没有 Windows 游戏过程或 FPS 结论。",
    "ar": "الأدوات: MinGW GCC 15 · Release. تستجيب معايرة السطوع ثم يتوقف تحميل المستوى لوصف صورة كـ buffer. استخدام buffer فارغ محلياً ينقل الرفض فقط. اختبار العتاد اللاحق API لا إعادة تشغيل لعبة. لا لعب Windows أو FPS موثق.",
    "pt": "Ferramentas: MinGW GCC 15 · Release. A calibração responde, mas o nível para por descritor de imagem usado como buffer. Um buffer vazio local apenas muda a recusa. A sondagem de hardware posterior é teste API, não reteste do jogo. Sem jogo Windows ou FPS validados.",
    "de": "Werkzeuge: MinGW GCC 15 · Release. Helligkeitskalibrierung reagiert, Level-Laden stoppt an Bild-deskriptor als Buffer. Leerer lokaler Buffer verschiebt nur die Ablehnung. Späterer Hardware-Probe ist API-Test, kein Spiel-Retest. Windows-Gameplay/FPS fehlen.",
    "fr": "Outils : MinGW GCC 15 · Release. La calibration répond puis le niveau s’arrête sur un descripteur d’image lu comme buffer. Un buffer vide local déplace seulement le refus. La sonde matérielle ultérieure teste l’API, pas le jeu corrigé. Aucun gameplay/FPS Windows validé.",
    "es": "Herramientas: MinGW GCC 15 · Release. La calibración responde y el nivel para por descriptor de imagen leído como buffer. Un buffer local vacío solo mueve el rechazo. La sonda posterior prueba una API, no el juego corregido. Sin juego/FPS Windows verificados."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "stray-ppsa02101": [
  {
   "id": "5894-linux-review-20261015",
   "platform": "linux",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5894",
   "updated": "2026-10-14T17:13:21Z",
   "testDate": null,
   "build": "main 66f89476 + #5405/#5181/#5893 + local wave-layout and cache changes",
   "os": "Fedora 44",
   "cpu": null,
   "gpu": "Intel Arc · Meteor Lake integrated GPU",
   "driver": "Mesa 26.2.3 ANV",
   "version": null,
   "patched": true,
   "summary": {
    "en": "The opening cinematic advances but three runs stop after 490–710 seconds on a pixel-shader buffer descriptor. This is not a verified playable level. The proposed pixel-stage fix was not tested on this title; code inspection and compile/merge checks do not prove rendering.",
    "zh": "开场动画推进，但三次在 490–710 秒因像素着色器缓冲区描述符停止，不是可玩关卡。提议的像素阶段修复尚未在本游戏测试，代码阅读、编译或合并检查不能证明画面恢复。",
    "ar": "تتقدم المقدمة لكن ثلاث محاولات تتوقف بين 490–710 ثانية عند وصف buffer. ليس مستوى لعب موثقاً. إصلاح مرحلة البكسل المقترح لم يُختبر على اللعبة؛ القراءة والبناء والدمج لا تثبت الرسم.",
    "pt": "A introdução avança, mas três execuções param aos 490–710 s num descritor de buffer. Não é um nível jogável verificado. A proposta de fase píxel não foi testada aqui; inspeção, compilação e fusão não provam imagem.",
    "de": "Intro läuft, drei Versuche stoppen nach 490–710 s an einem Pixel-Bufferdeskriptor. Kein bestätigter spielbarer Level. Vorgeschlagener Pixelstage-Fix wurde hier nicht getestet; Code-, Build- und Mergeprüfung belegen keine Grafik.",
    "fr": "L’introduction avance, mais trois essais s’arrêtent à 490–710 s sur un descripteur de buffer. Aucun niveau jouable validé. Le correctif de stage pixel n’a pas été essayé ici ; lecture, build et fusion ne prouvent pas le rendu.",
    "es": "La introducción avanza, pero tres pruebas paran a 490–710 s por descriptor de buffer. No es un nivel jugable verificado. El arreglo de etapa píxel no se probó aquí; inspección, compilación e integración no prueban imagen."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "doom-homebrew": [
  {
   "id": "2475-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/2475#discussioncomment-18912212",
   "updated": "2026-10-14T00:32:28Z",
   "testDate": null,
   "build": "main 97445386f",
   "os": "Windows 11 Pro · 10.0.26200",
   "cpu": "Intel Core i9-14900K",
   "gpu": "NVIDIA RTX 5080",
   "driver": "32.0.16.1714",
   "version": "01.001.001 · PS5 DOOM homebrew v1.1.1",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. E1M1 movement, turning, shooting, health pickup and automap are checked with keyboard/mouse-mapped pad input. The game counter is 35 FPS, launcher 59.9 separately; AGC compute presentation stays active, without CPU-scaler fallback. Clean closing works. Audio was not listened to; later maps, saves and a physical controller remain untested.",
    "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：128 GB. E1M1 的移动、转向、射击、生命拾取及地图已核对，使用键鼠映射手柄操作。游戏计数 35 FPS、启动器 59.9 单独记录；AGC compute 呈现持续使用，没有 CPU scaler 回退。正常关闭有效；未听声音，后续地图、存档及实体手柄未测试。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 128 GB. تحققت حركة E1M1 والدوران وإطلاق النار والصحة والخريطة بإدخال لوحة/فأرة. اللعبة 35 FPS والمشغل 59.9 منفصلان؛ يستمر عرض AGC دون CPU scaler. الخروج نظيف. لم يُسمع الصوت؛ خرائط وحفظ وتحكم فعلي غير مختبرة.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. Movimento, rotação, disparo, saúde e mapa E1M1 verificados com teclado/rato mapeados. Contador de jogo 35 FPS, lançador 59,9 separado; apresentação AGC sem CPU scaler. Fecha normalmente. Som não ouvido; mapas posteriores, gravação e comando físico por testar.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. E1M1-Bewegung, Drehen, Schießen, Heilpickup und Karte mit Tastatur/Maus-Padmapping geprüft. Spielzähler 35 FPS, Launcher 59,9 separat; AGC ohne CPU-scaler. Sauberer Ausstieg. Ton nicht angehört; spätere Maps, Saves und echtes Pad fehlen.",
    "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 128 GB. Déplacement, rotation, tir, soin et carte E1M1 vérifiés au clavier/souris mappés. Compteur jeu 35 FPS, lanceur 59,9 séparé ; AGC sans CPU scaler. Fermeture propre. Son non écouté ; cartes suivantes, sauvegardes et manette physique non testées.",
    "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. Movimiento, giro, disparo, salud y mapa E1M1 verificados con teclado/ratón mapeados. Contador de juego 35 FPS, lanzador 59,9 aparte; AGC sin CPU scaler. Cierre limpio. Audio no escuchado; mapas posteriores, guardado y mando físico sin probar."
   },
   "benchmarks": [
    {
     "cpu": "Intel Core i9-14900K",
     "gpu": "NVIDIA RTX 5080",
     "fps": "35",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. E1M1 movement, turning, shooting, health pickup and automap are checked with keyboard/mouse-mapped pad input. The game counter is 35 FPS, launcher 59.9 separately; AGC compute presentation stays active, without CPU-scaler fallback. Clean closing works. Audio was not listened to; later maps, saves and a physical controller remain untested.",
      "zh": "构建工具：WinLibs GCC 15.2.0 r7 · Release. 内存：128 GB. E1M1 的移动、转向、射击、生命拾取及地图已核对，使用键鼠映射手柄操作。游戏计数 35 FPS、启动器 59.9 单独记录；AGC compute 呈现持续使用，没有 CPU scaler 回退。正常关闭有效；未听声音，后续地图、存档及实体手柄未测试。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 r7 · Release. الذاكرة: 128 GB. تحققت حركة E1M1 والدوران وإطلاق النار والصحة والخريطة بإدخال لوحة/فأرة. اللعبة 35 FPS والمشغل 59.9 منفصلان؛ يستمر عرض AGC دون CPU scaler. الخروج نظيف. لم يُسمع الصوت؛ خرائط وحفظ وتحكم فعلي غير مختبرة.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. Movimento, rotação, disparo, saúde e mapa E1M1 verificados com teclado/rato mapeados. Contador de jogo 35 FPS, lançador 59,9 separado; apresentação AGC sem CPU scaler. Fecha normalmente. Som não ouvido; mapas posteriores, gravação e comando físico por testar.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. E1M1-Bewegung, Drehen, Schießen, Heilpickup und Karte mit Tastatur/Maus-Padmapping geprüft. Spielzähler 35 FPS, Launcher 59,9 separat; AGC ohne CPU-scaler. Sauberer Ausstieg. Ton nicht angehört; spätere Maps, Saves und echtes Pad fehlen.",
      "fr": "Outils : WinLibs GCC 15.2.0 r7 · Release. Mémoire : 128 GB. Déplacement, rotation, tir, soin et carte E1M1 vérifiés au clavier/souris mappés. Compteur jeu 35 FPS, lanceur 59,9 séparé ; AGC sans CPU scaler. Fermeture propre. Son non écouté ; cartes suivantes, sauvegardes et manette physique non testées.",
      "es": "Herramientas: WinLibs GCC 15.2.0 r7 · Release. RAM: 128 GB. Movimiento, giro, disparo, salud y mapa E1M1 verificados con teclado/ratón mapeados. Contador de juego 35 FPS, lanzador 59,9 aparte; AGC sin CPU scaler. Cierre limpio. Audio no escuchado; mapas posteriores, guardado y mando físico sin probar."
     }
    }
   ],
   "media": []
  }
 ],
 "dreaming-sarah": [
  {
   "id": "5383-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5383#issuecomment-6173567108",
   "updated": "2026-10-14T16:50:34Z",
   "testDate": null,
   "build": "v0.1.2 a48c00660 · matching offline pair · LD_PRELOAD=libs/libSceMouse.prx",
   "os": "CachyOS · KDE X11",
   "cpu": null,
   "gpu": "NVIDIA GeForce MX230",
   "driver": "580.178.04",
   "version": null,
   "patched": false,
   "summary": {
    "en": "The matching release opens X11, starts a new game and responds to scripted pad input at a reported 26–58 FPS. This uses the Mouse library preload for the separate release NID collision. Content version, CPU, audio and completion are unknown; the closed display-backend issue alone would not establish gameplay.",
    "zh": "配套发行文件打开 X11，新游戏接受脚本手柄操作，据报 26–58 FPS；使用 Mouse 库 preload 绕过另一发行版 NID 冲突。内容版本、CPU、声音及通关未知，不能仅凭显示后端问题关闭判定游戏可运行。",
    "ar": "يفتح زوج الإصدار X11 ولعبة جديدة تستجيب لتحكم آلي بنحو 26–58 FPS. يحتاج preload لمكتبة Mouse بسبب تعارض NID منفصل. نسخة المحتوى وCPU والصوت والإكمال مجهولة؛ إغلاق مشكلة العرض وحده ليس دليلاً على اللعب.",
    "pt": "O par da versão abre X11 e inicia jogo com comando simulado a 26–58 FPS relatados. Usa preload de Mouse para outro conflito NID. Versão, CPU, som e conclusão desconhecidos; fechar o problema de imagem não bastaria para provar jogo.",
    "de": "Passendes Release öffnet X11, startet Spiel und reagiert auf geskriptetes Pad mit gemeldeten 26–58 FPS. Mouse-Preload umgeht eine separate NID-Kollision. Inhaltsversion, CPU, Ton und Abschluss fehlen; geschlossenes Backend-Issue allein beweist kein Gameplay.",
    "fr": "La paire de release ouvre X11 et démarre avec boutons simulés à 26–58 FPS rapportés. Preload Mouse pour un conflit NID distinct. Version du contenu, CPU, son et fin inconnus ; clôturer le backend seul ne prouverait pas le jeu.",
    "es": "El par de la versión abre X11 e inicia juego con mando simulado a 26–58 FPS reportados. Usa preload Mouse por otro conflicto NID. Versión, CPU, sonido y finalización desconocidos; cerrar el problema de pantalla solo no probaría juego."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA GeForce MX230",
     "fps": "26–58",
     "context": {
      "en": "The matching release opens X11, starts a new game and responds to scripted pad input at a reported 26–58 FPS. This uses the Mouse library preload for the separate release NID collision. Content version, CPU, audio and completion are unknown; the closed display-backend issue alone would not establish gameplay.",
      "zh": "配套发行文件打开 X11，新游戏接受脚本手柄操作，据报 26–58 FPS；使用 Mouse 库 preload 绕过另一发行版 NID 冲突。内容版本、CPU、声音及通关未知，不能仅凭显示后端问题关闭判定游戏可运行。",
      "ar": "يفتح زوج الإصدار X11 ولعبة جديدة تستجيب لتحكم آلي بنحو 26–58 FPS. يحتاج preload لمكتبة Mouse بسبب تعارض NID منفصل. نسخة المحتوى وCPU والصوت والإكمال مجهولة؛ إغلاق مشكلة العرض وحده ليس دليلاً على اللعب.",
      "pt": "O par da versão abre X11 e inicia jogo com comando simulado a 26–58 FPS relatados. Usa preload de Mouse para outro conflito NID. Versão, CPU, som e conclusão desconhecidos; fechar o problema de imagem não bastaria para provar jogo.",
      "de": "Passendes Release öffnet X11, startet Spiel und reagiert auf geskriptetes Pad mit gemeldeten 26–58 FPS. Mouse-Preload umgeht eine separate NID-Kollision. Inhaltsversion, CPU, Ton und Abschluss fehlen; geschlossenes Backend-Issue allein beweist kein Gameplay.",
      "fr": "La paire de release ouvre X11 et démarre avec boutons simulés à 26–58 FPS rapportés. Preload Mouse pour un conflit NID distinct. Version du contenu, CPU, son et fin inconnus ; clôturer le backend seul ne prouverait pas le jeu.",
      "es": "El par de la versión abre X11 e inicia juego con mando simulado a 26–58 FPS reportados. Usa preload Mouse por otro conflicto NID. Versión, CPU, sonido y finalización desconocidos; cerrar el problema de pantalla solo no probaría juego."
     }
    }
   ],
   "media": []
  }
 ],
 "gran-turismo-7": [
  {
   "id": "4697-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/4697#discussioncomment-18915774",
   "updated": "2026-10-14T07:11:26Z",
   "testDate": null,
   "build": "gjonn/ppsa01317-music-rally-wip · latest head unknown; earlier stated base 6741e90a1c + local stack",
   "os": "Windows 11 Pro · 26220",
   "cpu": null,
   "gpu": "NVIDIA RTX 5090 Laptop GPU",
   "driver": "616.92",
   "version": "01.710.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: MinGW GCC 15.2 · Release. The updated local branch reports about 1.8 FPS while driving Music Rally without profiling; 2.3 FPS is a separate stationary profiled comparison. Garage 16–18 and song list 60 are other scenes. Minimap corruption, boot/device-loss and exit crashes remain. The changed branch head is unrecorded; no clean-main, campaign or completion claim follows.",
    "zh": "构建工具：MinGW GCC 15.2 · Release. 更新的本地分支报告 Music Rally 驾驶约 1.8 FPS，未开分析；2.3 FPS 属另一静止、带分析的比较。车库 16–18 和歌曲列表 60 是不同场景。小地图损坏、启动／设备丢失及退出崩溃仍在；新分支 head 未记录，不证明原始 main、战役或通关。",
    "ar": "الأدوات: MinGW GCC 15.2 · Release. الفرع المحلي المحدث يسجل نحو 1.8 FPS أثناء القيادة دون تشخيص؛ 2.3 FPS قياس ثابت مشخّص منفصل. المرآب 16–18 وقائمة الأغاني 60 مشاهد أخرى. فساد الخريطة وأعطال بدء/جهاز/خروج باقية. رأس الفرع غير مسجل؛ لا main أصلي أو حملة أو إكمال.",
    "pt": "Ferramentas: MinGW GCC 15.2 · Release. O ramo local atualizado relata 1,8 FPS a conduzir sem diagnóstico; 2,3 FPS é comparação parada com perfilado. Garagem 16–18 e músicas 60 são cenas distintas. Minimap e falhas persistem. O head novo não foi registado; não prova main, campanha ou conclusão.",
    "de": "Werkzeuge: MinGW GCC 15.2 · Release. Aktualisierter lokaler Branch meldet beim Fahren etwa 1,8 FPS ohne Profiling; 2,3 FPS gehört zur stationären Profiling-Probe. Garage 16–18 und Songliste 60 sind andere Szenen. Minimap-, Boot-, Device-/Exitfehler bleiben. Neuer Head fehlt; kein main-, Kampagnen- oder Abschlussnachweis.",
    "fr": "Outils : MinGW GCC 15.2 · Release. Le fork actualisé rapporte 1,8 FPS en conduite sans profilage ; 2,3 FPS est une mesure immobile profilée. Garage 16–18 et liste musicale 60 sont distincts. Minicarte et crashes persistent. Le nouveau head n’est pas enregistré ; aucun main seul, campagne ou fin établi.",
    "es": "Herramientas: MinGW GCC 15.2 · Release. El fork actualizado reporta 1,8 FPS al conducir sin perfilado; 2,3 FPS es otra medición quieta perfilada. Garaje 16–18 y canciones 60 son escenas distintas. Persisten minimapa y crashes. El head nuevo no se registró; no prueba main puro, campaña ni finalización."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 5090 Laptop GPU",
     "fps": "≈1.8",
     "context": {
      "en": "Toolchain: MinGW GCC 15.2 · Release. The updated local branch reports about 1.8 FPS while driving Music Rally without profiling; 2.3 FPS is a separate stationary profiled comparison. Garage 16–18 and song list 60 are other scenes. Minimap corruption, boot/device-loss and exit crashes remain. The changed branch head is unrecorded; no clean-main, campaign or completion claim follows.",
      "zh": "构建工具：MinGW GCC 15.2 · Release. 更新的本地分支报告 Music Rally 驾驶约 1.8 FPS，未开分析；2.3 FPS 属另一静止、带分析的比较。车库 16–18 和歌曲列表 60 是不同场景。小地图损坏、启动／设备丢失及退出崩溃仍在；新分支 head 未记录，不证明原始 main、战役或通关。",
      "ar": "الأدوات: MinGW GCC 15.2 · Release. الفرع المحلي المحدث يسجل نحو 1.8 FPS أثناء القيادة دون تشخيص؛ 2.3 FPS قياس ثابت مشخّص منفصل. المرآب 16–18 وقائمة الأغاني 60 مشاهد أخرى. فساد الخريطة وأعطال بدء/جهاز/خروج باقية. رأس الفرع غير مسجل؛ لا main أصلي أو حملة أو إكمال.",
      "pt": "Ferramentas: MinGW GCC 15.2 · Release. O ramo local atualizado relata 1,8 FPS a conduzir sem diagnóstico; 2,3 FPS é comparação parada com perfilado. Garagem 16–18 e músicas 60 são cenas distintas. Minimap e falhas persistem. O head novo não foi registado; não prova main, campanha ou conclusão.",
      "de": "Werkzeuge: MinGW GCC 15.2 · Release. Aktualisierter lokaler Branch meldet beim Fahren etwa 1,8 FPS ohne Profiling; 2,3 FPS gehört zur stationären Profiling-Probe. Garage 16–18 und Songliste 60 sind andere Szenen. Minimap-, Boot-, Device-/Exitfehler bleiben. Neuer Head fehlt; kein main-, Kampagnen- oder Abschlussnachweis.",
      "fr": "Outils : MinGW GCC 15.2 · Release. Le fork actualisé rapporte 1,8 FPS en conduite sans profilage ; 2,3 FPS est une mesure immobile profilée. Garage 16–18 et liste musicale 60 sont distincts. Minicarte et crashes persistent. Le nouveau head n’est pas enregistré ; aucun main seul, campagne ou fin établi.",
      "es": "Herramientas: MinGW GCC 15.2 · Release. El fork actualizado reporta 1,8 FPS al conducir sin perfilado; 2,3 FPS es otra medición quieta perfilada. Garaje 16–18 y canciones 60 son escenas distintas. Persisten minimapa y crashes. El head nuevo no se registró; no prueba main puro, campaña ni finalización."
     }
    }
   ],
   "media": [
    "https://github.com/user-attachments/assets/68e2c5fa-0b78-4cc7-920c-ffd044e72e83"
   ]
  }
 ],
 "the-last-of-us-part-ii-remastered": [
  {
   "id": "5468-windows-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5468",
   "updated": "2026-10-13T20:34:55Z",
   "testDate": "2026-10-13",
   "build": "main dacd78525e537a779682032c0ace7f7af120af05 + #3897 0a91eb31a + #3925 35cf2fd09; #3965 not included",
   "os": "Windows 11 Pro x64 · 26300",
   "cpu": null,
   "gpu": "NVIDIA RTX 3060 Laptop GPU",
   "driver": "617.14",
   "version": "01.002.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 · Release · GDB 17.1. The paired HTTP2-library change passes offline send/wait, then reaches a null read in guest code. Instrumentation records zero VideoOut open/flip calls, so no game image, FPS, audio or input is established. The proposed low-stack fix was not included or tested; later main cannot replace this recorded run.",
    "zh": "构建工具：WinLibs GCC 15.2.0 · Release · GDB 17.1. 配对比较中仅改变 HTTP2 库，离线发送／等待通过后仍在游戏代码空读取。追踪记录 VideoOut open／flip 为零，没有游戏画面、FPS、声音或操作结论；提议的低栈修复未包含、未测试，不能换成后续 main 的结果。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 · Release · GDB 17.1. يمر تغيير HTTP2 وحده بالإرسال والانتظار دون شبكة ثم يصل لقراءة null. لا نداء VideoOut open/flip، فلا صورة أو FPS أو صوت أو تحكم. إصلاح المكدس المقترح غير مشمول أو مختبر؛ main اللاحق لا يستبدل هذا التشغيل.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release · GDB 17.1. A alteração isolada de HTTP2 passa envio/espera offline e chega a leitura nula. Zero chamadas VideoOut open/flip: sem imagem, FPS, som ou controlo. A correção de pilha proposta não foi incluída ou testada; main posterior não substitui este teste.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release · GDB 17.1. Nur HTTP2 geändert: Offline-Senden/Warten passiert, dann Nullread im Gast. VideoOut open/flip bleiben null; Bild, FPS, Ton und Steuerung fehlen. Vorgeschlagener Stackfix ungetestet und nicht enthalten; späteres main ersetzt diesen Lauf nicht.",
    "fr": "Outils : WinLibs GCC 15.2.0 · Release · GDB 17.1. HTTP2 seul passe envoi/attente hors ligne puis atteint une lecture nulle. Zéro appel VideoOut open/flip : aucune image, FPS, son ou contrôle établi. Le correctif de pile proposé est absent et non testé ; main ultérieur ne remplace pas cet essai.",
    "es": "Herramientas: WinLibs GCC 15.2.0 · Release · GDB 17.1. Solo HTTP2 cambia: supera envío/espera offline y llega a lectura nula. Cero llamadas VideoOut open/flip: sin imagen, FPS, sonido ni control. El arreglo de pila propuesto no se incluyó ni probó; main posterior no sustituye este ensayo."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "fifa-21": [
  {
   "id": "5954-windows-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5954",
   "updated": "2026-10-14T17:24:02Z",
   "testDate": null,
   "build": null,
   "os": "Windows",
   "cpu": null,
   "gpu": null,
   "driver": null,
   "version": null,
   "patched": null,
   "summary": {
    "en": "The PowerShell launch fails on an unresolved Audio3d import, before any reviewed game result. Build, patch state, content version, hardware and driver were not supplied. The library list does not establish a working runtime or frame rate.",
    "zh": "PowerShell 启动在 Audio3d 未解析导入上失败，没有已复核游戏结果；未提供构建、补丁、内容版本、硬件和驱动，库文件列表不能证明运行环境可用或帧数。",
    "ar": "يفشل بدء PowerShell عند استيراد Audio3d دون نتيجة لعبة موثقة. البناء والتعديلات والنسخة والعتاد والتعريف مجهولة. قائمة المكتبات لا تثبت تشغيلها أو FPS.",
    "pt": "PowerShell falha num import Audio3d, sem resultado de jogo revisto. Build, alterações, versão, equipamento e controlador não fornecidos. A lista de bibliotecas não prova funcionamento ou FPS.",
    "de": "PowerShell-Start scheitert an Audio3d-Import, ohne geprüften Spielbefund. Build, Patches, Version, Hardware und Treiber fehlen. Eine Bibliotheksliste beweist keine Laufzeit oder FPS.",
    "fr": "Le lancement PowerShell échoue sur un import Audio3d, sans résultat de jeu vérifié. Build, patches, version, matériel et pilote absents. La liste de bibliothèques ne prouve ni fonctionnement ni FPS.",
    "es": "PowerShell falla en un import Audio3d, sin resultado de juego revisado. Faltan build, cambios, versión, hardware y controlador. La lista de bibliotecas no prueba funcionamiento ni FPS."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "lies-of-p": [
  {
   "id": "5983-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5983",
   "updated": "2026-10-14T18:44:27Z",
   "testDate": null,
   "build": "main a453108cf",
   "os": "Windows 11",
   "cpu": null,
   "gpu": "NVIDIA RTX 5070",
   "driver": null,
   "version": null,
   "patched": false,
   "summary": {
    "en": "Toolchain: MinGW GCC 15 · Release. The logo and loading-tip screen appear, then captures remain identical through a fifteen-minute run. Increasing the GPU wait timeout removes two early timeouts but not the freeze. The missing completion or exact cause has not been identified; no controllable level, audio or FPS is established.",
    "zh": "构建工具：MinGW GCC 15 · Release. 标志和加载提示出现后，十五分钟运行的多次抓图完全相同。提高 GPU 等待上限消除两次早期超时，却没有解除停滞；尚未定位缺失的完成事件或原因，没有可操作关卡、声音或 FPS 结论。",
    "ar": "الأدوات: MinGW GCC 15 · Release. تظهر العلامة وشاشة التحميل ثم تبقى الصور متطابقة خلال 15 دقيقة. زيادة مهلة GPU تزيل انتظارين مبكرين لا التجمّد. السبب أو الإكمال المفقود غير محدد؛ لا مستوى متحكم به أو صوت أو FPS.",
    "pt": "Ferramentas: MinGW GCC 15 · Release. Logótipo e dica de carregamento aparecem; as capturas ficam iguais durante quinze minutos. Aumentar a espera GPU elimina dois timeouts, não a paragem. Causa e conclusão em falta desconhecidas; sem nível controlável, som ou FPS validados.",
    "de": "Werkzeuge: MinGW GCC 15 · Release. Logo und Ladehinweis erscheinen, Captures bleiben fünfzehn Minuten identisch. Höheres GPU-Waitlimit entfernt zwei frühe Timeouts, nicht den Stillstand. Fehlendes Ereignis/Ursache unbekannt; steuerbarer Level, Ton und FPS fehlen.",
    "fr": "Outils : MinGW GCC 15 · Release. Logo et conseil de chargement apparaissent, puis captures identiques durant quinze minutes. Allonger l’attente GPU supprime deux timeouts, pas le gel. Cause/achèvement manquant inconnus ; aucun niveau contrôlable, son ou FPS établi.",
    "es": "Herramientas: MinGW GCC 15 · Release. Aparecen logo y consejo de carga; las capturas quedan idénticas durante quince minutos. Aumentar la espera GPU elimina dos timeouts, no el bloqueo. Causa/compleción faltante desconocidas; sin nivel controlable, sonido ni FPS verificados."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "ghostrunner": [
  {
   "id": "5951-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5951",
   "updated": "2026-10-14T18:15:11Z",
   "testDate": null,
   "build": "main a453108cf",
   "os": "Windows 11",
   "cpu": null,
   "gpu": "NVIDIA RTX 5070",
   "driver": null,
   "version": null,
   "patched": false,
   "summary": {
    "en": "Toolchain: MinGW GCC 15 · Release. Two startup runs lose the Vulkan device around 144–147 seconds. Both top- and bottom-of-pipe checkpoints are reached for the recorded compute program, so the trace does not prove that program hangs. No reviewed gameplay image, FPS or specific culprit is established.",
    "zh": "构建工具：MinGW GCC 15 · Release. 两次启动于约 144–147 秒丢失 Vulkan 设备；记录的计算程序到达管线前、后检查点，因此追踪不能证明该程序挂起。没有已复核游戏画面、FPS 或明确故障程序结论。",
    "ar": "الأدوات: MinGW GCC 15 · Release. تفقد تجربتا بدء جهاز Vulkan قرب 144–147 ثانية. يمر البرنامج بنقطتي أعلى وأسفل pipeline، فلا يثبت التتبع أنه عالق. لا صورة لعب أو FPS أو متسبب محدد موثق.",
    "pt": "Ferramentas: MinGW GCC 15 · Release. Duas execuções perdem o dispositivo Vulkan aos 144–147 s. O programa passa checkpoints de topo e fim, pelo que não está provado que bloqueia. Sem imagem de jogo, FPS ou responsável específico validados.",
    "de": "Werkzeuge: MinGW GCC 15 · Release. Zwei Startläufe verlieren Vulkan nach 144–147 s. Das Computeprogramm erreicht Top- und Bottom-Checkpoints; der Trace beweist dessen Hängen nicht. Gameplaybild, FPS und konkrete Ursache fehlen.",
    "fr": "Outils : MinGW GCC 15 · Release. Deux démarrages perdent Vulkan à 144–147 s. Le programme atteint les checkpoints haut et bas ; la trace ne prouve pas son blocage. Aucune image de jeu, FPS ou cause précise établie.",
    "es": "Herramientas: MinGW GCC 15 · Release. Dos inicios pierden Vulkan a 144–147 s. El programa alcanza checkpoints de principio y final; la traza no prueba que se cuelgue. Sin imagen de juego, FPS ni responsable concreto verificados."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "guardians-of-the-galaxy": [
  {
   "id": "6031-linux-review-20261015",
   "platform": "linux",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/6031",
   "updated": "2026-10-14T19:44:22Z",
   "testDate": null,
   "build": "main bebff8b0e",
   "os": "CachyOS",
   "cpu": null,
   "gpu": "NVIDIA RTX 4090",
   "driver": null,
   "version": "01.006.000",
   "patched": false,
   "summary": {
    "en": "The language picker opens, but English and several other text languages are absent in three baseline runs. A separate local all-bits optional-chunk experiment restores them in one run. The mask/type semantics are unmeasured; progression past the picker is not verified gameplay or a universal installation fix.",
    "zh": "三次基线能打开语言选择，却缺少英语等文本语言；独立本地实验将可选 chunk 位全置后，一次恢复这些语言。位布局与 type 语义未实测，越过选择器不代表已验证游戏过程或通用安装修复。",
    "ar": "يفتح منتقي اللغة لكن الإنجليزية ولغات نص أخرى غائبة في ثلاث تجارب. تجربة محلية منفصلة تضبط بتات chunks فتستعيدها مرة واحدة. المعاني غير مقاسة؛ تجاوز المنتقي ليس لعباً أو إصلاح تثبيت عاماً.",
    "pt": "O seletor abre, mas falta inglês e outros textos em três bases. Uma experiência local com todos os bits de chunks repõe-nos numa execução. Semântica não medida; passar o seletor não prova jogo ou correção geral de instalação.",
    "de": "Sprachwahl öffnet, Englisch und weitere Texte fehlen in drei Basisläufen. Separater lokaler All-Bits-Chunk-Versuch stellt sie einmal wieder her. Semantik ungemessen; Weiterkommen beweist kein Gameplay oder allgemeine Installationskorrektur.",
    "fr": "Le sélecteur s’ouvre mais anglais et autres textes manquent dans trois essais de base. Un test local de tous les bits chunks les restaure une fois. Sémantique non mesurée ; franchir le sélecteur ne prouve ni jeu ni correctif général d’installation.",
    "es": "El selector abre pero faltan inglés y otros textos en tres bases. Un experimento local con todos los bits chunks los recupera una vez. Semántica sin medir; pasar el selector no prueba juego ni arreglo general de instalación."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "hello-neighbor-2": [
  {
   "id": "5529-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5529",
   "updated": "2026-10-14T00:44:01Z",
   "testDate": null,
   "build": "dirty 307767675298 · control before #4698; later windows use another unstated head",
   "os": "Windows 10 · 10.0.19045",
   "cpu": null,
   "gpu": "AMD Radeon RX 9070 XT",
   "driver": "AMD proprietary 26.9.2 · LLPC",
   "version": null,
   "patched": true,
   "summary": {
    "en": "RAM: 32 GiB. The internal Continue/gameplay scene remains black with a crosshair and coloured blocks. The old control presents 79 frames in 30.3 seconds; later changed builds differ. No usable world rendering, input or completion is established. Import-registration profiling and the unplayed candidate branch do not prove a compatibility fix.",
    "zh": "内存：32 GiB. 内部 Continue／游戏场景仍为黑底、准星及彩色块。旧控制组 30.3 秒呈现 79 帧，后续改动构建另算；没有可用世界画面、操作或通关证据。导入注册分析及尚未跑游戏的候选分支不能证明兼容修复。",
    "ar": "الذاكرة: 32 GiB. المشهد الداخلي بعد Continue أسود مع مؤشر وكتل ملونة. التحكم القديم 79 إطاراً في 30.3 ثانية؛ الأبنية اللاحقة مختلفة. لا عالم صالح أو إدخال أو إكمال. التشخيص ومرشح لم يُلعب لا يثبتان إصلاح توافق.",
    "pt": "RAM: 32 GiB. A cena interna após Continue é negra, com mira e blocos. O controlo antigo apresenta 79 imagens em 30,3 s; builds seguintes diferem. Não há mundo utilizável, controlo ou conclusão demonstrados. Perfis e um candidato não jogado não provam compatibilidade.",
    "de": "RAM: 32 GiB. Interne Continue-Szene bleibt schwarz mit Fadenkreuz/Farbblöcken. Alter Kontrolllauf: 79 Präsentationen in 30,3 s; spätere Builds sind verschieden. Nutzbare Welt, Eingabe und Abschluss fehlen. Profiling und ungespielter Kandidat beweisen keinen Kompatibilitätsfix.",
    "fr": "Mémoire : 32 GiB. La scène interne après Continue reste noire avec viseur/blocs. Ancien contrôle : 79 images en 30,3 s ; builds suivants distincts. Aucun monde utilisable, contrôle ou fin établis. Profilage et candidat non joué ne prouvent pas un correctif de compatibilité.",
    "es": "RAM: 32 GiB. La escena interna tras Continue queda negra con mira/bloques. Control antiguo: 79 imágenes en 30,3 s; builds posteriores diferentes. No prueba mundo utilizable, control ni finalización. Perfilado y candidato no jugado no prueban compatibilidad."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "steins-gate-reboot": [
  {
   "id": "5677-linux-review-20261015",
   "platform": "linux",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5677",
   "updated": "2026-10-14T13:31:54Z",
   "testDate": null,
   "build": "main 75690a117 + #5660",
   "os": "Linux",
   "cpu": null,
   "gpu": null,
   "driver": null,
   "version": null,
   "patched": true,
   "summary": {
    "en": "The title-screen button reaches an unsupported HE-VAG waveform path and its game-start sound is lost. Region, content version and hardware are not provided. Draft #5797 adds synthetic decoder tests, with no reported title playback retest; it is not new working audio or gameplay evidence.",
    "zh": "标题按键触发未支持的 HE-VAG 波形路径，游戏开始音效丢失；地区、内容版本和硬件未提供。草案 #5797 增加合成解码测试，没有本游戏回放复测，不能当作声音或游戏过程已经可用。",
    "ar": "يضيع صوت بدء اللعبة عند زر العنوان بسبب مسار HE-VAG غير مدعوم. المنطقة والنسخة والعتاد مجهولة. يضيف مسودة #5797 اختبارات اصطناعية دون إعادة صوت اللعبة؛ ليس دليلاً على صوت أو لعب جديد.",
    "pt": "O botão do título perde o som por um caminho HE-VAG não suportado. Região, versão e equipamento não fornecidos. O draft #5797 acrescenta testes sintéticos sem retestar o som do título; não prova áudio ou jogo novo.",
    "de": "Titelknopf verliert Startton wegen ununterstütztem HE-VAG. Region, Version und Hardware fehlen. Draft #5797 ergänzt synthetische Tests ohne Titel-Audioretest; kein neuer Ton-/Gameplaynachweis.",
    "fr": "Le bouton du titre perd le son sur un chemin HE-VAG non pris en charge. Région, version et matériel inconnus. Draft #5797 ajoute des tests synthétiques sans retester l’audio du titre ; aucune nouvelle preuve de son ou jeu.",
    "es": "El botón del título pierde sonido por una ruta HE-VAG no soportada. Región, versión y hardware desconocidos. El borrador #5797 añade pruebas sintéticas sin repetir audio del título; no demuestra nuevo sonido ni juego."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "resonance-plague-tale-legacy": [
  {
   "id": "5922-windows-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5922",
   "updated": "2026-10-14T15:56:18Z",
   "testDate": null,
   "build": null,
   "os": "Windows",
   "cpu": null,
   "gpu": null,
   "driver": null,
   "version": null,
   "patched": null,
   "summary": {
    "en": "The startup series still ends at sceMouseResetAbsolutePosition; earlier export fixes being merged does not produce a game frame. The latest exact main revision, content version and hardware are unknown. The unknown call remains a throwing stub; no signature or successful later stage is invented.",
    "zh": "启动系列仍停在 sceMouseResetAbsolutePosition；较早导出修复合入不等于产生游戏画面。最新 main 提交、内容版本及硬件未知，该未明确函数仍为抛错 stub，不编造签名或后续成功阶段。",
    "ar": "ينتهي البدء عند sceMouseResetAbsolutePosition؛ دمج الصادرات القديمة ليس إطار لعبة. التزام main والنسخة والعتاد مجهولة. النداء المجهول ما زال stub يرمي؛ لا توقيع أو مرحلة ناجحة مختلقة.",
    "pt": "O arranque continua a parar em sceMouseResetAbsolutePosition; exports integrados não criam uma imagem. Revisão main, versão e equipamento desconhecidos. A função continua um stub que lança erro; sem assinatura ou etapa posterior inventadas.",
    "de": "Startup endet weiterhin an sceMouseResetAbsolutePosition; gemergte Exporte sind kein Spielbild. Exakter main-Stand, Version und Hardware fehlen. Unbekannter Aufruf bleibt werfender Stub; keine erfundene Signatur oder spätere Erfolgsphase.",
    "fr": "Le démarrage finit toujours sur sceMouseResetAbsolutePosition ; exports fusionnés ne donnent pas une image. Révision main, version et matériel inconnus. Cet appel reste un stub qui lève ; aucune signature ou réussite ultérieure inventée.",
    "es": "El inicio sigue parando en sceMouseResetAbsolutePosition; exports integrados no producen imagen. Revisión main, versión y hardware desconocidos. La llamada sigue siendo stub que lanza; no se inventan firma ni etapa posterior exitosa."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "phasmophobia": [
  {
   "id": "4680-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/4680",
   "updated": "2026-10-14T17:19:24Z",
   "testDate": null,
   "build": "bubblegg/phasmophobia-port · base cee9841b6 + local stack; exact fork head unreported",
   "os": "Windows 11",
   "cpu": null,
   "gpu": "NVIDIA RTX 5070 Ti",
   "driver": null,
   "version": null,
   "patched": true,
   "summary": {
    "en": "The fork reaches a contract and returns to the lobby, loads saves and uses the default microphone for voice recognition. Reported counters are 32–33 FPS in the lobby and 12–12.5 in the training truck. A VR module is excluded and local loader, GC, audio/network and graphics changes remain. Current main was not rerun to identify its first stop.",
    "zh": "分支能进入任务并回大厅、载入存档和用默认麦克风识别语音；计数为大厅 32–33、训练卡车 12–12.5 FPS。排除 VR 模块，仍有本地加载器、GC、音频／网络和图形改动；未复测当前 main 的首个停止点。",
    "ar": "يصل الفرع لعقد ثم الردهة ويحمل الحفظ والتعرف الصوتي. عدادات 32–33 FPS في الردهة و12–12.5 بالشاحنة. وحدة VR مستبعدة وتغييرات تحميل وGC وصوت وشبكة ورسم باقية؛ main الحالي لم يُعد تشغيله لتحديد أول عطل.",
    "pt": "O fork joga um contrato, regressa ao átrio, carrega gravações e reconhece voz. Contadores 32–33 FPS no átrio e 12–12,5 no camião. Exclui VR e mantém alterações de loader, GC, áudio/rede e imagem. Não foi repetido main atual para identificar a primeira paragem.",
    "de": "Fork erreicht Auftrag und Lobby, lädt Saves und erkennt Mikrofonstimme. Zähler 32–33 FPS in Lobby, 12–12,5 im Trainingstruck. VR-Modul ausgeschlossen, lokale Loader-/GC-/Audio-/Netz-/Grafikänderungen bleiben. Aktuelles main wurde nicht zur ersten Fehlerstelle getestet.",
    "fr": "Le fork fait un contrat, revient au lobby, charge les saves et reconnaît la voix. Compteurs 32–33 FPS au lobby, 12–12,5 dans le camion. Module VR exclu et changements locaux loader/GC/audio/réseau/rendu maintenus. main actuel non retesté jusqu’au premier arrêt.",
    "es": "El fork juega un contrato, vuelve al lobby, carga guardados y reconoce voz. Contadores 32–33 FPS en lobby, 12–12,5 en camión. Excluye VR y mantiene cambios de loader/GC/audio/red/gráficos. No se repitió main actual para identificar su primer bloqueo."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 5070 Ti",
     "fps": "12–12.5",
     "context": {
      "en": "The fork reaches a contract and returns to the lobby, loads saves and uses the default microphone for voice recognition. Reported counters are 32–33 FPS in the lobby and 12–12.5 in the training truck. A VR module is excluded and local loader, GC, audio/network and graphics changes remain. Current main was not rerun to identify its first stop.",
      "zh": "分支能进入任务并回大厅、载入存档和用默认麦克风识别语音；计数为大厅 32–33、训练卡车 12–12.5 FPS。排除 VR 模块，仍有本地加载器、GC、音频／网络和图形改动；未复测当前 main 的首个停止点。",
      "ar": "يصل الفرع لعقد ثم الردهة ويحمل الحفظ والتعرف الصوتي. عدادات 32–33 FPS في الردهة و12–12.5 بالشاحنة. وحدة VR مستبعدة وتغييرات تحميل وGC وصوت وشبكة ورسم باقية؛ main الحالي لم يُعد تشغيله لتحديد أول عطل.",
      "pt": "O fork joga um contrato, regressa ao átrio, carrega gravações e reconhece voz. Contadores 32–33 FPS no átrio e 12–12,5 no camião. Exclui VR e mantém alterações de loader, GC, áudio/rede e imagem. Não foi repetido main atual para identificar a primeira paragem.",
      "de": "Fork erreicht Auftrag und Lobby, lädt Saves und erkennt Mikrofonstimme. Zähler 32–33 FPS in Lobby, 12–12,5 im Trainingstruck. VR-Modul ausgeschlossen, lokale Loader-/GC-/Audio-/Netz-/Grafikänderungen bleiben. Aktuelles main wurde nicht zur ersten Fehlerstelle getestet.",
      "fr": "Le fork fait un contrat, revient au lobby, charge les saves et reconnaît la voix. Compteurs 32–33 FPS au lobby, 12–12,5 dans le camion. Module VR exclu et changements locaux loader/GC/audio/réseau/rendu maintenus. main actuel non retesté jusqu’au premier arrêt.",
      "es": "El fork juega un contrato, vuelve al lobby, carga guardados y reconoce voz. Contadores 32–33 FPS en lobby, 12–12,5 en camión. Excluye VR y mantiene cambios de loader/GC/audio/red/gráficos. No se repitió main actual para identificar su primer bloqueo."
     }
    }
   ],
   "media": []
  }
 ],
 "sonic-superstars": [
  {
   "id": "5934-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5934",
   "updated": "2026-10-14T18:45:39Z",
   "testDate": null,
   "build": "main 5a6ad0ed3 + #5865/#5375/#5456/#5882/#4820/#5445 + local Z64KBX footprint",
   "os": "Windows 11",
   "cpu": null,
   "gpu": "AMD Radeon RX 5700 XT",
   "driver": null,
   "version": null,
   "patched": true,
   "summary": {
    "en": "Toolchain: MinGW GCC 15 · Release. Stages and respawns are reached, but repeated deaths can crash the guest allocator with texel-like heap corruption; other runs stop when reused MSAA memory is guarded. The writer and synchronization cause remain unproven. A later synthetic ordering test is not this title’s fix or retest. No FPS, completion or stable-play claim is established.",
    "zh": "构建工具：MinGW GCC 15 · Release. 到达关卡及复活过程，但多次死亡后可能发生类似像素数据覆盖堆元数据的分配器崩溃；其他运行在复用 MSAA 内存上停止。写入者和同步原因未确定，之后的合成时序测试不是本游戏修复或复测。没有 FPS、通关或稳定可玩结论。",
    "ar": "الأدوات: MinGW GCC 15 · Release. تبلغ المراحل وإعادة الظهور، لكن الموت المتكرر قد يفسد heap ويتعطل المخصص؛ تجارب أخرى ترفض ذاكرة MSAA المعاد استخدامها. الكاتب والتزامن غير مثبتين. الاختبار الاصطناعي اللاحق ليس إصلاح هذه اللعبة. لا FPS أو إكمال أو ثبات موثق.",
    "pt": "Ferramentas: MinGW GCC 15 · Release. Chega a níveis e reaparecimentos, mas mortes repetidas podem corromper o heap e falhar; outras execuções param em memória MSAA reutilizada. Escritor e sincronização não provados. O teste sintético posterior não é correção ou reteste deste jogo. Sem FPS, conclusão ou estabilidade validados.",
    "de": "Werkzeuge: MinGW GCC 15 · Release. Level und Respawns erreicht, wiederholte Tode können den Heap beschädigen; andere Läufe scheitern an wiederverwendetem MSAA-Speicher. Schreiber und Synchronisationsursache ungeklärt. Späterer synthetischer Test ist kein Titelfix/-retest. FPS, Abschluss und stabiles Spielen fehlen.",
    "fr": "Outils : MinGW GCC 15 · Release. Niveaux et respawns atteints, mais morts répétées peuvent corrompre le heap ; d’autres essais refusent la mémoire MSAA réutilisée. Auteur et synchronisation non prouvés. Le test synthétique ultérieur n’est pas un correctif/retest du titre. FPS, fin et stabilité non validés.",
    "es": "Herramientas: MinGW GCC 15 · Release. Alcanza niveles y respawns, pero muertes repetidas pueden corromper el heap; otras pruebas paran en memoria MSAA reutilizada. Escritor y sincronización sin probar. La prueba sintética posterior no es arreglo/retest del título. Sin FPS, finalización ni estabilidad validados."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "sifu": [
  {
   "id": "5908-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5908#discussioncomment-18927366",
   "updated": "2026-10-14T15:31:38Z",
   "testDate": null,
   "build": "main 8dfaafe62 + #5909 input unwrap + #5906 draw-snapshot changes",
   "os": "Windows 11 · 26300",
   "cpu": null,
   "gpu": "NVIDIA RTX 5090",
   "driver": "610.88",
   "version": "01.007.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: MinGW GCC 15.2.0. The modified run reaches PRESS ANY BUTTON around 0.5 FPS without the render-thread watchdog during 200 seconds. The earlier baseline stopped on its loading screen. No further input, audible output or gameplay is tested; this draw-snapshot change is not a verified complete-game fix.",
    "zh": "构建工具：MinGW GCC 15.2.0. 本地改动后，200 秒内无渲染线程 watchdog，并出现约 0.5 FPS 的 PRESS ANY BUTTON；早期基线停在加载画面。未检查后续操作、实际声音或游戏过程，此绘制快照改动不是完整游戏修复。",
    "ar": "الأدوات: MinGW GCC 15.2.0. يبلغ التعديل PRESS ANY BUTTON بنحو 0.5 FPS دون watchdog في 200 ثانية. توقف الأساس الأقدم عند التحميل. لا إدخال لاحق أو صوت مسموع أو لعب مختبر؛ التغيير ليس إصلاحاً كاملاً.",
    "pt": "Ferramentas: MinGW GCC 15.2.0. A alteração chega a PRESS ANY BUTTON perto de 0,5 FPS sem watchdog durante 200 s. A base antiga parava no carregamento. Não há comandos seguintes, som ouvido ou jogo testado; não é correção completa.",
    "de": "Werkzeuge: MinGW GCC 15.2.0. Geänderter Lauf erreicht PRESS ANY BUTTON mit etwa 0,5 FPS ohne Watchdog in 200 s. Frühere Basis blieb im Ladebild. Weitere Eingabe, hörbarer Ton und Gameplay ungeprüft; kein vollständiger Spielfix.",
    "fr": "Outils : MinGW GCC 15.2.0. La modification atteint PRESS ANY BUTTON vers 0,5 FPS sans watchdog pendant 200 s. L’ancienne base bloquait au chargement. Entrée suivante, son entendu et jeu non testés ; aucun correctif complet.",
    "es": "Herramientas: MinGW GCC 15.2.0. La modificación llega a PRESS ANY BUTTON a unos 0,5 FPS sin watchdog en 200 s. La base previa paraba en carga. Entrada posterior, audio oído y juego sin probar; no es arreglo completo."
   },
   "benchmarks": [
    {
     "cpu": null,
     "gpu": "NVIDIA RTX 5090",
     "fps": "≈0.5",
     "context": {
      "en": "Toolchain: MinGW GCC 15.2.0. The modified run reaches PRESS ANY BUTTON around 0.5 FPS without the render-thread watchdog during 200 seconds. The earlier baseline stopped on its loading screen. No further input, audible output or gameplay is tested; this draw-snapshot change is not a verified complete-game fix.",
      "zh": "构建工具：MinGW GCC 15.2.0. 本地改动后，200 秒内无渲染线程 watchdog，并出现约 0.5 FPS 的 PRESS ANY BUTTON；早期基线停在加载画面。未检查后续操作、实际声音或游戏过程，此绘制快照改动不是完整游戏修复。",
      "ar": "الأدوات: MinGW GCC 15.2.0. يبلغ التعديل PRESS ANY BUTTON بنحو 0.5 FPS دون watchdog في 200 ثانية. توقف الأساس الأقدم عند التحميل. لا إدخال لاحق أو صوت مسموع أو لعب مختبر؛ التغيير ليس إصلاحاً كاملاً.",
      "pt": "Ferramentas: MinGW GCC 15.2.0. A alteração chega a PRESS ANY BUTTON perto de 0,5 FPS sem watchdog durante 200 s. A base antiga parava no carregamento. Não há comandos seguintes, som ouvido ou jogo testado; não é correção completa.",
      "de": "Werkzeuge: MinGW GCC 15.2.0. Geänderter Lauf erreicht PRESS ANY BUTTON mit etwa 0,5 FPS ohne Watchdog in 200 s. Frühere Basis blieb im Ladebild. Weitere Eingabe, hörbarer Ton und Gameplay ungeprüft; kein vollständiger Spielfix.",
      "fr": "Outils : MinGW GCC 15.2.0. La modification atteint PRESS ANY BUTTON vers 0,5 FPS sans watchdog pendant 200 s. L’ancienne base bloquait au chargement. Entrée suivante, son entendu et jeu non testés ; aucun correctif complet.",
      "es": "Herramientas: MinGW GCC 15.2.0. La modificación llega a PRESS ANY BUTTON a unos 0,5 FPS sin watchdog en 200 s. La base previa paraba en carga. Entrada posterior, audio oído y juego sin probar; no es arreglo completo."
     }
    }
   ],
   "media": []
  }
 ],
 "olliolli-world": [
  {
   "id": "5316-windows-review-20261015",
   "platform": "windows",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5316#discussioncomment-18919732",
   "updated": "2026-10-14T08:37:18Z",
   "testDate": null,
   "build": "local 148bf6934e0c90ba004fca6f4430e1b2de22ff26 · main 31bfc4e869 + #4794/#5198",
   "os": "Windows · Release build",
   "cpu": null,
   "gpu": null,
   "driver": null,
   "version": "01.005.000",
   "patched": true,
   "summary": {
    "en": "The new eager-writeback/audio stack reaches the menu but is reported around 1 FPS afterward. It is not a playable replacement for the earlier STORE_AT_FLIP setup. The bases differ and no controlled cause is isolated; deferred-writeback comparison, audio and skating gameplay remain pending in the source.",
    "zh": "新的即时回写／音频整合到达菜单，随后据报仅约 1 FPS，不是旧 STORE_AT_FLIP 设置的可玩替代。基线不同，未隔离原因；来源中的延迟回写比较、声音和滑板游戏过程仍未出结果。",
    "ar": "تصل المجموعة الجديدة للقائمة ثم نحو 1 FPS، وليست بديلاً قابلاً للعب عن إعداد STORE_AT_FLIP القديم. الأسس مختلفة والسبب غير معزول؛ مقارنة الكتابة المؤجلة والصوت والتزلج ما زالت دون نتيجة.",
    "pt": "A nova pilha chega ao menu, depois relata cerca de 1 FPS; não substitui de forma jogável STORE_AT_FLIP. Bases diferentes e causa não isolada. Comparação diferida, som e skate continuam sem resultado.",
    "de": "Neuer Stack erreicht Menü, danach gemeldete etwa 1 FPS; kein spielbarer Ersatz für STORE_AT_FLIP. Basen verschieden, Ursache nicht isoliert. Verzögerter Vergleich, Ton und Skate-Gameplay weiterhin ohne Ergebnis.",
    "fr": "La pile atteint le menu puis environ 1 FPS rapporté ; aucun remplacement jouable de STORE_AT_FLIP. Bases différentes, cause non isolée. Comparaison différée, son et skate restent sans résultat.",
    "es": "La pila alcanza menú, después reporta cerca de 1 FPS; no sustituye de forma jugable STORE_AT_FLIP. Bases diferentes y causa no aislada. Comparación diferida, sonido y skate siguen sin resultado."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "dragon-quest-iii-hd2d": [
  {
   "id": "5625-linux-review-20261015",
   "platform": "linux",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5625#discussioncomment-18929812",
   "updated": "2026-10-14T16:59:10Z",
   "testDate": null,
   "build": "main 979ad7b6aaa0a3e0df120586230193e6f9a055b5 · APS5_HOST_IMPORT_MIB=8192 APS5_ADDRESS_COPY_MAX_MIB=4096",
   "os": "Nobara Linux · kernel 7.2.6-201.nobara.fc44",
   "cpu": "AMD Ryzen 5 7640U",
   "gpu": "AMD Radeon 760M",
   "driver": "Mesa 26.2.3 RADV",
   "version": "01.000.000",
   "patched": false,
   "summary": {
    "en": "RAM: 14.9 GiB. With raised import/copy budgets, the intro skip reaches a smeared green floor, with no character or interface; the window counter is about 1.6 FPS. No fatal message does not establish a usable scene or controls. Without those budgets startup still hits the copy cap; the earlier patched title-screen 7.8 FPS is a separate experiment.",
    "zh": "内存：14.9 GiB. 提高导入／复制预算后，跳过开场只出现模糊绿色地面，没有角色或界面，窗口约 1.6 FPS。无 fatal 不等于画面可用或可操作；不改预算仍在复制上限停止，早期补丁标题 7.8 FPS 另列。",
    "ar": "الذاكرة: 14.9 GiB. بعد رفع الميزانيات يصل تخطي المقدمة لأرض خضراء مشوشة بلا شخصية أو واجهة؛ العداد نحو 1.6 FPS. غياب fatal ليس مشهداً صالحاً أو تحكماً. دون الميزانيات يبقى حد النسخ؛ عنوان 7.8 FPS القديم تجربة أخرى.",
    "pt": "RAM: 14.9 GiB. Com limites elevados, saltar a introdução mostra chão verde deformado sem personagem ou UI; contador cerca de 1,6 FPS. Sem fatal não prova imagem útil ou controlo. Sem limites altos para no cap; título antigo a 7,8 FPS é experiência separada.",
    "de": "RAM: 14.9 GiB. Mit höheren Budgets zeigt Intro-Skip verschmierten grünen Boden ohne Figur/UI, Zähler etwa 1,6 FPS. Kein Fatal beweist keine nutzbare Szene/Steuerung. Ohne Budgets bleibt Copycap; frühere gepatchte Titel-7,8-FPS separat.",
    "fr": "Mémoire : 14.9 GiB. Budgets augmentés : saut d’intro vers sol vert brouillé sans personnage/UI, compteur vers 1,6 FPS. Aucun fatal ne prouve scène utilisable ni contrôle. Sans budgets élevés, copie bloquée ; titre ancien à 7,8 FPS distinct.",
    "es": "RAM: 14.9 GiB. Con presupuestos mayores, saltar intro muestra suelo verde borroso sin personaje/UI, contador unos 1,6 FPS. Sin fatal no prueba escena usable ni control. Sin esos presupuestos para por copia; título previo a 7,8 FPS es otra prueba."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "mgs-peace-walker": [
  {
   "id": "5268-linux-review-20261015",
   "platform": "linux",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/5268#discussioncomment-18926311",
   "updated": "2026-10-14T14:42:17Z",
   "testDate": null,
   "build": "main 69e7138ac + #5422/#5439 + local unmeasured MSAA/rasterizer approximation",
   "os": "Ubuntu 26.10",
   "cpu": null,
   "gpu": "NVIDIA RTX 3080 Ti",
   "driver": "615.71.09",
   "version": "01.301.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 15.3.0. Linux hand-over now creates the game process after #5443, unlike the earlier direct-launch stall. Local sample-count approximations move first presentation to another image-interface refusal. No playable game frame, audio or game FPS is verified; launcher 52 FPS stays separate. Hardware behavior for the approximation remains unmeasured.",
    "zh": "构建工具：GCC 15.3.0. #5443 后，Linux 启动器能交接到游戏进程，区别于此前直接启动停滞。本地未实测采样近似把首次呈现推进到另一图像接口拒绝；没有可玩游戏画面、声音或游戏 FPS，启动器 52 FPS 另列。",
    "ar": "الأدوات: GCC 15.3.0. ينشئ التسليم Linux عملية اللعبة بعد #5443. تنقل تقريبات عينات غير مقاسة أول عرض إلى رفض صورة آخر. لا إطار لعب أو صوت أو FPS لعبة موثق؛ 52 FPS للمشغل منفصلة. سلوك العتاد غير مقاس.",
    "pt": "Ferramentas: GCC 15.3.0. A passagem Linux cria o processo do jogo após #5443. Aproximações de amostras não medidas avançam até outra recusa de imagem. Sem imagem jogável, som ou FPS do jogo; lançador 52 FPS separado. Comportamento real não medido.",
    "de": "Werkzeuge: GCC 15.3.0. Linux-Übergabe startet nach #5443 den Spielprozess. Unvermessene Sample-Näherungen verschieben Präsentation zu neuem Bildfehler. Spielbares Bild, Ton und Spiel-FPS fehlen; Launcher-52-FPS separat. Hardwareverhalten ungemessen.",
    "fr": "Outils : GCC 15.3.0. Le relais Linux crée le processus après #5443. Des approximations d’échantillons non mesurées déplacent le premier refus vers une autre image. Aucun jeu, son ou FPS du jeu validés ; 52 FPS lanceur distinct. Matériel non mesuré.",
    "es": "Herramientas: GCC 15.3.0. La entrega Linux crea el proceso tras #5443. Aproximaciones de muestras sin medir mueven el rechazo a otra imagen. Sin fotograma jugable, sonido ni FPS de juego; lanzador 52 FPS aparte. Hardware no medido."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "demons-souls": [
  {
   "id": "1283-linux-baseline-review-20261015",
   "platform": "linux",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/1283",
   "updated": "2026-10-14T06:03:30Z",
   "testDate": null,
   "build": "main 7a0c838ca",
   "os": "Nobara 44 · Linux 7.2",
   "cpu": "AMD Ryzen 5 7600X",
   "gpu": "NVIDIA RTX 5070 Ti",
   "driver": "595.91.07 · VK_EXT_shader_stencil_export unavailable",
   "version": "v1.07 · source notation",
   "patched": false,
   "summary": {
    "en": "Toolchain: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. The main baseline reaches its title but stops loading the tutorial. The separate local stack renders the debug tutorial knight/HUD around 0.30 FPS, with foliage streaks and altered 1080p/debug settings. Older 2.0–2.2 FPS used another stack. A third Cross can crash saving; the normal new-game route, completion and unchanged-release behavior remain untested.",
    "zh": "构建工具：GCC 16.2 · Release · SPIRV-Tools OFF. 内存：32 GB. main 基线到达标题但教程加载失败；另一整合在改过的 1080p／调试路线显示骑士和 HUD，约 0.30 FPS，植被有条纹。旧 2.0–2.2 FPS 使用其他栈；第三次 Cross 可能触发存档崩溃，普通新游戏路线、通关及原始发行版未验证。",
    "ar": "الأدوات: GCC 16.2 · Release · SPIRV-Tools OFF. الذاكرة: 32 GB. يبلغ main العنوان ثم يفشل تحميل التعليم. المجموعة المحلية الأخرى تعرض الفارس وHUD عبر إعدادات debug/1080p بنحو 0.30 FPS مع خطوط. أرقام 2.0–2.2 القديمة لأساس آخر. Cross ثالث قد يعطل الحفظ؛ المسار العادي والإكمال والإصدار غير مختبرة.",
    "pt": "Ferramentas: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main chega ao título, mas para no tutorial. Outra integração mostra cavaleiro/HUD pelo debug a 1080p perto de 0,30 FPS, com riscos. Os 2,0–2,2 FPS antigos são outra pilha. Terceiro Cross pode falhar na gravação; percurso normal, conclusão e versão original por testar.",
    "de": "Werkzeuge: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main erreicht Titel, scheitert beim Tutorial-Laden. Getrennter Stack zeigt Debug-Ritter/HUD in verändertem 1080p mit etwa 0,30 FPS und Vegetationsstreifen. Alte 2,0–2,2 FPS andere Basis. Drittes Cross kann Save crashen; normaler Neustart, Abschluss und Release ungeprüft.",
    "fr": "Outils : GCC 16.2 · Release · SPIRV-Tools OFF. Mémoire : 32 GB. Main atteint le titre mais échoue au tutoriel. La pile distincte montre chevalier/HUD en debug/1080p vers 0,30 FPS avec stries. Les anciens 2,0–2,2 FPS ont une autre base. Troisième Cross peut faire planter le save ; parcours normal, fin et release non testés.",
    "es": "Herramientas: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main alcanza título, pero falla cargando tutorial. Otra pila muestra caballero/HUD por debug/1080p a unos 0,30 FPS con rayas. Los antiguos 2,0–2,2 FPS usan otra base. Tercer Cross puede fallar al guardar; ruta normal, finalización y versión original sin probar."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "1283-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/1283",
   "updated": "2026-10-14T06:03:30Z",
   "testDate": null,
   "build": "main 7a0c838ca + #758/#5181 + 0bc9120bb disk SPIR-V + local stencil-reference workaround",
   "os": "Nobara 44 · Linux 7.2",
   "cpu": "AMD Ryzen 5 7600X",
   "gpu": "NVIDIA RTX 5070 Ti",
   "driver": "595.91.07 · VK_EXT_shader_stencil_export unavailable",
   "version": "v1.07 · source notation",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. The main baseline reaches its title but stops loading the tutorial. The separate local stack renders the debug tutorial knight/HUD around 0.30 FPS, with foliage streaks and altered 1080p/debug settings. Older 2.0–2.2 FPS used another stack. A third Cross can crash saving; the normal new-game route, completion and unchanged-release behavior remain untested.",
    "zh": "构建工具：GCC 16.2 · Release · SPIRV-Tools OFF. 内存：32 GB. main 基线到达标题但教程加载失败；另一整合在改过的 1080p／调试路线显示骑士和 HUD，约 0.30 FPS，植被有条纹。旧 2.0–2.2 FPS 使用其他栈；第三次 Cross 可能触发存档崩溃，普通新游戏路线、通关及原始发行版未验证。",
    "ar": "الأدوات: GCC 16.2 · Release · SPIRV-Tools OFF. الذاكرة: 32 GB. يبلغ main العنوان ثم يفشل تحميل التعليم. المجموعة المحلية الأخرى تعرض الفارس وHUD عبر إعدادات debug/1080p بنحو 0.30 FPS مع خطوط. أرقام 2.0–2.2 القديمة لأساس آخر. Cross ثالث قد يعطل الحفظ؛ المسار العادي والإكمال والإصدار غير مختبرة.",
    "pt": "Ferramentas: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main chega ao título, mas para no tutorial. Outra integração mostra cavaleiro/HUD pelo debug a 1080p perto de 0,30 FPS, com riscos. Os 2,0–2,2 FPS antigos são outra pilha. Terceiro Cross pode falhar na gravação; percurso normal, conclusão e versão original por testar.",
    "de": "Werkzeuge: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main erreicht Titel, scheitert beim Tutorial-Laden. Getrennter Stack zeigt Debug-Ritter/HUD in verändertem 1080p mit etwa 0,30 FPS und Vegetationsstreifen. Alte 2,0–2,2 FPS andere Basis. Drittes Cross kann Save crashen; normaler Neustart, Abschluss und Release ungeprüft.",
    "fr": "Outils : GCC 16.2 · Release · SPIRV-Tools OFF. Mémoire : 32 GB. Main atteint le titre mais échoue au tutoriel. La pile distincte montre chevalier/HUD en debug/1080p vers 0,30 FPS avec stries. Les anciens 2,0–2,2 FPS ont une autre base. Troisième Cross peut faire planter le save ; parcours normal, fin et release non testés.",
    "es": "Herramientas: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main alcanza título, pero falla cargando tutorial. Otra pila muestra caballero/HUD por debug/1080p a unos 0,30 FPS con rayas. Los antiguos 2,0–2,2 FPS usan otra base. Tercer Cross puede fallar al guardar; ruta normal, finalización y versión original sin probar."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 5 7600X",
     "gpu": "NVIDIA RTX 5070 Ti",
     "fps": "0.30",
     "context": {
      "en": "Toolchain: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. The main baseline reaches its title but stops loading the tutorial. The separate local stack renders the debug tutorial knight/HUD around 0.30 FPS, with foliage streaks and altered 1080p/debug settings. Older 2.0–2.2 FPS used another stack. A third Cross can crash saving; the normal new-game route, completion and unchanged-release behavior remain untested.",
      "zh": "构建工具：GCC 16.2 · Release · SPIRV-Tools OFF. 内存：32 GB. main 基线到达标题但教程加载失败；另一整合在改过的 1080p／调试路线显示骑士和 HUD，约 0.30 FPS，植被有条纹。旧 2.0–2.2 FPS 使用其他栈；第三次 Cross 可能触发存档崩溃，普通新游戏路线、通关及原始发行版未验证。",
      "ar": "الأدوات: GCC 16.2 · Release · SPIRV-Tools OFF. الذاكرة: 32 GB. يبلغ main العنوان ثم يفشل تحميل التعليم. المجموعة المحلية الأخرى تعرض الفارس وHUD عبر إعدادات debug/1080p بنحو 0.30 FPS مع خطوط. أرقام 2.0–2.2 القديمة لأساس آخر. Cross ثالث قد يعطل الحفظ؛ المسار العادي والإكمال والإصدار غير مختبرة.",
      "pt": "Ferramentas: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main chega ao título, mas para no tutorial. Outra integração mostra cavaleiro/HUD pelo debug a 1080p perto de 0,30 FPS, com riscos. Os 2,0–2,2 FPS antigos são outra pilha. Terceiro Cross pode falhar na gravação; percurso normal, conclusão e versão original por testar.",
      "de": "Werkzeuge: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main erreicht Titel, scheitert beim Tutorial-Laden. Getrennter Stack zeigt Debug-Ritter/HUD in verändertem 1080p mit etwa 0,30 FPS und Vegetationsstreifen. Alte 2,0–2,2 FPS andere Basis. Drittes Cross kann Save crashen; normaler Neustart, Abschluss und Release ungeprüft.",
      "fr": "Outils : GCC 16.2 · Release · SPIRV-Tools OFF. Mémoire : 32 GB. Main atteint le titre mais échoue au tutoriel. La pile distincte montre chevalier/HUD en debug/1080p vers 0,30 FPS avec stries. Les anciens 2,0–2,2 FPS ont une autre base. Troisième Cross peut faire planter le save ; parcours normal, fin et release non testés.",
      "es": "Herramientas: GCC 16.2 · Release · SPIRV-Tools OFF. RAM: 32 GB. Main alcanza título, pero falla cargando tutorial. Otra pila muestra caballero/HUD por debug/1080p a unos 0,30 FPS con rayas. Los antiguos 2,0–2,2 FPS usan otra base. Tercer Cross puede fallar al guardar; ruta normal, finalización y versión original sin probar."
     }
    }
   ],
   "media": []
  }
 ],
 "killing-floor-3": [
  {
   "id": "3413-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/3413#discussioncomment-18927073",
   "updated": "2026-10-14T15:19:57Z",
   "testDate": null,
   "build": "hypermoist/wip/ppsa08427-sync-fix eb6737adc · earlier cb0e534d5 includes main a5f493f90 + local stack",
   "os": "CachyOS · kernel 7.2.9",
   "cpu": "AMD Ryzen 5 5600G",
   "gpu": "NVIDIA RTX 3060 · 12 GB",
   "driver": "615.78.08 · open kernel module",
   "version": "02.011.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16.2.1. RAM: 31 GiB. The modified Solo hub stays lit around 19–21 presents per ten seconds. Dispatch-cache hits improve but this does not raise FPS. Joined imports, memory fallbacks, skipped-work and GC-timeout settings remain part of the integration. Combat, complete matches and audio are not checked; the earlier clean-main loading failure remains a separate result.",
    "zh": "构建工具：GCC 16.2.1. 内存：31 GiB. 本地 Solo 大厅约十秒呈现 19–21 帧并保持有光照；dispatch 缓存命中改善，没有提高 FPS。整合仍含合并导入、内存回退、跳过工作和 GC 超时设置；战斗、完整比赛及声音未检查，旧原始 main 加载失败单列。",
    "ar": "الأدوات: GCC 16.2.1. الذاكرة: 31 GiB. يبقى مركز Solo المعدل مضاءً بـ19–21 إطاراً لعشر ثوانٍ. تحسن cache دون رفع FPS. دمج الاستيراد والذاكرة والعمل المتخطى وGC باقية؛ قتال ومباراة كاملة وصوت غير مختبرة، وفشل main السابق منفصل.",
    "pt": "Ferramentas: GCC 16.2.1. RAM: 31 GiB. O hub Solo modificado mantém iluminação a 19–21 imagens por dez segundos. Mais hits não aumentam FPS. Importações, memória, trabalho ignorado e timeout GC continuam na integração. Combate, partidas e som por testar; falha main anterior separada.",
    "de": "Werkzeuge: GCC 16.2.1. RAM: 31 GiB. Modifizierter Solo-Hub bleibt beleuchtet mit 19–21 Präsentationen pro zehn Sekunden. Mehr Cachetreffer steigern FPS nicht. Import-, Speicher-, Skip-/GC-Änderungen bleiben. Kampf, ganze Matches und Ton fehlen; früherer main-Ladefehler separat.",
    "fr": "Outils : GCC 16.2.1. Mémoire : 31 GiB. Le hub Solo modifié reste éclairé à 19–21 images par dix secondes. Plus de hits cache ne relève pas les FPS. Importations, mémoire, travail ignoré et GC modifiés restent présents. Combat, matchs complets et son non testés ; ancien échec main séparé.",
    "es": "Herramientas: GCC 16.2.1. RAM: 31 GiB. El hub Solo modificado queda iluminado a 19–21 imágenes por diez segundos. Más hits no aumentan FPS. Siguen imports, memoria, trabajo omitido y GC modificados. Combate, partidas completas y sonido sin probar; fallo main previo separado."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 5 5600G",
     "gpu": "NVIDIA RTX 3060 · 12 GB",
     "fps": "≈1.9–2.1",
     "context": {
      "en": "Toolchain: GCC 16.2.1. RAM: 31 GiB. The modified Solo hub stays lit around 19–21 presents per ten seconds. Dispatch-cache hits improve but this does not raise FPS. Joined imports, memory fallbacks, skipped-work and GC-timeout settings remain part of the integration. Combat, complete matches and audio are not checked; the earlier clean-main loading failure remains a separate result.",
      "zh": "构建工具：GCC 16.2.1. 内存：31 GiB. 本地 Solo 大厅约十秒呈现 19–21 帧并保持有光照；dispatch 缓存命中改善，没有提高 FPS。整合仍含合并导入、内存回退、跳过工作和 GC 超时设置；战斗、完整比赛及声音未检查，旧原始 main 加载失败单列。",
      "ar": "الأدوات: GCC 16.2.1. الذاكرة: 31 GiB. يبقى مركز Solo المعدل مضاءً بـ19–21 إطاراً لعشر ثوانٍ. تحسن cache دون رفع FPS. دمج الاستيراد والذاكرة والعمل المتخطى وGC باقية؛ قتال ومباراة كاملة وصوت غير مختبرة، وفشل main السابق منفصل.",
      "pt": "Ferramentas: GCC 16.2.1. RAM: 31 GiB. O hub Solo modificado mantém iluminação a 19–21 imagens por dez segundos. Mais hits não aumentam FPS. Importações, memória, trabalho ignorado e timeout GC continuam na integração. Combate, partidas e som por testar; falha main anterior separada.",
      "de": "Werkzeuge: GCC 16.2.1. RAM: 31 GiB. Modifizierter Solo-Hub bleibt beleuchtet mit 19–21 Präsentationen pro zehn Sekunden. Mehr Cachetreffer steigern FPS nicht. Import-, Speicher-, Skip-/GC-Änderungen bleiben. Kampf, ganze Matches und Ton fehlen; früherer main-Ladefehler separat.",
      "fr": "Outils : GCC 16.2.1. Mémoire : 31 GiB. Le hub Solo modifié reste éclairé à 19–21 images par dix secondes. Plus de hits cache ne relève pas les FPS. Importations, mémoire, travail ignoré et GC modifiés restent présents. Combat, matchs complets et son non testés ; ancien échec main séparé.",
      "es": "Herramientas: GCC 16.2.1. RAM: 31 GiB. El hub Solo modificado queda iluminado a 19–21 imágenes por diez segundos. Más hits no aumentan FPS. Siguen imports, memoria, trabajo omitido y GC modificados. Combate, partidas completas y sonido sin probar; fallo main previo separado."
     }
    }
   ],
   "media": []
  }
 ],
 "astro-bot": [
  {
   "id": "357-linux-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18894768",
   "updated": "2026-10-14T19:12:46Z",
   "testDate": null,
   "build": "private 980559f158d · main 4d5411d7b5d + resource-pack fork #62/#60 + #5971 · prior ebc278857 conversion retained",
   "os": "Linux · source integration",
   "cpu": "AMD Ryzen 9 7950X",
   "gpu": "AMD Radeon RX 6650 XT · 8 GB",
   "driver": "RADV 26.2.4",
   "version": "01.018.000 · PPSA21564",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16.2.1. The direct Crash Site scene stands without input in this pair. A cold run first presents at 300.09 seconds versus 30.04 with the private resource pack; one ordered sample does not measure scene FPS or general speed. All 1,946 variants and 1,659 plans are reused and both normal closes exit zero. Earlier jumping used another head.",
    "zh": "构建工具：GCC 16.2.1. 此成对实验直接进入 Crash Site，角色站立，未输入。冷运行首次呈现 300.09 秒，私有资源包为 30.04 秒；一次有序采样不测场景 FPS 或普遍性能。复用了全部 1,946 变体与 1,659 计划，两次正常退出为零；此前跳跃属于另一提交。",
    "ar": "الأدوات: GCC 16.2.1. مشهد Crash Site ثابت بلا إدخال في الزوج. أول عرض 300.09 ثانية بارداً مقابل 30.04 بالحزمة الخاصة؛ عينة واحدة ليست FPS أو سرعة عامة. إعادة استخدام 1946 متغيراً و1659 خطة وخروج صفر مرتين؛ القفز السابق لبناء آخر.",
    "pt": "Ferramentas: GCC 16.2.1. Crash Site fica parado sem entrada neste par. Primeira imagem aos 300,09 s a frio contra 30,04 com pack privado; uma amostra ordenada não mede FPS nem velocidade geral. Reutiliza 1946 variantes/1659 planos e fecha duas vezes com zero; saltos anteriores de outro head.",
    "de": "Werkzeuge: GCC 16.2.1. Crash Site steht ohne Eingabe in diesem Paar. Erstbild kalt nach 300,09 s gegenüber 30,04 mit privatem Pack; eine geordnete Probe misst keine Szenen-FPS/allgemeine Leistung. 1946 Varianten/1659 Pläne wiederverwendet, zweimal Exit null; frühere Sprünge anderer Head.",
    "fr": "Outils : GCC 16.2.1. Crash Site reste immobile sans entrée dans cette paire. Première image à froid à 300,09 s contre 30,04 avec pack privé ; un échantillon ordonné ne mesure ni FPS ni vitesse générale. 1946 variantes/1659 plans réutilisés, deux sorties zéro ; sauts antérieurs sur un autre commit.",
    "es": "Herramientas: GCC 16.2.1. Crash Site queda quieto sin entrada en el par. Primer frame frío a 300,09 s frente a 30,04 con pack privado; una muestra ordenada no mide FPS ni velocidad general. Reutiliza 1946 variantes/1659 planes, dos salidas cero; saltos anteriores en otro head."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "ready-or-not": [
  {
   "id": "4184-windows-baseline-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/4184",
   "updated": "2026-10-13T22:58:57Z",
   "testDate": null,
   "build": "main 18c438b10 · host import 10240 MiB + engine fence timeout 1800000",
   "os": "Windows 11 Pro · 22631",
   "cpu": "AMD Ryzen 7 7800X3D",
   "gpu": "AMD Radeon RX 7900 XTX",
   "driver": null,
   "version": "01.001.008",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main reaches the station around 2 FPS with raised import and fence settings, with black operators and occasional colour casts; the mission was not retested on main. The separate local stack reaches about 6.5 at the station with profiling off. Its mission 2.4–2.7 FPS belongs to an earlier build and is not a new mission benchmark.",
    "zh": "构建工具：WinLibs GCC 15.2.0 · Release. 内存：32 GB. main 在提高导入与 fence 设置后进入警局约 2 FPS，有黑色人物及偶发偏色；未复测 main 的任务。独立本地整合在关闭分析时警局约 6.5；任务 2.4–2.7 FPS 属于早期构建，不是新任务基准。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 · Release. الذاكرة: 32 GB. main يبلغ المركز بنحو 2 FPS بإعدادات أعلى مع أشخاص سود وألوان؛ المهمة لم تُعد على main. المجموعة المحلية نحو 6.5 بالمركز دون profiling؛ 2.4–2.7 للمهمة لبناء أقدم.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main chega à estação perto de 2 FPS com limites altos, operadores negros e desvios de cor; missão não retestada em main. Pilha local cerca de 6,5 sem profiler; missão 2,4–2,7 é de build anterior.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main erreicht Station mit höheren Limits um 2 FPS, schwarze Figuren/Farbstiche; Mission auf main ungeprüft. Lokaler Stack etwa 6,5 ohne Profiler; Missions-2,4–2,7 gehören älterem Build.",
    "fr": "Outils : WinLibs GCC 15.2.0 · Release. Mémoire : 32 GB. Main atteint le commissariat vers 2 FPS avec limites relevées, personnages noirs et teintes ; mission non retestée sur main. Pile locale vers 6,5 sans profilage ; mission 2,4–2,7 sur ancien build.",
    "es": "Herramientas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main llega a comisaría a unos 2 FPS con límites mayores, personajes negros y tintes; misión sin retest main. Pila local cerca de 6,5 sin profiler; misión 2,4–2,7 pertenece a build anterior."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 7800X3D",
     "gpu": "AMD Radeon RX 7900 XTX",
     "fps": "≈2",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main reaches the station around 2 FPS with raised import and fence settings, with black operators and occasional colour casts; the mission was not retested on main. The separate local stack reaches about 6.5 at the station with profiling off. Its mission 2.4–2.7 FPS belongs to an earlier build and is not a new mission benchmark.",
      "zh": "构建工具：WinLibs GCC 15.2.0 · Release. 内存：32 GB. main 在提高导入与 fence 设置后进入警局约 2 FPS，有黑色人物及偶发偏色；未复测 main 的任务。独立本地整合在关闭分析时警局约 6.5；任务 2.4–2.7 FPS 属于早期构建，不是新任务基准。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 · Release. الذاكرة: 32 GB. main يبلغ المركز بنحو 2 FPS بإعدادات أعلى مع أشخاص سود وألوان؛ المهمة لم تُعد على main. المجموعة المحلية نحو 6.5 بالمركز دون profiling؛ 2.4–2.7 للمهمة لبناء أقدم.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main chega à estação perto de 2 FPS com limites altos, operadores negros e desvios de cor; missão não retestada em main. Pilha local cerca de 6,5 sem profiler; missão 2,4–2,7 é de build anterior.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main erreicht Station mit höheren Limits um 2 FPS, schwarze Figuren/Farbstiche; Mission auf main ungeprüft. Lokaler Stack etwa 6,5 ohne Profiler; Missions-2,4–2,7 gehören älterem Build.",
      "fr": "Outils : WinLibs GCC 15.2.0 · Release. Mémoire : 32 GB. Main atteint le commissariat vers 2 FPS avec limites relevées, personnages noirs et teintes ; mission non retestée sur main. Pile locale vers 6,5 sans profilage ; mission 2,4–2,7 sur ancien build.",
      "es": "Herramientas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main llega a comisaría a unos 2 FPS con límites mayores, personajes negros y tintes; misión sin retest main. Pila local cerca de 6,5 sin profiler; misión 2,4–2,7 pertenece a build anterior."
     }
    }
   ],
   "media": [
    "https://github.com/user-attachments/assets/0919b769-cebb-4db6-b55d-e44c474af759",
    "https://github.com/user-attachments/assets/1e7f747a-fc3b-479d-bda5-880e5bd6075f",
    "https://github.com/user-attachments/assets/8105a8f0-d659-4d54-b456-1362409a7619",
    "https://github.com/user-attachments/assets/c90299e5-8db9-42e6-a0f0-9bf1097f103b"
   ]
  },
  {
   "id": "4184-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/4184",
   "updated": "2026-10-13T22:58:57Z",
   "testDate": null,
   "build": "main 0214069e3 + #3864/#4517/#5255/#5446/#5480/#5520/#5522 + #494/#1193/#1202 pipeline OFF + local stack",
   "os": "Windows 11 Pro · 22631",
   "cpu": "AMD Ryzen 7 7800X3D",
   "gpu": "AMD Radeon RX 7900 XTX",
   "driver": null,
   "version": "01.001.008",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main reaches the station around 2 FPS with raised import and fence settings, with black operators and occasional colour casts; the mission was not retested on main. The separate local stack reaches about 6.5 at the station with profiling off. Its mission 2.4–2.7 FPS belongs to an earlier build and is not a new mission benchmark.",
    "zh": "构建工具：WinLibs GCC 15.2.0 · Release. 内存：32 GB. main 在提高导入与 fence 设置后进入警局约 2 FPS，有黑色人物及偶发偏色；未复测 main 的任务。独立本地整合在关闭分析时警局约 6.5；任务 2.4–2.7 FPS 属于早期构建，不是新任务基准。",
    "ar": "الأدوات: WinLibs GCC 15.2.0 · Release. الذاكرة: 32 GB. main يبلغ المركز بنحو 2 FPS بإعدادات أعلى مع أشخاص سود وألوان؛ المهمة لم تُعد على main. المجموعة المحلية نحو 6.5 بالمركز دون profiling؛ 2.4–2.7 للمهمة لبناء أقدم.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main chega à estação perto de 2 FPS com limites altos, operadores negros e desvios de cor; missão não retestada em main. Pilha local cerca de 6,5 sem profiler; missão 2,4–2,7 é de build anterior.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main erreicht Station mit höheren Limits um 2 FPS, schwarze Figuren/Farbstiche; Mission auf main ungeprüft. Lokaler Stack etwa 6,5 ohne Profiler; Missions-2,4–2,7 gehören älterem Build.",
    "fr": "Outils : WinLibs GCC 15.2.0 · Release. Mémoire : 32 GB. Main atteint le commissariat vers 2 FPS avec limites relevées, personnages noirs et teintes ; mission non retestée sur main. Pile locale vers 6,5 sans profilage ; mission 2,4–2,7 sur ancien build.",
    "es": "Herramientas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main llega a comisaría a unos 2 FPS con límites mayores, personajes negros y tintes; misión sin retest main. Pila local cerca de 6,5 sin profiler; misión 2,4–2,7 pertenece a build anterior."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 7800X3D",
     "gpu": "AMD Radeon RX 7900 XTX",
     "fps": "≈6.5",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main reaches the station around 2 FPS with raised import and fence settings, with black operators and occasional colour casts; the mission was not retested on main. The separate local stack reaches about 6.5 at the station with profiling off. Its mission 2.4–2.7 FPS belongs to an earlier build and is not a new mission benchmark.",
      "zh": "构建工具：WinLibs GCC 15.2.0 · Release. 内存：32 GB. main 在提高导入与 fence 设置后进入警局约 2 FPS，有黑色人物及偶发偏色；未复测 main 的任务。独立本地整合在关闭分析时警局约 6.5；任务 2.4–2.7 FPS 属于早期构建，不是新任务基准。",
      "ar": "الأدوات: WinLibs GCC 15.2.0 · Release. الذاكرة: 32 GB. main يبلغ المركز بنحو 2 FPS بإعدادات أعلى مع أشخاص سود وألوان؛ المهمة لم تُعد على main. المجموعة المحلية نحو 6.5 بالمركز دون profiling؛ 2.4–2.7 للمهمة لبناء أقدم.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main chega à estação perto de 2 FPS com limites altos, operadores negros e desvios de cor; missão não retestada em main. Pilha local cerca de 6,5 sem profiler; missão 2,4–2,7 é de build anterior.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main erreicht Station mit höheren Limits um 2 FPS, schwarze Figuren/Farbstiche; Mission auf main ungeprüft. Lokaler Stack etwa 6,5 ohne Profiler; Missions-2,4–2,7 gehören älterem Build.",
      "fr": "Outils : WinLibs GCC 15.2.0 · Release. Mémoire : 32 GB. Main atteint le commissariat vers 2 FPS avec limites relevées, personnages noirs et teintes ; mission non retestée sur main. Pile locale vers 6,5 sans profilage ; mission 2,4–2,7 sur ancien build.",
      "es": "Herramientas: WinLibs GCC 15.2.0 · Release. RAM: 32 GB. Main llega a comisaría a unos 2 FPS con límites mayores, personajes negros y tintes; misión sin retest main. Pila local cerca de 6,5 sin profiler; misión 2,4–2,7 pertenece a build anterior."
     }
    }
   ],
   "media": [
    "https://github.com/user-attachments/assets/0919b769-cebb-4db6-b55d-e44c474af759",
    "https://github.com/user-attachments/assets/1e7f747a-fc3b-479d-bda5-880e5bd6075f",
    "https://github.com/user-attachments/assets/8105a8f0-d659-4d54-b456-1362409a7619",
    "https://github.com/user-attachments/assets/c90299e5-8db9-42e6-a0f0-9bf1097f103b"
   ]
  }
 ],
 "wobbly-life": [
  {
   "id": "2211-linux-review-20261015",
   "platform": "linux",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/2211#discussioncomment-18921545",
   "updated": "2026-10-14T10:20:58Z",
   "testDate": null,
   "build": "main 66f8947 + #4341 + local unknown-export success stub",
   "os": "CachyOS",
   "cpu": "Intel Core i5-12400",
   "gpu": "NVIDIA RTX 3060 Ti",
   "driver": "615.71.09",
   "version": "01.160.000",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16.2.1. The new integration reaches streaming; map corruption remains across three cycles. No new FPS or stable world result is supplied. Eight earlier streaming checks used 0aa4 plus #4017 and do not establish a universal fix.",
    "zh": "构建工具：GCC 16.2.1. 新整合到达 streaming，三轮地图损坏仍在；没有新 FPS 或稳定世界结果。早期八次检查使用 0aa4 加 #4017，不能证明普遍修复。",
    "ar": "الأدوات: GCC 16.2.1. الدمج يصل streaming وفساد الخريطة باقٍ في ثلاث دورات. لا FPS أو عالم ثابت جديد. ثماني تجارب قديمة على 0aa4 مع #4017 ليست إصلاحاً عاماً.",
    "pt": "Ferramentas: GCC 16.2.1. A integração chega a streaming, mas o mapa continua corrompido em três ciclos. Sem novos FPS/mundo estável. Oito verificações antigas 0aa4+#4017 não são correção universal.",
    "de": "Werkzeuge: GCC 16.2.1. Integration erreicht Streaming, Karte bleibt in drei Zyklen beschädigt. Keine neuen FPS/stabile Welt. Acht ältere Tests auf 0aa4+#4017 belegen keinen universellen Fix.",
    "fr": "Outils : GCC 16.2.1. Intégration atteint streaming, carte toujours corrompue en trois cycles. Aucun nouveau FPS/monde stable. Huit tests anciens 0aa4+#4017 ne prouvent aucun correctif universel.",
    "es": "Herramientas: GCC 16.2.1. Integración llega a streaming, mapa aún corrupto en tres ciclos. Sin nuevos FPS/mundo estable. Ocho pruebas antiguas 0aa4+#4017 no prueban arreglo universal."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "ghost-of-yotei": [
  {
   "id": "675-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-18913352",
   "updated": "2026-10-14T02:09:16Z",
   "testDate": null,
   "build": "main dacd78525e + #757/#758/#4172/#4201/#4222/#4450/#4487 + local shader changes",
   "os": "Windows 11",
   "cpu": null,
   "gpu": "NVIDIA RTX 3080 Laptop · 16 GB",
   "driver": null,
   "version": "1.008 · source notation",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 15.2. RAM: 32 GB. The modified run reaches a 3,000-second loading limit without a world. Shader spill and specialization changes remain local; no gameplay, FPS or universally effective skip setting is verified.",
    "zh": "构建工具：GCC 15.2. 内存：32 GB. 改动后的运行停在 3,000 秒加载上限，没有世界画面；shader spill 与特化改动仍属本地。未验证游戏过程、FPS 或普遍有效的跳过设置。",
    "ar": "الأدوات: GCC 15.2. الذاكرة: 32 GB. التشغيل المعدل يبلغ حد تحميل 3000 ثانية بلا عالم. spill والتخصص محليان؛ لا لعب أو FPS أو تخطٍ عام موثق.",
    "pt": "Ferramentas: GCC 15.2. RAM: 32 GB. A execução modificada atinge 3000 s de carga sem mundo. Spill/especialização locais; sem jogo, FPS ou opção universal validada.",
    "de": "Werkzeuge: GCC 15.2. RAM: 32 GB. Geänderter Lauf erreicht 3000-s-Ladelimit ohne Welt. Spill/Spezialisierung lokal; Gameplay, FPS und universelle Skip-Option ungeprüft.",
    "fr": "Outils : GCC 15.2. Mémoire : 32 GB. Essai modifié atteint 3000 s de chargement sans monde. Spill/spécialisation locaux ; jeu, FPS ou option universelle non validés.",
    "es": "Herramientas: GCC 15.2. RAM: 32 GB. Prueba modificada llega a 3000 s de carga sin mundo. Spill/especialización locales; sin juego, FPS ni opción universal validada."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "slay-the-princess": [
  {
   "id": "4369-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/4369#issuecomment-6166715203",
   "updated": "2026-10-14T10:53:13Z",
   "testDate": null,
   "build": "main 43349d4337543eca207772b065f10ab19acc24c9 · matching relinker + 128 PRX targets",
   "os": "Windows",
   "cpu": null,
   "gpu": null,
   "driver": null,
   "version": null,
   "patched": false,
   "summary": {
    "en": "Three clean 150-second runs no longer log the alias error, fatal or throw. The source does not verify the visible game or audio and cannot identify the fixing change. #4408 was not tested; clean logs alone do not upgrade the game to playable.",
    "zh": "三次干净的 150 秒运行不再记录 alias、fatal 或 throw。来源未验证实际画面或声音，也未定位修复提交；未测试 #4408，日志正常不能升级为可玩。",
    "ar": "ثلاث تجارب نظيفة 150 ثانية دون alias/fatal/throw. لا صورة أو صوت موثقان ولا تغيير محدد؛ #4408 غير مختبر والسجل لا يثبت اللعب.",
    "pt": "Três execuções limpas de 150 s sem alias/fatal/throw. Imagem e som não verificados, causa não isolada; #4408 não testada e logs não provam jogo.",
    "de": "Drei saubere 150-s-Läufe ohne Alias/Fatal/Throw. Bild/Ton ungeprüft, Fix unbekannt; #4408 nicht getestet, Logs belegen kein spielbares Spiel.",
    "fr": "Trois essais propres de 150 s sans alias/fatal/throw. Image/son non vérifiés, correctif non identifié ; #4408 non testé, logs seuls insuffisants.",
    "es": "Tres pruebas limpias de 150 s sin alias/fatal/throw. Imagen/audio sin verificar, arreglo desconocido; #4408 sin probar, logs no demuestran juego."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "pragmata": [
  {
   "id": "3043-windows-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/3043#issuecomment-6161354899",
   "updated": "2026-10-14T05:07:34Z",
   "testDate": null,
   "build": "rK main e33258a64 + #4237 808b2a83d · all 126 PRX targets rebuilt + local keycode error stub; rL additionally #5457 391f1b32b",
   "os": "Windows",
   "cpu": null,
   "gpu": null,
   "driver": null,
   "version": "01.200.000",
   "patched": true,
   "summary": {
    "en": "The follow-up identifies complete matching libraries for rK/rL and a local keycode stub. The earlier rI mixed older libraries and is not an equivalent baseline. These diagnostic runs do not supply a verified frame or game result; adding #5457 is not proof of playable PRAGMATA.",
    "zh": "补充报告明确 rK／rL 重建全部配套库并保留本地 keycode stub；早期 rI 混有旧库，不能作为等价基线。这些诊断未提供已验证画面或游戏结果，加入 #5457 不证明 PRAGMATA 可玩。",
    "ar": "يوضح الملحق مكتبات rK/rL المطابقة وstub محلياً. rI خلط مكتبات قديمة وليس أساساً مكافئاً. لا إطار أو لعب موثق؛ إضافة #5457 لا تثبت اللعب.",
    "pt": "O seguimento identifica libs completas rK/rL e stub local. rI misturava libs antigas, base não equivalente. Sem imagem/jogo verificados; #5457 não prova PRAGMATA jogável.",
    "de": "Nachtrag belegt passende rK/rL-Libs und lokalen Stub. rI mischte ältere Libs, keine gleiche Basis. Kein verifiziertes Bild/Gameplay; #5457 belegt keine Spielbarkeit.",
    "fr": "Le suivi précise libs complètes rK/rL et stub local. rI mélangeait anciennes libs, base non équivalente. Aucun cadre/jeu validé ; #5457 ne prouve pas la jouabilité.",
    "es": "Seguimiento identifica libs completas rK/rL y stub local. rI mezclaba libs antiguas, base no equivalente. Sin frame/juego verificado; #5457 no prueba jugabilidad."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "sword-of-the-sea": [
  {
   "id": "5692-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5692",
   "updated": "2026-10-14T14:49:53Z",
   "testDate": null,
   "build": "main f40b6930f + retained lab environment switches · warm cache · APS5_PROFILE_DRAW=1",
   "os": "Windows 11",
   "cpu": "AMD Ryzen AI 9 365",
   "gpu": "NVIDIA RTX 5070 Laptop · 8 GB",
   "driver": "617.42",
   "version": null,
   "patched": false,
   "summary": {
    "en": "The title screen runs at 2.4 FPS and later stops on the loading thread. The earlier 7.3–7.5 title figure uses a two-day-older lab base; #5596 alone was not isolated. This title-screen comparison does not replace the distinct earlier gameplay report.",
    "zh": "标题画面 2.4 FPS，之后在加载线程停止。此前 7.3–7.5 标题数据使用早两天的实验基线，未单独隔离 #5596；此标题对比不覆盖此前独立游戏过程报告。",
    "ar": "العنوان 2.4 FPS ثم توقف التحميل. 7.3–7.5 القديمة لبناء أقدم بيومين، لم يُعزل #5596. المقارنة لا تستبدل تقرير اللعب السابق.",
    "pt": "Título 2,4 FPS e posterior paragem na carga. 7,3–7,5 antigos de base dois dias anterior, #5596 não isolada. Não substitui o relato de jogo distinto.",
    "de": "Titel 2,4 FPS, später Ladefehler. Alte 7,3–7,5 auf zwei Tage älterer Basis, #5596 nicht isoliert. Kein Ersatz für früheren Gameplaybericht.",
    "fr": "Titre 2,4 FPS puis arrêt de chargement. Anciens 7,3–7,5 sur base deux jours plus ancienne, #5596 non isolé. Ne remplace pas le rapport de jeu antérieur.",
    "es": "Título 2,4 FPS y posterior fallo de carga. 7,3–7,5 previos en base dos días anterior, #5596 no aislada. No sustituye el informe de juego distinto."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen AI 9 365",
     "gpu": "NVIDIA RTX 5070 Laptop · 8 GB",
     "fps": "2.4",
     "context": {
      "en": "The title screen runs at 2.4 FPS and later stops on the loading thread. The earlier 7.3–7.5 title figure uses a two-day-older lab base; #5596 alone was not isolated. This title-screen comparison does not replace the distinct earlier gameplay report.",
      "zh": "标题画面 2.4 FPS，之后在加载线程停止。此前 7.3–7.5 标题数据使用早两天的实验基线，未单独隔离 #5596；此标题对比不覆盖此前独立游戏过程报告。",
      "ar": "العنوان 2.4 FPS ثم توقف التحميل. 7.3–7.5 القديمة لبناء أقدم بيومين، لم يُعزل #5596. المقارنة لا تستبدل تقرير اللعب السابق.",
      "pt": "Título 2,4 FPS e posterior paragem na carga. 7,3–7,5 antigos de base dois dias anterior, #5596 não isolada. Não substitui o relato de jogo distinto.",
      "de": "Titel 2,4 FPS, später Ladefehler. Alte 7,3–7,5 auf zwei Tage älterer Basis, #5596 nicht isoliert. Kein Ersatz für früheren Gameplaybericht.",
      "fr": "Titre 2,4 FPS puis arrêt de chargement. Anciens 7,3–7,5 sur base deux jours plus ancienne, #5596 non isolé. Ne remplace pas le rapport de jeu antérieur.",
      "es": "Título 2,4 FPS y posterior fallo de carga. 7,3–7,5 previos en base dos días anterior, #5596 no aislada. No sustituye el informe de juego distinto."
     }
    }
   ],
   "media": []
  }
 ],
 "red-dead-redemption": [
  {
   "id": "5895-windows-review-20261015",
   "platform": "windows",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5895",
   "updated": "2026-10-14T15:02:13Z",
   "testDate": null,
   "build": "main a0f5916a2 + required local startup changes · baseline b3fecb970208 / candidate 56552cf22f3b reusable draw-input snapshots",
   "os": "Windows · 26200",
   "cpu": null,
   "gpu": "NVIDIA RTX 4070 SUPER",
   "driver": "616.64",
   "version": null,
   "patched": true,
   "summary": {
    "en": "At Armadillo, reusable inputs reduce GPU time by 58 percent, but the CPU-bound base’s mean frame median changes from 434.8 to 441.9 ms: no FPS gain. A different base with #494/#1193/#1202/#5216 improves from 3.07 to 4.40 FPS. Keep these arms separate; neither is clean main or completion.",
    "zh": "Armadillo 的复用输入把 GPU 时间降低 58%，但 CPU 受限基线的平均帧中位数从 434.8 变为 441.9 ms，没有 FPS 提升。另加 #494／#1193／#1202／#5216 的基线从 3.07 提升至 4.40；必须分组，两者都不是干净 main 或通关。",
    "ar": "في Armadillo يخفض التعديل زمن GPU 58٪، لكن وسيط الإطار المتوسط للأساس CPU يتغير 434.8 إلى 441.9 ms بلا زيادة FPS. أساس آخر مع #494/#1193/#1202/#5216 يرتفع 3.07 إلى 4.40. المجموعتان منفصلتان، لا main نظيف أو إكمال.",
    "pt": "Em Armadillo, GPU cai 58%, mas a média das medianas na base CPU muda 434,8 para 441,9 ms, sem ganho FPS. Outra base com #494/#1193/#1202/#5216 melhora 3,07 para 4,40. Grupos distintos, nenhum main limpo/conclusão.",
    "de": "In Armadillo sinkt GPU-Zeit 58%, mittlere Frame-Mediane auf CPU-Basis aber 434,8 auf 441,9 ms: kein FPS-Gewinn. Andere Basis mit #494/#1193/#1202/#5216 steigt 3,07 auf 4,40. Getrennte Arme, kein sauberes main/Abschluss.",
    "fr": "À Armadillo GPU baisse de 58 %, mais moyenne des médianes sur base CPU passe de 434,8 à 441,9 ms : aucun gain FPS. Autre base avec #494/#1193/#1202/#5216 monte 3,07 à 4,40. Bras distincts, ni main propre ni fin.",
    "es": "En Armadillo GPU baja 58%, pero media de medianas en base CPU cambia 434,8 a 441,9 ms: sin ganancia FPS. Otra base con #494/#1193/#1202/#5216 sube 3,07 a 4,40. Brazos separados, sin main limpio ni finalización."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "high-on-life": [
  {
   "id": "5488-linux-nvidia-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5488",
   "updated": "2026-10-14T07:02:27Z",
   "testDate": null,
   "build": "main 18c438b10 + #4487/#5156/#5003/#5494 + local occlusion diagnostics",
   "os": "Linux",
   "cpu": null,
   "gpu": "NVIDIA RTX 4090",
   "driver": "615.78.08",
   "version": "01.120.000 · same-author savedata report #5487",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16 · Release. Home-base walls and props vanish with real occlusion counts; forcing every query visible removes those gaps during a 25-minute NVIDIA route. The CPU path still loses objects, more often on the separate headless Radeon Pro V620 VM at about 1 FPS. Neither forced visibility nor a merged synthetic fix establishes correct culling; current main after #5232 is awaiting a title retest. Save loading uses #5494’s opt-in, not a proven universal 1,000-chunk limit.",
    "zh": "构建工具：GCC 16 · Release. 真实遮挡计数使基地墙壁与物件消失；强制全部可见后，NVIDIA 25 分钟路线未出现这些缺口。CPU 路径仍丢物件，在独立无头 Radeon Pro V620 虚拟机约 1 FPS 时更频繁。强制可见或合成修复合并都不证明遮挡正确；#5232 后 main 等待游戏复测。存档载入使用 #5494 选择性开关，不是已证实的通用 1,000 chunk 上限。",
    "ar": "الأدوات: GCC 16 · Release. العدادات الحقيقية تخفي الجدران؛ فرض الظهور يزيل الفجوات في مسار NVIDIA لمدة 25 دقيقة. CPU يفقد أغراضاً أكثر في VM Radeon Pro V620 بلا شاشة قرب 1 FPS. لا تحقق للتغطية الصحيحة أو main بعد #5232. الحفظ بخيار #5494، لا حد 1000 عام مثبت.",
    "pt": "Ferramentas: GCC 16 · Release. Contagens reais ocultam paredes; forçar visibilidade retira falhas num percurso NVIDIA de 25 min. CPU perde mais objetos na VM V620 sem ecrã perto de 1 FPS. Sem culling validado nem reteste main após #5232. Gravação usa opt-in #5494, não limite universal de 1000 comprovado.",
    "de": "Werkzeuge: GCC 16 · Release. Echte Counts lassen Wände verschwinden; erzwungene Sichtbarkeit entfernt Lücken auf 25-min-NVIDIA-Route. CPU verliert mehr Objekte in headless V620-VM um 1 FPS. Kein korrektes Culling/main-Retest nach #5232 belegt. Saves nutzen #5494-Opt-in, keine bewiesene 1000-Chunk-Grenze.",
    "fr": "Outils : GCC 16 · Release. Les comptes réels masquent des murs ; visibilité forcée retire les trous sur 25 min NVIDIA. CPU perd davantage d’objets dans VM V620 sans écran vers 1 FPS. Culling correct/main après #5232 non retestés. Saves via opt-in #5494, pas limite universelle de 1000 prouvée.",
    "es": "Herramientas: GCC 16 · Release. Counts reales ocultan paredes; visibilidad forzada elimina huecos en ruta NVIDIA de 25 min. CPU pierde más objetos en VM V620 sin pantalla cerca de 1 FPS. Sin culling correcto ni retest main tras #5232. Guardado vía opt-in #5494, no límite universal probado de 1000."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "5488-linux-amd-review-20261015",
   "platform": "linux",
   "stage": "ingame",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5488",
   "updated": "2026-10-14T07:02:27Z",
   "testDate": null,
   "build": "main 18c438b10 + #4487/#5156/#5003/#5494 + local occlusion diagnostics",
   "os": "Ubuntu 24.04 · VM · Xorg dummy/software WSI · streamed",
   "cpu": "AMD EPYC 7452",
   "gpu": "AMD Radeon Pro V620",
   "driver": "Mesa 25.2.8 RADV",
   "version": "01.120.000 · same-author savedata report #5487",
   "patched": true,
   "summary": {
    "en": "Toolchain: GCC 16 · Release. Home-base walls and props vanish with real occlusion counts; forcing every query visible removes those gaps during a 25-minute NVIDIA route. The CPU path still loses objects, more often on the separate headless Radeon Pro V620 VM at about 1 FPS. Neither forced visibility nor a merged synthetic fix establishes correct culling; current main after #5232 is awaiting a title retest. Save loading uses #5494’s opt-in, not a proven universal 1,000-chunk limit.",
    "zh": "构建工具：GCC 16 · Release. 真实遮挡计数使基地墙壁与物件消失；强制全部可见后，NVIDIA 25 分钟路线未出现这些缺口。CPU 路径仍丢物件，在独立无头 Radeon Pro V620 虚拟机约 1 FPS 时更频繁。强制可见或合成修复合并都不证明遮挡正确；#5232 后 main 等待游戏复测。存档载入使用 #5494 选择性开关，不是已证实的通用 1,000 chunk 上限。",
    "ar": "الأدوات: GCC 16 · Release. العدادات الحقيقية تخفي الجدران؛ فرض الظهور يزيل الفجوات في مسار NVIDIA لمدة 25 دقيقة. CPU يفقد أغراضاً أكثر في VM Radeon Pro V620 بلا شاشة قرب 1 FPS. لا تحقق للتغطية الصحيحة أو main بعد #5232. الحفظ بخيار #5494، لا حد 1000 عام مثبت.",
    "pt": "Ferramentas: GCC 16 · Release. Contagens reais ocultam paredes; forçar visibilidade retira falhas num percurso NVIDIA de 25 min. CPU perde mais objetos na VM V620 sem ecrã perto de 1 FPS. Sem culling validado nem reteste main após #5232. Gravação usa opt-in #5494, não limite universal de 1000 comprovado.",
    "de": "Werkzeuge: GCC 16 · Release. Echte Counts lassen Wände verschwinden; erzwungene Sichtbarkeit entfernt Lücken auf 25-min-NVIDIA-Route. CPU verliert mehr Objekte in headless V620-VM um 1 FPS. Kein korrektes Culling/main-Retest nach #5232 belegt. Saves nutzen #5494-Opt-in, keine bewiesene 1000-Chunk-Grenze.",
    "fr": "Outils : GCC 16 · Release. Les comptes réels masquent des murs ; visibilité forcée retire les trous sur 25 min NVIDIA. CPU perd davantage d’objets dans VM V620 sans écran vers 1 FPS. Culling correct/main après #5232 non retestés. Saves via opt-in #5494, pas limite universelle de 1000 prouvée.",
    "es": "Herramientas: GCC 16 · Release. Counts reales ocultan paredes; visibilidad forzada elimina huecos en ruta NVIDIA de 25 min. CPU pierde más objetos en VM V620 sin pantalla cerca de 1 FPS. Sin culling correcto ni retest main tras #5232. Guardado vía opt-in #5494, no límite universal probado de 1000."
   },
   "benchmarks": [],
   "media": []
  }
 ],
 "astro-bot-ppsa21567": [
  {
   "id": "357-windows-review-20261015",
   "platform": "windows",
   "stage": "boot",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18925377",
   "updated": "2026-10-14T13:50:11Z",
   "testDate": null,
   "build": "main 85f240e3c",
   "os": "Windows 11 · 26300",
   "cpu": "AMD Ryzen 7 5800X",
   "gpu": "NVIDIA RTX 3080 Ti · 12 GB",
   "driver": "616.56",
   "version": "01.019.000 · PPSA21567",
   "patched": false,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 reaches the title intro in six 120–300-second runs, at 1.3–1.9 FPS; no button was pressed. Logos run faster. The same files on the older 9d2b7af30 fork instead crash on the audio thread before the title. Earlier fork gameplay used v01.018 and another setup, not this run.",
    "zh": "构建工具：WinLibs GCC 15.2.0. 内存：32 GB · system-managed page file. PPSA21567 v01.019 在六次 120–300 秒运行中到达标题开场，1.3–1.9 FPS，未按键；标志更快。同一文件在旧 9d2b7af30 分支则在标题前发生音频线程崩溃；此前分支游戏过程使用 v01.018 及另一环境。",
    "ar": "الأدوات: WinLibs GCC 15.2.0. الذاكرة: 32 GB · system-managed page file. PPSA21567 v01.019 يبلغ افتتاح العنوان في ست تجارب 120–300 ثانية بـ1.3–1.9 FPS دون إدخال. الشعارات أسرع. نفس الملفات على 9d2b7af30 تتعطل بالصوت قبل العنوان؛ اللعب الأقدم استخدم v01.018 وبيئة أخرى.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 chega à abertura em seis execuções de 120–300 s, a 1,3–1,9 FPS sem entrada. Logótipos mais rápidos. Os mesmos ficheiros no fork 9d2b7af30 falham no áudio antes do título; o jogo anterior usava v01.018 e outra configuração.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 erreicht Titelintro in sechs Läufen von 120–300 s mit 1,3–1,9 FPS ohne Eingabe. Logos schneller. Dieselben Dateien crashen auf 9d2b7af30 im Audio vor dem Titel; früheres Fork-Gameplay nutzte v01.018 und andere Umgebung.",
    "fr": "Outils : WinLibs GCC 15.2.0. Mémoire : 32 GB · system-managed page file. PPSA21567 v01.019 atteint l’intro du titre en six essais de 120–300 s, à 1,3–1,9 FPS sans entrée. Logos plus rapides. Les mêmes fichiers plantent dans l’audio sur 9d2b7af30 avant le titre ; le jeu antérieur utilisait v01.018 et un autre environnement.",
    "es": "Herramientas: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 alcanza intro en seis pruebas de 120–300 s, a 1,3–1,9 FPS sin entrada. Logos más rápidos. Los mismos archivos fallan en audio en 9d2b7af30 antes del título; juego anterior usaba v01.018 y otro equipo."
   },
   "benchmarks": [
    {
     "cpu": "AMD Ryzen 7 5800X",
     "gpu": "NVIDIA RTX 3080 Ti · 12 GB",
     "fps": "1.3–1.9",
     "context": {
      "en": "Toolchain: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 reaches the title intro in six 120–300-second runs, at 1.3–1.9 FPS; no button was pressed. Logos run faster. The same files on the older 9d2b7af30 fork instead crash on the audio thread before the title. Earlier fork gameplay used v01.018 and another setup, not this run.",
      "zh": "构建工具：WinLibs GCC 15.2.0. 内存：32 GB · system-managed page file. PPSA21567 v01.019 在六次 120–300 秒运行中到达标题开场，1.3–1.9 FPS，未按键；标志更快。同一文件在旧 9d2b7af30 分支则在标题前发生音频线程崩溃；此前分支游戏过程使用 v01.018 及另一环境。",
      "ar": "الأدوات: WinLibs GCC 15.2.0. الذاكرة: 32 GB · system-managed page file. PPSA21567 v01.019 يبلغ افتتاح العنوان في ست تجارب 120–300 ثانية بـ1.3–1.9 FPS دون إدخال. الشعارات أسرع. نفس الملفات على 9d2b7af30 تتعطل بالصوت قبل العنوان؛ اللعب الأقدم استخدم v01.018 وبيئة أخرى.",
      "pt": "Ferramentas: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 chega à abertura em seis execuções de 120–300 s, a 1,3–1,9 FPS sem entrada. Logótipos mais rápidos. Os mesmos ficheiros no fork 9d2b7af30 falham no áudio antes do título; o jogo anterior usava v01.018 e outra configuração.",
      "de": "Werkzeuge: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 erreicht Titelintro in sechs Läufen von 120–300 s mit 1,3–1,9 FPS ohne Eingabe. Logos schneller. Dieselben Dateien crashen auf 9d2b7af30 im Audio vor dem Titel; früheres Fork-Gameplay nutzte v01.018 und andere Umgebung.",
      "fr": "Outils : WinLibs GCC 15.2.0. Mémoire : 32 GB · system-managed page file. PPSA21567 v01.019 atteint l’intro du titre en six essais de 120–300 s, à 1,3–1,9 FPS sans entrée. Logos plus rapides. Les mêmes fichiers plantent dans l’audio sur 9d2b7af30 avant le titre ; le jeu antérieur utilisait v01.018 et un autre environnement.",
      "es": "Herramientas: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 alcanza intro en seis pruebas de 120–300 s, a 1,3–1,9 FPS sin entrada. Logos más rápidos. Los mismos archivos fallan en audio en 9d2b7af30 antes del título; juego anterior usaba v01.018 y otro equipo."
     }
    }
   ],
   "media": []
  },
  {
   "id": "357-windows-fork-review-20261015",
   "platform": "windows",
   "stage": "blocked",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-18925377",
   "updated": "2026-10-14T13:50:11Z",
   "testDate": null,
   "build": "danielradosa/astro-windows-1013 9d2b7af30",
   "os": "Windows 11 · 26300",
   "cpu": "AMD Ryzen 7 5800X",
   "gpu": "NVIDIA RTX 3080 Ti · 12 GB",
   "driver": "616.56",
   "version": "01.019.000 · PPSA21567",
   "patched": true,
   "summary": {
    "en": "Toolchain: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 reaches the title intro in six 120–300-second runs, at 1.3–1.9 FPS; no button was pressed. Logos run faster. The same files on the older 9d2b7af30 fork instead crash on the audio thread before the title. Earlier fork gameplay used v01.018 and another setup, not this run.",
    "zh": "构建工具：WinLibs GCC 15.2.0. 内存：32 GB · system-managed page file. PPSA21567 v01.019 在六次 120–300 秒运行中到达标题开场，1.3–1.9 FPS，未按键；标志更快。同一文件在旧 9d2b7af30 分支则在标题前发生音频线程崩溃；此前分支游戏过程使用 v01.018 及另一环境。",
    "ar": "الأدوات: WinLibs GCC 15.2.0. الذاكرة: 32 GB · system-managed page file. PPSA21567 v01.019 يبلغ افتتاح العنوان في ست تجارب 120–300 ثانية بـ1.3–1.9 FPS دون إدخال. الشعارات أسرع. نفس الملفات على 9d2b7af30 تتعطل بالصوت قبل العنوان؛ اللعب الأقدم استخدم v01.018 وبيئة أخرى.",
    "pt": "Ferramentas: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 chega à abertura em seis execuções de 120–300 s, a 1,3–1,9 FPS sem entrada. Logótipos mais rápidos. Os mesmos ficheiros no fork 9d2b7af30 falham no áudio antes do título; o jogo anterior usava v01.018 e outra configuração.",
    "de": "Werkzeuge: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 erreicht Titelintro in sechs Läufen von 120–300 s mit 1,3–1,9 FPS ohne Eingabe. Logos schneller. Dieselben Dateien crashen auf 9d2b7af30 im Audio vor dem Titel; früheres Fork-Gameplay nutzte v01.018 und andere Umgebung.",
    "fr": "Outils : WinLibs GCC 15.2.0. Mémoire : 32 GB · system-managed page file. PPSA21567 v01.019 atteint l’intro du titre en six essais de 120–300 s, à 1,3–1,9 FPS sans entrée. Logos plus rapides. Les mêmes fichiers plantent dans l’audio sur 9d2b7af30 avant le titre ; le jeu antérieur utilisait v01.018 et un autre environnement.",
    "es": "Herramientas: WinLibs GCC 15.2.0. RAM: 32 GB · system-managed page file. PPSA21567 v01.019 alcanza intro en seis pruebas de 120–300 s, a 1,3–1,9 FPS sin entrada. Logos más rápidos. Los mismos archivos fallan en audio en 9d2b7af30 antes del título; juego anterior usaba v01.018 y otro equipo."
   },
   "benchmarks": [],
   "media": []
  },
  {
   "id": "5645-linux-review-20261015",
   "platform": "linux",
   "stage": "menu",
   "evidence": "community",
   "source": "https://github.com/boykopovar/AnyPS5/issues/5645",
   "updated": "2026-10-14T12:40:06Z",
   "testDate": null,
   "build": "main · exact head unreported + #5309/#5390 + local upload diagnostics",
   "os": "Linux · RADV",
   "cpu": null,
   "gpu": "AMD Radeon RX 9070 XT",
   "driver": null,
   "version": null,
   "patched": true,
   "summary": {
    "en": "New Game starts the opening robot cutscene, then a bone upload assertion stops progress around 70–80 percent. Local hooks encounter a spill bound. No controllable scene or FPS is verified, and internal game threads are not gameplay evidence.",
    "zh": "新游戏开始机器人开场过场，约 70–80% 时骨骼上传断言停止；本地 hook 又触及溢出边界。未验证可操作场景或 FPS，内部游戏线程不是游戏过程证据。",
    "ar": "تبدأ New Game مشهد الروبوت ثم يوقفه رفع العظام عند 70–80٪. hooks المحلية تبلغ حد spill. لا تحكم أو FPS موثقان؛ الخيوط ليست دليل لعب.",
    "pt": "Novo Jogo inicia a cena do robô, depois a carga de ossos para aos 70–80%. Hooks locais atingem limite. Sem cena controlável nem FPS; threads não são jogo.",
    "de": "Neues Spiel startet Robotersequenz, Knochen-Upload stoppt bei 70–80%. Lokale Hooks erreichen Grenze. Keine steuerbare Szene/FPS; Threads belegen kein Gameplay.",
    "fr": "Nouvelle partie lance la cinématique du robot, puis l’upload osseux bloque vers 70–80 %. Hooks locaux atteignent une limite. Aucun contrôle/FPS ; threads ne prouvent pas le jeu.",
    "es": "Nueva partida inicia escena del robot, luego upload de huesos para al 70–80%. Hooks locales alcanzan límite. Sin escena controlable ni FPS; threads no prueban juego."
   },
   "benchmarks": [],
   "media": []
  }
 ]
};
for(const [slug,reports] of Object.entries(nightlyReports15)){maintenanceReports[slug]=[...(maintenanceReports[slug]||[]),...reports];maintenanceReviewed[slug]="2026-10-15";}
maintenanceGames.push(...([
 {
  "slug": "ea-sports-ufc-6",
  "name": "EA SPORTS UFC 6",
  "titleId": "PPSA23566",
  "edition": "PS5 · PPSA23566",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "syobon-action-homebrew",
  "name": "Syobon Action · PS5 homebrew port",
  "titleId": "PPSA47402",
  "edition": "PS5 homebrew · PPSA47402",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "dave-the-diver",
  "name": "DAVE THE DIVER",
  "titleId": "PPSA19115",
  "edition": "PS5 · PPSA19115",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "marvels-wolverine",
  "name": "Marvel’s Wolverine",
  "titleId": "PPSA03671",
  "edition": "PS5 · PPSA03671",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "resident-evil-2-remake",
  "name": "Resident Evil 2",
  "titleId": "PPSA04288",
  "edition": "PS5 · PPSA04288",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "doom-doom-ii",
  "name": "DOOM + DOOM II",
  "titleId": "PPSA21444",
  "edition": "PS5 · PPSA21444",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "heretic-hexen",
  "name": "Heretic + Hexen",
  "titleId": "PPSA26525",
  "edition": "PS5 · PPSA26525",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "castlevania-belmonts-curse",
  "name": "Castlevania: Belmont’s Curse",
  "titleId": "PPSA35399",
  "edition": "PS5 · PPSA35399",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "onimusha-way-of-the-sword",
  "name": "Onimusha: Way of the Sword",
  "titleId": "PPSA27836",
  "edition": "PS5 · PPSA27836",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "cat-quest-iii",
  "name": "Cat Quest III",
  "titleId": "PPSA15065",
  "edition": "PS5 · PPSA15065",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "withering-rooms",
  "name": "Withering Rooms",
  "titleId": "PPSA21297",
  "edition": "PS5 · PPSA21297",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "007-first-light",
  "name": "007 First Light",
  "titleId": "PPSA11386",
  "edition": "PS5 · PPSA11386",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "void-terrarium-ppsa03042",
  "name": "Void Terrarium++ · PPSA03042",
  "titleId": "PPSA03042",
  "edition": "PS5 · PPSA03042",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "hollow-knight-voidheart",
  "name": "Hollow Knight: Voidheart Edition",
  "titleId": "PPSA34971",
  "edition": "PS5 · PPSA34971",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "marvel-cosmic-invasion",
  "name": "MARVEL Cosmic Invasion",
  "titleId": "PPSA29629",
  "edition": "PS5 · PPSA29629",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "mgs4-master-collection",
  "name": "METAL GEAR SOLID 4: Guns of the Patriots · Master Collection",
  "titleId": "PPSA18194",
  "edition": "PS5 · PPSA18194",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "saros",
  "name": "SAROS",
  "titleId": "PPSA07631",
  "edition": "PS5 · PPSA07631",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "fifa-21",
  "name": "FIFA 21",
  "titleId": "PPSA01327",
  "edition": "PS5 · PPSA01327",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "lies-of-p",
  "name": "Lies of P",
  "titleId": "PPSA10261",
  "edition": "PS5 · PPSA10261",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "ghostrunner",
  "name": "Ghostrunner",
  "titleId": "PPSA03685",
  "edition": "PS5 · PPSA03685",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "guardians-of-the-galaxy",
  "name": "Marvel’s Guardians of the Galaxy",
  "titleId": "PPSA01748",
  "edition": "PS5 · PPSA01748",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "hello-neighbor-2",
  "name": "Hello Neighbor 2",
  "titleId": "PPSA07426",
  "edition": "PS5 · PPSA07426",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "steins-gate-reboot",
  "name": "STEINS;GATE RE:BOOT",
  "titleId": "PPSA36591",
  "edition": "PS5 · PPSA36591",
  "reviewed": "2026-10-15"
 },
 {
  "slug": "resonance-plague-tale-legacy",
  "name": "Resonance: A Plague Tale Legacy",
  "titleId": "PPSA30601",
  "edition": "PS5 · PPSA30601",
  "reviewed": "2026-10-15"
 }
] as Omit<Game,"reports">[]).map(game=>({...game,reports:[]})));
