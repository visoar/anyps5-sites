# 内容结构、SEO 与来源更新

最近实质更新：2026-10-20。当前发布范围：185 个游戏／版本条目、447 份来源报告、8 个暂无已复核运行报告的条目、50 条经过编辑的开发摘要。共 1,498 个可索引页面，另有两站各自的 404 页面。

## 内容结构与搜索意图

| 网站 / 页面 | 读者的问题 | 内容与内链 |
| --- | --- | --- |
| cc 首页、新手入门 | AnyPS5 是什么，如何开始使用？ | 设置顺序、上游工具、系统教程、游戏结果入口 |
| cc 原理 | relinker 如何转换，运行时还需要什么？ | 七语言自绘响应式流程、转换与运行的区别、图形处理及兼容限制；关联 FAQ、入门与下载 |
| cc 下载、Windows、Linux、源码编译 | 下载哪个文件，如何转换和启动？ | 区分发行版与源码，具体命令、依赖、错误处理；关联系统要求与排错 |
| cc 输入、字体、FAQ | 手柄、语言或运行过程出了问题？ | 按问题拆分教程；关联排错和开发进展 |
| cc 开发进度、版本记录、development-notes | 代码进展意味着什么？ | 实现范围、发行版、issue/PR 的范围和状态；不能以实现百分比代替游戏可玩率 |
| games 首页 | 查询某款 PS5 游戏的 AnyPS5 表现 | 游戏名、常用中文名、PPSA ID 搜索；同一报告中的平台、阶段、来源筛选 |
| games tested / untested | 有哪些已有结果或待测试游戏？ | 两个可索引的游戏索引，简介、封面、真实状态和详情内链 |
| games 每个游戏页 | 某款游戏能否运行，在哪个版本和环境？ | 分平台结果摘要、游戏介绍、版本核对、具体报告、硬件与 FPS、相关开发线索、官方配图、测试方法和相关游戏 |

不创建大量没有正文的标签页、区域页或筛选组合页。查询参数使用首页 canonical，不列入 sitemap；测试索引与待测试索引有独立用途。每个语言版本都有 self-canonical、七语言 hreflang 和英文 x-default。

PC 与模拟器搜索意图由现有首页、原理、FAQ、安装和游戏报告分别承接；依据 Google Trends 与 GSC 自然增强文案，保留技术定义和实验范围。关键词映射、数据限制及本次变更见 [2026-10-13 关键词维护](maintenance/2026-10-13-keyword-intent.md)。

标题使用清楚的产品名、游戏名和页面用途；正文先解释用户关心的内容。每个详情页的 description 会区分有报告和无报告，补丁结果也在搜索摘要中说明。OG/Twitter 标题、描述与当前页面语言一致，OG locale 使用完整地区编码。游戏分享图使用对应游戏官方素材，站点分享图使用自有背景。

不设置目标“关键词密度”比例，不添加关键词列表或重复堆叠 AnyPS5。品牌和游戏名自然出现在标题、简介、状态、报告及链接中。Google 的内容与垃圾内容原则关注信息价值与用途，换词改写本身不能保证排名或消除采集内容风险。本版的增值是保留环境和证据边界、比较不同报告、解释开发变更、提供可操作教程与明确的未知状态。

