<!--
 * @Author: Tmier
 * @Date: 2024-03-28 22:44:52
 * @LastEditTime: 2024-03-28 22:47:12
 * @LastEditors: Tmier
 * @Description:
 *
-->

# 获取参数类型

## 语法

```js
import { getValueType } from 'iflyjs'
console.log(getValueType(null))
```

## 源码

```js
const getValueType = (val: any) =>
  Object.prototype.toString.call(val).split(' ')[1].slice(0, -1).toLowerCase()

export default getValueType
```
