# redirect - Redirect to a new page

## 使用

```js
import { redirect } from 'iflyjs'
redirect('https://www.baidu.com')
```

## 源码

```ts
function redirect(url: string) {
  window.location.href = url
}
```
