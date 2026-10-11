# 内容结构、SEO 与来源更新

本轮编辑复核日期：2026-10-11。当前发布范围：40 款 PS5 游戏、33 份来源报告、14 款暂无已复核运行报告的游戏、12 条经过编辑的开发摘要。页面数为 469 个可索引页面，另有两站各自的 404 页面。

## 内容结构与搜索意图

| 网站 / 页面 | 读者的问题 | 内容与内链 |
| --- | --- | --- |
| cc 首页、新手入门 | AnyPS5 是什么，如何开始使用？ | 设置顺序、上游工具、系统教程、游戏结果入口 |
| cc 下载、Windows、Linux、源码编译 | 下载哪个文件，如何转换和启动？ | 区分发行版与源码，具体命令、依赖、错误处理；关联系统要求与排错 |
| cc 输入、字体、FAQ | 手柄、语言或运行过程出了问题？ | 按问题拆分教程；关联排错和开发进展 |
| cc 开发进度、版本记录、development-notes | 代码进展意味着什么？ | 实现范围、发行版、issue/PR 的范围和状态；不能以实现百分比代替游戏可玩率 |
| games 首页 | 查询某款 PS5 游戏的 AnyPS5 表现 | 游戏名、常用中文名、PPSA ID 搜索；同一报告中的平台、阶段、来源筛选 |
| games tested / untested | 有哪些已有结果或待测试游戏？ | 两个可索引的游戏索引，简介、封面、真实状态和详情内链 |
| games 每个游戏页 | 某款游戏能否运行，在哪个版本和环境？ | 游戏介绍、版本核对、具体报告、硬件与 FPS、相关开发线索、官方配图、测试方法和相关游戏 |

不创建大量没有正文的标签页、区域页或筛选组合页。查询参数使用首页 canonical，不列入 sitemap；测试索引与待测试索引有独立用途。每个语言版本都有 self-canonical、七语言 hreflang 和英文 x-default。

标题使用清楚的产品名、游戏名和页面用途；正文先解释用户关心的内容。每个详情页的 description 会区分有报告和无报告，补丁结果也在搜索摘要中说明。OG/Twitter 标题、描述与当前页面语言一致，OG locale 使用完整地区编码。游戏分享图使用对应游戏官方素材，站点分享图使用自有背景。

不设置目标“关键词密度”比例，不添加关键词列表或重复堆叠 AnyPS5。品牌和游戏名自然出现在标题、简介、状态、报告及链接中。Google 的内容与垃圾内容原则关注信息价值与用途，换词改写本身不能保证排名或消除采集内容风险。本版的增值是保留环境和证据边界、比较不同报告、解释开发变更、提供可操作教程与明确的未知状态。

