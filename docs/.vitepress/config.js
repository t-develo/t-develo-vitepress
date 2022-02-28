import { getGuideSidebar } from './sidebar';

module.exports = {
    lang: 'ja',
    title: 'VitePress Pages',
    base: '/t-develo-vitepress/',
    themeConfig: {
        sidebar: {
            '/': getGuideSidebar()
        },
    },
};
