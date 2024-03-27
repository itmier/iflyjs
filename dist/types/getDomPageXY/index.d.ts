/**
 * @description 获取dom节点相对于文档定位
 * @param selector
 * @returns
 */
declare function getDomPageXY(selector: string): {
    x: number;
    y: number;
} | undefined;
export default getDomPageXY;
