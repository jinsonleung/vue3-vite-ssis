<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-08-14 17:47:36
 * @Description: 显示环境变量
 * @FilePath: \vue3-vite-ssis\src\views\env\index.vue
-->

<template>
  <div>
    <h3>==ENV INFOMATION PAGE==</h3>
    <hr>
    <!-- Current env_title: {{ env_title }} <br>
    Current env_base_api: {{ env_base_api }} <br>
    Current env_base_url: {{ env_base_url }} -->
  </div>
</template>

  <script lang="ts">
import { ref, defineComponent } from 'vue';
import { envs } from '@/utils/env'

export default defineComponent({
  name: "App",
  setup() {
    const env = ref( envs() );
    console.log(env)
    return {
      env,
    };
  },
});
</script>
<style></style>
