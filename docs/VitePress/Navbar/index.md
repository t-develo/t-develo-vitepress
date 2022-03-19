# Navbar

ページ上部のナビを設定する方法

基本コンセプトはサイドバーと同じ
一部プロパティ名が違うだけ

navbar.js

```javascript
export function getGuideNavbar() {
    return [
        {
            text: 'Pages',
            link: 'https://t-develo.github.io/t-develo-vitepress/',
        },
        {
            text: 'Repos',
            link: 'https://github.com/t-develo/t-develo-vitepress',
        },
        {
            text: '公式',
            items: [
                {
                    text: 'サイト',
                    link: 'https://vitepress.vuejs.org/guide/getting-started.html'
                },
                {
                    text: 'Git',
                    link: 'https://github.com/vuejs/vitepress'
                }
            ],
        },
    ];
}
```

config.js

```javascript
import { getGuideNavbar } from './navbar.js';

module.exports = {
    lang: 'ja',
    title: 'VitePress Pages',
    base: '/t-develo-vitepress/',
    themeConfig: {
        nav: getGuideNavbar(),
    },
};
```
