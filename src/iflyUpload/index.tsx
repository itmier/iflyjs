/*
 * @Author: Tmier
 * @Date: 2024-03-31 16:09:53
 * @LastEditTime: 2024-03-31 17:15:31
 * @LastEditors: Tmier
 * @Description:
 *
 */
import getRuntimeEnv from '@/getRuntimeEnv'

interface ICreateUpload {
  accept?: string
}
/**
 * @description: 快速创建文件上传及销毁方法
 */
class iflyUpload {
  constructor() {}
  static createUpload({ accept }: ICreateUpload = {}) {
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

export default iflyUpload
