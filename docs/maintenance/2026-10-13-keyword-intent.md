# PC 与模拟器搜索意图优化 — 2026-10-13

## 需求依据

Google Trends 按全球、所有类别、网页搜索、搜索字词比较 `ps5 pc`、`ps5 on pc`、`ps5 emulator`、`anyps5 emulator`、`AnyPS5`。查看过去 30 天与界面“过去 90 天”（实际 URL 为 `today 3-m`）两个窗口；排除 10 月 13 日的未完整日。保存的 30 个完整日及较长窗口摘要见 [关键词依据](../../research/keyword-demand-2026-10-13.json)。

在 9 月 13 日至 10 月 12 日的同一对比尺度内，`ps5 pc` 和 `ps5 on pc` 持续有搜索热度。10 月 6—12 日，`ps5 emulator` 的平均指数为 12.86；`anyps5 emulator` 为 1.29，并出现在 `ps5 emulator` 的上升相关查询中。`anyps5 github`、`ps5 emulator pc`、`github ps5 emulator` 也出现在相关查询里。泛词匹配较宽，不能据此认为所有搜索都在找 AnyPS5；过滤掉购物、主机与 PC 配置对比及其他项目等不符合本站用途的线索。

指数不是月搜索量或本站访问量；不同词的需求可能重叠，不能相加。上升、飙升及低指数也不能证明绝对流量规模。独立窗口分别归一化，不直接相除推算增长。较长窗口完整逐日数据未保存，仅保留浏览器表格计算的摘要和来源。

GSC 查询范围为 9 月 15 日至 10 月 12 日，`dataState=all`，两站返回结果均未标记未完整日期。教程站 `anyps5 download` 有 87 次曝光、10 次点击，`how to install anyps5` 有 29 次曝光、0 次点击，`anyps5 setup` 有 13 次曝光、0 次点击；两站返回查询中未出现上述 PC／emulator 泛词。站点上线时间很短，查询会省略匿名数据，缺失行不等于没有需求或曝光。Umami 同期 referrer 维度显示两站均有 Google 来源；该指标不能归因到具体关键词，也不与 GSC 点击等同。

## 页面分工

| 搜索意图 | 页面 | 本次处理 |
| --- | --- | --- |
| PS5 PC、PS5 on PC | cc 首页 | 标题与简介明确 PC 运行、Windows/Linux 设置及实验兼容性，链接原理、安装和游戏报告 |
| PS5 emulator、PS5 emulator PC | cc `/how-it-works/` | 标题与简介承接常用叫法；补充原生 PC 版、Remote Play、AnyPS5 本地转换三种路径，保留转换流程与技术边界 |
| AnyPS5 emulator、是否需要主机／游戏文件 | cc `/faq/` | 简介、模拟器问题标题直接回答 PC 与 emulator 意图，正文保留上游“可执行文件移植工具”的定义 |
| AnyPS5 install、setup | cc `/start/` | 保留安装用途，在标题明确 PC 与 Windows/Linux，不替换为泛词文章 |
| AnyPS5 download、GitHub | cc `/downloads/`、源码入口 | 保留已有标题、配套文件和上游 GitHub 入口，不改变有点击的页面用途 |
| PS5 games on PC、具体游戏兼容性 | games 首页、已有详情 | 首页标题和简介明确 PC、平台、FPS 与未知结果；具体游戏仍由原有报告承接 |

七语言采用当地自然表达，英语搜索字词只用于相应英文语境。不新增重复关键词页、不堆砌关键词、不把 AnyPS5 宣传成完整且普遍兼容的 PS5 模拟器；现有路由、锚点与页面分工保留。Remote Play 和 PC 发行版说明链接 Sony 官方资料，与上游技术来源一起列在原理页。

## 验证

内容校验、现有 33 项测试、受影响内容模块 TypeScript 检查、双站构建和 576 个静态页面检查通过。检查包含 canonical、七语言 alternates、内链、资源和 sitemap。浏览器检查英文桌面首页与原理页，以及 390 px 英文、中文、阿拉伯语首页、中文／阿拉伯语原理页、英文 FAQ／安装页和中文游戏站；没有横向溢出，浏览器无警告／错误。新增官方来源的 URL 以斜杠结尾时，来源标签改用实际 hostname，避免误标为 GitHub。

已有 4401 开发进程返回 `RelinkerFlow.astro` 的模块加载错误；未改动或停止该进程，使用本次成功构建的静态输出验证。这些修改纳入后续 [2026-10-15 搜索增长发布](2026-10-15-seo-growth.md)统一交付；构建与浏览器检查不代表关键词已获得排名或新增流量。