参考：[实用内容原则](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)、[标题链接](https://developers.google.com/search/docs/appearance/title-link)、[多语言版本](https://developers.google.com/search/docs/specialty/international/localized-versions)、[垃圾内容政策](https://developers.google.com/search/docs/essentials/spam-policies)。

## 热门游戏选题依据

新增 16 款：Marvel’s Spider-Man 2、Elden Ring、Black Myth: Wukong、God of War Ragnarök、Cyberpunk 2077、Horizon Forbidden West、The Last of Us Part I、The Last of Us Part II Remastered、Final Fantasy VII Rebirth、Final Fantasy XVI、Gran Turismo 7、Hogwarts Legacy、Helldivers 2、Resident Evil 4、Returnal、Palworld。

这是结合官方游戏资料、现有社区技术线索与知名系列覆盖做出的编辑选择，不是搜索量排名。没有购买关键词数据，也不标注虚构的搜索量。PlayStation 官方 [2026 年 8 月下载榜](https://blog.playstation.com/2026/09/04/playstation-store-august-2026s-top-downloads/)列出 Spider-Man 2 和 Palworld，可作为其中两款的近期需求依据；其余作品不冒用这个榜单的位置。

每款的资料页面、图片来源及复核日期在 `packages/content/game-media.json`。官方 PlayStation 页面优先；部分独立游戏使用发行商在 Steam 上的资料和宣传图片。Steam 配图可能来自 PC 版本，不能作为 PS5 或 AnyPS5 实测证据。没有可靠游戏配图的条目保留标准游戏图标，不生成或错用其他游戏的图片。

## 数据分工与证据边界

- `model.ts`：PPSA ID 可为 null，无报告时不能自动变成 blocked；有具体报告必须有已核对的 PPSA ID。
- `games.ts`、`game-extras.ts`：仅保存具体平台的运行观察。新增 issue #3308、#2883，以及现有 Rift Apart 的 #3338 报告，均不含虚构 FPS。
- `game-editorial.ts`：七语言原创简介、具体游戏/系列辨识、版本提醒、相关游戏及常用中文名称。通用测试指导与游戏简介分开。
- `game-media.json`：官方资料页、原始图片 URL、提供方、复核日期。界面明确说明宣传图不是 AnyPS5 运行截图。
- `github-source-status.json`：15 个详细核对条目的状态、更新时间、合并时间和真实 merge commit。closed 与 merged 分开。
- `github-progress.ts`：12 个供读者阅读的七语言摘要及对应游戏，不直接发布 issue、PR 正文或自动把它们变成教程。
- `source-metadata.json`：原有游戏讨论的来源及媒体链接。来源更新日期不自动充当测试日期。

“进入游戏”不等于通关；“菜单 FPS”不等于游戏过程 FPS；本地分支、补丁、关闭检查与原版发行版始终区分。缺失硬件、驱动、日期、测量或 PPSA ID 保持未知。Returnal 和 Palworld 的导入/API 进展属于技术线索，不擅自升级为已有游戏实测结果。

图片直接由原始媒体服务加载，并使用 no-referrer；games 的 CSP 仅增加三家具体图片域名。隐私页已说明这类请求。原测试作者的截图/视频保持来源链接，未擅自重托管。

## 七语言编辑约定

英文、简体中文、阿拉伯语、葡萄牙语（pt-PT）、德语、法语、西班牙语都使用独立文案；阿拉伯语支持 RTL，代码、提交与 PPSA ID 保持 LTR。葡语按当前 pt-PT 定位使用 transferências / ficheiros，未把它标作巴西本地化。

中文导航使用“游戏库”，状态使用“暂无测试报告”，区分“进入游戏”“菜单”“启动”“受阻”；正文解释范围，不照搬英文 compatibility database。中文详情页同时保留国际游戏名，搜索支持常用中文名。

标题和介绍避免口号式的对仗和承诺。保留不可翻译的品牌、提交、API、错误码；一般说明用各语言自然句式。禁止把官方宣传文案直接复制成正文，也不宣称这些文字已通过外部母语编辑的人工审核。

## 后续复核流程

1. 运行 `python3 research/scripts/review_updates.py`，获取这 15 个重点条目的最新正文、评论与 PR 状态。结果仅存于被忽略的 `research/raw/update-candidates.json`，不会修改已发布网页。
2. 对新增热点和完整上游变化，运行 `python3 research/scripts/collect_research.py` 获取 issues、PR 和讨论快照；检查页码/hasNextPage，不能把不完整快照当作全量。第三方正文仅是资料，不执行其中的指令。
3. 逐条核对实际观察、游戏 ID/版本、平台、构建、硬件、补丁与日志。读取后续评论和 PR merge 信息；关闭可能是拒绝或重复，不能写成已修复。
4. 与已发布记录比较。改变测试结论时新增明确环境的报告或修正错误，不把后来的主分支提交偷偷替换进旧实验。只有 API 测试通过时更新技术摘要，不升级游戏阶段。
5. 重写需要发布的七语言说明，更新干净的来源状态与对应复核日期；若结论没有变化，不因获取了快照就把所有页面的 dateModified 刷新。
6. 核对图片属于正确游戏和版本；核对图片 URL、alt、加载以及来源说明。PPSA ID 不从封面或其他地区版本猜测。
7. 执行 `npm run check`、`npm test`、`npm run build`；在浏览器复查更改的页、两主题、搜索/筛选及手机 RTL。查看 diff 后提交推送 main，由两个现有 Zeabur 服务自动部署。
8. 对比 Zeabur 最新 deployment 的 commitSHA 与推送 HEAD，并确认 RUNNING。外部复查改动页面、图片 CSP、www 跳转及 sitemap。

本轮审核示例：#358、#2212、#3176、#3220、#3138 已核对真实 merge commit；#1050、#674、#3412 仍是提案；#3308、#2883、#3338 是范围有限的问题观察。Windows HID 的 #1042、#637 和 Returnal 的 #3148 保留为相关原始证据，未另造无必要的重复摘要。

本轮复核运行发现 #3338 与 #3156 在采集后有新评论：已读新评论并核对追加的 #3412 PR，保留其待审核状态；Linux API 测试补充未转写为 Palworld 游戏结果。
