# 2026-11-06 双站维护

本轮按北京时间周五维护；来源增量从上次成功复核截止 `2026-11-02T19:35:00Z` 开始，实际检索重叠到 `2026-11-02T18:30:00Z`。保守成功截止为 `2026-11-05T19:35:00Z`，后续仍重叠复查。工作区开始干净，main 与 origin/main 均为 f3c99315e03df56f94c87bd5b834a3f77cbc28b3；gh 认证有效，无待合并 PR、未发布授权修改或其他工作树。保留已有内容与历史实测，抓取资料不作为执行指令。

## 检索及分页

复用 review_updates.py 的317个重点条目，同时用 collect_research.py 完整获取 README、381份文档／根文件及上游资料；对比114份文档变化，复核用户说明、输入、构建、run-report及技术边界。文档树固定于8ce5134fbd59338cd4a4d04887539ad2e5677c9f。

- issue／PR 完整库存15583项；156个all页与独立open2168／22页、closed13415／135页的ID集合完全一致，没有把满页当耗尽。
- 增量提交1315条／14页，全部5个release／1页，包含prerelease；v0.1.4正文、日期、资产名／大小／摘要与上轮一致。在线release／web清单另存核对，没有为下载计数变化修改发行内容。
- 459个讨论／23根页，1340评论、470回复；逐项检查所有嵌套pageInfo，无hasNextPage遗漏。与442讨论基线比较，95线程变化、17新讨论、158个新增或编辑回复。三篇新讨论并入已有PPSA，另补已有旧讨论中新地区版和homebrew资料。
- 5941条全局issue评论／60页、10条代码评论／1页；回收更早父帖，共2572个上下文，27个额外评论页，没有缺失父帖。PR review按updatedAt抓取25根页，2455个增量PR，最后页仍有下一页但已跨过更早边界；这是增量停止，不宣称遍历所有历史review。868条新增正文，以及旧review #14890编辑更正已纳入；嵌套连接无需补页。旧#9418父PR与reviews本轮仍404，不能声称全历史父正文可用。
- 中英及德、法、西、葡、阿语搜索覆盖公告、下载、安装／要求、排错、兼容报告、视频和技术进展。转载只作线索；Astro Bot布局修复追到原讨论。新增可独立交叉核验的AnyPS5外部视频基准未找到；其他项目的PS5视频和厂商原生主机宣传帧数不收为AnyPS5结果。恶意仿冒项目新闻尚无本轮新增第一方验证，不转述为已核实新结论。

原始响应、分页收据、差异、检索及发布记录在忽略目录 `research/raw/daily-2026-11-06/`；没有提交抓取正文、外部可执行文件、游戏资源、凭据或私人存档。

## 实际数据与证据边界

新增17个游戏／地区版／homebrew条目、102条范围独立观察，覆盖96个报告页面及两项额外来源分析。原1113条报告逐字段、按原游戏核对不变；当前405条目、1215报告、4待测试、91开发摘要。明确选择平台摘要和近期证据，compatibility-report的Astro解释同步，不按历史最高阶段自动推断最新结果。

