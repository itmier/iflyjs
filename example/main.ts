/*
 * @Author: 王云飞
 * @Date: 2023-02-23 16:31:41
 * @LastEditTime: 2024-03-27 22:49:26
 * @LastEditors: Tmier
 * @Description:
 *
 */
// import * as BetterJs from '@/main'
// export default BetterJs
import { getRuntimeEnv, getValueType, isCorrectType } from '@/main'

console.log(isCorrectType(null, 'null'))
const env = getRuntimeEnv()
console.log(env)
