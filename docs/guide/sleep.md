# sleep - 睡眠函数, 等待一段时间执行

## 使用

```js
import { redirect } from 'iflyjs'
async function test() {
  console.log('start')
  await sleep(1800)
  console.log('end')
}
test() // output: start...end
```

## 源码

```ts
const sleep = async (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))
```
