/**
 * 获取当前运行环境,返回运行环境的集合判断
 * @description 该函数参考自 https://github.com/MrXujiang/xijs/blob/main/src/getRuntimeEnv/index.ts
 */
declare function getRuntimeEnv(): {
    isWeex: boolean;
    isIE: boolean | "";
    isIE9: boolean | "";
    isEdge: boolean | "";
    isAndroid: boolean;
    isIOS: boolean;
    isChrome: boolean | "";
    isSafari: boolean | "";
};
export default getRuntimeEnv;
