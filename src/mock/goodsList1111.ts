/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-24 17:27:52
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-27 20:37:13
 * @Description: 商品列表
 * @FilePath: /vue3-vite-ssis/src/mock/goodsList.ts
 */

import { ListQuery } from '@/type/goods'
import Mock from 'mockjs'
import { TableList } from '@/type/goods/index'

//生成商品数据
const count = 55 //生成记录条数
const listNo = 10   //页长
let goodsList: any = []  //商品数组
for (let i = 0; i <count; i++) {
    {
        goodsList.push(Mock.mock({
            id: '@id',
            'goodsName|1': ['简约刷牙漱口杯', '创意漱口杯', '小黄人漱口杯'],
            'englishName|1': ['cup1', 'cup2', 'cup3'],
            'shortName|1': ['glass4', 'glass5', 'glass6'],
            'goodsDesc|1': ['商品描述1', '商品描述2', '商品描述3'],
            'goodsbrand|1': ['houya', 'Edo', 'CH'],
            'goodsSpec|1': ['大', '中', '小']
            })
        )
    }
}

function getGoodsList(params: ListQuery){
    const { pageNo, pageSize, goodsName } = params

    let long = 0
    let list = goodsList
    if ( goodsName ) {
        list = goodsList.filter((item:TableList)=>{
            const goodsNames =  item.goodsName
            if (goodsNames.includes(goodsName)) {
                return item
            }
        })
    }
    long=list.length
    list = list.slice((pageNo - 1) * listNo, pageSize * pageNo)
    return({
        code: 200,
        msg: '后台返回的数据',
        data: {
            list,
            totalCount: long,
            pageNo: pageNo || 1,
            pageSize: pageSize || listNo
        }
    })
}



export { getGoodsList, }




