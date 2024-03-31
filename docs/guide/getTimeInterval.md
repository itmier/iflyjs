# getTimeInterval - 计算两段时间的时间差

## 使用

```js
const date1 = new Date()
setTimeout(() => {
  const date2 = new Date()
  console.log(getTimeInterval(date1, date2))
}, 1800) // 1.81s
```

## 源码

```ts
function getTimeInterval(start: string | Date, end: string | Date) {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const date = endDate.getTime() - startDate.getTime()
  const misSecond = Math.floor(date)
  // 大于1s的话, 就返回秒
  if (misSecond > 1000) {
    return (misSecond / 1000).toFixed(2) + 's'
  }
  // 大于60s的话, 就返回分钟
  if (misSecond > 1000 * 60) {
    return (misSecond / 1000 / 60).toFixed(1) + 'min'
  }
  // 大于60分钟的话, 就返回小时
  if (misSecond > 1000 * 60 * 60) {
    return (misSecond / 1000 / 60 / 60).toFixed(1) + 'h'
  }
  return Math.floor(misSecond) + 'ms'
}
```
