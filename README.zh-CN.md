# Baklib CMS — 播客主题（简体中文说明）

[English](README.md) | 简体中文

这是播客与音频合集（标识 `podcasts`，范围 cms），节目写在站点页面上：首页下面是栏目，栏目里是单集。适合一档节目、分季归档，或把音频收成合集。不适合产品目录，也不适合产品文档。

| 文件 | 读它是为了 |
| --- | --- |
| [docs/README.md](docs/README.md) | 分册目录 |
| [docs/overview.md](docs/overview.md) | 是什么、什么场合用 |
| [docs/structure.md](docs/structure.md) | 首页、栏目和单集 |
| [docs/schema.md](docs/schema.md) | 字段 id，以及能不能改 |
| [docs/usage.md](docs/usage.md) | 建站后怎么配 |
| [docs/activation.yml](docs/activation.yml) | 快速开始的编排配方 |

## 功能概览

- **首页**：卡片网格（`templates/index.liquid`）或列表（`templates/index.list.liquid`），含标签导航；卡片首页支持按发布时间排序。
- **文章页**（`templates/page.liquid`）：标题、摘要、封面、富文本正文、标签、版本链接，可选访问量与用户反馈。
- **搜索**（`templates/search.liquid`）、**标签列表**（`templates/tag.liquid`）。
- 主题选项见 `config/settings_schema.json`；前台文案见 `locales/*.json`；后台编辑器字段标签见 `locales/*.schema.json`。

---

## 环境要求

- 构建资源建议使用 **Node.js 18+**。

可选：

- 若使用 Guard 做 LiveReload，需要 **Ruby + Bundler**。

---

## 本地开发

安装依赖并启动 CSS/JS 监听（Tailwind v4 + esbuild）：

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

构建产物：

- `src/stylesheets/application.css` → `assets/stylesheets/application.css`
- `src/javascripts/application.js` → `assets/javascripts/application.js`

`layout/theme.liquid` 通过 `asset_url` 引用上述文件（另含 Baklib 共享静态资源）。

### LiveReload（可选）

```bash
bundle install
bundle exec guard
```

可配合浏览器 LiveReload 插件实现保存后自动刷新。

---

## 目录结构

| 路径 | 说明 |
|------|------|
| `templates/` | 页面模板 |
| `snippets/` | 可复用片段 |
| `layout/` | 全站布局 `theme.liquid` |
| `config/settings_schema.json` | 主题设置定义 |
| `locales/` | 前台文案（`*.json`）与 schema 翻译（`*.schema.json`） |
| `seeds/` | 示例站点与页面（**默认英文**） |
| `assets/` | 构建后的 CSS/JS |
| `src/` | 样式与 JS 源码 |

---

## 种子数据与首次内容

- `seeds/001_site.yml`：站点默认语言（现为 `en`）、页头/页脚自定义 HTML。
- `seeds/002_pages.yml`：首页文案与三篇演示文章。

**站点级标签**（`site.tags`）不能写在 `settings_schema.json` 的 site 设置里。请通过 Baklib API 或后台创建标签，再在文章模板 schema 的 `tag_picker` 中为页面选择标签。参考 [API 文档](https://dev.baklib.cn/api) 与 [对象说明](https://dev.baklib.cn/guide/objects)。

---

## 其它文档

- 英文总览：[README.md](./README.md)
- 主题帮助：[help.baklib.cn/themes](https://help.baklib.cn/themes)
