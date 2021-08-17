/*
 * @Author: JinsonLiang
 * @Date: 2021-08-14 17:29:06
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-14 17:39:27
 * @Description: 类型定义接口
 * @FilePath: \vue3-vite-ssis\src\type\store\interface.ts
 */


/**
 * 环境变量类型接口
 * @export none
 * @interface IEnv
 */
export interface IEnv {
    MODE: string,   //环境模式
    PORT: number,   //端口
    PORT_STRING: string,    //端口字符串
    APP_BASE_API: string,   //api目录
    APP_BASE_URL: string,   //url
}