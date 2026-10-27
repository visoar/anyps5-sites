import {L,type Text} from './model';
import sources from './game-media.json';
import {genres} from './game-copy';
export interface GameEditorial {overview:Text; genre:string; editionNote:Text; related:string[]; names:Partial<Text>}
const ps5=L('This page covers the PS5 release. A PS4 edition, native PC release or console performance mode is not an AnyPS5 test. Confirm the title ID and version before comparing reports.','本页关注 PS5 版本。PS4 版、原生 PC 版及主机性能模式的表现不属于 AnyPS5 测试结果；比较报告前请核对 PPSA ID 和游戏版本。','تتناول الصفحة إصدار PS5. نتائج PS4 أو PC الأصلية أو أوضاع أداء الجهاز ليست اختبارات AnyPS5. تحقق من المعرّف والإصدار عند مقارنة التقارير.','Esta página trata da edição PS5. Resultados de PS4, PC nativo ou modos da consola não são testes AnyPS5. Confirme o ID e a versão antes de comparar relatos.','Diese Seite behandelt die PS5-Fassung. PS4, native PC-Versionen und Konsolenmodi sind keine AnyPS5-Tests. Vergleiche nur Berichte mit passender Titel-ID und Version.','Cette page concerne la version PS5. Les résultats PS4, PC natif ou des modes console ne constituent pas des tests AnyPS5. Vérifiez l’identifiant et la version avant toute comparaison.','Esta página trata la edición de PS5. Los resultados de PS4, PC nativo o modos de consola no son pruebas de AnyPS5. Comprueba el ID y la versión antes de comparar informes.');
const E=(genre:string,overview:Text,related:string[],names:Partial<Text>={},editionNote:Text=ps5):GameEditorial=>({genre,overview,related,names,editionNote});
export const editorial:Record<string,GameEditorial>={
"pragmata":E("action",L("Hugh and Diana’s lunar adventure requires tested scenes beyond allocator startup.","休与戴安娜的月球冒险需要在分配器启动之后验证实际场景。","تحتاج مغامرة هيو وديانا مشاهد مختبرة بعد بدء المخصص.","A aventura lunar precisa de cenas testadas além do arranque.","Das Mondabenteuer braucht Szenentests nach dem Allokatorstart.","L’aventure lunaire exige des scènes testées après le démarrage.","La aventura lunar requiere escenas probadas después del inicio."),["resident-evil-village","death-stranding-2"],{"zh":"识质存在"},L("The source tests PPSA02530 v01.200.000, not Sketchbook DEMO PPSA33065.","来源测试 PPSA02530 v01.200.000，非 Sketchbook DEMO PPSA33065。","التقرير PPSA02530 v01.200.000 لا DEMO PPSA33065.","RelatoPPSA02530 v01.200.000, não DEMO PPSA33065.","BerichtPPSA02530 v01.200.000, keine DEMO PPSA33065.","RapportPPSA02530 v01.200.000, pas DEMO PPSA33065.","InformePPSA02530 v01.200.000, no DEMO PPSA33065.")),
"tomba-2":E("platform",L("The Special Edition’s platform adventure needs visible levels beyond startup telemetry.","特别版的平台冒险需有可见关卡，不能只看启动追踪。","تحتاج مغامرة Special Edition مستويات مرئية بعد القياسات.","A aventura Special Edition precisa de níveis visíveis além da telemetria.","Special Editions Abenteuer braucht sichtbare Level neben Telemetrie.","L’aventure Special Edition exige des niveaux visibles après télémétrie.","La aventura Special Edition requiere niveles visibles además de telemetría."),["sonic-superstars","astro-bot"],{"zh":"咚吧！2 特别版"}),
 "resident-evil-village":E("action",L("Ethan’s survival-horror sequel separates setup, storybook playback and controllable exploration.","伊森的生存恐怖续作需要分别核对设置、开场绘本播放与可操作探索。","تفرق مغامرة إيثان المرعبة بين الإعدادات وقصة البداية والاستكشاف التفاعلي.","O terror de Ethan distingue opções, abertura e exploração controlável.","Ethans Survival-Horror trennt Einstellungen, Storybook und steuerbare Erkundung.","L’horreur d’Ethan distingue réglages, ouverture et exploration contrôlable.","El terror de Ethan distingue ajustes, apertura y exploración controlable."),["resident-evil-4-remake", "dead-cells"],{"zh": "生化危机 8：村庄"}),
 "death-stranding-2":E("action",L("Sam’s delivery sequel needs recognizable scenes before graphics activity becomes game evidence.","山姆的配送续作需先验证可辨认场景，图形调用不能代替游戏画面。","تحتاج عودة سام مشاهد معروفة قبل اعتبار نشاط الرسوم دليلاً للعبة.","A sequela de entregas precisa de cenas reconhecíveis além da atividade gráfica.","Die Liefer-Fortsetzung braucht erkennbare Szenen neben Grafikaktivität.","La suite de livraisons exige des scènes reconnaissables au-delà de l’activité graphique.","La secuela de entregas necesita escenas reconocibles además de actividad gráfica."),["ghost-of-tsushima-directors-cut", "horizon-forbidden-west"],{"zh": "死亡搁浅 2：冥滩"}),
 "diablo-ii-resurrected":E("rpg",L("The action-RPG remaster needs combat and inventory tests beyond its loading logo.","动作角色扮演重制版需在加载标志之外验证战斗与物品栏。","تحتاج نسخة تقمص الأدوار المجددة اختبار القتال والجرد بعد شعار التحميل.","O remaster RPG precisa de combate e inventário além do logótipo de carga.","Das Action-RPG-Remaster braucht Kampf- und Inventartests über das Ladelogo hinaus.","Le remaster RPG exige combat et inventaire au-delà du logo de chargement.","El remaster RPG necesita combate e inventario además del logo de carga."),["hades", "dead-cells"],{"zh": "暗黑破坏神 II：狱火重生"},L("The report’s content version is 01.039.000; current artwork does not prove later expansions were tested.","报告内容版本为 01.039.000；当前配图不证明已测试后来扩展。","نسخة التقرير 01.039.000 ؛ الصور الحالية لا تثبت اختبار توسعات لاحقة.","Versão relatada01.039.000; arte atual não prova expansões posteriores testadas.","Berichtsversion01.039.000; aktuelle Bilder belegen keine späteren Erweiterungen.","Version rapportée01.039.000 ; images actuelles sans preuve des extensions ultérieures.","Versión indicada01.039.000; arte actual no prueba expansiones posteriores.")),
 "sonic-superstars":E("platform",L("Sonic’s side-scrolling adventure requires level and cooperative tests after the intro.","索尼克横向冒险需在开场之后验证关卡和合作模式。","تحتاج مغامرة سونيك الجانبية اختبار المستويات والتعاون بعد المقدمة.","A aventura lateral de Sonic precisa de níveis e cooperação após a introdução.","Sonics Plattform-Abenteuer braucht Level- und Kooptests nach dem Intro.","L’aventure de Sonic exige niveaux et coopération après l’introduction.","La aventura de Sonic requiere niveles y cooperación tras la introducción."),["sonic-origins", "astro-bot"],{"zh": "索尼克 超级巨星"}),
 "tourist-bus-simulator":E("racing",L("Bus-company planning and actual Fuerteventura driving are separate test scenes.","巴士公司规划与实际在富埃特文图拉岛驾驶属于不同测试场景。","تخطيط شركة الحافلات والقيادة الفعلية في فويرتيفنتورا مشهدان مختلفان.","Planear a empresa e conduzir em Fuerteventura são testes distintos.","Firmenplanung und Fahren auf Fuerteventura sind verschiedene Tests.","Planification et conduite à Fuerteventura sont des tests distincts.","Planificación y conducción en Fuerteventura son pruebas distintas."),["gran-turismo-7", "ride-4"],{"zh": "旅游巴士模拟器"},L("PPSA04433 is the report’s edition; the linked US artwork page lists PPSA04434. Artwork does not transfer test results between IDs.","报告版本为 PPSA04433，所链美国配图资料页列 PPSA04434；配图不能跨编号转移测试结果。","التقرير PPSA04433 ؛ صفحة الفن الأمريكية PPSA04434. الصور لا تنقل النتائج بين المعرّفات.","RelatoPPSA04433; arte EUA listaPPSA04434. Imagens não transferem resultados entre IDs.","BerichtPPSA04433, US-BildseitePPSA04434. Bilder übertragen keine Tests zwischen IDs.","RapportPPSA04433, page d’images USPPSA04434. Images sans transfert de résultats entre IDs.","InformePPSA04433, página de arte USPPSA04434. Imágenes no trasladan resultados entre IDs.")),
 "planet-coaster":E("sandbox",L("A theme-park builder needs park editing and rides beyond its animated globe.","主题乐园建造游戏需在动画球体之外验证建园与游乐设施。","يحتاج بناء المنتزه اختبار التحرير والألعاب بعد الكرة المتحركة.","Construir parques exige edição e atrações além do globo animado.","Parkbau braucht Editor und Fahrten über die animierte Kugel hinaus.","La gestion de parc exige édition et attractions au-delà du globe.","Crear parques requiere edición y atracciones además del globo."),["tourist-bus-simulator", "palworld"],{"zh": "过山车之星：主机版"}),
 "remnant-2":E("shooter",L("Character creation is only the first step toward this shooter’s worlds and encounters.","创建角色只是迈向本作射击世界与遭遇战的第一步。","إنشاء الشخصية أول خطوة فقط نحو عوالم القتال والمواجهات.","Criar a personagem é só o início dos mundos e combates.","Charaktererstellung ist erst der Anfang vor Welten und Kämpfen.","Créer le personnage précède seulement les mondes et affrontements.","Crear personaje solo precede a los mundos y enfrentamientos."),["returnal", "helldivers-2"],{"zh": "遗迹 2"}),
 "olliolli-world":E("platform",L("Skate routes need movement and trick tests beyond clothing customization.","滑板路线需在服饰定制之外验证移动与动作组合。","تحتاج مسارات التزلج الحركة والحيل بعد اختيار الملابس.","Percursos de skate precisam de movimento e truques além da roupa.","Skate-Strecken brauchen Bewegung und Tricks über die Kleidung hinaus.","Les parcours de skate exigent mouvement et figures après les vêtements.","Las rutas de skate requieren movimiento y trucos además de ropa."),["astro-bot", "sonic-superstars"],{"zh": "奥力奥力世界"}),
 "mgs-peace-walker":E("action",L("Big Boss’s stealth missions require a successful launcher-to-game hand-over.","Big Boss 的潜入任务首先需要启动器正确交接至游戏。","تتطلب مهمات Big Boss انتقالاً صحيحاً من المشغل إلى اللعبة.","As missões de Big Boss exigem passagem correta do lançador.","Big-Boss-Missionen brauchen eine erfolgreiche Launcher-Übergabe.","Les missions de Big Boss exigent le transfert du lanceur.","Las misiones de Big Boss requieren el traspaso del lanzador."),["ghost-of-tsushima-directors-cut", "sifu"],{"zh": "合金装备：和平行者 · 大师合集"},L("This is the PS5 Master Collection executable, not the PSP or PS3 original.","本页对应 PS5 大师合集可执行文件，非 PSP／PS3 原版。","هذه نسخة PS5 Master Collection وليست أصل PSP/PS3.","Executável PS5 Master Collection, não o original PSP/PS3.","PS5-Master-Collection-Programm, kein PSP/PS3-Original.","Exécutable PS5 Master Collection, pas l’original PSP/PS3.","Ejecutable PS5 Master Collection, no el original PSP/PS3.")),
 "red-dead-redemption":E("action",L("John Marston’s western needs scene-specific measurements, not its menu counter.","约翰·马斯顿的西部冒险需按实际场景测量，不能用菜单计数替代。","تحتاج مغامرة مارستون قياس مشاهد فعلية لا عداد القائمة.","O western de Marston exige medições de cena, não de menu.","Marstons Western braucht Szenenmessungen statt Menüzähler.","Le western de Marston exige mesures de scène, pas de menu.","El western de Marston requiere medidas de escena, no menú."),["gta-v", "ghost-of-tsushima-directors-cut"],{"zh": "荒野大镖客：救赎"},L("This PS5 entry is Red Dead Redemption, not Red Dead Redemption 2. Undead Nightmare is not tested here.","本 PS5 条目是《荒野大镖客：救赎》，非续作；本报告未测试 Undead Nightmare。","هذا Red Dead Redemption لـ PS5 لا الجزء 2. Undead Nightmare غير مختبر.","É Red Dead Redemption PS5, não o2. Undead Nightmare não testado.","Red Dead Redemption für PS5, nicht Teil2. Undead Nightmare ungeprüft.","Red Dead Redemption PS5, pas le2. Undead Nightmare non testé.","Red Dead Redemption PS5, no el2. Undead Nightmare sin probar.")),
 "dragon-quest-iii-hd2d":E("turnBasedRpg",L("The party RPG needs exploration and turn-based battles beyond its autosave notice.","队伍角色扮演游戏需在自动存档提示之外验证探索与回合战斗。","تحتاج لعبة الفريق الاستكشاف والمعارك الدورّية بعد تنبيه الحفظ.","O RPG de grupo precisa de exploração e batalhas após o aviso.","Das Gruppen-RPG braucht Erkundung und Rundenkämpfe nach dem Speicherhinweis.","Le RPG de groupe exige exploration et combats après l’avis.","El RPG de grupo requiere exploración y combates tras el aviso."),["final-fantasy-vii-rebirth", "void-terrarium-plus"],{"zh": "勇者斗恶龙 III HD-2D 重制版"}),
 "nhl-26":E("sports",L("Hockey matches require rendered play and controller tests beyond shader registration.","冰球比赛需要实际画面与手柄测试，不能停留在着色器注册。","تحتاج مباريات الهوكي رسماً وتحكماً بعد تسجيل shaders.","O hóquei precisa de imagem e comando além do registo de shaders.","Hockey braucht Bild und Controller über Shaderregistrierung hinaus.","Le hockey exige image et commandes après l’enregistrement des shaders.","El hockey requiere imagen y mando tras registrar shaders."),["nhl-27", "gran-turismo-7"],{"zh": "EA SPORTS NHL 26"}),
 "call-of-duty-black-ops":E("shooter",L("The original Black Ops campaign and Zombies Solo have different scope from online modes.","初代 Black Ops 的战役与单人 Zombies 不能代替在线模式测试。","حملة Black Ops الأصلية و Zombies الفردي لا تثبتان أوضاع الشبكة.","Campanha Black Ops original e Zombies Solo não validam modos online.","Original-Black-Ops-Kampagne und Solo-Zombies belegen keine Onlinemodi.","Campagne Black Ops originale et Zombies Solo ne valident pas le réseau.","Campaña Black Ops original y Zombies Solo no validan modos online."),["ready-or-not", "gta-v"],{"zh": "使命召唤：黑色行动"},L("PPSA34501 is the PS5 port of the original Black Ops. Other numbered sequels and the PS3 original remain separate.","PPSA34501 对应初代 Black Ops 的 PS5 移植版，其他编号续作与 PS3 原版另行核对。","PPSA34501 منفذ PS5 لـ Black Ops الأصلي؛ الأجزاء الأخرى و PS3 منفصلة.","PPSA34501 é o port PS5 do Black Ops original; sequelas ePS3 separados.","PPSA34501 ist der PS5-Port des ersten Black Ops; Fortsetzungen/PS3 getrennt.","PPSA34501 est le port PS5 du premier Black Ops ; suites/PS3 distincts.","PPSA34501 es el port PS5 del primer Black Ops; secuelas/PS3 separados.")),
 "void-terrarium-plus":E("roguelike",L("A robot’s scavenging adventure needs intact inputs before dungeon tests are meaningful.","机器人搜集生存物资的冒险需要先确认输入完整，再判断地牢测试。","تحتاج مغامرة جمع الموارد مدخلات سليمة قبل تقييم الزنزانات.","A aventura de recolha precisa de inputs íntegros antes das masmorras.","Das Sammel-Abenteuer braucht intakte Eingaben vor Dungeon-Tests.","L’aventure de collecte exige des fichiers intacts avant les donjons.","La aventura de recolección necesita entradas íntegras antes de las mazmorras."),["dead-cells", "dragon-quest-iii-hd2d"],{"zh": "虚空饲育箱++"},L("PPSA03061 is the PS5 ++ edition, not the PS4 original or Void Terrarium 2.","PPSA03061 对应 PS5 ++ 版，非 PS4 原版或续作。","PPSA03061 إصدار PS5 ++ لا أصل PS4 أو الجزء 2.","PPSA03061 é PS5 ++, não PS4 original ou2.","PPSA03061 ist PS5 ++, kein PS4-Original oder Teil2.","PPSA03061 est PS5 ++, pas PS4 original ou2.","PPSA03061 es PS5 ++, no PS4 original o2.")),
 "kena-bridge-of-spirits":E("action",L("Kena’s spirit adventure needs a first frame before combat or exploration can be assessed.","凯娜的灵魂冒险需先有首帧，才能评估战斗与探索。","تحتاج مغامرة كينا إطاراً أول قبل تقييم القتال والاستكشاف.","A aventura de Kena precisa da primeira imagem antes de avaliar combate.","Kenas Abenteuer braucht ein erstes Bild vor Kampf- und Erkundungstests.","L’aventure de Kena exige une première image avant combat et exploration.","La aventura de Kena necesita imagen inicial antes de evaluar combate."),["horizon-forbidden-west", "astro-bot"],{"zh": "凯娜：精神之桥"}),
 "dead-cells":E("roguelike",L("The roguelike’s combat loops remain separate from audio-library initialization.","Roguelike 的战斗循环与音频库初始化属于不同证据。","قتال الروغلايك منفصل عن تهيئة مكتبة الصوت.","O combate roguelike é distinto da inicialização áudio.","Roguelike-Kämpfe sind getrennt von Audioinitialisierung.","Les combats roguelike restent distincts de l’initialisation audio.","El combate roguelike es distinto de inicializar audio."),["hades", "blasphemous-2"],{"zh": "死亡细胞"}),
 "ride-4":E("racing",L("Motorcycle racing needs track and control tests beyond the title screen.","摩托车竞速需在标题之外验证赛道与操作。","تحتاج سباقات الدراجات مضماراً وتحكماً بعد العنوان.","Corridas de motos precisam de pista e comando após o título.","Motorradrennen brauchen Strecken und Steuerung über den Titel hinaus.","Les courses moto exigent piste et commandes après le titre.","Las carreras de motos requieren pista y controles tras el título."),["gran-turismo-7", "tourist-bus-simulator"],{"zh": "RIDE 4"}),
 "high-on-life":E("shooter",L("The talking-gun shooter needs correct indirect lighting as well as visible geometry.","会说话武器的射击冒险需同时核对间接照明与可见几何。","تحتاج مغامرة الأسلحة الناطقة إضاءة غير مباشرة صحيحة وهندسة مرئية.","O shooter de armas falantes exige luz indireta e geometria corretas.","Der Shooter mit sprechenden Waffen braucht korrektes Licht und Geometrie.","Le shooter aux armes parlantes exige lumière et géométrie correctes.","El shooter de armas parlantes requiere luz y geometría correctas."),["gta-v", "remnant-2"],{"zh": "High on Life"}),
 "slay-the-princess":E("adventure",L("This branching horror story needs visible choices and reliable chapter transitions.","分支恐怖故事需验证可见选择与可靠章节切换。","تحتاج قصة الرعب المتفرعة اختيارات مرئية وانتقالات فصول سليمة.","O terror ramificado precisa de escolhas visíveis e transições fiáveis.","Die verzweigte Horrorgeschichte braucht sichtbare Entscheidungen und Kapitelwechsel.","L’horreur à embranchements exige choix visibles et transitions fiables.","El terror ramificado requiere elecciones visibles y transiciones fiables."),["silt", "resident-evil-village"],{"zh": "杀死公主：纯净剪辑版"}),
 "dying-light-2":E("action",L("Parkour and survival combat require new title runs after technical fixes merge.","技术修复合入后，跑酷与生存战斗仍需新的实际游戏运行验证。","تحتاج الحركة والقتال اختبارات لعبة جديدة بعد دمج الإصلاحات.","Parkour e combate precisam de novos testes após merges técnicos.","Parkour und Kampf brauchen neue Spieltests nach technischen Merges.","Parkour et combat exigent de nouveaux tests après intégration technique.","Parkour y combate requieren nuevas pruebas tras merges técnicos."),["cyberpunk-2077", "resident-evil-village"],{"zh": "消逝的光芒 2：坚守人性"}),
 "sifu":E("action",L("Martial-arts encounters require interactive scenes beyond a successful loading logo.","武术遭遇战需有可操作场景，不能只看成功加载标志。","تحتاج المواجهات القتالية مشاهد تفاعلية بعد شعار التحميل.","O combate marcial precisa de cenas interativas além do logótipo.","Kampfkunst braucht interaktive Szenen über das Ladelogo hinaus.","Les combats martiaux exigent des scènes interactives après le logo.","El combate marcial requiere escenas interactivas además del logo."),["ghost-of-tsushima-directors-cut", "dead-cells"],{"zh": "师父"}),
 "sword-of-the-sea":E("adventure",L("Surfing exploration needs measured gameplay, separate from proposed performance targets.","冲浪探索需有实际游戏过程测量，与提议的性能目标分开。","يحتاج الاستكشاف قياس اللعب منفصلاً عن أهداف الأداء المقترحة.","A exploração precisa de jogo medido, separado das metas propostas.","Erkundung braucht gemessenes Gameplay, getrennt von Leistungszielen.","L’exploration exige des mesures distinctes des objectifs proposés.","La exploración requiere medidas separadas de las metas propuestas."),["astro-bot", "silt"],{"zh": "剑之海"}),
 "ccleste-homebrew":E("platform",L("This PS5 homebrew adapts Celeste Classic’s compact climbing challenge.","此 PS5 自制移植对应 Celeste Classic 的小型攀登挑战。","هذا homebrew لـ PS5 يكيف تحدي Celeste Classic الصغير.","Este homebrew PS5 adapta o desafio Celeste Classic.","Dieses PS5-Homebrew portiert Celeste Classics Kletteraufgabe.","Ce homebrew PS5 adapte le défi Celeste Classic.","Este homebrew PS5 adapta el reto Celeste Classic."),["doom-homebrew", "astro-bot"],{"zh": "ccleste · PS5 自制移植版"},L("ccleste is a Celeste Classic source port, not the commercial Celeste executable. The reported version is 1.00.","ccleste 是 Celeste Classic 源码移植，非商业 Celeste 可执行文件；来源版本为 1.00。","ccleste منفذ مصدر Celeste Classic لا الإصدار التجاري؛ النسخة 1.00.","ccleste é port do código Celeste Classic, não comercial; versão 1.00.","ccleste ist ein Celeste-Classic-Quellport, kein kommerzielles Programm; Version 1.00.","ccleste porte Celeste Classic, pas l’exécutable commercial ; version 1.00.","ccleste porta Celeste Classic, no ejecutable comercial; versión 1.00.")),
 "astro-bot-ppsa21567":E("platform",L("This separately reported ASTRO BOT edition preserves its own hardware and build results.","此单独报告的 ASTRO BOT 版本保留自己的硬件与构建结果。","يحفظ إصدار ASTRO BOT المنفصل نتائج عتاده وبنائه.","Esta edição ASTRO BOT conserva equipamento e build próprios.","Diese ASTRO-BOT-Fassung behält eigene Hardware- und Build-Ergebnisse.","Cette édition ASTRO BOT conserve son matériel et son build.","Esta edición ASTRO BOT conserva su propio equipo y build."),["astro-bot", "astros-playroom"],{"zh": "宇宙机器人 · PPSA21567"},L("Do not transfer PPSA21564 or other regional-ID results to this entry. The reported content version is 01.018.000.","不能将 PPSA21564 或其他地区编号结果套用于此条目；来源内容版本为 01.018.000。","لا تنقل نتائج PPSA21564 أو معرّفات أخرى هنا؛ نسخة المحتوى 01.018.000.","Não transfira resultados PPSA21564/outros IDs; conteúdo01.018.000.","Keine PPSA21564/andere-ID-Ergebnisse übertragen; Inhalt01.018.000.","Ne transposez pas PPSA21564/autres IDs ; contenu01.018.000.","No traslades resultados PPSA21564/otros IDs; contenido01.018.000.")),
 "astro-bot-ppsa21559":E("platform",L("This separately reported ASTRO BOT edition preserves its own hardware and build results.","此单独报告的 ASTRO BOT 版本保留自己的硬件与构建结果。","يحفظ إصدار ASTRO BOT المنفصل نتائج عتاده وبنائه.","Esta edição ASTRO BOT conserva equipamento e build próprios.","Diese ASTRO-BOT-Fassung behält eigene Hardware- und Build-Ergebnisse.","Cette édition ASTRO BOT conserve son matériel et son build.","Esta edición ASTRO BOT conserva su propio equipo y build."),["astro-bot", "astros-playroom"],{"zh": "宇宙机器人 · PPSA21559"},L("Do not transfer PPSA21564 or other regional-ID results to this entry. The reported content version is 01.018.000.","不能将 PPSA21564 或其他地区编号结果套用于此条目；来源内容版本为 01.018.000。","لا تنقل نتائج PPSA21564 أو معرّفات أخرى هنا؛ نسخة المحتوى 01.018.000.","Não transfira resultados PPSA21564/outros IDs; conteúdo01.018.000.","Keine PPSA21564/andere-ID-Ergebnisse übertragen; Inhalt01.018.000.","Ne transposez pas PPSA21564/autres IDs ; contenu01.018.000.","No traslades resultados PPSA21564/otros IDs; contenido01.018.000.")),
 "ready-or-not":E("shooter",L("A tactical police shooter where squad commands and mission progression matter. This PS5 report reaches one mission on a large local integration; loading time and scene defects need separate checks.","战术警务射击游戏强调小队指令和任务推进。本页 PS5 报告仅在大规模本地整合上到达首个任务，加载时间与场景瑕疵需要分别核对。","لعبة شرطة تكتيكية تركز على أوامر الفريق وتقدم المهمة. تقرير PS5 يبلغ مهمة واحدة بدمج محلي كبير؛ زمن التحميل وعيوب المشهد يحتاجان فحصاً منفصلاً.","Um jogo policial tático centrado em ordens da equipa e progressão de missões. O relato PS5 chega a uma missão com uma grande integração local; carga e defeitos de cena exigem verificações próprias.","Ein taktischer Polizeishooter mit Team-Befehlen und Missionsfortschritt. Der PS5-Bericht erreicht eine Mission mit großer lokaler Integration; Laden und Bildfehler sind getrennt zu prüfen.","Un jeu policier tactique où les ordres et la progression de mission comptent. Le rapport PS5 atteint une mission via une grande intégration locale ; chargement et défauts visuels restent distincts.","Un shooter policial táctico de órdenes de equipo y misiones. El informe PS5 llega a una misión con una gran integración local; carga y defectos de escena necesitan verificaciones separadas."),["resident-evil-4-remake", "cyberpunk-2077"],{"zh": "严阵以待"}),
 "phasmophobia":E("adventure",L("A ghost-investigation game with cooperative contracts. The PS5 fork observation below does not verify network cooperation, VR2 or every contract; voice recognition is a separate feature from audible game sound.","围绕幽灵调查与合作合约展开。本页 PS5 分支观察没有验证在线合作、VR2 或所有合约；语音识别与实际可听游戏音频属于不同功能。","لعبة تحقيق بالأشباح وعقود تعاونية. ملاحظة فرع PS5 لا تتحقق من التعاون الشبكي أو VR2 أو كل عقد؛ التعرف الصوتي يختلف عن صوت اللعبة المسموع.","Investigação de fantasmas com contratos cooperativos. O fork PS5 não valida cooperação online, VR2 ou todos os contratos; reconhecimento de voz e som audível são funções distintas.","Geisterermittlung mit Koop-Aufträgen. Der PS5-Fork bestätigt weder Online-Koop noch VR2 oder alle Aufträge; Spracherkennung und hörbarer Spielton sind verschiedene Funktionen.","Enquête paranormale avec contrats coopératifs. Le fork PS5 ne valide ni coopération réseau, ni VR2, ni tous les contrats ; reconnaissance vocale et son audible sont distincts.","Investigación de fantasmas con contratos cooperativos. El fork PS5 no verifica cooperación online, VR2 ni todos los contratos; reconocimiento de voz y sonido del juego son funciones distintas."),["palworld", "ready-or-not"],{"zh": "恐鬼症"}),
 "blasphemous-2":E("platform",L("The Penitent One returns in a side-scrolling exploration and combat sequel. Reaching its title prompt on PS5 does not test movement, weapons, bosses, save points or the Mea Culpa expansion.","悔罪者回归横向探索与战斗续作。PS5 标题提示出现不能验证移动、武器、Boss、存档点或 Mea Culpa 扩展内容。","يعود التائب في جزء من الاستكشاف والقتال الجانبي. ظهور عنوان PS5 لا يختبر الحركة أو الأسلحة أو الزعماء أو الحفظ أو توسعة Mea Culpa.","O Penitente regressa numa sequela de exploração e combate lateral. O título PS5 não testa movimento, armas, chefes, gravações ou a expansão Mea Culpa.","Der Büßer kehrt in einer seitlichen Erkundungs- und Kampf-Fortsetzung zurück. Ein PS5-Titelbild prüft keine Bewegung, Waffen, Bosse, Speicherpunkte oder Mea Culpa.","Le Pénitent revient dans une suite d’exploration et de combat à défilement horizontal. Le titre PS5 ne teste pas déplacements, armes, boss, sauvegardes ou Mea Culpa.","El Penitente vuelve en una secuela de exploración y combate lateral. El título PS5 no prueba movimiento, armas, jefes, guardado ni Mea Culpa."),["hollow-knight-silksong", "hades"],{"zh": "渎神 2"},L("The reported PPSA13579 content version is unknown. Current publisher artwork promotes The Third Sin; it does not establish that expansion or Mea Culpa in this test. Other regional IDs and the PS4 executable remain separate.","报告对应 PPSA13579，内容版本未知。当前发行商配图宣传 The Third Sin，不证明本次测试包含该内容或 Mea Culpa；其他地区 ID 与 PS4 可执行文件仍分别核对。","نسخة PPSA13579 المبلغ عنها مجهولة. صور الناشر الحالية تروّج The Third Sin، ولا تثبت اختباره أو Mea Culpa. المعرّفات الإقليمية الأخرى وPS4 منفصلة.","A versão de conteúdo PPSA13579 é desconhecida. A arte atual promove The Third Sin, sem provar esse conteúdo ou Mea Culpa neste teste. Outros IDs regionais e PS4 continuam separados.","Die Inhaltsversion von PPSA13579 ist unbekannt. Aktuelle Herausgeberbilder bewerben The Third Sin, ohne diese Inhalte oder Mea Culpa im Test zu belegen. Andere regionale IDs und PS4 bleiben getrennt.","La version de contenu PPSA13579 est inconnue. Les images actuelles promeuvent The Third Sin, sans valider ce contenu ou Mea Culpa dans cet essai. Autres identifiants régionaux et PS4 restent distincts.","La versión de contenido PPSA13579 es desconocida. El arte actual promociona The Third Sin, sin demostrar ese contenido ni Mea Culpa en la prueba. Otros IDs regionales y PS4 quedan separados.")),
 "nhl-27":E("sports",L("EA’s ice-hockey release has menus and match-loading observations below. Confirm NHL 27 and PPSA34063 rather than using an older annual release, and keep menu navigation separate from a completed match.","EA 冰球作品，本页记录菜单与比赛加载。请确认 NHL 27 和 PPSA34063，不能套用前一年作品的结果，菜单操作也不能代替完整比赛。","إصدار الهوكي من EA له ملاحظات قوائم وتحميل مباراة هنا. تحقق من NHL 27 وPPSA34063 بدلاً من إصدار سنوي أقدم؛ القوائم ليست مباراة مكتملة.","O hóquei da EA tem aqui observações de menus e carga. Confirme NHL 27 e PPSA34063, não um lançamento anual anterior; navegar menus não equivale a terminar uma partida.","EAs Eishockeyspiel hat hier Menü- und Ladebeobachtungen. Prüfe NHL 27 und PPSA34063 statt älterer Jahresausgaben; Menüs sind kein abgeschlossener Match.","Le hockey d’EA présente ici des observations de menus et chargement. Vérifiez NHL 27 et PPSA34063 plutôt qu’une édition annuelle antérieure ; naviguer n’est pas terminer un match.","El hockey de EA tiene aquí observaciones de menús y carga. Confirma NHL 27 y PPSA34063, no una entrega anual anterior; navegar menús no equivale a completar un partido."),["gran-turismo-7", "hot-shots-golf-2"],{"zh": "EA SPORTS NHL 27"}),
 "ghost-of-tsushima-directors-cut":E("action",L("Jin Sakai’s open-world adventure in the PS5 Director’s Cut edition. Black-buffer presentation cannot verify exploration or combat; the PS4 edition, PC port, Iki Island and Legends each need their own test scope.","境井仁的开放世界冒险，本页对应 PS5 导演剪辑版。黑色缓冲区呈现不能验证探索或战斗；PS4、PC、壹岐岛与奇谭模式各自需要独立测试边界。","مغامرة جين ساكاي المفتوحة بإصدار PS5 Director’s Cut. المخازن السوداء لا تثبت الاستكشاف أو القتال؛ PS4 وPC وIki Island وLegends نطاقات مستقلة.","A aventura aberta de Jin Sakai na edição PS5 Director’s Cut. Buffers pretos não validam exploração ou combate; PS4, PC, Iki Island e Legends precisam de testes próprios.","Jin Sakais offene Abenteuerwelt in der PS5-Director’s-Cut-Ausgabe. Schwarze Puffer belegen weder Erkundung noch Kampf; PS4, PC, Iki und Legends benötigen getrennte Tests.","L’aventure ouverte de Jin Sakai en Director’s Cut PS5. Les buffers noirs ne valident ni exploration ni combat ; PS4, PC, Iki et Legends demandent des essais séparés.","La aventura abierta de Jin Sakai en Director’s Cut PS5. Buffers negros no verifican exploración ni combate; PS4, PC, Iki y Legends requieren pruebas separadas."),["ghost-of-yotei", "rise-of-the-ronin"],{"zh": "对马岛之魂 导演剪辑版"}),
 "lost-soul-aside":E("rpg",L("Ultizero’s action RPG follows Kaser in fast combat. This PS5 title-screen investigation cannot establish battle performance, and the publisher’s PC version and free demo must not be substituted for the reported PPSA26358 game.","Ultizero 的动作 RPG 以 Kaser 的快速战斗为主。本页 PS5 标题画面调查不能证明战斗性能，发行商 PC 版及免费试玩也不能替代已报告的 PPSA26358。","RPG الأكشن من Ultizero يتبع Kaser في قتال سريع. تحقيق عنوان PS5 لا يثبت أداء المعارك؛ PC والعرض المجاني لا يحلان محل اللعبة المبلغ عنها PPSA26358.","O RPG de ação da Ultizero acompanha Kaser em combate rápido. A investigação do título PS5 não prova desempenho em combate; PC e demo gratuita não substituem PPSA26358.","Ultizeros Action-RPG folgt Kaser in schnellen Kämpfen. Die PS5-Titeluntersuchung belegt keine Kampfleistung; PC-Version und Gratisdemo ersetzen PPSA26358 nicht.","Le RPG d’action d’Ultizero suit Kaser en combat rapide. L’enquête du titre PS5 ne prouve pas les performances en bataille ; PC et démo gratuite ne remplacent pas PPSA26358.","El RPG de acción de Ultizero sigue a Kaser en combate rápido. Investigar el título PS5 no demuestra rendimiento en batalla; PC y demo gratuita no sustituyen PPSA26358."),["final-fantasy-xvi", "black-myth-wukong"],{"zh": "失落之魂"}),
 "minecraft":E("sandbox",L("The retail PS5 Minecraft world test is PPSA17221, separate from Preview PPSA19639. Building, survival, saving, multiplayer and visual modes need explicit checks on this edition; Preview’s Windows tuning does not supply its Linux result.","本页 PS5 正式版世界测试对应 PPSA17221，与 Preview PPSA19639 分开。建造、生存、保存、联机和画面模式均需在此版本实际验证，Preview 的 Windows 调优不能提供正式版 Linux 结论。","اختبار عالم Minecraft التجاري PS5 هو PPSA17221 منفصل عن Preview PPSA19639. البناء والبقاء والحفظ والشبكة والأوضاع البصرية تحتاج فحوصاً لهذه النسخة؛ تحسين Preview على Windows لا يثبت Linux التجاري.","O teste do Minecraft comercial PS5 é PPSA17221, separado de Preview PPSA19639. Construção, sobrevivência, gravações, multiplayer e modos gráficos exigem ensaios desta edição; otimização Windows de Preview não fornece a conclusão Linux.","Der PS5-Handelstest ist PPSA17221, getrennt von Preview PPSA19639. Bauen, Überleben, Speichern, Multiplayer und Bildmodi benötigen eigene Prüfungen; Preview-Windows-Tuning belegt kein Linux-Ergebnis der Handelsversion.","Le test commercial Minecraft PS5 est PPSA17221, séparé de Preview PPSA19639. Construction, survie, sauvegardes, multijoueur et modes visuels exigent des essais propres ; l’optimisation Windows de Preview ne donne pas son résultat Linux.","El test comercial de Minecraft PS5 es PPSA17221, separado de Preview PPSA19639. Construcción, supervivencia, saves, multijugador y modos visuales necesitan pruebas propias; el ajuste Windows de Preview no aporta el resultado Linux."),["minecraft-preview", "wobbly-life"],{"zh": "我的世界 · PS5 正式版"}),
 "big-helmet-heroes":E("action",L("A 3D beat ’em up built around small armoured heroes. A tutorial result needs both combat interaction and readable scenes; the current AnyPS5 report still has severe black artifacts.","以身披铠甲的小英雄为主角的 3D 清版动作游戏。测试教程时，需要检查战斗操作和场景显示是否正常；当前 AnyPS5 报告仍记录了严重的黑色渲染瑕疵。","لعبة قتال ثلاثية الأبعاد بأبطال صغار يرتدون الدروع. يتطلب اختبار المرحلة التعليمية التحقق من القتال ووضوح المشاهد؛ ولا يزال تقرير AnyPS5 يسجل عيوباً رسومية سوداء شديدة.","Um jogo de combate em 3D com pequenos heróis de armadura. O teste do tutorial deve verificar o combate e a visibilidade dos cenários; o relatório do AnyPS5 ainda regista graves artefactos pretos.","Ein 3D-Prügelspiel mit kleinen gepanzerten Helden. Im Tutorial zählen Kampfinteraktion und erkennbare Szenen; der AnyPS5-Bericht zeigt noch schwere schwarze Artefakte.","Un jeu de combat en 3D mettant en scène de petits héros en armure. Le test du tutoriel doit vérifier les commandes de combat et l’affichage des décors ; le rapport AnyPS5 signale encore de graves artefacts noirs.","Un juego de acción en 3D con pequeños héroes acorazados. La prueba del tutorial debe comprobar el combate y la visibilidad de los escenarios; el informe de AnyPS5 sigue mostrando graves artefactos negros."),["wobbly-life", "pac-man-world-re-pac"],{"zh":"大头盔英雄"}),
 "hot-shots-golf-2":E("sports",L("The original PlayStation golf game is available in a PS5 Classic package. The test below covers PPSA06699, not the later Everybody’s Golf Hot Shots release or a native PS5 remake.","原版 PlayStation 高尔夫游戏以 PS5 经典版形式提供。下方测试对应 PPSA06699，不是后来的 EVERYBODY’S GOLF HOT SHOTS，也不是 PS5 原生重制版。","تتناول الصفحة نسخة لعبة الغولف الكلاسيكية على PlayStation المتاحة لجهاز PS5. يخص الاختبار المعرّف PPSA06699، ولا يشمل Everybody’s Golf Hot Shots الأحدث أو نسخة أُعيد تطويرها خصيصاً لجهاز PS5.","Este clássico de golfe da PlayStation está disponível numa edição para PS5. O teste abaixo corresponde a PPSA06699, não ao posterior Everybody’s Golf Hot Shots nem a uma recriação desenvolvida de raiz para PS5.","Dieser PlayStation-Golfklassiker ist als Classics-Version für PS5 erhältlich. Der Test unten betrifft PPSA06699, nicht das spätere Everybody’s Golf Hot Shots oder ein eigens für PS5 entwickeltes Remake.","Ce classique du golf sur PlayStation est disponible dans une édition pour PS5. Le test ci-dessous concerne PPSA06699, et non le titre plus récent Everybody’s Golf Hot Shots ou un remake conçu pour PS5.","Este clásico de golf de PlayStation está disponible en una edición para PS5. La prueba corresponde a PPSA06699, no al posterior Everybody’s Golf Hot Shots ni a un remake desarrollado específicamente para PS5."),["3d-mini-golf", "astro-bot"],{"zh":"大众高尔夫 2"}),
 "vampire-survivors":E("roguelike",L("A survival game with roguelite upgrades and growing enemy hordes. This page follows the PS5 release; native PC or mobile performance does not establish that its PS5 plugins load in AnyPS5.","在不断涌来的敌群中求生，并通过每局获得的升级增强角色。本页关注 PS5 版本；PC 和手机版的表现不能证明 PS5 版插件已能在 AnyPS5 中正常加载。","لعبة بقاء تواجه فيها حشوداً متزايدة من الأعداء وتكتسب ترقيات خلال كل جولة. تتناول هذه الصفحة إصدار PS5؛ ولا يثبت أداء نسختي الحاسوب والهاتف أن إضافات إصدار PS5 تعمل على AnyPS5.","Um jogo de sobrevivência com melhorias ao longo de cada partida e hordas crescentes de inimigos. Esta página trata da edição PS5; o desempenho das versões para PC ou telemóvel não comprova que os módulos da edição PS5 carreguem no AnyPS5.","Ein Überlebensspiel mit Upgrades während der einzelnen Durchläufe und immer größeren Gegnerhorden. Diese Seite behandelt die PS5-Version. Die Leistung auf PC oder Smartphone belegt nicht, dass deren PS5-Plugins in AnyPS5 geladen werden können.","Un jeu de survie où l’on obtient des améliorations au fil de chaque partie face à des hordes d’ennemis. Cette page concerne la version PS5 ; les performances sur PC ou mobile ne prouvent pas que les modules PS5 se chargent dans AnyPS5.","Un juego de supervivencia con mejoras durante cada partida y hordas crecientes de enemigos. Esta página trata la versión de PS5; el rendimiento en PC o móvil no demuestra que los módulos de PS5 se carguen en AnyPS5."),["hades", "hades-ii"],{"zh":"吸血鬼幸存者"}),
 "killing-floor-3":E("shooter",L("A cooperative shooter from Tripwire’s Killing Floor series. Menu rendering, a solo match and a multiplayer session require separate evidence; a HUD over a black world is insufficient for a working match.","Tripwire《杀戮空间》系列的合作射击游戏。菜单、单人对局和多人联机需要分别验证；只有界面元素可见、场景仍是黑屏，不能证明对局已能正常运行。","لعبة تصويب تعاونية من سلسلة Killing Floor. يجب التحقق من القوائم واللعب الفردي والجماعي كلٍّ على حدة؛ فظهور عناصر الواجهة فوق مشهد أسود لا يثبت أن الجولة تعمل بشكل صحيح.","Um jogo de tiro cooperativo da série Killing Floor. Menus, partidas a solo e sessões multijogador exigem testes separados; ver a interface sobre um cenário preto não comprova que a partida funcione.","Ein Koop-Shooter aus der Killing-Floor-Reihe. Menü, Einzelspieler und Mehrspieler müssen getrennt geprüft werden. Eine sichtbare Benutzeroberfläche bei schwarzer Spielwelt belegt noch kein funktionierendes Spiel.","Un jeu de tir coopératif de la série Killing Floor. Les menus, les parties solo et les sessions multijoueur doivent être vérifiés séparément ; une interface visible sur un décor noir ne suffit pas à confirmer que la partie fonctionne.","Un juego de disparos cooperativo de la serie Killing Floor. Los menús, las partidas individuales y el multijugador deben comprobarse por separado; una interfaz visible sobre un escenario negro no demuestra que la partida funcione."),["returnal", "helldivers-2"],{"zh":"杀戮空间 3"}),
 "pac-man-world-re-pac":E("platform",L("PAC-MAN’s 3D platform adventure returns in Re-PAC. This is the first WORLD remake, not WORLD 2 Re-PAC. Completing one level and surviving its transition are different test milestones.","PAC-MAN 的 3D 平台冒险以 Re-PAC 回归。本作是第一部 WORLD 的重制版，不是 WORLD 2 Re-PAC；完成一个关卡与顺利进入下一场景是不同测试节点。","تعود مغامرة PAC-MAN ثلاثية الأبعاد في Re-PAC. إعادة صنع WORLD الأولى لا WORLD 2. إكمال مرحلة واجتياز الانتقال بعدها مرحلتان مختلفتان للاختبار.","A aventura de plataformas 3D de PAC-MAN regressa em Re-PAC. É o remake do primeiro WORLD, não WORLD 2. Terminar um nível e passar a transição são marcos distintos.","PAC-MANs 3D-Plattformabenteuer kehrt als Re-PAC zurück. Es handelt sich um das Remake des ersten PAC-MAN WORLD, nicht um WORLD 2 Re-PAC. Ein abgeschlossener Level und ein erfolgreicher Wechsel zum nächsten Abschnitt sind getrennte Testschritte.","L’aventure de plateforme en 3D de PAC-MAN revient dans Re-PAC. Il s’agit du remake du premier PAC-MAN WORLD, et non de WORLD 2 Re-PAC. Terminer un niveau et passer à la scène suivante sont deux étapes de test distinctes.","La aventura de plataformas en 3D de PAC-MAN vuelve en Re-PAC. Es el remake del primer PAC-MAN WORLD, no de WORLD 2 Re-PAC. Completar un nivel y pasar a la siguiente escena son dos hitos de prueba distintos."),["sonic-origins", "epic-mickey-rebrushed"],{"zh":"吃豆人世界 Re-PAC"}),
 "demons-souls-ppsa01342":E("rpg",L("This separate page records the PPSA01342 PS5 edition of Demon’s Souls. Its Windows fork reaches menus only; results from the PPSA01341 Linux edition do not extend that test scope.","本页单独记录《恶魔之魂》的 PS5 PPSA01342 版本。Windows 分支只到菜单；PPSA01341 的 Linux 结果不能扩大本次测试范围。","تسجل هذه الصفحة إصدار PS5 من Demon’s Souls ذي المعرّف PPSA01342 بشكل مستقل. يصل فرع Windows إلى القوائم فقط؛ ولا يمكن تطبيق نتائج اختبار Linux للإصدار PPSA01341 عليه.","Esta página regista separadamente a edição PS5 de Demon’s Souls com o ID PPSA01342. O fork para Windows chega apenas aos menus; os resultados Linux da edição PPSA01341 não se aplicam a este teste.","Diese Seite dokumentiert die PS5-Fassung PPSA01342 von Demon’s Souls separat. Der Windows-Fork erreicht nur die Menüs. Linux-Ergebnisse für PPSA01341 lassen sich nicht auf diesen Test übertragen.","Cette page documente séparément l’édition PS5 PPSA01342 de Demon’s Souls. Le fork Windows atteint uniquement les menus ; les résultats Linux de PPSA01341 ne s’appliquent pas à cet essai.","Esta página documenta por separado la edición de PS5 PPSA01342 de Demon’s Souls. El fork para Windows solo llega a los menús; los resultados en Linux de PPSA01341 no se aplican a esta prueba."),["demons-souls", "elden-ring"],{"zh":"恶魔之魂 · PPSA01342"}),
 "stray-ppsa02101":E("action",L("This page isolates Stray PPSA02101 version 01.002 and its Linux shader-preparation regression. The older PPSA02100 calibration-screen result belongs to a different edition and patched build.","本页单独记录《Stray》的 PPSA02101 01.002 版，以及 Linux 上的着色器准备回归问题。较早的 PPSA02100 亮度校准画面结果来自另一版本和补丁构建。","تتناول هذه الصفحة إصدار Stray ذي المعرّف PPSA02101 والنسخة 01.002، مع مشكلة ظهرت في إعداد المظللات على Linux. أما نتيجة شاشة ضبط السطوع السابقة لـPPSA02100 فتخص إصداراً آخر وبناءً معدلاً مختلفاً.","Esta página isola Stray PPSA02101 01.002 e a regressão de preparação de shaders Linux. A calibração PPSA02100 anterior pertence a outra edição e compilação modificada.","Diese Seite trennt Stray PPSA02101 01.002 mit Linux-Shaderregression. Das ältere PPSA02100-Kalibrierungsbild stammt aus einer anderen Fassung und einem Patch-Build.","Cette page traite de Stray PPSA02101, version 01.002, et d’une régression lors de la préparation des shaders sous Linux. Le résultat antérieur sur l’écran de réglage de la luminosité de PPSA02100 provient d’une autre édition et d’une version modifiée différente.","Esta página separa Stray PPSA02101 01.002 y la regresión de shaders Linux. La calibración anterior PPSA02100 corresponde a otra edición y versión modificada."),["stray", "ratchet-clank-rift-apart"],{"zh":"迷失 · PPSA02101"}),

 'marvels-spider-man-2':E('action',L('Peter Parker and Miles Morales share a larger New York in Insomniac’s single-player action adventure. Switching heroes, web-wing travel and encounters with Venom distinguish this sequel from the earlier Spider-Man games.','彼得·帕克与迈尔斯·莫拉莱斯共同守护扩大的纽约。这部单人动作冒险续作加入角色切换与蛛网翼移动，并围绕毒液展开剧情，不能与系列前作的测试混为一谈。','يتشارك بيتر باركر ومايلز موراليس مدينة نيويورك أكبر في مغامرة فردية من Insomniac. تبديل البطل وأجنحة الويب ومواجهة Venom تميز الجزء عن ألعاب Spider-Man السابقة.','Peter Parker e Miles Morales partilham uma Nova Iorque maior nesta aventura a solo da Insomniac. Alternar protagonistas, usar asas de teia e enfrentar Venom distingue esta sequela dos jogos anteriores.','Peter Parker und Miles Morales teilen sich ein größeres New York in Insomniacs Einzelspieler-Abenteuer. Heldenwechsel, Netzflügel und Venom unterscheiden diesen Teil von den vorherigen Spider-Man-Spielen.','Peter Parker et Miles Morales parcourent un New York agrandi dans cette aventure solo d’Insomniac. Le changement de héros, les ailes de toile et Venom distinguent cette suite des jeux précédents.','Peter Parker y Miles Morales comparten una Nueva York ampliada en esta aventura individual de Insomniac. El cambio de héroe, las alas de telaraña y Venom distinguen esta secuela de los juegos anteriores.'),['ratchet-clank-rift-apart','ghost-of-yotei'],{"zh":"漫威蜘蛛侠 2"}),
 'elden-ring':E('rpg',L('FromSoftware’s action RPG combines open-world exploration with demanding combat in the Lands Between. Character builds, optional routes and boss encounters make a successful title-screen test far less informative than a documented playable area.','FromSoftware 的动作 RPG 将交界地的开放世界探索与高难度战斗结合。不同角色流派、支线路线和 Boss 战差异很大，因此出现标题画面远不足以证明某片区域可以正常游玩。',"تجمع لعبة تقمص الأدوار والحركة من FromSoftware بين استكشاف عالم مفتوح وقتال صعب. تنوع تطوير الشخصيات والمسارات والزعماء يجعل اختبار منطقة فعلية من اللعبة أكثر دلالة من مجرد ظهور شاشة العنوان.","O RPG de ação da FromSoftware combina exploração em mundo aberto com combate exigente. As opções de desenvolvimento da personagem, os percursos e os confrontos com chefes tornam o teste de uma área jogável mais informativo do que a simples apresentação do ecrã inicial.",'FromSoftwares Action-RPG verbindet Erkundung der Zwischenlande mit anspruchsvollen Kämpfen. Builds, Nebenwege und Bosse machen einen dokumentierten Spielabschnitt aussagekräftiger als einen Titelbildschirm.','Le RPG d’action de FromSoftware mêle exploration de l’Entre-terre et combats exigeants. Les builds, itinéraires et boss rendent un test de zone jouable bien plus utile qu’un écran-titre.','El RPG de acción de FromSoftware combina exploración de las Tierras Intermedias y combate exigente. Las configuraciones de personaje, rutas y jefes hacen más útil probar una zona jugable que mostrar el título.'),['demons-souls','black-myth-wukong'],{"zh":"艾尔登法环"},L('Record whether the test uses the base game or Shadow of the Erdtree. A PS4 executable and the PS5 edition have different identities; DLC ownership does not establish runtime support.','请注明测试使用本体还是《黄金树幽影》内容。PS4 与 PS5 可执行文件的身份不同，拥有 DLC 也不意味着对应内容已能运行。','حدّد اللعبة الأساسية أو Shadow of the Erdtree. تختلف هوية ملفات PS4 وPS5؛ امتلاك DLC لا يثبت دعم تشغيله.','Indique jogo base ou Shadow of the Erdtree. Os executáveis PS4 e PS5 têm identidades distintas; ter o DLC não comprova que funciona.','Gib Basisspiel oder Shadow of the Erdtree an. PS4- und PS5-Dateien haben unterschiedliche Identitäten; DLC-Besitz belegt keine Laufzeitunterstützung.','Précisez jeu de base ou Shadow of the Erdtree. Les exécutables PS4 et PS5 diffèrent ; posséder le DLC ne prouve pas qu’il fonctionne.','Indica juego base o Shadow of the Erdtree. Los ejecutables de PS4 y PS5 son distintos; poseer el DLC no demuestra que funcione.')),
 'black-myth-wukong':E('rpg',L('Game Science’s action RPG follows the Destined One through a world inspired by Journey to the West. Staff combat, transformations and distinct boss encounters are central to the game; tests need to identify the chapter and encounter reached.','游戏科学以《西游记》为灵感打造的动作 RPG，讲述天命人的旅程。棍术、变化与各章头目战是主要内容；运行报告应说明具体章节与到达的战斗场景。',"تتبع لعبة تقمص الأدوار والحركة من Game Science رحلة المقدّر في عالم مستوحى من رواية رحلة إلى الغرب. القتال بالعصا والتحولات ومواجهات الزعماء عناصر أساسية؛ وينبغي أن يحدد التقرير الفصل والمواجهة اللذين شملهما الاختبار.",'O RPG de ação da Game Science segue o Predestinado num mundo inspirado em Journey to the West. Combate com bastão, transformações e chefes pedem testes que identifiquem o capítulo e o confronto.',"Game Sciences Action-RPG begleitet den Auserwählten durch eine von Die Reise nach Westen inspirierte Welt. Stabkampf, Verwandlungen und Bosskämpfe stehen im Mittelpunkt. Testberichte sollten das erreichte Kapitel und den getesteten Kampf nennen.",'Le RPG d’action de Game Science suit le Prédestiné dans un univers inspiré de La Pérégrination vers l’Ouest. Bâton, transformations et boss nécessitent des tests précisant chapitre et combat.','El RPG de acción de Game Science sigue al Predestinado por un mundo inspirado en Viaje al Oeste. Bastón, transformaciones y jefes requieren pruebas que indiquen el capítulo y el enfrentamiento.'),['elden-ring','god-of-war-ragnarok'],{"zh":"黑神话：悟空"}),
 'god-of-war-ragnarok':E('action',L('Kratos and Atreus travel through the Nine Realms in Santa Monica Studio’s Norse adventure. Combat, companion interactions and story sequences all matter when assessing a run; a completed introduction would not verify the whole campaign.','奎托斯与阿特柔斯在圣莫尼卡工作室的北欧神话冒险中穿越九界。战斗、伙伴互动与剧情演出都影响运行体验；通过开场并不能验证整段主线。','يسافر كريتوس وأتريوس عبر العوالم التسعة في مغامرة Santa Monica Studio. القتال والتفاعل والمشاهد القصصية مهمة للاختبار؛ اجتياز المقدمة لا يثبت سلامة الحملة كاملة.','Kratos e Atreus percorrem os Nove Reinos na aventura nórdica da Santa Monica Studio. Combate, companheiros e cenas narrativas devem ser testados; concluir a introdução não valida toda a campanha.','Kratos und Atreus reisen durch die Neun Welten in Santa Monica Studios nordischem Abenteuer. Kämpfe, Begleiter und Storysequenzen gehören zum Test; das Intro bestätigt nicht die gesamte Kampagne.','Kratos et Atreus traversent les Neuf Royaumes dans l’aventure nordique de Santa Monica Studio. Combats, compagnons et séquences narratives comptent ; terminer l’introduction ne valide pas toute la campagne.','Kratos y Atreus recorren los Nueve Reinos en la aventura nórdica de Santa Monica Studio. Combate, compañeros y escenas narrativas cuentan; superar la introducción no verifica toda la campaña.'),['god-of-war-sons-of-sparta','black-myth-wukong'],{"zh":"战神：诸神黄昏"}),
 'cyberpunk-2077':E('rpg',L('CD Projekt Red’s first-person RPG places the mercenary V in Night City. Story missions, vehicles and dense urban scenes exercise different systems. Current AnyPS5 evidence below concerns startup and technical blockers, not a verified playable city.','CD Projekt Red 的第一人称 RPG 让雇佣兵 V 在夜之城展开冒险。剧情任务、载具和密集城市场景涉及不同系统；下方 AnyPS5 资料聚焦启动与技术阻碍，尚未验证城市中的实际游玩。',"تضع لعبة تقمص الأدوار بمنظور الشخص الأول من CD Projekt Red المرتزق V في مدينة Night City. تختبر المهمات والمركبات والمناطق المزدحمة أنظمة مختلفة. تتناول أدلة AnyPS5 أدناه بدء التشغيل والعوائق التقنية، ولا تثبت إمكانية اللعب داخل المدينة.","O RPG na primeira pessoa da CD Projekt Red acompanha V em Night City. Missões, veículos e zonas urbanas densas utilizam sistemas diferentes. Os relatos AnyPS5 abaixo tratam do arranque e dos obstáculos técnicos; não comprovam que já seja possível jogar na cidade.",'CD Projekt Reds Ego-RPG folgt V durch Night City. Missionen, Fahrzeuge und dichte Straßen beanspruchen verschiedene Systeme. Die AnyPS5-Belege unten betreffen Startprobleme, keine verifiziert spielbare Stadt.','Le RPG à la première personne de CD Projekt Red suit V dans Night City. Missions, véhicules et rues denses sollicitent différents systèmes. Les éléments AnyPS5 ci-dessous concernent le démarrage, pas une ville jouable vérifiée.',"El RPG en primera persona de CD Projekt Red sigue a V por Night City. Las misiones, los vehículos y las zonas urbanas densas ponen a prueba sistemas distintos. Los informes de AnyPS5 que aparecen a continuación tratan del inicio y de los obstáculos técnicos; no demuestran que se pueda jugar en la ciudad."),['gta-v','the-last-of-us-part-ii-remastered'],{"zh":"赛博朋克 2077"},L('Keep the PS5 base game, Ultimate Edition and Phantom Liberty version information explicit. This page’s startup report is for PPSA04029 v02.120.000; it does not cover every edition or region.','请注明 PS5 本体、终极版及《往日之影》的版本信息。本页启动问题对应 PPSA04029 v02.120.000，不涵盖所有版本与地区。','ميّز اللعبة الأساسية وUltimate Edition وPhantom Liberty. تقرير البدء هنا يخص PPSA04029 v02.120.000، لا كل الإصدارات والمناطق.','Distinga jogo base, Ultimate Edition e Phantom Liberty. O relato de arranque é PPSA04029 v02.120.000, não todas as edições ou regiões.','Trenne Basisspiel, Ultimate Edition und Phantom Liberty. Der Startbericht betrifft PPSA04029 v02.120.000, nicht jede Ausgabe oder Region.','Distinguez jeu de base, Ultimate Edition et Phantom Liberty. Le rapport concerne PPSA04029 v02.120.000, pas toutes les éditions ou régions.','Distingue juego base, Ultimate Edition y Phantom Liberty. El informe corresponde a PPSA04029 v02.120.000, no a todas las ediciones o regiones.')),
 'horizon-forbidden-west':E('action',L('Aloy explores new regions, fights machines and investigates the threats facing her world in Guerrilla’s sequel. The base game and Burning Shores expansion need separate test scopes; visual output alone does not confirm combat or quest progression.','Aloy 在 Guerrilla 的续作中探索新地域、对抗机械生物并调查世界面临的威胁。本体与《炙炎海岸》应分别记录测试范围；只有画面并不能验证战斗或任务推进。','تستكشف Aloy مناطق جديدة وتقاتل الآلات في جزء Guerrilla التالي. تحتاج اللعبة الأساسية وBurning Shores نطاقي اختبار منفصلين؛ ظهور الصورة لا يثبت القتال أو تقدم المهمات.','Aloy explora novas regiões e enfrenta máquinas na sequela da Guerrilla. O jogo base e Burning Shores precisam de âmbitos de teste separados; ter imagem não confirma combate ou progresso nas missões.','Aloy erkundet neue Regionen und bekämpft Maschinen in Guerrillas Fortsetzung. Basisspiel und Burning Shores benötigen getrennte Testbereiche; ein Bild bestätigt weder Kampf noch Questfortschritt.',"Aloy explore de nouvelles régions et affronte des machines dans la suite de Guerrilla. Le jeu de base et l’extension Burning Shores doivent être testés séparément ; l’affichage d’une scène ne suffit pas à vérifier les combats ou la progression des quêtes.",'Aloy explora regiones y combate máquinas en la secuela de Guerrilla. El juego base y Burning Shores necesitan pruebas separadas; mostrar imagen no confirma combate ni avance de misiones.'),['ghost-of-yotei','rise-of-the-ronin'],{"zh":"地平线：西之绝境"}),
 'the-last-of-us-part-i':E('action',L('Naughty Dog rebuilt Joel and Ellie’s journey for PS5, combining stealth, encounters and narrative exploration. Part I is a different release from the PS4 Remastered edition and Part II; reports for those games should not be reused here.','Naughty Dog 为 PS5 重制乔尔与艾莉的旅程，结合潜行、战斗与剧情探索。第一部与 PS4《重制版》及第二部是不同作品，其他版本的报告不能直接套用。','أعادت Naughty Dog بناء رحلة Joel وEllie على PS5 مع التسلل والقتال والاستكشاف القصصي. Part I مختلف عن Remastered على PS4 وعن Part II؛ لا تنقل تقاريرهما إليه.','A Naughty Dog reconstruiu a viagem de Joel e Ellie para PS5, com furtividade, combate e exploração narrativa. Part I difere de Remastered para PS4 e de Part II; os testes não são intercambiáveis.','Naughty Dog hat Joels und Ellies Reise für PS5 neu aufgebaut, mit Schleichen, Kämpfen und Erkundung. Part I unterscheidet sich von PS4 Remastered und Part II; ihre Berichte lassen sich nicht übertragen.','Naughty Dog a reconstruit le voyage de Joel et Ellie pour PS5, entre infiltration, combats et exploration. Part I diffère de Remastered sur PS4 et de Part II ; leurs tests ne sont pas interchangeables.','Naughty Dog reconstruyó el viaje de Joel y Ellie para PS5, con sigilo, combate y exploración. Part I es distinto de Remastered para PS4 y de Part II; no se pueden reutilizar sus informes.'),['the-last-of-us-part-ii-remastered','resident-evil-4-remake'],{"zh":"最后生还者 第一部"}),
 'the-last-of-us-part-ii-remastered':E('action',L('The PS5 remaster follows Ellie and Abby and adds the No Return survival mode. A campaign startup result does not verify No Return, separate encounter maps or save progression. The current report below stops before menus.','PS5 高清复刻版延续艾莉与艾比的故事，并加入“浴血无归”生存模式。主线启动结果不能验证独立模式、遭遇战地图或存档推进；目前下方报告在菜单出现前受阻。','يتابع إصدار PS5 Ellie وAbby ويضيف نمط No Return. بدء الحملة لا يثبت ذلك النمط أو الخرائط أو الحفظ. التقرير الحالي أدناه يتوقف قبل القوائم.',"A remasterização para PS5 acompanha Ellie e Abby e acrescenta o modo de sobrevivência No Return. Iniciar a campanha não verifica esse modo, os mapas de encontros ou o progresso guardado. O relatório atual, apresentado abaixo, regista uma falha antes dos menus.",'Die PS5-Neuauflage folgt Ellie und Abby und ergänzt No Return. Ein Kampagnenstart bestätigt weder diesen Modus noch Begegnungskarten oder Speichern. Der Bericht unten stoppt vor dem Menü.','La version PS5 suit Ellie et Abby et ajoute Sans retour. Un démarrage de campagne ne valide ni ce mode, ni les cartes, ni les sauvegardes. Le rapport actuel s’arrête avant les menus.','La remasterización de PS5 sigue a Ellie y Abby y añade Sin retorno. Iniciar la campaña no verifica ese modo, mapas ni guardados. El informe actual se detiene antes de los menús.'),['the-last-of-us-part-i','cyberpunk-2077'],{"zh":"最后生还者 第二部 高清复刻版"}),
 'final-fantasy-vii-rebirth':E('rpg',L('Cloud’s party leaves Midgar in the second entry of the Final Fantasy VII remake trilogy. Larger regions, party combat and side activities distinguish Rebirth from Remake. The demo and full game also need distinct test records.','克劳德一行离开米德加，展开《最终幻想 VII》重制三部曲第二作的旅程。广阔区域、队伍战斗和支线活动使 Rebirth 与 Remake 有所不同，试玩版与完整版也应分别记录。','يغادر فريق Cloud مدينة Midgar في الجزء الثاني من ثلاثية إعادة FFVII. المناطق والقتال الجماعي والأنشطة تميز Rebirth عن Remake؛ تحتاج التجربة والنسخة الكاملة سجلات منفصلة.','O grupo de Cloud sai de Midgar no segundo jogo da trilogia de recriação de FFVII. Regiões, combate em equipa e atividades distinguem Rebirth de Remake. Demo e jogo completo requerem registos separados.','Clouds Gruppe verlässt Midgar im zweiten Teil der FFVII-Neuauflage. Größere Regionen, Gruppenkämpfe und Nebenaktivitäten unterscheiden Rebirth von Remake. Demo und Vollversion brauchen getrennte Berichte.','Cloud et son groupe quittent Midgar dans le deuxième volet de la trilogie FFVII. Régions, combats en équipe et activités distinguent Rebirth de Remake. Démo et jeu complet doivent être testés séparément.','El grupo de Cloud sale de Midgar en la segunda entrega de la trilogía de FFVII. Regiones, combate en equipo y actividades distinguen Rebirth de Remake. Demo y juego completo necesitan registros separados.'),['final-fantasy-xvi','horizon-forbidden-west'],{"zh":"最终幻想 VII 重生"}),
 'final-fantasy-xvi':E('rpg',L('Clive Rosfield’s story unfolds in Valisthea in this single-player action RPG. Real-time combat and large Eikon battles require different observations from a menu test. Identify the base campaign or expansion when reporting progress.','克莱夫·罗兹菲尔德的故事在瓦利斯泽亚展开，这是一部单人动作 RPG。实时战斗与大型召唤兽对战需要独立测试，不能只凭菜单判断；报告应注明本体或扩展内容。',"تدور قصة Clive Rosfield في Valisthea ضمن لعبة تقمص أدوار وحركة للاعب واحد. يحتاج القتال الفوري ومعارك Eikon الكبيرة إلى اختبارات فعلية تتجاوز القوائم. ينبغي أن يحدد التقرير ما إذا كان يخص اللعبة الأساسية أو إحدى الإضافات.",'A história de Clive Rosfield passa-se em Valisthea neste RPG de ação a solo. Combate em tempo real e batalhas Eikon exigem mais do que testar menus. Identifique campanha ou expansão.','Clive Rosfields Geschichte spielt in Valisthea in diesem Einzelspieler-Action-RPG. Echtzeitkämpfe und Eikon-Schlachten brauchen eigene Beobachtungen. Nenne Basiskampagne oder Erweiterung im Bericht.',"L’histoire de Clive Rosfield se déroule en Valisthéa dans ce RPG d’action solo. Les combats en temps réel et les affrontements entre Primordiaux nécessitent des observations allant au-delà des menus. Chaque rapport doit préciser s’il concerne la campagne principale ou une extension.",'La historia de Clive Rosfield transcurre en Valisthea en este RPG de acción individual. Combate en tiempo real y batallas de eikon necesitan más que un menú. Indica campaña base o expansión.'),['final-fantasy-vii-rebirth','god-of-war-ragnarok'],{"zh":"最终幻想 XVI"}),
 'gran-turismo-7':E('racing',L('Polyphony Digital’s driving game combines car collection, licence challenges and racing. Network-dependent features and PS VR2 modes are separate test concerns. A garage or title screen would not establish that a race can be completed.','Polyphony Digital 的竞速作品结合车辆收集、驾照挑战与比赛。联网功能及 PS VR2 模式需要另行测试，进入车库或标题画面并不能证明比赛能够完成。','تجمع لعبة Polyphony Digital جمع السيارات واختبارات الرخص والسباقات. الشبكة وPS VR2 مسألتان منفصلتان؛ ظهور المرآب أو العنوان لا يثبت إكمال سباق.',"O jogo de condução da Polyphony Digital combina coleção de carros, provas de licença e corridas. As funções online e o modo PS VR2 exigem testes próprios. Ver a garagem ou o ecrã inicial não confirma que seja possível terminar uma corrida.",'Polyphony Digitals Rennspiel verbindet Autosammeln, Lizenzprüfungen und Rennen. Netzwerkfunktionen und PS VR2 benötigen separate Tests. Garage oder Titelbildschirm bestätigen kein abgeschlossenes Rennen.',"Le jeu de course de Polyphony Digital associe collection de voitures, épreuves de permis et compétitions. Les fonctions en ligne et le mode PS VR2 nécessitent des tests distincts. L’affichage du garage ou de l’écran-titre ne prouve pas qu’une course peut être terminée.",'El juego de Polyphony Digital combina colección de coches, licencias y carreras. Red y PS VR2 requieren pruebas separadas. Ver el garaje o título no demuestra que una carrera pueda completarse.'),['star-wars-galactic-racer','3d-mini-golf'],{"zh":"跑车浪漫旅 7"}),
 'hogwarts-legacy':E('rpg',L('This open-world action RPG follows a student at Hogwarts in the nineteenth century. Spell combat, exploration and quests form the main experience. The PS5 edition must be identified independently of the PS4 release or native PC game.','这部开放世界动作 RPG 让玩家扮演十九世纪霍格沃茨的学生，体验魔法战斗、探索与任务。测试应明确 PS5 版本，不能与 PS4 或原生 PC 版混写。',"تتيح لعبة تقمص الأدوار والحركة في عالم مفتوح تقمص شخصية طالب في هوغوورتس في القرن التاسع عشر. تشكل التعويذات والاستكشاف والمهمات أساس التجربة. يجب تمييز نتائج إصدار PS5 عن نتائج PS4 أو نسخة الحاسوب الأصلية.",'Este RPG de ação em mundo aberto acompanha um aluno de Hogwarts no século XIX. Feitiços, exploração e missões são centrais. Identifique a edição PS5 separadamente de PS4 ou PC nativo.','Dieses Open-World-Action-RPG folgt einem Hogwarts-Schüler im 19. Jahrhundert. Zauberkämpfe, Erkundung und Quests stehen im Mittelpunkt. Die PS5-Ausgabe ist von PS4 und nativem PC zu trennen.',"Ce RPG d’action en monde ouvert suit un élève de Poudlard au XIXe siècle. Les combats à coups de sorts, l’exploration et les quêtes sont au cœur de l’expérience. Les rapports doivent distinguer l’édition PS5 des versions PS4 et PC.",'Este RPG de acción de mundo abierto sigue a un estudiante de Hogwarts en el siglo XIX. Hechizos, exploración y misiones son centrales. Identifica PS5 por separado de PS4 y PC nativo.'),['horizon-forbidden-west','elden-ring'],{"zh":"霍格沃茨之遗","fr":"Hogwarts Legacy : L’Héritage de Poudlard"}),
 'helldivers-2':E('shooter',L('Arrowhead’s cooperative shooter sends squads on missions across hostile planets. Online play is part of the normal game, so network access, matchmaking and an actual mission would need verification beyond launching the client.','Arrowhead 的合作射击游戏让小队在敌对星球执行任务。正常游玩依赖在线服务，因此除启动客户端外，还需验证网络访问、匹配及完整任务过程。','يرسل تصويب Arrowhead التعاوني فرقاً إلى كواكب معادية. اللعب عبر الإنترنت أساسي، لذا يلزم اختبار الشبكة والمطابقة ومهمة فعلية، وليس بدء العميل فقط.','O jogo cooperativo da Arrowhead envia equipas para planetas hostis. O jogo online é essencial; rede, matchmaking e uma missão real precisam de verificação além de abrir o cliente.','Arrowheads Koop-Shooter schickt Trupps auf feindliche Planeten. Online-Spiel gehört dazu; Netzwerk, Spielersuche und eine echte Mission müssen über den Clientstart hinaus geprüft werden.','Le jeu coopératif d’Arrowhead envoie des escouades sur des planètes hostiles. Le jeu en ligne est essentiel : réseau, matchmaking et mission réelle doivent être vérifiés au-delà du lancement.','El shooter cooperativo de Arrowhead envía escuadrones a planetas hostiles. El juego en línea es esencial: red, emparejamiento y una misión real deben comprobarse además de iniciar el cliente.'),['returnal','doom-homebrew'],{"zh":"绝地潜兵 2"}),
 'resident-evil-4-remake':E('action',L('Capcom’s remake follows Leon’s rescue mission through action-horror encounters. It is distinct from the older Resident Evil 4 release. The main campaign, Separate Ways and VR mode should each be named when describing a test.','Capcom 的重制作品以里昂的营救任务展开动作恐怖冒险，与早期《生化危机 4》是不同版本。主线、《逆命殊途》和 VR 模式均应在报告中明确区分。','تتبع إعادة Capcom مهمة إنقاذ Leon بمواجهات أكشن ورعب. تختلف عن Resident Evil 4 القديمة؛ ينبغي تسمية الحملة أو Separate Ways أو VR عند الاختبار.','A recriação da Capcom segue a missão de resgate de Leon em cenários de ação e terror. Difere do jogo antigo. Campanha, Separate Ways e VR devem ser identificados em cada teste.','Capcoms Neuauflage folgt Leons Rettungsmission durch Action-Horror-Kämpfe. Sie unterscheidet sich vom älteren Resident Evil 4. Kampagne, Separate Ways und VR sollten getrennt benannt werden.','Le remake de Capcom suit la mission de sauvetage de Leon dans une aventure d’action-horreur. Il diffère de l’ancien Resident Evil 4. Précisez campagne, Une autre voie ou VR dans chaque test.','El remake de Capcom sigue la misión de rescate de Leon con acción y terror. Es distinto del Resident Evil 4 antiguo. Indica campaña, Separate Ways o VR en cada prueba.'),['the-last-of-us-part-i','returnal'],{"zh":"生化危机 4 重制版"}),
 'returnal':E('roguelike',L('Housemarque’s shooter follows Selene through repeated cycles on the alien world Atropos. Fast movement, projectile patterns and changing encounters make control response and frame delivery important. The GitHub thread below concerns a startup dependency, not verified gameplay.','Housemarque 的射击作品让塞勒涅在异星阿特洛波斯经历不断循环。高速移动、弹幕和变化的遭遇使操作响应与帧呈现尤其重要；下方 GitHub 进展涉及启动依赖，并非已验证的游戏过程。',"تتبع لعبة التصويب من Housemarque شخصية Selene عبر دورات متكررة على الكوكب Atropos. تجعل الحركة السريعة وأنماط المقذوفات والمواجهات المتغيرة استجابة التحكم وانتظام عرض الإطارات مهمين. يتعلق نقاش GitHub أدناه بمتطلب لبدء التشغيل، ولا يوثق لعباً فعلياً.","O jogo de tiro da Housemarque acompanha Selene em ciclos sucessivos no planeta Atropos. Os movimentos rápidos e as sequências de projéteis tornam a resposta dos controlos e a regularidade dos fotogramas importantes. A discussão do GitHub abaixo trata de uma dependência de arranque, não de jogo verificado.","Housemarques Shooter folgt Selene durch wiederkehrende Zyklen auf Atropos. Schnelle Bewegung und wechselnde Geschossmuster machen eine schnelle Eingabereaktion und gleichmäßige Bildausgabe wichtig. Der GitHub-Beitrag unten behandelt eine Startabhängigkeit, kein nachgewiesenes Gameplay.",'Le jeu de Housemarque suit Selene dans des cycles sur Atropos. Mouvement, projectiles et rencontres rendent commandes et affichage essentiels. Le fil GitHub concerne une dépendance de démarrage, pas du jeu vérifié.','El shooter de Housemarque sigue a Selene por ciclos en Atropos. Movimiento, proyectiles y encuentros hacen importantes los controles y fotogramas. El hilo de GitHub trata una dependencia de inicio, no juego verificado.'),['hades','helldivers-2'],{"zh":"死亡回归"}),
 'palworld':E('sandbox',L('Palworld combines creature collecting, exploration and survival crafting. Solo progress, multiplayer sessions and world saves need separate observations. Import or network-library work linked to the PS5 version does not by itself verify a playable world.','Palworld 结合生物收集、探索与生存建造。单人进度、多人联机和世界存档都需要分别观察；关联 PS5 版本的导入或网络库改动，本身不能证明世界已可正常游玩。','تجمع Palworld جمع الكائنات والاستكشاف والبقاء والبناء. اللعب الفردي والجماعي وحفظ العالم تتطلب ملاحظات منفصلة. عمل المكتبات لا يثبت وحده عالماً قابلاً للعب.',"Palworld combina coleção de criaturas, exploração e construção para sobreviver. O progresso a solo, as sessões multijogador e os dados guardados de cada mundo precisam de verificações separadas. Alterações nas bibliotecas da versão PS5 não comprovam, por si só, que já seja possível jogar num mundo.",'Palworld verbindet Kreaturensammeln, Erkundung und Survival-Crafting. Einzelspieler, Mehrspieler und Weltspeicherungen brauchen eigene Beobachtungen. Bibliotheksarbeit allein bestätigt keine spielbare Welt.','Palworld mêle collection de créatures, exploration et survie. Progression solo, multijoueur et sauvegarde du monde demandent des observations distinctes. Des modifications de bibliothèques ne prouvent pas un monde jouable.','Palworld combina colección de criaturas, exploración y supervivencia. Progreso individual, multijugador y guardado del mundo necesitan observaciones separadas. Cambiar bibliotecas no demuestra por sí solo un mundo jugable.'),['minecraft-preview','wobbly-life'],{"zh":"幻兽帕鲁"}),
 'dreaming-sarah':E('adventure',L('A surreal exploration game in which Sarah searches a dream world for a way to wake up. Its small-scale scenes make the reported opening-area tests easy to identify.','莎拉在梦境世界中探索，寻找醒来的方法。这部超现实冒险的场景较小，适合明确记录开场区域的测试范围。','مغامرة سريالية تبحث فيها Sarah عن طريق للاستيقاظ من عالم الأحلام. تسهّل المشاهد الصغيرة تحديد نطاق اختبارات البداية.','Uma aventura surreal em que Sarah procura acordar num mundo de sonhos. Os cenários pequenos ajudam a identificar a área inicial dos testes.','Ein surreales Erkundungsspiel, in dem Sarah aus einer Traumwelt erwachen will. Kleine Schauplätze helfen, den getesteten Anfangsbereich einzugrenzen.','Une aventure surréaliste où Sarah explore un monde onirique pour se réveiller. Les petites scènes permettent de délimiter les tests du début.','Una aventura surrealista en la que Sarah explora sueños para despertar. Sus escenarios pequeños permiten delimitar las pruebas de la zona inicial.'),['animal-well','silt'],{"zh":"梦境莎拉"}),
 'animal-well':E('puzzle',L('Explore an interconnected labyrinth and use items to reveal routes and solve environmental puzzles. A room-level report should specify which interactions were actually tested.','在相互连接的迷宫中探索，利用道具寻找路线、破解环境谜题。单个房间的测试应具体说明验证过哪些互动。','استكشف متاهة مترابطة واستخدم الأدوات لكشف المسارات وحل الألغاز. ينبغي لتقرير الغرفة تحديد التفاعلات المختبَرة.','Explore um labirinto interligado e use objetos para descobrir caminhos e resolver puzzles. Um teste de sala deve indicar as interações verificadas.','Erkunde ein verbundenes Labyrinth und löse mit Gegenständen Umgebungsrätsel. Ein Raumtest sollte die geprüften Interaktionen nennen.','Explorez un labyrinthe interconnecté et utilisez des objets pour résoudre ses énigmes. Un test de salle doit préciser les interactions vérifiées.','Explora un laberinto conectado y utiliza objetos para resolver puzles. Una prueba de habitación debe indicar qué interacciones se verificaron.'),['dreaming-sarah','hollow-knight-silksong'],{"zh":"动物井"}),
 'hollow-knight-silksong':E('platform',L('Hornet explores Pharloom through platforming, combat and new movement abilities. Menu, introduction and interactive area reports describe different levels of progress.','黄蜂在纺络王国探索，通过平台跳跃、战斗与新的移动能力推进。菜单、开场演出与实际可操作区域应视为不同测试阶段。','تستكشف Hornet مملكة Pharloom بالمنصات والقتال وقدرات الحركة. القائمة والمقدمة والمنطقة التفاعلية مراحل اختبار مختلفة.','Hornet explora Pharloom com plataformas, combate e novas capacidades. Menus, introdução e zonas interativas representam fases distintas do teste.','Hornet erkundet Pharloom mit Plattformpassagen, Kämpfen und neuen Fähigkeiten. Menü, Intro und interaktive Bereiche sind unterschiedliche Testphasen.','Hornet explore Pharloom entre plateformes, combats et nouvelles capacités. Menu, introduction et zone interactive correspondent à des étapes distinctes.','Hornet explora Pharloom con plataformas, combate y nuevas habilidades. Menú, introducción y zonas interactivas son fases distintas de prueba.'),['animal-well','hades'],{"zh":"空洞骑士：丝之歌"}),
 'silt':E('puzzle',L('A monochrome underwater adventure built around possessing sea creatures to solve puzzles. Loading the first area is different from verifying possession and puzzle progression.','黑白水下冒险，以附身海洋生物解谜为核心。加载首个区域与验证附身操作、谜题推进是不同的测试目标。',"مغامرة تحت الماء بالأبيض والأسود تقوم على السيطرة على الكائنات البحرية لحل الألغاز. تحميل المنطقة الأولى لا يثبت أن التحكم بهذه الكائنات أو التقدم في الألغاز يعملان.",'Uma aventura subaquática monocromática que usa a possessão de criaturas para resolver puzzles. Carregar uma área não valida essa mecânica ou o progresso.',"Ein monochromes Unterwasserabenteuer, in dem du die Kontrolle über Meereswesen übernimmst, um Rätsel zu lösen. Das Laden des ersten Gebiets belegt noch nicht, dass diese Mechanik oder der Rätselablauf funktionieren.",'Une aventure sous-marine monochrome où l’on prend possession de créatures pour résoudre des énigmes. Charger une zone ne valide pas cette mécanique.','Una aventura submarina monocroma que permite poseer criaturas para resolver puzles. Cargar una zona no verifica esa mecánica ni el progreso.'),['animal-well','dreaming-sarah'],{"zh":"SILT - 黯海"}),
 'balatro':E('roguelike',L('A poker-inspired deckbuilder using hands, jokers and evolving scoring combinations. Record an actual round and score calculation separately from a functioning main menu.','以扑克为灵感的牌组构筑游戏，围绕牌型、小丑牌和计分组合展开。测试应分别记录主菜单、实际回合与计分结果。',"لعبة بناء مجموعات أوراق مستوحاة من البوكر، تعتمد على تشكيلات الأوراق وأوراق الجوكر ومضاعفات النقاط. ينبغي تسجيل جولة فعلية وطريقة احتساب النقاط بشكل مستقل عن ظهور القائمة الرئيسية.",'Um deckbuilder inspirado no póquer, com mãos, jokers e combinações de pontuação. Registe uma ronda e o cálculo dos pontos, não apenas o menu.','Ein vom Poker inspirierter Deckbuilder mit Händen, Jokern und Punktekombinationen. Prüfe Runde und Punkteberechnung getrennt vom Hauptmenü.','Un jeu de construction de deck inspiré du poker, avec mains, jokers et combinaisons de points. Testez une manche et son calcul, pas seulement le menu.',"Un juego de construcción de mazos inspirado en el póker, con manos, comodines y combinaciones de puntuación. Las pruebas deben registrar una ronda real y el cálculo de sus puntos por separado del funcionamiento del menú principal."),['hades','animal-well'],{"zh":"小丑牌"}),
 'hades':E('roguelike',L('Supergiant’s action roguelike follows Zagreus through repeated attempts to escape the Underworld. Reaching the menu does not establish combat, room transitions or persistent progression.','Supergiant 的动作 Roguelike 讲述扎格列欧斯不断尝试逃离冥界。进入菜单不能证明战斗、房间切换或持久进度正常。','يتبع روغلايك Supergiant شخصية Zagreus في محاولات الهروب من العالم السفلي. القائمة لا تثبت القتال أو الانتقال أو حفظ التقدم.',"O roguelike de ação da Supergiant acompanha Zagreus nas suas tentativas de fuga do Submundo. Chegar ao menu não comprova que funcionem os combates, as transições entre salas ou a gravação do progresso.",'Supergiants Action-Roguelike folgt Zagreus bei Fluchten aus der Unterwelt. Das Menü bestätigt weder Kampf noch Raumwechsel oder dauerhaften Fortschritt.','Le roguelike de Supergiant suit Zagreus dans ses tentatives de fuite des Enfers. Le menu ne valide ni combat, ni transitions, ni progression durable.','El roguelike de Supergiant sigue a Zagreo al intentar escapar del Inframundo. El menú no verifica combate, salas ni progreso persistente.'),['hades-ii','returnal'],{"zh":"哈迪斯"}),
 'hades-ii':E('roguelike',L('Melinoë uses weapons and witchcraft in Supergiant’s sequel. It is a separate game from Hades, so earlier test results and save behaviour do not transfer automatically.','墨利诺厄在 Supergiant 的续作中使用武器与巫术战斗。这是与《哈迪斯》不同的游戏，前作测试与存档结论不能直接沿用。','تستخدم Melinoë الأسلحة والسحر في جزء Supergiant الجديد. إنه مختلف عن Hades؛ لا تنتقل نتائج الاختبار والحفظ تلقائياً.',"Melinoë usa armas e feitiçaria na sequela da Supergiant. Hades II é um jogo distinto de Hades; os resultados dos testes e o comportamento dos dados guardados não se aplicam automaticamente à sequela.",'Melinoë kämpft mit Waffen und Hexerei in Supergiants Fortsetzung. Hades II ist ein eigenes Spiel; Tests und Speicherverhalten sind nicht übertragbar.','Mélinoé emploie armes et sorcellerie dans la suite de Supergiant. C’est un jeu distinct de Hades ; tests et sauvegardes ne sont pas transposables.','Melínoe usa armas y brujería en la secuela de Supergiant. Es distinto de Hades; sus pruebas y comportamiento de guardado no se transfieren.'),['hades','balatro'],{"zh":"哈迪斯 II"}),
 'astro-bot':E('platform',L('Team Asobi’s platform adventure takes Astro across themed planets with distinct abilities. This full game is separate from ASTRO’s PLAYROOM; each tested planet and local patch needs identification.','Team Asobi 的平台冒险让 Astro 在主题各异的星球运用不同能力。这部完整作品不同于 ASTRO’s PLAYROOM；测试应注明星球和本地补丁。','تنقل مغامرة Team Asobi شخصية Astro بين كواكب وقدرات مختلفة. تختلف عن ASTRO’s PLAYROOM؛ حدّد الكوكب والتعديلات المختبَرة.',"A aventura de plataformas da Team Asobi leva Astro por planetas temáticos, onde utiliza diferentes capacidades. É um jogo distinto da Sala de Jogos do ASTRO; o relatório deve indicar o planeta testado e quaisquer alterações locais.",'Team Asobis Abenteuer führt Astro über Planeten mit verschiedenen Fähigkeiten. Es ist von ASTRO’s PLAYROOM zu trennen; nenne Planet und lokale Patches.',"L’aventure de plateforme de Team Asobi emmène Astro sur des planètes thématiques où il utilise différentes capacités. Ce jeu est distinct d’ASTRO’s PLAYROOM ; chaque rapport doit préciser la planète testée et les modifications locales.",'La aventura de Team Asobi lleva a Astro por planetas con habilidades distintas. Es diferente de ASTRO’s PLAYROOM; indica planeta y parches locales.'),['astros-playroom','ratchet-clank-rift-apart'],{"zh":"宇宙机器人"}),
 'astros-playroom':E('platform',L('The PS5 pack-in adventure introduces Astro and DualSense features across hardware-inspired worlds. Rendering a scene does not confirm touchpad, haptics or adaptive-trigger support.','PS5 预装的平台冒险以主机硬件为灵感设计关卡，并展示 DualSense 特性。出现画面并不等于触摸板、触觉反馈或自适应扳机正常。',"تقدم لعبة المغامرات المثبتة مسبقاً على PS5 شخصية Astro وميزات وحدة التحكم DualSense في عوالم مستوحاة من مكونات الجهاز. ظهور المشهد لا يثبت عمل لوحة اللمس أو الاستجابة اللمسية أو الزنادين التكيفيين.","A aventura de plataformas incluída na PS5 apresenta Astro e as funcionalidades do comando DualSense em mundos inspirados no hardware da consola. Ver uma imagem não comprova que funcionem o painel tátil, a resposta háptica ou os gatilhos adaptativos.","Das auf der PS5 vorinstallierte Plattformspiel stellt Astro und die DualSense-Funktionen in Welten vor, die von der Konsolenhardware inspiriert sind. Eine sichtbare Szene belegt noch nicht, dass Touchpad, haptisches Feedback und adaptive Trigger funktionieren.","L’aventure de plateforme préinstallée sur PS5 présente Astro et les fonctions de la manette DualSense dans des mondes inspirés des composants de la console. L’affichage d’une scène ne suffit pas à vérifier le pavé tactile, le retour haptique ou les gâchettes adaptatives.","La aventura de plataformas preinstalada en PS5 presenta a Astro y las funciones del mando DualSense en mundos inspirados en los componentes de la consola. Ver una escena no confirma que funcionen el panel táctil, la respuesta háptica o los gatillos adaptativos."),['astro-bot','sonic-origins'],{"zh":"ASTRO’s PLAYROOM","pt":"Sala de Jogos do ASTRO"}),
 'demons-souls':E('rpg',L('Bluepoint’s PS5 remake revisits Boletaria with demanding combat and interconnected areas. This page concerns the remake, not the original PS3 game or its emulation results.','Bluepoint 的 PS5 重制版重返柏雷塔尼亚，以高难度战斗和相互连接的区域展开。本页不涉及原始 PS3 游戏或其模拟器表现。',"تعيد نسخة Bluepoint المطورة لجهاز PS5 تقديم عالم Boletaria بقتال صعب ومناطق مترابطة. تتناول هذه الصفحة النسخة المعاد تطويرها، ولا تشمل لعبة PS3 الأصلية أو نتائج تشغيلها بالمحاكاة.",'A recriação da Bluepoint para PS5 regressa a Boletaria com combate exigente. Esta página não trata do original PS3 ou de resultados de emulação.','Bluepoints PS5-Neuauflage kehrt nach Boletaria zurück. Diese Seite betrifft nicht das PS3-Original oder dessen Emulation.','Le remake PS5 de Bluepoint revisite Boletaria avec des combats exigeants. Cette page ne concerne pas l’original PS3 ou son émulation.','El remake de Bluepoint para PS5 vuelve a Boletaria con combate exigente. Esta página no trata el original de PS3 ni su emulación.'),['elden-ring','rise-of-the-ronin'],{"zh":"恶魔之魂"}),
 'ghost-of-yotei':E('action',L('Sucker Punch’s adventure follows Atsu through Ezo in a new setting and story. Ghost of Yōtei and Ghost of Tsushima are separate titles; their reports cannot be interchanged.','Sucker Punch 的冒险围绕 Atsu 在虾夷的旅程展开，采用新的背景与故事。《羊蹄山之魂》与《对马岛之魂》是不同作品，测试不能混用。','تتبع مغامرة Sucker Punch شخصية Atsu في Ezo بقصة جديدة. Yōtei وTsushima عنوانان مختلفان لا تتبادل تقاريرهما.','A aventura da Sucker Punch acompanha Atsu em Ezo numa história nova. Yōtei e Tsushima são títulos distintos; os relatórios não são intercambiáveis.','Sucker Punchs Abenteuer folgt Atsu durch Ezo mit neuer Geschichte. Yōtei und Tsushima sind unterschiedliche Titel; Berichte sind nicht austauschbar.','L’aventure de Sucker Punch suit Atsu à Ezo dans une nouvelle histoire. Yōtei et Tsushima sont distincts ; leurs rapports ne sont pas interchangeables.','La aventura de Sucker Punch sigue a Atsu por Ezo con una nueva historia. Yōtei y Tsushima son títulos distintos; no intercambies informes.'),['rise-of-the-ronin','horizon-forbidden-west'],{"zh":"羊蹄山之魂"}),
 'god-of-war-sons-of-sparta':E('platform',L('A side-scrolling God of War adventure centred on an earlier chapter of Kratos’s life. Its two-dimensional presentation does not make results transferable to Ragnarök or other series entries.','横向卷轴的《战神》冒险，聚焦奎托斯更早的经历。采用二维画面并不意味着测试结果可以套用到《诸神黄昏》等系列作品。','مغامرة God of War جانبية عن مرحلة مبكرة من حياة Kratos. العرض ثنائي الأبعاد لا يجعل نتائجها صالحة لـRagnarök أو بقية الأجزاء.',"Uma aventura de God of War com deslocação lateral, centrada numa fase anterior da vida de Kratos. A apresentação em 2D não permite aplicar estes resultados a Ragnarök ou a outros jogos da série.","Ein Sidescrolling-Abenteuer aus der God-of-War-Reihe über eine frühere Phase in Kratos’ Leben. Die zweidimensionale Darstellung macht die Testergebnisse nicht auf Ragnarök oder andere Teile übertragbar.",'Une aventure God of War à défilement latéral sur la jeunesse de Kratos. La 2D ne rend pas ses résultats transposables à Ragnarök ou aux autres épisodes.',"Una aventura de God of War de desplazamiento lateral, centrada en una etapa anterior de la vida de Kratos. Su presentación en 2D no permite aplicar estos resultados a Ragnarök ni a otros juegos de la serie."),['god-of-war-ragnarok','hollow-knight-silksong'],{"zh":"战神：斯巴达之子"}),
 'gta-v':E('sandbox',L('Rockstar’s open-world game follows three protagonists in Los Santos. Story Mode and GTA Online are distinct test scopes; the prologue result below is not verification of online sessions.','Rockstar 的开放世界作品讲述洛圣都三位主角的故事。故事模式与 GTA 在线模式应分别测试，下方序章报告不能证明在线会话可用。','تتبع لعبة Rockstar ثلاثة أبطال في Los Santos. Story Mode وGTA Online نطاقان منفصلان؛ تقرير المقدمة لا يثبت الجلسات عبر الإنترنت.','O jogo da Rockstar segue três protagonistas em Los Santos. Story Mode e GTA Online exigem testes distintos; o prólogo não valida sessões online.','Rockstars Open-World-Spiel folgt drei Figuren in Los Santos. Storymodus und GTA Online sind getrennt zu testen; der Prolog bestätigt keine Online-Sitzung.','Le jeu de Rockstar suit trois protagonistes à Los Santos. Histoire et GTA Online sont distincts ; le prologue ne valide pas les sessions en ligne.','El juego de Rockstar sigue a tres protagonistas en Los Santos. Historia y GTA Online requieren pruebas distintas; el prólogo no verifica sesiones en línea.'),['cyberpunk-2077','wobbly-life'],{"zh":"侠盗猎车手 V"}),
 'epic-mickey-rebrushed':E('platform',L('Mickey uses paint and thinner to reshape Wasteland in this remake of the platform adventure. Reports should distinguish visual output from puzzle interactions and level completion.','米奇在平台冒险重制版中使用颜料与稀释剂改变荒废乐园。报告应区分画面呈现、解谜互动与关卡完成情况。','يستخدم Mickey الطلاء والمخفف لتغيير Wasteland في إعادة مغامرة منصات. ميّز الصورة عن تفاعل الألغاز وإكمال المستوى.','Mickey usa tinta e diluente para transformar Wasteland nesta recriação. Distinga imagem, interação com puzzles e conclusão de níveis.','Mickey verändert Wasteland mit Farbe und Verdünner in dieser Neuauflage. Trenne Bildausgabe, Rätselinteraktion und Levelabschluss.','Mickey transforme Wasteland avec peinture et diluant dans ce remake. Distinguez affichage, interactions et fin de niveau.','Mickey transforma Wasteland con pintura y disolvente en este remake. Distingue imagen, interacción con puzles y final de nivel.'),['astro-bot','sonic-origins'],{"zh":"迪士尼传奇米奇：重制版"}),
 '3d-mini-golf':E('sports',L('A minigolf game with courses and local multiplayer. A completed hole is a useful bounded observation, but does not validate every course or multiplayer mode.','带有多种球场与本地多人模式的迷你高尔夫游戏。完成一洞能提供明确的局部结果，但无法验证所有球场与多人模式。',"لعبة غولف مصغر بملاعب متعددة ونمط جماعي محلي. إكمال حفرة واحدة نتيجة محددة النطاق، لكنه لا يثبت عمل كل الملاعب أو أنماط اللعب الجماعي.","Um jogo de minigolfe com vários percursos e um modo multijogador local. Concluir um buraco fornece uma observação concreta, mas não verifica todos os percursos ou modos de jogo.","Ein Minigolfspiel mit mehreren Bahnen und lokalem Mehrspielermodus. Ein abgeschlossenes Loch liefert ein klar begrenztes Testergebnis, belegt aber nicht, dass alle Bahnen und Mehrspielermodi funktionieren.",'Un jeu de minigolf avec parcours et multijoueur local. Terminer un trou est une observation limitée, pas un test de tous les modes.','Un juego de minigolf con campos y multijugador local. Completar un hoyo es una observación limitada, no una prueba de todos los modos.'),['gran-turismo-7','wobbly-life']),
 'hello-kitty-island-adventure':E('adventure',L('A relaxed island adventure with Sanrio characters, exploration and restoration activities. A visible menu does not establish island movement, quests or saved friendships.','与三丽鸥角色一起探索、修复岛屿的休闲冒险。菜单可见并不能证明岛屿移动、任务与好友关系存档正常。','مغامرة جزيرة هادئة بشخصيات Sanrio والاستكشاف والترميم. ظهور القائمة لا يثبت الحركة أو المهمات أو حفظ الصداقات.','Uma aventura descontraída com personagens Sanrio, exploração e recuperação da ilha. O menu não valida movimento, missões ou amizades gravadas.','Ein entspanntes Inselabenteuer mit Sanrio-Figuren und Erkundung. Ein sichtbares Menü bestätigt weder Bewegung noch Quests oder gespeicherte Freundschaften.','Une aventure paisible avec les personnages Sanrio et la restauration d’une île. Le menu ne valide ni déplacements, ni quêtes, ni amitiés sauvegardées.','Una aventura tranquila con personajes Sanrio y restauración de una isla. El menú no verifica movimiento, misiones ni amistades guardadas.'),['wobbly-life','minecraft-preview'],{"zh":"Hello Kitty Island Adventure"}),
 'minecraft-preview':E('sandbox',L('Minecraft Preview is a testing channel for upcoming Bedrock features, not the regular retail release. Version-specific behaviour is especially important when comparing world and rendering tests.','Minecraft Preview 是用于体验 Bedrock 新功能的测试渠道，不是常规零售版本。比较世界与渲染测试时，尤其需要核对具体版本。','Minecraft Preview قناة لاختبار ميزات Bedrock المقبلة، وليس الإصدار التجاري العادي. الإصدار مهم عند مقارنة اختبارات العالم والرسم.','Minecraft Preview testa futuras funções Bedrock, não é a versão comercial normal. A versão é importante para comparar mundos e renderização.','Minecraft Preview ist ein Testkanal für Bedrock-Funktionen, keine reguläre Handelsversion. Versionsangaben sind bei Welt- und Grafiktests besonders wichtig.','Minecraft Preview teste de futures fonctions Bedrock et n’est pas la version commerciale normale. La version compte pour comparer monde et rendu.','Minecraft Preview prueba futuras funciones de Bedrock, no es la versión comercial normal. La versión es esencial al comparar mundos y gráficos.'),['palworld','wobbly-life'],{"zh":"我的世界 Preview"}),
 'sonic-origins':E('platform',L('A collection of classic Sonic games with updated modes and presentation. The Sonic 1 areas in a report do not validate Sonic 2, Sonic 3 & Knuckles or the Plus content.','集合经典索尼克作品，并加入更新的模式与呈现方式。报告中的 Sonic 1 区域不能验证 Sonic 2、Sonic 3 & Knuckles 或 Plus 内容。','مجموعة ألعاب Sonic كلاسيكية بأوضاع وعرض محدّث. مناطق Sonic 1 لا تثبت Sonic 2 أو Sonic 3 & Knuckles أو Plus.','Uma coleção de jogos Sonic clássicos com modos atualizados. Testar Sonic 1 não valida Sonic 2, Sonic 3 & Knuckles ou Plus.','Eine Sammlung klassischer Sonic-Spiele mit neuen Modi. Sonic-1-Tests bestätigen nicht Sonic 2, Sonic 3 & Knuckles oder Plus.','Une collection de Sonic classiques avec des modes actualisés. Tester Sonic 1 ne valide ni Sonic 2, ni Sonic 3 & Knuckles, ni Plus.','Una colección de Sonic clásicos con modos actualizados. Probar Sonic 1 no verifica Sonic 2, Sonic 3 & Knuckles ni Plus.'),['astros-playroom','hollow-knight-silksong'],{"zh":"索尼克 起源"}),
 'stray':E('adventure',L('A cat explores a city inhabited by robots in this third-person adventure. Brightness calibration is a setup screen, not evidence of cat movement or environmental interaction.','以猫为主角，在机器人居住的城市中探索的第三人称冒险。亮度校准属于设置画面，不能证明猫的移动或环境互动已可用。','تستكشف قطة مدينة روبوتات في مغامرة منظور ثالث. معايرة السطوع شاشة إعداد، لا دليل على الحركة أو التفاعل.','Um gato explora uma cidade de robôs nesta aventura. Calibrar o brilho é configuração, não prova de movimento ou interação.','Eine Katze erkundet eine Roboterstadt in diesem Abenteuer. Helligkeitskalibrierung ist ein Einstellungsbildschirm, kein Bewegungs- oder Interaktionstest.',"Un chat explore une ville peuplée de robots dans cette aventure à la troisième personne. L’écran de réglage de la luminosité fait partie de la configuration ; son affichage ne prouve pas que les déplacements ou les interactions fonctionnent.",'Un gato explora una ciudad de robots en esta aventura. La calibración de brillo es un ajuste, no una prueba de movimiento o interacción.'),['silt','hello-kitty-island-adventure'],{"zh":"迷失"}),
 'wobbly-life':E('sandbox',L('A physics sandbox with jobs, minigames and cooperative exploration. Rendering an arcade video stream does not prove character control, world interaction or session persistence.','结合工作、小游戏与合作探索的物理沙盒。渲染街机视频流不能证明角色操作、世界互动或会话存档正常。','عالم فيزيائي بالوظائف والألعاب الصغيرة والاستكشاف التعاوني. عرض فيديو arcade لا يثبت التحكم أو التفاعل أو حفظ الجلسة.','Um sandbox de física com trabalhos, minijogos e exploração cooperativa. Um vídeo arcade não comprova controlos, interação ou persistência.','Eine Physik-Sandbox mit Jobs, Minispielen und Koop-Erkundung. Ein Arcade-Videostream bestätigt weder Steuerung noch Interaktion oder Speichern.','Un bac à sable physique avec métiers, mini-jeux et coopération. Un flux vidéo arcade ne valide ni commandes, ni interactions, ni sauvegarde.','Un sandbox de física con trabajos, minijuegos y cooperación. Un vídeo arcade no verifica controles, interacción ni persistencia.'),['palworld','minecraft-preview'],{"zh":"晃晃人生"}),
 'rise-of-the-ronin':E('action',L('Team Ninja’s open-world adventure explores nineteenth-century Japan with combat and narrative choices. Import-resolution work and a rendered frame are separate milestones.','Team Ninja 的开放世界冒险结合战斗与叙事选择，探索幕末的日本。解决导入问题与真正呈现画面是不同阶段。',"تستكشف مغامرة Team Ninja اليابان في القرن التاسع عشر، مع القتال والاختيارات القصصية. حل مشكلة تحميل دالة مستوردة وعرض صورة من اللعبة مرحلتان مختلفتان.","A aventura da Team Ninja explora o Japão do século XIX, com combate e escolhas narrativas. Resolver uma função importada em falta e apresentar uma imagem do jogo são etapas diferentes.",'Team Ninjas Abenteuer erkundet Japan im 19. Jahrhundert mit Kämpfen und Entscheidungen. Importauflösung und sichtbare Frames sind getrennte Schritte.',"L’aventure de Team Ninja explore le Japon du XIXe siècle avec des combats et des choix narratifs. Résoudre une fonction importée manquante et afficher une image du jeu sont deux étapes distinctes.","La aventura de Team Ninja explora el Japón del siglo XIX con combate y decisiones narrativas. Resolver una función importada que falta y mostrar un fotograma del juego son hitos distintos."),['ghost-of-yotei','demons-souls'],{"zh":"浪人崛起"}),
 'ratchet-clank-rift-apart':E('action',L('Insomniac’s adventure moves Ratchet and Rivet between dimensions using varied weapons and traversal. Startup logos, a later rendering stall and successful interactive play must be recorded independently.','Insomniac 的冒险让 Ratchet 与 Rivet 使用多种武器与移动方式穿梭维度。启动标志、后续渲染卡死与实际可操作过程必须分别记录。','تنقل مغامرة Insomniac شخصيتي Ratchet وRivet بين الأبعاد. شعارات البدء والتوقف اللاحق واللعب التفاعلي نتائج منفصلة.','A aventura da Insomniac leva Ratchet e Rivet entre dimensões. Logótipos, bloqueios posteriores e jogo interativo são resultados distintos.','Insomniacs Abenteuer führt Ratchet und Rivet durch Dimensionen. Startlogos, spätere Grafikstopps und interaktives Gameplay sind getrennt zu dokumentieren.','L’aventure d’Insomniac traverse les dimensions avec Ratchet et Rivet. Logos, blocages ultérieurs et jeu interactif doivent être consignés séparément.','La aventura de Insomniac cruza dimensiones con Ratchet y Rivet. Logos, bloqueos posteriores y juego interactivo deben registrarse por separado.'),['marvels-spider-man-2','astro-bot'],{"zh":"瑞奇与叮当：时空跳转","pt":"Ratchet & Clank: Uma Dimensão à Parte","es":"Ratchet & Clank: Una dimensión aparte"}),
 'star-wars-galactic-racer':E('racing',L('A racing adventure in the Star Wars Outer Rim. Boot logos in an experimental branch do not confirm a drivable speeder, race completion or reliable frame pacing.','以《星球大战》外环为背景的竞速冒险。实验分支出现启动标志，并不能证明飞梭可操作、比赛可完成或帧呈现稳定。','مغامرة سباقات في Outer Rim من Star Wars. شعارات فرع تجريبي لا تثبت التحكم بالمركبة أو إكمال السباق أو استقرار الإطارات.','Uma aventura de corridas na Orla Exterior de Star Wars. Logótipos num ramo experimental não comprovam condução, conclusão de corridas ou fluidez.','Ein Rennabenteuer im Outer Rim von Star Wars. Logos auf einem Testbranch bestätigen weder fahrbare Speeder noch fertige Rennen oder stabile Bildzeiten.','Une aventure de course dans la Bordure extérieure de Star Wars. Des logos sur une branche expérimentale ne valident ni conduite, ni fin de course, ni fluidité.','Una aventura de carreras en el Borde Exterior de Star Wars. Logos en una rama experimental no verifican conducción, carreras completas ni fluidez.'),['gran-turismo-7','ratchet-clank-rift-apart'],{"zh":"星球大战：银河赛车手"}),
 'doom-homebrew':E('shooter',L('This entry is a community PS5 homebrew port of classic DOOM. It is not DOOM Eternal, a commercial PS5 edition or a verified retail-game compatibility result.','本条目是经典 DOOM 的社区 PS5 自制移植版，不是《毁灭战士：永恒》、商业 PS5 版或已经验证的零售游戏兼容结果。',"هذا إصدار من DOOM الكلاسيكية نقله المجتمع إلى PS5 ضمن البرمجيات المنزلية. وهو مختلف عن DOOM Eternal أو أي إصدار تجاري لجهاز PS5؛ ولا تمثل نتائجه اختبار توافق للعبة تجارية.",'Este é um port homebrew de DOOM clássico para PS5, não DOOM Eternal, uma edição comercial ou um resultado validado de um jogo comercial.','Dieser Eintrag betrifft einen PS5-Homebrew-Port des klassischen DOOM, nicht DOOM Eternal oder eine verifizierte Handelsversion.','Ce port homebrew PS5 de DOOM classique n’est ni DOOM Eternal, ni une édition commerciale, ni un résultat validé pour un jeu commercial.',"Esta entrada corresponde a una adaptación de DOOM clásico para PS5 creada por la comunidad como proyecto homebrew. Es distinta de DOOM Eternal y de las ediciones comerciales para PS5; sus resultados no verifican la compatibilidad de un juego comercial."),['helldivers-2','returnal'],{"en":"DOOM · PS5 homebrew port","zh":"DOOM · PS5 自制移植版","ar":"DOOM · إصدار مجتمعي لـPS5","pt":"DOOM · adaptação homebrew para PS5","de":"DOOM · Homebrew-Port für PS5","fr":"DOOM · portage homebrew pour PS5","es":"DOOM · adaptación homebrew para PS5"}),
};
// New edition-specific entries reviewed on 15 October.
editorial["ea-sports-ufc-6"]=E("sports",{"en": "An octagon fighting game whose AnyPS5 evidence needs the actual combat speed and fork settings.", "zh": "八角笼格斗游戏；AnyPS5 证据需保留实际战斗速度和分支设置。", "ar": "لعبة قتال الحلبة تتطلب أدلتها سرعة القتال الفعلية وإعدادات الفرع.", "pt": "Luta no octógono: os relatos precisam da velocidade real e das definições do fork.", "de": "Octagon-Kampf: Belege brauchen tatsächliche Kampfrate und Fork-Einstellungen.", "fr": "Combat dans l’octogone : les preuves exigent vitesse réelle et réglages du fork.", "es": "Combate en octágono: las pruebas necesitan velocidad real y ajustes del fork."},["nhl-26", "gran-turismo-7"],{});
editorial["syobon-action-homebrew"]=E("platform",{"en": "A trap-filled community platformer port; reaching the lives screen does not test its levels.", "zh": "充满陷阱的社区平台游戏移植；进入生命数画面还没有验证关卡。", "ar": "منصة مجتمعية مليئة بالفخاخ؛ شاشة الأرواح لا تختبر المستويات.", "pt": "Port de plataformas com armadilhas; o ecrã de vidas não testa os níveis.", "de": "Homebrew-Plattformer voller Fallen; die Lebensanzeige testet keine Level.", "fr": "Port communautaire à pièges ; l’écran des vies ne valide pas les niveaux.", "es": "Port comunitario con trampas; la pantalla de vidas no prueba niveles."},["astro-bot", "hollow-knight-silksong"],{"zh": "猫里奥 · PS5 自制移植版"},{"en": "This is the community PS5 source port, not a commercial retail title.", "zh": "这是社区 PS5 源码移植，不是商业零售游戏。", "ar": "هذا port مجتمعي PS5 لا عنوان تجاري.", "pt": "Port comunitário PS5, não título comercial.", "de": "PS5-Community-Port, kein Handelsspiel.", "fr": "Port communautaire PS5, pas titre commercial.", "es": "Port comunitario PS5, no título comercial."});
editorial["dave-the-diver"]=E("adventure",{"en": "Diving and sushi management combine two play loops; verify the boat and underwater scenes separately.", "zh": "潜水与寿司店经营构成两种循环；船上和水下场景应分别核对。", "ar": "الغوص وإدارة السوشي مساران؛ افحص القارب والمشاهد تحت الماء منفصلة.", "pt": "Mergulho e sushi juntam dois ciclos; confirme barco e cenas subaquáticas separadamente.", "de": "Tauchen und Sushi verbinden zwei Abläufe; Boot und Unterwasser getrennt prüfen.", "fr": "Plongée et sushi combinent deux boucles ; vérifier bateau et scènes sous-marines séparément.", "es": "Buceo y sushi combinan dos ciclos; comprueba barco y escenas submarinas aparte."},["silt", "astro-bot"],{"zh": "潜水员戴夫"});
editorial["marvels-wolverine"]=E("action",{"en": "Logan’s action adventure requires visible, controllable scenes beyond logos and partial renders.", "zh": "Logan 的动作冒险需验证标志和局部渲染之后的可操作场景。", "ar": "مغامرة Logan تتطلب مشاهد مرئية قابلة للتحكم بعد الشعارات والرسم الجزئي.", "pt": "A aventura de Logan exige cenas controláveis além de logótipos e renderização parcial.", "de": "Logans Abenteuer braucht steuerbare Szenen nach Logos und Teilbildern.", "fr": "L’aventure de Logan exige des scènes contrôlables après logos et rendu partiel.", "es": "La aventura de Logan requiere escenas controlables después de logos y renders parciales."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "漫威金刚狼"});
editorial["resident-evil-2-remake"]=E("action",{"en": "Leon and Claire’s survival horror separates campaign selection from exploration and combat.", "zh": "Leon 与 Claire 的生存恐怖冒险需区分选战役、探索和战斗。", "ar": "رعب Leon وClaire يفصل اختيار الحملة عن الاستكشاف والقتال.", "pt": "O terror de Leon e Claire distingue escolha de campanha, exploração e combate.", "de": "Leon und Claires Horror trennt Kampagnenwahl, Erkundung und Kampf.", "fr": "L’horreur de Leon et Claire distingue choix de campagne, exploration et combat.", "es": "El terror de Leon y Claire separa selección de campaña, exploración y combate."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "生化危机 2 重制版"},{"en": "The report is PS5 PPSA04288. Shared remake artwork does not turn the PS4 listing into a PS5 test or prove DLC was run.", "zh": "报告为 PS5 PPSA04288；共享重制版配图不将 PS4 商店条目变为 PS5 实测，也不证明已运行 DLC。", "ar": "التقرير PS5 PPSA04288؛ الفن المشترك لا يجعل PS4 اختبار PS5 أو يثبت DLC.", "pt": "Relato PS5 PPSA04288; arte comum não converte anúncio PS4 em teste PS5 nem prova DLC.", "de": "Bericht PS5 PPSA04288; gemeinsame Kunst macht PS4-Eintrag nicht zum PS5/DLC-Test.", "fr": "Rapport PS5 PPSA04288 ; art partagé ne transforme pas fiche PS4 en test PS5/DLC.", "es": "Informe PS5 PPSA04288; arte compartido no convierte ficha PS4 en prueba PS5/DLC."});
editorial["doom-doom-ii"]=E("shooter",{"en": "The commercial classic-shooter collection has separate menu, automatic-demo and interactive-play evidence.", "zh": "商业经典射击合集的菜单、自动演示和交互游戏证据应分开。", "ar": "مجموعة التصويب التجارية تفصل القائمة والعرض التلقائي واللعب التفاعلي.", "pt": "A coleção comercial distingue menu, demonstração automática e jogo interativo.", "de": "Handelskollektion trennt Menü, automatische Demo und interaktives Spielen.", "fr": "La collection commerciale distingue menu, démo automatique et jeu interactif.", "es": "La colección comercial separa menú, demo automática y juego interactivo."},["doom-homebrew", "returnal"],{},{"en": "Retail PPSA21444 is distinct from DOOM homebrew PPSA99666.", "zh": "零售 PPSA21444 不同于自制 DOOM PPSA99666。", "ar": "PPSA21444 تجاري مختلف عن homebrew PPSA99666.", "pt": "PPSA21444 comercial distinto de homebrew PPSA99666.", "de": "Handels-PPSA21444 getrennt von Homebrew PPSA99666.", "fr": "PPSA21444 commercial distinct de homebrew PPSA99666.", "es": "PPSA21444 comercial distinto de homebrew PPSA99666."});
editorial["heretic-hexen"]=E("shooter",{"en": "The fantasy-shooter collection contains distinct games; a Heretic demo does not test Hexen.", "zh": "奇幻射击合集包含不同游戏；Heretic 的演示不代表已测试 Hexen。", "ar": "المجموعة تضم ألعاباً مختلفة؛ عرض Heretic لا يختبر Hexen.", "pt": "A coleção contém jogos distintos; uma demo de Heretic não testa Hexen.", "de": "Kollektion mit getrennten Spielen; Heretic-Demo testet Hexen nicht.", "fr": "La collection contient des jeux distincts ; une démo Heretic ne teste pas Hexen.", "es": "La colección contiene juegos distintos; una demo Heretic no prueba Hexen."},["doom-homebrew", "returnal"],{},{"en": "The report covers Heretic’s automatic demo; Hexen, input and audible output are untested.", "zh": "报告只覆盖 Heretic 自动演示；Hexen、操作及实际声音未测试。", "ar": "التقرير لعرض Heretic التلقائي؛ Hexen والإدخال والصوت غير مختبرة.", "pt": "Relato da demo automática Heretic; Hexen, comandos e som por testar.", "de": "Bericht über Heretic-Autodemo; Hexen, Eingabe/Ton ungeprüft.", "fr": "Rapport de démo Heretic ; Hexen, entrée et son non testés.", "es": "Informe de demo Heretic; Hexen, entrada y sonido sin probar."});
editorial["castlevania-belmonts-curse"]=E("action",{"en": "A Belmont action-exploration adventure needs playable exploration beyond its responsive menus.", "zh": "Belmont 的动作探索冒险需在可操作菜单之外验证关卡探索。", "ar": "مغامرة Belmont تحتاج استكشافاً قابلاً للعب بعد القوائم المستجيبة.", "pt": "A aventura Belmont precisa de exploração jogável além de menus responsivos.", "de": "Belmont-Abenteuer braucht spielbare Erkundung nach reagierenden Menüs.", "fr": "L’aventure Belmont exige exploration jouable au-delà des menus réactifs.", "es": "La aventura Belmont requiere exploración jugable tras menús que responden."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "恶魔城：贝尔蒙特的诅咒"});
editorial["onimusha-way-of-the-sword"]=E("action",{"en": "A samurai action game; language setup, audible output and sword combat are different test stages.", "zh": "武士动作游戏；语言设置、实际声音与刀剑战斗是不同测试阶段。", "ar": "لعبة ساموراي؛ اللغة والصوت والقتال مراحل اختبار مختلفة.", "pt": "Ação samurai: idioma, som e combate são fases distintas do teste.", "de": "Samurai-Action: Sprache, Ton und Schwertkampf sind getrennte Testphasen.", "fr": "Action samouraï : langue, son et combat sont des étapes distinctes.", "es": "Acción samurái: idioma, audio y combate son fases distintas."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "鬼武者：剑之道"});
editorial["cat-quest-iii"]=E("rpg",{"en": "A pirate action RPG spanning islands, caves and ship travel; save/load checks matter alongside FPS.", "zh": "跨岛屿、洞穴与船只旅行的海盗动作 RPG；除 FPS 外也需验证存读档。", "ar": "RPG قراصنة عبر الجزر والكهوف والسفن؛ الحفظ والتحميل مهمان بجانب FPS.", "pt": "RPG pirata entre ilhas, cavernas e navios; guardar/carregar importa tanto como FPS.", "de": "Piraten-RPG mit Inseln, Höhlen und Schiffen; Saves/Loads zählen neben FPS.", "fr": "RPG pirate entre îles, grottes et navires ; saves/chargements comptent autant que FPS.", "es": "RPG pirata por islas, cuevas y barcos; guardar/cargar importa junto a FPS."},["diablo-ii-resurrected", "hades"],{"zh": "猫咪斗恶龙 III"});
editorial["withering-rooms"]=E("rpg",{"en": "A 2.5D horror RPG in a shifting mansion; walking a few rooms does not establish long-run stability.", "zh": "发生在变化宅邸的 2.5D 恐怖 RPG；走过几间房不证明长期稳定。", "ar": "RPG رعب 2.5D في قصر متغير؛ بضع غرف لا تثبت الثبات الطويل.", "pt": "RPG de terror 2,5D numa mansão mutável; poucas salas não provam estabilidade prolongada.", "de": "2,5D-Horror-RPG in wandelndem Haus; wenige Räume belegen keine Langzeitstabilität.", "fr": "RPG d’horreur 2,5D dans un manoir changeant ; quelques pièces ne prouvent pas la stabilité.", "es": "RPG de terror 2,5D en mansión cambiante; pocas salas no prueban estabilidad prolongada."},["diablo-ii-resurrected", "hades"],{},{"en": "The report is PPSA21297. Store artwork can refer to another regional edition and does not verify that edition’s runtime result.", "zh": "报告为 PPSA21297；商店配图可能对应另一地区版本，不能验证该版本运行结果。", "ar": "التقرير PPSA21297؛ الفن قد يكون لمنطقة أخرى ولا يثبت تشغيلها.", "pt": "Relato PPSA21297; arte pode referir outra região e não prova o seu resultado.", "de": "Bericht PPSA21297; Storekunst kann andere Region betreffen und testet sie nicht.", "fr": "Rapport PPSA21297 ; art peut correspondre à autre région, sans résultat validé.", "es": "Informe PPSA21297; arte puede ser de otra región y no prueba su resultado."});
editorial["007-first-light"]=E("action",{"en": "Bond’s origin adventure combines combat and stealth; a beach tutorial is only an early test route.", "zh": "邦德起源冒险结合战斗与潜行；海滩教程只是早期测试路线。", "ar": "مغامرة Bond تجمع القتال والتسلل؛ تعليم الشاطئ مسار اختبار أولي فقط.", "pt": "A origem de Bond junta combate e furtividade; tutorial na praia é apenas percurso inicial.", "de": "Bonds Ursprung verbindet Kampf und Schleichen; Strandtutorial ist nur frühe Testroute.", "fr": "L’origine de Bond mêle combat et infiltration ; tutoriel de plage reste un parcours initial.", "es": "El origen de Bond mezcla combate y sigilo; tutorial de playa es solo ruta inicial."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{});
editorial["void-terrarium-ppsa03042"]=E("rpg",{"en": "A robot’s exploration and care adventure; this PPSA is separate from the other Void Terrarium++ report.", "zh": "机器人的探索与照护冒险；此 PPSA 与另一份 Void Terrarium++ 报告分开。", "ar": "مغامرة استكشاف ورعاية روبوت؛ هذا PPSA مستقل عن تقرير Void Terrarium++ الآخر.", "pt": "Exploração e cuidados por um robô; PPSA distinto do outro relato Void Terrarium++.", "de": "Roboter-Erkundung und Pflege; PPSA getrennt vom anderen Void-Terrarium++-Bericht.", "fr": "Exploration et soins par un robot ; PPSA distinct de l’autre rapport Void Terrarium++.", "es": "Exploración y cuidado por robot; PPSA distinto del otro informe Void Terrarium++."},["diablo-ii-resurrected", "hades"],{},{"en": "Keep PPSA03042 separate from PPSA03061; the source does not restate its content version. Shared artwork is promotional.", "zh": "PPSA03042 与 PPSA03061 分开；来源未重述内容版本，共享配图为宣传。", "ar": "افصل PPSA03042 عن PPSA03061؛ نسخة المحتوى غير مذكورة والفن ترويجي.", "pt": "Separar PPSA03042 de PPSA03061; versão não repetida e arte promocional.", "de": "PPSA03042 getrennt von PPSA03061; Inhaltsversion ungenannt, gemeinsame Kunst Werbung.", "fr": "Séparer PPSA03042 de PPSA03061 ; version non redonnée, art partagé promotionnel.", "es": "Separar PPSA03042 de PPSA03061; versión no reiterada, arte compartido promocional."});
editorial["hollow-knight-voidheart"]=E("platform",{"en": "Hallownest exploration is distinct from Silksong; recorded controls and saves apply to this title.", "zh": "Hallownest 探索与《丝之歌》分开；本条目的操作及存档记录只适用于此游戏。", "ar": "استكشاف Hallownest مختلف عن Silksong؛ الإدخال والحفظ لهذا العنوان.", "pt": "Explorar Hallownest é distinto de Silksong; controlos e saves referem-se a este título.", "de": "Hallownest-Erkundung getrennt von Silksong; Eingabe und Saves betreffen diesen Titel.", "fr": "L’exploration d’Hallownest se distingue de Silksong ; commandes et saves pour ce titre.", "es": "Explorar Hallownest es distinto de Silksong; controles y guardados de este título."},["astro-bot", "hollow-knight-silksong"],{"zh": "空洞骑士：虚空之心版"},{"en": "PPSA34971 is Hollow Knight, not Silksong PPSA12544.", "zh": "PPSA34971 是《空洞骑士》，非《丝之歌》PPSA12544。", "ar": "PPSA34971 هو Hollow Knight لا Silksong PPSA12544.", "pt": "PPSA34971 é Hollow Knight, não Silksong PPSA12544.", "de": "PPSA34971 ist Hollow Knight, nicht Silksong PPSA12544.", "fr": "PPSA34971 est Hollow Knight, pas Silksong PPSA12544.", "es": "PPSA34971 es Hollow Knight, no Silksong PPSA12544."});
editorial["marvel-cosmic-invasion"]=E("action",{"en": "A Marvel arcade brawler; conflicting startup descriptions need visible scenes and a pinned runtime.", "zh": "漫威街机清版动作游戏；矛盾启动描述需用可见场景与准确 runtime 核实。", "ar": "قتال Marvel أركيد؛ أوصاف البدء المتضاربة تتطلب مشاهد وبناء محدداً.", "pt": "Combate arcade Marvel; arranque contraditório exige cenas visíveis e runtime identificado.", "de": "Marvel-Arcadeprügler; widersprüchlicher Start braucht sichtbare Szenen und festen Runtime.", "fr": "Combat arcade Marvel ; démarrage contradictoire exige scènes et runtime identifié.", "es": "Combate arcade Marvel; inicio contradictorio requiere escenas y runtime identificado."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "漫威：宇宙入侵"});
editorial["mgs4-master-collection"]=E("action",{"en": "This collection entry tests MGS4 itself; the collection launcher’s frame rate is recorded separately.", "zh": "此合集条目测试 MGS4 本体；合集启动器帧数单独记录。", "ar": "هذا السجل يختبر MGS4 نفسه؛ FPS مشغل المجموعة منفصلة.", "pt": "Esta entrada testa MGS4; FPS do lançador da coleção separados.", "de": "Eintrag testet MGS4 selbst; FPS des Kollektionslaunchers separat.", "fr": "Cette entrée teste MGS4 ; FPS du lanceur de collection séparés.", "es": "Esta entrada prueba MGS4; FPS del lanzador de colección aparte."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "合金装备 4 · Master Collection"},{"en": "PPSA18194 is the PS5 Master Collection title. Collection artwork is promotional and does not test every included game.", "zh": "PPSA18194 为 PS5 Master Collection 游戏；合集图片属于宣传，不证明每款收录游戏已测试。", "ar": "PPSA18194 لعنوان PS5 Master Collection؛ فن المجموعة ترويجي لا يثبت اختبار كل لعبة.", "pt": "PPSA18194 é título PS5 Master Collection; arte promocional não testa todos os jogos.", "de": "PPSA18194 ist PS5-Master-Collection-Titel; Kollektionskunst testet nicht alle Spiele.", "fr": "PPSA18194 est le titre PS5 Master Collection ; art promotionnel ne valide pas tous les jeux.", "es": "PPSA18194 es título PS5 Master Collection; arte promocional no prueba todos los juegos."});
editorial["saros"]=E("shooter",{"en": "Housemarque’s science-fiction action game needs tested combat after initial setup.", "zh": "Housemarque 科幻动作游戏需要在首次设置之后验证战斗。", "ar": "لعبة Housemarque العلمية تحتاج قتالاً مختبراً بعد الإعداد.", "pt": "Ação de ficção científica Housemarque exige combate testado após definições iniciais.", "de": "Housemarques Science-Fiction-Action braucht Kampftests nach Ersteinrichtung.", "fr": "L’action SF de Housemarque exige combat testé après la configuration initiale.", "es": "Acción de ciencia ficción Housemarque requiere combate probado tras ajustes iniciales."},["doom-homebrew", "returnal"],{});
editorial["fifa-21"]=E("sports",{"en": "The PS5 football edition needs its own startup and match evidence; a PS4 or PC result is separate.", "zh": "PS5 足球版本需要自己的启动与比赛证据；PS4 或 PC 结果另列。", "ar": "نسخة كرة القدم PS5 تحتاج بدءاً ومباراة خاصين بها؛ PS4 وPC منفصلان.", "pt": "A edição futebol PS5 precisa de provas próprias; resultados PS4 e PC separados.", "de": "PS5-Fußball braucht eigene Start-/Matchbelege; PS4 und PC separat.", "fr": "Le football PS5 exige ses propres preuves ; résultats PS4 et PC séparés.", "es": "La edición fútbol PS5 necesita pruebas propias; PS4 y PC aparte."},["nhl-26", "gran-turismo-7"],{});
editorial["lies-of-p"]=E("rpg",{"en": "A Pinocchio-inspired action RPG; loading-screen motion does not validate exploration or combat.", "zh": "以匹诺曹为灵感的动作 RPG；加载画面有变化不证明探索或战斗可用。", "ar": "RPG مستوحى من Pinocchio؛ حركة التحميل لا تثبت الاستكشاف أو القتال.", "pt": "RPG inspirado em Pinóquio; movimento na carga não valida exploração ou combate.", "de": "Pinocchio-inspiriertes RPG; Ladeanimation prüft weder Erkundung noch Kampf.", "fr": "RPG inspiré de Pinocchio ; animation de chargement ne valide pas exploration/combat.", "es": "RPG inspirado en Pinocho; animación de carga no valida exploración ni combate."},["diablo-ii-resurrected", "hades"],{});
editorial["ghostrunner"]=E("action",{"en": "A first-person cyberpunk sword game whose startup GPU failure is separate from playable movement.", "zh": "第一人称赛博朋克刀剑游戏；启动 GPU 故障与可操作移动分开。", "ar": "لعبة سيف سايبربانك بمنظور أول؛ عطل GPU عند البدء ليس حركة لعب.", "pt": "Espada cyberpunk na primeira pessoa; falha GPU inicial distinta de movimento jogável.", "de": "Cyberpunk-Schwertspiel in Egoansicht; Start-GPU-Fehler getrennt von Spielbewegung.", "fr": "Épée cyberpunk à la première personne ; panne GPU de démarrage distincte du jeu.", "es": "Espada cyberpunk en primera persona; fallo GPU inicial distinto de movimiento jugable."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{});
editorial["guardians-of-the-galaxy"]=E("action",{"en": "Star-Lord leads a story-driven cosmic adventure; a language picker does not establish a rendered world.", "zh": "Star-Lord 带队展开叙事宇宙冒险；出现语言选择不证明世界渲染可用。", "ar": "يقود Star-Lord مغامرة فضائية؛ اختيار اللغة لا يثبت عالماً مرسوماً.", "pt": "Star-Lord lidera aventura cósmica; escolher idioma não prova mundo renderizado.", "de": "Star-Lord führt Weltraumabenteuer; Sprachauswahl belegt keine gerenderte Welt.", "fr": "Star-Lord mène une aventure cosmique ; choix de langue ne valide pas le monde rendu.", "es": "Star-Lord lidera aventura cósmica; elegir idioma no prueba mundo renderizado."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{"zh": "漫威银河护卫队"});
editorial["hello-neighbor-2"]=E("adventure",{"en": "A stealth mystery in Raven Brooks requires recognizable scenes, not just a crosshair over broken pixels.", "zh": "Raven Brooks 的潜行悬疑需可辨认场景，仅破碎像素上的准星不够。", "ar": "غموض تسلل في Raven Brooks يحتاج مشاهد معروفة لا مؤشراً فوق بكسلات مكسورة.", "pt": "Mistério furtivo em Raven Brooks precisa de cenas reconhecíveis, não mira em imagem partida.", "de": "Raven-Brooks-Schleichrätsel braucht erkennbare Szenen statt Fadenkreuz auf kaputten Pixeln.", "fr": "Mystère d’infiltration à Raven Brooks exige scènes lisibles, pas viseur sur pixels cassés.", "es": "Misterio sigiloso en Raven Brooks requiere escenas reconocibles, no mira sobre píxeles rotos."},["silt", "astro-bot"],{});
editorial["steins-gate-reboot"]=E("adventure",{"en": "The science-fiction story’s reboot needs scene and voice checks beyond its title button.", "zh": "科幻叙事重启版需在标题按钮之外核对实际场景与语音。", "ar": "إعادة قصة الخيال العلمي تحتاج مشاهد وصوتاً بعد زر العنوان.", "pt": "O reboot de ficção científica exige cenas e vozes além do botão inicial.", "de": "Neufassung der Sci-Fi-Geschichte braucht Szenen-/Sprachtests nach Titelbutton.", "fr": "Le reboot SF exige scènes et voix au-delà du bouton du titre.", "es": "El reboot de ciencia ficción requiere escenas y voces tras botón del título."},["silt", "astro-bot"],{"zh": "命运石之门 RE:BOOT"},{"en": "The Japanese store lists a PS5 edition while the global publisher gives 29 October. The report’s region and content version are unknown; do not infer them from either release page.", "zh": "日本商店列出 PS5 版，全球发行商给出 10 月 29 日；报告地区与内容版本未知，不能从任一发行页倒推。", "ar": "المتجر الياباني يعرض PS5 والناشر العالمي يذكر 29 أكتوبر. منطقة التقرير ونسخته مجهولتان؛ لا تستنتجهما.", "pt": "Loja japonesa lista PS5, editor global indica 29 de outubro. Região/versão do relato desconhecidas; não inferir.", "de": "Japanischer Store listet PS5, globaler Publisher nennt 29. Oktober. Berichtsregion/-version unbekannt, nicht ableiten.", "fr": "Store japonais liste PS5, éditeur global indique 29 octobre. Région/version du rapport inconnues, ne pas déduire.", "es": "Tienda japonesa lista PS5, editor global indica 29 de octubre. Región/versión del informe desconocidas, no inferir."});
editorial["resonance-plague-tale-legacy"]=E("action",{"en": "Sophia’s Plague Tale adventure blends combat and puzzles; unresolved startup APIs remain the report boundary.", "zh": "Sophia 的瘟疫传说冒险结合战斗与解谜；未实现的启动 API 仍是报告边界。", "ar": "مغامرة Sophia تجمع القتال والألغاز؛ API البدء غير المحققة حد التقرير.", "pt": "A aventura de Sophia junta combate e puzzles; APIs iniciais por resolver limitam o relato.", "de": "Sophias Abenteuer verbindet Kampf/Rätsel; ungelöste Start-APIs begrenzen den Bericht.", "fr": "L’aventure de Sophia mêle combat et énigmes ; APIs de démarrage non résolues bornent le rapport.", "es": "La aventura de Sophia mezcla combate y puzles; APIs iniciales pendientes limitan el informe."},["resident-evil-village", "ghost-of-tsushima-directors-cut"],{});

editorial["007-first-light"].editionNote={"en": "The report is PPSA11386 v01.018.000. The current promotional cover advertises DLC; it does not establish that content was tested.", "zh": "报告为 PPSA11386 v01.018.000；当前宣传封面带有 DLC 广告，不证明已测试该内容。", "ar": "التقرير PPSA11386 v01.018.000؛ الغلاف الحالي يعلن DLC ولا يثبت اختبارها.", "pt": "Relato PPSA11386 v01.018.000; capa anuncia DLC e não comprova o seu teste.", "de": "Bericht PPSA11386 v01.018.000; Cover wirbt für DLC und belegt keinen Test davon.", "fr": "Rapport PPSA11386 v01.018.000 ; couverture annonce un DLC sans preuve de test.", "es": "Informe PPSA11386 v01.018.000; portada anuncia DLC sin prueba de haberlo probado."};
Object.assign(editorial,{
 "puyo-puyo-tetris-2": {
  "genre": "puzzle",
  "overview": {
   "en": "Puyo chains and falling Tetriminos share a puzzle crossover; matching its PS5 region matters for module and shader reports.",
   "zh": "气泡连锁与俄罗斯方块结合的益智作品；核对 PS5 地区版本后再比较模块／着色器问题。",
   "ar": "لعبة ألغاز تجمع سلاسل Puyo وTetriminos؛ تحقق من منطقة PS5 للمقارنة.",
   "pt": "Puzzles combinam cadeias Puyo e Tetriminos; confirme a região PS5 ao comparar falhas.",
   "de": "Puyo-Ketten und Tetriminos treffen aufeinander; PS5-Region vor Fehlervergleichen prüfen.",
   "fr": "Chaînes Puyo et Tetriminos se croisent ; vérifiez la région PS5 avant comparaison.",
   "es": "Combina cadenas Puyo y Tetriminos; verifica la región PS5 al comparar fallos."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA01530. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA01530；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA01530؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA01530; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA01530; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA01530 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA01530; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "魔法气泡 俄罗斯方块 2"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "ea-sports-fc-27": {
  "genre": "sports",
  "overview": {
   "en": "EA’s football game has a large bundled-module stack. A rendered splash says little about matches or online services.",
   "zh": "EA 足球作品带有大量自带模块；显示启动画面不能说明比赛或在线服务可用。",
   "ar": "لعبة كرة قدم بوحدات كثيرة؛ شاشة البداية لا تثبت مباريات أو خدمات شبكة.",
   "pt": "Futebol com muitos módulos incluídos; ecrã inicial não comprova partidas ou serviços online.",
   "de": "Fußball mit vielen Gastmodulen; Startbild belegt weder Matches noch Onlinedienste.",
   "fr": "Football et nombreux modules fournis ; un écran initial ne prouve pas matchs ou services en ligne.",
   "es": "Fútbol con muchos módulos incluidos; pantalla inicial no prueba partidos ni servicios online."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA34015. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA34015；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA34015؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA34015; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA34015; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA34015 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA34015; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "EA SPORTS FC 27"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "tevi": {
  "genre": "platform",
  "overview": {
   "en": "Tevi explores connected areas with melee combos and bullet patterns. Track room changes and controller responses alongside frame counters.",
   "zh": "Tevi 在相连区域探索，结合近战连招和弹幕；计数之外也需核对过房间和手柄响应。",
   "ar": "تستكشف Tevi مناطق مترابطة بقتال ومقذوفات؛ افحص انتقال الغرف والتحكم مع العدّاد.",
   "pt": "Tevi explora áreas ligadas entre combos e projéteis; confirme transições e comandos além do contador.",
   "de": "Tevi erkundet verbundene Gebiete mit Combos und Projektilen; Raumwechsel und Steuerung neben FPS prüfen.",
   "fr": "Tevi explore des zones reliées entre combos et projectiles ; vérifiez transitions et commandes au-delà du compteur.",
   "es": "Tevi explora zonas conectadas entre combos y proyectiles; comprueba transiciones y controles además del contador."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA21112. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA21112；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA21112؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA21112; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA21112; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA21112 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA21112; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "TEVI"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "quake": {
  "genre": "shooter",
  "overview": {
   "en": "The enhanced Quake release revisits its first-person campaign. This PS5 title is separate from vkQuake homebrew and compile-only shader studies.",
   "zh": "强化版 Quake 重现第一人称战役；此 PS5 作品与 vkQuake 自制版及纯着色器编译研究分开。",
   "ar": "إصدار Quake المحسن منفصل عن vkQuake homebrew ودراسات ترجمة shaders فقط.",
   "pt": "Quake melhorado é separado do homebrew vkQuake e dos estudos só de compilação.",
   "de": "Die erweiterte Quake-Fassung bleibt getrennt von vkQuake-Homebrew und reinen Shaderstudien.",
   "fr": "Quake amélioré reste distinct du homebrew vkQuake et des études de compilation seules.",
   "es": "Quake mejorado se separa de vkQuake homebrew y de estudios solo de compilación."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA01880. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA01880；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA01880؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA01880; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA01880; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA01880 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA01880; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "雷神之锤"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "lodoss-deedlit": {
  "genre": "platform",
  "overview": {
   "en": "Deedlit explores a connected fantasy labyrinth with spirit-assisted combat. Readable story pages are an early step before movement and battles.",
   "zh": "蒂德莉特借精灵之力探索幻想迷宫并战斗；可读故事页只是移动、战斗之前的早期阶段。",
   "ar": "تستكشف Deedlit متاهة بخوض قتال مع الأرواح؛ القصة المقروءة تسبق الحركة والمعارك.",
   "pt": "Deedlit explora um labirinto com espíritos; história legível precede movimento e batalhas.",
   "de": "Deedlit erkundet ein Labyrinth mit Geisterkräften; lesbare Erzählseiten liegen vor Bewegung und Kämpfen.",
   "fr": "Deedlit explore un labyrinthe avec les esprits ; récit lisible précède déplacements et combats.",
   "es": "Deedlit explora un laberinto con espíritus; historia legible precede movimiento y combate."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA05347. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA05347；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA05347؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA05347; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA05347; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA05347 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA05347; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "罗德斯岛战记：蒂德莉特的奇境迷宫冒险"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "super-mario-sunshine-homebrew": {
  "genre": "platform",
  "overview": {
   "en": "This community PS5 port has its own low-address memory and user-disc requirements. It is not an official Sony or Nintendo PS5 release.",
   "zh": "社区 PS5 移植版有低地址内存和用户光盘数据要求，并非 Sony 或任天堂的官方 PS5 发行版。",
   "ar": "نقل PS5 مجتمعي بمتطلبات ذاكرة وقرص المستخدم؛ ليس إصدار Sony أو Nintendo رسمي.",
   "pt": "Port comunitário com memória baixa e disco próprio; não é edição PS5 oficial Sony/Nintendo.",
   "de": "Community-Port mit niedrigem Adressraum und eigener Disc; keine offizielle Sony-/Nintendo-PS5-Ausgabe.",
   "fr": "Port communautaire avec mémoire basse et disque personnel ; pas d’édition PS5 officielle Sony/Nintendo.",
   "es": "Port comunitario con memoria baja y disco propio; no es edición PS5 oficial Sony/Nintendo."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA99312. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA99312；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA99312؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA99312; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA99312; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA99312 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA99312; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "超级马力欧阳光 · PS5 自制移植版"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "goosebumps-terror-little-creek": {
  "genre": "adventure",
  "overview": {
   "en": "Sloane investigates Little Creek through puzzles and encounters inspired by Goosebumps. A save-tutorial crash needs a successful reload check before stronger claims.",
   "zh": "Sloane 通过谜题和怪物遭遇调查 Little Creek；存档教程崩溃仍需成功读档证据后再下更强结论。",
   "ar": "تحقق Sloane في Little Creek بألغاز ومخلوقات؛ فشل تعليم الحفظ يحتاج إعادة تحميل ناجحة.",
   "pt": "Sloane investiga Little Creek com puzzles e monstros; falha no tutorial de save pede recarga verificada.",
   "de": "Sloane untersucht Little Creek mit Rätseln und Monstern; Speicher-Tutorialfehler braucht bestätigte Ladeprüfung.",
   "fr": "Sloane enquête à Little Creek entre énigmes et monstres ; échec au tutoriel de sauvegarde exige un rechargement vérifié.",
   "es": "Sloane investiga Little Creek con puzles y monstruos; fallo en tutorial de guardado requiere recarga verificada."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA27305. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA27305；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA27305؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA27305; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA27305; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA27305 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA27305; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "Goosebumps: Terror in Little Creek"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "plants-vs-zombies-replanted": {
  "genre": "puzzle",
  "overview": {
   "en": "Plant-based defenses protect lanes from zombie waves in this remaster. The PS5 report covers actual planting and combat, with completion still unclaimed.",
   "zh": "重制版以植物防线抵御僵尸；PS5 报告涉及实际种植和战斗，但未宣称通关。",
   "ar": "دفاعات نباتية ضد موجات زومبي؛ تقرير PS5 يوثق زراعة وقتالاً لا إكمالاً.",
   "pt": "Defesas vegetais enfrentam zombies; relato PS5 cobre plantar e combater, sem conclusão integral.",
   "de": "Pflanzen verteidigen gegen Zombie-Wellen; PS5-Bericht zeigt Pflanzen und Kampf, kein Durchspielen.",
   "fr": "Les plantes défendent contre les zombies ; rapport PS5 couvre plantation et combat, sans fin complète.",
   "es": "Plantas defienden de oleadas zombis; informe PS5 cubre plantar y combatir, sin completar."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA29802. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA29802；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA29802؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA29802; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA29802; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA29802 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA29802; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "植物大战僵尸：重植版"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "code-violet": {
  "genre": "action",
  "overview": {
   "en": "Violet navigates a dinosaur-filled science-fiction survival setting. Broken menu geometry and slow counters precede any campaign verdict.",
   "zh": "Violet 在恐龙出没的科幻环境求生；破碎菜单几何与低速计数仍不足以下战役结论。",
   "ar": "بقاء خيال علمي وديناصورات؛ هندسة القائمة المكسورة والبطء تسبقان تقييم الحملة.",
   "pt": "Sobrevivência de ficção científica com dinossauros; geometria de menu e lentidão precedem qualquer veredito da campanha.",
   "de": "Science-Fiction-Survival mit Dinosauriern; kaputte Menügeometrie und niedrige Zähler erlauben kein Kampagnenurteil.",
   "fr": "Survie de science-fiction avec dinosaures ; géométrie de menu brisée et lenteur précèdent tout verdict campagne.",
   "es": "Supervivencia de ciencia ficción con dinosaurios; geometría rota de menú y lentitud impiden valorar campaña."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA26528. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA26528；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA26528؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA26528; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA26528; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA26528 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA26528; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "Code Violet"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "blasphemous-2-ppsa13580": {
  "genre": "platform",
  "overview": {
   "en": "This separately catalogued US edition follows the Penitent One through connected combat areas. Its opening boss test does not establish later expansion content.",
   "zh": "单独收录的美版随忏悔者探索战斗区域；开场 Boss 测试不能证明后续扩展内容。",
   "ar": "إصدار أمريكي منفصل لمغامرة التائب؛ أول زعيم لا يثبت محتوى التوسعات.",
   "pt": "Edição americana separada da aventura do Penitente; primeiro chefe não prova expansões.",
   "de": "Separat erfasste US-Ausgabe um den Büßer; erster Boss belegt keine Erweiterungen.",
   "fr": "Édition américaine distincte du Pénitent ; premier boss ne prouve pas les extensions.",
   "es": "Edición estadounidense separada del Penitente; primer jefe no prueba expansiones."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA13580. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA13580；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA13580؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA13580; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA13580; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA13580 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA13580; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "渎神 2 · PPSA13580"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "little-nightmares-enhanced": {
  "genre": "adventure",
  "overview": {
   "en": "Six’s unsettling puzzle adventure is the Enhanced Edition here. Keep its PS5 executable and saves separate from the original PS4 game.",
   "zh": "这里收录 Six 的诡异解谜冒险增强版；PS5 程序和存档与原 PS4 游戏分开。",
   "ar": "مغامرة Six بنسختها المحسنة؛ افصل برنامج وحفظ PS5 عن PS4 الأصلي.",
   "pt": "Aventura de Six na Enhanced Edition; executável e saves PS5 separados do PS4 original.",
   "de": "Six’ Abenteuer als Enhanced Edition; PS5-Programm und Speicherstände getrennt von PS4.",
   "fr": "Aventure de Six en Enhanced Edition ; programme et sauvegardes PS5 distincts de PS4.",
   "es": "Aventura de Six en Enhanced Edition; ejecutable y partidas PS5 separados del PS4 original."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA10737. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA10737；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA10737؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA10737; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA10737; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA10737 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA10737; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "小小梦魇：增强版"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "horizon-call-of-the-mountain": {
  "genre": "adventure",
  "overview": {
   "en": "Ryas climbs and fights in a PS VR2 adventure. A desktop Vulkan window cannot replace headset tracking, stereoscopic rendering or Sense controls.",
   "zh": "Ryas 在 PS VR2 冒险中攀爬战斗；桌面 Vulkan 窗口不能代替头显追踪、立体渲染和 Sense 操作。",
   "ar": "مغامرة Ryas في PS VR2؛ نافذة Vulkan لا تعوض تتبع النظارة أو الرؤية المجسمة وSense.",
   "pt": "Aventura PS VR2 de Ryas; janela Vulkan não substitui rastreio, estereoscopia ou Sense.",
   "de": "Ryas’ PS-VR2-Abenteuer; Vulkan-Fenster ersetzt weder Tracking, Stereoskopie noch Sense.",
   "fr": "Aventure PS VR2 de Ryas ; fenêtre Vulkan ne remplace ni suivi, stéréoscopie ni Sense.",
   "es": "Aventura PS VR2 de Ryas; ventana Vulkan no sustituye seguimiento, estereoscopía ni Sense."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA05666. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA05666；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA05666؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA05666; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA05666; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA05666 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA05666; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "地平线：山之呼唤"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "mxgp-26": {
  "genre": "racing",
  "overview": {
   "en": "The 2026 motocross game focuses on changing track surfaces and rider control. Loading-screen shader failures do not measure racing performance.",
   "zh": "2026 越野摩托作品关注变化的赛道与骑手控制；加载屏着色器失败不能测出比赛性能。",
   "ar": "موتوكروس2026 بحلبات متغيرة؛ فشل shader بالتحميل لا يقيس السباق.",
   "pt": "Motocross2026 em pistas variáveis; falha shader na carga não mede corridas.",
   "de": "Motocross2026 mit veränderlichen Strecken; Lade-Shaderfehler messen keine Rennleistung.",
   "fr": "Motocross2026 et pistes changeantes ; échecs shader au chargement ne mesurent pas les courses.",
   "es": "Motocross2026 con pistas cambiantes; fallos shader cargando no miden carreras."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA30839. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA30839；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA30839؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA30839; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA30839; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA30839 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA30839; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "MXGP 26"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "borderlands-4": {
  "genre": "shooter",
  "overview": {
   "en": "The loot-focused shooter has a distinct PS5 pipeline workload. A driver compile crash must be separated from an in-game rendering or frame-rate result.",
   "zh": "刷宝射击的 PS5 pipeline 工作负载需要独立核对；驱动编译崩溃与游戏渲染／帧数结果分开。",
   "ar": "تصويب وغنائم بعبء PS5 خاص؛ انهيار ترجمة التعريف ليس نتيجة رسم أو FPS لعب.",
   "pt": "Shooter de saque com carga PS5 própria; falha de compilação do driver não é resultado gráfico/FPS de jogo.",
   "de": "Loot-Shooter mit eigener PS5-Pipelinelast; Treiber-Kompilierabsturz getrennt von Rendering-/FPS-Spielergebnissen.",
   "fr": "Tir et butin avec pipelines PS5 propres ; plantage de compilation pilote distinct du rendu/FPS en jeu.",
   "es": "Shooter de botín con pipelines PS5 propios; fallo de compilación del driver separado de renderizado/FPS jugables."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA01494. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA01494；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA01494؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA01494; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA01494; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA01494 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA01494; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "无主之地 4"
  },
  "related": [
   "astro-bot",
   "stray"
  ]
 },
 "sackboy-big-adventure": {
  "genre": "platform",
  "overview": {
   "en": "Sackboy’s platform stages require working geometry and input after startup. Missing mesh-shader support remains a concrete limit on the reported RX 5700 XT.",
   "zh": "麻布仔的平台关卡需在启动后核对几何与操作；报告中的 RX5700XT 缺 mesh shader 仍是明确限制。",
   "ar": "منصات Sackboy تحتاج رسماً وتحكماً بعد البدء؛ غياب mesh على RX5700XT قيد موثق.",
   "pt": "Plataformas Sackboy precisam de geometria/comandos após arranque; ausência mesh na RX5700XT é limite concreto.",
   "de": "Sackboy braucht nach dem Start Geometrie und Eingaben; fehlende Mesh-Unterstützung auf RX5700XT bleibt Grenze.",
   "fr": "Sackboy requiert géométrie/commandes après démarrage ; absence mesh sur RX5700XT reste une limite.",
   "es": "Sackboy necesita geometría/controles tras inicio; ausencia mesh en RX5700XT sigue siendo límite."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA01289. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA01289；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA01289؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA01289; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA01289; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA01289 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA01289; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "麻布仔大冒险"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 },
 "sonic-unleashed-recompiled": {
  "genre": "platform",
  "overview": {
   "en": "This community PS5 adaptation of a recompiled Sonic project remains a conditional bring-up. Component tests and loading movies are separate from running a level.",
   "zh": "重编译索尼克项目的社区 PS5 适配仍是条件启动实验；组件测试、加载电影与实际关卡分开。",
   "ar": "تكييف PS5 مجتمعي لمشروع Sonic معاد الترجمة؛ اختبارات المكونات والفيلم ليست لعب مستوى.",
   "pt": "Adaptação PS5 comunitária de Sonic recompilado; testes e filme não são um nível jogado.",
   "de": "Community-PS5-Adaption eines Sonic-Rekompilats; Komponententests und Film sind kein gespielter Level.",
   "fr": "Adaptation PS5 communautaire de Sonic recompilé ; tests et film distincts d’un niveau joué.",
   "es": "Adaptación PS5 comunitaria de Sonic recompilado; pruebas y vídeo separados de jugar un nivel."
  },
  "editionNote": {
   "en": "Reports on this page identify PPSA99902. Promotional artwork does not establish the tested region, content version or AnyPS5 rendering.",
   "zh": "本页报告编号为 PPSA99902；宣传图不能证明实测地区、内容版本或 AnyPS5 渲染。",
   "ar": "معرّف التقارير PPSA99902؛ الفن الدعائي لا يثبت المنطقة أو النسخة أو رسم AnyPS5.",
   "pt": "Relatos identificam PPSA99902; arte promocional não prova região, versão ou imagem AnyPS5.",
   "de": "Berichte nennen PPSA99902; Werbebilder belegen weder Region, Inhaltsversion noch AnyPS5-Rendering.",
   "fr": "Rapports identifiés PPSA99902 ; illustrations promotionnelles ne prouvent ni région, version ni rendu AnyPS5.",
   "es": "Informes identifican PPSA99902; arte promocional no prueba región, versión ni renderizado AnyPS5."
  },
  "names": {
   "zh": "索尼克世界大冒险 重编译 · PS5 自制版"
  },
  "related": [
   "hollow-knight-silksong",
   "dreaming-sarah"
  ]
 }
});

for(const [slug,note] of Object.entries({
 "blasphemous-2-ppsa13580": {
  "en": "The promotional cover carries The Third Sin branding; it does not establish that the reported build contains or tests that content.",
  "zh": "宣传封面带有 The Third Sin 标识；不能据此判定报告包含或测试该内容。",
  "ar": "الغلاف يحمل The Third Sin؛ لا يثبت وجود أو اختبار ذلك المحتوى.",
  "pt": "A capa mostra The Third Sin; não prova esse conteúdo no teste.",
  "de": "Das Werbecover trägt The Third Sin; kein Nachweis dieses Inhalts im Test.",
  "fr": "La couverture porte The Third Sin ; contenu non établi dans le test.",
  "es": "La portada muestra The Third Sin; no prueba ese contenido en el test."
 },
 "borderlands-4": {
  "en": "The promotional cover carries Super Deluxe Edition branding; it does not establish that the reported build contains or tests that content.",
  "zh": "宣传封面带有 Super Deluxe Edition 标识；不能据此判定报告包含或测试该内容。",
  "ar": "الغلاف يحمل Super Deluxe Edition؛ لا يثبت وجود أو اختبار ذلك المحتوى.",
  "pt": "A capa mostra Super Deluxe Edition; não prova esse conteúdo no teste.",
  "de": "Das Werbecover trägt Super Deluxe Edition; kein Nachweis dieses Inhalts im Test.",
  "fr": "La couverture porte Super Deluxe Edition ; contenu non établi dans le test.",
  "es": "La portada muestra Super Deluxe Edition; no prueba ese contenido en el test."
 },
 "puyo-puyo-tetris-2": {
  "en": "Report PPSA01530; the linked promotional Store artwork is PPSA01937. Shared branding is not a region or runtime test.",
  "zh": "报告为 PPSA01530；链接商店宣传图为 PPSA01937。相同品牌不代表同地区或运行实测。",
  "ar": "التقرير PPSA01530 والفن PPSA01937؛ العلامة لا تثبت المنطقة أو التشغيل.",
  "pt": "Relato PPSA01530, arte PPSA01937; marca igual não prova região/teste.",
  "de": "Bericht PPSA01530, Werbung PPSA01937; gleiche Marke belegt keine Region/Laufprüfung.",
  "fr": "Rapport PPSA01530, illustration PPSA01937 ; marque commune ne prouve pas région/test.",
  "es": "Informe PPSA01530, arte PPSA01937; marca común no prueba región/test."
 }
})){for(const locale of Object.keys(note) as (keyof Text)[]){editorial[slug].editionNote[locale]+=" "+note[locale];}}
Object.assign(editorial,{
 "hot-wheels-infinite-rush": {
  "genre": "racing",
  "overview": {
   "en": "Toy-car racing across islands; compare garage and race scenes separately.",
   "zh": "玩具车跨岛竞速；车库与赛道画面分别比较。",
   "ar": "سباقات سيارات مصغرة؛ قارن المرآب والسباق منفصلين.",
   "pt": "Corridas de miniaturas; compare garagem e pista separadamente.",
   "de": "Spielzeugautorennen; Garage und Strecke getrennt vergleichen.",
   "fr": "Courses miniatures ; distinguez garage et piste.",
   "es": "Carreras en miniatura; compara garaje y pista por separado."
  },
  "editionNote": {
   "en": "Reports identify PPSA22408; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA22408；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA22408؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA22408; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA22408; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA22408 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA22408; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "风火轮 Infinite Rush"
  }
 },
 "silent-hill-f": {
  "genre": "action",
  "overview": {
   "en": "Horror exploration needs readable terrain beyond the title menu.",
   "zh": "恐怖探索需要菜单之外可读的地形画面。",
   "ar": "استكشاف رعب يتطلب أرضاً مقروءة بعد القائمة.",
   "pt": "Exploração de terror exige terreno legível além do menu.",
   "de": "Horrorerkundung braucht lesbares Gelände hinter dem Menü.",
   "fr": "L’horreur exige un terrain lisible au-delà du menu.",
   "es": "Exploración de terror requiere terreno legible tras el menú."
  },
  "editionNote": {
   "en": "Reports identify PPSA21159; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA21159；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA21159؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA21159; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA21159; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA21159 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA21159; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "寂静岭 f"
  }
 },
 "mlb-the-show-26": {
  "genre": "sports",
  "overview": {
   "en": "Baseball matches require a rendered field, players and responsive controls.",
   "zh": "棒球比赛需验证球场、球员画面及操作响应。",
   "ar": "مباريات البيسبول تحتاج ملعباً ولاعبين وتحكماً.",
   "pt": "Basebol exige campo, jogadores e comandos funcionais.",
   "de": "Baseball benötigt Spielfeld, Spieler und funktionierende Eingaben.",
   "fr": "Le baseball exige terrain, joueurs et commandes fonctionnels.",
   "es": "Béisbol requiere campo, jugadores y controles funcionales."
  },
  "editionNote": {
   "en": "Reports identify PPSA30630; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA30630；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA30630؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA30630; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA30630; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA30630 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA30630; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "MLB The Show 26"
  }
 },
 "toem": {
  "genre": "puzzle",
  "overview": {
   "en": "A photographic adventure; test camera interactions and progression, not just a counter.",
   "zh": "摄影冒险需测试相机交互和推进，不能只看计数。",
   "ar": "مغامرة تصوير؛ اختبر الكاميرا والتقدم لا العدّاد فقط.",
   "pt": "Aventura fotográfica; teste câmara e progressão além do contador.",
   "de": "Fotoabenteuer; Kamera und Fortschritt neben Zählern prüfen.",
   "fr": "Aventure photographique ; testez appareil et progression au-delà du compteur.",
   "es": "Aventura fotográfica; prueba cámara y progreso además del contador."
  },
  "editionNote": {
   "en": "Reports identify PPSA04354; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA04354；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA04354؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA04354; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA04354; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA04354 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA04354; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "TOEM"
  }
 },
 "ship-of-fools": {
  "genre": "roguelike",
  "overview": {
   "en": "A seafaring roguelike; combat and cooperative sessions need their own evidence.",
   "zh": "航海Roguelike；战斗与合作游玩需独立证据。",
   "ar": "روغلايك بحري؛ القتال والتعاون يحتاجان أدلة مستقلة.",
   "pt": "Roguelike marítimo; combate e cooperação pedem provas próprias.",
   "de": "Seefahrts-Roguelike; Kampf und Koop brauchen eigene Belege.",
   "fr": "Roguelike maritime ; combat et coopération exigent des preuves distinctes.",
   "es": "Roguelike marítimo; combate y cooperación requieren pruebas propias."
  },
  "editionNote": {
   "en": "Reports identify PPSA07582; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA07582；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA07582؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA07582; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA07582; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA07582 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA07582; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "Ship of Fools"
  }
 },
 "yakuza-0-directors-cut": {
  "genre": "action",
  "overview": {
   "en": "Story and combat begin after menu setup; loading is a separate milestone.",
   "zh": "剧情与战斗在菜单设置后开始，加载另算一个阶段。",
   "ar": "القصة والقتال بعد القائمة؛ التحميل مرحلة منفصلة.",
   "pt": "História/combate após menu; carga é etapa separada.",
   "de": "Geschichte/Kampf folgen Menü; Laden ist eigener Meilenstein.",
   "fr": "Histoire/combat après menu ; chargement distinct.",
   "es": "Historia/combate tras menú; carga es etapa distinta."
  },
  "editionNote": {
   "en": "Reports identify PPSA31327; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA31327；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA31327؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA31327; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA31327; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA31327 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA31327; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "如龙 0 Director’s Cut"
  }
 },
 "mandragora": {
  "genre": "rpg",
  "overview": {
   "en": "Side-scrolling action RPG; introductory video speed cannot describe combat performance.",
   "zh": "横版动作RPG；片头视频速度不能代表战斗性能。",
   "ar": "أكشنRPG جانبي؛ سرعة المقدمة لا تصف القتال.",
   "pt": "RPG lateral; velocidade da intro não mede combate.",
   "de": "Seitliches Action-RPG; Introtempo misst keine Kampfleistung.",
   "fr": "Action-RPG latéral ; vitesse d’intro ne mesure pas combat.",
   "es": "RPG lateral; velocidad de intro no mide combate."
  },
  "editionNote": {
   "en": "Reports identify PPSA06960; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA06960；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA06960؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA06960; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA06960; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA06960 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA06960; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "Mandragora"
  }
 },
 "gris": {
  "genre": "platform",
  "overview": {
   "en": "A visual platform adventure; track movement, sound and save continuity together.",
   "zh": "视觉平台冒险；同时核对移动、声音和存档连续性。",
   "ar": "مغامرة منصات بصرية؛ تحقق من الحركة والصوت والحفظ.",
   "pt": "Aventura visual; confira movimento, som e continuidade.",
   "de": "Visuelles Plattformabenteuer; Bewegung, Ton und Speicherfortsetzung prüfen.",
   "fr": "Aventure visuelle ; vérifiez mouvement, son et sauvegarde.",
   "es": "Aventura visual; comprueba movimiento, sonido y continuidad."
  },
  "editionNote": {
   "en": "Reports identify PPSA09804; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA09804；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA09804؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA09804; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA09804; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA09804 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA09804; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "GRIS"
  }
 },
 "soul-hackers-2": {
  "genre": "turnBasedRpg",
  "overview": {
   "en": "Field exploration and turn-based combat have different frame-time workloads.",
   "zh": "场地探索与回合制战斗的帧时间负载不同。",
   "ar": "الاستكشاف والقتال بالأدوار لهما حمل مختلف.",
   "pt": "Exploração e combate por turnos têm cargas distintas.",
   "de": "Erkundung und Rundenkampf haben verschiedene Bildzeitlasten.",
   "fr": "Exploration et combat par tours ont des charges distinctes.",
   "es": "Exploración y combate por turnos tienen cargas distintas."
  },
  "editionNote": {
   "en": "Reports identify PPSA03743; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA03743；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA03743؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA03743; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA03743; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA03743 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA03743; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "灵魂骇客 2"
  }
 },
 "double-dragon-gaiden": {
  "genre": "action",
  "overview": {
   "en": "Character selection precedes beat-em-up stages; verify attacks and enemy encounters.",
   "zh": "选人之后才是清版战斗关卡，需核验攻击和敌人遭遇。",
   "ar": "اختيار الشخصية يسبق القتال؛ تحقق من الهجمات والأعداء.",
   "pt": "Seleção precede combate; verifique ataques e inimigos.",
   "de": "Figurenwahl liegt vor Kämpfen; Angriffe und Gegner prüfen.",
   "fr": "Sélection avant combat ; vérifiez attaques et ennemis.",
   "es": "Selección antes del combate; verifica ataques y enemigos."
  },
  "editionNote": {
   "en": "Reports identify PPSA16018; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA16018；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA16018؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA16018; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA16018; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA16018 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA16018; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "双截龙外传：双龙出海"
  }
 },
 "dragon-ball-xenoverse-2": {
  "genre": "action",
  "overview": {
   "en": "Dragon Ball battles require working scenes after logos and menus.",
   "zh": "七龙珠战斗需在Logo和菜单之后验证实际场景。",
   "ar": "قتال Dragon Ball يحتاج مشاهد بعد الشعارات والقوائم.",
   "pt": "Batalhas Dragon Ball exigem cenas após logótipos/menus.",
   "de": "Dragon-Ball-Kämpfe benötigen Szenen nach Logos/Menüs.",
   "fr": "Combats Dragon Ball exigent scènes après logos/menus.",
   "es": "Batallas Dragon Ball requieren escenas tras logos/menús."
  },
  "editionNote": {
   "en": "Reports identify PPSA08587; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA08587；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA08587؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA08587; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA08587; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA08587 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA08587; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "七龙珠 异战 2"
  }
 },
 "eternights": {
  "genre": "rpg",
  "overview": {
   "en": "Action and story scenes may stress different paths; autosave recovery matters.",
   "zh": "动作与剧情场景负载不同，自动存档恢复也需核对。",
   "ar": "الأكشن والقصة مختلفان؛ تحقق من استعادة الحفظ الآلي.",
   "pt": "Ação e história diferem; recuperação de autosave importa.",
   "de": "Action und Geschichte unterscheiden sich; Autosave-Wiederherstellung prüfen.",
   "fr": "Action et récit diffèrent ; vérifiez récupération autosave.",
   "es": "Acción e historia difieren; comprueba recuperación autosave."
  },
  "editionNote": {
   "en": "Reports identify PPSA08270; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA08270；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA08270؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA08270; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA08270; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA08270 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA08270; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "永夜"
  }
 },
 "evergate": {
  "genre": "platform",
  "overview": {
   "en": "Puzzle platforming needs visible levels; black-frame counters are not progress.",
   "zh": "解谜平台关卡需要可见画面；黑帧计数不是游戏进展。",
   "ar": "منصات ألغاز تحتاج مشهداً؛ عداد الأسود ليس تقدماً.",
   "pt": "Puzzles/plataformas precisam de imagem; contador preto não é progresso.",
   "de": "Rätselplattformen brauchen Bild; Schwarzbildzähler ist kein Fortschritt.",
   "fr": "Plateformes/énigmes exigent image ; compteur noir pas progrès.",
   "es": "Puzles/plataformas necesitan imagen; contador negro no es progreso."
  },
  "editionNote": {
   "en": "Reports identify PPSA01886; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA01886；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA01886؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA01886; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA01886; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA01886 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA01886; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "Evergate"
  }
 },
 "quake-ii": {
  "genre": "shooter",
  "overview": {
   "en": "The enhanced retail PS5 release is separate from Yamagi Quake II homebrew.",
   "zh": "PS5零售增强版与Yamagi Quake II自制版分开。",
   "ar": "إصدار PS5 التجاري منفصل عن Yamagi homebrew.",
   "pt": "Edição PS5 comercial separada de Yamagi homebrew.",
   "de": "PS5-Retailausgabe getrennt von Yamagi-Homebrew.",
   "fr": "Édition PS5 commerciale distincte de Yamagi homebrew.",
   "es": "Edición PS5 comercial separada de Yamagi homebrew."
  },
  "editionNote": {
   "en": "Reports identify PPSA09477; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA09477；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA09477؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA09477; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA09477; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA09477 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA09477; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "quake",
   "doom-homebrew"
  ],
  "names": {
   "zh": "雷神之锤 II"
  }
 },
 "love-is-all-around": {
  "genre": "adventure",
  "overview": {
   "en": "Interactive live-action storytelling; video output, choices and save continuity are separate checks.",
   "zh": "真人互动叙事需分别核验视频、选项及存档连续性。",
   "ar": "سرد تفاعلي مصور؛ الفيديو والخيارات والحفظ فحوص منفصلة.",
   "pt": "Narrativa filmada interativa; vídeo, escolhas e saves são verificações distintas.",
   "de": "Interaktiver Realfilm; Video, Entscheidungen und Speichern separat prüfen.",
   "fr": "Récit filmé interactif ; vidéo, choix et sauvegarde à vérifier séparément.",
   "es": "Narrativa filmada interactiva; vídeo, decisiones y guardado se verifican aparte."
  },
  "editionNote": {
   "en": "Reports identify PPSA22999; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA22999；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA22999؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA22999; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA22999; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA22999 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA22999; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "完蛋！我被美女包围了！"
  }
 },
 "cocoon": {
  "genre": "puzzle",
  "overview": {
   "en": "World-carrying puzzles need interaction beyond shader and driver test fixtures.",
   "zh": "携带世界的解谜交互需实际验证，不能用着色器／驱动用例替代。",
   "ar": "ألغاز العوالم تحتاج تفاعلاً لا اختبارات shader فقط.",
   "pt": "Puzzles de mundos exigem interação além dos testes shader.",
   "de": "Weltenrätsel brauchen Interaktion über Shader-Tests hinaus.",
   "fr": "Énigmes de mondes exigent interaction au-delà des tests shader.",
   "es": "Puzles de mundos requieren interacción además de tests shader."
  },
  "editionNote": {
   "en": "Reports identify PPSA08766; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA08766；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA08766؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA08766; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA08766; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA08766 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA08766; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "茧 COCOON"
  }
 },
 "uncharted-legacy-of-thieves": {
  "genre": "action",
  "overview": {
   "en": "The boat and orphanage observations cover Uncharted 4; developer level select is not campaign completion.",
   "zh": "船与孤儿院观察针对神秘海域4；开发者选关不代表战役通关。",
   "ar": "القارب والميتم منUncharted4؛ اختيار المطور ليس إكمال الحملة.",
   "pt": "Barco/orfanato deUncharted4; seleção de nível não conclui campanha.",
   "de": "Boot/Waisenhaus ausUncharted4; Levelwahl ist kein Kampagnenabschluss.",
   "fr": "Bateau/orphelinat d’Uncharted4 ; sélection de niveau pas fin de campagne.",
   "es": "Barco/orfanato deUncharted4; selección de nivel no completa campaña."
  },
  "editionNote": {
   "en": "Reports identify PPSA05684; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA05684；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA05684؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA05684; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA05684; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA05684 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA05684; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "神秘海域：盗贼传奇合辑"
  }
 },
 "star-wars-dark-forces-remaster": {
  "genre": "shooter",
  "overview": {
   "en": "First-person missions; a completed opening mission does not validate later missions or PDA stability.",
   "zh": "第一人称任务；完成首任务不能证明后续任务或PDA稳定性。",
   "ar": "مهمات تصويب؛ أول مهمة لا تثبت البقية أو استقرارPDA.",
   "pt": "Missões de tiro; primeira missão não valida restantes ouPDA.",
   "de": "Shooter-Missionen; erste Mission bestätigt weder Rest nochPDA-Stabilität.",
   "fr": "Missions de tir ; première mission ne valide pas suite ouPDA.",
   "es": "Misiones de disparos; primera misión no valida resto niPDA."
  },
  "editionNote": {
   "en": "Reports identify PPSA19728; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA19728；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA19728؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA19728; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA19728; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA19728 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA19728; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "quake",
   "doom-homebrew"
  ],
  "names": {
   "zh": "星球大战：黑暗原力 重制版"
  }
 },
 "xashps5-homebrew": {
  "genre": "shooter",
  "overview": {
   "en": "Community engine port requiring user Half-Life data; not an official PS5 Half-Life release.",
   "zh": "需用户Half-Life数据的社区引擎移植，并非官方PS5半条命发行版。",
   "ar": "نقل مجتمعي يحتاج بيانات Half-Life الخاصة، لا إصدار PS5 رسمي.",
   "pt": "Port comunitário exige dados próprios Half-Life, não edição PS5 oficial.",
   "de": "Community-Port mit eigenen Half-Life-Daten, keine offizielle PS5-Ausgabe.",
   "fr": "Port communautaire exige données Half-Life personnelles, pas édition PS5 officielle.",
   "es": "Port comunitario requiere datos Half-Life propios, no edición PS5 oficial."
  },
  "editionNote": {
   "en": "Community homebrew PPSA19111, separate from official retail releases; content version is unknown unless stated in a report.",
   "zh": "社区自制版PPSA19111，与官方零售发行版分开；未在报告注明的内容版本保持未知。",
   "ar": "Homebrew مجتمعي PPSA19111 لا retail؛ النسخة مجهولة إن لم تُذكر.",
   "pt": "Homebrew comunitário PPSA19111, separado de retail; versão desconhecida se omitida.",
   "de": "Community-Homebrew PPSA19111, getrennt von Retail; Version unbekannt falls nicht genannt.",
   "fr": "Homebrew communautaire PPSA19111, distinct du commerce ; version inconnue si absente.",
   "es": "Homebrew comunitario PPSA19111, separado de retail; versión desconocida si ausente."
  },
  "related": [
   "quake",
   "doom-homebrew"
  ],
  "names": {
   "zh": "XashPS5 · 社区移植版"
  }
 },
 "prospero-puzzles-homebrew": {
  "genre": "puzzle",
  "overview": {
   "en": "Open-source puzzle collection using a PS5 OpenGL layer and multisampled canvas.",
   "zh": "使用PS5 OpenGL层和多重采样画布的开源解谜合集。",
   "ar": "ألغاز مفتوحة المصدر بطبقة PS5 OpenGL وMSAA.",
   "pt": "Puzzles abertos com PS5 OpenGL e canvas MSAA.",
   "de": "Offene Rätselsammlung mit PS5-OpenGL und MSAA.",
   "fr": "Énigmes libres avec PS5 OpenGL et canvas MSAA.",
   "es": "Puzles abiertos con PS5 OpenGL y lienzo MSAA."
  },
  "editionNote": {
   "en": "Community homebrew PPSA99006, separate from official retail releases; content version is unknown unless stated in a report.",
   "zh": "社区自制版PPSA99006，与官方零售发行版分开；未在报告注明的内容版本保持未知。",
   "ar": "Homebrew مجتمعي PPSA99006 لا retail؛ النسخة مجهولة إن لم تُذكر.",
   "pt": "Homebrew comunitário PPSA99006, separado de retail; versão desconhecida se omitida.",
   "de": "Community-Homebrew PPSA99006, getrennt von Retail; Version unbekannt falls nicht genannt.",
   "fr": "Homebrew communautaire PPSA99006, distinct du commerce ; version inconnue si absente.",
   "es": "Homebrew comunitario PPSA99006, separado de retail; versión desconocida si ausente."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "ProsperoPuzzles · 自制游戏"
  }
 },
 "capy-mobile-homebrew": {
  "genre": "puzzle",
  "overview": {
   "en": "Catalog homebrew with a snake game; Intel GPU evidence is scoped to the named display setup.",
   "zh": "包含贪吃蛇的目录自制游戏；Intel证据仅限所列显示配置。",
   "ar": "Homebrew بلعبة snake؛ دليل Intel محدد بإعداد العرض.",
   "pt": "Homebrew com snake; prova Intel limitada ao ecrã indicado.",
   "de": "Homebrew mit Snake; Intel-Beleg gilt für genanntes Displaysetup.",
   "fr": "Homebrew avec snake ; preuve Intel limitée à cet affichage.",
   "es": "Homebrew con snake; prueba Intel limitada al entorno de pantalla."
  },
  "editionNote": {
   "en": "Community homebrew PPSA92280, separate from official retail releases; content version is unknown unless stated in a report.",
   "zh": "社区自制版PPSA92280，与官方零售发行版分开；未在报告注明的内容版本保持未知。",
   "ar": "Homebrew مجتمعي PPSA92280 لا retail؛ النسخة مجهولة إن لم تُذكر.",
   "pt": "Homebrew comunitário PPSA92280, separado de retail; versão desconhecida se omitida.",
   "de": "Community-Homebrew PPSA92280, getrennt von Retail; Version unbekannt falls nicht genannt.",
   "fr": "Homebrew communautaire PPSA92280, distinct du commerce ; version inconnue si absente.",
   "es": "Homebrew comunitario PPSA92280, separado de retail; versión desconocida si ausente."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "CapyMobile · 自制游戏"
  }
 },
 "yamagi-quake-ii-homebrew": {
  "genre": "shooter",
  "overview": {
   "en": "Community Quake II port; its package and display workarounds differ from retail PPSA09477.",
   "zh": "社区Quake II移植，包和显示绕行与零售PPSA09477不同。",
   "ar": "نقل QuakeII مجتمعي؛ الحزمة والعرض غير retail09477.",
   "pt": "Port QuakeII comunitário; pacote/ecrã distintos de retail09477.",
   "de": "Community-QuakeII; Paket/Display getrennt von Retail09477.",
   "fr": "QuakeII communautaire ; paquet/affichage distincts de retail09477.",
   "es": "QuakeII comunitario; paquete/pantalla distintos de retail09477."
  },
  "editionNote": {
   "en": "Community homebrew PPSA99007, separate from official retail releases; content version is unknown unless stated in a report.",
   "zh": "社区自制版PPSA99007，与官方零售发行版分开；未在报告注明的内容版本保持未知。",
   "ar": "Homebrew مجتمعي PPSA99007 لا retail؛ النسخة مجهولة إن لم تُذكر.",
   "pt": "Homebrew comunitário PPSA99007, separado de retail; versão desconhecida se omitida.",
   "de": "Community-Homebrew PPSA99007, getrennt von Retail; Version unbekannt falls nicht genannt.",
   "fr": "Homebrew communautaire PPSA99007, distinct du commerce ; version inconnue si absente.",
   "es": "Homebrew comunitario PPSA99007, separado de retail; versión desconocida si ausente."
  },
  "related": [
   "quake",
   "doom-homebrew"
  ],
  "names": {
   "zh": "Yamagi Quake II · 自制移植版"
  }
 },
 "lego-batman-legacy-dark-knight": {
  "genre": "action",
  "overview": {
   "en": "Exploration, object smashing and stud collection need testing beyond a menu-only boot.",
   "zh": "探索、砸物与收集studs需超出菜单启动验证。",
   "ar": "استكشاف وتحطيم وجمع studs تحتاج اختباراً بعد القائمة.",
   "pt": "Exploração, destruir objetos e recolher studs além do menu.",
   "de": "Erkunden, Objekte zerschlagen und Studs sammeln über Menü hinaus prüfen.",
   "fr": "Explorer, détruire et collecter des studs au-delà du menu.",
   "es": "Explorar, destruir y recoger studs más allá del menú."
  },
  "editionNote": {
   "en": "Reports identify PPSA16833; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA16833；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA16833؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA16833; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA16833; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA16833 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA16833; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "乐高蝙蝠侠：黑暗骑士传奇"
  }
 },
 "broken-sword-reforged": {
  "genre": "adventure",
  "overview": {
   "en": "Adventure remaster; an audio-decoder stop alone does not identify a visible game stage.",
   "zh": "冒险重制版；仅音频解码停止不能确定可见游戏阶段。",
   "ar": "مغامرة معاد صنعها؛ توقف decoder لا يحدد مشهداً مرئياً.",
   "pt": "Aventura refeita; falha decoder não identifica fase visível.",
   "de": "Adventure-Remaster; Decoder-Stopp bestimmt keine sichtbare Spielphase.",
   "fr": "Aventure remasterisée ; arrêt decoder ne définit pas une phase visible.",
   "es": "Aventura remasterizada; fallo decoder no identifica fase visible."
  },
  "editionNote": {
   "en": "Reports identify PPSA21480; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA21480；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA21480؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA21480; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA21480; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA21480 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA21480; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "断剑：圣堂武士之谜 Reforged"
  }
 },
 "ea-sports-ufc-5": {
  "genre": "sports",
  "overview": {
   "en": "Mixed martial arts; an animated loading badge cannot establish a working fight.",
   "zh": "综合格斗；动态加载图标不能证明实际比赛可用。",
   "ar": "فنون قتالية؛ رمز تحميل متحرك لا يثبت مباراة.",
   "pt": "Artes marciais; ícone animado não prova combate.",
   "de": "Kampfsport; animiertes Ladesymbol belegt keinen Kampf.",
   "fr": "Arts martiaux ; icône animée ne prouve pas combat.",
   "es": "Artes marciales; icono animado no prueba combate."
  },
  "editionNote": {
   "en": "Reports identify PPSA03541; compare the recorded content version, build and patches. Publisher artwork is not an AnyPS5 capture.",
   "zh": "报告标识PPSA03541；请核对各次内容版本、构建与补丁。发行商宣传图不是AnyPS5实测。",
   "ar": "التقارير تخص PPSA03541؛ قارن النسخة والبناء والترقيع. صور الناشر ليست AnyPS5.",
   "pt": "Relatos identificam PPSA03541; compare versão, build e patches. Arte promocional não é captura AnyPS5.",
   "de": "Berichte zu PPSA03541; Version, Build und Patches vergleichen. Werbebilder sind keine AnyPS5-Aufnahmen.",
   "fr": "Rapports PPSA03541 ; comparez version, build et patches. Visuels promotionnels ne sont pas AnyPS5.",
   "es": "Informes PPSA03541; compara versión, build y parches. Arte promocional no es captura AnyPS5."
  },
  "related": [
   "astro-bot",
   "animal-well"
  ],
  "names": {
   "zh": "EA SPORTS UFC 5"
  }
 }
});
Object.assign(editorial,{
 "devil-may-cry-5-special-edition": {
  "genre": "action",
  "overview": {
   "en": "Action scenes expose missing geometry; a prologue image does not prove responsive combat.",
   "zh": "动作场景会暴露几何缺失；序章画面不能证明战斗响应。",
   "ar": "مشاهد الأكشن تكشف هندسة ناقصة؛ المقدمة لا تثبت القتال.",
   "pt": "Cenas de ação expõem geometria ausente; a intro não prova combate.",
   "de": "Actionszenen zeigen Geometriefehler; ein Intro bestätigt keinen Kampf.",
   "fr": "Les scènes révèlent la géométrie absente ; une intro ne prouve pas le combat.",
   "es": "La acción revela geometría ausente; la intro no demuestra combate."
  },
  "editionNote": {
   "en": "Reports identify PPSA01442; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA01442；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA01442 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA01442 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA01442 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA01442 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA01442 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "鬼泣5 特别版"
  }
 },
 "mgs-delta-snake-eater": {
  "genre": "action",
  "overview": {
   "en": "Opening cinematics and player-controlled stealth require separate evidence.",
   "zh": "开场过场与可操作潜行需分别验证。",
   "ar": "المقدمة والتسلل المتحكم يحتاجان أدلة منفصلة.",
   "pt": "Cinemáticas e furtividade controlável exigem provas distintas.",
   "de": "Intro und steuerbares Schleichen brauchen getrennte Belege.",
   "fr": "Cinématiques et infiltration contrôlée exigent des preuves distinctes.",
   "es": "Cinemáticas y sigilo controlable requieren pruebas distintas."
  },
  "editionNote": {
   "en": "Reports identify PPSA15304; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA15304；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA15304 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA15304 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA15304 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA15304 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA15304 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "合金装备Δ：食蛇者"
  }
 },
 "middle-ages-ping-pong-homebrew": {
  "genre": "sports",
  "overview": {
   "en": "A homebrew ball game; score changes establish more than a static menu.",
   "zh": "自制球类游戏；比分变化比静态菜单更能说明交互。",
   "ar": "لعبة كرة منزلية؛ تغير النتيجة يثبت أكثر من القائمة.",
   "pt": "Jogo caseiro de bola; a pontuação prova mais que um menu.",
   "de": "Homebrew-Ballspiel; Punktwechsel belegen mehr als ein Menü.",
   "fr": "Jeu de balle amateur ; le score prouve davantage qu’un menu.",
   "es": "Juego casero de pelota; el marcador prueba más que un menú."
  },
  "editionNote": {
   "en": "Community homebrew PPSA28319, separate from official retail releases. A catalog tag is not the tested content version.",
   "zh": "社区自制版PPSA28319，与官方零售版分开；目录标签不是实测内容版本。",
   "ar": "Homebrew PPSA28319 منفصل عن الإصدار الرسمي؛ وسم الكتالوج ليس نسخة المحتوى.",
   "pt": "Homebrew PPSA28319 separado de retail; tag de catálogo não é versão testada.",
   "de": "Homebrew PPSA28319 getrennt von Retail; Katalogtag ist keine getestete Version.",
   "fr": "Homebrew PPSA28319 distinct du commerce ; tag du catalogue pas version testée.",
   "es": "Homebrew PPSA28319 separado de retail; etiqueta no es versión probada."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "Middle Ages Ping Pong · 自制游戏"
  }
 },
 "silent-hill-short-message": {
  "genre": "adventure",
  "overview": {
   "en": "Walking and door interactions are verified within a short run, without completion evidence.",
   "zh": "短时运行验证走动和开门，未证明通关。",
   "ar": "مشي وأبواب موثقة لفترة قصيرة، بلا إكمال.",
   "pt": "Caminhar e portas verificados numa sessão curta, sem conclusão.",
   "de": "Gehen und Türen kurz bestätigt, kein Abschluss.",
   "fr": "Marche et portes vérifiées brièvement, sans preuve de fin.",
   "es": "Caminar y puertas verificados brevemente, sin completar."
  },
  "editionNote": {
   "en": "Reports identify PPSA10112; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA10112；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA10112 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA10112 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA10112 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA10112 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA10112 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "寂静岭：短讯"
  }
 },
 "alan-wake-2": {
  "genre": "adventure",
  "overview": {
   "en": "An agreement screen is distinct from playable horror exploration.",
   "zh": "协议界面与可操作恐怖探索分开。",
   "ar": "شاشة الاتفاق منفصلة عن استكشاف قابل للعب.",
   "pt": "Ecrã de acordo distinto de exploração jogável.",
   "de": "Zustimmungsbildschirm getrennt von spielbarer Erkundung.",
   "fr": "Écran d’accord distinct de l’exploration jouable.",
   "es": "Pantalla de acuerdo separada de exploración jugable."
  },
  "editionNote": {
   "en": "Reports identify PPSA02572; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA02572；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA02572 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA02572 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA02572 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA02572 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA02572 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "心灵杀手2"
  }
 },
 "control-resonant": {
  "genre": "action",
  "overview": {
   "en": "Setup responsiveness does not establish a rendered combat encounter.",
   "zh": "设置响应不能证明实际战斗场景。",
   "ar": "استجابة الإعداد لا تثبت مشهد قتال.",
   "pt": "Configuração responsiva não prova combate.",
   "de": "Reagierendes Setup bestätigt keinen Kampf.",
   "fr": "Réactivité des réglages ne prouve pas le combat.",
   "es": "Configuración reactiva no demuestra combate."
  },
  "editionNote": {
   "en": "Reports identify PPSA34547; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA34547；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA34547 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA34547 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA34547 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA34547 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA34547 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "CONTROL Resonant"
  }
 },
 "infliction-extended-cut": {
  "genre": "adventure",
  "overview": {
   "en": "Room objectives can advance while dark lighting still obscures the scene.",
   "zh": "房间目标可推进，但昏暗照明仍影响画面可读性。",
   "ar": "أهداف الغرفة تتقدم مع إضاءة مظلمة تعيق الرؤية.",
   "pt": "Objetivos avançam, mas a luz escura dificulta a leitura.",
   "de": "Raumziele schreiten fort, dunkle Beleuchtung bleibt.",
   "fr": "Les objectifs avancent malgré une lumière très sombre.",
   "es": "Objetivos avanzan pese a iluminación muy oscura."
  },
  "editionNote": {
   "en": "Reports identify PPSA02688; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA02688；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA02688 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA02688 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA02688 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA02688 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA02688 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "Infliction: Extended Cut"
  }
 },
 "samurai-maiden": {
  "genre": "action",
  "overview": {
   "en": "Unresponsive key art and a present counter do not establish a functioning menu.",
   "zh": "无响应主视觉加呈现计数不构成可用菜单。",
   "ar": "صورة ساكنة وعدّاد لا يثبتان قائمة عاملة.",
   "pt": "Arte sem resposta e contador não provam menu funcional.",
   "de": "Starres Motiv und Zähler belegen kein nutzbares Menü.",
   "fr": "Visuel inerte et compteur ne prouvent pas un menu fonctionnel.",
   "es": "Arte inmóvil y contador no demuestran menú funcional."
  },
  "editionNote": {
   "en": "Reports identify PPSA04132; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA04132；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA04132 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA04132 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA04132 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA04132 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA04132 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "SAMURAI MAIDEN"
  }
 },
 "demon-slayer-hinokami": {
  "genre": "action",
  "overview": {
   "en": "Early fights run slowly; opening-movie speed and first-action stalls differ.",
   "zh": "早期战斗运行缓慢；片头速度与首次动作停顿分别记录。",
   "ar": "قتال مبكر بطيء؛ المقدمة وتوقف أول حركة مختلفان.",
   "pt": "Combates iniciais lentos; intro e pausa da primeira ação diferem.",
   "de": "Frühe Kämpfe langsam; Intro und Erstaktionspausen getrennt.",
   "fr": "Combats initiaux lents ; intro et pauses initiales distinctes.",
   "es": "Combates iniciales lentos; intro y pausas de primera acción distintas."
  },
  "editionNote": {
   "en": "Reports identify PPSA03490; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA03490；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA03490 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA03490 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA03490 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA03490 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA03490 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "鬼灭之刃 火之神血风谭"
  }
 },
 "override-2": {
  "genre": "action",
  "overview": {
   "en": "Training input works, but severe geometry corruption remains in manual play.",
   "zh": "训练输入可用，但手动游玩仍有严重几何损坏。",
   "ar": "تحكم التدريب يعمل مع فساد هندسي شديد في اللعب.",
   "pt": "Treino responde, mas jogo manual mantém geometria corrompida.",
   "de": "Training reagiert, manuelles Spiel mit starken Geometriefehlern.",
   "fr": "Entraînement réactif, jeu manuel avec géométrie très corrompue.",
   "es": "Entrenamiento responde, juego manual con geometría corrupta."
  },
  "editionNote": {
   "en": "Reports identify PPSA01907; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA01907；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA01907 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA01907 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA01907 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA01907 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA01907 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "Override 2: Super Mech League"
  }
 },
 "love-is-all-around-2": {
  "genre": "adventure",
  "overview": {
   "en": "Interactive video progress needs separate checks for choices, sound and saves.",
   "zh": "互动影像推进还需分别核验选项、声音和存档。",
   "ar": "تقدم الفيديو يحتاج فحص الخيارات والصوت والحفظ.",
   "pt": "Vídeo interativo exige verificar escolhas, som e saves.",
   "de": "Interaktiver Film braucht Prüfungen für Auswahl, Ton und Speichern.",
   "fr": "Vidéo interactive : vérifier choix, son et sauvegarde.",
   "es": "Vídeo interactivo requiere comprobar elecciones, audio y guardado."
  },
  "editionNote": {
   "en": "Reports identify PPSA31909; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA31909；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA31909 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA31909 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA31909 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA31909 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA31909 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "完蛋！我被美女包围了！2"
  }
 },
 "hello-neighbor": {
  "genre": "adventure",
  "overview": {
   "en": "Continue-based street measurements do not retest the failing second cutscene.",
   "zh": "Continue街道测量不会重测出错的第二过场。",
   "ar": "قياس الشارع عبر Continue لا يعيد فحص انهيار المقدمة الثانية.",
   "pt": "Medições de rua via Continue não repetem a segunda cinemática.",
   "de": "Continue-Straßentests wiederholen nicht die zweite Cutscene.",
   "fr": "Mesures de rue via Continue sans retest de la deuxième cinématique.",
   "es": "Mediciones de calle con Continue no repiten segunda cinemática."
  },
  "editionNote": {
   "en": "Reports identify PPSA35154; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA35154；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA35154 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA35154 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA35154 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA35154 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA35154 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "你好邻居"
  }
 },
 "dragon-quest-vii-reimagined": {
  "genre": "rpg",
  "overview": {
   "en": "Area exploration and menus have different speeds; black opening video remains a gap.",
   "zh": "区域探索与菜单速度不同，开场视频黑屏仍是缺口。",
   "ar": "المنطقة والقائمة بسرعات مختلفة، الافتتاحية سوداء.",
   "pt": "Exploração e menus com velocidades distintas; intro preta.",
   "de": "Erkundung und Menü verschieden schnell, Intro schwarz.",
   "fr": "Exploration et menus à vitesses distinctes ; intro noire.",
   "es": "Exploración y menús a velocidades distintas; intro negra."
  },
  "editionNote": {
   "en": "Reports identify PPSA17942; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA17942；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA17942 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA17942 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA17942 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA17942 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA17942 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "勇者斗恶龙VII Reimagined"
  }
 },
 "gta-iii-definitive": {
  "genre": "action",
  "overview": {
   "en": "Continuous black presents do not establish Liberty City exploration.",
   "zh": "持续黑帧呈现不能证明自由城探索。",
   "ar": "إطارات سوداء مستمرة لا تثبت استكشاف المدينة.",
   "pt": "Apresentações pretas não provam exploração da cidade.",
   "de": "Schwarze Presents belegen keine Stadterkundung.",
   "fr": "Images noires continues ne prouvent pas l’exploration.",
   "es": "Imágenes negras continuas no demuestran exploración."
  },
  "editionNote": {
   "en": "Reports identify PPSA03527; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA03527；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA03527 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA03527 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA03527 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA03527 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA03527 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "侠盗猎车手III 最终版"
  }
 },
 "furi": {
  "genre": "action",
  "overview": {
   "en": "A tutorial encounter precedes a repeatable audio-engine crash.",
   "zh": "教程遭遇后仍有可重复的音频引擎崩溃。",
   "ar": "مواجهة تدريب قبل انهيار محرك صوت متكرر.",
   "pt": "Encontro tutorial antes de crash de áudio repetível.",
   "de": "Tutorialbegegnung vor wiederholbarem Audioabsturz.",
   "fr": "Rencontre du tutoriel avant un plantage audio reproductible.",
   "es": "Encuentro tutorial antes de fallo de audio repetible."
  },
  "editionNote": {
   "en": "Reports identify PPSA06147; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA06147；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA06147 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA06147 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA06147 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA06147 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA06147 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "Furi"
  }
 },
 "one-night-stand": {
  "genre": "adventure",
  "overview": {
   "en": "Dialogue and a save prompt are visible; a full save/load cycle remains untested.",
   "zh": "对话与存档提示可见，完整存读档往返未测。",
   "ar": "حوار وحفظ ظاهران، دورة حفظ/تحميل غير مختبرة.",
   "pt": "Diálogo e aviso de save visíveis; recarga não testada.",
   "de": "Dialog und Speicherhinweis sichtbar, Laden ungeprüft.",
   "fr": "Dialogue et invite de sauvegarde visibles, rechargement non testé.",
   "es": "Diálogo y aviso de guardado visibles, recarga sin probar."
  },
  "editionNote": {
   "en": "Reports identify PPSA03030; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA03030；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA03030 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA03030 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA03030 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA03030 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA03030 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "One Night Stand"
  }
 },
 "lego-horizon-adventures": {
  "genre": "action",
  "overview": {
   "en": "Brief stick movement verifies control while missing body parts remain.",
   "zh": "短暂摇杆移动验证操作，但身体部件仍缺失。",
   "ar": "حركة عصا قصيرة تثبت التحكم مع أجزاء جسم ناقصة.",
   "pt": "Breve movimento confirma controlo, com partes ausentes.",
   "de": "Kurze Stickbewegung bestätigt Eingaben, Körperteile fehlen.",
   "fr": "Bref mouvement confirme le contrôle, parties du corps absentes.",
   "es": "Breve movimiento confirma control, faltan partes del cuerpo."
  },
  "editionNote": {
   "en": "Reports identify PPSA14632; retain each content version, build and patches. Promotional art is not an AnyPS5 capture.",
   "zh": "报告标识PPSA14632；保留各次内容版本、构建与补丁，宣传图不是AnyPS5实测。",
   "ar": "تقارير PPSA14632 بنسخها وبنائها وترقيعها؛ الدعاية ليست تصوير AnyPS5.",
   "pt": "Relatos PPSA14632 mantêm versão, build e patches; arte não é captura AnyPS5.",
   "de": "Berichte PPSA14632 behalten Version, Build und Patches; Werbung ist keine AnyPS5-Aufnahme.",
   "fr": "Rapports PPSA14632 avec version, build et patches ; publicité pas capture AnyPS5.",
   "es": "Informes PPSA14632 conservan versión, build y parches; publicidad no es captura AnyPS5."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "乐高地平线大冒险"
  }
 },
 "rekhcom-homebrew": {
  "genre": "action",
  "overview": {
   "en": "A community recompilation; surviving a brief GPU probe is not gameplay.",
   "zh": "社区重编译版；短时GPU探测未崩溃不等于游玩。",
   "ar": "إعادة ترجمة مجتمعية؛ بقاء اختبار GPU ليس لعباً.",
   "pt": "Recompilação comunitária; sobreviver a prova GPU não é jogar.",
   "de": "Community-Rekompilat; kurzer GPU-Test ist kein Gameplay.",
   "fr": "Recompilation communautaire ; survivre au test GPU ne prouve pas le jeu.",
   "es": "Recompilación comunitaria; sobrevivir a prueba GPU no es jugar."
  },
  "editionNote": {
   "en": "Community homebrew PPSA98511, separate from official retail releases. A catalog tag is not the tested content version.",
   "zh": "社区自制版PPSA98511，与官方零售版分开；目录标签不是实测内容版本。",
   "ar": "Homebrew PPSA98511 منفصل عن الإصدار الرسمي؛ وسم الكتالوج ليس نسخة المحتوى.",
   "pt": "Homebrew PPSA98511 separado de retail; tag de catálogo não é versão testada.",
   "de": "Homebrew PPSA98511 getrennt von Retail; Katalogtag ist keine getestete Version.",
   "fr": "Homebrew PPSA98511 distinct du commerce ; tag du catalogue pas version testée.",
   "es": "Homebrew PPSA98511 separado de retail; etiqueta no es versión probada."
  },
  "related": [
   "mgs-peace-walker",
   "hades"
  ],
  "names": {
   "zh": "ReKHCoM · 社区重编译版"
  }
 }
});
Object.assign(editorial,{
 "resident-evil-4-ppsa07412": {
  "genre": "action",
  "overview": {
   "en": "A separately identified PS5 edition; a shader stop does not inherit another PPSA’s result.",
   "zh": "单独标识的PS5版本；着色器故障不继承另一PPSA结果。",
   "ar": "نسخة PS5 مستقلة؛ فشل shader لا يرث نتيجة PPSA آخر.",
   "pt": "Edição PS5 distinta; falha shader não herda outro PPSA.",
   "de": "Eigene PS5-Ausgabe; Shaderstopp übernimmt kein anderes PPSA-Ergebnis.",
   "fr": "Édition PS5 distincte ; arrêt shader sans reprendre un autre PPSA.",
   "es": "Edición PS5 distinta; fallo shader no hereda otro PPSA."
  },
  "editionNote": {
   "en": "PPSA07412; content version and region are not supplied. Keep separate from PPSA07411.",
   "zh": "PPSA07412，来源未给内容版本或地区，与PPSA07411分开。",
   "ar": "PPSA07412؛ النسخة والمنطقة غير مذكورتين، منفصل07411.",
   "pt": "PPSA07412; versão/região omitidas, separado07411.",
   "de": "PPSA07412; Version/Region fehlen, getrennt07411.",
   "fr": "PPSA07412 ; version/région absentes, distinct07411.",
   "es": "PPSA07412; versión/región ausentes, separado07411."
  },
  "related": [
   "resident-evil-4-remake",
   "resident-evil-village"
  ],
  "names": {
   "zh": "生化危机4 · PPSA07412"
  }
 }
});
Object.assign(editorial,{
 "tekken-dark-resurrection": {
  "genre": "action",
  "overview": {
   "en": "The PS5 PSPHD reissue stops after its controller prompt; an internal RUNNING label is not gameplay.",
   "zh": "PS5 PSPHD重发行版在手柄提示后停止，内部RUNNING标签不代表游戏过程。",
   "ar": "إعادة إصدارPSPHD علىPS5 تتوقف بعد المطالبة، RUNNING ليس لعباً.",
   "pt": "ReediçãoPSPHD naPS5 para após prompt, RUNNING não é jogo.",
   "de": "PS5-PSPHD-Neuauflage stoppt nach Eingabehinweis; RUNNING kein Gameplay.",
   "fr": "RééditionPSPHD surPS5 arrêtée après invite ; RUNNING pas jeu.",
   "es": "ReediciónPSPHD enPS5 para tras aviso; RUNNING no es juego."
  },
  "editionNote": {
   "en": "PPSA31371 v01.000.002 is the reported PS5 package; it is not evidence from an independent PSP emulator.",
   "zh": "报告PS5包为PPSA31371 v01.000.002，不是独立PSP模拟器结果。",
   "ar": "حزمةPS5 PPSA31371 v01.000.002، ليست اختبار محاكيPSP مستقل.",
   "pt": "PacotePS5 PPSA31371 v01.000.002, não teste de emuladorPSP independente.",
   "de": "PS5-Paket PPSA31371 v01.000.002, kein separater PSP-Emulatortest.",
   "fr": "PaquetPS5 PPSA31371 v01.000.002, pas émulateurPSP indépendant.",
   "es": "PaquetePS5 PPSA31371 v01.000.002, no emuladorPSP independiente."
  },
  "related": [
   "demon-slayer-hinokami",
   "mgs-peace-walker"
  ],
  "names": {
   "zh": "铁拳 DARK RESURRECTION"
  }
 }
});
Object.assign(editorial,{
 "mgs-master-vol2-bonus": {
  "genre": "action",
  "overview": {
   "en": "Bonus Content is a separate application; its failed boot cannot rate every collection game.",
   "zh": "Bonus Content是独立应用，启动失败不能给整个合集内游戏评级。",
   "ar": "Bonus Content تطبيق منفصل؛ فشله لا يقيم كل المجموعة.",
   "pt": "Bonus Content é aplicação distinta; falhar não classifica toda a coleção.",
   "de": "Bonus Content ist eine eigene App; ihr Startfehler bewertet nicht alle Sammlungsspiele.",
   "fr": "Bonus Content est une application distincte ; son échec ne classe pas toute la collection.",
   "es": "Bonus Content es una aplicación distinta; su fallo no valora toda la colección."
  },
  "names": {
   "zh": "合金装备 大师合集Vol.2 Bonus Content"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA24040. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA24040；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA24040، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA24040; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA24040; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA24040 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA24040; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "warhammer-40k-boltgun": {
  "genre": "action",
  "overview": {
   "en": "Audio and save reload strengthen this short gameplay report, while nine minutes leave later levels open.",
   "zh": "声音和存读档增加短时游玩证据，但九分钟仍不能说明后续关卡。",
   "ar": "الصوت وإعادة الحفظ يدعمان اللعب القصير، لا المراحل اللاحقة.",
   "pt": "Som e recarga reforçam sessão curta, não níveis posteriores.",
   "de": "Ton und Laden stützen den Kurztest, spätere Level bleiben offen.",
   "fr": "Son et rechargement renforcent le test court, pas les niveaux suivants.",
   "es": "Audio y recarga refuerzan el test corto, no niveles posteriores."
  },
  "names": {
   "zh": "战锤40,000：爆矢枪"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA07247. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA07247；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA07247، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA07247; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA07247; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA07247 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA07247; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "ea-sports-fc-25": {
  "genre": "sports",
  "overview": {
   "en": "An animated stadium menu is not a tested football match.",
   "zh": "动态球场菜单不等于实测足球比赛。",
   "ar": "قائمة ملعب متحركة ليست مباراة مختبرة.",
   "pt": "Menu animado não é uma partida testada.",
   "de": "Animiertes Stadionmenü ist kein getestetes Match.",
   "fr": "Menu de stade animé sans match testé.",
   "es": "Menú de estadio animado sin partido probado."
  },
  "names": {
   "zh": "EA SPORTS FC 25"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA20049. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA20049；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA20049، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA20049; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA20049; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA20049 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA20049; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "robocop-unfinished-business": {
  "genre": "action",
  "overview": {
   "en": "A loaded save proves scene access; cold preparation and menu rendering still need separate checks.",
   "zh": "加载存档证明场景可达，冷启动准备与菜单渲染仍需分别检查。",
   "ar": "الحفظ يثبت بلوغ المشهد، والتحضير البارد والقائمة فحصان منفصلان.",
   "pt": "Save prova acesso à cena; preparação fria e menu separados.",
   "de": "Spielstand belegt Szenenzugang; kalte Vorbereitung und Menü getrennt prüfen.",
   "fr": "Save prouve l’accès à la scène ; préparation froide et menu distincts.",
   "es": "Save prueba acceso a escena; preparación fría y menú separados."
  },
  "names": {
   "zh": "机械战警：暴戾都市 未竟之事"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA28329. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA28329；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA28329، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA28329; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA28329; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA28329 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA28329; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "assassins-creed-mirage": {
  "genre": "action",
  "overview": {
   "en": "Passing publisher videos does not demonstrate entry to the world.",
   "zh": "通过发行商视频不能证明进入游戏世界。",
   "ar": "اجتياز الفيديو لا يثبت دخول العالم.",
   "pt": "Passar vídeos não prova entrada no mundo.",
   "de": "Publisher-Videos belegen keinen Weltzugang.",
   "fr": "Passer les vidéos ne prouve pas l’accès au monde.",
   "es": "Pasar vídeos no prueba entrada al mundo."
  },
  "names": {
   "zh": "刺客信条：幻景"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA13960. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA13960；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA13960، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA13960; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA13960; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA13960 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA13960; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "mafia-old-country": {
  "genre": "action",
  "overview": {
   "en": "HDR setup responsiveness is useful evidence but remains distinct from gameplay rendering.",
   "zh": "HDR设置响应有参考价值，仍需与游戏过程渲染分开。",
   "ar": "استجابة HDR مفيدة لكنها ليست رسم اللعب.",
   "pt": "Resposta HDR é útil mas distinta de jogo.",
   "de": "Reagierendes HDR-Setup ist hilfreich, bleibt getrennt vom Gameplay.",
   "fr": "Réglage HDR réactif utile, distinct du jeu.",
   "es": "Ajuste HDR reactivo útil, distinto del juego."
  },
  "names": {
   "zh": "四海兄弟：故乡"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA14299. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA14299；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA14299، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA14299; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA14299; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA14299 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA14299; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "snoopy-great-mystery-club": {
  "genre": "adventure",
  "overview": {
   "en": "Picking up an item is distinct from verifying it survives a save reload.",
   "zh": "拾取道具与验证存读档后道具仍在，是两种证据。",
   "ar": "التقاط عنصر لا يثبت بقاءه بعد تحميل الحفظ.",
   "pt": "Apanhar item não confirma persistência após carregar.",
   "de": "Aufheben belegt keine Persistenz nach Laden.",
   "fr": "Ramasser ne prouve pas la persistance après rechargement.",
   "es": "Recoger no prueba persistencia al recargar."
  },
  "names": {
   "zh": "史努比与神秘大侦探"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA28795. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA28795；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA28795، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA28795; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA28795; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA28795 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA28795; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "jurassic-park-classic-collection": {
  "genre": "action",
  "overview": {
   "en": "A collection result covers the tested portions, not automatically every included game.",
   "zh": "合集结果只覆盖所测片段，不自动扩展到所有内含游戏。",
   "ar": "نتيجة مجموعة تشمل الأجزاء المختبرة فقط.",
   "pt": "Resultado da coleção cobre só partes testadas.",
   "de": "Sammlungsergebnis gilt nur für getestete Teile.",
   "fr": "Résultat de collection limité aux portions testées.",
   "es": "Resultado de colección limitado a partes probadas."
  },
  "names": {
   "zh": "侏罗纪公园 经典游戏合集"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA17217. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA17217；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA17217، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA17217; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA17217; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA17217 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA17217; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "anger-foot": {
  "genre": "action",
  "overview": {
   "en": "Walking is reached, but profiling a draw bottleneck does not demonstrate a speedup.",
   "zh": "已经到走动，但分析出绘制瓶颈不等于已实现提速。",
   "ar": "المشي متاح، تشخيص الاختناق لا يثبت التسريع.",
   "pt": "Andar confirmado; perfil não prova melhoria.",
   "de": "Gehen erreicht, Profilbefund belegt keinen Geschwindigkeitsgewinn.",
   "fr": "Marche atteinte, profil sans gain de vitesse démontré.",
   "es": "Caminar alcanzado, perfil sin mejora demostrada."
  },
  "names": {
   "zh": "愤怒的大脚"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA29043. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA29043；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA29043، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA29043; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA29043; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA29043 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA29043; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "absolum": {
  "genre": "action",
  "overview": {
   "en": "A license prompt responds, while combat remains behind an untested transition.",
   "zh": "许可提示可响应，战斗仍在未测试的后续流程。",
   "ar": "الترخيص يستجيب، القتال لم يختبر.",
   "pt": "Licença responde, combate ainda não testado.",
   "de": "Lizenz reagiert, Kampf bleibt ungeprüft.",
   "fr": "Licence réactive, combat encore non testé.",
   "es": "Licencia reactiva, combate sin probar."
  },
  "names": {
   "zh": "Absolum"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA28311. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA28311；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA28311، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA28311; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA28311; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA28311 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA28311; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "sao-last-recollection": {
  "genre": "rpg",
  "overview": {
   "en": "Opening cinematics and the first playable scene have different measured rates.",
   "zh": "开场过场与首个游戏场景的测量速度不同。",
   "ar": "المقدمة وأول مشهد لعب لهما سرعتان مختلفتان.",
   "pt": "Intro e primeira cena têm taxas distintas.",
   "de": "Intro und erste Spielszene haben verschiedene Raten.",
   "fr": "Introduction et première scène ont des débits distincts.",
   "es": "Intro y primera escena tienen tasas distintas."
  },
  "names": {
   "zh": "刀剑神域 异绊集结"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA06958. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA06958；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA06958، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA06958; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA06958; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA06958 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA06958; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "gta-v-ppsa04263": {
  "genre": "action",
  "overview": {
   "en": "This EU package has its own version and an unidentified patch; results cannot be transferred to another PPSA.",
   "zh": "此欧版包有独立版本且补丁身份未明，不能把结果转移到另一PPSA。",
   "ar": "حزمة EU بنسختها وترقيع مجهول، لا تنقل النتيجة لPPSA آخر.",
   "pt": "Pacote EU com versão/patch próprio, sem transferir a outroPPSA.",
   "de": "EU-Paket mit eigener Version/unbekanntem Patch, keine Übertragung auf anderes PPSA.",
   "fr": "Paquet EU avec version/patch propre, sans transfert à autre PPSA.",
   "es": "Paquete EU con versión/parche propio, sin trasladar a otro PPSA."
  },
  "names": {
   "zh": "侠盗猎车手V · 欧版"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA04263. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA04263；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA04263، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA04263; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA04263; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA04263 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA04263; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 },
 "rogue-prince-of-persia": {
  "genre": "action",
  "overview": {
   "en": "Preparation fails before runtime: no rendering or play result can be inferred.",
   "zh": "运行前准备失败，不能据此推断画面或游玩结果。",
   "ar": "التحضير يفشل قبل التشغيل، لا يستنتج رسم أو لعب.",
   "pt": "Preparação falha antes de executar, sem inferir imagem/jogo.",
   "de": "Vorbereitung scheitert vor Laufzeit, kein Rendering/Gameplay ableitbar.",
   "fr": "Préparation échoue avant exécution, aucun rendu/jeu déduit.",
   "es": "Preparación falla antes de ejecutar, sin deducir imagen/juego."
  },
  "names": {
   "zh": "波斯王子：Rogue"
  },
  "related": [
   "quake-ii",
   "hades"
  ],
  "editionNote": {
   "en": "Report package PPSA28155. Keep each tested version, runtime and patch stack. Publisher artwork does not establish the tested region, DLC or AnyPS5 rendering.",
   "zh": "报告包PPSA28155；按各次版本、运行时及补丁栈阅读。发行商宣传图不能证明实测地区、DLC或AnyPS5画面。",
   "ar": "حزمة PPSA28155، احتفظ بالنسخة والبناء والترقيع؛ الدعاية لا تثبت المنطقة أوDLC أو رسم AnyPS5.",
   "pt": "Pacote PPSA28155; mantenha versão/build/patches. Arte não prova região/DLC/renderização AnyPS5.",
   "de": "Paket PPSA28155; Version/Runtime/Patches beachten. Werbung belegt keine Region/DLC/AnyPS5-Darstellung.",
   "fr": "Paquet PPSA28155 ; conserver version/runtime/patches. Publicité ne prouve ni région/DLC/rendu AnyPS5.",
   "es": "Paquete PPSA28155; conserva versión/runtime/parches. Arte no prueba región/DLC/renderizado AnyPS5."
  }
 }
});
Object.assign(editorial,{
 "echoes-of-aincrad": {
  "genre": "rpg",
  "overview": {
   "en": "Create an adventurer in Aincrad. A cave checkpoint leaves later battles and world exploration untested.",
   "zh": "在艾恩葛朗特创建冒险者；洞穴检查点尚不覆盖后续战斗与世界探索。",
   "ar": "اصنع مغامراً فيAincrad؛ اختبارالكهف لايغطي المعارك والاستكشاف اللاحق.",
   "pt": "Cria aventureiro emAincrad; a prova da caverna deixa batalhas/exploração posteriores em aberto.",
   "de": "Erstelle einen Abenteurer inAincrad; Höhlentest lässt spätere Kämpfe/Erkundung offen.",
   "fr": "Créez un aventurier dansAincrad ; le test de grotte laisse combats/exploration ultérieurs ouverts.",
   "es": "Crea aventurero enAincrad; el test de cueva deja batallas/exploración posteriores abiertas."
  },
  "names": {
   "zh": "刀剑神域：艾恩葛朗特回响"
  },
  "related": [
   "superliminal",
   "lego-builders-journey"
  ],
  "editionNote": {
   "en": "Reported package PPSA22969. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA22969，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA22969؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA22969; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA22969; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA22969 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA22969; versión/parches por observación, imágenes promocionales."
  }
 },
 "tomba-special-edition": {
  "genre": "action",
  "overview": {
   "en": "A colourful platform adventure returns in this edition. Verify saving separately from loading a saved game.",
   "zh": "彩色平台冒险的新版本；需把保存与重载已有存档分开验证。",
   "ar": "مغامرةمنصات ملوّنة بهذاالإصدار؛ الحفظ وإعادةالتحميل اختبارانمنفصلان.",
   "pt": "Aventura de plataformas colorida nesta edição; guardar e recarregar são verificações distintas.",
   "de": "Buntes Plattformabenteuer in dieserEdition; Speichern und Laden getrennt prüfen.",
   "fr": "Aventure de plateformes colorée dans cetteédition ; sauvegarde et rechargement se vérifient séparément.",
   "es": "Aventura de plataformas colorida en estaedición; guardar y recargar se verifican aparte."
  },
  "names": {
   "zh": "东巴！特别版"
  },
  "related": [
   "tomba-2",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA21382. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA21382，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA21382؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA21382; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA21382; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA21382 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA21382; versión/parches por observación, imágenes promocionales."
  }
 },
 "monster-hunter-wilds": {
  "genre": "rpg",
  "overview": {
   "en": "Hunt in changing wild environments. A flat startup output does not test hunting or combat.",
   "zh": "在变化的荒野环境中狩猎；启动平面输出并不证明狩猎或战斗可用。",
   "ar": "صيد ببيئاتبرية متغيرة؛ خرجبدء مسطح لايختبر الصيد أوالقتال.",
   "pt": "Caça em ambientes selvagens mutáveis; saída lisa de arranque não testa caça/combate.",
   "de": "Jage in wechselnder Wildnis; flache Startausgabe testet weder Jagd noch Kampf.",
   "fr": "Chasse dans des milieux changeants ; une sortie initiale unie ne teste pas chasse/combat.",
   "es": "Caza en entornos cambiantes; salida inicial uniforme no prueba caza/combate."
  },
  "names": {
   "zh": "怪物猎人：荒野"
  },
  "related": [
   "superliminal",
   "lego-builders-journey"
  ],
  "editionNote": {
   "en": "Reported package PPSA24191. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA24191，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA24191؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA24191; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA24191; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA24191 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA24191; versión/parches por observación, imágenes promocionales."
  }
 },
 "lego-builders-journey": {
  "genre": "puzzle",
  "overview": {
   "en": "Build through small brick puzzles. Reaching the first scene leaves puzzle progression and input verification open.",
   "zh": "用积木解决小型谜题；到达首场景仍需单独验证操作与谜题推进。",
   "ar": "حلألغاز مكعبات صغيرة؛ بلوغالمشهد الأول لايثبت التحكم أوتقدم الألغاز.",
   "pt": "Resolve pequenos puzzles de peças; primeira cena deixa input e progressão por verificar.",
   "de": "Löse kleineSteinpuzzles; ersteSzene lässt Eingaben und Rätselverlauf offen.",
   "fr": "Résolvez de petits puzzles de briques ; première scène sans validation des commandes/progression.",
   "es": "Resuelve pequeños puzles de bloques; primera escena deja controles/progresión sin verificar."
  },
  "names": {
   "zh": "乐高：建造者之旅"
  },
  "related": [
   "animal-well",
   "dreaming-sarah"
  ],
  "editionNote": {
   "en": "Reported package PPSA05496. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA05496，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA05496؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA05496; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA05496; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA05496 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA05496; versión/parches por observación, imágenes promocionales."
  }
 },
 "superliminal": {
  "genre": "puzzle",
  "overview": {
   "en": "Perspective changes the scale of dream objects. First-room movement is narrower evidence than solving later puzzles.",
   "zh": "利用透视改变梦中物体尺度；首房间移动的证据范围小于解开后续谜题。",
   "ar": "المنظور يغيّر حجمأشياء الحلم؛ حركةالغرفة الأولى لاتثبت الألغازاللاحقة.",
   "pt": "A perspetiva muda objetos dos sonhos; movimento na primeira sala não prova puzzles seguintes.",
   "de": "Perspektive verändert Traumobjekte; Bewegung im erstenRaum belegt keine späterenRätsel.",
   "fr": "La perspective change les objets rêvés ; mouvement dans la première salle ne valide pas la suite.",
   "es": "La perspectiva cambia objetos soñados; moverse en primera sala no valida puzles posteriores."
  },
  "names": {
   "zh": "超阈限空间"
  },
  "related": [
   "animal-well",
   "dreaming-sarah"
  ],
  "editionNote": {
   "en": "Reported package PPSA06084. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA06084，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA06084؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA06084; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA06084; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA06084 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA06084; versión/parches por observación, imágenes promocionales."
  }
 },
 "squirrel-with-a-gun": {
  "genre": "action",
  "overview": {
   "en": "An armed squirrel explores a sandbox. Separate active streaming from settled scenes when comparing performance.",
   "zh": "持枪松鼠探索沙盒；对比性能时需把内容串流与稳定场景分开。",
   "ar": "سنجابمسلح يستكشف عالماً مفتوحاً؛ افصلتحميلالمحتوى عنالمشهدالمستقر عندالمقارنة.",
   "pt": "Um esquilo armado explora um sandbox; separe streaming ativo de cenas estabilizadas ao comparar.",
   "de": "BewaffnetesEichhörnchen erkundet Sandbox; aktivesStreaming und stabileSzenen getrennt vergleichen.",
   "fr": "Écureuil armé explore un bac à sable ; distinguez streaming actif et scène stabilisée.",
   "es": "Ardilla armada explora sandbox; separa streaming activo de escenas estabilizadas al comparar."
  },
  "names": {
   "zh": "松鼠带枪"
  },
  "related": [
   "superliminal",
   "lego-builders-journey"
  ],
  "editionNote": {
   "en": "Reported package PPSA22102. Read the version and patch stack per observation; publisher artwork is promotional.",
   "zh": "报告包PPSA22102，按每次版本和补丁栈阅读；发行商图片仅宣传资料。",
   "ar": "حزمةPPSA22102؛ النسخة والترقيعات لكلتجربة، والصور دعائية.",
   "pt": "PacotePPSA22102; versão/patches por observação, imagens promocionais.",
   "de": "PaketPPSA22102; Version/Patches jeTest beachten, Bilder sindWerbung.",
   "fr": "PaquetPPSA22102 ; version/patches par observation, images promotionnelles.",
   "es": "PaquetePPSA22102; versión/parches por observación, imágenes promocionales."
  }
 }
});
Object.assign(editorial,{
 "destruction-allstars": {
  "genre": "racing",
  "overview": {
   "en": "Training HUD rendering leaves driving and arena simulation to be tested.",
   "zh": "训练HUD呈现之后，还需验证驾驶及竞技场模拟。",
   "ar": "عرض HUD التدريب يترك القيادة والمحاكاة للاختبار.",
   "pt": "O HUD de treino deixa condução e arena por testar.",
   "de": "Trainings-HUD lässt Fahren und Arenasimulation offen.",
   "fr": "Le HUD du tutoriel laisse conduite et arène à tester.",
   "es": "El HUD de entrenamiento deja conducción y arena por probar."
  },
  "names": {
   "zh": "毁灭全明星"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA02630. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA02630；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA02630؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA02630; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA02630; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA02630 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA02630; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "graveyard-keeper-2": {
  "genre": "rpg",
  "overview": {
   "en": "An initial gameplay report does not establish a complete management or save cycle.",
   "zh": "初期游玩报告尚不能证明完整经营或存档循环。",
   "ar": "تقرير اللعب الأول لا يثبت دورة إدارة أو حفظ كاملة.",
   "pt": "O primeiro teste não prova um ciclo completo de gestão/gravação.",
   "de": "Erstes Gameplay belegt keinen kompletten Verwaltungs-/Savezyklus.",
   "fr": "Un premier essai ne valide pas tout le cycle de gestion/sauvegarde.",
   "es": "Una prueba inicial no valida todo el ciclo de gestión/guardado."
  },
  "names": {
   "zh": "墓场物语2"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA35943. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA35943；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA35943؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA35943; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA35943; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA35943 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA35943; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "grinch-christmas-adventures": {
  "genre": "platform",
  "overview": {
   "en": "The current import refusal occurs before any platform level can be assessed.",
   "zh": "当前导入拒绝发生在能够评估平台关卡之前。",
   "ar": "رفض الاستيراد يسبق إمكان تقييم أي مستوى.",
   "pt": "A recusa de importação antecede qualquer avaliação de nível.",
   "de": "Importverweigerung liegt vor jeder Levelbewertung.",
   "fr": "Le refus d’importation précède toute évaluation de niveau.",
   "es": "El rechazo de importación precede cualquier evaluación de nivel."
  },
  "names": {
   "zh": "格林奇：圣诞冒险"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA07656. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA07656；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA07656؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA07656; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA07656; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA07656 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA07656; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "the-exit-8": {
  "genre": "adventure",
  "overview": {
   "en": "A corridor walk can reveal visual defects without proving the complete anomaly route.",
   "zh": "走廊移动可暴露画面问题，但不证明完整异常路线可通行。",
   "ar": "المشي بالممر يكشف عيوباً ولا يثبت المسار الكامل.",
   "pt": "Andar no corredor revela defeitos sem provar a rota completa.",
   "de": "Korridorbewegung zeigt Bildfehler, belegt aber nicht die ganze Route.",
   "fr": "Parcourir le couloir révèle des défauts sans valider toute la route.",
   "es": "Recorrer el pasillo revela fallos sin validar toda la ruta."
  },
  "names": {
   "zh": "8号出口"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA23276. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA23276；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA23276؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA23276; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA23276; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA23276 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA23276; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "indiana-jones-staff-of-kings": {
  "genre": "adventure",
  "overview": {
   "en": "This is the PS5 PS2 Classics package, distinct from The Great Circle.",
   "zh": "对象是PS5的PS2经典版封装，与《古老之圈》分开。",
   "ar": "هذه حزمةPS2 Classics علىPS5 منفصلة عن The Great Circle.",
   "pt": "É o pacotePS2 Classics naPS5, distinto de The Great Circle.",
   "de": "PS5-PS2-Classics-Paket, getrennt von The Great Circle.",
   "fr": "Paquet PS2 Classics surPS5, distinct de The Great Circle.",
   "es": "PaquetePS2 Classics enPS5, distinto de The Great Circle."
  },
  "names": {
   "zh": "印第安纳琼斯与王杖"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA14388. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA14388；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA14388؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA14388; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA14388; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA14388 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA14388; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "tetris-effect-connected": {
  "genre": "puzzle",
  "overview": {
   "en": "Tutorial rendering does not test later modes, connected play or VR input.",
   "zh": "教程呈现并未测试后续模式、联机或VR输入。",
   "ar": "عرض التعليم لا يختبر الأوضاع اللاحقة أو الاتصال أوVR.",
   "pt": "O tutorial não testa modos seguintes, rede ou inputVR.",
   "de": "Tutorialdarstellung testet keine späteren Modi, Online- oderVR-Eingaben.",
   "fr": "Le tutoriel ne teste ni modes suivants, réseau ou entréesVR.",
   "es": "El tutorial no prueba modos posteriores, red ni inputVR."
  },
  "names": {
   "zh": "俄罗斯方块效应：连接"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA07923. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA07923；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA07923؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA07923; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA07923; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA07923 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA07923; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "dying-light-the-beast": {
  "genre": "action",
  "overview": {
   "en": "Passing a local sign-in path leaves world loading and online identity unverified.",
   "zh": "越过本地登录路径后，世界加载和在线身份仍需验证。",
   "ar": "تجاوز الدخول المحلي لايثبت تحميل العالم أو هوية الشبكة.",
   "pt": "Passar entrada local não valida mundo ou identidade online.",
   "de": "Lokale Anmeldung belegt weder Weltladen noch Online-Identität.",
   "fr": "Passer l’entrée locale ne valide ni monde ni identité en ligne.",
   "es": "Pasar entrada local no valida mundo ni identidad online."
  },
  "names": {
   "zh": "消逝的光芒：困兽"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA24003. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA24003；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA24003؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA24003; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA24003; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA24003 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA24003; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "arcade-game-zone": {
  "genre": "sports",
  "overview": {
   "en": "Each minigame needs its own result; a composed local build is separate from clean main.",
   "zh": "小游戏需逐项验证，组合本地构建与纯main分开。",
   "ar": "كل لعبة صغيرة تحتاج نتيجة مستقلة؛ الدمج المحلي منفصل عنmain.",
   "pt": "Cada minijogo exige resultado próprio; stack local separado de main.",
   "de": "Jedes Minispiel braucht eigenen Test; lokaler Stack getrennt von Main.",
   "fr": "Chaque mini-jeu demande son résultat ; stack local distinct de main.",
   "es": "Cada minijuego necesita resultado propio; stack local separado de main."
  },
  "names": {
   "zh": "街机游戏区"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA19015. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA19015；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA19015؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA19015; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA19015; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA19015 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA19015; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "valor-mortis": {
  "genre": "action",
  "overview": {
   "en": "Responsive calibration menus leave the actual combat path untested.",
   "zh": "校准菜单可响应，实际战斗路径仍未测试。",
   "ar": "استجابة قائمة المعايرة تترك القتال غير مختبر.",
   "pt": "Calibração responde, combate ainda por testar.",
   "de": "Reagierendes Kalibriermenü lässt Kampf ungeprüft.",
   "fr": "La calibration répond, mais le combat reste non testé.",
   "es": "La calibración responde, pero falta probar combate."
  },
  "names": {
   "zh": "Valor Mortis"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA32793. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA32793；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA32793؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA32793; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA32793; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA32793 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA32793; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "pumpkin-jack": {
  "genre": "platform",
  "overview": {
   "en": "Cutscene progress and player-controlled platforming require different evidence.",
   "zh": "过场推进与玩家操作平台跳跃需要不同证据。",
   "ar": "تقدم المشهد والتحكم بالمنصات يحتاجان دليلين مختلفين.",
   "pt": "Cinemática e plataformas controladas exigem provas distintas.",
   "de": "Filmfortschritt und steuerbares Plattformspiel brauchen eigene Belege.",
   "fr": "Cinématique et plateformes contrôlées demandent des preuves distinctes.",
   "es": "Cinemática y plataformas controladas necesitan pruebas distintas."
  },
  "names": {
   "zh": "南瓜杰克"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA03446. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA03446；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA03446؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA03446; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA03446; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA03446 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA03446; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "terrifier-artcade": {
  "genre": "action",
  "overview": {
   "en": "A working action sample leaves the remaining stages and saved progression open.",
   "zh": "动作场景样本有效，剩余关卡及保存进度仍未知。",
   "ar": "عينة حركة ناجحة تترك المراحل والحفظ مفتوحين.",
   "pt": "A amostra de ação deixa níveis restantes/gravação em aberto.",
   "de": "Funktionierende Aktionsprobe lässt Restlevel/Save offen.",
   "fr": "Un échantillon d’action laisse suite et sauvegarde ouvertes.",
   "es": "Una muestra de acción deja niveles restantes/guardado pendientes."
  },
  "names": {
   "zh": "断魂小丑：街机游戏"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA26362. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA26362；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA26362؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA26362; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA26362; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA26362 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA26362; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "life-is-strange-reunion": {
  "genre": "adventure",
  "overview": {
   "en": "A release label alone cannot establish an unmodified test environment.",
   "zh": "仅报告发行标签，仍不足以证明测试环境未修改。",
   "ar": "وسم الإصدار وحده لا يثبت بيئة غير معدلة.",
   "pt": "O rótulo da versão não prova ambiente sem alterações.",
   "de": "Releasename allein belegt keine unveränderte Testumgebung.",
   "fr": "Le nom de version seul ne prouve pas un environnement intact.",
   "es": "La etiqueta de versión sola no prueba entorno sin modificar."
  },
  "names": {
   "zh": "奇异人生：重聚"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA28101. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA28101；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA28101؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA28101; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA28101; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA28101 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA28101; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "street-fighter-6": {
  "genre": "action",
  "overview": {
   "en": "Offline mode menus are a separate milestone from a playable fight.",
   "zh": "离线模式菜单与可操作对战属于不同进度。",
   "ar": "قوائم الأوضاع offline منفصلة عن قتال قابل للعب.",
   "pt": "Menus offline são etapa distinta de uma luta jogável.",
   "de": "Offline-Menüs sind ein anderer Meilenstein als ein Kampf.",
   "fr": "Menus hors ligne et combat jouable sont deux étapes.",
   "es": "Menús offline y pelea jugable son hitos distintos."
  },
  "names": {
   "zh": "街头霸王6"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA02632. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA02632；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA02632؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA02632; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA02632; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA02632 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA02632; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "another-crabs-treasure": {
  "genre": "adventure",
  "overview": {
   "en": "First-beach movement verifies a narrow patched route, leaving combat and later areas open.",
   "zh": "首海滩移动确认一条有限补丁路径，战斗及后续区域待验。",
   "ar": "حركة الشاطئ تثبت مساراً محدوداً معدلاً، القتال والمناطق التالية مفتوحة.",
   "pt": "Movimento na praia valida percurso limitado com patches; combate/zonas seguintes por testar.",
   "de": "Strandbewegung belegt schmalen Patchpfad; Kampf/Folgegebiete offen.",
   "fr": "Mouvement sur plage valide une voie corrigée limitée ; combat/suite ouverts.",
   "es": "Movimiento en playa valida ruta limitada con parches; combate/áreas siguientes pendientes."
  },
  "names": {
   "zh": "蟹蟹寻宝奇遇"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA20423. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA20423；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA20423؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA20423; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA20423; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA20423 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA20423; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "ridge-racer": {
  "genre": "racing",
  "overview": {
   "en": "This PS5 package report preserves its flicker and controller context; other editions need separate tests.",
   "zh": "此PS5封装报告保留闪烁及手柄环境，其他版本需独立测试。",
   "ar": "هذا التقرير يحفظ الوميض والتحكم؛ الإصدارات الأخرى تحتاج اختباراً منفصلاً.",
   "pt": "Este pacotePS5 preserva cintilação/comando; outras edições exigem teste próprio.",
   "de": "Dieser PS5-Paketbericht behält Flackern/Controllerkontext; andere Editionen getrennt testen.",
   "fr": "Ce paquetPS5 conserve scintillement/contexte manette ; autres éditions à tester séparément.",
   "es": "Este paquetePS5 conserva parpadeo/contexto de mando; otras ediciones necesitan prueba aparte."
  },
  "names": {
   "zh": "山脊赛车"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA31372. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA31372；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA31372؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA31372; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA31372; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA31372 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA31372; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "smurfs-dreams": {
  "genre": "platform",
  "overview": {
   "en": "A village-control build and a later graphics candidate are separate observations.",
   "zh": "村庄操作构建与后续画面候选为不同观察，不能互相代替。",
   "ar": "بناء تحكم القرية ومرشح الرسومات اللاحق تجربتان منفصلتان.",
   "pt": "Build de controlo da aldeia e candidato gráfico posterior são observações distintas.",
   "de": "Dorfsteuerungsbuild und späterer Grafikkandidat sind getrennte Beobachtungen.",
   "fr": "Build de contrôle au village et candidat graphique ultérieur sont distincts.",
   "es": "Build de control en aldea y candidato gráfico posterior son observaciones distintas."
  },
  "names": {
   "zh": "蓝精灵：梦境"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA21607. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA21607；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA21607؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA21607; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA21607; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA21607 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA21607; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "assassins-creed-shadows": {
  "genre": "action",
  "overview": {
   "en": "Welcome-screen evidence is narrower than open-world play; full content and matched module builds matter.",
   "zh": "欢迎画面证据不等于开放世界游玩，完整内容及同构建模块至关重要。",
   "ar": "شاشة الترحيب ليست عالماً مفتوحاً؛ المحتوى الكامل والوحدات المتطابقة مهمان.",
   "pt": "Boas-vindas não provam mundo aberto; conteúdo completo e módulos coerentes importam.",
   "de": "Willkommensbild kein Open-World-Spiel; vollständige Daten/passende Module entscheidend.",
   "fr": "L’accueil ne prouve pas le monde ouvert ; données complètes et modules cohérents comptent.",
   "es": "Bienvenida no prueba mundo abierto; contenido completo y módulos coherentes importan."
  },
  "names": {
   "zh": "刺客信条：影"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA20397. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA20397；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA20397؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA20397; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA20397; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA20397 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA20397; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 },
 "supertuxkart": {
  "genre": "racing",
  "overview": {
   "en": "This homebrew port’s lighting tests do not establish complete races or commercial kart-game compatibility.",
   "zh": "此自制移植的光照测试不证明完整比赛或商业卡丁车游戏兼容性。",
   "ar": "اختبار إضاءة هذاhomebrew لايثبت سباقات كاملة أو ألعاباً تجارية.",
   "pt": "Iluminação deste homebrew não valida corridas completas ou jogos comerciais.",
   "de": "Beleuchtung dieses Homebrewports belegt keine vollständigen Rennen/kommerziellen Spiele.",
   "fr": "L’éclairage de ce homebrew ne valide ni courses complètes ni jeux commerciaux.",
   "es": "Iluminación de este homebrew no valida carreras completas ni juegos comerciales."
  },
  "names": {
   "zh": "SuperTuxKart · PS5自制版"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported package PPSA69421. Preserve each observation’s version, build and patch boundaries. Images are promotional unless specifically identified as test captures.",
   "zh": "报告包PPSA69421；按每次观察保留版本、构建及补丁边界，图片除明确标注实测外均为宣传资料。",
   "ar": "الحزمةPPSA69421؛ احفظ نسخة وبناء وتعديلات كل تجربة. الصور دعائية إلا لقطات الاختبار المحددة.",
   "pt": "PacotePPSA69421; versão/build/patches por observação. Imagens promocionais salvo capturas identificadas.",
   "de": "PaketPPSA69421; Version/Build/Patches je Beobachtung beachten. Bilder Werbung außer gekennzeichneten Testaufnahmen.",
   "fr": "PaquetPPSA69421 ; version/build/patchs propres à chaque essai. Images promotionnelles sauf captures identifiées.",
   "es": "PaquetePPSA69421; versión/build/parches por observación. Imágenes promocionales salvo capturas identificadas."
  }
 }
});
Object.assign(editorial,{
 "afterimage": {
  "genre": "platform",
  "overview": {
   "en": "Intro rendering and a measured shader change leave exploration untested.",
   "zh": "片头呈现及着色器对照，尚未验证实际探索。",
   "ar": "عرض المقدمة ومقارنة shader لا يثبتان الاستكشاف.",
   "pt": "A introdução e o teste de shaders deixam exploração por testar.",
   "de": "Intro und Shadervergleich lassen Erkundung ungeprüft.",
   "fr": "L’introduction et la comparaison shader laissent l’exploration ouverte.",
   "es": "La intro y la comparación shader dejan la exploración sin probar."
  },
  "names": {
   "zh": "心渊梦境"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA14053. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA14053；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA14053. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA14053. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA14053. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA14053. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA14053. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "super-meat-boy-3d": {
  "genre": "platform",
  "overview": {
   "en": "A visible world map does not verify a controllable platform level.",
   "zh": "世界地图能显示，仍需验证可操作的平台关卡。",
   "ar": "ظهور الخريطة لا يثبت مرحلة منصات قابلة للتحكم.",
   "pt": "O mapa visível não valida um nível controlável.",
   "de": "Eine sichtbare Weltkarte belegt kein steuerbares Level.",
   "fr": "Une carte visible ne valide pas un niveau contrôlable.",
   "es": "Un mapa visible no valida un nivel controlable."
  },
  "names": {
   "zh": "超级食肉男孩3D"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA31162. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA31162；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31162. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA31162. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA31162. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA31162. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA31162. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "new-joe-mac-caveman-ninja": {
  "genre": "platform",
  "overview": {
   "en": "The first-stage sample leaves co-op and later levels open.",
   "zh": "首关样本之后，合作及后续关卡仍待验证。",
   "ar": "عينة المرحلة الأولى تترك التعاون والمراحل التالية مفتوحة.",
   "pt": "O primeiro nível deixa cooperação e níveis seguintes por testar.",
   "de": "Das erste Level lässt Koop und Folgestufen offen.",
   "fr": "Le premier niveau laisse coop et suite à tester.",
   "es": "El primer nivel deja coop y posteriores sin probar."
  },
  "names": {
   "zh": "新乔与麦克：穴居忍者"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA02801. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA02801；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA02801. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA02801. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA02801. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA02801. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA02801. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "rollercoaster-tycoon-adventures-deluxe": {
  "genre": "sandbox",
  "overview": {
   "en": "Camera training is narrower than building and operating a working park.",
   "zh": "相机教程与建造、运营完整公园的验证范围不同。",
   "ar": "تعليم الكاميرا أضيق من بناء وإدارة حديقة كاملة.",
   "pt": "O tutorial de câmara não valida construir e gerir o parque.",
   "de": "Kameratraining belegt keinen vollständigen Parkbetrieb.",
   "fr": "Le tutoriel caméra ne valide pas la construction et gestion du parc.",
   "es": "El tutorial de cámara no valida construir y gestionar el parque."
  },
  "names": {
   "zh": "过山车大亨：冒险豪华版"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA17330. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA17330；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA17330. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA17330. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA17330. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA17330. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA17330. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "the-messenger": {
  "genre": "platform",
  "overview": {
   "en": "Responsive name entry leaves the action stages untested.",
   "zh": "命名界面可响应，动作关卡尚未进入。",
   "ar": "استجابة الاسم تترك مراحل الحركة غير مختبرة.",
   "pt": "O nome responde, mas faltam testar os níveis de ação.",
   "de": "Reagierende Namenseingabe lässt Aktionslevel offen.",
   "fr": "La saisie du nom répond, les niveaux restent non testés.",
   "es": "El nombre responde, los niveles siguen sin probar."
  },
  "names": {
   "zh": "信使"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA24651. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA24651；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA24651. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA24651. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA24651. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA24651. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA24651. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "final-vendetta": {
  "genre": "action",
  "overview": {
   "en": "Miller’s first stage is one sample, not coverage of every fighter or mode.",
   "zh": "Miller首关只是单一样本，不能覆盖全部角色与模式。",
   "ar": "مرحلة Miller الأولى لا تغطي كل المقاتلين والأوضاع.",
   "pt": "O primeiro nível de Miller não cobre todos os lutadores/modos.",
   "de": "Millers erste Stufe deckt nicht alle Kämpfer und Modi ab.",
   "fr": "Le premier niveau de Miller ne couvre pas tous les combattants/modes.",
   "es": "El primer nivel de Miller no cubre todos los luchadores/modos."
  },
  "names": {
   "zh": "最后的复仇"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA07058. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA07058；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA07058. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA07058. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA07058. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA07058. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA07058. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "asterix-obelix-slap-them-all": {
  "genre": "action",
  "overview": {
   "en": "A first-level rendering sample leaves co-op and later fights open.",
   "zh": "首关呈现样本尚未覆盖合作与后续战斗。",
   "ar": "عينة المستوى الأول لا تغطي التعاون والقتال اللاحق.",
   "pt": "O primeiro nível deixa cooperação e lutas seguintes por testar.",
   "de": "Erstes Level lässt Koop und spätere Kämpfe offen.",
   "fr": "Le premier niveau laisse coop et combats suivants ouverts.",
   "es": "El primer nivel deja coop y combates posteriores pendientes."
  },
  "names": {
   "zh": "高卢英雄：痛扁他们"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA08576. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA08576；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA08576. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA08576. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA08576. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA08576. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA08576. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "road-of-death": {
  "genre": "shooter",
  "overview": {
   "en": "The tutorial HUD is useful evidence, while sound and later content still need direct checks.",
   "zh": "教程HUD提供有效证据，声音与后续内容仍需直接验证。",
   "ar": "HUD التعليم دليل مفيد؛ الصوت والمحتوى اللاحق يحتاجان اختباراً مباشراً.",
   "pt": "O HUD do tutorial ajuda; som e conteúdo seguinte exigem teste direto.",
   "de": "Tutorial-HUD ist ein Beleg; Ton und Folgespiel brauchen direkte Tests.",
   "fr": "Le HUD du tutoriel aide ; son et suite demandent un test direct.",
   "es": "El HUD del tutorial ayuda; audio y contenido posterior requieren prueba directa."
  },
  "names": {
   "zh": "死亡之路"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA07286. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA07286；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA07286. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA07286. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA07286. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA07286. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA07286. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "crazy-chicken-shooter-bundle": {
  "genre": "shooter",
  "overview": {
   "en": "Remake scoring and the untested Wanted component remain separate results.",
   "zh": "Remake命中计分与未测的Wanted需分开记录。",
   "ar": "تسجيل نقاط Remake منفصل عن Wanted غير المختبر.",
   "pt": "Pontos no Remake e Wanted não testado são resultados distintos.",
   "de": "Remake-Punktetreffer und ungeprüftes Wanted bleiben getrennt.",
   "fr": "Les points dans Remake et Wanted non testé restent distincts.",
   "es": "Los puntos en Remake y Wanted sin probar son resultados separados."
  },
  "names": {
   "zh": "疯狂小鸡射击合集"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA03117. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA03117；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA03117. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA03117. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA03117. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA03117. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA03117. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "ninja-gaiden-ragebound": {
  "genre": "action",
  "overview": {
   "en": "Opening combat does not establish a complete run or verified audio.",
   "zh": "开场战斗不代表完整流程或声音已通过验证。",
   "ar": "قتال البداية لا يثبت جولة كاملة أو صوتاً مختبراً.",
   "pt": "Combate inicial não valida percurso completo ou som.",
   "de": "Anfangskampf belegt keinen Durchlauf oder geprüften Ton.",
   "fr": "Le combat initial ne valide ni parcours complet ni son.",
   "es": "El combate inicial no valida recorrido completo ni audio."
  },
  "names": {
   "zh": "忍者龙剑传：怒之羁绊"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA28002. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA28002；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA28002. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA28002. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA28002. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA28002. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA28002. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "blue-prince": {
  "genre": "puzzle",
  "overview": {
   "en": "A desk scene and warm shader profile leave room progression unverified.",
   "zh": "桌面场景与暖缓存剖析，尚未验证房间推进。",
   "ar": "مشهد المكتب وملف shader الدافئ لا يثبتان تقدم الغرف.",
   "pt": "A secretária e o perfil quente não validam progresso entre salas.",
   "de": "Schreibtisch und warmes Shaderprofil lassen Raumfortschritt offen.",
   "fr": "Le bureau et le profil shader à chaud ne valident pas les pièces suivantes.",
   "es": "El escritorio y perfil shader caliente no validan avanzar entre salas."
  },
  "names": {
   "zh": "蓝色王子"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA25009. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA25009；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA25009. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA25009. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA25009. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA25009. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA25009. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "castlevania-dominus-collection": {
  "genre": "action",
  "overview": {
   "en": "The collection launcher and DS name entry do not certify the included games.",
   "zh": "合集启动器与DS命名界面不能认证其中各作可玩。",
   "ar": "مشغل المجموعة واسم DS لا يثبتان لعب المكونات.",
   "pt": "O launcher e o nome DS não certificam os jogos incluídos.",
   "de": "Sammlungslauncher und DS-Namen bestätigen keine enthaltenen Spiele.",
   "fr": "Le lanceur et le nom DS ne valident pas les jeux inclus.",
   "es": "El lanzador y nombre DS no validan los juegos incluidos."
  },
  "names": {
   "zh": "恶魔城：多米纳斯合集"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA15645. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA15645；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA15645. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA15645. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA15645. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA15645. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA15645. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "daxter": {
  "genre": "platform",
  "overview": {
   "en": "This is the PS5 PSP-emulator package; fresh-save crashes matter separately from first-area rendering.",
   "zh": "对象为PS5的PSP模拟封装；新存档崩溃与首区域呈现分别记录。",
   "ar": "هذه حزمة PSP على PS5؛ انهيار الحفظ الجديد منفصل عن عرض البداية.",
   "pt": "Pacote PSP na PS5; falhas de save novo são distintas da primeira área.",
   "de": "PS5-PSP-Paket: neue Save-Abstürze getrennt vom ersten Gebiet.",
   "fr": "Paquet PSP sur PS5 : plantages du nouveau save distincts de la première zone.",
   "es": "Paquete PSP en PS5: fallos de guardado nuevo separados de la primera zona."
  },
  "names": {
   "zh": "达斯特"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA09695. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA09695；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA09695. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA09695. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA09695. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA09695. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA09695. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "resident-evil-maiden": {
  "genre": "adventure",
  "overview": {
   "en": "MAIDEN is the PS5 demo, not the retail Village campaign.",
   "zh": "MAIDEN是PS5独立演示，不是Village商业版主线。",
   "ar": "MAIDEN عرض PS5، لا حملة Village التجارية.",
   "pt": "MAIDEN é a demo PS5, não a campanha comercial Village.",
   "de": "MAIDEN ist die PS5-Demo, nicht die Village-Kampagne.",
   "fr": "MAIDEN est la démo PS5, pas la campagne commerciale Village.",
   "es": "MAIDEN es la demo PS5, no la campaña comercial Village."
  },
  "names": {
   "zh": "生化危机：少女"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA01859. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA01859；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA01859. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA01859. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA01859. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA01859. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA01859. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "ball-x-pit": {
  "genre": "roguelike",
  "overview": {
   "en": "Short gameplay, audio and Continue checks coexist with an intermittent freeze.",
   "zh": "短时游玩、声音及Continue验证，与间歇卡死同时保留。",
   "ar": "اللعب القصير والصوت وContinue لا يلغي التجمد المتقطع.",
   "pt": "Jogo curto, som e Continue coexistem com bloqueio intermitente.",
   "de": "Kurzes Gameplay, Ton und Continue schließen sporadisches Einfrieren nicht aus.",
   "fr": "Jeu court, son et Continue coexistent avec un gel intermittent.",
   "es": "Juego corto, audio y Continue coexisten con congelación intermitente."
  },
  "names": {
   "zh": "弹珠地狱"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA31872. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution. Current art advertises The Naturalist Update; it does not identify the content tested in version 01.301.000.",
   "zh": "报告PS5包PPSA31872；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。 当前封面带The Naturalist Update标识，不能据此认定01.301.000测试涵盖该更新。",
   "ar": "حزمة PS5 المبلغ عنها PPSA31872. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5. الصورة تروج The Naturalist Update ولا تثبت محتوى اختبار 01.301.000.",
   "pt": "Pacote PS5 referido PPSA31872. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5. A arte anuncia The Naturalist Update, sem provar o conteúdo testado em 01.301.000.",
   "de": "Gemeldetes PS5-Paket PPSA31872. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf. Das Bild bewirbt The Naturalist Update und belegt nicht den Testinhalt von 01.301.000.",
   "fr": "Paquet PS5 rapporté PPSA31872. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5. L’image promeut The Naturalist Update sans identifier le contenu testé en 01.301.000.",
   "es": "Paquete PS5 reportado PPSA31872. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5. La imagen anuncia The Naturalist Update sin identificar el contenido probado en 01.301.000."
  }
 },
 "dredge": {
  "genre": "adventure",
  "overview": {
   "en": "Water scenes and menus have different speeds; a short successful session is not a stability guarantee.",
   "zh": "水面与菜单速度不同，短时成功运行不保证长期稳定。",
   "ar": "الماء والقوائم بسرعتين مختلفتين؛ الجلسة القصيرة ليست ضمان استقرار.",
   "pt": "Água e menus têm velocidades diferentes; sessão curta não garante estabilidade.",
   "de": "Wasser und Menüs laufen unterschiedlich; kurze Sitzung garantiert keine Stabilität.",
   "fr": "Eau et menus ont des vitesses distinctes ; une courte session ne garantit pas la stabilité.",
   "es": "Agua y menús tienen velocidades distintas; una sesión corta no garantiza estabilidad."
  },
  "names": {
   "zh": "渔帆暗涌"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA09076. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA09076；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA09076. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA09076. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA09076. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA09076. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA09076. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "heavenly-bodies": {
  "genre": "puzzle",
  "overview": {
   "en": "Mission-load crashes limit the value of a responsive in-game sample.",
   "zh": "任务加载崩溃限制了进入游戏样本的代表性。",
   "ar": "انهيار تحميل المهمة يحد من دلالة عينة اللعب.",
   "pt": "Falhas ao carregar a missão limitam o alcance do teste.",
   "de": "Missionslade-Abstürze begrenzen die Aussage der Spielprobe.",
   "fr": "Les plantages de mission limitent la portée de l’essai.",
   "es": "Los fallos al cargar misión limitan el alcance de la prueba."
  },
  "names": {
   "zh": "天体"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA04246. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA04246；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA04246. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA04246. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA04246. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA04246. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA04246. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "crash-bandicoot-4": {
  "genre": "platform",
  "overview": {
   "en": "AMD beach gameplay and NVIDIA black geometry are different GPU results on a local patch stack.",
   "zh": "本地补丁栈上，AMD海滩游玩与NVIDIA黑色几何为不同GPU结果。",
   "ar": "شاطئ AMD وهندسة NVIDIA السوداء نتيجتان مختلفتان على patches محلية.",
   "pt": "Praia AMD e geometria preta NVIDIA são resultados distintos no stack local.",
   "de": "AMD-Strand und schwarze NVIDIA-Geometrie sind getrennte GPU-Ergebnisse auf lokalem Patchstack.",
   "fr": "Plage AMD et géométrie noire NVIDIA sont des résultats GPU distincts sur stack local.",
   "es": "Playa AMD y geometría negra NVIDIA son resultados GPU distintos con patches locales."
  },
  "names": {
   "zh": "古惑狼4：时机已到"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA02433. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA02433；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA02433. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA02433. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA02433. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA02433. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA02433. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "slave-zero-x": {
  "genre": "action",
  "overview": {
   "en": "A live presentation counter over black output does not establish gameplay.",
   "zh": "黑屏上的活动呈现计数不能证明已进入游玩。",
   "ar": "عداد عرض نشط فوق شاشة سوداء لا يثبت اللعب.",
   "pt": "Contador ativo sobre imagem preta não prova jogo.",
   "de": "Aktiver Present-Zähler über Schwarz belegt kein Gameplay.",
   "fr": "Un compteur actif sur fond noir ne prouve pas le jeu.",
   "es": "Un contador activo sobre negro no prueba juego."
  },
  "names": {
   "zh": "奴隶零X"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA13899. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA13899；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA13899. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA13899. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA13899. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA13899. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA13899. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "bloodrayne-revamped": {
  "genre": "action",
  "overview": {
   "en": "Black startup and a user-registration diagnostic leave a production fix unproven.",
   "zh": "黑屏启动与用户注册诊断，尚未建立正式修复。",
   "ar": "بدء أسود وتشخيص تسجيل المستخدم بلا إصلاح إنتاجي مثبت.",
   "pt": "Arranque preto e diagnóstico do registo não provam correção publicada.",
   "de": "Schwarzer Start und Registrierungsdiagnose belegen keinen produktiven Fix.",
   "fr": "Démarrage noir et diagnostic d’inscription ne prouvent pas de correction publiée.",
   "es": "Arranque negro y diagnóstico de registro no prueban arreglo publicado."
  },
  "names": {
   "zh": "吸血莱恩：重制版"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA05916. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA05916；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA05916. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA05916. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA05916. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA05916. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA05916. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "bloodrayne-2-revamped": {
  "genre": "action",
  "overview": {
   "en": "The sequel’s black output is recorded separately from the first game’s diagnostic explanation.",
   "zh": "续作黑屏单独记录，不能直接套用前作的诊断原因。",
   "ar": "سواد الجزء الثاني منفصل عن تشخيص اللعبة الأولى.",
   "pt": "O ecrã preto da sequela não herda a causa diagnosticada no primeiro jogo.",
   "de": "Schwarzes Bild der Fortsetzung getrennt von der Diagnose des ersten Spiels.",
   "fr": "Le noir de la suite reste distinct du diagnostic du premier jeu.",
   "es": "El negro de la secuela se separa del diagnóstico del primer juego."
  },
  "names": {
   "zh": "吸血莱恩2：重制版"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA05975. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA05975；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA05975. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA05975. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA05975. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA05975. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA05975. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "cant-drive-this": {
  "genre": "racing",
  "overview": {
   "en": "A loading bar and valid bundles do not establish driving or identify the stalled async operation.",
   "zh": "加载条与有效bundle不能证明驾驶可用，也未锁定异步停滞原因。",
   "ar": "شريط التحميل وbundles صالحة لا يثبتان القيادة أو سبب التعطل.",
   "pt": "Barra e bundles válidos não provam condução nem a causa do bloqueio.",
   "de": "Ladebalken und gültige Bundles belegen weder Fahren noch Hängeursache.",
   "fr": "Barre et bundles valides ne prouvent ni conduite ni cause du blocage.",
   "es": "Barra y bundles válidos no prueban conducción ni causa del bloqueo."
  },
  "names": {
   "zh": "这车没法开"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA02743. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA02743；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA02743. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA02743. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA02743. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA02743. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA02743. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "astroneer": {
  "genre": "sandbox",
  "overview": {
   "en": "Intro descent and landing remain distinct from player-controlled exploration.",
   "zh": "片头下降、着陆与玩家可操作探索需分开。",
   "ar": "الهبوط بالمقدمة منفصل عن استكشاف يتحكم به اللاعب.",
   "pt": "Descida e aterragem da intro são distintas da exploração controlada.",
   "de": "Introabstieg und Landung getrennt von steuerbarer Erkundung.",
   "fr": "Descente et atterrissage d’intro distincts de l’exploration contrôlée.",
   "es": "Descenso y aterrizaje de intro separados de exploración controlable."
  },
  "names": {
   "zh": "异星探险家"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA27623. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA27623；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA27623. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA27623. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA27623. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA27623. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA27623. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "metal-gear-metal-gear-2": {
  "genre": "action",
  "overview": {
   "en": "The MSX collection launcher is separate from either game’s first rendered frame.",
   "zh": "MSX合集启动器与两作实际首游戏帧分开记录。",
   "ar": "مشغل مجموعة MSX منفصل عن أول إطار لكل لعبة.",
   "pt": "O launcher MSX é distinto do primeiro frame de cada jogo.",
   "de": "MSX-Sammlungslauncher getrennt vom ersten Spielframe beider Titel.",
   "fr": "Lanceur MSX distinct de la première image de chacun des jeux.",
   "es": "Lanzador MSX separado del primer frame de cada juego."
  },
  "names": {
   "zh": "合金装备与合金装备2"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA14408. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA14408；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA14408. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA14408. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA14408. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA14408. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA14408. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "mortal-shell-ii": {
  "genre": "action",
  "overview": {
   "en": "Linux menu progress and Windows driver resets are different host outcomes.",
   "zh": "Linux菜单推进与Windows驱动重置为不同主机结果。",
   "ar": "قائمة Linux وإعادة ضبط Windows نتيجتان لمضيفين مختلفين.",
   "pt": "Menu Linux e resets Windows são resultados de hosts distintos.",
   "de": "Linux-Menü und Windows-Treiberreset sind getrennte Hostergebnisse.",
   "fr": "Menu Linux et resets Windows sont des résultats hôtes distincts.",
   "es": "Menú Linux y resets Windows son resultados de hosts distintos."
  },
  "names": {
   "zh": "致命躯壳2"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA34008. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution. Current Rotten Autumn artwork does not identify the report’s unknown content version or prove expansion testing.",
   "zh": "报告PS5包PPSA34008；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。 当前Rotten Autumn封面不能确定报告未提供的内容版本，也不证明扩展内容已测试。",
   "ar": "حزمة PS5 المبلغ عنها PPSA34008. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5. صورة Rotten Autumn لا تحدد نسخة المحتوى المجهولة أو تثبت اختبار الإضافة.",
   "pt": "Pacote PS5 referido PPSA34008. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5. A arte Rotten Autumn não identifica a versão desconhecida nem prova teste da expansão.",
   "de": "Gemeldetes PS5-Paket PPSA34008. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf. Rotten-Autumn-Werbung bestimmt weder unbekannte Inhaltsversion noch getestete Erweiterung.",
   "fr": "Paquet PS5 rapporté PPSA34008. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5. L’image Rotten Autumn ne fixe pas la version inconnue et ne prouve pas le test de l’extension.",
   "es": "Paquete PS5 reportado PPSA34008. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5. La imagen Rotten Autumn no identifica la versión desconocida ni prueba la expansión."
  }
 },
 "earthion": {
  "genre": "shooter",
  "overview": {
   "en": "Stage-one rendering and startup semaphore stability need separate evidence.",
   "zh": "首关呈现与启动信号量稳定性需分别举证。",
   "ar": "عرض المرحلة الأولى واستقرار semaphore البدء يحتاجان دليلين.",
   "pt": "Primeiro nível e estabilidade do semáforo inicial exigem provas distintas.",
   "de": "Erste Stufe und Startsemaphor-Stabilität brauchen eigene Belege.",
   "fr": "Premier niveau et stabilité du sémaphore initial demandent deux preuves.",
   "es": "Primer nivel y estabilidad del semáforo inicial requieren pruebas distintas."
  },
  "names": {
   "zh": "地球解放军"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA28061. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA28061；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA28061. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA28061. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA28061. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA28061. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA28061. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "minecraft-dungeons-ii": {
  "genre": "action",
  "overview": {
   "en": "An accessibility menu is a limited milestone before any dungeon gameplay.",
   "zh": "辅助功能菜单是地牢游玩之前的有限进度。",
   "ar": "قائمة إمكانية الوصول خطوة محدودة قبل لعب الزنازين.",
   "pt": "O menu de acessibilidade é etapa limitada antes das masmorras.",
   "de": "Barrierefreiheitsmenü ist begrenzter Fortschritt vor Dungeon-Gameplay.",
   "fr": "Menu d’accessibilité : étape limitée avant le jeu en donjon.",
   "es": "Menú de accesibilidad: hito limitado antes de jugar mazmorras."
  },
  "names": {
   "zh": "我的世界：地下城2"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA16064. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA16064；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA16064. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA16064. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA16064. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA16064. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA16064. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "trails-sky-1st-chapter": {
  "genre": "turnBasedRpg",
  "overview": {
   "en": "An unsupported audio effect stops startup before a playable scene.",
   "zh": "未实现的音效使启动停止，尚无可玩场景。",
   "ar": "مؤثر صوتي غير منفذ يوقف البدء قبل مشهد لعب.",
   "pt": "Efeito de áudio ausente para o arranque antes de jogar.",
   "de": "Fehlender Audioeffekt stoppt vor einer Spielszene.",
   "fr": "Un effet audio absent bloque avant une scène jouable.",
   "es": "Un efecto de audio ausente detiene antes de escena jugable."
  },
  "names": {
   "zh": "空之轨迹 the 1st"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA28465. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA28465；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA28465. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA28465. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA28465. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA28465. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA28465. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "curved-space": {
  "genre": "shooter",
  "overview": {
   "en": "A visible HUD over an entirely black world is not usable gameplay rendering.",
   "zh": "HUD可见但世界全黑，不代表可用的游戏画面。",
   "ar": "HUD ظاهر والعالم أسود بالكامل ليس عرض لعب صالحاً.",
   "pt": "HUD visível com mundo preto não é imagem de jogo utilizável.",
   "de": "Sichtbares HUD vor schwarzer Welt ist keine nutzbare Spieldarstellung.",
   "fr": "HUD visible sur monde noir ne signifie pas rendu de jeu utilisable.",
   "es": "HUD visible sobre mundo negro no es imagen de juego utilizable."
  },
  "names": {
   "zh": "曲面空间"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA02817. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA02817；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA02817. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA02817. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA02817. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA02817. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA02817. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "hi-fi-rush": {
  "genre": "action",
  "overview": {
   "en": "A title-screen queue trace does not measure the whole rhythm-action game.",
   "zh": "标题画面队列trace不能代表整部节奏动作游戏。",
   "ar": "trace قائمة العنوان لا يقيس لعبة الإيقاع كاملة.",
   "pt": "O trace do título não mede o jogo de ritmo completo.",
   "de": "Titel-Trace misst nicht das gesamte Rhythmusspiel.",
   "fr": "La trace du titre ne mesure pas tout le jeu de rythme.",
   "es": "El trace del título no mide todo el juego rítmico."
  },
  "names": {
   "zh": "完美音浪"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA17191. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA17191；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA17191. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA17191. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA17191. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA17191. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA17191. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "lego-voyagers": {
  "genre": "puzzle",
  "overview": {
   "en": "A loader ABI fixture is diagnostic evidence, not a successful cooperative game test.",
   "zh": "加载器ABI fixture属于诊断证据，不是合作游戏测试成功。",
   "ar": "fixture محمل ABI دليل تشخيصي، لا اختبار تعاون ناجح.",
   "pt": "Fixture de ABI é diagnóstico, não teste cooperativo bem sucedido.",
   "de": "Loader-ABI-Fixture ist Diagnose, kein erfolgreicher Koop-Test.",
   "fr": "Le fixture ABI est diagnostique, pas un essai coop réussi.",
   "es": "Fixture ABI es diagnóstico, no prueba coop exitosa."
  },
  "names": {
   "zh": "乐高旅途"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA23732. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA23732；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA23732. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA23732. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA23732. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA23732. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA23732. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "cult-of-the-lamb": {
  "genre": "roguelike",
  "overview": {
   "en": "Passing locally patched initialization still leaves almost every run stuck loading.",
   "zh": "本地修改后越过初始化，几乎全部运行仍卡在加载。",
   "ar": "تجاوز التهيئة المعدلة يبقي معظم التجارب عالقة بالتحميل.",
   "pt": "Passar a inicialização modificada deixa quase todos os ensaios a carregar.",
   "de": "Lokal gepatchte Initialisierung lässt fast alle Läufe beim Laden hängen.",
   "fr": "L’initialisation modifiée laisse presque tous les essais bloqués au chargement.",
   "es": "Inicialización modificada deja casi todas las pruebas cargando."
  },
  "names": {
   "zh": "咩咩启示录"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06464. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA06464；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA06464. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA06464. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA06464. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA06464. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA06464. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 },
 "doom-3-bfg-homebrew": {
  "genre": "shooter",
  "overview": {
   "en": "This PS5 homebrew port has its own memory-lifetime problem; it is not a retail PS5 release.",
   "zh": "此PS5自制移植有独立的内存生命周期问题，不是商业PS5发行版。",
   "ar": "منفذ PS5 homebrew له مشكلة عمر ذاكرة، وليس إصدار PS5 تجارياً.",
   "pt": "Port homebrew PS5 com problema de memória próprio, não edição comercial PS5.",
   "de": "PS5-Homebrewport mit eigenem Speicherlebensproblem, keine kommerzielle PS5-Fassung.",
   "fr": "Port homebrew PS5 avec problème de durée de vie mémoire, pas une édition PS5 commerciale.",
   "es": "Port homebrew PS5 con problema propio de vida de memoria, no edición comercial PS5."
  },
  "names": {
   "zh": "毁灭战士3 BFG自制移植"
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA99313. Preserve the version, host and patch scope of each test. Promotional artwork does not show AnyPS5 execution.",
   "zh": "报告PS5包PPSA99313；逐次保留版本、主机及补丁边界，宣传图片不是AnyPS5实测。",
   "ar": "حزمة PS5 المبلغ عنها PPSA99313. احفظ نسخة ومضيف وتعديلات كل اختبار؛ الصور الدعائية ليست تشغيل AnyPS5.",
   "pt": "Pacote PS5 referido PPSA99313. Preserve versão, host e patches por teste; arte promocional não mostra execução AnyPS5.",
   "de": "Gemeldetes PS5-Paket PPSA99313. Version, Host und Patches je Test beachten; Werbebilder zeigen keinen AnyPS5-Lauf.",
   "fr": "Paquet PS5 rapporté PPSA99313. Conservez version, hôte et patchs de chaque essai ; les images promotionnelles ne montrent pas AnyPS5.",
   "es": "Paquete PS5 reportado PPSA99313. Conserva versión, host y patches por prueba; imágenes promocionales no muestran AnyPS5."
  }
 }
});
Object.assign(editorial,{
 "greak-memories-of-azur": {
  "genre": "platform",
  "names": {
   "zh": "格雷克：阿祖尔的回忆"
  },
  "overview": {
   "en": "An opening forest image leaves movement and the wider journey untested.",
   "zh": "森林首场景之外，移动与后续旅程仍待验证。",
   "ar": "صورة الغابة الأولى تترك الحركة والرحلة اللاحقة غير مختبرتين.",
   "pt": "A floresta inicial deixa movimento e jornada por testar.",
   "de": "Erstes Waldbild lässt Bewegung und weitere Reise offen.",
   "fr": "La forêt initiale laisse mouvement et voyage à tester.",
   "es": "El bosque inicial deja movimiento y viaje sin probar."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA02849. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA02849，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA02849؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA02849; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA02849; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA02849 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA02849; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "the-pathless": {
  "genre": "adventure",
  "names": {
   "zh": "无路之旅"
  },
  "overview": {
   "en": "A startup pool failure is separate from a general PC memory requirement.",
   "zh": "启动内存池失败与通用PC内存要求分开。",
   "ar": "فشل مجمع البدء منفصل عن متطلب ذاكرة PC عام.",
   "pt": "Falha do pool inicial não define RAM geral.",
   "de": "Startpool-Fehler definiert keinen allgemeinen RAM-Bedarf.",
   "fr": "L’échec du pool initial ne fixe pas de RAM générale.",
   "es": "El fallo del pool inicial no fija RAM general."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA01826. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC. Publisher artwork identifies PPSA01825, a different regional package; it does not identify this test.",
   "zh": "报告PS5包PPSA01826，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。 发行商图片对应不同地区包PPSA01825，不用于认定本次测试身份。",
   "ar": "حزمة PS5 PPSA01826؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC. صورة الناشر للحزمة الإقليمية PPSA01825 لا تحدد هذا الاختبار.",
   "pt": "Pacote PS5 PPSA01826; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado. Arte do editor identifica pacote regional PPSA01825, não este teste.",
   "de": "PS5-Paket PPSA01826; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg. Herausgeberbild nennt anderes Regionalpaket PPSA01825, nicht diesen Test.",
   "fr": "Paquet PS5 PPSA01826 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC. Image éditeur : autre paquet régional PPSA01825, pas cet essai.",
   "es": "Paquete PS5 PPSA01826; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC. Imagen editorial de otro paquete regional PPSA01825, no de esta prueba."
  }
 },
 "call-of-the-sea": {
  "genre": "adventure",
  "names": {
   "zh": "海之呼唤"
  },
  "overview": {
   "en": "The matching allocation size in another title is a clue, not a shared fix.",
   "zh": "与另一游戏相同的分配尺寸是线索，不是共同修复。",
   "ar": "حجم تخصيص مماثل في عنوان آخر دليل لا إصلاح مشترك.",
   "pt": "Pedido igual noutro título é pista, não fix comum.",
   "de": "Gleiche Anfrage in anderem Titel ist Spur, kein gemeinsamer Fix.",
   "fr": "Même requête ailleurs : piste, pas correctif commun.",
   "es": "Misma petición en otro título es pista, no arreglo común."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA01546. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA01546，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA01546؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA01546; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA01546; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA01546 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA01546; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "persona-3-reload": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "女神异闻录3 Reload"
  },
  "overview": {
   "en": "Iwatodai walking is a milestone before the next shader-call blocker.",
   "zh": "岩户台行走是下一shader调用阻碍前的有限进展。",
   "ar": "المشي في Iwatodai تقدم قبل عائق shader التالي.",
   "pt": "Andar em Iwatodai precede o bloqueio shader seguinte.",
   "de": "Iwatodai-Bewegung liegt vor dem nächsten Shaderblocker.",
   "fr": "Marcher à Iwatodai précède le prochain blocage shader.",
   "es": "Andar en Iwatodai precede el siguiente bloqueo shader."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA10872. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA10872，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA10872؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA10872; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA10872; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA10872 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA10872; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "dreamcore": {
  "genre": "adventure",
  "names": {
   "zh": "梦核"
  },
  "overview": {
   "en": "A loading-screen counter does not establish exploration.",
   "zh": "加载画面的计数不能证明探索可用。",
   "ar": "عداد التحميل لا يثبت الاستكشاف.",
   "pt": "O contador de carga não valida exploração.",
   "de": "Ladezähler belegt keine Erkundung.",
   "fr": "Le compteur de chargement ne valide pas l’exploration.",
   "es": "El contador de carga no valida exploración."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA24781. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA24781，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA24781؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA24781; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA24781; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA24781 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA24781; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "morrowind-openmw-homebrew": {
  "genre": "rpg",
  "names": {
   "zh": "晨风OpenMW自制移植"
  },
  "overview": {
   "en": "This PS5 homebrew reaches a data check; Morrowind content was not supplied.",
   "zh": "此PS5自制移植仅到数据检查，未提供晨风内容。",
   "ar": "هذا منفذ PS5 homebrew يصل فحص البيانات دون محتوى Morrowind.",
   "pt": "Port homebrew PS5 só chega ao controlo de dados, sem Morrowind.",
   "de": "PS5-Homebrewport bis Datenprüfung, ohne Morrowind-Inhalte.",
   "fr": "Port homebrew PS5 jusqu’au contrôle, sans données Morrowind.",
   "es": "Port homebrew PS5 hasta control, sin datos Morrowind."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA99630. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA99630，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA99630؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA99630; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA99630; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA99630 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA99630; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "ffta-recomp-homebrew": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "FFTA重编译自制移植"
  },
  "overview": {
   "en": "The cartridge-dependent homebrew stops before presenting its missing-data screen.",
   "zh": "依赖卡带数据的自制移植在缺数据界面呈现前停止。",
   "ar": "homebrew يحتاج كارتريدج ويتوقف قبل عرض شاشة غيابه.",
   "pt": "Homebrew dependente de cartucho para antes de apresentar aviso.",
   "de": "Cartridge-Homebrew stoppt vor Darstellung der Fehlermeldung.",
   "fr": "Homebrew à cartouche bloque avant d’afficher son avertissement.",
   "es": "Homebrew de cartucho para antes de mostrar su aviso."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA98512. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA98512，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA98512؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA98512; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA98512; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA98512 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA98512; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "graven": {
 "genre": "shooter",
 "names": {
  "zh": "GRAVEN"
 },
 "overview": {
  "en": "Windows now reaches menus and the boat intro, with severe rendering errors and no verified manual play.",
  "zh": "Windows现到菜单及船上片头，但渲染错误严重、无手动游玩验证。",
  "ar": "Windows يصل قوائم/مقدمة قارب مع رسومات معيبة ودون لعب يدوي مثبت.",
  "pt": "Windows chega menus/intro do barco, com imagem errada e sem jogo manual validado.",
  "de": "Windows bisMenü/Bootintro mit Grafikfehlern, manuellesSpiel unbestätigt.",
  "fr": "Windows jusqu’aux menus/intro bateau avec rendu erroné, jeu manuel non validé.",
  "es": "Windows hasta menús/intro barco con render erróneo y sin juego manual validado."
 },
 "related": [
  "astro-bot",
  "lodoss-deedlit"
 ],
 "editionNote": {
  "en": "Reported PS5 package PPSA09614. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
  "zh": "报告PS5包PPSA09614，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
  "ar": "حزمة PS5 PPSA09614؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
  "pt": "Pacote PS5 PPSA09614; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
  "de": "PS5-Paket PPSA09614; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
  "fr": "Paquet PS5 PPSA09614 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
  "es": "Paquete PS5 PPSA09614; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
 }
},
 "outer-wilds": {
  "genre": "adventure",
  "names": {
   "zh": "星际拓荒"
  },
  "overview": {
   "en": "Outdoor stills after Wake Up do not establish sustained navigation.",
   "zh": "Wake Up后的户外静帧不能证明持续导航。",
   "ar": "صور الخارج بعد Wake Up لا تثبت تنقلاً مستمراً.",
   "pt": "Imagens após Wake Up não provam navegação contínua.",
   "de": "Außenstandbilder nach Wake Up belegen keine dauerhafte Navigation.",
   "fr": "Images après Wake Up ne prouvent pas la navigation soutenue.",
   "es": "Imágenes tras Wake Up no prueban navegación sostenida."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA08102. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC. Publisher artwork identifies PPSA08101, a different regional package; it does not identify this test.",
   "zh": "报告PS5包PPSA08102，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。 发行商图片对应不同地区包PPSA08101，不用于认定本次测试身份。",
   "ar": "حزمة PS5 PPSA08102؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC. صورة الناشر للحزمة الإقليمية PPSA08101 لا تحدد هذا الاختبار.",
   "pt": "Pacote PS5 PPSA08102; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado. Arte do editor identifica pacote regional PPSA08101, não este teste.",
   "de": "PS5-Paket PPSA08102; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg. Herausgeberbild nennt anderes Regionalpaket PPSA08101, nicht diesen Test.",
   "fr": "Paquet PS5 PPSA08102 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC. Image éditeur : autre paquet régional PPSA08101, pas cet essai.",
   "es": "Paquete PS5 PPSA08102; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC. Imagen editorial de otro paquete regional PPSA08101, no de esta prueba."
  }
 },
 "metal-gear-solid-master-collection": {
  "genre": "action",
  "names": {
   "zh": "合金装备：大师合集版"
  },
  "overview": {
   "en": "This PS5 PS1-game package keeps launcher, intro and Dock measurements separate.",
   "zh": "此PS5的PS1游戏封装分别记录启动器、片头及Dock测量。",
   "ar": "حزمة PS1 على PS5 تفصل قياس المشغل والمقدمة وDock.",
   "pt": "Pacote PS1 naPS5 separa launcher, intro e Dock.",
   "de": "PS5-PS1-Paket trennt Launcher, Intro und Dock-Messung.",
   "fr": "Paquet PS1 surPS5 sépare lanceur, intro et Dock.",
   "es": "Paquete PS1 enPS5 separa lanzador, intro y Dock."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA14363. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA14363，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA14363؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA14363; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA14363; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA14363 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA14363; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "raptor-homebrew": {
  "genre": "shooter",
  "names": {
   "zh": "猛禽：暗影召唤自制移植"
  },
  "overview": {
   "en": "A played first mission belongs to this shareware-data homebrew port.",
   "zh": "首任务游玩属于此需shareware数据的自制移植。",
   "ar": "المهمة الأولى تخص منفذ homebrew ببيانات shareware.",
   "pt": "Primeira missão pertence ao port homebrew com dados shareware.",
   "de": "Erste Mission gehört zum Shareware-Homebrewport.",
   "fr": "Première mission du port homebrew avec données shareware.",
   "es": "Primera misión del port homebrew con datos shareware."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA94002. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA94002，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA94002؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA94002; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA94002; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA94002 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA94002; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "ghostrunner-2": {
  "genre": "action",
  "names": {
   "zh": "幽灵行者2"
  },
  "overview": {
   "en": "Movement, death and respawn work in a slow, patched first-level sample.",
   "zh": "缓慢的补丁首关样本中验证移动、死亡和重生。",
   "ar": "الحركة والموت والعودة تعمل في عينة أولى بطيئة معدلة.",
   "pt": "Movimento, morte e respawn numa amostra inicial lenta com patches.",
   "de": "Bewegung, Tod, Respawn im langsamen gepatchten Startlevel.",
   "fr": "Mouvement, mort et retour dans un premier niveau lent corrigé.",
   "es": "Movimiento, muerte y respawn en muestra inicial lenta con patches."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA09911. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA09911，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA09911؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA09911; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA09911; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA09911 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA09911; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "severed-steel": {
  "genre": "shooter",
  "names": {
   "zh": "断钢"
  },
  "overview": {
   "en": "The looping-menu video investigation still lacks console timing evidence.",
   "zh": "菜单循环视频排查仍缺主机时间戳证据。",
   "ar": "تحقيق فيديو القائمة المتكرر يفتقر لدليل توقيت الكونسل.",
   "pt": "Vídeo em loop do menu ainda sem prova de timing console.",
   "de": "Menüvideoschleife weiterhin ohne Konsolenzeitbeleg.",
   "fr": "Vidéo de menu en boucle sans preuve de timing console.",
   "es": "Vídeo del menú en bucle sin prueba de timing consola."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA05106. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA05106，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA05106؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA05106; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA05106; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA05106 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA05106; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "hamster-playground": {
  "genre": "sandbox",
  "names": {
   "zh": "仓鼠游乐场"
  },
  "overview": {
   "en": "House loading and a tutorial notebook leave later play and persistence open.",
   "zh": "房屋加载及教程手册之后，后续游玩与持久化待验。",
   "ar": "تحميل البيت ودفتر التعليم يتركان اللعب والحفظ مفتوحين.",
   "pt": "Casa/tutorial deixam jogo posterior e persistência em aberto.",
   "de": "Haus/Tutorialbuch lassen Folgespiel und Persistenz offen.",
   "fr": "Maison/tutoriel laissent suite et persistance ouvertes.",
   "es": "Casa/tutorial dejan juego posterior y persistencia pendientes."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06652. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA06652，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA06652؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA06652; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA06652; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA06652 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA06652; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "overcooked-all-you-can-eat": {
  "genre": "action",
  "names": {
   "zh": "胡闹厨房：全都好吃"
  },
  "overview": {
   "en": "Campaign menus are not kitchen gameplay or cooperative validation.",
   "zh": "Campaign菜单不等于厨房游玩或合作验证。",
   "ar": "قوائم Campaign ليست لعب مطبخ أو إثبات تعاون.",
   "pt": "Menus Campaign não validam cozinha ou cooperação.",
   "de": "Campaign-Menüs belegen weder Küchenspiel noch Koop.",
   "fr": "Menus Campaign sans validation cuisine ou coop.",
   "es": "Menús Campaign no validan cocina ni coop."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA01528. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA01528，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA01528؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA01528; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA01528; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA01528 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA01528; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "octopath-traveler-ii": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "歧路旅人2"
  },
  "overview": {
   "en": "Initial Settings performance is separate from battles and exploration.",
   "zh": "初始设置性能与战斗及探索分开。",
   "ar": "أداء الإعدادات الأولية منفصل عن القتال والاستكشاف.",
   "pt": "Definições iniciais são distintas de combate/exploração.",
   "de": "Anfangseinstellungen getrennt von Kampf und Erkundung.",
   "fr": "Réglages initiaux distincts du combat et de l’exploration.",
   "es": "Ajustes iniciales separados de combate y exploración."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA09809. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC. Publisher artwork identifies PPSA09797, PPSA10805, a different regional package; it does not identify this test.",
   "zh": "报告PS5包PPSA09809，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。 发行商图片对应不同地区包PPSA09797, PPSA10805，不用于认定本次测试身份。",
   "ar": "حزمة PS5 PPSA09809؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC. صورة الناشر للحزمة الإقليمية PPSA09797, PPSA10805 لا تحدد هذا الاختبار.",
   "pt": "Pacote PS5 PPSA09809; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado. Arte do editor identifica pacote regional PPSA09797, PPSA10805, não este teste.",
   "de": "PS5-Paket PPSA09809; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg. Herausgeberbild nennt anderes Regionalpaket PPSA09797, PPSA10805, nicht diesen Test.",
   "fr": "Paquet PS5 PPSA09809 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC. Image éditeur : autre paquet régional PPSA09797, PPSA10805, pas cet essai.",
   "es": "Paquete PS5 PPSA09809; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC. Imagen editorial de otro paquete regional PPSA09797, PPSA10805, no de esta prueba."
  }
 },
 "terminator-2d-no-fate": {
  "genre": "action",
  "names": {
   "zh": "终结者2D：命运不定"
  },
  "overview": {
   "en": "A first-level HUD does not cover later stages or other modes.",
   "zh": "首关HUD不能覆盖后续关卡或其他模式。",
   "ar": "HUD أول مستوى لا يغطي اللاحق أو الأوضاع الأخرى.",
   "pt": "HUD inicial não cobre fases/modos seguintes.",
   "de": "Erstes HUD deckt keine Folgestufen/Modi ab.",
   "fr": "Premier HUD sans validation suite/autres modes.",
   "es": "HUD inicial no cubre fases/modos posteriores."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA25872. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA25872，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA25872؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA25872; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA25872; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA25872 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA25872; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "art-of-rally": {
 "genre": "racing",
 "names": {
  "zh": "拉力艺术"
 },
 "overview": {
  "en": "A lit car scene leaves actual driving and rally completion unverified.",
  "zh": "有光照的车辆场景尚未验证实际驾驶或完赛。",
  "ar": "مشهد سيارة مضاء لا يثبت القيادة أو إكمال رالي.",
  "pt": "Cena do carro deixa condução e fim do rali por verificar.",
  "de": "Beleuchtete Autoszene belegt kein Fahren/Rallyeende.",
  "fr": "Scène de voiture éclairée sans conduite/fin de rallye validées.",
  "es": "Escena de coche iluminada sin conducción/final validados."
 },
 "related": [
  "astro-bot",
  "lodoss-deedlit"
 ],
 "editionNote": {
  "en": "Reported PS5 package PPSA03659. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC. Publisher artwork identifies PPSA03686, a different regional package; it does not identify this test. The pictured Australia DLC promotion does not establish that this DLC was tested.",
  "zh": "报告PS5包PPSA03659，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。 发行商图片对应不同地区包PPSA03686，不用于认定本次测试身份。 图片中的 Australia DLC 宣传不代表该 DLC 已实测。",
  "ar": "حزمة PS5 PPSA03659؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC. صورة الناشر للحزمة الإقليمية PPSA03686 لا تحدد هذا الاختبار. إعلان Australia DLC بالصورة لا يثبت اختباره.",
  "pt": "Pacote PS5 PPSA03659; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado. Arte do editor identifica pacote regional PPSA03686, não este teste. A promoção Australia DLC na imagem não prova esse DLC testado.",
  "de": "PS5-Paket PPSA03659; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg. Herausgeberbild nennt anderes Regionalpaket PPSA03686, nicht diesen Test. Australia-DLC-Werbung im Bild belegt keinen DLC-Test.",
  "fr": "Paquet PS5 PPSA03659 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC. Image éditeur : autre paquet régional PPSA03686, pas cet essai. La promotion Australia DLC visible ne prouve pas son test.",
  "es": "Paquete PS5 PPSA03659; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC. Imagen editorial de otro paquete regional PPSA03686, no de esta prueba. La promoción Australia DLC de la imagen no prueba que se probara."
 }
},
 "syphon-filter": {
  "genre": "action",
  "names": {
   "zh": "虹吸战士PS5经典版"
  },
  "overview": {
   "en": "The PS5 Classics wrapper needs fonts and a touchpad START before the PS1 mission.",
   "zh": "PS5经典封装需字体与触摸板START才能到PS1任务。",
   "ar": "غلاف PS5 Classics يحتاج خطوطاً وSTART touchpad قبل مهمة PS1.",
   "pt": "PS5 Classics precisa fontes/START touchpad antes da missão PS1.",
   "de": "PS5-Classics-Hülle braucht Fonts/Touchpad-START vor PS1-Mission.",
   "fr": "PS5 Classics nécessite polices/START touchpad avant mission PS1.",
   "es": "PS5 Classics necesita fuentes/START touchpad antes de misión PS1."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06323. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA06323，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA06323؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA06323; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA06323; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA06323 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA06323; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "arkanoid-eternal-battle": {
  "genre": "puzzle",
  "names": {
   "zh": "打砖块：永恒对战"
  },
  "overview": {
   "en": "An online connection failure says nothing about untested offline paddle play.",
   "zh": "联机失败不能代替未测离线打砖块的结论。",
   "ar": "فشل الاتصال لا يحكم على لعب offline غير المختبر.",
   "pt": "Falha online não decide o jogo offline não testado.",
   "de": "Onlinefehler sagt nichts über ungeprüftes Offline-Spiel.",
   "fr": "Échec online sans conclusion sur le jeu offline non testé.",
   "es": "Fallo online no decide el juego offline sin probar."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06327. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA06327，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA06327؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA06327; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA06327; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA06327 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA06327; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "afterdream": {
  "genre": "adventure",
  "names": {
   "zh": "梦后"
  },
  "overview": {
   "en": "Opening dialogue renders, while exploration and later rooms remain untested.",
   "zh": "开场对话可呈现，探索及后续房间待验。",
   "ar": "حوار البداية يظهر، الاستكشاف والغرف التالية غير مختبرة.",
   "pt": "Diálogo inicial visível, exploração e salas seguintes por testar.",
   "de": "Anfangsdialog sichtbar, Erkundung/Folgeräume offen.",
   "fr": "Dialogue initial visible, exploration et pièces suivantes ouvertes.",
   "es": "Diálogo inicial visible, exploración y cuartos posteriores pendientes."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA18391. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA18391，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA18391؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA18391; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA18391; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA18391 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA18391; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "fallen-legion-rise-to-glory": {
  "genre": "rpg",
  "names": {
   "zh": "堕落军团：荣耀崛起"
  },
  "overview": {
   "en": "A battle tutorial display does not verify the combat system.",
   "zh": "战斗教程画面不能验证战斗系统。",
   "ar": "عرض تعليم القتال لا يثبت نظام القتال.",
   "pt": "Tutorial visível não valida sistema de combate.",
   "de": "Kampftutorialbild bestätigt kein Kampfsystem.",
   "fr": "L’affichage du tutoriel ne valide pas le combat.",
   "es": "Ver tutorial no valida sistema de combate."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA07645. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA07645，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA07645؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA07645; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA07645; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA07645 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA07645; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "alex-kidd-miracle-world-dx": {
  "genre": "platform",
  "names": {
   "zh": "阿历克斯小子奇幻世界DX"
  },
  "overview": {
   "en": "The first-level image leaves platform control and progression open.",
   "zh": "首关图像之后，平台操作与进度仍待验。",
   "ar": "صورة أول مستوى تترك التحكم والتقدم مفتوحين.",
   "pt": "Imagem inicial deixa controlo/progresso por testar.",
   "de": "Erstes Levelbild lässt Plattformsteuerung/Fortschritt offen.",
   "fr": "Première image laisse contrôle/progression ouverts.",
   "es": "Imagen inicial deja control/progreso pendientes."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA02664. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA02664，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA02664؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA02664; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA02664; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA02664 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA02664; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "biped": {
  "genre": "puzzle",
  "names": {
   "zh": "只只大冒险"
  },
  "overview": {
   "en": "Manual training and paired pause tests preserve audio and stability limits.",
   "zh": "手动训练与暂停对照保留声音及稳定性限制。",
   "ar": "تدريب يدوي واختبار pause يحفظان حدود الصوت والاستقرار.",
   "pt": "Treino manual e pares pause preservam limites de som/estabilidade.",
   "de": "Manuelles Training/Pausepaare behalten Ton-/Stabilitätsgrenzen.",
   "fr": "Tutoriel manuel/paires pause conservent limites son/stabilité.",
   "es": "Tutorial manual/pares pausa conservan límites audio/estabilidad."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA24589. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA24589，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA24589؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA24589; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA24589; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA24589 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA24589; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "call-of-duty-black-ops-ii": {
  "genre": "shooter",
  "names": {
   "zh": "使命召唤：黑色行动2"
  },
  "overview": {
   "en": "A deliberate voice-activity refusal is distinct from older war-room menus.",
   "zh": "有意保留的voice activity拒绝与旧作战室菜单分开。",
   "ar": "رفض voice activity المقصود منفصل عن قائمة قديمة.",
   "pt": "Recusa voice activity intencional é distinta do menu antigo.",
   "de": "Absichtliche Voice-Verweigerung getrennt vom alten Menü.",
   "fr": "Refus voice volontaire distinct des anciens menus.",
   "es": "Rechazo voice deliberado separado del menú antiguo."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA34502. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA34502，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA34502؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA34502; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA34502; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA34502 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA34502; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "rush-2-recompiled": {
  "genre": "racing",
  "names": {
   "zh": "Rush 2重编译自制移植"
  },
  "overview": {
   "en": "This N64-to-PS5 homebrew stops before a rendered race on the tested Windows build.",
   "zh": "此N64到PS5自制重编译在Windows测试构建中停于比赛呈现前。",
   "ar": "منفذ N64 إلى PS5 يتوقف قبل عرض سباق على Windows المختبر.",
   "pt": "Homebrew N64 paraPS5 para antes da corrida no Windows testado.",
   "de": "N64-PS5-Homebrew stoppt vor Rennen auf geprüftem Windows.",
   "fr": "Homebrew N64 versPS5 bloque avant course sur Windows testé.",
   "es": "Homebrew N64 aPS5 para antes de carrera en Windows probado."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA69423. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA69423，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA69423؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA69423; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA69423; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA69423 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA69423; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "wave-race-64-recompiled": {
  "genre": "racing",
  "names": {
   "zh": "水上摩托64重编译自制移植"
  },
  "overview": {
   "en": "A PS5 homebrew recompilation is separate from the original Nintendo platform.",
   "zh": "PS5自制重编译与原Nintendo平台测试分开。",
   "ar": "إعادة ترجمة PS5 homebrew منفصلة عن منصة Nintendo الأصلية.",
   "pt": "Recompilação PS5 homebrew distinta da plataforma Nintendo original.",
   "de": "PS5-Homebrewrekompilat getrennt von ursprünglicher Nintendo-Plattform.",
   "fr": "Recompilation PS5 homebrew distincte de Nintendo original.",
   "es": "Recompilación PS5 homebrew separada de Nintendo original."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA69424. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA69424，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA69424؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA69424; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA69424; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA69424 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA69424; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 },
 "trails-sky-2nd-chapter": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "空之轨迹2nd"
  },
  "overview": {
   "en": "The reported PitchShift module is a DSP research gap, not a verified passthrough.",
   "zh": "PitchShift模块属于DSP研究缺口，不是已证passthrough。",
   "ar": "وحدة PitchShift فجوة DSP وليست passthrough مثبتاً.",
   "pt": "PitchShift é lacuna DSP, não passthrough validado.",
   "de": "PitchShift ist DSP-Forschungslücke, kein geprüfter Passthrough.",
   "fr": "PitchShift : lacune DSP, pas passthrough validé.",
   "es": "PitchShift es vacío DSP, no passthrough validado."
  },
  "related": [
   "astro-bot",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA35169. Preserve the content version, tested build and host of each observation. Promotional artwork is not an AnyPS5 screenshot or proof of tested DLC.",
   "zh": "报告PS5包PPSA35169，逐次保留内容版本、测试构建与主机；宣传图不是AnyPS5截图或DLC已测证明。",
   "ar": "حزمة PS5 PPSA35169؛ احفظ نسخة وبناء ومضيف كل تجربة. الصورة دعائية لا تشغيل AnyPS5 أو إثبات DLC.",
   "pt": "Pacote PS5 PPSA35169; preserve versão/build/host por observação. Arte promocional não é captura AnyPS5 ou DLC provado.",
   "de": "PS5-Paket PPSA35169; Inhaltsversion/Build/Host je Beobachtung beachten. Werbung kein AnyPS5-Bild/DLC-Testbeleg.",
   "fr": "Paquet PS5 PPSA35169 ; conservez version/build/hôte. Image promotionnelle, pas capture AnyPS5/preuve DLC.",
   "es": "Paquete PS5 PPSA35169; conserva versión/build/host. Arte promocional no es captura AnyPS5/prueba DLC."
  }
 }
});
Object.assign(editorial,{
 "oregon-trail": {
  "genre": "adventure",
  "names": {
   "zh": "俄勒冈之旅"
  },
  "overview": {
   "en": "Empty presented frames leave the Oregon journey unverified.",
   "zh": "空呈现帧尚未证明俄勒冈旅途可以开始。",
   "ar": "إطارات فارغة لا تثبت بدء الرحلة.",
   "pt": "Frames vazios não validam o início da viagem.",
   "de": "Leere Frames belegen keinen Reisebeginn.",
   "fr": "Les images vides ne valident pas le voyage.",
   "es": "Frames vacíos no validan el viaje."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA19244; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA19244；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA19244؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA19244; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA19244; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA19244 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA19244; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "dusk-diver-2": {
  "genre": "rpg",
  "names": {
   "zh": "酉闪町2"
  },
  "overview": {
   "en": "Very slow settings screens and a faster draft remain menu evidence.",
   "zh": "缓慢设置界面及提速草案仍属于菜单证据。",
   "ar": "إعدادات بطيئة ومسودة أسرع، كلاهما دليل قائمة.",
   "pt": "Opções lentas e draft mais rápido continuam a ser menus.",
   "de": "Langsame Einstellungen und schnellerer Draft bleiben Menübelege.",
   "fr": "Réglages lents et brouillon plus rapide restent des menus.",
   "es": "Ajustes lentos y draft rápido siguen siendo menús."
  },
  "related": [
   "persona-3-reload",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06565; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA06565；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA06565؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA06565; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA06565; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA06565 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA06565; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "blue-reflection-quartet": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "BLUE REFLECTION四部曲"
  },
  "overview": {
   "en": "The first collection executable reaches an audio-module stop; the others are untested.",
   "zh": "合集首个执行文件停于声音模块，其余尚未测试。",
   "ar": "أول ملف بالمجموعة يتوقف عند وحدة صوت، والبقية غير مختبرة.",
   "pt": "Primeiro executável para no áudio; restantes por testar.",
   "de": "Erstes Programm stoppt am Audiomodul, übrige ungeprüft.",
   "fr": "Premier exécutable bloqué sur l’audio, autres non testés.",
   "es": "Primer ejecutable para en audio, otros sin probar."
  },
  "related": [
   "persona-3-reload",
   "trails-sky-2nd-chapter"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA33655; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA33655；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA33655؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA33655; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA33655; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA33655 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA33655; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "arcrunner": {
  "genre": "shooter",
  "names": {
   "zh": "ArcRunner"
  },
  "overview": {
   "en": "The opening street cinematic is visible, but playable control is unverified.",
   "zh": "街道片头已显示，实际操作仍待验证。",
   "ar": "مقدمة الشارع تظهر دون تحكم مثبت.",
   "pt": "Intro de rua visível, controlo por validar.",
   "de": "Straßenintro sichtbar, Spielsteuerung offen.",
   "fr": "Intro de rue visible, contrôle non validé.",
   "es": "Intro calle visible, control sin validar."
  },
  "related": [
   "graven",
   "severed-steel"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA21406; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA21406；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA21406؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA21406; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA21406; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA21406 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA21406; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "bendy-dark-revival": {
  "genre": "adventure",
  "names": {
   "zh": "班迪与黑暗复兴"
  },
  "overview": {
   "en": "Descriptor diagnostics narrow the investigation without proving a fix.",
   "zh": "描述符诊断缩小排查范围，尚不构成修复。",
   "ar": "تشخيص descriptors يضيق البحث دون إصلاح مثبت.",
   "pt": "Diagnóstico limita a investigação sem provar um fix.",
   "de": "Deskriptordiagnose grenzt ein, belegt keinen Fix.",
   "fr": "Le diagnostic précise l’enquête sans prouver un correctif.",
   "es": "El diagnóstico acota la investigación sin probar arreglo."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA27624; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA27624；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA27624؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA27624; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA27624; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA27624 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA27624; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "apotris-homebrew": {
  "genre": "puzzle",
  "names": {
   "zh": "Apotris自制移植"
  },
  "overview": {
   "en": "This PS5 homebrew plays after a conditional syscall-trapping conversion.",
   "zh": "这款PS5自制移植在带syscall trap条件的转换后进入游玩。",
   "ar": "Homebrew PS5 يعمل بعد تحويل مشروط بحصر syscall.",
   "pt": "Homebrew PS5 joga após conversão com syscall trap.",
   "de": "PS5-Homebrew spielt nach Konvertierung mit Syscall-Trap.",
   "fr": "Homebrew PS5 jouable après conversion avec syscall trap.",
   "es": "Homebrew PS5 juega tras convertir con syscall trap."
  },
  "related": [
   "biped",
   "animal-well"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA98513; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA98513；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA98513؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA98513; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA98513; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA98513 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA98513; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "unbound-worlds-apart": {
  "genre": "platform",
  "names": {
   "zh": "无界：世界之外"
  },
  "overview": {
   "en": "A shared engine allocation failure is not a universal PC RAM requirement.",
   "zh": "共同引擎分配失败不能当作通用PC内存要求。",
   "ar": "فشل تخصيص محرك مشترك ليس متطلب RAM عاماً.",
   "pt": "Falha comum do motor não define RAM geral.",
   "de": "Gemeinsamer Enginefehler definiert keinen allgemeinen RAM-Bedarf.",
   "fr": "Une allocation moteur échouée ne fixe pas la RAM générale.",
   "es": "Fallo compartido del motor no fija RAM general."
  },
  "related": [
   "hollow-knight-silksong",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA03274; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA03273, not this tested package.",
   "zh": "报告PS5包PPSA03274；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA03273，不用于认定本次测试包。",
   "ar": "حزمة PS5 PPSA03274؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA03273 لا الحزمة المختبرة.",
   "pt": "Pacote PS5 PPSA03274; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA03273, não o teste.",
   "de": "PS5-Paket PPSA03274; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA03273, nicht des Tests.",
   "fr": "Paquet PS5 PPSA03274 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA03273, pas cet essai.",
   "es": "Paquete PS5 PPSA03274; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA03273, no de esta prueba."
  }
 },
 "gex-trilogy": {
  "genre": "platform",
  "names": {
   "zh": "Gex三部曲"
  },
  "overview": {
   "en": "Fonts unlock menus and a level card, before verified Gex control.",
   "zh": "字体解决后到菜单与关卡卡片，Gex实际控制仍未验证。",
   "ar": "الخطوط تفتح القوائم وبطاقة مستوى دون تحكم مثبت.",
   "pt": "Fontes permitem menus/cartão, controlo por validar.",
   "de": "Fonts öffnen Menüs/Levelkarte, Steuerung offen.",
   "fr": "Polices ouvrent menus/carte, contrôle non validé.",
   "es": "Fuentes abren menús/tarjeta, control sin validar."
  },
  "related": [
   "hollow-knight-silksong",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA28542; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA28542；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA28542؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA28542; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA28542; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA28542 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA28542; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "worms-armageddon-anniversary": {
 "genre": "strategy",
 "names": {
  "zh": "百战天虫末日浩劫周年版"
 },
 "overview": {
  "en": "A current-main Windows report passes the old network-event stop and reaches menus; a match is unverified.",
  "zh": "当前main的Windows报告越过旧网络事件停止并到菜单，对战未验证。",
  "ar": "تقرير Windows على Main يتجاوز عطل الشبكة إلى القوائم، دون مباراة مثبتة.",
  "pt": "Windows na main passa falha antiga até menus, partida não verificada.",
  "de": "Windows auf Main passiert alten Netzwerkstopp bis Menü, Partie offen.",
  "fr": "Windows sur main passe ancien arrêt réseau jusqu’aux menus, partie non vérifiée.",
  "es": "Windows en main supera fallo de red hasta menús, partida sin verificar."
 },
 "related": [
  "lodoss-deedlit",
  "biped"
 ],
 "editionNote": {
  "en": "Reported PS5 package PPSA20052; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
  "zh": "报告PS5包PPSA20052；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
  "ar": "حزمة PS5 PPSA20052؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
  "pt": "Pacote PS5 PPSA20052; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
  "de": "PS5-Paket PPSA20052; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
  "fr": "Paquet PS5 PPSA20052 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
  "es": "Paquete PS5 PPSA20052; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
 }
},
 "sea-of-stars": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "星之海"
  },
  "overview": {
   "en": "A static opening illustration is separate from menus and battles.",
   "zh": "静止开场主图与菜单、战斗分开记录。",
   "ar": "رسم البداية الثابت منفصل عن القوائم والقتال.",
   "pt": "Ilustração inicial não é menu ou batalha.",
   "de": "Statisches Startmotiv ist kein Menü/Kampf.",
   "fr": "Illustration initiale distincte des menus/combats.",
   "es": "Ilustración inicial distinta de menús/combates."
  },
  "related": [
   "persona-3-reload",
   "trails-sky-2nd-chapter"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA07587; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA07586, PPSA15426, not this tested package. Sunset Edition marketing does not identify the reported content or prove those extras were tested.",
   "zh": "报告PS5包PPSA07587；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA07586, PPSA15426，不用于认定本次测试包。 Sunset Edition营销不代表报告内容或附加内容已测试。",
   "ar": "حزمة PS5 PPSA07587؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA07586, PPSA15426 لا الحزمة المختبرة. تسويق Sunset Edition لا يثبت محتوى التقرير أو اختبار الإضافات.",
   "pt": "Pacote PS5 PPSA07587; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA07586, PPSA15426, não o teste. Marketing Sunset Edition não identifica conteúdo relatado/extra testado.",
   "de": "PS5-Paket PPSA07587; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA07586, PPSA15426, nicht des Tests. Sunset Edition-Werbung belegt keine getesteten Zusatzinhalte.",
   "fr": "Paquet PS5 PPSA07587 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA07586, PPSA15426, pas cet essai. Marketing Sunset Edition ne prouve pas les suppléments testés.",
   "es": "Paquete PS5 PPSA07587; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA07586, PPSA15426, no de esta prueba. Marketing Sunset Edition no prueba extras ensayados."
  }
 },
 "disgaea-6-complete": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "魔界战记6完整版"
  },
  "overview": {
   "en": "Zed’s first story dialogue leaves tactical combat untested.",
   "zh": "Zed首段剧情对话之后，战棋战斗尚待测试。",
   "ar": "حوار Zed الأول لا يثبت القتال التكتيكي.",
   "pt": "Primeiro diálogo de Zed não valida combate.",
   "de": "Zeds erster Dialog belegt keinen Taktikkampf.",
   "fr": "Premier dialogue de Zed sans combat validé.",
   "es": "Primer diálogo de Zed sin combate validado."
  },
  "related": [
   "persona-3-reload",
   "trails-sky-2nd-chapter"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06228; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA06228；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA06228؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA06228; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA06228; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA06228 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA06228; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "goat-simulator-3": {
  "genre": "sandbox",
  "names": {
   "zh": "模拟山羊3"
  },
  "overview": {
   "en": "A quest HUD appears, with severe exposure errors and untested movement.",
   "zh": "任务HUD已出现，但曝光异常明显、移动仍未验证。",
   "ar": "HUD مهمة مع تعرض خاطئ وحركة غير مختبرة.",
   "pt": "HUD de missão com exposição errada, movimento por testar.",
   "de": "Quest-HUD mit Belichtungsfehlern, Bewegung offen.",
   "fr": "HUD de quête, exposition erronée, mouvement non testé.",
   "es": "HUD misión con exposición errónea, movimiento sin probar."
  },
  "related": [
   "wobbly-life",
   "animal-well"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA04158; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA04159, not this tested package. Multiverse/DLC marketing does not identify the reported content or prove those extras were tested.",
   "zh": "报告PS5包PPSA04158；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA04159，不用于认定本次测试包。 Multiverse/DLC营销不代表报告内容或附加内容已测试。",
   "ar": "حزمة PS5 PPSA04158؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA04159 لا الحزمة المختبرة. تسويق Multiverse/DLC لا يثبت محتوى التقرير أو اختبار الإضافات.",
   "pt": "Pacote PS5 PPSA04158; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA04159, não o teste. Marketing Multiverse/DLC não identifica conteúdo relatado/extra testado.",
   "de": "PS5-Paket PPSA04158; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA04159, nicht des Tests. Multiverse/DLC-Werbung belegt keine getesteten Zusatzinhalte.",
   "fr": "Paquet PS5 PPSA04158 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA04159, pas cet essai. Marketing Multiverse/DLC ne prouve pas les suppléments testés.",
   "es": "Paquete PS5 PPSA04158; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA04159, no de esta prueba. Marketing Multiverse/DLC no prueba extras ensayados."
  }
 },
 "bugsnax": {
  "genre": "adventure",
  "names": {
   "zh": "虫子快餐店"
  },
  "overview": {
   "en": "The tested alpha-to-coverage pattern still stops the first frame.",
   "zh": "本次alpha-to-coverage模式仍阻止首帧。",
   "ar": "نمط alpha-to-coverage المختبر يمنع أول إطار.",
   "pt": "Padrão alpha-to-coverage impede primeiro frame.",
   "de": "Getestetes Alpha-to-Coverage stoppt ersten Frame.",
   "fr": "Motif alpha-to-coverage bloque la première image.",
   "es": "Patrón alpha-to-coverage bloquea primer frame."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA01503; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA01502, not this tested package.",
   "zh": "报告PS5包PPSA01503；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA01502，不用于认定本次测试包。",
   "ar": "حزمة PS5 PPSA01503؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA01502 لا الحزمة المختبرة.",
   "pt": "Pacote PS5 PPSA01503; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA01502, não o teste.",
   "de": "PS5-Paket PPSA01503; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA01502, nicht des Tests.",
   "fr": "Paquet PS5 PPSA01503 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA01502, pas cet essai.",
   "es": "Paquete PS5 PPSA01503; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA01502, no de esta prueba."
  }
 },
 "eternal-cylinder": {
  "genre": "adventure",
  "names": {
   "zh": "永恒圆柱"
  },
  "overview": {
   "en": "A patched first scene remains very slow, dark and untested for control.",
   "zh": "补丁首场景仍极慢、偏暗，操作未验证。",
   "ar": "مشهد معدل بطيء ومظلم بلا تحكم مختبر.",
   "pt": "Primeira cena com patches lenta/escura, controlo aberto.",
   "de": "Gepatchte Szene sehr langsam/dunkel, Steuerung offen.",
   "fr": "Scène corrigée lente/sombre, contrôle non testé.",
   "es": "Escena con patches lenta/oscura, control pendiente."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06369; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA06369；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA06369؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA06369; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA06369; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA06369 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA06369; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "coffee-talk": {
 "genre": "adventure",
 "names": {
  "zh": "咖啡心语"
 },
 "overview": {
  "en": "Windows now reaches profile creation and café dialogue after converting the extra Unity modules.",
  "zh": "补转额外Unity模块后，Windows现可到建档及咖啡店对话。",
  "ar": "Windows يصل الملف وحوار المقهى بعد تحويل وحدات Unity الإضافية.",
  "pt": "Windows chega perfil/diálogo após converter módulos Unity extra.",
  "de": "Windows erreicht Profil/Cafédialog nach Konvertierung zusätzlicher Unity-Module.",
  "fr": "Windows atteint profil/dialogue après conversion des modules Unity supplémentaires.",
  "es": "Windows llega perfil/diálogo tras convertir módulos Unity extra."
 },
 "related": [
  "animal-well",
  "greak-memories-of-azur"
 ],
 "editionNote": {
  "en": "Reported PS5 package PPSA07057; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA07056, not this tested package.",
  "zh": "报告PS5包PPSA07057；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA07056，不用于认定本次测试包。",
  "ar": "حزمة PS5 PPSA07057؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA07056 لا الحزمة المختبرة.",
  "pt": "Pacote PS5 PPSA07057; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA07056, não o teste.",
  "de": "PS5-Paket PPSA07057; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA07056, nicht des Tests.",
  "fr": "Paquet PS5 PPSA07057 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA07056, pas cet essai.",
  "es": "Paquete PS5 PPSA07057; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA07056, no de esta prueba."
 }
},
 "bloodrayne-betrayal-fresh-bites": {
  "genre": "action",
  "names": {
   "zh": "吸血莱恩：背叛新鲜之咬"
  },
  "overview": {
   "en": "Options reaches Forest Assault, but combat and later chapters are untested.",
   "zh": "Options推进到Forest Assault，战斗与后续章节未验。",
   "ar": "Options يصل Forest Assault دون قتال أو فصول لاحقة مختبرة.",
   "pt": "Options chega a Forest Assault; combate/resto por testar.",
   "de": "Options bis Forest Assault, Kampf/Folgekapitel offen.",
   "fr": "Options jusqu’à Forest Assault, combat/suite non testés.",
   "es": "Options llega Forest Assault, combate/resto sin probar."
  },
  "related": [
   "hollow-knight-silksong",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA03364; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA03364；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA03364؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA03364; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA03364; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA03364 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA03364; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "super-crazy-rhythm-castle": {
  "genre": "rhythm",
  "names": {
   "zh": "超级疯狂节奏城堡"
  },
  "overview": {
   "en": "The first level is visible after document acceptance, before rhythm validation.",
   "zh": "接受文档后已显示首关，节奏游玩仍未验证。",
   "ar": "أول مستوى بعد الوثائق دون تحقق الإيقاع.",
   "pt": "Primeiro nível após documentos, ritmo por validar.",
   "de": "Erstes Level nach Dokumenten, Rhythmus offen.",
   "fr": "Premier niveau après documents, rythme non validé.",
   "es": "Primer nivel tras documentos, ritmo sin validar."
  },
  "related": [
   "taiko-rhythm-festival",
   "animal-well"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA05986; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA05986；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA05986؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA05986; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA05986; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA05986 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA05986; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "taiko-rhythm-festival": {
  "genre": "rhythm",
  "names": {
   "zh": "太鼓之达人咚咚雷音祭"
  },
  "overview": {
   "en": "Reported offline songs work; online music subscriptions remain unavailable.",
   "zh": "已有离线曲目报告，在线音乐订阅仍不可用。",
   "ar": "أغانٍ offline مبلغ عنها، الاشتراك online غير متاح.",
   "pt": "Músicas offline relatadas; subscrição online indisponível.",
   "de": "Offline-Songs gemeldet, Online-Musikabo nicht verfügbar.",
   "fr": "Chansons offline rapportées, abonnement online indisponible.",
   "es": "Canciones offline reportadas, suscripción online no disponible."
  },
  "related": [
   "super-crazy-rhythm-castle",
   "animal-well"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA16441; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC. Artwork identifies different regional package(s) PPSA16411, PPSA24085, not this tested package. Deluxe marketing does not identify the reported content or prove those extras were tested.",
   "zh": "报告PS5包PPSA16441；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。 图片对应不同地区包PPSA16411, PPSA24085，不用于认定本次测试包。 Deluxe营销不代表报告内容或附加内容已测试。",
   "ar": "حزمة PS5 PPSA16441؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر. الصورة لحزمة إقليمية مختلفة PPSA16411, PPSA24085 لا الحزمة المختبرة. تسويق Deluxe لا يثبت محتوى التقرير أو اختبار الإضافات.",
   "pt": "Pacote PS5 PPSA16441; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado. Imagem de pacote regional diferente PPSA16411, PPSA24085, não o teste. Marketing Deluxe não identifica conteúdo relatado/extra testado.",
   "de": "PS5-Paket PPSA16441; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC. Bild eines anderen Regionalpakets PPSA16411, PPSA24085, nicht des Tests. Deluxe-Werbung belegt keine getesteten Zusatzinhalte.",
   "fr": "Paquet PS5 PPSA16441 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé. Image d’un autre paquet régional PPSA16411, PPSA24085, pas cet essai. Marketing Deluxe ne prouve pas les suppléments testés.",
   "es": "Paquete PS5 PPSA16441; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado. Imagen de otro paquete regional PPSA16411, PPSA24085, no de esta prueba. Marketing Deluxe no prueba extras ensayados."
  }
 },
 "bendy-ink-machine": {
  "genre": "adventure",
  "names": {
   "zh": "班迪与油印机"
  },
  "overview": {
   "en": "The first workshop corridor appears, with visual and control limits unresolved.",
   "zh": "工作室首走廊已出现，图形与操作边界仍待查。",
   "ar": "ممر الورشة يظهر مع حدود صورة/تحكم مفتوحة.",
   "pt": "Corredor aparece, imagem/controlo por verificar.",
   "de": "Werkstattkorridor sichtbar, Grafik/Steuerung offen.",
   "fr": "Couloir visible, image/contrôle à vérifier.",
   "es": "Pasillo visible, imagen/control pendientes."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA27616; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA27616；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA27616؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA27616; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA27616; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA27616 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA27616; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "last-faith": {
  "genre": "action",
  "names": {
   "zh": "最后的信仰"
  },
  "overview": {
   "en": "A first arena and HUD are evidence before verified combat.",
   "zh": "首竞技场及HUD属于战斗验证前的有限证据。",
   "ar": "ساحة وHUD قبل قتال مثبت.",
   "pt": "Primeira arena/HUD antes de combate validado.",
   "de": "Erste Arena/HUD vor bestätigtem Kampf.",
   "fr": "Première arène/HUD avant combat validé.",
   "es": "Primera arena/HUD antes de combate validado."
  },
  "related": [
   "hollow-knight-silksong",
   "lodoss-deedlit"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA09346; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA09346；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA09346؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA09346; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA09346; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA09346 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA09346; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "ps5x360-homebrew": {
  "genre": "sandbox",
  "names": {
   "zh": "PS5X360自制移植"
  },
  "overview": {
   "en": "This Xenia-based PS5 homebrew is not a successful Xbox 360 game test.",
   "zh": "这款基于Xenia的PS5自制移植并非Xbox360游戏成功测试。",
   "ar": "Homebrew PS5 مبني على Xenia ليس اختبار لعبة360 ناجحاً.",
   "pt": "Homebrew PS5 baseado emXenia não prova jogo360.",
   "de": "Xenia-PS5-Homebrew belegt kein erfolgreiches360-Spiel.",
   "fr": "Homebrew PS5 basé surXenia ne prouve pas un jeu360.",
   "es": "Homebrew PS5 basado enXenia no prueba juego360."
  },
  "related": [
   "wobbly-life",
   "goat-simulator-3"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA50011; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA50011；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA50011؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA50011; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA50011; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA50011 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA50011; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "ikai": {
  "genre": "adventure",
  "names": {
   "zh": "异界"
  },
  "overview": {
   "en": "A private integration reaches menus, while loading and import failures remain.",
   "zh": "私有集成进入菜单，加载与导入失败仍待解决。",
   "ar": "دمج خاص يصل قائمة مع فشل تحميل/import باقٍ.",
   "pt": "Integração privada chega menus, carga/imports por resolver.",
   "de": "Privatintegration bis Menü, Lade-/Importfehler bleiben.",
   "fr": "Intégration privée jusqu’aux menus, chargement/imports ouverts.",
   "es": "Integración privada hasta menús, carga/imports pendientes."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA06584; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA06584；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA06584؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA06584; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA06584; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA06584 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA06584; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 },
 "jumanji-ppsa03973": {
  "genre": "adventure",
  "names": {
   "zh": "勇敢者游戏PPSA03973"
  },
  "overview": {
   "en": "A candidate import policy correlates with crashes; their cause is unproven.",
   "zh": "候选导入策略与崩溃有关联，原因尚未证明。",
   "ar": "سياسة import مرشحة ترتبط بأعطال دون سبب مثبت.",
   "pt": "Política import candidata associa-se a crashes, sem causa provada.",
   "de": "Importkandidat korreliert mit Crashs, Ursache unbewiesen.",
   "fr": "Politique import candidate associée aux crashs, cause non prouvée.",
   "es": "Política import candidata asociada a crashes, causa no probada."
  },
  "related": [
   "animal-well",
   "greak-memories-of-azur"
  ],
  "editionNote": {
   "en": "Reported PS5 package PPSA03973; check each report’s content version, build and host. Publisher art is promotional, not AnyPS5 output or tested DLC.",
   "zh": "报告PS5包PPSA03973；逐次核对内容版本、构建与主机。发行商图片仅宣传资料，非AnyPS5画面或已测DLC。",
   "ar": "حزمة PS5 PPSA03973؛ راجع نسخة وبناء ومضيف كل تقرير. الصورة دعائية لا تشغيل AnyPS5 أو DLC مختبر.",
   "pt": "Pacote PS5 PPSA03973; confira versão/build/host por relatório. Arte promocional, não captura AnyPS5 ou DLC testado.",
   "de": "PS5-Paket PPSA03973; Version/Build/Host je Bericht beachten. Werbung, kein AnyPS5-Bild oder getestetes DLC.",
   "fr": "Paquet PS5 PPSA03973 ; vérifiez version/build/hôte. Art promotionnel, pas sortie AnyPS5 ou DLC testé.",
   "es": "Paquete PS5 PPSA03973; comprueba versión/build/host. Arte promocional, no salida AnyPS5 o DLC probado."
  }
 }
});
Object.assign(editorial,{
 "vice-city-definitive": {
  "genre": "action",
  "names": {
   "zh": "侠盗猎车手：罪恶都市最终版"
  },
  "overview": {
   "en": "Tommy Vercetti’s neon-lit city belongs to the remastered trilogy. Here, PlayGo and queue-wait experiments remain distinct from demonstrated open-world play.",
   "zh": "汤米的霓虹城市属于重制三部曲；这里的PlayGo及队列等待实验，仍与已证实的开放世界游玩分开。",
   "ar": "مدينة تومي المضيئة جزء من الثلاثية المحسنة؛ تجارب PlayGo والانتظار هنا منفصلة عن لعب عالم مفتوح مثبت.",
   "pt": "A cidade de Tommy integra a trilogia remasterizada; experiências PlayGo e esperas não equivalem a jogo aberto demonstrado.",
   "de": "Tommys Neonstadt gehört zur überarbeiteten Trilogie; PlayGo-/Warteexperimente belegen hier noch kein offenes Weltspiel.",
   "fr": "La ville de Tommy appartient à la trilogie remastérisée ; expériences PlayGo/attentes distinctes du jeu ouvert démontré.",
   "es": "La ciudad de Tommy pertenece a la trilogía remasterizada; experimentos PlayGo/esperas separados del juego abierto demostrado."
  },
  "related": [
   "gta-iii-definitive",
   "control-resonant"
  ],
  "editionNote": {
   "en": "The run identifies PPSA03530. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
   "zh": "报告标识PPSA03530；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
   "ar": "التقرير يحدد PPSA03530؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
   "pt": "Relato identifica PPSA03530; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
   "de": "Bericht nennt PPSA03530; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
   "fr": "Rapport identifie PPSA03530 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
   "es": "Relato identifica PPSA03530; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
  }
 },
 "far-changing-tides": {
  "genre": "puzzle",
  "names": {
   "zh": "远方：涌变暗潮"
  },
  "overview": {
   "en": "A boy and his ship explore a flooded landscape. Patched swimming and one checkpoint load are meaningful opening evidence, with audio and the voyage still unverified.",
   "zh": "男孩与船探索被淹没的世界；补丁游泳及一次存档读入属于片头证据，声音和完整航程仍待验证。",
   "ar": "فتى وسفينته يستكشفان عالماً غارقاً؛ سباحة معدلة وتحميل حفظ واحد دليل بداية، والصوت والرحلة غير مؤكدين.",
   "pt": "Um rapaz e o barco exploram um mundo inundado; natação modificada e um save são provas iniciais, som/viagem por verificar.",
   "de": "Junge und Schiff erkunden eine Flutwelt; gepatchtes Schwimmen und ein Save sind frühe Belege, Ton/Reise bleiben offen.",
   "fr": "Un garçon et son bateau explorent un monde inondé ; nage modifiée et un save sont des preuves initiales, son/voyage ouverts.",
   "es": "Un chico y su barco exploran un mundo inundado; natación modificada y un save son pruebas iniciales, audio/viaje pendientes."
  },
  "related": [
   "greak-memories-of-azur",
   "animal-well"
  ],
  "editionNote": {
   "en": "The run identifies PPSA03766. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
   "zh": "报告标识PPSA03766；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
   "ar": "التقرير يحدد PPSA03766؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
   "pt": "Relato identifica PPSA03766; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
   "de": "Bericht nennt PPSA03766; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
   "fr": "Rapport identifie PPSA03766 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
   "es": "Relato identifica PPSA03766; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
  }
 },
 "darkest-dungeon-ii": {
 "genre": "turnBasedRpg",
 "names": {
  "zh": "暗黑地牢II"
 },
 "overview": {
  "en": "Four heroes travel by stagecoach between turn-based encounters. One Linux composition completes the opening battle and road event; later battles and campaign stability remain unqualified.",
  "zh": "四名英雄乘马车穿行并参加回合制遭遇；一组Linux补丁构建完成首战与道路事件，后续战斗和战役稳定性仍未验证。",
  "ar": "أربعة أبطال بعربة بين مواجهات بالأدوار؛ تركيب Linux يكمل أول معركة وحدث طريق، دون إثبات استقرار الحملة.",
  "pt": "Quatro heróis viajam de diligência entre combates por turnos; uma composição Linux termina o primeiro combate/evento, não valida campanha.",
  "de": "Vier Helden reisen per Kutsche zwischen Rundenkämpfen; eine Linux-Komposition schafft ersten Kampf/Ereignis, Kampagne bleibt ungeprüft.",
  "fr": "Quatre héros voyagent en diligence entre combats au tour par tour ; un montage Linux finit premier combat/événement, campagne non validée.",
  "es": "Cuatro héroes viajan en diligencia entre combates por turnos; una composición Linux termina primer combate/evento, campaña sin validar."
 },
 "related": [
  "persona-3-reload",
  "trails-sky-2nd-chapter"
 ],
 "editionNote": {
  "en": "The run identifies PPSA19591. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras. Artwork lists regional package PPSA19590, different from the tested package. The cover advertises Oblivion Edition; tested DLC/edition contents are not established.",
  "zh": "报告标识PPSA19591；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。 配图列出另一地区包PPSA19590，与报告包不同。 封面标有Oblivion Edition，不证明实测DLC或版本内容。",
  "ar": "التقرير يحدد PPSA19591؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة. الصورة تسمي حزمة إقليمية مختلفة PPSA19590. الغلاف Oblivion Edition لا يثبت DLC أو محتوى النسخة المختبرة.",
  "pt": "Relato identifica PPSA19591; confira versão/executável/host/alterações. Arte promocional não prova extras testados. Arte lista pacote regional distinto PPSA19590. Capa Oblivion Edition não prova DLC/conteúdo testado.",
  "de": "Bericht nennt PPSA19591; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras. Bild nennt anderes Regionalpaket PPSA19590. Oblivion-Edition-Cover belegt kein getestetes DLC/Edition.",
  "fr": "Rapport identifie PPSA19591 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés. Image nomme un autre paquet régional PPSA19590. Couverture Oblivion Edition ne prouve pas DLC/contenu testé.",
  "es": "Relato identifica PPSA19591; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados. Imagen identifica otro paquete regional PPSA19590. Portada Oblivion Edition no prueba DLC/contenido probado."
 }
},
 "final-fantasy-resonance": {
  "genre": "turnBasedRpg",
  "names": {
   "zh": "最终幻想Resonance"
  },
  "overview": {
   "en": "An HD-2D crystal adventure with turn-based battles. Reviewed Linux evidence stops in the narrated opening; a separate RTX5080 gameplay claim lacks enough host details for a platform conclusion.",
   "zh": "HD-2D水晶冒险采用回合制战斗；已审核Linux证据停在旁白片头，另一RTX5080游玩主张缺少足够主机资料，未归入平台结论。",
   "ar": "مغامرة بلورات HD-2D وقتال بالأدوار؛ دليل Linux عند المقدمة، وادعاء لعب RTX5080 منفصل تنقصه تفاصيل المضيف.",
   "pt": "Aventura HD-2D de cristais e turnos; prova Linux fica na intro, outro relato RTX5080 carece de detalhes do host.",
   "de": "HD-2D-Kristallabenteuer mit Rundenkämpfen; Linux-Beleg endet im Intro, separater RTX5080-Spielbericht hat unvollständigen Hostkontext.",
   "fr": "Aventure HD-2D de cristaux au tour par tour ; preuve Linux limitée à l’intro, récit RTX5080 distinct sans contexte hôte suffisant.",
   "es": "Aventura HD-2D de cristales por turnos; prueba Linux queda en intro, relato RTX5080 separado con host insuficiente."
  },
  "related": [
   "persona-3-reload",
   "trails-sky-2nd-chapter"
  ],
  "editionNote": {
   "en": "The run identifies PPSA31544. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras. The source page mixes standard/deluxe PPSA31544 and demo PPSA36303; its image does not identify the tested edition.",
   "zh": "报告标识PPSA31544；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。 资料页同时列标准／豪华PPSA31544和试玩PPSA36303，图片不识别实测版本。",
   "ar": "التقرير يحدد PPSA31544؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة. الصفحة تجمع standard/deluxe31544 وdemo36303؛ الصورة لا تحدد النسخة المختبرة.",
   "pt": "Relato identifica PPSA31544; confira versão/executável/host/alterações. Arte promocional não prova extras testados. Página mistura standard/deluxe31544/demo36303; imagem não identifica edição testada.",
   "de": "Bericht nennt PPSA31544; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras. Seite mischt Standard/Deluxe31544/Demo36303; Bild identifiziert keine Testedition.",
   "fr": "Rapport identifie PPSA31544 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés. Page mélange standard/deluxe31544/demo36303 ; image ne fixe pas l’édition testée.",
   "es": "Relato identifica PPSA31544; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados. Página mezcla estándar/deluxe31544/demo36303; imagen no identifica edición probada."
  }
 },
 "ghostwire-tokyo": {
  "genre": "action",
  "names": {
   "zh": "幽灵线：东京"
  },
  "overview": {
   "en": "Tokyo’s supernatural mystery pairs exploration with spectral combat. Windows tests here reach settings and menus, with intermittent storage refusal and a separate render-thread timeout.",
   "zh": "东京的超自然谜团结合探索与灵能战斗；这里的Windows测试仅到设置和菜单，仍有偶发storage拒绝及独立RenderThread超时。",
   "ar": "لغز طوكيو الخارق يجمع الاستكشاف والقتال الروحي؛ اختبارات Windows تصل إعدادات/قوائم مع رفض storage ومهلة عرض منفصلة.",
   "pt": "Mistério sobrenatural de Tóquio mistura exploração/combate; testes Windows chegam opções/menus com recusa storage e timeout separados.",
   "de": "Tokios Geistermysterium verbindet Erkundung/Kampf; Windows hier bis Einstellungen/Menüs mit Storage-Stopp und separatem Render-Timeout.",
   "fr": "Mystère surnaturel de Tokyo mêlant exploration/combat ; Windows jusqu’aux réglages/menus, refus storage et délai de rendu distincts.",
   "es": "Misterio sobrenatural de Tokio con exploración/combate; Windows hasta ajustes/menús, rechazo storage y timeout separados."
  },
  "related": [
   "gta-iii-definitive",
   "control-resonant"
  ],
  "editionNote": {
   "en": "The run identifies PPSA01337. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
   "zh": "报告标识PPSA01337；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
   "ar": "التقرير يحدد PPSA01337؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
   "pt": "Relato identifica PPSA01337; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
   "de": "Bericht nennt PPSA01337; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
   "fr": "Rapport identifie PPSA01337 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
   "es": "Relato identifica PPSA01337; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
  }
 },
 "lost-in-play": {
  "genre": "puzzle",
  "names": {
   "zh": "迷失游乐园"
  },
  "overview": {
   "en": "A cartoon puzzle adventure built around fantastical creatures and visual storytelling. Converting bundled Unity modules changes the reported startup result, while the follow-up’s timing and build remain incomplete.",
   "zh": "以奇幻生物和视觉叙事构成的卡通解谜冒险；补转Unity模块改变了报告中的启动结果，后续时长和构建资料仍不完整。",
   "ar": "مغامرة ألغاز كرتونية ومخلوقات خيالية؛ تحويل وحدات Unity يغير نتيجة البدء المبلغ عنها، مع نقص مدة وبناء المتابعة.",
   "pt": "Aventura cartoon de puzzles e criaturas; converter módulos Unity muda o arranque relatado, mas duração/build do seguimento incompletos.",
   "de": "Cartoon-Rätselabenteuer mit Fantasiewesen; konvertierte Unity-Module ändern den Startbericht, Folge-Build/Dauer bleiben unvollständig.",
   "fr": "Aventure dessinée d’énigmes et créatures ; modules Unity convertis changent le démarrage rapporté, durée/build du suivi incomplets.",
   "es": "Aventura de puzles y criaturas de dibujos; convertir módulos Unity cambia el inicio reportado, duración/build posteriores incompletos."
  },
  "related": [
   "greak-memories-of-azur",
   "animal-well"
  ],
  "editionNote": {
   "en": "The run identifies PPSA22116. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
   "zh": "报告标识PPSA22116；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
   "ar": "التقرير يحدد PPSA22116؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
   "pt": "Relato identifica PPSA22116; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
   "de": "Bericht nennt PPSA22116; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
   "fr": "Rapport identifie PPSA22116 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
   "es": "Relato identifica PPSA22116; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
  }
 },
 "the-king-is-watching": {
  "genre": "roguelike",
  "names": {
   "zh": "国王在看着你"
  },
  "overview": {
   "en": "A roguelite kingdom produces resources where the king looks. Its Windows report already reaches gameplay, but intermittent guest-memory faults still lack a known trigger.",
   "zh": "Roguelite王国围绕国王注视的位置生产资源；Windows报告已进游戏，但偶发guest内存故障仍无已知触发条件。",
   "ar": "مملكة roguelite تنتج حيث ينظر الملك؛ تقرير Windows يبلغ اللعب مع أعطال ذاكرة guest متقطعة بلا محفز معروف.",
   "pt": "Reino roguelite produz onde o rei olha; relato Windows chega ao jogo, mas falhas de memória guest sem gatilho conhecido.",
   "de": "Roguelite-Königreich produziert unter dem Blick des Königs; Windows erreicht Spiel, sporadische Guest-Speicherfehler ohne bekannten Auslöser.",
   "fr": "Royaume roguelite produisant sous le regard du roi ; Windows atteint le jeu, fautes mémoire guest intermittentes sans déclencheur connu.",
   "es": "Reino roguelite produce bajo la mirada del rey; Windows llega al juego, fallos de memoria guest intermitentes sin desencadenante conocido."
  },
  "related": [
   "hades-ii",
   "darkest-dungeon-ii"
  ],
  "editionNote": {
   "en": "The run identifies PPSA34959. Match content version, executable, host and patches per report; promotional artwork does not identify tested extras.",
   "zh": "报告标识PPSA34959；逐次匹配内容版本、程序、主机与补丁，宣传图不证明附加内容已测试。",
   "ar": "التقرير يحدد PPSA34959؛ طابق النسخة والبرنامج والمضيف والتعديلات، والصورة الدعائية لا تثبت إضافات مختبرة.",
   "pt": "Relato identifica PPSA34959; confira versão/executável/host/alterações. Arte promocional não prova extras testados.",
   "de": "Bericht nennt PPSA34959; Version/Programm/Host/Patches abgleichen. Werbebild belegt keine getesteten Extras.",
   "fr": "Rapport identifie PPSA34959 ; vérifiez version/exécutable/hôte/patches. Image promotionnelle ne prouve pas les extras testés.",
   "es": "Relato identifica PPSA34959; comprueba versión/ejecutable/host/patches. Arte promocional no prueba extras probados."
  }
 }
});
Object.assign(editorial,{
 "octopath-traveler-0": {
  "genre": "turnBasedRpg",
  "overview": {
   "en": "An HD-2D role-playing adventure with a custom protagonist and town restoration. Character creation here is separate from battles and exploration.",
   "zh": "HD-2D角色扮演冒险，可创建主角并重建城镇；此处角色创建结果与战斗、探索分开。",
   "ar": "مغامرة HD-2D ببطل مخصص وإعمار بلدة؛ إنشاء الشخصية هنا منفصل عن القتال والاستكشاف.",
   "pt": "RPG HD-2D com protagonista criado e reconstrução de uma vila; criação não prova combate/exploração.",
   "de": "HD-2D-RPG mit eigener Figur und Stadtaufbau; Charaktererstellung belegt hier noch keine Kämpfe/Erkundung.",
   "fr": "RPG HD-2D avec personnage créé et reconstruction; création distincte des combats/exploration.",
   "es": "RPG HD-2D con protagonista propio y reconstrucción; creación separada de combate/exploración."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report: Asian28495/01.000.000. Art page listsJapanese28492 and demo29437, not this package.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 报告为亚洲28495／01.000.000；图片页列日本28492及试玩29437，与实测包不同。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. التقريرآسيوي 28495/01.000.000؛ الصورة لصفحة 28492 الياباني/demo29437.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato asiático28495/01.000.000; arte28492japonês/demo29437.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. BerichtAsien28495/01.000.000; BildseiteJapan28492/Demo29437.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. RapportAsie28495/01.000.000; page artJapon28492/démo29437.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. InformeAsia28495/01.000.000; páginaJapón28492/demo29437."
  },
  "related": [],
  "names": {
   "zh": "八方旅人0"
  }
 },
 "mouse-pi-for-hire": {
  "genre": "shooter",
  "overview": {
   "en": "A noir first-person shooter with hand-drawn cartoon visuals. The hotel-lobby walking report does not certify later combat or the campaign.",
   "zh": "黑色侦探风格第一人称射击，采用手绘卡通视觉；酒店大厅行走报告不验证后续战斗或全流程。",
   "ar": "تصويب أول بنكهةنوير ورسوم كرتونية؛ تقرير مشي الفندق لا يؤهل القتال اللاحق أو الحملة.",
   "pt": "Tiro na primeira pessoa noir com desenhos animados; andar no hotel não certifica combate/campanha.",
   "de": "Noir-Egoshooter mit gezeichnetem Cartoonstil; Hotelbewegung zertifiziert weder spätere Kämpfe noch Kampagne.",
   "fr": "FPS noir au dessin animé; marche à l’hôtel ne certifie ni combats ultérieurs ni campagne.",
   "es": "FPS noir de dibujos animados; andar por hotel no certifica combate posterior ni campaña."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado."
  },
  "related": [],
  "names": {
   "zh": "MOUSE: P.I. For Hire"
  }
 },
 "persona-5-royal": {
  "genre": "turnBasedRpg",
  "overview": {
   "en": "The Phantom Thieves combine Tokyo social life with supernatural turn-based battles. Loading patches and an ATLUS logo are not a playable Royal campaign.",
   "zh": "怪盗团的东京日常与异世界回合制战斗交织；加载补丁与ATLUS标志不等于皇家版剧情可玩。",
   "ar": "حياة طوكيو ومعارك خارقة بالأدوار؛ تصحيحات التحميل وشعار ATLUS ليسا حملة Royal قابلة للعب.",
   "pt": "Vida social em Tóquio e batalhas por turnos sobrenaturais; patches/logótipoATLUSnão provam campanhaRoyal.",
   "de": "Tokio-Alltag und übernatürliche Rundenkämpfe; Ladepatches/ATLUS-Logo belegen keine spielbare Royal-Kampagne.",
   "fr": "Vie sociale à Tokyo et combats surnaturels au tour par tour; patches/logoATLUSne prouvent pas une campagneRoyaljouable.",
   "es": "Vida social en Tokio y combates sobrenaturales por turnos; parches/logoATLUSno prueban campañaRoyaljugable."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. PS5report05110. Available page OG art is labelledPS4 and was rejected; USPS5listing05109 is another region.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测PS5为05110；可取OG素材标为PS4，已弃用，资料页USPS5的05109属另一地区。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير PS5 هو 05110؛ صورة OG موسومة PS4 رفضت، و USPS5 رقمه 05109 آخر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. PS5testado05110; OGmarcadoPS4rejeitado, USPS505109é outra região.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. PS5-Test05110; PS4-markiertesOGabgelehnt, US-PS505109andere Region.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. PS5testé05110; OGmarquéPS4écarté, USPS505109autre région.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. PS5probado05110; OGmarcadoPS4rechazado, USPS505109otra región."
  },
  "related": [],
  "names": {
   "zh": "女神异闻录5皇家版"
  }
 },
 "flashback-ppsa08546": {
  "genre": "action",
  "overview": {
   "en": "The upstream report calls PPSA08546 “Flashback”. Other title indexes associate this package with Flashback2; the subtitle awaits primary package confirmation. Depth-view diagnostics do not establish a playable level.",
   "zh": "上游将PPSA08546称作Flashback，其他目录关联Flashback2；副标题仍待原始包确认。深度视图诊断不证明可操作关卡。",
   "ar": "يسمي التقرير PPSA08546 بـ Flashback؛ فهارس أخرى تربطه بـ Flashback2، والعنوان الفرعي ينتظر تأكيد الحزمة. تشخيص العمق ليس مرحلة لعب.",
   "pt": "Upstream chamaPPSA08546Flashback; outros índices apontamFlashback2, subtítulo por confirmar no pacote. Diagnóstico de profundidade não prova nível jogável.",
   "de": "Upstream nenntPPSA08546Flashback; andere Indizes ordnenFlashback2zu, Untertitel braucht Paketbestätigung. Tiefendiagnose belegt kein spielbares Level.",
   "fr": "Upstream nommePPSA08546Flashback; d’autres index l’associent àFlashback2, sous-titre à confirmer par le paquet. Diagnostic profondeur ne prouve pas de niveau jouable.",
   "es": "Upstream llamaPPSA08546Flashback; otros índices lo asocian conFlashback2, subtítulo pendiente del paquete. Diagnóstico de profundidad no prueba nivel jugable."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado."
  },
  "related": [],
  "names": {
   "zh": "Flashback（PPSA08546）"
  }
 },
 "driftcheck": {
  "genre": "utility",
  "overview": {
   "en": "An open-source PS5 homebrew controller tester for stick drift, buttons and triggers. UI rendering and physical-controller validation have different evidence scopes.",
   "zh": "开源PS5自制手柄测试工具，检查摇杆漂移、按键与扳机；界面渲染和实体手柄测试有各自证据范围。",
   "ar": "أداة PS5 مفتوحة لاختبار انجراف العصا والأزرار والزناد؛ رسم الواجهة واختبار ذراع فعلي دليلان مختلفان.",
   "pt": "Ferramenta homebrew PS5 para deriva, botões e gatilhos; interface e ensaio de comando físico têm provas distintas.",
   "de": "Offener PS5-Homebrew-Controllertest für Drift, Tasten und Trigger; UI und physische Eingabe getrennt belegt.",
   "fr": "Outil homebrew PS5 ouvert pour dérive, boutons et gâchettes; interface et manette physique ont des preuves distinctes.",
   "es": "Herramienta homebrew PS5 abierta para deriva, botones y gatillos; interfaz y mando físico tienen evidencia distinta."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Homebrew98766. Windows UI test has unknown content version; Mac01.000.000 test uses Rosetta and unmerged runtime patches, not an officialMac release.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 自制98766；Windows界面测试内容版本未知，Mac01.000.000用Rosetta与未合运行时补丁，不是Mac正式发行。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. أداة 98766؛ نسخة Windows مجهولة، Mac01.000.000 مع Rosetta وتعديلات غير مدمجة، لا إصدار Mac رسمي.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Homebrew98766; versãoWindowsdesconhecida, Mac01.000.000comRosetta/patches abertos, não releaseMac.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Homebrew98766; Windows-Version unbekannt, Mac01.000.000mitRosetta/offenen Patches, keinMac-Release.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Homebrew98766; versionWindowsinconnue, Mac01.000.000avecRosetta/patches ouverts, pasreleaseMac.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Homebrew98766; versiónWindowsdesconocida, Mac01.000.000conRosetta/parches abiertos, no releaseMac."
  },
  "related": [],
  "names": {
   "zh": "DriftCheck手柄测试工具"
  }
 },
 "resident-evil-requiem": {
  "genre": "action",
  "overview": {
   "en": "Capcom’s survival-horror entry needs edition-specific verification. A saved-settings intro and an indirect-draw hang do not prove exploration or combat.",
   "zh": "卡普空生存恐怖新作须逐版本核验；已有设置后的片头和间接绘制挂起不证明探索或战斗。",
   "ar": "رعب بقاء Capcom يتطلب تحقق النسخة؛ مقدمة بإعداد محفوظ وتعليق رسم لا يثبتان استكشافاً أو قتالاً.",
   "pt": "Terror de sobrevivênciaCapcom exige edição exata; intro e bloqueio de draw não provam exploração/combate.",
   "de": "Capcoms Survivalhorror braucht Editionsprüfung; Intro mit Saveeinstellungen und Draw-Hang belegen keine Erkundung/Kämpfe.",
   "fr": "Survival horrorCapcom à vérifier par édition; intro avec réglages sauvegardés et draw bloqué ne prouvent pas exploration/combat.",
   "es": "Survival horrorCapcom exige edición concreta; intro con ajustes guardados y draw colgado no prueban exploración/combate."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report31246/01.200.000; the art page includes30803/36561, so it does not prove the reported region or edition.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测31246／01.200.000，图片页包含30803／36561，不证明报告地区或版本内容。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير 31246/01.200.000؛ صفحةالصورة 30803/36561 لا تثبت منطقته/نسخته.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato31246/01.200.000; arte30803/36561não prova região/edição testada.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Bericht31246/01.200.000; Bildseite30803/36561belegt Testregion/Edition nicht.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Rapport31246/01.200.000; art30803/36561ne fixe région/édition testée.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Informe31246/01.200.000; arte30803/36561no fija región/edición probada."
  },
  "related": [],
  "names": {
   "zh": "生化危机：安魂曲"
  }
 },
 "subnautica-below-zero": {
  "genre": "adventure",
  "overview": {
   "en": "An arctic underwater survival adventure on Planet4546B. Its opening-intro counters are separate from swimming, crafting and habitat building.",
   "zh": "在4546B冰冷海域求生的水下冒险；开场片头计数与潜游、制作和建造基地分开。",
   "ar": "بقاء تحت الماء في منطقة قطبية من 4546B؛ عداد المقدمة منفصل عن السباحة والصناعة والبناء.",
   "pt": "Sobrevivência subaquática no ártico de4546B; contadores da intro não provam natação, criação/construção.",
   "de": "Arktisches Unterwasserüberleben auf4546B; Introzähler getrennt von Schwimmen, Crafting/Basisbau.",
   "fr": "Survie sous-marine arctique sur4546B; compteurs d’intro distincts de nage, fabrication/construction.",
   "es": "Supervivencia submarina ártica en4546B; contadores de intro separados de nado, fabricación/construcción."
  },
  "editionNote": {
   "en": "Confirm this PS5 package and content version; other regions, PS4/native PC versions, DLC and promotional images do not identify the tested content. Report02457; promotional page02456 differs by region. Content version unstated.",
   "zh": "核对本PS5包及内容版本，其他地区、PS4／原生PC、DLC和宣传图不能识别实测内容。 实测02457与宣传页02456地区不同，实测内容版本未知。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ مناطق أخرى و PS4/PC و DLC والدعاية لا تحدد المحتوى المختبر. تقرير 02457 والصورة 02456 منطقة أخرى؛ نسخة المحتوى مجهولة.",
   "pt": "Confirme pacotePS5/versão; outras regiões, PS4/PC, DLC e imagem promocional não identificam conteúdo testado. Relato02457, arte02456outra região; versão desconhecida.",
   "de": "PS5-Paket/Version prüfen; andere Regionen, PS4/PC, DLC und Werbebilder identifizieren Testinhalt nicht. Bericht02457, Bild02456andere Region; Inhaltsversion unbekannt.",
   "fr": "Vérifiez paquetPS5/version; autres régions, PS4/PC, DLC et images promotionnelles ne fixent pas le contenu testé. Rapport02457, art02456autre région; version inconnue.",
   "es": "Verifica paquetePS5/versión; otras regiones, PS4/PC, DLC e imagen promocional no identifican contenido probado. Informe02457, arte02456otra región; versión desconocida."
  },
  "related": [],
  "names": {
   "zh": "深海迷航：零度之下"
  }
 }
});
Object.assign(editorial,{
 "aila": {
  "genre": "adventure",
  "overview": {
   "en": "A horror adventure about testing unsettling simulated experiences. This PS5 report distinguishes the first dark room from later puzzles and combat.",
   "zh": "以测试惊悚模拟体验为设定的恐怖冒险；本PS5报告将首个黑暗房间与后续解谜、战斗分开。",
   "ar": "مغامرة رعب لاختبار تجارب محاكاة مزعجة؛ تقرير PS5 يفصل الغرفة الأولى عن الألغاز والقتال اللاحق.",
   "pt": "Aventura de terror sobre testar simulações inquietantes; a primeira sala PS5 não prova puzzles ou combates posteriores.",
   "de": "Horrorabenteuer über verstörende Simulationen; der erste PS5-Raum belegt keine späteren Rätsel oder Kämpfe.",
   "fr": "Aventure horrifique de simulations inquiétantes; la première pièce PS5 ne prouve pas les énigmes ou combats ultérieurs.",
   "es": "Aventura de terror sobre simulaciones inquietantes; la primera habitación PS5 no prueba puzles o combates posteriores."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "A.I.L.A"
  }
 },
 "deathloop": {
  "genre": "shooter",
  "overview": {
   "en": "Colt explores Blackreef in a repeating day. Beach progression does not verify breaking the loop or online invasions.",
   "zh": "Colt在不断重置的一天探索黑礁岛；海滩进度不验证打破循环或线上入侵。",
   "ar": "يستكشف Colt جزيرة Blackreef في يوم متكرر؛ الشاطئ لا يثبت كسر الحلقة أو الغزو الشبكي.",
   "pt": "Colt explora Blackreef num dia repetido; chegar à praia não valida quebrar o ciclo nem invasões online.",
   "de": "Colt erkundet Blackreef in einer Zeitschleife; Strandfortschritt belegt weder Schleifenabschluss noch Online-Invasionen.",
   "fr": "Colt explore Blackreef dans une journée répétée; la plage ne valide ni fin de boucle ni invasions en ligne.",
   "es": "Colt explora Blackreef en un día repetido; la playa no valida romper el ciclo ni invasiones en línea."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.Report PPSA01670 differs from the artwork page’s PPSA01302. HDR/SDR settings and patch scope remain explicit.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。 实测01670与配图页01302地区包不同，保留HDR／SDR及补丁边界。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر. التقرير01670 يختلف عن صفحة الصورة01302؛ HDR/SDR والتعديلات منفصلة.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado. Relato01670 difere da arte01302; HDR/SDR e patches explícitos.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht. Bericht01670 anders als Bildseite01302; HDR/SDR/Patches getrennt.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé. Rapport01670 différent de l’art01302; HDR/SDR et patches explicites.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado. Informe01670 distinto del arte01302; HDR/SDR y parches explícitos."
  },
  "related": [],
  "names": {
   "zh": "死亡循环"
  }
 },
 "neptunia-reverse": {
  "genre": "turnBasedRpg",
  "overview": {
   "en": "A Gamindustri role-playing adventure with party battles. Opening dialogue and its audio fix do not establish dungeon or battle compatibility.",
   "zh": "以Gamindustri为舞台的队伍战斗角色扮演；开场对话及音频修改不证明迷宫或战斗兼容。",
   "ar": "مغامرة أدوار في Gamindustri بمعارك فريق؛ الحوار والصوت في البداية لا يثبتان الأبراج أو القتال.",
   "pt": "RPG em Gamindustri com batalhas de equipa; diálogo inicial e áudio não validam masmorras ou combate.",
   "de": "Gamindustri-RPG mit Gruppenkämpfen; Anfangsdialog und Audiofix belegen keine Dungeon- oder Kampfkompatibilität.",
   "fr": "RPG à Gamindustri avec combats en équipe; dialogue initial et correctif audio ne prouvent ni donjons ni batailles.",
   "es": "RPG en Gamindustri con batallas de grupo; diálogo inicial y arreglo de audio no prueban mazmorras o combate."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "海王星 ReVerse"
  }
 },
 "skyrim-ppsa03747": {
  "genre": "rpg",
  "overview": {
   "en": "An open-world role-playing journey across Skyrim. The scripted cart opening is distinct from freely exploring, fighting or saving.",
   "zh": "在天际省展开的开放世界角色扮演；脚本马车开场与自由探索、战斗和存档分开。",
   "ar": "رحلة أدوار بعالم Skyrim المفتوح؛ عربة البداية المكتوبة منفصلة عن الاستكشاف والقتال والحفظ.",
   "pt": "RPG de mundo aberto em Skyrim; a carroça guiada difere de explorar, combater e gravar livremente.",
   "de": "Offenes Skyrim-Rollenspiel; geskriptete Wagenfahrt ist getrennt von freier Erkundung, Kampf und Speichern.",
   "fr": "RPG en monde ouvert à Skyrim; trajet scripté distinct d’exploration libre, combat et sauvegarde.",
   "es": "RPG de mundo abierto en Skyrim; carro inicial por guion distinto de explorar, combatir y guardar libremente."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.The matching store identifies Special Edition; the report does not establish Anniversary content. Cross-generation art is not used as PS5 test imagery.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。 匹配商店页为特别版，报告不证明周年内容；跨世代配图不冒充PS5实测。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر. المتجر المطابق يسمي Special Edition؛ لا دليل Anniversary، والصورة المشتركة ليست اختبار PS5.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado. Loja identifica Special Edition, sem provar Anniversary; arte entre gerações não é teste PS5.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht. Store bestätigt Special Edition, keine Anniversary-Inhalte belegt; Mehrgenerationenbild kein PS5-Test.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé. Boutique identifie Special Edition sans preuve Anniversary; art multigénération distinct d’un test PS5.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado. Tienda identifica Special Edition sin probar Anniversary; arte multigeneración no es test PS5."
  },
  "related": [],
  "names": {
   "zh": "上古卷轴5：天际 特别版"
  }
 },
 "days-gone-remastered": {
  "genre": "action",
  "overview": {
   "en": "Deacon travels an infected Oregon by motorcycle. This PS5 remaster is separate from the PS4 release and native PC Broken Road content.",
   "zh": "Deacon骑摩托穿越感染后的俄勒冈；此PS5复刻版与PS4及原生PC的Broken Road内容分开。",
   "ar": "يسافر Deacon بدراجته في أوريغون المصابة؛ نسخة PS5 منفصلة عن PS4 ومحتوى Broken Road على PC.",
   "pt": "Deacon percorre Oregon infetado de mota; edição PS5 distinta de PS4 e Broken Road nativo para PC.",
   "de": "Deacon fährt durch infiziertes Oregon; PS5-Remaster getrennt von PS4 und nativem PC-Broken-Road-Inhalt.",
   "fr": "Deacon traverse l’Oregon infecté à moto; remaster PS5 distinct de PS4 et du contenu PC natif Broken Road.",
   "es": "Deacon cruza Oregón infectado en moto; remaster PS5 distinto de PS4 y contenido PC nativo Broken Road."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "往日不再 复刻版"
  }
 },
 "mewgenics": {
  "genre": "strategy",
  "overview": {
   "en": "A tactical roguelike built around cats, inherited traits and turn-based encounters. Menu, battle dialogue and move-grid costs need separate comparisons.",
   "zh": "围绕猫、遗传特征和回合制遭遇展开的战术Roguelike；菜单、战斗对话、移动格的开销需分别比较。",
   "ar": "روغلايك تكتيكي بقطط وصفات موروثة ومعارك أدوار؛ القائمة وحوار المعركة وشبكة الحركة تقاس منفصلة.",
   "pt": "Roguelike tático de gatos, hereditariedade e turnos; menu, diálogo de batalha e grelha exigem comparações separadas.",
   "de": "Taktisches Katzen-Roguelike mit Vererbung und Rundenkämpfen; Menü, Kampfdialog und Bewegungsraster getrennt messen.",
   "fr": "Roguelike tactique de chats, hérédité et tours; menu, dialogue de bataille et grille nécessitent des comparaisons distinctes.",
   "es": "Roguelike táctico de gatos, herencia y turnos; menú, diálogo de batalla y cuadrícula requieren comparaciones separadas."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "Mewgenics"
  }
 },
 "sonic-2006-recompiled": {
  "genre": "platform",
  "overview": {
   "en": "The reported PS5 homebrew port of MarathonRecomp. Keep this package separate from Sonic Unleashed Recompiled and official Sonic releases.",
   "zh": "报告中的MarathonRecomp PS5自制移植，与Sonic Unleashed Recompiled及官方索尼克发行版分别记录。",
   "ar": "منفذ PS5 المنزلي المبلغ عنه لـMarathonRecomp؛ منفصل عن Sonic Unleashed Recompiled والإصدارات الرسمية.",
   "pt": "Port homebrew PS5 relatado de MarathonRecomp, separado de Sonic Unleashed Recompiled e edições oficiais.",
   "de": "Berichteter PS5-Homebrew-Port von MarathonRecomp, getrennt von Sonic Unleashed Recompiled und offiziellen Sonic-Versionen.",
   "fr": "Port homebrew PS5 rapporté de MarathonRecomp, distinct de Sonic Unleashed Recompiled et des éditions officielles.",
   "es": "Port homebrew PS5 informado de MarathonRecomp, separado de Sonic Unleashed Recompiled y ediciones oficiales."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "索尼克2006 · PS5自制移植"
  }
 },
 "cult-of-the-lamb-ppsa06465": {
  "genre": "roguelike",
  "overview": {
   "en": "The cult-building roguelike, tracked here as a separate PS5 package. PPSA06464 results do not supply this edition’s platform evidence.",
   "zh": "经营教团的Roguelike，此处单列PS5包；PPSA06464结果不能替代此版本的平台证据。",
   "ar": "روغلايك بناء طائفة بحزمة PS5 منفصلة؛ نتائج PPSA06464 لا توفر دليل هذه النسخة.",
   "pt": "Roguelike de culto numa edição PS5 separada; PPSA06464 não fornece os resultados desta edição.",
   "de": "Kultaufbau-Roguelike als eigenes PS5-Paket; PPSA06464 liefert nicht die Plattformbelege dieser Edition.",
   "fr": "Roguelike de gestion de culte, paquet PS5 distinct; PPSA06464 ne fournit pas les preuves de cette édition.",
   "es": "Roguelike de gestión de culto en paquete PS5 separado; PPSA06464 no aporta los resultados de esta edición."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "咩咩启示录 · PPSA06465"
  }
 },
 "sonic-origins-plus-ppsa05325": {
  "genre": "platform",
  "overview": {
   "en": "A separately reported Sonic collection package. The Sonic2 menu sample does not test a level, every included game or multiplayer.",
   "zh": "另一个被报告的索尼克合集包；Sonic2菜单采样不验证关卡、合集全部游戏或多人模式。",
   "ar": "حزمة مجموعة Sonic منفصلة؛ عينة قائمة Sonic2 لا تختبر مستوى أو كل الألعاب أو اللعب الجماعي.",
   "pt": "Pacote Sonic distinto; a amostra do menu Sonic2 não testa níveis, toda a coleção ou multijogador.",
   "de": "Separat berichtetes Sonic-Paket; Sonic2-Menütest belegt keine Level, gesamte Sammlung oder Mehrspieler.",
   "fr": "Paquet Sonic distinct; l’échantillon du menu Sonic2 ne teste ni niveau, collection entière ni multijoueur.",
   "es": "Paquete Sonic separado; muestra del menú Sonic2 no prueba niveles, toda colección ni multijugador."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "索尼克 起源Plus · PPSA05325"
  }
 },
 "dusklight-ps5-homebrew": {
  "genre": "homebrew",
  "overview": {
   "en": "The homebrew title identified as Dusklight v1.0.0 in the primary report. Renderer diagnostics do not identify similarly named commercial editions.",
   "zh": "原始报告标为Dusklight v1.0.0的自制程序；渲染器诊断不用于识别同名商业版本。",
   "ar": "عنوان منزلي يسميه المصدر Dusklight v1.0.0؛ تشخيص العرض لا يحدد نسخاً تجارية متشابهة الاسم.",
   "pt": "Homebrew identificado como Dusklight v1.0.0 no relato; diagnóstico não identifica edições comerciais com nome semelhante.",
   "de": "Im Primärbericht Dusklight v1.0.0 genanntes Homebrew; Renderdiagnose identifiziert keine ähnlich benannten Handelsversionen.",
   "fr": "Homebrew nommé Dusklight v1.0.0 par le rapport; diagnostic sans identification d’éditions commerciales homonymes.",
   "es": "Homebrew llamado Dusklight v1.0.0 en informe; diagnóstico no identifica ediciones comerciales homónimas."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "Dusklight · PS5自制程序"
  }
 },
 "alone-in-the-dark": {
  "genre": "adventure",
  "overview": {
   "en": "A horror adventure centered on Derceto Manor. Startup and menu survival do not verify exploration, combat or campaign completion.",
   "zh": "围绕Derceto庄园展开的恐怖冒险；启动与菜单存活不验证探索、战斗或剧情完成。",
   "ar": "مغامرة رعب حول قصر Derceto؛ البقاء في البداية والقائمة لا يثبت الاستكشاف أو القتال أو الإكمال.",
   "pt": "Aventura de terror na mansão Derceto; sobreviver ao menu não valida exploração, combate ou conclusão.",
   "de": "Horrorabenteuer um Derceto Manor; Start-/Menüüberleben belegt weder Erkundung noch Kampf oder Abschluss.",
   "fr": "Aventure horrifique au manoir Derceto; survie au menu ne prouve ni exploration ni combat ni fin.",
   "es": "Aventura de terror en mansión Derceto; sobrevivir al menú no valida exploración, combate o final."
  },
  "editionNote": {
   "en": "Confirm this exact PS5 package and content version. Other regions, DLC, PC versions and promotional images do not identify the tested build.",
   "zh": "核对准确PS5包和内容版本；其他地区、DLC、PC版本及宣传图不能识别实测构建。",
   "ar": "تحقق من حزمة PS5 ونسختها؛ المناطق وDLC وPC والصور الدعائية لا تحدد البناء المختبر.",
   "pt": "Confirme o pacote PS5 e versão; regiões, DLC, PC e imagens promocionais não identificam o build testado.",
   "de": "Genaues PS5-Paket und Version prüfen; Regionen, DLC, PC und Werbebilder identifizieren den Testbuild nicht.",
   "fr": "Vérifiez paquet PS5 et version; régions, DLC, PC et images promotionnelles ne fixent pas le build testé.",
   "es": "Verifica paquete PS5 y versión; regiones, DLC, PC e imágenes promocionales no identifican el build probado."
  },
  "related": [],
  "names": {
   "zh": "鬼屋魔影"
  }
 }
});
Object.assign(editorial,{
 "planet-zoo": {
  "genre": "strategy",
  "overview": {
   "en": "Manage animal habitats and a zoo; the reported startup failures do not test animal simulation or park building.",
   "zh": "管理动物栖息地与动物园；启动失败未测试动物模拟或园区建设。",
   "ar": "إدارة موائل وحديقة حيوان؛ فشل البدء لا يختبر المحاكاة أو البناء.",
   "pt": "Gerir habitats e um zoo; falhas iniciais não testam simulação ou construção.",
   "de": "Tierlebensräume und Zoo verwalten; Startfehler testen weder Simulation noch Bau.",
   "fr": "Gérer habitats et zoo; les échecs initiaux ne testent ni simulation ni construction.",
   "es": "Gestionar hábitats y zoológico; fallos iniciales no prueban simulación ni construcción."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA18027, separate from reported PPSA18026; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA18027，不同于报告PPSA18026，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA18027 مختلفة عن التقرير PPSA18026 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA18027 difere do relato PPSA18026, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA18027 unterscheidet sich vom Bericht PPSA18026, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA18027 distincte du rapport PPSA18026, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA18027 distinta del informe PPSA18026, sin identificar ese paquete."
  },
  "related": [],
  "names": {
   "zh": "动物园之星 主机版"
  }
 },
 "monopoly": {
  "genre": "strategy",
  "overview": {
   "en": "A digital property-trading board game. Board selection is separate from finishing a match or online play.",
   "zh": "数字地产交易桌游；棋盘选择与完整对局、联机分开验证。",
   "ar": "لعبة لوح لتجارة العقارات؛ اختيار اللوحة لا يثبت مباراة كاملة أو الشبكة.",
   "pt": "Jogo de tabuleiro imobiliário; selecionar tabuleiro não valida partida ou rede.",
   "de": "Digitales Immobilienbrettspiel; Brettwahl belegt keine vollständige Partie oder Onlinefunktion.",
   "fr": "Jeu de plateau immobilier; sélection du plateau distincte d’une partie complète ou en ligne.",
   "es": "Juego de tablero inmobiliario; selección no prueba partida completa ni juego online."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "地产大亨"
  }
 },
 "the-medium": {
  "genre": "adventure",
  "overview": {
   "en": "A psychological horror adventure across two realities. Nearly black output does not establish that either world renders correctly.",
   "zh": "穿梭双重现实的心理恐怖冒险；近黑输出不证明任一世界正确渲染。",
   "ar": "مغامرة رعب بين واقعين؛ الصورة شبه السوداء لا تثبت صحة أي عالم.",
   "pt": "Terror psicológico entre duas realidades; imagem quase preta não valida nenhum mundo.",
   "de": "Psychologischer Horror zwischen zwei Realitäten; fast schwarzes Bild belegt keinen korrekt gerenderten Raum.",
   "fr": "Horreur psychologique entre deux réalités; image presque noire sans validation des mondes.",
   "es": "Terror psicológico entre dos realidades; imagen casi negra no valida ninguno de los mundos."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA03717, separate from reported PPSA03718; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA03717，不同于报告PPSA03718，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA03717 مختلفة عن التقرير PPSA03718 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA03717 difere do relato PPSA03718, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA03717 unterscheidet sich vom Bericht PPSA03718, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA03717 distincte du rapport PPSA03718, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA03717 distinta del informe PPSA03718, sin identificar ese paquete."
  },
  "related": [],
  "names": {
   "zh": "灵媒"
  }
 },
 "my-friend-peppa-pig": {
  "genre": "adventure",
  "overview": {
   "en": "Create a character and explore Peppa’s world. Scripted scene progression does not verify every activity or save reload.",
   "zh": "自建角色探索佩奇世界；脚本场景推进不验证全部活动或读档。",
   "ar": "اصنع شخصية واستكشف عالم Peppa؛ التقدم المكتوب لا يثبت كل الأنشطة أو إعادة الحفظ.",
   "pt": "Criar personagem e explorar Peppa; progressão por guião não valida todas as atividades ou recarga.",
   "de": "Figur erstellen und Peppas Welt erkunden; Skriptfortschritt belegt nicht alle Aktivitäten oder Laden.",
   "fr": "Créer un personnage et explorer Peppa; progression scriptée sans valider toutes activités ou rechargement.",
   "es": "Crear personaje y explorar Peppa; progresión por guion no valida toda actividad ni recarga."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA03705, separate from reported PPSA03706; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA03705，不同于报告PPSA03706，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA03705 مختلفة عن التقرير PPSA03706 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA03705 difere do relato PPSA03706, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA03705 unterscheidet sich vom Bericht PPSA03706, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA03705 distincte du rapport PPSA03706, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA03705 distinta del informe PPSA03706, sin identificar ese paquete."
  },
  "related": [],
  "names": {
   "zh": "我的朋友小猪佩奇"
  }
 },
 "call-of-duty-modern-warfare-iii": {
  "genre": "shooter",
  "overview": {
   "en": "Military shooter with campaign and multiplayer modes. Asset-loading progress is not a rendered mission or an online session.",
   "zh": "包含战役与多人模式的军事射击；资源加载推进不是可见任务或联机会话。",
   "ar": "تصويب عسكري بحملة وأونلاين؛ تحميل الموارد لا يثبت مهمة مرئية أو جلسة شبكة.",
   "pt": "Tiro militar com campanha e multijogador; carregar recursos não valida missão ou sessão online.",
   "de": "Militärshooter mit Kampagne/Multiplayer; Ressourcenladen belegt keine sichtbare Mission oder Onlinesitzung.",
   "fr": "Tir militaire campagne/multijoueur; chargement de ressources sans mission visible ni session réseau validée.",
   "es": "Disparos militar con campaña/multijugador; cargar recursos no valida misión visible ni sesión online."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA01649, separate from reported PPSA24263; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA01649，不同于报告PPSA24263，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA01649 مختلفة عن التقرير PPSA24263 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA01649 difere do relato PPSA24263, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA01649 unterscheidet sich vom Bericht PPSA24263, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA01649 distincte du rapport PPSA24263, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA01649 distinta del informe PPSA24263, sin identificar ese paquete."
  },
  "related": [],
  "names": {
   "zh": "使命召唤：现代战争III"
  }
 },
 "river-city-girls": {
  "genre": "action",
  "overview": {
   "en": "Misako and Kyoko fight through River City. Classroom movement does not verify later bosses or cooperative play.",
   "zh": "美沙子与京子闯荡热血城；教室移动不验证后续首领或合作模式。",
   "ar": "تقاتل Misako وKyoko في River City؛ حركة الفصل لا تثبت الزعماء أو التعاون.",
   "pt": "Misako e Kyoko lutam em River City; movimento na sala não valida bosses ou cooperação.",
   "de": "Misako und Kyoko kämpfen durch River City; Klassenraumbewegung belegt keine Bosse oder Koop.",
   "fr": "Misako et Kyoko combattent à River City; mouvement en classe sans validation des boss ou coopération.",
   "es": "Misako y Kyoko luchan en River City; movimiento en aula no valida jefes ni cooperativo."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "热血少女"
  }
 },
 "gigabash": {
  "genre": "action",
  "overview": {
   "en": "Giant monsters and mecha fight in destructible arenas. Menu speed and first-match performance are measured separately.",
   "zh": "巨兽与机甲在可破坏场地对战；菜单速度和首场性能分别记录。",
   "ar": "وحوش وآلات عملاقة في ساحات قابلة للتدمير؛ سرعة القائمة منفصلة عن المعركة.",
   "pt": "Monstros e mechas em arenas destrutíveis; menu e primeiro combate medidos separadamente.",
   "de": "Riesenmonster und Mechas in zerstörbaren Arenen; Menü und erster Kampf getrennt gemessen.",
   "fr": "Monstres et mechas en arènes destructibles; menu et premier combat mesurés séparément.",
   "es": "Monstruos y mechas en arenas destructibles; menú y primer combate medidos por separado."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "巨击大乱斗"
  }
 },
 "codex-ps5-homebrew": {
  "genre": "homebrew",
  "overview": {
   "en": "Independent PS5 homebrew client prototype. A simulated listener handshake does not verify a real assistant backend.",
   "zh": "独立PS5自制客户端原型；模拟监听器握手不验证真实助手后端。",
   "ar": "نموذج عميل homebrew مستقل؛ مصافحة مستمع بديل لا تثبت backend حقيقياً.",
   "pt": "Protótipo homebrew independente; handshake com listener simulado não valida backend real.",
   "de": "Unabhängiger Homebrew-Clientprototyp; Ersatzlistener-Handshake belegt kein echtes Assistentenbackend.",
   "fr": "Prototype client homebrew indépendant; poignée de main simulée sans backend réel validé.",
   "es": "Prototipo cliente homebrew independiente; handshake simulado no valida backend real."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "Codex-PS5 自制原型"
  }
 },
 "project-zero-maiden-black-water": {
  "genre": "adventure",
  "overview": {
   "en": "Camera-based supernatural horror. The audio initialization stop does not establish exploration or combat.",
   "zh": "以照相机对抗灵异的恐怖冒险；音频初始化停止不证明探索或战斗。",
   "ar": "رعب خارق بالكاميرا؛ توقف تهيئة الصوت لا يثبت الاستكشاف أو القتال.",
   "pt": "Terror sobrenatural com câmara; paragem de áudio não valida exploração ou combate.",
   "de": "Übernatürlicher Kamerahorror; Audiostop belegt weder Erkundung noch Kampf.",
   "fr": "Horreur surnaturelle à la caméra; blocage audio sans exploration ou combat établis.",
   "es": "Terror sobrenatural con cámara; parada audio no valida exploración ni combate."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "零：濡鸦之巫女"
  }
 },
 "carmen-sandiego": {
  "genre": "adventure",
  "overview": {
   "en": "Travel and solve clue-based investigations as Carmen. Passing a redirect is separate from solving a case.",
   "zh": "扮演卡门旅行并凭线索破案；通过重定向与完成案件分开。",
   "ar": "سفر وتحقيق بالأدلة مع Carmen؛ تجاوز التحويل لا يثبت حل قضية.",
   "pt": "Viagens e investigação com Carmen; passar redirect não valida resolver um caso.",
   "de": "Reisen und Spuren verfolgen mit Carmen; Redirect-Erfolg belegt keinen gelösten Fall.",
   "fr": "Voyage et enquête avec Carmen; redirection réussie sans affaire résolue prouvée.",
   "es": "Viajar e investigar con Carmen; superar redirección no valida resolver un caso."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "卡门·圣地亚哥"
  }
 },
 "silent-hill-townfall": {
  "genre": "adventure",
  "overview": {
   "en": "First-person horror in fog-bound St. Amelia. Reaching the harbor does not verify free exploration, combat or endings.",
   "zh": "在雾笼罩的St. Amelia展开第一人称恐怖；港口画面不验证自由探索、战斗或结局。",
   "ar": "رعب بمنظور أول في St. Amelia الضبابية؛ الميناء لا يثبت الاستكشاف أو القتال أو النهايات.",
   "pt": "Terror na primeira pessoa em St. Amelia; porto não valida exploração, combate ou finais.",
   "de": "Ego-Horror im nebligen St. Amelia; Hafen belegt keine freie Erkundung, Kämpfe oder Enden.",
   "fr": "Horreur subjective à St. Amelia; port sans exploration libre, combats ou fins validés.",
   "es": "Terror en primera persona en St. Amelia; puerto no valida exploración libre, combate ni finales."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "寂静岭：Townfall"
  }
 },
 "cyberpunk-2077-ppsa03974": {
  "genre": "rpg",
  "overview": {
   "en": "Night City role-playing action, tracked separately for this PS5 package. A timed startup test does not verify a mission.",
   "zh": "夜之城动作角色扮演，本PS5包独立追踪；限时启动不验证任务。",
   "ar": "أكشن أدوار في Night City لهذه الحزمة المستقلة؛ اختبار بدء محدود لا يثبت مهمة.",
   "pt": "Ação RPG em Night City, pacote PS5 separado; arranque limitado não valida missão.",
   "de": "Night-City-Action-RPG für separates PS5-Paket; begrenzter Starttest belegt keine Mission.",
   "fr": "Action RPG à Night City, paquet PS5 distinct; démarrage limité sans mission validée.",
   "es": "Acción RPG en Night City, paquete PS5 separado; arranque limitado no valida misión."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "赛博朋克2077 · PPSA03974"
  }
 },
 "crimson-desert-ppsa25286": {
  "genre": "action",
  "overview": {
   "en": "Open-world action adventure, separate from other regional packages. The network startup test does not validate exploration or battle.",
   "zh": "开放世界动作冒险，与其他区域包分开；网络启动测试不验证探索或战斗。",
   "ar": "مغامرة أكشن مفتوحة بحزمة مستقلة؛ اختبار الشبكة لا يثبت الاستكشاف أو القتال.",
   "pt": "Aventura de ação aberta, pacote separado; teste de rede não valida exploração ou combate.",
   "de": "Offene Actionwelt als separates Paket; Netzwerkstarttest belegt keine Erkundung oder Kämpfe.",
   "fr": "Aventure d’action ouverte, paquet distinct; test réseau sans exploration ou combat validés.",
   "es": "Aventura de acción abierta, paquete separado; prueba red no valida exploración ni combate."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "红色沙漠 · PPSA25286"
  }
 },
 "fatal-frame-ii-crimson-butterfly-remake": {
  "genre": "adventure",
  "overview": {
   "en": "Mio and Mayu explore a haunted village with the Camera Obscura. This remake’s PPSA is distinct from Maiden of Black Water.",
   "zh": "澪与茧以射影机探索幽灵村落；此重制版PPSA与濡鸦之巫女分开。",
   "ar": "تستكشف Mio وMayu قرية مسكونة بالكاميرا؛ PPSA الريميك منفصل عن Maiden of Black Water.",
   "pt": "Mio e Mayu exploram aldeia assombrada; PPSA do remake distinto de Maiden of Black Water.",
   "de": "Mio und Mayu im Geisterdorf; PPSA des Remakes getrennt von Maiden of Black Water.",
   "fr": "Mio et Mayu explorent un village hanté; PPSA du remake distinct de Maiden of Black Water.",
   "es": "Mio y Mayu exploran aldea embrujada; PPSA del remake distinto de Maiden of Black Water."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "零：红蝶 重制版"
  }
 },
 "alan-wake-remastered": {
  "genre": "adventure",
  "overview": {
   "en": "Alan fights a darkness shaped by his writing. The remaster’s rendering refusals are separate from Alan Wake 2 results.",
   "zh": "艾伦对抗与写作相连的黑暗；重制版渲染拒绝与心灵杀手2结果分开。",
   "ar": "يقاوم Alan ظلاماً مرتبطاً بكتابته؛ رفض رسم الريماستر منفصل عن Alan Wake2.",
   "pt": "Alan enfrenta escuridão ligada à escrita; recusas do remaster separadas de Alan Wake2.",
   "de": "Alan gegen die Dunkelheit seiner Texte; Remaster-Verweigerungen getrennt von Alan Wake2.",
   "fr": "Alan affronte l’obscurité liée à ses écrits; refus du remaster distincts d’Alan Wake2.",
   "es": "Alan enfrenta oscuridad ligada a su escritura; rechazos del remaster separados de Alan Wake2."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "心灵杀手 重制版"
  }
 },
 "echoes-of-the-end": {
  "genre": "adventure",
  "overview": {
   "en": "Ryn combines swordplay, magic and traversal in Aema. A loading-only pair does not establish combat or the latest Enhanced Edition behavior.",
   "zh": "Ryn在Aema运用剑术、魔法和穿越；仅加载对照不证明战斗或最新增强版表现。",
   "ar": "تمزج Ryn السيف والسحر والتنقل في Aema؛ زوج تحميل لا يثبت القتال أو أحدث Enhanced Edition.",
   "pt": "Ryn combina espada, magia e travessia em Aema; só carga não valida combate nem Enhanced Edition atual.",
   "de": "Ryn mit Schwert, Magie und Bewegung in Aema; Ladepaar belegt keinen Kampf oder aktuelles Enhanced-Verhalten.",
   "fr": "Ryn mêle épée, magie et parcours à Aema; paire de chargement sans combat ou Enhanced actuel validé.",
   "es": "Ryn combina espada, magia y recorrido en Aema; solo carga no valida combate ni Enhanced actual."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.Current Enhanced Edition marketing does not establish what features version01.012.000 tested.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 当前增强版宣传不证明01.012.000实际测试哪些新增内容。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. إعلان Enhanced الحالي لا يثبت ميزات01.012.000 المختبرة.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Marketing Enhanced atual não prova funcionalidades testadas em01.012.000.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Aktuelle Enhanced-Werbung belegt keine getesteten Inhalte von01.012.000.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Marketing Enhanced actuel sans preuve des fonctions testées en01.012.000.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Marketing Enhanced actual no prueba funciones testadas en01.012.000."
  },
  "related": [],
  "names": {
   "zh": "终结之回响"
  }
 },
 "human-fall-flat": {
  "genre": "puzzle",
  "overview": {
   "en": "Physics puzzles in floating dreamscapes. Socket counts do not verify grabbing, cooperation or completing a level.",
   "zh": "漂浮梦境中的物理解谜；套接字计数不验证抓取、合作或通关。",
   "ar": "ألغاز فيزياء بعوالم حالمة؛ عدادات المقابس لا تثبت الإمساك أو التعاون أو إنهاء مرحلة.",
   "pt": "Puzzles de física em sonhos flutuantes; contagens de sockets não validam agarrar, cooperar ou terminar nível.",
   "de": "Physikrätsel in Traumwelten; Socketzähler belegen weder Greifen noch Koop oder Levelabschluss.",
   "fr": "Puzzles physiques oniriques; compteurs sockets sans prise, coopération ou niveau terminé validés.",
   "es": "Puzles físicos oníricos; contadores sockets no validan agarrar, cooperar ni completar nivel."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.The reviewed promotional page is PPSA02431, separate from reported PPSA02429; it does not identify that package.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。 宣传页为PPSA02431，不同于报告PPSA02429，不用于认定实测包。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC. الصفحة الدعائية PPSA02431 مختلفة عن التقرير PPSA02429 ولا تحدد حزمته.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC. Página promocional PPSA02431 difere do relato PPSA02429, sem identificar esse pacote.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis. Werbeseite PPSA02431 unterscheidet sich vom Bericht PPSA02429, kein Paketnachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé. Page promotionnelle PPSA02431 distincte du rapport PPSA02429, sans identifier son paquet.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado. Página promocional PPSA02431 distinta del informe PPSA02429, sin identificar ese paquete."
  },
  "related": [],
  "names": {
   "zh": "人类一败涂地"
  }
 },
 "r-type-final-3-evolved": {
  "genre": "shooter",
  "overview": {
   "en": "Side-scrolling spacecraft combat. Passing a depth-format guard does not verify a stage, score or enemy behavior.",
   "zh": "横向卷轴战机射击；越过深度格式保护不验证关卡、分数或敌人行为。",
   "ar": "قتال سفن جانبي؛ تجاوز حارس عمق لا يثبت مرحلة أو نقاطاً أو سلوك العدو.",
   "pt": "Combate espacial lateral; passar formato de profundidade não valida nível, pontuação ou inimigos.",
   "de": "Seitliches Raumschiffgefecht; Tiefenformatprüfung belegt keinen Level, Punkte oder Gegnerverhalten.",
   "fr": "Combat spatial latéral; franchir format de profondeur sans niveau, score ou ennemis validés.",
   "es": "Combate espacial lateral; superar formato profundidad no valida nivel, puntuación ni enemigos."
  },
  "editionNote": {
   "en": "PS5 package and content version follow the individual report; unreported fields remain unknown. Publisher artwork is promotional, not an AnyPS5 screenshot or evidence of tested DLC.",
   "zh": "PS5包和内容版本以各报告为准，未述保持未知；发行商图片为宣传素材，不是AnyPS5截图，也不证明已测DLC。",
   "ar": "حزمة PS5 والنسخة بحسب التقرير؛ غير المذكور مجهول. صور الناشر دعائية لا اختبار AnyPS5 أو دليل DLC.",
   "pt": "Pacote PS5 e versão seguem cada relato; ausentes ficam desconhecidos. Arte promocional não é teste AnyPS5 nem prova de DLC.",
   "de": "PS5-Paket/Version gelten je Bericht, fehlende Angaben unbekannt. Werbung ist kein AnyPS5-Testbild oder DLC-Nachweis.",
   "fr": "Paquet PS5/version propres au rapport, absences inconnues. Art promotionnel sans capture AnyPS5 ni preuve de DLC testé.",
   "es": "Paquete PS5/versión según informe, ausencias desconocidas. Arte promocional no es captura AnyPS5 ni prueba de DLC probado."
  },
  "related": [],
  "names": {
   "zh": "R-Type Final 3 Evolved"
  }
 }
});
export const media=sources as Record<string,{source:string;provider:string;cover:string|null;screenshots:string[];checked:string}>;
export const genreLabel=(slug:string,locale:keyof Text)=>genres[editorial[slug].genre][locale];
export const gameName=(game:{slug:string;name:string},locale:keyof Text)=>editorial[game.slug]?.names[locale]||game.name;
const nameAliases:Record<string,string[]>={
 'hot-shots-golf-2':["Everybody’s Golf 2","Everybody's Golf 2"],
 'astros-playroom':['宇宙机器人无线控制器使用指南','宇宙机器人游戏间'],
 'silt':['黯海','淤泥'],
 'hello-kitty-island-adventure':['Hello Kitty 岛屿冒险','凯蒂猫岛屿冒险'],
};
export const gameSearchText=(game:{slug:string;name:string;titleId:string|null})=>[game.name,game.titleId,...Object.values(editorial[game.slug]?.names||{}),...(nameAliases[game.slug]||[])].filter(Boolean).join(' ');

editorial["hi-fi-rush"].editionNote=L("The report is PPSA17191; US PlayStation artwork identifies PPSA17168. Shared promotional art does not establish the tested region or Deluxe content.","报告为PPSA17191，美国PlayStation图片对应PPSA17168；共用宣传图不证明测试地区或Deluxe内容。","التقرير PPSA17191 وصورة المتجر الأمريكي PPSA17168؛ الصورة المشتركة لا تثبت المنطقة أو محتوى Deluxe المختبر.","Relatório PPSA17191, arte americana PPSA17168; imagem partilhada não prova região ou conteúdo Deluxe testado.","Bericht PPSA17191, US-Werbung PPSA17168; gemeinsames Bild belegt weder Testregion noch Deluxe-Inhalt.","Rapport PPSA17191, image américaine PPSA17168 ; l’art partagé ne prouve ni région ni contenu Deluxe testé.","Informe PPSA17191, imagen estadounidense PPSA17168; arte compartido no prueba región ni contenido Deluxe probado.");

editorial['jumanji-ppsa03973'].names.zh='勇敢者游戏：电子游戏';

for(const [slug,overview]of Object.entries({
 "final-fantasy-resonance": {
  "en": "An HD-2D crystal adventure with turn-based battles. Windows clean-main play and Linux patched scene evidence retain distinct conditions.",
  "zh": "HD-2D水晶冒险采用回合制战斗；Windows干净main游玩与Linux补丁场景保留各自条件。",
  "ar": "مغامرة HD-2D بمعارك أدوار؛ لعب Windowsmain ومشهد Linux المعدل منفصلان.",
  "pt": "AventuraHD-2D por turnos; Windowsmain limpo/Linuxmodificado separados.",
  "de": "HD-2D-Rundenabenteuer; Windowsmain-Spiel undLinux-Patchszene getrennt.",
  "fr": "AventureHD-2D par tours; jeuWindowsmain et scèneLinuxmodifiée distincts.",
  "es": "AventuraHD-2D por turnos; Windowsmain y escenaLinuxmodificada separados."
 },
 "bugsnax": {
  "en": "Catchable food creatures inhabit Snaktooth Island. Rainy-opening and tutorial observations use different alpha-coverage experiments.",
  "zh": "食物生物栖息于Snaktooth岛；雨中开场与教程观察使用不同alpha覆盖实验。",
  "ar": "كائنات طعام بجزيرة Snaktooth؛ الافتتاح والتعليم بتجربتي alpha مختلفتين.",
  "pt": "Criaturas alimentares emSnaktooth; abertura/tutorial usam coberturaalpha distinta.",
  "de": "Essbare Wesen aufSnaktooth; Einstieg/Tutorial mit anderenAlphaexperimenten.",
  "fr": "Créatures comestibles àSnaktooth; ouverture/tutoriel sur expériencesalpha distinctes.",
  "es": "Criaturas comestibles enSnaktooth; inicio/tutorial con experimentosalpha distintos."
 },
 "trails-sky-1st-chapter": {
  "en": "A story-led party RPG. A local NGS2 integration reaches the first house interior before its own guard aborts; continued play remains unverified.",
  "zh": "剧情驱动的队伍RPG；本地NGS2整合到首间屋内后被自身保护终止，后续游玩未证实。",
  "ar": "RPG قصصي جماعي؛ NGS2 محلي يصل المنزل ثم يتوقف بحارسه، استمرار اللعب غير مثبت.",
  "pt": "RPG de grupo narrativo; NGS2local chega à casa e aborta no guard, jogo contínuo não provado.",
  "de": "Erzähltes Gruppen-RPG; lokalesNGS2erreicht Haus und bricht am Guard ab, Weiterspielen ungeprüft.",
  "fr": "RPG narratif de groupe; NGS2local atteint maison puis guard, jeu continu non vérifié.",
  "es": "RPG narrativo de grupo; NGS2local llega a casa y guardaborta, juego continuo sin probar."
 },
 "super-meat-boy-3d": {
  "en": "A three-dimensional precision platformer. Gameplay renders differently across the reported Windows/AMD and Linux/NVIDIA builds; colour correctness remains unresolved.",
  "zh": "三维精准跳跃游戏；Windows／AMD与Linux／NVIDIA报告的游戏过程呈色不同，颜色正确性仍待解决。",
  "ar": "منصات ثلاثية دقيقة؛ ألوان Windows/AMD و Linux/NVIDIA مختلفة، الصحة غير محسومة.",
  "pt": "Plataformas3D de precisão; cor difereWindows/AMD eLinux/NVIDIA, questão aberta.",
  "de": "Präzisions-3D-Plattformer; Windows/AMDundLinux/NVIDIAzeigen andere Farben, ungeklärt.",
  "fr": "Plateformes3D de précision; couleursWindows/AMD etLinux/NVIDIAdiffèrent, non résolu.",
  "es": "Plataformas3D de precisión; coloresWindows/AMD yLinux/NVIDIAdifieren, sin resolver."
 }
})){editorial[slug].overview=overview;}

editorial["persona-5-royal"].overview={
 "en": "Tokyo social life and supernatural turn-based battles meet in this RPG. The new local casino run is bounded and remains distinct from main-only movie failure.",
 "zh": "东京日常与异世界回合战斗交织；新本地赌场运行范围有限，与main单独片头失败分开。",
 "ar": "حياة طوكيو ومعارك أدوار خارقة؛ تجربة الكازينو المحلية محدودة ومنفصلة عن فشل الفيلم على main.",
 "pt": "Vida em Tóquio e batalhas por turnos; casino local limitado, separado da falha do filme em main.",
 "de": "Tokio-Alltag und Rundenkämpfe; lokaler Casinotest begrenzt, getrennt vom Main-Filmfehler.",
 "fr": "Vie à Tokyo et combats au tour par tour; casino local limité, distinct de l’échec film sur main.",
 "es": "Vida en Tokio y combate por turnos; casino local limitado, separado del fallo de película en main."
};

editorial["persona-5-royal"].overview={"en": "Tokyo social life and supernatural turn-based battles meet; the clean-main casino report is bounded and does not verify the complete story.", "zh": "东京日常与异世界回合战斗交织；干净main赌场报告范围有限，不验证完整剧情。", "ar": "حياة طوكيو ومعارك أدوار خارقة؛ تقرير كازينو main نظيف محدود ولا يثبت القصة كاملة.", "pt": "Vida em Tóquio e batalhas por turnos; casino main limpo limitado, sem validar história completa.", "de": "Tokio-Alltag und Rundenkämpfe; sauberer Main-Casinobericht begrenzt, kein Gesamtnachweis.", "fr": "Vie à Tokyo et combats au tour par tour; casino main propre limité, sans histoire complète validée.", "es": "Vida en Tokio y batallas por turnos; casino main limpio limitado, sin historia completa validada."};

for(const locale of Object.keys(editorial["crimson-desert-ppsa25286"].editionNote) as (keyof Text)[]){editorial["crimson-desert-ppsa25286"].editionNote[locale]+={"en": " Enhanced promotional branding does not establish which enhanced features the reported version tested.", "zh": " 增强版宣传标识不证明报告版本实测哪些增强内容。", "ar": " شعار Enhanced الدعائي لا يثبت ميزات النسخة المختبرة.", "pt": " Marca Enhanced promocional não prova funções testadas na versão do relato.", "de": " Enhanced-Werbung belegt keine getesteten Zusatzfunktionen des Berichts.", "fr": " Marque Enhanced promotionnelle sans preuve des fonctions testées.", "es": " Marca Enhanced promocional no prueba funciones testadas en esa versión."}[locale];}
