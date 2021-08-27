/*
 * @Author: JinsonLiang
 * @Date: 2021-08-27 14:43:24
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-27 20:12:36
 * @Description: file content 端口类API接口
 * @FilePath: /vue3-vite-ssis/src/api/goods/goodsListApi.ts
 */

import { ListQuery } from "@/type/goods";
import http from "@/utils/http2";

export function getList<T>(params: ListQuery) {
    return http.get<T, T>(`/getGoodslist?pageNo=${params.pageNo}&pageSize=${params.pageSize}&goodsName=${params.goodsName || ''}`)
}
