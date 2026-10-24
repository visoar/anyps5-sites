import {faqArticle,howItWorksArticle} from './explainers';
import {L,UPSTREAM,sourceDoc,type Article} from './model';
import {contactEmail,contactLink} from './contact';
const S=(id:string,title:ReturnType<typeof L>,...body:ReturnType<typeof L>[])=>({id,title,body});
export const extraArticles:Article[]=[
 {slug:'troubleshooting',title:L("AnyPS5 troubleshooting and common errors","AnyPS5 常见错误与排查方法","حل مشكلات AnyPS5 والأخطاء الشائعة","Resolução de problemas e erros do AnyPS5","AnyPS5: Fehler und Lösungen","Dépannage d’AnyPS5 et erreurs fréquentes","Solución de problemas y errores de AnyPS5"),description:L("Troubleshoot AnyPS5 startup, missing libraries, input and graphics errors. Check Windows DLL codes, Linux symbols, Vulkan logs and the exact build before changing files.","排查 AnyPS5 启动、缺失依赖、输入和渲染问题：核对 Windows DLL 错误、Linux 符号、Vulkan 日志与准确构建，再调整文件或设置。","شخّص أخطاء بدء AnyPS5 والمكتبات والتحكم والرسم. راجع أخطاء DLL على Windows والرموز على Linux وسجل Vulkan والبناء المحدد قبل تغيير الملفات.","Resolva erros de arranque, bibliotecas, controlos e gráficos do AnyPS5. Verifique erros DLL no Windows, símbolos no Linux e registos Vulkan antes de alterar ficheiros.","Behebe AnyPS5-Fehler bei Start, Bibliotheken, Eingabe und Grafik. Prüfe Windows-DLL-Fehler, Linux-Symbole und Vulkan-Logs, bevor du Dateien austauschst.","Diagnostiquez les erreurs AnyPS5 au démarrage, les bibliothèques absentes, les commandes et le rendu. Vérifiez les erreurs DLL, les symboles Linux et les journaux Vulkan.","Diagnostica fallos de inicio, bibliotecas, controles y gráficos de AnyPS5. Revisa errores DLL, símbolos en Linux y registros Vulkan antes de cambiar archivos."),sources:[sourceDoc('USAGE'),sourceDoc('INPUT_MAPPING')],sections:[
 S('input',L('Before the window opens','窗口出现之前','قبل ظهور النافذة','Antes de aparecer a janela','Vor dem ersten Fenster','Avant l’ouverture de la fenêtre','Antes de abrirse la ventana'),L('Confirm the input is clean ELF, the relinker targets the right operating system, and libs/ contains matching host-native libraries. Windows error 193 suggests a format mismatch; 126 can indicate a missing dependent DLL. On Linux, an undefined symbol points to a missing export or mismatched library. Rebuild the explicit libs target after changing source.','确认输入是干净 ELF，转换目标与系统一致，libs/ 中是配套主机原生库。Windows 错误 193 提示格式错配，126 可能缺少依赖 DLL；Linux 的 undefined symbol 指向缺失导出或库版本错配。修改源码后记得显式重建 libs。','تأكد أن الإدخال ELF نظيف وأن النظام الهدف صحيح وأن libs/ تضم المكتبات المتوافقة. يشير 193 في Windows إلى صيغة خاطئة، و126 إلى DLL تابعة محتملة. في Linux يدل undefined symbol على تصدير مفقود أو مكتبة غير متوافقة. أعد بناء libs بعد تغيير المصدر.','Confirme que a entrada é ELF limpo, o destino é o sistema correto e libs/ contém bibliotecas correspondentes. No Windows, 193 sugere formato errado e 126 uma possível DLL dependente em falta. No Linux, undefined symbol indica exportação ausente ou biblioteca incompatível. Reconstrua libs depois de alterar o código.','Prüfe unverpacktes ELF, das richtige Zielsystem und passende Hostbibliotheken in libs/. Unter Windows deutet 193 auf das Format, 126 eventuell auf eine abhängige DLL. Unter Linux steht undefined symbol für einen fehlenden Export oder unpassende Bibliotheken. Baue nach Quelländerungen das libs-Ziel neu.','Vérifiez l’ELF non encapsulé, le bon système cible et les bibliothèques adaptées dans libs/. Sous Windows, 193 suggère un mauvais format et 126 une DLL dépendante absente. Sous Linux, undefined symbol indique un export manquant ou une bibliothèque incompatible. Recompilez libs après modification du code.','Comprueba el ELF limpio, el sistema de destino y las bibliotecas adecuadas en libs/. En Windows, 193 sugiere formato incorrecto y 126 una posible DLL dependiente ausente. En Linux, undefined symbol apunta a una exportación ausente o biblioteca incompatible. Reconstruye libs tras cambiar el código.')),
 S('graphics',L('After the window opens','窗口出现之后','بعد ظهور النافذة','Depois de aparecer a janela','Nach dem ersten Fenster','Après l’ouverture de la fenêtre','Después de abrirse la ventana'),L('Check the selected Vulkan device in the log. An allocation error, unsupported shader operation, mixed DCC keys and a missing resource file are different failures. Keep the exact message, build hash, patches and scene. Read reports for your platform and GPU; do not apply a workaround from an unrelated game without understanding what it disables.','从日志确认 Vulkan 设备。内存分配错误、不支持的着色器操作、mixed DCC keys 与缺失资源文件是不同问题。保留原始消息、构建哈希、补丁和场景，参考对应平台与显卡的报告；使用其他游戏的绕过参数前，先理解它关闭了什么检查。','تحقق من جهاز Vulkan في السجل. أخطاء التخصيص وعمليات المظللات غير المدعومة وmixed DCC keys والملفات المفقودة مشكلات مختلفة. احفظ النص الدقيق والبناء والتعديلات والمشهد. راجع تقارير نظامك وبطاقتك، وافهم ما يعطله أي حل من لعبة أخرى.','Confirme o dispositivo Vulkan no registo. Falhas de alocação, operações de shaders não suportadas, mixed DCC keys e recursos em falta são problemas distintos. Guarde a mensagem, o commit, os patches e a cena. Consulte relatórios do seu sistema e GPU e compreenda o que um contorno de outro jogo desativa.','Prüfe das ausgewählte Vulkan-Gerät im Log. Speicherfehler, nicht unterstützte Shaderoperationen, mixed DCC keys und fehlende Ressourcen sind verschiedene Probleme. Notiere Meldung, Commit, Patches und Szene. Nutze Berichte deiner Plattform und GPU und verstehe vor fremden Workarounds, welche Prüfung sie abschalten.','Vérifiez le périphérique Vulkan dans le journal. Échec d’allocation, shader non pris en charge, mixed DCC keys et ressource absente sont des problèmes distincts. Gardez le message exact, le commit, les correctifs et la scène. Consultez les rapports de votre plateforme et GPU et comprenez ce que désactive un contournement provenant d’un autre jeu.','Comprueba el dispositivo Vulkan en el registro. Los fallos de asignación, operaciones de shader no admitidas, mixed DCC keys y recursos ausentes son problemas distintos. Guarda el mensaje exacto, commit, parches y escena. Consulta informes de tu sistema y GPU y entiende qué desactiva un apaño de otro juego.')),
 S('report',L('Make a reproducible report','提交可复现的报告','اكتب تقريراً قابلاً للتكرار','Escreva um relatório reproduzível','Schreibe einen reproduzierbaren Bericht','Rédigez un rapport reproductible','Redacta un informe reproducible'),L("Compare one change at a time. Separate a clean baseline from a patched run and keep logs for both. Include steps, expected behavior, actual stop, test duration and any screenshots or video. Remove personal paths and unrelated sensitive information before sharing. Submit game tests to the matching upstream discussion; email catalog corrections to " + contactEmail + ".","每次只比较一项改动，将干净基线与补丁结果分开，并保留两份日志。附上步骤、预期行为、实际停止位置、时长与截图或视频，分享前移除个人路径和无关敏感信息。游戏测试请提交到上游对应讨论；目录更正请邮件联系 " + contactEmail + "。","قارن تغييراً واحداً كل مرة وافصل الأساس النظيف عن التشغيل المعدّل مع سجليهما. أضف الخطوات والمتوقع ونقطة التوقف والمدة وصوراً أو فيديو. احذف المسارات الشخصية والمعلومات الحساسة غير اللازمة. انشر اختبارات الألعاب في النقاش الأصلي المناسب؛ وأرسل تصحيحات الفهرس إلى " + contactEmail + ".","Compare uma alteração de cada vez. Separe a base limpa do teste modificado e guarde os dois registos. Inclua passos, comportamento esperado, paragem, duração e imagens ou vídeo. Remova caminhos pessoais e dados sensíveis irrelevantes. Publique os testes na discussão original adequada; envie correções do catálogo para " + contactEmail + ".","Vergleiche immer nur eine Änderung. Trenne saubere Basis und gepatchten Lauf und behalte beide Logs. Beschreibe Schritte, erwartetes Verhalten, Abbruchstelle, Dauer und Bilder oder Video. Entferne persönliche Pfade und unnötige vertrauliche Angaben. Veröffentliche Spieltests in der passenden Diskussion des Originalprojekts; sende Katalogkorrekturen an " + contactEmail + ".","Comparez un changement à la fois. Séparez la base propre de l’essai modifié et conservez les deux journaux. Indiquez étapes, comportement attendu, arrêt, durée et images ou vidéo. Retirez les chemins personnels et informations sensibles inutiles. Publiez les tests dans la discussion originale correspondante ; envoyez les corrections du catalogue à " + contactEmail + ".","Compara un cambio cada vez. Separa la base limpia de la prueba modificada y conserva ambos registros. Incluye pasos, resultado esperado, parada, duración e imágenes o vídeo. Elimina rutas personales y datos sensibles innecesarios. Publica las pruebas en la discusión original correspondiente; envía las correcciones del catálogo a " + contactEmail + "."))]},
 {
 "slug": "progress",
 "reviewed": "2026-10-25",
 "title": {
  "en": "AnyPS5 development progress and coverage",
  "zh": "AnyPS5 开发进度与实现范围",
  "ar": "تقدم AnyPS5 ونطاق التنفيذ",
  "pt": "Progresso e cobertura do AnyPS5",
  "de": "Entwicklungsstand und Umfang von AnyPS5",
  "fr": "Avancement et couverture d’AnyPS5",
  "es": "Avances y cobertura de AnyPS5"
 },
 "description": {
  "en": "Understand AnyPS5 library and shader implementation counters. See what these dated figures measure and why they cannot establish how many PS5 games are playable.",
  "zh": "了解 AnyPS5 系统库与着色器实现进度：这些统计衡量什么、复核于何时，以及为什么不能据此判断 PS5 游戏可玩率。",
  "ar": "افهم أرقام تقدم تنفيذ مكتبات AnyPS5 ومظللاته، وما تقيسه هذه البيانات المؤرخة ولماذا لا تحدد نسبة ألعاب PS5 القابلة للعب.",
  "pt": "Saiba o que medem os contadores de implementação de bibliotecas e shaders do AnyPS5 e por que motivo não representam a percentagem de jogos PS5 jogáveis.",
  "de": "Erfahre, was die Implementierungszahlen für AnyPS5-Bibliotheken und Shader messen und warum sie keinen Anteil spielbarer PS5-Titel belegen.",
  "fr": "Comprenez les compteurs d’implémentation des bibliothèques et shaders d’AnyPS5 et pourquoi ils ne mesurent pas la proportion de jeux PS5 jouables.",
  "es": "Entiende qué miden los contadores de bibliotecas y shaders de AnyPS5 y por qué no representan el porcentaje de juegos de PS5 que se pueden jugar."
 },
 "sources": [
  "https://boykopovar.github.io/AnyPS5/progress.json",
  "https://github.com/boykopovar/AnyPS5/blob/main/docs/dev/PROGRESS.md",
  "https://github.com/boykopovar/AnyPS5/blob/main/docs/dev/TechnicalDebt.md",
  "https://github.com/boykopovar/AnyPS5/blob/a60f52e3189003f049299206d2a6d99e55ee4260/docs/user/COMPATIBILITY.md",
  "https://github.com/boykopovar/AnyPS5/pull/7907",
  "https://github.com/boykopovar/AnyPS5/pull/8431",
  "https://github.com/boykopovar/AnyPS5/discussions/9751",
  "https://github.com/AlxcBTW/anyps5-roadmap#readme"
 ],
 "sections": [
  {
   "id": "counts",
   "title": {
    "en": "A dated implementation snapshot",
    "zh": "有日期的实现快照",
    "ar": "لقطة مؤرخة للتنفيذ",
    "pt": "Um retrato datado da implementação",
    "de": "Ein datierter Implementierungsstand",
    "fr": "Un état d’implémentation daté",
    "es": "Una instantánea fechada"
   },
   "body": [
    {
     "en": "The25October review counts5995/12286 declared library functions (48.8%), +389 implementations/+580 declarations from5606/11706. Decoder recognition stays1166/1166. Coverage of declared exports and instruction recognition do not prove complete behavior or game compatibility; v0.1.3 assets remain unchanged.",
     "zh": "10月25日复核5995／12286个声明库函数（48.8%），较5606／11706实现增389、声明增580；解码识别仍1166／1166。声明export覆盖和指令识别不证明完整行为或游戏兼容，v0.1.3附件未变。",
     "ar": "مراجعة25أكتوبر5995/12286=48.8%،+389تنفيذاً/+580إعلاناً عن5606/11706؛ decoder1166/1166. لا سلوك كامل أو توافق ألعاب، ملفاتv0.1.3 ثابتة.",
     "pt": "Revisão25out5995/12286=48,8%,+389implementações/+580declarações face5606/11706; decoder1166/1166. Não prova comportamento completo/compatibilidade, assetsv0.1.3 inalterados.",
     "de": "Prüfung25.Oktober5995/12286=48,8%,+389Implementierungen/+580Deklarationen zu5606/11706; Decoder1166/1166. Kein vollständiges Verhalten/Spielkompatibilität, v0.1.3 unverändert.",
     "fr": "Revue25oct5995/12286=48,8%,+389implémentations/+580déclarations sur5606/11706 ; decoder1166/1166. Pas comportement complet/compatibilité, fichiersv0.1.3 inchangés.",
     "es": "Revisión25oct5995/12286=48,8%,+389implementaciones/+580declaraciones frente5606/11706; decoder1166/1166. No comportamiento completo/compatibilidad, archivosv0.1.3 iguales."
    },
    {
     "en": "Discussion#9751 proposes a second imported-function measure; it is not an adopted official compatibility counter. Its62-homebrew static audit reports1507/1533 functions classified non-throwing (98.3%), a biased sample without retail coverage or runtime path checks. Do not label that98.3% of games playable. The source’s4834/11181 atcc0078595d is a separate snapshot from the live figure above.",
     "zh": "讨论#9751提出第二个导入函数指标，尚非官方采用的兼容计数。其62个homebrew静态审计1507／1533非throwing分类（98.3%），样本偏倚、无商业游戏覆盖或runtime路径验证，不能写成98.3%游戏可玩。源cc0078595d的4834／11181与上方live快照分开。",
     "ar": "#9751 يقترح مقياس imports ثانياً لم يعتمد رسمياً. عينة62homebrew ثابتة1507/1533=98.3% مصنفة non-throwing، متحيزة دون retail/مسارات تشغيل. ليست98.3% ألعاب قابلة للعب. لقطةcc0078595d4834/11181 منفصلة.",
     "pt": "Discussão#9751 propõe métrica de imports ainda não adotada. Auditoria estática62homebrew:1507/1533=98,3% non-throwing, amostra enviesada sem retail/caminhos runtime. Não98,3% jogos jogáveis. Snapshotcc0078595d4834/11181 separado.",
     "de": "#9751 schlägt Importmetrik vor, noch kein offizieller Zähler. Statischer62-Homebrew-Audit1507/1533=98,3% non-throwing, verzerrt ohne Retail/Laufpfade. Keine98,3% spielbaren Spiele. Snapshotcc0078595d4834/11181 getrennt.",
     "fr": "#9751 propose une métrique imports non adoptée. Audit statique62homebrew:1507/1533=98,3% non-throwing, biaisé sans retail/chemins runtime. Pas98,3% de jeux jouables. Snapshotcc0078595d4834/11181 distinct.",
     "es": "#9751 propone métrica imports no adoptada. Auditoría estática62homebrew:1507/1533=98,3% non-throwing, sesgada sin retail/rutas runtime. No98,3% juegos jugables. Snapshotcc0078595d4834/11181 separado."
    },
    {
     "en": "The previous reviewed snapshot was4137/5182 (79.83%); this one is4303/6675 (64.46%). Both implemented and declared counts grew, so the lower percentage does not itself establish a regression. Newly declared exports and inert implementations still need behavior and title checks.",
     "zh": "上次快照4137／5182（79.83%），本次4303／6675（64.46%）；实现数与声明总数都增加，因此百分比降低本身不证明回归。新增导出声明及inert实现仍需行为与游戏验证。",
     "ar": "السابق4137/5182 ‏79.83% والجديد4303/6675 ‏64.46%. زادالمنفذوالمعلن، فانخفاضالنسبة ليسدليلتراجع. التصريحاتوالأجسامinert تحتاجفحصالسلوكوالعناوين.",
     "pt": "Anterior4137/5182 (79,83%), atual4303/6675 (64,46%). Ambos os totais cresceram; percentagem menor não prova regressão. Novas declarações e corpos inert exigem validação de comportamento e jogos.",
     "de": "Zuvor4137/5182 (79,83%), jetzt4303/6675 (64,46%). Implementierungen und Gesamtsumme stiegen; sinkende Quote belegt keine Regression. Neue Deklarationen/inerte Rümpfe brauchen Verhaltens- und Spieltests.",
     "fr": "Avant4137/5182 (79,83%), maintenant4303/6675 (64,46%). Les deux comptes augmentent ; pourcentage inférieur ne prouve pas régression. Nouvelles déclarations/corps inertes exigent tests de comportement/jeux.",
     "es": "Antes4137/5182 (79,83%), ahora4303/6675 (64,46%). Ambos recuentos aumentan; menor porcentaje no prueba regresión. Declaraciones nuevas/cuerpos inert requieren pruebas de comportamiento/juegos."
    }
   ]
  },
  {
   "id": "games",
   "title": {
    "en": "Use a game report for a game question",
    "zh": "关于游戏，回到具体报告",
    "ar": "لأسئلة الألعاب ارجع إلى تقاريرها",
    "pt": "Para jogos, consulte os relatórios",
    "de": "Für Spielfragen zählen Spielberichte",
    "fr": "Pour un jeu, consultez son rapport",
    "es": "Para un juego, consulta su informe"
   },
   "body": [
    {
     "en": "Upstream removed the old compatibility table in #4686; its README now directs current reports to Game bring-up discussions. The community blocker-map repository declares itself archived from24October, with its last build23October2026 at22:51UTC. It remains a historical snapshot, not a live status source. Keep original report dates/builds; neither the map nor a high API counter is a playable-game percentage.",
     "zh": "上游#4686移除旧兼容表，当前README引导至Game bring-up讨论。社区blocker map仓库声明10月24日起归档，最后构建为2026年10月23日22:51UTC；仅历史快照，不再是实时状态源。保留原报告日期／构建，地图或高API计数都不代表游戏可玩比例。",
     "ar": "أزيل الجدول في #4686 وREADME يوجه لنقاشات Game bring-up. خريطة المجتمع مؤرشفة منذ24أكتوبر وآخر بناء23أكتوبر2026،22:51UTC؛ مرجع تاريخي لا حي. احتفظ بالتواريخ/build، لا نسبة لعب من الخريطة أو API.",
     "pt": "A tabela saiu em #4686 e README aponta às discussões Game bring-up. Mapa comunitário arquivado desde24out, último build23out2026 às22:51UTC; histórico, não estado vivo. Preserve datas/builds; mapa/API não são percentagem jogável.",
     "de": "Tabelle entfernt in #4686, README verweist auf Game-bring-up-Diskussionen. Communitykarte seit24.Oktober archiviert, letzter Build23.Oktober2026 22:51UTC; historisch, nicht live. Testdaten/Builds behalten; Karte/API-Zähler keine Spielbarkeitsquote.",
     "fr": "Table retirée dans #4686, README renvoie aux discussions Game bring-up. Carte communautaire archivée depuis24oct, dernier build23oct2026 à22:51UTC ; historique, pas statut vivant. Gardez dates/builds ; carte/API pas taux jouable.",
     "es": "Tabla retirada en #4686, README dirige a debates Game bring-up. Mapa comunitario archivado desde24oct, último build23oct2026 a22:51UTC; histórico, no estado vivo. Conserva fechas/builds; mapa/API no son porcentaje jugable."
    }
   ]
  }
 ]
},
 {slug:'updates',reviewed:'2026-10-21',title:L("AnyPS5 releases and version history","AnyPS5 发行版与版本记录","إصدارات AnyPS5 وسجل النسخ","Versões e histórico do AnyPS5","AnyPS5-Releases und Versionsverlauf","Versions et historique d’AnyPS5","Versiones e historial de AnyPS5"),description:L("Read the reviewed AnyPS5 release history, access upstream downloads and see how current main and experimental changes differ from published releases.","查看已复核的 AnyPS5 发行记录与上游下载，了解当前 main、实验改动和已发布发行版的对应关系。","راجع سجل إصدارات AnyPS5 وروابط التنزيل الأصلية، وتعرّف إلى الفرق بين الإصدارات المنشورة وفرع main والتعديلات التجريبية.","Consulte o histórico de versões do AnyPS5 e as transferências oficiais. Saiba como o ramo main e as alterações experimentais diferem das versões publicadas.","Lies den geprüften AnyPS5-Versionsverlauf und finde die Originaldownloads. Vergleiche veröffentlichte Releases mit dem main-Branch und experimentellen Änderungen.","Consultez l’historique vérifié des versions d’AnyPS5 et les téléchargements d’origine. Comparez les versions publiées, la branche main et les changements expérimentaux.","Consulta el historial revisado de AnyPS5 y los archivos originales. Compara las versiones publicadas, la rama main y los cambios experimentales."),sources:[UPSTREAM+'/releases',UPSTREAM+'/commits/main'],sections:[
{
 "id": "v013",
 "title": {
  "en": "20 Oct2026 / v0.1.3",
  "zh": "2026年10月20日 / v0.1.3",
  "ar": "20أكتوبر2026 / v0.1.3",
  "pt": "20out2026 / v0.1.3",
  "de": "20.Okt2026 / v0.1.3",
  "fr": "20oct2026 / v0.1.3",
  "es": "20oct2026 / v0.1.3"
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
 {id:"v012",title:L("14 Oct 2026 / v0.1.2","2026 年 10 月 14 日 / v0.1.2","14 أكتوبر 2026 / v0.1.2","14 out. 2026 / v0.1.2","14. Okt. 2026 / v0.1.2","14 oct. 2026 / v0.1.2","14 oct. 2026 / v0.1.2"),body:[L("The new release is a48c00660, published at 08:56 UTC with matched Windows/Linux tools, libraries and documents. It is a new baseline, not a retest of every game. The Linux mouse-helper collision was reverted by #5738 at 08:58 UTC; native Wayland (#3664), Linux multi-executable sharing (#5443) and SELF unwrapping (#5588) also merged after the tag. Follow their source revisions instead of attributing them to the release.","新发行版对应 a48c00660，于 08:56 UTC 发布配套 Windows／Linux 工具、运行库及文档。它是新的基线，不是全库游戏复测。Linux mouse helper 冲突直到 08:58 UTC 的 #5738 才回退修复；原生 Wayland（#3664）、Linux 多程序共享模块（#5443）及 SELF 解包（#5588）也在该标签后合入，不能写成发行版已有功能。","صدر a48c00660 الساعة 08:56 UTC بأدوات ومكتبات ووثائق Windows/Linux متطابقة. هو أساس جديد، لا إعادة اختبار لكل الألعاب. عُكس تعارض mouse helper في #5738 الساعة 08:58؛ دمج Wayland (#3664) ومشاركة الوحدات بين برامج Linux (#5443) وفك SELF (#5588) بعد الوسم أيضاً. احفظ مراجعات المصدر بدلاً من نسبها للإصدار.","a48c00660 foi publicado às 08:56 UTC com ferramentas, bibliotecas e documentos Windows/Linux correspondentes. É uma nova base, não um reteste de todos os jogos. A colisão do helper de rato só foi revertida em #5738 às 08:58. Wayland (#3664), módulos partilhados entre executáveis Linux (#5443) e extração SELF (#5588) chegaram depois do tag; não pertencem a esta versão.","a48c00660 erschien um 08:56 UTC mit passenden Windows-/Linux-Werkzeugen, Bibliotheken und Dokumenten. Das ist eine neue Basis, kein Test aller Spiele. Die Mouse-Helper-Kollision wurde erst um 08:58 durch #5738 zurückgenommen. Wayland (#3664), gemeinsame Linux-Module (#5443) und SELF-Entpacken (#5588) wurden ebenfalls nach dem Tag gemergt und gehören nicht diesem Release an.","a48c00660 a été publié à 08:56 UTC avec outils, bibliothèques et documents Windows/Linux cohérents. C’est une nouvelle base, pas un retest de tous les jeux. Le conflit mouse helper a été annulé par #5738 à 08:58. Wayland (#3664), les modules Linux partagés (#5443) et l’extraction SELF (#5588) ont aussi été fusionnés après le tag, hors de cette release.","a48c00660 se publicó a las 08:56 UTC con herramientas, bibliotecas y documentos Windows/Linux correspondientes. Es una base nueva, no una prueba de todos los juegos. La colisión del helper de ratón se revirtió en #5738 a las 08:58. Wayland (#3664), módulos Linux compartidos (#5443) y extracción SELF (#5588) también llegaron después del tag, fuera de esta versión.")],links:[{"label": "v0.1.2", "url": "https://github.com/boykopovar/AnyPS5/releases/tag/v0.1.2"}, {"label": "PR #5738", "url": "https://github.com/boykopovar/AnyPS5/pull/5738"}]},
 S('v011',L('28 Sep 2026 / v0.1.1','2026 年 9 月 28 日 / v0.1.1','28 سبتمبر 2026 / v0.1.1','28 set. 2026 / v0.1.1','28. Sep. 2026 / v0.1.1','28 sept. 2026 / v0.1.1','28 sept. 2026 / v0.1.1'),L('v0.1.1 was published at 23:34 UTC, after v0.1.0 at 21:53 UTC on the same day. The reviewed assets include platform-specific library archives, Windows and Linux relinker binaries, and compatibility/input documentation. For the publisher’s complete release notes and later releases, use the original release page.','v0.1.1 发布于当日 23:34 UTC，早前的 v0.1.0 发布于 21:53 UTC。已复核附件包括分平台系统库压缩包、Windows 与 Linux relinker，以及兼容和输入文档。完整发行说明与后续版本请以原始发行页为准。','نُشر v0.1.1 الساعة 23:34 UTC بعد v0.1.0 الساعة 21:53 في اليوم نفسه. تشمل الملفات المراجَعة أرشيفات مكتبات لكل نظام وrelinker لـWindows وLinux ووثائق التوافق والإدخال. راجع صفحة الإصدار الأصلية للملاحظات الكاملة والإصدارات اللاحقة.','v0.1.1 foi publicada às 23:34 UTC, depois de v0.1.0 às 21:53 do mesmo dia. Os ficheiros revistos incluem bibliotecas por sistema, relinker Windows e Linux e documentação de compatibilidade e entrada. Consulte a página original para as notas completas e versões posteriores.','v0.1.1 erschien um 23:34 UTC, nach v0.1.0 um 21:53 UTC desselben Tages. Geprüfte Dateien sind plattformspezifische Bibliotheksarchive, Windows-/Linux-Relinker und Kompatibilitäts-/Eingabedokumente. Vollständige Herausgeberhinweise und spätere Versionen stehen auf der Original-Release-Seite.','v0.1.1 a été publiée à 23:34 UTC, après v0.1.0 à 21:53 UTC le même jour. Les fichiers vérifiés comprennent des bibliothèques par système, les relinkers Windows et Linux et la documentation de compatibilité et d’entrée. Consultez la page originale pour les notes complètes et les versions suivantes.','v0.1.1 se publicó a las 23:34 UTC, después de v0.1.0 a las 21:53 del mismo día. Los archivos revisados incluyen bibliotecas por sistema, relinker Windows y Linux y documentación de compatibilidad y entrada. Consulta la página original para las notas completas y versiones posteriores.')),
 S('review',L('11 Oct 2026 / catalog review','2026 年 10 月 11 日 / 资料复核','11 أكتوبر 2026 / مراجعة الفهرس','11 out. 2026 / revisão do catálogo','11. Okt. 2026 / Katalogprüfung','11 oct. 2026 / vérification du catalogue','11 oct. 2026 / revisión del catálogo'),L('This edition separates the official compatibility table from community test reports. It records source build hashes, hardware, local changes, limits and original links. Upstream main changes quickly; the collection was made over a time interval, not from one atomic repository snapshot. A review date is not the original test date.','本版将官方兼容表与社区测试分开，记录源码构建哈希、硬件、本地改动、范围与原始链接。上游 main 更新很快，资料在一段采集时间内取得，并非同一时点的原子快照。复核日期也不是原始测试日期。','يفصل هذا الإصدار الجدول الرسمي عن اختبارات المجتمع ويسجل البناء والجهاز والتعديلات والحدود والروابط. يتغير main سريعاً؛ جُمعت المصادر خلال فترة وليس من لقطة واحدة متزامنة. تاريخ المراجعة ليس تاريخ الاختبار الأصلي.','Esta edição separa a tabela oficial dos testes da comunidade e regista commits, equipamento, alterações, limites e ligações. O main muda rapidamente; a recolha decorreu num intervalo, não numa única fotografia simultânea. A data de revisão não é a data original do teste.','Diese Ausgabe trennt offizielle Tabelle und Community-Tests und dokumentiert Commits, Hardware, lokale Änderungen, Grenzen und Originalquellen. main ändert sich schnell; die Sammlung entstand über einen Zeitraum, nicht als ein atomarer Snapshot. Das Prüfdatum ist kein ursprüngliches Testdatum.','Cette édition sépare la table officielle des tests communautaires et indique commits, matériel, changements locaux, limites et liens originaux. main évolue vite ; la collecte s’est déroulée sur un intervalle, sans instantané atomique unique. La date de vérification n’est pas celle du test.','Esta edición separa la tabla oficial de las pruebas comunitarias y registra commits, equipo, cambios locales, límites y enlaces originales. main cambia rápidamente; los datos se recogieron durante un intervalo, no en una única instantánea simultánea. La fecha de revisión no es la del test.'))]},
 faqArticle,howItWorksArticle,
];
export const policyArticles:Article[]=[
 {slug:'methodology',title:L("How AnyPS5 game reports are reviewed","游戏报告与状态标注说明","كيف نراجع تقارير ألعاب AnyPS5","Como revemos os testes de jogos AnyPS5","So prüfen wir AnyPS5-Spielberichte","Comment sont vérifiés les tests AnyPS5","Cómo revisamos las pruebas de AnyPS5"),description:L("Learn how AnyPS5 game reports are reviewed, how stages and local changes are labelled, and why missing tests or menu FPS do not establish gameplay compatibility.","了解 AnyPS5 游戏报告的复核方式、测试阶段和本地改动的标注规则，以及为何缺少报告或菜单帧数不能代表游戏兼容性。","تعرّف إلى مراجعة تقارير ألعاب AnyPS5 ووصف مراحل التشغيل والتعديلات المحلية، ولماذا لا يثبت غياب الاختبارات أو FPS القائمة توافق اللعب.","Saiba como revemos os relatórios de jogos AnyPS5, identificamos etapas e alterações locais e distinguimos testes em falta, FPS dos menus e jogo efetivo.","Erfahre, wie wir AnyPS5-Spielberichte prüfen, Testphasen und lokale Änderungen kennzeichnen und fehlende Tests von belegten Laufergebnissen unterscheiden.","Découvrez comment nous vérifions les rapports AnyPS5, indiquons les étapes et modifications locales et distinguons les tests absents des résultats de jeu.","Conoce cómo revisamos los informes de AnyPS5, etiquetamos las fases y los cambios locales y distinguimos la ausencia de pruebas de los resultados de juego."),sources:[sourceDoc('COMPATIBILITY'),UPSTREAM+'/discussions'],sections:[
 S('review',L('What we review','我们复核什么','ما نراجعه','O que revemos','Was wir prüfen','Ce que nous vérifions','Qué revisamos'),L('We read upstream documentation and game discussions, including relevant updates. Each entry retains its title ID, platform, build, hardware, observed stage and source. Official-table records remain separate from community records. This edition contains source-based editorial reviews; we have not reproduced these game tests.','我们阅读上游文档和游戏讨论，包含相关更新。每条记录保留游戏 ID、平台、构建、硬件、运行阶段与原始来源。官方表记录与社区记录始终分开。本版属于来源资料复核，本站没有复现这些游戏测试。','نقرأ الوثائق ونقاشات الألعاب وتحديثاتها ذات الصلة. يحتفظ كل سجل بالمعرّف والنظام والبناء والجهاز والمرحلة والمصدر. نفصل الجدول الرسمي عن تقارير المجتمع. هذه مراجعة تحريرية للمصادر؛ لم نكرر اختبارات الألعاب بأنفسنا.','Lemos documentação e discussões, incluindo atualizações relevantes. Cada registo mantém ID, sistema, compilação, equipamento, etapa e fonte. A tabela oficial fica separada dos relatórios da comunidade. Esta edição é uma revisão editorial das fontes; não reproduzimos os testes.','Wir lesen Originaldokumentation und Spieldiskussionen samt relevanten Updates. Einträge behalten ID, Plattform, Build, Hardware, Ausführungsphase und Quelle. Offizielle Tabelle und Community-Berichte bleiben getrennt. Diese Ausgabe beruht auf Quellenprüfung; wir haben die Spieltests nicht selbst wiederholt.','Nous lisons la documentation et les discussions, avec leurs mises à jour pertinentes. Chaque entrée garde identifiant, plateforme, code, matériel, étape et source. La table officielle reste séparée des rapports communautaires. Cette édition repose sur une vérification éditoriale des sources ; nous n’avons pas reproduit les tests.','Leemos la documentación y las discusiones, incluidas las actualizaciones relevantes. Cada registro conserva ID, sistema, versión, equipo, fase y fuente. La tabla oficial se separa de los informes comunitarios. Esta edición es una revisión editorial de fuentes; no hemos reproducido las pruebas.')),
 S('limits',L('What a label does not prove','标签不能证明什么','ما لا يثبته الوصف','O que uma classificação não prova','Was ein Label nicht belegt','Ce qu’un libellé ne prouve pas','Qué no demuestra una etiqueta'),L("Gameplay means the source observed play beyond the menus. Menu and Startup describe earlier stages; Blocked indicates a problem preventing further progress. These labels do not guarantee a complete game or correct rendering in every scene. Locally modified results may involve forks, patches, changes to game files or disabled checks. FPS applies to specific hardware and scenes; source timestamps are not assumed test dates. Missing measurements remain unknown.","“游戏过程”表示来源观察到了菜单之后的实际游戏过程；“菜单阶段”和“启动阶段”表示更早的运行进度，“运行受阻”表示存在阻止继续运行的问题。这些标签不保证全流程稳定或所有场景渲染正确。“含本地改动”可能涉及分支、补丁、游戏文件修改或关闭检查。FPS 对应具体硬件与场景，来源更新时间不等于测试日期，缺失测量保持未知。","تعني مرحلة اللعب أن المصدر رصد اللعب بعد القوائم. تشير مرحلتا القائمة والبدء إلى تقدم أبكر، ويعني تعثر التشغيل وجود مشكلة تمنع المزيد من التقدم. لا تضمن هذه الأوصاف إكمال اللعبة أو صحة الرسم في كل مشهد. قد تشمل التعديلات المحلية فروعاً أو تصحيحات أو تغييرات في ملفات اللعبة أو تعطيل فحوصات. يخص FPS عتاداً ومشاهد محددة؛ لا نعدّ وقت تحديث المصدر تاريخاً للاختبار. تبقى القياسات المفقودة غير معروفة.","Fase de jogo significa que a fonte observou jogo para além dos menus. Menu e Arranque descrevem etapas anteriores; Bloqueado indica um problema que impede avançar. Estas classificações não garantem o jogo completo nem a apresentação correta de todas as cenas. As alterações locais podem incluir forks, patches, modificações dos ficheiros do jogo ou verificações desativadas. Os FPS referem-se a equipamento e cenas específicos; a data de atualização da fonte não é tomada como data do teste. As medições em falta permanecem desconhecidas.","Spielgeschehen bedeutet, dass die Quelle Gameplay über die Menüs hinaus beobachtet hat. Menü und Startphase beschreiben frühere Phasen; Blockiert weist auf ein Problem hin, das weiteren Fortschritt verhindert. Diese Angaben garantieren weder ein vollständiges Durchspielen noch korrekte Grafik in jeder Szene. Lokale Änderungen können Forks, Patches, veränderte Spieldateien oder deaktivierte Prüfungen umfassen. FPS gelten für bestimmte Hardware und Szenen; Quellenzeitstempel sind keine angenommenen Testdaten. Fehlende Messungen bleiben unbekannt.","Phase de jeu signifie que la source a observé du jeu au-delà des menus. Menu et Démarrage décrivent des étapes antérieures ; Bloqué indique un problème empêchant de progresser. Ces libellés ne garantissent ni un jeu complet ni un rendu correct dans toutes les scènes. Les modifications locales peuvent inclure des forks, des correctifs, des changements dans les fichiers du jeu ou des contrôles désactivés. Les FPS correspondent à un matériel et à des scènes précis ; la date de mise à jour de la source n’est pas considérée comme la date du test. Les mesures absentes restent inconnues.","Fase de juego significa que la fuente observó juego más allá de los menús. Menú e Inicio describen fases anteriores; Bloqueado indica un problema que impide avanzar. Estas etiquetas no garantizan completar el juego ni un renderizado correcto en todas las escenas. Los cambios locales pueden incluir forks, parches, modificaciones de los archivos del juego o comprobaciones desactivadas. Los FPS corresponden a hardware y escenas concretos; la fecha de actualización de la fuente no se considera la fecha de la prueba. Las mediciones ausentes siguen siendo desconocidas.")),
 S('unreported',L('Games without a reviewed test','暂无测试报告的游戏','الألعاب بلا اختبار مراجَع','Jogos sem teste revisto','Spiele ohne geprüften Test','Jeux sans test vérifié','Juegos sin prueba revisada'),L('We also list selected PS5 games without reviewed run reports, with game information and official promotional media. No reviewed test is different from a reported startup failure. Missing title IDs, hardware and FPS remain unknown. Issues and PRs may supply technical context, but a merged change alone cannot upgrade a game’s run stage.','游戏库也收录部分尚无运行报告的 PS5 游戏，提供游戏资料和官方宣传图片。暂无测试报告不同于报告明确显示启动受阻；缺失的 PPSA ID、硬件与帧数保持未知。Issue 与 PR 可补充技术背景，但仅凭代码合并不会提高游戏运行阶段。','ندرج ألعاب PS5 مختارة بلا تقارير تشغيل مراجَعة مع معلومات وصور ترويجية رسمية. غياب الاختبار يختلف عن فشل بدء موثق. المعرّف والعتاد وFPS الناقصة تبقى مجهولة. تعطي المشكلات وPR سياقاً، لكن الدمج وحده لا يرفع مرحلة اللعبة.','Incluímos jogos PS5 sem relatórios revistos, com informação e imagens oficiais. Falta de teste difere de falha de arranque documentada. ID, equipamento e FPS ausentes ficam por indicar. Issues e PR dão contexto, mas um merge não altera a fase de execução.','Wir führen auch PS5-Spiele ohne geprüften Laufbericht mit Informationen und offiziellen Bildern. Fehlende Tests unterscheiden sich von belegten Startfehlern. Titel-ID, Hardware und FPS bleiben bei fehlenden Daten unbekannt. Issues und PRs liefern Kontext; ein Merge erhöht keine Testphase.','Nous listons aussi des jeux PS5 sans rapport vérifié avec informations et images officielles. L’absence de test diffère d’un échec documenté. Identifiants, matériel et FPS manquants restent inconnus. Issues et PR apportent du contexte ; une intégration ne change pas l’étape atteinte.','Incluimos juegos PS5 sin informes revisados con información e imágenes oficiales. No tener pruebas difiere de un fallo documentado. ID, hardware y FPS ausentes siguen desconocidos. Issues y PR aportan contexto; un merge no cambia la fase alcanzada.')),
 S('corrections',L('Corrections and media','更正与媒体来源','التصحيحات والوسائط','Correções e conteúdos visuais','Korrekturen und Medien','Corrections et médias','Correcciones y material visual'),L("Use the source links to inspect original screenshots, clips and logs. Homepage illustrations are decorative. We link to reporter media rather than republishing it without permission. For corrections, email " + contactEmail + " with the page URL, field to correct and original evidence. A game without a reviewed report has unknown compatibility.","通过来源链接查看原始截图、视频与日志。首页插画是装饰图；我们链接作者媒体，不擅自转载。更正请邮件联系 " + contactEmail + "，附上页面 URL、需要更正的字段和原始证据。没有已复核报告的游戏，其兼容性仍未知。","افتح روابط المصادر لمراجعة الصور والمقاطع والسجلات الأصلية. رسوم الصفحة الرئيسية زخرفية. نربط بوسائط أصحاب التقارير ولا نعيد نشرها دون إذن. للتصحيح راسل " + contactEmail + " مع رابط الصفحة والحقل المطلوب والدليل الأصلي. توافق اللعبة بلا تقرير مراجَع يظل مجهولاً.","Consulte as fontes para ver capturas, vídeos e registos originais. As ilustrações iniciais são decorativas. Ligamos aos conteúdos dos autores sem os republicar sem autorização. Para correções, envie para " + contactEmail + " o URL da página, o campo e a prova original. Sem um relatório revisto, a compatibilidade permanece desconhecida.","Prüfe Originalbilder, Videos und Logs über die Quellenlinks. Die Illustrationen auf der Startseite sind dekorativ. Wir verlinken Medien der Autoren, statt sie ohne Erlaubnis neu zu veröffentlichen. Sende Korrekturen mit Seiten-URL, betroffenem Feld und Originalbelegen an " + contactEmail + ". Ohne geprüften Bericht bleibt die Kompatibilität unbekannt.","Consultez les sources pour voir les captures, vidéos et journaux originaux. Les illustrations d’accueil sont décoratives. Nous renvoyons aux médias des auteurs sans les republier sans autorisation. Envoyez les corrections à " + contactEmail + " avec l’URL de la page, le champ concerné et la preuve originale. Sans rapport vérifié, la compatibilité reste inconnue.","Consulta las fuentes para ver capturas, vídeos y registros originales. Las ilustraciones de inicio son decorativas. Enlazamos el material de los autores sin republicarlo sin permiso. Envía las correcciones a " + contactEmail + " con la URL de la página, el campo y la prueba original. Sin un informe revisado, la compatibilidad sigue siendo desconocida."))]},
 {slug:'contribute',title:L("Submit an AnyPS5 game test report","提交 AnyPS5 游戏测试报告","إرسال تقرير اختبار لعبة على AnyPS5","Enviar um teste de jogo no AnyPS5","Einen AnyPS5-Spieltest einreichen","Proposer un rapport de test AnyPS5","Enviar una prueba de juego con AnyPS5"),description:L("Use an AnyPS5 test report template to record the PS5 title ID, build, hardware, scene, FPS and known failures. Include the original evidence and mark unknown fields.","使用 AnyPS5 测试报告模板，记录 PS5 游戏 ID、构建、硬件、场景、帧数与故障，附上原始证据并明确注明未知字段。","استخدم نموذج تقرير AnyPS5 لتسجيل معرّف لعبة PS5 والبناء والعتاد والمشهد وFPS والأخطاء. أرفق الدليل الأصلي وحدد الحقول المجهولة.","Use o modelo de relatório AnyPS5 para registar o ID PS5, a compilação, o equipamento, a cena, os FPS e as falhas. Junte provas originais e indique campos desconhecidos.","Dokumentiere PS5-ID, AnyPS5-Build, Hardware, Szene, FPS und Fehler mit der Berichtsvorlage. Verlinke Originalbelege und kennzeichne unbekannte Angaben.","Utilisez le modèle de rapport AnyPS5 pour noter l’ID PS5, la version, le matériel, la scène, les FPS et les erreurs. Ajoutez les preuves et les champs inconnus.","Usa la plantilla de informe AnyPS5 para registrar ID de PS5, versión, hardware, escena, FPS y fallos. Añade pruebas originales y marca los campos desconocidos."),sources:[UPSTREAM+'/discussions'],sections:[{id:'template',title:L('Report template','报告模板','قالب التقرير','Modelo de relatório','Berichtsvorlage','Modèle de rapport','Plantilla de informe'),body:[L("Publish game tests in the matching upstream discussion. For catalog corrections or new source suggestions, email " + contactEmail + " with the game name, page URL and original report link. This site has no upload form and does not collect game files. Mark unknown fields explicitly and never present menu FPS as a gameplay result.","游戏测试请发布在上游对应讨论。收录更正或新来源建议请邮件联系 " + contactEmail + "，附游戏名、页面 URL 和原始报告链接。本站没有上传表单，也不收集游戏文件。未知字段请明确注明，不要将菜单帧数作为游戏过程结果。","انشر اختبارات الألعاب في النقاش الأصلي المناسب. لتصحيحات الفهرس أو اقتراح مصادر راسل " + contactEmail + " مع اسم اللعبة ورابط الصفحة والتقرير الأصلي. لا توجد استمارة رفع ولا نجمع ملفات ألعاب. وضّح الحقول المجهولة ولا تعرض FPS القائمة كنتيجة للعب.","Publique os testes na discussão original adequada. Para correções ou novas fontes, envie para " + contactEmail + " o nome do jogo, o URL da página e a ligação ao relatório original. Não temos formulário de carregamento nem recolhemos ficheiros de jogos. Indique os campos desconhecidos e não apresente FPS do menu como resultado de jogo.","Veröffentliche Spieltests in der passenden Diskussion des Originalprojekts. Sende Katalogkorrekturen oder neue Quellen mit Spielname, Seiten-URL und Link zum Originalbericht an " + contactEmail + ". Es gibt kein Uploadformular und wir sammeln keine Spieldateien. Kennzeichne unbekannte Felder und verwende Menü-FPS nicht als Gameplay-Ergebnis.","Publiez les tests dans la discussion originale correspondante. Pour les corrections ou nouvelles sources, envoyez à " + contactEmail + " le nom du jeu, l’URL de la page et le lien du rapport original. Le site n’a pas de formulaire d’envoi et ne collecte pas de fichiers de jeu. Précisez les champs inconnus ; les FPS du menu ne sont pas ceux du gameplay.","Publica las pruebas en la discusión original correspondiente. Para correcciones o nuevas fuentes, envía a " + contactEmail + " el nombre del juego, la URL de la página y el enlace al informe original. No hay formulario de subida ni recogemos archivos de juegos. Indica los campos desconocidos y no presentes FPS del menú como resultado de juego.")],links:[contactLink],code:L("Title / PPSA ID / game version:\nAnyPS5 release or exact commit:\nFork, patches and local changes:\nOS / CPU / GPU / driver / RAM:\nResolution and runtime settings:\nScene and reproducible steps:\nObserved stage / failures:\nFPS sample duration / cache state:\nAudio / input / saves tested:\nTest date and original evidence URL:","游戏名 / PPSA ID / 游戏版本：\nAnyPS5 发行版或准确提交：\n分支、补丁与本地改动：\n系统 / CPU / GPU / 驱动 / 内存：\n分辨率与运行设置：\n测试场景与复现步骤：\n达到的阶段 / 故障：\nFPS 采样时长 / 缓存状态：\n音频 / 输入 / 存档测试情况：\n测试日期与原始证据链接：","اسم اللعبة / معرّف PPSA / إصدار اللعبة:\nإصدار AnyPS5 أو معرّف التعديل الدقيق:\nالفرع والتصحيحات والتعديلات المحلية:\nالنظام / CPU / GPU / التعريف / RAM:\nالدقة وإعدادات التشغيل:\nالمشهد وخطوات إعادة الاختبار:\nالمرحلة التي بلغها الاختبار / الأخطاء:\nمدة قياس FPS / حالة التخزين المؤقت:\nاختبارات الصوت / الإدخال / الحفظ:\nتاريخ الاختبار ورابط الدليل الأصلي:","Jogo / ID PPSA / versão do jogo:\nVersão do AnyPS5 ou commit exato:\nFork, patches e alterações locais:\nSistema / CPU / GPU / controlador / RAM:\nResolução e definições de execução:\nCena e passos para reproduzir:\nEtapa alcançada / falhas:\nDuração da amostra de FPS / estado da cache:\nTestes de áudio / controlos / dados guardados:\nData do teste e ligação às provas originais:","Spiel / PPSA-ID / Spielversion:\nAnyPS5-Release oder genauer Commit:\nFork, Patches und lokale Änderungen:\nSystem / CPU / GPU / Treiber / RAM:\nAuflösung und Laufzeiteinstellungen:\nSzene und Reproduktionsschritte:\nErreichte Phase / Fehler:\nFPS-Messdauer / Cache-Zustand:\nTests von Ton / Eingabe / Speichern:\nTestdatum und Link zu Originalbelegen:","Jeu / identifiant PPSA / version du jeu :\nVersion d’AnyPS5 ou commit exact :\nFork, correctifs et modifications locales :\nSystème / CPU / GPU / pilote / RAM :\nRésolution et paramètres d’exécution :\nScène et étapes de reproduction :\nÉtape atteinte / erreurs :\nDurée de mesure des FPS / état du cache :\nTests du son / des commandes / des sauvegardes :\nDate du test et lien vers les preuves originales :","Juego / ID PPSA / versión del juego:\nVersión de AnyPS5 o commit exacto:\nFork, parches y cambios locales:\nSistema / CPU / GPU / controlador / RAM:\nResolución y ajustes de ejecución:\nEscena y pasos para reproducir:\nFase alcanzada / fallos:\nDuración de la muestra de FPS / estado de la caché:\nPruebas de audio / controles / partidas guardadas:\nFecha de la prueba y enlace a las pruebas originales:")}]},
 {slug:'about',title:L("About the AnyPS5 community sites","关于 AnyPS5 社区资料站","عن مواقع مجتمع AnyPS5","Sobre os sites da comunidade AnyPS5","Über die AnyPS5-Community-Websites","À propos des sites communautaires AnyPS5","Acerca de los sitios de la comunidad AnyPS5"),description:L("Learn how AnyPS5.cc guides and AnyPS5.games reports are edited, where their evidence comes from and how to suggest corrections.","了解 AnyPS5.cc 教程与 AnyPS5.games 游戏资料的定位、来源、编辑方式及更正渠道。","تعرّف إلى أدلة AnyPS5.cc وتقارير الألعاب على AnyPS5.games، وكيف نراجع المصادر ونحرر المحتوى ونتعامل مع طلبات التصحيح.","Conheça os guias de AnyPS5.cc e os relatórios de AnyPS5.games, as fontes utilizadas, o processo de revisão e a forma de sugerir correções.","Erfahre mehr über die Anleitungen auf AnyPS5.cc und Spielberichte auf AnyPS5.games, ihre Quellen, die redaktionelle Prüfung und Korrekturvorschläge.","Découvrez les guides d’AnyPS5.cc et les rapports d’AnyPS5.games, leurs sources, notre méthode de vérification et la manière de proposer des corrections.","Conoce las guías de AnyPS5.cc y los informes de AnyPS5.games, sus fuentes, el proceso de revisión y cómo proponer correcciones."),sources:[UPSTREAM],sections:[S('purpose',L('About these resources','关于这两个资料站','حول هذين المرجعين','Sobre estes recursos','Über diese Angebote','À propos de ces ressources','Acerca de estos recursos'),L('AnyPS5.cc explains setup, official tools and common failure modes. AnyPS5.games organizes game-specific reports with build and hardware context. Both are independent community resources maintained in one repository. They are not affiliated with the AnyPS5 developers or Sony Interactive Entertainment.','AnyPS5.cc 解释设置流程、上游工具与常见故障；AnyPS5.games 整理带构建和硬件条件的游戏报告。二者是共用一个仓库维护的独立社区资料站，与 AnyPS5 开发者和索尼互动娱乐没有隶属关系。','يشرح AnyPS5.cc الإعداد والأدوات والأخطاء الشائعة، وينظم AnyPS5.games تقارير الألعاب مع البناء والجهاز. كلاهما مرجع مستقل من المجتمع في مستودع واحد، وليس تابعاً لمطوري AnyPS5 أو Sony Interactive Entertainment.','AnyPS5.cc explica configuração, ferramentas e falhas comuns. AnyPS5.games organiza relatórios por jogo com contexto de compilação e equipamento. Ambos são recursos independentes da comunidade num repositório único, sem afiliação aos programadores de AnyPS5 ou à Sony Interactive Entertainment.','AnyPS5.cc erklärt Einrichtung, Originalwerkzeuge und typische Fehler. AnyPS5.games ordnet Spielberichte nach Build und Hardware. Beide sind unabhängige Community-Angebote aus einem Repository und gehören weder zu den AnyPS5-Entwicklern noch zu Sony Interactive Entertainment.','AnyPS5.cc explique l’installation, les outils et les erreurs fréquentes. AnyPS5.games organise les rapports par jeu avec le contexte de version et de matériel. Ces ressources communautaires indépendantes partagent un dépôt, sans affiliation aux développeurs d’AnyPS5 ou à Sony Interactive Entertainment.','AnyPS5.cc explica configuración, herramientas y fallos habituales. AnyPS5.games organiza informes por juego con contexto de versión y equipo. Ambos son recursos independientes de la comunidad en un mismo repositorio, sin relación con los desarrolladores de AnyPS5 ni Sony Interactive Entertainment.'))]},
 {slug:'privacy',title:L('Privacy','隐私','الخصوصية','Privacidade','Datenschutz','Confidentialité','Privacidad'),description:L("Read how the AnyPS5 community sites handle browser preferences, search links, Umami visit statistics, hosted game images and email enquiries.","了解 AnyPS5 社区资料站如何处理浏览器偏好、搜索链接、Umami 访问统计、游戏图片和邮件咨询中的数据。","تعرّف إلى تعامل مواقع مجتمع AnyPS5 مع تفضيلات المتصفح وروابط البحث وإحصاءات Umami وصور الألعاب وبيانات الاستفسارات البريدية.","Saiba como os sites da comunidade AnyPS5 tratam preferências do navegador, pesquisas partilhadas, estatísticas Umami, imagens e pedidos por email.","Lies, wie die AnyPS5-Community-Websites Browsereinstellungen, Suchlinks, Umami-Statistiken, Spielbilder und E-Mail-Anfragen verarbeiten.","Découvrez comment les sites communautaires AnyPS5 traitent les préférences du navigateur, les liens de recherche, les statistiques Umami, les images et les emails.","Conoce cómo los sitios de la comunidad AnyPS5 tratan preferencias del navegador, enlaces de búsqueda, estadísticas Umami, imágenes y consultas por correo."),sources:[],sections:[S('data',L('Data and preferences','数据与偏好','البيانات والتفضيلات','Dados e preferências','Daten und Einstellungen','Données et préférences','Datos y preferencias'),L('These sites have no accounts or advertising trackers. Theme preferences are stored in your browser’s localStorage. Search runs in the browser; shared searches encode filters in the URL. Hosting and Cloudflare may process request metadata such as IP address and browser headers to deliver and protect the sites.','本站没有账号或广告追踪器。主题偏好保存在浏览器 localStorage，搜索在浏览器内完成；分享搜索会将筛选条件写入 URL。托管平台和 Cloudflare 可能处理 IP 地址、浏览器请求头等请求元数据，用于提供和保护网站。','لا توجد حسابات أو أدوات تتبع إعلانية في هذين الموقعين. يُحفظ المظهر في localStorage بالمتصفح، ويعمل البحث محلياً؛ يتضمن رابط البحث المشترك المرشحات. قد تعالج الاستضافة وCloudflare عنوان IP وترويسات الطلب لتقديم الموقع وحمايته.',"Estes sites não têm contas de utilizador nem rastreadores publicitários. A preferência de tema é guardada no localStorage do navegador. A pesquisa é feita no navegador; os links de pesquisa partilhados incluem os filtros no URL. O alojamento e a Cloudflare podem tratar o endereço IP e os cabeçalhos dos pedidos para disponibilizar e proteger os sites.",'Diese Websites verwenden keine Konten oder Werbetracker. Die Darstellung wird im localStorage des Browsers gespeichert. Die Suche läuft lokal; geteilte Suchlinks enthalten Filter in der URL. Hosting und Cloudflare können IP-Adresse und Anfrageheader zur Auslieferung und zum Schutz verarbeiten.','Ces sites n’utilisent ni comptes ni traceurs publicitaires. Le thème est enregistré dans le localStorage du navigateur. La recherche est locale ; un lien partagé contient les filtres dans son URL. L’hébergement et Cloudflare peuvent traiter IP et en-têtes pour servir et protéger le site.','Estos sitios no tienen cuentas ni rastreadores publicitarios. El tema se guarda en localStorage y la búsqueda se realiza en el navegador; los enlaces compartidos incluyen filtros en la URL. El alojamiento y Cloudflare pueden procesar IP y cabeceras para servir y proteger el sitio.'),L("GitHub and media links open external services with their own policies. For privacy questions, email " + contactEmail + ". If you email us, we receive your address and message and use them to handle your request. Clearing local site data removes the saved theme.","GitHub 和媒体链接会打开适用独立政策的外部服务。隐私问题请邮件联系 " + contactEmail + "。发送邮件后，我们会收到你的邮箱地址和邮件内容，用于处理你的请求。清除本站本地数据会移除主题偏好。","تفتح روابط GitHub والوسائط خدمات خارجية بسياساتها الخاصة. لأسئلة الخصوصية راسل " + contactEmail + ". نتلقى عنوان بريدك ورسالتك ونستخدمهما لمعالجة طلبك. مسح بيانات الموقع المحلية يزيل تفضيل المظهر.","As ligações GitHub e de conteúdos abrem serviços com políticas próprias. Para questões de privacidade, escreva para " + contactEmail + ". Recebemos o seu endereço e mensagem e usamos esses dados para tratar o pedido. Limpar os dados locais remove o tema guardado.","GitHub- und Medienlinks öffnen externe Dienste mit eigenen Richtlinien. Sende Datenschutzfragen an " + contactEmail + ". Bei einer E-Mail erhalten wir deine Adresse und Nachricht und verwenden sie zur Bearbeitung deiner Anfrage. Das Löschen lokaler Websitedaten entfernt das gespeicherte Design.","Les liens GitHub et médias ouvrent des services soumis à leurs propres politiques. Pour une question de confidentialité, écrivez à " + contactEmail + ". Nous recevons votre adresse et votre message et les utilisons pour traiter votre demande. Effacer les données locales supprime le thème enregistré.","Los enlaces GitHub y multimedia abren servicios con sus propias políticas. Para cuestiones de privacidad, escribe a " + contactEmail + ". Recibimos tu dirección y mensaje y los usamos para atender tu solicitud. Borrar los datos locales elimina el tema guardado.")),S('analytics',L("Visit statistics","访问统计","إحصاءات الزيارات","Estatísticas de visitas","Besuchsstatistik","Statistiques de visite","Estadísticas de visitas"),L("We use self-hosted Umami at track.pixmiller.com to understand page visits, referrers, approximate countries, browser/device categories and interactions such as search, filters and guide links. It does not use analytics cookies. URL query strings and fragments are excluded. Search events record query length, selected filters and result counts, not the search text. No account identifiers or copied code are sent. The tracker respects the browser’s Do Not Track setting.","我们使用自托管的 Umami（track.pixmiller.com），统计页面访问、来源、近似国家、浏览器与设备类别，以及搜索、筛选和指南入口等操作。统计不使用 Cookie，排除 URL 查询参数和片段。搜索事件只记录输入长度、筛选条件和结果数量，不发送搜索词；也不发送账号标识或复制的代码内容。追踪器遵循浏览器的“请勿追踪”设置。","نستخدم Umami المستضاف ذاتياً على track.pixmiller.com لفهم الزيارات ومصادرها والبلدان التقريبية وفئات المتصفحات والأجهزة والتفاعلات مثل البحث والمرشحات وروابط الأدلة. لا يستخدم ملفات تعريف ارتباط للتحليلات. نستبعد معلمات URL وأجزاءه. تسجل أحداث البحث طول النص والمرشحات وعدد النتائج دون نص البحث. لا نرسل معرّفات حسابات أو محتوى الشيفرة المنسوخة. يحترم التتبع إعداد عدم التعقب في المتصفح.","Usamos Umami autoalojado em track.pixmiller.com para compreender visitas, referências, países aproximados, categorias de navegador/dispositivo e ações como pesquisa, filtros e ligações aos guias. Não usa cookies de análise. Excluímos parâmetros e fragmentos do URL. Os eventos de pesquisa registam o comprimento do texto, filtros e número de resultados, não o texto pesquisado. Não enviamos identificadores de contas nem código copiado. O rastreador respeita a opção Do Not Track do navegador.","Wir verwenden selbst gehostetes Umami auf track.pixmiller.com für Seitenbesuche, Verweisquellen, ungefähre Länder, Browser- und Gerätekategorien sowie Aktionen wie Suche, Filter und Anleitungslinks. Es werden keine Analyse-Cookies verwendet. URL-Parameter und Fragmente sind ausgeschlossen. Suchereignisse enthalten Textlänge, Filter und Ergebnisanzahl, nicht den Suchtext. Kontokennungen und kopierter Code werden nicht gesendet. Der Tracker berücksichtigt die Do-Not-Track-Einstellung des Browsers.","Nous utilisons Umami auto-hébergé sur track.pixmiller.com pour comprendre les visites, sources, pays approximatifs, catégories de navigateur/appareil et actions comme la recherche, les filtres et les liens vers les guides. Il n’utilise pas de cookies d’analyse. Les paramètres et fragments d’URL sont exclus. Les événements de recherche enregistrent la longueur du texte, les filtres et le nombre de résultats, pas le texte recherché. Aucun identifiant de compte ni code copié n’est envoyé. Le suivi respecte le réglage Do Not Track du navigateur.","Usamos Umami autoalojado en track.pixmiller.com para conocer visitas, procedencia, países aproximados, categorías de navegador/dispositivo y acciones como búsquedas, filtros y enlaces a guías. No usa cookies de analítica. Excluimos parámetros y fragmentos de URL. Los eventos de búsqueda registran la longitud del texto, filtros y número de resultados, no el texto buscado. No enviamos identificadores de cuentas ni código copiado. El rastreador respeta la opción Do Not Track del navegador.")),S('images',L('Game images','游戏图片','صور الألعاب','Imagens dos jogos','Spielbilder','Images de jeux','Imágenes de juegos'),L('Game covers and promotional screenshots are served from this site as optimized WebP files. Viewing them does not send image requests to PlayStation or Steam. Source and test-report links open external services with their own privacy policies.','游戏封面和宣传截图以优化后的 WebP 文件由本站提供，浏览图片不会向 PlayStation 或 Steam 发送图片请求。点击资料来源或测试报告链接后，会进入适用独立隐私政策的外部服务。','نقدّم أغلفة الألعاب والصور الترويجية من هذا الموقع بصيغة WebP محسّنة. عرضها لا يرسل طلبات صور إلى PlayStation أو Steam. تفتح روابط المصادر وتقارير الاختبار خدمات خارجية بسياسات خصوصية مستقلة.','As capas e capturas promocionais são servidas por este site em ficheiros WebP otimizados. Vê-las não envia pedidos de imagens para a PlayStation ou a Steam. As ligações às fontes e aos relatos de testes abrem serviços externos com políticas de privacidade próprias.','Spielcover und Werbe-Screenshots werden als optimierte WebP-Dateien von dieser Website ausgeliefert. Beim Anzeigen werden keine Bildanfragen an PlayStation oder Steam gesendet. Quellen- und Testbericht-Links führen zu externen Diensten mit eigenen Datenschutzrichtlinien.','Les jaquettes et captures promotionnelles sont hébergées sur ce site au format WebP optimisé. Leur affichage n’envoie aucune requête d’image à PlayStation ou Steam. Les liens vers les sources et rapports de test ouvrent des services externes soumis à leurs propres politiques de confidentialité.','Las portadas y capturas promocionales se sirven desde este sitio como archivos WebP optimizados. Verlas no envía solicitudes de imágenes a PlayStation ni a Steam. Los enlaces a fuentes e informes de pruebas abren servicios externos con sus propias políticas de privacidad.'))]},
 {slug:'terms',title:L("Terms of use","使用条款","شروط الاستخدام","Termos de utilização","Nutzungsbedingungen","Conditions d’utilisation","Condiciones de uso"),description:L("Read the AnyPS5 community sites’ terms on source attribution, software and game rights, independent status, and the limits of compatibility and performance reports.","阅读 AnyPS5 社区资料站关于来源署名、软件与游戏权利、独立身份，以及兼容性和性能报告范围的使用条款。","اقرأ شروط مواقع مجتمع AnyPS5 بشأن نسب المصادر وحقوق البرامج والألعاب واستقلال الموقع وحدود تقارير التوافق والأداء.","Leia os termos dos sites da comunidade AnyPS5 sobre autoria das fontes, direitos de software e jogos, independência e limites dos relatórios de compatibilidade.","Lies die Nutzungsbedingungen der AnyPS5-Community-Websites zu Quellenangaben, Software- und Spielrechten sowie Grenzen von Kompatibilitäts- und Leistungsberichten.","Consultez les conditions des sites communautaires AnyPS5 : attribution des sources, droits sur les logiciels et jeux, indépendance et limites des rapports.","Consulta las condiciones de los sitios de la comunidad AnyPS5 sobre autoría, derechos de software y juegos, independencia y límites de los informes."),sources:[UPSTREAM],sections:[S('scope',L('Scope and attribution','范围与署名','النطاق ونسب المصادر','Âmbito e atribuição','Geltungsbereich und Quellen','Portée et attribution','Alcance y atribución'),L("These pages summarize dated source reports and practical documentation. Software and source material retain their respective licenses and author attribution. Game names are used to identify reports. Nothing here grants rights to game content or guarantees a title, performance level or future feature. Report errors by emailing " + contactEmail + " with original evidence.","这些页面整理有日期的来源报告与实用文档。软件和原始资料遵循各自许可，作者署名保留在来源中；游戏名称用于识别记录。本站不授予游戏内容权利，也不保证兼容、性能或未来功能。发现错误请邮件联系 " + contactEmail + "，并附原始证据。","تلخّص الصفحات تقارير مؤرخة ووثائق عملية. تحتفظ البرامج والمصادر بتراخيصها ونسبها إلى أصحابها، وتُستخدم أسماء الألعاب لتعريف التقارير. لا يمنح الموقع حقوقاً للمحتوى ولا يضمن التوافق أو الأداء أو الميزات المستقبلية. أبلغ عن الأخطاء عبر " + contactEmail + " مع الدليل الأصلي.","Estas páginas resumem relatórios datados e documentação prática. O software e as fontes mantêm as respetivas licenças e autoria. Os nomes dos jogos identificam relatórios. Nada aqui concede direitos sobre conteúdos nem garante compatibilidade, desempenho ou funcionalidades futuras. Comunique erros para " + contactEmail + " com provas originais.","Diese Seiten fassen datierte Berichte und praktische Dokumentation zusammen. Software und Quellen behalten ihre jeweiligen Lizenzen und Urheberangaben. Spielnamen dienen der Zuordnung. Die Inhalte gewähren keine Spielrechte und garantieren weder Kompatibilität noch Leistung oder künftige Funktionen. Melde Fehler mit Originalbelegen per E-Mail an " + contactEmail + ".","Ces pages résument des rapports datés et une documentation pratique. Logiciels et sources conservent leurs licences et attributions respectives. Les noms de jeux identifient les rapports. Rien ici n’accorde de droits sur les contenus ni ne garantit compatibilité, performances ou fonctions futures. Signalez les erreurs à " + contactEmail + " avec les preuves originales.","Estas páginas resumen informes fechados y documentación práctica. El software y las fuentes mantienen sus licencias y autoría. Los nombres de juegos identifican los informes. Nada aquí concede derechos sobre contenido ni garantiza compatibilidad, rendimiento o funciones futuras. Comunica los errores a " + contactEmail + " con pruebas originales."))]},
];
const privacy=policyArticles.find(article=>article.slug==='privacy')!;
privacy.reviewed='2026-10-15';
privacy.sections.push({
 ...S('performance',L('Page-load performance','页面加载性能','أداء تحميل الصفحات','Desempenho de carregamento','Ladeleistung der Seiten','Performances de chargement','Rendimiento de carga'),L('Our CDN also provides Cloudflare Web Analytics for page-load timing and Core Web Vitals. This is separate from self-hosted Umami. Umami’s browser opt-out controls Umami, not Cloudflare’s performance beacon. The linked Cloudflare documentation explains its data collection.','我们的 CDN 也通过 Cloudflare Web Analytics 测量页面加载时间与 Core Web Vitals。这与自托管 Umami 是独立服务；Umami 的浏览器停用设置只控制 Umami，不控制 Cloudflare 的性能脚本。下方 Cloudflare 文档说明其数据收集方式。','توفر شبكة CDN أيضاً Cloudflare Web Analytics لقياس زمن تحميل الصفحات وCore Web Vitals. وهي خدمة منفصلة عن Umami المستضاف ذاتياً. إعداد تعطيل Umami في المتصفح لا يتحكم بمنارة أداء Cloudflare. توضح الوثائق المرتبطة كيفية جمع البيانات.','A CDN também fornece Cloudflare Web Analytics para tempos de carregamento e Core Web Vitals. É um serviço separado do Umami autoalojado. A opção de desativar Umami no navegador não controla o beacon Cloudflare. A documentação ligada explica a recolha de dados.','Unser CDN verwendet auch Cloudflare Web Analytics für Ladezeiten und Core Web Vitals. Dieser Dienst ist vom selbst gehosteten Umami getrennt. Die Umami-Deaktivierung im Browser steuert nicht den Cloudflare-Performance-Beacon. Die verlinkte Dokumentation erläutert die Datenerhebung.','Notre CDN fournit aussi Cloudflare Web Analytics pour les temps de chargement et les Core Web Vitals. Ce service est distinct d’Umami auto-hébergé. La désactivation d’Umami dans le navigateur ne contrôle pas la balise Cloudflare. La documentation liée explique les données collectées.','La CDN también ofrece Cloudflare Web Analytics para tiempos de carga y Core Web Vitals. Es independiente de Umami autoalojado. Desactivar Umami en el navegador no controla la baliza de Cloudflare. La documentación enlazada explica la recogida de datos.')),
 links:[{label:'Cloudflare Web Analytics',url:'https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/'}],
});

const troubleshooting20=extraArticles.find(article=>article.slug==="troubleshooting")!;
troubleshooting20.sections.push({
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
troubleshooting20.reviewed="2026-10-20";

extraArticles.find(article=>article.slug==="progress")!.sections[0].body.push({
 "en": "The previous reviewed snapshot was4137/5182 (79.83%); this one is4303/6675 (64.46%). Both implemented and declared counts grew, so the lower percentage does not itself establish a regression. Newly declared exports and inert implementations still need behavior and title checks.",
 "zh": "上次快照4137／5182（79.83%），本次4303／6675（64.46%）；实现数与声明总数都增加，因此百分比降低本身不证明回归。新增导出声明及inert实现仍需行为与游戏验证。",
 "ar": "السابق4137/5182 ‏79.83% والجديد4303/6675 ‏64.46%. زادالمنفذوالمعلن، فانخفاضالنسبة ليسدليلتراجع. التصريحاتوالأجسامinert تحتاجفحصالسلوكوالعناوين.",
 "pt": "Anterior4137/5182 (79,83%), atual4303/6675 (64,46%). Ambos os totais cresceram; percentagem menor não prova regressão. Novas declarações e corpos inert exigem validação de comportamento e jogos.",
 "de": "Zuvor4137/5182 (79,83%), jetzt4303/6675 (64,46%). Implementierungen und Gesamtsumme stiegen; sinkende Quote belegt keine Regression. Neue Deklarationen/inerte Rümpfe brauchen Verhaltens- und Spieltests.",
 "fr": "Avant4137/5182 (79,83%), maintenant4303/6675 (64,46%). Les deux comptes augmentent ; pourcentage inférieur ne prouve pas régression. Nouvelles déclarations/corps inertes exigent tests de comportement/jeux.",
 "es": "Antes4137/5182 (79,83%), ahora4303/6675 (64,46%). Ambos recuentos aumentan; menor porcentaje no prueba regresión. Declaraciones nuevas/cuerpos inert requieren pruebas de comportamiento/juegos."
});

extraArticles.find(article=>article.slug==="troubleshooting")!.reviewed="2026-10-24";

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
 "id": "main-memory-recovery-boundary",
 "title": {
  "en": "Later main: recovery is not unlimited memory",
  "zh": "后续main：内存回收不等于无限容量",
  "ar": "main اللاحق: التعافي ليس ذاكرة غير محدودة",
  "pt": "Main posterior: recuperação não é memória ilimitada",
  "de": "Späteres Main: Recovery bedeutet keinen unbegrenzten Speicher",
  "fr": "Main ultérieur : récupération sans mémoire illimitée",
  "es": "Main posterior: recuperación no es memoria ilimitada"
 },
 "body": [
  {
   "en": "Image/buffer allocation retries can release unused pools and reclaimable textures, while preserving pending GPU storage results and recorded-work references. Read requested bytes, released bytes and retry count in bufferpool recovery lines. A failed allocation may remain unrecoverable. The 007 diagnostic cache floor and Astro label-store cost do not justify discarding live GPU results.",
   "zh": "图像／buffer分配重试可释放未用pool及可回收纹理，同时保留待GPU结果和已录制work引用。bufferpool行列出请求量／释放量／重试次数；无法回收足够空间仍会失败。007缓存下限或Astro写回成本不构成丢弃live GPU结果的理由。",
   "ar": "إعادة التخصيص تحرر pools غير مستخدمة/textures قابلة للاسترداد مع حفظ نتائجGPU والمراجع الحية. اقرأ الأحجام/retries، فقد يبقى الفشل. كلفةAstro/أرضية007 لا تبرر إسقاط نتائج حية.",
   "pt": "Retries libertam pools não usados/texturas recuperáveis, preservando resultadosGPU/referências vivas. Leia bytes/retries; pode continuar a falhar. CustoAstro/piso007 não justifica perder resultadosGPU.",
   "de": "Retries geben ungenutztePools/reclaimbareTexturen frei, behaltenGPU-Ergebnisse/Live-Referenzen. Bytes/Retryzahlen lesen, Fehler kannbleiben. Astro-Kosten/007-Floor keinGrund Live-Ergebnisse zuverwerfen.",
   "fr": "Retries libèrent pools inutilisés/textures récupérables enpréservant résultatsGPU/référencesvives. Lisez octets/retries, échec possible. CoûtAstro/plancher007 nejustifient pas perdre résultatsGPU.",
   "es": "Retries liberan pools sinusar/texturas recuperables conservando resultadosGPU/referenciasvivas. Lee bytes/retries, puede fallar. CosteAstro/mínimo007 no justifica descartar resultadosGPU."
  }
 ],
 "links": [
  {
   "label": "Pinned upstream source",
   "url": "https://github.com/boykopovar/AnyPS5/blob/d7948b09f95ea8e302590c09dbb3c0c0b714b84a/docs/user/USAGE.md"
  }
 ]
});

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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

extraArticles.find(article=>article.slug==="troubleshooting")!.reviewed="2026-10-25";

extraArticles.find(article=>article.slug==="troubleshooting")!.sections.push({
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
