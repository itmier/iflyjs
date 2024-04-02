/*
 * @Author: Tmier
 * @Date: 2024-04-02 21:16:36
 * @LastEditTime: 2024-04-02 21:25:52
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * 格式化日期
 * @param time
 * @param format
 * @returns
 */
function formatDate(time: number | string | Date, format = 'YY-MM-DD hh:mm:ss') {
  const date = new Date(time)

  const year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()

  const preArr = [...Array(10)].map(function (_, index) {
    return '0' + index
  })

  const newTime = format
    .replace(/YY/g, String(year))
    .replace(/MM/g, String(preArr[month] || month))
    .replace(/DD/g, String(preArr[day] || day))
    .replace(/hh/g, String(preArr[hour] || hour))
    .replace(/mm/g, String(preArr[min] || min))
    .replace(/ss/g, String(preArr[sec] || sec))

  return newTime
}

export default formatDate
