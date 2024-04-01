/*
 * @Author: 王云飞
 * @Date: 2023-02-23 16:31:41
 * @LastEditTime: 2024-04-01 21:00:55
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
  url__obj,
  getTimeInterval,
  iflyUpload,
  redirect,
  xss,
  hyphenate,
  cloneDeep
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

// console.log(url__obj('?type=1&id=1929929&x=abc')) // output: {type: '1', id: '1929929', x: 'abc'}

// const date1 = new Date()
// setTimeout(() => {
//   const date2 = new Date()
//   console.log(getTimeInterval(date1, date2))
// }, 1800) // 1.81s

// const dom = $('#domXY')
// if (dom instanceof Element) {
//   dom.addEventListener('click', () => {
//     iflyUpload.createUpload({ accept: 'image/*' }).then((inputEle) => {
//       inputEle?.addEventListener('change', (e) => {
//         console.log(e)
//         iflyUpload.destroy(inputEle)
//       })
//       inputEle?.addEventListener('cancel', () => {
//         console.log('取消文件选择~')
//         iflyUpload.destroy(inputEle)
//       })
//       inputEle?.click()
//     })
//   })
// }
// setTimeout(() => {
//   redirect('https://www.baidu.com')
// }, 1800)
// console.log(xss('<script>alert(1)</script>')) // output: &lt;script&gt;alert(1)&lt;/script&gt;

// console.log(hyphenate('getDataFromDB', '_')) // output: get_data_from_db
// console.log(hyphenate('AaBb1Cc2Dd_Ee.Ff', '_')) // output: aa_bb1_cc2_dd__ee.ff

const a = [1, 2, 3, 4, 5]
const b = {
  c: 1,
  d: '50',
  e: a,
  f: () => {
    console.log(1)
  },
  g: null,
  h: undefined,
  i: Symbol('i')
}
const c = cloneDeep(b)
b.c = 2
b.e.push(2)
a.push(6)
console.log(a) // -> (7) [1, 2, 3, 4, 5, 2, 6]
console.log(b) // ->{ c: 2,d: '50',e: [1, 2, 3, 4, 5, 2, 6], f: () => { console.log(1); }, g: null, h: undefined, i: Symbol(i)}
console.log(c) // -> {c: 1, d: '50', e: [1, 2, 3, 4, 5], f: { console.log(1);, g: null, h: undefined, i: Symbol(i)}}
