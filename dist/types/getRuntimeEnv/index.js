/**
 * 获取当前运行环境,返回运行环境的集合判断
 * @description 该函数参考自 https://github.com/MrXujiang/xijs/blob/main/src/getRuntimeEnv/index.ts
 */
function getRuntimeEnv() {
    const inBrowser = typeof window !== 'undefined';
    // @ts-ignore
    const inWeex = typeof window.WXEnvironment !== 'undefined' && !!window.WXEnvironment.platform;
    // @ts-ignore
    const weexPlatform = inWeex && window.WXEnvironment.platform.toLowerCase();
    //浏览器 UA 判断
    const UA = inBrowser && window.navigator.userAgent.toLowerCase();
    const isIE = UA && /msie|trident/.test(UA);
    const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    const isEdge = UA && UA.indexOf('edge/') > 0;
    const isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android';
    const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios';
    const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    // 添加是否是Safari的判断
    const isSafari = UA && /safari/.test(UA) && !isChrome && !isAndroid;
    return {
        isWeex: inWeex,
        isIE,
        isIE9,
        isEdge,
        isAndroid,
        isIOS,
        isChrome,
        isSafari
    };
}
export default getRuntimeEnv;
