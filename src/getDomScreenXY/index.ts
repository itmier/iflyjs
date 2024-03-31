/*
 * @Author: Tmier
 * @Date: 2024-03-31 11:25:15
 * @LastEditTime: 2024-03-31 11:34:47
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description 获取dom元素的屏幕坐标(相对于Screen)
 * @returns
 */
function getDomScreenXY(selector: string) {
  const element = document.querySelector(selector)
  if (element) {
    const { top, left } = element.getBoundingClientRect()

    return {
      x: left,
      y: top
    }
  }
  return undefined
}

export default getDomScreenXY
