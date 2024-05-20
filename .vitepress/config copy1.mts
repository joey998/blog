import { defineConfig } from 'vitepress';


let nav = [
  { text: '首页', link: '/' },
  { text: '前端', link: '/frontend' },
  { text: '后端', link: '/backend' }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "joey998的博客",
  description: "github，个人博客",
  srcDir: './src',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    aside: true,

    sidebar: {
      "/frontend/": [
        {
          text: 'javascript',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        {
          text: 'vue'
        },
        {
          text: 'react',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
