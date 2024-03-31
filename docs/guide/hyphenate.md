# hyphenate - 驼峰转连字符命名

## 使用

```js
import { hyphenate } from 'iflyjs'
console.log(hyphenate('getDataFromDB', '_')) // output: get_data_from_db
console.log(hyphenate('AaBb1Cc2Dd_Ee.Ff', '_')) // output: aa_bb1_cc2_dd__ee.ff
```

## 源码

```ts
function hyphenate(str: string, flag = '-') {
  const hyphenateReg = /([a-z0-9_])([A-Z])|([A-Z])([A-Z][a-z])/g
  return str.replace(hyphenateReg, `$1$3${flag}$2$4`).toLowerCase()
}
```
