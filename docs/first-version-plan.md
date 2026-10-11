# AnyPS5 双站首版方案

更新时间：2026 年 10 月 11 日。当前阶段为首版实现和上线验收。用户已确认设计方向，并授权 GitHub、Zeabur US2 和 Cloudflare 部署。

AnyPS5.cc 负责让新手理解项目、获取上游工具并完成设置；AnyPS5.games 负责回答具体游戏在具体环境中运行到哪里。两个站共用品牌、证据数据和语言规范，分别部署。首版采用已选第一套视觉方向的修订稿，两站均提供明暗主题。

## 国家热度与首批语言

Google Trends 使用全球、搜索字词 AnyPS5、所有类别、网页搜索。30 天窗口为 2026/9/11—2026/10/11；7 天窗口为 2026/10/4 16:05—2026/10/11 16:05，时间来自导出文件。采集时当天尚未结束。30 天有 83 个国家/地区的数值，7 天有 87 个。

| 国家 | 30 天指数 | 7 天指数 | 对语言选择的意义 |
| --- | ---: | ---: | --- |
| 巴林 | 100 | 95 | 阿拉伯语 |
| 突尼斯 | 97 | 100 | 阿拉伯语；法语首版覆盖 |
| 约旦 | 93 | 92 | 阿拉伯语 |
| 阿尔巴尼亚 | 89 | 93 | 阿尔巴尼亚语 |
| 摩洛哥 | 86 | 92 | 阿拉伯语；法语首版覆盖 |
| 葡萄牙 | 79 | 78 | 优先葡萄牙葡语 |
| 罗马尼亚 | 75 | 74 | 罗马尼亚语 |
| 阿尔及利亚 | 75 | 73 | 阿拉伯语 |
| 巴基斯坦 | 74 | 77 | 乌尔都语与英文 |
| 立陶宛 | 74 | 72 | 立陶宛语作为后续候选 |
| 伊拉克 | 70 | 75 | 阿拉伯语 |
| 沙特阿拉伯 | 53 | 55 | 阿拉伯语 |
| 加拿大 | 49 | 48 | 英文；法语首版覆盖 |
| 德国 | 34 | 36 | 德语，用户指定首版语言 |
| 中国 | 31 | 34 | 简体中文，亦为用户明确要求 |
| 英国 | 31 | 33 | 英文 |
| 美国 | 23 | 24 | 英文 |
| 巴西 | 18 | 15 | 巴西葡语在后续评估 |
| 日本 | 2 | 1 | 当前不优先 |

指数是该关键词在当地所有 Google 搜索中的相对占比，最高地区归一化为 100；不是搜索次数、市场规模或可获得流量。美国 23 不代表其搜索人数少于巴林；两个窗口独立归一化，不能将指数变化解释为绝对增长率。空白值不是零。Google 数据不能充分代表中国大陆的全部搜索需求。国家也不能直接确定用户的搜索语言，以下是用于验证市场的首版编辑选择。

首批共七种语言，两站都支持对应语言路由。英文为内容事实基线，简体中文覆盖用户要求；阿拉伯语覆盖多个高指数地区。葡萄牙葡语覆盖葡萄牙的相对兴趣信号。按用户最新决定，另外三种语言为德语、法语、西班牙语，替换罗马尼亚语、阿尔巴尼亚语和乌尔都语。选择兼顾编辑维护成本与全球覆盖，不把相对兴趣直接视为市场规模。

| 语言 | Locale | 路由 | 排版 | 首版重点 |
| --- | --- | --- | --- | --- |
| English | en | / | LTR | 全部页面与事实基线 |
| 简体中文 | zh-Hans | /zh/ | LTR | 原生表达的设置、排错与兼容结论 |
| العربية | ar | /ar/ | RTL | 阿拉伯语入门、Windows/Linux 指南 |
| Português | pt-PT | /pt/ | LTR | 葡萄牙用词与地区习惯 |
| Deutsch | de | /de/ | LTR | 全部指南与游戏报告 |
| Français | fr | /fr/ | LTR | 全部指南与游戏报告 |
| Español | es | /es/ | LTR | 全部指南与游戏报告 |

后续候选为立陶宛语、巴西葡语等。上线后依据各站实际曝光、查询语言、点击和阅读完成情况排优先级，不因购买域名或某一天的指数自动扩大语言数量。七种语言的首版页面均需完整正文和标题，不能只翻译导航。未完成的译文不发布；对技术命令逐字保护，对难以确认的本地游戏译名保留原名。没有母语编辑复核的文案不能宣称已经过母语专家审核。

