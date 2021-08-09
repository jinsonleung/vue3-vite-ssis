/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:33:33
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 12:20:01
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\store\index.ts
 */
import {createStore} from "vuex"

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state:any) {
        state.count++
      }
    }
  })

  export default store;

