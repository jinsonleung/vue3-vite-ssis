<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-12 11:42:03
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\views\Home.vue
-->

<template>
  <div>==APP MAIN PAGE==</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const refData = ref(0);
    return {
      refData,
    };
  },
});
</script>
<style></style>
