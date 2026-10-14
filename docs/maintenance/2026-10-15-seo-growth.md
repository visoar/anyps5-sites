# 搜索增长与发布闭环 — 2026-10-15

## 数据依据

分析范围为上线以来至 10 月 13 日。Umami 使用 UTC，GSC 使用太平洋时间；GSC 10 月 12–13 日仍为初步数据。首个上线日不足全天，没有可靠的前期环比。两站访客不跨域去重，GSC 点击与 Umami 访问不相加。

| 来源与指标 | anyps5.cc | anyps5.games |
| --- | ---: | ---: |
| GSC 曝光 | 1,034 | 1,222 |
| GSC 点击 | 68 | 96 |
| Umami 访问 | 235 | 313 |
| Umami 浏览量 | 431 | 719 |
| Umami 自然搜索访问 | 107 | 125 |

德语下载页 108 次曝光、14 次点击；德语安装页 56 次曝光、7 次点击。英文安装页 41 次曝光、0 次点击，平均位置 7.6；英文下载页 95 次曝光、4 次点击，平均位置 10.6。游戏站 GT7 页 70 次曝光、13 次点击，已报告集合页 69 次曝光、15 次点击，西语首页 68 次曝光、16 次点击。样本较小，这些是优化候选，不是效果保证。

Bing 两站已验证，但性能和抓取报表没有返回数据；四个 URL 抽查没有已收录或成功抓取记录。Umami 同期各有 5 次 Bing 来源访问，因此不据此断言全站未收录。Google 六个重要页面抽查已收录且 canonical 一致。线上 robots、sitemap 和 HTTP→HTTPS 正常。后续 GetFeeds 确认 Bing 两站没有登记的站点地图，已补交各自的 `/sitemap.xml`；接口均返回 HTTP 200，重新读取均为 Pending，不能视作已抓取或收录。

## P0–P2 实施

- P0：先同步远端 `7c6ec26` 的夜间维护，再恢复既有未发布关键词修改；保留两者的内容和来源边界。
- P1：安装页增加首屏配套下载检查及 Windows/Linux 具体指南入口；七语言下载标题和简介明确上游 Releases、配套 PRX 库和文件选择。
- P1：游戏搜索标题保留本地化名称、PPSA 与 AnyPS5 兼容性用途；简介按当前选定 Windows/Linux 来源分别列出阶段和补丁边界，不用历史最高阶段概括当前结果。五个案例详情增加证据解读，保留现有历史报告。
- P1：增加发布后 IndexNow 通知，详见 [部署说明](../deployment.md)。GitHub Actions 使用 Ubuntu 系统 runner；确认公开构建和页面指纹一致后才提交。首次通知全部 canonical 页面，后续仅通知新增、变更和删除的 URL。搜索引擎接收不等于收录或排名提升。
- P2：新增七语言 `/compatibility-report/`，对 GT7、丝之歌、梦境莎拉、宇宙机器人和 DOOM 自制移植版做来源案例汇总；提供 `/compatibility-report.json`。页面、数据和详情复用同一份显式选定报告，保留测试／来源／复核日期、构建、版本、硬件和补丁，不生成“全库可玩率”或虚构实测。
- P2：首页、已报告集合、安装／下载／方法说明链接这份资料，方便读者核对与编辑引用。

## 引用与分发

优先提供可核查的新材料，而不是付费买链接。上游 README 已引用社区 [blocker map](https://github.com/AlxcBTW/anyps5-roadmap)；我们的多语言设置指南与人工复核报告适合补充它。媒体候选为已报道 AnyPS5 的 [PC Games Hardware](https://www.pcgameshardware.de/Playstation-5-Konsolen-265878/News/AnyPS5-PC-Portierung-erreicht-Meilenstein-1556302/)、[VideoCardz](https://videocardz.com/newz/anyps5-reaches-100-gpu-shader-instruction-coverage-for-ps5-to-pc-conversion) 和 [Tom’s Hardware](https://www.tomshardware.com/video-games/playstation/anyps5-reaches-critical-gpu-milestone-with-100-percent-shader-instruction-coverage-ps5-games-running-natively-on-pc-still-far-off)。外部编辑决定是否采用及链接属性；社区帖子主要按有效导流评估。

可引用材料为公开报告、JSON 数据以及每项原始证据。对外必须明确是来源汇总，本站未独立复现游戏；不得把官方游戏宣传图当测试截图，或把五个案例推广为全部游戏兼容。此发布交付的是资料与分发入口，不冒称已经取得媒体外链。

## 持续维护与验收

原有 03:40 定时任务已要求 commit、push 和两站部署；本次补强了每轮盘点已授权但尚未发布的修改、隔离分支合入 main、PR 检查后合并，以及上轮未完成发布优先继续。不得以本地检查、分支 push 或历史 RUNNING 代替本次 main SHA 的双站上线。

内容校验、现有测试、新增报告范围与 IndexNow 边界测试、双站构建和全部静态页面校验是发布前检查。线上验收、对应部署 SHA 和 IndexNow 返回码保存在忽略目录 `research/raw/growth-2026-10-15/`。检查安装／下载、七语言报告、游戏摘要、JSON、sitemap、验证文件、健康检查与 www 跳转。索引和排名仍需后续 GSC/Bing 数据验证。
