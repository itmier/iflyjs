/*
 * @Author: Tmier
 * @Date: 2024-03-27 23:13:32
 * @LastEditTime: 2024-03-27 23:15:43
 * @LastEditors: Tmier
 * @Description: 该函数参考自 https://github.dev/MrXujiang/xijs/blob/main/src/utils/getRuntimeEnv.ts
 *
 */
/**
 * @description 获取dom节点相对于文档定位
 * @param selector
 * @returns
 */
function getDomPageXY(selector: string) {
  const element = document.querySelector(selector)
  if (element) {
    const { top, left } = element.getBoundingClientRect()
    //top和left加上滚动条
    // For scrollX
    const scrollLeft = document.documentElement.scrollLeft
    // For scrollY
    const scrollTop = document.documentElement.scrollTop
    return {
      x: left + scrollLeft,
      y: top + scrollTop
    }
  }
  return undefined
}

export default getDomPageXY
