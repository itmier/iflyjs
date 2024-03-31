/*
 * @Author: Tmier
 * @Date: 2024-03-31 11:42:07
 * @LastEditTime: 2024-03-31 11:44:26
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description: 将对象转换为url参数
 * @param data
 * @param isPrefix
 * @returns
 */
function obj__url(data: any, isPrefix?: boolean) {
  const prefix = isPrefix ? '?' : ''

  const _result = []
  for (const key in data) {
    const value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue
    }
    if (value.constructor === Array) {
      value.forEach((_value) => {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
      })
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }
  }

  return _result.length ? prefix + _result.join('&') : ''
}

export default obj__url
