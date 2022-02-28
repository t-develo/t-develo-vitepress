# Vitepress

VuepressをVue3、Vite対応させたもの。

現在開発中であるため、ちょくちょく内容が変わると思う。

## Markdown Extensions

公式サイトを見るのが早い

[Vitepress/Markdown Extensions](https://vitepress.vuejs.org/guide/markdown.html)

## Sidebar

.vitepress/sidebar.jsを作成して、config.jsで下記のように設定する

sidebar.js
```js
export function getGuideSidebar() {
    return [
        {
            text: 'VitePress',
            link: '/Vitepress/',
        },
        {
            text: 'JavaScript',
            children: [
                {
                    text: 'Eslint',
                    link: '/JavaScript/Eslint/',
                },
            ],
        },
    ];
}
```

```js
import { getGuideSidebar } from './sidebar';

module.exports = {
    ...
    themeConfig: {
        sidebar: {
            '/': getGuideSidebar(),
        },
    },
};
```

まぁ別に設定ファイルを外だししないでconfig.jsだけでも実現はできる。

関心事を分離する場合にはこんな感じにやると良い。
