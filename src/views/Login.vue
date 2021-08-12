<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-12 11:39:04
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\views\Login.vue
-->

<template>
  <div>
   <h1>==LOGIN PAGE==</h1>
   <hr>
   <button @click="loginHandle">登录</button>
  </div>

</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue"


export default defineComponent({
  name: "Login",
  setup() {
    const refData = ref(0)
    const loginHandle = ()=>{ //登录处理
      alert("login handling...")
    }
    return {
      refData,
      loginHandle,
    };
  },
});
</script>
<style scoped lang='scss'>
  h1 {
    color:blue;
    font-size: unit($number: 12);
  }
  button {
    font-size: small;
    background-color:aquamarine;
  }
</style>
