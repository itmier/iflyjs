/*
 * @Author: 王云飞
 * @Date: 2023-02-23 16:31:41
 * @LastEditTime: 2024-03-27 23:39:25
 * @LastEditors: Tmier
 * @Description: 仅供测试使用
 *
 */
import { getRuntimeEnv, getValueType, isCorrectType, $, getDomPageXY } from '../dist/happy-js'

console.log(isCorrectType(null, 'null'))
const env = getRuntimeEnv()
console.log(env)
console.log(getValueType('123'))

console.log($('body'))
console.log(getDomPageXY('#domXY'))
