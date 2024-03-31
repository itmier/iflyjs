# getDomPageXY - 获取 dom 元素的屏幕坐标(相对于 Screen)

## 使用

```js
import { getDomScreenXY } from 'iflyjs'
console.log(getDomScreenXY('#domXY')) // output: {x: 8, y: 100}
```

## 源码

```ts
function getDomScreenXY(selector: string) {
  const element = document.querySelector(selector)
  if (element) {
    const { top, left } = element.getBoundingClientRect()

    return {
      x: left,
      y: top
    }
  }
  return undefined
}
```
