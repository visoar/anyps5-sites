import {L,type Text} from './model';
import media from './game-media.json';
import metadata from './github-source-status.json';
import discussionMetadata from './source-metadata.json';

export interface GameResearch {checked:string;edition:Text;finding:Text;nextTest:Text;sources:{label:string;url:string}[]}
const research=(slug:keyof typeof media,edition:Text,finding:Text,nextTest:Text,numbers:number[]=[],discussions:number[]=[]):GameResearch=>({checked:'2026-10-13',edition,finding,nextTest,sources:[{label:'PlayStation',url:media[slug].source},...numbers.map(number=>{const source=metadata[String(number) as keyof typeof metadata];if(!source)throw Error('Missing research source '+number);return {label:(source.kind==='pr'?'PR':'Issue')+' #'+number,url:source.url}}),...discussions.map(number=>({label:'Discussion #'+number,url:discussionMetadata[String(number) as keyof typeof discussionMetadata].url}))]});

export const researchCopy={
 title:L('Edition and evidence review','版本与证据核对','مراجعة الإصدار والأدلة','Edição e evidência','Ausgabe und Belegprüfung','Édition et vérification des sources','Edición y revisión de evidencias'),
 scope:L('This review covers the upstream documentation, public issues, pull requests and discussions, alongside publisher information. It is a source review, not a game test by this site. A missing report does not establish incompatibility.','本次核对上游文档、公开 issue、PR、讨论及发行商资料，属于来源整理，本站未进行游戏实测。未找到报告不代表游戏无法运行。','تشمل المراجعة وثائق المشروع والمشكلات وطلبات التعديل والنقاشات العامة ومعلومات الناشر. إنها مراجعة مصادر وليست اختباراً أجراه الموقع. غياب التقرير لا يثبت عدم التوافق.','Esta revisão abrange documentação, issues, PR e discussões públicas do projeto, além das informações do editor. É uma revisão de fontes, não um teste do jogo por este site. A falta de um relatório não prova incompatibilidade.','Diese Prüfung umfasst Upstream-Dokumentation, öffentliche Issues, PRs und Diskussionen sowie Angaben des Herausgebers. Sie ist eine Quellenprüfung, kein Spieltest dieser Website. Ein fehlender Bericht belegt keine Inkompatibilität.','Cette vérification porte sur la documentation, les issues, PR et discussions publiques du projet, ainsi que les informations de l’éditeur. Ce site n’a pas testé le jeu. L’absence de rapport ne prouve pas une incompatibilité.','Esta revisión cubre documentación, issues, PR y debates públicos del proyecto, junto con información del editor. Es una revisión de fuentes, no una prueba realizada por este sitio. La ausencia de informes no demuestra incompatibilidad.'),
 edition:L('Which edition does this cover?','先核对哪个版本？','ما الإصدار المقصود؟','Que edição está em causa?','Welche Ausgabe ist gemeint?','Quelle édition est concernée ?','¿Qué edición se está revisando?'),
 finding:L('What the sources establish','来源能确认什么','ما الذي تثبته المصادر؟','O que as fontes demonstram','Was die Quellen belegen','Ce que les sources permettent de confirmer','Qué demuestran las fuentes'),
 nextTest:L('What a new test needs to establish','新测试还需验证什么','ما الذي يحتاج اختباراً جديداً؟','O que um novo teste deve verificar','Was ein neuer Test prüfen muss','Ce qu’un nouvel essai doit vérifier','Qué debe verificar una nueva prueba'),
 checked:L('Sources checked','来源核对','مراجعة المصادر','Fontes verificadas','Quellen geprüft','Sources vérifiées','Fuentes revisadas'),
};

