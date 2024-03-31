/*
 * @Author: Tmier
 * @Date: 2024-03-31 20:47:23
 * @LastEditTime: 2024-03-31 20:48:07
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description 防止xss攻击,转义特殊字符
 * @param str
 * @returns
 */
const xss = (str: string): string => {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  )
}
export default xss
