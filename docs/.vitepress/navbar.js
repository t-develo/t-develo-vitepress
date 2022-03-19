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
