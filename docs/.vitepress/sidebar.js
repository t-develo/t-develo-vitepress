export function getGuideSidebar() {
    return [
        {
            text: 'VitePress',
            link: '/Vitepress/',
        },
        {
            text: 'JavaScript',
            link: '/JavaScript/',
            children: [
                {
                    text: '言語',
                    children: [
                        {
                            text: 'JavaScript',
                            link: '/JavaScript/JavaScript/',
                        },
                        {
                            text: 'TypeScript',
                            link: '/JavaScript/TypeScript/',
                        },
                    ]
                },
                {
                    text: 'フレームワーク',
                    children: [
                        {
                            text: 'Vue.js',
                            link: '/JavaScript/Vue.js/',
                        },
                        {
                            text: 'Express',
                            link: '/JavaScript/Express/',
                        },
                        {
                            text: 'Jest',
                            link: '/JavaScript/Jest/',
                        },
                    ]
                },
                {
                    text: 'ランタイム',
                    children: [

                        {
                            text: 'Node.js',
                            link: '/JavaScript/Node.js/',
                        },
                    ]
                },
                {
                    text: '設定',
                    children: [
                        {
                            text: 'Eslint',
                            link: '/JavaScript/Eslint/',
                        },
                        {
                            text: 'Prettier',
                            link: '/JavaScript/Prettier/',
                        },
                    ]
                },
            ],
        },
    ];
}
