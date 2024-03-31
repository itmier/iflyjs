# obj_url - 将 url 参数转换为对象

## 使用

```js
import { obj__url } from 'iflyjs'
const data = {
  type: 1,
  id: '1929929'
}
console.log(url__obj('?type=1&id=1929929&x=abc')) // output: {type: '1', id: '1929929', x: 'abc'}
```

## 源码

```ts
function parse(queryString: string) {
  const result: { [key: string]: string } = {}
  const pairs = queryString.split('&')
  for (let pair of pairs) {
    let [key, value] = pair.split('=')

    result[decodeURIComponent(key)] = decodeURIComponent(value)
  }
  return result
}
function url__obj(search: string) {
  if (typeof search !== 'string') {
    throw new Error('Please enter correct parameters.')
  }
  if (~search.indexOf('?')) {
    search = search.slice(1)
  }
  return parse(search)
}
```
