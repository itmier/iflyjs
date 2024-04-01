/**
 * @description: 将url参数转换为对象
 * @param search
 * @returns
 */
declare function url__obj(search: string): {
    [key: string]: string;
};
export default url__obj;
