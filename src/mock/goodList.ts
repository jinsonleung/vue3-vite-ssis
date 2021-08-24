/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-24 17:27:52
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-24 17:35:14
 * @Description: 商品列表
 * @FilePath: \vue3-vite-ssis\src\mock\gootList.ts
 */

import Mock from 'mockjs'

function getGoodList(){
    const count = 10
    const goodList = []
    for(let i=0; i<count; i++)
    {
        goodList.push(Mock.mock({
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
    return goodList
}

export { getGoodList, }




