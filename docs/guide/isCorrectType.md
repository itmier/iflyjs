# isCorrectType - 判断是否是传入的类型

## 使用

```js
import { isCorrectType } from 'iflyjs'
console.log(isCorrectType(null, 'null')) // output: true
```

## 源码

```ts
const isCorrectType = (val: any, typeVal: string) => {
  if (typeof typeVal === 'string') {
    return getValueType(val) === typeVal.toLocaleLowerCase()
  }
  return getValueType(val) === typeVal
}
```