参考：[实用内容原则](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)、[标题链接](https://developers.google.com/search/docs/appearance/title-link)、[多语言版本](https://developers.google.com/search/docs/specialty/international/localized-versions)、[垃圾内容政策](https://developers.google.com/search/docs/essentials/spam-policies)。

## 热门游戏选题依据

新增 16 款：Marvel’s Spider-Man 2、Elden Ring、Black Myth: Wukong、God of War Ragnarök、Cyberpunk 2077、Horizon Forbidden West、The Last of Us Part I、The Last of Us Part II Remastered、Final Fantasy VII Rebirth、Final Fantasy XVI、Gran Turismo 7、Hogwarts Legacy、Helldivers 2、Resident Evil 4、Returnal、Palworld。

这是结合官方游戏资料、现有社区技术线索与知名系列覆盖做出的编辑选择，不是搜索量排名。没有购买关键词数据，也不标注虚构的搜索量。PlayStation 官方 [2026 年 8 月下载榜](https://blog.playstation.com/2026/09/04/playstation-store-august-2026s-top-downloads/)列出 Spider-Man 2 和 Palworld，可作为其中两款的近期需求依据；其余作品不冒用这个榜单的位置。

每款的资料页面、图片来源及复核日期在 `packages/content/game-media.json`。官方 PlayStation 页面优先；部分独立游戏使用发行商在 Steam 上的资料和宣传图片。Steam 配图可能来自 PC 版本，不能作为 PS5 或 AnyPS5 实测证据。没有可靠游戏配图的条目保留标准游戏图标，不生成或错用其他游戏的图片。

## 数据分工与证据边界

- `model.ts`：PPSA ID 可为 null，无报告时不能自动变成 blocked；有具体报告必须有已核对的 PPSA ID。
- `games.ts`、`game-extras.ts`、`game-updates.ts`、`maintenance-evidence.ts`：仅保存具体平台的运行观察。新增 issue #3308、#2883，以及现有 Rift Apart 的 #3338 报告，均不含虚构 FPS。
- `game-editorial.ts`：七语言原创简介、具体游戏/系列辨识、版本提醒、相关游戏、各语言名称与搜索别名。通用测试指导与游戏简介分开。
- `game-media.json`：官方资料页、原始图片 URL、提供方、复核日期。界面明确说明宣传图不是 AnyPS5 运行截图。
- `game-media-local.json`：自托管 WebP 路径、实际下载 URL、源文件与导出文件的 SHA-256、字节数和尺寸；与原始资料保持一一对应。
- `github-source-status.json`：经过核对的 issue／PR 状态、更新时间、合并时间和真实 merge commit。closed 与 merged 分开。
- `github-progress.ts`：供读者阅读的七语言开发摘要及对应游戏，不直接发布 issue、PR 正文或自动把它们变成教程。
- `source-metadata.json`：原有游戏讨论的来源及媒体链接。来源更新日期不自动充当测试日期。

“进入游戏”不等于通关；“菜单 FPS”不等于游戏过程 FPS；本地分支、补丁、关闭检查与原版发行版始终区分。缺失硬件、驱动、日期、测量或 PPSA ID 保持未知。Returnal 和 Palworld 的导入/API 进展属于技术线索，不擅自升级为已有游戏实测结果。

游戏封面和宣传截图现已自托管为 WebP，网页不会再向 PlayStation 或 Steam 发起图片请求；两站 CSP 的 img-src 统一限制为 self 和 data。七语言隐私页已同步说明。原测试作者的截图/视频仍作为证据来源链接，不会混入官方宣传图库。下载与更新方法、尺寸策略、来源哈希和文件校验见 `docs/media-assets.md`。

`upstream-progress.json` 保存官方进度计数及抓取、复核日期；首页引用同一份快照。Game/Article 的可选 `reviewed` 仅用于实质变化的页面，未变更页面沿用既有日期。FPS 卡片内的场景标签支持七语言；构建与硬件标识保持原样。

`research/published-evidence-index.json` 是已发布报告的干净索引，包含来源、版本、平台、阶段与补丁边界；通过 `npx tsx research/scripts/index_published_evidence.ts` 从当前编辑数据生成。原始正文保留在忽略目录。`game-source-index.json` 是首版候选快照，不代表当前发布库存。

最近检索范围、变更与证据缺口见 [2026-10-20 维护记录](maintenance/2026-10-20-nightly.md)。

## 七语言编辑约定

英文、简体中文、阿拉伯语、葡萄牙语（pt-PT）、德语、法语、西班牙语都使用独立文案；阿拉伯语支持 RTL，代码、提交与 PPSA ID 保持 LTR。葡语按当前 pt-PT 定位使用 transferências / ficheiros，未把它标作巴西本地化。

中文导航使用“游戏库”，状态使用“暂无测试报告”，测试阶段使用“游戏过程”“菜单阶段”“启动阶段”“运行受阻”，避免把标签写成操作指令；“含本地改动”说明构建条件，不表示稳定可玩。各语言按同一含义使用自然的阶段名称，筛选默认值分别写明平台、阶段与来源；正文解释范围，不照搬英文 compatibility database。中文详情页同时保留国际游戏名。搜索共用 `gameSearchText`，支持国际标题、已核对的本地标题、常用名称与 PPSA ID；不能把地区版名称或新 Complete Edition 自动套用到不同 PPSA 版本的报告。

标题和介绍避免口号式的对仗和承诺。保留不可翻译的品牌、提交、API、错误码；一般说明用各语言自然句式。禁止把官方宣传文案直接复制成正文，也不宣称这些文字已通过外部母语编辑的人工审核。

## 收录与纠错入口

两站不向读者公开本站 GitHub 仓库，也不引导读者到本站仓库提交 Issue。收录建议、目录更正和隐私问题统一使用 `packages/content/contact.ts` 中的 `contact@anyps5.games`，页脚与贡献页提供邮件链接；说明同步覆盖七语言。反馈应附游戏名、页面 URL、需更正字段和原始证据链接。游戏测试仍可发布到上游对应讨论；不接收游戏文件。域名已有 Cloudflare MX，具体地址的转发或 catch-all 接收规则需单独核实，MX 不等于收信验证。

## 后续复核流程

1. 运行 `python3 research/scripts/review_updates.py`，获取当前索引中的重点条目的最新正文、评论与 PR 状态。结果仅存于被忽略的 `research/raw/update-candidates.json`，不会修改已发布网页。
2. 对新增热点和完整上游变化，运行 `python3 research/scripts/collect_research.py` 获取 issues、PR 和讨论快照；检查页码/hasNextPage，不能把不完整快照当作全量。第三方正文仅是资料，不执行其中的指令。
3. 逐条核对实际观察、游戏 ID/版本、平台、构建、硬件、补丁与日志。读取后续评论和 PR merge 信息；关闭可能是拒绝或重复，不能写成已修复。
4. 与已发布记录比较。改变测试结论时新增明确环境的报告或修正错误，不把后来的主分支提交偷偷替换进旧实验。只有 API 测试通过时更新技术摘要，不升级游戏阶段。
5. 重写需要发布的七语言说明，更新干净的来源状态与对应复核日期；若结论没有变化，不因获取了快照就把所有页面的 dateModified 刷新。
6. 核对图片属于正确游戏和版本；核对图片 URL、alt、加载以及来源说明。PPSA ID 不从封面或其他地区版本猜测。
7. 执行 `npm run check`、`npm test`、`npm run build`；在浏览器复查更改的页、两主题、搜索/筛选及手机 RTL。查看 diff 后提交推送 main，由两个现有 Zeabur 服务自动部署。
8. 对比 Zeabur 最新 deployment 的 commitSHA 与推送 HEAD，并确认 RUNNING。外部复查改动页面、图片 CSP、www 跳转及 sitemap。

2026-10-12 历史审核示例：#358、#2212、#3176、#3220、#3138 已核对真实 merge commit；#1050、#674、#3412 仍是提案；#3308、#2883、#3338 是范围有限的问题观察。Windows HID 的 #1042、#637 和 Returnal 的 #3148 保留为相关原始证据，未另造无必要的重复摘要。

本轮复核运行发现 #3338 与 #3156 在采集后有新评论：已读新评论并核对追加的 #3412 PR，保留其待审核状态；Linux API 测试补充未转写为 Palworld 游戏结果。

本轮整站语言与 SEO 校订范围、名称来源及验证记录见 [2026-10-12 校订记录](maintenance/2026-10-12-native-copy.md)。

## 查询与结论呈现 — 2026-10-12

`game-conclusions.ts` 按游戏与平台明确选择摘要所依据的报告 ID。摘要沿用经审核的七语言报告正文，展示构建，并可直接打开对应详细报告；历史最高阶段不作为“当前结论”的自动生成依据。新增报告后检查是否需要调整代表证据，保留相互不同的硬件、版本和补丁范围。缺少平台报告时明确写结果未知。

两站导航搜索共用本地名称/PPSA 索引，只展示条目身份与报告是否存在，不在建议项中推测平台或性能。游戏库增加复核与已知测试日期两种排序；测试日期取当前筛选匹配的报告，不能从来源更新时间推断。首页数量按目录条目统计，独立版本分别计数。

发行文件分组由 `release-assets.ts` 保存经过 GitHub Release API 核验的资产地址、字节数、平台与用途。更新页复用经过编辑的开发摘要；部分正文引用其他 issue/PR 时，必须核对相关原帖和真实合并状态。新一轮证据及边界见 `maintenance/2026-10-12-discovery.md`。

## 版本与证据核对 — 2026-10-13

`game-research.ts` 为原来的 14 个待测试条目保存七语言版本范围、来源发现、下一次测试需要验证的内容、核对日期与原始来源。`EvidenceReview.astro` 展示这些信息；组织署名保持真实的社区资料站身份，不把来源核对写成独立游戏实测。四款新增报告依照具体运行记录收录；另外十款保留 unknown，不把相关作品、PS4 版或 API 测试误写成游戏结果。

新报告与 Cyberpunk 后续复测保留独立构建、补丁与平台边界，未提供的内容版本、硬件与测试日期保持 null。来源核对日期不会覆盖旧实验的构建或冒充测试日期。网站仍未进行独立游戏基准。详见 [本轮证据与教程复核](maintenance/2026-10-13-evidence-quality.md)。

## 凌晨增量维护 — 2026-10-13

本轮新增 7 个游戏条目、16 份独立范围报告，GT7 从待测试改为本地整合菜单结果；9 个条目继续无测试结果。原兼容表已移除，`sourceDoc('COMPATIBILITY')` 使用已核验的删除前提交，FAQ 和进度页说明当前社区地图及归档。新报告先核对 `game-conclusions.ts` 的代表证据，历史构建仍保留。抓取脚本对截断树报错、按树提交获取文档，并记录当前文档清单；忽略目录中的旧文件不代表上游仍存在该文件。范围及缺口见 [凌晨维护记录](maintenance/2026-10-13-nightly.md)。

## 搜索需求与热门证据维护 — 2026-10-13

入门页按核对游戏、配套下载、准备目录、转换启动、记录结果组织五步，七语言同步。游戏页标题与摘要加入已核对的 PPSA ID，版本区列出报告提供的内容版本并保留未知值；不新增编号重复页，不跨版本合并报告。

GT7、ASTRO BOT 与 DOOM 的最新跟进新增三份独立范围报告，保留历史菜单、失败及其他硬件结果。GT7 自动驾驶约 2 FPS 的 Music Rally 不代表手动驾驶、其他比赛或通关；ASTRO 的场景计时不转为全游戏 FPS；DOOM 的启动呈现不升级为游戏复测。详见 [搜索需求与证据记录](maintenance/2026-10-13-search-demand.md)。

## 凌晨增量维护 — 2026-10-14

新增 27 个游戏／版本条目、44 份独立范围报告；黑神话：悟空有明确 PPSA23226 的启动失败记录，不再列为无报告。ASTRO BOT 的 PPSA21564、PPSA21567、PPSA21559 分开，旧构建和不同 GPU／版本结果保留。Sarah、Silksong、SILT、PAC-MAN 与 ASTRO’s PLAYROOM 的固定 main 结果均附实际范围，不升级为全流程兼容。分平台摘要保留未更新平台，近期证据入口避免同一游戏重复展示旧观察。

官方计数为 3214／3646（88.15%），着色器解码识别仍为 1166／1166；不等于渲染正确或游戏可玩率。下载／入门增加上游网页工具及版本配对缺口；Linux 补充 X11 发行库、XRandR 和 dma-buf 尺寸；Windows／源码补充主分支导入追踪与多可执行文件边界。当前发行版仍为 v0.1.1。来源与缺口、验证和发布路径见 [本轮维护记录](maintenance/2026-10-14-nightly.md)。
## 搜索增长发布 — 2026-10-15

游戏站兼容性报告与 JSON 数据复用 `game-conclusions.ts` 的选定来源。证据变化时同步维护来源选择与解读，不从五个案例推导普遍兼容或可玩率。发布必须完成 main push、两站对应提交的 RUNNING 部署、线上验收与发布后搜索通知。详见 [本次发布范围](maintenance/2026-10-15-seo-growth.md)。

## 凌晨增量维护 — 2026-10-15

正式 v0.1.2、配套下载、浏览器库 pin、Windows HID 及发行后主分支边界已复核；库计数 3263／3679（88.69%）。新增 24 条目、63 报告，105 条目／187 报告；maintenanceGames 纳入统一补充流程，历史观察日期与最新技术状态分开。ASTRO PPSA／内容版本、自动演示与交互游戏、不同主分支／补丁及机器分别保存；compatibility-report 保持显式来源选择。分页恢复、证据缺口及完整发布闭环见 [本轮记录](maintenance/2026-10-15-nightly.md)。

## 凌晨增量维护 — 2026-10-16

新增 16 个条目、61 份报告；187 份历史观察逐字段保持不变。PlayGo 缺元数据的 installed／absent、不同 ASTRO PPSA、静止性能实验、标题／过场与实际输入分别记录。v0.1.2 未变，main 进度为 3289／3704（88.80%）；退出修复 #6000 与关闭未合入 #5971 分开。新增 14 张经身份检查的宣传封面，目录输出清理、原 param.json、审计原 ELF 和可执行权限说明同步七语言。详情见 [本轮维护记录](maintenance/2026-10-16-nightly.md)。

## 凌晨增量维护 — 2026-10-17

新增25个条目、52份报告；248份历史报告逐字段不变。补收16个新商业游戏讨论及此前遗漏的9个商业／自制条目，独立记录输入未核验的首房间、黑帧计数、开发者选关、准确性放宽的POC和不同PPSA／内容版本。main进度3292／3706（88.83%），v0.1.2及三份release清单未变。app0.zar、pipeline journal、lazy preparation、提交环与stall watchdog同步七语，6条技术摘要均核对merge SHA。新增14张宣传封面；搜索主动通知继续由Cloudflare承担，仓库不运行IndexNow或search:notify。详情见[维护记录](maintenance/2026-10-17-nightly.md)。

## 增量维护 — 2026-10-18

新增20个条目、65份报告，300份历史报告逐字段保持不变。完整扫描196个讨论及全部嵌套分页，补抓全局更新评论及旧父线程，区分可操作场景、菜单、自动过场、黑帧、实验补丁与技术用例。PlayGo策略和缓存／输入／审计／WASM构建说明同步七语言；保留发行版v0.1.2与主分支差异、PPSA及内容版本、实际构建与未知字段。新增8张已核对官方宣传封面，未冒充运行截图。完整范围、证据缺口、验证与发布闭环见[本轮记录](maintenance/2026-10-18-nightly.md)。

## 增量维护 — 2026-10-19

新增13个游戏／地区条目及36条观察，365条历史报告逐字段不变。完整复核210个讨论、7403项issue／PR库存及增量评论与PR审核正文。区分Sonic组合分支游玩、DS2旧分支游玩和新main回归、原版与地区包、菜单／静止场景测量，以及有争议的实际加载库身份。七语言同步叠加层、奖杯、模块／备份、稀疏导入和时间缩放；新增5张已核对宣传封面。范围、缺口及发布验收见[本轮记录](maintenance/2026-10-19-nightly.md)。

## 增量维护 — 2026-10-20

新增6个条目、46份观察，401条历史报告逐字段保留；225个讨论及7770项issue／PR库存完整分页。更新七语言补丁自动发现、Windows DLL、输入、字体和分析教程，纠正preinit与Mac实验状态。main进度4137／5182（79.83%），计数增加而分母增幅更大，非游戏可玩率降低。新增5张宣传封面，来源／缺口／上线闭环见[本轮记录](maintenance/2026-10-20-nightly.md)。
