/**
 * @description 防止xss攻击,转义特殊字符
 * @param str
 * @returns
 */
declare const xss: (str: string) => string;
export default xss;
