/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-18 09:37:20
<<<<<<< HEAD
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-28 15:51:34
=======
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-27 20:42:12
>>>>>>> 5fa799d133dcf8a94b74b8b6b724141d71836752
 * @Description:
 * @FilePath: /vue3-vite-ssis/src/mock/mockServer.ts
 */
import Mock, { mock } from "mockjs"
import { loginMock, checkLogin} from "./loginMock"
<<<<<<< HEAD
import { getListData } from './goodList'
import { ListQuery } from '@/type/goods/index'
import { getList } from "@/api/goods/goodsListApi"
=======
import { getGoodsList } from "./goodsList"
>>>>>>> 5fa799d133dcf8a94b74b8b6b724141d71836752


Mock.mock("/user/info", loginMock) //用户登录mock，正确
Mock.mock("http://localhost:3000/user/info", loginMock) //用户登录mock，错误（不用加前缀）
Mock.mock("/adminUser/login", "get",loginMock) //用户登录mock，正确

Mock.mock("/adminUser/checkLogin", 'post', checkLogin) //用户登录检查，正确

Mock.mock(RegExp("getList" + ".*"),'get', getListData)
// good list
<<<<<<< HEAD
//Mock.mock('/getgoodlist', getGoodList)  //獲取商品列表
=======
Mock.mock('/getGoodslist'，'get', getGoodsList(params: listQuery))  //獲取商品列表
>>>>>>> 5fa799d133dcf8a94b74b8b6b724141d71836752

