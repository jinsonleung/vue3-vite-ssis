<!--
 * @Author: Jinson.Liang
 * @Date: 2021-08-25 13:32:04
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-25 17:45:53
 * @Description: 商品列表
 * @FilePath: \vue3-vite-ssis\src\components\goods\List.vue
-->

<template>
    <div>
        <div class="project-header">
            <el-row>
                <el-col :span="7"></el-col>
                <el-col :span="7">
                    <el-input
                        size="medium"
                        class="project-input"
                        v-model="listQuery.goodsName"
                        clearable
                        @keyup.enter="searchFn(listQuery)"
                        placeholder="请输入商品名称搜索">
                    </el-input>
                </el-col>
                <el-button type="primary" size="medium" @click="searchFn(listQuery)"
                    >查 询</el-button>
                <el-button type="primary" size="medium" @click="addData">新 建</el-button>
            </el-row>
        </div>
    </div>
</template>

<script lang='ts'>
import { ref, reactive, onMounted, defineComponent } from "vue"
import http from '@/utils/http2/index'
import "@/mock/mockServer"
import { ListQuery, DataList, TableList, IdQuery } from '@/type/goods/index'


export default defineComponent({
  name: "App",
  setup() {
    const refData = ref(0)

    const listQuery = reactive<ListQuery> ({    //商品数据查询接口变量
        pageNo: 1,  //当前页码
        pageSize: 10,   //页长
        goodsName: ''   //项目名称
    })



    onMounted(()=>{
        http.get("/getgoodlist").then((res: any) => {
        console.log("==这是axios二次封装请求返回的数据==");
        console.log(res.data);
      });
    })
    return {
      refData,
      listQuery,
    };
  }
});
</script>
<style scoped lang='scss'>
.table-box {
    height: 640px;
    overflow: auto;
}
.page-footer-box {
    text-align: right;
    margin-top: 15px;
}
</style>

