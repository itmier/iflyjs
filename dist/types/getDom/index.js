/*
 * @Author: Tmier
 * @Date: 2024-03-27 22:59:51
 * @LastEditTime: 2024-03-27 23:00:52
 * @LastEditors: Tmier
 * @Description: 该函数参考自 https://github.dev/MrXujiang/xijs/blob/main/src/utils/getRuntimeEnv.ts
 *
 */
/**
 * @description 获取dom元素
 * @param selector
 */
function $(selector) {
    const nodes = document.querySelectorAll(selector);
    if (nodes.length === 0) {
        return undefined;
    }
    if (nodes.length === 1) {
        return nodes[0];
    }
    return nodes;
}
export default $;
