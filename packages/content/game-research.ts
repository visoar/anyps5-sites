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

Object.assign(gameResearch,{
 "octopath-traveler-0": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report: Asian28495/01.000.000. Art page listsJapanese28492 and demo29437, not this package.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 报告为亚洲28495／01.000.000；图片页列日本28492及试玩29437，与实测包不同。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. التقريرآسيوي 28495/01.000.000؛ الصورة لصفحة 28492 الياباني/demo29437.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato asiático28495/01.000.000; arte28492japonês/demo29437.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. BerichtAsien28495/01.000.000; BildseiteJapan28492/Demo29437.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. RapportAsie28495/01.000.000; page artJapon28492/démo29437.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. InformeAsia28495/01.000.000; páginaJapón28492/demo29437."
  },
  "finding": {
   "en": "Clean main reaches settings, title and character creation. Settings show18–24 FPS; creation≈7. The name prompt needs the host keyboard; controller-only completion and gameplay are unverified. Peak private memory≈10GB, scripted Cross/Options, no crash reported.",
   "zh": "干净main到达设置、标题和角色创建：设置18–24 FPS，创建约7。命名需电脑键盘，未验证仅手柄完成或游戏过程。私有内存峰值约10GB，脚本按键，未报告崩溃。",
   "ar": "main بلا تعديل يصل للإعدادات والعنوان وإنشاء الشخصية:18–24 FPS ثم نحو 7. الاسم يحتاج لوحة المضيف؛ إكمال بذراع فقط واللعب غير مثبتين. ذاكرة خاصة≈10GB، إدخال مكتوب، بلا انهيار مذكور.",
   "pt": "Main limpo chega às definições, título e criação:18–24 FPS e≈7. Nome exige teclado do PC; comandos apenas/manobra em jogo não verificados. Memória privada≈10GB; entrada por guião, sem falha relatada.",
   "de": "Sauberes main erreicht Einstellungen, Titel und Erstellung:18–24 FPS bzw.≈7. Name benötigt Hosttastatur; reine Controllerbedienung und Gameplay ungeprüft. Private Spitze≈10GB, Skripteingaben, kein gemeldeter Absturz.",
   "fr": "Main propre atteint réglages, titre et création:18–24 FPS puis≈7. Nom au clavier hôte; saisie entièrement à la manette et jeu non vérifiés. Mémoire privée≈10GB, entrées scriptées, aucun crash signalé.",
   "es": "Main limpio llega a ajustes, título y creación:18–24 FPS y≈7. Nombre requiere teclado anfitrión; mando exclusivamente y juego sin verificar. Memoria privada≈10GB, entradas por guion, sin fallo informado."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11114"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/octopath-traveler-0/"
   }
  ]
 },
 "mouse-pi-for-hire": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado."
  },
  "finding": {
   "en": "Clean main reaches BIG MOUSE, LITTLE HOPE: sticks move/turn the character and HUD follows. About12 minutes walking in a22-minute run, no stop/device loss. Walking≈21 FPS(15–29), lobby10–13; menu≈70 and credits≈50 are separate. Clocks unlocked; audio, saves and later missions unverified.",
   "zh": "干净main到达首个任务，摇杆行走／转向、HUD跟随。22分钟运行中约12分钟行走，无停止或设备丢失。行走约21 FPS（15–29）、大厅静止10–13；菜单70、片头50另算。未锁频，音频、存档及后续任务未验证。",
   "ar": "main نظيف يبلغ المهمة الأولى؛ تحرك ودوران بالعصا و HUD متابع. مشي≈12 دقيقة خلال 22، بلا توقف/فقد جهاز. مشي≈21 FPS(15–29)، سكون 10–13؛ قائمة 70 وافتتاحية 50 منفصلان. تردد غير مثبت؛ الصوت والحفظ وباقي المهمات غير مختبرة.",
   "pt": "Main limpo chega à primeira missão, com movimento/rotação nos analógicos e HUD.≈12min a andar em22min, sem paragem/perda GPU.≈21 FPS(15–29), parado10–13; menu70/créditos50 separados. Frequências livres; áudio, gravação e missões posteriores por testar.",
   "de": "Sauberes main erreicht erste Mission mit Stickbewegung/Drehung und HUD.≈12min Gehen in22min ohne Stopp/Geräteverlust.≈21 FPS(15–29), stehend10–13; Menü70/Vorspann50 getrennt. Takt frei; Ton, Speichern und Folgemissionen ungeprüft.",
   "fr": "Main propre atteint la première mission, déplacement/rotation aux sticks et HUD.≈12min de marche sur22min, sans arrêt/perte GPU.≈21 FPS(15–29), immobile10–13; menu70/générique50 séparés. Fréquences libres; audio, sauvegarde et suite non vérifiés.",
   "es": "Main limpio alcanza primera misión, movimiento/giro con sticks y HUD.≈12min andando en22min, sin parada/pérdida GPU.≈21 FPS(15–29), quieto10–13; menú70/créditos50 aparte. Relojes libres; audio, guardado y misiones posteriores sin probar."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11113"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/UP2430-PPSA26578_00-PLYXFUMIMOUSEPS5/"
   }
  ]
 },
 "persona-5-royal": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. PS5report05110. Available page OG art is labelledPS4 and was rejected; USPS5listing05109 is another region.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测PS5为05110；可取OG素材标为PS4，已弃用，资料页USPS5的05109属另一地区。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير PS5 هو 05110؛ صورة OG موسومة PS4 رفضت، و USPS5 رقمه 05109 آخر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. PS5testado05110; OGmarcadoPS4rejeitado, USPS505109é outra região.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. PS5-Test05110; PS4-markiertesOGabgelehnt, US-PS505109andere Region.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. PS5testé05110; OGmarquéPS4écarté, USPS505109autre région.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. PS5probado05110; OGmarcadoPS4rechazado, USPS505109otra región."
  },
  "finding": {
   "en": "Local throwing exports allow the system-data screen at60 FPS, then sceGameUpdateCreateRequest stops startup. Adding #10614/0870b4dc11 reaches warnings and ATLUS logo, then allocation failure≈85s during VP9 startup. Other emulators shared the GPU; isolated reproduction pending. These are diagnostic local trees, not clean-main gameplay.",
   "zh": "本地加入会抛错的导出后，系统数据画面约60 FPS，继而更新检查停止；再加#10614/0870b4dc11到达警告及ATLUS标志，约85秒在VP9启动时内存分配失败。GPU同时运行其他模拟器，待独占复测；不是干净main游玩。",
   "ar": "إضافات محلية رامِية تعرض بيانات النظام 60 FPS ثم توقف فحص التحديث. مع#10614/0870b4dc11 تظهر التحذيرات وشعار ATLUS ثم فشل تخصيص≈85 ث عند VP9. GPU مشترك؛ اختبار منفرد منتظر. ليست تجربة لعب main نظيف.",
   "pt": "Exports locais que lançam exceção mostram dados60 FPS e param na atualização. Com#10614/0870b4dc11 surgem avisos/ATLUS, depois falha de memória≈85s noVP9. GPU partilhada; ensaio isolado pendente. Não é jogo em main limpo.",
   "de": "Lokale werfende Exporte zeigen Systemdaten60 FPS, bis Updateprüfung stoppt. Mit#10614/0870b4dc11 Warnungen/ATLUS, dann Speicherfehler≈85s beimVP9-Start. GPU geteilt; Einzeltest ausstehend. Kein sauberes Main-Gameplay.",
   "fr": "Exports locaux lançant une exception affichent données60 FPS puis arrêt de mise à jour. Avec#10614/0870b4dc11, avis/ATLUS puis allocation échoue≈85s auVP9. GPU partagée; essai isolé attendu. Pas de jeu main propre.",
   "es": "Exports locales que lanzan excepción muestran datos60 FPS y paran en actualización. Con#10614/0870b4dc11, avisos/ATLUS y fallo de memoria≈85s alVP9. GPU compartida; prueba aislada pendiente. No es juego main limpio."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10872"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/persona-5-royal/"
   }
  ]
 },
 "flashback-ppsa08546": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado."
  },
  "finding": {
   "en": "Warm menu/cubemap passes present≈50–55 FPS; cold runs spend minutes compiling. Original depth-view mip refusal≈115s. No gameplay followed yet. Exact title build, content version and host are not stated in this discussion; proposed #11098 is separate from its older local-switch run.",
   "zh": "热缓存菜单／立方体贴图阶段约50–55 FPS，冷缓存编译数分钟；原深度视图mip拒绝约115秒。尚未跟踪到游戏过程；本讨论未给准确构建、内容版本及主机，#11098与较早本地开关测试分开。",
   "ar": "مراحل قائمة/مكعب دافئة≈50–55 FPS، والباردة تقضي دقائق بالترجمة. رفض mip≈115 ث؛ لا لعب متابع. البناء/نسخة المحتوى/المضيف غير محددة هنا؛ #11098 منفصل عن تشغيل مفتاح محلي أقدم.",
   "pt": "Menu/cubemap quente≈50–55 FPS; frio passa minutos a compilar. Recusa de mip≈115s, sem jogo seguido. Build, versão e máquina não indicadas aqui;#11098 separado do ensaio local anterior.",
   "de": "Warme Menü/Cubemap-Pässe≈50–55 FPS, kalt minutenlanges Kompilieren. Mip-Verweigerung≈115s, kein verfolgtes Gameplay. Exakter Build, Version und Host fehlen hier;#11098 getrennt vom älteren lokalen Schaltertest.",
   "fr": "Passes menu/cubemap chaudes≈50–55 FPS; à froid compilation de plusieurs minutes. Refus mip≈115s, sans jeu suivi. Build, version et hôte non précisés ici;#11098 séparé de l’ancien essai local.",
   "es": "Menú/cubemap caliente≈50–55 FPS; en frío varios minutos compilando. Rechazo mip≈115s, sin seguimiento al juego. Build, versión y equipo no indicados aquí;#11098 separado del ensayo local anterior."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11097"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.microids.com/game-flashback-2/"
   }
  ]
 },
 "driftcheck": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Homebrew98766. Windows UI test has unknown content version; Mac01.000.000 test uses Rosetta and unmerged runtime patches, not an officialMac release.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 自制98766；Windows界面测试内容版本未知，Mac01.000.000用Rosetta与未合运行时补丁，不是Mac正式发行。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. أداة 98766؛ نسخة Windows مجهولة، Mac01.000.000 مع Rosetta وتعديلات غير مدمجة، لا إصدار Mac رسمي.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Homebrew98766; versãoWindowsdesconhecida, Mac01.000.000comRosetta/patches abertos, não releaseMac.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Homebrew98766; Windows-Version unbekannt, Mac01.000.000mitRosetta/offenen Patches, keinMac-Release.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Homebrew98766; versionWindowsinconnue, Mac01.000.000avecRosetta/patches ouverts, pasreleaseMac.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Homebrew98766; versiónWindowsdesconocida, Mac01.000.000conRosetta/parches abiertos, no releaseMac."
  },
  "finding": {
   "en": "Experimental Mac tree: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1, Clang21, Rosetta2, MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000 accepts a real USB Xbox Series pad60s/all buttons, sticks, triggers; rumble untested. Syobon47402/01.001.000 reaches level1/move/jump/death≈28.6 FPS30s with scripted input, audio untested. Main alone still cannot build Mac libraries; no native-ARM or released-Mac claim.",
   "zh": "实验Mac树为main3a2c51afd＋mugurc27e9689743＋#10885／#10540／#11119，M4／macOS27.0.1、Clang21、Rosetta2、MoltenVK1.4.2／SDK1.4.363。DriftCheck98766／01.000.000实体USB Xbox手柄60秒按钮／摇杆／扳机有效，震动未测；Syobon47402／01.001.000脚本输入到首关行走／跳跃／死亡，30秒约28.6 FPS，音频未测。main仍不能单独构建Mac库，不是原生ARM或Mac发行。",
   "ar": "شجرة Mac تجريبية: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119، M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000 بذراع XboxUSB فعلي 60 ثأزرار/عصي/زناد، اهتزاز غير مختبر. Syobon47402/01.001.000 مرحلة 1 ومشي/قفز/موت 28.6 FPS/30 ثإدخال مكتوب، صوت مجهول. main وحده لا يبني مكتبات Mac؛ لا ARM أصلي/إصدار Mac.",
   "pt": "ÁrvoreMac experimental: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000comXboxUSB real60s, botões/sticks/gatilhos, vibração não testada. Syobon47402/01.001.000nível1/movimento/salto/morte28,6 FPS/30s, entrada guiada, áudio por testar. Mainnão compila libsMac só; semARMnativo/releaseMac.",
   "de": "ExperimentellerMac-Baum: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000echterXboxUSB60s, Tasten/Sticks/Trigger, Vibration ungeprüft. Syobon47402/01.001.000Level1/Gehen/Sprung/Tod28,6 FPS/30s, Skripteingabe, Ton ungeprüft. Mainallein baut keineMac-Libs; keinARMnativ/Mac-Release.",
   "fr": "ArbreMac expérimental: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000avecXboxUSB réel60s, boutons/sticks/gâchettes, vibration non testée. Syobon47402/01.001.000niveau1/marche/saut/mort28,6 FPS/30s, entrée scriptée, son non testé. Mainseul ne construit pas libsMac; niARMnatif nireleaseMac.",
   "es": "ÁrbolMac experimental: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000conXboxUSB real60s, botones/sticks/gatillos, vibración sin probar. Syobon47402/01.001.000nivel1/movimiento/salto/muerte28,6 FPS/30s, entrada por guion, audio sin probar. Mainsolo no construye libsMac; niARMnativo nireleaseMac."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/5745"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://github.com/felipemelchior/driftcheck5"
   },
   {
    "label": "Experimental Mac observations",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11147"
   },
   {
    "label": "Experimental Mac observations",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/5932#discussioncomment-19182821"
   },
   {
    "label": "Experimental Mac observations",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11119"
   }
  ]
 },
 "the-king-is-watching": {
  "checked": "2026-10-26",
  "finding": {
   "en": "Author reports60 FPS with mouse/keyboard and no noticed blocker. Exact main 401731 is pinned, but duration, driver and completion are unstated; “fully playable” is not independently established. Content01.000.300, distinct from the earlier3060 intermittent fault.",
   "zh": "作者报告鼠标／键盘操作、60 FPS，未见阻碍；固定main401731，但时长、驱动及通关未给，不能把“完全可玩”当独立验证。内容01.000.300，与早前3060间歇故障另列。",
   "ar": "الكاتب يذكر 60 FPS وفأرة/لوحة بلا عائق ملحوظ. main 401731 مثبت لكن المدة/التعريف/الإكمال غائبة؛ لا تحقق مستقل للعب الكامل. نسخة 01.000.300 منفصلة عن عطل 3060 الأقدم.",
   "pt": "Autor relata60 FPS com rato/teclado, sem bloqueio notado. main 401731 fixado, mas duração, driver e conclusão ausentes;“totalmente jogável” não comprovado.01.000.300 separado da falha3060 anterior.",
   "de": "Autor meldet60 FPS mit Maus/Tastatur ohne bemerkte Blockade. main 401731 fixiert, aber Dauer, Treiber und Abschluss fehlen; vollständig spielbar nicht unabhängig belegt.01.000.300 getrennt vom alten3060Fehler.",
   "fr": "Auteur annonce60 FPS, souris/clavier, sans blocage observé. main 401731 fixé, mais durée, pilote et fin non précisés; jeu complet non établi.01.000.300 distinct du défaut3060 antérieur.",
   "es": "Autor informa60 FPS con ratón/teclado, sin bloqueo visto. main 401731 fijado, pero duración, driver y final ausentes;“totalmente jugable” sin acreditar.01.000.300 separado del fallo3060 anterior."
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
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10377#issuecomment-6373976366"
   },
   {
    "label": "Publisher identity and promotional artwork",
    "url": "https://store.playstation.com/en-us/concept/10017931"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11024"
   }
  ]
 },
 "silt": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Same folder/build: player confirms gameplay, sound and a written GameSave.bin with keyboard/mouse.25 ten-second summaries show≈17–49 FPS, zero drops;7429frames.09:40–09:56 file span includes unmeasured idle/load time, not16minutes of timed gameplay. Manual stop, no crash; gamepad, long play and save reload untested.",
   "zh": "同目录／构建后续确认键鼠游玩、声音及写出GameSave.bin。25个十秒摘要约17–49 FPS、零丢帧，共7429帧。09:40–09:56文件跨度含未知空闲／加载，不能算16分钟计时游玩。手动结束，无崩溃；手柄、长时和读档未测。",
   "ar": "نفس المجلد/البناء: لعب وصوت وكتابة GameSave.bin بلوحة/فأرة.25 ملخصاً من 10 ث≈17–49 FPS بلا إسقاط، 7429 إطاراً. فترة 09:40–09:56 تشمل خمول/تحميل مجهول لا 16 دقيقة لعب مقاس. توقف يدوي بلا انهيار؛ ذراع/مطول/إعادة حفظ غير مختبرة.",
   "pt": "Mesma pasta/build: jogo, som eGameSave.bin escrito com teclado/rato.25resumos de10s≈17–49 FPS, zero perdas,7429quadros.09:40–09:56 inclui espera/carga não medida, não16min de jogo cronometrado. Paragem manual, sem crash; comando, sessão longa e recarga por testar.",
   "de": "Gleicher Ordner/Build: Gameplay, Ton und geschriebeneGameSave.bin mit Maus/Tastatur.25Zehnsekundenfenster≈17–49 FPS, keine Drops,7429Frames.09:40–09:56 enthält ungemessene Leerlauf-/Ladezeit, keine16min gemessenes Gameplay. Manuell beendet; Controller, Langzeit, Laden ungeprüft.",
   "fr": "Même dossier/build: jeu, son etGameSave.bin écrit au clavier/souris.25résumés de10s≈17–49 FPS, zéro perte,7429images.09:40–09:56 inclut attente/chargement non mesuré, pas16min de jeu chronométré. Arrêt manuel, sans crash; manette, longue durée et rechargement non testés.",
   "es": "Misma carpeta/build: juego, sonido yGameSave.bin escrito con teclado/ratón.25resúmenes de10s≈17–49 FPS, cero pérdidas,7429cuadros.09:40–09:56 incluye espera/carga sin medir, no16min de juego cronometrado. Cierre manual, sin fallo; mando, larga sesión y recarga sin probar."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10843"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10843#discussioncomment-19173294"
   }
  ]
 },
 "final-fantasy-resonance": {
  "checked": "2026-10-26",
  "finding": {
   "en": "Windows clean main now has a scoped boss/castle, input, audio and save-reload report; Linux progresses from a difficulty-menu allocation comparison to a visible post-tutorial scene on a different PR stack. The Linux high-memory diagnostic does not qualify low-memory cases. The Battlefield ratio posted in the same thread is a different game.",
   "zh": "Windows干净main新增限定的战斗／城堡、输入、音频与读档报告；Linux从难度菜单分配对照到另一PR组合下教程后的可见场景。Linux高内存诊断不验证低内存，同帖Battlefield比值是另一游戏。",
   "ar": "Windowsmain نظيف له قتال/قلعة وإدخال/صوت/تحميل؛ Linux من مقارنة قائمة الصعوبة إلى مشهد بعد التعليم بتركيب PR آخر. ذاكرته العالية لا تؤهل الأقل؛ نسبة Battlefield بنفس النقاش لعبة أخرى.",
   "pt": "Windowsmain limpo tem chefe/castelo, entrada/áudio/recarga; Linux passa de menu diagnóstico para cena após tutorial noutra pilhaPR. Muita memória não valida pouca. RácioBattlefieldno mesmo tópico é outro jogo.",
   "de": "Windowsmain sauber mit Boss/Schloss, Eingabe/Ton/Laden; Linux von Menü-Allokationsvergleich zur Szene nach Tutorial auf anderem PR-Stack. Viel freier Speicher qualifiziert wenig nicht. Battlefield-Wert im Thread anderes Spiel.",
   "fr": "Windowsmain propre avec boss/château, saisie/son/rechargement; Linux du menu diagnostic à la scène post-tutoriel sur autre pilePR. Haute mémoire ne valide pas faible mémoire. RatioBattlefielddu fil: autre jeu.",
   "es": "Windowsmain limpio con jefe/castillo, entrada/audio/recarga; Linux de menú diagnóstico a escena postutorial en otra pilaPR. Mucha memoria no valida poca. RatioBattlefielddel hilo es otro juego."
  },
  "edition": {
   "en": "The run identifies PPSA31544. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras. The source page mixes standard/deluxe PPSA31544 and demo PPSA36303; its image does not identify the tested edition.",
   "zh": "报告标识PPSA31544；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。 资料页同时列标准／豪华PPSA31544和试玩PPSA36303，图片不识别实测版本。",
   "ar": "التقرير يحدد PPSA31544؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة. الصفحة تجمع standard/deluxe31544 و demo36303؛ الصورة لا تحدد النسخة المختبرة.",
   "pt": "Relato identifica PPSA31544; confira versão/executável/host/alterações. Arte promocional não prova extras testados. Página mistura standard/deluxe31544/demo36303; imagem não identifica edição testada.",
   "de": "Bericht nennt PPSA31544; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras. Seite mischt Standard/Deluxe31544/Demo36303; Bild identifiziert keine Testedition.",
   "fr": "Rapport identifie PPSA31544 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés. Page mélange standard/deluxe31544/demo36303 ; image ne fixe pas l’édition testée.",
   "es": "Relato identifica PPSA31544; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados. Página mezcla estándar/deluxe31544/demo36303; imagen no identifica edición probada."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
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
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10567#discussioncomment-19175608"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10567#discussioncomment-19177635"
   }
  ]
 },
 "ball-x-pit": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Reported PS5 package PPSA31872. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution. Current art advertises The Naturalist Update; it does not identify the content tested in version 01.301.000.",
   "zh": "报告PS5包PPSA31872；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。 当前封面带The Naturalist Update标识，不能据此认定01.301.000测试涵盖该更新。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31872. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5. الصورة تروج The Naturalist Update ولا تثبت محتوى اختبار 01.301.000.",
   "pt": "Pacote PS5 referido PPSA31872. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5. A arte anuncia The Naturalist Update, sem provar o conteúdo testado em 01.301.000.",
   "de": "Gemeldetes PS5-Paket PPSA31872. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf. Das Bild bewirbt The Naturalist Update und belegt nicht den Testinhalt von 01.301.000.",
   "fr": "Paquet PS5 rapporté PPSA31872. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5. L’image promeut The Naturalist Update sans identifier le contenu testé en 01.301.000.",
   "es": "Paquete PS5 reportado PPSA31872. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5. La imagen anuncia The Naturalist Update sin identificar el contenido probado en 01.301.000."
  },
  "finding": {
   "en": "Clean main reaches first-level gameplay≈60 FPS with correct graphics;120s and180s runs, no crash. Title≈50s after launch at≈28 FPS is separate. Audio by ear, save/load and progress past first level untested. All Unity Media modules converted; missing probe files/SIGUSR1 are not automatically faults.",
   "zh": "干净main到达首关游戏过程约60 FPS、画面正常，120／180秒两次无崩溃；约50秒到标题、标题28 FPS另算。音频听辨、存读档和后续关卡未测。Unity Media模块完整转换，探测文件缺失／SIGUSR1不能自动当故障。",
   "ar": "main نظيف يبلغ المرحلة الأولى≈60 FPS برسوم صحيحة، 120/180 ث بلا انهيار. العنوان بعد≈50 ث عند≈28 FPS منفصل. الصوت بالسماع والحفظ/التحميل وما بعد المرحلة غير مختبر. وحدات Unity كاملة؛ ملفات الفحص/SIGUSR1 ليست أعطالاً تلقائية.",
   "pt": "Main limpo chega ao primeiro nível≈60 FPS, imagem correta;120/180s sem crash. Título após≈50s a≈28 FPS separado. Áudio ouvido, gravação/carga e níveis seguintes por testar. MódulosUnity completos; probes ausentes/SIGUSR1 não são falhas automáticas.",
   "de": "Sauberes main erreicht erste Ebene≈60 FPS mit korrektem Bild;120/180s ohne Crash. Titel nach≈50s mit≈28 FPS getrennt. Ton nach Gehör, Speichern/Laden und Folgelever ungeprüft. Unity-Module komplett; fehlende Probes/SIGUSR1 nicht automatisch Fehler.",
   "fr": "Main propre atteint premier niveau≈60 FPS, image correcte;120/180s sans crash. Titre après≈50s à≈28 FPS séparé. Son à l’oreille, sauvegarde/chargement et suite non testés. ModulesUnity complets; probes manquants/SIGUSR1 pas automatiquement des erreurs.",
   "es": "Main limpio llega al primer nivel≈60 FPS, imagen correcta;120/180s sin fallo. Título tras≈50s a≈28 FPS aparte. Audio de oído, guardado/carga y niveles siguientes sin probar. MódulosUnity completos; probes ausentes/SIGUSR1 no son fallos automáticos."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/8966#discussioncomment-19178002"
   }
  ]
 },
 "god-of-war-sons-of-sparta": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Clean main reaches first Cyclops fight≈4min in. Twenty-minute run presses only Cross: five deaths/restarts,11–20 FPS(usually15–17), no crash/device loss. This proves a limited fight, not a won battle or campaign. Menus25–27 separate; GPU mostlyP5/unlocked. Private memory6.5→7.2GB; Linux black-screen case remains separate.",
   "zh": "干净main约4分钟到首场独眼巨人战。20分钟只按Cross，五次死亡／重开，11–20 FPS（多为15–17），无崩溃／设备丢失；不是胜利或通关。菜单25–27另算，GPU多在P5未锁频，私有内存6.5→7.2GB。Linux黑屏另列。",
   "ar": "main نظيف يصل قتال Cyclops≈4 دقائق.20 دقيقة بزر Cross فقط، خمس وفيات/إعادات، 11–20 FPS(غالباً 15–17)، بلا انهيار/فقد جهاز. ليست معركة فائزة أو إكمالاً. قائمة 25–27 منفصلة، GPU غالباً P5؛ ذاكرة 6.5→7.2GB. Linux الأسود منفصل.",
   "pt": "Main limpo chega aoCyclops≈4min.20min só comCross, cinco mortes/reinícios,11–20 FPS(normal15–17), sem crash/perda GPU. Não prova vitória/campanha. Menu25–27 separado, GPU emP5/frequência livre; memória6,5→7,2GB. Linuxpreto separado.",
   "de": "Sauberes main erreicht Cyclops≈4min.20min nurCross, fünf Tode/Neustarts,11–20 FPS(meist15–17), ohne Crash/Geräteverlust. Kein Kampfsieg/Abschluss. Menü25–27 getrennt, GPU meistP5/Takt frei; Speicher6,5→7,2GB. Linux-Schwarzbild getrennt.",
   "fr": "Main propre atteintCyclope≈4min.20min avecCross seul, cinq morts/reprises,11–20 FPS(souvent15–17), sans crash/perte GPU. Pas de victoire/fin. Menu25–27 séparé, GPU surtoutP5 libre; mémoire6,5→7,2GB. Écran noirLinux séparé.",
   "es": "Main limpio alcanzaCyclops≈4min.20min sóloCross, cinco muertes/reinicios,11–20 FPS(normal15–17), sin fallo/pérdida GPU. No prueba victoria/final. Menú25–27 aparte, GPU mayormenteP5 libre; memoria6,5→7,2GB. Linuxnegro separado."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/1742#discussioncomment-19178047"
   }
  ]
 },
 "ghostrunner": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Clean main exhausts13.5GiB direct pool and fails a5.565GB request before GPU selection; no presents. Missing PlayGo metadata needs this dump’s installed policy; one traced timeout is inconclusive. Host680M was not selected. Six runs include metadata stop and repeated engine fatal; root memory-budget arithmetic remains unresolved.",
   "zh": "干净main耗尽13.5GiB直映池，再请求5.565GB失败，发生在选择GPU前，零呈现。此转储缺PlayGo元数据，installed策略只是该包条件；一次追踪超时不下结论。主机680M未被选中，六次包含元数据停止及重复引擎致命错误，预算计算根因未知。",
   "ar": "main نظيف يستنفد 13.5GiB ثم يفشل طلب 5.565GB قبل اختيار GPU؛ لا تقديم. installed خاص ببيانات PlayGo المفقودة لهذا التفريغ؛ مهلة تتبع واحدة غير حاسمة.680M مضيف لم يُختَر. ست محاولات تشمل توقف بيانات وخطأ محرك متكرر، حساب الميزانية غير محسوم.",
   "pt": "Main limpo esgota13,5GiB e falha pedido5,565GB antes de escolherGPU; zero apresentações. installed é condição deste dump semPlayGo; um timeout traçado inconclusivo.680M não selecionada. Seis execuções incluem bloqueio de metadados e fatal repetido; aritmética da memória sem causa.",
   "de": "Sauberes main erschöpft13,5GiB und scheitert an5,565GB-Anfrage vor GPU-Auswahl; keine Presents. installed betrifft diesen Dump ohnePlayGo; ein Trace-Timeout unklar.680M nicht gewählt. Sechs Läufe einschließlich Metadatenstopp/wiederholtem Engine-Fatal; Budgetursache ungeklärt.",
   "fr": "Main propre épuise13,5GiB puis échoue sur5,565GB avant choixGPU; aucune présentation. installed concerne ce dump sansPlayGo; un délai tracé non concluant.680M non sélectionné. Six essais incluent arrêt métadonnées/fatal moteur répété; arithmétique mémoire inexpliquée.",
   "es": "Main limpio agota13,5GiB y falla solicitud5,565GB antes de elegirGPU; cero presentaciones. installed corresponde a este dump sinPlayGo; un timeout trazado inconcluso.680M no seleccionada. Seis pruebas incluyen parada de metadatos/fatal repetido; aritmética sin resolver."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/7320#discussioncomment-19173684"
   }
  ]
 },
 "resident-evil-village": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Local pad line+#8926 reaches menu8/8 measured runs with lazy shaders/noGPL/import budget6400. Default0.173–0.250 presents/s versus cache-off0.313 is not a stable speed gain; each row one run and defaults drift. Private17.5–22.3GB. First-control loads36/43min at0.25/0.12 FPS were earlier24Oct trees, not rerun after the pad regression; depth-expand fix absent.",
   "zh": "本地手柄行＋#8926在lazy shader／noGPL／6400导入预算下8／8到菜单。默认0.173–0.250呈现／秒与关缓存0.313不是稳定增益，各行单次且默认漂移，私有17.5–22.3GB。24日旧树36／43分钟到初控、0.25／0.12 FPS，未在新手柄回归后重测，且无深度展开修复。",
   "ar": "سطر Pad محلي+#8926 يبلغ القائمة 8/8 مع lazy/noGPL/ميزانية 6400. افتراضي 0.173–0.250 تقديم/ث مقابل 0.313 بلا كاش ليس مكسباً ثابتاً؛ صف واحد لكل تشغيل والانجراف واضح. خاصة 17.5–22.3GB. تحكم 24 أكتوبر بعد 36/43 دقيقة عند 0.25/0.12 من شجر أقدم، لم يعد بعد تراجع Pad، بلا depth-expand.",
   "pt": "LinhaPadlocal+#8926 chega ao menu8/8 comlazy/noGPL/orçamento6400.0,173–0,250apresentações/s padrão versus0,313sem cache não prova ganho estável; uma execução por linha, deriva. Privada17,5–22,3GB. Controlo24out após36/43min a0,25/0,12 é árvore anterior, não repetido apósPad; semdepth-expand.",
   "de": "Lokale Padzeile+#8926 erreicht Menü8/8 mitlazy/noGPL/Budget6400. Standard0,173–0,250Presents/s gegen0,313ohne Cache kein stabiler Gewinn; Einzelläufe/Drift. Privat17,5–22,3GB. Erstkontrolle24.Okt nach36/43min bei0,25/0,12 auf älteren Bäumen, nach Padregression nicht wiederholt; Depth-Expand fehlt.",
   "fr": "LignePadlocale+#8926 atteint menu8/8 aveclazy/noGPL/budget6400. Défaut0,173–0,250présentations/s contre0,313sans cache ne prouve pas gain stable; un essai/ligne et dérive. Privée17,5–22,3GB. Premier contrôle24oct après36/43min à0,25/0,12 sur anciens arbres, non retesté aprèsPad; sansdepth-expand.",
   "es": "LíneaPadlocal+#8926 llega al menú8/8 conlazy/noGPL/presupuesto6400. Predeterminado0,173–0,250presentaciones/s frente0,313sin caché no es ganancia estable; un ensayo/fila y deriva. Privada17,5–22,3GB. Control24oct tras36/43min a0,25/0,12 en árboles anteriores, no repetido trasPad; sindepth-expand."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/5169"
   }
  ]
 },
 "the-last-of-us-part-i": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports. Part I is the PS5 remake with Left Behind. The PS4 Remastered release and Part II Remastered are different executables, not interchangeable editions of this test. This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。 Part I 是包含 Left Behind 的 PS5 重制作品。PS4 Remastered 与 Part II Remastered 是不同游戏的可执行文件，不能互换测试结论。 本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير. Part I إعادة تطوير لـ PS5 تشمل Left Behind. إصدار Remastered على PS4 و Part II Remastered ملفان تنفيذيان مختلفان ولا تشملهما هذه التجربة. تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos. Part I é a recriação PS5 com Left Behind. Remastered para PS4 e Part II Remastered têm executáveis distintos e não partilham este teste. Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version. Part I ist das PS5-Remake mit Left Behind. PS4 Remastered und Part II Remastered sind andere Programme; Testergebnisse sind nicht austauschbar. Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison. Part I est le remake PS5 avec Left Behind. Remastered sur PS4 et Part II Remastered sont des exécutables distincts, sans résultats interchangeables. Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes. Part I es el remake PS5 con Left Behind. Remastered para PS4 y Part II Remastered son ejecutables distintos y sus resultados no son intercambiables. Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Combined PRs/local absent-view and array-clamp hacks reach logos, language, title/main menu≈0.7 FPS; intro59.94 is separate. No New Game. Magenta/blue band,5–12min memory exhaustion;24GiB GTT once froze the host. Two of seven capture reads SIGSEGV. Cache3072 reduces churn, not FPS; not a correct fix or clean-main success.",
   "zh": "PR组合与本地缺失视图／数组裁剪绕过到标志、语言、标题／主菜单约0.7 FPS；片头59.94另算，未选新游戏。品红／蓝竖带、5–12分钟内存耗尽，24GiB GTT曾卡死主机；7次中2次抓取读取SIGSEGV。缓存3072降重建不增FPS，不是正确修复或干净main成功。",
   "ar": "دمج PR وحيل محلية لغياب views/قص arrays يصل للقائمة≈0.7 FPS؛ مقدمة 59.94 منفصلة ولا NewGame. شريط وردي/أزرق، نفاد ذاكرة 5–12 دقيقة وتجمّد مضيف عند 24GiBGTT. قراءتان من 7 SIGSEGV. كاش 3072 يخفض إعادة البناء لا FPS؛ ليس إصلاحاً صحيحاً/main نظيفاً.",
   "pt": "PRs e atalhos locais de views/arrays chegam ao menu≈0,7 FPS; intro59,94 separada, semNovoJogo. Faixa magenta/azul, memória esgota5–12min,24GiBGTT bloqueouPC.2/7leituras SIGSEGV. Cache3072reduz churn, nãoFPS; não é correção/main limpo.",
   "de": "PR-Kombination/lokale View-/Array-Hacks erreichen Menü≈0,7 FPS; Intro59,94 getrennt, kein NeuesSpiel. Magenta/blauer Streifen, Speicherende5–12min,24GiBGTT fror Host ein.2/7Capture-Lesezugriffe SIGSEGV. Cache3072senkt Churn, nichtFPS; kein korrekter Fix/sauberes main.",
   "fr": "PRs/hacks locaux de views/arrays atteignent menu≈0,7 FPS; intro59,94 séparée, pasNouvellePartie. Bande magenta/bleue, mémoire épuisée5–12min,24GiBGTT a figé lePC.2/7lectures SIGSEGV. Cache3072réduit churn, pasFPS; ni vrai fix ni main propre.",
   "es": "PRs/hacks locales de vistas/arrays llegan al menú≈0,7 FPS; intro59,94 aparte, sinNuevaPartida. Banda magenta/azul, memoria agotada5–12min,24GiBGTT congelóPC.2/7lecturas SIGSEGV. Caché3072reduce churn, noFPS; no es arreglo/main limpio."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9295#issuecomment-6382034776"
   },
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9295#issuecomment-6382729671"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10986"
   }
  ]
 },
 "trails-sky-1st-chapter": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Reported PS5 package PPSA28465. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA28465；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA28465. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA28465. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA28465. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA28465. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA28465. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "Combined local NGS2 branch selects New Game/Normal and shows first house interior, then naturally aborts291.97s at its own active-meter state guard. No continued play or audio fidelity. #10599 alone/main not qualified;14/14 local tests in each switch state test an interpretation, not PS5 numeric equivalence.",
   "zh": "本地NGS2组合选新游戏／Normal，显示首间屋内后291.97秒因本地active-meter状态保护自然终止。未证明继续游玩或音频保真；不是#10599单独／main结果。两种开关各14／14本地测试只是解释的验证，不是PS5数值对照。",
   "ar": "فرع NGS2 محلي يختار NewGame/Normal ويعرض أول منزل ثم يتوقف طبيعياً 291.97 ث عند حارسه المحلي للعداد. لا لعب متواصل/صوت مطابق؛ ليس#10599 وحده/main.14/14 لكل وضع اختبارات تفسير لا مقارنة PS5 عددية.",
   "pt": "RamoNGS2local escolheNovoJogo/Normal e mostra primeira casa, aborta naturalmente291,97s no seu próprio guard do medidor. Sem jogo contínuo/fidelidade áudio; nem#10599só/main.14/14por modo testam interpretação, não equivalênciaPS5.",
   "de": "LokalerNGS2-Zweig zeigt nach NeuesSpiel/Normal erstes Haus, bricht bei291,97s am eigenen Meter-Guard ab. Kein weiteres Spiel/Audiofidelität; weder#10599allein/main qualifiziert.14/14je Modus prüfen Interpretation, keine PS5-Zahlenäquivalenz.",
   "fr": "BrancheNGS2locale affiche première maison aprèsNouvellePartie/Normal, puis arrêt naturel291,97s au guard local de compteur. Ni jeu continu ni fidélité audio; pas#10599seul/main.14/14par mode valident interprétation, pas chiffresPS5.",
   "es": "RamaNGS2local muestra primera casa trasNuevaPartida/Normal, aborta naturalmente291,97s en su guard local del medidor. Sin juego continuo/fidelidad audio; ni#10599solo/main.14/14por modo prueban interpretación, no equivalenciaPS5."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/8710"
   }
  ]
 },
 "high-on-life": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Warm launches intermittently SIGSEGV25–70s before input:8/48. Local affinity A/B gives5/24 off versus3/24 on, all same freed Wwise request shape; does not prove host-priority causes it. No fixes from pipeline journal/prebuild changes. Earlier successful scene reports remain separate.",
   "zh": "热启动在输入前25–70秒间歇SIGSEGV，48次中8次。本地亲和性对照关5／24、开3／24，均为已释放Wwise请求形态，不能证明主机优先级因果。journal／prebuild变更未消除；旧成功场景另存。",
   "ar": "إقلاع دافئ يتعطل SIGSEGV25–70 ث قبل الإدخال، 8/48. تقارب محلي 5/24 إيقاف مقابل 3/24 تشغيل، بنفس طلب Wwise المحرر؛ لا يثبت سبب أولوية المضيف. journal/prebuild لم يزيله؛ مشاهد ناجحة أقدم منفصلة.",
   "pt": "Arranques quentesSIGSEGV25–70s antes de entrada,8/48. Afinidade local5/24desligada/3/24ligada, mesmo pedidoWwise libertado; não prova causa da prioridade. journal/prebuildnão resolvem; sucessos anteriores separados.",
   "de": "Warme StartsSIGSEGV25–70s vor Eingabe,8/48. Lokale Affinität5/24aus,3/24an, gleiches freigegebenes Wwise-Objekt; keine Prioritätsursache bewiesen. journal/prebuildlösen nicht; ältere erfolgreiche Szenen getrennt.",
   "fr": "Démarrages chaudsSIGSEGV25–70s avant entrée,8/48. Affinité locale5/24off,3/24on, même requêteWwise libérée; ne prouve pas cause de priorité. journal/prebuildsans résolution; anciens succès séparés.",
   "es": "Arranques calientesSIGSEGV25–70s antes de entrada,8/48. Afinidad local5/24off,3/24on, mismo pedidoWwise liberado; sin causa de prioridad probada. journal/prebuildno resuelven; éxitos anteriores aparte."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10905"
   }
  ]
 },
 "pragmata": {
  "checked": "2026-10-26",
  "edition": {
   "en": "The source tests PPSA02530 v01.200.000, not Sketchbook DEMO PPSA33065.",
   "zh": "来源测试 PPSA02530 v01.200.000，非 Sketchbook DEMO PPSA33065。",
   "ar": "التقرير PPSA02530 v01.200.000 لا DEMO PPSA33065.",
   "pt": "RelatoPPSA02530 v01.200.000, não DEMO PPSA33065.",
   "de": "BerichtPPSA02530 v01.200.000, keine DEMO PPSA33065.",
   "fr": "RapportPPSA02530 v01.200.000, pas DEMO PPSA33065.",
   "es": "InformePPSA02530 v01.200.000, no DEMO PPSA33065."
  },
  "finding": {
   "en": "Mainaf49a07885 aborts≈3min at scePadOpen types3/4 in2/2 runs; older50757b01c6 survives600s. No input/scene/FPS asserted by this comparison. Title tolerates a negative open result, while current main throws; console behavior remains unmeasured.",
   "zh": "mainaf49a07885两次均约3分钟因scePadOpen类型3／4终止，旧50757b01c6运行600秒；本对比无输入、场景或FPS证据。游戏可处理负值open，当前main抛错，主机行为未测。",
   "ar": "main af49a07885 يتوقف≈3 دقائق عند Pad3/4 في 2/2؛ قديم 50757b01c6 يبقى 600 ث. لا إدخال/مشهد/FPS مثبت. العنوان يعالج open سالباً و main يرمي؛ سلوك الجهاز غير مقاس.",
   "pt": "main af49a07885aborta≈3min emPad3/4,2/2; antigo50757b01c6sobrevive600s. Sem entrada/cena/FPS. Título aceita opennegativo, main lança; consola não medida.",
   "de": "main af49a07885bricht≈3min anPad3/4 ab,2/2; alt50757b01c6läuft600s. Keine Eingabe/Szene/FPS belegt. Titel behandelt negatives open, mainwirft; Konsole ungemessen.",
   "fr": "main af49a07885aborte≈3min àPad3/4,2/2; ancien50757b01c6tient600s. Pas de saisie/scène/FPS établi. Titre gère open négatif, mainlance; console non mesurée.",
   "es": "main af49a07885aborta≈3min enPad3/4,2/2; antiguo50757b01c6dura600s. Sin entrada/escena/FPS. Título acepta opennegativo, mainlanza; consola sin medir."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10904"
   }
  ]
 },
 "resident-evil-requiem": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report31246/01.200.000; the art page includes30803/36561, so it does not prove the reported region or edition.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测31246／01.200.000，图片页包含30803／36561，不证明报告地区或版本内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير 31246/01.200.000؛ صفحةالصورة 30803/36561 لا تثبت منطقته/نسخته.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato31246/01.200.000; arte30803/36561não prova região/edição testada.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Bericht31246/01.200.000; Bildseite30803/36561belegt Testregion/Edition nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Rapport31246/01.200.000; art30803/36561ne fixe région/édition testée.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Informe31246/01.200.000; arte30803/36561no fija región/edición probada."
  },
  "finding": {
   "en": "Saved settings reach Capcom logo/black intro then device loss≈2min,6/6. Later tracing corrects “direct” to four indirect draws resolving160indices. Loop guard avoids device loss but leads to another refusal; disabling whole-quad EXEC is an unsafe diagnostic, not a fix. No validation layer/gameplay; DCC warning also occurs without hangs.",
   "zh": "已有设置到Capcom标志／黑色片头后约2分钟丢设备，6／6；后续更正为四个间接绘制，各解析160索引。循环保护改为后续拒绝，关闭整四像素EXEC只是会回归的诊断，不是修复。未用验证层、无游戏过程，DCC警告也见于不挂起运行。",
   "ar": "إعداد محفوظ يصل Capcom/مقدمة سوداء ثم فقد جهاز≈دقيقتين، 6/6. تصحيح لاحق: أربع رسمات غير مباشرة تحل 160 فهرساً. حارس الحلقة يتجاوز الفقد إلى رفض آخر؛ تعطيل EXEC للرباعية تشخيص غير آمن لا إصلاح. لا طبقة تحقق/لعب؛ تحذير DCC ليس سبباً مثبتاً.",
   "pt": "Configuração guardada chegaCapcom/intropreta e perdeGPU≈2min,6/6. Correção: quatro draws indiretos resolvem160índices. Loopguard leva a outra recusa; desativarEXECquad é diagnóstico inseguro, não fix. Sem validation/jogo; avisoDCCtambém sem hang.",
   "de": "Gespeicherte Einstellungen bisCapcom/schwarzes Intro, dann Geräteverlust≈2min,6/6. Korrektur: vier indirekte Draws mit160Indizes. Loopguard führt zu weiterem Refusal; Quad-EXEC abschalten unsichere Diagnose, kein Fix. Keine Validation/Gameplay; DCCwarnung auch ohne Hang.",
   "fr": "Réglages enregistrés jusqu’àCapcom/intro noire puis perteGPU≈2min,6/6. Correction: quatre draws indirects à160indices. Loopguard mène à autre refus; couperEXECquad est diagnostic dangereux, pas fix. Sans validation/jeu; avertissementDCCaussi sans hang.",
   "es": "Ajustes guardados lleganCapcom/intro negra y pérdidaGPU≈2min,6/6. Corrección: cuatro draws indirectos con160índices. Loopguard llega a otro rechazo; desactivarEXECquad es diagnóstico inseguro, no fix. Sin validación/juego; avisoDCCtambién sin hang."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11052"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/resident-evil-requiem/"
   }
  ]
 },
 "subnautica-below-zero": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report02457; promotional page02456 differs by region. Content version unstated.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测02457与宣传页02456地区不同，实测内容版本未知。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير 02457 والصورة 02456 منطقة أخرى؛ نسخة المحتوى مجهولة.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato02457, arte02456outra região; versão desconhecida.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Bericht02457, Bild02456andere Region; Inhaltsversion unbekannt.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Rapport02457, art02456autre région; version inconnue.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Informe02457, arte02456otra región; versión desconocida."
  },
  "finding": {
   "en": "Same Survival opening intro: main 7a015c094 shows70–200 presents/10s; new4017310678 only11–31 with import budget≈1GiB; adding8091 shows130–290. First-parent bisect names6479, invalid-external-handle lowers budget. This is cinematic presentation, not controlled play, completion or a general FPS gain; duration/content version unstated.",
   "zh": "同一Survival开场片头：main7a015c094每10秒70–200次呈现，新4017310678为11–31且导入预算降至约1GiB，加8091为130–290。首父二分指向6479，invalid-external-handle触发降预算。属于片头呈现，不是操作游玩／通关或普遍FPS增益，时长及内容版本未知。",
   "ar": "مقدمة Survival نفسها: main 7a015c094 يقدم 70–200/10 ث، 4017310678 فقط 11–31 وبميزانية≈1GiB؛ مع 8091 يقدم 130–290. bisect يشير 6479 و invalid-external-handle يخفض الميزانية. هذه مقدمة لا لعب متحكم/إكمال أو مكسب عام؛ المدة والنسخة غائبتان.",
   "pt": "Mesma introSurvival: main 7a015c09470–200apresentações/10s,401731067811–31/orçamento≈1GiB; com8091130–290. Bisect aponta6479, invalid-external-handlebaixa orçamento. É cinematismo, não jogo controlado/conclusão/ganho geral; duração e versão desconhecidas.",
   "de": "Gleiches Survival-Intro: main 7a015c09470–200Presents/10s,401731067811–31/Budget≈1GiB; mit8091130–290. Bisect weist6479aus, invalid-external-handlesenkt Budget. Intropräsentation, kein gesteuertes Spiel/Abschluss/allgemeiner Gewinn; Dauer/Version fehlen.",
   "fr": "Même introSurvival: main 7a015c09470–200présentations/10s,401731067811–31/budget≈1GiB; avec8091130–290. Bisect pointe6479, invalid-external-handleréduit budget. Cinématique, pas jeu contrôlé/fin/gain général; durée/version inconnues.",
   "es": "Misma introSurvival: main 7a015c09470–200presentaciones/10s,401731067811–31/presupuesto≈1GiB; con8091130–290. Bisect señala6479, invalid-external-handlebaja presupuesto. Cinemática, no juego controlado/final/mejora general; duración/versión ausentes."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6399217488"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/235298/"
   }
  ]
 },
 "arcrunner": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Reported PS5 package PPSA21406; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA21406；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA21406؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA21406; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA21406; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA21406 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA21406; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  },
  "finding": {
   "en": "Baseline2cb85c lowers import ceiling81MiB and shows dark intro/CHIP dialogue. Combined81dc298 adds8091+10304, reaches class/difficulty menus by250s, still dark, no gameplay. Both exit0;3870 import failures remain on candidate. Different progression/cold caches and a baseline CPU sample prevent speed comparison.",
   "zh": "基线2cb85c导入上限降81MiB，显示暗片头／CHIP对白；组合81dc298加8091＋10304约250秒到职业／难度菜单，仍暗、无游玩。两者退出0，候选仍3870次导入失败；进度／冷缓存及基线CPU采样不同，不能比速度。",
   "ar": "خط أساس 2cb85c يخفض السقف 81MiB ويعرض مقدمة/حواراً داكناً؛ 81dc298 مع 8091+10304 يبلغ اختيار الفئة/الصعوبة 250 ث، داكن وبلا لعب. كلاهما خروج 0، 3870 فشل استيراد باقٍ. اختلاف التقدم/الكاش/عينة CPU يمنع مقارنة سرعة.",
   "pt": "Base2cb85c baixa teto81MiB e mostra intro/diálogo escuro;81dc298com8091+10304 chega às escolhas≈250s, ainda escuro, sem jogo. Ambos saída0;3870falhas de importação persistem. Progresso/cache/amostraCPU diferentes impedem comparação.",
   "de": "Basis2cb85c senkt Limit81MiB, dunkles Intro/CHIP;81dc298mit8091+10304 erreicht Auswahl≈250s, weiter dunkel/kein Gameplay. BeideExit0,3870Importfehler bleiben. Unterschiedlicher Fortschritt/Cache/CPU-Sample verhindert Tempovergleich.",
   "fr": "Base2cb85c abaisse plafond81MiB, intro/CHIP sombre;81dc298avec8091+10304 atteint choix≈250s, toujours sombre, sans jeu. Deux sorties0,3870échecs import subsistent. Progression/cache/échantillonCPU différents empêchent comparaison.",
   "es": "Base2cb85c baja límite81MiB, intro/CHIP oscuros;81dc298con8091+10304 alcanza selección≈250s, aún oscuro, sin juego. Ambos salida0, persisten3870fallos importación. Progreso/caché/muestraCPU distintos impiden comparación."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6388982212"
   }
  ]
 },
 "epic-mickey-rebrushed": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "combined: in-level samples30–70s after Continue show6.7–7.6 FPS. Same i3/RX7600 pair; main lowers the import budget47times and mirror preparation≈52ms, combined0times/≈4µs. Main already includes8380; this does not isolate8091 from10304 or qualify other titles/memory sizes.",
   "zh": "combined：Continue后30–70秒关卡样本为6.7–7.6 FPS。同一i3／RX7600，main降预算47次、镜像准备约52ms，组合0次／4µs。main已含8380，未隔离8091与10304，也不验证其他游戏或内存。",
   "ar": "combined: عينات المرحلة 30–70 ث بعد Continue:6.7–7.6 FPS. main يخفض الميزانية 47 مرة/تهيئة 52ms؛ الدمج 0/4µs. نفس i3/RX7600، يشمل 8380؛ لا عزل 8091 عن 10304 أو تأهيل عناوين/ذاكرة أخرى.",
   "pt": "combined: amostras30–70s apósContinue:6.7–7.6 FPS. Mesmoi3/RX7600; main47quedas/52ms, combinação0/4µs. maininclui8380; sem isolar8091de10304 ou generalizar memória/jogos.",
   "de": "combined: Levelproben30–70s nachContinue:6.7–7.6 FPS. Gleichesi3/RX7600; main47Senkungen/52ms, Kombination0/4µs.8380schon inmain;8091/10304nicht isoliert, keine allgemeine Speicher-/Titelqualifikation.",
   "fr": "combined: échantillons en niveau30–70s aprèsContinue:6.7–7.6 FPS. Mêmei3/RX7600; main47baisses/52ms, combinaison0/4µs.8380déjà dansmain;8091/10304non isolés, ni autres jeux/mémoires qualifiés.",
   "es": "combined: muestras en nivel30–70s trasContinue:6.7–7.6 FPS. Mismoi3/RX7600; main47bajadas/52ms, combinación0/4µs.8380ya enmain; no aísla8091/10304ni otros juegos/memorias."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6393166187"
   }
  ]
 },
 "bugsnax": {
  "checked": "2026-10-26",
  "finding": {
   "en": "Latest Linux10515 refresh has an exact-head control and bounded rainy-opening run. Windows10581 originally bypassed single-sample coverage; review disproved that premise, and the revised approximation preserves alpha coverage but lacks measured console equivalence. It closed temporarily, not merged; older tutorial evidence stays at its tested semantics.",
   "zh": "最新Linux10515有固定头对照及有限雨中开场。Windows10581最初绕过单样本覆盖的依据已被反证，修改后保留alpha覆盖但仍无主机等价测量。它是暂时关闭而非合并，旧教程证据保留实测语义。",
   "ar": "Linux10515 له رأس/تحكم وافتتاح محدود. Windows10581 تجاوز تغطية عينة واحدة ثم نقضت المراجعة فرضيته؛ التقريب الجديد يحفظ alpha بلا قياس جهاز مكافئ. مغلق مؤقتاًلا مدمج؛ تعليم قديم يحتفظ بدلالته.",
   "pt": "Linux10515 tem controlo fixado/abertura limitada. Windows10581ignorava cobertura1sample; premissa refutada, modelo revisto preservaalphasem equivalência consola medida. Fechado temporariamente, não integrado; ensaio antigo mantém semântica.",
   "de": "Linux10515mit Headkontrolle/begrenztem Einstieg. Windows10581umging Einzelsample-Coverage; Prämisse widerlegt, Approximation behältAlphaohne Konsolenmessung. Vorläufig geschlossen, nicht gemergt; alter Tutorialtest behält Semantik.",
   "fr": "Linux10515avec contrôle fixé/ouverture limitée. Windows10581ignorait couverture1échantillon; prémisse réfutée, approximation gardealphasans mesure console. Fermé temporairement, non fusionné; ancien tutoriel garde sa sémantique.",
   "es": "Linux10515con control fijo/inicio limitado. Windows10581omitía cobertura1muestra; premisa refutada, aproximación conservaalphasin medir consola. Cerrado temporalmente, no fusionado; tutorial antiguo mantiene semántica."
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
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/9900#discussioncomment-19161527"
   },
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/9900#discussioncomment-19165799"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10515#issuecomment-6389757353"
   },
   {
    "label": "Single-sample coverage review and revised scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10581#issuecomment-6390289949"
   }
  ]
 },
 "super-meat-boy-3d": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Reported PS5 package PPSA31162. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution. Match the exact PS5 package and tested source tree. Reported PS5 package PPSA31162. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA31162；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。 核对准确PS5包与实测源码树。 报告PS5包PPSA31162；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31162. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5. طابق حزمة PS5 وشجرة المصدر المختبرة. حزمة PS5 المبلغ عنها PPSA31162. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA31162. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5. Confirme pacote PS5 e árvore testada. Pacote PS5 referido PPSA31162. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA31162. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf. PS5-Paket und getesteten Quellstand abgleichen. Gemeldetes PS5-Paket PPSA31162. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA31162. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5. Vérifiez paquet PS5 et source testée. Paquet PS5 rapporté PPSA31162. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA31162. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5. Comprueba paquete PS5 y código probado. Paquete PS5 reportado PPSA31162. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "Clean main 0a77bbf18 still renders cyan-white3D with black shadows;2D HUD/video stay coloured. This narrows the old fork comparison but does not isolate OS from GPU/driver. Snapshot readback/binding is a lead, not a proven cause or fix; new duration/FPS/driver version unstated.",
   "zh": "干净main0a77bbf18仍为青白3D／黑阴影，2D HUD和视频有颜色。缩小旧分支对比范围，但未隔离系统与GPU／驱动。快照读回／绑定只是线索，非根因或修复；新时长、FPS及驱动版本未给。",
   "ar": "main 0a77bbf18 نظيف يبقي 3D سماوياً/ظلالاً سوداء و HUD/فيديو ملونين. يضيق مقارنة الفرع دون عزل النظام عن GPU/تعريف. قراءة Snapshot/binding خيط لا سبب/إصلاح مثبت؛ مدة/FPS/نسخة تعريف غير مذكورة.",
   "pt": "Main0a77bbf18 limpo mantém3Dciano/sombras pretas eHUD/vídeo a cores. Estreita comparação do fork, não isolaSO/GPU/driver. Snapshot/binding é pista, não causa/fix; duração/FPS/versão driver ausentes.",
   "de": "Sauberes main 0a77bbf18 weiter3Dcyan/schwarze Schatten, HUD/Video farbig. Grenzt Forkvergleich ein, isoliert OS/GPU/Treiber nicht. Snapshot/Binding nur Hinweis, kein Ursache/Fix; Dauer/FPS/Treiberversion fehlen.",
   "fr": "Main0a77bbf18 propre garde3Dcyan/ombres noires, HUD/vidéo colorés. Précise comparaison fork, sans isolerOS/GPU/pilote. Snapshot/binding est piste, pas cause/fix; durée/FPS/version pilote absents.",
   "es": "Main0a77bbf18 limpio mantiene3Dcian/sombras negras, HUD/vídeo a color. Acota comparación del fork, sin aislarSO/GPU/driver. Snapshot/binding es pista, no causa/fix; duración/FPS/versión driver ausentes."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568"
   },
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568#issuecomment-6401210573"
   }
  ]
 },
 "gta-v": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Mainc8d34 with opt-in frame-red-zone survives3×420s open-world runs.1030/1166/1186 resumed writes include≥15per run in framed inflate_fast; no HDD Streamer crash. Diagnostic-only local logging, mimalloc and to-intel retained. This does not protect unframed output or prove all red-zone leaves covered; no FPS claim.",
   "zh": "mainc8d34用显式frame-red-zone三次开放世界各420秒无HDD Streamer崩溃；1030／1166／1186次恢复写，每次inflate_fast至少15次。保留本地日志、mimalloc和to-intel条件。未保护未framing输出，也不证明所有叶函数覆盖，无FPS结论。",
   "ar": "main c8d34 مع frame-red-zone اختياري يبقى 3×420 ث بالعالم المفتوح بلا Streamercrash.1030/1166/1186 كتابة مستأنفة، ≥15 في inflate_fast كل مرة. تسجيل محلي/mimalloc/to-intel شروط؛ لا حماية للخرج غير المؤطر أو كل الدوال، بلا FPS.",
   "pt": "Mainc8d34 comframe-red-zone opt-in sobrevive3×420s no mundo.1030/1166/1186escritas,≥15inflate_fast/corrida, semStreamercrash. Logs locais/mimalloc/to-intel mantidos; não protege saída sem opção/todas folhas; semFPS.",
   "de": "Mainc8d34 mit opt-inframe-red-zone übersteht3×420s Welt.1030/1166/1186Schreibfaults,≥15inflate_fastje Lauf, keinStreamercrash. Lokale Logs/mimalloc/to-intel gelten; kein Schutz ungerahmter Ausgabe/aller Leaves; keineFPS.",
   "fr": "Mainc8d34 avecframe-red-zone opt-in tient3×420s en monde.1030/1166/1186écritures,≥15inflate_fastpar essai, sansStreamercrash. Logs locaux/mimalloc/to-intel conservés; ni sortie non encadrée ni toutes fonctions protégées; pasFPS.",
   "es": "Mainc8d34 conframe-red-zone opcional aguanta3×420s en mundo.1030/1166/1186escrituras,≥15inflate_fastpor ensayo, sinStreamercrash. Logs locales/mimalloc/to-intel conservados; no protege salida sin framing/todas hojas; sinFPS."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9136#issuecomment-6390382840"
   }
  ]
 },
 "demons-souls": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "The12-thread core-reservation prototype and32-thread main-menu counterexample are separate machines; neither validates a universal tuning default. New Stonefang tests pass one stencil guard but still fail during loading at invalid-write/device-loss. Keep earlier in-game reports under their original builds.",
   "zh": "12线程留核原型与32线程主菜单反例属于两台机器，均不能验证通用调优默认。新Stonefang测试越过一项stencil保护后仍在加载时因无效写／丢设备停止；早期游戏过程报告保留原构建。",
   "ar": "نموذج 12 خيطاًومثال قائمة 32 خيطاًمضيفان مختلفان، لا ضبط عام. اختبارات Stonefang تتجاوزحارس stencil ثم تفشل بالتحميل/كتابة/فقد GPU. تقارير اللعب القديمة تحت أبنيتها.",
   "pt": "Protótipo12threads e contraexemplo32threads/menu são máquinas distintas, sem ajuste universal. Stonefang passa um guardstencil mas falha na carga/escrita/GPU. Jogos anteriores mantêm builds.",
   "de": "12-Thread-Prototyp und32-Thread-Menügegenprobe sind andere Hosts, kein allgemeiner Standard. Stonefang passiert Stencilguard, scheitert weiter beim Laden/Schreiben/GPUverlust. Alte Spielberichte behalten Builds.",
   "fr": "Prototype12threads et contre-exemple32threads/menu sont deux hôtes, sans réglage universel. Stonefang passe guardstencil mais échoue au chargement/écriture/GPU. Anciens jeux gardent builds.",
   "es": "Prototipo12hilos y contraprueba32hilos/menú son equipos distintos, sin ajuste universal. Stonefang supera guardstencil pero falla al cargar/escribir/GPU. Informes antiguos conservan builds."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7203#issuecomment-6399882630"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10634#issuecomment-6389742114"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7203#issuecomment-6396805983"
   }
  ]
 },
 "astro-bot-ppsa21567": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Do not transfer PPSA21564 or other regional-ID results to this entry. The reported content version is 01.018.000.",
   "zh": "不能将 PPSA21564 或其他地区编号结果套用于此条目；来源内容版本为 01.018.000。",
   "ar": "لا تنقل نتائج PPSA21564 أو معرّفات أخرى هنا؛ نسخة المحتوى 01.018.000.",
   "pt": "Não transfira resultados PPSA21564/outros IDs; conteúdo01.018.000.",
   "de": "Keine PPSA21564/andere-ID-Ergebnisse übertragen; Inhalt01.018.000.",
   "fr": "Ne transposez pas PPSA21564/autres IDs ; contenu01.018.000.",
   "es": "No traslades resultados PPSA21564/otros IDs; contenido01.018.000."
  },
  "finding": {
   "en": "Different21567/v01.018: default256MiB depth-plane budget thrashes84MiB copies;512MiB matches2048 in the opening scene,2allocations instead of13248. Warm512 run22–471s has no slow stretch; visual9–15 FPS is uninstrumented cinematic, not playable performance. Later levels, smaller GPUs and intermediate budgets untested.",
   "zh": "另一个21567／v01.018：默认256MiB深度面预算反复分配84MiB复制，512与2048在该开场同为2次分配、替代13248次。512热缓存22–471秒无慢段；目测9–15 FPS属未仪器化过场，不是可玩性能。后关、小GPU及中间预算未测。",
   "ar": "21567/v01.018 مختلف: ميزانية 256MiB تكررنسخ 84MiB؛ 512 و 2048 كلاهما تخصيصان بدل 13248 في الافتتاح. تشغيل 512 دافئ 22–471 ث بلا بطء؛ 9–15 FPS تقدير بصري للمشهد لا لعب. بقية المراحل/GPUs صغيرة/ميزانيات أخرى غير مختبرة.",
   "pt": "Outro21567/v01.018:256MiB faz churn de cópias84MiB;512iguala2048,2alocações contra13248na abertura.512quente22–471s sem lentidão;9–15 FPSvisual de cinemática, não jogabilidade. Outros níveis, GPUs pequenas e valores intermédios por testar.",
   "de": "Andere21567/v01.018:256MiBverursacht84MiB-Kopierchurn;512wie2048zwei statt13248Allokationen im Intro.512warm22–471s ohne langsamen Abschnitt; visuell9–15 FPSnicht gemessenes Gameplay. Folgelever, kleineGPUs/Zwischenbudgets ungeprüft.",
   "fr": "Autre21567/v01.018:256MiBfait réallouer84MiB;512comme2048, deux au lieu de13248dans l’ouverture.512chaud22–471s sans passage lent;9–15 FPSvisuel cinématique, pas jouabilité. Suite, petitsGPU, budgets intermédiaires non testés.",
   "es": "Otro21567/v01.018:256MiBrepite copias84MiB;512iguala2048, dos asignaciones frente13248en inicio.512caliente22–471s sin tramo lento;9–15 FPSvisual de cinemática, no jugabilidad. Otros niveles, GPUs pequeñas y valores intermedios sin probar."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19169221"
   }
  ]
 },
 "death-stranding-2": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Combined13PRs plus three unsubmitted multisample/CMASK changes reaches black loading/blue spinner:267s, device loss under submission-memory pressure. No controlled gameplay, audio or FPS. Exact main head and CPU not restated; not plain-main compatibility or a completed memory fix.",
   "zh": "13个PR及三个未提交的多采样／CMASK改动到黑色加载／蓝色转圈：267s,device loss under submission-memory pressure。无操作游玩、音频或FPS证据；main准确头和CPU未重述，不是干净main兼容或内存已修复。",
   "ar": "13PR مع 3 تغييرات محلية multisample/CMASK تصل شاشة تحميل سوداء/دوار:267s, device loss under submission-memory pressure. لا لعب/صوت/FPS، رأس main و CPU غير مذكورين؛ ليس main نظيفاً أو إصلاح ذاكرة.",
   "pt": "13PRs e3mudanças locaismultisample/CMASK chegam à carga preta/roda:267s, device loss under submission-memory pressure. Sem jogo, áudio ouFPS; headmain/CPUausentes, não é compatibilidade limpa/fix memória.",
   "de": "13PRs und3lokaleMultisample/CMASK-Änderungen erreichen schwarzes Laden/blauen Kreis:267s, device loss under submission-memory pressure. Kein Gameplay/Ton/FPS; main/CPUfehlen, keine saubere Kompatibilität/Speicherfix.",
   "fr": "13PRet3modifications localesmultisample/CMASK atteignent chargement noir/roue:267s, device loss under submission-memory pressure. Sans jeu/son/FPS; headmain/CPUabsents, pas compatibilité propre/fix mémoire.",
   "es": "13PRy3cambios localesmultisample/CMASK alcanzan carga negra/rueda:267s, device loss under submission-memory pressure. Sin juego/audio/FPS; headmain/CPUausentes, no compatibilidad limpia/arreglo memoria."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/5424#discussioncomment-19125215"
   }
  ]
 },
 "ghost-of-tsushima-directors-cut": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Locally reconciled newer main+native multisample stencil plays intro/audio/splashes then bursty frames, not gameplay. Trace sees frame counter one behind and queue0x20 waiting on a word only the waiting CPU thread writes; stale mirror remains hypothesis.150s without driver failure is not a fix; exact composition/hardware not restated.",
   "zh": "本地整合新main及原生多采样stencil后有片头、音频和启动画面，再间歇呈现，不是游玩。追踪见帧计数落后一、queue0x20等待仅等待中的CPU线程写入的字，旧镜像回写仍是假设。150秒无驱动失败不等于修复，准确组合／硬件未重述。",
   "ar": "دمج main أحدث محلياً مع stencil متعدد العينات يعرض مقدمة/صوتاً/شعارات ثم دفعات إطارات، لا لعب. العداد متأخرواحداً والصف ينتظر كلمة لا يكتبها إلا الخيط المنتظر؛ المرايا القديمة فرضية.150 ثبلا فشل ليست إصلاحاً؛ بناء/عتاد غير محددين.",
   "pt": "Main novo reconciliado localmente+stencilmultiamostra mostra intro/áudio/logos e rajadas, não jogo. Contador um atrás, fila espera palavra do próprio thread bloqueado; mirror antigo é hipótese.150s sem falha não é fix; composição/hardware ausentes.",
   "de": "Lokal abgeglichenes neueres main+Multisample-Stencil zeigt Intro/Ton/Logos und Framebursts, kein Gameplay. Zähler eins zurück, Queue wartet auf Wort des wartenden CPU-Threads; alte Mirror-Rückschreibung nur Hypothese.150s ohne Treiberfehler kein Fix; Build/Hardware fehlen.",
   "fr": "Main récent réconcilié localement+stencil multisample montre intro/son/logos puis rafales, pas jeu. Compteur en retard d’un, queue attend mot du threadCPU bloqué; miroir obsolète reste hypothèse.150s sans défaut pilote pas fix; composition/matériel non précisés.",
   "es": "Main nuevo reconciliado localmente+stencilmultimuestra muestra intro/audio/logos y ráfagas, no juego. Contador uno atrás, cola espera palabra delCPUque espera; mirror obsoleto es hipótesis.150s sin fallo no es fix; composición/hardware ausentes."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4461#discussioncomment-19178775"
   }
  ]
 },
 "ghost-of-yotei": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Match the exact PS5 package and tested source tree. This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "核对准确PS5包与实测源码树。 本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "طابق حزمة PS5 وشجرة المصدر المختبرة. تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Confirme pacote PS5 e árvore testada. Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "PS5-Paket und getesteten Quellstand abgleichen. Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Vérifiez paquet PS5 et source testée. Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Comprueba paquete PS5 y código probado. Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Pinned2ac682f986 Windows-only owned-proof slice at river village:+0.61±0.06 presents/10s(≈8.5%),0verification disagreements/0faults. Texture checks become cheaper, not a released/default-main gain. Linux/macOS fall back; later multi-arm results and nonmatching replay images remain separate.",
   "zh": "固定2ac682f986在Windows河村的owned-proof实验＋0.61±0.06呈现／10秒（约8.5%），验证零差异／故障。降低纹理检查成本，不是发行或干净main增益；Linux／Mac回退旧路径，后续多臂及重放图像不匹配另列。",
   "ar": "شريحة 2ac682f986 على Windows بالقرية:+0.61±0.06 تقديم/10 ث(≈8.5%)، 0 اختلاف/عطل. تقل كلفة فحص النسج، ليس إصداراً/main. Linux/Mac يرجعان؛ أذرع لاحقة وصور replay المختلفة منفصلة.",
   "pt": "Slice2ac682f986Windows na aldeia:+0,61±0,06apresentações/10s(≈8,5%),0diferenças/falhas. Verificação de texturas mais barata, não main/release. Linux/Macrecorrem ao antigo; multi-arm/replay diferentes separados.",
   "de": "Slice2ac682f986Windows im Dorf:+0,61±0,06Presents/10s(≈8,5%),0Abweichungen/Faults. Billigere Texturprüfung, keinmain/Releasegewinn. Linux/Macfallen zurück; spätere Mehrarm-/Replayabweichungen getrennt.",
   "fr": "Slice2ac682f986Windows au village:+0,61±0,06présentations/10s(≈8,5%),0écart/faute. Vérifications textures moins chères, pasmain/release. Linux/Macreviennent à l’ancien; multi-arm/replay distincts.",
   "es": "Slice2ac682f986Windows en aldea:+0,61±0,06presentaciones/10s(≈8,5%),0diferencias/fallos. Chequeo de texturas menor, no main/release. Linux/Macrecurren al antiguo; multi-arm/replay aparte."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
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
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19172352"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19172970"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19178132"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19176545"
   }
  ]
 },
 "sonic-unleashed-recompiled": {
  "checked": "2026-10-26",
  "edition": {
   "en": "Reports on this page identify PPSA99902. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA99902；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA99902؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA99902; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA99902; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA99902 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA99902; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "finding": {
   "en": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction: title/autosave/Continue/movie and acknowledged skip, then natural abort576.373s attype14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036. No gameplay; historical32rings remain on their old fork.0VUID errors coexist warnings/watchdogs/fences; componentGPUpasses do not establish unchanged-main success, fix causality or speed.",
   "zh": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction：标题／自动存档／Continue／影片及确认跳过后，576.373秒自然终止于type14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036。无游玩，历史32枚戒指保留旧分支；零VUID错误仍有警告／watchdog／fence，组件GPU通过不证明干净main、因果或速度。",
   "ar": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction: عنوان/حفظ/Continue/فيلم وتخطي مؤكد ثم توقف طبيعي 576.373 ث: type14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036. لا لعب؛ 32 حلقة تاريخية تبقى بفرعها.0VUID مع تحذيرات/مهلات/fences؛ اجتياز مكونات لا يثبت main/سبب/سرعة.",
   "pt": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction: título/save/Continue/filme/salto confirmado, depois aborto natural576.373s: type14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036. Sem jogo;32anéis históricos no fork antigo.0VUIDcom avisos/watchdogs/fences; testesGPU não provammain/causa/velocidade.",
   "de": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction: Titel/Autosave/Continue/Film/bestätigter Skip, dann natürlicher Abbruch576.373s: type14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036. Kein Gameplay; historische32Ringe behalten alten Fork.0VUIDmit Warnungen/Watchdogs/Fences; Komponententests beweisenmain/Ursache/Tempo nicht.",
   "fr": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction: titre/save/Continue/film/saut confirmé, puis arrêt naturel576.373s: type14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036. Pas de jeu;32anneaux historiques gardent ancien fork.0VUIDavec avertissements/watchdogs/fences; testsGPU ne prouventmain/causalité/vitesse.",
   "es": "fork799671df6d/mainae7 +preserved fixes/#11133 local correction: título/save/Continue/película/salto confirmado, aborto natural576.373s: type14/format71/fragmentsLog2=3/maxMip4 descriptor refusal, #3036. Sin juego;32anillos históricos en fork antiguo.0VUIDcon avisos/watchdogs/fences; testsGPU no pruebanmain/causa/velocidad."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4443"
   }
  ]
 },
 "dave-the-diver": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "d2a42639ba run-of-identical-fills rule passes old refusal and reports “Level has started”, then185s up to600presents/10s, zero drops/no crash. No input or identified gameplay frame, so60 FPS is a presentation cap, not proven playable gameplay. Follow-up tests642/642 on three AMD GPUs are API checks.",
   "zh": "d2a42639ba连续同值填充规则越过旧拒绝，出现“Level has started”，185秒升至每10秒600次呈现、零丢帧无崩溃。无输入或明确游戏帧，60 FPS是呈现上限而非可玩证明。三种AMD GPU各642／642是API用例。",
   "ar": "d2a42639ba يمر الرفض بقاعدة التعبئات المتطابقة ويبلغ“Level has started”، 185 ث حتى 600 تقديم/10 ث بلا إسقاط/انهيار. لا إدخال/إطار لعب محدد؛ 60 FPS سقف تقديم لا لعب مثبت.642/642 على 3AMD اختبارات API.",
   "pt": "d2a42639bapassa recusa com fills idênticos,“Level has started”,185s até600apresentações/10s, zero perdas/sem crash. Sem entrada/quadro de jogo identificado;60 FPSé teto de apresentação, não jogabilidade.642/642em3AMD sãoAPI.",
   "de": "d2a42639bapassiert Verweigerung mit identischen Fills,“Level has started”,185s bis600Presents/10s, keine Drops/Crash. Ohne Eingabe/identifiziertes Gameplaybild;60 FPSnur Präsentationslimit, keine Spielbarkeitszusage.642/642auf3AMD sindAPI.",
   "fr": "d2a42639bapasse refus avec fills identiques,“Level has started”,185s jusqu’à600présentations/10s, zéro perte/crash. Sans entrée/image de jeu identifiée;60 FPSest plafond de présentation, pas jouabilité.642/642sur3AMD sontAPI.",
   "es": "d2a42639bapasa rechazo con fills idénticos,“Level has started”,185s hasta600presentaciones/10s, cero pérdidas/fallos. Sin entrada/cuadro de juego identificado;60 FPSes límite de presentación, no jugabilidad.642/642en3AMD sonAPI."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7608#issuecomment-6397267866"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7608#issuecomment-6401150419"
   }
  ]
 },
 "syobon-action-homebrew": {
  "checked": "2026-10-26",
  "edition": {
   "en": "This is the community PS5 source port, not a commercial retail title.",
   "zh": "这是社区 PS5 源码移植，不是商业零售游戏。",
   "ar": "هذا port مجتمعي PS5 لا عنوان تجاري.",
   "pt": "Port comunitário PS5, não título comercial.",
   "de": "PS5-Community-Port, kein Handelsspiel.",
   "fr": "Port communautaire PS5, pas titre commercial.",
   "es": "Port comunitario PS5, no título comercial."
  },
  "nextTest": {
   "en": "Reproduce the exact package/build and selected scene, with the reported patches and hardware. Verify input, audio, save reload and a longer session separately; unknown fields stay unknown.",
   "zh": "按报告的包、构建、补丁、硬件与场景复测，分别核验输入、音频、读档及更长会话，未知字段保持未知。",
   "ar": "أعد نفس الحزمة/البناء/التعديلات/العتاد والمشهد؛ تحقق منفصلاً من الإدخال والصوت وإعادة الحفظ والمدة، وابقِ المجهول مجهولاً.",
   "pt": "Repita pacote/build/patches/máquina/cena; verifique entrada, áudio, recarga e sessão longa separadamente. Desconhecidos permanecem assim.",
   "de": "Paket/Build/Patches/Hardware/Szene reproduzieren; Eingabe, Ton, Laden und längere Sitzung getrennt prüfen. Unbekanntes bleibt unbekannt.",
   "fr": "Reproduisez paquet/build/patches/matériel/scène; vérifiez saisie, son, rechargement et longue durée séparément. Inconnus conservés.",
   "es": "Repite paquete/build/parches/equipo/escena; verifica entrada, audio, recarga y larga sesión por separado. Mantén desconocidos."
  },
  "sources": [
   {
    "label": "Experimental Mac observations",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11147"
   },
   {
    "label": "Experimental Mac observations",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/5932#discussioncomment-19182821"
   },
   {
    "label": "Experimental Mac observations",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11119"
   }
  ],
  "finding": {
   "en": "Experimental Mac tree: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1, Clang21, Rosetta2, MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000 accepts a real USB Xbox Series pad60s/all buttons, sticks, triggers; rumble untested. Syobon47402/01.001.000 reaches level1/move/jump/death≈28.6 FPS30s with scripted input, audio untested. Main alone still cannot build Mac libraries; no native-ARM or released-Mac claim.",
   "zh": "实验Mac树为main3a2c51afd＋mugurc27e9689743＋#10885／#10540／#11119，M4／macOS27.0.1、Clang21、Rosetta2、MoltenVK1.4.2／SDK1.4.363。DriftCheck98766／01.000.000实体USB Xbox手柄60秒按钮／摇杆／扳机有效，震动未测；Syobon47402／01.001.000脚本输入到首关行走／跳跃／死亡，30秒约28.6 FPS，音频未测。main仍不能单独构建Mac库，不是原生ARM或Mac发行。",
   "ar": "شجرة Mac تجريبية: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119، M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000 بذراع XboxUSB فعلي 60 ثأزرار/عصي/زناد، اهتزاز غير مختبر. Syobon47402/01.001.000 مرحلة 1 ومشي/قفز/موت 28.6 FPS/30 ثإدخال مكتوب، صوت مجهول. main وحده لا يبني مكتبات Mac؛ لا ARM أصلي/إصدار Mac.",
   "pt": "ÁrvoreMac experimental: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000comXboxUSB real60s, botões/sticks/gatilhos, vibração não testada. Syobon47402/01.001.000nível1/movimento/salto/morte28,6 FPS/30s, entrada guiada, áudio por testar. Mainnão compila libsMac só; semARMnativo/releaseMac.",
   "de": "ExperimentellerMac-Baum: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000echterXboxUSB60s, Tasten/Sticks/Trigger, Vibration ungeprüft. Syobon47402/01.001.000Level1/Gehen/Sprung/Tod28,6 FPS/30s, Skripteingabe, Ton ungeprüft. Mainallein baut keineMac-Libs; keinARMnativ/Mac-Release.",
   "fr": "ArbreMac expérimental: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000avecXboxUSB réel60s, boutons/sticks/gâchettes, vibration non testée. Syobon47402/01.001.000niveau1/marche/saut/mort28,6 FPS/30s, entrée scriptée, son non testé. Mainseul ne construit pas libsMac; niARMnatif nireleaseMac.",
   "es": "ÁrbolMac experimental: main 3a2c51afd+mugurc27e9689743+#10885/#10540/#11119, M4/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2/SDK1.4.363. DriftCheck98766/01.000.000conXboxUSB real60s, botones/sticks/gatillos, vibración sin probar. Syobon47402/01.001.000nivel1/movimiento/salto/muerte28,6 FPS/30s, entrada por guion, audio sin probar. Mainsolo no construye libsMac; niARMnativo nireleaseMac."
  }
 },
 "hollow-knight-silksong": {
  "checked": "2026-10-26",
  "finding": {
   "en": "Earlier native seam observations keep their exact conditions. New source-only review finds10547 does not serialize hostInterpolationFirst at3609b981: request replay can choose different interpolation. No fresh native failure reproduced; GPU tests calling Recompile directly do not validate request round-trip equivalence.",
   "zh": "早期原生接缝报告保留原条件。新源码审查发现10547在3609b981未序列化hostInterpolationFirst，请求重放可能选不同插值；未复现新的原生故障，直接Recompile测试不能验证请求往返等价。",
   "ar": "تقارير الوصلة الأصلية تحتفظ بشروطها. مراجعة مصدرية تجد 10547 لا يسلسل hostInterpolationFirst عند 3609b981؛ replay قد يختلف. لا عطل أصلي جديد معاد؛ Recompile مباشر لا يختبر roundtrip.",
   "pt": "Relatos nativos mantêm condições. Revisão fonte:10547não serializahostInterpolationFirstem3609b981, replay pode diferir. Sem falha nativa nova; Recompiledireto não valida roundtrip.",
   "de": "Native Nahtberichte behalten Bedingungen. Quellprüfung:10547serialisiert hostInterpolationFirstbei3609b981nicht, Replay kann abweichen. Kein neuer nativer Fehler reproduziert; direktesRecompileprüft keinen Roundtrip.",
   "fr": "Rapports natifs gardent conditions. Revue source:10547ne sérialise pashostInterpolationFirstà3609b981, replay peut différer. Pas de nouveau défaut natif reproduit; Recompiledirect ne valide pas roundtrip.",
   "es": "Informes nativos mantienen condiciones. Revisión fuente:10547no serializahostInterpolationFirsten3609b981, replay puede variar. Sin fallo nativo nuevo; Recompiledirecto no valida roundtrip."
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
   },
   {
    "label": "Source-only serializer review",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10547#issuecomment-6394515838"
   }
  ]
 }
});

