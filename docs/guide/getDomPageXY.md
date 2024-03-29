# getDomPageXY - 获取节点在 doc 上的 x, y

## 使用

```js
import { getDomPageXY } from 'iflyjs'
console.log(getDomPageXY('#domXY')) // output: {x: 100, y: 150}
```

## 源码

```ts
function getDomPageXY(selector: string) {
  const element = document.querySelector(selector)
  if (element) {
    const { top, left } = element.getBoundingClientRect()
    //top和left加上滚动条
    // For scrollX
    const scrollLeft = document.documentElement.scrollLeft
    // For scrollY
    const scrollTop = document.documentElement.scrollTop
    return {
      x: left + scrollLeft,
      y: top + scrollTop
    }
  }
  return undefined
}
```
