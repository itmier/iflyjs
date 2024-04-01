interface IArray__TreeOptions {
    keyField?: string;
    childField?: string;
    parentField?: string;
}
/**
 * 将扁平数组转换成树结构
 * @param list
 * @param options
 * @returns
 */
declare function array__tree(list?: any[], options?: IArray__TreeOptions): any[];
export default array__tree;
