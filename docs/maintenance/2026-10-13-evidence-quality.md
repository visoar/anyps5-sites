# 2026-10-13 版本、证据与安装教程复核

本轮处理原来的 14 个待测试条目及核心安装教程。继续使用两个现有站点、七种语言与 Git push 上线流程。所有运行观察来自原始作者，本站没有进行游戏实测或独立硬件基准。

## 检索范围

- 通过 gh 完整分页获取上游 4,483 个 issue/PR（45 页，最后一页 83 条）与 70 个公开讨论；讨论列表和评论的 hasNextPage 均为 false。
- 对讨论 #2242 中原采集截断的回复追加查询，补齐后 hasNextPage 为 false。原始正文、评论及完整分页信息存于忽略目录 `research/raw/quality-2026-10-13/`。
- 对 25 个既有重点来源刷新完整评论与 PR 状态，并单独读取与 14 款游戏相关的技术来源、完整评论和真实 merge commit。公开列表按检索词查找是发现线索，不把未命中解释为不存在任何民间测试。
- 重新抓取 14 款游戏的 PlayStation 官方资料页；核对当前上游 README、USAGE、BUILD、兼容表和公开发行记录。公开最新发行版仍为 v0.1.1，不将当前 main 文档中的选项冒充新发行附件。
- 补充公开网页检索用于发现遗漏，但没有把新闻文章、竞品汇总或没有构建条件的视频当作 PS5 兼容报告。

## 新收录与证据边界

| 游戏 | 原始来源 | 收录结果与边界 |
| --- | --- | --- |
| Horizon Forbidden West | [PR #1616](https://github.com/boykopovar/AnyPS5/pull/1616) | PPSA01521，Linux 菜单／加载界面，仅属于更大的本地整合，仍停在材质扫描。精简 PR 本身没有单独游戏复测，关闭表示拆分成多个专题 PR，不表示整合已合入。硬件、内容版本、准确测试提交保持未知。 |
| Resident Evil 4 | [issue #2776](https://github.com/boykopovar/AnyPS5/issues/2776) 后续评论 | PPSA07411，Windows 10 / RTX 4080 SUPER，main c36fd0a0e，无额外待合并 PR。零缺失导入后在首次呈现附近因上下文寄存器 0x2fe 缺失受阻；后续 9aa5fd290 临时打印只用于诊断。复测未明确内容版本，不继承原帖旧版本。 |
| Returnal | [issue #4239](https://github.com/boykopovar/AnyPS5/issues/4239) 最新对照 | PPSA01285，Windows 原始 main ffa198407，三次内存不足／栈回溯失败。局部 PlayGo 改动绕过早期阻碍后仍出现后续深度／模板错误；240 秒存活没有升级成菜单或游戏过程。 |
| Palworld | [issue #3832](https://github.com/boykopovar/AnyPS5/issues/3832) | PPSA23126 / 01.102.999，Windows 11 / i5-13600K / RTX 2080 Ti，main a11c8f7f7 加整合分支和本地改动。世界设置归菜单阶段，角色创建处失败，不生成可玩世界、存档或 FPS 基准。#3835 已合入，不代表原始构建复现整合结果。 |
| Cyberpunk 2077 | [issue #3308 后续复测](https://github.com/boykopovar/AnyPS5/issues/3308#issuecomment-6113518117) | 新增原始 main a11c8f7f 的独立失败记录，保留旧 961b25fe 记录。早期空路径／select 故障不再出现，但 watchdog 仍终止，未记录 flip 或呈现帧。分平台摘要选择新证据，不制造进入游戏结果。 |

总量为 47 个游戏/版本条目、37 个有运行报告、10 个暂无运行报告、61 份独立范围的报告。无新的游戏过程／可玩评级，无新 FPS 基准。内容结构与 URL 保留，525 个可索引页面、另有 2 个 404 页面。

## 原来 14 个条目的内容补强

每条新增七语言版本辨识、来源结论、明确的下一次测试要求与核对日期。保留游戏自身的版本边界，不用通用免责声明替代具体内容。

- Spider-Man 2：#1070 引用的是作者称属于 Miles Morales 的导入列表，且 PR 未合入；不复制其中未核实的 PPSA 到 Spider-Man 2。它不能证明续作运行。
- Elden Ring：#3802/#3817 实际指 Nightreign 的 PPSA25380，不能套用到本体或 Shadow of the Erdtree。
- Wukong：#3586 URI 修正已合入但没有本作复测；#4508 内存预算 PR 未合入且明确没有运行本作。
- Ragnarök：主线、Valhalla、PS4 版与 Sons of Sparta 区分。
- Part I：PS5 重制版、Left Behind、PS4 Remastered 与 Part II Remastered 区分，#2883/#3713 不能当 Part I 结果。
- FFVII Rebirth：试玩版、正式版和 Remake Intergrade 区分；FFXVI：试玩、本体、Complete Edition 与两项扩展区分。
- GT7：#981 的相关例子是 PS4/shadPS4，非 PS5 AnyPS5；比赛、联网功能、PS VR2 与 My First Gran Turismo 分开。
- Hogwarts Legacy：PS5/PS4、具体任务与原生 PC 模组分开，补充探索、战斗、室内外切换与存档核对要求。
- Helldivers 2：官方注明必须在线游玩。HTTP/网络导出不能证明认证、匹配与任务会话，未宣传离线方案。
- 四款已有新增报告的条目继续保留版本与证据说明；Palworld #4552 的修改环境世界纹理观察不能泛化为原版可玩，#4554 DCC 修复仍待合并。

## 教程及已有开发摘要

- 入门页增加跨游戏／版本辨识与阶段边界，明确来源审核与自动校验没有独立复现游戏。
- 系统要求增加 --to-intel 的范围：不能处理游戏在运行时生成的 AMD 专用指令。
- Windows 增加当前源码的 --windows-diagnostics / --registry 诊断入口，保留首个错误与同提交的配套库。
- Linux 增加 X11/Xext 与音频开发依赖、Fedora Threads 错误处理，以及独显优先选择、udmabuf 权限／大小限制的区别。
- 源码构建页增加完整模块注册表的导入审计；解释 implemented、stub、absent、module 的边界，不将没有缺失导入当作游戏测试通过。
- 七语言正文同步；命令选项与运行变量使用左到右隔离，代码块保持原命令顺序。没有宣称外部母语人工审核。
- #3412、#3156/#3706、#2883/#3713 的关闭／合并状态与说明同步；旧游戏实验不因技术修复合入而被覆写。Cyberpunk 摘要采用后续固定 main 测试。

## 验证与发布

内容校验、31 项测试、受影响 TypeScript 检查通过；双站构建和 527 个静态页面的 metadata、七语言 alternates、内链、资源、sitemap、分析配置校验通过。浏览器复查中文证据区与手机阿拉伯语证据区、源码指南，390 px 下无横向溢出，诊断参数保持原样，无控制台警告或错误。

发布仍由推送 main 触发现有两个 Zeabur Git 服务。完整部署 SHA、RUNNING 状态和公网内容核验回执保存在忽略目录 `research/raw/quality-2026-10-13/release.json`，以实际回执为准。
