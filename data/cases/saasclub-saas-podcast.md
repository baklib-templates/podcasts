# The SaaS Podcast（SaaS Club）— 长寿访谈播客 + 主题浏览案例

- 页面入口：`https://saasclub.io/saas-podcast/`

## 一句话定位
面向 SaaS 创业者与增长从业者的 **高频创始人访谈播客**：用“每周一集 + 主题化浏览 + 多平台分发 + 邮件复盘”把内容沉淀成可检索的长期资产。

## 页面信息架构（页面可见模块）
- **标题与定位**：The SaaS Podcast + “Real conversations … building SaaS in the AI era.”
- **规模与可信度**：482+ episodes since 2014（长寿与持续更新背书）。
- **多平台分发入口（Listen on）**：Apple Podcasts / Spotify / YouTube / Amazon Music / Pocket Casts 等。
- **邮件回流（Prefer email?）**：引导订阅 weekly recap（newsletter）。
- **按主题浏览（Browse by topic）**：All + 多个主题分类入口，例如：
  - Bootstrapping、First Customers、AI-Powered SaaS、Product-Market Fit
  - Enterprise Sales、Product-Led Growth、Pricing & Monetization、Churn & Retention
  - Content & Inbound Marketing、Exits & Acquisitions、Fundraising 等
- **主持人区块**：Host 介绍（Omer Khan）+ “为什么做这个播客/我提供什么价值”的叙事。
- **单集流（Episode cards）**：封面图 + 嘉宾/公司 + 标题 + 摘要，点击进入单集详情。

## 关键设计点（对播客站可借鉴）
- **主题化导航是“内容库存”的入口**：把 400+ 集变成可检索的“问题库”，降低新用户进入门槛。
- **分发入口集中展示**：减少用户寻找平台的摩擦（尤其适合海外用户）。
- **邮件回流**：把一次性听众变成可触达的长期用户（recap/精华/更新提醒）。
- **主持人叙事**：用“主持人为什么值得听”建立信任与差异化。
- **卡片摘要足够长**：让用户在不点进单集前就能判断是否值得听。

## 可落到 Baklib 播客主题的实现建议（思路）
- **标签即主题**：用 `tag` 作为 Topic，首页加入 “Browse by topic” 区块（展示热门/精选标签）。
- **主题页承接**：使用现有 `templates/tag.liquid` 做 Topic 聚合页，强化“这个主题下有哪些单集”。
- **多平台订阅入口**：在站点设置（`config/settings_schema.json`）中加 Apple/Spotify/YouTube/RSS 链接配置，在 header/首页/单集页统一渲染。
- **邮件订阅 CTA**：在首页与单集页底部放置 newsletter 引导（即便先用外链表单也能起步）。

## 参考链接
- The SaaS Podcast 页面：`https://saasclub.io/saas-podcast/`
- Newsletter（weekly recap）：`https://saasclub.io/newsletter/`
