import { defineConfig } from 'vitepress';
import { getNavAndSideBarInfo } from '../src/refreshConfig.data';

let configInfo = getNavAndSideBarInfo();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "joey998的博客",
  description: "github，个人博客",
  srcDir: './src',
  base: '/blog/',
  ignoreDeadLinks: [
    /https:\/\/zh.wikipedia.org\/wiki/,
    // ignore exact url "/playground"
    // '/playground',
    // ignore all localhost links
    // /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    // /\/repl\//,
    // // custom function, ignore all links include "ignore"
    // (url) => {
    //   return url.toLowerCase().includes('ignore')
    // }
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: configInfo.navList,

    aside: true,

    sidebar: configInfo.sidebarObj,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
