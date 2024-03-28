import { defineConfig } from 'vitepress'
import sidebar from './sidebar/index'

export default defineConfig({
  outDir: '../dist-docs',
  lang: 'zh-CN',
  title: 'iFlyJS',
  description: 'A JavaScript utility library',
  lastUpdated: true,
  appearance: 'dark',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    outlineTitle: '大纲',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    siteTitle: 'iFlyJS',
    // nav: [],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '最近更新',
    socialLinks: [],
    sidebar: [
      {
        text: '快速开始',
        link: '/'
      },
      // {
      //   text: '更新日志',
      //   link: '/changelog'
      // },
      ...sidebar.getSidebar()
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present iflyjs'
    }
  }
})