export const gameResearch:Record<string,GameResearch>={
 'marvels-spider-man-2':{
 "checked": "2026-10-24",
 "edition": {
  "en": "PPSA03016 01.004.003 is now identified by a Linux launch report. The separate PPSA08338 Windows reports use a different regional package/version.",
  "zh": "现有Linux启动报告明确PPSA03016 01.004.003；另有Windows PPSA08338属于不同地区包／版本。",
  "ar": "تقرير Linux يحددPPSA03016/01.004.003؛ Windows PPSA08338 حزمة/نسخة إقليمية أخرى.",
  "pt": "Relatório Linux identificaPPSA03016/01.004.003; Windows PPSA08338 é outro pacote/versão.",
  "de": "Linuxbericht identifiziertPPSA03016/01.004.003; Windows PPSA08338 andere Region/Version.",
  "fr": "Rapport Linux identifiePPSA03016/01.004.003 ; Windows PPSA08338 autre région/version.",
  "es": "Reporte Linux identificaPPSA03016/01.004.003; Windows PPSA08338 otra región/versión."
 },
 "finding": {
  "en": "Insomniac logo then black until sampler descriptor refusal133s on the composed old base. Several chained pointer-table fixes clear earlier stops; no menu/gameplay. Current main since#9137 instead stops earlier on registry parameters208/210, exact later pin unknown.",
  "zh": "旧基组合栈过Insomniac标志后黑屏，133秒sampler descriptor拒绝；多层指针表修复仅清除前序停止，无菜单／游玩。#9137后的main反而更早停于registry参数208／210，后次pin未知。",
  "ar": "شعار Insomniac ثم سواد/رفض sampler133ث على قاعدة قديمة مركبة؛ لا قائمة/لعب. main بعد#9137 يتوقف أبكر على208/210، pin اللاحق مجهول.",
  "pt": "Logo Insomniac e preto/recusa sampler133s em base antiga composta; sem menu/jogo. Main após#9137 para antes em208/210, pin posterior desconhecido.",
  "de": "Insomniac-Logo dann schwarz/Samplerstopp133s auf altem Stack; kein Menü/Spiel. Main nach#9137 früher bei208/210, späterer Pin unbekannt.",
  "fr": "Logo Insomniac puis noir/refus sampler133s sur ancien stack ; ni menu/jeu. Main après#9137 bloque plus tôt208/210, pin ultérieur inconnu.",
  "es": "Logo Insomniac y negro/rechazo sampler133s en stack viejo; sin menú/juego. Main tras#9137 para antes208/210, pin posterior desconocido."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10195"
  }
 ]
},
 'elden-ring':research('elden-ring',
  L('Separate the PS5 base game, Shadow of the Erdtree expansion and Elden Ring Nightreign. A cross-generation purchase does not mean that its PS4 and PS5 executables share a test result.','区分 PS5 本体、《黄金树幽影》扩展及《黑夜君临》。跨世代购买权益不意味着 PS4、PS5 可执行文件可以共用测试结果。','افصل لعبة PS5 الأساسية عن Shadow of the Erdtree وعن Elden Ring Nightreign. شراء نسختي الجيلين لا يجعل اختبار PS4 صالحاً لـPS5.','Separe o jogo base PS5, Shadow of the Erdtree e Elden Ring Nightreign. Uma compra para duas gerações não torna os executáveis PS4 e PS5 equivalentes num teste.','Trenne das PS5-Hauptspiel, Shadow of the Erdtree und Elden Ring Nightreign. Ein generationsübergreifender Kauf macht PS4- und PS5-Programme nicht zu demselben Testfall.','Distinguez le jeu PS5 de base, Shadow of the Erdtree et Elden Ring Nightreign. L’achat pour deux générations ne rend pas les exécutables PS4 et PS5 équivalents pour les tests.','Separa el juego base PS5, Shadow of the Erdtree y Elden Ring Nightreign. Una compra para dos generaciones no hace equivalentes sus ejecutables PS4 y PS5.'),
  L('Issue #3802 and PR #3817 concern Nightreign (PPSA25380) and a VideoOut export. They do not establish an Elden Ring base-game result. No scoped base-game run was found in the reviewed index.','issue #3802 与 PR #3817 讨论的是《黑夜君临》（PPSA25380）的 VideoOut 导出，不能证明《艾尔登法环》本体的运行情况。本次索引核对未找到明确属于本体的运行记录。','تخص المشكلة #3802 وPR #3817 لعبة Nightreign ‏(PPSA25380) وتصدير VideoOut، ولا تثبتان نتيجة للعبة Elden Ring الأساسية. لم نعثر على تشغيل محدد لها في الفهرس المراجَع.','O issue #3802 e o PR #3817 tratam de Nightreign (PPSA25380) e de uma exportação VideoOut, não do jogo base Elden Ring. Não foi encontrada uma execução identificada do jogo base no índice revisto.','Issue #3802 und PR #3817 betreffen Nightreign (PPSA25380) und einen VideoOut-Export. Sie belegen keinen Lauf des Elden-Ring-Hauptspiels. Im geprüften Index wurde kein eindeutig zugeordneter Lauf gefunden.','L’issue #3802 et la PR #3817 concernent Nightreign (PPSA25380) et un export VideoOut, pas le jeu de base Elden Ring. Aucun essai précisément attribué au jeu de base n’a été trouvé dans l’index vérifié.','La issue #3802 y la PR #3817 tratan Nightreign (PPSA25380) y un export VideoOut, no el Elden Ring base. No se encontró una ejecución identificada del juego base en el índice revisado.'),
  L('A useful first test records the base-game build, character creation, movement in Limgrave, combat and save reload. Expansion access and online sessions need separate evidence.','首份有效测试应记录本体版本、角色创建、宁姆格福移动、战斗及存档重载。扩展入口与在线会话需要另行验证。','سجّل إصدار اللعبة الأساسية وإنشاء الشخصية والحركة في Limgrave والقتال وإعادة تحميل الحفظ. دخول التوسعة والجلسات عبر الإنترنت يحتاجان أدلة منفصلة.','Registe a versão base, criação de personagem, movimento em Limgrave, combate e recarregamento de dados guardados. Acesso à expansão e sessões online exigem evidência separada.','Prüfe Hauptspielversion, Charaktererstellung, Bewegung in Limgrave, Kampf und erneutes Laden eines Spielstands. Erweiterung und Online-Sitzungen benötigen eigene Belege.','Notez la version de base, la création de personnage, les déplacements en Nécrolimbe, le combat et le rechargement d’une sauvegarde. L’extension et les sessions en ligne demandent des preuves distinctes.','Registra versión base, creación de personaje, movimiento en Necrolimbo, combate y recarga de partida. La expansión y las sesiones online necesitan evidencias separadas.'),[3802,3817]),
 'black-myth-wukong':research('black-myth-wukong',
  L('Identify the PS5 content version before comparing a report. Native PC graphics settings or PC benchmark videos are not measurements of the converted PS5 executable.','比较报告前应记录 PS5 内容版本。原生 PC 的画质设置与 PC 基准视频不属于转换后 PS5 可执行文件的性能测量。','حدد إصدار محتوى PS5 قبل المقارنة. إعدادات رسومات PC الأصلية وفيديوهات قياسها ليست قياسات للملف التنفيذي المحوّل من PS5.','Identifique a versão PS5 antes de comparar. Definições gráficas e benchmarks da edição PC nativa não medem o executável convertido de PS5.','Bestimme zuerst die PS5-Inhaltsversion. Grafikeinstellungen und Benchmarks der nativen PC-Fassung messen nicht das konvertierte PS5-Programm.','Identifiez la version PS5 avant de comparer. Les réglages et benchmarks du portage PC natif ne mesurent pas l’exécutable PS5 converti.','Identifica la versión PS5 antes de comparar. Los ajustes y benchmarks del PC nativo no miden el ejecutable convertido de PS5.'),
  L('Merged PR #3586 corrects partial HTTP URI formatting, but explicitly did not rerun Wukong. Open PR #4508 adjusts the declared flexible-memory budget and also has no Wukong run. These are technical leads, not evidence of playable scenes or FPS.','已合并的 PR #3586 修正 HTTP URI 的部分格式输出，但明确没有复测悟空；待合并 PR #4508 调整声明的 flexible-memory 预算，同样没有本作运行测试。两者属于技术线索，不能证明可玩场景或帧数。','يصحح PR #3586 المدمج تنسيق HTTP URI الجزئي، لكنه يصرّح بعدم إعادة تشغيل Wukong. يعدّل PR #4508 المفتوح ميزانية flexible-memory، دون تشغيل اللعبة أيضاً. هذه خيوط تقنية وليست دليلاً على اللعب أو FPS.','O PR integrado #3586 corrige a formatação parcial de URI HTTP, mas declara não ter repetido Wukong. O PR aberto #4508 altera o orçamento flexible-memory e também não testou o jogo. São pistas técnicas, não evidência de cenas jogáveis ou FPS.','Der integrierte PR #3586 korrigiert partielle HTTP-URI-Ausgabe, hat Wukong aber ausdrücklich nicht erneut getestet. Der offene PR #4508 ändert das flexible Speicherbudget, ebenfalls ohne Spieltest. Das sind technische Hinweise, keine Belege für Gameplay oder FPS.','La PR intégrée #3586 corrige le formatage partiel des URI HTTP mais indique ne pas avoir relancé Wukong. La PR ouverte #4508 modifie le budget flexible-memory, sans essai du jeu non plus. Ce sont des pistes techniques, pas des preuves de jeu ou de FPS.','La PR integrada #3586 corrige URI HTTP parciales, pero declara no haber repetido Wukong. La PR abierta #4508 ajusta el presupuesto flexible-memory y tampoco probó el juego. Son pistas técnicas, no pruebas de juego o FPS.'),
  L('Pin the game version and AnyPS5 commit, then capture the first controllable encounter, input, scene transitions and save reload. Reaching a corrected URI call or passing memory unit tests is insufficient.','固定游戏版本与 AnyPS5 提交，再记录首个可操作战斗、输入、场景切换及存档重载。越过 URI 调用或通过内存单元测试都不足以验证游戏。','ثبّت إصدار اللعبة والتعديل، ثم سجّل أول مواجهة يمكن التحكم بها والإدخال والانتقالات وإعادة تحميل الحفظ. تجاوز استدعاء URI أو نجاح اختبارات الذاكرة لا يكفي.','Fixe versão e commit e registe o primeiro combate controlável, input, transições e recarregamento de dados guardados. Passar uma chamada URI ou testes de memória não basta.','Halte Spielversion und Commit fest und prüfe den ersten steuerbaren Kampf, Eingabe, Szenenwechsel und Spielstandladen. Ein korrigierter URI-Aufruf oder Speichertest genügt nicht.','Fixez version et commit, puis vérifiez le premier combat contrôlable, les commandes, transitions et sauvegardes. Un appel URI corrigé ou des tests mémoire réussis ne suffisent pas.','Fija versión y commit y registra el primer combate controlable, entrada, transiciones y recarga de partida. Superar una llamada URI o pruebas de memoria no basta.'),[3586,4508]),
 'god-of-war-ragnarok':research('god-of-war-ragnarok',
  L('The PS5 Ragnarök campaign, Valhalla add-on and PS4 version are distinct scopes. God of War: Sons of Sparta is a different game in this catalogue.','PS5《诸神黄昏》主线、Valhalla 扩展及 PS4 版需要分别核对。本站收录的《斯巴达之子》是另一款游戏。','حملة Ragnarök على PS5 وإضافة Valhalla وإصدار PS4 نطاقات منفصلة. God of War: Sons of Sparta لعبة أخرى في هذا الفهرس.','A campanha PS5 de Ragnarök, Valhalla e a versão PS4 são âmbitos distintos. God of War: Sons of Sparta é outro jogo deste catálogo.','PS5-Kampagne, Valhalla-Erweiterung und PS4-Fassung sind getrennte Testbereiche. God of War: Sons of Sparta ist ein anderes Spiel dieses Katalogs.','La campagne PS5, l’extension Valhalla et la version PS4 demandent des essais distincts. God of War: Sons of Sparta est un autre jeu du catalogue.','La campaña PS5, Valhalla y la versión PS4 son ámbitos distintos. God of War: Sons of Sparta es otro juego del catálogo.'),
  L('Publisher information identifies these editions, but the reviewed upstream index provides no scoped Ragnarök run. Sons of Sparta’s reported stage cannot be transferred to this title. The PPSA ID, tested build and FPS remain unknown.','发行商资料能帮助辨认这些版本，但本次上游索引核对没有找到明确属于《诸神黄昏》的运行记录。《斯巴达之子》的阶段不能转用到本作；PPSA ID、测试构建与帧数仍未知。','توضح معلومات الناشر الإصدارات، لكن الفهرس المراجَع لا يقدم تشغيل Ragnarök محدداً. لا يمكن نقل مرحلة Sons of Sparta إليها. معرّف PPSA والبناء المختبَر وFPS مجهولة.','O editor identifica as edições, mas o índice revisto não fornece uma execução delimitada de Ragnarök. A fase de Sons of Sparta não se aplica a este jogo. PPSA, compilação testada e FPS continuam desconhecidos.','Herausgeberangaben unterscheiden die Ausgaben; im geprüften Upstream-Index fehlt jedoch ein zugeordneter Ragnarök-Lauf. Der Status von Sons of Sparta ist nicht übertragbar. PPSA-ID, getesteter Build und FPS bleiben unbekannt.','L’éditeur distingue les éditions, mais l’index vérifié ne fournit pas d’essai précisément attribué à Ragnarök. Le résultat de Sons of Sparta ne s’y applique pas. PPSA, version testée et FPS restent inconnus.','El editor distingue las ediciones, pero el índice revisado no aporta una ejecución identificada de Ragnarök. La fase de Sons of Sparta no se aplica aquí. PPSA, compilación probada y FPS siguen desconocidos.'),
  L('Record the opening campaign sequence, combat, companion interaction and save reload on a pinned PS5 build. Test Valhalla separately rather than treating an opening scene as whole-game coverage.','在固定 PS5 构建上记录主线开场、战斗、同伴互动及存档重载，Valhalla 单独测试。开场片段不能代表整部游戏。','سجّل افتتاح الحملة والقتال وتفاعل الرفيق وإعادة تحميل الحفظ على بناء PS5 محدد. اختبر Valhalla منفصلة؛ البداية لا تغطي اللعبة كاملة.','Registe a abertura da campanha, combate, interação com o companheiro e recarregamento de dados guardados numa versão PS5 identificada. Teste Valhalla à parte; a abertura não cobre todo o jogo.','Prüfe Kampagnenbeginn, Kampf, Begleiterinteraktion und Spielstandladen auf einem festgehaltenen PS5-Build. Teste Valhalla separat; die Eröffnung belegt keinen vollständigen Durchlauf.','Vérifiez l’ouverture de campagne, le combat, les interactions avec le compagnon et les sauvegardes sur une version PS5 identifiée. Testez Valhalla séparément ; l’ouverture ne couvre pas tout le jeu.','Registra inicio de campaña, combate, interacción con el compañero y recarga de partida en una versión PS5 identificada. Prueba Valhalla aparte; el inicio no cubre todo el juego.')),
 'horizon-forbidden-west':research('horizon-forbidden-west',
  L('The report identifies PPSA01521. Record the content version and whether it is the base game or Complete Edition; Burning Shores is a separate test scope. Horizon Zero Dawn Remastered is another title.','报告标识为 PPSA01521，仍需记录内容版本并区分本体与 Complete Edition；Burning Shores 应单独测试。《零之曙光：重制版》属于另一款作品。','يحدد التقرير PPSA01521. سجّل إصدار المحتوى وهل هو اللعبة الأساسية أم Complete Edition؛ اختبر Burning Shores منفصلة. Horizon Zero Dawn Remastered لعبة أخرى.','O relatório identifica PPSA01521. Registe a versão e distinga jogo base de Complete Edition; Burning Shores exige um teste separado. Horizon Zero Dawn Remastered é outro título.','Der Bericht nennt PPSA01521. Notiere die Inhaltsversion und Hauptspiel oder Complete Edition; Burning Shores ist separat zu testen. Horizon Zero Dawn Remastered ist ein anderes Spiel.','Le rapport indique PPSA01521. Notez la version et distinguez jeu de base et Complete Edition ; Burning Shores demande un essai séparé. Horizon Zero Dawn Remastered est un autre titre.','El informe identifica PPSA01521. Registra versión y distingue juego base de Complete Edition; Burning Shores necesita su propia prueba. Horizon Zero Dawn Remastered es otro título.'),
  L('PR #1616 describes menu/loading UI only on a larger local integration. It was closed and split into topic PRs, not merged as that integration. The material-scan stop, missing hardware and unpinned game-test commit limit what can be reproduced.','PR #1616 仅描述更大的本地整合构建到达菜单和加载界面。它因拆分为专题 PR 而关闭，没有以该整合版本合入。材质扫描阻碍、缺失硬件与未固定的游戏测试提交限制了复现范围。','يصف PR #1616 قائمة وشاشة تحميل على دمج محلي أكبر فقط. أُغلق وقُسّم إلى طلبات موضوعية، ولم يُدمج ذلك البناء كاملاً. عائق فحص المواد وغياب العتاد والتعديل الدقيق يحدّان من إعادة الاختبار.','O PR #1616 descreve menus e carregamento apenas numa integração local maior. Foi encerrado e dividido em PR temáticos, não integrado como esse conjunto. O bloqueio nos materiais, o equipamento ausente e o commit não fixado limitam a reprodução.','PR #1616 beschreibt Menü und Ladebildschirm nur auf einer größeren lokalen Integration. Er wurde aufgeteilt und geschlossen, nicht als Gesamtintegration gemergt. Materiallimit, fehlende Hardware und unklarer Testcommit begrenzen die Reproduzierbarkeit.','La PR #1616 décrit menu et chargement uniquement sur une intégration locale plus large. Elle a été divisée et fermée, pas intégrée en bloc. La limite sur les matériaux, le matériel absent et le commit de test non précisé limitent la reproduction.','La PR #1616 describe menús y carga solo en una integración local mayor. Se dividió y cerró, sin integrar ese conjunto. El límite de materiales, hardware ausente y commit no fijado limitan la reproducción.'),
  L('A follow-up should pin every integration commit, pass the material scan and demonstrate movement, machine combat and save reload. A loader or APR regression test alone cannot verify Aloy’s gameplay.','后续需固定全部整合提交，越过材质扫描，并验证移动、机械兽战斗与存档重载。加载器或 APR 回归测试不能单独验证埃洛伊的游戏过程。','يحتاج الاختبار اللاحق إلى تثبيت تعديلات الدمج وتجاوز فحص المواد وإظهار الحركة وقتال الآلات وإعادة تحميل الحفظ. اختبارات التحميل أو APR وحدها لا تثبت اللعب.','Fixe todos os commits, ultrapasse a pesquisa de materiais e demonstre movimento, combate contra máquinas e recarregamento de dados guardados. Um teste do carregador ou APR não valida o jogo.','Halte alle Integrationscommits fest, überwinde den Materialscan und zeige Bewegung, Maschinenkampf und Spielstandladen. Loader- oder APR-Tests allein bestätigen Aloys Gameplay nicht.','Fixez tous les commits, dépassez la recherche de matériaux et vérifiez déplacements, combat contre les machines et sauvegardes. Des tests du chargeur ou d’APR ne valident pas le jeu.','Fija todos los commits, supera la búsqueda de materiales y demuestra movimiento, combate con máquinas y recarga de partida. Las pruebas del cargador o APR no verifican el juego.'),[1616]),
 'the-last-of-us-part-i':{
 "checked": "2026-10-22",
 "edition": {
  "en": "Part I is the PS5 remake with Left Behind. The PS4 Remastered release and Part II Remastered are different executables, not interchangeable editions of this test.",
  "zh": "Part I 是包含 Left Behind 的 PS5 重制作品。PS4 Remastered 与 Part II Remastered 是不同游戏的可执行文件，不能互换测试结论。",
  "ar": "Part I إعادة تطوير لـPS5 تشمل Left Behind. إصدار Remastered على PS4 وPart II Remastered ملفان تنفيذيان مختلفان ولا تشملهما هذه التجربة.",
  "pt": "Part I é a recriação PS5 com Left Behind. Remastered para PS4 e Part II Remastered têm executáveis distintos e não partilham este teste.",
  "de": "Part I ist das PS5-Remake mit Left Behind. PS4 Remastered und Part II Remastered sind andere Programme; Testergebnisse sind nicht austauschbar.",
  "fr": "Part I est le remake PS5 avec Left Behind. Remastered sur PS4 et Part II Remastered sont des exécutables distincts, sans résultats interchangeables.",
  "es": "Part I es el remake PS5 con Left Behind. Remastered para PS4 y Part II Remastered son ejecutables distintos y sus resultados no son intercambiables."
 },
 "finding": {
  "en": "A scoped Linux report now identifies PPSA03396 02.000.000 on main cecb540a6 plus #9249 and local safety bypasses. It remains black/loading around 0.7 presents/s and runs out of memory after about five minutes, without a menu or scene. This is startup evidence, not playable status.",
  "zh": "已有明确Linux报告：PPSA03396 02.000.000，main cecb540a6加#9249及本地安全校验绕过；仍黑屏加载约0.7呈现／秒，约五分钟内存耗尽，无菜单或场景。它属于启动证据，不代表可玩。",
  "ar": "يوجد الآن تقرير Linux محدد للحزمة PPSA03396 02.000.000 على main cecb540a6 مع #9249 وتجاوزات محلية للحماية. يبقى أسود/تحميل بنحو 0.7 عرض/ث وينفد من الذاكرة بعد خمس دقائق تقريباً، بلا قائمة أو مشهد. دليل بدء لا قابلية لعب.",
  "pt": "Há agora um relatório Linux de PPSA03396 02.000.000 em main cecb540a6 com #9249 e bypasses locais. Fica preto/a carregar perto de 0,7 apresentações/s e esgota memória após cinco minutos, sem menu/cena. É evidência de arranque, não jogo utilizável.",
  "de": "Ein zugeordneter Linux-Bericht nennt PPSA03396 02.000.000 auf Main cecb540a6 mit #9249 und lokalen Sicherheitsumgehungen. Schwarz/Laden um 0,7 Presents/s, Speichermangel nach etwa fünf Minuten, kein Menü oder Szene. Startbeleg, kein spielbarer Status.",
  "fr": "Un rapport Linux identifie PPSA03396 02.000.000 sur main cecb540a6 avec #9249 et contournements locaux. Noir/chargement vers 0,7 présentations/s, mémoire épuisée après cinq minutes, sans menu/scène. Preuve de démarrage, pas de jouabilité.",
  "es": "Un informe Linux identifica PPSA03396 02.000.000 en main cecb540a6 con #9249 y bypasses locales. Negro/carga cerca de 0,7 presentaciones/s, memoria agotada tras cinco minutos, sin menú/escena. Evidencia de arranque, no jugabilidad."
 },
 "nextTest": {
  "en": "Pin the complete patch set and memory budget, replace descriptor/slice bypasses with validated behavior, then show a recognizable controllable scene. Test audio, saves and Left Behind separately. The local 24GiB GTT setting is not a general system requirement.",
  "zh": "固定完整补丁与内存预算，以经过验证的行为替代descriptor／slice绕过，再展示可辨认且可操作场景。声音、存档与Left Behind分别测试；本地24GiB GTT不是通用系统要求。",
  "ar": "ثبّت كل التعديلات والميزانية واستبدل تجاوزات descriptor/slice بسلوك مثبت، ثم أظهر مشهداً قابلاً للتحكم. اختبر الصوت والحفظ وLeft Behind منفصلة؛ 24GiB GTT المحلي ليس متطلباً عاماً.",
  "pt": "Fixe patches e memória, substitua bypasses de descriptor/slice por comportamento validado e mostre uma cena controlável. Teste som, saves e Left Behind à parte; 24GiB GTT local não é requisito geral.",
  "de": "Patchsatz und Speicherbudget festhalten, Deskriptor-/Slice-Bypässe durch geprüftes Verhalten ersetzen und steuerbare Szene zeigen. Ton, Saves und Left Behind separat; lokale 24GiB GTT sind keine allgemeine Anforderung.",
  "fr": "Fixez patchs et mémoire, remplacez les contournements descriptor/slice par un comportement validé et montrez une scène contrôlable. Son, saves et Left Behind séparés ; 24GiB GTT local n’est pas un prérequis général.",
  "es": "Fija patches y memoria, sustituye bypasses descriptor/slice por comportamiento validado y muestra escena controlable. Audio, saves y Left Behind aparte; 24GiB GTT local no es requisito general."
 },
 "sources": [
  {
   "label": "PlayStation",
   "url": "https://www.playstation.com/en-us/games/the-last-of-us-part-i/"
  },
  {
   "label": "Issue #2883",
   "url": "https://github.com/boykopovar/AnyPS5/issues/2883"
  },
  {
   "label": "PR #3713",
   "url": "https://github.com/boykopovar/AnyPS5/pull/3713"
  },
  {
   "label": "Scoped Linux startup report · PPSA03396",
   "url": "https://github.com/boykopovar/AnyPS5/issues/9295"
  }
 ]
},
 'final-fantasy-vii-rebirth':research('final-fantasy-vii-rebirth',
  L('Rebirth, its demo and Final Fantasy VII Remake Intergrade are separate test inputs. Record the full game’s PS5 content version rather than citing a Remake or PC result.','Rebirth、本作试玩版与 Final Fantasy VII Remake Intergrade 应作为不同测试输入。记录正式版的 PS5 内容版本，不引用 Remake 或 PC 表现代替。','Rebirth ونسختها التجريبية وFinal Fantasy VII Remake Intergrade مدخلات اختبار مختلفة. سجّل إصدار لعبة PS5 الكاملة، لا نتيجة Remake أو PC.','Rebirth, a sua demo e Final Fantasy VII Remake Intergrade são entradas distintas. Registe a versão PS5 completa, não um resultado de Remake ou PC.','Rebirth, seine Demo und Final Fantasy VII Remake Intergrade sind getrennte Testfälle. Notiere die PS5-Vollversion statt eines Remake- oder PC-Ergebnisses.','Rebirth, sa démo et Final Fantasy VII Remake Intergrade sont des entrées distinctes. Notez la version complète PS5, sans reprendre un résultat de Remake ou PC.','Rebirth, su demo y Final Fantasy VII Remake Intergrade son entradas distintas. Registra la versión completa PS5, no un resultado de Remake o PC.'),
  L('The publisher lists the demo separately from the full release. No scoped full-game AnyPS5 run was found in the reviewed upstream index, so a demo video would not establish compatibility of the campaign.','发行商将试玩版与正式版分别列出。本次上游索引核对未找到明确属于正式版的 AnyPS5 运行记录，因此试玩视频不能证明主线兼容性。','يعرض الناشر النسخة التجريبية منفصلة عن الكاملة. لم نجد تشغيل AnyPS5 محدداً للعبة الكاملة في الفهرس؛ فيديو التجربة لا يثبت توافق الحملة.','O editor lista a demo separadamente. Não foi encontrada no índice uma execução AnyPS5 identificada do jogo completo; um vídeo da demo não valida a campanha.','Der Herausgeber führt Demo und Vollversion getrennt. Im geprüften Index fehlt ein identifizierter AnyPS5-Lauf der Vollversion; ein Demovideo bestätigt die Kampagne nicht.','L’éditeur présente la démo séparément. Aucun essai AnyPS5 identifié du jeu complet n’a été trouvé dans l’index ; une vidéo de démo ne valide pas la campagne.','El editor lista la demo por separado. No se encontró una ejecución AnyPS5 identificada del juego completo en el índice; un vídeo de la demo no verifica la campaña.'),
  L('State demo or full game, then record controllable exploration, party combat, a region transition and save reload. A title screen cannot verify party switching or open-area loading.','注明试玩版还是正式版，再记录可操作探索、队伍战斗、区域切换与存档重载。标题画面不能验证队员切换或开放区域加载。','حدد التجربة أو اللعبة الكاملة، ثم سجّل الاستكشاف والقتال الجماعي والانتقال والحفظ. شاشة العنوان لا تثبت تبديل أعضاء الفريق أو تحميل المناطق.','Indique demo ou jogo completo e registe exploração controlável, combate em grupo, transição de região e recarregamento de dados guardados. O título não valida a troca de membros ou o carregamento de áreas.','Nenne Demo oder Vollversion und prüfe steuerbare Erkundung, Gruppenkampf, Regionswechsel und Spielstandladen. Der Titelbildschirm bestätigt weder Gruppenwechsel noch offenes Gebiet.','Précisez démo ou jeu complet et vérifiez exploration contrôlable, combat en groupe, changement de région et sauvegardes. L’écran-titre ne valide pas le changement de personnage ou les zones ouvertes.','Indica demo o juego completo y registra exploración controlable, combate de grupo, transición de región y recarga de partida. El título no verifica cambio de miembros ni carga de áreas.')),
 'final-fantasy-xvi':research('final-fantasy-xvi',
  L('Separate the PS5 demo, base campaign and Complete Edition with Echoes of the Fallen and The Rising Tide. Record installed expansions with the game version.','区分 PS5 试玩版、本体主线，以及包含 Echoes of the Fallen 和 The Rising Tide 的 Complete Edition；记录版本时同时注明已安装扩展。','افصل تجربة PS5 والحملة الأساسية وComplete Edition مع Echoes of the Fallen وThe Rising Tide. سجّل الإضافات المثبتة مع الإصدار.','Separe demo PS5, campanha base e Complete Edition com Echoes of the Fallen e The Rising Tide. Registe as expansões instaladas e a versão.','Trenne PS5-Demo, Hauptkampagne und Complete Edition mit Echoes of the Fallen und The Rising Tide. Halte installierte Erweiterungen und Version fest.','Distinguez démo PS5, campagne de base et Complete Edition avec Echoes of the Fallen et The Rising Tide. Notez les extensions installées avec la version.','Separa demo PS5, campaña base y Complete Edition con Echoes of the Fallen y The Rising Tide. Registra expansiones instaladas y versión.'),
  L('Publisher editions establish what is included, not what AnyPS5 can execute. No scoped XVI run was found in the reviewed index. Rebirth and other Final Fantasy titles cannot supply its FPS or run stage.','发行商版本说明只能确认包含哪些内容，不能证明 AnyPS5 运行能力。本次索引核对未找到明确属于 XVI 的运行记录，Rebirth 等系列作品也不能提供本作帧数或阶段。','تحدد إصدارات الناشر المحتوى، لا قدرة AnyPS5 على تشغيله. لم نجد تشغيل XVI محدداً في الفهرس؛ لا توفر Rebirth أو أجزاء أخرى FPS أو مرحلة لهذه اللعبة.','As edições do editor definem o conteúdo, não a execução no AnyPS5. Não foi encontrado um ensaio identificado de XVI; Rebirth ou outros títulos não fornecem os seus FPS ou fase.','Herausgeberausgaben belegen Inhalte, keine AnyPS5-Ausführung. Im geprüften Index fehlt ein XVI-Lauf. Rebirth oder andere Serienteile liefern dafür keine FPS oder Startstufe.','Les éditions de l’éditeur définissent le contenu, pas l’exécution sur AnyPS5. Aucun essai identifié de XVI n’a été trouvé ; Rebirth et les autres épisodes ne donnent pas ses FPS ou son étape.','Las ediciones del editor definen contenido, no ejecución en AnyPS5. No se encontró una prueba identificada de XVI; Rebirth u otros títulos no aportan sus FPS ni fase.'),
  L('Test normal combat and an Eikon battle as separate scenes, with audio and save reload. State the chapter and installed DLC; a cinematic or menu does not verify combat.','将普通战斗与召唤兽战斗作为不同场景检查，同时验证声音与存档重载。注明章节及 DLC，过场动画或菜单不能验证战斗。','اختبر القتال العادي ومعركة Eikon كمشهدين منفصلين مع الصوت والحفظ. حدد الفصل والإضافات؛ المشهد السينمائي أو القائمة لا يثبت القتال.','Teste combate normal e uma batalha Eikon em cenas separadas, com áudio e recarregamento de dados guardados. Indique capítulo e DLC; uma cinemática ou menu não valida combate.','Teste normalen Kampf und Eikon-Kampf getrennt, samt Ton und Spielstandladen. Nenne Kapitel und DLC; Filmsequenz oder Menü belegen keinen Kampf.','Testez combat normal et combat d’Eikon séparément, avec son et sauvegardes. Précisez chapitre et DLC ; cinématique ou menu ne valident pas le combat.','Prueba combate normal y batalla Eikon por separado, con audio y recarga de partida. Indica capítulo y DLC; una cinemática o menú no verifica combate.')),
 'gran-turismo-7':research('gran-turismo-7',
  L('Identify the PS5 release, content update and display mode. PS4 shader results, My First Gran Turismo and PS VR2 operation are distinct scopes.','确认 PS5 版本、内容更新与显示模式。PS4 着色器结果、My First Gran Turismo 与 PS VR2 运行情况属于不同范围。','حدد إصدار PS5 وتحديث المحتوى ووضع العرض. نتائج تظليل PS4 وMy First Gran Turismo وتشغيل PS VR2 نطاقات منفصلة.','Identifique edição PS5, atualização e modo de apresentação. Resultados de shaders PS4, My First Gran Turismo e PS VR2 são âmbitos separados.','Bestimme PS5-Fassung, Inhaltsupdate und Anzeigemodus. PS4-Shaderergebnisse, My First Gran Turismo und PS VR2 sind getrennte Testbereiche.','Identifiez version PS5, mise à jour et mode d’affichage. Shaders PS4, My First Gran Turismo et PS VR2 demandent des observations distinctes.','Identifica versión PS5, actualización y modo de pantalla. Los resultados de shaders PS4, My First Gran Turismo y PS VR2 son ámbitos distintos.'),
  L("#4697 first records Windows menus for PPSA01317 01.710.000. Follow-ups improve Garage and World Map rendering, then finish the first Music Rally song with Auto Drive at about 2 FPS on the local integration. Manual driving, other races, online features and VR2 are unverified. The race follow-up does not pin a new commit or restate the content version; keep it separate from the earlier menu run and from #981’s PS4 example.","#4697 最初记录 Windows 上 PPSA01317 01.710.000 的菜单结果。后续先改善车库与地图渲染，再在本地整合上用 Auto Drive 跑完Music Rally 的第一首曲目，约 2 FPS。手动驾驶、其他比赛、联网及 VR2 未验证。比赛跟进未固定新提交或重述内容版本，应与早期菜单记录及 #981 的 PS4 示例分开。","يسجل #4697 أولاً قوائم Windows للنسخة PPSA01317 01.710.000. تحسن المتابعات المرآب والخريطة ثم تنهي أول أغنية Music Rally باستخدام Auto Drive بنحو 2 FPS على الدمج المحلي. القيادة اليدوية والسباقات الأخرى والشبكة وVR2 غير متحققة. لا تثبّت متابعة السباق تعديلاً جديداً ولا تكرر إصدار المحتوى؛ افصلها عن القائمة السابقة ومثال PS4 في #981.","#4697 começa pelos menus Windows de PPSA01317 01.710.000. As atualizações melhoram garagem e mapa e terminam a primeira música Music Rally com Auto Drive, a cerca de 2 FPS na integração local. Condução manual, outras corridas, rede e VR2 não estão verificadas. A corrida não fixa um novo commit nem repete a versão; mantenha-a separada do menu anterior e do exemplo PS4 de #981.","#4697 dokumentiert zunächst Windows-Menüs für PPSA01317 01.710.000. Spätere Meldungen verbessern Garage und Karte und beenden den ersten Music-Rally-Song mit Auto Drive bei etwa 2 FPS auf lokaler Integration. Manuelles Fahren, weitere Rennen, Online und VR2 sind ungeprüft. Der Rennbericht nennt keinen neuen Commit oder erneut die Inhaltsversion; er bleibt vom früheren Menü und #981s PS4-Beispiel getrennt.","#4697 décrit d’abord les menus Windows de PPSA01317 01.710.000. Les suivis améliorent garage et carte, puis terminent la première chanson Music Rally avec Auto Drive à environ 2 FPS sur l’intégration locale. Conduite manuelle, autres courses, réseau et VR2 sont non vérifiés. Le suivi de course ne fixe pas de nouveau commit ni reprécise la version ; distinguez-le du menu initial et de l’exemple PS4 de #981.","#4697 registra primero menús Windows de PPSA01317 01.710.000. Las actualizaciones mejoran garaje y mapa y completan la primera canción Music Rally con Auto Drive, a unos 2 FPS en la integración local. Conducción manual, otras carreras, red y VR2 no se verificaron. El informe de carrera no fija un nuevo commit ni repite la versión; sepáralo del menú anterior y del ejemplo PS4 de #981."),
  L('Record a controllable race from start to finish and replay/save behaviour. List which network-dependent features were tested; garage screens and VR trailers cannot verify racing or VR support.','记录一场从起点到终点的可操作比赛及回放／保存表现，另列实际测试的联网功能。车库画面与 VR 宣传片不能证明比赛或 VR 支持。','سجّل سباقاً يمكن التحكم به من البداية للنهاية والإعادة والحفظ، وحدد الميزات الشبكية المختبَرة. المرآب وإعلانات VR لا تثبت السباق أو دعم VR.','Registe uma corrida controlável completa e comportamento de repetição/gravação. Indique funções online testadas; garagem e trailers VR não validam corrida ou VR.','Zeige ein steuerbares Rennen vom Start bis ins Ziel sowie Replay/Speichern. Nenne getestete Online-Funktionen; Garage und VR-Trailer belegen weder Rennen noch VR-Unterstützung.','Vérifiez une course contrôlable du départ à l’arrivée, puis replay/sauvegarde. Indiquez les fonctions réseau testées ; garage et bandes-annonces VR ne valident ni course ni VR.','Registra una carrera controlable completa y repetición/guardado. Indica funciones de red probadas; el garaje y los tráileres VR no verifican carreras ni VR.'),[981],[4697]),
 'hogwarts-legacy':research('hogwarts-legacy',
  L('The PS5 and PS4 editions are separate inputs. Note the content version and whether the Haunted Hogsmeade quest is installed; a native PC mod or benchmark is not a PS5 run.','PS5、PS4 版应作为不同输入。记录内容版本及是否安装霍格莫德闹鬼商店任务；原生 PC 模组或基准不属于 PS5 运行结果。','نسختا PS5 وPS4 مدخلان مختلفان. حدد إصدار المحتوى ومهمة Haunted Hogsmeade المثبتة؛ تعديلات PC وقياساته ليست تشغيل PS5.','PS5 e PS4 são entradas distintas. Registe a versão e a missão Haunted Hogsmeade instalada; mods e benchmarks PC não são execuções PS5.','PS5 und PS4 sind getrennte Testeingaben. Nenne Inhaltsversion und installierte Haunted-Hogsmeade-Quest; PC-Mods oder Benchmarks sind keine PS5-Läufe.','PS5 et PS4 sont des entrées distinctes. Notez version et quête Haunted Hogsmeade installée ; mods et benchmarks PC ne sont pas des essais PS5.','PS5 y PS4 son entradas distintas. Registra versión y misión Haunted Hogsmeade instalada; los mods y benchmarks PC no son ejecuciones PS5.'),
  L('The publisher page identifies the PS5 edition and quest content. No scoped Hogwarts Legacy AnyPS5 run was found in the reviewed public index, so its title ID and measured host requirements remain unknown.','发行商页面能确认 PS5 版与任务内容。本次公开索引核对未找到明确属于本作的 AnyPS5 运行记录，游戏 ID 与实测主机要求仍未知。','تحدد صفحة الناشر إصدار PS5 ومحتوى المهمة. لم نجد تشغيل AnyPS5 محدداً للعبة في الفهرس العام؛ معرّفها ومتطلبات المضيف المقاسة مجهولة.','O editor identifica a edição PS5 e a missão. Não foi encontrada no índice uma execução AnyPS5 identificada; o ID e os requisitos medidos do computador continuam desconhecidos.','Die Herausgeberseite nennt PS5-Fassung und Quest. Im geprüften öffentlichen Index fehlt ein identifizierter AnyPS5-Lauf; Titel-ID und gemessene Hostanforderungen bleiben unbekannt.','L’éditeur identifie l’édition PS5 et la quête. Aucun essai AnyPS5 attribué au jeu n’a été trouvé dans l’index public ; identifiant et prérequis mesurés restent inconnus.','El editor identifica edición PS5 y misión. No se encontró una ejecución AnyPS5 identificada en el índice público; ID y requisitos medidos del equipo siguen desconocidos.'),
  L('Test movement through Hogwarts, spell combat, an interior/exterior transition and save reload. Name the quest and scene; a character-creation screen alone cannot verify open-world play.','测试霍格沃茨内移动、咒语战斗、室内外切换与存档重载，注明任务及场景。仅有角色创建界面不能验证开放世界过程。','اختبر الحركة في Hogwarts والقتال بالتعاويذ والانتقال بين الداخل والخارج والحفظ. حدد المهمة والمشهد؛ إنشاء الشخصية وحده لا يثبت العالم المفتوح.','Teste movimento em Hogwarts, combate com feitiços, transição interior/exterior e recarregamento de dados guardados. Indique missão e cena; criação de personagem não valida o mundo aberto.','Prüfe Bewegung in Hogwarts, Zauberkampf, Innen-/Außenwechsel und Spielstandladen. Nenne Quest und Szene; Charaktererstellung allein bestätigt keine offene Welt.','Testez déplacements à Poudlard, combat magique, passage intérieur/extérieur et sauvegardes. Nommez quête et scène ; la création de personnage ne valide pas le monde ouvert.','Prueba movimiento en Hogwarts, combate con hechizos, transición interior/exterior y recarga de partida. Indica misión y escena; crear personaje no verifica el mundo abierto.')),
 'helldivers-2':research('helldivers-2',
  L('This review concerns the PS5 executable. The publisher marks online play as required and PS Plus as required for console online play. Native PC sessions do not verify the PS5 build in AnyPS5.','本次核对关注 PS5 可执行文件。发行商注明必须在线游玩，主机在线游玩需要 PS Plus。原生 PC 会话不能验证 AnyPS5 中的 PS5 构建。','تخص المراجعة ملف PS5 التنفيذي. يذكر الناشر ضرورة اللعب عبر الإنترنت وPS Plus للعب على الجهاز. جلسات PC الأصلية لا تختبر بناء PS5 في AnyPS5.','A revisão trata do executável PS5. O editor indica jogo online obrigatório e PS Plus para jogar online na consola. Sessões PC nativas não validam a versão PS5 no AnyPS5.','Geprüft wird das PS5-Programm. Der Herausgeber verlangt Online-Spiel und PS Plus für Konsolen-Online-Spiel. Native PC-Sitzungen bestätigen keinen PS5-Build in AnyPS5.','La vérification concerne l’exécutable PS5. L’éditeur exige le jeu en ligne et PS Plus sur console. Les sessions PC natives ne valident pas la version PS5 sur AnyPS5.','La revisión trata el ejecutable PS5. El editor exige juego online y PS Plus en consola. Las sesiones PC nativas no verifican la versión PS5 en AnyPS5.'),
  L('No scoped PS5 mission/session result was found in the reviewed upstream index. Exported HTTP or network functions alone do not prove authentication, matchmaking or mission access, and there is no verified offline workflow here.','本次上游索引核对未找到明确的 PS5 任务／会话结果。HTTP 或网络函数已导出不能证明认证、匹配与任务入口可用，这里也没有已验证的离线流程。','لم نجد نتيجة مهمة أو جلسة PS5 محددة في الفهرس. تصدير دوال HTTP أو الشبكة لا يثبت المصادقة أو المطابقة أو دخول المهمة، ولا يوجد هنا مسار عمل دون اتصال متحقق منه.','Não foi encontrado no índice um resultado de missão/sessão PS5 identificado. Exportar HTTP ou funções de rede não comprova autenticação, matchmaking ou acesso a missões; não há processo offline verificado aqui.','Im geprüften Index fehlt ein PS5-Missions-/Sitzungsergebnis. HTTP- oder Netzwerkexports belegen keine Anmeldung, Spielersuche oder Missionszugang; ein Offline-Ablauf ist hier nicht verifiziert.','Aucun résultat de mission/session PS5 identifié n’a été trouvé dans l’index. Des exports HTTP ou réseau ne prouvent ni authentification, ni matchmaking, ni accès aux missions ; aucun fonctionnement hors ligne n’est vérifié ici.','No se encontró una misión/sesión PS5 identificada en el índice. Exportar HTTP o funciones de red no demuestra autenticación, emparejamiento ni acceso a misiones; no hay flujo offline verificado aquí.'),
  L('Report account/session access, a controllable mission and reconnect behaviour separately, without sharing credentials. A splash screen or ship image cannot establish online mission compatibility.','分别记录账号／会话访问、可操作任务及重连表现，不共享凭据。开场标志或飞船画面不能证明在线任务兼容性。','سجّل الوصول للحساب والجلسة والمهمة القابلة للتحكم وإعادة الاتصال منفصلة، دون مشاركة بيانات الدخول. الشعارات أو صورة السفينة لا تثبت المهام عبر الإنترنت.','Registe acesso à conta/sessão, missão controlável e reconexão separadamente, sem partilhar credenciais. Logótipos ou uma imagem da nave não validam missões online.','Prüfe Konto-/Sitzungszugang, steuerbare Mission und Wiederverbindung getrennt, ohne Zugangsdaten zu teilen. Logo oder Schiffsbild bestätigen keine Online-Mission.','Vérifiez accès au compte/session, mission contrôlable et reconnexion séparément, sans partager d’identifiants. Logo ou image du vaisseau ne valident pas une mission en ligne.','Registra acceso a cuenta/sesión, misión controlable y reconexión por separado, sin compartir credenciales. Un logo o imagen de nave no verifica misiones online.')),
 'resident-evil-4-remake':research('resident-evil-4-remake',
  L('The source identifies PS5 PPSA07411. Separate the remake’s campaign, Separate Ways, demo and PS VR2 mode; the original Resident Evil 4 is not the same executable.','来源标识为 PS5 PPSA07411。区分重制版主线、Separate Ways、试玩版与 PS VR2 模式；原版《生化危机 4》不是相同可执行文件。','يحدد المصدر PS5 PPSA07411. افصل حملة النسخة المعاد تطويرها وSeparate Ways والتجربة وPS VR2؛ اللعبة الأصلية ملف مختلف.','A fonte identifica PS5 PPSA07411. Separe campanha do remake, Separate Ways, demo e PS VR2; o original não tem o mesmo executável.','Die Quelle nennt PS5 PPSA07411. Trenne Remake-Kampagne, Separate Ways, Demo und PS VR2; das Original ist ein anderes Programm.','La source indique PS5 PPSA07411. Distinguez campagne du remake, Separate Ways, démo et PS VR2 ; l’original est un autre exécutable.','La fuente identifica PS5 PPSA07411. Separa campaña del remake, Separate Ways, demo y PS VR2; el original es otro ejecutable.'),
  L('Later comments in #2776 replace the early Party.prx/import stop with an AGC presentation failure on pinned main. Zero absent imports means the loader audit passed, not that the game rendered. VR exports in merged #4044 do not establish VR play.','#2776 的后续评论说明，固定 main 上的阻碍已从早期 Party.prx／导入问题变为 AGC 呈现失败。没有缺失导入只代表加载审计通过，不代表画面已显示。已合并 #4044 的 VR 导出也不能证明 VR 可玩。','تنقل تعليقات #2776 اللاحقة العائق من Party.prx والاستيرادات إلى فشل عرض AGC على main محدد. انعدام الاستيرادات المفقودة يعني نجاح تدقيق التحميل، لا ظهور الصورة. صادرات VR في #4044 لا تثبت اللعب بها.','Os comentários posteriores de #2776 passam de Party.prx/imports para uma falha de apresentação AGC num main identificado. Zero imports ausentes valida a auditoria do carregador, não a imagem. Exportações VR de #4044 não comprovam jogo VR.','Spätere Kommentare in #2776 nennen statt Party.prx-/Importproblemen einen AGC-Präsentationsfehler auf festgehaltenem main. Keine fehlenden Imports bedeutet Loader-Audit bestanden, keine bestätigte Darstellung. VR-Exports aus #4044 belegen kein VR-Gameplay.','Les commentaires récents de #2776 remplacent l’ancien blocage Party.prx/imports par un échec d’affichage AGC sur main identifié. Aucun import absent signifie audit du chargeur réussi, pas image affichée. Les exports VR de #4044 ne prouvent pas le jeu VR.','Los comentarios posteriores de #2776 pasan de Party.prx/imports a un fallo AGC de presentación en main identificado. Cero imports ausentes verifica la auditoría del cargador, no la imagen. Los exports VR de #4044 no demuestran juego VR.'),
  L('Retest the missing context-register stop, then show controllable campaign movement, combat and save reload. Record the retest’s content version; DLC and VR each need their own evidence.','先复测缺失上下文寄存器的阻碍，再验证主线中的可操作移动、战斗及存档重载。复测需注明内容版本，DLC 与 VR 各自提供证据。','أعد اختبار السجل المفقود ثم الحركة والقتال والحفظ في الحملة. سجّل إصدار إعادة الاختبار؛ تحتاج الإضافات وVR أدلة خاصة.','Repita o bloqueio do registo de contexto e depois movimento controlável, combate e recarregamento de dados guardados. Registe a versão; DLC e VR exigem evidência própria.','Prüfe zuerst den fehlenden Kontextregisterzustand, dann steuerbare Kampagnenbewegung, Kampf und Spielstandladen. Nenne die Inhaltsversion; DLC und VR brauchen eigene Belege.','Retestez le registre manquant, puis déplacements contrôlables, combat et sauvegardes. Précisez la version ; DLC et VR demandent des preuves distinctes.','Repite el bloqueo del registro de contexto y luego movimiento controlable, combate y recarga de partida. Indica versión; DLC y VR necesitan evidencias propias.'),[2776,3773,4044,4309]),
 'returnal':research('returnal',
  L('PPSA01285 identifies the source’s PS5 release; its tested content version is not stated. Campaign, Tower of Sisyphus and cooperative sessions should be recorded separately.','来源注明 PS5 PPSA01285，但没有提供测试内容版本。主线、Tower of Sisyphus 与合作会话应分别记录。','يحدد المصدر إصدار PS5 بالمعرّف PPSA01285، دون نسخة المحتوى المختبَرة. سجّل الحملة وTower of Sisyphus والجلسات التعاونية منفصلة.','A fonte identifica PS5 PPSA01285, sem indicar a versão testada. Campanha, Tower of Sisyphus e cooperação devem ser registadas separadamente.','Die Quelle nennt PS5 PPSA01285, aber keine getestete Inhaltsversion. Kampagne, Tower of Sisyphus und Koop-Sitzungen sind getrennt zu dokumentieren.','La source indique PS5 PPSA01285, sans version testée. Campagne, Tower of Sisyphus et coopération doivent être documentées séparément.','La fuente identifica PS5 PPSA01285, sin versión probada. Campaña, Tower of Sisyphus y cooperación deben registrarse por separado.'),
  L('The solo-scheduling implementation in merged #3176 cleared an earlier API issue. #4239 provides later Windows failures and a local PlayGo comparison; open #4491 is not an unpatched-release result. No menu or interactive combat is verified in these runs.','已合并 #3176 的 solo-scheduling 实现处理了早期 API 问题。#4239 提供了后续 Windows 失败及本地 PlayGo 对照，待合并 #4491 不能作为原版发行结果。这些运行没有验证菜单或可操作战斗。','عالج #3176 المدمج مشكلة API أقدم. يقدم #4239 فشلاً لاحقاً على Windows ومقارنة PlayGo محلية؛ #4491 المفتوح ليس نتيجة للإصدار الأصلي. لا قائمة أو قتال تفاعلي متحقق في هذه الجولات.','O #3176 integrado resolveu um problema API anterior. #4239 fornece falhas Windows posteriores e uma comparação local PlayGo; #4491 aberto não é resultado da versão original. Estes ensaios não validam menus ou combate interativo.','Der integrierte #3176 behandelt einen früheren API-Stopp. #4239 zeigt spätere Windows-Fehler und einen lokalen PlayGo-Vergleich; der offene #4491 ist kein unveränderter Release. Menü oder steuerbarer Kampf sind damit nicht belegt.','La PR intégrée #3176 traite un ancien blocage API. #4239 fournit des échecs Windows plus récents et une comparaison locale PlayGo ; #4491 ouverte ne représente pas une version publiée sans modification. Menu et combat interactif ne sont pas vérifiés.','La #3176 integrada trata un bloqueo API anterior. #4239 aporta fallos Windows posteriores y una comparación local PlayGo; #4491 abierta no es resultado de una versión publicada sin modificar. No se verifican menús ni combate interactivo.'),
  L('Record the OOM/stack-walk result separately from the later depth/stencil stop. A new test needs visible, controllable combat and suspend/resume evidence, with full hardware and patch details.','将内存不足／栈回溯结果与后续深度／模板阻碍分开记录。新测试需要可见、可操作的战斗与暂停周期恢复证据，并补齐硬件和补丁条件。','افصل نفاد الذاكرة وفك المكدس عن عائق depth/stencil اللاحق. يحتاج الاختبار قتالاً مرئياً يمكن التحكم به ودليل تعليق الدورة واستئنافها مع العتاد والتعديلات.','Separe falta de memória/pilha do bloqueio depth/stencil posterior. O novo teste deve mostrar combate controlável e suspensão/retoma do ciclo, com equipamento e patches completos.','Trenne OOM/Stack-Walk vom späteren Depth/Stencil-Stopp. Ein neuer Test benötigt sichtbaren steuerbaren Kampf und Belege für Zyklus-Unterbrechen/Fortsetzen samt Hardware und Patches.','Séparez manque de mémoire/parcours de pile du blocage depth/stencil ultérieur. Un nouvel essai doit montrer combat contrôlable et suspension/reprise du cycle, avec matériel et correctifs.','Separa falta de memoria/recorrido de pila del bloqueo depth/stencil posterior. La nueva prueba necesita combate visible y controlable y suspensión/reanudación del ciclo, con hardware y parches.'),[3148,3176,4239,4491]),
 'palworld':research('palworld',
  L('The scoped setup report identifies PS5 PPSA23126, version 01.102.999. Keep that version separate from native PC/Xbox results, and distinguish local world setup from cooperative or dedicated-server sessions.','有明确条件的设置界面报告注明 PS5 PPSA23126、01.102.999。不要与原生 PC／Xbox 结果混用，本地世界设置与合作或专用服务器会话也需区分。','يحدد تقرير الإعداد PS5 PPSA23126، إصدار 01.102.999. افصله عن PC وXbox وعن جلسات التعاون أو الخادم المخصص.','O relatório de configuração identifica PS5 PPSA23126, versão 01.102.999. Separe-o de PC/Xbox nativos e distinga configuração local de sessões cooperativas ou servidores dedicados.','Der zugeordnete Setup-Bericht nennt PS5 PPSA23126, Version 01.102.999. Trenne ihn von nativen PC-/Xbox-Ergebnissen sowie Koop- oder Dedicated-Server-Sitzungen.','Le rapport de réglages identifie PS5 PPSA23126, version 01.102.999. Séparez-le des résultats PC/Xbox et distinguez monde local, coopération et serveur dédié.','El informe de configuración identifica PS5 PPSA23126, versión 01.102.999. Sepáralo de PC/Xbox y distingue mundo local, cooperación y servidor dedicado.'),
  L('#3832 reaches world setup only with an integration branch and local workarounds. Later #4552 discusses rendered world textures on another modified setup, with world colours still wrong. Its DCC fix #4554 is open. These reports do not establish an unpatched playable world, reliable saves or multiplayer.','#3832 依赖整合分支和本地绕过措施进入世界设置。后续 #4552 讨论另一套修改环境中的世界纹理，世界颜色仍有错误，DCC 修复 #4554 尚待合并。这些报告没有证明原始构建下世界可玩、存档可靠或多人可用。','يصل #3832 إلى إعداد العالم بفرع دمج وحلول محلية فقط. يناقش #4552 لاحقاً خامات العالم على بناء معدل آخر مع ألوان خاطئة؛ إصلاح DCC ‏#4554 مفتوح. لا تثبت التقارير عالماً قابلاً للعب دون تعديل أو حفظاً موثوقاً أو تعاوناً.','#3832 chega à configuração do mundo apenas com integração e soluções locais. #4552 trata de texturas do mundo noutra configuração alterada, ainda com cores erradas; a correção DCC #4554 está aberta. Não demonstram mundo jogável sem patches, gravação fiável ou multijogador.','#3832 erreicht Welteinstellungen nur mit Integration und lokalen Workarounds. #4552 untersucht Welttexturen auf einem anderen modifizierten Build; Farben bleiben falsch, DCC-Fix #4554 ist offen. Unverändertes spielbares Hauptspiel, zuverlässiges Speichern und Mehrspieler sind nicht belegt.','#3832 atteint les réglages du monde uniquement avec intégration et contournements locaux. #4552 examine les textures sur une autre configuration modifiée, aux couleurs encore incorrectes ; le correctif DCC #4554 est ouvert. Monde jouable sans modification, sauvegardes fiables et multijoueur ne sont pas confirmés.','#3832 llega a ajustes del mundo solo con integración y soluciones locales. #4552 trata texturas en otra configuración modificada, con colores aún incorrectos; el arreglo DCC #4554 está abierto. No verifican mundo jugable sin parches, guardado fiable ni multijugador.'),
  L('Pin the entire integration and test character creation, controllable world movement, gathering/combat, saving and reopening the same world. Log in-world measurements separately from menu presentation counts; test cooperation independently.','固定整个整合构建，依次测试角色创建、可操作的世界移动、采集／战斗、保存及重新进入同一世界。世界测量与菜单呈现计数分开，多人合作另行测试。','ثبّت الدمج كاملاً واختبر إنشاء الشخصية والحركة والجمع والقتال وحفظ العالم وإعادة فتحه. افصل قياسات العالم عن عدّ عروض القائمة، واختبر التعاون منفصلاً.','Fixe a integração completa e teste personagem, movimento controlável, recolha/combate, gravação e reabertura do mundo. Separe medições no mundo das apresentações do menu; teste cooperação à parte.','Halte die gesamte Integration fest und prüfe Charaktererstellung, steuerbare Weltbewegung, Sammeln/Kampf, Speichern und erneutes Öffnen derselben Welt. Trenne Weltmessungen von Menü-Präsentationen; teste Koop separat.','Fixez toute l’intégration et vérifiez personnage, déplacements contrôlables, collecte/combat, sauvegarde et réouverture du même monde. Séparez mesures en jeu et affichages du menu ; testez la coopération à part.','Fija toda la integración y prueba personaje, movimiento controlable, recolección/combate, guardado y reapertura del mismo mundo. Separa mediciones en el mundo de presentaciones del menú; prueba cooperación aparte.'),[3832,3835,4260,4552,4554,4366]),
};

