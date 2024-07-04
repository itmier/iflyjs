/*
 * @Author: Tmier
 * @Date: 2024-04-13 11:50:17
 * @LastEditTime: 2024-07-04 15:16:49
 * @LastEditors: Tmier
 * @Description:
 *
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import allData from '../docs/all.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 读取 JSON 文件
// const filePath = path.resolve(__dirname, '../data.json');
// const data = fs.readFileSync(filePath, 'utf8');

// // 将 JSON 字符串转换为 JavaScript 对象

// 创建一个空的字符串，用于存储转换后的 Markdown 文本
let md = '# 所有函数\n\n'

// 遍历对象，将每个函数的信息转换为 Markdown 格式的字符串
const guideData = allData.find((item) => item.root === 'guide')

for (let func of guideData.children) {
  md += `- [${func.name}: ${func.desc}](${func.link})\n`
}

// 将字符串写入到 Markdown 文件
const mdFilePath = path.resolve(__dirname, '../docs/all.md')
fs.writeFileSync(mdFilePath, md)
