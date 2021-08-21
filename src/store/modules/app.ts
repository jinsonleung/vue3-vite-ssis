/*
 * @Author: Jinson.Liang
 * @Date: 2021-08-21 15:46:55
 * @LastEditors: Jinson.Liang
 * @LastEditTime: 2021-08-21 16:00:39
 * @Description: 全部 app store
 * @FilePath: \vue3-vite-ssis\src\store\modules\app.ts
 */

const app = {
    state:{
        isCollapse: false,  //左侧菜单栏展开与折叠
        count: 0
    },
    getters: {  //获取State中的isCollcapse值
        isCollapse: (state:any)=>{
            return state.isCollapse
        },
        count: (state:any)=>{
            return state.count
        }
    },
    mutations: {    //同步修改状态
        TOGGLE_SIDEBAR(state:any){  //左边菜单栏展开与折叠
            state.isCollapse = !state.isCollapse
        },
        COUNT_ADD(state:any){  //count自增1
            state.count++
        },
        COUNT_DEL(state:any){   //count自减1
            state.count--
        }
    },
    actions: {  //通过mutaitons异步修改状态
        tonggleSideBar(context:any,e:any){
            console.log(e)  //接受的值
            context.commit('TOGGLE_SIDEBAR')
        },
        countAdd(context:any){
            context.commit('COUNT_ADD')
        },
        countDel(context:any){
            context.commit('COUNT_DEL')
        }
    }
}
export default app



