# xss - 防止 xss 攻击,转义特殊字符

## 使用

```js
import { xss } from 'iflyjs'
console.log(xss('<script>alert(1)</script>')) // output: &lt;script&gt;alert(1)&lt;/script&gt;
```

## 源码

```ts
const xss = (str: string): string => {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  )
}
```
