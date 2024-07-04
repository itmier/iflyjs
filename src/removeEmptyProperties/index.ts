/*
 * @Author: Tmier
 * @Date: 2024-07-04 16:02:51
 * @LastEditTime: 2024-07-04 16:49:42
 * @LastEditors: Tmier
 * @Description:
 *
 */
import getValueType from '@/getValueType'

/**
 * 去除对象中的空属性: null/undefined/empty str
 * @param milliseconds
 * @returns
 */
interface AnyObject {
  [key: string]: any
}
const defaultOptions = {
  deep: true,
  removeNull: true,
  removeUndefined: true,
  removeEmptyStr: true
}
const removeEmptyProperties = <T extends AnyObject>(
  data: T,
  options: Partial<typeof defaultOptions> = defaultOptions
) => {
  const mergeOptions = {
    ...defaultOptions,
    ...options
  }
  const newData = {} as AnyObject
  if (getValueType(data) !== 'object') {
    return data
  }
  Object.keys(data).forEach((key) => {
    if (getValueType(data[key]) === 'object' && mergeOptions.deep) {
      newData[key] = removeEmptyProperties(data[key], mergeOptions)
      return
    }
    if (getValueType(data[key]) === 'array' && mergeOptions.deep) {
      newData[key] = data[key].map((child: any) => removeEmptyProperties(child, mergeOptions))
      return
    }
    if (mergeOptions.removeNull && data[key] === null) {
      return
    }
    if (mergeOptions.removeEmptyStr && data[key] === '') {
      return
    }
    if (mergeOptions.removeUndefined && data[key] === undefined) {
      return
    }
    newData[key] = data[key]
  })
  return newData
}

export default removeEmptyProperties
