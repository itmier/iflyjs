# getValueType - 获取参数类型

## 使用

```js
import { getValueType } from 'iflyjs'
console.log(getValueType(null)) // output: 'null'
```

## 源码

```ts
const getValueType = (val: any) =>
  Object.prototype.toString.call(val).split(' ')[1].slice(0, -1).toLowerCase()
```
