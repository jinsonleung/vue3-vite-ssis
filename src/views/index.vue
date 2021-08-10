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
    <h1>==INDEX PAGE==</h1>
    <hr />
    1、mockjs test <br>
    <button @click="getMockData">get mock data</button>
  </div>
</template>

<script lang="ts">
import { log } from "util";
import { ref, defineComponent } from "vue"
import axios from "_axios@0.21.1@axios";
import '../mock/index.ts'


export default defineComponent({
  name: "Index",
  setup() {
    const refData = ref(0);
    const getMockData = () => {
      console.log('show mock data')
      //axios()
      axios("/api/getUsers")
          .then(response => {
              console.log(response);
              //response.json()
          })
          .then(data => {
              // console.log('error');
              console.log(data)
          })
    };
    return {
      refData,
      getMockData,
    };
  },
});
</script>
<style scoped lang="scss">
h1 {
  color: darkviolet;
}
</style>
