/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-30 11:28:04
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-30 11:44:29
 * @Description: 
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


