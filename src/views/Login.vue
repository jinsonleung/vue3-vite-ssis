<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 12:23:03
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\views\Home.vue
-->

<template>
  <div>
   <h1>==LOGIN PAGE==</h1>
   <hr>
   <button @click="getLoginMock">get login data</button>
  </div>

</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue"
import "../mock/mockServer"


export default defineComponent({
  name: "Login",
  setup() {
    const refData = ref(0)
    const { proxy }: any  = getCurrentInstance()
    const getLoginMock = ()=>{
      proxy.$axios.get('/user/info').then((res:any)=>{
        console.log('========res.data=========');
        console.log(res.data);
      })
    }
    return {
      refData,
      getLoginMock,
    };
  },
});
</script>
<style scoped lang='scss'>
  h1 {
    color: green;
    font-size: unit($number: 12);
  }
  button {
    background-color: violet;
  }
</style>
