interface ICreateUpload {
    accept?: string;
}
/**
 * @description: 快速创建文件上传及销毁方法
 */
declare class iflyUpload {
    constructor();
    static createUpload({ accept }?: ICreateUpload): Promise<HTMLInputElement>;
    static destroy(element: HTMLInputElement): void;
}
export default iflyUpload;