Object.assign(gameResearch,{
 "aila": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Official v0.1.3 pair reaches the first scene in five runs, one over six minutes into gameplay. Keyboard, audio and save-file writes work; reload is untested. About 3 FPS in the scene, 4–5 in menus and 8–12 in logos. A lit metal door is visible but the rest is black; intended darkness is unconfirmed. No crash reported, not a full-playability result.",
   "zh": "配套官方 v0.1.3 在五次运行中到达首场景，一次进入后超过六分钟；键盘、音频及存档文件写入有效，未验证重载。场景约3 FPS、菜单4–5、标志8–12。可见受光金属门，其余黑暗是否正常未知；未报崩溃，不代表完整可玩。",
   "ar": "زوج الإصدار الرسمي v0.1.3 يبلغ المشهد الأول في خمسة تشغيلات، أحدها أكثر من ست دقائق داخله. لوحة المفاتيح والصوت وكتابة الحفظ تعمل؛ إعادة التحميل مجهولة. المشهد نحو 3 FPS والقائمة 4–5 والشعارات 8–12. باب مضاء والباقي أسود، ولا يُعرف إن كان ذلك مقصوداً. لا انهيار مذكور ولا إثبات للعبة كاملة.",
   "pt": "O par oficial v0.1.3 chega à primeira cena em cinco ensaios, um com mais de seis minutos em jogo. Teclado, áudio e escrita da gravação funcionam; reabrir por verificar. Cena ≈3 FPS, menu 4–5, logótipos 8–12. Porta iluminada e resto preto, sem confirmar se é intencional. Sem falha relatada, não prova jogo completo.",
   "de": "Das offizielle v0.1.3-Paar erreicht in fünf Läufen die erste Szene, einmal über sechs Minuten darin. Tastatur, Ton und Speicherdateien funktionieren; Neuladen ungeprüft. Szene ≈3 FPS, Menü 4–5, Logos 8–12. Beleuchtete Tür, übriges Bild schwarz; beabsichtigte Dunkelheit unklar. Kein gemeldeter Absturz, kein vollständiger Spielnachweis.",
   "fr": "Le couple officiel v0.1.3 atteint la première scène sur cinq essais, dont un dépasse six minutes en jeu. Clavier, son et écriture des sauvegardes fonctionnent, rechargement non vérifié. Scène ≈3 FPS, menu 4–5, logos 8–12. Porte éclairée et reste noir, obscurité voulue non confirmée. Aucun crash signalé, sans preuve de jeu complet.",
   "es": "La pareja oficial v0.1.3 llega a la primera escena en cinco pruebas, una supera seis minutos dentro. Teclado, audio y escritura de guardado funcionan; recarga sin probar. Escena ≈3 FPS, menú 4–5 y logos 8–12. Puerta iluminada y resto negro, oscuridad prevista sin confirmar. Sin fallo informado ni prueba de juego completo."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11206"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/10014194/"
   }
  ]
 },
 "deathloop": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.Report PPSA01670 differs from the artwork page’s PPSA01302. HDR/SDR settings and patch scope remain explicit.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。 实测01670与配图页01302地区包不同，保留HDR／SDR及补丁边界。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر. التقرير01670 يختلف عن صفحة الصورة01302؛ HDR/SDR والتعديلات منفصلة.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado. Relato01670 difere da arte01302; HDR/SDR e patches explícitos.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht. Bericht01670 anders als Bildseite01302; HDR/SDR/Patches getrennt.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé. Rapport01670 différent de l’art01302; HDR/SDR et patches explicites.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado. Informe01670 distinto del arte01302; HDR/SDR y parches explícitos."
  },
  "finding": {
   "en": "Local #10414/#10507 stack reaches first-person beach scenes with subtitles and audio in three 600 s runs. Last 50 s show 11–16 presents per 10 s (≈1.1–1.6 FPS). Scripted prompts, no longer beach play verified. HDR10 hides overlay text; these runs force SDR. #10507 later merged, but no clean-main beach retest is supplied.",
   "zh": "本地#10414／#10507组合在三次600秒运行中到达第一人称海滩，字幕与音频有效；末50秒每10秒呈现11–16帧，约1.1–1.6 FPS。脚本推进，未验证更后续游玩。HDR10不合成文字层，实测强制SDR；#10507后已合并，但没有干净main海滩复测。",
   "ar": "تركيب محلي #10414/#10507 يبلغ الشاطئ بمنظور أول وترجمة وصوت في ثلاث محاولات 600ث. آخر 50ث: 11–16 عرضاً لكل 10ث، أي ≈1.1–1.6 FPS. إدخال مكتوب، وما بعد الشاطئ غير مختبر. HDR10 يخفي النص؛ التشغيل يفرض SDR. دمج #10507 لاحقاً لا يثبت إعادة اختبار main نظيف.",
   "pt": "A composição local #10414/#10507 chega à praia em primeira pessoa, com legendas e áudio, em três ensaios de 600 s. Últimos 50 s: 11–16 apresentações/10 s (≈1,1–1,6 FPS). Entradas por guião, sem jogo posterior. HDR10 oculta texto; força SDR. #10507 entretanto integrado, sem novo ensaio main limpo na praia.",
   "de": "Lokaler #10414/#10507-Stack erreicht Strand in Egoansicht mit Untertiteln/Ton in drei 600-s-Läufen. Letzte 50 s: 11–16 Bilder/10 s (≈1,1–1,6 FPS). Skripteingaben, späteres Spielen ungeprüft. HDR10 verbirgt Text; SDR erzwungen. Späterer #10507-Merge ist kein neuer sauberer Main-Strandtest.",
   "fr": "La composition locale #10414/#10507 atteint la plage à la première personne avec sous-titres et son sur trois essais de 600 s. Dernières 50 s: 11–16 présentations/10 s (≈1,1–1,6 FPS). Entrées scriptées, suite non vérifiée. HDR10 masque le texte, SDR forcé. Fusion ultérieure de #10507 sans nouvel essai main propre à la plage.",
   "es": "La combinación local #10414/#10507 llega a la playa en primera persona con subtítulos/audio en tres pruebas de 600 s. Últimos 50 s: 11–16 presentaciones/10 s (≈1,1–1,6 FPS). Entradas por guion, sin comprobar la continuación. HDR10 oculta texto; SDR forzado. #10507 se fusionó después, sin nueva prueba main limpio en la playa."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11484"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/deathloop/"
   }
  ]
 },
 "neptunia-reverse": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "With #10556, four runs reach title/tutorial and opening narrated dialogue, then all stop at 271–285 s on sampler LOD bias. Mostly 55–60 FPS before stopping, not combat performance. Separate #8098 audio stack yields audible sound in three runs; no battles, continued play or save reload verified.",
   "zh": "加#10556后四次到达标题、教程和开场叙事对话，均在271–285秒因采样器LOD偏置停止；多数55–60 FPS不是战斗性能。另加#8098的三次运行可听见音频；未验证战斗、后续游玩或存档重载。",
   "ar": "مع #10556 أربع محاولات تبلغ العنوان والإرشادات وحوار الافتتاح، ثم تتوقف كلها عند 271–285ث بسبب LOD bias. غالباً 55–60 FPS قبل التوقف، لا أداء قتال. تركيب صوت منفصل مع #8098 مسموع بثلاث محاولات؛ القتال والاستمرار وإعادة الحفظ مجهولة.",
   "pt": "Com #10556, quatro ensaios chegam ao título/tutorial/diálogo inicial e param aos 271–285 s no LOD bias. Sobretudo 55–60 FPS antes da paragem, não combate. Composição separada com #8098 dá áudio audível em três ensaios; batalhas, continuação e reabrir gravações por verificar.",
   "de": "Mit #10556 erreichen vier Läufe Titel/Tutorial/Anfangsdialog und stoppen bei 271–285 s am LOD-Bias. Meist 55–60 FPS davor, keine Kampfleistung. Separater Audiostack mit #8098 liefert in drei Läufen hörbaren Ton; Kämpfe, Fortsetzung und Neuladen ungeprüft.",
   "fr": "Avec #10556, quatre essais atteignent titre/tutoriel/dialogues puis s’arrêtent à 271–285 s sur le biais LOD. Surtout 55–60 FPS avant l’arrêt, pas une mesure de combat. Composition audio distincte avec #8098 audible sur trois essais; combats, suite et rechargement non vérifiés.",
   "es": "Con #10556, cuatro pruebas alcanzan título/tutorial/diálogos y paran a los 271–285 s por sesgo LOD. Sobre todo 55–60 FPS antes, sin medir combate. Combinación separada con #8098 aporta audio audible en tres pruebas; batallas, continuación y recarga sin verificar."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11493"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/UP0031-PPSA02721_00-NEPREVERSEGAME01/"
   }
  ]
 },
 "skyrim-ppsa03747": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.The matching store identifies Special Edition; the report does not establish Anniversary content. Cross-generation art is not used as PS5 test imagery.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。 匹配商店页为特别版，报告不证明周年内容；跨世代配图不冒充PS5实测。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر. المتجر المطابق يسمي Special Edition؛ لا دليل Anniversary، والصورة المشتركة ليست اختبار PS5.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado. Loja identifica Special Edition, sem provar Anniversary; arte entre gerações não é teste PS5.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht. Store bestätigt Special Edition, keine Anniversary-Inhalte belegt; Mehrgenerationenbild kein PS5-Test.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé. Boutique identifie Special Edition sans preuve Anniversary; art multigénération distinct d’un test PS5.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado. Tienda identifica Special Edition sin probar Anniversary; arte multigeneración no es test PS5."
  },
  "finding": {
   "en": "Opening cart, same420s input route: base5.4 presents/s; candidate’s surviving run12.0. One of two candidate runs stops presenting at≈200s on zero-label waits. Base172ms vs candidate78ms median, but not free-control gameplay or a stable universal improvement; small-memory admission remains unresolved.",
   "zh": "开场马车相同420秒输入：本体5.4呈现／秒，候选未停止那次12.0；两次候选有一次约200秒在零label等待停呈现。中位帧本体172毫秒、候选78，但不是自由操控或通用稳定提升，小内存准入仍未解决。",
   "ar": "العربة، نفس مسار420ث: أساس5.4 عرض/ث والمرشح الناجي12.0. إحدى محاولتي المرشح تتوقف≈200ث عند labels صفر. وسيط172/78ms، لا تحكم حر أو تحسين عام ثابت؛ ذاكرة صغيرة غير محسومة.",
   "pt": "Carroça, mesma rota420 s: base5,4 apresentações/s, candidato sobrevivente12,0. Um de dois candidatos para≈200 s em labels zero. Mediana172/78 ms, sem controlo livre/melhoria universal; pouca memória pendente.",
   "de": "Wagen, gleiche420-s-Route: Basis5,4 Bilder/s, überlebender Kandidat12,0. Einer von zwei Kandidaten stoppt≈200 s an Null-Labels. Median172/78 ms, keine freie Steuerung/universelle Stabilität; kleine Speicher offen.",
   "fr": "Chariot, même route420 s: base5,4 présentations/s, candidat survivant12,0. Un des deux candidats stoppe≈200 s sur labels nuls. Médiane172/78 ms, sans contrôle libre/gain universel stable; petite mémoire non résolue.",
   "es": "Carro, misma ruta420 s: base5,4 presentaciones/s, candidato superviviente12,0. Uno de dos candidatos para≈200 s por labels cero. Mediana172/78 ms, sin control libre/mejora universal estable; poca memoria pendiente."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11508"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6423645589"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-gb/product/EP1003-PPSA03747_00-TESVSKYRIM000000/"
   }
  ]
 },
 "days-gone-remastered": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "A large local stack reaches in-game dialogue and save reads/writes at 0.2–2 FPS, menu ≈9. Duration, content version, free control, audio and reload unknown. APR sizing, stack alignment, image modes, target format, event errors and pixel LDS were changed locally. A newer GPU-heap branch instead fails unresolved imports at startup; no drop-in improvement or main/release success.",
   "zh": "大量本地修改到达游戏内对话并读写存档，游戏0.2–2 FPS、菜单约9。时长、内容版本、自由操作、音频和重载未知；APR尺寸、栈对齐、图像模式、目标格式、事件返回和像素LDS均有本地改动。后试GPU heap分支反在启动缺导出，不是即换即用改进或main／发行版成功。",
   "ar": "تركيب محلي كبير يبلغ حوار اللعب وقراءة/كتابة الحفظ عند 0.2–2 FPS، والقائمة ≈9. المدة والنسخة والتحكم الحر والصوت وإعادة التحميل مجهولة. تعديلات APR والمحاذاة والصور والأحداث وLDS محلية. فرع GPU heap أحدث يفشل باستيرادات عند البدء؛ لا نجاح main/إصدار أو تحسين مباشر.",
   "pt": "Composição local extensa chega a diálogo em jogo e lê/escreve gravações a 0,2–2 FPS; menu ≈9. Duração, versão, controlo livre, áudio e reabrir desconhecidos. APR, alinhamento, imagens, formatos, eventos e LDS alterados localmente. Ramo GPU heap mais novo falha nos imports iniciais; sem melhoria direta ou sucesso main/release.",
   "de": "Großer lokaler Stack erreicht Spieldialog und Speicherzugriffe bei 0,2–2 FPS, Menü ≈9. Dauer, Version, freie Steuerung, Ton/Neuladen unbekannt. APR, Stack, Bildmodi, Zielformat, Ereignisse/LDS lokal geändert. Neuerer GPU-Heap-Zweig scheitert bereits an Importen; kein direkter Ersatz oder Main/Release-Erfolg.",
   "fr": "Grande composition locale atteint dialogue en jeu et lecture/écriture de sauvegardes à 0,2–2 FPS, menu ≈9. Durée, version, contrôle libre, son/rechargement inconnus. APR, pile, images, formats, événements/LDS modifiés localement. Branche GPU heap plus récente échoue aux imports initiaux; pas de gain direct ni succès main/release.",
   "es": "Gran combinación local llega a diálogo en juego y lee/escribe guardados a 0,2–2 FPS; menú ≈9. Duración, versión, control libre, audio/recarga desconocidos. APR, pila, imágenes, formatos, eventos/LDS modificados localmente. Rama GPU heap más nueva falla al importar al inicio; sin mejora directa ni éxito main/release."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11376"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/UP9000-PPSA28180_00-DAYSGONEREMASTER/"
   }
  ]
 },
 "mewgenics": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Local mouse implementation plus #11482/#7048 reaches a tutorial battle. Two alternating pairs: same dialogue at 80–110 s gives base p50 16.7 ms versus candidate 161–272 ms. Later traces show different scenes; base also falls to ≈8 FPS on the move grid. This is not clean-main play or a valid whole-trace performance ratio.",
   "zh": "本地鼠标实现加#11482／#7048到达教程战斗。两组交替在80–110秒相同对话中，本体p50 16.7毫秒，对照PR为161–272。后段追踪场景不同，本体到移动格也降至约8 FPS；不是干净main游玩，也不能按整段追踪计算提速比。",
   "ar": "تنفيذ ماوس محلي مع #11482/#7048 يبلغ معركة تعليمية. زوجان متناوبان في الحوار نفسه 80–110ث: أساس p50 16.7ms مقابل 161–272 للتغيير. traces اللاحقة بمشاهد مختلفة والأساس ≈8 FPS عند شبكة الحركة؛ ليس main نظيفاً أو نسبة أداء للنافذة كلها.",
   "pt": "Rato local com #11482/#7048 chega à batalha tutorial. Dois pares no mesmo diálogo 80–110 s: base p50 16,7 ms contra 161–272. Traces posteriores diferem de cena; base também cai a ≈8 FPS na grelha. Não é main limpo nem rácio válido da trace inteira.",
   "de": "Lokale Mausimplementierung mit #11482/#7048 erreicht Tutorialkampf. Zwei Paare gleicher Dialog 80–110 s: Basis p50 16,7 ms, Änderung 161–272. Spätere Traces zeigen andere Szenen; Basis fällt im Bewegungsraster ebenfalls auf ≈8 FPS. Kein sauberes main oder Gesamttrace-Leistungsverhältnis.",
   "fr": "Souris locale avec #11482/#7048 atteint bataille tutorielle. Deux paires au même dialogue 80–110 s: base p50 16,7 ms contre 161–272. Traces ultérieures de scènes différentes; base aussi ≈8 FPS sur grille. Ni main propre ni ratio valide du trace entier.",
   "es": "Ratón local con #11482/#7048 alcanza batalla tutorial. Dos pares mismo diálogo 80–110 s: base p50 16,7 ms frente a 161–272. Traces posteriores con escenas distintas; base también cae a ≈8 FPS en cuadrícula. No main limpio ni ratio válido del trace completo."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11477"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9875#issuecomment-6425161853"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/10019219/"
   }
  ]
 },
 "sonic-2006-recompiled": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Stage loading stops on unreadable guest memory in two live runs; a third memory-traced run does not stop. A ten-frame replay consistently refuses the first large submission. Three local diagnostic/runtime changes remain. No movement or visible playable stage is documented here; CPU resource-capture analysis is not a title fix.",
   "zh": "两次实机运行在关卡加载时读取不可读客户内存停止，第三次开内存追踪未停止；十帧回放每次均拒绝首个大型提交。保留三处本地诊断／运行时修改；本帖没有操作或可玩关卡画面证明，CPU资源抓取分析不是修复。",
   "ar": "تحميل المرحلة يتوقف بذاكرة ضيف غير مقروءة في محاولتين؛ الثالثة مع تتبع الذاكرة لا تتوقف. إعادة عشرة إطارات ترفض أول إرسال كبير دائماً. ثلاث تعديلات محلية باقية؛ لا حركة أو مرحلة قابلة للعب مثبتة، وتحليل الالتقاط ليس إصلاحاً.",
   "pt": "Carga da fase para em memória ilegível em dois ensaios; terceiro com trace não para. Replay de dez imagens recusa sempre a primeira submissão grande. Três alterações locais; sem movimento/fase jogável documentados, análise de captura não é correção.",
   "de": "Laden der Stufe stoppt in zwei Läufen an unlesbarem Gastspeicher; dritter mit Speichertrace stoppt nicht. Zehn-Bild-Replay verweigert immer erste große Submission. Drei lokale Änderungen; keine Bewegung/spielbare Stufe belegt, Ressourcenanalyse ist kein Fix.",
   "fr": "Chargement du niveau arrêté sur mémoire illisible dans deux essais; troisième avec trace mémoire ne s’arrête pas. Replay dix images refuse toujours la première grande soumission. Trois modifications locales; mouvement/niveau jouable non documentés, analyse de capture sans correctif.",
   "es": "Carga del nivel para por memoria ilegible en dos pruebas; tercera con trace no para. Replay de diez imágenes rechaza siempre primera gran entrega. Tres cambios locales; sin movimiento/nivel jugable documentado, análisis de captura no es arreglo."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11469"
   }
  ]
 },
 "persona-5-royal": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. PS5report05110. Available page OG art is labelledPS4 and was rejected; USPS5listing05109 is another region.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测PS5为05110；可取OG素材标为PS4，已弃用，资料页USPS5的05109属另一地区。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير PS5 هو 05110؛ صورة OG موسومة PS4 رفضت، و USPS5 رقمه 05109 آخر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. PS5testado05110; OGmarcadoPS4rejeitado, USPS505109é outra região.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. PS5-Test05110; PS4-markiertesOGabgelehnt, US-PS505109andere Region.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. PS5testé05110; OGmarquéPS4écarté, USPS505109autre région.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. PS5probado05110; OGmarcadoPS4rechazado, USPS505109otra región."
  },
  "finding": {
   "en": "Local gameplay stack reaches Escape from the casino with scripted free control; 780 s without stopping, HUD at 375 s, peak private memory 18.96 GiB. The separate earlier 73ad build with the same PRs measures ≈15 FPS there on an otherwise idle GPU. Audio and later escape untested; independentBlend VUID 00605 remains. These FPS are not a measurement of 5b5d or clean main.",
   "zh": "本地组合到达赌场逃脱并能脚本自由操作；780秒无停止，375秒见HUD，私有内存峰值18.96 GiB。另一次较早73ad构建加相同PR、独占GPU测得约15 FPS；不冒充5b5d或干净main帧数。音频、后续逃脱未测，仍有independentBlend的00605验证错误。",
   "ar": "تركيب محلي يبلغ الهروب من الكازينو بتحكم حر مكتوب، 780ث بلا توقف وHUD عند 375ث، ذاكرة خاصة 18.96 GiB. قياس منفصل أقدم على 73ad مع نفس PRs وGPU منفرد يعطي ≈15 FPS، لا قياس 5b5d أو main نظيف. الصوت وما بعده مجهولان، ويبقى VUID 00605.",
   "pt": "Composição local chega ao casino com controlo livre por guião: 780 s sem paragem, HUD aos 375 s, memória privada 18,96 GiB. Build anterior 73ad com as mesmas PR mede ≈15 FPS com GPU exclusiva; não é medição de 5b5d/main limpo. Áudio/fuga posterior por testar; VUID 00605 permanece.",
   "de": "Lokaler Stack erreicht Casino mit geskripteter freier Steuerung: 780 s ohne Stopp, HUD bei 375 s, private Spitze 18,96 GiB. Separater älterer 73ad-Build mit gleichen PRs misst ≈15 FPS bei exklusiver GPU; keine 5b5d/Main-Messung. Ton/spätere Flucht ungeprüft, VUID 00605 bleibt.",
   "fr": "Composition locale atteint le casino avec contrôle libre scripté: 780 s sans arrêt, HUD à 375 s, mémoire privée 18,96 GiB. Ancien build distinct 73ad et mêmes PR mesure ≈15 FPS avec GPU exclusive; pas une mesure de 5b5d/main propre. Son/suite inconnus, VUID 00605 persiste.",
   "es": "Combinación local llega al casino con control libre por guion: 780 s sin parada, HUD a los 375 s, memoria privada 18,96 GiB. Build anterior separado 73ad con mismas PR mide ≈15 FPS con GPU exclusiva; no mide 5b5d/main limpio. Audio/escape posterior sin probar; VUID 00605 persiste."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10872"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/persona-5-royal/"
   }
  ]
 },
 "unbound-worlds-apart": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA03274; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA03273, not this tested package.",
   "zh": "报告PS5包PPSA03274；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA03273，不用于认定本次测试包。",
   "ar": "حزمة PS5 PPSA03274؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA03273 لا الحزمة المختبرة.",
   "pt": "Pacote PS5 PPSA03274; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA03273, não o teste.",
   "de": "PS5-Paket PPSA03274; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA03273, nicht des Tests.",
   "fr": "Paquet PS5 PPSA03274 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA03273, pas cet essai.",
   "es": "Paquete PS5 PPSA03274; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA03273, no de esta prueba."
  },
  "finding": {
   "en": "Clean main with dump-specific PlayGo absent reaches gameplay at 25–33 FPS (≈30), 5,580 presents/196 s, normal exit 0. Save file grows, but reload/audio/long play remain unverified. Installed instead repeats the 5,565,054,976-byte startup OOM; absent avoids that request and loads the base pak. This does not establish the same fix for other titles.",
   "zh": "干净main配本dump的PlayGo absent设置进入游戏，25–33 FPS（约30），196秒5580帧，正常退出0。存档文件增大，但重载、音频、长时间游玩未验证。installed复现启动申请5,565,054,976字节OOM；absent避开该申请并加载本体pak，不能直接推到其他游戏。",
   "ar": "main نظيف مع PlayGo absent الخاص بالتفريغ يبلغ اللعب عند 25–33 FPS، 5580 عرضاً/196ث وخروج 0. ملف الحفظ يكبر؛ إعادة التحميل والصوت واللعب الطويل مجهولة. installed يعيد OOM بطلب 5565054976 بايت، absent يتفاداه ويحمل pak الأساسي؛ لا تعميم على ألعاب أخرى.",
   "pt": "Main limpo com PlayGo absent deste dump chega ao jogo a 25–33 FPS, 5580 apresentações/196 s, saída 0. Gravação aumenta; reabrir, áudio e jogo longo por verificar. installed repete OOM de 5565054976 bytes; absent evita o pedido e carrega o pak base. Sem generalização para outros títulos.",
   "de": "Sauberes main mit dumpspezifischem PlayGo absent erreicht Spiel mit 25–33 FPS, 5580 Bildern/196 s, Exit 0. Speicherdatei wächst; Neuladen/Ton/Langtest ungeprüft. installed reproduziert OOM bei 5565054976 Byte; absent vermeidet Anforderung und lädt Basis-pak. Nicht auf andere Spiele übertragbar.",
   "fr": "Main propre et PlayGo absent pour ce dump atteint le jeu à 25–33 FPS, 5580 présentations/196 s, sortie 0. Fichier de sauvegarde croissant, rechargement/son/durée non vérifiés. installed reproduit l’OOM de 5565054976 octets; absent évite la demande et charge le pak de base. Pas de généralisation.",
   "es": "Main limpio con PlayGo absent específico del dump llega al juego a 25–33 FPS, 5580 presentaciones/196 s, salida 0. Crece el guardado; recarga/audio/juego largo sin verificar. installed repite OOM de 5565054976 bytes; absent evita petición y carga pak base. Sin generalizar a otros títulos."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10204#discussioncomment-19184285"
   }
  ]
 },
 "arcrunner": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA21406; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA21406；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA21406؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA21406; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA21406; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA21406 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA21406; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  },
  "finding": {
   "en": "Private integration reaches Soldier selection and a rendered city/HUD. Follow-up reloads Run0: two 1.5 s forward inputs move into the street, a 1 s right-stick input turns the camera, and a ship cutscene returns there. Normal bounded close, exit 0, no VUID/NotImplemented. Combat, audio, FPS and broad stability unknown; not vanilla-main or isolated-PR evidence.",
   "zh": "私有整合到达士兵选择及城市／HUD；后续重载Run0，两次1.5秒前推走入街道、1秒右摇杆令镜头转动，飞船过场后回到街道。限时正常关闭0，无VUID／NotImplemented；战斗、音频、FPS、长期稳定未知，不是原版main或单PR证据。",
   "ar": "دمج خاص يبلغ اختيار Soldier والمدينة/HUD. متابعة تحمل Run0: دفعتان للأمام 1.5ث تحركان إلى الشارع، ويمين 1ث يدير الكاميرا، ومشهد سفينة يعيد إليه. إغلاق محدد وخروج 0 بلا VUID/NotImplemented. القتال والصوت وFPS والثبات العام مجهولة؛ ليس main أو PR منفرداً.",
   "pt": "Integração privada chega a Soldier e cidade/HUD. Reteste de Run0: duas entradas de 1,5 s avançam à rua, direita 1 s roda câmara e cena da nave regressa à rua. Fecho limitado normal, saída 0, sem VUID/NotImplemented. Combate, áudio, FPS e estabilidade ampla por verificar; não main/PR isolada.",
   "de": "Private Integration erreicht Soldier-Auswahl und Stadt/HUD. Run0-Folgeversuch: zweimal 1,5 s vorwärts bewegt auf Straße, 1 s rechts dreht Kamera, Schiffszene kehrt zurück. Normal begrenzter Exit 0, keine VUID/NotImplemented. Kampf/Ton/FPS/Langstabilität unbekannt; kein Main-/Einzel-PR-Beleg.",
   "fr": "Intégration privée atteint Soldier et ville/HUD. Suivi Run0: deux entrées avant de 1,5 s déplacent dans la rue, droite 1 s tourne caméra, cinématique du vaisseau puis retour. Fermeture limitée normale, sortie 0, sans VUID/NotImplemented. Combat, son, FPS/stabilité générale inconnus; pas main/PR isolée.",
   "es": "Integración privada alcanza Soldier y ciudad/HUD. Seguimiento Run0: dos entradas adelante de 1,5 s llevan a calle, derecha 1 s gira cámara y escena de nave regresa allí. Cierre limitado normal, salida 0, sin VUID/NotImplemented. Combate, audio, FPS/estabilidad amplia desconocidos; no main/PR aislada."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6388982212"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10261#discussioncomment-19187599"
   }
  ]
 },
 "hamster-playground": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA06652. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA06652，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA06652؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA06652; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA06652; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA06652 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA06652; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "Newer integration creates House1 with both ordinary and memory-backed saves empty, then reloads the retained 32 MiB memory save separately. The room and Start Tutorial overlay render, Play responds; tutorial/free play/audio untested. Both 320 s runs exit 0; reload has one actual validation insertion and zero VUIDs. Idle room ≈15 FPS versus title ≈60, not a matched speed comparison. Earlier reset claims covered only _sd, not _sd_mem.",
   "zh": "较新整合同时清空普通与内存存档后创建House1，再另次重载32 MiB内存存档；房间及教程提示可见，Play有效，未推进教程／自由游玩或测试音频。两次320秒退出0，重载实际插入验证层且零VUID。房间静止约15 FPS、标题约60，不是配对提速。旧清空声明只覆盖_sd、未含_sd_mem。",
   "ar": "دمج أحدث ينشئ House1 مع الحفظ العادي والذاكري فارغين ثم يحمل حفظ 32 MiB منفصلاً. الغرفة وإرشاد البداية ظاهران وPlay يعمل؛ التعليم/اللعب الحر/الصوت غير مختبرة. محاولتان 320ث وخروج 0، إعادة التحميل بطبقة فعلية و0 VUID. غرفة ساكنة ≈15 FPS مقابل عنوان ≈60، لا مقارنة سرعة. إعادة الضبط القديمة شملت _sd فقط.",
   "pt": "Integração nova cria House1 com ambos os tipos de gravação vazios e reabre separadamente os 32 MiB em memória. Sala/tutorial visíveis e Play responde; tutorial/jogo livre/áudio por testar. Dois ensaios 320 s saem 0; recarga com layer real e zero VUID. Sala parada ≈15 FPS, título ≈60, sem comparação emparelhada. Reset antigo só _sd.",
   "de": "Neuere Integration erstellt House1 bei leeren normalen und Speicher-Saves, lädt 32-MiB-Save separat. Raum/Tutorialhinweis sichtbar, Play reagiert; Tutorial/freies Spiel/Ton ungeprüft. Zweimal 320 s, Exit 0; Neuladen mit echter Layer, null VUID. Ruhender Raum ≈15 FPS, Titel ≈60, kein Paarvergleich. Alter Reset betraf nur _sd.",
   "fr": "Nouvelle intégration crée House1 avec sauvegardes ordinaires et mémoire vides puis recharge séparément les 32 MiB. Pièce/tutoriel visibles, Play répond; tutoriel/jeu libre/son non testés. Deux essais 320 s sortent 0; rechargement avec couche réelle et zéro VUID. Pièce immobile ≈15 FPS, titre ≈60, sans comparaison appariée. Ancien reset limité à _sd.",
   "es": "Integración nueva crea House1 con guardados normales y de memoria vacíos y recarga aparte los 32 MiB. Habitación/tutorial visibles, Play responde; tutorial/juego libre/audio sin probar. Dos ensayos de 320 s salen 0; recarga con capa real y cero VUID. Habitación quieta ≈15 FPS, título ≈60, sin comparación pareada. Reset antiguo solo _sd."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/9639#discussioncomment-19200253"
   }
  ]
 },
 "heavenly-bodies": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA04246. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA04246；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA04246. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA04246. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA04246. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA04246. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA04246. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "New clean-main test: 10/10 unattended 45 s starts reach the mission, but one of two played sessions crashes at save/level7 loading after 24 s. The other plays about ten minutes with 132 late stores into unmapped ranges. Earlier picture/audio/DualSense observations retain their old build. No new timed FPS, and late stores alone do not prove the untraced crash cause.",
   "zh": "较新干净main的10次无人45秒启动均到任务，但两次亲自游玩中一次在存档／level7加载24秒后崩溃；另一次约十分钟、仍有132次向已取消映射区域迟写。旧画面／音频／DualSense结论保留原构建；无新FPS计时，迟写本身不能证明未追踪崩溃原因。",
   "ar": "main نظيف أحدث: 10/10 بدايات دون مراقبة 45ث تبلغ المهمة، لكن جلسة من جلستين يدويتين تنهار عند حفظ/level7 بعد 24ث. الأخرى تلعب ≈10د مع 132 كتابة متأخرة لنطاقات أزيلت. أدلة الصورة/الصوت/DualSense القديمة تبقى ببنائها؛ لا FPS جديد أو إثبات لسبب الانهيار غير المتتبع.",
   "pt": "Main limpo recente: 10/10 arranques automáticos de 45 s chegam à missão, mas um de dois jogos manuais falha na carga do save/level7 aos 24 s. Outro joga ≈10 min com 132 escritas tardias em zonas desmontadas. Imagem/áudio/DualSense antigos mantêm build; sem FPS novo nem causa provada para a falha sem trace.",
   "de": "Neues sauberes main: 10/10 unbeaufsichtigte 45-s-Starts erreichen Mission, aber einer von zwei gespielten Läufen stürzt beim Save/level7 nach 24 s ab. Anderer ≈10 min mit 132 späten Stores in entmappte Bereiche. Alte Bild/Ton/DualSense-Belege behalten Build; keine neuen FPS oder bewiesene Ursache des ungetracten Absturzes.",
   "fr": "Main propre récent: 10/10 démarrages automatiques de 45 s atteignent mission, mais une des deux sessions jouées plante au chargement save/level7 après 24 s. Autre ≈10 min avec 132 écritures tardives dans des plages démappées. Anciens son/image/DualSense gardent leur build; ni nouveau FPS ni cause prouvée du crash sans trace.",
   "es": "Main limpio reciente: 10/10 arranques automáticos de 45 s llegan a misión, pero una de dos sesiones jugadas falla al cargar save/level7 a los 24 s. Otra ≈10 min con 132 escrituras tardías en regiones desmapeadas. Imagen/audio/DualSense antiguos conservan build; sin FPS nuevo ni causa probada del fallo sin trace."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/8931"
   }
  ]
 },
 "hot-wheels-infinite-rush": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reports identify PPSA22408; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA22408；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA22408؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA22408; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA22408; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA22408 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA22408; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "finding": {
   "en": "New Linux/NVIDIA run reaches garage and a race, but 3D scenery is invisible/erratic; only HUD/map/menu draw correctly. 577 s without another stop after a local no-update stub. Garage/race 0.1–0.7 FPS, not the 57–60 menu FPS. #11346 is only a proposed retest here, not a verified Hot Wheels rendering fix.",
   "zh": "新Linux／NVIDIA运行到车库和比赛，但3D场景不可见／混乱，仅HUD、地图、菜单正确。加本地无更新桩后577秒无其他停止；车库／比赛0.1–0.7 FPS，不是菜单57–60。#11346在本游戏仅为待复测建议，尚无场景修复验证。",
   "ar": "تشغيل Linux/NVIDIA يبلغ المرآب والسباق لكن المشهد ثلاثي الأبعاد غائب/مشوش، وHUD/الخريطة/القائمة صحيحة. 577ث بلا توقف آخر بعد stub تحديث محلي. مرآب/سباق 0.1–0.7 FPS لا قائمة 57–60. #11346 اقتراح إعادة اختبار فقط هنا، لا إصلاح رسومي مثبت.",
   "pt": "Novo ensaio Linux/NVIDIA chega à garagem/corrida mas 3D invisível/errático; só HUD/mapa/menu corretos. 577 s sem outra paragem após stub local sem atualização. Garagem/corrida 0,1–0,7 FPS, não menu 57–60. #11346 apenas sugerido para reteste, sem correção visual comprovada neste título.",
   "de": "Neuer Linux/NVIDIA-Lauf erreicht Garage/Rennen, aber 3D unsichtbar/fehlerhaft; nur HUD/Karte/Menü korrekt. 577 s ohne weiteren Stopp nach lokalem Update-Stub. Garage/Rennen 0,1–0,7 FPS, nicht Menü 57–60. #11346 hier nur Testvorschlag, kein belegter Hot-Wheels-Fix.",
   "fr": "Nouvel essai Linux/NVIDIA atteint garage/course mais 3D invisible/erratique, seul HUD/carte/menu correct. 577 s sans autre arrêt après stub local sans mise à jour. Garage/course 0,1–0,7 FPS, pas menu 57–60. #11346 seulement proposé en retest ici, sans correctif visuel vérifié.",
   "es": "Nueva prueba Linux/NVIDIA alcanza garaje/carrera pero 3D invisible/errático; solo HUD/mapa/menú correctos. 577 s sin otra parada tras stub local sin actualización. Garaje/carrera 0,1–0,7 FPS, no menú 57–60. #11346 solo propuesto para retest aquí, sin arreglo visual verificado."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/6895#discussioncomment-19183185"
   }
  ]
 },
 "astro-bot": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Two alternating Crash Site pairs, 300 s each: label readback store on 6.37/6.43 FPS, bypass 7.62/7.43, about 25 ms saved per frame. The bypass removes synchronization work and is diagnostic; correctness was not established. No asynchronous-store fix or broad playability verified.",
   "zh": "两组交替Crash Site、每次300秒：标签回读存储正常6.37／6.43 FPS，绕过7.62／7.43，约省25毫秒／帧。绕过移除同步工作，仅作诊断、未验证正确性；尚无异步存储修复或广泛可玩验证。",
   "ar": "زوجان متناوبان Crash Site مدة 300ث: تخزين label عادي 6.37/6.43 FPS، تجاوزه 7.62/7.43، توفير ≈25ms/إطار. التجاوز يزيل تزامناً وهو تشخيصي بلا إثبات صحة؛ لا إصلاح تخزين لا متزامن أو لعب عام.",
   "pt": "Dois pares Crash Site de 300 s: store normal 6,37/6,43 FPS, bypass 7,62/7,43, poupa ≈25 ms/imagem. Bypass remove sincronização e é diagnóstico, sem correção visual comprovada. Sem fix assíncrono/jogo geral validado.",
   "de": "Zwei Crash-Site-Paare je 300 s: normaler Label-Store 6,37/6,43 FPS, Bypass 7,62/7,43, ≈25 ms/Bild weniger. Bypass entfernt Synchronisation und ist diagnostisch, Korrektheit ungeprüft. Kein Async-Fix oder umfassender Spielnachweis.",
   "fr": "Deux paires Crash Site de 300 s: stockage normal 6,37/6,43 FPS, contournement 7,62/7,43, ≈25 ms/image gagnés. Contournement supprime de la synchronisation et reste diagnostic, correction non établie. Aucun correctif asynchrone/jeu général vérifié.",
   "es": "Dos pares Crash Site de 300 s: store normal 6,37/6,43 FPS, omisión 7,62/7,43, ahorra ≈25 ms/imagen. Omisión elimina sincronización y es diagnóstica, corrección sin probar. Sin arreglo asíncrono/juego amplio verificado."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19183828"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9712#issuecomment-6405968025"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10364#issuecomment-6410487349"
   }
  ]
 },
 "astro-bot-ppsa21567": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Do not transfer PPSA21564 or other regional-ID results to this entry. The reported content version is 01.018.000.",
   "zh": "不能将 PPSA21564 或其他地区编号结果套用于此条目；来源内容版本为 01.018.000。",
   "ar": "لا تنقل نتائج PPSA21564 أو معرّفات أخرى هنا؛ نسخة المحتوى 01.018.000.",
   "pt": "Não transfira resultados PPSA21564/outros IDs; conteúdo01.018.000.",
   "de": "Keine PPSA21564/andere-ID-Ergebnisse übertragen; Inhalt01.018.000.",
   "fr": "Ne transposez pas PPSA21564/autres IDs ; contenu01.018.000.",
   "es": "No traslades resultados PPSA21564/otros IDs; contenido01.018.000."
  },
  "finding": {
   "en": "About3min in Crash Site tutorial with physical Bluetooth DualSense: reporter feels haptics, log confirms vibration-port route without report-write failure. Firmware0x0110002a/update0x0630. Individual report writes not logged; GPU/build composition/FPS and extended stability unknown.",
   "zh": "实体蓝牙DualSense在Crash Site教程约3分钟，作者感到触觉、日志确认vibration-port路径且无写报告失败；固件0x0110002a、更新0x0630。未记录逐个报告写入，GPU、组合基线、FPS和长期稳定未知。",
   "ar": "نحو3د بتعليم Crash Site مع DualSense Bluetooth فعلي: إحساس haptics ومسار vibration بلا فشل كتابة. firmware0x0110002a/update0x0630. لا سجل لكل تقرير؛ GPU/التركيب/FPS والثبات الطويل مجهولة.",
   "pt": "≈3min tutorial Crash Site com DualSense Bluetooth físico: háptica sentida e rota vibration sem falha. Firmware0x0110002a/update0x0630. Escritas individuais não registadas; GPU/composição/FPS/longo prazo desconhecidos.",
   "de": "≈3min Crash-Site-Tutorial mit physischem Bluetooth-DualSense: Haptik gefühlt, Vibrationsroute ohne Schreibfehler. Firmware0x0110002a/update0x0630. Einzelreports nicht geloggt; GPU/Stack/FPS/Langstabilität unbekannt.",
   "fr": "≈3min tutoriel Crash Site avec DualSense Bluetooth physique: haptique ressentie, route vibration sans échec. Firmware0x0110002a/update0x0630. Rapports individuels non journalisés; GPU/composition/FPS/durée inconnus.",
   "es": "≈3min tutorial Crash Site con DualSense Bluetooth físico: háptica sentida/ruta vibration sin fallos. Firmware0x0110002a/update0x0630. Escrituras individuales sin registrar; GPU/composición/FPS/largo plazo desconocidos."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19169221"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11461#issuecomment-6418779447"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11461#issuecomment-6424411620"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19201989"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11307#issuecomment-6424833863"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9154#issuecomment-6414836567"
   }
  ]
 },
 "gta-v": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Refreshed depth-copy candidate: three matched prologue pairs give 14.7–15.2 presents/10 s on base versus 24.6 on change (≈1.47–1.52 vs 2.46 FPS). Warm caches, scripted input, no dropped trace events. Earlier #10837 gives a similar bounded result; neither establishes full-game stability, and a separate fourth earlier run hit the zlib crash.",
   "zh": "更新后的深度复制候选三组配对序章：本体每10秒14.7–15.2帧，修改24.6，约1.47–1.52对2.46 FPS。热缓存、脚本输入、追踪无丢失；较早#10837也有类似局部结果，均不证明全游戏稳定，较早第四次运行另遇zlib崩溃。",
   "ar": "مرشح نسخ عمق محدث: ثلاثة أزواج مقدمة تعطي 14.7–15.2 عرضاً/10ث للأساس مقابل 24.6، ≈1.47–1.52 مقابل 2.46 FPS. cache دافئ وإدخال مكتوب بلا أحداث مفقودة. #10837 الأقدم مشابه ضمن هذا النطاق؛ لا ثبات شامل، وتجربة سابقة رابعة انهارت في zlib.",
   "pt": "Candidato atualizado: três pares do prólogo dão 14,7–15,2 apresentações/10 s na base e 24,6 na mudança, ≈1,47–1,52 contra 2,46 FPS. Cache quente/guia sem eventos perdidos. #10837 anterior semelhante; sem estabilidade global, quarto ensaio antigo falhou em zlib.",
   "de": "Aktualisierter Tiefenkopiekandidat: drei Prologpaare Basis 14,7–15,2 Bilder/10 s, Änderung 24,6, ≈1,47–1,52 gegen 2,46 FPS. Warme Caches/Skript, keine Traceverluste. Früheres #10837 ähnlich begrenzt; keine Vollspielstabilität, alter vierter Lauf traf zlib-Absturz.",
   "fr": "Candidat actualisé: trois paires prologue donnent 14,7–15,2 présentations/10 s sur base contre 24,6, ≈1,47–1,52 face à 2,46 FPS. Cache chaud/script, aucun événement perdu. Ancien #10837 similaire; sans stabilité globale, quatrième ancien essai plantait dans zlib.",
   "es": "Candidato actualizado: tres pares prólogo dan 14,7–15,2 presentaciones/10 s base frente a 24,6, ≈1,47–1,52 contra 2,46 FPS. Caché caliente/guion sin pérdidas. #10837 anterior similar; sin estabilidad global, cuarto ensayo antiguo falló en zlib."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9136#issuecomment-6390382840"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11513"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11307#issuecomment-6414324303"
   }
  ]
 },
 "borderlands-4": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reports on this page identify PPSA01494. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering. The promotional cover carries Super Deluxe Edition branding; it does not establish that the reported build contains or tests that content.",
   "zh": "本页报告编号为 PPSA01494；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。 宣传封面带有 Super Deluxe Edition 标识；不能据此判定报告包含或测试该内容。",
   "ar": "معرّف التقارير PPSA01494؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5. الغلاف يحمل Super Deluxe Edition؛ لا يثبت وجود أو اختبار ذلك المحتوى.",
   "pt": "Relatos identificam PPSA01494; arte promocional não prova região, versão ou imagem AnyPS5. A capa mostra Super Deluxe Edition; não prova esse conteúdo no teste.",
   "de": "Berichte nennen PPSA01494; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering. Das Werbecover trägt Super Deluxe Edition; kein Nachweis dieses Inhalts im Test.",
   "fr": "Rapports identifiés PPSA01494 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5. La couverture porte Super Deluxe Edition ; contenu non établi dans le test.",
   "es": "Informes identifican PPSA01494; arte promocional no prueba región, versión ni renderizado AnyPS5. La portada muestra Super Deluxe Edition; no prueba ese contenido en el test."
  },
  "finding": {
   "en": "Clean main stops at 55–61 s in two runs on converted-float/D16; a cold attempt instead hits the title watchdog. Exact fork candidate passes that guard for 603 s through first-launch menus at ≈0.68 FPS. No gameplay or universal conversion equivalence claimed.",
   "zh": "干净main两次55–61秒遇转换浮点／D16停止，冷启动另触发游戏看门狗。固定fork候选通过该检查并在首次设置菜单运行603秒、约0.68 FPS；无游戏过程或通用转换等价声明。",
   "ar": "main نظيف يتوقف عند 55–61ث مرتين بسبب float/D16؛ محاولة باردة تصيب watchdog. مرشح fork محدد يتجاوز 603ث بقوائم البداية ≈0.68 FPS. لا لعب أو تكافؤ تحويل عام.",
   "pt": "Main limpo para aos 55–61 s duas vezes em float/D16; tentativa fria dá watchdog. Candidato fork exato passa 603 s nos menus iniciais ≈0,68 FPS. Sem jogo/equivalência geral.",
   "de": "Sauberes main stoppt zweimal bei 55–61 s an Float/D16; Kaltversuch am Watchdog. Exakter Forkkandidat läuft 603 s durch Startmenüs mit ≈0,68 FPS. Kein Gameplay/allgemeine Konversionsgleichheit.",
   "fr": "Main propre s’arrête deux fois à 55–61 s sur float/D16; essai froid au watchdog. Candidat fork exact passe 603 s aux menus initiaux ≈0,68 FPS. Sans jeu/équivalence générale.",
   "es": "Main limpio para dos veces a 55–61 s por float/D16; intento frío da watchdog. Candidato fork exacto pasa 603 s en menús iniciales ≈0,68 FPS. Sin juego/equivalencia general."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425#issuecomment-6423266726"
   }
  ]
 },
 "palworld": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Static EOS dialog, not gameplay: plain-main bisect shows 18.1–18.5 FPS before #7044 versus 12.5–15.5 after; bypass 17.7 in one run. Newer local stack with #8898 reverted gives 15.7 versus 20.3 with dispatch-move off. Old counter correlation was withdrawn; full write-back cause and image correctness remain unknown. Current unmodified main instead stops earlier on D16.",
   "zh": "静止EOS对话框而非游戏：干净main二分#7044前18.1–18.5 FPS、后12.5–15.5，单次绕过17.7。较新本地组合撤回#8898后为15.7，关dispatch-move为20.3。旧计数关联已撤回，完整回写原因和画面正确性未知；当前未改main反在更早D16停止。",
   "ar": "حوار EOS ثابت لا لعب: تقسيم main قبل #7044 يعطي 18.1–18.5 FPS وبعده 12.5–15.5، تجاوز منفرد 17.7. تركيب أحدث مع إلغاء #8898 يعطي 15.7 مقابل 20.3 دون dispatch-move. ارتباط العدادات القديم سُحب؛ سبب الدورة والصورة مجهولان، main الحالي يتوقف أبكر عند D16.",
   "pt": "Diálogo EOS parado, não jogo: main antes #7044 18,1–18,5 FPS, depois 12,5–15,5; bypass único 17,7. Composição nova com #8898 revertida 15,7 contra 20,3 sem dispatch-move. Correlação antiga retirada; causa/correção visual desconhecidas, main atual para antes no D16.",
   "de": "Statischer EOS-Dialog, kein Gameplay: main vor #7044 18,1–18,5 FPS, danach 12,5–15,5; Einzelbypass 17,7. Neuer lokaler Stack mit #8898-Revert 15,7 gegen 20,3 ohne dispatch-move. Alte Korrelation zurückgenommen; Ursache/Bildkorrektheit offen, aktuelles main stoppt früher an D16.",
   "fr": "Dialogue EOS immobile, pas du jeu: main avant #7044 18,1–18,5 FPS, après 12,5–15,5; contournement unique 17,7. Composition récente revert #8898: 15,7 contre 20,3 sans dispatch-move. Ancienne corrélation retirée; cause/image inconnues, main actuel arrêté avant au D16.",
   "es": "Diálogo EOS quieto, no juego: main antes #7044 18,1–18,5 FPS, después 12,5–15,5; omisión única 17,7. Combinación nueva con revert #8898 da 15,7 frente a 20,3 sin dispatch-move. Correlación antigua retirada; causa/imagen desconocidas, main actual para antes en D16."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "PlayStation",
    "url": "https://www.playstation.com/en-us/games/palworld/"
   },
   {
    "label": "Issue #3832",
    "url": "https://github.com/boykopovar/AnyPS5/issues/3832"
   },
   {
    "label": "PR #3835",
    "url": "https://github.com/boykopovar/AnyPS5/pull/3835"
   },
   {
    "label": "Issue #4260",
    "url": "https://github.com/boykopovar/AnyPS5/issues/4260"
   },
   {
    "label": "Issue #4552",
    "url": "https://github.com/boykopovar/AnyPS5/issues/4552"
   },
   {
    "label": "PR #4554",
    "url": "https://github.com/boykopovar/AnyPS5/pull/4554"
   },
   {
    "label": "Issue #4366",
    "url": "https://github.com/boykopovar/AnyPS5/issues/4366"
   },
   {
    "label": "PR #4391",
    "url": "https://github.com/boykopovar/AnyPS5/pull/4391"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11448"
   }
  ]
 },
 "demons-souls": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Boletarian Palace 1-1 on an unpinned integration: uprobe counts 6–8 presents/10 s, ≈0.6–0.8 FPS. CPU committer ≈84% of one core, GPU busy 33–36%; character creation is faster. Local switches/exact head unspecified; no completion or other-scene FPS inference.",
   "zh": "未固定提交的整合在柏雷塔尼亚1-1以uprobe测得每10秒6–8帧，约0.6–0.8 FPS；CPU提交线程约单核84%、GPU忙33–36%，创建角色更快。本地开关／准确head未给，不推断通关或其他场景FPS。",
   "ar": "دمج غير محدد في Boletaria 1-1: uprobe يعد 6–8 عروض/10ث، ≈0.6–0.8 FPS. CPU ≈84% من نواة وGPU 33–36%؛ إنشاء الشخصية أسرع. الرأس/المفاتيح المحلية مجهولة؛ لا إكمال أو تعميم.",
   "pt": "Integração sem head em Boletaria 1-1: uprobe 6–8 apresentações/10 s, ≈0,6–0,8 FPS. CPU ≈84% de núcleo e GPU 33–36%; criação mais rápida. Switches/head por indicar, sem conclusão/outras cenas.",
   "de": "Ungepinnte Integration Boletaria 1-1: uprobe 6–8 Bilder/10 s, ≈0,6–0,8 FPS. CPU ≈84% eines Kerns, GPU 33–36%; Erstellung schneller. Schalter/Head unbekannt, kein Abschluss/andere Szenen.",
   "fr": "Intégration non fixée Boletaria 1-1: uprobe 6–8 présentations/10 s, ≈0,6–0,8 FPS. CPU ≈84% d’un cœur, GPU 33–36%; création plus rapide. Switches/head inconnus, sans fin/autres scènes.",
   "es": "Integración sin head Boletaria 1-1: uprobe 6–8 presentaciones/10 s, ≈0,6–0,8 FPS. CPU ≈84% de núcleo, GPU 33–36%; creación más rápida. Switches/head desconocidos, sin final/otras escenas."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7203#issuecomment-6399882630"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10634#issuecomment-6389742114"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7203#issuecomment-6396805983"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10634#issuecomment-6417895351"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/1283#discussioncomment-19185429"
   }
  ]
 },
 "astros-playroom": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Frozen runtime plus one AGC DLL change: two runs reach the first room with simulated touch, walking, camera and jumping, then close normally. Baseline stopped at controller introduction with device loss. Saved Continue replays the introduction rather than exact position. No FPS/audio/haptics qualification or proof that independentBlend alone causes the difference; retail runs have no validation layer.",
   "zh": "冻结运行时只换AGC DLL后，两次到第一房间，模拟触摸、行走、镜头、跳跃可见并正常退出；本体在手柄介绍丢设备。Continue重放介绍而非恢复原站位。未验证FPS、音频、震动，也不能证明仅independentBlend导致差异；游戏运行未加验证层。",
   "ar": "تشغيل مجمد مع DLL واحد يصل الغرفة الأولى مرتين: لمس محاكى ومشي وكاميرا وقفز ثم خروج طبيعي. الأساس يفقد الجهاز عند التعريف. Continue يعيد المقدمة لا الموضع. لا FPS/صوت/اهتزاز أو سببية independentBlend مثبتة؛ لا طبقة في تشغيل اللعبة.",
   "pt": "Runtime fixo troca só DLL AGC: duas entradas na primeira sala com toque, movimento, câmara e salto simulados, saída normal. Base perde GPU na introdução. Continue repete intro, não posição. Sem FPS/áudio/háptica/causalidade isolada; jogo sem layer.",
   "de": "Eingefrorene Laufzeit tauscht nur AGC-DLL: zweimal erster Raum mit simuliertem Touch, Gehen, Kamera/Sprung, normal beendet. Basis Geräteverlust bei Einführung. Continue wiederholt Einführung statt Position. FPS/Ton/Haptik/Kausalität unbewiesen; Spiel ohne Layer.",
   "fr": "Runtime figé avec seul DLL AGC changé: deux arrivées première salle, toucher, marche, caméra/saut simulés, fermeture normale. Base perd GPU à l’introduction. Continue rejoue intro, pas position. Ni FPS/son/haptique/causalité isolée; jeu sans couche.",
   "es": "Runtime congelado cambia solo DLL AGC: dos llegadas a primera sala con toque, movimiento, cámara/salto simulados, cierre normal. Base pierde GPU en introducción. Continue repite intro, no posición. Sin FPS/audio/háptica/causa aislada; juego sin capa."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6782#issuecomment-6405807418"
   }
  ]
 },
 "sonic-unleashed-recompiled": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reports on this page identify PPSA99902. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA99902；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA99902؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA99902; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA99902; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA99902 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA99902; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "finding": {
   "en": "Newest composed fork runs to its 1800 s cap through menus/loading/cinematic, with 94 frames and no refusal/device-fence failures; last image is cinematic, no control response verified. An earlier same-binary acb pair goes from cold 567 s descriptor abort to warm level-start HUD. Different caches/input forbid causality or regression claims; historical interactive runs retain their pins.",
   "zh": "最新整合fork运行至1800秒限时，94帧经过菜单／加载／过场，无拒绝或设备栅栏失败；末图仍是过场，未证操作。较早同二进制acb冷启动567秒拒绝、热缓存到关卡HUD，缓存／输入不同，不能归因或判回归，历史操控保留原pin。",
   "ar": "أحدث fork مركب يبلغ حد 1800ث عبر قوائم/تحميل/مشهد، 94 صورة بلا رفض أو فشل fences؛ النهاية مشهد لا تحكم مثبت. زوج acb أقدم بنفس الملفات يفشل بارداً عند 567ث ويبلغ HUD دافئاً؛ cache/إدخال مختلفان، لا سببية أو تراجع، والتفاعل القديم يبقى مثبتاً ببنائه.",
   "pt": "Fork composto novo chega ao limite 1800 s, 94 imagens de menus/carga/cinemática, sem recusas/falhas fences. Final ainda cinemático, controlo não verificado. Par acb antigo com mesmos binários: frio falha 567 s, quente HUD; caches/entrada distintos impedem causalidade/regressão, pins históricos mantidos.",
   "de": "Neuester Fork erreicht 1800-s-Limit durch Menü/Laden/Film, 94 Bilder ohne Verweigerung/Fencefehler. Letztes Bild Film, Steuerung ungeprüft. Älteres identisches acb-Paar kalt Fehler 567 s, warm Level-HUD; Cache/Eingaben verschieden, keine Kausal-/Regressionsaussage, alte Interaktion behält Pins.",
   "fr": "Dernier fork atteint limite 1800 s via menus/chargement/cinématique, 94 images sans refus/fence défaillante. Fin cinématique, commandes non prouvées. Ancienne paire acb identique: froid refus 567 s, chaud HUD; cache/entrée différents excluent causalité/régression, anciens pins conservés.",
   "es": "Fork nuevo llega al límite 1800 s con menús/carga/cinemática, 94 imágenes sin rechazo/fallos fence. Final cinemático, control sin probar. Par acb anterior idéntico: frío falla 567 s, caliente HUD; caché/entrada distintos impiden causalidad/regresión, pins antiguos conservados."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4443"
   }
  ]
 },
 "ghost-of-tsushima-directors-cut": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Local depth/visibility/input/cache changes produce nonblack logos and interactive splash progression beyond 180 s. Later display surfaces still fall back to black guest bytes; no 3D world or gameplay established. The 33.48 pacing counter is not measured visible-gameplay FPS, and claimed root causes remain local hypotheses.",
   "zh": "本地深度、窗口、输入和缓存修改令标志非黑且启动提示可推进、超过180秒；后段显示面仍回退黑色客户数据，无3D世界或游戏过程证明。33.48是节奏计数而非可见游玩FPS，所述根因仍是本地分析。",
   "ar": "تعديلات عمق/نافذة/إدخال/cache محلية تعرض شعارات وتقدم بداية تفاعلية أكثر من 180ث. الأسطح اللاحقة سوداء بلا عالم/لعب مثبت. عداد 33.48 ليس FPS لعب مرئي؛ الأسباب المقترحة تحليل محلي.",
   "pt": "Alterações locais de profundidade/janela/entrada/cache mostram logos e avanço inicial por mais de 180 s. Superfícies posteriores pretas, sem mundo/jogo provado. Contador 33,48 não mede FPS de jogo; causas propostas são locais.",
   "de": "Lokale Tiefen/Fenster/Eingabe/Cacheänderungen zeigen Logos und Startfortschritt über 180 s. Spätere Flächen schwarz, keine Welt/Gameplay belegt. 33,48-Pacingzähler ist keine sichtbare Spiel-FPS; Ursachen lokale Analyse.",
   "fr": "Changements locaux profondeur/fenêtre/entrée/cache montrent logos et progression initiale plus de 180 s. Surfaces ultérieures noires, ni monde ni jeu prouvé. Compteur 33,48 ne mesure pas FPS de jeu visible; causes locales proposées.",
   "es": "Cambios locales profundidad/ventana/entrada/caché muestran logos y avance inicial más de 180 s. Superficies posteriores negras, sin mundo/juego probado. Contador 33,48 no mide FPS jugable; causas locales propuestas."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4461#discussioncomment-19178775"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4461"
   }
  ]
 },
 "ghost-of-yotei": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Three alternating heap-off/on pairs over the same 40 s gameplay segment: 10.35 vs10.95 FPS mean, +5.8%. Each run lasts 15 min, but later loads vary 2–11 FPS and two stop writing summaries early. Local reduction and PlayGo changes required; no memory-growth or main/release guarantee.",
   "zh": "相同40秒游玩段三组heap开关交替，均值10.35对10.95 FPS、约+5.8%。每次15分钟，但后续加载2–11波动且两次提早停止摘要。需本地reduction与PlayGo修改，不保证内存增长、main或发行版。",
   "ar": "ثلاثة أزواج heap في مقطع لعب 40ث: متوسط 10.35 مقابل 10.95 FPS، +5.8%. المحاولات 15د لكن التحميل لاحقاً 2–11 ويتوقف ملخص اثنتين مبكراً. تعديلات reduction/PlayGo محلية؛ لا ضمان ذاكرة/main/إصدار.",
   "pt": "Três pares heap no mesmo segmento 40 s: médias 10,35/10,95 FPS, +5,8%. Ensaios 15 min mas cargas posteriores 2–11 e dois resumos acabam cedo. Requer reduction/PlayGo locais; sem garantia memória/main/release.",
   "de": "Drei Heap-Paare im gleichen 40-s-Spielabschnitt: Mittel 10,35/10,95 FPS, +5,8%. Je 15 min, spätere Last 2–11, zwei Logs enden früh. Lokale Reduction/PlayGo nötig; keine Speicher/Main/Release-Garantie.",
   "fr": "Trois paires heap même segment 40 s: moyennes 10,35/10,95 FPS, +5,8%. Essais 15 min mais charges ultérieures 2–11, deux résumés arrêtés tôt. Modifications reduction/PlayGo requises; sans garantie mémoire/main/release.",
   "es": "Tres pares heap mismo tramo 40 s: medias 10,35/10,95 FPS, +5,8%. Pruebas 15 min pero cargas posteriores 2–11, dos resúmenes terminan pronto. Requiere reduction/PlayGo local; sin garantía memoria/main/release."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
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
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19172352"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19172970"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19178132"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19176545"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9508#issuecomment-6402906265"
   }
  ]
 },
 "mxgp-26": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reports on this page identify PPSA30839. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA30839；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA30839؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA30839; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA30839; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA30839 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA30839; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "finding": {
   "en": "Candidate rereads GPU-built indirect buffers and runs to 480 s; at 478 s the rider, ground and trees are lit. Some bike/foreground grass remains dark. This menu-scene result is not a complete race or a verified Hot Wheels fix; exact tested PR head is unstated.",
   "zh": "候选重新读取GPU生成间接缓冲，运行至480秒；478秒车手、地面和树已受光，但部分车体／前景草仍黑。此菜单场景不是完整比赛，也不验证Hot Wheels修复，实测PR准确head未给。",
   "ar": "مرشح يعيد قراءة الأوامر المبنية على GPU ويبلغ 480ث؛ الراكب والأرض والشجر مضاءة عند 478ث، وبعض الدراجة/العشب أسود. مشهد قائمة لا سباق كامل أو إصلاح Hot Wheels؛ الرأس الدقيق مجهول.",
   "pt": "Candidato relê buffers GPU e chega a 480 s: piloto/chão/árvores iluminados aos 478 s, bicicleta/erva parcial escura. Cena de menu, não corrida completa/fix Hot Wheels; head exato omitido.",
   "de": "Kandidat liest GPU-Befehle neu, läuft 480 s: Fahrer/Boden/Bäume bei 478 s beleuchtet, Teile Rad/Gras dunkel. Menüszene, kein volles Rennen/Hot-Wheels-Fix; genauer Head fehlt.",
   "fr": "Candidat relit buffers GPU et atteint 480 s: pilote/sol/arbres éclairés à 478 s, parties moto/herbe sombres. Menu, pas course entière/fix Hot Wheels; head exact absent.",
   "es": "Candidato relee buffers GPU y llega a 480 s: piloto/suelo/árboles iluminados a 478 s, partes moto/hierba oscuras. Menú, no carrera completa/fix Hot Wheels; head exacto omitido."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9510#issuecomment-6409382619"
   }
  ]
 },
 "super-meat-boy-3d": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA31162. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA31162；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31162. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA31162. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA31162. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA31162. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA31162. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "World1 level1, three alternating 330 s pairs: #6501 raises presents from 48.65 to50.74 per10s (+4.3%). Separate #7963 pairs give48.84→49.82 (+2%). These are ≈5 FPS stationary-scene observations, not additive gains or normal full-game performance.",
   "zh": "世界1首关静止场景三组330秒交替，#6501每10秒48.65→50.74帧（+4.3%）；另测#7963为48.84→49.82（+2%）。实际约5 FPS，两项收益不能相加，也不是全游戏正常性能。",
   "ar": "مستوى1/عالم1 ثابت، ثلاثة أزواج 330ث: #6501 من48.65 إلى50.74 عرضاً/10ث (+4.3%). #7963 منفصل48.84→49.82 (+2%). نحو5 FPS، مكاسب غير جمعيّة ولا أداء لعبة كاملة.",
   "pt": "Nível1/mundo1 parado, três pares330 s: #6501 48,65→50,74 apresentações/10 s (+4,3%). #7963 separado48,84→49,82 (+2%). ≈5 FPS; ganhos não somáveis nem desempenho global.",
   "de": "Welt1/Level1 stehend, drei330-s-Paare: #6501 48,65→50,74 Bilder/10 s (+4,3%). #7963 separat48,84→49,82 (+2%). ≈5 FPS, nicht addierbar oder Vollspielmaß.",
   "fr": "Monde1/niveau1 immobile, trois paires330 s: #6501 48,65→50,74 présentations/10 s (+4,3%). #7963 séparé48,84→49,82 (+2%). ≈5 FPS, gains non additionnables ni mesure globale.",
   "es": "Mundo1/nivel1 quieto, tres pares330 s: #6501 48,65→50,74 presentaciones/10 s (+4,3%). #7963 separado48,84→49,82 (+2%). ≈5 FPS, ganancias no sumables ni medida global."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568"
   },
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568#issuecomment-6401210573"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568#issuecomment-6416157378"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6501#issuecomment-6413411667"
   }
  ]
 },
 "grinch-christmas-adventures": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported package PPSA07656. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA07656；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA07656؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA07656; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA07656; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA07656 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA07656; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  },
  "finding": {
   "en": "Three main runs stop before first frame at6–10s on native MSAA import. Candidate gives three300s runs reaching cave/outside first-level HUD. Most intervals75–120 presents/s but some loading dips; scripted Cross only, no combat/audio/completion proof.",
   "zh": "三次main首帧前6–10秒遇native MSAA导入停止；候选三次300秒到洞穴／外侧首关HUD。多数区间75–120呈现／秒，有加载低谷；仅脚本Cross，未证战斗、音频、通关。",
   "ar": "ثلاث محاولات main تتوقف قبل إطار عند6–10ث في MSAA. المرشح ثلاث300ث تبلغ الكهف/خارج المستوى وHUD. غالباً75–120 عرضاً/ث مع انخفاض تحميل؛ Cross مكتوب فقط، لا قتال/صوت/إكمال مثبت.",
   "pt": "Main três falhas antes da imagem6–10 s em MSAA. Candidato três300 s chega à caverna/exterior com HUD. Maioria75–120 apresentações/s, quedas na carga; só Cross, combate/áudio/fim por verificar.",
   "de": "Main dreimal vor Bild bei6–10 s MSAA-Fehler. Kandidat dreimal300 s bis Höhle/Außenlevel mit HUD. Meist75–120 Bilder/s, Ladetiefs; nur Cross, Kampf/Ton/Abschluss ungeprüft.",
   "fr": "Main trois arrêts avant image6–10 s sur MSAA. Candidat trois300 s atteint grotte/extérieur avec HUD. Surtout75–120 présentations/s, baisses chargement; Cross seul, combat/son/fin non prouvés.",
   "es": "Main tres fallos antes de imagen6–10 s por MSAA. Candidato tres300 s alcanza cueva/exterior con HUD. Mayoría75–120 presentaciones/s, bajones carga; solo Cross, combate/audio/final sin probar."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9533#issuecomment-6424866597"
   }
  ]
 },
 "castlevania-belmonts-curse": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Seven minutes of manual Xbox play reaches dock, sewer movement/combat/slide and town, with FMOD sound and1% save. Intro stays black until skipped after demux corruption. Gameplay5–12 FPS, menus30–58; no save-reload/full-run proof.",
   "zh": "Xbox手动七分钟到码头、下水道移动／战斗／滑行和城镇，FMOD音频、1%进度存档有效。片头解复用损坏后须跳过黑屏；游玩5–12 FPS、菜单30–58，未证重载或全流程。",
   "ar": "سبع دقائق Xbox يدوي تبلغ المرفأ والمجاري بحركة/قتال/انزلاق والبلدة، صوت FMOD وحفظ1%. الافتتاح أسود حتى التخطي بعد تلف demux. اللعب5–12 FPS والقائمة30–58؛ إعادة الحفظ/الإكمال مجهولان.",
   "pt": "Sete minutos Xbox manual: cais/esgoto/movimento/combate/deslize/cidade, áudio FMOD e save1%. Intro preta até saltar após erro demux. Jogo5–12 FPS/menu30–58; recarga/fim não provados.",
   "de": "Sieben Minuten manuelles Xbox-Spiel: Dock/Kanal mit Bewegung/Kampf/Rutschen/Stadt, FMOD-Ton und1%-Save. Intro schwarz bis Überspringen nach Demuxfehler. Spiel5–12 FPS/Menü30–58; Neuladen/Abschluss ungeprüft.",
   "fr": "Sept minutes Xbox manuel: quai/égouts, mouvement/combat/glissade/ville, FMOD et save1%. Intro noire jusqu’au saut après erreur demux. Jeu5–12 FPS/menu30–58; rechargement/fin non prouvés.",
   "es": "Siete minutos Xbox manual: muelle/alcantarilla, movimiento/combate/deslizar/ciudad, FMOD y save1%. Intro negra hasta omitir tras error demux. Juego5–12 FPS/menú30–58; recarga/final sin probar."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7266#issuecomment-6415847867"
   }
  ]
 },
 "ratchet-clank-rift-apart": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Main refuses pointer-loaded resource chain at58s warm/189s cold. Two local shader branches pass it but stop later after2194s; a60min warm run spends≈55min in new driver compiles. No gameplay/FPS result. Without --to-intel a separate red-zone fault occurs on Intel.",
   "zh": "main在热58秒／冷189秒拒绝指针资源链；两shader本地分支通过后2194秒另停，60分钟热运行约55分钟花在新驱动编译。没有游戏／FPS结果；Intel不加--to-intel另遇红区故障。",
   "ar": "main يرفض سلسلة موارد عند58ث دافئ/189بارد. فرعان محليان يعبران ثم توقف2194ث؛ تشغيل60د يصرف≈55د بالترجمة. لا لعب/FPS. دون --to-intel خطأ red-zone منفصل على Intel.",
   "pt": "Main recusa cadeia aos58 s quente/189frio. Dois ramos passam e param2194 s; ensaio60 min gasta≈55 min a compilar. Sem jogo/FPS; sem --to-intel há falha red-zone Intel distinta.",
   "de": "Main verweigert Ressourcenkette58 s warm/189kalt. Zwei Zweige passieren, später Stopp2194 s;60min-Lauf≈55min Kompilieren. Kein Spiel/FPS; ohne --to-intel separater Intel-Red-Zone-Fehler.",
   "fr": "Main refuse chaîne58 s chaud/189froid. Deux branches passent puis arrêt2194 s;60min dont≈55min compilation. Ni jeu/FPS; sans --to-intel erreur red-zone Intel distincte.",
   "es": "Main rechaza cadena58 s caliente/189frío. Dos ramas pasan y paran2194 s;60min gasta≈55min compilando. Sin juego/FPS; sin --to-intel fallo red-zone Intel distinto."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/6191#issuecomment-6412527617"
   }
  ]
 },
 "lego-builders-journey": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported package PPSA05496. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA05496，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA05496؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA05496; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA05496; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA05496 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA05496; versión/parches por observación, imágenes promocionales."
  },
  "finding": {
   "en": "Toolkit aborts on depth-view mip1; exact rendered scene and duration unstated. Main has since removed this guard, but comments supply no pinned title rerun. Keep toolkit8323ef96146a distinct from the official release ZIP and from source-only fix claims.",
   "zh": "工具包在深度视图mip1拒绝，具体画面／时长未知；主分支已移除此检查，但评论未给固定构建游戏复测。工具包8323ef96146a与官方zip、源码修复推断分别记录。",
   "ar": "الأداة تتوقف عند depth mip1؛ المشهد/المدة غير محددين. main أزال الحارس لكن لا إعادة عنوان محددة. toolkit8323ef96146a منفصل عن zip الرسمي وادعاء المصدر فقط.",
   "pt": "Toolkit para no depth mip1; cena/duração omitidas. Main retirou guarda mas sem reteste fixado do jogo. Toolkit8323ef96146a separado do ZIP oficial e alegação só de código.",
   "de": "Toolkit stoppt bei Depth-Mip1, Szene/Dauer unbekannt. Main entfernt Guard, aber kein gepinnter Spieltest. Toolkit8323ef96146a getrennt von offiziellem ZIP/Quellcodeaussage.",
   "fr": "Toolkit s’arrête au depth mip1, scène/durée inconnues. Main a retiré garde, sans essai titre fixé. Toolkit8323ef96146a distinct du ZIP officiel et preuve source seule.",
   "es": "Toolkit para en depth mip1, escena/duración omitidas. Main quitó guarda sin retest de juego fijado. Toolkit8323ef96146a distinto del ZIP oficial y afirmación solo código."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11308"
   }
  ]
 },
 "pragmata": {
  "checked": "2026-10-27",
  "edition": {
   "en": "The source tests PPSA02530 v01.200.000, not Sketchbook DEMO PPSA33065.",
   "zh": "来源测试 PPSA02530 v01.200.000，非 Sketchbook DEMO PPSA33065。",
   "ar": "التقرير PPSA02530 v01.200.000 لا DEMO PPSA33065.",
   "pt": "RelatoPPSA02530 v01.200.000, não DEMO PPSA33065.",
   "de": "BerichtPPSA02530 v01.200.000, keine DEMO PPSA33065.",
   "fr": "RapportPPSA02530 v01.200.000, pas DEMO PPSA33065.",
   "es": "InformePPSA02530 v01.200.000, no DEMO PPSA33065."
  },
  "finding": {
   "en": "Same save, one run per build: base stops610s at missing buffer owner; #10304 passes to depth-publication refusal614s. Adding #9950 moves stop574s to changed native-depth metadata, then #10375 reaches loading and refuses external depth writes. Passing one guard is not gameplay or a load-time speedup.",
   "zh": "相同存档每构建一次：本体610秒缺buffer owner；#10304通过后614秒遇深度发布拒绝；加#9950在574秒改为深度元数据变化，再加#10375到加载但拒绝外部深度写。通过一项检查不是游戏过程或加载提速。",
   "ar": "نفس الحفظ، محاولة لكل بناء: أساس610ث بلا owner؛ #10304 إلى رفض نشر عمق614ث، ثم #9950 إلى metadata574ث، و#10375 تحميل ثم رفض كتابة خارجية. تجاوز حارس لا يثبت لعباً أو تسريعاً.",
   "pt": "Mesmo save, um ensaio/build: base610 s sem owner; #10304 recusa profundidade614 s, #9950 metadata574 s, #10375 carga/recusa escrita externa. Passar guarda não prova jogo/velocidade.",
   "de": "Gleicher Save, je ein Lauf: Basis610 s ohne Owner; #10304 Tiefenpublikation614 s, #9950 Metadaten574 s, #10375 Laden/externe Schreibverweigerung. Guard passieren ist kein Gameplay/Ladegewinn.",
   "fr": "Même save, un essai/build: base610 s sans owner; #10304 refus profondeur614 s, #9950 métadonnées574 s, #10375 chargement/refus écriture externe. Passer garde ne prouve ni jeu ni vitesse.",
   "es": "Mismo save, una prueba/build: base610 s sin owner; #10304 rechazo profundidad614 s, #9950 metadatos574 s, #10375 carga/rechazo escritura externa. Pasar guarda no prueba juego/velocidad."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10904"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10304#issuecomment-6423173954"
   }
  ]
 },
 "vice-city-definitive": {
  "checked": "2026-10-27",
  "finding": {
   "en": "Same Resume save, inputs and runtime: baseline relinker crashes before play; trailing-branch red-zone fork reaches gameplay and exits0 after≈32min. Deep tracing yields one present/31.9s in the final interval, unusably slow. One A/B only; raw traces later deleted. Same PlayGo absent both sides, installed/OOM not retested.",
   "zh": "相同Resume存档、输入、运行库，本体relinker游玩前崩溃，红区trailing-branch fork到游戏并约32分钟后退出0。深追踪末段31.9秒仅一帧，无法正常游玩。仅一组A/B、原始追踪后已删除；两侧均PlayGo absent，未复测installed／OOM。",
   "ar": "نفس Resume والإدخال والمكتبات: relinker الأساس ينهار قبل اللعب؛ fork red-zone يبلغ اللعب ويخرج0 بعد≈32د. تتبع عميق، عرض واحد/31.9ث أخيراً، غير قابل للعب العادي. زوج واحد، traces حُذفت؛ PlayGo absent للطرفين، installed/OOM غير معاد.",
   "pt": "Mesmo Resume/entrada/libs: relinker base falha antes do jogo; fork red-zone chega e sai0 após≈32 min. Trace profundo, uma apresentação/31,9 s final, inutilizável. Só um par, traces depois apagadas; PlayGo absent ambos, installed/OOM não retestado.",
   "de": "Gleicher Resume/Inputs/Runtime: Basis-Relinker Absturz vor Spiel; Red-Zone-Fork erreicht Spiel, Exit0 nach≈32min. Tiefentrace zuletzt ein Bild/31,9 s, unspielbar langsam. Ein Paar, Rohtraces gelöscht; PlayGo absent beide, installed/OOM ungeprüft.",
   "fr": "Même Resume/entrée/libs: relinker base plante avant jeu; fork red-zone atteint jeu, sortie0 après≈32min. Trace profond, une présentation/31,9 s finale, inutilisable. Une paire, traces supprimées; PlayGo absent des deux, installed/OOM non retesté.",
   "es": "Mismo Resume/entrada/libs: relinker base falla antes de jugar; fork red-zone llega y sale0 tras≈32min. Trace profundo, una presentación/31,9 s final, inutilizable. Solo un par, traces borrados; PlayGo absent ambos, installed/OOM sin retest."
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
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
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
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10520#discussioncomment-19183003"
   }
  ]
 },
 "cult-of-the-lamb-ppsa06465": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Clean newer main crashes2/3 during startup/new-save flow with allocator corruption. Older local #6960 build survives2/2 new repeats (earlier5/5). Different bases and current merge conflicts prevent a current-main fix claim; scene/control/FPS not newly verified.",
   "zh": "较新干净main在启动／新存档流程2／3发生分配器损坏崩溃；旧本地#6960构建新测2／2存活（旧5／5）。基线不同且当前冲突，不能称当前main修复；未新验证场景、操控、FPS。",
   "ar": "main أحدث ينهار2/3 في بدء/حفظ جديد مع فساد allocator. بناء #6960 أقدم ينجو2/2 جديدة (سابق5/5). قواعد مختلفة وتعارض دمج تمنع إصلاح main الحالي؛ المشهد/تحكم/FPS غير مجددة.",
   "pt": "Main recente falha2/3 no início/novo save por corrupção allocator. #6960 antigo passa2/2 novos (antes5/5). Bases distintas/conflitos impedem fix main atual; cena/controlo/FPS não revalidados.",
   "de": "Neueres main stürzt2/3 beim Start/neuen Save mit Allocator-Korruption ab. Älteres #6960 überlebt2/2 neu (früher5/5). Andere Basen/Konflikte, kein aktueller Main-Fix; Szene/Steuerung/FPS nicht neu geprüft.",
   "fr": "Main récent plante2/3 au démarrage/nouveau save, corruption allocator. Ancien #6960 survit2/2 nouveaux (avant5/5). Bases distinctes/conflits empêchent fix main actuel; scène/contrôle/FPS non revérifiés.",
   "es": "Main nuevo falla2/3 al iniciar/nuevo save por corrupción allocator. #6960 antiguo supera2/2 nuevos (antes5/5). Bases distintas/conflictos impiden fix main actual; escena/control/FPS sin revalidar."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6960#issuecomment-6406666389"
   }
  ]
 },
 "sonic-origins-plus-ppsa05325": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Sonic2 menu, two alternating pairs: fill elision saves3–4.6ms GPU work but presents stay141–147.5 per10s (≈14FPS). No termination/device loss;≈4.6GB memory. Test-only timer/cache changes in both arms; not gameplay or an FPS gain.",
   "zh": "Sonic2菜单两组交替，fill elision省3–4.6毫秒GPU工作，但呈现仍每10秒141–147.5帧、约14 FPS。无终止／丢设备、约4.6GB内存；两侧均有计时／缓存实验修改，不是游戏过程或FPS提升。",
   "ar": "قائمة Sonic2، زوجان: حذف fills يوفر3–4.6ms GPU لكن141–147.5عرضاً/10ث، ≈14FPS. لا فقد جهاز، ذاكرة≈4.6GB. تغييرات اختبار للطرفين؛ ليس لعباً أو زيادة FPS.",
   "pt": "Menu Sonic2, dois pares: elisão poupa3–4,6 ms GPU, mas141–147,5 apresentações/10 s ≈14FPS. Sem perda GPU,≈4,6GB. Alterações de teste ambos; não jogo/ganho FPS.",
   "de": "Sonic2-Menü, zwei Paare: Fill-Elision spart3–4,6ms GPU, aber141–147,5 Bilder/10 s ≈14FPS. Kein Geräteverlust,≈4,6GB. Teständerungen beidseitig; kein Gameplay/FPS-Gewinn.",
   "fr": "Menu Sonic2, deux paires: élision gagne3–4,6ms GPU mais141–147,5 présentations/10 s ≈14FPS. Sans perte appareil,≈4,6GB. Modifications test des deux côtés; ni jeu ni gain FPS.",
   "es": "Menú Sonic2, dos pares: elisión ahorra3–4,6ms GPU pero141–147,5 presentaciones/10 s ≈14FPS. Sin pérdida GPU,≈4,6GB. Cambios prueba ambos; no juego/ganancia FPS."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10668#issuecomment-6404605718"
   }
  ]
 },
 "dusklight-ps5-homebrew": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Same Steam Deck, RADV renders60s/2220 frames (median≈40FPS); llvmpipe instead SIGSEGV at6/39s with0/1 frames in host LLVM mesh JIT. No input/audio/gameplay checked. Valid SPIR-V alone is not standalone reproduction or proof all Linux hosts fail.",
   "zh": "同一Steam Deck，RADV显示60秒／2220帧、中位约40 FPS；llvmpipe在主机LLVM mesh JIT于6／39秒SIGSEGV、0／1帧。未测操作、音频或游戏；SPIR-V有效不等于独立复现，也不证明Linux普遍失败。",
   "ar": "نفس Deck: RADV يعرض60ث/2220إطاراً، وسيط≈40FPS؛ llvmpipe ينهار6/39ث مع0/1إطار في host LLVM mesh JIT. لا إدخال/صوت/لعب؛ SPIR-V صالح لا يثبت فشل Linux كله أو reproducer مستقل.",
   "pt": "Mesmo Deck: RADV60 s/2220 imagens, mediana≈40FPS; llvmpipe SIGSEGV6/39 s com0/1 em LLVM mesh JIT do host. Sem entrada/áudio/jogo; SPIR-V válido não prova falha geral Linux/reprodução isolada.",
   "de": "Gleicher Deck: RADV60 s/2220 Bilder, Median≈40FPS; llvmpipe SIGSEGV6/39 s bei0/1 im Host-LLVM-Mesh-JIT. Eingabe/Ton/Spiel ungeprüft; gültiges SPIR-V kein Standalone-Repro/pauschaler Linux-Ausfall.",
   "fr": "Même Deck: RADV60 s/2220 images, médiane≈40FPS; llvmpipe SIGSEGV6/39 s avec0/1 dans LLVM mesh JIT hôte. Ni entrée/son/jeu; SPIR-V valide ne prouve ni échec Linux général ni reproducer isolé.",
   "es": "Mismo Deck: RADV60 s/2220 imágenes, mediana≈40FPS; llvmpipe SIGSEGV6/39 s con0/1 en LLVM mesh JIT host. Sin entrada/audio/juego; SPIR-V válido no prueba fallo Linux general/repro aislado."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11301#issuecomment-6416361017"
   }
  ]
 },
 "metal-gear-solid-master-collection": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA14363. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA14363，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA14363؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA14363; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA14363; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA14363 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA14363; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "MGS1 route,480s each: clean main56–68presents/10s and no dock within cap; #9879 gives600/10s, dock HUD by131s. Codec progresses423→111s. Exclusive GPU lock but another game was open; no audio/control/completion proof, not all collection games.",
   "zh": "MGS1路线各480秒，干净main每10秒56–68帧、限时内未到码头；#9879为600／10秒、131秒有码头HUD，对应对话423→111秒。有GPU锁但电脑另开游戏；无音频、操控、通关证明，不覆盖整个合集。",
   "ar": "مسار MGS1 لكل480ث: main56–68عرضاً/10ث بلا رصيف، #9879 يعطي600/10ث وHUD عند131ث. حوار423→111ث. قفل GPU مع لعبة أخرى مفتوحة؛ لا صوت/تحكم/إكمال أو كل المجموعة.",
   "pt": "Rota MGS1,480 s: main56–68 apresentações/10 s sem cais; #9879 600/10 s, HUD131 s. Diálogo423→111 s. GPU bloqueada mas outro jogo aberto; sem áudio/controlo/fim/toda coleção.",
   "de": "MGS1-Route je480 s: main56–68 Bilder/10 s ohne Dock; #9879 600/10 s, HUD131 s. Dialog423→111 s. GPU-Sperre, anderes Spiel offen; Ton/Steuerung/Abschluss/Sammlung ungeprüft.",
   "fr": "Route MGS1,480 s: main56–68 présentations/10 s sans quai; #9879 600/10 s, HUD131 s. Dialogue423→111 s. GPU verrouillée, autre jeu ouvert; ni son/contrôle/fin/collection entière.",
   "es": "Ruta MGS1,480 s: main56–68 presentaciones/10 s sin muelle; #9879 600/10 s, HUD131 s. Diálogo423→111 s. GPU bloqueada, otro juego abierto; sin audio/control/final/toda colección."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9217#issuecomment-6415097328"
   }
  ]
 },
 "minecraft-dungeons-ii": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA16064. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA16064；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA16064. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA16064. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA16064. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA16064. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA16064. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "Six interleaved save-walk runs per arm: each crashes2/6; survivors main7.3–9.3FPS versus integration6.7–6.9. None hits the write-watch check under investigation. Four reached rows each are a slowdown signal, not proof of cause; manual per-block-generation conflict resolution retained.",
   "zh": "存档行走两侧各六次交替，均2／6崩溃；存活main7.3–9.3 FPS、整合6.7–6.9。均未触发调查中的write-watch检查；各四个成功样本只是变慢信号而非因果证明，保留手动每block generation冲突解决。",
   "ar": "ستة مسارات حفظ متناوبة لكل طرف: انهيار2/6 لكليهما؛ main7.3–9.3FPS مقابل6.7–6.9. لا فحص write-watch مستهدف. أربع ناجحة فقط إشارة بطء لا سبب مثبت، وحل تعارض generation يدوي.",
   "pt": "Seis rotas intercaladas/lado: falham2/6 ambos; main7,3–9,3FPS contra6,7–6,9. Sem guarda write-watch. Quatro sucessos são sinal, não causa; resolução manual generation retida.",
   "de": "Sechs Wechselrouten je Arm: beide Absturz2/6, main7,3–9,3FPS vs6,7–6,9. Kein betreffender Write-Watch-Guard. Vier Erfolge nur Verlangsamungssignal, manuelle Generation-Konfliktlösung bleibt.",
   "fr": "Six parcours alternés/côté: crash2/6 chacun, main7,3–9,3FPS contre6,7–6,9. Aucun guard write-watch visé. Quatre réussites signalent lenteur sans cause prouvée; conflit generation résolu manuellement.",
   "es": "Seis rutas alternas/lado: fallan2/6 ambos, main7,3–9,3FPS frente6,7–6,9. Sin guarda write-watch objetivo. Cuatro éxitos solo señal, no causa; conflicto generation resuelto manualmente."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6314036383"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/7048#issuecomment-6402822924"
   }
  ]
 },
 "alone-in-the-dark": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Current main reaches menu in5/6 runs, but only3/6 survive: texture serial-size mismatch before menu, loader access violation and34GB allocation failure after it. Prior patch success is on an older base, not refreshed. New menus take90–200s; no gameplay stability claim.",
   "zh": "当前main六次五次到菜单、仅三次无异常；一次菜单前纹理尺寸不符，菜单后另有加载线程访问异常及34GB分配失败。旧补丁成功属于旧基线、未更新复测；菜单90–200秒，无游戏稳定结论。",
   "ar": "main الحالي يبلغ القائمة5/6 لكن ينجو3/6 فقط: mismatch قبلها وخطأ loader وطلب34GB بعدها. نجاح التصحيح الأقدم بقاعدة أخرى لم يُحدّث. قائمة90–200ث، لا ثبات لعب.",
   "pt": "Main atual chega menu5/6 mas só3/6 sobrevivem: mismatch antes, AV loader/pedido34GB depois. Patch antigo noutra base sem reteste. Menu90–200 s, sem estabilidade de jogo.",
   "de": "Main erreicht Menü5/6, nur3/6 überleben: Größenfehler davor, Loader-AV/34GB-Anforderung danach. Alter Patch andere Basis, nicht neu getestet. Menü90–200 s, keine Spielstabilität.",
   "fr": "Main atteint menu5/6 mais3/6 survivent: mismatch avant, AV loader/demande34GB après. Ancien patch autre base sans retest. Menu90–200 s, aucune stabilité de jeu.",
   "es": "Main llega menú5/6 pero sobreviven3/6: mismatch antes, AV loader/petición34GB después. Patch antiguo otra base sin retest. Menú90–200 s, sin estabilidad jugable."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6926#issuecomment-6407433634"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/alone-in-the-dark/"
   }
  ]
 },
 "diablo-ii-resurrected": {
  "checked": "2026-10-27",
  "edition": {
   "en": "The report’s content version is 01.039.000; current artwork does not prove later expansions were tested.",
   "zh": "报告内容版本为 01.039.000；当前配图不证明已测试后来扩展。",
   "ar": "نسخة التقرير 01.039.000 ؛ الصور الحالية لا تثبت اختبار توسعات لاحقة.",
   "pt": "Versão relatada01.039.000; arte atual não prova expansões posteriores testadas.",
   "de": "Berichtsversion01.039.000; aktuelle Bilder belegen keine späteren Erweiterungen.",
   "fr": "Version rapportée01.039.000 ; images actuelles sans preuve des extensions ultérieures.",
   "es": "Versión indicada01.039.000; arte actual no prueba expansiones posteriores."
  },
  "finding": {
   "en": "Menu paired10s traces:76→95 presents, p50132.8→105.0ms, GPU128.4→96.7ms. Both traces drop worker events near6s; this is an early-code f32-flush comparison, not a new-head execution, gameplay benchmark or complete trace proof.",
   "zh": "菜单配对10秒追踪76→95帧，p50 132.8→105.0毫秒、GPU 128.4→96.7；两侧约6秒丢worker事件。这是旧代码f32-flush对照，不冒充新head运行、游戏基准或完整追踪。",
   "ar": "قائمة traces10ث:76→95عرضاً، p50132.8→105.0ms وGPU128.4→96.7. كلاهما يفقد أحداثاً≈6ث؛ مقارنة f32 قديمة لا تشغيل head جديد أو لعب/trace كامل.",
   "pt": "Menu traces10 s:76→95 imagens, p50132,8→105,0ms, GPU128,4→96,7. Ambos perdem eventos≈6 s; comparação f32 antiga, não head novo/jogo/trace completo.",
   "de": "Menü10-s-Traces76→95 Bilder, p50132,8→105,0ms, GPU128,4→96,7. Beide verlieren Events≈6 s; alter f32-Code, kein neuer Head/Gameplay/Volltrace.",
   "fr": "Menu traces10 s:76→95 images, p50132,8→105,0ms, GPU128,4→96,7. Deux pertes d’événements≈6 s; ancien code f32, pas nouveau head/jeu/trace complet.",
   "es": "Menú traces10 s:76→95 imágenes, p50132,8→105,0ms, GPU128,4→96,7. Ambos pierden eventos≈6 s; código f32 antiguo, no head nuevo/juego/trace completo."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11297#issuecomment-6412124386"
   }
  ]
 },
 "007-first-light": {
  "checked": "2026-10-27",
  "edition": {
   "en": "The report is PPSA11386 v01.018.000. The current promotional cover advertises DLC; it does not establish that content was tested.",
   "zh": "报告为 PPSA11386 v01.018.000；当前宣传封面带有 DLC 广告，不证明已测试该内容。",
   "ar": "التقرير PPSA11386 v01.018.000؛ الغلاف الحالي يعلن DLC ولا يثبت اختبارها.",
   "pt": "Relato PPSA11386 v01.018.000; capa anuncia DLC e não comprova o seu teste.",
   "de": "Bericht PPSA11386 v01.018.000; Cover wirbt für DLC und belegt keinen Test davon.",
   "fr": "Rapport PPSA11386 v01.018.000 ; couverture annonce un DLC sans preuve de test.",
   "es": "Informe PPSA11386 v01.018.000; portada anuncia DLC sin prueba de haberlo probado."
  },
  "finding": {
   "en": "First Launch Options reached by9min in both15min runs. With current cache-limit candidate RSS at14min14.6→9.2GB; sampled live heap12170→7329MiB and alias bucket3004→253MiB. LD_PRELOAD estimates, one run/arm; no gameplay/FPS or universal memory guarantee.",
   "zh": "两次15分钟均在9分钟内到首次设置；新缓存限制候选14分钟RSS 14.6→9.2GB，采样live heap 12170→7329 MiB、alias桶3004→253。LD_PRELOAD估算、每侧一次，无游戏／FPS或通用内存保证。",
   "ar": "خيارات أول تشغيل قبل9د بكلا15د. مرشح cache يخفض RSS عند14د من14.6 إلى9.2GB، heap12170→7329MiB وalias3004→253. تقدير LD_PRELOAD ومحاولة لكل طرف، لا لعب/FPS أو ضمان ذاكرة عام.",
   "pt": "Opções iniciais até9min em ambos15min. Candidato cache RSS14,6→9,2GB aos14min, heap12170→7329MiB/alias3004→253. Estimativas LD_PRELOAD, um/lado; sem jogo/FPS/garantia geral.",
   "de": "Startoptionen bis9min in beiden15min. Cachekandidat RSS14,6→9,2GB bei14min, Heap12170→7329MiB/Alias3004→253. LD_PRELOAD-Schätzung, je einer; kein Spiel/FPS/allgemeine Garantie.",
   "fr": "Options initiales avant9min sur deux15min. Candidat cache RSS14,6→9,2GB à14min, heap12170→7329MiB/alias3004→253. Estimation LD_PRELOAD, un/côté; ni jeu/FPS/garantie générale.",
   "es": "Opciones iniciales antes9min en ambos15min. Candidato caché RSS14,6→9,2GB a14min, heap12170→7329MiB/alias3004→253. Estimación LD_PRELOAD, uno/lado; sin juego/FPS/garantía general."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9129#issuecomment-6425761111"
   }
  ]
 },
 "resident-evil-requiem": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report31246/01.200.000; the art page includes30803/36561, so it does not prove the reported region or edition.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测31246／01.200.000，图片页包含30803／36561，不证明报告地区或版本内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير 31246/01.200.000؛ صفحةالصورة 30803/36561 لا تثبت منطقته/نسخته.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato31246/01.200.000; arte30803/36561não prova região/edição testada.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Bericht31246/01.200.000; Bildseite30803/36561belegt Testregion/Edition nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Rapport31246/01.200.000; art30803/36561ne fixe région/édition testée.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Informe31246/01.200.000; arte30803/36561no fija región/edición probada."
  },
  "finding": {
   "en": "Larger local stack now reaches a main-menu performance capture at660s, after adding helper-lane and depth-lifetime work. One run per arm with further multi-import upload change, no repeatability measured. It does not establish gameplay, isolate the earlier intro device-loss cause or prove all stacked fixes correct.",
   "zh": "加helper-lane和深度生命周期处理的较大本地组合，已到660秒主菜单性能采样；再加multi-import上传改动作单次对照，未测重复性。不证明游戏过程、旧片头丢设备单因或全部组合修复正确。",
   "ar": "تركيب محلي أكبر يبلغ لقطة أداء القائمة عند660ث مع helper-lane/عمر العمق. محاولة لكل طرف لتغيير multi-import، بلا تكرار مقاس. لا لعب أو سبب منفرد لفقد الجهاز القديم أو صحة جميع التغييرات.",
   "pt": "Stack local maior chega a captura do menu aos660 s com helper-lane/profundidade. Um ensaio/lado do upload multi-import, sem repetibilidade. Não prova jogo/causa isolada da perda anterior/correção total.",
   "de": "Größerer lokaler Stack erreicht Menücapture bei660 s mit Helper-Lane/Tiefenlebensdauer. Je ein Multi-Import-Upload-Vergleich, keine Wiederholbarkeit. Kein Gameplay/isolierte alte Geräteverlustursache/Stackkorrektheit.",
   "fr": "Stack local élargi atteint capture menu à660 s avec helper-lane/durée profondeur. Un essai/côté multi-import, sans répétabilité. Ni jeu ni cause isolée perte ancienne ni correction totale.",
   "es": "Stack local mayor alcanza captura menú a660 s con helper-lane/vida profundidad. Una prueba/lado multi-import, sin repetibilidad. No prueba juego/causa aislada pérdida anterior/corrección total."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11052"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/resident-evil-requiem/"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11485#issuecomment-6422070394"
   }
  ]
 },
 "final-fantasy-resonance": {
  "checked": "2026-10-27",
  "finding": {
   "en": "PPSA31544 layer readback on RX6650XT/RADV26.2.4: clean acb900c194 fills8/32 grading slices; #6959 98f52d1c8474 on517a7b12b87b fills32 using four device-sized windows. Two200s checkpoint checks exit0; earlier capture observer exits134. This is bounded graphics evidence, not FPS or full console fidelity. Vertex-resource prototypes keep their own source pins and do not establish a speed gain.",
   "zh": "PPSA31544在RX6650XT／RADV26.2.4回读：干净acb900c194仅填8／32层，517a7b12b87b加#6959 98f52d1c8474分四窗口填满32层。两次200秒检查退出0，早期抓取observer却退出134。属限定图形证据、非FPS或完整主机等价；vertex-resource原型保留独立pin，不证明提速。",
   "ar": "قراءة PPSA31544 على RX6650XT/RADV26.2.4: acb900c194 يملأ8/32، و517a7b12b87b مع #6959 98f52d1c8474 يملأ32 بأربع نوافذ. فحصان200ث يخرجان0، وobserver أقدم134. دليل رسومي محدود لا FPS/تكافؤ كامل؛ نماذج vertex-resource تحتفظ برؤوسها بلا مكسب سرعة مثبت.",
   "pt": "PPSA31544 em RX6650XT/RADV26.2.4: acb900c194 preenche8/32;517a7b12b87b+#6959 98f52d1c8474 preenche32 em quatro janelas. Dois200 s saem0, observer anterior134. Evidência gráfica limitada, não FPS/fidelidade total; protótipos vertex-resource mantêm pins sem ganho provado.",
   "de": "PPSA31544 auf RX6650XT/RADV26.2.4: acb900c194 füllt8/32,517a7b12b87b+#6959 98f52d1c8474 alle32 in vier Fenstern. Zweimal200 s Exit0, alter Observer134. Begrenzte Grafikbelege, keine FPS/Konsolengleichheit; Vertex-Resource-Prototypen behalten Pins ohne Leistungsnachweis.",
   "fr": "PPSA31544 sur RX6650XT/RADV26.2.4: acb900c194 remplit8/32;517a7b12b87b+#6959 98f52d1c8474 remplit32 en quatre fenêtres. Deux200 s sortent0, ancien observer134. Preuve graphique bornée, ni FPS/fidélité totale; prototypes vertex-resource gardent leurs pins sans gain prouvé.",
   "es": "PPSA31544 con RX6650XT/RADV26.2.4: acb900c194 llena8/32;517a7b12b87b+#6959 98f52d1c8474 llena32 en cuatro ventanas. Dos200 s salen0, observer anterior134. Evidencia gráfica limitada, sin FPS/fidelidad total; prototipos vertex-resource conservan pins sin ganancia probada."
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
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
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
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10567#discussioncomment-19175608"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10567#discussioncomment-19177635"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10567#discussioncomment-19186833"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6539#issuecomment-6403263562"
   }
  ]
 },
 "high-on-life": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "The e13027a1f/Linux priority experiment was corrected: ignored2/24 crashes versus mapped1/24, including a mapped loader crash at23s. The earlier0/18 was chance, not a fix. CPU masks/priority do not establish the release-order cause; no new gameplay or FPS result.",
   "zh": "e13027a1f／Linux优先级实验已更正：忽略2／24崩溃、映射1／24，映射后加载线程23秒仍崩溃。早期0／18是偶然，不是修复；CPU掩码／优先级不证明释放次序根因，无新游玩或FPS结果。",
   "ar": "تصحيح تجربة e13027a1f/Linux: دون أولوية2/24 انهياراً، مع mapping1/24 ومنه loader عند23ث.0/18 الأقدم حظ لا إصلاح. أقنعة/أولوية لا تثبت سبب ترتيب التحرير، بلا لعب/FPS جديد.",
   "pt": "Experiência e13027a1f/Linux corrigida: ignorado2/24 falhas, mapeado1/24, loader23 s.0/18 antigo acaso, não fix. Máscaras/prioridade não provam causa da libertação, sem jogo/FPS novo.",
   "de": "Korrektur e13027a1f/Linux: ignoriert2/24 Abstürze, gemappt1/24 mit Loader23 s. Früheres0/18 Zufall, kein Fix. Masken/Priorität beweisen Freigabeursache nicht, kein neues Spiel/FPS.",
   "fr": "Correction e13027a1f/Linux: ignoré2/24 crashes, mappé1/24 dont loader23 s. Ancien0/18 hasard, pas fix. Masques/priorité ne prouvent pas ordre de libération, ni nouveau jeu/FPS.",
   "es": "Corrección e13027a1f/Linux: ignorado2/24 fallos, mapeado1/24 con loader23 s.0/18 anterior azar, no fix. Máscaras/prioridad no prueban causa de liberación, sin juego/FPS nuevo."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10905"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10905#issuecomment-6405686315"
   }
  ]
 },
 "hollow-knight-silksong": {
  "checked": "2026-10-27",
  "finding": {
   "en": "Earlier native seam observations keep their pins. The author now reports serializer correction c75821d217 for hostInterpolationFirst, but that is a later branch change, not a retest of3609b981 or a new native Silksong result. Verify round-trip/cache behavior on the exact corrected head before closing the replay gap.",
   "zh": "早期原生接缝观察保留原pin。作者新报c75821d217修正hostInterpolationFirst序列化，属于较后分支变更，不冒充3609b981复测或新丝之歌原生结果；仍需在该准确head验证往返／缓存再关闭缺口。",
   "ar": "أدلة الوصلة القديمة تحتفظ برؤوسها. الكاتب يبلغ إصلاح serializer في c75821d217 لـhostInterpolationFirst، تغيير لاحق لا إعادة3609b981 أو Silksong أصلي جديد. تحقق round-trip/cache على الرأس المصحح.",
   "pt": "Relatos antigos mantêm pins. Autor informa serializer c75821d217 para hostInterpolationFirst, mudança posterior, não reteste3609b981/jogo novo. Verifique round-trip/cache nesse head.",
   "de": "Alte Nahtbelege behalten Pins. Autor meldet Serializerkorrektur c75821d217 für hostInterpolationFirst, späterer Zweig, kein3609b981-/neuer Spieltest. Roundtrip/Cache exakt dort prüfen.",
   "fr": "Anciens essais gardent pins. Auteur annonce serializer c75821d217 pour hostInterpolationFirst, changement ultérieur, pas retest3609b981/jeu neuf. Vérifier round-trip/cache au head exact.",
   "es": "Informes antiguos conservan pins. Autor informa serializer c75821d217 para hostInterpolationFirst, cambio posterior, no retest3609b981/juego nuevo. Verifica round-trip/caché exactos."
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
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/726#discussioncomment-19141071"
   },
   {
    "label": "Source-only serializer review",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10547#issuecomment-6394515838"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10547#issuecomment-6425368336"
   }
  ]
 },
 "mgs-delta-snake-eater": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reports identify PPSA15304; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA15304；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA15304 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA15304 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA15304 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA15304 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA15304 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "finding": {
   "en": "Source-only follow-up: #7263 removed the earlier unaligned-atomic guard after the original test. No new title was run, and identical text elsewhere is not proof the old crash remains reachable. Preserve the old report and request a pinned rerun.",
   "zh": "仅源码跟进：#7263在原测试后移除旧未对齐atomic检查，未新运行游戏；其他位置同文错误不证明旧故障仍可达。保留原报告，待固定构建复测。",
   "ar": "متابعة مصدر فقط: #7263 أزال الحارس القديم بعد الاختبار، بلا تشغيل عنوان جديد. نص مماثل بمكان آخر لا يثبت بلوغه؛ احفظ التقرير وأعد برأس محدد.",
   "pt": "Só código: #7263 retirou guarda após teste antigo, sem jogo novo. Texto igual noutro local não prova acesso; mantenha relato e peça reteste fixado.",
   "de": "Nur Quelle: #7263 entfernt alten Guard nach Test, kein neuer Titellauf. Gleicher Text anderswo beweist Erreichbarkeit nicht; Bericht behalten, gepinnt neu testen.",
   "fr": "Source seule: #7263 retire garde après ancien essai, sans nouveau jeu. Texte similaire ailleurs ne prouve pas accès; garder rapport et retester un pin.",
   "es": "Solo código: #7263 quitó guarda después de prueba antigua, sin juego nuevo. Texto igual en otro sitio no prueba acceso; conserva informe/retest fijado."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/7158#discussioncomment-19194166"
   }
  ]
 },
 "dave-the-diver": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Source-only review confirms old table PRs merged, but later depth/multisample refusals remain. The newer #9533 GPU tests and Grinch title success are not a Dave rerun. Earlier185s presentation-only experiment retains its original composition, without an invented gameplay result.",
   "zh": "源码复核确认旧表PR已合，但后续深度／多采样拒绝仍在。较新#9533的GPU测试及Grinch成功不是Dave复测；旧185秒只呈现实验保留原组合，不补造游玩结果。",
   "ar": "مراجعة مصدر تؤكد دمج PR القديمة لكن رفض العمق/MSAA باق. اختبارات #9533 ونجاح Grinch ليست إعادة Dave. تجربة185ث القديمة للعرض فقط تحتفظ بتركيبها دون لعب مختلق.",
   "pt": "Código confirma PR antigas integradas, recusas depth/MSAA persistem. #9533 e Grinch não são reteste Dave. Ensaio185 s só apresentação mantém composição, sem jogo inventado.",
   "de": "Quellprüfung bestätigt alte Merges, spätere Tiefen/MSAA-Guards bleiben. #9533/Grinch-Erfolg kein Dave-Test. Alter185-s-Präsentationslauf behält Stack, kein erfundenes Gameplay.",
   "fr": "Source confirme anciens merges, refus depth/MSAA restants. #9533/Grinch n’est pas retest Dave. Ancien185 s présentation seule conserve composition sans jeu inventé.",
   "es": "Código confirma merges antiguos, guardas depth/MSAA siguen. #9533/Grinch no es retest Dave. Antiguo185 s solo presentación conserva composición sin juego inventado."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7608#issuecomment-6397267866"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7608#issuecomment-6401150419"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/5963#discussioncomment-19194791"
   }
  ]
 },
 "persona-3-reload": {
  "checked": "2026-10-27",
  "edition": {
   "en": "Reported PS5 package PPSA10872. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA10872，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA10872؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA10872; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA10872; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA10872 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA10872; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "Dependency review separates merged #9068/#9701 from still-open #7048/#10026/#10304/#10140/#9702/#9703. Replay with another stack reaches a different refusal, not a new native run. Short-pad tap retention in #9919 remains a separate input experiment.",
   "zh": "依赖复核区分已合#9068／#9701与仍开放的后续PR；另一个堆栈的回放改遇其他拒绝，不是原生新运行。#9919短按保留是独立输入实验。",
   "ar": "مراجعة تفصل #9068/#9701 المدمجين عن PR الباقية؛ replay بتركيب آخر يرفض لاحقاً ولا يعد تشغيل عنوان. حفظ النقرات القصيرة #9919 تجربة منفصلة.",
   "pt": "Revisão separa #9068/#9701 integradas das PR abertas; replay noutra pilha recusa depois, não é ensaio nativo. Retenção de toques #9919 separada.",
   "de": "Prüfung trennt #9068/#9701 gemergt von offenen PRs; anderer Replay-Stack erreicht anderen Guard, kein nativer Lauf. Kurztasten #9919 separat.",
   "fr": "Revue distingue #9068/#9701 fusionnées des PR ouvertes; autre replay atteint autre refus, pas jeu natif. Touches courtes #9919 séparées.",
   "es": "Revisión distingue #9068/#9701 fusionadas de PR abiertas; otro replay llega a otro rechazo, no ejecución nativa. Pulsaciones cortas #9919 aparte."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/9692#discussioncomment-19189954"
   }
  ]
 },
 "marvels-spider-man-2": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Linux/RADV current f95acfc948 plus #9790 6779c1495a or #9969 34edfd45ff now passes that compile path, but black/no-present loading from≈90s ends at223–270s when a low-VRAM guard stops it. Older saved requests still refuse at0x9a50/0x9a9c on replay. Different linked-call code, no gameplay or proven memory fix.",
   "zh": "Linux／RADV的f95acfc948加#9790 6779c1495a或#9969 34edfd45ff已过此编译路径，但约90秒后黑屏无呈现，223–270秒因低VRAM保护停止。旧请求回放仍拒绝0x9a50／0x9a9c，链接调用代码不同，无游戏过程或内存修复证明。",
   "ar": "Linux/RADV f95acfc948 مع #9790 6779c1495a أو #9969 34edfd45ff يمر الترجمة، لكن تحميل أسود بلا عرض≈90ث ينتهي223–270ث بحارس VRAM. الطلبات القديمة ترفض0x9a50/0x9a9c؛ كود ربط مختلف، لا لعب/إصلاح ذاكرة.",
   "pt": "Linux/RADV f95acfc948+#9790 6779c1495a ou #9969 34edfd45ff passa compilação, mas carga preta sem frames≈90 s termina223–270 s por guard VRAM. Requests antigos recusam0x9a50/0x9a9c; código ligado distinto, sem jogo/fix memória.",
   "de": "Linux/RADV f95acfc948+#9790 6779c1495a oder #9969 34edfd45ff passiert Compilerpfad, schwarz ohne Bilder≈90 s, VRAM-Guard223–270 s. Alte Requests verweigern0x9a50/0x9a9c; anderer Linkcode, kein Spiel/Speicherfix.",
   "fr": "Linux/RADV f95acfc948+#9790 6779c1495a ou #9969 34edfd45ff passe compilation, chargement noir sans images≈90 s, guard VRAM223–270 s. Anciens requests refusent0x9a50/0x9a9c; code lié distinct, ni jeu ni fix mémoire.",
   "es": "Linux/RADV f95acfc948+#9790 6779c1495a o #9969 34edfd45ff pasa compilación, carga negra sin frames≈90 s, guarda VRAM223–270 s. Requests antiguos rechazan0x9a50/0x9a9c; código enlazado distinto, sin juego/fix memoria."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10195#discussioncomment-19159312"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9790#issuecomment-6425760140"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9969#issuecomment-6425760655"
   }
  ]
 },
 "god-of-war-sons-of-sparta": {
  "checked": "2026-10-27",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Experimental macOS observation on M4Pro/macOS27.0.1/AppleClang21/Rosetta2/MoltenVK1.4.2: main035ac96edd needs twelve open PRs plus a local Vulkan-loader/portability patch. Lana reaches gameplay120s and Sons of Sparta the Cyclops145s, both clean exit. No official Mac release, native ARM runtime or Windows/Linux result follows.",
   "zh": "M4Pro／macOS27.0.1／AppleClang21／Rosetta2／MoltenVK1.4.2实验：main035ac96edd仍需十二项开放PR及本地Vulkan加载／portability修改；Lana到游戏120秒、Sparta到独眼巨人145秒，均正常退出。不证明Mac正式版、原生ARM运行时或Windows／Linux结果。",
   "ar": "تجربة M4Pro/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2: main035ac96edd يحتاج12PR مفتوحة وتصحيح Vulkan محلي. Lana لعب120ث وSparta Cyclops145ث وخروج نظيف. لا إصدار Mac أو ARM أصلي أو نتيجة Windows/Linux.",
   "pt": "Experiência M4Pro/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2: main035ac96edd requer12PR e patch Vulkan local. Lana jogo120 s, Sparta Cyclops145 s, saídas normais. Sem release Mac/ARM nativo/resultado Windows/Linux.",
   "de": "M4Pro/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2: main035ac96edd braucht12 offene PRs/lokalen Vulkanpatch. Lana Spiel120 s, Sparta Cyclops145 s, saubere Exits. Kein Mac-Release/natives ARM/Windows-Linux-Ergebnis.",
   "fr": "Essai M4Pro/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2: main035ac96edd nécessite12PR/patch Vulkan local. Lana jeu120 s, Sparta Cyclops145 s, sorties normales. Ni release Mac/ARM natif/résultat Windows-Linux.",
   "es": "Prueba M4Pro/macOS27.0.1/Clang21/Rosetta2/MoltenVK1.4.2: main035ac96edd necesita12PR/patch Vulkan local. Lana juego120 s, Sparta Cyclops145 s, salidas normales. Sin release Mac/ARM nativo/resultado Windows-Linux."
  },
  "nextTest": {
   "en": "Repeat the exact package, build, patch set and scene; verify controls, audio, save reload and a longer session separately. Record the actual test date and keep unknown fields unknown.",
   "zh": "以准确包、构建、补丁和场景复测，分别验证操控、音频、读档及更长会话；记录实际测试日期，未知字段保持未知。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد نفسه؛ افحص التحكم والصوت وإعادة الحفظ والمدة منفصلة. سجل تاريخ الاختبار واحتفظ بالمجهول.",
   "pt": "Repita pacote, build, patches e cena; verifique controlos, áudio, recarga e sessão longa separadamente. Registe a data real e mantenha desconhecidos.",
   "de": "Paket, Build, Patches und Szene reproduzieren; Steuerung, Ton, Laden und Dauer getrennt prüfen. Testdatum erfassen, Unbekanntes bewahren.",
   "fr": "Reproduisez paquet, build, patches et scène; vérifiez commandes, son, rechargement et durée séparément. Date réelle et inconnus conservés.",
   "es": "Repite paquete, build, parches y escena; verifica controles, audio, recarga y duración aparte. Registra fecha real y conserva desconocidos."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/1742#discussioncomment-19178047"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10540#issuecomment-6419715677"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11447#issuecomment-6417998163"
   }
  ]
 }
});

