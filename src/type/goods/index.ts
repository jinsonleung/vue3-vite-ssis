/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-25 17:25:11
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-25 17:36:04
 * @Description: 商品数据接口
 * @FilePath: \vue3-vite-ssis\src\type\goods\index.ts
 */


/**
 * 商品列表数据接口
 */
export interface TableList {
    id: string, //商品ID
    goodsName: string,  //商品名称
    englishName: string,    //商品英文名
    shortName: string,  //商品简称
    goodsDesc: string,  //商品描述
    goodsBrand: string, //商品品牌
    goodsSpec: string   //商品规格
}



/**
 * 商品查询分页接口
 */
export interface ListQuery{
    pageNo: number, //页码
    pageSize: number,   //页长
    goodsName: string,  //商品名称
}

/**
 * 商品ID查询接口
 */
export interface IdQuery {
    id: string  //商品编码
}

/**
 * 商品数据列表接口
 */
export interface DataList {
    code: string,   //代码
    msg: string,    //信息
    data: {
        list: TableList[],  //数据列表
        pageNo: string, //页码
        pageSize: string,   //页长
        totalCount: number, //总记录数
    }
}





