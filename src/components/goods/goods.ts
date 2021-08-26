/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-26 11:37:34
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-26 14:05:13
 * @Description:商品操作类
 * @FilePath: \vue3-vite-ssis\src\components\goods\goods.ts
 */

import { ref, Ref } from 'vue'

class Goods {
    public pageNo: number;
    pageSize: number;
    pageTotal: number;
    loading : boolean;
    tableList: [];
    searchModel: [];
    constructor() { //构造函数
        // this.pageNo = <Ref<number>> ref(0);
        this.pageNo = 0;
        this.pageSize = 10;
        this.pageTotal = 100;
        this.loading = false;
        this.tableList = [];
        this.searchModel =[];
    }
}


