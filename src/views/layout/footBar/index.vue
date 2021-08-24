<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-24 15:44:32
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\views\layout\footBar\index.vue
-->

<template>
  <div class=app-container>
    <h5>@2021 by jinson.</h5>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "FootBar",
  setup() {
    const refData = ref(0);
    return {
      refData,
    };
  },
});
</script>
<style></style>
