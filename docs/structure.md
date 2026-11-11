# 结构

范围是 cms。快速开始放入网址或文件时，只建这个模板的站点，确认栏目后再写成站点页面，不建知识库。

`seeds/` 里有一套示例站。选「先用示例体验」时用这套种子，种子自己已有栏目，会跳过编排。

## 三层

1. 首页。`templates/index.liquid` 的子页面是栏目 `channel`。`templates/index.v2.liquid` 的子页面是栏目 `channel.v2`。
2. 栏目是壳。`channel` 里面是单集 `page`。`channel.v2` 里面是单集 `page.v2`。
3. 单集才是正文。`page` 和 `page.v2` 都有可写的 `title`、`content`，以及音频字段 `audio_url`、`audio_asset`。

导入正文用 `page`，不用 `page.v2`，也不要把 `channel` 或 `channel.v2` 写成导入正文。`channel.v2` 只在人工搭 macOS 播客外观时用。

`page` 的子页面模板也是 `page`，`page.v2` 的子页面模板是 `page.v2`。导入仍然只写 `page`。

## 提问

`templates/search.liquid`、`templates/tag.liquid` 和 `feedback*` 没有字段 schema，不是内容模板。提问入口是 `-/search`。