gameResearch['gran-turismo-7'].sources.push(
 {label:'Garage and World Map follow-up',url:'https://github.com/boykopovar/AnyPS5/discussions/4697#discussioncomment-18889190'},
 {label:'Music Rally follow-up',url:'https://github.com/boykopovar/AnyPS5/discussions/4697#discussioncomment-18892537'},
);

// Keep edition and result changes tied to their source review.
gameResearch['black-myth-wukong'].checked='2026-10-14';
gameResearch['black-myth-wukong'].finding=L("PR #4508 now includes a Windows PPSA23226 startup run on a local stack: the declared 800 MiB budget removes the earlier exhaustion message, but a cold run still ends at the render-thread watchdog. No menu, visible gameplay or FPS is confirmed. The earlier HTTP fix #3586 remains a separate technical change without a Wukong rerun.","#4508 新增本地整合的 Windows PPSA23226 启动记录：声明的 800 MiB 预算消除了旧内存耗尽信息，但冷缓存仍停在渲染线程 watchdog。没有确认菜单、可见游戏过程或 FPS。此前 HTTP 修复 #3586 仍属于无悟空复测的独立技术改动。","يتضمن #4508 الآن بدء PPSA23226 على Windows بدمج محلي: ميزانية 800 MiB تزيل نفاد الذاكرة لكن watchdog الرسم يبقى. لا قائمة أو لعب أو FPS مؤكدة. #3586 تغيير HTTP منفصل دون إعادة اختبار.","#4508 inclui agora arranque Windows PPSA23226 local:800 MiB elimina falta memória, mas watchdog permanece. Sem menu/jogo/FPS confirmados. #3586 continua alteração HTTP sem reteste.","#4508 enthält nun lokalen Windows-PPSA23226-Start:800 MiB entfernt Speicherfehler, Render-Watchdog bleibt. Kein Menü/Gameplay/FPS bestätigt. #3586 bleibt HTTP-Änderung ohne Titeltest.","#4508 inclut maintenant démarrage Windows PPSA23226 local :800 MiB supprime manque mémoire, watchdog demeure. Menu/jeu/FPS non confirmés. #3586 reste HTTP sans retest.","#4508 incluye inicio Windows PPSA23226 local:800 MiB elimina falta memoria, watchdog persiste. Menú/juego/FPS sin confirmar. #3586 sigue HTTP sin repetir juego.");
gameResearch['black-myth-wukong'].edition=L("The startup report identifies PS5 PPSA23226 but does not state its content version. Native PC benchmarks or other regional executables are not this test.","启动报告明确为 PS5 PPSA23226，未提供内容版本；原生 PC 基准及其他地区程序不属于此测试。","تقرير البداية PS5 PPSA23226 بلا نسخة محتوى. PC ومعرّفات أخرى ليست هذا الاختبار.","RelatoPS5 PPSA23226 sem versão conteúdo. PC/outros IDs não são este teste.","PS5-PPSA23226-Start ohne Inhaltsversion. PC/andere IDs sind kein solcher Test.","RapportPS5 PPSA23226 sans version. PC/autres IDs distincts.","InformePS5 PPSA23226 sin versión. PC/otros IDs son distintos.");
gameResearch['palworld'].checked='2026-10-14';
gameResearch['palworld'].finding=L("#3832 reaches world setup only on a local integration. #4552 observes world textures with wrong colours on another modified stack. DCC synchronization #4554 and socket descriptors #4391 are now merged, but no new clean-main Palworld run is provided. Reliable saves and multiplayer remain unverified.","#3832 仅在本地整合到达世界设置，#4552 在另一修改环境观察到颜色错误的世界纹理。DCC 同步 #4554 和 socket 描述符 #4391 现已合入，但没有新的原始 main 帕鲁测试；可靠存档和多人仍未验证。","#3832 إعداد عالم بدمج محلي و#4552 ألوان خاطئة بتعديل آخر. #4554 و#4391 مدمجان الآن لكن بلا تشغيل Palworld جديد على main الأصلي. الحفظ والشبكة غير موثقين.","#3832 configuração local, #4552 mundo com cores erradas noutro stack. #4554/#4391 integrados sem novo teste Palworld main original. Gravações/rede não verificadas.","#3832 lokale Welteinstellung, #4552 falsche Weltfarben in anderem Stack. #4554/#4391 gemergt ohne neuen main-Palworld-Test. Speichern/Mehrspieler ungeprüft.","#3832 configuration locale, #4552 monde aux couleurs fausses sur autre pile. #4554/#4391 intégrés sans nouveau test Palworld main original. Sauvegardes/réseau non vérifiés.","#3832 configuración local, #4552 mundo con colores erróneos en otro stack. #4554/#4391 integrados sin nueva prueba Palworld main original. Guardado/red sin verificar.");
gameResearch['palworld'].sources.push({label:'PR #4391',url:'https://github.com/boykopovar/AnyPS5/pull/4391'});

