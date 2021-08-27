/*
 * @Author: JinsonLiang
 * @Date: 2021-08-27 14:43:24
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-27 14:45:37
 * @Description: file content 端口类API接口
 * @FilePath: \vue3-vite-ssis\src\api\goods\goodsListApi.ts
 */

import { ListQuery } from "@/type/goods";
import http from "@/utils/http2";

export function getList<T>(params: ListQuery) {
    return http.get<T,T>('/getGoodsList&')
} 
