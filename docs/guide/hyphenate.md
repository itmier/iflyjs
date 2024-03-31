# hyphenate - 驼峰转连字符命名

## 使用

```js
import { hyphenate } from 'iflyjs'
console.log(hyphenate('getDataFromDB', '_')) // output: get_data_from_db
```

## 源码

```ts
function hyphenate(str: string, flag = '-') {
  const hyphenateReg = /([a-z])([A-Z])|([A-Z])([A-Z][a-z])/g
  return str.replace(hyphenateReg, `$1$3${flag}$2$4`).toLowerCase()
}
```
