/*
 * @Author: Tmier
 * @Date: 2024-03-28 21:46:22
 * @LastEditTime: 2024-07-04 15:08:50
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { defineConfig } from 'vitepress'
import sidebar from './sidebar/index'

export default defineConfig({
  outDir: '../dist-docs',
  lang: 'zh-CN',
  title: 'iFlyJS',
  description: 'A JavaScript utility library',
  lastUpdated: true,
  appearance: false,
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
      {
        text: '安装与使用',
        link: '/usage'
      },
      {
        text: '函数索引',
        link: '/all'
      },
      ...sidebar.getSidebar()
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present iflyjs'
    }
  }
})
