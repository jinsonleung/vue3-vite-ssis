import Mock, { mock } from "mockjs"
import { loginMock } from "./loginMock"


Mock.mock("/user/info", loginMock) //用户登录mock，正确
Mock.mock("http://localhost:3000/user/info", loginMock) //用户登录mock，错误（不用加前缀）
Mock.mock("http://localhost:3000/adminUser/login", loginMock) //用户登录mock，错误（不用加前缀）