gameResearch["graven"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "GRAVEN PPSA09614 01.000.001 now has Windows runtime evidence. Earlier import-only audit remains a separate static snapshot; #9628 later merging does not change the tested 8b3a+#9628 build.",
  "zh": "GRAVEN PPSA09614 01.000.001现有Windows运行证据；早先仅导入审计仍属独立静态快照，#9628后来合并不改变实测8b3a加#9628构建。",
  "ar": "GRAVEN PPSA09614/01.000.001 لديه تشغيلWindows؛ تدقيق imports قديم منفصل، دمج#9628 لاحق لا يغيرpin المختبر.",
  "pt": "GRAVEN PPSA09614/01.000.001 tem execuçãoWindows; audit antigo separado, integração posterior#9628 não muda pin.",
  "de": "GRAVEN PPSA09614/01.000.001 mit Windowslauf; alter Importaudit separat, späteres#9628-Merge ändert keinen Testpin.",
  "fr": "GRAVEN PPSA09614/01.000.001 a un essaiWindows ; audit ancien distinct, fusion ultérieure#9628 ne change pas le pin.",
  "es": "GRAVEN PPSA09614/01.000.001 tiene ejecuciónWindows; audit viejo separado, fusión posterior#9628 no cambia pin."
 },
 "finding": {
  "en": "Same pinned stack progresses from cold319s/no video surface to warm title60, then scripted New Campaign/difficulty and boat intro5–10 FPS by420s.600s cap, no manual play/audio/save proof. One180s loading frame and resolved GPU waits; badly washed cyan/white rendering with mixed-DCC warnings, cause not proven.",
  "zh": "同一固定栈从冷319秒无video surface推进到暖标题60，再脚本新Campaign／难度及420秒船上片头5–10 FPS；600秒限时，无手动游玩／声音／存档证明。加载单帧180秒、GPU wait后恢复；青白曝光与mixed-DCC警告原因未证。",
  "ar": "نفس stack: cold319ث بلا surface، warm عنوان60 ثم مقدمة قارب5–10FPS عند420ث؛ حد600ث بلا لعب يدوي/صوت/حفظ. إطار تحميل180ث/waits تعافت، صورة cyan وDCC غير مشخصة.",
  "pt": "Mesmo stack: cold319s sem surface, warm título60 e barco5–10FPS420s; cap600s sem jogo manual/som/saves. Frame de carga180s/waits recuperados; cyan/DCC sem causa provada.",
  "de": "Gleicher Stack: kalt319s ohne Surface, warm Titel60 dann Bootintro5–10FPS420s;600s ohne manuelles Spiel/Ton/Saves. Ladeframe180s/Waits erholt, Cyan/DCC-Ursache offen.",
  "fr": "Même stack : froid319s sans surface, chaud titre60 puis bateau5–10FPS420s ; cap600s sans jeu manuel/son/saves. Frame charge180s/waits rétablis, cyan/DCC sans cause prouvée.",
  "es": "Mismo stack: frío319s sin surface, caliente título60 y barco5–10FPS420s; cap600s sin juego manual/audio/saves. Frame carga180s/waits recuperados, cyan/DCC sin causa probada."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9708#discussioncomment-19138932"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/9628"
  }
 ]
};

