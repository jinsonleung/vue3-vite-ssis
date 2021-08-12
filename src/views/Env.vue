<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-12 16:45:12
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\views\Env.vue
-->

<template>
  <div>
    <h3>==ENV INFOMATION PAGE==</h3>
    <hr>
    Current env_title: {{ env_title }} <br>
    Current env_base_api: {{ env_base_api }} <br>
    Current env_base_url: {{ env_base_url }}
  </div>
</template>

  <script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const refData = ref(0);
    const env_title = import.meta.env.VITE_APP_TITLE
    const env_base_api = import.meta.env.VITE_APP_BASE_API
    const env_base_url = import.meta.env.VITE_APP_BASE_URL
    return {
      refData,
      env_title,
      env_base_api,
      env_base_url,
    };
  },
});
</script>
<style></style>
