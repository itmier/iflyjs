/*
 * @Author: Tmier
 * @Date: 2024-04-09 21:11:30
 * @LastEditTime: 2024-04-09 21:12:28
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * 睡眠函数, 等待一段时间执行
 * @param milliseconds
 * @returns
 */
const sleep = async (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

export default sleep
