/*
 * @Author: 王云飞
 * @Date: 2023-02-23 16:31:41
 * @LastEditTime: 2024-03-31 15:17:12
 * @LastEditors: Tmier
 * @Description: 仅供测试使用
 *
 */
// import { getRuntimeEnv, getValueType, isCorrectType, $, getDomPageXY } from '../dist/iflyjs'
import {
  getRuntimeEnv,
  getValueType,
  isCorrectType,
  $,
  getDomPageXY,
  getDomScreenXY,
  obj__url,
  url__obj
} from '../src/main'

// console.log(isCorrectType(null, 'null'))
// const env = getRuntimeEnv()
// console.log(env)
// console.log(getValueType(null))

// console.log($('body'))
// console.log(getDomPageXY('#domXY'))
// console.log(getDomScreenXY('#domXY')) // {x: 8, y: 100}
// const data = {
//   type: 1,
//   id: '1929929'
// }
// console.log(obj__url(data)) // output: type=1&id=1929929

console.log(url__obj('?type=1&id=1929929&x=abc')) // output: {type: '1', id: '1929929', x: 'abc'}
