import {L,type Text} from './model';
import metadata from './github-source-status.json';
export interface DevelopmentNote {number:number;title:Text;summary:Text;games:string[]}
export const developmentNotes:DevelopmentNote[]=[
{
 "number": 9789,
 "games": [
  "ccleste-homebrew"
 ],
 "title": {
  "en": "UINT tests expand, while exact heads and validation matter",
  "zh": "UINT测试扩展，仍须区分head与验证层",
  "ar": "توسيع UINT مع فصل الرؤوس والتحقق",
  "pt": "UINT ampliado com heads distintos",
  "de": "UINT-Tests erweitert, Heads beachten",
  "fr": "Tests UINT élargis, heads à distinguer",
  "es": "UINT ampliado, distinguir heads"
 },
 "summary": {
  "en": "Later tests read multi-channel raw UINT exports and R8 values0–255, not undefined out-of-range conversion. A specific{1.0,−0.0} lavapipe pair remains excluded/documented. Earlier RX6600XT passes had no layer; the later e605/2fade pair confirms layer loading and0VUID. This is API evidence, not a fresh ccleste/Mac run.",
  "zh": "后续测试读回多通道原始UINT及R8的0–255，不覆盖未定义越界转换；lavapipe特定{1.0,−0.0}组合仍排除并记录。早先RX6600XT通过未加载层，较后e605／2fade配对确认加载且0 VUID；属API证据，不是新ccleste／Mac运行。",
  "ar": "اختبارات أحدث تقرأ UINT متعدد القنوات وR8 ضمن0–255 لا تحويل خارج النطاق. زوج lavapipe محدد مستثنى؛ اختبار RX6600XT قديم بلا layer، اللاحق e605/2fade يؤكدها وصفرVUID. API لا تشغيل جديد.",
  "pt": "Testes posteriores leem UINT multicanal/R8 0–255, não conversão indefinida. Par lavapipe excluído/documentado; RX6600XT antigo sem layer, e605/2fade confirma layer/0VUID. API, não novo jogo/Mac.",
  "de": "Spätere Tests lesen Mehrkanal-UINT/R8 0–255, keine undefinierte Konversion. Ein Lavapipe-Paar ausgenommen/dokumentiert; alter RX6600XT-Lauf ohne Layer, e605/2fade mit Layer/0VUID. API, kein neuer Spiel-/Maclauf.",
  "fr": "Tests ultérieurs lisent UINT multicanal/R8 0–255, pas conversion indéfinie. Paire lavapipe exclue/documentée ; ancien RX6600XT sans layer, e605/2fade confirme layer/0VUID. API, pas nouvel essai jeu/Mac.",
  "es": "Tests posteriores leen UINT multicanal/R8 0–255, no conversión indefinida. Par lavapipe excluido/documentado; RX6600XT anterior sin layer, e605/2fade confirma layer/0VUID. API, no juego/Mac nuevo."
 }
},
{
 "number": 10515,
 "games": [
  "bugsnax"
 ],
 "title": {
  "en": "Two-sample coverage and the single-sample follow-up remain candidates",
  "zh": "两采样coverage及单采样跟进仍为候选",
  "ar": "تغطية عينتين ومتابعة العينة الواحدة مرشحتان",
  "pt": "Cobertura duas amostras ainda candidata",
  "de": "Zwei-Sample-Coverage bleibt Kandidat",
  "fr": "Couverture deux échantillons encore candidate",
  "es": "Cobertura dos muestras aún candidata"
 },
 "summary": {
  "en": "Native gfx1032 measurements pin a separate0xe701 two-sample table, not the old eight-sample rule or PS5 correctness. Bugsnax moves past its14s stop; #10581’s stacked Windows report completes the tutorial. Both PRs remain open; later heads/rebase conflicts and skipped product CI do not inherit earlier exact-head validation.",
  "zh": "gfx1032本机测量固定独立0xe701两采样表，不套用旧八采样规则，也非PS5正确性证明。Bugsnax越过14秒，#10581叠加Windows报告完成教程；两PR仍开放，后续head／重基冲突及跳过产品CI不能继承旧head验证。",
  "ar": "قياس gfx1032 يثبت جدول0xe701 لعينتين لا ثماني ولا صحة PS5. Bugsnax يتجاوز14ث، وتركيب #10581 يكمل درس Windows. كلاهما مفتوح، رؤوس أحدث/تعارض وCI متخطى لا ترث اختباراً قديماً.",
  "pt": "Medição gfx1032 fixa tabela0xe701 de duas amostras, não oito/PS5. Bugsnax passa14s; #10581 completa tutorial Windows. Ambos abertos, heads/conflitos/CI ignorada não herdam testes antigos.",
  "de": "gfx1032-Messung pinnt eigene0xe701-Zweisampletabelle, nicht Acht-Sample/PS5-Beweis. Bugsnax passiert14s, #10581-Tutorial auf Windows. Beide offen; neue Heads/Konflikte/übersprungene CI erben keine alten Tests.",
  "fr": "Mesure gfx1032 fixe table0xe701 à deux échantillons, pas huit/preuve PS5. Bugsnax passe14s, #10581 termine tutoriel Windows. Deux PR ouvertes ; nouveaux heads/conflits/CI sautée sans héritage des anciens tests.",
  "es": "Medición gfx1032 fija tabla0xe701 de dos muestras, no ocho/prueba PS5. Bugsnax supera14s, #10581 termina tutorial Windows. Ambos abiertos; heads/conflictos/CI omitida no heredan tests anteriores."
 }
},
{
 "number": 10547,
 "games": [
  "hollow-knight-silksong"
 ],
 "title": {
  "en": "RADV seam candidate has a bounded title check",
  "zh": "RADV斜缝候选有具体游戏验证",
  "ar": "مرشح شق RADV باختبار محدود",
  "pt": "Candidato RADV com teste limitado",
  "de": "RADV-Nahtkandidat mit begrenztem Test",
  "fr": "Candidat RADV vérifié dans un cas précis",
  "es": "Candidato RADV con prueba limitada"
 },
 "summary": {
  "en": "The open PR prefers host interpolation only on RADV with KHR barycentrics and falls back when lowering is unsupported; target choice enters the cache key. The780M author reports menu/tut_01 seam removed. Hosted product jobs were skipped; reported13test GPU checks are not universal driver or title validation.",
  "zh": "开放PR仅在具KHR barycentrics的RADV优先host interpolation，不支持时回退，并把目标选择纳入缓存键。780M作者报告菜单／tut_01斜缝消失；托管产品测试被跳过，13项GPU测试报告不等于全部驱动／游戏验证。",
  "ar": "PR مفتوح يفضل host interpolation على RADV/KHR مع fallback ومفتاح cache. المؤلف يزيل الشق على780M؛ product CI متخطى،13اختبار GPU لا يثبتان كل العناوين.",
  "pt": "PR aberto prefere host interpolation RADV/KHR com fallback/cache key. Autor remove seam na780M; product CI ignorada,13testes GPU não validam todos títulos/drivers.",
  "de": "Offener PR bevorzugt Hostinterpolation auf RADV/KHR mit Fallback/Cachekey. Autor meldet Naht weg auf780M; Produkt-CI übersprungen,13GPU-Tests keine allgemeine Validierung.",
  "fr": "PR ouverte préfère interpolation hôte RADV/KHR avec repli/cache key. Auteur voit disparition sur780M ; CI produit sautée,13tests GPU pas validation universelle.",
  "es": "PR abierto prefiere interpolación host RADV/KHR con fallback/cache key. Autor elimina diagonal780M; CI producto omitida,13tests GPU no validan todo."
 }
},
{
 "number": 7881,
 "games": [],
 "title": {
  "en": "Four controller ports merged after v0.1.3",
  "zh": "v0.1.3之后合入四手柄端口",
  "ar": "دمج أربع خانات يد بعدv0.1.3",
  "pt": "Quatro comandos integrados apósv0.1.3",
  "de": "Vier Controllerports nachv0.1.3 gemergt",
  "fr": "Quatre ports manette aprèsv0.1.3",
  "es": "Cuatro puertos de mando trasv0.1.3"
 },
 "summary": {
  "en": "Main now assigns SDL controllers to Players1–4 with dynamic users and keyboard/mouse on Player1. The remote port remains disconnected. Fifteen pad/user-service tests and rebase notes are technical coverage, not proof of four physical controllers or every game’s multiplayer. The separate ImGui editor #674 remains open.",
  "zh": "main按SDL连接分配玩家1–4、动态用户，玩家1合成键鼠；remote端口保持断开。15项pad／user-service测试及重基记录属技术覆盖，不证明四只实体手柄或所有游戏多人；独立ImGui编辑器#674仍开放。",
  "ar": "Main يوزع SDL على1–4 مع مستخدمين ديناميكيين، واللوحة/الفأرة مع1. Remote منفصل؛15اختباراً لا تثبت أربع أيد فعلية أو كل الألعاب، و#674 مفتوح.",
  "pt": "Main atribui SDL a1–4/utilizadores dinâmicos, teclado/rato ao1. Remote desligado;15testes não provam quatro comandos físicos/todos jogos, #674 aberto.",
  "de": "Main weist SDL1–4/dynamische Nutzer zu, Tastatur/Maus zu1. Remote getrennt;15Tests kein Vier-Geräte-/Alle-Spiele-Beleg, #674 offen.",
  "fr": "Main affecte SDL1–4/utilisateurs dynamiques, clavier/souris au1. Remote déconnecté ;15tests pas preuve de quatre appareils/tous jeux, #674 ouvert.",
  "es": "Main asigna SDL1–4/usuarios dinámicos, teclado/ratón al1. Remote desconectado;15tests no prueban cuatro dispositivos/todos juegos, #674 abierto."
 }
},
{
 "number": 10219,
 "games": [
  "apotris-homebrew"
 ],
 "title": {
  "en": "SDK syscall routing is a proposal; trapping remains debugging-only",
  "zh": "SDK syscall路由仍为提案，trap限调试",
  "ar": "توجيهSDKsyscall اقتراح،trap للتشخيصفقط",
  "pt": "Rota syscall SDK proposta; trap só depuração",
  "de": "SDK-Syscallrouting Vorschlag, Trap nurDebugging",
  "fr": "Routage SDKsyscall proposé, trap débogage seul",
  "es": "Ruta SDKsyscall propuesta, trap solo depuración"
 },
 "summary": {
  "en": "Apotris’s pathconf stub is converted to UD2 with --trap-sdk-syscall-stubs; tested runs never call it. #10219 proposes routing exact recognized wrappers to existing exports, but error conventions and supported scope are unresolved. Conversion success does not implement FreeBSD syscalls or certify general safety, and the current flag remains for debugging.",
  "zh": "Apotris的pathconf stub经--trap-sdk-syscall-stubs改为UD2，本次运行未调用；#10219只提议把精确认出的wrapper路由到已有export，错误约定及支持范围未决。转换成功不实现FreeBSD syscall或证明通用安全，此flag仍限调试。",
  "ar": "Apotris pathconf يصبحUD2 بالflag ولم يستدعَ. #10219 يقترح route wrappers دقيقة إلىexports، convention/نطاق مفتوحان. التحويل ليس تنفيذsyscalls أوسلامةعامة؛ flag debugging.",
  "pt": "Apotris pathconf viraUD2 e não foi chamado. #10219 propõe routing wrappers exatos paraexports, erros/âmbito abertos. Converter não implementa syscalls/segurança geral; flag debugging.",
  "de": "Apotris-pathconf wirdUD2, nieaufgerufen. #10219 schlägt Routing exakterWrapper aufExports vor, Fehlerkonvention/Umfang offen. Konvertieren implementiert keineSyscalls/Allgemeinsicherheit; Flag nurDebug.",
  "fr": "Apotris-pathconf devientUD2, jamaisappelé. #10219 propose routage wrappers exacts vers exports, erreurs/périmètre ouverts. Conversion pasimplémentation syscalls/sûreté générale ; flag debugging.",
  "es": "Apotris-pathconf pasaUD2, nuncallamado. #10219 propone routing wrappers exactos aexports, errores/alcance abiertos. Convertir noimplementa syscalls/seguridadgeneral; flag debugging."
 }
},
{
 "number": 10125,
 "games": [],
 "title": {
  "en": "Build-cost proposal: shared test PCH, not faster game execution",
  "zh": "构建成本提案：共享测试PCH，不是游戏提速",
  "ar": "اقتراحكلفةbuild:PCH مشتركلاسرعةاللعبة",
  "pt": "Proposta build:PCH testes, não velocidade do jogo",
  "de": "Buildkostenvorschlag:Test-PCH, keineSpielbeschleunigung",
  "fr": "Proposition build:PCH detests, pas vitesse jeu",
  "es": "Propuesta build:PCH tests, no velocidad juego"
 },
 "summary": {
  "en": "On Windows/GCC15.2 main d339082d2e, header edits rebuild500–800 objects, mostly tests. A later no-ccache -j4 test-PCH experiment reduces rebuild664→341s; include pruning alone leaves many direct includes. #10163/#10164 propose build changes. These figures measure compilation on that setup, not AnyPS5 gameplay or a merged release guarantee.",
  "zh": "Windows／GCC15.2、main d339082d2e的header改动重编500–800对象、主要测试；后续无ccache、-j4共享测试PCH实验664→341秒，单删include仍有大量直接依赖。#10163／#10164属构建提案，仅此环境编译时间，非游玩或合入发行保证。",
  "ar": "Windows/GCC15.2/maind339:header يعيد500–800object أغلبهاtests. PCH لاحق بدونccache-j4:664→341ث؛ pruning وحده محدود. #10163/#10164 مقترحان، قياسcompile لاFPS/ضمانrelease.",
  "pt": "Windows/GCC15.2/maind339:header recompila500–800objetos, maioria testes. PCH posterior semccache-j4:664→341s; pruning limitado. #10163/#10164 propostas, tempo compile nãoFPS/release.",
  "de": "Windows/GCC15.2/Maind339:Header baut500–800Objekte, meistTests. SpätererPCH ohneCcache-j4:664→341s, Includepruning begrenzt. #10163/#10164 Vorschläge, Compilezeit keinFPS/Releasebeleg.",
  "fr": "Windows/GCC15.2/maind339:header recompile500–800objets surtouttests. PCH ultérieur sansccache-j4:664→341s, pruning limité. #10163/#10164 propositions, compile pasFPS/release.",
  "es": "Windows/GCC15.2/maind339:header recompila500–800objetos, mayoría tests. PCH posterior sinccache-j4:664→341s, pruning limitado. #10163/#10164 propuestas, compile noFPS/release."
 }
},
{
 "number": 8091,
 "games": [
  "lodoss-deedlit",
  "absolum",
  "dusk-diver-2",
  "lego-horizon-adventures",
  "jumanji-ppsa03973"
 ],
 "title": {
  "en": "Host-import draft: title-specific gains, regressions and unresolved crashes",
  "zh": "Host-import草案：按游戏区分收益、回归与未解崩溃",
  "ar": "مسودةhost-import:مكاسب وتراجع وأعطالحسبالعنوان",
  "pt": "Draft host-import:ganhos/regressões/crashes por título",
  "de": "Hostimport-Draft:Gewinne/Regressionen/Crashs jeTitel",
  "fr": "Draft host-import:gains/régressions/crashs partitre",
  "es": "Draft host-import:ganancias/regresiones/crashes portítulo"
 },
 "summary": {
  "en": "The draft avoids budget collapse in Ikai/FFResonance diagnostics and, with #10304, Mickey’s bounded level runs. Mickey’s error label/−13 value conflict remains unresolved. Older Lodoss standalone regression predates merged #7465; JUMANJI crashes and default memory-pressure safety remain open. Redirected logs/different scenes are not protocol benchmarks.",
  "zh": "草案在Ikai／FFResonance诊断及加#10304的Mickey短关卡运行避免预算塌缩；Mickey错误名与−13数值矛盾仍待查。旧Lodoss单独回归早于已合#7465，JUMANJI崩溃及默认内存压力安全未决；重定向／不同画面不是规范基准。",
  "ar": "المسودة تتجنب انهيار الميزانية في تشخيص Ikai/FF ومع#10304في Mickey. تسمية−13 متضاربة؛ تراجع Lodoss قديم قبل#7465، أعطال JUMANJI/سلامة الذاكرة مفتوحة، السجل المعاد ليس benchmark.",
  "pt": "Draft evita colapso Ikai/FF e Mickey+#10304. Nome/código−13 incoerentes; regressão Lodoss antiga antes#7465, JUMANJI/memória abertos, logs/cenas distintos não são benchmark.",
  "de": "Draft vermeidet Budgetabfall in Ikai/FF/Mickey+#10304. Name/Code−13 widersprüchlich; alter Lodoss-Rückgang vor#7465, JUMANJI/Speichersicherheit offen. Umgeleitete Logs/andere Szenen keine Protokollbenchmarks.",
  "fr": "Draft évite chute budget Ikai/FF/Mickey+#10304. Nom/code−13 contradictoires ; ancienne régression Lodoss avant#7465, JUMANJI/mémoire ouverts. Logs redirigés/scènes distinctes pas benchmarks.",
  "es": "Draft evita caída presupuesto Ikai/FF/Mickey+#10304. Nombre/código−13 incoherentes; regresión Lodoss antigua antes#7465, JUMANJI/memoria abiertos. Logs/escenas distintas no son benchmarks."
 }
},
{
 "number": 10364,
 "games": [
  "astro-bot-ppsa21567"
 ],
 "title": {
  "en": "ASTRO: measure label-store cost without discarding its correctness role",
  "zh": "ASTRO：量化label写回成本，保留正确性边界",
  "ar": "ASTRO:كلفةlabel-store مع دورالصحة",
  "pt": "ASTRO:custo label-store e correção",
  "de": "ASTRO:Label-Store-Kosten und Korrektheit",
  "fr": "ASTRO:coût label-store et correction",
  "es": "ASTRO:coste label-store y corrección"
 },
 "summary": {
  "en": "Both NVIDIA and AMD reproduce label-store overhead. Store-off and a1MiB cutoff can restore stale CPU reads, so neither is a general correctness-preserving fix. The preferred asynchronous-store proposal keeps image copies before labels; its copy bandwidth remains a separate cost, not an implemented or released solution.",
  "zh": "NVIDIA及AMD均复现label写回开销；关闭或1MiB截断可能恢复CPU旧数据，都不是保持正确性的通用修复。优先异步store提议保持拷贝先于label，拷贝带宽仍须另测，尚非已实现或已发行解法。",
  "ar": "NVIDIA وAMD يعيدان كلفة label؛ التعطيل/حد1MiB يعيد بيانات CPU قديمة. اقتراح asynchronous يحفظ النسخ قبل label مع كلفة bandwidth منفصلة، ليس حلاً منفذاً/صادراً.",
  "pt": "NVIDIA/AMD reproduzem custo; off/limite1MiB arriscam CPU stale. Proposta assíncrona mantém cópias antes de label, bandwidth separado, sem solução implementada/release.",
  "de": "NVIDIA/AMD zeigen Kosten; Abschalten/1MiB riskiert alte CPU-Daten. Asynchronvorschlag behält Kopien vor Label, Bandbreite separat, noch keine implementierte/ausgelieferte Lösung.",
  "fr": "NVIDIA/AMD reproduisent coût ; off/limite1MiB risque CPU périmé. Proposition asynchrone garde copies avant label, bande passante distincte, pas solution implémentée/publiée.",
  "es": "NVIDIA/AMD reproducen coste; off/límite1MiB arriesga CPU antiguo. Propuesta asíncrona mantiene copias antes de label, ancho de banda separado, sin solución implementada/publicada."
 }
},
{
 "number": 9754,
 "games": [],
 "title": {
  "en": "Mac writeback experiment measures cost, not a safe speed setting",
  "zh": "Mac 写回实验测出成本，尚非安全提速设置",
  "ar": "تجربة كتابة Mac تقيس التكلفة لا إعداداً آمناً",
  "pt": "Experiência Mac mede custo, não opção segura",
  "de": "Mac-Writeback misst Kosten, keine sichere Option",
  "fr": "Writeback Mac : coût mesuré, pas réglage sûr",
  "es": "Writeback Mac mide coste, no ajuste seguro"
 },
 "summary": {
  "en": "Don’t Starve Together PPSA02070, Apple M2/MoltenVK 1.4.2, macOS series 42c3fd09a2b6 plus local changes: two 60-second menu runs compare eager stores with a local skip. Writeback falls from 3.66 to 0.02 ms/frame; GPU time in the first 20 seconds falls from 19–21 to 16–16.5 ms. Later draw work differs. Skipping stores can expose stale bytes to guest CPU reads, so this is a correctness-sensitive proposal, with no Windows/Linux or gameplay validation.",
  "zh": "Don’t Starve Together PPSA02070，Apple M2／MoltenVK 1.4.2、Mac 系列 42c3fd09a2b6 加本地改动：两次 60 秒菜单对照中，跳过主动写回使该项从 3.66 降至 0.02 ms／帧；前 20 秒 GPU 从 19–21 降至 16–16.5 ms，后续绘制量不同。跳过写回可能让客体 CPU 读到旧数据，因此仍是涉及正确性的提案，无 Windows／Linux 或实际游玩验证。",
  "ar": "PPSA02070 على M2/MoltenVK 1.4.2، فرع Mac 42c3fd09a2b6 مع تغييرات محلية: تجربتا قائمة 60ث، تجاوز الكتابة يخفضها من 3.66 إلى 0.02ms/إطار وGPU أول 20ث من 19–21 إلى 16–16.5ms؛ العمل اللاحق مختلف. قد تقرأ CPU بيانات قديمة، فلا إعداد آمن أو إثبات لعب/Windows/Linux.",
  "pt": "PPSA02070 em M2/MoltenVK 1.4.2, série Mac 42c3fd09a2b6 com alterações locais: dois menus de 60s; omitir stores reduz escrita de 3,66 para 0,02ms/frame e GPU nos primeiros 20s de 19–21 para 16–16,5ms. Trabalho posterior difere. A CPU pode ler dados antigos; proposta sensível à correção, sem Windows/Linux ou jogabilidade verificados.",
  "de": "PPSA02070, M2/MoltenVK 1.4.2, Mac-Serie 42c3fd09a2b6 plus lokale Änderungen: zwei 60s-Menüläufe. Store-Skip senkt Writeback 3,66→0,02ms/Frame und GPU in ersten 20s 19–21→16–16,5ms; spätere Draw-Arbeit unterscheidet sich. CPU kann alte Daten lesen. Korrektheitskritischer Vorschlag ohne Windows/Linux- oder Spielnachweis.",
  "fr": "PPSA02070, M2/MoltenVK 1.4.2, série Mac 42c3fd09a2b6 et changements locaux : deux menus de 60s. Omettre les stores réduit le writeback 3,66→0,02ms/image et le GPU des premières 20s 19–21→16–16,5ms ; travail ultérieur différent. Risque de données périmées pour CPU ; proposition sensible à la correction, sans jeu/Windows/Linux validés.",
  "es": "PPSA02070, M2/MoltenVK 1.4.2, serie Mac 42c3fd09a2b6 con cambios locales: dos menús de 60s. Omitir stores baja writeback 3,66→0,02ms/frame y GPU en primeros 20s 19–21→16–16,5ms; trabajo posterior distinto. CPU puede leer datos viejos; propuesta sensible a corrección, sin validar juego/Windows/Linux."
 }
},
{
 "number": 9783,
 "games": [
  "ccleste-homebrew",
  "doom-3-bfg-homebrew"
 ],
 "title": {
  "en": "Mac integration tests remain separate from Linux under Rosetta",
  "zh": "Mac 集成实验与 Rosetta 下的 Linux 分开记录",
  "ar": "تجارب Mac منفصلة عن Linux تحت Rosetta",
  "pt": "Testes Mac separados de Linux sob Rosetta",
  "de": "Mac-Integration getrennt von Linux unter Rosetta",
  "fr": "Essais Mac distincts de Linux sous Rosetta",
  "es": "Pruebas Mac separadas de Linux bajo Rosetta"
 },
 "summary": {
  "en": "The M5/MoltenVK runtime uses ci/macos-series-2 at 53db0badb with #7524, #7937 code and the SSL change from closed-unmerged #7332; conversion uses main 8b3e39832a. Open #9789, linked from issue #9783, passes the UINT pipeline failure: Doom 3 reaches a missing-data exit, while ccleste next lacks barycentric/mesh support. Separate Linux llvmpipe runs use a6dcea9279. Neither presents a playable game or establishes a released Mac runtime. Later #9789 reviews found packing/UINT-resolve issues at specific earlier heads; pipeline creation or fewer warnings alone does not establish correct pixel values or every later head’s qualification.",
  "zh": "M5／MoltenVK 运行库来自 ci/macos-series-2 53db0badb，加 #7524、#7937 代码及已关闭未合并 #7332 的 SSL 改动；转换器用 main 8b3e39832a。问题 #9783 所链的开放 PR #9789 越过 UINT 管线失败后，Doom 3 到缺数据退出，ccleste 仍缺 barycentric／mesh 能力。另行 Linux llvmpipe 用 a6dcea9279。均未呈现可玩游戏，也不构成已发行 Mac 运行库。 后续#9789审核在特定旧head发现packing／UINT resolve问题，管线创建或警告减少不能证明像素值正确或后续head全面合格。",
  "ar": "يستخدم تشغيل M5/MoltenVK شجرة ci/macos-series-2 عند 53db0badb مع #7524 وكود #7937 وتغيير SSL من #7332 المغلق دون دمج؛ المحول main 8b3e39832a. يتجاوز #9789 المفتوح خطأ UINT: Doom 3 يخرج لغياب البيانات وccleste يفتقد barycentric/mesh. Linux llvmpipe منفصل عند a6dcea9279؛ لا لعبة قابلة للعب أو إصدار Mac مثبت. مراجعات#9789 لاحقة وجدت مشاكلpacking/resolve فيheads معينة؛ إنشاءpipeline/تحذيراتأقل لايثبت صحةpixels أوheads لاحقة.",
  "pt": "O runtime M5/MoltenVK usa ci/macos-series-2 em 53db0badb, com #7524, código #7937 e SSL do #7332 fechado sem integrar; o conversor usa main 8b3e39832a. O #9789 aberto ultrapassa UINT: Doom 3 sai por falta de dados e ccleste para por barycentric/mesh. Linux llvmpipe é separado, em a6dcea9279. Não há jogo jogável apresentado nem runtime Mac publicado. Reviews#9789 posteriores encontrarampacking/resolve emheads específicos; pipeline/menosavisos não provam pixels/heads posteriores.",
  "de": "M5/MoltenVK nutzt ci/macos-series-2 53db0badb mit #7524, #7937-Code und SSL aus dem ungemergt geschlossenen #7332; Konverter ist Main 8b3e39832a. Offenes #9789 überwindet den UINT-Fehler: Doom 3 endet wegen fehlender Daten, ccleste an Barycentric/Mesh. Linux-llvmpipe läuft separat auf a6dcea9279. Kein dargestelltes spielbares Spiel und keine veröffentlichte Mac-Runtime. Spätere#9789-Reviews fandenPacking/Resolve anbestimmtenHeads; Pipeline/wenigerWarnungen beweisen keinePixel-/Folgehead-Korrektheit.",
  "fr": "Le runtime M5/MoltenVK utilise ci/macos-series-2 53db0badb avec #7524, le code #7937 et SSL du #7332 fermé sans fusion ; conversion sur main 8b3e39832a. Le #9789 ouvert dépasse UINT : Doom 3 quitte faute de données, ccleste manque de barycentric/mesh. Linux llvmpipe est distinct, sur a6dcea9279. Aucun jeu jouable présenté ni runtime Mac publié. Reviews#9789 ultérieures trouventpacking/resolve surheads précis ; pipeline/moinsavertissements ne prouvent pixel/headsultérieurs.",
  "es": "El runtime M5/MoltenVK usa ci/macos-series-2 53db0badb con #7524, código #7937 y SSL de #7332 cerrado sin fusionar; el conversor usa main 8b3e39832a. #9789 abierto supera UINT: Doom 3 sale por datos ausentes y ccleste carece de barycentric/mesh. Linux llvmpipe va separado en a6dcea9279. Sin juego jugable presentado ni runtime Mac publicado. Reviews#9789 posteriores hallanpacking/resolve enheads concretos; pipeline/menosavisos noprueban pixels/heads posteriores."
 }
},
{
 "number": 9684,
 "games": [],
 "title": {
  "en": "Java probes: stack alignment is runtime evidence",
  "zh": "Java探针：栈对齐属于runtime证据",
  "ar": "مجسات Java: محاذاة stack دليل runtime",
  "pt": "Sondas Java: alinhamento stack é evidência runtime",
  "de": "Java-Probes: Stackalignment ist Runtimebeleg",
  "fr": "Sondes Java : alignement stack, preuve runtime",
  "es": "Sondas Java: alineación stack es evidencia runtime"
 },
 "summary": {
  "en": "Discussion9683: three OpenJDK25 probe packages fail Linux stack-guard mprotect on main6ef5a1c4c;#9684 aligns16KiB stacks and reports all rows passing. WSL2/Ubuntu22.04/Ryzen97900/lavapipe, not a commercial game test. Console ALL PASS belongs to firmware13.60, not proof that all host VM paths match.",
  "zh": "讨论9683：三种OpenJDK25探针在main6ef5a1c4c的Linux stack-guard mprotect失败，#9684对齐16KiB栈并报告全部行通过；WSL2／Ubuntu22.04／Ryzen97900／lavapipe，非商业游戏。主机ALL PASS属于固件13.60，非全部host VM路径等价证明。",
  "ar": "نقاش9683: ثلاث حزم Java25 تفشل Linux mprotect على6ef5a1c4c؛#9684 يحاذي16KiB ويبلغ نجاح الصفوف. WSL2/Ubuntu22.04/7900/lavapipe، ليس لعبة تجارية. ALL PASS على كونسل13.60 لا يثبت كل مسارات host VM.",
  "pt": "Discussão9683: três probes Java25 falham Linux mprotect em6ef5a1c4c;#9684 alinha16KiB e relata todas linhas passadas. WSL2/Ubuntu22.04/7900/lavapipe, não jogo. ALL PASS console13.60 não prova equivalência VM host completa.",
  "de": "Diskussion9683: drei Java25-Probes Linux-mprotect-Fehler auf6ef5a1c4c;#9684 richtet16KiB aus, alle Zeilen gemeldet bestanden. WSL2/Ubuntu22.04/7900/lavapipe, kein Spiel. Konsolen-ALL-PASS13.60 keine gesamte Host-VM-Äquivalenz.",
  "fr": "Discussion9683: trois probes Java25 échouent Linux mprotect sur6ef5a1c4c ;#9684 aligne16KiB, toutes lignes annoncées passées. WSL2/Ubuntu22.04/7900/lavapipe, sans jeu. ALL PASS console13.60 ne prouve pas toute VM hôte.",
  "es": "Discusión9683: tres probes Java25 fallan Linux mprotect en6ef5a1c4c;#9684 alinea16KiB y reporta todas filas pasadas. WSL2/Ubuntu22.04/7900/lavapipe, no juego. ALL PASS consola13.60 no prueba toda VM host."
 }
},
{
 "number": 9397,
 "games": [],
 "title": {
  "en": "CPU raymarch demo: runtime smoke test, no AGC shader coverage",
  "zh": "CPU raymarch演示：runtime冒烟，非AGC shader覆盖",
  "ar": "عرض CPU: اختبار runtime لا تغطية AGC",
  "pt": "Demo CPU: smoke runtime, não cobertura AGC",
  "de": "CPU-Demo: Runtime-Smoke ohne AGC-Abdeckung",
  "fr": "Démo CPU : smoke runtime sans couverture AGC",
  "es": "Demo CPU: smoke runtime sin cobertura AGC"
 },
 "summary": {
  "en": "Demo v1.3—not AnyPS5 v0.1.3—passes three180frame smoke runs on clean d794 Linux/RX7900XTX/RADV26.2.3 with validation0VUID. A22s scripted scene/palette run exits normally; disk audio has nonzero samples, audible playback/physical pad untested. CPU raymarch/presentation is not AGC game coverage.",
  "zh": "Demo v1.3（非AnyPS5 v0.1.3）在干净d794、Linux／RX7900XTX／RADV26.2.3三次180帧smoke通过、验证0 VUID；22秒脚本换场／配色正常退出。磁盘声音样本非零不等于实际听音／实体手柄，CPU raymarch／呈现不是AGC游戏覆盖。",
  "ar": "Demo v1.3 لا إصدار AnyPS5: ثلاث180frame على d794 Linux/RX7900XTX/26.2.3 وصفرVUID.22ث مشاهد مبرمجة، PCM غير صفري لا يثبت صوتاً مسموعاً/يداً؛ CPU demo لا AGC ألعاب.",
  "pt": "Demo v1.3, não release AnyPS5: três180frames d794 Linux/RX7900XTX/26.2.3,0VUID.22s cenas scripted, PCM não zero sem som ouvido/pad; CPU demo não AGC jogos.",
  "de": "Demo v1.3, nicht AnyPS5-Release: dreimal180Frames d794 Linux/RX7900XTX/26.2.3,0VUID.22s Szenenskript, PCM ungleich null kein Hör-/Padtest; CPU-Demo keine AGC-Spielabdeckung.",
  "fr": "Demo v1.3, pas release AnyPS5 : trois180frames d794 Linux/RX7900XTX/26.2.3,0VUID.22s scènes scriptées, PCM non nul pas écoute/manette ; démo CPU pas jeux AGC.",
  "es": "Demo v1.3, no release AnyPS5: tres180frames d794 Linux/RX7900XTX/26.2.3,0VUID.22s escenas script, PCM no cero sin escucha/mando; demo CPU no juegos AGC."
 }
},
{
 "number": 9406,
 "games": [
  "biped",
  "wobbly-life",
  "hamster-playground",
  "outer-wilds"
 ],
 "title": {
  "en": "Pending-depth lifetime: title-specific paired evidence",
  "zh": "Pending depth生命周期：按游戏保留对照",
  "ar": "عمر depth: أدلة متطابقة لكل عنوان",
  "pt": "Depth pendente: pares por título",
  "de": "Pending-Depth-Lebenszeit: Paare je Titel",
  "fr": "Durée depth : preuves appariées par titre",
  "es": "Vida depth: pruebas pareadas por título"
 },
 "summary": {
  "en": "Matched main reproduces pause-menu storage abort≈170s; #9406 same-base candidate permits pause/resume and return to menu through15min scheduled total, including startup/idle. Gameplay remains responsive, menu music absent. Saves, cutscenes and full-game stability unverified.",
  "zh": "匹配main约170秒重现暂停菜单storage退出；同基线#9406可暂停／恢复／回主菜单，达15分钟总限时，包含启动及闲置。游玩仍响应、菜单音乐缺失；存档／过场／全程稳定未验。",
  "ar": "main المقارن يعيد تعطل pause نحو 170 ث؛ #9406 على الأساس نفسه يسمح pause/resume/عودة حتى حد 15 د يشمل البدء والانتظار. اللعب يستجيب، موسيقى القائمة غائبة؛ الحفظ والمشاهد والاستقرار الكامل غير مختبرة.",
  "pt": "Main comparado repete falha pause≈170s; #9406 na mesma base permite pausa/retoma/menu até15min totais com arranque/espera. Jogo responde, música menu ausente; saves/cutscenes/estabilidade completa por testar.",
  "de": "Passendes Main reproduziert Pause-Abbruch≈170s; #9406 auf gleicher Basis erlaubt Pause/Resume/Menü bis15min Gesamtdauer samt Start/Leerlauf. Gameplay reagiert, Menümusik fehlt; Saves/Filme/Gesamtstabilität offen.",
  "fr": "Main témoin reproduit arrêt pause≈170s ; #9406 même base permet pause/reprise/menu jusqu’à15min totales incluant début/attente. Jeu réactif, musique menu absente ; saves/films/stabilité complète ouverts.",
  "es": "Main control reproduce fallo pausa≈170s; #9406 misma base permite pausa/reanudar/menú hasta15min totales con inicio/espera. Juego responde, música menú ausente; saves/películas/estabilidad completa sin probar."
 }
},
{
 "number": 8847,
 "games": [
  "curved-space"
 ],
 "title": {
  "en": "Curved Space: image fix replayed on merged main",
  "zh": "Curved Space：合并main已重跑图像修复",
  "ar": "Curved Space: إعادة إصلاح الصورة على main",
  "pt": "Curved Space: imagem retestada no main integrado",
  "de": "Curved Space: Bildfix auf gemergtem Main getestet",
  "fr": "Curved Space : correctif revérifié sur main intégré",
  "es": "Curved Space: imagen retestada en main integrado"
 },
 "summary": {
  "en": "Merged-main replay now renders arena, ship, rings, backdrop and bloom:73.4% non-black pixels at95s versus0.6–2.1% before. Same100s scripted route, no driver stop. This verifies the first-level image after#8847, not combat, audio, completion or a new FPS figure.",
  "zh": "合并main重跑首关有竞技场、船、光环、背景和bloom，95秒非黑像素73.4%，旧0.6–2.1%；同100秒脚本无驱动停止。验证#8847后的首关图像，非战斗／声音／完赛或新FPS。",
  "ar": "إعادة main المدمج تعرض الساحة والسفينة والحلقات والخلفية:73.4% غير أسود عند 95 ث مقابل 0.6–2.1%. مسار 100 ث بلا توقف driver. إثبات صورة أول مستوى بعد #8847 لا قتال/صوت/إكمال أو FPS جديد.",
  "pt": "Replay main integrado mostra arena/nave/anéis/cenário/bloom:73,4% não preto aos95s contra0,6–2,1%. Mesmo percurso100s sem parar driver. Valida imagem inicial após#8847, não combate/som/fim/FPS novo.",
  "de": "Gemergtes Main zeigt Arena/Schiff/Ringe/Hintergrund/Bloom:73,4% nichtschwarz bei95s statt0,6–2,1%. Gleicher100s-Pfad ohne Treiberstopp. Erstes Bild nach#8847 bestätigt, kein Kampf/Ton/Abschluss/FPS-Neuwert.",
  "fr": "Main intégré affiche arène/vaisseau/anneaux/décor/bloom :73,4% non noir à95s contre0,6–2,1%. Même trajet100s sans arrêt pilote. Image initiale après#8847 validée, pas combat/son/fin/nouveaux FPS.",
  "es": "Main integrado muestra arena/nave/anillos/fondo/bloom:73,4% no negro a95s frente0,6–2,1%. Misma ruta100s sin parar driver. Valida imagen inicial tras#8847, no combate/audio/final/FPS nuevo."
 }
},
{
 "number": 5487,
 "games": [
  "yakuza-0-directors-cut"
 ],
 "title": {
  "en": "Yakuza: missing PlayGo metadata needs an explicit policy",
  "zh": "如龙：PlayGo元数据缺失需明确策略",
  "ar": "Yakuza: سياسة صريحة لغياب PlayGo",
  "pt": "Yakuza: política explícita sem metadados PlayGo",
  "de": "Yakuza: klare Policy bei fehlenden PlayGo-Daten",
  "fr": "Yakuza : politique explicite sans métadonnées PlayGo",
  "es": "Yakuza: política explícita sin metadatos PlayGo"
 },
 "summary": {
  "en": "PPSA31327 01.015.000 on Windows main 80565c594 +AudioOut2 #8098, Ryzen 7 7800X3D/RTX4070 617.42: removing the local default_chunk=999 XML stops startup without a policy. With installed, fixed IDs 0–5/10 progress like the old XML for 120s; absent polls 1010 times waiting for installation. No new gameplay claim or verification of the 1000 boundary.",
  "zh": "Windows main 80565c594加AudioOut2 #8098，PPSA31327 01.015.000、Ryzen7 7800X3D／RTX4070 617.42：删除本地default_chunk=999 XML后，未设策略即启动停止。installed让固定ID 0–5／10在120秒内类似旧XML推进；absent轮询1010次等待安装。非新游玩结论，也未验证1000边界。",
  "ar": "PPSA31327 01.015.000 على Windows main 80565c594 مع AudioOut2 #8098 و7800X3D/RTX4070 617.42. حذف XML المحلي default_chunk=999 يوقف البدء بلا سياسة. installed يتقدم مثل XML لمدة 120ث للمعرفات 0–5/10؛ absent ينتظر التثبيت بـ1010 استطلاع. لا لعب جديد أو اختبار حد 1000.",
  "pt": "PPSA31327 01.015.000 no Windows main 80565c594 +AudioOut2 #8098, 7800X3D/RTX4070 617.42. Sem XML local default_chunk=999 e sem política, o arranque para. installed avança como XML durante 120s para IDs 0–5/10; absent espera instalação com 1010 consultas. Sem jogo novo nem teste do limite 1000.",
  "de": "PPSA31327 01.015.000 unter Windows Main 80565c594 +AudioOut2 #8098, 7800X3D/RTX4070 617.42. Ohne lokale default_chunk=999-XML und Policy stoppt der Start. installed folgt 120s dem XML-Verhalten für IDs 0–5/10; absent wartet mit 1010 Abfragen auf Installation. Kein neuer Spielbeleg oder 1000-Grenztest.",
  "fr": "PPSA31327 01.015.000 sous Windows main 80565c594 +AudioOut2 #8098, 7800X3D/RTX4070 617.42. Sans XML local default_chunk=999 ni politique, démarrage bloqué. installed suit le comportement XML 120s pour IDs 0–5/10 ; absent attend l’installation avec 1010 appels. Ni nouveau jeu ni test de borne 1000.",
  "es": "PPSA31327 01.015.000 en Windows main 80565c594 +AudioOut2 #8098, 7800X3D/RTX4070 617.42. Sin XML local default_chunk=999 ni política, arranque detenido. installed avanza como XML durante 120s para IDs 0–5/10; absent espera instalación con 1010 consultas. Sin nuevo juego ni test de límite 1000."
 }
},
{
 "number": 9011,
 "games": [
  "lodoss-deedlit"
 ],
 "title": {
  "en": "Lodoss: an isolated import-lease comparison",
  "zh": "Lodoss：独立导入lease对照",
  "ar": "Lodoss: مقارنة lease معزولة",
  "pt": "Lodoss: comparação isolada de lease",
  "de": "Lodoss: isolierter Import-Lease-Vergleich",
  "fr": "Lodoss : comparaison isolée du lease",
  "es": "Lodoss: comparación aislada de lease"
 },
 "summary": {
  "en": "Isolated #9011 mapped-run lease: two opposite-order stationary tutorial pairs50.089/51.220→59.840/59.940 FPS. No dependency on earlier #7465/#8091/#4449 stack. Same patch rebased with focused tests, without a new title replay at rebased head; other scenes/hosts untested.",
  "zh": "隔离#9011映射lease：静止教程反序两对50.089／51.220→59.840／59.940FPS，不依赖旧#7465／#8091／#4449堆栈。相同补丁再基后通过重点测试，但再基head未新跑游戏，其他场景／主机未验。",
  "ar": "#9011 معزول: زوجان بترتيبين50.089/51.220→59.840/59.940 فيتعليم ثابت، بلا#7465/#8091/#4449. rebase باختبارات فقط لا إعادةعنوان، باقيالمشاهد/الأجهزة غير مختبرة.",
  "pt": "#9011 isolado: 2pares inversos50, 089/51, 220→59, 840/59, 940 no tutorial parado, sem #7465/#8091/#4449. Rebase só testes focados, sem novo título/outros hosts.",
  "de": "Isoliertes #9011: zweiWechselpaare50, 089/51, 220→59, 840/59, 940 imstehendenTutorial, ohne #7465/#8091/#4449. Rebase nurFokustests, kein neuerTitellauf/andereHosts.",
  "fr": "#9011 isolé: 2paires inverses50, 089/51, 220→59, 840/59, 940 au tutoriel immobile, sans #7465/#8091/#4449. Rebase testé ciblé sans nouveau jeu/autres hôtes.",
  "es": "#9011 aislado: 2pares inversos50, 089/51, 220→59, 840/59, 940 en tutorial inmóvil, sin #7465/#8091/#4449. Rebase solo tests enfocados, sin nuevo juego/otros hosts."
 }
},
{
 "number": 5601,
 "games": [],
 "title": {
  "en": "PS5LM shader output is a compute test",
  "zh": "PS5LM输出属于compute测试",
  "ar": "خرجPS5LM اختبار حسابي",
  "pt": "SaídaPS5LM é teste compute",
  "de": "PS5LM-Ausgabe ist Compute-Test",
  "fr": "SortiePS5LM : test compute",
  "es": "SalidaPS5LM es prueba compute"
 },
 "summary": {
  "en": "Discussion #5601: PS5LM Plus0.8.4/Qwen2.5-0.5B q4_k_m on Windows11/RDNA2 iGPU32.0.21042.62 uses a local combination #7410/#8134/#8489. Warm runs3/3 q8,4/4 f16 and4/4 flash-off match CPU text; cold10s fence timeout remains. PRs are not all merged, output matching is not a commercial game result.",
  "zh": "讨论#5601的PS5LM Plus0.8.4／Qwen2.5-0.5B q4_k_m在Windows11／RDNA2核显32.0.21042.62合用#7410／#8134／#8489；暖缓存q8三次、f16四次、关flash四次文字匹配CPU，冷缓存仍可能10秒fence超时。并非全部合入，文本匹配不等于商业游戏实测。",
  "ar": "#5601: PS5LM0.8.4/Qwen0.5B q4_k_m علىWindows11/RDNA2 driver32.0.21042.62 يجمع#7410/#8134/#8489. دافئ3/3q8 و4/4f16 و4/4بلاflash يطابقCPU؛ timeout بارد10ث باق. ليست كلها مدمجة ولا نتيجة لعبة تجارية.",
  "pt": "#5601: PS5LM0.8.4/Qwen0.5B q4_k_m Windows11/RDNA2 driver32.0.21042.62 combina#7410/#8134/#8489. Quente3/3q8,4/4f16,4/4flash-off igualCPU; timeout frio10s. Não todos integrados/nem jogo comercial.",
  "de": "#5601: PS5LM0.8.4/Qwen0.5B q4_k_m Windows11/RDNA2 Treiber32.0.21042.62 mit#7410/#8134/#8489. Warm3/3q8,4/4f16,4/4ohneFlash CPU-Textgleich; kalter10s-Timeout bleibt. Nicht alle integriert/kein kommerzielles Spiel.",
  "fr": "#5601 : PS5LM0.8.4/Qwen0.5B q4_k_m Windows11/RDNA2 pilote32.0.21042.62 combine#7410/#8134/#8489. Chaud3/3q8,4/4f16,4/4sansFlash identiquesCPU ; timeout froid10s. Pas tous fusionnés/ni jeu commercial.",
  "es": "#5601: PS5LM0.8.4/Qwen0.5B q4_k_m Windows11/RDNA2 driver32.0.21042.62 combina#7410/#8134/#8489. Caliente3/3q8,4/4f16,4/4sinFlash igualCPU; timeout frío10s. No todos fusionados/ni juego comercial."
 }
},
{
 "number": 6314,
 "games": [],
 "title": {
  "en": "Version-checked conversion patches merged",
  "zh": "转换期版本检查补丁已合入",
  "ar": "دمج ترقيعاتتحويل مفحوصة",
  "pt": "Patches de conversão verificados integrados",
  "de": "Geprüfte Konvertierungspatches integriert",
  "fr": "Patches de conversion vérifiés intégrés",
  "es": "Parches de conversión verificados integrados"
 },
 "summary": {
  "en": "Post-v0.1.2 main can auto-discover relinker-patches.toml and verifies expected title bytes. --no-patches disables discovery. Keep manifest/content version with runtime evidence: clean source does not mean unmodified guest executable. No title-specific preset is implied.",
  "zh": "v0.1.2后main可自动发现relinker-patches.toml并核对游戏expected字节，--no-patches禁发现。运行证据需保留清单／内容版本，源码纯净不等于客体exe未修改；不含通用游戏预设。",
  "ar": "main بعدv0.1.2 يكتشفملفpatch ويتحققexpected؛--no-patches يعطل. سجّلالبيان/نسخةاللعبة؛ مصدرنظيف ليسguestغيرمعدل، لا preset.",
  "pt": "Main apósv0.1.2 descobre patches e verificaexpected;--no-patches desativa. Guarde manifesto/versão; fonte limpa não implica guest intacto, sem preset.",
  "de": "Main nachv0.1.2 entdecktPatches/prüftExpected;--no-patches aus. Manifest/Version behalten; saubererCode keinunveränderterGuest, keinPreset.",
  "fr": "Main aprèsv0.1.2 découvrepatches/vérifieexpected ;--no-patches désactive. Gardez manifeste/version ; sourcepropre n’implique pasguestintact, paspreset.",
  "es": "Main trasv0.1.2 descubreparches/verificaexpected;--no-patches desactiva. Guarda manifiesto/versión; fuentelimpia no implica guestintacto, sinpreset."
 }
},
{
 "number": 7681,
 "games": [
  "ratchet-clank-rift-apart",
  "guardians-of-the-galaxy",
  "sword-of-the-sea"
 ],
 "title": {
  "en": "Versioned register defaults restored",
  "zh": "带版本寄存器默认布局已恢复",
  "ar": "استعادة تخطيطسجلات معنسخة",
  "pt": "Layout dos registos versionados restaurado",
  "de": "Versioniertes Registerlayout wiederhergestellt",
  "fr": "Disposition des registres versionnés restaurée",
  "es": "Disposición de registros versionados restaurada"
 },
 "summary": {
  "en": "Merged#7681 keeps legacy key/bank pairs and restores compact12-byte entries for versioned getters. Ratchet NVIDIA main/revert pair passes old sentinel versus15s failure; AMD independent boot agrees, both stop later#6191. Other titles need their own rerun.",
  "zh": "已合#7681保留旧getter key／bank对，带版本getter恢复紧凑12字节项。Ratchet NVIDIA main／反转对比通过旧sentinel对15秒失败，AMD独立启动一致，但均后停#6191；其他游戏需各自复测。",
  "ar": "#7681 مدمج يحفظlegacy ويعيد12بايت للversioned. RatchetNVIDIA يمرmain مقابلrevert15ث،AMD يؤيدالبدء؛ كلاهما#6191 لاحقاً. باقيالعناوين تحتاجإعادة.",
  "pt": "#7681 integrado mantémlegacy/restaura12bytes versionados. RatchetNVIDIA main passa/revert15s falha, AMD confirma arranque; ambos param#6191 depois. Outros exigem reteste.",
  "de": "#7681 integriert behältLegacy/stellt12ByteVersionseinträge wiederher. RatchetNVIDIA Main passiert/Revert15s scheitert, AMD bestätigtStart; beide später#6191. AndereTitel neuprüfen.",
  "fr": "#7681 intégré conservelegacy/rétablit12octets versionnés. RatchetNVIDIA main passe/revert15s échoue, AMD confirmeboot ; deux arrêts ultérieurs#6191. Autres titres àretester.",
  "es": "#7681 integrado conservaLegacy/restaura12bytes versionados. RatchetNVIDIA main pasa/revert15s falla, AMD confirmainicio; ambos después#6191. Otrosrequieren retest."
 }
},
{
 "number": 7636,
 "games": [
  "sword-of-the-sea"
 ],
 "title": {
  "en": "Preinit regression traced and reverted",
  "zh": "preinit回归已追溯并回退",
  "ar": "تتبّع تراجعpreinit والتراجععنه",
  "pt": "Regressão preinit identificada e revertida",
  "de": "Preinit-Regression verfolgt und zurückgenommen",
  "fr": "Régression preinit retracée et annulée",
  "es": "Regresión preinit identificada y revertida"
 },
 "summary": {
  "en": "#7646 merged, reverting#6112 after tracing duplicate initialization in guest libc. Eight Linux homebrew starts return to prior stops on6e27fc8f0+c3b900159; Windows Sword441190cf6 reaches opening cutscene in240s. #7639 alone only reached the next duplicate setter. Not every title was affected; not a general gameplay certification.",
  "zh": "#7646合入回退#6112，已追到guest libc重复初始化。6e27fc8f0+c3b900159八项Linux自制启动回到原停止点；Windows Sword441190cf6在240秒到开场。单#7639仅推到下一个重复setter，并非所有游戏受影响，也非通用游玩认证。",
  "ar": "#7646 مدمج يعكس#6112 بعدتتبّع تهيئةlibc المكررة.8homebrew Linux تعودللتوقفالسابق على6e27fc8f0+c3b900159؛Sword Windows441190cf6 مقدمة240ث. #7639 وحده setter تالٍ، ليسكلالعناوين/شهادةلعب.",
  "pt": "#7646 integrado reverte#6112 após duplicação libc.8homebrew Linux em6e27fc8f0+c3b900159 voltam aos stops anteriores; SwordWindows441190cf6 chega intro240s. #7639 só avança setter; não afetava todos/não certifica jogo.",
  "de": "#7646 integriert und#6112 nach doppelterLibc-Initialisierung zurückgenommen.8Linux-Starts auf6e27fc8f0+c3b900159 wieder alteStopps; WindowsSword441190cf6 Intro240s. #7639 nur nächsterSetter; nichtalleTitel/keinSpielzertifikat.",
  "fr": "#7646 intégré annule#6112 après doubleinitialisation libc.8homebrew Linux sur6e27fc8f0+c3b900159 retrouvent anciensarrêts ; SwordWindows441190cf6 intro240s. #7639 seul au setter suivant ; pas tous/pas certificationjeu.",
  "es": "#7646 integrado revierte#6112 tras dobleinicializaciónlibc.8homebrew Linux en6e27fc8f0+c3b900159 vuelven a paradasprevias; SwordWindows441190cf6 intro240s. #7639 solo siguiente setter; no todos/no certificaciónjuego."
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
  "god-of-war-sons-of-sparta"
 ],
 "title": {
  "en": "Mac integration closed without merge",
  "zh": "Mac整合关闭且未合并",
  "ar": "دمجMac مغلق دون إدماج",
  "pt": "Integração Mac fechada sem merge",
  "de": "Mac-Integration ungemergt geschlossen",
  "fr": "Intégration Mac fermée sans fusion",
  "es": "Integración Mac cerrada sin fusionar"
 },
 "summary": {
  "en": "#7332 closed unmerged20 October;v0.1.3 has no Mac runtime archive. M4Pro/Rosetta local Lana tests on 7cf8c610c plus #6617/#7340/two committer changes measure29.45–29.47→29.75–29.80 FPS after a local exact-fma follow-up, two alternating runs per build. Scene stationary, broader suites retain failures; not nativeARM/main/release compatibility.",
  "zh": "#7332在10月20日关闭未合，v0.1.3无Mac库包。M4Pro／Rosetta的Lana本地7cf8c610c加#6617／#7340／两项committer改动，再加精确fma后，两个交替运行各测29.45–29.47→29.75–29.80FPS。仅静止场景，广泛suite仍失败，非原生ARM／main／发行兼容。",
  "ar": "#7332 أغلق بلا دمج20أكتوبر،v0.1.3 بلاruntimeMac. Lana محلي M4Pro/Rosetta على7cf8c610c+#6617/#7340 وتعديلين يقيس29.45–29.47→29.75–29.80 معfma محلي، تشغيلان متناوبان. مشهد ثابت واختبارات واسعة تفشل؛ ليسARM/main/release.",
  "pt": "#7332 fechado sem merge20outubro, v0.1.3 semruntimeMac. Lana localM4Pro/Rosetta7cf8c610c+#6617/#7340/2alterações mede29,45–29,47→29,75–29,80 comfma local,2runs alternados. Cena parada/suites com falhas; nãoARM/main/release.",
  "de": "#7332 am20.Oktober ungemergt geschlossen, v0.1.3 ohneMac-Runtime. LokalesLana M4Pro/Rosetta7cf8c610c+#6617/#7340/2Änderungen misst29,45–29,47→29,75–29,80 mit lokalemfma,2Wechselläufe. Standszene/breite Suiten mit Fehlern; keinARM/Main/Release.",
  "fr": "#7332 fermé sans fusion20octobre, v0.1.3 sansruntimeMac. Lana localM4Pro/Rosetta7cf8c610c+#6617/#7340/2changements mesure29,45–29,47→29,75–29,80 avecfma local,2essais alternés. Scène immobile/suites en échec ; niARM/main/release.",
  "es": "#7332 cerrado sin merge20octubre,v0.1.3 sinruntimeMac. Lana localM4Pro/Rosetta7cf8c610c+#6617/#7340/2cambios mide29,45–29,47→29,75–29,80 confma local,2ensayos alternados. Escena inmóvil/suites fallan; noARM/main/release."
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
  "en": "Sonic: preserved gameplay, latest composition still loading",
  "zh": "Sonic：保留历史游玩，最新组合仍加载",
  "ar": "Sonic: لعب محفوظ وآخر تركيب بالتحميل",
  "pt": "Sonic: jogo histórico, composição na carga",
  "de": "Sonic: historisches Spiel, neuester Pin lädt",
  "fr": "Sonic : jeu historique, composition en charge",
  "es": "Sonic: juego histórico, composición cargando"
 },
 "summary": {
  "en": "Latest composition reaches loading/transition animation, not gameplay, then naturally exits0xc0000409 at333.145s on the existing type14/format71 MSAA refusal. Four cinematic59.94FPS samples are not gameplay FPS. Zero VUID errors coexist with18warnings, watchdog/fence failures and one snapshot mismatch; historical32-ring play is separate.",
  "zh": "最新组合到加载／转场而非游玩，333.145秒旧type14／format71 MSAA拒绝自然退出0xc0000409。四次片头59.94 FPS不能当游玩FPS；VUID错误0仍伴18警告、看门狗／fence失败及一次snapshot mismatch，历史32环另列。",
  "ar": "أحدث تركيب يصل تحميل/انتقال لا لعب ثم خروج0xc0000409 عند333.145ث برفض MSAA القديم.59.94FPS تخص الفيلم؛ صفر VUID مع18تحذيراً وفشل انتظار ومخالفة snapshot،32حلقة تاريخية منفصلة.",
  "pt": "Composição recente chega carga/transição, não jogo, e sai0xc0000409 aos333,145s por MSAA antigo.59,94FPS só filme; zero VUID mas18avisos/falhas/mismatch,32anéis históricos separados.",
  "de": "Neueste Komposition lädt/zeigt Übergang, kein Spiel, natürlicher Exit0xc0000409 nach333,145s am alten MSAA-Stopp.59,94FPS nur Film; null VUID,18Warnungen/Waitfehler/Mismatch. Historische32Ringe getrennt.",
  "fr": "Composition récente atteint charge/transition, pas jeu, puis sortie naturelle0xc0000409 à333,145s sur ancien refus MSAA.59,94FPS concerne film ; zéro VUID mais18avertissements/échecs/mismatch,32anneaux historiques distincts.",
  "es": "Composición reciente llega a carga/transición, no juego, y sale0xc0000409 a333,145s por MSAA anterior.59,94FPS solo película; cero VUID pero18avisos/fallos/mismatch,32anillos históricos separados."
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
 {
 "number": 5381,
 "games": [],
 "title": {
  "en": "Browser release pairing verified",
  "zh": "网页发行配对已核实",
  "ar": "تحقق اقتران إصدار الويب",
  "pt": "Emparelhamento web verificado",
  "de": "Browser-Releasepaar geprüft",
  "fr": "Appariement web vérifié",
  "es": "Emparejamiento web verificado"
 },
 "summary": {
  "en": "#5381 closed;#5710 merged20 October. v0.1.3 asset web ZIP and live web-release.json/release.json agree on 3fd1cc393 and matching library archives. Pages now publishes a release pair instead of mixing main converter with old libraries. Manifest checks verify publication identity, not every game/import execution.",
  "zh": "#5381已关闭，#5710在10月20日合入。v0.1.3 web ZIP及线上web-release.json／release.json均为3fd1cc393，库包匹配。Pages改为成对发布，避免main转换器混旧库；清单核对证明发布身份，不证明每个游戏／导入已运行。",
  "ar": "#5381 مغلق و#5710 مدمج20أكتوبر. ZIP الويب وقائمتاه تقرنv0.1.3/3fd1cc393 بمكتباته. Pages ينشر زوج إصدار لاmain مع مكتبات قديمة؛ الهوية ليست اختبار كل لعبة/استيراد.",
  "pt": "#5381 fechado,#5710 integrado20outubro. ZIP e dois manifestos online confirmamv0.1.3/3fd1cc393 e bibliotecas. Pages publica par de release; identidade não prova cada jogo/import.",
  "de": "#5381 geschlossen,#5710 am20.Oktober integriert. ZIP und beide Livemanifeste bestätigenv0.1.3/3fd1cc393 samt Bibliotheken. Pages veröffentlicht Releasepaar; Identität kein Test aller Spiele/Imports.",
  "fr": "#5381 fermé,#5710 fusionné20octobre. ZIP et deux manifestes en ligne confirmentv0.1.3/3fd1cc393 et bibliothèques. Pages publie une paire ; identité sans test de tous jeux/imports.",
  "es": "#5381 cerrado,#5710 integrado20octubre. ZIP y ambos manifiestos online confirmanv0.1.3/3fd1cc393 y bibliotecas. Pages publica par; identidad no verifica cada juego/import."
 }
},
 {"number": 5383, "games": ["dreaming-sarah"], "title": {"en": "Linux v0.1.2 X11 retest is scoped", "zh": "Linux v0.1.2 的 X11 复测边界", "ar": "حدود إعادة اختبار X11", "pt": "Âmbito do reteste X11 v0.1.2", "de": "Grenzen des v0.1.2-X11-Retests", "fr": "Portée du retest X11 v0.1.2", "es": "Alcance del retest X11 v0.1.2"}, "summary": {"en": "The reporter closed #5383 after matching v0.1.2 relinker/libraries ran Sarah on CachyOS X11 with an MX230 and Mouse LD_PRELOAD workaround. Gameplay counters were 26–58 FPS. The earlier v0.1.1 offscreen archive remains historical. #5396 closed without merging; it is not the confirmed release fix or an independent test by this site.", "zh": "报告者在配套 v0.1.2 转换器／库、CachyOS X11、MX230 和 Mouse LD_PRELOAD 绕行条件下运行 Sarah 后关闭 #5383，游戏计数 26–58 FPS。旧 v0.1.1 离屏包结论保留历史边界；#5396 关闭未合入，不能当作该发行修复，本站也未独立实测。", "ar": "أغلق الكاتب #5383 بعد Sarah بمكتبات/أداة v0.1.2 على CachyOS X11 وMX230 وMouse LD_PRELOAD، عدادات لعب 26–58 FPS. v0.1.1 offscreen تاريخي. #5396 مغلق دون دمج، لا إصلاح مثبت ولا اختبار مستقل للموقع.", "pt": "Autor fechou #5383 após Sarah em v0.1.2 emparelhada, CachyOS X11/MX230 com Mouse LD_PRELOAD, 26–58 FPS. Arquivo offscreen v0.1.1 histórico. #5396 fechada sem merge, não correção comprovada nem teste próprio.", "de": "Autor schloss #5383 nach Sarah mit passenden v0.1.2-Dateien, CachyOS X11/MX230 und Mouse-LD_PRELOAD, 26–58 FPS. v0.1.1-Offscreen historisch. #5396 ungemergt geschlossen, kein belegter Fix/eigener Test.", "fr": "Auteur ferme #5383 après Sarah avec fichiers v0.1.2 appariés, CachyOS X11/MX230 et Mouse LD_PRELOAD, 26–58 FPS. v0.1.1 offscreen historique. #5396 fermé sans merge, pas correctif validé/test du site.", "es": "Autor cierra #5383 tras Sarah con archivos v0.1.2 pareados, CachyOS X11/MX230 y Mouse LD_PRELOAD, 26–58 FPS. v0.1.1 offscreen histórico. #5396 cerrada sin merge, no arreglo probado/prueba propia."}},
 {number:5431,games:["ghost-of-tsushima-directors-cut"],title:L("Trace draw attempts through successful submissions","追踪绘制尝试与成功提交","تتبع الرسم إلى الإرسال الناجح","Rastrear desenhos até submissões","Draw-Versuche bis Submit verfolgen","Tracer dessins jusqu’aux soumissions","Trazar dibujos hasta envíos"),summary:L("#5431 is an open diagnostic PR, with eight CaptureTrace tests reported. One isolated Ghost runtime trace has no preparation-failure events but still shows a black window without validated pixel data. It narrows the investigation; neither trace counters nor shader failures establish correct rendering or the cause of black output.","#5431 是开放的诊断 PR，报告八项 CaptureTrace 测试。一份隔离的对马运行追踪没有准备失败事件，仍显示黑窗口且无已验证像素。它缩小调查范围；追踪计数和着色器失败均不能证明正确渲染或黑屏原因。","#5431 PR تشخيص مفتوح مع 8 اختبارات. تتبع Ghost معزول بلا فشل تحضير لكن نافذة سوداء دون بكسلات موثقة. يضيق التحقيق،لا يثبت الرسم أو السبب.","#5431 PR diagnóstico aberto com 8 testes. Trace Ghost isolado sem falhas, janela negra sem píxeis validados. Restringe investigação, não prova imagem/causa.","#5431 offener Diagnose-PR mit 8 Tests. Ghost-Trace ohne Vorbereitungsfehler, schwarzes Fenster ohne validierte Pixel. Grenzt ein, beweist Bild/Ursache nicht.","#5431 PR diagnostic ouvert avec 8 tests. Trace Ghost sans échec préparation, fenêtre noire sans pixels validés. Limite enquête, sans prouver rendu/cause.","#5431 PR diagnóstico abierto con 8 pruebas. Trace Ghost sin fallos preparación, ventana negra sin píxeles validados. Acota investigación, no prueba imagen/causa.")},
 {
 "number": 4686,
 "games": [
  "dreaming-sarah",
  "doom-homebrew"
 ],
 "title": {
  "en": "Current evidence uses discussions; the community map is archived",
  "zh": "当前证据看讨论，社区地图已归档",
  "ar": "الدليل الحالي بالنقاشات والخريطة مؤرشفة",
  "pt": "Evidência nas discussões, mapa arquivado",
  "de": "Aktuelle Belege in Diskussionen, Karte archiviert",
  "fr": "Preuves actuelles dans les discussions, carte archivée",
  "es": "Pruebas actuales en debates, mapa archivado"
 },
 "summary": {
  "en": "The old table was removed in merged #4686. Current README links Game bring-up discussions; the community map is archived from24October, last build23October22:51UTC. Its stage ordering is historical and cannot replace pinned newer reports or erase earlier fork gameplay.",
  "zh": "旧表经#4686合并移除；当前README引向Game bring-up讨论，社区地图自10月24日归档、最后构建23日22:51UTC。阶段排序仅历史，不能替换较新固定报告或抹去旧分支游玩。",
  "ar": "الجدول أزيل بـ#4686، README يوجه للنقاشات. الخريطة مؤرشفة24أكتوبر، آخر بناء23،22:51UTC؛ ترتيب تاريخي لا يستبدل تقارير مثبتة أحدث أو يمحو لعب فرع قديم.",
  "pt": "Tabela removida #4686, README aponta discussões. Mapa arquivado24out, último23às22:51UTC; ordem histórica não substitui relatos novos/forks antigos.",
  "de": "Tabelle durch#4686 entfernt, README verweist auf Diskussionen. Karte archiviert24.Okt, zuletzt23.22:51UTC; historische Ordnung ersetzt keine neuen Pins/alten Forkbelege.",
  "fr": "Table retirée #4686, README renvoie aux discussions. Carte archivée24oct, dernier build23à22:51UTC ; ordre historique sans remplacer nouveaux pins/anciens forks.",
  "es": "Tabla retirada #4686, README dirige a debates. Mapa archivado24oct, último23a22:51UTC; orden histórico no sustituye pins nuevos/forks antiguos."
 }
},
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

developmentNotes.unshift(...[
 {
  "number": 9401,
  "games": [
   "gta-v"
  ],
  "title": {
   "en": "Pipeline retention grows to4096",
   "zh": "流水线保留上限增至4096",
   "ar": "حفظ حتى 4096pipeline",
   "pt": "Retenção até4096pipelines",
   "de": "Pipelinehaltung bis4096",
   "fr": "Rétention jusqu’à4096pipelines",
   "es": "Retención hasta4096pipelines"
  },
  "summary": {
   "en": "Merged main replays newest4096 journal records and grows the graphics store1024→4096 when needed; explicit store override fixes the count. It is not a byte bound. Small-shader memory floors differ from GTA’s upper estimate; replay/cold caches and spawn variation prevent a universal FPS claim. v0.1.3 files unchanged.",
   "zh": "已合main重放最新4096条journal，图形store按需1024→4096；显式覆盖固定数量，非字节预算。小着色器内存下限不同于GTA上界估计，冷热缓存和出生点差异不能推普遍FPS。v0.1.3文件未变。",
   "ar": "main المدمج يعيد أحدث 4096 سجلاً وينمو store1024→4096 عند الحاجة؛ override يثبت العدد لا البايت. كلفة shader صغير ليست حد GTA، الكاش/الظهور يمنع FPS عام. v0.1.3 لم يتغير.",
   "pt": "Main integrado repete últimos4096registos e store1024→4096; overridefixa contagem, não bytes. Custo de shaders pequenos difere deGTA; cache/spawn não provamFPSgeral. v0.1.3inalterado.",
   "de": "Main gemergt spielt letzte4096Einträge ab, Store wächst1024→4096; Overridefixiert Anzahl, nicht Bytes. Kleine Shaderkosten nichtGTA-Obergrenze; Cache/Spawn verhindern allgemeineFPS. v0.1.3unverändert.",
   "fr": "Main fusionné rejoue derniers4096, en store1024→4096; overridefixe nombre, pas octets. Coût petit shader différent deGTA; cache/spawn sansFPSgénéral. v0.1.3inchangé.",
   "es": "Main fusionado reproduce últimos4096, store1024→4096; overridefija número, no bytes. Coste de shaders pequeños difiere deGTA; caché/spawn sinFPSgeneral. v0.1.3sin cambios."
  }
 },
 {
  "number": 10935,
  "games": [
   "pragmata",
   "resident-evil-village",
   "resident-evil-requiem"
  ],
  "title": {
   "en": "Pad probe regression and an open fallback",
   "zh": "手柄探测回归与开放的回退方案",
   "ar": "تراجع فحص اليد وبديل مفتوح",
   "pt": "Regressão de sondagem e fallback aberto",
   "de": "Controllerprobe: Regression und offener Fallback",
   "fr": "Régression de sonde et repli ouvert",
   "es": "Regresión de sondeo y alternativa abierta"
  },
  "summary": {
   "en": "Merged10361 deliberately throws on unknown port types3/4. Pragmata/Village now stop;10935 proposes INVALID_ARG after user validation. Approved code and a WSL test/control do not measure those console results or prove a merged/released fix. Native Requiem tests include further patches and still fail later.",
   "zh": "10361对未知端口3／4有意抛错，Pragmata／Village因此停止；10935提议用户检查后回INVALID_ARG。审查通过及WSL用例／对照不证明该主机返回值，也非已合／已发行修复；Requiem原生测试还叠其他补丁并继续失败。",
   "ar": "10361 يرمي عمداً للمنفذين 3/4 المجهولين، فيوقف Pragmata/Village.10935 يقترح INVALID_ARG بعد فحص المستخدم. اعتماد/اختبار WSL لا يقيس الجهاز أو يثبت دمج/إصداراً. Requiem بمزيد patches يفشل لاحقاً.",
   "pt": "10361lança em portas3/4desconhecidas e páraPragmata/Village.10935propõeINVALID_ARGapós utilizador. Aprovação/testeWSLnão medem consola nem integração/release. Requiemusa maispatches e falha depois.",
   "de": "10361wirft absichtlich bei unbekannt3/4, Pragmata/Villagestoppen.10935schlägtINVALID_ARGnach Nutzerprüfung vor. Freigabe/WSL-Kontrolle misst Konsole nicht, kein Merge/Release. Requiemmit weiteren Patches scheitert später.",
   "fr": "10361lance pour ports3/4inconnus, Pragmata/Villagestoppent.10935proposeINVALID_ARGaprès utilisateur. Approbation/testWSLne mesure console ni fusion/release. Requiemavec autres patches échoue ensuite.",
   "es": "10361lanza en puertos3/4desconocidos, Pragmata/Villageparan.10935proponeINVALID_ARGtras usuario. Aprobación/testWSLno miden consola ni fusión/release. Requiemcon más parches falla después."
  }
 },
 {
  "number": 11119,
  "games": [
   "driftcheck",
   "syobon-action-homebrew"
  ],
  "title": {
   "en": "One SDL copy in an experimental Mac build",
   "zh": "实验Mac构建保留一份SDL",
   "ar": "نسخة SDL واحدة في Mac تجريبي",
   "pt": "Uma cópiaSDL emMac experimental",
   "de": "EineSDL-Kopie im experimentellenMac",
   "fr": "Une copieSDL surMac expérimental",
   "es": "Una copiaSDL enMac experimental"
  },
  "summary": {
   "en": "Open11119 removes duplicate SDL classes in a patched Rosetta runtime. DriftCheck has real USB Xbox input; Syobon uses scripted input.97passes/25skips and device-creating VideoOut skips are not full GPU validation. Main alone still does not build Mac libraries; no official Mac release.",
   "zh": "开放11119移除补丁Rosetta运行时的重复SDL类。DriftCheck测实体USB Xbox，Syobon用脚本输入。97通过／25跳过及创建设备的VideoOut用例跳过，不等于完整GPU验证。main仍不能单独构建Mac库，无Mac正式版。",
   "ar": "11119 مفتوح يزيل SDL المكرر في Rosetta معدل. DriftCheck بـ XboxUSB فعلي، Syobon بإدخال مكتوب.97 نجاح/25 تخطي واختبارات VideoOut للجهاز متخطاة، ليس GPU كاملاً. main لا يبني Mac وحده، لا إصدار Mac.",
   "pt": "11119aberto removeSDLduplicado emRosettamodificado. DriftCheckXboxUSB real, Syobonguiado.97passam/25saltam e testesVideoOutcom dispositivo saltam, nãoGPUcompleto. Mainnão compila libsMac só; semreleaseMac.",
   "de": "Offenes11119entfernt doppelteSDL inRosetta-Patchbaum. DriftCheckechterXboxUSB, SyobonSkript.97bestanden/25übersprungen, geräteerzeugendeVideoOut-Tests übersprungen, keine volleGPU-Validation. MainbautMacnicht allein, keinMac-Release.",
   "fr": "11119ouvert retireSDLdupliqué dansRosettamodifié. DriftCheckXboxUSB réel, Syobonscripté.97passent/25sautent et testsVideoOutà appareil sautent, pasGPUcomplet. Mainne construit pasMacseul, pasreleaseMac.",
   "es": "11119abierto eliminaSDLduplicado enRosettamodificado. DriftCheckXboxUSB real, Syobonpor guion.97pasan/25saltan y testsVideoOutcon dispositivo saltan, noGPUcompleto. Mainno construyeMacsolo, sinreleaseMac."
  }
 },
 {
  "number": 10021,
  "games": [],
  "title": {
   "en": "Font direction is decided when a string is created",
   "zh": "字体方向在创建字符串时决定",
   "ar": "اتجاه الخط عند إنشاء النص",
   "pt": "Direção na criação da cadeia",
   "de": "Schriftrichtung bei Stringerstellung",
   "fr": "Sens lors de création de chaîne",
   "es": "Dirección al crear cadena"
  },
  "summary": {
   "en": "Merged implementation uses the first strong character for default direction, including LRM/RLM and isolate limits; explicit forms remain.13.42 nonempty measurements stop later at glyph creation, only empty completes. Range-based classification remains debt, not full native RTL rendering.",
   "zh": "已合实现按首个强方向字符决定默认方向，涵盖LRM／RLM和isolate边界，保留显式方向。13.42非空测量后来在字形创建失败，仅空串完整返回；范围分类仍有技术债，不是原生RTL完整渲染验证。",
   "ar": "التنفيذ المدمج يختار أول حرف قوي، مع LRM/RLM وعزل، ويحفظ الصريح. قياسات 13.42 غير الفارغة تفشل لاحقاً بال glyph، الفارغة فقط تكمل. تصنيف النطاق دين، لا RTL أصلي كامل.",
   "pt": "Implementação integrada usa primeiro forte, LRM/RLM/isolates, formas explícitas mantidas.13.42não vazio falha depois no glyph, só vazio completa. Classificação por faixas é dívida, nãoRTLtotal.",
   "de": "Gemergte Implementierung nimmt erstes starkes Zeichen, LRM/RLM/Isolates, explizite Formen bleiben.13.42nichtleer scheitert später an Glyphen, nur leer beendet. Bereichsklassifikation Schuld, kein vollständiges nativesRTL.",
   "fr": "Implémentation fusionnée prend premier fort, LRM/RLM/isolats, formes explicites gardées.13.42non vide échoue ensuite au glyph, seul vide termine. Classification par plages reste dette, pasRTLnatif complet.",
   "es": "Implementación fusionada usa primer fuerte, LRM/RLM/aislados, formas explícitas mantenidas.13.42no vacío falla después en glyph, sólo vacío completa. Clasificación por rangos es deuda, noRTLnativo completo."
  }
 },
 {
  "number": 9170,
  "games": [
   "silt"
  ],
  "title": {
   "en": "Thread identity follows measured console behavior",
   "zh": "线程身份遵循主机测量",
   "ar": "هوية الخيط توافق قياس الجهاز",
   "pt": "Identidade de thread medida",
   "de": "Threadidentität folgt Messung",
   "fr": "Identité du thread mesurée",
   "es": "Identidad de hilo medida"
  },
  "summary": {
   "en": "Merged _Thrd_id returns the64-bit scePthreadSelf pointer. Console main/worker measurements and Cyberpunk/Pragmata forwarding support that scope. Silt’s earlier local equivalent was not imported by that title, so merge is not a newly reproduced Silt fix or a commercial-game compatibility result.",
   "zh": "已合_Thrd_id返回64位scePthreadSelf指针，主机主／子线程测量及Cyberpunk／Pragmata转发支持此范围。Silt早期本地等价实现并未被该标题导入，合并不等于新复现的Silt修复或商业兼容结果。",
   "ar": "_Thrd_id المدمج يرجع مؤشر scePthreadSelf64 بت، بقياس خيطين وتحويل Cyberpunk/Pragmata. Silt لم يستورد مكافئه المحلي، فالدمج ليس إصلاح Silt معاداً أو توافق لعبة.",
   "pt": "_Thrd_idintegrado devolve ponteiro64bitsscePthreadSelf, com medição/forwardingCyberpunk/Pragmata. Siltnão importava equivalente local; merge não é fixSiltretetado/compatibilidade comercial.",
   "de": "Gemergtes_Thrd_idliefert64-bit-scePthreadSelf, belegt durch Threads/WeiterleitungenCyberpunk/Pragmata. Siltnutzte lokale Entsprechung nicht; Mergekein neuerSilt-Fix/Kompatibilitätsnachweis.",
   "fr": "_Thrd_idfusionné retourne pointeur64bitsscePthreadSelf, mesures/renvoisCyberpunk/Pragmata. Siltn’importait pas équivalent local; fusion pas nouveaufixSiltreproduit/compatibilité commerciale.",
   "es": "_Thrd_idfusionado devuelve puntero64bitsscePthreadSelf, mediciones/reenvíosCyberpunk/Pragmata. Siltno importaba equivalente local; fusión no es arregloSiltretestado/compatibilidad comercial."
  }
 }
]);

Object.assign(developmentNotes.find(note=>note.number===10547)!,{summary:{
 "en": "Native seam reports remain at their tested heads. A source-only review finds hostInterpolationFirst missing from request serialization at3609b981, so replay may differ; no fresh native failure reproduced. Versioned round-trip/cache tests remain requested, not a game regression proved by a green direct-Recompile test.",
 "zh": "原生接缝报告保留原头；源码审查发现3609b981请求序列化缺hostInterpolationFirst，重放可能不同，未复现新的原生故障。仍要求版本化往返／缓存测试，直接Recompile绿灯不验证此路径。",
 "ar": "تقارير أصلية تبقى بأرؤسها؛ 3609b981 يفقد hostInterpolationFirst بالتسلسل، replay قد يختلف، لا عطل أصلي معاد. اختبارات roundtrip/cache مطلوبة؛ Recompile المباشر ليس تحققها.",
 "pt": "Relatos mantêm heads;3609b981omitehostInterpolationFirstna serialização, replaydifere potencialmente, sem falha nativa nova. Testesroundtrip/cachepedidos; Recompiledireto não basta.",
 "de": "Native Berichte behalten Heads;3609b981serialisiert Flag nicht, Replay kann abweichen, kein neuer nativer Fehler. Roundtrip/Cachetests gefordert, direktesRecompilegenügt nicht.",
 "fr": "Rapports gardent heads;3609b981omet flag en sérialisation, replaypeut différer, sans défaut natif nouveau. Testsroundtrip/cache demandés, Recompiledirect insuffisant.",
 "es": "Informes conservan heads;3609b981omite flag en serialización, replaypuede variar, sin fallo nativo nuevo. Testsroundtrip/caché solicitados, Recompiledirecto insuficiente."
}});

Object.assign(developmentNotes.find(note=>note.number===7294)!,{summary:{
 "en": "Latest799671df6d integration reaches tutorial NOW LOADING, then natural abort576.373s at3036 after device/fence failures;1891aa7d instead stops285.208s on unreadable write. Neither reaches gameplay. Historical32rings keep their original fork; component passes and zeroVUIDs do not erase other warnings or prove a current-main fix.",
 "zh": "最新799671df6d到教程NOW LOADING后576.373秒在设备／fence异常后因3036自然终止；1891aa7d则285.208秒遇不可读写入。均无游玩，历史32枚戒指保留原分支；组件通过、零VUID不抹去其他警告或证明main已修复。",
 "ar": "799671df6d يبلغ NOW LOADING ثم 576.373 ثتوقف 3036 بعد device/fences؛ 1891aa7d285.208 ثكتابة غير مقروءة. لا لعب؛ 32 حلقة قديمة بفرعها، اختبارات/0VUID لا تمحو التحذيرات أو تثبت main.",
 "pt": "799671df6dchegaNOW LOADING, aborta576,373s3036apósdevice/fences;1891aa7d285,208s escrita ilegível. Sem jogo;32anéis no fork antigo; testes/0VUIDnão anulam avisos/provammain.",
 "de": "799671df6dNOW LOADING, dann576,373s3036nachDevice/Fences;1891aa7d285,208sunlesbarer Write. Kein Spiel;32Ringe auf altem Fork, Tests/0VUIDlöschen Warnungen nicht/beweisenmainnicht.",
 "fr": "799671df6dNOW LOADING, puis576,373s3036aprèsdevice/fences;1891aa7d285,208sécriture illisible. Pas jeu;32anneaux ancien fork, tests/0VUIDn’effacent avertissements/ne prouventmain.",
 "es": "799671df6dNOW LOADING, luego576,373s3036trasdevice/fences;1891aa7d285,208sescritura ilegible. Sin juego;32anillos fork antiguo, tests/0VUIDno borran avisos/pruebanmain."
}});

developmentNotes.unshift(...[
 {
  "number": 11120,
  "games": [
   "ghost-of-yotei"
  ],
  "title": {
   "en": "Slice-zero storage support merged with measured limits",
   "zh": "零切片存储支持已合入，测量范围有限",
   "ar": "دمج تخزين الشريحة صفر بحدود مقاسة",
   "pt": "Armazenamento da fatia zero integrado",
   "de": "Slice-null-Speicherung mit Messgrenzen integriert",
   "fr": "Stockage tranche zéro intégré avec limites",
   "es": "Almacenamiento de capa cero integrado"
  },
  "summary": {
   "en": "Merged d9f5bf4d91 adds write-only 2D-array stores through 1D descriptors, dropping nonzero slices. The rule was measured on RDNA2 gfx1036, not PS5 gfx1013. Tested b9d00c5d80 includes validation-layer tests; separate two-GPU Windows checks had no layer installed. Yōtei’s earlier local version omitted the slice check, and the title was not rerun on this head. API passes and merge do not establish a new game result or release inclusion.",
   "zh": "合入 d9f5bf4d91 后支持经 1D 描述符进行只写 2D-array 存储，丢弃非零切片。规则测于 RDNA2 gfx1036，不是 PS5 gfx1013。b9d00c5d80 有加载验证层的测试，另一次 Windows 双 GPU 测试未装层。Yōtei 早期本地版没有切片检查，该 head 未复跑游戏；API 通过和合并不等于新游戏结果或发行版包含。",
   "ar": "دمج d9f5bf4d91 يدعم كتابة 2D-array عبر وصف 1D مع إسقاط الشرائح غير الصفرية. القياس gfx1036 لا PS5 gfx1013. اختبارات b9d00c5d80 حملت طبقة تحقق، وفحص Windows منفصل بلا طبقة. نسخة Yōtei القديمة بلا فحص الشريحة ولم تُعد اللعبة بهذا الرأس؛ نجاح API والدمج ليس نتيجة لعبة أو إصدار.",
   "pt": "O merge d9f5bf4d91 suporta escrita 2D-array por descritores 1D, descartando fatias não zero. Medido em gfx1036, não PS5 gfx1013. b9d00c5d80 tem testes com validação; ensaio Windows de duas GPU sem layer. A versão local antiga de Yōtei não verificava a fatia e o jogo não foi repetido neste head. API e merge não provam novo resultado nem inclusão numa versão.",
   "de": "Merge d9f5bf4d91 ergänzt schreibende 2D-Array-Zugriffe über 1D-Deskriptoren, andere Slices werden verworfen. Gemessen auf gfx1036, nicht PS5 gfx1013. b9d00c5d80 mit Validierung, separater Windows-Zwei-GPU-Test ohne Layer. Alte lokale Yōtei-Version ohne Sliceprüfung, kein neuer Titellauf auf diesem Head. API-Erfolg und Merge belegen kein Spielresultat oder Release.",
   "fr": "Le merge d9f5bf4d91 ajoute les écritures 2D-array via des descripteurs 1D et ignore les autres tranches. Mesure gfx1036, pas PS5 gfx1013. b9d00c5d80 testé avec validation; essai Windows séparé sur deux GPU sans couche. Ancienne version Yōtei sans contrôle de tranche, jeu non retesté sur ce head. API et fusion ne prouvent ni nouveau jeu ni inclusion publiée.",
   "es": "El merge d9f5bf4d91 admite escritura 2D-array por descriptores 1D y descarta capas no cero. Medido en gfx1036, no PS5 gfx1013. b9d00c5d80 probado con validación; ensayo Windows aparte con dos GPU sin capa. Versión local antigua de Yōtei sin control de capa, juego no repetido en este head. API y merge no prueban resultado de juego ni inclusión publicada."
  }
 },
 {
  "number": 11126,
  "games": [],
  "title": {
   "en": "Mirror sampling tests do not identify an unblocked title",
   "zh": "镜像采样测试未证明某款游戏解锁",
   "ar": "اختبارات الانعكاس لا تثبت تشغيل عنوان",
   "pt": "Testes de espelho sem jogo desbloqueado",
   "de": "Spiegel-Sampling ohne belegten Titelfortschritt",
   "fr": "Tests miroir sans jeu débloqué prouvé",
   "es": "Pruebas espejo sin juego desbloqueado"
  },
  "summary": {
   "en": "Open #11126 mirrors negative unnormalized taps once, then clamps, following gfx1036 measurements; gfx1013 remains unmeasured. The f636ecd34 rerun reports 72/72 with a loaded validation layer and no VUID errors; current 098fc2772 only shortens documentation. An approval or skipped product CI is not independent hardware validation. No known title uses these new modes; Yōtei uses mode 0 already accepted on main.",
   "zh": "开放 #11126 按 gfx1036 测量把非归一化负采样点镜像一次再钳制，gfx1013 未测。f636ecd34 复跑 72／72，确认加载验证层且无 VUID；当前 098fc2772 仅缩短文档。批准或跳过的产品 CI 不算独立硬件验证；尚无已知标题使用新模式，Yōtei 的 mode 0 原已支持。",
   "ar": "طلب #11126 المفتوح يعكس النقرات السالبة مرة ثم يقيدها وفق gfx1036؛ gfx1013 غير مقاس. إعادة f636ecd34 تبلغ 72/72 بطبقة تحقق محملة وبلا VUID؛ 098fc2772 يقصر الوثيقة فقط. الموافقة وCI المتخطى ليسا تحقق عتاد مستقل. لا عنوان معروف يستخدم الأوضاع الجديدة؛ Yōtei يستعمل mode 0 المدعوم أصلاً.",
   "pt": "A #11126 aberta espelha amostras negativas uma vez e limita-as, segundo gfx1036; gfx1013 não medido. f636ecd34 regista 72/72 com layer carregada e sem VUID; 098fc2772 só encurta documentação. Aprovação ou CI ignorado não são validação independente. Nenhum título conhecido usa os modos novos; Yōtei usa mode 0 já aceite.",
   "de": "Offene #11126 spiegelt negative unnormalisierte Abtastungen einmal und begrenzt sie gemäß gfx1036; gfx1013 ungeprüft. f636ecd34 meldet 72/72 mit geladenem Layer ohne VUID, 098fc2772 kürzt nur Dokumentation. Freigabe oder übersprungene Produkt-CI keine unabhängige Hardwareprüfung. Kein bekannter Titel nutzt neue Modi; Yōtei nutzt bereits unterstützten Modus 0.",
   "fr": "La #11126 ouverte reflète les échantillons négatifs une fois puis les borne selon gfx1036; gfx1013 non mesuré. f636ecd34 annonce 72/72 avec couche chargée sans VUID; 098fc2772 raccourcit seulement la documentation. Approbation et CI ignorée ne valident pas indépendamment le matériel. Aucun titre connu n’utilise les nouveaux modes; Yōtei utilise déjà le mode 0.",
   "es": "La #11126 abierta refleja muestras negativas una vez y las limita según gfx1036; gfx1013 no medido. f636ecd34 informa 72/72 con capa cargada sin VUID; 098fc2772 solo acorta documentación. Aprobación o CI omitida no validan hardware independientemente. Ningún título conocido usa modos nuevos; Yōtei usa mode 0 ya admitido."
  }
 },
 {
  "number": 11482,
  "games": [
   "mewgenics"
  ],
  "title": {
   "en": "Mouse exports resolve but still throw",
   "zh": "鼠标导出可解析，但调用仍抛错",
   "ar": "واردات الفأرة تُحل لكنها ترمي خطأ",
   "pt": "Exports do rato resolvidos mas não implementados",
   "de": "Maus-Exports auflösbar, Aufrufe werfen weiter",
   "fr": "Exports souris résolus mais appels en échec",
   "es": "Exports de ratón resueltos, llamadas fallan"
  },
  "summary": {
   "en": "Open 0c96c6a000 adds three absolute-position mouse exports as throwing stubs, with signatures and behavior still unknown. Linux compile/symbol/harness checks pass; mouse_input was not run because SDL2 headers were absent. Windows main 48c160c58 plus the PR resolves Mewgenics PPSA37318 imports, then aborts at virtual-screen-size initialization. A separate local implementation reaching battle is a different stack, not this PR’s result.",
   "zh": "开放 0c96c6a000 加入三个绝对位置鼠标导出，均为抛错 stub，签名和行为仍未知。Linux 编译／符号／隔离 harness 通过，缺 SDL2 头文件，未跑 mouse_input。Windows main 48c160c58 加该 PR 能解析 Mewgenics PPSA37318 导入，随后虚拟屏幕尺寸初始化终止。另一个本地实现到战斗属于不同堆栈，不能归给此 PR。",
   "ar": "يضيف 0c96c6a000 المفتوح ثلاثة exports لمواضع الفأرة ترمي خطأ، والتواقيع والسلوك مجهولان. فحص Linux للترجمة والرموز والحاضنة ينجح؛ mouse_input لم يعمل لغياب SDL2. Windows main 48c160c58 مع الطلب يحل واردات Mewgenics PPSA37318 ثم يجهض عند حجم الشاشة الافتراضية. تنفيذ محلي آخر يصل القتال بتركيب مختلف.",
   "pt": "O 0c96c6a000 aberto acrescenta três exports de posição absoluta que lançam erro; assinaturas e comportamento desconhecidos. Compilação, símbolos e harness Linux passam; mouse_input não executado por falta de SDL2. Windows main 48c160c58 com a PR resolve imports Mewgenics PPSA37318, mas aborta na dimensão virtual. Implementação local que chega ao combate é outra pilha.",
   "de": "Offenes 0c96c6a000 ergänzt drei absolute Maus-Exports als werfende Stubs, Signaturen und Verhalten unbekannt. Linux-Kompilierung, Symbole und Harness erfolgreich; mouse_input ohne SDL2-Header ungeprüft. Windows main 48c160c58 plus PR löst Mewgenics-PPSA37318-Imports, bricht bei virtueller Bildschirmgröße ab. Lokale Implementierung mit Kampffortschritt ist ein anderer Stack.",
   "fr": "Le 0c96c6a000 ouvert ajoute trois exports absolus de souris levant une erreur, signatures et comportement inconnus. Compilation, symboles et harnais Linux passent; mouse_input non exécuté sans SDL2. Windows main 48c160c58 plus PR résout les imports Mewgenics PPSA37318 puis échoue à la taille virtuelle. L’implémentation locale atteignant le combat est une autre pile.",
   "es": "El 0c96c6a000 abierto añade tres exports absolutos de ratón que lanzan errores, con firmas y comportamiento desconocidos. Compilación, símbolos y harness Linux pasan; mouse_input no ejecutado sin SDL2. Windows main 48c160c58 más PR resuelve imports de Mewgenics PPSA37318 y aborta en tamaño virtual. La implementación local que llega al combate es otra pila."
  }
 }
]);

Object.assign(developmentNotes.find(note=>note.number===10547)!,{summary:{
 "en": "Earlier native seam observations keep their pins. The author now reports serializer correction c75821d217 for hostInterpolationFirst, but that is a later branch change, not a retest of3609b981 or a new native Silksong result. Verify round-trip/cache behavior on the exact corrected head before closing the replay gap.",
 "zh": "早期原生接缝观察保留原pin。作者新报c75821d217修正hostInterpolationFirst序列化，属于较后分支变更，不冒充3609b981复测或新丝之歌原生结果；仍需在该准确head验证往返／缓存再关闭缺口。",
 "ar": "أدلة الوصلة القديمة تحتفظ برؤوسها. الكاتب يبلغ إصلاح serializer في c75821d217 لـhostInterpolationFirst، تغيير لاحق لا إعادة3609b981 أو Silksong أصلي جديد. تحقق round-trip/cache على الرأس المصحح.",
 "pt": "Relatos antigos mantêm pins. Autor informa serializer c75821d217 para hostInterpolationFirst, mudança posterior, não reteste3609b981/jogo novo. Verifique round-trip/cache nesse head.",
 "de": "Alte Nahtbelege behalten Pins. Autor meldet Serializerkorrektur c75821d217 für hostInterpolationFirst, späterer Zweig, kein3609b981-/neuer Spieltest. Roundtrip/Cache exakt dort prüfen.",
 "fr": "Anciens essais gardent pins. Auteur annonce serializer c75821d217 pour hostInterpolationFirst, changement ultérieur, pas retest3609b981/jeu neuf. Vérifier round-trip/cache au head exact.",
 "es": "Informes antiguos conservan pins. Autor informa serializer c75821d217 para hostInterpolationFirst, cambio posterior, no retest3609b981/juego nuevo. Verifica round-trip/caché exactos."
}});

developmentNotes.unshift(...[
 {
  "number": 11580,
  "games": [
   "resident-evil-requiem",
   "gta-v",
   "gta-v-ppsa04263",
   "lego-horizon-adventures",
   "silent-hill-townfall"
  ],
  "title": {
   "en": "Converted D16 progress is title- and build-specific",
   "zh": "转换D16进展须按游戏与构建区分",
   "ar": "تقدم D16 خاص بالعنوان والبناء",
   "pt": "D16 por título e build",
   "de": "D16-Fortschritt je Titel und Build",
   "fr": "D16 selon titre et build",
   "es": "D16 según título y build"
  },
  "summary": {
   "en": "The open fix has independent Windows AMD/NVIDIA and Linux reports passing the former D16 stop; dbf2107ba6 validation and negative controls are bounded API evidence. Exact PS5 rounding is not claimed. GTA can still hang, LEGO can lose the device, and Townfall needs another local PR. Later fedf3e91a7 changes and main implementation are not silently assigned to earlier tests or v0.1.3.",
   "zh": "开放修复有Windows AMD／NVIDIA及Linux独立越过旧D16拒绝报告；dbf2107ba6验证及负对照仅属有范围API证据，不宣称准确PS5舍入。GTA仍挂起、LEGO仍设备丢失，Townfall需另项本地PR；不把后续fedf3e91a7或main实现替进旧测试或v0.1.3。",
   "ar": "الإصلاح المفتوح يتجاوز D16 بتقارير Windows AMD/NVIDIA وLinux؛ تحقق dbf2107ba6 وضوابطه دليل API محدود، لا تقريب PS5 دقيق. GTA قد يتجمد وLEGO يفقد الجهاز وTownfall يحتاج PR آخر. لا ننسب fedf3e91a7 أو main اللاحق لاختبار قديم أوv0.1.3.",
   "pt": "Fix aberto passa D16 em Windows AMD/NVIDIA/Linux; validação/controlos dbf2107ba6 são API limitada, sem arredondamento PS5 exato. GTA pode bloquear, LEGO perder dispositivo, Townfall precisa outro PR. fedf3e91a7/main posteriores não substituem testes antigos ouv0.1.3.",
   "de": "Offener Fix passiert D16 auf Windows AMD/NVIDIA/Linux; dbf2107ba6-Validierung/Negativkontrollen begrenzte API-Belege ohne exakte PS5-Rundung. GTA hängt, LEGO verliert Gerät, Townfall braucht weiteren PR. Späteres fedf3e91a7/Main nicht alten Tests/v0.1.3 zuordnen.",
   "fr": "Fix ouvert passe D16 Windows AMD/NVIDIA/Linux; validation/contrôles dbf2107ba6 limités aux API, sans arrondi PS5 exact. GTA peut geler, LEGO perdre appareil, Townfall nécessite autre PR. fedf3e91a7/main ultérieurs non attribués aux anciens tests/v0.1.3.",
   "es": "Fix abierto supera D16 Windows AMD/NVIDIA/Linux; validación/controles dbf2107ba6 son API limitada, sin redondeo PS5 exacto. GTA puede colgar, LEGO perder dispositivo, Townfall requiere otro PR. fedf3e91a7/main posteriores no sustituyen tests antiguos/v0.1.3."
  }
 },
 {
  "number": 11620,
  "games": [
   "call-of-duty-modern-warfare-iii"
  ],
  "title": {
   "en": "Loading progress does not establish download semantics",
   "zh": "加载推进不证明下载接口语义",
   "ar": "تقدم التحميل لا يثبت سلوك التنزيل",
   "pt": "Progresso de carga não prova semântica de download",
   "de": "Ladefortschritt belegt keine Downloadsemantik",
   "fr": "Progression du chargement sans sémantique prouvée",
   "es": "Progreso de carga sin semántica demostrada"
  },
  "summary": {
   "en": "The review rejects unmeasured Download0/1 and expansion success behavior. The later2e3004955 head restores throwing stubs and limits the change to download0–2 partition/path validation. MW3’s earlier local fastfile progress is a different tested stack, not proof those exports are implemented or the current head reaches gameplay.",
   "zh": "评审否定未测Download0／1及扩容直接成功语义；后续2e3004955恢复抛错桩，只限定download0–2分区／路径校验。MW3旧本地fastfile进度属于另一测试组合，不证明这些导出已实现或当前head可进游戏。",
   "ar": "المراجعة ترفض نجاح تنزيل/توسعة غير مقاس؛2e3004955 يعيد stubs الرامية ويقتصر على مسارات download0–2. تقدم MW3 المحلي القديم تركيب مختلف، لا تنفيذ exports أو لعب بالرأس الحالي.",
   "pt": "Revisão rejeita sucesso Download/Expand não medido;2e3004955 repõe stubs e limita caminhos download0–2. Fastfile MW3 antigo é outro stack, sem provar exports implementados ou jogo atual.",
   "de": "Review verwirft ungemessenen Download-/Expand-Erfolg;2e3004955 stellt werfende Stubs wieder her, begrenzt auf download0–2-Pfade. Alter MW3-Fastfilefortschritt anderer Stack, kein Export-/Spielnachweis dieses Heads.",
   "fr": "Review rejette succès Download/Expand non mesuré;2e3004955 rétablit stubs et limite chemins download0–2. Ancien fastfile MW3 autre stack, sans exports implémentés ni jeu actuel prouvés.",
   "es": "Review rechaza éxito Download/Expand no medido;2e3004955 restaura stubs y limita rutas download0–2. Fastfile MW3 antiguo es otro stack, sin probar exports implementados ni juego actual."
  }
 },
 {
  "number": 11952,
  "games": [
   "god-of-war-sons-of-sparta"
  ],
  "title": {
   "en": "A measured Cyclops gain has a precise local boundary",
   "zh": "独眼巨人实测增益有明确本地边界",
   "ar": "مكسب Cyclops بحد محلي محدد",
   "pt": "Ganho Cyclops com âmbito local exato",
   "de": "Cyclops-Gewinn mit genauer lokaler Grenze",
   "fr": "Gain Cyclops dans un cadre local précis",
   "es": "Ganancia Cyclops con límite local exacto"
  },
  "summary": {
   "en": "The6edeae61a331 head has three prospective warm12s Radeon760M pairs,12.54→18.84 FPS, with identical dirty observation hooks and no dropped events. Additional #10547 is measured on an already #11952-patched base,18.854→20.040. Earlier instruction counts alone did not satisfy game-performance evidence; these later runs do not change earlier heads or prove a release. A failing descriptor-set fixture is not counted as passing validation.",
   "zh": "6edeae61a331在760M有三组预定热缓存12秒12.54→18.84 FPS，两组相同dirty观测hooks且无丢失事件；#10547额外18.854→20.040基于已加#11952的构建。早先仅指令计数不满足游戏性能证据；后续运行不改写旧head，也不证明发行。失败的descriptor-set测试不计作验证通过。",
   "ar": "6edeae61a331 له ثلاثة أزواج760M دافئة12ث12.54→18.84 FPS، hooks dirty متطابقة وبلا أحداث مفقودة. #10547 الإضافي18.854→20.040 فوق11952. عد التعليمات القديم ليس قياس لعبة؛ الجديد لا يبدل الرؤوس أو يثبت الإصدار. fixture فاشل لا يُحسب نجاحاً.",
   "pt": "6edeae61a331 tem três pares760M quentes12s12,54→18,84 FPS, hooks dirty iguais sem eventos perdidos. #10547 adicional18,854→20,040 sobre11952. Instruções antigas não eram benchmark; novos ensaios não mudam heads/releases. Fixture falhado não conta como validação passada.",
   "de": "6edeae61a331 hat drei geplante warme760M-Paare12s12,54→18,84 FPS, gleiche Dirty-Hooks ohne Ereignisverlust. #10547 zusätzlich18,854→20,040 auf11952-Basis. Alte Instruktionszahlen kein Spielbeleg; spätere Tests ändern keine Heads/Releases. Fehlfixture nicht als bestanden zählen.",
   "fr": "6edeae61a331 possède trois paires760M chaudes12s12,54→18,84 FPS, hooks dirty identiques sans perte. #10547 additionnel18,854→20,040 sur11952. Anciens comptes instructions sans benchmark; nouveaux essais sans réécrire heads/releases. Fixture échoué non compté réussi.",
   "es": "6edeae61a331 tiene tres parejas760M calientes12s12,54→18,84 FPS, hooks dirty iguales sin pérdida. #10547 adicional18,854→20,040 sobre11952. Instrucciones antiguas sin benchmark; pruebas nuevas no cambian heads/releases. Fixture fallido no contado como validación pasada."
  }
 },
 {
  "number": 11587,
  "games": [
   "god-of-war-sons-of-sparta"
  ],
  "title": {
   "en": "Experimental Mac runs remain a separate platform",
   "zh": "实验Mac运行仍须独立记录",
   "ar": "تشغيل Mac التجريبي منفصل",
   "pt": "Ensaios Mac experimentais separados",
   "de": "Experimentelle Mac-Läufe getrennt halten",
   "fr": "Essais Mac expérimentaux distincts",
   "es": "Pruebas Mac experimentales separadas"
  },
  "summary": {
   "en": "M4 Pro/macOS27.0.1/Rosetta/MoltenVK1.4.2 with main3fea2a937b plus eight open boot PRs reports Lana28.9 FPS over70s and a cold Cyclops120s run40.6 FPS. This is neither native ARM nor an official runtime release. A later Lana paired patch test is neutral after main’s buffer change; #8887’s private-stack Sparta pair is also near noise. No Windows/Linux report or new Lana entry is inferred.",
   "zh": "M4 Pro／macOS27.0.1／Rosetta／MoltenVK1.4.2在main3fea2a937b加8项开放启动PR，报告Lana70秒28.9 FPS、冷缓存独眼巨人120秒40.6 FPS；不是原生ARM或官方运行发行。后续Lana配对在main缓冲修改后无增益，#8887私有Sparta配对也近噪声。不据此生成Windows／Linux报告或新Lana条目。",
   "ar": "M4 Pro/macOS27.0.1/Rosetta/MoltenVK1.4.2 معmain3fea2a937b وثمانية PR يبلغ Lana28.9 FPS/70ث وCyclops40.6/120ث بارد؛ لا ARM أصلي أو إصدار رسمي. زوج Lana اللاحق محايد و#8887 Sparta ضمن الضجيج. لا استنتاج Windows/Linux أو عنوان Lana جديد.",
   "pt": "M4 Pro/macOS27.0.1/Rosetta/MoltenVK1.4.2 commain3fea2a937b+oito PRs relata Lana28,9 FPS/70s e Cyclops40,6/120s frio; não ARM nativo/release oficial. Par Lana posterior neutro, #8887 Sparta perto do ruído. Sem inferir Windows/Linux ou entrada Lana.",
   "de": "M4 Pro/macOS27.0.1/Rosetta/MoltenVK1.4.2 mitmain3fea2a937b+acht PRs meldet Lana28,9 FPS/70s und kalten Cyclops40,6/120s; kein natives ARM/offizieller Release. Spätere Lana-Paare neutral, #8887-Sparta nahe Rauschen. Kein Windows/Linux- oder neuer Lana-Eintrag abgeleitet.",
   "fr": "M4 Pro/macOS27.0.1/Rosetta/MoltenVK1.4.2 avecmain3fea2a937b+huit PR annonce Lana28,9 FPS/70s et Cyclops40,6/120s froid; ni ARM natif ni release officiel. Paires Lana ultérieures neutres, #8887 Sparta proche bruit. Aucun rapport Windows/Linux ou entrée Lana inféré.",
   "es": "M4 Pro/macOS27.0.1/Rosetta/MoltenVK1.4.2 conmain3fea2a937b+ocho PR informa Lana28,9 FPS/70s y Cyclops40,6/120s frío; no ARM nativo/release oficial. Parejas Lana posteriores neutras, #8887 Sparta cerca del ruido. Sin inferir Windows/Linux ni entrada Lana."
  }
 }
]);
