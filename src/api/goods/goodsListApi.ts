/*
 * @Author: JinsonLiang
 * @Date: 2021-08-27 14:43:24
<<<<<<< HEAD
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-28 13:42:52
=======
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-27 20:12:36
>>>>>>> 5fa799d133dcf8a94b74b8b6b724141d71836752
 * @Description: file content 端口类API接口
 * @FilePath: /vue3-vite-ssis/src/api/goods/goodsListApi.ts
 */

import { ListQuery,IdQuery,TableList } from "@/type/goods";
import http from "@/utils/http2";
import '@/mock/goodList'

export function getList<T> (params: ListQuery) {
  return http.get<T, T>(`/getList?pageNo=${params.pageNo}&pageSize=${params.pageSize}&goodsName=${params.goodsName || ''}`)
}
export function deleteItem<T> (params: IdQuery) {
  return http.get<T, T>(`/deleteProject?id=${params.id}`)
}
export function addItem<T> (params: TableList) {
  return http.put<T, T>('/addProject', params)
}
export function updateItem<T> (params: TableList) {
  return http.post<T, T>('/updateProject', params)
}





<<<<<<< HEAD
=======
export function getList<T>(params: ListQuery) {
    return http.get<T, T>(`/getGoodslist?pageNo=${params.pageNo}&pageSize=${params.pageSize}&goodsName=${params.goodsName || ''}`)
}
>>>>>>> 5fa799d133dcf8a94b74b8b6b724141d71836752
