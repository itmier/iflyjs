# cloneDeep - 深拷贝

## 使用

```js
import { cloneDeep } from 'iflyjs'
const a = { x: 1, y: () => {}, z: [1, 2] }
const data = cloneDeep(a)
```

## Demo

```js
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
```

## 源码

```ts
function cloneDeep<T>(obj: any): T {
  if (obj === null) {
    return null as unknown as T
  }
  if (obj instanceof Set) {
    return new Set([...obj]) as unknown as T
  }
  if (obj instanceof Map) {
    return new Map([...obj]) as unknown as T
  }
  if (obj instanceof WeakMap) {
    let weakMap = new WeakMap()
    weakMap = obj
    return weakMap as unknown as T
  }
  if (obj instanceof WeakSet) {
    let weakSet = new WeakSet()
    weakSet = obj
    return weakSet as unknown as T
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj) as unknown as T
  }
  if (typeof obj === 'undefined') {
    return undefined as unknown as T
  }
  if (Array.isArray(obj)) {
    return obj.map(cloneDeep) as unknown as T
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T
  }
  if (typeof obj !== 'object') {
    return obj
  }
  const newObj: any = {}
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = cloneDeep(value)
  }
  const symbolKeys = Object.getOwnPropertySymbols(obj)
  for (const key of symbolKeys) {
    newObj[key] = cloneDeep(obj[key])
  }
  return newObj
}
```
