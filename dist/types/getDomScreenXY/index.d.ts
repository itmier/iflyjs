/**
 * @description 获取dom元素的屏幕坐标(相对于Screen)
 * @returns
 */
declare function getDomScreenXY(selector: string): {
    x: number;
    y: number;
} | undefined;
export default getDomScreenXY;
