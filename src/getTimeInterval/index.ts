/*
 * @Author: Tmier
 * @Date: 2024-03-31 15:31:19
 * @LastEditTime: 2024-03-31 15:48:37
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description 计算两段时间的时间差
 * @param start
 * @param end
 * @returns
 */
function getTimeInterval(start: string | Date, end: string | Date) {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const date = endDate.getTime() - startDate.getTime()
  const misSecond = Math.floor(date)
  // 大于1s的话, 就返回秒
  if (misSecond > 1000) {
    return (misSecond / 1000).toFixed(2) + 's'
  }
  // 大于60s的话, 就返回分钟
  if (misSecond > 1000 * 60) {
    return (misSecond / 1000 / 60).toFixed(1) + 'min'
  }
  // 大于60分钟的话, 就返回小时
  if (misSecond > 1000 * 60 * 60) {
    return (misSecond / 1000 / 60 / 60).toFixed(1) + 'h'
  }
  return Math.floor(misSecond) + 'ms'
}

export default getTimeInterval
