import { defineConfig } from 'vitepress';
import { getNavAndSideBarInfo } from '../src/refreshConfig.data';

let configInfo = getNavAndSideBarInfo();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "joey998的博客",
  description: "github，个人博客",
  srcDir: './src',
  base: '/blog/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: configInfo.navList,

    aside: true,

    sidebar: configInfo.sidebarObj,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