gameResearch["minecraft-dungeons-ii"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "On23 October the author clarified that these older frame-time captures redirected stdout/stderr. They remain diagnostic observations under their original pins, not protocol-compliant benchmarks; a Lodoss composition’s earlier claimed speed direction was withdrawn pending terminal-attached reruns. Do not infer a universal gain from #8091, which remains draft for title-specific regressions/crashes.",
  "zh": "10月23日作者明确旧帧时间采集重定向stdout／stderr，保留原pin作为诊断，不再当规范基准；旧Lodoss组合的速度方向曾撤回，需终端重跑。#8091仍因具体游戏回归／崩溃保持draft，不能推导通用提速。",
  "ar": "وضح المؤلف23أكتوبر أن captures القديمة تعيد توجيه stdout/stderr؛ تشخيص بنفسpins لا benchmark مطابق. سحب اتجاه سرعة Lodoss القديم قبل reruns terminal. #8091 draft مع regressions/crashes، لا ربح عام.",
  "pt": "Autor esclareceu23out que capturas antigas redirecionavam stdout/stderr: diagnósticos com pins originais, não benchmarks conformes. Retirou direção de ganho Lodoss até rerun terminal. #8091 draft com regressões/crashes, sem ganho geral.",
  "de": "Autor präzisierte23.Oktober alte Captures mit umgeleitetem stdout/stderr: Diagnosen am Originalpin, keine protokollkonformen Benchmarks. Alte Lodoss-Temporichtung zurückgezogen bis Terminal-Replay. #8091 bleibtDraft mit Regressionen/Crashs, kein allgemeinerGewinn.",
  "fr": "Auteur précise23octobre anciennes captures avec stdout/stderr redirigés : diagnostics aux pins originaux, pas benchmarks conformes. Ancienne direction vitesse Lodoss retirée avant reruns terminal. #8091 reste draft avec régressions/crashs, sans gain général.",
  "es": "Autor aclaró23oct capturas viejas con stdout/stderr redirigidos: diagnósticos con pins originales, no benchmarks conformes. Retiró dirección velocidad Lodoss vieja hasta reruns terminal. #8091 sigue draft con regresiones/crashes, sin ganancia general."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6314036383"
  }
 ]
};

gameResearch["super-meat-boy-3d"]={
 "checked": "2026-10-25",
 "edition": {
  "en": "Reported PS5 package PPSA31162. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution. Match the exact PS5 package and tested source tree.",
  "zh": "报告PS5包PPSA31162；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。 核对准确PS5包与实测源码树。",
  "ar": "حزمة PS5 المبلغ عنها PPSA31162. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5. طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Pacote PS5 referido PPSA31162. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5. Confirme pacote PS5 e árvore testada.",
  "de": "Gemeldetes PS5-Paket PPSA31162. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf. PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Paquet PS5 rapporté PPSA31162. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5. Vérifiez paquet PS5 et source testée.",
  "es": "Paquete PS5 reportado PPSA31162. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5. Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "A new Windows/RX6700XT f90a3+#9026 report has cyan-white geometry; a later clean Linux/RTX4070Ti e7e99 run shows full colour at about5FPS. Different OS/GPU/builds do not establish whether a merged fix or a platform path explains it. The original redirected-log performance data keeps its diagnostic qualification.",
  "zh": "新Windows／RX6700XT的f90a3加#9026报告青白几何，较后干净Linux／RTX4070Ti的e7e99约5 FPS且全彩。系统／GPU／构建不同，不证明已合修复或平台路径就是原因；旧重定向性能资料仍限诊断。",
  "ar": "تقرير Windows/RX6700XT f90a3+#9026 سماوي؛ Linux/RTX4070Ti e7e99 نظيف ملون≈5FPS. اختلاف النظام/GPU/build لا يثبت إصلاحاً أو سبباً منصياً؛ قياس السجل القديم تشخيصي.",
  "pt": "Windows/RX6700XT f90a3+#9026 ciano; Linux/RTX4070Ti e7e99 limpo colorido≈5FPS. SO/GPU/build diferentes não isolam fix/plataforma; medição antiga continua diagnóstica.",
  "de": "Windows/RX6700XT f90a3+#9026 cyan, Linux/RTX4070Ti e7e99 sauber farbig≈5FPS. Andere OS/GPU/Builds isolieren weder Fix noch Plattformursache; alte Logmessung bleibt Diagnose.",
  "fr": "Windows/RX6700XT f90a3+#9026 cyan ; Linux/RTX4070Ti e7e99 propre coloré≈5FPS. OS/GPU/build différents n’isolent pas correctif/plateforme ; anciennes mesures restent diagnostiques.",
  "es": "Windows/RX6700XT f90a3+#9026 cian; Linux/RTX4070Ti e7e99 limpio en color≈5FPS. SO/GPU/build distintos no aíslan fix/plataforma; mediciones antiguas siguen diagnósticas."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/10568"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/8091"
  }
 ]
};

gameResearch["afterimage"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "On23 October the author clarified that these older frame-time captures redirected stdout/stderr. They remain diagnostic observations under their original pins, not protocol-compliant benchmarks; a Lodoss composition’s earlier claimed speed direction was withdrawn pending terminal-attached reruns. Do not infer a universal gain from #8091, which remains draft for title-specific regressions/crashes.",
  "zh": "10月23日作者明确旧帧时间采集重定向stdout／stderr，保留原pin作为诊断，不再当规范基准；旧Lodoss组合的速度方向曾撤回，需终端重跑。#8091仍因具体游戏回归／崩溃保持draft，不能推导通用提速。",
  "ar": "وضح المؤلف23أكتوبر أن captures القديمة تعيد توجيه stdout/stderr؛ تشخيص بنفسpins لا benchmark مطابق. سحب اتجاه سرعة Lodoss القديم قبل reruns terminal. #8091 draft مع regressions/crashes، لا ربح عام.",
  "pt": "Autor esclareceu23out que capturas antigas redirecionavam stdout/stderr: diagnósticos com pins originais, não benchmarks conformes. Retirou direção de ganho Lodoss até rerun terminal. #8091 draft com regressões/crashes, sem ganho geral.",
  "de": "Autor präzisierte23.Oktober alte Captures mit umgeleitetem stdout/stderr: Diagnosen am Originalpin, keine protokollkonformen Benchmarks. Alte Lodoss-Temporichtung zurückgezogen bis Terminal-Replay. #8091 bleibtDraft mit Regressionen/Crashs, kein allgemeinerGewinn.",
  "fr": "Auteur précise23octobre anciennes captures avec stdout/stderr redirigés : diagnostics aux pins originaux, pas benchmarks conformes. Ancienne direction vitesse Lodoss retirée avant reruns terminal. #8091 reste draft avec régressions/crashs, sans gain général.",
  "es": "Autor aclaró23oct capturas viejas con stdout/stderr redirigidos: diagnósticos con pins originales, no benchmarks conformes. Retiró dirección velocidad Lodoss vieja hasta reruns terminal. #8091 sigue draft con regresiones/crashes, sin ganancia general."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6322979128"
  }
 ]
};

gameResearch["octopath-traveler-ii"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "On23 October the author clarified that these older frame-time captures redirected stdout/stderr. They remain diagnostic observations under their original pins, not protocol-compliant benchmarks; a Lodoss composition’s earlier claimed speed direction was withdrawn pending terminal-attached reruns. Do not infer a universal gain from #8091, which remains draft for title-specific regressions/crashes.",
  "zh": "10月23日作者明确旧帧时间采集重定向stdout／stderr，保留原pin作为诊断，不再当规范基准；旧Lodoss组合的速度方向曾撤回，需终端重跑。#8091仍因具体游戏回归／崩溃保持draft，不能推导通用提速。",
  "ar": "وضح المؤلف23أكتوبر أن captures القديمة تعيد توجيه stdout/stderr؛ تشخيص بنفسpins لا benchmark مطابق. سحب اتجاه سرعة Lodoss القديم قبل reruns terminal. #8091 draft مع regressions/crashes، لا ربح عام.",
  "pt": "Autor esclareceu23out que capturas antigas redirecionavam stdout/stderr: diagnósticos com pins originais, não benchmarks conformes. Retirou direção de ganho Lodoss até rerun terminal. #8091 draft com regressões/crashes, sem ganho geral.",
  "de": "Autor präzisierte23.Oktober alte Captures mit umgeleitetem stdout/stderr: Diagnosen am Originalpin, keine protokollkonformen Benchmarks. Alte Lodoss-Temporichtung zurückgezogen bis Terminal-Replay. #8091 bleibtDraft mit Regressionen/Crashs, kein allgemeinerGewinn.",
  "fr": "Auteur précise23octobre anciennes captures avec stdout/stderr redirigés : diagnostics aux pins originaux, pas benchmarks conformes. Ancienne direction vitesse Lodoss retirée avant reruns terminal. #8091 reste draft avec régressions/crashs, sans gain général.",
  "es": "Autor aclaró23oct capturas viejas con stdout/stderr redirigidos: diagnósticos con pins originales, no benchmarks conformes. Retiró dirección velocidad Lodoss vieja hasta reruns terminal. #8091 sigue draft con regresiones/crashes, sin ganancia general."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6332162016"
  }
 ]
};

gameResearch["blue-prince"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "On23 October the author clarified that these older frame-time captures redirected stdout/stderr. They remain diagnostic observations under their original pins, not protocol-compliant benchmarks; a Lodoss composition’s earlier claimed speed direction was withdrawn pending terminal-attached reruns. Do not infer a universal gain from #8091, which remains draft for title-specific regressions/crashes.",
  "zh": "10月23日作者明确旧帧时间采集重定向stdout／stderr，保留原pin作为诊断，不再当规范基准；旧Lodoss组合的速度方向曾撤回，需终端重跑。#8091仍因具体游戏回归／崩溃保持draft，不能推导通用提速。",
  "ar": "وضح المؤلف23أكتوبر أن captures القديمة تعيد توجيه stdout/stderr؛ تشخيص بنفسpins لا benchmark مطابق. سحب اتجاه سرعة Lodoss القديم قبل reruns terminal. #8091 draft مع regressions/crashes، لا ربح عام.",
  "pt": "Autor esclareceu23out que capturas antigas redirecionavam stdout/stderr: diagnósticos com pins originais, não benchmarks conformes. Retirou direção de ganho Lodoss até rerun terminal. #8091 draft com regressões/crashes, sem ganho geral.",
  "de": "Autor präzisierte23.Oktober alte Captures mit umgeleitetem stdout/stderr: Diagnosen am Originalpin, keine protokollkonformen Benchmarks. Alte Lodoss-Temporichtung zurückgezogen bis Terminal-Replay. #8091 bleibtDraft mit Regressionen/Crashs, kein allgemeinerGewinn.",
  "fr": "Auteur précise23octobre anciennes captures avec stdout/stderr redirigés : diagnostics aux pins originaux, pas benchmarks conformes. Ancienne direction vitesse Lodoss retirée avant reruns terminal. #8091 reste draft avec régressions/crashs, sans gain général.",
  "es": "Autor aclaró23oct capturas viejas con stdout/stderr redirigidos: diagnósticos con pins originales, no benchmarks conformes. Retiró dirección velocidad Lodoss vieja hasta reruns terminal. #8091 sigue draft con regresiones/crashes, sin ganancia general."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/8091"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9189"
  }
 ]
};

gameResearch["the-pathless"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "Changing reported direct memory to12/13.5/16GiB leaves the same5,307.25MiB request failing in all three diagnostic arms. The engine grows its own pools; this is not a host-RAM measurement or a recommendation to change the constant. Console value/accounting cause remain unknown.",
  "zh": "把报告的direct memory改为12／13.5／16GiB，三组仍同一5307.25MiB请求失败，引擎自身池随之扩大。不是主机RAM测量，不建议改常量；主机值与记账原因仍未知。",
  "ar": "تغيير direct-memory المبلغ12/13.5/16GiB يبقي طلب5307.25MiB فاشلاً بكل الأذرع، تكبر مجمعات المحرك. ليس قياس RAM أو توصية تغيير ثابت؛ قيمة الكونسل/السبب مجهولان.",
  "pt": "Direct-memory reportada12/13,5/16GiB mantém pedido5307,25MiB falhado; pools crescem. Não mede RAM host nem recomenda mudar constante; valor console/causa abertos.",
  "de": "Gemeldeter Direktspeicher12/13,5/16GiB: Anfrage5307,25MiB scheitert stets, Enginepools wachsen. Kein Host-RAM-Test/Änderungsrat; Konsolenwert/Buchung offen.",
  "fr": "Mémoire directe annoncée12/13,5/16GiB : requête5307,25MiB échoue toujours, pools grandissent. Pas mesure RAM hôte/conseil de constante ; valeur console/cause inconnues.",
  "es": "Memoria directa declarada12/13,5/16GiB: petición5307,25MiB falla siempre, pools crecen. No mide RAM host ni aconseja constante; valor consola/causa desconocidos."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9606#discussioncomment-19149902"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10204"
  }
 ]
};

gameResearch["call-of-the-sea"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "Changing reported direct memory to12/13.5/16GiB leaves the same5,307.25MiB request failing in all three diagnostic arms. The engine grows its own pools; this is not a host-RAM measurement or a recommendation to change the constant. Console value/accounting cause remain unknown.",
  "zh": "把报告的direct memory改为12／13.5／16GiB，三组仍同一5307.25MiB请求失败，引擎自身池随之扩大。不是主机RAM测量，不建议改常量；主机值与记账原因仍未知。",
  "ar": "تغيير direct-memory المبلغ12/13.5/16GiB يبقي طلب5307.25MiB فاشلاً بكل الأذرع، تكبر مجمعات المحرك. ليس قياس RAM أو توصية تغيير ثابت؛ قيمة الكونسل/السبب مجهولان.",
  "pt": "Direct-memory reportada12/13,5/16GiB mantém pedido5307,25MiB falhado; pools crescem. Não mede RAM host nem recomenda mudar constante; valor console/causa abertos.",
  "de": "Gemeldeter Direktspeicher12/13,5/16GiB: Anfrage5307,25MiB scheitert stets, Enginepools wachsen. Kein Host-RAM-Test/Änderungsrat; Konsolenwert/Buchung offen.",
  "fr": "Mémoire directe annoncée12/13,5/16GiB : requête5307,25MiB échoue toujours, pools grandissent. Pas mesure RAM hôte/conseil de constante ; valeur console/cause inconnues.",
  "es": "Memoria directa declarada12/13,5/16GiB: petición5307,25MiB falla siempre, pools crecen. No mide RAM host ni aconseja constante; valor consola/causa desconocidos."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9606#discussioncomment-19149902"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10204"
  }
 ]
};

gameResearch["hot-shots-golf-2"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "The author’s22October edit updates PR states, explicitly not the11October FPS measurements. Several dependencies merged, but no current-main remeasurement proves60FPS. Closed-unmerged #1298/#1341 and open #1191/#1896 remain distinct from merged work.",
  "zh": "作者10月22日只更新PR状态，明确FPS仍属10月11日；若干依赖已合，但无当前main重测证明60 FPS。#1298／#1341关闭未合，#1191／#1896仍开放，与已合改动分开。",
  "ar": "تعديل22أكتوبر يحدّث PR لا FPS11أكتوبر؛ دمج بعض الاعتماديات لا يثبت60FPS main الحالي. #1298/#1341 مغلقة بلا دمج،#1191/#1896 مفتوحة.",
  "pt": "Edição22out muda estados PR, não FPS11out. Alguns integrados não provam60FPS main atual. #1298/#1341 fechados sem integrar,#1191/#1896 abertos.",
  "de": "22.Oktober nurPR-Status, FPS vom11. bleibenalt. Merges belegen keine60FPS auf aktuellemMain. #1298/#1341 ungemergtzu,#1191/#1896 offen.",
  "fr": "Édition22oct change PR, pasFPS11oct. Des fusions ne prouvent60FPS main actuel. #1298/#1341 fermés sansfusion,#1191/#1896 ouverts.",
  "es": "Edición22oct cambia PR, noFPS11oct. Fusiones no prueban60FPS main actual. #1298/#1341 cerrados sinfusionar,#1191/#1896 abiertos."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/3839"
  }
 ]
};

gameResearch["call-of-duty-black-ops"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "The unpinned Performance row now reports outdoor15–25 and split-screen5–10FPS. Its build and test date remain unspecified; the clean-main e072 row and earlier campaign claim retain their own older scope. Do not transfer these revised numbers to main or v0.1.3.",
  "zh": "未固定构建的Performance行现改为户外15–25、分屏5–10 FPS，构建／测试日仍未知；纯main e072行及旧campaign声明维持原边界，不把新数字套到main或v0.1.3。",
  "ar": "صف Performance غير مثبت:خارج15–25/split5–10FPS، البناء/تاريخ مجهولان. main e072 والحملة الأقدم يحتفظان بسياقهما، لا تعميمmain/v0.1.3.",
  "pt": "Linha Performance sempin:exterior15–25/split5–10FPS, build/data desconhecidos. Maine072/campanha antiga separados, não transferir para main/v0.1.3.",
  "de": "Ungepinnte Performancezeile draußen15–25/Splitscreen5–10FPS, Build/Testdatum offen. Maine072/alteKampagne getrennt, nichtMain/v0.1.3 zuordnen.",
  "fr": "Ligne Performance nonépinglée extérieur15–25/split5–10FPS, build/date inconnus. Maine072/anciennecampagne séparés, pastransfert main/v0.1.3.",
  "es": "Fila Performance sinpin exterior15–25/split5–10FPS, build/fecha desconocidos. Maine072/campaña antigua separados, no transferir main/v0.1.3."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/5389"
  }
 ]
};

