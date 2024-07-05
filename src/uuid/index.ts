/*
 * @Author: Tmier
 * @Date: 2024-07-04 22:37:31
 * @LastEditTime: 2024-07-05 23:15:22
 * @LastEditors: Tmier
 * @Description: 实现随机数
 *
 */
const getRandomBytes = function (size: number) {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.getRandomValues) {
    throw new Error('此环境不支持Web Crypto API。')
  }
  const array = new Uint8Array(size)
  window.crypto.getRandomValues(array)
  return array
}
function randomStr(size = 20) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!+=;.,*'
  const charactersLength = characters.length
  const randomBytes = getRandomBytes(size)
  let result = ''
  for (let i = 0; i < size; i++) {
    result += characters.charAt(randomBytes[i] % charactersLength)
  }
  if (size < 10) {
    console.warn('随机值长度较低, 重复可能性升高, 建议15以上!')
  }
  return result
}
function randomNum(length: number = 20) {
  const S10 = (defaultRandomSize = 10) => {
    const randomStr = (Math.random() * 10).toString().split('.').join('')
    const maxIndex = randomStr.length - 1 - defaultRandomSize
    const minIndex = 0
    const selectIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex)
    let randomNumStr = randomStr.slice(selectIndex, selectIndex + defaultRandomSize)
    while (randomNumStr.length < length - 13) {
      randomNumStr += S10()
    }
    return randomNumStr
  }
  if (length <= 13) {
    return (Date.now() + '').substring(0, length)
  }
  const finalRandom = Date.now() + S10()
  if (length < 10) {
    console.warn('随机值长度较低, 重复可能性升高, 建议15以上!')
  }
  return finalRandom.substring(0, length)
}

export default {
  randomStr,
  randomNum
}
