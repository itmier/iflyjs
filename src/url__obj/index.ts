/*
 * @Author: Tmier
 * @Date: 2024-03-31 12:12:56
 * @LastEditTime: 2024-03-31 15:16:55
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description: 将url参数转换为对象
 * @param queryString
 * @returns
 */
function parse(queryString: string) {
  const result: { [key: string]: string } = {}
  const pairs = queryString.split('&')
  for (let pair of pairs) {
    let [key, value] = pair.split('=')

    result[decodeURIComponent(key)] = decodeURIComponent(value)
  }
  return result
}
/**
 * @description: 将url参数转换为对象
 * @param search
 * @returns
 */
function url__obj(search: string) {
  if (typeof search !== 'string') {
    throw new Error('Please enter correct parameters.')
  }
  if (~search.indexOf('?')) {
    search = search.slice(1)
  }
  return parse(search)
}
export default url__obj
