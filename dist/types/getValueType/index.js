/*
 * @Author: Tmier
 * @Date: 2024-03-26 23:17:38
 * @LastEditTime: 2024-03-27 22:30:09
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * @description 获取数据类型
 */
const getValueType = (val) => Object.prototype.toString.call(val).split(' ')[1].slice(0, -1).toLowerCase();
export default getValueType;
