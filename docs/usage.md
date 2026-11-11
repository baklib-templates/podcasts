# 怎么用

1. 用这个模板建 cms 站点。节目写在站点页面上，不要再建知识库。
2. 还没有自己的内容时，可以用 `seeds/` 里的示例站看结构。示例会跳过编排。
3. 自己搭栏目时：卡片首页用 `index`，下面建 `channel`，栏目里建 `page`。macOS 播客外观用 `index.v2`，下面建 `channel.v2`，栏目里建 `page.v2`。
4. 从网址或文件导入时，正文写成 `page`，挂到确认后的栏目下。不要写成 `channel`、`channel.v2` 或 `page.v2`。
5. 单集要能听，填写 `audio_asset` 或 `audio_url`。Show notes 写在 `content`。
6. 提问入口是 `-/search`。

编排方案见 [activation.yml](activation.yml)：按来源路径排节目、每个目录一套节目，或单集直接挂在首页。