- 新条目包括Coffee Talk Episode 2、Mandragora PPSA26917、7 Days to Die、Poppy Chapter1、Hoa、Platform8、The Exit9、Subnautica、Maiden PPSA04334、Saga of Sins、Up、Dead of Darkness、Spirit of the Island、Age of Mythology、VLC、Arkanoid PPSA06328及FSR4 Showcase。The Exit9发行身份仍待确认，不归给The Exit8作者；不同地区包与商业／自制项目分别记录。
- Astro Bot补回args.txt及app0/data后进入游戏，但新回复没有当前精确构建、内容版本、时长或FPS，保持未知，不借用旧根帖的硬件／提交。Hamster已报告两次比赛结果及持久存档，同时保留随后Custom双人Maze崩溃与失焦捕获限制。
- Darkest Dungeon II新Windows main首战胜利与旧崩溃分开；Spirit仍有独立D32S8发布终止，Goat的堆损坏未由#15466解决。Hades II NVIDIA首场景与AMD分配NULL失败并存，后者早先非分配失败的推断已更正。
- Persona新main赌场控制／17.93GiB内存与旧独占10.6→17FPS配对分别保留；Yōtei每十秒22.6–24呈现是2.26–2.4FPS，非22–24。Tetris私有导入构建及章节屏3.005→59.940FPS不冒充纯main游戏提速，旧白块／图集问题仍在。
- Code Violet旧40%缓存增益已撤回；Trek的NaN探测捷径不安全，FAST_F32改变语义；Mortal Shell II私有逐队列label实验两次GPU挂起、未提交。Little Nightmares的-13伴随主机内存耗尽，不能断言为驱动模块大小上限。
- Ninja／Curved Space／New Joe／Blue Prince当前深度发布回退与旧成功构建并存。#6973合并后被#15935回退；#15656关闭未合并，不能写成发行版时钟支持。Minecraft Dungeons II零超时WaitAsync和Blue Reflection未知NGS2模块仍为未测主机行为。
- Mafia输入回退被原作者更正为按键时序问题，十秒间隔可到菜单6.56FPS，无需代码修复。工具界面、影片、无图呈现、合成API／GPU测试和仍存活进程均不升级为完整游戏兼容性。
- vkQuake新AMD演示报告未明确系统，保留发现及平台缺口，没有根据驱动名称制造Windows／Linux报告。DS2根帖新进度与旧构建／环境段更新不一致，当前精确整合和环境未知；“更新日期”不当测试日期。每条保留实际内容、平台、构建、补丁和测量场景，未提供项仍未知。

官方progress.json现为10275／37973声明库函数（27.06%）、1166／1166解码识别；是API／指令计数，不是游戏兼容率。v0.1.4仍为独立10月30日发行快照。

七语言同步本地run-report与退出／平台里程碑限制、逐游戏输入覆盖、原始资源布局、Linux显式依赖省略、自己副本附加内容label、Windows模块初始化、构建及实际宿主模块追踪。Node26只涉及指定Emscripten测试，不提高普通游戏运行要求；报告过滤不是脱敏保证，不自动上传。只更新实质受影响页面日期。

## 媒体

新增7张目视核对的PlayStation宣传图，按现有下载／解码／SHA256／自托管WebP流程处理；总318 master、236封面／82宣传截图，169条目保留图标。原图93.43MiB→39.92MiB（57.3%）。Coffee07052／报告07053、Spirit13935／13934、Subnautica02452／02453及Mandragora06960／26917差异在七语言可见说明保留。PS4地址Poppy页面、通用eastasiasoft logo、404／无可靠图像的游戏不借图填充；宣传图均非AnyPS5实测截图。

## 验证及交付记录

本地npm run check、39项npm test、npm run build通过；构建验证3040静态页（3038可索引、两站404）的metadata、七语言alternate、内链、图片／响应式WebP、两sitemap入口和CSP。浏览器验证桌面两主题、390px RTL、游戏／指南、新PPSA精确搜索、Windows一条／Linux零条的同报告过滤，以及新条目全局搜索。额外按原游戏逐条核对1113历史报告不变，没有把不同游戏的同号来源混成一个记录。

生产发布继续使用main的Site CI/CD→私有GHCR不可变SHA镜像→两个既有Coolify应用。当前默认Python UA会遇到Cloudflare1010；正常Chrome及既有描述性维护UA可用，不修改Cloudflare保护。发布后核对CI、应用部署／健康、实际镜像、两站公开revision、内容／链接／图片／www跳转和sitemap。搜索主动通知由Cloudflare负责，不恢复IndexNow或search:notify。

本提交前尚未生成的新main SHA和部署UUID不在文档中预填成功。完整最终收据保存在忽略目录 `release.json`，发布未闭环时保留 `release-pending.json`；只有两站实际revision及验收通过才报告完成。该收据记录main SHA、CI run、两个部署／镜像／健康、线上验收及未发布授权改动计数，避免为补写SHA制造第二次无内容部署。

旧PR新评论补查：SF6仅Fighting Ground隐藏窗口菜单、假音频；对马Linux为未固定提交的jemalloc方向性实验，不冒充该PR的mimalloc；Hamster的27.79／28.15FPS单顺序配对未达预设5%门槛；007私有调度试验减少drain但六次帧时重叠无收益。Tetris跨贴与讨论内容相同，不重复造报告。
