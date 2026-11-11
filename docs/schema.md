# 字段

以设置项的 `id` 为准。界面文案来自语言包。下面这些字段都可写。

## 全站

| id | 类型 | 作用 |
| --- | --- | --- |
| `poster_image_url` | 图片 | 封面图 |
| `podcast_title` | 文本 | 播客标题 |
| `podcast_tagline` | 多行文本 | 副标题 |
| `podcast_about` | 多行文本 | 关于 |
| `show_episode_cover` | 开关 | 是否展示单集封面 |
| `header_html` | HTML | 侧栏收听链接 |
| `head_html` | HTML | 自定义 head |
| `weixin_app_id` / `weixin_app_secret` / `weixin_enabled` / `weixin_debug` | 文本或开关 | 微信分享 |

## 首页

`index` 和 `index.v2` 没有页面字段。外观差在子页面：卡片首页挂 `channel`，macOS 播客首页挂 `channel.v2`。

## 栏目

| id | 类型 | 用在 | 作用 |
| --- | --- | --- | --- |
| `description` | 多行文本 | `channel`、`channel.v2` | 栏目简介 |
| `header_color` | 颜色 | 仅 `channel.v2` | 头图背景色 |
| `cover_image_url` | 图片 | 仅 `channel.v2` | 栏目封面 |

## 单集

导入正文用 `page`。`page.v2` 字段相同，只在 `channel.v2` 里人工使用。

| id | 类型 | 作用 |
| --- | --- | --- |
| `title` | 文本 | 标题 |
| `episode_number` | 文本 | 期数 |
| `description` | 多行文本 | 摘要 |
| `audio_url` | 文本 | 音频地址 |
| `audio_asset` | 资源 | 音频资源 |
| `tags` | 标签 | 标签 |
| `thumb_image_url` | 图片 | 封面图 |
| `content` | 富文本 | Show notes |
