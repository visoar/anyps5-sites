import {L,type Text} from './model';
import metadata from './github-source-status.json';
export interface DevelopmentNote {number:number;title:Text;summary:Text;games:string[]}
export const developmentNotes:DevelopmentNote[]=[
{
 "number": 7636,
 "games": [],
 "title": {
  "en": "Linux preinit regression remains scoped",
  "zh": "Linux preinit回归需按程序判断",
  "ar": "تراجع Linux preinit محدود",
  "pt": "Regressão preinit Linux por aplicação",
  "de": "Linux-Preinit-Regression nach Programm",
  "fr": "Régression preinit Linux par programme",
  "es": "Regresión preinit Linux por programa"
 },
 "summary": {
  "en": "After #6112, a97-title homebrew catalog on376c04029 reports duplicate destructor registration. #7639 alone advances Wind Waker/Xash/Ruffle only to duplicate atexit-count abort. MXGP26 on400baa252b runs2/2 to140s, so “every Linux title” is not established. Exact callbacks/module initialization remain under investigation.",
  "zh": "#6112后，376c04029上的97项自制目录报告重复析构注册；#7639单独仅让Wind Waker／Xash／Ruffle推进到重复atexit-count中止。MXGP26在400baa252b两次到140秒，不能称全部Linux游戏失败；回调／模块初始化仍在调查。",
  "ar": "كتالوج97 homebrew يذكر تكرار التسجيل بعد#6112؛#7639 وحده يصل لخطأatexit التالي. MXGP26 يمر2/2 إلى140ث على400baa، فلا يعمم لكلLinux.",
  "pt": "Catálogo97homebrew relata registo duplicado pós#6112;#7639 só avança ao erroatexit. MXGP26 passa2/2 até140s em400baa, sem generalizar Linux.",
  "de": "97Homebrew-Katalog meldet doppelte Registrierung nach#6112;#7639 führt nur zum nächsten Atexitfehler. MXGP26 läuft2/2 bis140s auf400baa, kein allgemeiner Linuxausfall.",
  "fr": "Catalogue97homebrew signale doublon après#6112 ;#7639 avance seulement à erreuratexit. MXGP26 passe2/2 jusqu’à140s sur400baa, pas panne Linux générale.",
  "es": "Catálogo97homebrew reporta registro duplicado tras#6112;#7639 solo avanza al erroratexit. MXGP26 pasa2/2 hasta140s en400baa, sin generalizar Linux."
 }
},
{
 "number": 7623,
 "games": [],
 "title": {
  "en": "AMD exec-mask proposal has ISA evidence",
  "zh": "AMD exec掩码提案有ISA证据",
  "ar": "دليل ISA لاقتراح AMD exec",
  "pt": "Proposta AMD exec com ISA",
  "de": "AMD-Exec-Vorschlag mit ISA",
  "fr": "Proposition AMD exec avec ISA",
  "es": "Propuesta AMD exec con ISA"
 },
 "summary": {
  "en": "Open #7623 addresses RX6700XT Windows driver32.0.21045.5002 miscompilation of an empty exec-mask check; author ISA and tests support that case. Layered-volume failures involve cache order separately. Main retains its AMD-proprietary robustness exclusion; RADV and title gameplay gains are not demonstrated.",
  "zh": "开放#7623针对RX6700XT Windows驱动32.0.21045.5002对空exec掩码检查的错误编译，作者ISA及测试支持此个案；分层体积失败另涉及缓存顺序。main保留AMD专有驱动robustness排除，未证明RADV或游戏提速。",
  "ar": "#7623 مفتوح لعطل exec علىRX6700XT Windows32.0.21045.5002 بدليلISA؛ volume/cache منفصل. استثناءmain باق، لا دليلRADV أو تسريع لعبة.",
  "pt": "#7623 aberto trata exec RX6700XT Windows32.0.21045.5002 comISA; volume/cache separado. Exclusão main permanece, sem ganhoRADV/jogo.",
  "de": "#7623 offen für Exec-Fehler RX6700XT Windows32.0.21045.5002 mitISA; Volume/Cache getrennt. Main-Ausnahme bleibt, kein RADV-/Spielgewinn.",
  "fr": "#7623 ouvert corrige exec RX6700XT Windows32.0.21045.5002 avecISA ; volume/cache distincts. Exclusion main reste, pas gainRADV/jeu.",
  "es": "#7623 abierto trata exec RX6700XT Windows32.0.21045.5002 conISA; volumen/caché separado. Exclusión main sigue, sin gananciaRADV/juego."
 }
},
{
 "number": 6012,
 "games": [],
 "title": {
  "en": "Optional overlay merged after v0.1.2",
  "zh": "可选叠加层在v0.1.2后合入",
  "ar": "دمج طبقة اختيارية بعدv0.1.2",
  "pt": "Sobreposição integrada apósv0.1.2",
  "de": "Overlay nachv0.1.2 integriert",
  "fr": "Surimpression intégrée aprèsv0.1.2",
  "es": "Superposición integrada trasv0.1.2"
 },
 "summary": {
  "en": "#6012 merged4ed044d51 with F10/ANYPS5_OVERLAY. Presents include loading/black output; PROFILED and overlapping GPU sums must be interpreted in context. Extra render pass, not a title speedup or compatibility test.",
  "zh": "#6012于4ed044d51合入F10／ANYPS5_OVERLAY。呈现计数含加载／黑屏，PROFILED及重叠GPU总时长需按场景解读；增加渲染pass，非游戏提速或兼容实测。",
  "ar": "#6012 مدمج4ed044d51؛ FPS يشمل السواد/التحميل وGPU متداخل، pass إضافي لا تسريع/اختبار لعبة.",
  "pt": "#6012 integrado4ed044d51; FPS inclui preto/carga eGPU sobreposto, pass extra não ganho/teste jogo.",
  "de": "#6012 integriert4ed044d51; FPS zählt Schwarz/Laden undGPU überlappt, Zusatzpass kein Spielgewinn/-test.",
  "fr": "#6012 intégré4ed044d51 ; FPS inclut noir/charge etGPU chevauche, passe extra sans gain/test jeu.",
  "es": "#6012 integrado4ed044d51; FPS incluye negro/carga yGPU solapa, pass extra sin ganancia/test juego."
 }
},
{
 "number": 7335,
 "games": [],
 "title": {
  "en": "Local trophy statistics merged",
  "zh": "本地奖杯统计已合入",
  "ar": "دمج إحصاءات الجوائز المحلية",
  "pt": "Estatísticas de troféus integradas",
  "de": "Lokale Trophäenstatistik integriert",
  "fr": "Statistiques trophées intégrées",
  "es": "Estadísticas trofeos integradas"
 },
 "summary": {
  "en": "#7335 mergedc4fea909a and #7262 merged199e2ceb2. Local trophy/UDS persistence handles latest integer stats and simple rules; icons, notifications, callbacks and PSN sync remain unsupported. API implementation does not certify a title’s trophy progression.",
  "zh": "#7335合入c4fea909a，#7262合入199e2ceb2。本地trophy／UDS持久化覆盖最新整数统计和简单规则；图标、通知、回调和PSN同步仍不支持。API实现不能证明具体游戏奖杯推进。",
  "ar": "#7335/#7262 مدمجان؛ إحصاء صحيح وقواعد بسيطة محلياً، بلا أيقونات/إشعار/callback/PSN. API ليست إثبات جوائز لعبة.",
  "pt": "#7335/#7262 integrados; inteiros/regras simples locais, sem ícones/notificações/callback/PSN. API não certifica troféus de jogo.",
  "de": "#7335/#7262 integriert; lokale Integer/einfache Regeln, keine Icons/Meldungen/Callbacks/PSN. API bestätigt keine Spieltrophäen.",
  "fr": "#7335/#7262 intégrés ; entiers/règles simples locaux, sans icônes/notifications/callback/PSN. API ne valide pas trophées d’un jeu.",
  "es": "#7335/#7262 integrados; enteros/reglas simples locales, sin iconos/notificaciones/callback/PSN. API no certifica trofeos de juego."
 }
},
{
 "number": 7332,
 "games": [
  "god-of-war-sons-of-sparta",
  "ccleste-homebrew"
 ],
 "title": {
  "en": "Open Mac integration has scoped M4 Pro title reports",
  "zh": "开放Mac整合新增M4 Pro游戏报告",
  "ar": "تقارير M4 Pro محدودة لتكامل Mac المفتوح",
  "pt": "PR Mac aberto tem testes M4 Pro",
  "de": "Offene Mac-Integration mit M4-Pro-Berichten",
  "fr": "PR Mac ouvert avec rapports M4 Pro",
  "es": "PR Mac abierto con informes M4 Pro"
 },
 "summary": {
  "en": "Open #7332 is Rosetta2/MoltenVK, not native ARM64 or a release. On M4 Pro16-core/24GB, macOS27.0.1, MoltenVK1.4.2, head690c044a6 +maina62c724c3: Lana PPSA19450 v01.010.000 reaches a corrupt≈10 FPS menu only with local RTLD_GLOBAL; Sparta PPSA28997 v01.008.001 also needs #6842, reaches gameplay≈15 FPS with sound/keyboard and background corruption. ccleste1.00 PPSA59322 stops at barycentrics. Laterdf24fc821 +main376c04029 passes1455 general tests with GPU skipped; titles/GPU not replayed on that head.",
  "zh": "开放#7332属于Rosetta2／MoltenVK，非原生ARM64或发行版。M4 Pro16核GPU／24GB、macOS27.0.1、MoltenVK1.4.2，690c044a6+maina62c724c3：Lana PPSA19450 v01.010.000需本地RTLD_GLOBAL才到约10FPS且背景损坏的菜单；Sparta PPSA28997 v01.008.001另需#6842，到约15FPS游玩，声音／键盘有效但背景损坏。ccleste1.00 PPSA59322停于重心坐标。较新df24fc821+main376c04029一般测试1455通过但GPU跳过，该头未重测游戏／GPU。",
  "ar": "#7332 مفتوح Rosetta2/MoltenVK لاARM64 أصلي/إصدار. M4Pro16GPU/24GB macOS27.0.1 MVK1.4.2،690c044a6+maina62c: Lana19450 v01.010.000 قائمة10 معRTLD_GLOBAL محلي وفساد؛ Sparta28997 v01.008.001 +#6842 لعب15 وصوت/لوحة مع فساد؛ ccleste59322 v1.00 يتوقف barycentrics. df24+main376 يمر1455 عامة وGPU متجاوز، بلا إعادة ألعاب عليه.",
  "pt": "#7332 aberto Rosetta2/MoltenVK, nãoARM64 nativo/release. M4Pro16GPU/24GB macOS27.0.1 MVK1.4.2,690c044a6+maina62c: Lana19450 v01.010.000 menu10 corrompido comRTLD_GLOBAL local; Sparta28997 v01.008.001 +#6842 jogo15/som/teclado com corrupção; ccleste59322 v1.00 falha barycentrics. df24+main376 passa1455 gerais comGPU ignorada, sem repetir jogos.",
  "de": "#7332 offen, Rosetta2/MoltenVK statt nativemARM64/Release. M4Pro16GPU/24GB macOS27.0.1 MVK1.4.2,690c044a6+maina62c: Lana19450 v01.010.000 fehlerhaftes Menü10 mit lokalemRTLD_GLOBAL; Sparta28997 v01.008.001 +#6842 Gameplay15/Ton/Tastatur mit Bildfehlern; ccleste59322 v1.00 Baryzentrikstopp. df24+main376 besteht1455 allgemeine Tests, GPU übersprungen, Spiele nicht erneut geprüft.",
  "fr": "#7332 ouvert Rosetta2/MoltenVK, pasARM64 natif/release. M4Pro16GPU/24GB macOS27.0.1 MVK1.4.2,690c044a6+maina62c : Lana19450 v01.010.000 menu10 corrompu avecRTLD_GLOBAL local ; Sparta28997 v01.008.001 +#6842 jeu15/son/clavier avec corruption ; ccleste59322 v1.00 arrêt barycentriques. df24+main376 passe1455 généraux, GPU ignoré, jeux non rejoués.",
  "es": "#7332 abierto Rosetta2/MoltenVK, noARM64 nativo/release. M4Pro16GPU/24GB macOS27.0.1 MVK1.4.2,690c044a6+maina62c: Lana19450 v01.010.000 menú10 corrupto conRTLD_GLOBAL local; Sparta28997 v01.008.001 +#6842 juego15/audio/teclado con corrupción; ccleste59322 v1.00 falla baricéntricas. df24+main376 pasa1455 generales, GPU omitida, juegos sin repetir."
 }
},
{
 "number": 6652,
 "games": [],
 "title": {
  "en": "iOS interpreter progress is not PS5 execution",
  "zh": "iOS解释器进展不等于PS5运行",
  "ar": "تقدم مفسر iOS ليس تشغيل PS5",
  "pt": "Intérprete iOS não executa PS5",
  "de": "iOS-Interpreter ist keine PS5-Ausführung",
  "fr": "Interpréteur iOS sans exécution PS5",
  "es": "Intérprete iOS no ejecuta PS5"
 },
 "summary": {
  "en": "The updated fork report claims2047 compiler-generated compatibility cases plus guest-memory/loading/relocation prototypes. It explicitly cannot run PS5 games, and physical iOS ARM64 execution remains unshown. These are author-reported interpreter checks, not game tests, a release or independently reproduced performance.",
  "zh": "分支更新报告2047项编译生成兼容用例，以及guest内存／加载／重定位原型；明确仍不能运行PS5游戏，真实iOS ARM64执行尚未展示。这是作者解释器测试，不是游戏实测、发行版或本站独立性能验证。",
  "ar": "الفرع يذكر2047 حالة مترجم وذاكرة/تحميل/relocation أولية. لا يشغل ألعاب PS5 ولم يعرض iOS فعلياً. اختبارات مؤلف لا لعبة أو إصدار أو أداء مستقل.",
  "pt": "Fork relata2047 casos compilados e memória/loader/relocation. Não executa PS5 nem demonstra iOS físico. Testes do autor, sem jogo/release/desempenho independente.",
  "de": "Fork meldet2047 Compilerfälle und Speicher/Loader/Relokation. Keine PS5-Spiele oder physische iOS-Ausführung. Autorentests, kein Spiel/Release/unabhängiger Benchmark.",
  "fr": "Fork annonce2047 cas compilés et mémoire/loader/relocation. Pas jeux PS5 ni démonstration iOS physique. Tests d’auteur, pas jeu/release/performance indépendante.",
  "es": "Fork reporta2047 casos compilados y memoria/loader/relocation. Sin juegos PS5 ni iOS físico demostrado. Tests del autor, no juego/release/rendimiento independiente."
 }
},
{
 "number": 6060,
 "games": [
  "sword-of-the-sea",
  "mandragora",
  "soul-hackers-2"
 ],
 "title": {
  "en": "Windows import tracking and settle follow-ups merged",
  "zh": "Windows导入追踪及settle后续已合入",
  "ar": "دمج تتبع imports ومتابعات settle",
  "pt": "Tracking e settle Windows integrados",
  "de": "Windows-Tracking und Settle integriert",
  "fr": "Suivi Windows et settle intégrés",
  "es": "Tracking Windows y settle integrados"
 },
 "summary": {
  "en": "#6060 merged at0afa6a607 after v0.1.2; successful write-watch probing and a second graphics queue enable watched private imports. #6678 merged755fecb33 and #6455 merged4566cc337 on October18. Historical local64KiB-floor tests retain their own builds and are not automatically current-main or released speedups.",
  "zh": "#6060在v0.1.2之后于0afa6a607合入，write-watch探测成功及第二图形队列允许追踪私有导入。10月18日#6678合入755fecb33、#6455合入4566cc337。历史本地64KiB下限测量保留原构建，不自动变为当前main或发行版提速。",
  "ar": "#6060 مدمج بعدv0.1.2؛ probe وطابور ثان للتتبع. #6678 و#6455 دمجا18أكتوبر؛ قياسات64KiB المحلية تبقى ببنائها ولا تصبح سرعة main/إصدار.",
  "pt": "#6060 integrado apósv0.1.2 com probe/segunda fila. #6678/#6455 integrados18outubro; medições64KiB locais mantêm build, não viram ganho main/release.",
  "de": "#6060 nachv0.1.2 mit Probe/Zweitqueue integriert. #6678/#6455 am18.Oktober integriert; lokale64KiB-Tests behalten Builds, kein automatischer Main-/Releasegewinn.",
  "fr": "#6060 intégré aprèsv0.1.2 avec probe/seconde file. #6678/#6455 intégrés18octobre ; tests64KiB locaux gardent builds, pas gain main/release automatique.",
  "es": "#6060 integrado trasv0.1.2 con probe/segunda cola. #6678/#6455 integrados18octubre; tests64KiB locales conservan builds, sin ganancia main/release automática."
 }
},
{
 "number": 7294,
 "games": [
  "sonic-unleashed-recompiled"
 ],
 "title": {
  "en": "Sonic gameplay requires its composed fork",
  "zh": "Sonic游玩证据属于组合分支",
  "ar": "لعب Sonic على فرع مركب",
  "pt": "Sonic joga num fork composto",
  "de": "Sonic-Gameplay auf zusammengesetztem Fork",
  "fr": "Sonic jouable sur fork composé",
  "es": "Sonic jugable en fork compuesto"
 },
 "summary": {
  "en": "#7294 volume layouts and #7573 placeholder-MSAA support merged; #7310 remains open. Earlier4c2cab875 stopped in the intro. Later completed0b06cc662 on main39ff296960 plus many PRs/adaptations reaches controllable daytime play/one ring for3600s. No clock edits; dialogue1.03–1.05 counter is not sustained-play FPS. Newer0e7fba38 replay is unfinished.",
  "zh": "#7294体积布局及#7573占位MSAA已合入，#7310仍开放。旧4c2cab875停于片头；后来的0b06cc662基于main39ff296960并组合多PR／适配，完成3600秒到可操作白天关卡及1枚环。无时钟改动，对话1.03–1.05计数非持续游玩FPS，更新0e7fba38重放未完成。",
  "ar": "#7294/#7573 مدمجان و#7310 مفتوح. القديم4c2 يتوقف بالمقدمة؛0b06 علىmain39ff مع تعديلات متعددة يبلغ لعباً/حلقة3600ث بلا تعديل ساعة. عداد الحوار ليس FPS لعب، replay أحدث غير مكتمل.",
  "pt": "#7294/#7573 integrados, #7310 aberto. Antigo4c2 falha intro;0b06 emmain39ff com stack chega a jogo/anel3600s sem clock edit. Contador diálogo não é FPS sustentado; replay novo incompleto.",
  "de": "#7294/#7573 integriert, #7310 offen. Alter4c2 stoppt Intro;0b06 aufmain39ff mit Stack erreicht Spiel/Ring3600s ohne Uhränderung. Dialogzähler kein Dauer-FPS, neuer Replay unvollständig.",
  "fr": "#7294/#7573 intégrés, #7310 ouvert. Ancien4c2 arrêté intro ;0b06 surmain39ff avec stack atteint jeu/anneau3600s sans horloge modifiée. Compteur dialogue pas FPS durable, replay récent incomplet.",
  "es": "#7294/#7573 integrados, #7310 abierto. Antiguo4c2 falla intro;0b06 enmain39ff con stack llega a juego/anillo3600s sin reloj modificado. Contador diálogo no FPS sostenido, replay nuevo incompleto."
 }
},
{
 "number": 5835,
 "games": [],
 "title": {
  "en": "Read-only app0 archives merged",
  "zh": "只读app0压缩包已合入",
  "ar": "دمج أرشيف app0 للقراءة",
  "pt": "Arquivo app0 só de leitura integrado",
  "de": "app0-Lesearchiv integriert",
  "fr": "Archive app0 en lecture intégrée",
  "es": "Archivo app0 de lectura integrado"
 },
 "summary": {
  "en": "#5835 merged at9158f031c after v0.1.2. app0.zar supplements loose files; directory and non-read paths still have explicit gaps. Upstream tested archive APIs, not a game. Keep executable/modules/metadata loose and do not translate this into general game support.",
  "zh": "#5835在v0.1.2之后于9158f031c合入。app0.zar补充松散文件，目录及非读取路径仍有明确缺口。上游验证压缩包API，未实测游戏；程序／模块／元数据留在磁盘，不能据此提升游戏结论。",
  "ar": "#5835 مدمج بعدv0.1.2؛ app0.zar يكمل الملفات، مع فجوات أدلة/نداءات. اختبارات API لا لعبة؛ أبقِ البرنامج/modules/metadata خارج الأرشيف.",
  "pt": "#5835 integrado após v0.1.2; app0.zar complementa ficheiros com lacunas em diretórios/chamadas. Testes API, sem jogo; programa/modules/metadata soltos.",
  "de": "#5835 nach v0.1.2 integriert; app0.zar ergänzt Dateien, Verzeichnis-/Aufruflücken bleiben. API-Tests ohne Spiel; Programm/Module/Metadaten lose halten.",
  "fr": "#5835 intégré après v0.1.2 ; app0.zar complète fichiers, lacunes répertoires/appels. Tests API sans jeu ; programme/modules/métadonnées libres.",
  "es": "#5835 integrado tras v0.1.2; app0.zar complementa archivos, quedan lagunas de directorios/llamadas. Tests API sin juego; programa/modules/metadata sueltos."
 }
},
{
 "number": 5875,
 "games": [
  "olliolli-world"
 ],
 "title": {
  "en": "Pipeline journal replays warm work",
  "zh": "流水线日志重放已见工作",
  "ar": "إعادة عمل pipelines المسجل",
  "pt": "Diário repete pipelines anteriores",
  "de": "Pipeline-Journal spielt Vorarbeit ab",
  "fr": "Journal rejoue pipelines précédents",
  "es": "Diario reproduce pipelines anteriores"
 },
 "summary": {
  "en": "#5875 merged at0615cd2b8. The GPU/driver-specific journal prebuilds previously materialized pipelines; #6784 subsequently fixes mesh recipe serialization and resets the format. This is a current-main cache mechanism, not a promise of higher FPS or inclusion in v0.1.2.",
  "zh": "#5875于0615cd2b8合入，GPU／驱动专属日志提前构建已出现过的流水线；后续#6784修复mesh配方序列化并升级格式。这是main缓存机制，不承诺FPS提升，也不属于v0.1.2。",
  "ar": "#5875 مدمج؛ journal خاصGPU/تعريف يعيد pipelines. #6784 يصلح mesh ويغير الصيغة. آلية main لا وعدFPS أوv0.1.2.",
  "pt": "#5875 integrado; journal porGPU/driver repete pipelines. #6784 corrige mesh/formato. Cache main, sem promessaFPS ouv0.1.2.",
  "de": "#5875 integriert; GPU-/Treiber-Journal baut bekannte Pipelines. #6784 korrigiert Mesh/Format. main-Cache, kein FPS-Versprechen/v0.1.2.",
  "fr": "#5875 intégré ; journalGPU/pilote reconstruit pipelines. #6784 corrige mesh/format. Cache main, aucune promesseFPS/v0.1.2.",
  "es": "#5875 integrado; journalGPU/driver reconstruye pipelines. #6784 corrige mesh/formato. Caché main, sin promesaFPS/v0.1.2."
 }
},
{
 "number": 5872,
 "games": [
  "demons-souls",
  "ghost-of-yotei"
 ],
 "title": {
  "en": "Lazy shader preparation stays optional",
  "zh": "延迟着色器准备保持可选",
  "ar": "تحضير shaders المؤجل اختياري",
  "pt": "Preparação lazy continua opcional",
  "de": "Lazy-Shader bleiben optional",
  "fr": "Préparation lazy reste optionnelle",
  "es": "Preparación lazy sigue opcional"
 },
 "summary": {
  "en": "#5872 merged at127e5bf82. Opt-in delays preparation, while registration validation/decoding and explicit ABI work remain. Demon’s Souls reports still carry their tested local stack and version; lower boot memory can trade for first-use stalls and does not prove a whole playable level.",
  "zh": "#5872于127e5bf82合入。显式启用后延后准备，注册验证／解码及显式ABI工作仍保留。恶魔之魂报告继续保留实测本地栈和版本；启动内存降低可转化为首次使用停顿，不能证明完整可玩关卡。",
  "ar": "#5872 مدمج، يؤجل التحضير لا التحقق/ABI. تقارير Demon’s Souls تحتفظ ببنائها؛ ذاكرة أقل قد تؤخر الاستخدام ولا تثبت مستوى قابلاً للعب.",
  "pt": "#5872 integrado adia preparação, não validação/ABI. Demon’s Souls mantém build; menor memória pode pausar primeiro uso, sem nível jogável provado.",
  "de": "#5872 integriert verschiebt Vorbereitung, nicht Prüfung/ABI. Demon’s-Souls-Berichte behalten Build; weniger Bootspeicher kann Erstnutzung verzögern, kein Levelbeleg.",
  "fr": "#5872 intégré diffère préparation, pas validation/ABI. Rapports Demon’s Souls gardent build ; moins de mémoire peut retarder premier usage, sans niveau prouvé.",
  "es": "#5872 integrado aplaza preparación, no validación/ABI. Demon’s Souls conserva build; menor memoria puede pausar primer uso, sin nivel jugable demostrado."
 }
},
{
 "number": 4855,
 "games": [],
 "title": {
  "en": "Bounded GPU submission diagnostics merged",
  "zh": "有界GPU提交诊断已合入",
  "ar": "دمج تشخيص إرسال GPU محدود",
  "pt": "Diagnóstico GPU limitado integrado",
  "de": "Begrenzte GPU-Submit-Diagnose integriert",
  "fr": "Diagnostic GPU borné intégré",
  "es": "Diagnóstico GPU acotado integrado"
 },
 "summary": {
  "en": "#4855 merged ata4782fe11. Submission rings retain recent packet prefixes; the stall watchdog prints once and keeps waiting. It differs from the Windows aborting hang dump. Captured packets narrow an investigation but do not identify a cause or fix every stall.",
  "zh": "#4855于a4782fe11合入，提交环保留近期包前缀；卡死看门狗只输出一次并继续等待，区别于Windows中止型hang dump。包记录缩小排查范围，不能直接确定原因或修复所有卡死。",
  "ar": "#4855 مدمج؛ حلقات حديثة وwatchdog يطبع ثم ينتظر، مختلف عن Windows abort. الحزم أدلة لا سبب أو إصلاح عام.",
  "pt": "#4855 integrado; ring recente e watchdog imprime/espera, distinto de abort Windows. Pacotes ajudam diagnóstico, não provam causa/fix geral.",
  "de": "#4855 integriert; Ring und weiterwartender Watchdog, anders als Windows-Abbruch. Pakete grenzen Suche ein, kein Ursachen-/Fixbeweis.",
  "fr": "#4855 intégré ; ring récent et watchdog continue d’attendre, distinct de l’abandon Windows. Paquets aident enquête sans cause/fix universel.",
  "es": "#4855 integrado; ring reciente y watchdog sigue esperando, distinto de abort Windows. Paquetes acotan investigación, no prueban causa/arreglo general."
 }
},
{
 "number": 5405,
 "games": [
  "ghost-of-yotei"
 ],
 "title": {
  "en": "Spanned compute waves merged as opt-in",
  "zh": "跨子组计算wave以可选模式合入",
  "ar": "دمج spanned compute اختيارياً",
  "pt": "Spanned compute integrado opcionalmente",
  "de": "Spanned Compute optional integriert",
  "fr": "Spanned compute intégré en option",
  "es": "Spanned compute integrado opcionalmente"
 },
 "summary": {
  "en": "#5405 merged atdb7d9de5e with APS5_SPANNED_WAVE=1 off by default. It targets eligible64-invocation compute groups on32-lane hosts, not every wave64 shader or pixel lane63 failure. A scoped device-loss correction is not proof that Ghost of Yōtei now plays; title reports retain their original modes.",
  "zh": "#5405于db7d9de5e合入，APS5_SPANNED_WAVE=1默认关闭，仅针对32lane主机上符合条件的64调用计算组，不覆盖所有wave64或像素lane63故障。局部设备丢失修正不证明羊蹄山已可玩，报告保留原模式。",
  "ar": "#5405 مدمج opt-in افتراضي مغلق؛ compute64 مؤهل على32lane فقط، لا كلwave64 أوpixel63. تصحيح محدود لا يثبت لعب Yōtei.",
  "pt": "#5405 integrado opt-in desligado; compute64 elegível em32lanes, não todowave64/pixel63. Correção limitada não prova Yōtei jogável.",
  "de": "#5405 optional integriert, standard aus; geeignete Compute64 auf32Lanes, nicht allewave64/Pixel63. Begrenzter Fix belegt kein Yōtei-Gameplay.",
  "fr": "#5405 intégré en option désactivée ; compute64 éligible sur32lanes, pas toutwave64/pixel63. Correctif limité ne prouve pas Yōtei jouable.",
  "es": "#5405 integrado opcional apagado; compute64 elegible en32lanes, no todowave64/pixel63. Corrección limitada no prueba Yōtei jugable."
 }
},
{
 "number": 5905,
 "games": [
  "hades",
  "hades-ii",
  "astro-bot"
 ],
 "title": {
  "en": "Linux dma-buf first-use work moved",
  "zh": "Linux dma-buf首次使用工作转移",
  "ar": "نقل أول استخدام dma-buf على Linux",
  "pt": "Primeiro uso dma-buf deslocado no Linux",
  "de": "Linux-dma-buf-Erstnutzung verlagert",
  "fr": "Premier usage dma-buf déplacé sous Linux",
  "es": "Primer uso dma-buf trasladado en Linux"
 },
 "summary": {
  "en": "#5905 merged atdaf891312. Imports of at least1MiB are settled on a secondary queue at map/import time, moving kernel mapping latency away from first use. Upstream Hades observations do not erase the separately unstable Hades II result, and large maps can now block the mapping caller.",
  "zh": "#5905于daf891312合入，至少1MiB导入在映射／导入时由次级队列settle，将内核映射延迟从首次使用转移。上游Hades观察不能覆盖Hades II另一个不稳定结果，大映射仍可能阻塞映射调用线程。",
  "ar": "#5905 مدمج؛ dma-buf≥1MiB يستقر عند map/import بطابور ثان. ينقل التأخير؛ Hades لا يثبت HadesII، وقد يحجب المتصل.",
  "pt": "#5905 integrado; dma-buf≥1MiB estabiliza ao map/import noutra fila. Move latência; Hades não prova HadesII, pode bloquear chamador.",
  "de": "#5905 integriert; dma-buf≥1MiB bei Map/Import auf Nebenqueue vorbereitet. Latenz verlagert; Hades belegt nicht HadesII, Aufrufer kann warten.",
  "fr": "#5905 intégré ; dma-buf≥1MiB préparé au map/import sur autre file. Latence déplacée ; Hades ne prouve pas HadesII, appelant peut attendre.",
  "es": "#5905 integrado; dma-buf≥1MiB preparado al map/import en otra cola. Mueve latencia; Hades no prueba HadesII, puede bloquear llamador."
 }
},
{
 "number": 1202,
 "games": [
  "astro-bot",
  "wobbly-life"
 ],
 "title": {
  "en": "Pipelined draw work merged on main",
  "zh": "流水化绘制工作已合入 main",
  "ar": "دمج الرسم المتداخل في main",
  "pt": "Desenho em pipeline integrado no main",
  "de": "Pipelined Draws in main integriert",
  "fr": "Rendu en pipeline intégré à main",
  "es": "Dibujo en pipeline integrado en main"
 },
 "summary": {
  "en": "#1202 merged on 15 October at 8856f180c after v0.1.2. New Wobbly main observations and ASTRO branch comparisons keep separate environments. A single idle-scene pair or another GPU’s no-gain result cannot become a universal performance claim.",
  "zh": "#1202 在 10月15日于 8856f180c 合入，晚于 v0.1.2。新 Wobbly main 观察与 ASTRO 分支对照保留独立环境；单组静止场景或另一 GPU 的无增益结果不能变成普遍提速。",
  "ar": "#1202 مدمج بعدv0.1.2؛ تجارب Wobbly وASTRO منفصلة. زوج ساكن أو غياب مكسب علىGPU آخر لا يثبت أداءً عاماً.",
  "pt": "#1202 integrado apósv0.1.2; Wobbly/ASTRO mantêm ambientes separados. Par parado ou ausência de ganho noutraGPU não define desempenho geral.",
  "de": "#1202 nachv0.1.2 integriert; Wobbly/ASTRO-Umgebungen separat. Ein Idle-Paar oder kein Gewinn auf andererGPU erlaubt keine allgemeine Aussage.",
  "fr": "#1202 intégré aprèsv0.1.2 ; environnements Wobbly/ASTRO distincts. Une paire immobile ou aucun gain sur autreGPU ne prouve pas un gain général.",
  "es": "#1202 integrado trasv0.1.2; entornos Wobbly/ASTRO separados. Par inmóvil o ausencia de mejora en otraGPU no prueba rendimiento general."
 }
},
{
 "number": 6236,
 "games": [
  "high-on-life",
  "sifu",
  "demon-slayer-hinokami",
  "sackboy-big-adventure"
 ],
 "title": {
  "en": "PlayGo policy merged after v0.1.2",
  "zh": "PlayGo策略在v0.1.2之后合入",
  "ar": "دمج سياسة PlayGo بعدv0.1.2",
  "pt": "Política PlayGo integrada após v0.1.2",
  "de": "PlayGo-Regel nach v0.1.2 integriert",
  "fr": "Politique PlayGo intégrée après v0.1.2",
  "es": "Política PlayGo integrada tras v0.1.2"
 },
 "summary": {
  "en": "#6236 merged at e751dd205. APS5_PLAYGO_UNLISTED_CHUNKS chooses installed/absent only when PlayGo metadata is missing; unset still refuses. High on Life save loading needs installed, Sifu and Demon Slayer terminate discovery with absent. Opposite title needs rule out a universal workaround; old reports keep their actual patch stack.",
  "zh": "#6236于e751dd205合入，APS5_PLAYGO_UNLISTED_CHUNKS仅在缺PlayGo元数据时选择installed／absent，未设仍拒绝。High on Life读档需installed，Sifu和鬼灭用absent结束搜索；不同游戏需求相反，不能通用套用，旧报告仍保留实际补丁栈。",
  "ar": "#6236 مدمج e751dd205؛ installed/absent عند غياب metadata فقط، الافتراضي يرفض. High on Life للحفظ installed، Sifu/Demon Slayer absent. ليست وصفة عامة، التقارير القديمة تحتفظ ببنائها.",
  "pt": "#6236 integrado e751dd205; installed/absent só sem metadata, predefinição recusa. High on Life saves installed, Sifu/Demon Slayer absent. Sem solução universal; relatos antigos mantêm stack.",
  "de": "#6236 integriert e751dd205; installed/absent nur ohne Metadaten, Standard verweigert. High on Life Laden installed, Sifu/Demon Slayer absent. Kein allgemeiner Fix; alte Berichte behalten Stack.",
  "fr": "#6236 intégré e751dd205 ; installed/absent sans métadonnées seulement, défaut refuse. High on Life sauvegardes installed, Sifu/Demon Slayer absent. Pas solution universelle ; anciens rapports gardent stack.",
  "es": "#6236 integrado e751dd205; installed/absent solo sin metadata, defecto rechaza. High on Life saves installed, Sifu/Demon Slayer absent. Sin arreglo universal; informes antiguos conservan stack."
 }
},
{
 "number": 6291,
 "games": [
  "olliolli-world"
 ],
 "title": {
  "en": "Pixel helper-lane fix is still a proposal",
  "zh": "像素 helper-lane 修正仍为提案",
  "ar": "إصلاح helper lanes مقترح",
  "pt": "Correção helper lanes ainda proposta",
  "de": "Pixel-Helper-Lane-Fix bleibt Vorschlag",
  "fr": "Correctif helper lanes encore proposé",
  "es": "Corrección helper lanes sigue propuesta"
 },
 "summary": {
  "en": "Open #6291 preserves active pixel-quad helper bits when EXEC is read as a value. Synthetic derivative tests and a 215-second OlliOlli saved-game check support the scoped texture fix. Fresh-start MSAA reuse, audio and performance remain separate; not merged or in v0.1.2.",
  "zh": "开放的 #6291 在将 EXEC 读取为值时保留活动像素 quad 的 helper 位。导数合成测试与 215秒 OlliOlli 已有存档运行支持局部纹理修正；全新启动 MSAA 复用、声音和性能另算，尚未合入或进入 v0.1.2。",
  "ar": "#6291 مفتوح يحفظ helper bits؛ اختبارات ومشاهدة215ث تدعم إصلاحاً محدداً. MSAA البدء والصوت والأداء منفصلة؛ غير مدمج أوv0.1.2.",
  "pt": "#6291 aberto preserva helper bits; testes e215s de save apoiam correção limitada. MSAA inicial, áudio/desempenho separados; não integrado nemv0.1.2.",
  "de": "#6291 offen erhält Helper-Bits; Tests und215s-Spielstand stützen begrenzten Texturfix. Frischstart-MSAA/Ton/Leistung separat; kein Merge/v0.1.2.",
  "fr": "#6291 ouvert conserve helper bits ; tests et215s de sauvegarde soutiennent correction limitée. MSAA initial/son/performance distincts ; non intégré, pasv0.1.2.",
  "es": "#6291 abierto conserva helper bits; pruebas y215s de partida apoyan corrección limitada. MSAA inicial/audio/rendimiento separados; sin merge niv0.1.2."
 }
},
 {"number": 5580, "title": {"en": "Windows HID fix is included in v0.1.2", "zh": "v0.1.2 已包含 Windows HID 修复", "ar": "إصلاح HID Windows ضمن v0.1.2", "pt": "Correção HID Windows incluída em v0.1.2", "de": "Windows-HID-Fix in v0.1.2 enthalten", "fr": "Correctif HID Windows inclus en v0.1.2", "es": "Arreglo HID Windows incluido en v0.1.2"}, "summary": {"en": "#1050 closed in favour of #5580, which merged as d7bb2fee3 at 01:02 UTC and is an ancestor of the v0.1.2 tag. It disables DirectInput joystick enumeration by default to address the reproduced vendor-HID hang before video output. XInput and HIDAPI remain available; DirectInput-only controllers are not detected and were not tested. SDL_DIRECTINPUT_ENABLED can override the default. This is a device-specific startup fix, not a game compatibility result.", "zh": "#1050 关闭并转由 #5580 接续；后者在 01:02 UTC 于 d7bb2fee3 合入，已核验属于 v0.1.2 tag 的祖先。默认禁用 DirectInput 手柄枚举，处理已复现的厂商 HID 导致的显示初始化挂起。XInput 与 HIDAPI 仍可用，仅 DirectInput 手柄不被检测、也未实测；SDL_DIRECTINPUT_ENABLED 可覆盖默认。这是设备相关启动修复，不是游戏兼容结果。", "ar": "#1050 أُغلق لصالح #5580، دمج d7bb2fee3 في01:02 UTC وهو سلف tag v0.1.2. يعطل تعداد DirectInput افتراضياً لعطل HID عند فتح العرض. XInput/HIDAPI متاحان؛ أجهزة DirectInput فقط لا تكتشف ولم تختبر. SDL_DIRECTINPUT_ENABLED يتجاوز الافتراضي. إصلاح جهاز، لا توافق لعبة.", "pt": "#1050 fechada em favor de #5580, integrada d7bb2fee3 às01:02 UTC, antepassado do tag v0.1.2. Desativa enumeração DirectInput por defeito para bloqueio HID no arranque. XInput/HIDAPI mantidos; comandos só DirectInput não detetados nem testados. SDL_DIRECTINPUT_ENABLED altera o padrão. Correção específica, não resultado de jogo.", "de": "#1050 zugunsten #5580 geschlossen, Merge d7bb2fee3 um01:02 UTC, Vorfahr von v0.1.2. DirectInput-Enumeration standardmäßig aus gegen reproduzierten HID-Startblock. XInput/HIDAPI bleiben, reine DirectInput-Pads nicht erkannt/ungeprüft. SDL_DIRECTINPUT_ENABLED überschreibt Standard. Gerätefix, kein Spielkompatibilitätsbeleg.", "fr": "#1050 fermé pour #5580, merge d7bb2fee3 à01:02 UTC, ancêtre du tag v0.1.2. Énumération DirectInput désactivée par défaut contre blocage HID au démarrage. XInput/HIDAPI conservés ; pads DirectInput-only non détectés/non testés. SDL_DIRECTINPUT_ENABLED surcharge le défaut. Correctif appareil, pas résultat de jeu.", "es": "#1050 cerrada por #5580, merge d7bb2fee3 a01:02 UTC, ancestro de v0.1.2. Desactiva enumeración DirectInput por defecto contra bloqueo HID inicial. XInput/HIDAPI siguen; pads solo DirectInput no detectados/sin probar. SDL_DIRECTINPUT_ENABLED cambia defecto. Arreglo de dispositivo, no compatibilidad de juego."}, "games": []},
 {"number": 5511, "games": [], "title": {"en": "Shader traversal copying reduced", "zh": "减少 shader 遍历复制", "ar": "تقليل نسخ مرور shader", "pt": "Menos cópias no percurso shader", "de": "Weniger Shader-Traversal-Kopien", "fr": "Moins de copies de parcours shader", "es": "Menos copias al recorrer shaders"}, "summary": {"en": "#5511 merged at 18:38 UTC after v0.1.2. Scoped traversal preserves ancestor reuse and sibling isolation while reducing value-map copies. This source optimization is not evidence of a measured game FPS gain or a v0.1.2 binary change.", "zh": "#5511 在 v0.1.2 后的 18:38 UTC 合入；作用域遍历减少值映射复制，同时保留祖先复用与同级隔离。这项源码优化不证明已测游戏 FPS 提升或 v0.1.2 二进制变化。", "ar": "دمج #5511 في18:38 UTC بعد v0.1.2؛ يقلل نسخ الخرائط مع العزل وإعادة الاستخدام. لا FPS لعبة مقاس أو تغيير ملف الإصدار مثبت.", "pt": "#5511 integrada18:38 UTC após v0.1.2; menos cópias com isolamento/reutilização. Não comprova ganho FPS de jogo nem mudança binária v0.1.2.", "de": "#5511 um18:38 UTC nach v0.1.2 gemergt; weniger Mapskopien bei Isolation/Wiederverwendung. Kein gemessener Spiel-FPS-Gewinn/Release-Binärwechsel.", "fr": "#5511 intégré18:38 UTC après v0.1.2 ; moins de copies avec isolation/réutilisation. Aucun gain FPS mesuré ni changement binaire release.", "es": "#5511 integrada18:38 UTC tras v0.1.2; menos copias con aislamiento/reutilización. Sin ganancia FPS medida ni cambio binario release."}},
 {
 "number": 5971,
 "games": [
  "astro-bot"
 ],
 "title": {
  "en": "Audio lifetime proposal closed for another fix",
  "zh": "音频生命周期提案关闭，转用另一修复",
  "ar": "إغلاق اقتراح الصوت لصالح إصلاح آخر",
  "pt": "Proposta áudio encerrada por outra correção",
  "de": "Audio-Lebensdauervorschlag zugunsten anderem Fix geschlossen",
  "fr": "Proposition audio fermée pour un autre correctif",
  "es": "Propuesta audio cerrada por otra solución"
 },
 "summary": {
  "en": "#5971 closed without merging because #6000 instead parks guest audio callers before static destruction. #6000 merged after v0.1.2. Historical paired ASTRO closes keep their original integration; this is shutdown ordering, not new gameplay, FPS or audio-quality evidence.",
  "zh": "#5971 未合入而关闭，改由 #6000 在静态析构前停放游戏音频调用线程。#6000 在 v0.1.2 之后合入；旧 ASTRO 成对关闭实验保留原整合基点。这是退出顺序，不是新游戏、FPS 或音质证据。",
  "ar": "#5971 مغلق دون دمج لصالح #6000 الذي يوقف مستدعي الصوت قبل الهدم، مدمج بعدv0.1.2. تجارب ASTRO القديمة تبقى ببنائها؛ ترتيب خروج لا لعب/FPS/صوت جديد.",
  "pt": "#5971 fechado sem merge por #6000, que pausa chamadas áudio antes da destruição, apósv0.1.2. Ensaios ASTRO mantêm bases antigas; ordem de saída, não jogo/FPS/qualidade áudio.",
  "de": "#5971 ungemergt für #6000 geschlossen, das Audioaufrufer vor Destruktion parkt, nachv0.1.2 integriert. Alte ASTRO-Tests behalten Basis; Shutdown, kein neues Gameplay/FPS/Tonurteil.",
  "fr": "#5971 fermé sans merge pour #6000 qui arrête les appelants audio avant destruction, intégré aprèsv0.1.2. Anciens essais ASTRO conservent leur base ; arrêt, pas nouveau jeu/FPS/son.",
  "es": "#5971 cerrado sin merge por #6000 que pausa llamadas audio antes de destruir, integrado trasv0.1.2. Ensayos ASTRO conservan base; salida, no juego/FPS/audio nuevo."
 }
},
 {"number": 757, "games": ["astro-bot", "ghost-of-yotei", "demons-souls"], "title": {"en": "Runtime descriptor tables merged after v0.1.2", "zh": "运行时描述表在 v0.1.2 后合入", "ar": "دمج جداول الأوصاف بعد v0.1.2", "pt": "Tabelas integradas após v0.1.2", "de": "Runtime-Tabellen nach v0.1.2 gemergt", "fr": "Tables intégrées après v0.1.2", "es": "Tablas integradas tras v0.1.2"}, "summary": {"en": "#757 and #758 merged on 14 October at 15:48 and 15:53 UTC. They plan indexed and pointer-loaded image/sampler tables, with invalid selected entries still faulting; disk formats advance to 32/33. Focused API/cache tests do not confirm a new clean-main title result. Older local stacks retain their original commits.", "zh": "#757 与 #758 于 10 月 14 日 15:48／15:53 UTC 合入，支持索引及指针加载图像／采样器表，非法被选条目仍报错；磁盘格式推进至 32／33。专项 API／缓存测试不证明新干净 main 游戏结果，旧本地栈保留原提交。", "ar": "دمج #757/#758 في14 أكتوبر15:48/15:53 UTC لجداول الصور والسامبلر المفهرسة/المؤشرات؛ المدخلات غير الصالحة تفشل والصيغ32/33. اختبارات API ليست تشغيل لعبة main جديداً؛ البناءات القديمة محفوظة.", "pt": "#757/#758 integradas14 outubro15:48/15:53 UTC para tabelas indexadas/ponteiros; entradas inválidas falham, formatos32/33. Testes API/cache não comprovam título main novo; stacks antigos mantêm commits.", "de": "#757/#758 am14.Oktober15:48/15:53 UTC für Index-/Pointertabellen gemergt; ungültige Einträge faulten, Formate32/33. API-/Cachetests belegen keinen neuen main-Titellauf; alte Stacks behalten Commits.", "fr": "#757/#758 intégrés14 octobre15:48/15:53 UTC pour tables indexées/pointeurs ; entrées invalides échouent, formats32/33. Tests API/cache ne valident pas nouveau jeu main ; anciennes piles gardent commits.", "es": "#757/#758 integradas14 octubre15:48/15:53 UTC para tablas indexadas/punteros; inválidas fallan, formatos32/33. Tests API/cache no prueban nuevo juego main; pilas previas conservan commits."}},
 {"number": 5588, "games": ["hollow-knight-voidheart"], "title": {"en": "Unwrap already-decrypted containers", "zh": "解包已解密容器", "ar": "فك حاويات مفكوكة التشفير", "pt": "Extrair contentores já decifrados", "de": "Bereits entschlüsselte Container entpacken", "fr": "Extraire conteneurs déjà déchiffrés", "es": "Extraer contenedores ya descifrados"}, "summary": {"en": "#5588 adds tools/unwrap_self.py on main after v0.1.2. It reconstructs clean ELF offsets/alignment and refuses apparent encrypted inputs; it does not decrypt games. Hollow Knight output matched the previously working ELF, rather than testing a new runtime build.", "zh": "#5588 在 v0.1.2 之后的 main 加入 tools/unwrap_self.py，重建干净 ELF 偏移与对齐，拒绝看似加密的输入，不会解密游戏。Hollow Knight 输出与先前可用 ELF 一致，不是新 runtime 构建实测。", "ar": "#5588 بعد v0.1.2 يعيد ELF ومحاذاته ويرفض المدخل المشفر، لا يفك تشفير الألعاب. خرج Hollow Knight يطابق ELF سابقاً، ليس اختبار runtime جديد.", "pt": "#5588 após v0.1.2 reconstrói ELF/alinhamento e recusa entrada cifrada, não decifra jogos. Hollow Knight igual ao ELF anterior, não teste de runtime novo.", "de": "#5588 nach v0.1.2 rekonstruiert ELF/Alignment, lehnt verschlüsselte Eingaben ab, entschlüsselt nicht. Hollow Knight entspricht früherem ELF, kein neuer Runtime-Test.", "fr": "#5588 après v0.1.2 reconstruit ELF/alignement, refuse entrée chiffrée, ne déchiffre pas. Hollow Knight identique à ELF antérieur, pas nouveau runtime testé.", "es": "#5588 tras v0.1.2 reconstruye ELF/alineación, rechaza cifrado, no descifra juegos. Hollow Knight igual al ELF previo, no test de runtime nuevo."}},
 {"number": 5443, "games": ["mgs-peace-walker"], "title": {"en": "Multi-executable modules now share on Linux", "zh": "Linux 多程序模块共享已修正", "ar": "مشاركة الوحدات على Linux", "pt": "Módulos partilhados no Linux", "de": "Modulteilung auf Linux korrigiert", "fr": "Partage des modules Linux corrigé", "es": "Compartir módulos Linux corregido"}, "summary": {"en": "Merged after v0.1.2, #5443 makes guest-module dependencies independent of an executable’s system-library order. Windows output is unchanged and macOS was not run. Peace Walker’s Linux follow-up now creates the game process but still stops on image interfaces, not verified gameplay.", "zh": "v0.1.2 之后合入的 #5443 让游戏模块依赖不再随程序系统库顺序变化；Windows 输出不变、macOS 未运行。Peace Walker 的 Linux 补充现能创建游戏进程，但仍在图像接口停止，未验证游戏过程。", "ar": "بعد v0.1.2 يفصل #5443 تبعيات الوحدات عن ترتيب مكتبات البرنامج. Windows ثابت وmacOS غير مختبر. Peace Walker Linux ينشئ العملية لكن يتوقف بالصورة، لا لعب موثق.", "pt": "Após v0.1.2, #5443 separa dependências da ordem do executável. Windows igual, macOS não testado. Peace Walker Linux cria processo, mas para na imagem, sem jogo validado.", "de": "Nach v0.1.2 trennt #5443 Modulabhängigkeiten von Programm-Libreihenfolge. Windows gleich, macOS ungeprüft. Peace Walker Linux startet Prozess, stoppt aber an Bildschnittstellen, kein Gameplay.", "fr": "Après v0.1.2 #5443 sépare dépendances modules de l’ordre du programme. Windows inchangé, macOS non testé. Peace Walker Linux lance processus, puis refuse image, jeu non validé.", "es": "Tras v0.1.2 #5443 separa dependencias de orden del ejecutable. Windows igual, macOS sin probar. Peace Walker Linux crea proceso, para en imagen, juego sin verificar."}},
 {"number": 5738, "games": ["dreaming-sarah", "onimusha-way-of-the-sword"], "title": {"en": "VideoOut stub reverted after the release", "zh": "发行后回退 VideoOut stub", "ar": "تراجع VideoOut بعد الإصدار", "pt": "Stub VideoOut revertido após release", "de": "VideoOut-Stub nach Release revertiert", "fr": "Stub VideoOut révoqué après release", "es": "Stub VideoOut revertido tras release"}, "summary": {"en": "#5738 merged at 08:58:38 UTC, after v0.1.2 at 08:56:52. It reverts #5608’s throwing YNw9Xk5iNWo VideoOut export, with two Linux Sarah runs on the reverted baseline. The v0.1.2 binary still needs the reported Mouse preload workaround; the merge does not implement Onimusha’s unknown function.", "zh": "#5738 于 08:58:38 UTC 合入，晚于 v0.1.2 的 08:56:52。回退 #5608 会抛错的 VideoOut 导出 YNw9Xk5iNWo，回退基线上有两次 Linux Sarah 运行。v0.1.2 二进制仍需来源中的 Mouse preload 绕行；合入并未实现鬼武者的未知函数。", "ar": "دمج #5738 في 08:58:38 بعد v0.1.2 في 08:56:52 UTC؛ يتراجع عن export VideoOut الرامي YNw9Xk5iNWo مع تجربتي Sarah Linux. ملف الإصدار يحتاج Mouse preload؛ الدالة المجهولة Onimusha غير منفذة.", "pt": "Merge #5738 às08:58:38 depois de v0.1.2 às08:56:52 UTC: reverte export VideoOut YNw9Xk5iNWo que lança erro, com dois testes Sarah Linux. Release exige Mouse preload; função Onimusha não implementada.", "de": "Merge #5738 um08:58:38 nach v0.1.2 um08:56:52 UTC revertiert werfenden VideoOut-Export YNw9Xk5iNWo mit zwei Sarah-Linux-Läufen. Release braucht Mouse-Preload; unbekannte Onimusha-Funktion nicht implementiert.", "fr": "Merge #5738 à08:58:38 après v0.1.2 à08:56:52 UTC révoque export VideoOut YNw9Xk5iNWo qui lève une erreur, avec deux essais Sarah Linux. Release demande Mouse preload ; fonction Onimusha non implémentée.", "es": "Merge #5738 a08:58:38 tras v0.1.2 a08:56:52 UTC revierte export VideoOut YNw9Xk5iNWo que lanza error, con dos pruebas Sarah Linux. Release necesita Mouse preload; función Onimusha sin implementar."}},
 {
 "number": 4949,
 "games": [
  "resident-evil-4-remake",
  "resident-evil-village"
 ],
 "title": {
  "en": "Sample-location defaults merged",
  "zh": "采样位置默认值已合入",
  "ar": "دمج قيم مواقع العينات",
  "pt": "Valores de amostras integrados",
  "de": "Sample-Defaults gemergt",
  "fr": "Valeurs d’échantillons intégrées",
  "es": "Valores de muestras integrados"
 },
 "summary": {
  "en": "#4949 merged the sample-location defaults as dacd78525e. It resolves a particular register refusal, not the whole game. The later Village local stack separately reports first player control with #6146 and many other changes; neither result is an unmodified v0.1.2 gameplay test.",
  "zh": "#4949 于 dacd78525e 合入采样位置默认值，解决特定寄存器拒绝而非整个游戏。后来的 Village 本地栈配 #6146 等多项改动报告首个可操作场景；两者都不是未修改 v0.1.2 的游戏实测。",
  "ar": "#4949 يدمج افتراضات sampling، لا اللعبة كاملة. Village لاحق يبلغ التحكم مع #6146 وتغييرات كثيرة؛ لا اختبار لعبv0.1.2 عادي.",
  "pt": "#4949 integra valores sampling, não o jogo inteiro. Village posterior chega ao controlo com #6146 e muitas alterações; não é testev0.1.2 normal.",
  "de": "#4949 integriert Sampling-Vorgaben, nicht das ganze Spiel. Späterer Village-Stack erreicht Steuerung mit #6146 und weiteren Änderungen; kein Stock-v0.1.2-Spieltest.",
  "fr": "#4949 intègre valeurs sampling, pas tout le jeu. Village ultérieur atteint le contrôle avec #6146 et nombreux changements ; pas de testv0.1.2 standard.",
  "es": "#4949 integra valores sampling, no todo el juego. Village posterior alcanza control con #6146 y más cambios; no prueba juegov0.1.2 estándar."
 }
},
 {number:4216,games:["minecraft", "cyberpunk-2077"],title:L("Allocation lookup optimization is now on main","分配查找优化现已进入 main","تحسين بحث الذاكرة على main","Otimização de procura já em main","Allokationssuche jetzt auf main","Recherche mémoire désormais sur main","Búsqueda de memoria ya en main"),summary:L("#4216 merged as 50578eb936. Address-indexed lookups reduce registry copies and full mapping walks; the author’s Linux Minecraft result still includes its other PR dependencies. Keep the earlier Cyberpunk cold/warm failures on their recorded local build. No new Windows or clean-main title performance is established by the merge.","#4216 已于 50578eb936 合入。按地址索引减少注册表复制和全映射遍历，作者 Linux Minecraft 结果仍有其他 PR 依赖。Cyberpunk 旧冷／暖失败继续对应原本地构建；合入不证明新的 Windows 或原始 main 游戏性能。","#4216 دمج 50578eb936 ويقلل نسخ السجل والبحث. Minecraft Linux ما زال بتبعيات PR أخرى؛ فشل Cyberpunk السابق على بنائه. لا أداء لعبة Windows/main جديد بسبب الدمج.","#4216 integrado50578eb936, reduz cópias/procura. Minecraft Linux mantém outras PR; falhas antigas Cyberpunk conservam build. Merge não estabelece novo desempenho Windows/main.","#4216 gemergt50578eb936, weniger Kopien/Suche. Minecraft-Linux bleibt mit PR-Abhängigkeiten; alte Cyberpunk-Fehler behalten Build. Merge belegt keine neue Windows/main-Leistung.","#4216 intégré50578eb936, moins de copies/parcours. Minecraft Linux garde dépendances ; anciens échecs Cyberpunk conservent build. Merge ne valide pas performance Windows/main.","#4216 integrado50578eb936, reduce copias/recorridos. Minecraft Linux conserva dependencias; fallos antiguos Cyberpunk su build. Merge no valida rendimiento Windows/main.")},
 {number:4554,games:["palworld", "high-on-life"],title:L("DCC writers are synchronized before sampled keys","采样 DCC key 前同步写入","مزامنة الكتابات قبل مفاتيح DCC","Sincronizar escritas antes das chaves DCC","DCC-Schreiber vor Keys synchronisieren","Synchroniser les écritures avant clés DCC","Sincronizar escrituras antes de claves DCC"),summary:L("#4554 merged as 8bf10e51f4 after review added uniform-key writer coverage. Synthetic regression evidence is separate from title rendering. Palworld’s world colours were still wrong in the source investigation, and there is no new clean-main Palworld run; do not present this merge as full compatibility.","#4554 在补充 uniform-key 写入覆盖后于 8bf10e51f4 合入。合成回归证据与实际渲染分开；来源调查中帕鲁世界颜色仍错，也没有新原始 main 帕鲁运行，不能将合入当作完整兼容。","#4554 دمج 8bf10e51f4 بعد تغطية uniform-key. اختبارات اصطناعية ليست رسم لعبة؛ ألوان Palworld بقيت خاطئة ولا تشغيل main جديد. ليس توافقاً كاملاً.","#4554 integrado8bf10e51f4 após cobertura uniform-key. Regressões sintéticas não são jogo; Palworld ainda com cores erradas e sem reteste main. Não é compatibilidade completa.","#4554 gemergt8bf10e51f4 mit Uniform-Key-Abdeckung. Synthetik ist kein Spielrendering; Palworld-Farben noch falsch, kein main-Retest. Keine Vollkompatibilität.","#4554 intégré8bf10e51f4 avec couverture uniform-key. Synthétique distinct du jeu ; couleurs Palworld encore fausses, pas de retest main. Pas de compatibilité complète.","#4554 integrado8bf10e51f4 con cobertura uniform-key. Sintético distinto del juego; colores Palworld aún erróneos, sin retest main. No compatibilidad completa.")},
 {"number": 5381, "games": [], "title": {"en": "Browser pin updated; pairing still unresolved", "zh": "在线库已更新，版本配对仍未解决", "ar": "تحديث النسخة مع بقاء الاقتران", "pt": "Bibliotecas atualizadas, emparelhamento por resolver", "de": "Browser-Pin neu, Paarung offen", "fr": "Pin web actualisé, appariement ouvert", "es": "Pin web actualizado, pareja pendiente"}, "summary": {"en": "The live manifest now pins v0.1.2. It still pairs release libraries with main-built WASM, so #5381 remains open. New libraries resolve many imports but Windows setbuf binding has a named-library caveat. #5409 and #5710 closed without merging under the PR intake limit; closure is not a pairing fix.", "zh": "在线清单现固定 v0.1.2，但仍把发行库与 main 构建的 WASM 配对，#5381 未结。新库解决多项导入，Windows setbuf 的命名库绑定仍有边界；#5409、#5710 因 PR 接收限制关闭未合入，不等于配对修复。", "ar": "البيان v0.1.2 لكن WASM من main، فـ#5381 مفتوح. مكتبات جديدة تحل واردات عديدة مع قيد setbuf Windows. #5409/#5710 أغلقت دون دمج لحد الاستقبال، لا إصلاح اقتران.", "pt": "Manifesto v0.1.2, WASM de main: #5381 aberto. Libs resolvem vários imports, setbuf Windows tem limite de associação. #5409/#5710 fechadas sem merge por limite de PR, não correção.", "de": "Manifest v0.1.2, WASM von main: #5381 offen. Neue Libs lösen viele Imports, Windows-setbuf hat Bindungsgrenze. #5409/#5710 wegen PR-Limit ungemergt geschlossen, kein Paarungsfix.", "fr": "Manifest v0.1.2, WASM de main : #5381 ouvert. Libs résolvent plusieurs imports, setbuf Windows garde un problème de liaison. #5409/#5710 fermés sans merge pour limite PR, aucun correctif.", "es": "Manifest v0.1.2, WASM de main: #5381 abierto. Libs resuelven varios imports, setbuf Windows tiene límite de enlace. #5409/#5710 cerradas sin merge por límite PR, no arreglo."}},
 {"number": 5383, "games": ["dreaming-sarah"], "title": {"en": "Linux v0.1.2 X11 retest is scoped", "zh": "Linux v0.1.2 的 X11 复测边界", "ar": "حدود إعادة اختبار X11", "pt": "Âmbito do reteste X11 v0.1.2", "de": "Grenzen des v0.1.2-X11-Retests", "fr": "Portée du retest X11 v0.1.2", "es": "Alcance del retest X11 v0.1.2"}, "summary": {"en": "The reporter closed #5383 after matching v0.1.2 relinker/libraries ran Sarah on CachyOS X11 with an MX230 and Mouse LD_PRELOAD workaround. Gameplay counters were 26–58 FPS. The earlier v0.1.1 offscreen archive remains historical. #5396 closed without merging; it is not the confirmed release fix or an independent test by this site.", "zh": "报告者在配套 v0.1.2 转换器／库、CachyOS X11、MX230 和 Mouse LD_PRELOAD 绕行条件下运行 Sarah 后关闭 #5383，游戏计数 26–58 FPS。旧 v0.1.1 离屏包结论保留历史边界；#5396 关闭未合入，不能当作该发行修复，本站也未独立实测。", "ar": "أغلق الكاتب #5383 بعد Sarah بمكتبات/أداة v0.1.2 على CachyOS X11 وMX230 وMouse LD_PRELOAD، عدادات لعب 26–58 FPS. v0.1.1 offscreen تاريخي. #5396 مغلق دون دمج، لا إصلاح مثبت ولا اختبار مستقل للموقع.", "pt": "Autor fechou #5383 após Sarah em v0.1.2 emparelhada, CachyOS X11/MX230 com Mouse LD_PRELOAD, 26–58 FPS. Arquivo offscreen v0.1.1 histórico. #5396 fechada sem merge, não correção comprovada nem teste próprio.", "de": "Autor schloss #5383 nach Sarah mit passenden v0.1.2-Dateien, CachyOS X11/MX230 und Mouse-LD_PRELOAD, 26–58 FPS. v0.1.1-Offscreen historisch. #5396 ungemergt geschlossen, kein belegter Fix/eigener Test.", "fr": "Auteur ferme #5383 après Sarah avec fichiers v0.1.2 appariés, CachyOS X11/MX230 et Mouse LD_PRELOAD, 26–58 FPS. v0.1.1 offscreen historique. #5396 fermé sans merge, pas correctif validé/test du site.", "es": "Autor cierra #5383 tras Sarah con archivos v0.1.2 pareados, CachyOS X11/MX230 y Mouse LD_PRELOAD, 26–58 FPS. v0.1.1 offscreen histórico. #5396 cerrada sin merge, no arreglo probado/prueba propia."}},
 {number:5431,games:["ghost-of-tsushima-directors-cut"],title:L("Trace draw attempts through successful submissions","追踪绘制尝试与成功提交","تتبع الرسم إلى الإرسال الناجح","Rastrear desenhos até submissões","Draw-Versuche bis Submit verfolgen","Tracer dessins jusqu’aux soumissions","Trazar dibujos hasta envíos"),summary:L("#5431 is an open diagnostic PR, with eight CaptureTrace tests reported. One isolated Ghost runtime trace has no preparation-failure events but still shows a black window without validated pixel data. It narrows the investigation; neither trace counters nor shader failures establish correct rendering or the cause of black output.","#5431 是开放的诊断 PR，报告八项 CaptureTrace 测试。一份隔离的对马运行追踪没有准备失败事件，仍显示黑窗口且无已验证像素。它缩小调查范围；追踪计数和着色器失败均不能证明正确渲染或黑屏原因。","#5431 PR تشخيص مفتوح مع 8 اختبارات. تتبع Ghost معزول بلا فشل تحضير لكن نافذة سوداء دون بكسلات موثقة. يضيق التحقيق،لا يثبت الرسم أو السبب.","#5431 PR diagnóstico aberto com 8 testes. Trace Ghost isolado sem falhas, janela negra sem píxeis validados. Restringe investigação, não prova imagem/causa.","#5431 offener Diagnose-PR mit 8 Tests. Ghost-Trace ohne Vorbereitungsfehler, schwarzes Fenster ohne validierte Pixel. Grenzt ein, beweist Bild/Ursache nicht.","#5431 PR diagnostic ouvert avec 8 tests. Trace Ghost sans échec préparation, fenêtre noire sans pixels validés. Limite enquête, sans prouver rendu/cause.","#5431 PR diagnóstico abierto con 8 pruebas. Trace Ghost sin fallos preparación, ventana negra sin píxeles validados. Acota investigación, no prueba imagen/causa.")},
 {number:4686,games:['dreaming-sarah','doom-homebrew'],title:L("Compatibility evidence has moved","兼容证据已迁移","انتقال أدلة التوافق","As provas de compatibilidade mudaram","Kompatibilitätsbelege wurden verschoben","Les preuves de compatibilité ont migré","La evidencia de compatibilidad se ha movido"),summary:L("Merged #4686 removes the old compatibility table and its duplicate README claims. Previous Sarah/DOOM reports are archived in discussion #2475; README now points to a community blocker map and title discussions. Archive dates and original environments remain evidence, while an automatically assembled map is a discovery aid. This does not change old tests or release v0.1.1.","已合并 #4686 删除旧兼容表及 README 的重复结论，Sarah／DOOM 原报告归档到 #2475；README 改指社区阻碍地图和游戏讨论。归档日期与原环境仍是证据，自动汇总地图只用于发现线索。这不会改写旧实验，也不是 v0.1.1 新发行。","يحذف #4686 المدمج جدول التوافق وادعاءات README المكررة. أرشفت تقارير Sarah/DOOM في #2475؛ README يشير لخريطة عوائق مجتمعية ونقاشات الألعاب. تحفظ تواريخ وبيئات الأصل؛ الخريطة أداة اكتشاف لا تجربة جديدة ولا إصدار v0.1.1 جديد.","#4686 integrado remove a tabela e afirmações duplicadas do README. Sarah/DOOM estão arquivados em #2475; README aponta para mapa comunitário e discussões. Datas e ambientes originais mantêm-se como prova; mapa automático é descoberta, não altera testes nem publica v0.1.1 novo.","Das gemergte #4686 entfernt Tabelle und doppelte README-Aussagen. Sarah/DOOM sind in #2475 archiviert; README verweist auf Community-Blockerkarte und Diskussionen. Ursprungsdaten und Bedingungen bleiben Belege; die automatische Karte dient zur Suche, nicht als neuer Test oder neuer v0.1.1-Release.","#4686 fusionné supprime la table et les affirmations README répétées. Sarah/DOOM sont archivés dans #2475 ; README renvoie à une carte communautaire et aux discussions. Dates et environnements originaux restent des preuves ; la carte automatique sert à découvrir, sans modifier les tests ni publier un nouveau v0.1.1.","#4686 fusionada elimina la tabla y afirmaciones duplicadas del README. Sarah/DOOM están archivados en #2475; README apunta a mapa comunitario y debates. Fechas y entornos originales siguen como evidencia; el mapa automático sirve para descubrir, sin alterar pruebas ni publicar nuevo v0.1.1.")},
 {number:2708,games:['dreaming-sarah'],title:L('A conversion regression is resolved on main','main 已修复一类转换回归','إصلاح تراجع التحويل على main','Regressão na conversão corrigida em main','Konvertierungsregression auf main behoben','Régression de conversion corrigée sur main','Regresión de conversión corregida en main'),summary:L('The merged module-search change avoids malformed sce_sys metadata. In #2663 the reporter verifies local-fix gameplay and later reports current-main success. Users with this specific conversion error can compare main with their old build; the change is not evidence that v0.1.1 was updated or every title is supported.','已合并的模块搜索改动避开 sce_sys 中异常的元数据。#2663 报告者先验证本地修复后的游戏过程，后来又反馈最新 main 运行成功。遇到这一转换错误的用户可核对 main 与旧构建；这不意味着 v0.1.1 文件已更新，也不证明其他游戏兼容。','يتجنب تعديل البحث المدمج بيانات sce_sys التالفة. يؤكد كاتب #2663 نجاح إصلاح محلي ثم نجاح main أحدث. يمكن لمن يواجه خطأ التحويل المحدد مقارنة البناء القديم مع main؛ لا يعني تحديث ملفات v0.1.1 أو دعم كل لعبة.','A pesquisa de módulos integrada evita metadados malformados de sce_sys. Em #2663, o autor verifica jogo com uma correção local e depois relata sucesso no main mais recente. Quem encontra este erro pode comparar main com a versão antiga; não significa que v0.1.1 tenha sido atualizado ou que todos os jogos sejam suportados.','Die integrierte Modulsuche vermeidet fehlerhafte sce_sys-Metadaten. In #2663 bestätigt der Autor Gameplay mit lokalem Fix und später Erfolg auf aktuellem main. Betroffene können main mit dem alten Build vergleichen; weder sind v0.1.1-Dateien damit aktualisiert noch alle Spiele unterstützt.','La recherche de modules intégrée évite les métadonnées malformées de sce_sys. Dans #2663, l’auteur confirme le jeu avec un correctif local puis un succès sur main récent. Les personnes concernées peuvent comparer main à leur ancienne version ; cela ne met pas à jour les fichiers v0.1.1 et ne prouve pas la compatibilité de tous les jeux.','La búsqueda integrada evita metadatos malformados de sce_sys. En #2663, el autor verifica juego con un arreglo local y luego éxito en main reciente. Quien encuentre este error puede comparar main con su versión anterior; no actualiza los archivos de v0.1.1 ni demuestra compatibilidad con todos los juegos.')},
 {number:3180,games:['dreaming-sarah'],title:L("Linux follow-up confirms a visible game scene","Linux 后续确认可见游戏场景","متابعة Linux تؤكد مشهداً مرئياً","Seguimento Linux confirma uma cena","Linux-Nachtrag zeigt eine Spielszene","Le suivi Linux montre une scène","El seguimiento Linux muestra una escena"),summary:L("The author has now posted a forest screenshot and says Linux works after the earlier main fix. The new commit, patches and hardware were not restated. This is evidence beyond issue closure, but the single 59.93 counter does not verify a timed benchmark, audio, controls or completion. Earlier failed builds remain in the report history.","作者在早期 main 修复后发布森林截图并确认 Linux 已运行，新提交、补丁和硬件没有重述。这是关闭 issue 之外的新增证据，但单张截图上的 59.93 不能验证计时基准、音频、操作或通关。历史失败构建继续保留。","نشر الكاتب صورة غابة وأكد نجاح Linux بعد إصلاح main السابق، دون تحديد الالتزام أو التعديلات أو العتاد الجديد. هذه أدلة تتجاوز إغلاق المشكلة، لكن عداد 59.93 الواحد لا يثبت قياساً زمنياً أو صوتاً أو تحكماً أو إكمالاً. تبقى الإخفاقات القديمة.","O autor publicou a floresta e confirmou Linux após a correção main, sem repetir commit, patches ou equipamento. É evidência além do fecho, mas um contador 59,93 não prova benchmark, áudio, controlo ou conclusão. Preservam-se os builds falhados.","Der Autor zeigt einen Wald und bestätigt Linux nach dem früheren main-Fix, ohne neuen Commit, Patches oder Hardware. Mehr als nur Issue-Schließung, doch ein einzelner Zähler 59,93 belegt weder Benchmark noch Ton, Steuerung oder Abschluss. Alte Fehler bleiben.","L’auteur publie une forêt et confirme Linux après le correctif main, sans préciser nouveau commit, correctifs ou matériel. Cela dépasse la fermeture de l’issue, mais un compteur 59,93 unique ne valide ni benchmark, ni son, ni commandes, ni fin. Les anciens échecs restent.","El autor publica el bosque y confirma Linux tras el arreglo main, sin fijar nuevo commit, parches ni equipo. Es evidencia adicional al cierre, pero un contador 59,93 no prueba benchmark, audio, controles o finalización. Se conservan los fallos antiguos.")},
 {number:3291,games:['dreaming-sarah'],title:L("NVIDIA validation stays separate from game tests","NVIDIA 验证与游戏测试分别记录","تحقق NVIDIA منفصل عن اختبارات الألعاب","Validação NVIDIA separada dos jogos","NVIDIA-Validierung getrennt von Spieltests","Validation NVIDIA distincte des jeux","Validación NVIDIA separada de juegos"),summary:L("The earlier Windows experiment reached Sarah’s title screen. A Linux RTX 5060 / 590.48.01 cross-check of fix 3389172454 on baseline 2a5eca11 resolves nine GPU fixtures, while wave32 remains failing. It used an isolated patched archive/library, not a clean full branch build, and no title files. AMD RADV passed all 22 focused fixtures. None of this supplies Linux game FPS or a released fix.","此前 Windows 实验到达 Sarah 标题。Linux RTX 5060／590.48.01 在基线 2a5eca11 上交叉验证修复 3389172454，解决九个 GPU 测试，wave32 仍失败；方法使用隔离的修改归档／库，不是完整分支干净构建，也没有使用游戏文件。AMD RADV 的 22 个定向测试全过，不能据此写 Linux 游戏 FPS 或发行版已修复。","تجربة Windows السابقة بلغت عنوان Sarah. تحقق Linux RTX 5060/590.48.01 للإصلاح 3389172454 على 2a5eca11 يحل تسع حالات GPU، وتبقى wave32 فاشلة. استخدم أرشيفاً ومكتبة معزولين لا بناء فرع كامل ولا ملفات ألعاب. RADV نجح في 22 حالة مركزة. ليس FPS لعبة Linux أو إصلاح إصدار.","A experiência Windows anterior chegou ao título Sarah. Linux RTX 5060/590.48.01 valida 3389172454 sobre 2a5eca11: nove casos GPU resolvidos, wave32 ainda falha. Usa arquivo/biblioteca isolados, não build limpo completo nem jogos. RADV passa 22 casos focados. Não fornece FPS de jogo Linux ou fix publicado.","Der frühere Windows-Test erreichte Sarahs Titel. Linux RTX 5060/590.48.01 prüft 3389172454 auf 2a5eca11: neun GPU-Fixtures behoben, wave32 weiterhin fehlerhaft. Isoliertes Archiv/Bibliothek statt sauberem Gesamtbuild, keine Spieldateien. RADV besteht 22 Teiltests. Keine Linux-Spiel-FPS oder Releasekorrektur.","L’essai Windows antérieur atteint le titre Sarah. Linux RTX 5060/590.48.01 vérifie 3389172454 sur 2a5eca11 : neuf cas GPU résolus, wave32 encore en échec. Archive/bibliothèque isolées, sans build complet propre ni jeu. RADV passe 22 cas ciblés. Ni FPS Linux en jeu ni correctif publié établis.","El ensayo Windows anterior llegó al título Sarah. Linux RTX 5060/590.48.01 valida 3389172454 sobre 2a5eca11: nueve casos GPU resueltos, wave32 sigue fallando. Archivo/biblioteca aislados, sin build limpio completo ni juegos. RADV pasa 22 casos enfocados. No aporta FPS de juego Linux ni arreglo publicado.")},
 {number:3428,games:["cyberpunk-2077"],title:L("Empty-path startup handling has merged","空路径启动处理已合并","دُمج التعامل مع المسار الفارغ","Tratamento de caminho vazio integrado","Behandlung leerer Pfade integriert","Gestion du chemin vide intégrée","Gestión de ruta vacía integrada"),summary:L("The merged change returns ENOENT for sceKernelOpen(\"\") instead of opening a directory. A Linux filesystem test passes; Cyberpunk was not run by the PR author. Later game stops and visual gameplay remain unverified.","已合并改动使 sceKernelOpen(\"\") 返回 ENOENT，不再打开目录。Linux 文件系统测试通过，但 PR 作者没有运行赛博朋克；后续停止点与可视游戏过程仍未验证。","يعيد الدمج ENOENT للمسار الفارغ بدلاً من دليل. ينجح اختبار ملفات Linux، لكن كاتب PR لم يشغل Cyberpunk. التوقفات التالية واللعب المرئي غير متحققين.","A alteração integrada faz sceKernelOpen(\"\") devolver ENOENT, em vez de abrir uma pasta. Um teste do sistema de ficheiros em Linux passou, mas o autor do PR não executou Cyberpunk. As falhas posteriores e o jogo com imagem visível continuam por verificar.","Die integrierte Änderung liefert für sceKernelOpen(\"\") ENOENT, statt ein Verzeichnis zu öffnen. Ein Linux-Dateisystemtest ist erfolgreich, doch der PR-Autor hat Cyberpunk nicht ausgeführt. Spätere Fehler und sichtbares Gameplay bleiben ungeprüft.","Le changement intégré renvoie ENOENT pour sceKernelOpen(\"\") au lieu d’ouvrir un dossier. Un test du système de fichiers Linux réussit, mais l’auteur de la PR n’a pas lancé Cyberpunk. Les erreurs ultérieures et le jeu avec affichage restent à vérifier.","El merge devuelve ENOENT para rutas vacías en vez de abrir un directorio. Pasa un test Linux; el autor no ejecutó Cyberpunk. No verifica fallos posteriores ni juego visible.")},
 {number:690,games:["doom-homebrew"],title:L("DOOM homebrew added to the official table","官方表加入 DOOM 自制移植版","إضافة DOOM homebrew للجدول الرسمي","DOOM homebrew na tabela oficial","DOOM-Homebrew in offizieller Tabelle","DOOM homebrew dans la table officielle","DOOM homebrew en la tabla oficial"),summary:L("The documentation merge records distinct patched Windows and software-Vulkan Linux runs, not a current-main-only result. The Linux E1M1 run leaves audio and extended play unknown; the Windows v1.1.1 integration separately reports save/load and audible audio.","文档合并记录了各自的补丁 Windows 与软件 Vulkan Linux 测试，不是仅使用当前 main 的结果。Linux E1M1 测试未验证音频与长时间游戏；Windows v1.1.1 集成另有存读档及可听音频报告。","يسجل دمج الوثائق اختبارات Windows معدلة وLinux Vulkan برمجي، لا main وحده. صوت Linux واللعب الطويل مجهولان؛ دمج Windows v1.1.1 يذكر الحفظ والتحميل والصوت.","O merge documental regista Windows modificado e Linux com Vulkan por software, não main original. Áudio e jogo prolongado Linux desconhecidos; a integração Windows v1.1.1 relata guardar/carregar e áudio.","Der Dokumentationsmerge nennt gepatchte Windows- und Software-Vulkan-Linux-Läufe, keinen reinen main-Test. Linux-Ton und längeres Spiel fehlen; Windows v1.1.1 meldet separat Speichern/Laden und hörbaren Ton.","La documentation intégrée distingue Windows modifié et Linux Vulkan logiciel, pas main seul. Son et jeu prolongé Linux restent inconnus ; Windows v1.1.1 rapporte sauvegarde/chargement et son.","El merge documental distingue Windows modificado y Linux Vulkan por software, no main solo. Audio y juego largo Linux desconocidos; Windows v1.1.1 reporta guardado/carga y audio.")},
 {number:3412,games:['ratchet-clank-rift-apart'],title:L('A proposed limit for draw-input snapshots','绘制输入快照大小上限方案','حد مقترح لنسخ مدخلات الرسم','Proposta de limite para cópias de desenho','Vorschlag zur Begrenzung von Draw-Snapshots','Proposition de limite des copies par dessin','Propuesta de límite de copias de dibujo'),summary:L("The merged PR caps individual and cumulative draw-input snapshots at 64 MiB; #3338 was closed citing it. In-place buffers can still observe later CPU writes. The reviewed source has no post-merge gameplay retest, so the historical logo/black-screen report remains scoped to its old integration.","该 PR 已合并，将单次及累计绘制输入快照限制为 64 MiB，#3338 随后引用它关闭。原位缓冲区仍可能观察到后续 CPU 写入。已核对来源没有合并后的游戏复测，历史开场标志／黑屏记录仍只适用于原整合构建。","دُمج الطلب وحدّ اللقطات الفردية والمجمعة إلى 64 MiB، وأُغلق #3338 بسببه. قد ترى المخازن المباشرة كتابات CPU لاحقة. لا إعادة اختبار لعب بعد الدمج في المصدر؛ يبقى تقرير الشعارات والشاشة السوداء خاصاً بالدمج القديم.","O PR integrado limita snapshots individuais e acumulados a 64 MiB; #3338 foi encerrado citando-o. Buffers diretos ainda podem observar escritas CPU posteriores. A fonte revista não contém novo teste de jogo após integração; logótipos/ecrã preto continuam associados ao conjunto antigo.","Der integrierte PR begrenzt einzelne und kumulative Snapshots auf 64 MiB; #3338 wurde damit geschlossen. Direkt gebundene Puffer können spätere CPU-Schreibvorgänge sehen. Ein Spieltest nach Merge fehlt in der geprüften Quelle; Logo/Schwarzbild gelten weiter nur für die alte Integration.","La PR intégrée limite les snapshots individuels et cumulés à 64 MiB ; #3338 a été fermée en la citant. Les buffers directs peuvent encore voir des écritures CPU ultérieures. Aucun nouvel essai de jeu après intégration ne figure dans la source ; logos/écran noir restent liés à l’ancienne intégration.","La PR integrada limita snapshots individuales y acumulados a 64 MiB; #3338 se cerró citándola. Los buffers directos aún pueden ver escrituras CPU posteriores. La fuente revisada no contiene nueva prueba del juego tras integrar; logos/pantalla negra siguen ligados a la integración antigua.")},

 {number:3308,games:['cyberpunk-2077'],title:L('Cyberpunk 2077: Linux startup investigation','赛博朋克 2077：Linux 启动问题','Cyberpunk 2077: فحص بدء Linux','Cyberpunk 2077: investigação do arranque Linux','Cyberpunk 2077: Linux-Start untersuchen','Cyberpunk 2077 : démarrage Linux','Cyberpunk 2077: análisis del inicio en Linux'),summary:L("The later unmodified-main a11c8f7f retest gets past the empty-path and select stops, then terminates at the engine watchdog without a captured frame. #4216 is related mapping work, with no Cyberpunk title validation in this source. Closing the old issue does not establish gameplay.","后续原始 main a11c8f7f 复测越过空路径与 select 阻碍，随后仍被引擎 watchdog 终止，没有捕获画面。#4216 属于相关映射工作，该来源未提供赛博朋克验证。旧 issue 关闭不能证明游戏过程可用。","يتجاوز اختبار main a11c8f7f غير المعدل عوائق المسار وselect، ثم ينتهي عند watchdog دون إطار ملتقط. #4216 عمل متعلق بالذاكرة دون اختبار Cyberpunk هنا. إغلاق المشكلة القديمة لا يثبت اللعب.","O novo ensaio no main a11c8f7f sem alterações passa caminho vazio/select, mas termina no watchdog sem imagem capturada. #4216 trata de memória relacionada, sem validação Cyberpunk nesta fonte. Fechar o issue antigo não comprova jogo.","Der neue Lauf auf unverändertem main a11c8f7f überwindet Pfad-/select-Stopps und endet am Watchdog ohne Bild. #4216 betrifft Mapping ohne Cyberpunk-Validierung in dieser Quelle. Das geschlossene Issue bestätigt kein Gameplay.","Le nouvel essai sur main a11c8f7f sans modification dépasse les blocages chemin/select, puis échoue au watchdog sans image. #4216 concerne le mapping sans validation Cyberpunk dans cette source. La fermeture de l’issue ne prouve pas le jeu.","El nuevo ensayo en main a11c8f7f sin modificar supera ruta/select y termina en watchdog sin imagen. #4216 trata mapeo sin validación Cyberpunk en esta fuente. Cerrar la issue antigua no demuestra juego.")},
 {number:358,games:['cyberpunk-2077'],title:L('Cyberpunk modules can reach the executable entry','赛博朋克模块加载与程序入口','تحميل وحدات Cyberpunk إلى مدخل التنفيذ','Carregamento de módulos Cyberpunk','Cyberpunk-Module erreichen den Einstieg','Chargement des modules Cyberpunk','Carga de módulos de Cyberpunk'),summary:L('The merged change addresses imports and the game-bundled Galaxy wrapper. Reaching the ELF entry is an early startup milestone; its throwing stubs do not implement every service.','合并改动处理导入与游戏附带的 Galaxy 模块。到达 ELF 入口仅属于早期启动进展，抛错占位函数并未实现全部服务。','يعالج التغيير المدمج الاستيراد وGalaxy. بلوغ مدخل ELF مرحلة مبكرة؛ الدوال التي ترمي أخطاء لا تنفذ كل الخدمات.',"A alteração integrada trata das funções importadas e do componente Galaxy incluído no jogo. Chegar ao ponto de entrada ELF é um avanço inicial do arranque; as funções provisórias que geram erros não implementam todos os serviços.","Die integrierte Änderung behandelt Imports und den mit dem Spiel gelieferten Galaxy-Wrapper. Das Erreichen des ELF-Einstiegspunkts ist ein früher Startschritt. Die Platzhalterfunktionen lösen Fehler aus, statt sämtliche Dienste zu implementieren.",'Le changement intégré traite imports et Galaxy. L’entrée ELF reste une étape précoce ; les stubs qui lèvent des erreurs n’implémentent pas tous les services.','El cambio integrado trata imports y Galaxy. La entrada ELF es un paso inicial; los stubs que lanzan errores no implementan todos los servicios.')},
 {number:2212,games:['wobbly-life'],title:L('Wobbly Life: declared module identity for imports','晃晃人生：按声明模块绑定导入','Wobbly Life: هوية الوحدة للاستيراد','Wobbly Life: identidade dos módulos','Wobbly Life: deklarierte Importmodule','Wobbly Life : identité des modules','Wobbly Life: identidad de módulos'),summary:L('Merged import binding removes one ambiguity in the relinker. The author’s tests cover conversion and module selection, not completed interactive gameplay.','已合并的导入绑定修复消除 relinker 的一类歧义。作者测试覆盖转换与模块选择，并未证明交互式游戏过程已经完成。','يزيل ربط الاستيراد المدمج التباساً في relinker. اختبارات الكاتب تغطي التحويل واختيار الوحدات، لا لعباً تفاعلياً مكتملاً.','A associação integrada elimina uma ambiguidade do relinker. Os testes cobrem conversão e seleção de módulos, não jogo interativo concluído.','Der Merge beseitigt eine Relinker-Mehrdeutigkeit. Die Tests prüfen Konvertierung und Modulwahl, kein abgeschlossenes interaktives Gameplay.','La liaison intégrée supprime une ambiguïté du relinker. Les tests couvrent conversion et choix des modules, pas le jeu interactif complet.','La vinculación integrada elimina una ambigüedad del relinker. Las pruebas cubren conversión y módulos, no juego interactivo completo.')},
 {number:3338,games:['ratchet-clank-rift-apart'],title:L('Rift Apart: large CPU snapshots stall rendering','时空跳转：大缓冲区拷贝导致停滞','Rift Apart: نسخ CPU توقف الرسم',"Uma Dimensão à Parte: cópias CPU bloqueiam o desenho",'Rift Apart: große CPU-Kopien blockieren','Rift Apart : copies CPU et blocage',"Una dimensión aparte: copias de CPU bloquean el renderizado"),summary:L('A Linux report locates a post-logo black screen in per-draw buffer snapshots. Its local size cap trades correctness risk for progress and should not be promoted as a general fix.','Linux 报告将开场标志后的黑屏定位到逐次绘制缓冲区快照。本地大小上限以正确性风险换取推进，不应当作通用修复推荐。','يربط تقرير Linux الشاشة السوداء بنسخ المخازن لكل رسم. الحد المحلي يبادل الصحة بالتقدم، وليس حلاً عاماً.',"Um relatório Linux localiza o ecrã preto após os logótipos nas cópias de buffers realizadas para cada operação de desenho. O limite de tamanho local permite avançar, mas introduz riscos de correção dos dados. Não deve ser recomendado como solução geral.",'Der Linux-Bericht führt Schwarzbilder auf Draw-Snapshots zurück. Die lokale Grenze riskiert Korrektheit und ist kein allgemeiner Fix.',"Un rapport Linux localise le blocage après les logos dans les copies de tampons effectuées pour chaque commande de rendu. La limite de taille locale permet d’avancer au prix d’un risque de données incorrectes ; ce n’est pas une solution générale.","Un informe de Linux sitúa la pantalla negra posterior a los logotipos en las copias de búferes realizadas para cada operación de renderizado. El límite de tamaño local permite avanzar, pero introduce riesgos de datos incorrectos. No debe recomendarse como solución general.")},
 {number:2883,games:['the-last-of-us-part-ii-remastered'],title:L('Part II Remastered: startup memory accounting','第二部高清复刻版：启动内存预算','Part II Remastered: حساب ذاكرة البدء','Part II Remastered: memória de arranque','Part II Remastered: Speicherbudget beim Start','Part II Remastered : mémoire au démarrage','Part II Remastered: memoria al iniciar'),summary:L("The pinned Windows run failed in the flexible-memory budget calculation before a menu. The closing comment cites merged #3713, which accounts for loaded module segments. It provides no post-fix game run; the old failure must not become a playable verdict or transfer to Part I.","固定 Windows 测试曾在菜单前因 flexible-memory 预算计算失败。关闭评论引用了已合并 #3713，它将已加载模块段纳入记账；评论没有提供修复后的游戏运行。旧失败不能改成可玩结论，也不能沿用到 Part I。","فشل اختبار Windows المحدد في ميزانية flexible-memory قبل القائمة. يذكر الإغلاق #3713 المدمج الذي يحسب مقاطع الوحدات المحملة، دون تشغيل لعبة بعد الإصلاح. لا تتحول النتيجة إلى قابلية لعب ولا تنطبق على Part I.","O ensaio Windows fixado falhou no orçamento flexible-memory antes do menu. O encerramento cita #3713 integrado, que conta segmentos carregados, sem nova execução após a correção. A falha não se torna resultado jogável nem se aplica a Part I.","Der festgehaltene Windows-Lauf scheiterte vor dem Menü am flexiblen Speicherbudget. Der Abschluss nennt #3713 mit geladenen Modulsegmenten, ohne neuen Spieltest. Aus dem alten Fehler entsteht weder ein spielbarer Status noch ein Part-I-Ergebnis.","L’essai Windows identifié échouait avant le menu sur le budget flexible-memory. La fermeture cite #3713 intégrée, qui compte les segments chargés, sans essai après correction. L’échec ne devient pas un résultat jouable et ne s’applique pas à Part I.","El ensayo Windows fijado falló antes del menú en el presupuesto flexible-memory. El cierre cita #3713 integrada, que cuenta segmentos cargados, sin ejecución posterior del juego. El fallo no se vuelve resultado jugable ni se aplica a Part I.")},
 {number:3176,games:['returnal','palworld'],title:L('A pthread attribute used by Returnal','Returnal 使用的 pthread 属性','خاصية pthread تستخدمها Returnal','Atributo pthread usado por Returnal','Ein pthread-Attribut für Returnal','Un attribut pthread utilisé par Returnal','Un atributo pthread usado por Returnal'),summary:L('Merged support implements the attribute alias and associated checks. The reported tests validate API behaviour. They do not verify that Returnal or Palworld now reaches gameplay.','合并改动实现属性别名及相关检查，报告测试验证的是 API 行为，不等于 Returnal 或 Palworld 已进入游戏。',"ينفذ التعديل المدمج الاسم البديل لخاصية pthread والفحوص المرتبطة بها. تتحقق الاختبارات من سلوك API؛ ولا تثبت أن Returnal أو Palworld أصبحا يصلان إلى اللعب.","A alteração integrada implementa o nome alternativo do atributo e as verificações associadas. Os testes verificam o comportamento da API, não que Returnal ou Palworld já permitam jogar.",'Der Merge implementiert Alias und Prüfungen. Die Tests gelten der API, nicht spielbarem Returnal oder Palworld.','L’intégration implémente l’alias et ses contrôles. Les tests valident l’API, pas le jeu dans Returnal ou Palworld.','El merge implementa el alias y comprobaciones. Las pruebas validan la API, no juego funcional en Returnal o Palworld.')},
 {number:3156,games:['palworld'],title:L('HTTP wait and abort behaviour','HTTP 等待与中止行为','سلوك انتظار HTTP وإلغائه','Espera e cancelamento HTTP','HTTP-Warten und Abbrechen','Attente et annulation HTTP','Espera y cancelación HTTP'),summary:L("The HTTP wait investigation was closed after #3706 merged abortable epoll waits. Its tests cover API lifecycle and waiting behaviour; requests still do not reach the network and PS5 hardware assumptions remain unverified. It is not a Palworld multiplayer result.","HTTP 等待调查在 #3706 合入可中止 epoll 等待后关闭。测试覆盖 API 生命周期与等待行为；请求仍不会到达网络，PS5 真机行为假设仍未验证。这不是 Palworld 多人联机结果。","أُغلق تحقيق HTTP بعد دمج #3706 للانتظار القابل للإلغاء. تغطي الاختبارات دورة API والانتظار؛ لا تصل الطلبات للشبكة وافتراضات PS5 غير متحققة. ليست نتيجة تعاون Palworld.","A investigação HTTP foi encerrada após integrar #3706 com espera epoll abortável. Os testes cobrem ciclo API e espera; pedidos não chegam à rede e as hipóteses PS5 não estão verificadas. Não é um resultado multijogador de Palworld.","Die HTTP-Untersuchung wurde nach #3706 mit abbrechbaren epoll-Wartevorgängen geschlossen. Tests prüfen API-Lebenszyklus und Warten; Anfragen erreichen kein Netzwerk, PS5-Annahmen sind unbestätigt. Kein Palworld-Mehrspielertest.","L’investigation HTTP a été fermée après #3706 avec attente epoll annulable. Les tests couvrent cycle API et attente ; les requêtes n’atteignent pas le réseau et les hypothèses PS5 restent non vérifiées. Ce n’est pas un résultat multijoueur Palworld.","La investigación HTTP se cerró tras integrar #3706 con espera epoll cancelable. Las pruebas cubren ciclo API y espera; las solicitudes no llegan a la red y las hipótesis PS5 siguen sin verificar. No es resultado multijugador Palworld.")},
 {"number": 1050, "games": [], "title": {"en": "HID proposal closed without merging", "zh": "HID 提案关闭未合入", "ar": "اقتراح HID مغلق دون دمج", "pt": "Proposta HID fechada sem integração", "de": "HID-Vorschlag ungemergt geschlossen", "fr": "Proposition HID fermée sans merge", "es": "Propuesta HID cerrada sin merge"}, "summary": {"en": "#1050 closed without merging because #5580 relands it with contributor credit. The replacement is verified in v0.1.2; its DirectInput-only controller limitation remains.", "zh": "#1050 未合入而关闭，是因为 #5580 接续原改动并保留作者署名。替代改动已核验进入 v0.1.2；仅 DirectInput 手柄限制仍在。", "ar": "#1050 مغلق دون دمج لصالح #5580 مع فضل المساهم. البديل ضمن v0.1.2 وقيد أجهزة DirectInput فقط باقٍ.", "pt": "#1050 fechada sem merge por #5580 com crédito. Substituição em v0.1.2; limite DirectInput-only mantido.", "de": "#1050 ungemergt zugunsten #5580 mit Urheberkredit geschlossen. Ersatz in v0.1.2, DirectInput-only-Grenze bleibt.", "fr": "#1050 fermé sans merge pour #5580 avec crédit. Remplacement dans v0.1.2, limite DirectInput-only maintenue.", "es": "#1050 cerrada sin merge por #5580 con crédito. Reemplazo en v0.1.2, límite DirectInput-only sigue."}},
 {number:674,games:[],title:L('A proposed native input configuration editor','原生输入设置编辑器方案','محرر مقترح لإعداد الإدخال','Proposta de editor de controlos','Vorschlag für einen Eingabeeditor','Proposition d’éditeur de commandes','Propuesta de editor de controles'),summary:L('The open proposal adds a separate SDL/ImGui editor and live mappings. Its interface and shortcuts remain proposal details, not instructions guaranteed to work in v0.1.1.','待审核方案加入独立 SDL/ImGui 编辑器和实时映射。界面与快捷键仍属方案内容，不是保证在 v0.1.1 可用的操作步骤。','يقترح محرر SDL/ImGui وربطاً حياً. الواجهة والاختصارات ليست تعليمات مضمونة في v0.1.1.',"A proposta aberta acrescenta um editor separado baseado em SDL/ImGui e associações de teclas atualizadas em tempo real. A interface e os atalhos fazem parte da proposta; não são passos garantidos na versão v0.1.1.",'Der Vorschlag ergänzt SDL/ImGui und Live-Belegungen. Oberfläche und Kürzel sind in v0.1.1 nicht garantiert.',"La proposition ouverte ajoute un éditeur distinct fondé sur SDL/ImGui et des associations de touches modifiables en direct. Son interface et ses raccourcis restent des éléments de la proposition, sans garantie de fonctionnement dans v0.1.1.",'La propuesta añade SDL/ImGui y asignaciones en vivo. Interfaz y atajos no están garantizados en v0.1.1.')},
 {number:3220,games:[],title:L('Sampler border colours follow the image type','采样器边框颜色匹配图像类型','ألوان حدود sampler حسب الصورة','Cor de bordo segundo o tipo de imagem','Sampler-Randfarben nach Bildtyp','Couleurs de bord selon le type d’image','Colores de borde según el tipo de imagen'),summary:L('Merged handling distinguishes integer and float border colours using paired image formats. It addresses a specific sampling case; it does not measure overall game graphics compatibility.','合并实现根据配对图像格式区分整数与浮点边框颜色，解决特定采样场景，不是整体游戏画面兼容率的测量。',"يميز التعديل المدمج ألوان حدود أداة أخذ العينات (sampler) بين القيم الصحيحة والعائمة بحسب صيغ الصور المقترنة. يعالج حالة محددة لأخذ العينات، ولا يقيس توافق الرسوميات في الألعاب عموماً.",'O merge distingue cores inteiras e float pelo formato da imagem. Resolve uma amostragem específica, não mede compatibilidade gráfica global.','Der Merge trennt Integer- und Float-Randfarben nach Bildformat. Er betrifft einen Sampling-Fall, keine allgemeine Grafik-Kompatibilitätsmessung.',"Le changement intégré distingue les couleurs de bord du sampler selon qu’elles utilisent des valeurs entières ou flottantes, à partir des formats d’image associés. Il traite un cas précis d’échantillonnage, sans mesurer la compatibilité graphique globale des jeux.",'El merge distingue bordes enteros y float según la imagen. Trata un muestreo específico, no mide compatibilidad gráfica general.')},
 {number:3138,games:[],title:L('Font handles retain language and design settings','字体句柄保存语言与排版设置','حفظ اللغة والتصميم في مقابض الخط','Definições de idioma e desenho das fontes','Schrift-Handles behalten Spracheinstellungen','Paramètres de langue et de typographie','Ajustes de idioma y diseño de fuentes'),summary:L('Merged setters/getters retain values per font handle. The source marks parts of the signatures unverified on PS5 hardware; this does not mean every game’s multilingual text is fixed.','合并的 getter/setter 按字体句柄保留参数。来源仍标注部分签名未在 PS5 真机验证，不能解释为所有游戏的多语言文字已修复。',"تحفظ دوال القراءة والضبط المدمجة القيم لكل معرّف خط. يشير المصدر إلى أن بعض تواقيع الدوال لم تُتحقق على جهاز PS5؛ ولا يعني ذلك إصلاح النصوص متعددة اللغات في كل لعبة.","As funções de leitura e escrita integradas conservam os valores de cada identificador de tipo de letra. O código assinala que algumas assinaturas não foram verificadas numa PS5; isto não significa que o texto multilingue de todos os jogos esteja corrigido.",'Der Merge speichert Werte pro Schrift-Handle. Signaturen sind teils nicht auf PS5 geprüft; nicht alle mehrsprachigen Spieltexte sind damit behoben.',"Les fonctions de lecture et de modification intégrées conservent les valeurs propres à chaque handle de police. La source signale que certaines signatures n’ont pas été vérifiées sur une PS5 ; cela ne signifie pas que tous les textes multilingues des jeux sont corrigés.",'El merge guarda valores por fuente. Algunas firmas no están verificadas en PS5; no corrige por ello todos los textos multilingües.')},
];
export const developmentSource=(note:DevelopmentNote)=>metadata[String(note.number) as keyof typeof metadata];
