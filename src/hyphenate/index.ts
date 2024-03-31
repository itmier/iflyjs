/*
 * @Author: Tmier
 * @Date: 2024-03-31 20:56:24
 * @LastEditTime: 2024-03-31 21:17:44
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description 驼峰转连字符命名
 * @param str
 * @param flag
 * @returns
 */
function hyphenate(str: string, flag = '-') {
  const hyphenateReg = /([a-z])([A-Z])|([A-Z])([A-Z][a-z])/g
  return str.replace(hyphenateReg, `$1$3${flag}$2$4`).toLowerCase()
}
export default hyphenate
