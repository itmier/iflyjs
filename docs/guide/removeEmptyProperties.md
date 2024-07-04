# removeEmptyProperties - 去除对象中的空属性

## 使用

```js
import { 去除对象中的空属性 } from 'iflyjs'
const a = {
  type: 1,
  content: '',
  data: [
    {
      type: 2,
      content: '你好'
    },
    {
      type: 3,
      content: undefined
    }
  ],
  xId: null,
  id: undefined
}
console.log(removeEmptyProperties(a))
// output
// {
//   "type": 1,
//   "data": [
//       {
//           "type": 2,
//           "content": "你好"
//       },
//       {
//           "type": 3
//       }
//   ]
// }
```

## 源码

```ts
interface AnyObject {
  [key: string]: any
}
const defaultOptions = {
  deep: true,
  removeNull: true,
  removeUndefined: true,
  removeEmptyStr: true
}
const removeEmptyProperties = <T extends AnyObject>(
  data: T,
  options: Partial<typeof defaultOptions> = defaultOptions
) => {
  const mergeOptions = {
    ...defaultOptions,
    ...options
  }
  const newData = {} as AnyObject
  if (getValueType(data) !== 'object') {
    return data
  }
  Object.keys(data).forEach((key) => {
    if (getValueType(data[key]) === 'object' && mergeOptions.deep) {
      newData[key] = removeEmptyProperties(data[key], mergeOptions)
      return
    }
    if (getValueType(data[key]) === 'array' && mergeOptions.deep) {
      newData[key] = data[key].map((child: any) => removeEmptyProperties(child, mergeOptions))
      return
    }
    if (mergeOptions.removeNull && data[key] === null) {
      return
    }
    if (mergeOptions.removeEmptyStr && data[key] === '') {
      return
    }
    if (mergeOptions.removeUndefined && data[key] === undefined) {
      return
    }
    newData[key] = data[key]
  })
  return newData
}

export default removeEmptyProperties
```
