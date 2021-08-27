/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-26 11:37:34
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-27 19:01:36
 * @Description:商品操作类
 * @FilePath: \vue3-vite-ssis\src\components\goods\goods.ts
 */

import { getList } from '@/api/goods/goodsListApi';
import { ListQuery } from '@/type/goods';
import { ref, Ref } from 'vue'

class Goods {
    listApi: any;
    pageNo: number;
    pageSize: number;
    pageTotal: number;
    loading : boolean;
    tableList: [];
    searchModel: {};
    constructor(items={}) { //构造函数
        // this.pageNo = <Ref<number>> ref(0);
        this.listApi = items.Api.listApi;
        this.pageNo = 0;
        this.pageSize = 10;
        this.pageTotal = 100;
        this.loading = false;
        this.tableList = [];
        this.searchModel =[];
    }

    searchFn=(params: ListQuery)=>{
        this.pageNo = 1
        this.searchModel = params
        this.getDataList()

    }

    getDataList = (data = {})=>{

    }

}

export { Goods }


