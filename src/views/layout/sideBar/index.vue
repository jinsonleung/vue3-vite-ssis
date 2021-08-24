<!--
 * @Author: Jinson.Liang
 * @Date: 2021-08-21 14:38:45
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-24 11:29:40
 * @Description: 左邊菜單欄
 * @FilePath: \vue3-vite-ssis\src\views\layout\sideBar\index.vue
-->

<template>
    <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
        <el-menu
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    background-color="#304156"
                    text-color="rgb(200 212 226)"
                    router
                    :collapse="isCollapse"
        >

            <el-menu-item index="/dashboard" >
                <i class="ri-palette-line"></i>
                <template #title>仪表盘</template>
            </el-menu-item>

            <el-submenu index>
                <template #title>
                    <i class="ri-file-text-line"></i>
                    <span>安全监控</span>
                </template>
                <el-menu-item index="/helloworld">
                    <i class="ri-code-s-slash-line"></i>
                    <template #title>安全事项</template>
                </el-menu-item>
                <el-menu-item index="/vuex">
                    <i class="ri-terminal-box-line"></i>
                    <template #title>安全标准</template>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/home">
                <i class="ri-pencil-line"></i>
                <template #title>场站设置</template>
            </el-menu-item>

            <el-menu-item index="/vue3">
                <i class="ri-discuss-line"></i>
                <template #title>供应商设置</template>
            </el-menu-item>

            <el-menu-item index="/item">
                <i class="ri-discuss-line"></i>
                <template #title>安全事故</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {reactive,computed} from 'vue'
    import { useStore,mapGetters,mapActions } from 'vuex'
    export default {
        name:'siderBar',
        computed:{
            ...mapGetters(['isCollapse'])
        },
    }
</script>

<style lang="scss" scoped>
    .collapse-width {
        width: 64px !important;

    }
    .sidebar-container {
        width: 210px;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        transition: width 0.3s;
        z-index: 1001;
        overflow: hidden;
        .el-menu-vertical:not(.el-menu--collapse) {
            width: 210px;
        }
        .el-menu {
            border: none;
            height: 100%;
            width: 100% !important;
            overflow-y: auto;
        }
    }

    .el-menu-item,.el-submenu {
        text-align: left;
    }
    .el-menu-item i,.el-submenu__title i  {
        color: inherit;
        font-size: 16px;
        margin-right: 5px;

    }


</style>
