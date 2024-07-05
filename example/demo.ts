/*
 * @Author: 王云飞
 * @Date: 2023-02-23 16:31:41
 * @LastEditTime: 2024-07-05 18:48:59
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
  cloneDeep,
  array__tree,
  formatDate,
  sleep,
  tree__array,
  removeEmptyProperties,
  uuid
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

// const a = [1, 2, 3, 4, 5]
// const b = {
//   c: 1,
//   d: '50',
//   e: a,
//   f: () => {
//     console.log(1)
//   },
//   g: null,
//   h: undefined,
//   i: Symbol('i')
// }
// const c = cloneDeep(b)
// b.c = 2
// b.e.push(2)
// a.push(6)
// console.log(a) // -> (7) [1, 2, 3, 4, 5, 2, 6]
// console.log(b) // ->{ c: 2,d: '50',e: [1, 2, 3, 4, 5, 2, 6], f: () => { console.log(1); }, g: null, h: undefined, i: Symbol(i)}
// console.log(c) // -> {c: 1, d: '50', e: [1, 2, 3, 4, 5], f: { console.log(1);, g: null, h: undefined, i: Symbol(i)}}

// const list = [
//   {
//     name: '主页',
//     id: '1',
//     parentId: '0'
//   },
//   {
//     name: '学习天地',
//     id: '2',
//     parentId: '0'
//   },
//   {
//     name: '前端',
//     id: '3',
//     parentId: '2'
//   },
//   {
//     name: '后端',
//     id: '4',
//     parentId: '2'
//   },
//   {
//     name: 'JavaScript',
//     id: '5',
//     parentId: '3'
//   },
//   {
//     name: 'Vue',
//     id: '6',
//     parentId: '5'
//   },
//   {
//     name: 'React',
//     id: '7',
//     parentId: '5'
//   },
//   {
//     name: 'Node',
//     id: '8',
//     parentId: '4'
//   },
//   {
//     name: 'Java',
//     id: '9',
//     parentId: '4'
//   },
//   {
//     name: '关于我们',
//     id: '10',
//     parentId: '0'
//   }
// ]
// const newTree = array__tree(list, {
//   keyField: 'id',
//   childField: 'children',
//   parentField: 'parentId'
// })
// console.log('newTree', newTree)

// console.log('date: ', formatDate(new Date().getTime(), 'MM.DD.YY')) // output: date:  04.02.2024
// async function test() {
//   console.log('start')
//   await sleep(1800)
//   console.log('end')
// }
// test()
// const testData = [
//   {
//     name: '主页',
//     id: '1',
//     parentId: '0',
//     children: []
//   },
//   {
//     name: '学习天地',
//     id: '2',
//     parentId: '0',
//     children: [
//       {
//         name: '前端',
//         id: '3',
//         parentId: '2',
//         children: [
//           {
//             name: 'JavaScript',
//             id: '5',
//             parentId: '3',
//             children: [
//               {
//                 name: 'Vue',
//                 id: '6',
//                 parentId: '5',
//                 children: []
//               },
//               {
//                 name: 'React',
//                 id: '7',
//                 parentId: '5',
//                 children: []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: '后端',
//         id: '4',
//         parentId: '2',
//         children: [
//           {
//             name: 'Node',
//             id: '8',
//             parentId: '4',
//             children: []
//           },
//           {
//             name: 'Java',
//             id: '9',
//             parentId: '4',
//             children: []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: '关于我们',
//     id: '10',
//     parentId: '0',
//     children: []
//   }
// ]
// const res = tree__array(testData)
// console.log(res)
// const a = {
//   type: 1,
//   content: '',
//   data: [
//     {
//       type: 2,
//       content: '你好'
//     },
//     {
//       type: 3,
//       content: undefined
//     }
//   ],
//   xId: null,
//   id: undefined
// }
// console.log(removeEmptyProperties(a))
// output
// {
//   "type": 1,
//   "data": [
//       {
//           "type": 2,
//           "content": "你好"
//       },
//       {
//           "type": 3
//       }
//   ]
// }
let x = []
for (let i = 0; i < 10000; i++) {
  // let re = uuid.randomNum(20)
  let re = uuid.randomStr(6)
  console.log(re)
  x.push(re)
}
const eee = new Set(x)
console.log(x.length) // 10000
console.log(eee.size) // 10000