gameResearch["ghost-of-yotei"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "New Linux village input proof belongs to the RX9060XT custom integration, not clean main. Later visual probes correct an earlier depth-test suspicion: forcing ALWAYS masks unshaded visibility-buffer bushes. Object/primitive-ID output is the current lead, with no posted fix validated yet; hull-leaf approximation remains local.",
  "zh": "Linux村庄输入证明属于RX9060XT定制集成，非纯main；后续图形探针纠正旧depth怀疑，强制ALWAYS只是遮住未着色visibility-buffer灌木。当前线索是object／primitive ID输出，尚无已发布验证修复，树叶hull近似仍属本地。",
  "ar": "دليل input القرية خاص بدمج9060XT لاmain. probes صححت فرضية depth:ALWAYS يخفي شجيرات visibility غير مظللة. object/primitiveID دليل حالي بلاfix معتمد، أوراقhull تقريب محلي.",
  "pt": "Input aldeia pertence à integração9060XT, não main. Probes corrigem suspeita depth:ALWAYS mascara arbustos visibility não sombreados. object/primitiveID é pista, semfix validado; hull folhas local.",
  "de": "Dorfsteuerung gehört9060XT-Komposition, nichtMain. Probes korrigieren Depthverdacht:ALWAYS übermalt ungeschatteteVisibilitybüsche. Object/Primitive-ID Spur ohnevalidiertenFix; Hullblätter lokal approximiert.",
  "fr": "Input village propre à intégration9060XT, pasmain. Probes corrigent soupçon depth:ALWAYS masque buissons visibility nonombrés. object/primitiveID piste sansfix validé ; feuilles hull approximées localement.",
  "es": "Input aldea pertenece a integración9060XT, nomain. Probes corrigen sospecha depth:ALWAYS oculta arbustos visibility sinsombrear. object/primitiveID pista sinfix validado; hojas hull aproximadas localmente."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19135126"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19146133"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19146442"
  }
 ]
};

gameResearch["apotris-homebrew"]={
 "checked": "2026-10-24",
 "edition": {
  "en": "Match the exact PS5 package and tested source tree.",
  "zh": "核对准确PS5包与实测源码树。",
  "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة.",
  "pt": "Confirme pacote PS5 e árvore testada.",
  "de": "PS5-Paket und getesteten Quellstand abgleichen.",
  "fr": "Vérifiez paquet PS5 et source testée.",
  "es": "Comprueba paquete PS5 y código probado."
 },
 "finding": {
  "en": "Apotris’s pathconf stub is converted to UD2 with --trap-sdk-syscall-stubs; tested runs never call it. #10219 proposes routing exact recognized wrappers to existing exports, but error conventions and supported scope are unresolved. Conversion success does not implement FreeBSD syscalls or certify general safety, and the current flag remains for debugging.",
  "zh": "Apotris的pathconf stub经--trap-sdk-syscall-stubs改为UD2，本次运行未调用；#10219只提议把精确认出的wrapper路由到已有export，错误约定及支持范围未决。转换成功不实现FreeBSD syscall或证明通用安全，此flag仍限调试。",
  "ar": "Apotris pathconf يصبحUD2 بالflag ولم يستدعَ. #10219 يقترح route wrappers دقيقة إلىexports، convention/نطاق مفتوحان. التحويل ليس تنفيذsyscalls أوسلامةعامة؛ flag debugging.",
  "pt": "Apotris pathconf viraUD2 e não foi chamado. #10219 propõe routing wrappers exatos paraexports, erros/âmbito abertos. Converter não implementa syscalls/segurança geral; flag debugging.",
  "de": "Apotris-pathconf wirdUD2, nieaufgerufen. #10219 schlägt Routing exakterWrapper aufExports vor, Fehlerkonvention/Umfang offen. Konvertieren implementiert keineSyscalls/Allgemeinsicherheit; Flag nurDebug.",
  "fr": "Apotris-pathconf devientUD2, jamaisappelé. #10219 propose routage wrappers exacts vers exports, erreurs/périmètre ouverts. Conversion pasimplémentation syscalls/sûreté générale ; flag debugging.",
  "es": "Apotris-pathconf pasaUD2, nuncallamado. #10219 propone routing wrappers exactos aexports, errores/alcance abiertos. Convertir noimplementa syscalls/seguridadgeneral; flag debugging."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10209"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/10219"
  }
 ]
};

gameResearch["vice-city-definitive"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "With missing PlayGo chunks reported absent, one manually stopped run lasts over three minutes without OOM. Vulkan starts, but no scene, controls or FPS are documented here. Exact main-era build is unpinned; earlier private arena experiments are separate. A separate v1.113 dump reaches loading, then seven queue-0x20 waits precede the 120s RenderThread watchdog around 600s. DRAIN_ALL adds 716s without those timeouts and shows a loading cinematic with audio below 1 FPS. This costly diagnostic is not a correctness fix or proven gameplay.",
  "zh": "缺失PlayGo块按absent回答后，一次运行超过三分钟、手动结束且无OOM。Vulkan启动，但本条未记录场景、操作或FPS；main时期构建未固定，早期私有内存实验另列。 另一份v1.113包加载时出现七次queue-0x20等待超时，约600秒被120秒RenderThread看门狗终止。DRAIN_ALL追加716秒无此超时，片头有声音但不足1 FPS；仅昂贵诊断，不是正确性修复或已证游玩。",
  "ar": "مع absent لبيانات PlayGo المفقودة استمر تشغيل واحد أكثر من ثلاث دقائق بلا OOM ثم أوقف يدوياً. لا مشهد أو تحكم أو FPS موثق؛ البناء غير مثبت وتجارب الذاكرة الخاصة منفصلة. نسخة v1.113 أخرى تتوقف قرب600ث بعد سبع مهلات انتظار. DRAIN_ALL يضيف716ث بلا تلك المهلات مع فيلم تحميل وصوت بأقل من1FPS؛ تشخيص مكلف لا إصلاح أو لعب مثبت.",
  "pt": "Com PlayGo ausente, uma execução ultrapassa três minutos sem OOM e termina manualmente. Vulkan inicia, sem cena, comandos ou FPS documentados. Build não fixada; experiências privadas de memória separadas. Outro pacote v1.113 para perto de600s após sete timeouts. DRAIN_ALL acrescenta716s sem esses timeouts, com cinemática e som abaixo de1FPS. Diagnóstico dispendioso, sem prova de correção ou jogo.",
  "de": "Mit absent für fehlende PlayGo-Daten läuft ein Versuch über drei Minuten ohne OOM bis zum manuellen Ende. Szene, Steuerung und FPS fehlen; genauer Main-Build unbekannt, private Speicherexperimente getrennt. Ein anderer v1.113-Dump stoppt um600s nach sieben Wartezeitüberschreitungen. DRAIN_ALL bringt weitere716s mit Ladefilm/Ton unter1FPS; teure Diagnose, kein Korrektheitsfix oder Spielbeleg.",
  "fr": "Avec PlayGo absent, un essai dépasse trois minutes sans OOM puis est arrêté manuellement. Vulkan démarre, sans scène, commandes ni FPS documentés. Build non fixé ; expériences mémoire privées séparées. Un autre paquet v1.113 s’arrête vers600s après sept délais dépassés. DRAIN_ALL ajoute716s sans ces délais, avec cinématique et son sous1FPS ; diagnostic coûteux, pas un correctif ni du jeu validé.",
  "es": "Con PlayGo ausente, una ejecución supera tres minutos sin OOM y termina manualmente. Vulkan inicia, sin escena, controles ni FPS documentados. Build sin fijar; experimentos privados de memoria separados. Otro paquete v1.113 para hacia600s tras siete timeouts. DRAIN_ALL añade716s sin esos timeouts, con cinemática y audio por debajo de1FPS. Diagnóstico costoso, sin prueba de corrección ni juego."
 },
 "edition": {
  "en": "The run identifies PPSA03530. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
  "zh": "报告标识PPSA03530；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
  "ar": "التقرير يحدد PPSA03530؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
  "pt": "Relato identifica PPSA03530; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
  "de": "Bericht nennt PPSA03530; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
  "fr": "Rapport identifie PPSA03530 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
  "es": "Relato identifica PPSA03530; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10520#discussioncomment-19168389"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/6558#issuecomment-6388570218"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://store.playstation.com/en-ca/concept/10003551"
  }
 ]
};

gameResearch["far-changing-tides"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Scripted swimming reaches the flooded village surface in a 380s run; exit0, but no separate input-ack log. Audio, later play and console lighting match unverified. Open #6782/#6913 composition, validation on and caches off; redirected output supports no FPS gain. Same pinned warm build: stationary underwater windows count138/10.024s and144/10.046s, not a speed comparison. The larger-buffer repeat drops no events, but one of seven focus samples changes and other host load is about12%. A separate checkpoint loads the surface once; no new analog progression or audio test.",
  "zh": "约380秒脚本游泳到淹没村庄水面、退出0，但无独立输入确认日志。声音、后续及主机光照对照未验；开放#6782／#6913组合、开验证关缓存，重定向日志不支持提速结论。 同一暖缓存构建的静止水下窗口为138／10.024秒及144／10.046秒，不是提速对照。扩容追踪无丢事件，但七次焦点采样一次偏离、外部负载约12%；另一次存档读到水面，无新增摇杆推进或声音验证。",
  "ar": "سباحة مبرمجة إلى سطح القرية خلال380ث وخروج0، بلا سجل مستقل لقبول الإدخال. الصوت والتقدم والإضاءة غير مثبتة؛ تركيب #6782/#6913 وسجل معاد، بلا ادعاء تسريع. نوافذ ثابتة للبناء الدافئ نفسه:138/10.024ث و144/10.046ث، لا مقارنة سرعة. التتبع الموسع بلا فقد مع تغير تركيز1/7 وحمل آخر≈12%. تحميل حفظ واحد إلى السطح، لا تقدم أو صوت جديد.",
  "pt": "Natação programada chega à superfície da aldeia em380s, saída0, sem confirmação de entrada separada. Som, progresso e luz comparada com consola por verificar; composição #6782/#6913, sem ganho FPS demonstrado. Build quente idêntica:138/10,024s e144/10,046s imóvel, sem comparação de ganho. Trace maior sem perdas, foco muda1/7 e carga externa≈12%. Um save carrega a superfície, sem novo movimento ou som.",
  "de": "Skriptbewegung erreicht die Dorfoberfläche in380s, Exit0, ohne separates Eingabeprotokoll. Ton, Folgespiel und Konsolenlicht offen; Kombination #6782/#6913 mit Validierung, kein FPS-Gewinn belegt. Gleicher warmer Build:138/10,024s und144/10,046s im Stand, kein Tempovergleich. Größere Spur ohne Verlust, Fokus1/7 abweichend, Fremdlast≈12%. Ein Save lädt die Oberfläche; keine neue Bewegung/Tonprüfung.",
  "fr": "Nage scriptée jusqu’à la surface du village en380s, sortie0, sans acquittement d’entrée distinct. Son, suite et éclairage console non vérifiés ; composition #6782/#6913, aucun gain FPS établi. Même build chaud :138/10,024s et144/10,046s immobile, pas de comparaison de gain. Trace élargie sans perte, focus divergent1/7 et charge externe≈12%. Un save charge la surface, sans nouveau mouvement ni son.",
  "es": "Natación por script hasta la superficie del pueblo en380s, salida0, sin confirmación de entrada separada. Audio, progreso y luz de consola sin verificar; composición #6782/#6913, sin ganancia FPS demostrada. Mismo build caliente:138/10,024s y144/10,046s inmóvil, sin comparar mejoras. Trace ampliado sin pérdidas, foco cambia1/7 y carga externa≈12%. Un save carga la superficie, sin movimiento o audio nuevo."
 },
 "edition": {
  "en": "The run identifies PPSA03766. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
  "zh": "报告标识PPSA03766；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
  "ar": "التقرير يحدد PPSA03766؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
  "pt": "Relato identifica PPSA03766; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
  "de": "Bericht nennt PPSA03766; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
  "fr": "Rapport identifie PPSA03766 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
  "es": "Relato identifica PPSA03766; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10445"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10445#discussioncomment-19163607"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://www.playstation.com/en-us/games/far--changing-tides/"
  }
 ]
};

gameResearch["darkest-dungeon-ii"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Scripted party selection, coach travel, first battle victory and road-event rewards work; the second battle reaches Round2 before script timing drifts. Window counters: road16–29, combat27–38 FPS. One startup crash in about19 runs, cause unknown. Audio/full campaign untested; redirected 4K trace is diagnostic.",
  "zh": "脚本完成选队、马车行驶、首战胜利及路途事件奖励；第二战到第2回合后脚本时序漂移。窗口计数道路16–29、战斗27–38 FPS；约19次中一次启动崩溃、原因未知。声音／全流程未验，4K重定向追踪仅诊断。",
  "ar": "السكربت ينجز الفريق والعربة وأول فوز ومكافأة حدث؛ المعركة الثانية إلى الجولة2 ثم ينحرف التوقيت. الطريق16–29 والقتال27–38FPS؛ عطل بدء1/نحو19، الصوت والحملة غير مختبرين، تتبع4K تشخيصي.",
  "pt": "Script completa equipa, estrada, primeira vitória e evento; segunda batalha chega à ronda2 antes de o timing divergir. Estrada16–29, combate27–38FPS; um crash inicial em≈19. Som/campanha não testados; trace4K diagnóstico.",
  "de": "Skript schafft Team, Fahrt, ersten Sieg und Ereignisbelohnung; zweiter Kampf bis Runde2, dann Zeitdrift. Straße16–29/Kampf27–38FPS; ein Startcrash in≈19. Ton/Kampagne offen, 4K-Spur diagnostisch.",
  "fr": "Script valide équipe, route, première victoire et récompense ; second combat jusqu’au tour2 puis dérive du script. Route16–29/combat27–38FPS ; un crash initial sur≈19. Son/campagne non vérifiés, trace4K diagnostique.",
  "es": "Script completa equipo, viaje, primera victoria y evento; segunda batalla hasta ronda2 antes de desajustarse. Carretera16–29/combate27–38FPS; un crash inicial en≈19. Audio/campaña sin probar, trace4K diagnóstico."
 },
 "edition": {
  "en": "The run identifies PPSA19591. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras. Artwork lists regional package PPSA19590, different from the tested package. The cover advertises Oblivion Edition; tested DLC/edition contents are not established.",
  "zh": "报告标识PPSA19591；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。 配图列出另一地区包PPSA19590，与报告包不同。 封面标有Oblivion Edition，不证明实测DLC或版本内容。",
  "ar": "التقرير يحدد PPSA19591؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة. الصورة تسمي حزمة إقليمية مختلفة PPSA19590. الغلاف Oblivion Edition لا يثبت DLC أو محتوى النسخة المختبرة.",
  "pt": "Relato identifica PPSA19591; confira versão/executável/host/alterações. Arte promocional não prova extras testados. Arte lista pacote regional distinto PPSA19590. Capa Oblivion Edition não prova DLC/conteúdo testado.",
  "de": "Bericht nennt PPSA19591; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras. Bild nennt anderes Regionalpaket PPSA19590. Oblivion-Edition-Cover belegt kein getestetes DLC/Edition.",
  "fr": "Rapport identifie PPSA19591 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés. Image nomme un autre paquet régional PPSA19590. Couverture Oblivion Edition ne prouve pas DLC/contenu testé.",
  "es": "Relato identifica PPSA19591; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados. Imagen identifica otro paquete regional PPSA19590. Portada Oblivion Edition no prueba DLC/contenido probado."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10413#discussioncomment-19163219"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://www.playstation.com/en-us/games/darkest-dungeon-2/"
  }
 ]
};

