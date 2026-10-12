# 双站七语言文案与 SEO 校订

日期：2026-10-12。范围为 AnyPS5.cc 与 AnyPS5.games 的七种语言：英文、简体中文、阿拉伯语、葡萄牙语（葡萄牙）、德语、法语和西班牙语。覆盖共用导航和提示、18 篇教程/政策文章及补充段落、14 条开发进展、47 个游戏/版本页、51 份来源报告、页面标题、描述及分享信息。现有运行阶段、平台、硬件、补丁条件、FPS、PPSA ID 和原始测试日期保持其证据范围。

## 游戏名与术语

游戏标题优先使用发行商或商店在对应语言中的名称。已被当地玩家广泛采用的名称可以保留；没有可靠译名时保留国际标题，不逐词编造译名。品牌保留英文并不意味着正文未完成本地化。地区版与新版标题不能覆盖当前报告的游戏身份，例如 Everybody’s Golf 2 的欧洲 PPSA06700 不替代当前 Hot Shots Golf 2 的 PPSA06699；Ghost of Yōtei 的 Complete Edition 页面也不自动升级已有报告。

| 条目 | 调整 | 核对来源 |
| --- | --- | --- |
| SILT | 中文使用 `SILT - 黯海`，保留既有搜索词 | [Steam 简中页面](https://store.steampowered.com/app/1325890/?l=schinese) |
| ASTRO’s PLAYROOM | 中文展示国际标题，原先的长名称保留为搜索别名；葡语使用 `Sala de Jogos do ASTRO` | [PlayStation 简中](https://www.playstation.com/zh-hans-hk/games/astros-playroom/)、[葡萄牙](https://www.playstation.com/pt-pt/games/astros-playroom/) |
| Ratchet & Clank: Rift Apart | 葡语使用 `Uma Dimensão à Parte`；西语使用 `Una dimensión aparte` | [PlayStation 葡萄牙](https://www.playstation.com/pt-pt/games/ratchet-and-clank-rift-apart/)、[西班牙](https://www.playstation.com/es-es/games/ratchet-and-clank-rift-apart/) |
| Hogwarts Legacy | 法语补充 `L’Héritage de Poudlard` | [发行商法语发布稿](https://warnerbrosgames.prezly.com/warner-bros-games-lance-hogwarts-legacy--lheritage-de-poudlard) |
| STAR WARS: Galactic Racer | 中文使用“星球大战：银河赛车手” | [PlayStation 简中](https://www.playstation.com/zh-hans-hk/games/star-wars-galactic-racer/) |
| DOOM 自制移植版 | 七语分别翻译“PS5 自制移植版”的说明，不与零售版本混淆 | 已收录的上游集成报告 |

名称核对读取了 309 个官方页面，302 个成功；Hot Shots Golf 2 的七个派生地区路径不存在，改用实际商店产品记录辨识。采集输出仅作人工核对依据，不自动覆盖目录。各语言的显示名与搜索索引统一从 `game-editorial.ts` 取得，国际标题和既有别名仍可搜索。

## 文案修正

- 测试标签使用阶段名称，中文为“游戏过程 / 菜单阶段 / 启动阶段 / 运行受阻”；构建说明为“含本地改动”。“暂无测试报告”不等于无法运行，游戏过程不等于稳定通关。
- 筛选默认值注明平台、阶段、来源；搜索分享按钮明确表示复制链接。导航菜单有独立无障碍名称，不复用游戏菜单阶段的翻译。
- 整理介绍和开发摘要的省略句、直译和技术术语，例如法语亮度校准、GPU 绘制操作，德语不区分大小写，葡语存档与录像，以及阿拉伯语输入与字体说明。
- 教程保留原始参数、路径、错误码和命令，补齐动态模块、键盘映射、GPU 选择、字体格式和 RTL 等条件。报告模板有七语言版本；阿拉伯语模板使用 RTL，命令示例保持 LTR。
- 葡、德、法开发统计原有 `2,839 / 3,318` 与数据快照不一致，统一为 `2,903 / 3,383`；没有将实现比例解释为游戏可玩率。
- 页面描述说明各页面解决的问题；首页突出 Windows/Linux 设置，系统教程突出具体步骤与故障，游戏页区分已有报告与暂无报告。不添加关键词列表、排名承诺或未经证实的可玩结论。

## SEO 与验证

按 [Google 标题建议](https://developers.google.com/search/docs/appearance/title-link)、[摘要建议](https://developers.google.com/search/docs/appearance/snippet)与[多语言页面说明](https://developers.google.com/search/docs/specialty/international/localized-versions)检查。字数是编辑参考，不作为固定排名阈值；保留完整标题的游戏身份与版本信息。

- `npm run build`：两站 520 个静态页面通过现有发布验证，含元数据、资源/链接、sitemap、语言替代页、AI 使用政策与 Umami 配置。
- 额外逐页核对一个 H1、站内唯一标题/描述、self-canonical、七语言互链、分享信息一致性及未展开模板变量；404 单独按 noindex 页面处理。
- 游戏库所有语言的显示名、静态搜索索引、阶段标签与动态筛选数据一致；报告模板输出与对应语言原文相同。
- 15 项测试通过，包括本地化标题、国际标题与旧名称搜索的回归检查。
- 浏览器检查七语言双站首页、Windows 教程、输入教程和报告模板，共 35 个 360px 窄屏页面，无横向溢出；另检查中文、葡语、西语、法语的本地标题搜索及阿拉伯语 RTL。

本轮为语言与语义校订，不标注为外部母语编辑人工签核。静态 SEO 和浏览器验证不能代替实际排名、搜索引擎索引或完整性能数据。采集、构建、页面检查及部署回执保存在忽略目录 `work/native-copy-review/`；Git 提交及两个服务的对应 SHA 用于核对发布。
