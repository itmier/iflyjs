# obj\_\_url - 将对象转换为 url 参数

## 使用

```js
import { obj__url } from 'iflyjs'
const data = {
  type: 1,
  id: '1929929'
}
console.log(obj__url(data)) // output: type=1&id=1929929
```

## 源码

```ts
function obj__url(data: any, isPrefix?: boolean) {
  const prefix = isPrefix ? '?' : ''

  const _result = []
  for (const key in data) {
    const value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue
    }
    if (value.constructor === Array) {
      value.forEach((_value) => {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
      })
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }
  }

  return _result.length ? prefix + _result.join('&') : ''
}
```