gameResearch["final-fantasy-resonance"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Difficulty selection and crystal-legend opening cinematic, no gameplay. Title≈6/cinematic1.6 FPS; 460s exits0 after4.53million refused imports. The actual game executable differs from the dump’s launcher. Audio and validation unverified; one redirected-log diagnostic, not a benchmark. Same-base candidate gets further into the cinematic, title26–31/cinematic12–15 FPS; zero refused imports but2474 failed imports remain. One460s run per arm with redirected output supports budget-policy diagnosis, not formal speedup, gameplay or safety across titles.",
  "zh": "到难度选择及水晶传说片头，未到游玩；标题约6、片头1.6 FPS，460秒退出0、拒绝导入453万次。游戏程序与包内启动器不同；声音及验证未验，单次重定向诊断不是基准。 同基候选片头推进更远，标题26–31、片头12–15 FPS；拒绝为0，仍有2474次导入失败。每组仅一次460秒、日志重定向，仅支持预算策略诊断，不证明规范提速、游玩或跨游戏安全。",
  "ar": "اختيار صعوبة وفيلم البلورات دون لعب؛ العنوان≈6 والفيلم1.6FPS،460ث وخروج0 مع4.53مليون رفض. برنامج اللعبة غير المشغل؛ الصوت والتحقق غير مثبتين، تجربة تشخيصية واحدة. المرشح على القاعدة نفسها يتقدم في الفيلم، العنوان26–31 والفيلم12–15FPS؛ صفر رفض لكن2474فشلاً. تشغيل460ث لكل طرف بسجل معاد، تشخيص لا تسريع رسمي أو لعب أو سلامة عامة.",
  "pt": "Escolha de dificuldade e filme dos cristais, sem jogo; título≈6/filme1,6FPS,460s saída0 e4,53milhões de recusas. Executável real difere do launcher; som/validação não verificados, diagnóstico único. Candidato na mesma base avança no filme, título26–31/filme12–15FPS; zero recusas mas2474falhas. Uma execução460s por braço, logs redirecionados: diagnóstico, não ganho formal/jogo/segurança geral.",
  "de": "Schwierigkeit und Kristallintro, kein Spiel; Titel≈6/Film1,6FPS,460s Exit0 mit4,53Mio Importablehnungen. Spielprogramm ist nicht der Launcher; Ton/Validierung offen, einzelne Diagnose. Kandidat gleicher Basis kommt im Film weiter, Titel26–31/Film12–15FPS; keine Ablehnungen,2474Fehler bleiben. Je ein460s-Lauf mit umgeleitetem Log, kein formaler Tempo-/Spiel-/Sicherheitsbeleg.",
  "fr": "Difficulté puis film des cristaux, sans jeu ; titre≈6/film1,6FPS,460s sortie0 et4,53millions de refus. Exécutable réel distinct du lanceur ; son/validation non vérifiés, diagnostic unique. Candidat de même base avance dans le film, titre26–31/film12–15FPS ; aucun refus mais2474échecs. Un essai460s par bras, sortie redirigée : diagnostic, pas gain formel/jeu/sûreté générale.",
  "es": "Dificultad y película de cristales, sin juego; título≈6/película1,6FPS,460s salida0 y4,53millones de rechazos. Ejecutable real distinto del launcher; audio/validación sin verificar, diagnóstico único. Candidato con misma base avanza en película, título26–31/película12–15FPS; cero rechazos pero2474fallos. Un ensayo460s por brazo, salida redirigida: diagnóstico, no mejora formal/juego/seguridad general."
 },
 "edition": {
  "en": "The run identifies PPSA31544. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras. The source page mixes standard/deluxe PPSA31544 and demo PPSA36303; its image does not identify the tested edition.",
  "zh": "报告标识PPSA31544；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。 资料页同时列标准／豪华PPSA31544和试玩PPSA36303，图片不识别实测版本。",
  "ar": "التقرير يحدد PPSA31544؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة. الصفحة تجمع standard/deluxe31544 وdemo36303؛ الصورة لا تحدد النسخة المختبرة.",
  "pt": "Relato identifica PPSA31544; confira versão/executável/host/alterações. Arte promocional não prova extras testados. Página mistura standard/deluxe31544/demo36303; imagem não identifica edição testada.",
  "de": "Bericht nennt PPSA31544; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras. Seite mischt Standard/Deluxe31544/Demo36303; Bild identifiziert keine Testedition.",
  "fr": "Rapport identifie PPSA31544 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés. Page mélange standard/deluxe31544/demo36303 ; image ne fixe pas l’édition testée.",
  "es": "Relato identifica PPSA31544; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados. Página mezcla estándar/deluxe31544/demo36303; imagen no identifica edición probada."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10567"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6383572256"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://www.playstation.com/en-us/games/final-fantasy-resonance/"
  }
 ]
};

gameResearch["ghostwire-tokyo"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Cold brightness setup by330s; warm main menu by200s and Licenses until600s. Two of five warm runs abort near50s on write-watch storage; a separate265s run hits UE’s120s render-thread watchdog. No gameplay or audio check. Loaded files and unused throwing stubs are not proven causes.",
  "zh": "冷启动330秒到亮度设置，暖启动200秒到主菜单、Licenses可停600秒；五次暖启动两次约50秒write-watch拒绝，另一次265秒触发UE的120秒看门狗。未验游玩／声音，文件加载或未调用stub不等于原因。",
  "ar": "إعداد السطوع330ث بارداً وقائمة200ث دافئاً، Licenses حتى600ث. توقف2/5قرب50ث ورفض write-watch، وتشغيل آخر عند265ث بمهلة UE120ث. لا لعب أو صوت مثبت أو سبب من stubs غير مستدعاة.",
  "pt": "Brilho aos330s a frio; menu200s quente e Licenses até600s. Dois de cinco param≈50s no write-watch; outro aos265s por watchdog UE120s. Sem jogo/som testados; stubs não chamados não provam causa.",
  "de": "Kalt Helligkeit330s, warm Menü200s/Lizenzen600s. Zwei von fünf warmen Läufen stoppen≈50s an Write-Watch, ein anderer265s am UE120s-Watchdog. Kein Spiel/Tontest; unaufgerufene Stubs kein Ursachenbeleg.",
  "fr": "Réglage luminosité330s à froid, menu200s à chaud/Licenses600s. Deux sur cinq arrêtent≈50s sur write-watch, un autre265s au watchdog UE120s. Pas de jeu/son vérifiés ; stubs non appelés pas une cause prouvée.",
  "es": "Brillo330s en frío, menú200s caliente/Licenses600s. Dos de cinco paran≈50s en write-watch, otro265s por watchdog UE120s. Sin juego/audio comprobados; stubs no llamados no prueban causa."
 },
 "edition": {
  "en": "The run identifies PPSA01337. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
  "zh": "报告标识PPSA01337；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
  "ar": "التقرير يحدد PPSA01337؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
  "pt": "Relato identifica PPSA01337; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
  "de": "Bericht nennt PPSA01337; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
  "fr": "Rapport identifie PPSA01337 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
  "es": "Relato identifica PPSA01337; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10471"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://www.playstation.com/en-us/games/ghostwire-tokyo/"
  }
 ]
};

gameResearch["lost-in-play"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Null call shortly after missing PS5Util and IL2CPP guest-module loads, before meaningful GPU work. The causal explanation was initially a hypothesis; this record preserves the original failing setup. A later module-conversion follow-up is separate. Original reporter confirms in-game after relinking Media/Modules and Media/Plugins. Follow-up does not restate the runtime commit, FPS, scene, duration, audio or save tests. A different author’s v0.1.3/RTX5080≈60FPS claim has no stated OS and is not assigned to this host.",
  "zh": "未转换PS5Util／IL2CPP模块加载失败后不久空地址调用，GPU尚未实际展开。最初因果解释仅假说；本条保留原失败设置，后续转换模块后的结果另列。 原作者确认补转Media/Modules及Media/Plugins后进入游戏；未重述运行时提交、FPS、场景、时长或声音／存档测试。另一作者的v0.1.3／RTX5080约60 FPS未说明系统，不挪到本机。",
  "ar": "نداء null بعد فشل تحميل وحدتي PS5Util/IL2CPP وقبل عمل GPU مهم. السبب كان فرضية؛ هذا سجل الإعداد الفاشل، والمتابعة بعد التحويل منفصلة. المبلغ الأصلي يؤكد دخول اللعبة بعد تحويل مجلدي Media. لا يحدد commit أو FPS أو مشهداً أو مدة أو صوتاً/حفظاً؛ ادعاء مؤلف آخر v0.1.3/RTX5080≈60FPS بلا نظام، فلا ينسب لهذا المضيف.",
  "pt": "Chamada null após falhas de módulos PS5Util/IL2CPP, antes de trabalho GPU relevante. Causa inicial hipotética; preserva-se configuração falhada, seguimento após conversão separado. Autor original confirma jogo após converter as duas pastas Media. Não repete commit/FPS/cena/duração/som/saves. Outro relato v0.1.3/RTX5080≈60FPS não informa SO e não pertence a este host.",
  "de": "Null-Aufruf nach fehlenden PS5Util/IL2CPP-Modulen vor wesentlicher GPU-Arbeit. Ursache anfangs Hypothese; ursprünglicher Fehler bleibt, Nachtest mit Modulen getrennt. Ursprungsautor bestätigt Spiel nach Konvertierung beider Media-Ordner. Commit/FPS/Szene/Dauer/Ton/Save nicht erneut angegeben. Anderer v0.1.3/RTX5080≈60FPS-Bericht ohne OS wird diesem Host nicht zugeordnet.",
  "fr": "Appel null après échec des modules PS5Util/IL2CPP avant travail GPU notable. Cause initialement hypothétique ; échec conservé, suivi après conversion séparé. Auteur initial confirme le jeu après conversion des deux dossiers Media. Commit/FPS/scène/durée/son/saves non précisés. Autre récit v0.1.3/RTX5080≈60FPS sans OS, non attribué à cet hôte.",
  "es": "Llamada null tras fallos de módulos PS5Util/IL2CPP antes de trabajo GPU relevante. Causa inicial hipotética; fallo original conservado, seguimiento tras convertir separado. Autor original confirma juego tras convertir ambas carpetas Media. No repite commit/FPS/escena/duración/audio/saves. Otro relato v0.1.3/RTX5080≈60FPS no indica SO y no se atribuye a este host."
 },
 "edition": {
  "en": "The run identifies PPSA22116. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
  "zh": "报告标识PPSA22116；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
  "ar": "التقرير يحدد PPSA22116؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
  "pt": "Relato identifica PPSA22116; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
  "de": "Bericht nennt PPSA22116; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
  "fr": "Rapport identifie PPSA22116 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
  "es": "Relato identifica PPSA22116; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/10383"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/10383#issuecomment-6388479429"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://store.playstation.com/en-us/concept/10009877"
  }
 ]
};

gameResearch["the-king-is-watching"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Intermittent in-game null/invalid guest access is followed by uncommitted-page/storage failures. Reporter reproduces it on aca451 as well as the original b4caf build. Trigger, frequency and duration are unknown; later AGC errors are not established as the first fault’s cause.",
  "zh": "游戏中偶发无效guest访问，随后出现未提交页／storage失败；作者确认aca451仍复现原b4caf问题。触发动作、频率、时长未知，后续AGC错误不等于首个故障原因。",
  "ar": "دخول اللعبة مع وصول guest خاطئ متقطع ثم أخطاء صفحات/storage. يتكرر على aca451 مثل b4caf؛ المحفز والتواتر والمدة مجهولة، والأخطاء اللاحقة ليست سبباً مثبتاً للأول.",
  "pt": "Jogo com acesso guest inválido intermitente, seguido de falhas de páginas/storage. Reproduz em aca451 e b4caf; ação/frequência/duração desconhecidas, erros posteriores não provam causa inicial.",
  "de": "Im Spiel sporadischer ungültiger Guest-Zugriff, danach Seiten-/Storagefehler. Auf aca451 wie b4caf reproduziert; Auslöser/Häufigkeit/Dauer offen, spätere AGC-Fehler keine bewiesene Erstursache.",
  "fr": "Accès guest invalide intermittent en jeu, puis erreurs pages/storage. Reproduit sur aca451 comme b4caf ; déclencheur/fréquence/durée inconnus, erreurs suivantes pas une cause initiale prouvée.",
  "es": "Acceso guest inválido intermitente en juego, seguido de fallos de páginas/storage. Reproduce en aca451 y b4caf; acción/frecuencia/duración desconocidas, errores posteriores no prueban causa inicial."
 },
 "edition": {
  "en": "The run identifies PPSA34959. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
  "zh": "报告标识PPSA34959；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
  "ar": "التقرير يحدد PPSA34959؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
  "pt": "Relato identifica PPSA34959; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
  "de": "Bericht nennt PPSA34959; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
  "fr": "Rapport identifie PPSA34959 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
  "es": "Relato identifica PPSA34959; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/10377#issuecomment-6373976366"
  },
  {
   "label": "Publisher identity and promotional artwork",
   "url": "https://store.playstation.com/en-us/concept/10017931"
  }
 ]
};

gameResearch["bugsnax"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Candidate #10515 reaches rainy opening first-person scene and visible hands by260s;272s exits0, about17–20FPS in that scene. Which scripted button started play is unknown. No verified movement, audio, save or later progression; tested main base/version not restated. Author completes the opening tutorial, catches a Strabby and feeds Filbo after #10581 on #10515. Earlier bridge cutscene hit a stale alpha-to-coverage register refusal. Zero validation errors reported, but exact base/heads, content version, FPS and total duration are unstated.",
  "zh": "#10515候选260秒到雨中第一人称片头及双手，272秒退出0、该场景约17–20 FPS。未确定哪个脚本按键推进；未验移动、声音、存档或后续，main基点／内容版本未重述。 作者报告#10515叠#10581后通过桥梁过场，完成捕Strabby及喂Filbo教程；此前转单采样仍留alpha-to-coverage状态而拒绝。报告验证错误0，但精确基点／head、版本、FPS和总时长未给。",
  "ar": "مرشح #10515 يصل مشهد البداية واليدين260ث؛ خروج0 عند272ث≈17–20FPS. زر البدء غير محسوم؛ الحركة/الصوت/الحفظ/ما بعده غير مثبتة والقاعدة والنسخة غير مذكورتين. المؤلف يكمل درس Strabby وإطعام Filbo بعد #10581 فوق #10515؛ رفض سابق عند الجسر. يبلغ صفر أخطاء تحقق، لكن القاعدة والرؤوس والنسخة وFPS والمدة غير مذكورة.",
  "pt": "Candidato #10515 chega à abertura e mãos aos260s;272s saída0,≈17–20FPS. Botão que iniciou não identificado; movimento/som/save/progresso abertos, base/versão não repetidas. Autor completa tutorial Strabby/Filbo com #10581 sobre #10515; transição da ponte antes recusava. Relata zero erros de validação, sem base/heads/versão/FPS/duração exatos.",
  "de": "Kandidat #10515 zeigt Regenintro und Hände bis260s;272s Exit0,≈17–20FPS. Startknopf unklar; Bewegung/Ton/Save/Folge offen, Main-Basis/Version nicht erneut genannt. Autor beendet Strabby-/Filbo-Tutorial mit #10581 auf #10515; zuvor Verweigerung am Brückenfilm. Null Validierungsfehler gemeldet, genaue Basis/Heads/Version/FPS/Dauer fehlen.",
  "fr": "Candidat #10515 montre pluie et mains à260s ;272s sortie0,≈17–20FPS. Bouton de lancement incertain ; mouvement/son/save/suite ouverts, base/version non reprécisées. Auteur termine tutoriel Strabby/Filbo avec #10581 sur #10515 ; ancien refus au film du pont. Zéro erreur de validation annoncé, base/heads/version/FPS/durée non précisés.",
  "es": "Candidato #10515 muestra lluvia y manos a260s;272s salida0,≈17–20FPS. Botón de inicio incierto; movimiento/audio/save/progreso abiertos, base/versión sin repetir. Autor completa tutorial Strabby/Filbo con #10581 sobre #10515; antes rechazo en cinemática del puente. Informa cero errores de validación, sin base/heads/versión/FPS/duración exactos."
 },
 "edition": {
  "en": "Reported PS5 package PPSA01503; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA01502, not this tested package.",
  "zh": "报告PS5包PPSA01503；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA01502，不用于认定本次测试包。",
  "ar": "حزمة PS5 PPSA01503؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA01502 لا الحزمة المختبرة.",
  "pt": "Pacote PS5 PPSA01503; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA01502, não o teste.",
  "de": "PS5-Paket PPSA01503; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA01502, nicht des Tests.",
  "fr": "Paquet PS5 PPSA01503 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA01502, pas cet essai.",
  "es": "Paquete PS5 PPSA01503; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA01502, no de esta prueba."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9900#discussioncomment-19161527"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9900#discussioncomment-19165799"
  }
 ]
};

gameResearch["coffee-talk"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Main6cd36 with both Media module directories converted reaches profile creation and story/portraits/shop at about112FPS, with audio by author report. Options confirms the name. No duration, save reload or completion evidence; this does not validate every Unity null-call diagnosis.",
  "zh": "main6cd36补转两个Media模块目录后到建档、剧情／立绘／咖啡店，作者报告约112 FPS及声音；Options确认名字。未给时长、存档重载或通关证据，不能推广为所有Unity空调用的诊断。",
  "ar": "Main6cd36 مع مجلدي Media المحولين يصل إنشاء الملف والحوار/المقهى≈112FPS وصوت حسب المؤلف. Options يؤكد الاسم؛ لا مدة/إعادة حفظ/إكمال، وليس تشخيصاً لكل Unity.",
  "pt": "Main6cd36 com ambas pastas Media convertidas chega a perfil/diálogo/café≈112FPS e som segundo autor. Options confirma nome; duração/save/fim desconhecidos, sem diagnóstico geral Unity.",
  "de": "Main6cd36 mit beiden konvertierten Media-Ordnern bis Profil/Dialog/Café≈112FPS und Ton laut Autor. Options bestätigt Namen; Dauer/Save/Ende offen, kein allgemeiner Unity-Befund.",
  "fr": "Main6cd36 avec les deux dossiers Media convertis atteint profil/dialogue/café≈112FPS et son selon l’auteur. Options confirme le nom ; durée/save/fin inconnus, pas un diagnostic Unity général.",
  "es": "Main6cd36 con ambas carpetas Media convertidas llega a perfil/diálogo/café≈112FPS y audio según autor. Options confirma nombre; duración/save/final desconocidos, sin diagnóstico general Unity."
 },
 "edition": {
  "en": "Reported PS5 package PPSA07057; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA07056, not this tested package.",
  "zh": "报告PS5包PPSA07057；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA07056，不用于认定本次测试包。",
  "ar": "حزمة PS5 PPSA07057؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA07056 لا الحزمة المختبرة.",
  "pt": "Pacote PS5 PPSA07057; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA07056, não o teste.",
  "de": "PS5-Paket PPSA07057; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA07056, nicht des Tests.",
  "fr": "Paquet PS5 PPSA07057 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA07056, pas cet essai.",
  "es": "Paquete PS5 PPSA07057; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA07056, no de esta prueba."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/9956#discussioncomment-19165010"
  }
 ]
};

