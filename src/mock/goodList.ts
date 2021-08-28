/*
 * @Author: JinsonLiang
 * @Date: 2021-08-27 14:38:40
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-28 15:52:17
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\mock\goodList.ts
 */
import Mock from "mockjs";
import { MockMethod } from "vite-plugin-mock";
import "@/mock/goodList";
import { ListQuery } from "@/type/goods";

function createListData() {
  const count = 100;
  const listNo = 10;
  let goodsList: any = [];
  for (let i = 0; i < count; i++) {
    goodsList.push(
      Mock.mock({
        id: "@id",
        "goodsName|1": ["简约刷牙漱口杯", "创意漱口杯", "小黄人漱口杯"],
        "englishName|1": ["cup1", "cup2", "cup3"],
        "shortName|1": ["glass4", "glass5", "glass6"],
        "goodsDesc|1": ["商品描述1", "商品描述2", "商品描述3"],
        "goodsbrand|1": ["houya", "Edo", "CH"],
        "goodsSpec|1": ["大", "中", "小"],
      })
    );
  }
  return goodsList;
}

function getListData() {
  const listNo = 10;
  // console.log("params.goodsName",params.goodsName) //test....
  // const { pageNo, pageSize, goodsName } = params;
  let long = 0;
  let list = [];
  let totalListData = createListData();
  // console.log("goodsName>>",goodsName)
  let goodsName = '小'
  if (goodsName) {
    list = totalListData.filter((item: any) => {
      const goodsNames = item.goodsName;
      if (goodsNames.includes(goodsName)) {
        return item;
      }
    });
  }
  console.log("list>>",list)

  long = list.length;
 // list = list.slice((pageNo - 1) * listNo, pageSize * pageNo);
  return {
    code: 200,
    msg: "后端返回的提示信息！",
    data: {
      list,
      totalCount: long,
      pageNo: 1,
      pageSize: listNo,
    },
  };
}

export { getListData };

// export default [
//   {
//     url: '/getList',
//     method: 'get',
//     response: (config:any) => {
//       const { pageNo, pageSize, goodsName } = config.query
//       let long = 0
//       let list = getGoodsList
//       if (goodsName) {
//         list = getGoodsList.filter((item:any) => {
//           const goodsNames = item.goodsName
//           if (goodsNames.includes(goodsName)) {
//             return item
//           }
//         })
//       }
//       long = list.length
//       list = list.slice((pageNo - 1) * listNo, pageSize * pageNo)
//       return ({
//         code: 200,
//         msg: '后端返回的提示信息！',
//         data: {
//           list,
//           totalCount: long,
//           pageNo: pageNo || 1,
//           pageSize: pageSize || listNo
//         }
//       })
//     },
//   }
