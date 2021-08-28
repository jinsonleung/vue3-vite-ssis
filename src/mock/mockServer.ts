/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-18 09:37:20
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-28 15:51:34
 * @Description:
 * @FilePath: \vue3-vite-ssis\src\mock\mockServer.ts
 */
import Mock, { mock } from "mockjs"
import { loginMock, checkLogin} from "./loginMock"
import { getListData } from './goodList'
import { ListQuery } from '@/type/goods/index'
import { getList } from "@/api/goods/goodsListApi"


Mock.mock("/user/info", loginMock) //用户登录mock，正确
Mock.mock("http://localhost:3000/user/info", loginMock) //用户登录mock，错误（不用加前缀）
Mock.mock("/adminUser/login", "get",loginMock) //用户登录mock，正确

Mock.mock("/adminUser/checkLogin", 'post', checkLogin) //用户登录检查，正确

Mock.mock(RegExp("getList" + ".*"),'get', getListData)
// good list
//Mock.mock('/getgoodlist', getGoodList)  //獲取商品列表

