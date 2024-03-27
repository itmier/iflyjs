/*
 * @Author: Tmier
 * @Date: 2024-03-27 22:31:01
 * @LastEditTime: 2024-03-27 22:31:28
 * @LastEditors: Tmier
 * @Description:
 *
 */
import getValueType from '../getValueType'

const isCorrectType = (val: any, typeVal: string) => {
  if (typeof typeVal === 'string') {
    return getValueType(val) === typeVal.toLocaleLowerCase()
  }
  return getValueType(val) === typeVal
}
export default isCorrectType
