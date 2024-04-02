# formatDate - 获取节点在 doc 上的 x, y

## 使用

```js
import { formatDate } from 'iflyjs'
console.log('date: ', formatDate(new Date().getTime(), 'MM.DD.YY')) // output: date:  04.02.2024
```

## 源码

```ts
function formatDate(time: number | string | Date, format = 'YY-MM-DD hh:mm:ss') {
  const date = new Date(time)

  const year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()

  const preArr = [...Array(10)].map(function (_, index) {
    return '0' + index
  })

  const newTime = format
    .replace(/YY/g, String(year))
    .replace(/MM/g, String(preArr[month] || month))
    .replace(/DD/g, String(preArr[day] || day))
    .replace(/hh/g, String(preArr[hour] || hour))
    .replace(/mm/g, String(preArr[min] || min))
    .replace(/ss/g, String(preArr[sec] || sec))

  return newTime
}
```
