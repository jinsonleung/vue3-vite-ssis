import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'  //引入mockjs
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  //插件
  plugins: [
    vue(),  //添加vue插件
    viteMockServe({ //添加mockjs插件
      supportTs:false
    }),
  ],
  resolve: {
    alias: {  //映射别名
      '@': resolve(__dirname, 'src'),
    }
  }
})
