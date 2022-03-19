import { getGuideSidebar } from './sidebar';
import { getGuideNavbar } from './navbar.js';

module.exports = {
    lang: 'ja',
    title: 'VitePress Pages',
    base: '/t-develo-vitepress/',
    themeConfig: {
        sidebar: {
            '/': getGuideSidebar(),
        },
        nav: getGuideNavbar(),
    },
};
