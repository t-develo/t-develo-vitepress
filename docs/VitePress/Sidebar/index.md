# Sidebar

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
