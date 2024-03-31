# iflyUpload - 快速创建文件上传及销毁方法

## 使用

```js
import { $, iflyUpload } from 'iflyjs'
const dom = $('#domXY')
if (dom instanceof Element) {
  dom.addEventListener('click', () => {
    iflyUpload.createUpload({ accept: 'image/*' }).then((inputEle) => {
      inputEle?.addEventListener('change', (e) => {
        console.log(e)
        iflyUpload.destroy(inputEle)
      })
      inputEle?.addEventListener('cancel', () => {
        console.log('取消文件选择~')
        iflyUpload.destroy(inputEle)
      })
      inputEle?.click()
    })
  })
}
```

## 源码

```ts
class iflyUpload {
  constructor() {}
  static createUpload({ accept }: ICreateUpload) {
    const inputEle = document.createElement('input')
    inputEle.type = 'file'
    if (accept) {
      inputEle.accept = accept
    }
    inputEle.style.display = 'none'
    const env = getRuntimeEnv()
    document.body.appendChild(inputEle)
    return Promise.resolve(inputEle)
  }
  static destroy(element: HTMLInputElement) {
    element?.parentNode?.removeChild(element)
  }
}
```
