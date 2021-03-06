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


