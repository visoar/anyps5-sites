# FAQ 与原理页完善

日期：2026-10-12。范围为 AnyPS5.cc 的七语言 FAQ、原理页和相关入口。新增七个原理页路由，两站共 527 个 HTML 页面（525 个可索引页面，另有两个 404）。

## 内容与来源

FAQ 现有八条：项目是否属于模拟器、是否需要连接 PS5、自备 dump 与不提供 ROM、官方与社区证据、Apple silicon Mac、存档位置、通关范围及结果差异。答案均为 2–4 句，保留既有 `complete`、`files`、`version` 锚点，补充同语言教程链接。首页只展示四条下载前问题，并提供完整 FAQ 入口。

上游复核快照为 `boykopovar/AnyPS5` 提交 `0ef9dc9282e45b2448db3dc64eec436348d0d126`，原始文档和代码采集保存在忽略目录 `work/faq-how-it-works/`。

- README、USAGE 和 ARCHITECTURE：转换原生格式、随游戏模块、替代系统库、普通进程及 Vulkan / SPIR-V 图形路径。
- COMPATIBILITY：表中已包含 Dreaming Sarah 和 DOOM Shareware homebrew，不能沿用“只有 Dreaming Sarah”的提问前提。FAQ 说明的是当前上游表的范围，没有将目录内的历史社区报告重新归类为官方测试。
- USAGE 已描述 `--macos --to-rosetta`，但 BUILD 的部分说明仍描述此前的 Windows/Linux 范围。明确区分工具构建、转换输出、目标系统库和游戏验证，不把 main 转换选项写成现成 Mac 发行包。
- SaveDataCore.hpp 的 `SD_ROOT_GUEST` 为 `/_sd`；libc/src/General.cpp 的路径解析根来自运行工作目录。FAQ 将 `_sd` 作为该实现的一般位置，并保留游戏/构建差异；DOOM 的 `/download0` 单独举例。不承诺任意游戏存档可用。

`/how-it-works/` 用一句话先解释 relinker，再展示自绘 Windows/Linux 流程，补充链接处理、图形路径及兼容边界。首页、入门、FAQ 和原理页相互提供入口；cc 的 llms.txt 也列出两页。

## 多语言与流程图

英文、简中、阿拉伯语、葡语（葡萄牙）、德语、法语、西语均提供独立标题、描述、正文、链接文案和图中文字。内容模型支持本地化链接标签，正文中的新增路径及命令使用 `bdi dir="ltr"` 保持阿拉伯语阅读顺序。

流程图使用 HTML/CSS 与现有图标，文字可选择、可换行，不依赖图片生成或外部脚本。根据图的容器宽度切换三列/竖排；依赖卡片也会折叠。阿拉伯语横排由右向左，竖排保持向下；深浅主题复用站点配色。顺序列表、阶段标题及图注保留流程语义。

## 验证与发布

- `npm run check`：七语言、19 篇文章、47 个游戏、56 份报告及新链接标签/流程图文字完整。
- `npm test`：30 项已有测试通过。
- `npm run build`：两站共 527 个页面通过元数据、七语言互链、站内资源/链接、sitemap、AI 政策及 Umami/CSP 检查；没有构建警告。
- 浏览器：两页 × 七语言 × 320/390/768/1440px × 深浅主题，共 112 组检查；另核对七语言首页 FAQ 展开、两页入口和入门页链接。检查页面/文本溢出、RTL 顺序、横排/竖排及箭头方向，复核英文桌面、阿拉伯语手机两主题、德语平板和法语 320px 截图。
- 本地浏览器检查仅拦截远端统计脚本，页面静态资源和站内交互照常执行；统计配置由现有发布校验覆盖。

沿用 `origin main` 自动触发既有两个 Zeabur Git 服务。发布回执与线上检查保存在 `work/faq-how-it-works/release.json`，以该提交在两个服务均为 RUNNING、14 个线上本地化页面与其构建产物一致为验收条件。
