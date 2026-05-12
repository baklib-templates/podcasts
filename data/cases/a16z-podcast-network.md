# a16z Podcast Network — 多节目矩阵导航案例

- 页面入口：`https://a16z.com/podcasts/`

## 一句话定位
以“播客网络（Podcast Network）”形式运营的 **多节目矩阵**：用统一的品牌背书与清晰的节目分组，承接不同主题人群（AI/crypto/fintech/健康等）并把用户分发到各节目详情页与单集。

## 信息架构（页面可见模块）
- **总标题与价值主张**：a16z Podcast Network + “Tune into conversations…”（明确内容类型与听众收益）
- **节目列表（Show Directory）**：以卡片/列表形式列出多档节目，并给出每档节目的简短说明
  - The a16z Show
  - Raising Health
  - web3 with a16z crypto
  - In the Vault
  - AI + a16z
  - My First 16
  - Zone of Genius
  - a16z Live
  - 16 Minutes
  - The Ben & Marc Show
  - Startup Hotline

## 关键设计点（对播客站可借鉴）
- **先“选节目”，再“选单集”**：入口页优先帮助用户完成主题匹配（我该关注哪档节目）。
- **每档节目一句话解释**：降低决策成本，适合矩阵内容与新用户首次进入。
- **矩阵规模感**：明确“a dozen shows”，增强品牌与专业度的感知。
- **主题分层**：同一大品牌下用节目分工覆盖不同赛道，既能扩展覆盖面又不稀释单档定位。

## 可落到 Baklib 播客主题的实现建议（思路）
- **增加「节目」一级实体/聚合页**：
  - 若当前站点以“页面=单集/文章”为主，可用 `tag` 代表节目（show），为每个 show 建一个聚合页（模板或静态页）。
  - 首页先展示“节目目录”（show cards），点击进入 show 页再展示单集列表。
- **show 卡片字段建议**：标题、简介、覆盖图、更新频率/最近更新、主要标签。
- **多节目导航**：header 增加“全部节目”入口；show 页支持订阅/分享。

## 参考链接
- a16z Podcast Network：`https://a16z.com/podcasts/`
