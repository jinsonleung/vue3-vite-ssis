/*
 * @Author: JinsonLiang
 * @Date: 2021-08-27 14:43:24
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-28 13:42:52
 * @Description: file content 端口类API接口
 * @FilePath: \vue3-vite-ssis\src\api\goods\goodsListApi.ts
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