Object.assign(gameResearch,{
 "planet-zoo": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA18027, separate from reported PPSA18026; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA18027，不同于报告PPSA18026，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA18027 مختلفة عن التقرير PPSA18026 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA18027 difere do relato PPSA18026, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA18027 unterscheidet sich vom Bericht PPSA18026, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA18027 distincte du rapport PPSA18026, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA18027 distinta del informe PPSA18026, sin identificar ese paquete."
  },
  "finding": {
   "en": "Three clean-main runs abort at descriptor bindings before presenting. Later main still fails; #11951 produces Frontier/EULA in one 60 s watchdog run, not gameplay. Other timed attempts stop logging earlier.",
   "zh": "三次干净main在描述符绑定处、首帧前终止；后续main仍失败。#11951一次60秒看门狗运行显示Frontier／EULA，不是游戏；其他限时尝试更早停止日志。",
   "ar": "ثلاث محاولات main نظيف تتوقف قبل العرض عند ربط الواصفات. main أحدث يفشل أيضاً؛ #11951 يعرض Frontier/EULA في محاولة مراقبة 60ث، لا لعب. محاولات أخرى تنقطع سجلاتها أبكر.",
   "pt": "Três ensaios main limpo abortam nos descritores antes de apresentar. Main posterior também falha; #11951 mostra Frontier/EULA num ensaio de 60 s com watchdog, não jogo. Outros deixam de registar antes.",
   "de": "Drei saubere Main-Läufe brechen vor der Ausgabe an Deskriptorbindungen ab. Auch neueres Main scheitert; #11951 zeigt einmal Frontier/EULA bis zum 60-s-Watchdog, kein Spiel. Andere Logs enden früher.",
   "fr": "Trois essais main propre échouent aux descripteurs avant toute image. Main ultérieur échoue aussi; #11951 affiche Frontier/EULA sur un essai de 60 s avec watchdog, sans jeu. Autres journaux interrompus avant.",
   "es": "Tres ensayos main limpio abortan en descriptores antes de presentar. Main posterior también falla; #11951 muestra Frontier/EULA en una prueba de 60 s con watchdog, sin juego. Otros registros terminan antes."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11608"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/UP2514-PPSA18027_00-PLANETZOOOOOOOOO"
   }
  ]
 },
 "monopoly": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Board/token selection renders, then a white frame. Mixed executable/module/Http2 builds and millions of dropped trace events prevent a reliable FPS comparison. Online errors are observed but not proved to cause the white screen; early audio stutters.",
   "zh": "棋盘／棋子选择可见，随后白屏。程序、模块与Http2混合构建且追踪丢失数百万事件，无法可靠比较FPS；线上错误不证明白屏原因，早期音频卡顿。",
   "ar": "تظهر خيارات اللوحة والقطعة ثم إطار أبيض. بناء مختلط وفقد ملايين أحداث التتبع يمنعان مقارنة FPS موثوقة. أخطاء الشبكة لا تثبت سبب البياض، والصوت يتقطع مبكراً.",
   "pt": "Seleção de tabuleiro/peça visível, depois branco. Builds mistos e milhões de eventos perdidos impedem comparar FPS. Erros online não provam a causa; áudio inicial entrecortado.",
   "de": "Brett-/Figurenauswahl sichtbar, danach weißes Bild. Gemischte Builds und Millionen verlorene Trace-Ereignisse verhindern FPS-Vergleich. Onlinefehler als Ursache unbewiesen; früher Ton stockt.",
   "fr": "Choix du plateau/pion visible, puis image blanche. Builds mélangés et millions d’événements perdus empêchent une comparaison FPS. Erreurs réseau sans causalité établie; son initial saccadé.",
   "es": "Selección de tablero/ficha visible, después blanco. Builds mezclados y millones de eventos perdidos impiden comparar FPS. Errores online sin causalidad demostrada; audio inicial entrecortado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11954"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/10008585"
   }
  ]
 },
 "the-medium": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA03717, separate from reported PPSA03718; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA03717，不同于报告PPSA03718，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA03717 مختلفة عن التقرير PPSA03718 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA03717 difere do relato PPSA03718, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA03717 unterscheidet sich vom Bericht PPSA03718, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA03717 distincte du rapport PPSA03718, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA03717 distinta del informe PPSA03718, sin identificar ese paquete."
  },
  "finding": {
   "en": "Installed PlayGo data triggers a 5.565 GB UE4 pool failure; absent data reaches title/menu but New Game stays black. Local chunk-list and TYPE2 changes survive 240 s, yet frames are nearly black and level packages remain unopened. Presentation counts do not prove gameplay.",
   "zh": "已安装PlayGo数据时UE4申请5.565 GB池失败；缺数据可到标题／菜单但新游戏黑屏。本地块列表及TYPE2修改存活240秒，画面仍近黑且未打开关卡包；呈现计数不证明游戏。",
   "ar": "بيانات PlayGo المثبتة تفشل في حوض UE4 بحجم 5.565 GB؛ غيابها يبلغ القائمة لكن New Game أسود. تعديلات محلية تعيش 240ث بإطارات شبه سوداء وحزم مستويات لم تُفتح؛ العد ليس دليلاً للعب.",
   "pt": "PlayGo instalado falha num pool UE4 de 5,565 GB; sem dados chega ao menu mas New Game fica preto. Alterações locais duram 240 s quase pretos, sem abrir pacotes de nível; apresentações não provam jogo.",
   "de": "Installierte PlayGo-Daten scheitern an 5,565-GB-UE4-Pool; ohne Daten Menü, New Game schwarz. Lokale Änderungen überleben 240 s mit fast schwarzen Bildern und ungeöffneten Levelpaketen; Bildzähler belegt kein Spiel.",
   "fr": "PlayGo installé échoue sur un pool UE4 de 5,565 Go; sans données, menu puis New Game noir. Modifications locales tiennent 240 s presque noirs sans ouvrir les niveaux; compteur d’images ne prouve pas le jeu.",
   "es": "PlayGo instalado falla en un pool UE4 de 5,565 GB; sin datos llega al menú pero New Game negro. Cambios locales duran 240 s casi negros sin abrir niveles; contar imágenes no demuestra juego."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11898"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/10002899"
   }
  ]
 },
 "my-friend-peppa-pig": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA03705, separate from reported PPSA03706; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA03705，不同于报告PPSA03706，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA03705 مختلفة عن التقرير PPSA03706 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA03705 difere do relato PPSA03706, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA03705 unterscheidet sich vom Bericht PPSA03706, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA03705 distincte du rapport PPSA03706, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA03705 distinta del informe PPSA03706, sin identificar ese paquete."
  },
  "finding": {
   "en": "Clean main reaches level-eight scenes in a 240 s scripted run, 30 presents/s over the final ten seconds with no dropped events. Cross every twelve seconds; audio, reload, full play and a real controller remain untested.",
   "zh": "干净main在240秒脚本运行中到达第八关场景；末10秒30次呈现／秒，无事件丢失。每12秒Cross，音频、读档、完整流程及真实手柄未测。",
   "ar": "main نظيف يبلغ مشاهد المستوى الثامن خلال 240ث مكتوبة، 30 عرضاً/ث في آخر عشر ثوان بلا أحداث مفقودة. Cross كل 12ث؛ الصوت وإعادة الحفظ واللعبة الكاملة واليد الحقيقية غير مختبرة.",
   "pt": "Main limpo chega às cenas do nível oito em 240 s por guião, 30 apresentações/s nos últimos dez segundos, sem eventos perdidos. Cross cada 12 s; áudio, recarga, jogo completo e comando real por testar.",
   "de": "Sauberes Main erreicht Level-8-Szenen in 240 s mit Skript, zuletzt 30 Bilder/s ohne verlorene Ereignisse. Cross alle 12 s; Ton, Laden, Vollspiel und echter Controller ungeprüft.",
   "fr": "Main propre atteint les scènes du niveau huit en 240 s scriptées, 30 présentations/s sur les dix dernières secondes sans événements perdus. Cross toutes les 12 s; son, rechargement, jeu complet et vraie manette non testés.",
   "es": "Main limpio alcanza escenas del nivel ocho en 240 s por guion, 30 presentaciones/s en los últimos diez segundos sin eventos perdidos. Cross cada 12 s; audio, recarga, juego completo y mando real sin probar."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11822"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/UP3824-PPSA03705_00-8652666117318371/"
   }
  ]
 },
 "call-of-duty-modern-warfare-iii": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA01649, separate from reported PPSA24263; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA01649，不同于报告PPSA24263，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA01649 مختلفة عن التقرير PPSA24263 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA01649 difere do relato PPSA24263, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA01649 unterscheidet sich vom Bericht PPSA24263, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA01649 distincte du rapport PPSA24263, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA01649 distinta del informe PPSA24263, sin identificar ese paquete."
  },
  "finding": {
   "en": "Window, swapchain and audio initialization produce zero frames. Successive local fixes advance xpak/fastfile loading to GameUpdate; the 500→20 µs wait experiment lowers polling CPU but does not verify rendering, audible sound or campaign progress.",
   "zh": "窗口、交换链及音频初始化仍为零帧；连续本地修改使xpak／fastfile加载推进至GameUpdate。500→20微秒等待实验降低轮询CPU，不证明渲染、可听音频或战役进度。",
   "ar": "تهيئة نافذة وعرض وصوت بلا إطارات. تعديلات محلية تتقدم بتحميل xpak/fastfile إلى GameUpdate؛ تجربة الانتظار تخفض CPU لكنها لا تثبت صورة أو صوتاً مسموعاً أو حملة.",
   "pt": "Janela, swapchain e áudio inicializados, zero imagens. Correções locais avançam xpak/fastfile até GameUpdate; espera 500→20 µs reduz CPU sem provar imagem, áudio audível ou campanha.",
   "de": "Fenster-, Swapchain- und Audioinitialisierung ohne Bilder. Lokale Fixes bringen xpak/fastfile bis GameUpdate; Warteexperiment senkt CPU, belegt aber weder Bild noch hörbaren Ton oder Kampagne.",
   "fr": "Fenêtre, swapchain et audio initialisés sans image. Correctifs locaux avancent xpak/fastfile jusqu’à GameUpdate; attente 500→20 µs réduit le CPU sans prouver image, son audible ni campagne.",
   "es": "Ventana, swapchain y audio inicializados, cero imágenes. Cambios locales avanzan xpak/fastfile hasta GameUpdate; espera 500→20 µs reduce CPU sin probar imagen, audio audible ni campaña."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11591"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/call-of-duty-modern-warfare-iii/"
   }
  ]
 },
 "river-city-girls": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Three clean-main 360 s runs show classroom HUD and player movement at different positions. Later ten-second windows contain 564–600 presents. Scripted new-save input; audio, later levels and save reload are unverified.",
   "zh": "三次干净main各360秒，可见教室HUD及不同位置的玩家移动；后段每10秒564–600次呈现。脚本新档输入，音频、后续关卡与读档未验证。",
   "ar": "ثلاث محاولات main نظيف 360ث تظهر واجهة الفصل وحركة اللاعب في مواقع مختلفة؛ لاحقاً 564–600 عرض/10ث. إدخال مكتوب بحفظ جديد؛ الصوت والمراحل اللاحقة وإعادة الحفظ مجهولة.",
   "pt": "Três ensaios main limpo de 360 s mostram HUD da sala e jogador em posições diferentes; depois 564–600 apresentações/10 s. Novo save por guião; áudio, níveis posteriores e recarga por verificar.",
   "de": "Drei saubere 360-s-Main-Läufe zeigen Klassenraum-HUD und Spielerbewegung; später 564–600 Bilder/10 s. Skript mit neuem Spielstand; Ton, spätere Level und Laden ungeprüft.",
   "fr": "Trois essais main propre de 360 s montrent HUD de classe et déplacement du joueur; ensuite 564–600 présentations/10 s. Nouvelle sauvegarde scriptée; son, suite et rechargement non vérifiés.",
   "es": "Tres pruebas main limpio de 360 s muestran HUD de aula y movimiento del jugador; después 564–600 presentaciones/10 s. Nueva partida por guion; audio, niveles posteriores y recarga sin verificar."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11609"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/234070"
   }
  ]
 },
 "gigabash": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Three clean-main 300 s scripted runs reach three match stages. Menus approach 60 FPS, but final match windows span only 4.7–16.2 presents/s. Audio and play beyond the first match are unverified.",
   "zh": "三次干净main各300秒，脚本到达三个对战场景；菜单近60 FPS，末段对战仅4.7–16.2次呈现／秒。未验证音频或首场之后的流程。",
   "ar": "ثلاث محاولات main نظيف 300ث مكتوبة تبلغ ثلاث ساحات. القائمة تقارب 60 FPS لكن نهايات المعركة 4.7–16.2 عرض/ث فقط. الصوت وما بعد المباراة الأولى مجهولان.",
   "pt": "Três ensaios main limpo de 300 s por guião chegam a três arenas. Menus perto de 60 FPS, finais de combate só 4,7–16,2 apresentações/s. Áudio e continuação por verificar.",
   "de": "Drei saubere Main-Läufe à 300 s mit Skript erreichen drei Arenen. Menü fast 60 FPS, Kampfende nur 4,7–16,2 Bilder/s. Ton und Fortsetzung ungeprüft.",
   "fr": "Trois essais main propre de 300 s scriptés atteignent trois arènes. Menus proches de 60 FPS, fin des combats seulement 4,7–16,2 présentations/s. Son et suite non vérifiés.",
   "es": "Tres pruebas main limpio de 300 s por guion llegan a tres arenas. Menús cerca de 60 FPS, finales de combate solo 4,7–16,2 presentaciones/s. Audio y continuación sin verificar."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11607"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/UP5397-PPSA06094_00-9152601786774628/"
   }
  ]
 },
 "codex-ps5-homebrew": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Independent homebrew UI boots for 30 s in WSL/lavapipe. Main fails at setsockopt; #11571 reaches initialize only with a stand-in listener. The assistant-service ELF is not run; no real backend, chat session or game compatibility is proved.",
   "zh": "独立自制UI在WSL／lavapipe启动30秒。main的setsockopt失败；#11571仅在替代监听器下到initialize。未运行assistant-service ELF，不证明真实后端、聊天或游戏兼容。",
   "ar": "واجهة homebrew مستقلة تبدأ 30ث على WSL/lavapipe. main يفشل عند setsockopt؛ #11571 يبلغ initialize مع مستمع بديل فقط. ELF الخدمة لم يُشغل؛ لا backend أو محادثة أو لعبة مثبتة.",
   "pt": "UI homebrew independente arranca 30 s em WSL/lavapipe. Main falha em setsockopt; #11571 chega a initialize só com listener substituto. ELF do serviço não executado; sem backend, chat ou jogo comprovado.",
   "de": "Unabhängige Homebrew-UI startet 30 s unter WSL/lavapipe. Main scheitert an setsockopt; #11571 erreicht initialize nur mit Ersatzlistener. Service-ELF ungestartet; kein echter Backend-/Chat-/Spielnachweis.",
   "fr": "UI homebrew indépendante démarre 30 s sous WSL/lavapipe. Main échoue sur setsockopt; #11571 atteint initialize avec écouteur substitut seulement. ELF du service non lancé; aucun backend, chat ou jeu prouvé.",
   "es": "UI homebrew independiente arranca 30 s en WSL/lavapipe. Main falla en setsockopt; #11571 alcanza initialize solo con listener sustituto. ELF del servicio sin ejecutar; ningún backend, chat o juego probado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11570"
   },
   {
    "label": "Independent homebrew source and v0.0.4 release",
    "url": "https://github.com/Portablelle/Codex-PS5"
   }
  ]
 },
 "project-zero-maiden-black-water": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "The tested PR passes the previous Reverb refusal, then aborts on a custom mastering voice. No rendered scene or gameplay is established.",
   "zh": "实测PR越过原Reverb拒绝，随后在自定义mastering voice终止；未建立可见场景或游戏证据。",
   "ar": "يتجاوز PR رفض Reverb ثم يتوقف عند mastering voice مخصص؛ لا مشهد أو لعب مثبت.",
   "pt": "PR ultrapassa Reverb mas aborta na mastering voice personalizada; sem cena ou jogo comprovado.",
   "de": "PR passiert Reverb, scheitert dann an eigener Mastering-Voice; keine Szene oder Spiel belegt.",
   "fr": "PR franchit Reverb puis échoue sur une voix mastering personnalisée; aucune scène ni jeu établi.",
   "es": "PR supera Reverb y aborta en mastering voice personalizada; sin escena ni juego demostrado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10599#issuecomment-6430075348"
   },
   {
    "label": "Official PPSA04333 identity; deluxe marketing does not identify tested DLC",
    "url": "https://store.playstation.com/en-gb/product/EP4108-PPSA04333_00-MOBWDDX000000000/"
   }
  ]
 },
 "carmen-sandiego": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Local redirect support passes the old HTTP redirect refusal, then stops at asynchronous HTTP support. No scene, FPS or completed network exchange is verified.",
   "zh": "本地重定向支持越过旧HTTP拒绝，随后停在异步HTTP；未验证场景、FPS或完整网络交互。",
   "ar": "دعم التحويل المحلي يتجاوز رفض HTTP ثم يتوقف عند HTTP غير المتزامن؛ لا مشهد أو FPS أو تبادل كامل مثبت.",
   "pt": "Redirect local passa a recusa HTTP e para no assíncrono; sem cena, FPS ou troca de rede completa.",
   "de": "Lokale Redirect-Unterstützung passiert HTTP-Verweigerung, stoppt dann asynchron; keine Szene, FPS oder vollständiger Netzwerkablauf belegt.",
   "fr": "Redirection locale franchit le refus HTTP puis bloque en asynchrone; ni scène, FPS ni échange complet vérifiés.",
   "es": "Redirección local supera rechazo HTTP y para en asíncrono; sin escena, FPS ni intercambio completo verificado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11575#issuecomment-6430075609"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/10012106"
   }
  ]
 },
 "silent-hill-townfall": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "D16 changes pass the old refusal. Two warm runs then abort on GPU ownership aliasing; adding #10304 reaches the harbor in three timed runs. Only scripted Cross is verified, not free play, audio or saving.",
   "zh": "D16修改越过旧拒绝，两次热启动随后在GPU归属别名终止；再加#10304三次限时运行到港口。只验证脚本Cross，未验证自由游玩、音频或存档。",
   "ar": "تعديل D16 يتجاوز الرفض ثم تنهار محاولتان دافئتان في aliasing. إضافة #10304 تبلغ الميناء بثلاث محاولات محدودة؛ Cross مكتوب فقط، لا تحكم حر أو صوت أو حفظ.",
   "pt": "D16 passa a recusa; dois ensaios quentes abortam no aliasing GPU. Com #10304, três ensaios chegam ao porto; só Cross por guião, sem jogo livre, áudio ou gravação.",
   "de": "D16 passiert Verweigerung; zwei warme Läufe scheitern an GPU-Aliasing. Mit #10304 drei begrenzte Läufe zum Hafen; nur Skript-Cross, freies Spiel/Ton/Speichern ungeprüft.",
   "fr": "D16 franchit le refus; deux essais chauds échouent sur aliasing GPU. Avec #10304, trois essais au port; Cross scripté seulement, jeu libre/son/sauvegardes non vérifiés.",
   "es": "D16 supera rechazo; dos ensayos calientes abortan por aliasing GPU. Con #10304, tres pruebas llegan al puerto; solo Cross por guion, sin juego libre/audio/guardado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10304#issuecomment-6431143256"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/silent-hill-townfall/"
   }
  ]
 },
 "cyberpunk-2077-ppsa03974": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Main aborts on converted D16 after 110 s. The local candidate reaches a 112 s deliberate STOPPED_BY_CLAUDE timeout instead; that stop is not a normal exit and no specific scene is identified.",
   "zh": "main在110秒因转换D16终止；本地候选运行至112秒主动STOPPED_BY_CLAUDE限时，不是正常退出，也未识别具体场景。",
   "ar": "main يتوقف في D16 عند 110ث؛ المرشح المحلي يصل إلى إيقاف مقصود عند 112ث، لا خروج طبيعي ولا مشهد محدد.",
   "pt": "Main aborta em D16 aos 110 s; candidato termina por timeout intencional aos 112 s, não saída normal nem cena identificada.",
   "de": "Main bricht bei D16 nach 110 s ab; lokaler Kandidat endet nach 112 s absichtlich per Timeout, kein normaler Exit oder Szenennachweis.",
   "fr": "Main échoue en D16 après 110 s; candidat arrêté volontairement à 112 s, ni sortie normale ni scène identifiée.",
   "es": "Main aborta en D16 a los 110 s; candidato detenido deliberadamente a los 112 s, sin salida normal ni escena identificada."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11580#issuecomment-6435751375"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/cyberpunk-2077/"
   }
  ]
 },
 "crimson-desert-ppsa25286": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "Both main and the asynchronous-HTTP candidate stop on the same kqueue/NULL limitation in about a second. This no-network sandbox does not validate real network transport or gameplay.",
   "zh": "main与异步HTTP候选均约一秒停在相同kqueue／NULL限制；无网络沙箱不验证真实传输或游戏。",
   "ar": "main ومرشح HTTP يتوقفان خلال ثانية عند قيد kqueue/NULL نفسه؛ بيئة بلا شبكة لا تثبت النقل أو اللعب.",
   "pt": "Main e candidato HTTP param em cerca de um segundo no mesmo limite kqueue/NULL; sandbox sem rede não valida transporte ou jogo.",
   "de": "Main und HTTP-Kandidat stoppen nach etwa einer Sekunde an gleicher kqueue/NULL-Grenze; Netzwerk-Sandbox belegt weder Transport noch Spiel.",
   "fr": "Main et candidat HTTP bloquent en une seconde sur la même limite kqueue/NULL; bac à sable sans réseau ne valide ni transport ni jeu.",
   "es": "Main y candidato HTTP paran en un segundo en el mismo límite kqueue/NULL; sandbox sin red no valida transporte ni juego."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11630#issuecomment-6437018587"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/crimson-desert/"
   }
  ]
 },
 "fatal-frame-ii-crimson-butterfly-remake": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "A GuestTm stack overwrite stops baseline after 2–11 s. The PR passes that point but aborts near 13 s at an NGS2 custom twelve-channel submixer. The report mixes subtitles; the matching official PPSA identifies Crimson Butterfly Remake, not Maiden of Black Water.",
   "zh": "基线2–11秒发生GuestTm栈覆盖；PR越过后约13秒在NGS2自定义12声道submixer终止。报告混写副标题；匹配官方PPSA是红蝶重制版，并非濡鸦之巫女。",
   "ar": "تجاوز GuestTm يوقف الأساس خلال 2–11ث؛ PR يتجاوزه ثم يتوقف قرب 13ث عند NGS2 ذي 12 قناة. التقرير يخلط الأسماء؛ PPSA الرسمي يحدد Crimson Butterfly Remake لا Maiden.",
   "pt": "Overflow GuestTm para a base em 2–11 s; PR passa e aborta aos ≈13 s em NGS2 de 12 canais. Relato mistura subtítulos; PPSA oficial identifica Crimson Butterfly Remake, não Maiden.",
   "de": "GuestTm-Stacküberschreibung stoppt Basis nach 2–11 s; PR dann nach ≈13 s an NGS2 mit 12 Kanälen. Bericht mischt Untertitel; offizielles PPSA bestätigt Crimson Butterfly Remake statt Maiden.",
   "fr": "Débordement GuestTm arrête la base à 2–11 s; PR puis arrêt vers 13 s sur NGS2 à 12 canaux. Sous-titres mélangés dans le rapport; PPSA officiel identifie Crimson Butterfly Remake, pas Maiden.",
   "es": "Desbordamiento GuestTm para base a 2–11 s; PR después aborta hacia 13 s en NGS2 de 12 canales. Informe mezcla subtítulos; PPSA oficial identifica Crimson Butterfly Remake, no Maiden."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10409#issuecomment-6436849786"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/product/JP0106-PPSA32802_00-CRIBATTFFF000020"
   }
  ]
 },
 "alan-wake-remastered": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "With PlayGo installed, New Game fails around 40 s at format e701. The candidate passes that check, then refuses an MRT alpha format. Additional local bypasses reach further unimplemented checks, not verified gameplay.",
   "zh": "已安装PlayGo时新游戏约40秒在e701格式失败；候选越过后在MRT alpha格式拒绝，再加本地绕过只到更多未实现检查，不是游戏验证。",
   "ar": "مع PlayGo يفشل New Game قرب 40ث في e701؛ المرشح يتجاوزه ثم يرفض صيغة MRT alpha. تجاوزات محلية تبلغ قيوداً أخرى، لا لعباً مثبتاً.",
   "pt": "Com PlayGo, New Game falha aos ≈40 s em e701; candidato passa e recusa MRT alpha. Bypasses locais só avançam até outros limites, sem jogo verificado.",
   "de": "Mit PlayGo scheitert New Game nach ≈40 s an e701; Kandidat dann am MRT-Alphaformat. Lokale Umgehungen erreichen weitere Grenzen, kein Spielnachweis.",
   "fr": "Avec PlayGo, New Game échoue vers 40 s sur e701; candidat passe puis refuse MRT alpha. Contournements locaux vers d’autres limites, sans jeu vérifié.",
   "es": "Con PlayGo, New Game falla hacia 40 s en e701; candidato pasa y rechaza MRT alpha. Bypasses locales llegan a otros límites, sin juego verificado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10581#issuecomment-6442382044"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/alan-wake-remastered/"
   }
  ]
 },
 "echoes-of-the-end": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.Current Enhanced Edition marketing does not establish what features version01.012.000 tested.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 当前增强版宣传不证明01.012.000实际测试哪些新增内容。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. إعلان Enhanced الحالي لا يثبت ميزات01.012.000 المختبرة.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Marketing Enhanced atual não prova funcionalidades testadas em01.012.000.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Aktuelle Enhanced-Werbung belegt keine getesteten Inhalte von01.012.000.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Marketing Enhanced actuel sans preuve des fonctions testées en01.012.000.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Marketing Enhanced actual no prueba funciones testadas en01.012.000."
  },
  "finding": {
   "en": "One 60 s loading pair compares bounded staging on a large private stack. A roughly 40 s loading hitch dominates; median frame time is neutral. Scene progress and a gameplay speed gain are not established.",
   "zh": "大量私有修改上仅一组60秒加载对照，约40秒加载卡顿主导，中位帧时间无变化；未建立场景进度或游戏性能提升。",
   "ar": "زوج تحميل واحد 60ث على تركيب خاص كبير؛ توقف ≈40ث يهيمن والوسيط محايد. لا تقدم مشهد أو مكسب لعب مثبت.",
   "pt": "Um par de carga de 60 s numa composição privada extensa; hitch de ≈40 s domina, mediana neutra. Sem progresso de cena ou ganho em jogo comprovado.",
   "de": "Ein 60-s-Ladepaar auf großem Privatstack; ≈40-s-Hänger dominiert, Median neutral. Kein Szenenfortschritt oder Spielgewinn belegt.",
   "fr": "Une paire de chargement de 60 s sur composition privée; blocage ≈40 s dominant, médiane neutre. Ni progression de scène ni gain en jeu établi.",
   "es": "Una pareja de carga de 60 s en combinación privada extensa; parón ≈40 s domina, mediana neutra. Sin progreso de escena ni mejora en juego demostrada."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11982#issuecomment-6445839107"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://myrkur.is/"
   }
  ]
 },
 "human-fall-flat": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA02431, separate from reported PPSA02429; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA02431，不同于报告PPSA02429，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA02431 مختلفة عن التقرير PPSA02429 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA02431 difere do relato PPSA02429, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA02431 unterscheidet sich vom Bericht PPSA02429, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA02431 distincte du rapport PPSA02429, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA02431 distinta del informe PPSA02429, sin identificar ese paquete."
  },
  "finding": {
   "en": "Same patched-library setup runs to a 40 s cap with five seconds cleanup. Blocking UDP operations return positive counts, with one unexplained zero. This software-rendered setup does not verify multiplayer, TCP or interactive play.",
   "zh": "同套补丁准备测试到40秒限时，清理5秒；阻塞UDP有正返回但一次零值未解释。软件渲染准备不验证多人、TCP或交互游玩。",
   "ar": "الإعداد المعدل نفسه يبلغ حد 40ث مع تنظيف 5ث؛ UDP يعيد أعداداً موجبة وصفراً غير مفسر. العرض البرمجي لا يثبت تعدد اللاعبين أو TCP أو اللعب التفاعلي.",
   "pt": "Mesmo setup alterado até 40 s e limpeza de 5 s; UDP positivo e um zero inexplicado. Renderização por software não valida multiplayer/TCP/jogo interativo.",
   "de": "Gleiches Setup bis 40 s plus 5 s Aufräumen; UDP positiv mit ungeklärter Null. Softwareausgabe belegt kein Multiplayer/TCP/interaktives Spiel.",
   "fr": "Même initialisation jusqu’à 40 s puis nettoyage 5 s; UDP positif et un zéro inexpliqué. Rendu logiciel ne valide pas multijoueur/TCP/jeu interactif.",
   "es": "Misma preparación hasta 40 s y limpieza de 5 s; UDP positivo y un cero sin explicar. Renderizado software no valida multijugador/TCP/juego interactivo."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11969#issuecomment-6451820664"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/227139/"
   }
  ]
 },
 "r-type-final-3-evolved": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "finding": {
   "en": "A 200 s local D16 test passes the former converted-depth refusal. Nineteen profile lines are not nineteen frames or FPS; no specific interactive scene is identified, and validation layers were not installed.",
   "zh": "200秒本地D16测试越过原深度转换拒绝；19行profile不是19帧或FPS。未识别具体交互场景，且未安装验证层。",
   "ar": "اختبار D16 محلي 200ث يتجاوز رفض العمق؛ 19 سطر profile ليست إطارات أو FPS. لا مشهد تفاعلي محدد، وطبقات التحقق غير مثبتة.",
   "pt": "Teste D16 local de 200 s passa a recusa; 19 linhas profile não são imagens/FPS. Sem cena interativa identificada e sem validation layers instaladas.",
   "de": "Lokaler D16-Test über 200 s passiert Verweigerung; 19 Profilzeilen sind keine Bilder/FPS. Interaktive Szene unbenannt, Validierungslayer uninstalliert.",
   "fr": "Test D16 local de 200 s franchit le refus; 19 lignes profile ne sont ni images ni FPS. Scène interactive non identifiée, couches de validation non installées.",
   "es": "Prueba D16 local de 200 s supera rechazo; 19 líneas profile no son imágenes/FPS. Sin escena interactiva identificada ni capas de validación instaladas."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11580#issuecomment-6429651341"
   },
   {
    "label": "Publisher identity/promotional material, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-gb/product/EP1063-PPSA08395_00-0000000000000001"
   }
  ]
 },
 "astro-bot-ppsa21567": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Do not transfer PPSA21564 or other regional-ID results to this entry. The reported content version is 01.018.000.",
   "zh": "不能将 PPSA21564 或其他地区编号结果套用于此条目；来源内容版本为 01.018.000。",
   "ar": "لا تنقل نتائج PPSA21564 أو معرّفات أخرى هنا؛ نسخة المحتوى 01.018.000.",
   "pt": "Não transfira resultados PPSA21564/outros IDs; conteúdo01.018.000.",
   "de": "Keine PPSA21564/andere-ID-Ergebnisse übertragen; Inhalt01.018.000.",
   "fr": "Ne transposez pas PPSA21564/autres IDs ; contenu01.018.000.",
   "es": "No traslades resultados PPSA21564/otros IDs; contenido01.018.000."
  },
  "finding": {
   "en": "Two local runs pass the former lease-pin stop and reach the interactive world map until a 900 s cap. This does not verify Crash Site gameplay; controls on clean main still fail around 255–315 s.",
   "zh": "两次本地运行越过旧lease-pin停止，到可交互世界地图并运行至900秒；不验证Crash Site游戏，干净main对照仍约255–315秒失败。",
   "ar": "محاولتان محليتان تتجاوزان lease-pin وتبلغان خريطة تفاعلية حتى900ث؛ لا تحقق لعب Crash Site، وmain نظيف يفشل255–315ث.",
   "pt": "Dois ensaios locais passam lease-pin e chegam ao mapa interativo até900 s; não validam Crash Site, main limpo ainda falha255–315 s.",
   "de": "Zwei lokale Läufe passieren Lease-Pin und erreichen interaktive Weltkarte bis900 s; kein Crash-Site-Spiel, sauberes Main scheitert255–315 s.",
   "fr": "Deux essais locaux passent lease-pin et atteignent carte interactive jusqu’à900 s; pas jeu Crash Site, main propre échoue255–315 s.",
   "es": "Dos pruebas locales superan lease-pin y llegan al mapa interactivo hasta900 s; sin juego Crash Site, main limpio falla255–315 s."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19169221"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11461#issuecomment-6418779447"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11461#issuecomment-6424411620"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19201989"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11307#issuecomment-6424833863"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9154#issuecomment-6414836567"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11917"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6182#issuecomment-6432837521"
   }
  ]
 },
 "persona-5-royal": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. PS5report05110. Available page OG art is labelledPS4 and was rejected; USPS5listing05109 is another region.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测PS5为05110；可取OG素材标为PS4，已弃用，资料页USPS5的05109属另一地区。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير PS5 هو 05110؛ صورة OG موسومة PS4 رفضت، و USPS5 رقمه 05109 آخر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. PS5testado05110; OGmarcadoPS4rejeitado, USPS505109é outra região.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. PS5-Test05110; PS4-markiertesOGabgelehnt, US-PS505109andere Region.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. PS5testé05110; OGmarquéPS4écarté, USPS505109autre région.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. PS5probado05110; OGmarcadoPS4rechazado, USPS505109otra región."
  },
  "finding": {
   "en": "Clean-main scripted casino run survives 780 s and reaches the HUD after 433 s. The earlier 15 FPS result belongs to a different patched build; it is not this main benchmark. Audio, escape progression and reload remain unverified.",
   "zh": "干净main脚本赌场运行780秒，433秒后到HUD。早先15 FPS属于另一补丁构建，不是本次main性能；音频、后续逃离和读档未验证。",
   "ar": "main نظيف يعيش 780ث في الكازينو وواجهة اللعب عند 433ث. نتيجة 15 FPS الأقدم لبناء معدل آخر، ليست قياس main هذا. الصوت والهروب وإعادة الحفظ مجهولة.",
   "pt": "Main limpo dura 780 s no casino, HUD aos 433 s. Os antigos 15 FPS pertencem a outro build alterado, não a este main. Áudio, fuga e recarga por verificar.",
   "de": "Sauberes Main läuft im Casino 780 s, HUD ab 433 s. Frühere 15 FPS gehören zu anderem Patchbuild, nicht diesem Main. Ton, Flucht und Laden ungeprüft.",
   "fr": "Main propre tient 780 s au casino, HUD après 433 s. Les anciens 15 FPS concernent un autre build modifié, pas ce main. Son, fuite et rechargement non vérifiés.",
   "es": "Main limpio dura 780 s en casino, HUD tras 433 s. Los anteriores 15 FPS son de otro build modificado, no de este main. Audio, fuga y recarga sin verificar."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10872"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/persona-5-royal/"
   }
  ]
 },
 "ball-x-pit": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA31872. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution. Current art advertises The Naturalist Update; it does not identify the content tested in version 01.301.000.",
   "zh": "报告PS5包PPSA31872；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。 当前封面带The Naturalist Update标识，不能据此认定01.301.000测试涵盖该更新。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31872. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5. الصورة تروج The Naturalist Update ولا تثبت محتوى اختبار 01.301.000.",
   "pt": "Pacote PS5 referido PPSA31872. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5. A arte anuncia The Naturalist Update, sem provar o conteúdo testado em 01.301.000.",
   "de": "Gemeldetes PS5-Paket PPSA31872. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf. Das Bild bewirbt The Naturalist Update und belegt nicht den Testinhalt von 01.301.000.",
   "fr": "Paquet PS5 rapporté PPSA31872. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5. L’image promeut The Naturalist Update sans identifier le contenu testé en 01.301.000.",
   "es": "Paquete PS5 reportado PPSA31872. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5. La imagen anuncia The Naturalist Update sin identificar el contenido probado en 01.301.000."
  },
  "finding": {
   "en": "Local HTTP/certificate/build-fix stack runs the base game twice for 300 s at roughly 35 presents/s. Prior level-three freezes and hitches are not disproved; this is not a clean-main or release result.",
   "zh": "本地HTTP、证书和构建修复组合两次运行本体300秒，约35次呈现／秒；未推翻先前第三关冻结和卡顿，不是干净main或发行版结果。",
   "ar": "تركيب HTTP وشهادات وإصلاح بناء محلي يشغل الأساس مرتين 300ث بنحو 35 عرض/ث. تجمد المستوى الثالث السابق والتقطعات غير منفية؛ ليس main نظيفاً أو إصداراً.",
   "pt": "Stack HTTP/certificados/build local roda duas vezes 300 s a ≈35 apresentações/s. Não exclui bloqueios antigos no nível três nem hitches; não é main limpo/release.",
   "de": "Lokaler HTTP/Zertifikat/Build-Stack läuft zweimal 300 s mit ≈35 Bildern/s. Alte Level-3-Freezes/Hänger nicht widerlegt; kein sauberes Main/Release.",
   "fr": "Stack local HTTP/certificats/build tient deux fois 300 s à ≈35 présentations/s. Anciens gels niveau trois/saccades non exclus; pas main propre/release.",
   "es": "Stack local HTTP/certificados/build dura dos veces 300 s a ≈35 presentaciones/s. No descarta congelaciones previas nivel tres ni parones; no es main limpio/release."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/8966#discussioncomment-19178002"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/8966"
   }
  ]
 },
 "dusk-diver-2": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA06565; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA06565；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA06565؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA06565; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA06565; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA06565 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA06565; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  },
  "finding": {
   "en": "Four 90 s tests distinguish baseline FMOD stalls from the exact PR settings-menu result: 11.5/11.2 FPS and zero failed imports. This does not validate later play, and later rebase claims are not substituted into this run.",
   "zh": "四次90秒测试区分基线FMOD停滞与准确PR设置菜单11.5／11.2 FPS、零导入失败；不验证后续游戏，也不把后续rebase替进本次。",
   "ar": "أربع محاولات 90ث تفصل توقف FMOD عن قائمة المرشح 11.5/11.2 FPS بلا فشل استيراد؛ لا لعب لاحق، ولا استبدال البناء بإعادة تأسيس أحدث.",
   "pt": "Quatro ensaios de 90 s distinguem bloqueio FMOD da lista do PR a 11,5/11,2 FPS sem imports falhados; sem jogo posterior nem trocar o build por rebase novo.",
   "de": "Vier 90-s-Tests trennen FMOD-Hänger vom PR-Einstellungsmenü mit 11,5/11,2 FPS ohne Importfehler; kein späteres Spiel, kein Ersetzen durch Rebase.",
   "fr": "Quatre essais de 90 s distinguent blocages FMOD du menu PR à 11,5/11,2 FPS sans échec d’import; suite non validée, rebase ultérieur non substitué.",
   "es": "Cuatro pruebas de 90 s separan atascos FMOD del menú PR a 11,5/11,2 FPS sin imports fallidos; sin validar juego posterior ni sustituir por rebase reciente."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6441947069"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/4449#issuecomment-6440163476"
   }
  ]
 },
 "jumanji-ppsa03973": {
  "checked": "2026-10-28",
  "finding": {
   "en": "Corrected clean-main controls crash near 30 s; candidate runs reach startup/legal screens at about 33 FPS without that stop. One earlier candidate crash remains among five total trials. Old mislabeled-main and live-import-overlap claims were withdrawn.",
   "zh": "校正的干净main对照约30秒崩溃；候选到启动／法律画面约33 FPS未触发该停止，但五次候选历史仍有一次崩溃。旧的main误标及活跃导入重叠推断已撤回。",
   "ar": "main المصحح ينهار قرب 30ث؛ المرشح يبلغ البداية/القانوني بنحو 33 FPS بلا ذلك التوقف، لكن محاولة سابقة من خمس انهارت. ادعاءات main والتداخل القديمة مسحوبة.",
   "pt": "Main corrigido falha aos ≈30 s; candidato chega ao início/legal a ≈33 FPS, mas há uma falha anterior em cinco tentativas. Alegações antigas de main e sobreposição retiradas.",
   "de": "Korrigiertes Main stürzt nach ≈30 s ab; Kandidat zeigt Start/Rechtstexte mit ≈33 FPS, früherer Absturz unter fünf Versuchen bleibt. Alte Main-/Importüberlappungsbehauptungen zurückgezogen.",
   "fr": "Main corrigé plante vers 30 s; candidat atteint début/mentions légales à ≈33 FPS, mais un ancien crash sur cinq demeure. Anciennes affirmations main/chevauchement retirées.",
   "es": "Main corregido falla hacia 30 s; candidato llega a inicio/legal a ≈33 FPS, pero queda un fallo previo entre cinco pruebas. Afirmaciones antiguas main/solapamiento retiradas."
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
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10597"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6442250100"
   }
  ]
 },
 "unbound-worlds-apart": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA03274; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA03273, not this tested package.",
   "zh": "报告PS5包PPSA03274；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA03273，不用于认定本次测试包。",
   "ar": "حزمة PS5 PPSA03274؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA03273 لا الحزمة المختبرة.",
   "pt": "Pacote PS5 PPSA03274; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA03273, não o teste.",
   "de": "PS5-Paket PPSA03274; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA03273, nicht des Tests.",
   "fr": "Paquet PS5 PPSA03274 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA03273, pas cet essai.",
   "es": "Paquete PS5 PPSA03274; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA03273, no de esta prueba."
  },
  "finding": {
   "en": "With PlayGo installed, current main still fails a 5.565 GB UE4 pool request after about 20 s. Allocation logging finds no corresponding new kernel allocation call: internal pool refusal is observed, not proof of a console memory rule. Earlier absent-data gameplay stays separate.",
   "zh": "安装PlayGo后当前main约20秒仍在5.565 GB UE4池申请失败；完整分配日志没有对应新内核分配调用，直接证据是内部池拒绝，不是主机规则证明。旧缺数据游戏结果独立保留。",
   "ar": "مع PlayGo يفشل main قرب 20ث في حوض UE4 بحجم 5.565 GB؛ لا استدعاء تخصيص نواة جديد مطابق في السجل. رفض داخلي لا يثبت قاعدة ذاكرة الكونسول؛ اللعب القديم منفصل.",
   "pt": "Com PlayGo, main falha aos ≈20 s num pool UE4 de 5,565 GB; log sem nova alocação kernel correspondente. Recusa interna não prova regra da consola; jogo antigo separado.",
   "de": "Mit PlayGo scheitert Main nach ≈20 s an 5,565-GB-UE4-Pool; Log ohne zugehörigen neuen Kernelaufruf. Interne Verweigerung belegt keine Konsolenregel; frühere Spielresultate getrennt.",
   "fr": "Avec PlayGo, main échoue vers 20 s sur pool UE4 5,565 Go; aucun nouvel appel kernel correspondant. Refus interne sans preuve de règle console; ancien jeu séparé.",
   "es": "Con PlayGo, main falla hacia 20 s en pool UE4 5,565 GB; sin nueva llamada kernel correspondiente. Rechazo interno no prueba regla de consola; juego previo separado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10204#discussioncomment-19184285"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10204"
   }
  ]
 },
 "oregon-trail": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA19244; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA19244；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA19244؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA19244; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA19244; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA19244 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA19244; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  },
  "finding": {
   "en": "All sampled images stay black in a 180 s scripted run. Window 21.7–23.3 FPS and continuing draw/writeback traffic do not establish visible gameplay or a diagnosed cause.",
   "zh": "180秒脚本运行全部抽样图仍黑；窗口21.7–23.3 FPS及持续绘制／回写不证明可见游戏，也未定位原因。",
   "ar": "كل الصور المأخوذة سوداء في 180ث؛ 21.7–23.3 FPS للنافذة وحركة الرسم لا تثبت لعباً مرئياً أو سبباً معروفاً.",
   "pt": "Todas as capturas ficam pretas em 180 s; janela 21,7–23,3 FPS e tráfego de desenho não provam jogo visível ou causa.",
   "de": "Alle Stichproben in 180 s schwarz; Fenster 21,7–23,3 FPS und Draw-Traffic belegen weder sichtbares Spiel noch Ursache.",
   "fr": "Toutes captures noires sur 180 s; fenêtre 21,7–23,3 FPS et activité graphique ne prouvent ni jeu visible ni cause.",
   "es": "Todas las capturas negras en 180 s; ventana 21,7–23,3 FPS y actividad gráfica no prueban juego visible ni causa."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10215"
   }
  ]
 },
 "sea-of-stars": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA07587; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA07586, PPSA15426, not this tested package. Sunset Edition marketing does not identify the reported content or prove those extras were tested.",
   "zh": "报告PS5包PPSA07587；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA07586, PPSA15426，不用于认定本次测试包。 Sunset Edition营销不代表报告内容或附加内容已测试。",
   "ar": "حزمة PS5 PPSA07587؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA07586, PPSA15426 لا الحزمة المختبرة. تسويق Sunset Edition لا يثبت محتوى التقرير أو اختبار الإضافات.",
   "pt": "Pacote PS5 PPSA07587; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA07586, PPSA15426, não o teste. Marketing Sunset Edition não identifica conteúdo relatado/extra testado.",
   "de": "PS5-Paket PPSA07587; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA07586, PPSA15426, nicht des Tests. Sunset Edition-Werbung belegt keine getesteten Zusatzinhalte.",
   "fr": "Paquet PS5 PPSA07587 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA07586, PPSA15426, pas cet essai. Marketing Sunset Edition ne prouve pas les suppléments testés.",
   "es": "Paquete PS5 PPSA07587; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA07586, PPSA15426, no de esta prueba. Marketing Sunset Edition no prueba extras ensayados."
  },
  "finding": {
   "en": "Clean main remains on key art for 180 s despite scripted input. Window 59.94 FPS is not game performance; almost all reported signals are GC SIGUSR1, not crashes.",
   "zh": "干净main输入脚本后180秒仍封面；窗口59.94 FPS不是游戏性能，几乎全部信号为GC的SIGUSR1而非崩溃。",
   "ar": "main نظيف يبقى على الصورة 180ث رغم الإدخال؛ 59.94 FPS للنافذة ليست أداء لعب، ومعظم الإشارات GC SIGUSR1 لا انهيارات.",
   "pt": "Main limpo mantém a imagem inicial 180 s; janela 59,94 FPS não é desempenho em jogo, sinais sobretudo GC SIGUSR1, não falhas.",
   "de": "Sauberes Main bleibt 180 s am Startbild; Fenster 59,94 FPS keine Spielleistung, Signale fast alle GC SIGUSR1 statt Abstürzen.",
   "fr": "Main propre reste à l’image initiale 180 s; fenêtre 59,94 FPS sans mesure en jeu, signaux surtout GC SIGUSR1 non crashes.",
   "es": "Main limpio sigue en portada 180 s; ventana 59,94 FPS no es rendimiento en juego, señales casi todas GC SIGUSR1, no fallos."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10155"
   }
  ]
 },
 "blue-reflection-quartet": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA33655; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA33655；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA33655؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA33655; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA33655; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA33655 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA33655; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  },
  "finding": {
   "en": "Exact #10599 build passes Reverb but stops after two seconds at an NGS2 multiple-custom-buffer submixer. Another audio PR does not cover this case; no scene is verified.",
   "zh": "准确#10599越过Reverb，2秒后停于NGS2多个自定义缓冲submixer；另一音频PR未覆盖此例，未验证场景。",
   "ar": "بناء #10599 يتجاوز Reverb ثم يتوقف بعد ثانيتين في NGS2؛ PR صوت آخر لا يغطي الحالة، بلا مشهد مثبت.",
   "pt": "Build #10599 passa Reverb e para em dois segundos no submixer NGS2; outro PR não cobre o caso, sem cena validada.",
   "de": "Exaktes #10599 passiert Reverb, stoppt nach zwei Sekunden an NGS2-Submixer; anderer Audio-PR deckt Fall nicht, keine Szene belegt.",
   "fr": "Build exact #10599 franchit Reverb puis bloque à deux secondes en NGS2; autre PR audio insuffisant, aucune scène vérifiée.",
   "es": "Build exacto #10599 supera Reverb y para a dos segundos en NGS2; otro PR audio no cubre caso, sin escena validada."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10271"
   }
  ]
 },
 "trails-sky-2nd-chapter": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA35169. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA35169，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA35169؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA35169; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA35169; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA35169 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA35169; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "Exact #11315 build passes PitchShift but stops at Reverb after two seconds. Conflicting #10599 is not jointly tested, so no combined fix or scene result is claimed.",
   "zh": "准确#11315越过PitchShift但2秒后停于Reverb；冲突的#10599未联合测试，不宣称组合修复或场景结果。",
   "ar": "بناء #11315 يتجاوز PitchShift ويتوقف عند Reverb بعد ثانيتين؛ #10599 المتعارض لم يُختبر معه، بلا إصلاح مشترك أو مشهد.",
   "pt": "Build #11315 passa PitchShift e para em Reverb aos dois segundos; #10599 conflituoso não testado em conjunto, sem correção combinada/cena.",
   "de": "Exaktes #11315 passiert PitchShift, stoppt nach zwei Sekunden an Reverb; konkurrierendes #10599 nicht gemeinsam getestet, kein Kombifix/Szenennachweis.",
   "fr": "Build #11315 franchit PitchShift puis Reverb bloque après deux secondes; #10599 conflictuel non testé ensemble, ni correctif combiné ni scène.",
   "es": "Build #11315 supera PitchShift y para en Reverb a dos segundos; #10599 conflictivo sin prueba conjunta, sin arreglo combinado ni escena."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10156"
   }
  ]
 },
 "bendy-dark-revival": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA27624; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA27624；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA27624؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA27624; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA27624; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA27624 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA27624; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  },
  "finding": {
   "en": "Private stack reaches an office door, saves/reloads and completes one 420 s corridor run. Repeat crashes before OPEN; debugger wrapper exit zero is not guest success. A later MSAA branch still aborts on another repeat, so no stable fix.",
   "zh": "私有组合到办公室门、保存／读档并一次走廊运行420秒；重试在OPEN前崩溃，调试器包装退出零不代表游戏成功。后续MSAA分支仍有重试终止，不能称稳定修复。",
   "ar": "تركيب خاص يبلغ باب المكتب ويحفظ/يعيد التحميل ويكمل محاولة ممر 420ث؛ الإعادة تنهار قبل OPEN. خروج wrapper بصفر ليس نجاح الضيف؛ فرع MSAA اللاحق يفشل أيضاً.",
   "pt": "Stack privado chega à porta, grava/recarrega e completa um corredor de 420 s; repetição falha antes de OPEN. Exit zero do wrapper não é sucesso do jogo; ramo MSAA posterior também aborta.",
   "de": "Privatstack erreicht Bürotür, speichert/lädt und schafft einmal 420-s-Korridor; Wiederholung stürzt vor OPEN ab. Wrapper-Exit null kein Gasterfolg; späterer MSAA-Zweig scheitert ebenfalls.",
   "fr": "Stack privé atteint porte, sauvegarde/recharge et termine un corridor de 420 s; répétition plante avant OPEN. Sortie zéro du wrapper sans succès invité; branche MSAA ultérieure échoue aussi.",
   "es": "Stack privado llega a puerta, guarda/recarga y completa un corredor de 420 s; repetición falla antes de OPEN. Exit cero del wrapper no es éxito del juego; rama MSAA posterior también aborta."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10154"
   }
  ]
 },
 "hamster-playground": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA06652. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA06652，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA06652؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA06652; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA06652; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA06652 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA06652; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "Private stack verifies adoption and save reload, then a newer 540 s quest-book run reaches 2/14 rewards. The newest checkpoint is not reloaded; audio/minigames and an optimization FPS gain remain unknown.",
   "zh": "私有组合验证领养及读档，更新540秒任务簿运行到2／14奖励；最新检查点未读档。音频、小游戏及优化FPS增益未知。",
   "ar": "تركيب خاص يتحقق من التبني وإعادة الحفظ ثم محاولة دفتر 540ث تبلغ مكافآت 2/14؛ أحدث حفظ لم يُعد. الصوت والألعاب المصغرة ومكسب FPS مجهولة.",
   "pt": "Stack privado verifica adoção e recarga; novo ensaio de 540 s chega a recompensas 2/14. Último checkpoint sem recarga; áudio/minijogos e ganho FPS desconhecidos.",
   "de": "Privatstack bestätigt Adoption/Laden; neuer 540-s-Aufgabenlauf erreicht 2/14 Belohnungen. Neuester Stand ungeladen; Ton/Minispiele/FPS-Gewinn unbekannt.",
   "fr": "Stack privé valide adoption/rechargement; nouvel essai quêtes de 540 s atteint 2/14 récompenses. Dernier point non rechargé; son/minijeux/gain FPS inconnus.",
   "es": "Stack privado verifica adopción/recarga; nueva prueba de misiones 540 s alcanza 2/14 recompensas. Último punto sin recargar; audio/minijuegos/ganancia FPS desconocidos."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/9639#discussioncomment-19200253"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/9639"
   }
  ]
 },
 "heavenly-bodies": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA04246. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA04246；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA04246. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA04246. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA04246. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA04246. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA04246. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "Alternating main and local #8932 runs each survive about four minutes. Late stores disappear with the patch, but neither arm crashes here; this does not prove the earlier intermittent crash fixed.",
   "zh": "交替main和本地#8932各存活约四分钟；补丁消除late stores，但本对照两组均未崩溃，不能证明旧间歇崩溃已修。",
   "ar": "main و#8932 محلي يتناوبان نحو أربع دقائق بلا انهيار؛ تختفي late stores مع التعديل لكن لا يثبت إصلاح الانهيار المتقطع القديم.",
   "pt": "Main e #8932 alternados sobrevivem ≈4 min; late stores desaparecem, mas nenhum braço falha aqui, sem provar correção do crash intermitente.",
   "de": "Main und lokales #8932 überleben abwechselnd ≈4 min. Late Stores verschwinden, beide Arme ohne Absturz; alter intermittierender Crash nicht als behoben belegt.",
   "fr": "Main et #8932 local tiennent chacun ≈4 min. Late stores disparaissent mais aucun bras ne plante ici; ancien crash intermittent non prouvé corrigé.",
   "es": "Main y #8932 local duran ≈4 min cada uno. Late stores desaparecen pero ningún brazo falla aquí; sin demostrar arreglo del fallo intermitente."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/8931"
   }
  ]
 },
 "alan-wake-2": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports identify PPSA02572; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA02572；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA02572 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA02572 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA02572 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA02572 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA02572 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "finding": {
   "en": "Main stops at HTTP/1 after about 63 s. Local HTTP/TLS/error-handling paths reach EULA for 600 s, but scrolling/acceptance mostly fails. One successful acceptance in eight older network-error runs is not a repeatable gameplay result.",
   "zh": "main约63秒停在HTTP／1；本地HTTP、TLS及错误处理到EULA 600秒，但滚动／接受多数失败。旧网络错误运行八次仅一次接受，不是可复现游戏结果。",
   "ar": "main يتوقف في HTTP/1 قرب 63ث؛ تعديلات HTTP/TLS والأخطاء تبلغ EULA لـ600ث، والتمرير/القبول غالباً يفشلان. قبول واحد من ثمان قديمة ليس لعباً متكرراً.",
   "pt": "Main para em HTTP/1 aos ≈63 s; HTTP/TLS/erros locais chegam ao EULA por 600 s, navegação/aceitação quase sempre falha. Um sucesso em oito antigos não prova jogo reproduzível.",
   "de": "Main stoppt nach ≈63 s an HTTP/1; lokale HTTP/TLS/Fehlerpfade erreichen EULA für 600 s, Bedienung meist erfolglos. Ein Akzeptieren unter acht älteren Läufen kein reproduzierbares Spiel.",
   "fr": "Main bloque en HTTP/1 vers 63 s; voies HTTP/TLS/erreurs locales atteignent EULA 600 s, défilement/acceptation souvent échouent. Un succès sur huit anciens essais sans jeu reproductible.",
   "es": "Main para en HTTP/1 hacia 63 s; HTTP/TLS/errores locales llegan a EULA 600 s, navegación/aceptación suele fallar. Un éxito entre ocho pruebas antiguas no demuestra juego reproducible."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/7303"
   }
  ]
 },
 "assassins-creed-mirage": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Report package PPSA13960. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA13960；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA13960، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA13960; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA13960; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA13960 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA13960; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  },
  "finding": {
   "en": "Main fails converted format 36 after 86–91 s. Local #11691 passes it, then #8223 passes an MSAA CPU read only to hit a partial-clear guard. Startup remains black; no combined gameplay fix.",
   "zh": "main在86–91秒格式36转换失败；本地#11691越过，再加#8223越过MSAA CPU读取后仍停于部分清除保护。启动仍黑，无组合游戏修复。",
   "ar": "main يفشل في الصيغة 36 عند 86–91ث؛ #11691 ثم #8223 يتجاوزانها وقراءة MSAA لكن يتوقفان عند partial-clear. البداية سوداء، بلا إصلاح لعب شامل.",
   "pt": "Main falha no formato 36 aos 86–91 s; #11691 e #8223 passam os primeiros limites mas param no partial-clear. Início preto, sem correção de jogo combinada.",
   "de": "Main scheitert nach 86–91 s an Format 36; #11691/#8223 passieren erste Grenzen, stoppen an Partial-Clear. Start bleibt schwarz, kein kombinierter Spielnachweis.",
   "fr": "Main échoue sur format 36 à 86–91 s; #11691/#8223 franchissent premiers obstacles puis partial-clear. Début noir, aucun correctif de jeu combiné.",
   "es": "Main falla en formato 36 a 86–91 s; #11691/#8223 pasan primeros obstáculos y paran en partial-clear. Inicio negro, sin arreglo combinado del juego."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/7534"
   }
  ]
 },
 "resident-evil-requiem": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report31246/01.200.000; the art page includes30803/36561, so it does not prove the reported region or edition.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测31246／01.200.000，图片页包含30803／36561，不证明报告地区或版本内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير 31246/01.200.000؛ صفحةالصورة 30803/36561 لا تثبت منطقته/نسخته.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato31246/01.200.000; arte30803/36561não prova região/edição testada.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Bericht31246/01.200.000; Bildseite30803/36561belegt Testregion/Edition nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Rapport31246/01.200.000; art30803/36561ne fixe région/édition testée.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Informe31246/01.200.000; arte30803/36561no fija región/edición probada."
  },
  "finding": {
   "en": "Local stack reaches menu, then an FBI-office opening cinematic and the next load after an old Http2 replacement and an incorrect MSAA bypass. Lazy preparation reduces memory and frame time, but no interactive gameplay or faithful rendering is verified.",
   "zh": "本地组合到菜单；替换旧Http2并错误绕过MSAA后到FBI办公室开场与下次加载。懒准备降低内存和帧时间，不证明交互游戏或正确渲染。",
   "ar": "تركيب محلي يبلغ القائمة ثم مشهد مكتب FBI والتحميل التالي بعد Http2 قديم وتجاوز MSAA غير صحيح. التحضير الكسول يخفض الذاكرة/الزمن، بلا لعب تفاعلي أو دقة صورة مثبتة.",
   "pt": "Stack local chega ao menu, abertura FBI e carga seguinte com Http2 antigo e bypass MSAA incorreto. Preparação lazy reduz memória/tempo, sem validar jogo interativo ou imagem fiel.",
   "de": "Lokaler Stack erreicht Menü, FBI-Intro und Folgeladen mit altem Http2/falscher MSAA-Umgehung. Lazy-Vorbereitung senkt Speicher/Framezeit, belegt kein interaktives Spiel oder korrektes Bild.",
   "fr": "Stack local atteint menu, cinématique FBI et chargement suivant via ancien Http2/bypass MSAA incorrect. Préparation lazy réduit mémoire/temps sans prouver jeu interactif ou rendu fidèle.",
   "es": "Stack local llega a menú, cinemática FBI y siguiente carga con Http2 antiguo/bypass MSAA incorrecto. Preparación lazy reduce memoria/tiempo sin validar juego interactivo ni imagen fiel."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11052"
   },
   {
    "label": "Publisher identity/art source; not an AnyPS5 test",
    "url": "https://www.playstation.com/en-us/games/resident-evil-requiem/"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11485#issuecomment-6422070394"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/11599"
   }
  ]
 },
 "ghost-of-yotei": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Another heavily modified branch measures 1.91–1.96 FPS in three unprofiled village runs. PGO, local draw/cache/LTO and thread changes are combined; no individual gain, upstream-main or release claim follows.",
   "zh": "另一大量修改分支三次无profiling村落1.91–1.96 FPS；PGO、绘制、缓存、LTO及线程修改组合，不能推出单项增益、上游main或发行版结论。",
   "ar": "فرع آخر معدل بكثافة يقيس 1.91–1.96 FPS في ثلاث محاولات قرية بلا profiling. PGO ورسم وكاش/LTO وخيوط مجتمعة، لا مكسب فردي أو main/إصدار.",
   "pt": "Outro ramo muito alterado mede 1,91–1,96 FPS em três ensaios da vila sem profiling. PGO/desenho/cache/LTO/threads combinados, sem ganho individual nem main/release.",
   "de": "Anderer stark geänderter Zweig misst 1,91–1,96 FPS in drei Dorfversuchen ohne Profiling. PGO/Draw/Cache/LTO/Threads kombiniert, kein Einzelgewinn oder Main/Releasebeleg.",
   "fr": "Autre branche très modifiée: 1,91–1,96 FPS sur trois essais village sans profiling. PGO/dessin/cache/LTO/threads combinés, aucun gain isolé ou main/release établi.",
   "es": "Otra rama muy modificada: 1,91–1,96 FPS en tres ensayos de aldea sin profiling. PGO/dibujo/caché/LTO/hilos combinados, sin mejora individual ni main/release."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
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
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19172352"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19172970"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19178132"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675#discussioncomment-19176545"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9508#issuecomment-6402906265"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/675"
   }
  ]
 },
 "ghost-of-tsushima-directors-cut": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "New local experiments emit hundreds of frames, but inspected evidence still shows the Sony logo. Dynamic colors, packet counts and guest time do not prove the claimed fully functional 3D scene; later runs hit device loss or memory exhaustion.",
   "zh": "新增本地实验输出数百帧，但实际核看图片仍为Sony标志。动态颜色、包计数及guest time不能证明声称的完整3D场景；后续运行设备丢失或内存耗尽。",
   "ar": "تجارب محلية تنتج مئات الإطارات لكن الصور المفحوصة ما زالت شعار Sony. اللون والعدادات لا تثبت مشهد 3D كاملاً؛ لاحقاً فقد جهاز/نفاد ذاكرة.",
   "pt": "Experiências locais emitem centenas de imagens, mas as verificadas só mostram logótipo Sony. Cores/contagens/tempo guest não provam cena 3D funcional; depois device loss/memória esgotada.",
   "de": "Lokale Experimente liefern Hunderte Bilder, geprüfte Belege zeigen weiter Sony-Logo. Farben/Zähler/Gastzeit belegen keine funktionierende 3D-Szene; spätere Geräte-/Speicherfehler.",
   "fr": "Expériences locales produisent des centaines d’images, preuves inspectées toujours logo Sony. Couleurs/compteurs/temps invité ne prouvent pas scène 3D fonctionnelle; pertes appareil/mémoire ensuite.",
   "es": "Experimentos locales emiten cientos de imágenes, pruebas inspeccionadas siguen en logo Sony. Colores/contadores/tiempo guest no prueban escena 3D funcional; luego device loss/memoria agotada."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4461#discussioncomment-19178775"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/4461"
   }
  ]
 },
 "gta-v": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "A newer local D16 PR build loads Story and permits open-world play with an additional #9789 revert. Duration and performance are not restated; the earlier branch benchmark must not be assigned to this newer head.",
   "zh": "较新本地D16 PR另回退#9789后加载故事并可开放世界游玩；未重述时长／性能，不能把旧分支基准赋给此新构建。",
   "ar": "بناء D16 أحدث مع تراجع #9789 يحمل Story ويسمح بالعالم المفتوح؛ المدة والأداء غير مذكورين ولا تُنسب إليه أرقام الفرع القديم.",
   "pt": "D16 mais recente com revert #9789 carrega Story e permite mundo aberto; duração/desempenho não repetidos, sem transferir benchmark antigo.",
   "de": "Neueres D16 mit #9789-Revert lädt Story/erlaubt offene Welt; Dauer/Leistung ungenannt, alte Zweigwerte nicht übertragen.",
   "fr": "D16 plus récent avec revert #9789 charge Story/monde ouvert; durée/performance non reprises, anciens chiffres non transférés.",
   "es": "D16 más reciente con revert #9789 carga Story/mundo abierto; duración/rendimiento no reiterados, cifras antiguas no transferidas."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9136#issuecomment-6390382840"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11513"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11307#issuecomment-6414324303"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425#issuecomment-6425876227"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425#issuecomment-6427654998"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425#issuecomment-6451832303"
   }
  ]
 },
 "gta-v-ppsa04263": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Report package PPSA04263. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA04263；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA04263، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA04263; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA04263; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA04263 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA04263; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  },
  "finding": {
   "en": "Candidate reaches North Yankton hostage/bank/vault/phone actions while baseline aborts at Story loading. Compilation windows show about 3–9 presents/s; candidate then hangs at 555 s and is killed after two silent minutes. No general crash fix.",
   "zh": "候选可操作北扬克顿人质、银行、金库、电话，基线在故事加载终止；编译期约3–9次呈现／秒，但555秒挂起、静默两分钟后被杀，非普适崩溃修复。",
   "ar": "المرشح يبلغ أفعال North Yankton بينما الأساس يتوقف في التحميل؛ نحو 3–9 عرض/ث أثناء التجميع، ثم تجمد عند 555ث وقتل بعد صمت دقيقتين. لا إصلاح انهيار عام.",
   "pt": "Candidato permite ações em North Yankton, base aborta em Story; ≈3–9 apresentações/s a compilar, mas bloqueia aos 555 s e é morto após dois minutos. Sem correção geral.",
   "de": "Kandidat erlaubt North-Yankton-Aktionen, Basis scheitert beim Storyladen; ≈3–9 Bilder/s während Kompilierung, hängt bei 555 s und wird beendet. Kein allgemeiner Crashfix.",
   "fr": "Candidat permet actions North Yankton, base échoue au chargement Story; ≈3–9 présentations/s en compilation, gel à 555 s puis arrêt forcé. Pas de correctif général.",
   "es": "Candidato permite acciones North Yankton, base aborta cargando Story; ≈3–9 presentaciones/s compilando, cuelgue a 555 s y cierre forzado. Sin arreglo general."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11580#issuecomment-6451541570"
   }
  ]
 },
 "lego-builders-journey": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported package PPSA05496. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA05496，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA05496؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA05496; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA05496; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA05496 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA05496; versión/parches por observación, imágenes promocionales."
  },
  "finding": {
   "en": "Local depth-mip fix permits four minutes of brick placement/camera input with audio. Warm stationary opening samples show 18–19.9 presents/s, not a full-level benchmark. Enabling ray tracing still triggers a separate UINT export abort.",
   "zh": "本地深度mip修复后可放砖／镜头操作约四分钟并有音频；热缓存静止开场18–19.9次呈现／秒，不是全关卡基准。启用光追仍有独立UINT导出终止。",
   "ar": "إصلاح depth-mip محلي يسمح بوضع مكعبات/كاميرا وصوت أربع دقائق. افتتاح ثابت دافئ 18–19.9 عرض/ث لا مرحلة كاملة؛ تفعيل ray tracing يفشل في UINT منفصل.",
   "pt": "Fix depth-mip local permite quatro minutos de peças/câmara e áudio. Abertura parada quente 18–19,9 apresentações/s, não nível inteiro; ray tracing ainda aborta em UINT.",
   "de": "Lokaler Depth-Mip-Fix erlaubt vier Minuten Bausteine/Kamera mit Ton. Warmer statischer Anfang 18–19,9 Bilder/s, kein Levelbenchmark; Raytracing scheitert weiter an UINT.",
   "fr": "Fix depth-mip local permet quatre minutes de briques/caméra avec son. Début fixe chaud 18–19,9 présentations/s, pas niveau entier; ray tracing échoue encore en UINT.",
   "es": "Fix depth-mip local permite cuatro minutos de ladrillos/cámara y audio. Inicio estático caliente 18–19,9 presentaciones/s, no nivel completo; ray tracing aún aborta en UINT."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11308"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11308#issuecomment-6425919404"
   }
  ]
 },
 "sonic-origins": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Rebased exact-head menu pairs improve title readings from 13.85–13.88 to 16.42–16.44 FPS, with lower GPU time. This is the Sonic 3 & Knuckles selection page, not gameplay or the separate PPSA05325 package.",
   "zh": "rebase准确构建菜单对照由13.85–13.88升至16.42–16.44 FPS并降低GPU时间；这是Sonic3＆Knuckles选择页，不是游戏或另一PPSA05325包。",
   "ar": "زوج قائمة بعد rebase يرتفع من 13.85–13.88 إلى 16.42–16.44 FPS مع GPU أقل؛ صفحة اختيار Sonic3&Knuckles، لا لعب أو حزمة05325.",
   "pt": "Menu após rebase passa de 13,85–13,88 para 16,42–16,44 FPS com menos GPU; seleção Sonic3&Knuckles, não jogo nem pacote05325.",
   "de": "Menüpaare nach Rebase verbessern 13,85–13,88 auf16,42–16,44 FPS mit weniger GPU-Zeit; Sonic3&Knuckles-Auswahl, kein Spiel oder Paket05325.",
   "fr": "Paires menu rebasées de13,85–13,88 à16,42–16,44 FPS, GPU réduit; sélection Sonic3&Knuckles, pas jeu ni paquet05325.",
   "es": "Parejas menú rebasadas pasan13,85–13,88 a16,42–16,44 FPS con menos GPU; selección Sonic3&Knuckles, no juego ni paquete05325."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10668#issuecomment-6446358668"
   }
  ]
 },
 "sonic-2006-recompiled": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "Private recompiled build reaches town/character selection but floor and camera flicker or disappear. Normal output is 11–14 FPS at 4K; synchronous draws or CPU stores improve visibility at only about 4 or 2–3 FPS. Diagnostic workarounds, not a general fix.",
   "zh": "私有重编译构建到城镇／角色选择，但地面与镜头闪烁或消失；正常4K输出11–14 FPS，强制同步绘制或CPU stores改善可见性却仅约4或2–3 FPS，属于诊断绕过。",
   "ar": "بناء معاد محلي يبلغ المدينة/اختيار الشخصية بأرض وكاميرا مفقودتين أو وامضتين. العادي 11–14 FPS عند4K؛ المزامنة/CPU stores تحسن الرؤية عند4 أو2–3 فقط، تجاوز تشخيصي.",
   "pt": "Build recompilado privado chega à cidade/seleção com chão/câmara invisíveis ou a piscar. Normal11–14 FPS em4K; sync draws/CPU stores melhoram imagem a4 ou2–3, só diagnóstico.",
   "de": "Privater Recompile erreicht Stadt/Auswahl mit fehlendem/flackerndem Boden/Kamera. Normal11–14 FPS bei4K; Sync-Draws/CPU-Stores verbessern Sicht bei4 bzw2–3, Diagnoseumgehungen.",
   "fr": "Recompile privé atteint ville/sélection avec sol/caméra absents ou clignotants. Normal11–14 FPS en4K; sync draws/CPU stores améliorent à4 ou2–3 seulement, contournements diagnostic.",
   "es": "Recompilación privada llega a ciudad/selección con suelo/cámara invisibles o parpadeando. Normal11–14 FPS en4K; sync draws/CPU stores mejoran a4 o2–3, solo diagnóstico."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11469"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11562"
   }
  ]
 },
 "ratchet-clank-rift-apart": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Local shader skips and gapless-audio experiment reach the Rivet opening cinematic in a fourth run at 0.1–0.8 FPS. Prior control-style hang is intermittent, loud constant tone remains, and a 5 MiB AMM allocation abort occurs. No interactive play verified.",
   "zh": "本地跳过shader及gapless音频实验第四次到Rivet开场动画0.1–0.8 FPS；先前操控样式挂起间歇出现，持续尖声仍在，并有5 MiB AMM分配终止，未验证交互游玩。",
   "ar": "تجاوز shaders وتجربة الصوت يبلغان مشهد Rivet بالرابعة عند0.1–0.8 FPS؛ تعليق سابق متقطع ونغمة حادة مستمرة وفشل AMM5MiB. لا لعب تفاعلي مثبت.",
   "pt": "Skips shaders/áudio local chegam à abertura Rivet na quarta tentativa a0,1–0,8 FPS; bloqueio anterior intermitente, tom alto e falha AMM5MiB persistem. Sem jogo interativo validado.",
   "de": "Shader-Skips/Audioexperiment erreichen beim vierten Lauf Rivet-Intro mit0,1–0,8 FPS; intermittierender Hänger, Dauerton und AMM5MiB-Fehler bleiben. Interaktives Spiel ungeprüft.",
   "fr": "Skips shaders/audio locaux atteignent intro Rivet au quatrième essai à0,1–0,8 FPS; gel intermittent, son aigu et échec AMM5MiB persistent. Jeu interactif non vérifié.",
   "es": "Skips shaders/audio locales llegan a intro Rivet en cuarta prueba a0,1–0,8 FPS; cuelgue intermitente, tono fuerte y fallo AMM5MiB persisten. Sin juego interactivo verificado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/6191#issuecomment-6412527617"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11700#issuecomment-6435149929"
   }
  ]
 },
 "god-of-war-sons-of-sparta": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "On top of #11952, three further warm 12 s Cyclops pairs improve 18.854→20.040 FPS. This measures the additional PR on an already patched base; gains cannot be treated as standalone main results. One mesh fixture fails on both arms.",
   "zh": "已加#11952的基线上再三组热缓存12秒独眼巨人对照18.854→20.040 FPS；测的是额外PR而非单独main结果。一个mesh测试两组都失败。",
   "ar": "فوق #11952 ثلاثة أزواج Cyclops دافئة12ث تتحسن18.854→20.040 FPS؛ تغيير إضافي على أساس معدل لا main مستقل. اختبار mesh واحد يفشل في الطرفين.",
   "pt": "Sobre #11952, três pares Cyclops quentes12 s sobem18,854→20,040 FPS; PR adicional sobre base alterada, não main isolado. Um teste mesh falha em ambos.",
   "de": "Auf #11952 steigen drei weitere warme12-s-Cyclops-Paare18,854→20,040 FPS; zusätzlicher PR auf Patchbasis, kein isoliertes Main. Mesh-Test scheitert in beiden Armen.",
   "fr": "Sur #11952, trois autres paires Cyclops chaudes12 s passent18,854→20,040 FPS; PR additionnel sur base modifiée, pas main seul. Un test mesh échoue des deux côtés.",
   "es": "Sobre #11952, tres parejas Cyclops calientes12 s pasan18,854→20,040 FPS; PR extra sobre base modificada, no main aislado. Un test mesh falla en ambos."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/1742#discussioncomment-19178047"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10540#issuecomment-6419715677"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11447#issuecomment-6417998163"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11952"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10547#issuecomment-6450195823"
   }
  ]
 },
 "astro-bot": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "One of 24 new 100 s logo tests still hits device loss, in addition to one of nine prior candidate runs. Small failure counts do not justify calling the combined build stable.",
   "zh": "新增24次100秒标志测试仍一次设备丢失，旧候选9次也有一次；小样本失败计数不能据以称组合稳定。",
   "ar": "اختبار شعار واحد من24 الجديدة100ث يفقد الجهاز، إضافة إلى واحد من9 سابقة؛ العدد الصغير لا يثبت الاستقرار.",
   "pt": "Uma de24 novas provas de logótipo100 s perde o dispositivo, além de uma em9 anteriores; amostra não prova estabilidade.",
   "de": "Ein Geräteverlust in24 neuen100-s-Logotests plus einer in9 früheren; kleine Stichprobe belegt keine Stabilität.",
   "fr": "Une perte appareil sur24 nouveaux tests logo100 s, plus une sur9 antérieurs; petit échantillon sans stabilité prouvée.",
   "es": "Una pérdida de dispositivo entre24 nuevas pruebas logo100 s, más una entre9 anteriores; muestra pequeña sin estabilidad demostrada."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/357#discussioncomment-19183828"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9712#issuecomment-6405968025"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10364#issuecomment-6410487349"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11307#issuecomment-6440045889"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/6284#issuecomment-6429234530"
   }
  ]
 },
 "lego-horizon-adventures": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports identify PPSA14632; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA14632；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA14632 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA14632 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA14632 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA14632 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA14632 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "finding": {
   "en": "Local D16 fix initially spends 600 s at the PlayStation logo as import budget collapses. Adding #8091 reaches menu and an opening cinematic once; another run stays on black loading for two minutes.",
   "zh": "本地D16修复最初因导入预算下降在PS标志600秒；加#8091一次到菜单和开场，另一运行黑屏加载两分钟。",
   "ar": "D16 محلي يبقى600ث عند شعار PlayStation مع انهيار الميزانية؛ إضافة #8091 تبلغ قائمة ومشهداً مرة، وأخرى تحميل أسود دقيقتين.",
   "pt": "D16 local fica600 s no logo com orçamento a cair; com #8091 chega uma vez ao menu/cinemática, outra fica dois minutos em carga preta.",
   "de": "Lokales D16 bleibt600 s am Logo bei sinkendem Importbudget; #8091 erreicht einmal Menü/Intro, zweiter Lauf zwei Minuten schwarz.",
   "fr": "D16 local reste600 s au logo avec budget en chute; #8091 atteint une fois menu/cinématique, autre essai noir deux minutes.",
   "es": "D16 local queda600 s en logo con presupuesto en caída; #8091 llega una vez a menú/cinemática, otro ensayo negro dos minutos."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11580"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11580#issuecomment-6432838116"
   }
  ]
 },
 "super-meat-boy-3d": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA31162. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA31162；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31162. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA31162. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA31162. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA31162. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA31162. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  },
  "finding": {
   "en": "Exact D16 branch reaches level-one tutorial for a 602 s run at about 5 FPS. This Linux result does not fix the separately observed Windows cyan rendering or establish console-value accuracy.",
   "zh": "准确D16分支到第一关教程602秒，约5 FPS；Linux结果不修复另见的Windows青色渲染，也不证明主机数值正确。",
   "ar": "فرع D16 المحدد يبلغ تدريب المرحلة الأولى602ث بنحو5 FPS؛ لا يصلح زرقة Windows ولا يثبت قيم الكونسول.",
   "pt": "Ramo D16 chega ao tutorial nível1 por602 s a≈5 FPS; não corrige ciano Windows nem prova valores da consola.",
   "de": "Exakter D16-Zweig erreicht Level1-Tutorial602 s mit≈5 FPS; kein Windows-Cyanfix oder Konsolenwertnachweis.",
   "fr": "Branche D16 atteint tutoriel niveau1 pendant602 s à≈5 FPS; ni correctif cyan Windows ni valeurs console prouvées.",
   "es": "Rama D16 llega al tutorial nivel1 por602 s a≈5 FPS; no corrige cian Windows ni prueba valores consola."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568"
   },
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568#issuecomment-6401210573"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10568#issuecomment-6416157378"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6501#issuecomment-6413411667"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425#issuecomment-6445372185"
   }
  ]
 },
 "borderlands-4": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports on this page identify PPSA01494. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering. The promotional cover carries Super Deluxe Edition branding; it does not establish that the reported build contains or tests that content.",
   "zh": "本页报告编号为 PPSA01494；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。 宣传封面带有 Super Deluxe Edition 标识；不能据此判定报告包含或测试该内容。",
   "ar": "معرّف التقارير PPSA01494؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5. الغلاف يحمل Super Deluxe Edition؛ لا يثبت وجود أو اختبار ذلك المحتوى.",
   "pt": "Relatos identificam PPSA01494; arte promocional não prova região, versão ou imagem AnyPS5. A capa mostra Super Deluxe Edition; não prova esse conteúdo no teste.",
   "de": "Berichte nennen PPSA01494; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering. Das Werbecover trägt Super Deluxe Edition; kein Nachweis dieses Inhalts im Test.",
   "fr": "Rapports identifiés PPSA01494 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5. La couverture porte Super Deluxe Edition ; contenu non établi dans le test.",
   "es": "Informes identifican PPSA01494; arte promocional no prueba región, versión ni renderizado AnyPS5. La portada muestra Super Deluxe Edition; no prueba ese contenido en el test."
  },
  "finding": {
   "en": "Local branch runs for 603 s without the D16 refusal that stops main at 101 s. The comment does not identify an interactive scene; lack of refusal is not a gameplay or speed result.",
   "zh": "本地分支603秒未触发main在101秒的D16拒绝；评论未识别交互场景，无拒绝不等于游戏或性能结果。",
   "ar": "الفرع المحلي603ث بلا رفض D16 الذي يوقف main عند101ث؛ لا مشهد تفاعلي محدد، غياب الرفض ليس لعباً أو سرعة.",
   "pt": "Ramo local603 s sem recusa D16 que para main aos101 s; cena interativa não identificada, não prova jogo/velocidade.",
   "de": "Lokaler Zweig603 s ohne D16-Stop von Main bei101 s; interaktive Szene unbenannt, kein Spiel-/Geschwindigkeitsnachweis.",
   "fr": "Branche locale603 s sans refus D16 de main à101 s; scène interactive non identifiée, sans résultat jeu/vitesse.",
   "es": "Rama local603 s sin rechazo D16 de main a101 s; escena interactiva no identificada, sin resultado juego/velocidad."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425#issuecomment-6423266726"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11425"
   }
  ]
 },
 "metal-gear-solid-master-collection": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA14363. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA14363，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA14363؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA14363; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA14363; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA14363 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA14363; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "Two exact-head 330 s boots reach title with either wave mode and no hang. Other closely related arms still fail; this narrow route does not establish gameplay or a universal shared-memory fix.",
   "zh": "准确构建两次330秒启动，两种wave模式均到标题无挂起；其他近邻组合仍失败，仅此路径不证明游戏或普适共享内存修复。",
   "ar": "محاولتان330ث بالرأس المحدد تبلغان العنوان بكلا وضعي wave بلا تعليق؛ أذرع قريبة تفشل، فلا لعب أو إصلاح شامل.",
   "pt": "Dois arranques330 s chegam ao título com ambos modos wave; variantes próximas falham, sem jogo ou correção geral comprovada.",
   "de": "Zwei330-s-Starts erreichen Titel mit beiden Wave-Modi; nahe Varianten scheitern, kein Spiel- oder universeller Shared-Memory-Fix.",
   "fr": "Deux démarrages330 s atteignent titre dans les deux modes wave; variantes proches échouent, sans jeu ou correctif général prouvé.",
   "es": "Dos arranques330 s llegan al título en ambos modos wave; variantes próximas fallan, sin juego ni arreglo general probado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9217#issuecomment-6415097328"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/7922#issuecomment-6449747475"
   }
  ]
 },
 "call-of-duty-black-ops-ii": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported PS5 package PPSA34502. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA34502，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA34502؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA34502; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA34502; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA34502 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA34502; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  },
  "finding": {
   "en": "Further matched campaign pairs reduce title shader-preparation work in two valid pairs; an unmatched first pair is excluded. Worker time and worst hitch are mixed, with dropped trace events. No FPS improvement is claimed.",
   "zh": "进一步战役配对仅两组有效样本降低主线程shader准备；首组不匹配排除。worker时间及最重卡顿有增有减，追踪有丢失，不宣称FPS提升。",
   "ar": "أزواج حملة لاحقة تخفض تحضير العنوان في زوجين صالحين؛ الأول غير المتطابق مستبعد. وقت workers وأسوأ توقف مختلطان مع أحداث مفقودة؛ بلا ادعاء FPS.",
   "pt": "Pares posteriores reduzem preparação em dois pares válidos; primeiro não emparelhado excluído. Workers/hitch mistos, eventos perdidos; sem alegar ganho FPS.",
   "de": "Weitere Kampagnenpaare senken Vorbereitung in zwei gültigen Paaren; unpassendes erstes ausgeschlossen. Worker/Hänger gemischt, Ereignisverluste; kein FPS-Gewinn behauptet.",
   "fr": "Paires suivantes réduisent préparation sur deux paires valides; première non appariée exclue. Workers/blocage mitigés, événements perdus; aucun gain FPS revendiqué.",
   "es": "Parejas posteriores reducen preparación en dos válidas; primera no comparable excluida. Workers/parón mixtos, eventos perdidos; sin afirmar mejora FPS."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11967#issuecomment-6445322283"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/12039#issuecomment-6449512144"
   }
  ]
 },
 "pragmata": {
  "checked": "2026-10-28",
  "edition": {
   "en": "The source tests PPSA02530 v01.200.000, not Sketchbook DEMO PPSA33065.",
   "zh": "来源测试 PPSA02530 v01.200.000，非 Sketchbook DEMO PPSA33065。",
   "ar": "التقرير PPSA02530 v01.200.000 لا DEMO PPSA33065.",
   "pt": "RelatoPPSA02530 v01.200.000, não DEMO PPSA33065.",
   "de": "BerichtPPSA02530 v01.200.000, keine DEMO PPSA33065.",
   "fr": "RapportPPSA02530 v01.200.000, pas DEMO PPSA33065.",
   "es": "InformePPSA02530 v01.200.000, no DEMO PPSA33065."
  },
  "finding": {
   "en": "Two cold/warm 1200 s pairs improve cinematic presentation rate to 1.31/1.33 from 1.13/1.17, on a base with fourteen open PRs. Every run freezes on the same image after 540–575 s; repeating that frame is not progress.",
   "zh": "含14项开放PR的基线上，两组冷／热1200秒对照片头呈现率1.13／1.17→1.31／1.33；所有运行540–575秒后停同一画面，重复呈现不是进度。",
   "ar": "زوجان بارد/دافئ1200ث يرفعان عرض السينمائي1.13/1.17→1.31/1.33 على14 PR؛ كل المحاولات تجمد الصورة540–575ث، تكرارها ليس تقدماً.",
   "pt": "Dois pares frio/quente1200 s sobem1,13/1,17→1,31/1,33 na cinemática sobre14 PRs; todos congelam a mesma imagem540–575 s, repeti-la não é progresso.",
   "de": "Zwei kalte/warme1200-s-Paare steigern Intro1,13/1,17→1,31/1,33 auf14-PR-Basis; alle frieren bei540–575 s am selben Bild ein, Wiederholung kein Fortschritt.",
   "fr": "Deux paires froid/chaud1200 s améliorent cinématique1,13/1,17→1,31/1,33 sur14 PR; toutes figent la même image à540–575 s, répétition sans progression.",
   "es": "Dos parejas frío/caliente1200 s mejoran cinemática1,13/1,17→1,31/1,33 sobre14 PR; todas congelan misma imagen540–575 s, repetirla no es progreso."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10904"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10304#issuecomment-6423173954"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/7844#issuecomment-6442053786"
   }
  ]
 },
 "lego-batman-legacy-dark-knight": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports identify PPSA16833; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA16833；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA16833؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA16833; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA16833; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA16833 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA16833; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "finding": {
   "en": "Five candidate seizure-warning runs stabilize near 4 presents/s; baseline varies widely and hangs once. A later D16 branch still collapses its import budget; combining #8091 reaches only the warning, not gameplay.",
   "zh": "五次候选光敏警告运行约4次呈现／秒；基线波动大且一次挂起。后续D16分支仍导入预算崩塌，组合#8091也只到警告，不是游戏。",
   "ar": "خمس محاولات تحذير مرشح تستقر قرب4 عرض/ث؛ الأساس متغير ويتعلق مرة. فرع D16 لاحق ينهار بميزانية الاستيراد، ودمج #8091 يبلغ التحذير فقط.",
   "pt": "Cinco candidatos no aviso estabilizam≈4 apresentações/s; base varia e bloqueia uma vez. Ramo D16 posterior perde orçamento, com #8091 só chega ao aviso, não jogo.",
   "de": "Fünf Kandidaten am Warnbild stabilisieren≈4 Bilder/s; Basis schwankt/hängt einmal. Späterer D16-Zweig verliert Budget, mit #8091 nur Warnung, kein Spiel.",
   "fr": "Cinq candidats à l’avertissement stabilisent≈4 présentations/s; base variable, un gel. Branche D16 ultérieure perd budget; avec #8091 seulement avertissement, pas jeu.",
   "es": "Cinco candidatos en aviso estabilizan≈4 presentaciones/s; base variable y un cuelgue. Rama D16 posterior pierde presupuesto; con #8091 solo aviso, no juego."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/8091#issuecomment-6449570528"
   }
  ]
 },
 "marvels-spider-man-2": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Exact PR passes the main recompiler stop twice, but both runs turn black after logos and exhaust available VRAM until a guard stops them. Saved older shader replays still refuse; passing the current dispatch is not gameplay.",
   "zh": "准确PR两次越过main重编译停止，但标志后黑屏且可用显存耗尽，由保护器终止；旧shader回放仍拒绝，本次dispatch通过不是游戏。",
   "ar": "PR محدد يتجاوز توقف main مرتين لكن الشاشة تسود بعد الشعارات وتنخفض VRAM حتى إيقاف الحارس. replay قديم ما زال يرفض؛ لا لعب مثبت.",
   "pt": "PR passa duas vezes a recusa main, mas depois dos logos fica preto e esgota VRAM até ao guard. Replays antigos ainda recusam; dispatch não prova jogo.",
   "de": "Exakter PR passiert Main-Stop zweimal, danach schwarz/VRAM-Erschöpfung bis Schutzabbruch. Alte Shader-Replays verweigern weiter; Dispatch-Erfolg kein Spiel.",
   "fr": "PR exact franchit deux fois l’arrêt main, puis noir/VRAM épuisée jusqu’au garde. Anciens replays refusent encore; dispatch réussi sans jeu prouvé.",
   "es": "PR exacto pasa dos veces parada main, luego negro/VRAM agotada hasta guard. Replays antiguos aún rechazan; dispatch no prueba juego."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary evidence",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/10195#discussioncomment-19159312"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9790#issuecomment-6425760140"
   },
   {
    "label": "Source-scoped follow-up, separate from historical tests",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9969#issuecomment-6425760655"
   }
  ]
 },
 "007-first-light": {
  "checked": "2026-10-28",
  "edition": {
   "en": "The report is PPSA11386 v01.018.000. The current promotional cover advertises DLC; it does not establish that content was tested.",
   "zh": "报告为 PPSA11386 v01.018.000；当前宣传封面带有 DLC 广告，不证明已测试该内容。",
   "ar": "التقرير PPSA11386 v01.018.000؛ الغلاف الحالي يعلن DLC ولا يثبت اختبارها.",
   "pt": "Relato PPSA11386 v01.018.000; capa anuncia DLC e não comprova o seu teste.",
   "de": "Bericht PPSA11386 v01.018.000; Cover wirbt für DLC und belegt keinen Test davon.",
   "fr": "Rapport PPSA11386 v01.018.000 ; couverture annonce un DLC sans preuve de test.",
   "es": "Informe PPSA11386 v01.018.000; portada anuncia DLC sin prueba de haberlo probado."
  },
  "finding": {
   "en": "One pair stays on First Launch Options for fifteen minutes. The candidate lowers sampled RSS from 14.6 to 9.2 GB and live relocation allocations, but no gameplay, FPS or free-control improvement follows.",
   "zh": "一组对照十五分钟停在首次启动选项；候选采样RSS14.6→9.2 GB并减少重定位活跃分配，不代表游戏、FPS或自由操控改善。",
   "ar": "زوج واحد يبقى على خيارات البداية15د؛ المرشح يخفض RSS14.6→9.2 GB والتخصيصات، بلا دليل لعب أو FPS أو تحكم حر.",
   "pt": "Um par fica nas opções iniciais15 min; candidato reduz RSS14,6→9,2 GB e alocações, sem provar jogo/FPS/controlos.",
   "de": "Ein Paar bleibt15 min bei Erststartoptionen; Kandidat senkt RSS14,6→9,2 GB und Allokationen, kein Spiel/FPS/Steuerungsgewinn belegt.",
   "fr": "Une paire reste aux options initiales15 min; candidat réduit RSS14,6→9,2 Go et allocations, sans gain jeu/FPS/commandes prouvé.",
   "es": "Una pareja queda en opciones iniciales15 min; candidato reduce RSS14,6→9,2 GB y asignaciones, sin probar juego/FPS/controles."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9129#issuecomment-6425761111"
   }
  ]
 },
 "mxgp-26": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports on this page identify PPSA30839. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA30839；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA30839؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA30839; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA30839; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA30839 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA30839; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "finding": {
   "en": "Successive local pool/redirect/async fixes move the startup stop to HTTP/1, then a DNS error in a no-network sandbox. Zero rendered gameplay is established; the transport has not been tested against a real network here.",
   "zh": "连续本地池／重定向／异步修改将启动停止推进到HTTP／1，随后无网络沙箱DNS错误；未建立游戏渲染，未在此验证真实网络。",
   "ar": "إصلاحات محلية للحوض/التحويل/async تنقل التوقف إلى HTTP/1 ثم DNS في sandbox بلا شبكة؛ لا لعب مرئي أو نقل حقيقي مثبت.",
   "pt": "Fixes locais pool/redirect/async avançam até HTTP/1 e erro DNS em sandbox sem rede; sem jogo ou transporte real validado.",
   "de": "Lokale Pool/Redirect/Async-Fixes verschieben Stop zu HTTP/1 und DNS in Netzwerksandbox; kein Spiel oder echter Transport belegt.",
   "fr": "Fixes locaux pool/redirection/async avancent vers HTTP/1 puis DNS sans réseau; ni jeu ni transport réel validé.",
   "es": "Fixes locales pool/redirección/async avanzan a HTTP/1 y DNS sin red; sin juego ni transporte real validado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/9510#issuecomment-6409382619"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11630"
   }
  ]
 },
 "ridge-racer": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reported package PPSA31372. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA31372；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA31372؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA31372; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA31372; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA31372 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA31372; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  },
  "finding": {
   "en": "Local font changes restore horizontal CJK text while menu/race windows show 600 presents per ten seconds. No complete race or longer-session result is supplied.",
   "zh": "本地字体修改恢复横排CJK文字，菜单／比赛窗口每10秒600次呈现；未提供完整比赛或长会话结果。",
   "ar": "تعديل خط محلي يعيد CJK الأفقي وقائمة/سباق600 عرض/10ث؛ لا سباق كامل أو مدة أطول مثبتة.",
   "pt": "Fonte local repõe CJK horizontal, menu/corrida600 apresentações/10 s; sem corrida completa ou sessão longa.",
   "de": "Lokaler Fontfix stellt horizontales CJK wieder her, Menü/Rennen600 Bilder/10 s; kein komplettes Rennen/Langtest.",
   "fr": "Police locale rétablit CJK horizontal, menu/course600 présentations/10 s; course complète/durée non vérifiées.",
   "es": "Fuente local restaura CJK horizontal, menú/carrera600 presentaciones/10 s; sin carrera completa ni sesión larga."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/5209#issuecomment-6429696714"
   }
  ]
 },
 "tekken-dark-resurrection": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PPSA31371 v01.000.002 is the reported PS5 package; it is not evidence from an independent PSP emulator.",
   "zh": "报告PS5包为PPSA31371 v01.000.002，不是独立PSP模拟器结果。",
   "ar": "حزمةPS5 PPSA31371 v01.000.002، ليست اختبار محاكيPSP مستقل.",
   "pt": "PacotePS5 PPSA31371 v01.000.002, não teste de emuladorPSP independente.",
   "de": "PS5-Paket PPSA31371 v01.000.002, kein separater PSP-Emulatortest.",
   "fr": "PaquetPS5 PPSA31371 v01.000.002, pas émulateurPSP indépendant.",
   "es": "PaquetePS5 PPSA31371 v01.000.002, no emuladorPSP independiente."
  },
  "finding": {
   "en": "Local font test renders a single HUD line at 112 s, but the comparison uses another scene and is not a controlled fidelity test. Character meshes still break into triangles.",
   "zh": "本地字体测试112秒可见一行HUD，但对照为另一场景，不是受控画质验证；角色模型仍碎成三角形。",
   "ar": "اختبار خط محلي يظهر سطر HUD عند112ث؛ المقارنة بمشهد آخر ليست اختبار دقة مضبوطاً، والشخصيات ما زالت مثلثات.",
   "pt": "Teste de fonte mostra linha HUD aos112 s; comparação noutra cena não controla fidelidade, personagens continuam em triângulos.",
   "de": "Lokaler Fonttest zeigt HUD-Zeile bei112 s; andere Vergleichsszene kein kontrollierter Bildtest, Figuren weiter Dreiecke.",
   "fr": "Test police affiche ligne HUD à112 s; autre scène comparative sans contrôle fidélité, personnages toujours en triangles.",
   "es": "Test fuente muestra línea HUD a112 s; comparación en otra escena no controla fidelidad, personajes aún en triángulos."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/5209#issuecomment-6433426939"
   }
  ]
 },
 "marvels-wolverine": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Local AGC test eventually produces a 120-frame timing window with median about 5.35 s/frame. Scripted menu inputs do not identify interactive gameplay; main provides no comparable timing window within its cap, so no direct FPS gain is established.",
   "zh": "本地AGC测试最终有120帧计时窗口，中位约5.35秒／帧；脚本菜单输入未识别交互游戏，main限时内无可比窗口，不能建立直接FPS增益。",
   "ar": "اختبار AGC محلي ينتج نافذة120 إطار بوسيط5.35ث/إطار؛ إدخال قائمة مكتوب لا يثبت لعباً، وmain بلا نافذة مقارنة، لا مكسب FPS مباشر.",
   "pt": "AGC local produz janela120 imagens com mediana5,35 s/imagem; entradas menu não identificam jogo e main sem janela comparável, sem ganho FPS direto.",
   "de": "Lokales AGC liefert120-Bild-Fenster mit Median5,35 s/Bild; Skriptmenü belegt kein Spiel, Main ohne vergleichbares Fenster, kein direkter FPS-Gewinn.",
   "fr": "AGC local produit fenêtre120 images à médiane5,35 s/image; entrées menu sans jeu identifié, main sans fenêtre comparable, aucun gain FPS direct.",
   "es": "AGC local produce ventana120 imágenes con mediana5,35 s/imagen; entradas menú sin juego identificado, main sin ventana comparable, sin ganancia FPS directa."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/10256#issuecomment-6442673843"
   }
  ]
 },
 "double-dragon-gaiden": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports identify PPSA16018; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA16018；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA16018؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA16018; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA16018; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA16018 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA16018; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "finding": {
   "en": "New main passes the old module-initialization issue but opens a window then aborts near 25 s at an Http2 redirect. Merging the initialization fix does not establish gameplay.",
   "zh": "新main越过旧模块初始化问题，打开窗口后约25秒在Http2重定向终止；初始化修复合并不等于游戏通过。",
   "ar": "main جديد يتجاوز تهيئة الوحدة لكنه يفتح نافذة ثم يفشل قرب25ث عند Http2 redirect؛ الدمج لا يثبت اللعب.",
   "pt": "Main novo passa inicialização, abre janela e aborta aos≈25 s no redirect Http2; merge não prova jogo.",
   "de": "Neues Main passiert Modulinitialisierung, öffnet Fenster und bricht nach≈25 s an Http2-Redirect ab; Merge kein Spielnachweis.",
   "fr": "Nouveau main passe initialisation, ouvre fenêtre puis échoue vers25 s en redirection Http2; fusion sans jeu établi.",
   "es": "Main nuevo pasa inicialización, abre ventana y aborta hacia25 s en redirect Http2; merge no prueba juego."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/5621#issuecomment-6441972956"
   }
  ]
 },
 "stray": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "Warm draw-preparation pairs have no isolated FPS gain; one low-count run was an earlier scene. Small clean-run counts vary on both main32b7331c44 and #6926 b7794a5, so no crash fix is established. A different fork’s older9% result is not current main.",
   "zh": "热缓存绘制准备对照无独立FPS增益，一个低呈现运行场景更早；main32b7331c44和#6926 b7794a5的小样本正常次数均波动，不证明崩溃修复。另一fork旧9%不是当前main。",
   "ar": "أزواج التحضير الدافئة بلا مكسب FPS معزول؛ مشهد مختلف يفسر عدداً منخفضاً. عدد النجاحات متقلب على main32b7331c44 و#6926 b7794a5، بلا إصلاح انهيار مثبت؛9% لفرع أقدم ليس main.",
   "pt": "Pares quentes sem ganho FPS isolado, cena diferente num ensaio baixo. Sucessos variam em main32b7331c44/#6926 b7794a5, sem crash fix;9% de fork antigo não é main.",
   "de": "Warme Paare ohne isolierten FPS-Gewinn, niedriger Lauf mit früherer Szene. Erfolgszahlen schwanken auf main32b7331c44/#6926 b7794a5, kein Crashfix; alte9% aus Fork nicht Main.",
   "fr": "Paires chaudes sans gain FPS isolé, essai faible sur autre scène. Succès variables main32b7331c44/#6926 b7794a5, aucun crashfix; anciens9% de fork pas main.",
   "es": "Parejas calientes sin mejora FPS aislada, prueba baja en otra escena. Éxitos variables main32b7331c44/#6926 b7794a5, sin crashfix;9% antiguo de fork no main."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6273"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/6926"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7895"
   }
  ]
 },
 "yakuza-0-directors-cut": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Reports identify PPSA31327; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA31327；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA31327؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA31327; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA31327; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA31327 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA31327; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "finding": {
   "en": "On PPSA31327 Kamurocho/4070/621.01/7800X3D, moving work off the committer can slow the finisher and frame. The later4c1af4f48 same-binary pairs lower committer time while frame205.6→203.5 ms is about1%, within noise. No standalone speed win is established.",
   "zh": "PPSA31327神室町／4070／621.01／7800X3D中，移走committer工作会拖慢finisher和整帧。后续4c1af4f48同二进制对照虽降低committer时间，整帧205.6→203.5毫秒约1%，仍在噪声内，不能称独立提速。",
   "ar": "في Kamurocho31327 على4070/621.01/7800X3D نقل العمل قد يبطئ الإطار؛ أزواج4c1af4f48 تخفض committer لكن205.6→203.5ms نحو1% ضمن الضجيج، بلا مكسب مستقل.",
   "pt": "Kamurocho31327/4070/621.01/7800X3D: mover trabalho pode atrasar frame; pares4c1af4f48 reduzem committer mas205,6→203,5ms≈1% dentro do ruído, sem ganho isolado.",
   "de": "Kamurocho31327/4070/621.01/7800X3D: Arbeitsverlagerung kann Frame bremsen;4c1af4f48 senkt Committer,205,6→203,5ms≈1% im Rauschen, kein isolierter Gewinn.",
   "fr": "Kamurocho31327/4070/621.01/7800X3D: déplacement du travail peut ralentir;4c1af4f48 réduit committer mais205,6→203,5ms≈1% dans le bruit, sans gain isolé.",
   "es": "Kamurocho31327/4070/621.01/7800X3D: mover trabajo puede ralentizar;4c1af4f48 reduce committer pero205,6→203,5ms≈1% dentro del ruido, sin mejora aislada."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7895"
   }
  ]
 },
 "minecraft": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "PPSA17221 v01.044 on Windows/RX7800XT26.10.1/i5-14600KF, main88795ed44+#9656a1d fails UINT export. Reverting #9789 moves the stop to storage write-watch #7017. One run per arm and an overwritten first log do not establish a safe workaround.",
   "zh": "Windows／7800XT26.10.1／14600KF的17221 v01.044在main88795ed44＋#9656a1d失败于UINT导出；回退#9789改在存储写监控#7017停止。各一次且首日志覆盖，不证明安全绕过。",
   "ar": "17221 v01.044 على Windows/7800XT26.10.1/14600KF وmain88795ed44+#9656a1d يفشل UINT؛ تراجع9789 ينقل العطل إلى7017. محاولة لكل طرف وسجل أول مستبدل لا يثبت تجاوزاً آمناً.",
   "pt": "17221 v01.044 Windows/7800XT26.10.1/14600KF, main88795ed44+#9656a1d falha UINT; revert9789 passa a7017. Um ensaio por braço e log substituído não provam workaround seguro.",
   "de": "17221 v01.044 Windows/7800XT26.10.1/14600KF auf main88795ed44+#9656a1d scheitert UINT;9789-Revert dann7017. Je ein Lauf, erster Log überschrieben, kein sicherer Workaround belegt.",
   "fr": "17221 v01.044 Windows/7800XT26.10.1/14600KF sur main88795ed44+#9656a1d échoue UINT; revert9789 puis7017. Un essai par bras, premier log écrasé, contournement sûr non établi.",
   "es": "17221 v01.044 Windows/7800XT26.10.1/14600KF, main88795ed44+#9656a1d falla UINT; revert9789 luego7017. Una prueba por brazo y log sobrescrito, sin bypass seguro probado."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11513"
   }
  ]
 },
 "palworld": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "A local HTTP/Host/D16/async stack runs150 s despite certificate failure. Presentation windows do not identify visible gameplay; missing hardware/build fields remain unknown and no real-network correctness is proved.",
   "zh": "本地HTTP／Host／D16／异步组合在证书失败下运行150秒；呈现窗口不识别可见游戏，缺失硬件／构建保持未知，不证明真实网络正确。",
   "ar": "تركيب HTTP/Host/D16/async يعيش150ث رغم الشهادة؛ النوافذ لا تحدد لعباً مرئياً، المجهول محفوظ ولا إثبات شبكة حقيقية.",
   "pt": "Stack HTTP/Host/D16/async dura150 s apesar da falha certificado; janelas não identificam jogo, incógnitas mantidas e rede não validada.",
   "de": "HTTP/Host/D16/Async-Stack läuft150 s trotz Zertifikatfehler; Fenster belegen kein sichtbares Spiel, Unbekanntes bleibt, Netzwerk unbestätigt.",
   "fr": "Stack HTTP/Host/D16/async tient150 s malgré certificat; fenêtres sans jeu visible identifié, inconnus conservés et réseau non validé.",
   "es": "Stack HTTP/Host/D16/async dura150 s pese a certificado; ventanas no identifican juego visible, incógnitas conservadas y red sin validar."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "PlayStation",
    "url": "https://www.playstation.com/en-us/games/palworld/"
   },
   {
    "label": "Issue #3832",
    "url": "https://github.com/boykopovar/AnyPS5/issues/3832"
   },
   {
    "label": "PR #3835",
    "url": "https://github.com/boykopovar/AnyPS5/pull/3835"
   },
   {
    "label": "Issue #4260",
    "url": "https://github.com/boykopovar/AnyPS5/issues/4260"
   },
   {
    "label": "Issue #4552",
    "url": "https://github.com/boykopovar/AnyPS5/issues/4552"
   },
   {
    "label": "PR #4554",
    "url": "https://github.com/boykopovar/AnyPS5/pull/4554"
   },
   {
    "label": "Issue #4366",
    "url": "https://github.com/boykopovar/AnyPS5/issues/4366"
   },
   {
    "label": "PR #4391",
    "url": "https://github.com/boykopovar/AnyPS5/pull/4391"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11448"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11630"
   }
  ]
 },
 "mgs4-master-collection": {
  "checked": "2026-10-28",
  "edition": {
   "en": "PPSA18194 is the PS5 Master Collection title. Collection artwork is promotional and does not test every included game.",
   "zh": "PPSA18194 为 PS5 Master Collection 游戏；合集图片属于宣传，不证明每款收录游戏已测试。",
   "ar": "PPSA18194 لعنوان PS5 Master Collection؛ فن المجموعة ترويجي لا يثبت اختبار كل لعبة.",
   "pt": "PPSA18194 é título PS5 Master Collection; arte promocional não testa todos os jogos.",
   "de": "PPSA18194 ist PS5-Master-Collection-Titel; Kollektionskunst testet nicht alle Spiele.",
   "fr": "PPSA18194 est le titre PS5 Master Collection ; art promotionnel ne valide pas tous les jeux.",
   "es": "PPSA18194 es título PS5 Master Collection; arte promocional no prueba todos los juegos."
  },
  "finding": {
   "en": "Linux/RTX4070Ti main99b844 plus private D16 branch894f617c6e reports the first level around15 FPS. This is context for lookup/relocation analysis, not a benchmark of #5609’s current head or proof the code is released.",
   "zh": "Linux／4070Ti的main99b844＋私有D16分支894f617c6e报告首关约15 FPS；这是查询／重定位分析背景，不是#5609当前head基准或已发行证明。",
   "ar": "Linux/4070Ti main99b844 مع D16 الخاص894f617c6e يبلغ المرحلة الأولى≈15 FPS؛ سياق تحليل لا قياس رأس5609 الحالي أو إصدار.",
   "pt": "Linux/4070Ti main99b844+D16 privado894f617c6e relata nível1≈15 FPS; contexto, não benchmark do head5609 atual ou release.",
   "de": "Linux/4070Ti main99b844+privates D16 894f617c6e meldet Level1≈15 FPS; Kontext statt Benchmark von aktuellem5609/Release.",
   "fr": "Linux/4070Ti main99b844+D16 privé894f617c6e rapporte niveau1≈15 FPS; contexte, pas benchmark du5609 actuel ou release.",
   "es": "Linux/4070Ti main99b844+D16 privado894f617c6e informa nivel1≈15 FPS; contexto, no benchmark del5609 actual ni release."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/5609"
   }
  ]
 },
 "mewgenics": {
  "checked": "2026-10-28",
  "edition": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "finding": {
   "en": "#9875’s2a9cbce9e fixes a shared-vertex snapshot growth pattern in a synthetic benchmark. The author asks for a fresh Mewgenics comparison; Hades45.4→53.9 FPS belongs to another title and is not a Mewgenics gain.",
   "zh": "#9875的2a9cbce9e在合成基准修复共享顶点快照增长，作者仍请求Mewgenics新对照；Hades45.4→53.9 FPS属于另一游戏，不是此作增益。",
   "ar": "2a9cbce9e في9875 يصلح نمط snapshot بbenchmark اصطناعي ويطلب مقارنة Mewgenics؛ Hades45.4→53.9 FPS لعبة أخرى لا مكسب هنا.",
   "pt": "2a9cbce9e/9875 corrige snapshots em teste sintético, falta novo par Mewgenics; Hades45,4→53,9 FPS é outro jogo.",
   "de": "2a9cbce9e/9875 korrigiert Snapshots synthetisch, neuer Mewgenics-Vergleich angefragt; Hades45,4→53,9 FPS anderes Spiel.",
   "fr": "2a9cbce9e/9875 corrige snapshots en synthétique, nouveau Mewgenics demandé; Hades45,4→53,9 FPS autre titre.",
   "es": "2a9cbce9e/9875 corrige snapshots en sintético, falta pareja Mewgenics; Hades45,4→53,9 FPS es otro título."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/11477"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9875#issuecomment-6425161853"
   },
   {
    "label": "Publisher identity and promotional art, not an AnyPS5 test",
    "url": "https://store.playstation.com/en-us/concept/10019219/"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9875"
   }
  ]
 },
 "demons-souls": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "The240 s capture comparison12.6/12.9 FPS used old acb900c194/8d83ec8a49 and an unnamed scene, not the later f320 rebase. Another tutorial pair at0.74/0.76 FPS is neutral. Faster CPU capture work does not imply a gameplay FPS win.",
   "zh": "240秒12.6／12.9 FPS对照用旧acb900c194／8d83ec8a49且场景未述，不是后续f320 rebase；另一教程0.74／0.76 FPS无明显变化。CPU捕获工作更快不等于游戏提速。",
   "ar": "مقارنة240ث12.6/12.9 FPS تخص acb900c194/8d83ec8a49 القديمين ومشهداً غير مسمى، لا f320؛ زوج تدريب0.74/0.76 محايد. CPU أسرع لا يعني FPS.",
   "pt": "Comparação240 s12,6/12,9 FPS usa acb900c194/8d83ec8a49 antigos e cena sem nome, não f320; tutorial0,74/0,76 neutro. CPU mais rápido não implica FPS.",
   "de": "240-s-Vergleich12,6/12,9 FPS auf altem acb900c194/8d83ec8a49, Szene ungenannt, nicht f320; Tutorial0,74/0,76 neutral. Schnellere CPU-Capturearbeit kein Spielgewinn.",
   "fr": "Comparaison240 s12,6/12,9 FPS sur anciens acb900c194/8d83ec8a49, scène inconnue, pas f320; tutoriel0,74/0,76 neutre. CPU plus rapide sans gain FPS établi.",
   "es": "Comparación240 s12,6/12,9 FPS usa antiguos acb900c194/8d83ec8a49 y escena sin nombre, no f320; tutorial0,74/0,76 neutro. CPU más rápido no implica FPS."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7203#issuecomment-6399882630"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10634#issuecomment-6389742114"
   },
   {
    "label": "Reviewed observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7203#issuecomment-6396805983"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/10634#issuecomment-6417895351"
   },
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/discussions/1283#discussioncomment-19185429"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11440"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/9176"
   }
  ]
 },
 "castlevania-belmonts-curse": {
  "checked": "2026-10-28",
  "edition": {
   "en": "This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.",
   "zh": "本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。",
   "ar": "تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.",
   "pt": "Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.",
   "de": "Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.",
   "fr": "Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.",
   "es": "Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes."
  },
  "finding": {
   "en": "On Linux/RTX3070 driver615.78 v01.000, #11772 makes12/14 cinematic samples visible versus3/3 baseline black. Two still fail and banding remains; about4.5 FPS is cinematic, not a new gameplay benchmark. Earlier5–12 FPS gameplay stays on its old build.",
   "zh": "Linux／3070 615.78 v01.000的#11772片头14个样本12个可见，基线3个均黑；仍有2个失败及色带，约4.5 FPS仅片头，不是新游戏基准。旧5–12 FPS保留旧构建。",
   "ar": "Linux/3070 615.78 v01.000 مع11772 يظهر12/14 عينات سينمائية مقابل3/3 سوداء؛ اثنتان تفشلان وتدرج باق.4.5 FPS سينمائي لا لعب،5–12 القديم ببنائه القديم.",
   "pt": "Linux/3070 615.78 v01.000 com11772 mostra12/14 cenas contra3/3 pretas; duas falham e banding persiste.4,5 FPS de cinemática, jogo5–12 permanece no build antigo.",
   "de": "Linux/3070 615.78 v01.000 mit11772 zeigt12/14 Introstichproben statt3/3 schwarz; zwei Fehler/Banding bleiben.4,5 FPS nur Intro, alte5–12 bleiben altem Build zugeordnet.",
   "fr": "Linux/3070 615.78 v01.000 avec11772 rend12/14 échantillons cinématiques contre3/3 noirs; deux échecs/bandes persistent.4,5 FPS cinématique, anciens5–12 au vieux build.",
   "es": "Linux/3070 615.78 v01.000 con11772 muestra12/14 muestras cinemáticas frente3/3 negras; dos fallos/banding persisten.4,5 FPS cinemática,5–12 previos en su build antiguo."
  },
  "nextTest": {
   "en": "Repeat the exact package/build/patches and scene. Check controls, audio, reload and longer play separately; keep missing hardware, driver and test date unknown. Inspect images rather than inferring play from counters.",
   "zh": "以准确包、构建、补丁及场景复测，分别验证操控、音频、读档与长流程；缺失硬件、驱动、测试日期保持未知，核看图片而不由计数推断游戏。",
   "ar": "أعد الحزمة والبناء والتعديلات والمشهد؛ افحص التحكم والصوت والحفظ والمدة منفصلة، واحتفظ بالمجهول وافحص الصور لا العدادات.",
   "pt": "Repita pacote/build/patches/cena; verifique controlos, áudio, recarga e duração separadamente. Mantenha desconhecidos e veja imagens, não só contadores.",
   "de": "Paket/Build/Patches/Szene wiederholen; Steuerung, Ton, Laden und Dauer getrennt prüfen. Unbekanntes bewahren, Bilder statt bloßer Zähler prüfen.",
   "fr": "Reproduire paquet/build/patches/scène; commandes, son, rechargement et durée séparés. Inconnus conservés, images inspectées plutôt que compteurs.",
   "es": "Repite paquete/build/parches/escena; controles, audio, recarga y duración por separado. Conserva desconocidos, revisa imágenes y no solo contadores."
  },
  "sources": [
   {
    "label": "Reviewed primary observation",
    "url": "https://github.com/boykopovar/AnyPS5/issues/7266#issuecomment-6415847867"
   },
   {
    "label": "Source-only follow-up with distinct test scope",
    "url": "https://github.com/boykopovar/AnyPS5/pull/11772"
   }
  ]
 }
});

gameResearch["planet-zoo"].sources.push({label:"Separate local EULA/watchdog run",url:"https://github.com/boykopovar/AnyPS5/pull/11951"});

for(const locale of Object.keys(gameResearch["crimson-desert-ppsa25286"].edition) as (keyof Text)[]){gameResearch["crimson-desert-ppsa25286"].edition[locale]+={"en": " Enhanced promotional branding does not establish which enhanced features the reported version tested.", "zh": " 增强版宣传标识不证明报告版本实测哪些增强内容。", "ar": " شعار Enhanced الدعائي لا يثبت ميزات النسخة المختبرة.", "pt": " Marca Enhanced promocional não prova funções testadas na versão do relato.", "de": " Enhanced-Werbung belegt keine getesteten Zusatzfunktionen des Berichts.", "fr": " Marque Enhanced promotionnelle sans preuve des fonctions testées.", "es": " Marca Enhanced promocional no prueba funciones testadas en esa versión."}[locale];}
