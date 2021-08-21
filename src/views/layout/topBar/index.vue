<!--
 * @Author: JinsonLiang
 * @Date: 2021-07-02 17:43:09
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-21 17:02:40
 * @Description: file content
 * @FilePath: \vue3-vite-ssis\src\views\layout\topBar\index.vue
-->
<template>
    <div class="topbar-container">
        <h1>这是topbar</h1>
        <div class="header">
            <h2>这是header</h2>
            <div class="toggle-btn" @click="toggleSidebar">
                <h3>这是tongle-btn</h3>
                <i class="ri-indent-decrease ri-lg"  :class="{'ri-indent-increase':isCollapse}"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {reactive,computed} from 'vue'
    import { useStore,mapGetters,mapActions } from 'vuex'
    export default {
        name: "TopBar",
        computed:{
            ...mapGetters(['isCollapse']) // 语法糖
        },
        setup(props,context){
            const state = reactive({
                title:'vue'
            });

            const store = useStore ();
            const isCollapse = computed( () => store.getters.isCollapse); //getters
            const toggleSidebar  = () => store.dispatch('toggleSidebar',state.title); //actions

            const handleClick = () =>{
                store.state.app.isCollapse = !store.state.app.isCollapse;
                console.log(store.state.app.isCollapse);
            };
            return{
                state,
                handleClick,
                // isCollapse,
                toggleSidebar
                //...mapActions(['toggleSidebar']) // 语法糖
            }
        }
    }
</script>

<style lang="scss" scoped>
    .topbar-container {
        width: 100%;
        height: 50px;
        background-color: #fff;
        .header {
            height: 50px;
            line-height: 50px;
            box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
            position: relative;
            .toggle-btn {
                line-height: 50px;
                height: 100%;
                float: left;
                cursor: pointer;
                background-color: red;// will be deleted
                transition: background .3s;
                :hover{
                    background: rgba(0,0,0,.025);
                    display: inline-block;
                }
            }

        }
        .is-active {
            transform: rotate(180deg);
        }
    }
</style>