来源：[Google Trends 30 天](https://trends.google.com/trends/explore?date=today%201-m&q=AnyPS5)、[7 天](https://trends.google.com/trends/explore?date=now%207-d&q=AnyPS5)、[官方数据说明](https://support.google.com/trends/answer/4365533?hl=en)。完整原始 CSV 位于 research/raw，整理数据位于 research/trends-regions.json。

## 双站定位和内容边界

| 站点 | 核心用户问题 | 核心资产 | 页面主动作 |
| --- | --- | --- | --- |
| AnyPS5.cc | 项目现在能做什么，怎么开始，怎么排错？ | 多语言指南与版本影响解读 | 开始设置 |
| AnyPS5.games | 这个游戏在我的系统和版本中能跑到哪里？ | 可追溯的游戏与测试数据库 | 搜索游戏或 PPSA ID |

.cc 的指南引用游戏示例后链接 .games 的对应记录；.games 的报告链接 .cc 的通用设置和排错指南。一个问题只保留一个完整正文归属，避免在两个域名复制全文。独立游戏结论属于 .games，发布版本及通用安装说明属于 .cc。

品牌所有可见文案写 AnyPS5，域名显示 AnyPS5.cc 和 AnyPS5.games，URL 使用域名实际的小写形式。两站清楚注明是独立社区资料站，并提供上游仓库入口。

## 首版页面范围

### AnyPS5.cc

英文基础路由如下，其余六种语言使用相同信息架构：

| 路由 | 页面任务 |
| --- | --- |
| / | 当前能力、开始设置、兼容查询入口、最新可靠更新 |
| /start/ | 检查游戏与环境、选择发行版或源码构建、进入系统指南 |
| /downloads/ | 上游版本、资产用途、Windows/Linux 对应文件、原始下载地址 |
| /requirements/ | 有来源的架构、Vulkan、工具链要求与环境限制 |
| /guides/windows/ | Windows 目录布局、转换命令、系统库和运行步骤 |
| /guides/linux/ | Linux 设置、库路径、权限及 Vulkan 环境说明 |
| /guides/build/ | 源码构建、relinker-only 与完整系统库构建的区别 |
| /guides/input/ | 手柄、键鼠映射、配置文件和可复制示例 |
| /guides/language-fonts/ | 游戏语言编号、开放字体替代方案 |
| /troubleshooting/ | SELF/ELF、193/126、缺失导入、内存提交、图形与权限问题 |
| /progress/ | 上游声明函数及指令识别计数，并解释口径 |
| /updates/ | 版本和重要主线变化的人工审核摘要 |
| /updates/v0-1-1/ | 发行版 v0.1.1 的实际资产和与 main 的区别 |
| /faq/ | 是什么、能运行哪些游戏、平台差异、尚未验证的内容 |
| /about/ | 独立站身份、来源政策、联系入口 |

不创建空新闻页、虚构未来版本或没有信息增量的每日文章。macOS 在当前上游 usage 中出现了输出选项，而 build 文档仍明确限制运行范围；首版 FAQ 要说明文档范围差异，不能因此宣传已成熟支持 macOS 游戏运行。

### AnyPS5.games

| 路由 | 页面任务 |
| --- | --- |
| / | 名称/PPSA ID 搜索，平台、运行阶段、证据类别筛选 |
| /games/[slug]/ | 游戏身份、分平台测试记录、当前结论、性能条件、问题、历史、来源 |
| /reports/ | 按日期查看经过审核的测试报告 |
| /methodology/ | 阶段和证据定义、审核、过时结论及纠错规则 |
| /contribute/ | 测试报告模板和上游 Game bring-up 入口 |
| /about/ | 站点身份与来源说明 |

资料索引当前覆盖 25 个上游报告中的游戏 ID：Dreaming Sarah、Silt、Animal Well、Balatro、Hollow Knight: Silksong、Hades、Hades II、Astro Bot、Astro's Playroom、Demon's Souls、Ghost of Yōtei、God of War: Sons of Sparta、Grand Theft Auto V、Minecraft Preview、Sonic Origins Plus、Disney Epic Mickey: Rebrushed、3DMiniGolf、Stray、Wobbly Life、Rise of the Ronin、Ratchet & Clank: Rift Apart、Hello Kitty Island Adventure、STAR WARS: Galactic Racer、SAROS、DOOM homebrew。

索引只是待审核的内容库，不意味着 25 个游戏均能玩。SAROS 当前讨论主帖只说将来会更新，不足以生成可检索的兼容结论；其他信息不足的条目同样保留为资料候选，不发布空壳详情页。DOOM homebrew 与商业 DOOM 游戏严格区分。游戏 ID 只视为源报告所声明的身份，出版前检查版本/地区匹配，不将一个 ID 当成该游戏所有地区版的唯一标识。

首版采用当前有效的上游测试报告，不把竞品的汇总状态作为自己的测试证据。截图和视频保留作者与原帖来源，先确认可展示范围；没有可用实测图片时使用排版，不用生成图冒充游戏画面。

## 数据模型与审核

核心实体为 Game、Edition、TestReport、Benchmark、Media、Source 和 Release。Game 使用站内稳定 ID，一个游戏关联多个地区/版本 Edition，各 Edition 保存 PPSA ID 和已知 content ID。游戏搜索包含原名、已核实的本地名称、别名及所有已核实 ID。

每条 TestReport 至少有：

- 游戏 Edition、游戏版本、平台与系统版本。
- AnyPS5 commit/release；main、fork、PR 组合、local patch 分开记录。
- CPU、GPU、驱动、内存、分辨率及设置；缺失字段是 unknown/null。
- 到达阶段：not_tested、load_failure、boot、menu、in_game；是否可玩另行记录。
- 画面、音频、输入、存档、崩溃及具体阻塞条件。
- 测试日期、原帖创建/修改日期、编辑复核日期，三者分开。
- FPS 与采样场景、统计方式、测量来源绑定；菜单 FPS 不等于游戏 FPS。
- 来源 URL、截图/视频来源、证据类别以及是否独立复现。

证据类别分为上游官方文档、社区作者报告和本站复现。当前未进行本站游戏测试，不能显示“本站实测”。“实验补丁进入游戏”与“官方表列为可玩”应有明确区别。一个游戏可以同时拥有“官方 NVIDIA 环境可玩”和“某 AMD 驱动/旧构建崩溃”的报告；不会删掉历史失败记录，也不会把新补丁成功结果泛化给发行版。

当前三个已整理的示例：

1. Dreaming Sarah：官方表 Windows in-game/playable；60 FPS 和 36 FPS 分别绑定两套硬件；未给出测试日期、游戏版本或构建。Linux 仍未知。
2. Dreaming Sarah / RX 6700 XT：社区讨论 #3018 先记录崩溃，后记录 main 379d8b4e + 8acd0113 在开场森林约 60 FPS；只限该机器和补丁树，不代替官方表。
3. Silt：社区讨论 #2810，Windows 11 / RX 5700 XT / ba2a0a31 加四项本地改动，报告 44–52 FPS、音频及区域切换；仍有抗锯齿缺失和画面问题。

主线更新、PR 合并和 issue 关闭不自动提升游戏状态。采集脚本写入候选资料，编辑审核后才更新公开数据。保留来源变更差异，避免原帖后续修订覆盖之前的证据。过期记录保留构建条件并显示复核日期。

## 设计修订与主题

当前目标图：design/anyps5-dual-site-themes-v2.png。这是第一套方向的修订稿；原始探索图已经被替代，只保留为参考。图像生成用于视觉排版，实际文案与命令以审核资料为准。

| 项目 | 深色主题 | 浅色主题 |
| --- | --- | --- |
| 页面底色 | 深海军蓝 #081017 | 浅米白 #F6F7F0 |
| 正文 | 近白色 | 深蓝黑 #13202D |
| 主动作 | 黄绿色 #C1ED50，深色文字 | 深墨绿底，白字 |
| 分隔线 | 低对比蓝灰 | 淡灰绿 |
| 已确认状态 | 图标、明确文字与适度绿色 | 深绿色文字和图标 |
| 实验状态 | 琥珀色提示与文字 | 深琥珀色文字与图标 |

品牌采用大标题、紧凑工具导航、细分隔线、留白和低干扰氛围图。门户突出开始设置；兼容库突出检索和报告，不放伪造游戏封面。长文页应降低背景纹理，保留舒适行宽。

主题行为：Light / Dark / System；默认跟随系统，用户选择按站点存储，下次访问恢复。不同域名分别保存偏好，不承诺自动共享 localStorage。首屏加载前应用选择，避免闪烁；导航、表格、长文、输入框、代码块、弹层及状态均覆盖两个主题。

桌面 1440px、移动端 390px、阿拉伯语/乌尔都语 RTL 都要验证。移动端以分平台测试摘要替代表格挤压；来源、条件和搜索仍能访问。RTL 镜像导航与阅读布局；品牌、PPSA ID、版本、路径和命令保持 LTR。可交互目标具备键盘焦点，状态不只靠颜色区分，文本对比度达到 WCAG AA。

## 工程创建方案

本阶段没有创建应用工程、安装依赖、运行服务或发布站点。用户确认修订稿后采用如下结构：

```text
AnyPS5/
  anyps5.cc/                 门户站工程
  anyps5.games/              兼容库工程
  packages/content/         共享事实、游戏、报告、版本、语言和 schema
  packages/ui/              两站确实共享的品牌/主题基础，不做泛化组件框架
  research/                 来源快照、审核候选与采集脚本
  docs/                     方案、内容地图、审核规范
  design/                   修订稿与生成提示词
```

实现采用 Astro + TypeScript 静态站点，复用 DiPlay 项目已经验证的内容驱动、canonical/hreflang/sitemap 校验方式。每个工程有独立命令、配置、域名与构建产物；共享数据只有一个事实源。兼容搜索和筛选采用轻量前端交互，游戏详情与指南通过静态 HTML 直接可读。版本下载链接导航至实际 GitHub 资产，校验版本、平台和资产用途。

内容路由使用自身语言 canonical、互相对应的 hreflang 与英文 x-default；仅完整且真实存在的译文进入 sitemap。两域名之间采用相关内容链接，不把它们互设为语言替代版。Article/BreadcrumbList 与页面可见内容一致；不伪造评分、评论或下载产品属性。

首版不依赖账号、投票或复杂后台。贡献入口提供可复制的结构化模板和上游讨论入口，不把没有接收端的表单假装成提交成功。主题和语言切换、搜索筛选、复制命令、游戏记录展开等核心操作必须真实可用。

## 构建后的验收

两个工程都应单独构建成功；七种语言不能有缺失关键文案或指向未生成页面的切换链接。来源 URL、游戏 ID、版本下载资产、canonical/hreflang/sitemap 做数据验证。搜索覆盖别名和 PPSA ID，过滤后的 URL 可复用，空结果正确说明未收录不等于不兼容。

用同一视口将实现与目标图比较，修复布局与视觉偏差；另检查移动端、两个主题、系统主题变化、RTL、长名称、缺失硬件/FPS、多个 Edition 和冲突报告。验证完毕交付两个本地预览，发布另按用户后续指令执行。

## 资料来源与当前差异化

上游事实来源：

- [仓库 README](https://github.com/boykopovar/AnyPS5)
- [发行版](https://github.com/boykopovar/AnyPS5/releases)
- [使用说明](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/USAGE.md)
- [构建说明](https://github.com/boykopovar/AnyPS5/blob/main/docs/dev/BUILD.md)
- [输入映射](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/INPUT_MAPPING.md)
- [官方兼容表](https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md)
- [技术架构](https://github.com/boykopovar/AnyPS5/blob/main/docs/dev/ARCHITECTURE.md)
- [技术债](https://github.com/boykopovar/AnyPS5/blob/main/docs/dev/TechnicalDebt.md)
- [进度与计数口径](https://boykopovar.github.io/AnyPS5/)
- [游戏带起讨论](https://github.com/boykopovar/AnyPS5/discussions)

快照包括 11 份 Markdown 文档、3267 条 issue/PR 对象（394 个 issue、2873 个 PR）、49 个讨论、2 个发行版和近期 100 条提交。30 篇带游戏 ID 的讨论归入 25 个游戏候选；其中整理了 73 个图片/视频/附件链接引用，尚未将这些引用等同于可以转载的资产。

抓取中上游变化很快，数据不是同一 commit 的原子快照；采集日期和观察到的 tree SHA 已保存。当前 progress.json 为 2839/3318 个声明函数，85.56%；1166/1166 个指令被解码器识别。两者都不是游戏兼容率，100% 指令识别不意味着完整渲染正确。

现有 [anyps5.org](https://anyps5.org/compatibility/) 已经有 24 个游戏的兼容目录及来源，不能把“一游戏一页”当成独有优势。[anyps5.app](https://anyps5.app/) 已有下载、指南和进度解释。因此差异化应落实为高信号语言的完整教程、可按硬件/构建区分的测试记录、及时复核和清晰的来源层级。

Dead Cells 的旧新闻和搜索缓存仍在，但本次读取 https://github.com/OverkillLabs/DeadCells-PS5-Native 及旧 issue #38 均返回 404；不能作为当前可用下载链接或最新已核实兼容结果。先保留为历史线索，取得仍有效的一手来源后再发布。

资料索引文件：

- research/research-manifest.json：采集范围、计数、快照与链接检查。
- research/trends-regions.json：全部国家数据与方法限制。
- research/game-source-index.json：25 个游戏候选和 30 篇原帖、媒体引用。
- research/reviewed-examples.json：三条已整理的证据示例。
- research/raw/：完整原始文档及 API/CSV 快照，作为不可信来源材料保存。
- design/prompts.json：内置图像生成工具的提示词与当前修订稿映射。

首版采用一个 monorepo，两个独立 Astro 工程与 Zeabur 服务；资料索引的 25 个候选中，SAROS 原帖没有可用测试结果，实际发布 24 个游戏、30 条来源报告。设计稿中的三条样例表格扩展为可搜索、按单条报告筛选的完整库。
