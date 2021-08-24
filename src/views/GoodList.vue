<!--
 * @Author: Jinson.Liang
 * @Date: 2021-08-24 17:40:54
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-24 17:45:12
 * @Description: 商品列表
 * @FilePath: \vue3-vite-ssis\src\views\GoodList.vue
-->

<template>
  <div class="app-container" >
      <h1>==這是商品列表==</h1>
  </div>
</template>

<script lang='ts'>
import { ref, defineComponent, onMounted } from "vue"
import "@/mock/mockServer"
import http from "@/utils/http2/index"

export default defineComponent({
  name: "GoodList",
  setup() {
    const refData = ref(0);
    onMounted(()=>{
        http.get("/getgoodlist").then((res: any) => {
        console.log("==这是axios二次封装请求返回的数据==");
        console.log(res.data);
      });
    })



    return {
      refData
    };
  }
});
</script>
<style scoped>
</style>