gameResearch["worms-armageddon-anniversary"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Main including #10172 passes the former2s NetCtl stop and presents menus. Loaded audio assets and a connected XInput controller do not prove audible playback or an actual match. No FPS, duration or content version restated.",
  "zh": "含#10172的main越过原2秒NetCtl停止并呈现菜单；加载声音资源及检测XInput手柄不证明实际声音或对战。FPS、时长、内容版本未重述。",
  "ar": "Main مع #10172 يتجاوز توقف NetCtl عند2ث ويعرض قوائم. تحميل الصوت واتصال XInput لا يثبتان السماع أو مباراة؛ FPS والمدة والنسخة غير مذكورة.",
  "pt": "Main com #10172 passa o antigo NetCtl2s e mostra menus. Assets de som/XInput ligado não provam reprodução ou partida; FPS/duração/versão não repetidos.",
  "de": "Main mit #10172 passiert alten NetCtl-Stopp2s und zeigt Menüs. Audiodateien/XInput-Verbindung beweisen weder hörbaren Ton noch Partie; FPS/Dauer/Version fehlen.",
  "fr": "Main avec #10172 passe l’ancien arrêt NetCtl2s et présente les menus. Fichiers audio/XInput connecté ne prouvent ni son audible ni partie ; FPS/durée/version non reprécisés.",
  "es": "Main con #10172 supera antiguo NetCtl2s y presenta menús. Assets de audio/XInput conectado no prueban sonido ni partida; FPS/duración/versión sin repetir."
 },
 "edition": {
  "en": "Reported PS5 package PPSA20052; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
  "zh": "报告PS5包PPSA20052；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
  "ar": "حزمة PS5 PPSA20052؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
  "pt": "Pacote PS5 PPSA20052; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
  "de": "PS5-Paket PPSA20052; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
  "fr": "Paquet PS5 PPSA20052 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
  "es": "Paquete PS5 PPSA20052; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10082#discussioncomment-19164501"
  }
 ]
};

gameResearch["marvels-spider-man-2"]={
 "checked": "2026-10-25",
 "edition": {
  "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports. PPSA03016 01.004.003 is now identified by a Linux launch report. The separate PPSA08338 Windows reports use a different regional package/version.",
  "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。 现有Linux启动报告明确PPSA03016 01.004.003；另有Windows PPSA08338属于不同地区包／版本。",
  "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير. تقرير Linux يحددPPSA03016/01.004.003؛ Windows PPSA08338 حزمة/نسخة إقليمية أخرى.",
  "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos. Relatório Linux identificaPPSA03016/01.004.003; Windows PPSA08338 é outro pacote/versão.",
  "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version. Linuxbericht identifiziertPPSA03016/01.004.003; Windows PPSA08338 andere Region/Version.",
  "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison. Rapport Linux identifiePPSA03016/01.004.003 ; Windows PPSA08338 autre région/version.",
  "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes. Reporte Linux identificaPPSA03016/01.004.003; Windows PPSA08338 otra región/versión."
 },
 "finding": {
  "en": "Four input-driven runs stay black, then materialize≈8900 textures and exhaust16GB VRAM around265–290s; an external watchdog stops them. Raising key-scan size does not narrow the ReadFirstLane table. Overlapping guest ranges are not unique memory, and draft #7642 is not a verified fix.",
  "zh": "四次带输入运行一直黑屏，约265–290秒创建约8900纹理挤满16GB显存，被外部看门狗终止。增大key-scan不缩小ReadFirstLane表；guest重叠范围不能当独立内存，草案#7642未证修复。",
  "ar": "أربع تشغيلات سوداء تُنشئ≈8900نسيج وتملأ16GB قرب265–290ث حتى watchdog خارجي. زيادة key-scan لا تضيق ReadFirstLane؛ نطاقات متداخلة ليست ذاكرة فريدة، و#7642 ليس إصلاحاً مثبتاً.",
  "pt": "Quatro execuções pretas criam≈8900texturas e esgotam16GB aos265–290s, watchdog externo. Key-scan maior não estreita ReadFirstLane; intervalos sobrepostos não são memória única, #7642 sem fix provado.",
  "de": "Vier schwarze Läufe erzeugen≈8900Texturen, füllen16GB nach265–290s, externer Watchdog stoppt. Größerer Key-Scan verengt ReadFirstLane nicht; überlappende Bereiche keine eindeutige Speichermenge, #7642 kein Fixbeleg.",
  "fr": "Quatre essais noirs créent≈8900textures et saturent16GB vers265–290s, watchdog externe. Key-scan accru ne réduit pas ReadFirstLane ; plages chevauchées pas mémoire unique, #7642 non validé.",
  "es": "Cuatro ensayos negros crean≈8900texturas y llenan16GB hacia265–290s, watchdog externo. Key-scan mayor no reduce ReadFirstLane; rangos solapados no son memoria única, #7642 sin validar."
 },
 "nextTest": {
  "en": "Pin build, modules, settings and test date; repeat the relevant scene with controls, audio and saves. Keep diagnostic runs separate from compliant performance captures.",
  "zh": "固定构建、模块、设置与测试日期，复现相关场景并验证操作、声音与存档；诊断运行与规范性能采集分开。",
  "ar": "ثبّت البناء/الوحدات/الإعدادات/التاريخ وكرر المشهد والتحكم والصوت والحفظ. افصل التشخيص عن قياس الأداء.",
  "pt": "Fixe build/módulos/opções/data e repita cena/controlos/som/saves. Separe diagnóstico de medição.",
  "de": "Build/Module/Einstellungen/Datum festhalten, Szene/Steuerung/Ton/Saves prüfen. Diagnose und Leistungsmessung trennen.",
  "fr": "Fixez build/modules/réglages/date, répétez scène/contrôle/son/saves. Séparez diagnostic et mesures.",
  "es": "Fija build/módulos/ajustes/fecha y repite escena/control/audio/saves. Separa diagnóstico y medición."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10195#discussioncomment-19159312"
  }
 ]
};

gameResearch["hollow-knight-silksong"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Updated author report: #10547 removes the diagonal seam in menu and tut_01 on the780M. Exact tested candidate head/base and new FPS/duration are not restated; previous60FPS/three-minute evidence stays on its original main pin. Other-title checks are not universal RADV correctness.",
  "zh": "作者更新：#10547后780M菜单及tut_01斜缝消失；实际候选head／基点及新FPS／时长未重述，旧60 FPS／三分钟仍属原main。其他游戏抽查不证明全部RADV正确。",
  "ar": "تحديث المؤلف: #10547 يزيل الشق في القائمة/tut_01 على780M. الرأس والقاعدة وFPS/المدة الجديدة غير محددة؛ دليل60FPS/3د يبقى على Main القديم، لا صحة RADV عامة.",
  "pt": "Atualização: #10547 remove diagonal no menu/tut_01 da780M. Head/base/FPS/duração novos não repetidos;60FPS/3min continuam no pin antigo, sem correção RADV universal.",
  "de": "Update: #10547 entfernt Naht in Menü/tut_01 auf780M. Genaue Kandidatenpins/neue FPS/Dauer fehlen;60FPS/3min bleiben beim alten Main, keine allgemeine RADV-Korrektheit.",
  "fr": "Mise à jour : #10547 retire la diagonale menu/tut_01 sur780M. Pins/FPS/durée nouveaux non reprécisés ;60FPS/3min restent sur l’ancien main, pas validation RADV universelle.",
  "es": "Actualización: #10547 elimina diagonal menú/tut_01 en780M. Pins/FPS/duración nuevos sin repetir;60FPS/3min siguen en main anterior, sin corrección RADV universal."
 },
 "edition": {
  "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
  "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
  "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
  "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
  "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
  "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
  "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/726#discussioncomment-19141071"
  }
 ]
};

gameResearch["the-last-of-us-part-i"]={
 "checked": "2026-10-25",
 "edition": {
  "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports. Part I is the PS5 remake with Left Behind. The PS4 Remastered release and Part II Remastered are different executables, not interchangeable editions of this test.",
  "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。 Part I 是包含 Left Behind 的 PS5 重制作品。PS4 Remastered 与 Part II Remastered 是不同游戏的可执行文件，不能互换测试结论。",
  "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير. Part I إعادة تطوير لـPS5 تشمل Left Behind. إصدار Remastered على PS4 وPart II Remastered ملفان تنفيذيان مختلفان ولا تشملهما هذه التجربة.",
  "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos. Part I é a recriação PS5 com Left Behind. Remastered para PS4 e Part II Remastered têm executáveis distintos e não partilham este teste.",
  "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version. Part I ist das PS5-Remake mit Left Behind. PS4 Remastered und Part II Remastered sind andere Programme; Testergebnisse sind nicht austauschbar.",
  "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison. Part I est le remake PS5 avec Left Behind. Remastered sur PS4 et Part II Remastered sont des exécutables distincts, sans résultats interchangeables.",
  "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes. Part I es el remake PS5 con Left Behind. Remastered para PS4 y Part II Remastered son ejecutables distintos y sus resultados no son intercambiables."
 },
 "finding": {
  "en": "Clean main is killed by host OOM around115s despite raised24GiB GTT. Five actual import failures are invalid-handle; remaining refusals are the unchanged12288MiB budget, not a lowered ceiling. Oversized views exceed guest allocations; stale descriptors remain a hypothesis, not a proved huge real resource. Local hacks and two PRs reach correctly rendered title/main menu in10min at0.2–0.6FPS, one transient magenta band. Large views are dropped or clamped, so this is not a correct general fix, stock-main result or gameplay. Memory figures apply only to this altered build/24GiB GTT setup.",
  "zh": "干净main虽把GTT加到24GiB仍约115秒被主机OOM杀死；仅五次真实导入失败为invalid-handle，其余是未降低的12288MiB预算拒绝。异常视图超出guest分配，旧descriptor仍仅假说，不能当真实巨型资源。 本地hack加两PR在10分钟、0.2–0.6 FPS到正确标题／主菜单，出现一次短暂洋红条。丢弃或截断大视图，非正确通用修复、原版main或游玩；内存数字仅此改造／24GiB GTT环境。",
  "ar": "Main نظيف يقتله OOM≈115ث رغم GTT24GiB. خمس حالات invalid-handle فقط والباقي سقف12288MiB غير مخفض. Views تتجاوز تخصيص guest؛ descriptors قديمة فرضية لا موارد ضخمة مثبتة. Hacks محلية وPRان تصل عنوان/قائمة10د عند0.2–0.6FPS مع شريط وردي عابر. Views كبيرة تحذف/تقص؛ لا إصلاح عام صحيح أو Main نظيف أو لعب، وأرقام الذاكرة تخص هذا التركيب.",
  "pt": "Main limpa morta por OOM≈115s mesmo com GTT24GiB. Cinco invalid-handle reais, resto orçamento12288MiB não reduzido. Views excedem alocações; descriptor antigo hipótese, não recurso gigante provado. Hacks locais/dois PR chegam título/menu10min a0,2–0,6FPS, uma faixa magenta transitória. Views descartadas/cortadas: não fix geral correto/main limpa/jogo; memória só desta composição.",
  "de": "Sauberes Main Host-OOM≈115s trotz24GiB GTT. Nur fünf Invalid-handle, Rest unverändertes12288MiB-Budget. Views überschreiten Guest-Allokationen; alte Deskriptoren Hypothese, keine echten Riesenressourcen belegt. Lokale Hacks/zwei PRs bis Titel/Menü10min bei0,2–0,6FPS, kurz Magentastreifen. Große Views verworfen/gekappt: kein korrekter allgemeiner Fix/Stock-Main/Spielbeleg; Speicher nur dieses Setup.",
  "fr": "Main propre tué par OOM≈115s malgré GTT24GiB. Cinq invalid-handle réels, reste plafond12288MiB inchangé. Views hors allocation ; descriptors périmés hypothétiques, pas ressources géantes prouvées. Hacks locaux/deux PR atteignent titre/menu10min à0,2–0,6FPS, bande magenta transitoire. Views supprimées/limitées : pas correctif général correct/main propre/jeu ; mémoire propre à ce montage.",
  "es": "Main limpio muere por OOM≈115s pese GTT24GiB. Cinco invalid-handle reales, resto presupuesto12288MiB sin bajar. Views fuera de asignación; descriptors viejos hipótesis, no recursos gigantes probados. Hacks locales/dos PR llegan título/menú10min a0,2–0,6FPS, franja magenta transitoria. Views descartadas/recortadas: no arreglo general correcto/main limpio/juego; memoria solo de este montaje."
 },
 "nextTest": {
  "en": "Pin the complete patch set and memory budget, replace descriptor/slice bypasses with validated behavior, then show a recognizable controllable scene. Test audio, saves and Left Behind separately. The local 24GiB GTT setting is not a general system requirement.",
  "zh": "固定完整补丁与内存预算，以经过验证的行为替代descriptor／slice绕过，再展示可辨认且可操作场景。声音、存档与Left Behind分别测试；本地24GiB GTT不是通用系统要求。",
  "ar": "ثبّت كل التعديلات والميزانية واستبدل تجاوزات descriptor/slice بسلوك مثبت، ثم أظهر مشهداً قابلاً للتحكم. اختبر الصوت والحفظ وLeft Behind منفصلة؛ 24GiB GTT المحلي ليس متطلباً عاماً.",
  "pt": "Fixe patches e memória, substitua bypasses de descriptor/slice por comportamento validado e mostre uma cena controlável. Teste som, saves e Left Behind à parte; 24GiB GTT local não é requisito geral.",
  "de": "Patchsatz und Speicherbudget festhalten, Deskriptor-/Slice-Bypässe durch geprüftes Verhalten ersetzen und steuerbare Szene zeigen. Ton, Saves und Left Behind separat; lokale 24GiB GTT sind keine allgemeine Anforderung.",
  "fr": "Fixez patchs et mémoire, remplacez les contournements descriptor/slice par un comportement validé et montrez une scène contrôlable. Son, saves et Left Behind séparés ; 24GiB GTT local n’est pas un prérequis général.",
  "es": "Fija patches y memoria, sustituye bypasses descriptor/slice por comportamiento validado y muestra escena controlable. Audio, saves y Left Behind aparte; 24GiB GTT local no es requisito general."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/9295#issuecomment-6382034776"
  },
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/issues/9295#issuecomment-6382729671"
  }
 ]
};

gameResearch["jumanji-ppsa03973"]={
 "checked": "2026-10-25",
 "finding": {
  "en": "Clean main reaches logos/legal screen, then stays there through180s at about3FPS. Fifteen invalid-handle failures lower the import ceiling; no gameplay or audio verified. This is v01.000.001 baseline evidence, separate from the older draft’s intermittent crashes.",
  "zh": "干净main到logo／法律页，180秒仍停此处、约3 FPS；15次invalid-handle失败压低导入预算。未验游玩／声音；此v01.000.001基线与旧草案偶发崩溃分开。",
  "ar": "Main نظيف يصل الشعارات/الشاشة القانونية ويبقى180ث≈3FPS؛15فشل invalid-handle تخفض السقف. لا لعب أو صوت مثبت؛ نسخة01.000.001 منفصلة عن أعطال المسودة القديمة.",
  "pt": "Main limpa chega a logos/legal e fica180s≈3FPS;15falhas invalid-handle baixam orçamento. Sem jogo/som verificados; versão01.000.001 separada dos crashes antigos.",
  "de": "Sauberes Main bis Logos/Rechtstext, bleibt180s≈3FPS;15Invalid-handle-Fehler senken Budget. Spiel/Ton offen; v01.000.001 getrennt von alten Draft-Crashs.",
  "fr": "Main propre atteint logos/texte légal et reste180s≈3FPS ;15échecs invalid-handle baissent le plafond. Jeu/son non vérifiés ; v01.000.001 distincte des anciens crashs.",
  "es": "Main limpio alcanza logos/legal y queda180s≈3FPS;15fallos invalid-handle bajan presupuesto. Sin juego/audio verificados; v01.000.001 separada de crashes anteriores."
 },
 "edition": {
  "en": "Reported PS5 package PPSA03973; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
  "zh": "报告PS5包PPSA03973；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
  "ar": "حزمة PS5 PPSA03973؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
  "pt": "Pacote PS5 PPSA03973; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
  "de": "PS5-Paket PPSA03973; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
  "fr": "Paquet PS5 PPSA03973 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
  "es": "Paquete PS5 PPSA03973; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
 },
 "nextTest": {
  "en": "Repeat a pinned scene with controlled inputs; record actual test date, audio, save reload and any later failure. A short run is not campaign completion.",
  "zh": "固定场景与输入复测，记录实际测试日期、声音、存档重载及后续失败；短运行不是通关。",
  "ar": "كرر مشهداً مثبتاً ومدخلات مضبوطة، وسجل تاريخ الاختبار والصوت والحفظ والفشل اللاحق؛ التشغيل القصير ليس إكمالاً.",
  "pt": "Repita cena/build/input e registe data real, som, saves e falhas posteriores; teste curto não é campanha concluída.",
  "de": "Gepinnte Szene/Eingaben wiederholen, Testdatum/Ton/Save/spätere Fehler erfassen; kurzer Lauf kein Durchspielen.",
  "fr": "Répétez scène/build/entrées, notez date réelle/son/saves/échecs ultérieurs ; essai court pas campagne finie.",
  "es": "Repite escena/build/entradas y registra fecha real/audio/saves/fallos posteriores; ensayo corto no es campaña completa."
 },
 "sources": [
  {
   "label": "Reviewed primary evidence",
   "url": "https://github.com/boykopovar/AnyPS5/discussions/10597"
  }
 ]
};
