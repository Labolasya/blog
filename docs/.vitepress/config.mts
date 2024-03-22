import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Labolasya's blog",
  description: "nice to meet you",
  base: "/blog/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',

    nav: [
      { text: 'vitepress', link: '/vitepress/' }
    ],

    sidebar: {
      '/vitepress/': [{
        text: 'vitepress',
        items: [
          { text: '部署vitepress踩的坑', link: '/vitepress/部署vitepress踩的坑' }
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Labolasya' }
    ],

    search: {
      provider: 'local'
    }
  }
})
