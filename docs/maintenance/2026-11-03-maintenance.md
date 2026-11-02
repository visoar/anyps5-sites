# 2026-11-03 双站维护

按每周二、周五北京时间 03:40 执行。初始 main／origin/main 为 `540c6e80684e4d98b3059ead3295b634815c51ba`，工作区干净，gh 认证有效，无待合并维护 PR 或遗留授权修改。遵循当前 Coolify／私有 GHCR／Site CI/CD 发布路径；旧 Zeabur 指令已从自动化当前流程移除，周二、周五时段和通知偏好不变。不改变服务布局、DNS 或邮箱，不恢复主动搜索通知。

## 来源范围与边界

上次成功边界为 2026-10-29T19:35:00Z，从当日 18:30Z 重叠抓取；下一成功增量边界保守取 2026-11-02T19:35:00Z。源码树固定 `a4eca2a056bf3bbbec98ab42e9d28163e4ea9cb8`，19:49:55Z 完成文档采集；树无截断。复用 collect_research.py 和 review_updates.py；前者捕获 README 等 374 份资料、289 份正文变化，后者仅覆盖 312 个重点线程，不冒充全量扫描。

- 完整 issue／PR 捕获 146 页、14594 个唯一条目，末页不足 100。独立 open／closed 库存为 1979／12613 项，合计 14592，均包含在完整集合内；差异仅为两次快照之间新建的 #15168／#15169（19:42:53Z／19:46:08Z），已补抓具体正文、评论和 review。二者为 logger 与 cache 候选，不新增游戏结论。
- 增量 issue／PR 3776 项／38 页，提交 3526 项／36 页；全部 5 个 releases，包括 prerelease。发行版正文、附件列表及 v0.1.4 固定标签读取完整。
- 442 个 discussion／23 页，1210 评论、447 回复；根、评论、回复所有 hasNextPage 均耗尽。与上次正文比较 150 个线程有变化，含 44 个新线程和 282 个新／变化评论。
- 全仓 issue 评论窗口捕获 11868 条／119 页，代码评论 28 条／1 页；合成 3778 个线程的当前上下文，补抓 118 页评论，窗口父线程无遗漏。历史 #9418 再次 HTTP404，原因未知，保留旧资料及访问缺口，不当作“无变化”。
- PR review 根连接 36 页、3586 个近期 PR，越过旧时间边界即停止，根 hasNextPage 仍为 true，**不是全部历史 review 扫描**。#6628 嵌套溢出已经 REST 补抓。提交时间筛出 2424 份正文，另按正文差异发现 2501 份新／变化 review，其中 94 份提交时间早于增量边界；这些可能是旧帖编辑或本次首次捕获，不一概称为新提交。技术 review 按相关主题筛查，不把 API／组件测试升级为游戏实测。
- [官方 progress.json](https://boykopovar.github.io/AnyPS5/progress.json)：库函数 9546／36666＝26.04%，解码识别 1166／1166。分母扩大，比例下降不是游戏回归或可玩率变化。

以英文、中文、阿拉伯语、葡语、德语、法语、西班牙语搜索公告、下载／要求／排错、兼容性、视频和新增游戏线索。结果多为旧报道、本站或非官方整理站；没有找到可独立核验的新视频基准，不复制搜索摘要或把转载当独立证据。关键结论回溯上游原帖、完整评论和发行商页面。原始正文／API／媒体缓存在忽略目录，不进入发布提交。

## 发行与实际数据

[v0.1.4](https://github.com/boykopovar/AnyPS5/releases/tag/v0.1.4) 于 2026-10-30T23:09:14Z 发布，实际提交 `7fcab08f71e463b1768730a626a0f5472d336708`。Windows/Linux 转换器与库、附带输入／使用文档、网页转换器均核对；两个在线清单的版本／提交与库 SHA-256 一致。Windows 库 ZIP 为 `cbd61c521d555614dbcddc62cdabf45acfe409c520307cdb58732c8486dd0d7a`，Linux 库 ZIP 为 `04ea0a4a51cc93d5aad1c9d558473bd3eea4bf9ef7d17511aa467449b744a27e`。没有官方 Mac runtime 附件，不把分支原生 ARM／Rosetta 实验转成普通 Mac 支持。

新增 39 条目、144 条独立观察，涉及 130 个有新观察的条目。总计 388 条目、1113 报告、4 条暂无报告、86 条开发摘要；七语言共 2919 个可索引页面、2921 HTML（含两站 404）。原 969 条报告按 `(slug,id)` 逐字段不变。新增和旧报告保留版本／PPSA、平台、构建、补丁、硬件／驱动、测试日期与来源日期边界；未知仍未知。更新干净证据索引、明确的结论来源选择与 compatibility-report。

重点分析：

- [Elden Ring #13493](https://github.com/boykopovar/AnyPS5/discussions/13493) 现在有本体 PPSA04610 的 Windows 初始室内／室外行走证据，4K 约 7.5 FPS。另一 1080p 版本补丁短路线约 7→12 FPS，无截图且路线不同；不验证战斗、HP／FP、DLC 或通关。与 PPSA25380 Nightreign 分开，转换器和 runtime 各自固定提交，不把后续 main 替入旧记录。
- [KLONOA #14104](https://github.com/boykopovar/AnyPS5/discussions/14104) 的正常策略仍会崩溃；603 秒 label-flush 诊断整合才出现移动、石头 0→3 和受伤。缺存档 Continue、跳跃／音频／完成范围保持明确。
- [MK11 #15124](https://github.com/boykopovar/AnyPS5/discussions/15124) 的 1080p 战斗约 19–21 FPS 来自局部线宽／浮点导出／R32 atomic 等修改，其中有未提交或作者承认不正确的绕过；不称 stock main／v0.1.4 可玩。
- [Tetris Forever #13561](https://github.com/boykopovar/AnyPS5/discussions/13561) Windows Time Warp／部分经典游戏与 Linux 30 秒章节菜单分别记录。Linux 菜单 5.509→59.940 FPS 的本地组合不能转移给实际游戏或发行版。
- [#4449](https://github.com/boykopovar/AnyPS5/pull/4449)、[#6959](https://github.com/boykopovar/AnyPS5/pull/6959)、[#11580](https://github.com/boykopovar/AnyPS5/pull/11580) 于 11 月 2 日合入，晚于 v0.1.4；旧本地游戏观察保持原 pin。Bramble 光照恢复同时菜单 25.4→11.5 FPS，不称提速；卧室移动另有独立报告。Insomnis／Spirit of the North 后续 main 明亮画面另记，Silent Hill 2 追踪下 0.2 FPS 不当正常游玩基准，RuneScape Dragonwilds 尚无该 16 位修复复测。
- Sea of Stars 的 71 个缺失 Addressables 包、Can't Drive This 的健康读取／GC、BloodRayne 2 后续异常探针、Kao watchpoint 分别纠正之前的死锁／异常／容量猜测；未定位首因不能包装为修复。Ghost of Tsushima 早先所谓内容图片实为桌面；Yōtei 每 10 秒呈现与启动耗时不改写成 FPS，fork 跳 draw 不作为正确 main 支持。
- Life is Strange Reunion 的新 v0.1.4 播歌后崩溃与旧 v0.1.3 场景报告并存，不覆盖旧成功。Hades／Silksong 的 console 原生评论、F1 25 的 AnyTogether ARM fork 崩溃不造 Windows／Linux 新报告。媒体播放器、Genesis、SNES 工具只到菜单；sfiii 转换失败且未运行，作者 console 演示不冒充 AnyPS5 兼容性。
- #15020 的 AVC metadata 拒绝不等于函数缺失；#15018 评论引用的 release pin 与正式标签不同，采用独立发行身份；Little Nightmares II 的 PlayGo 策略只是建议，没有成功复测。

七语言同步 v0.1.4 下载与版本记录、已发行 F12／定时输入、rumble／AudioOut2 fallback，以及单独固定 main 的 dry-run、VideoOut 输出档位／显示器／限帧、PlayGo ID 列表、模块初始化、自动区域语言及宿主报告／追加日志／存档空间／性能请求策略。输出档位不强制内部渲染；dry-run 不验证写权限或游戏；host 音量／触觉与真实硬件效果分开。仅受影响页面更新日期。

## 媒体与缺口

新增 17 张经目视身份核对的 PlayStation 宣传封面，走既有下载、解码、哈希、自托管 WebP 流程。共 311 master，229 封面／82 宣传截图，159 条目保留图标；没有新增实测截图或素材外域。源图 89.32 MiB→WebP 39.16 MiB（56.2% 缩减）。Asterigos 商店 PPSA08193／报告08194、Thymesia05214／05213、MK11 Ultimate 宣传／DLC 未测的区别保留在七语言版本说明中。Little Nightmares II 的 PS4 页面和 Spirit of the North 泛页跳转不用于配图；其他无法确认的素材不借图补齐。

缺失硬件／驱动／测试日期、未公开私有分支、未测试声音／存档／长流程、未确认 console 行为、#9418 访问以及外部新视频基准仍为证据缺口。记录它们，不补造结果。

## 验证与发布闭环

执行 npm run check、39 项既有测试、共享内容 TypeScript 检查、npm run build；全量构建验证 2921 页 metadata、七语言 alternate、内链、素材、两 sitemap 入口与 CSP。无报告测试转用仍未报告的 Final Fantasy XVI，总数从 5 改 4，保留未知状态／中文搜索／平台筛选覆盖。npm audit --audit-level=low 为零漏洞，未变更依赖或压低审计阈值。

本地浏览器通过 20 个页面／主题组合，覆盖 390px RTL、新商业／homebrew 条目、下载／输入／Windows 指南、图片解码、精确 PPSA 搜索及同报告平台／阶段过滤，复位 388 条。提交前审阅 diff、历史数据不变及忽略抓取目录。后续由现有 main Site CI/CD 验证实际镜像、发布私有 SHA 标签，再部署两个原有 Coolify 应用；禁止本地未提交上传。

最终 main SHA、CI run、两个对应部署／镜像／健康状态、公开 revision、线上页面／链接／图片／sitemap／www 验收和未发布授权修改计数保存在忽略目录 `research/raw/daily-2026-11-03/release.json`。完成前以 `release-pending.json` 保留待办；只有两个实际 revision 匹配且验收通过才通知上线完成，不凭 push 或历史部署宣称成功。

发布闭环补充：逐项环境复核发现部分新增观察借用了未在本线程确认的 CPU／驱动，或未在对应原帖／所选回复中重申的内核／编译器版本。已将无证据的字段置为未知，OS 只保留该来源能确认的部分，并重新执行检查、构建、CI 和两站发布验收；阶段、测量构建、版本、补丁、FPS 与旧 969 报告不变。具体字段差异保留于忽略目录 environment-corrections.json，最终 release.json 使用修正后的 main SHA。
