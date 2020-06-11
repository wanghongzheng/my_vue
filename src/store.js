import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 20,
        waiting: false
    },
    mutations: {
        // 加1
        INSCREAMENT(state){
            state.count ++ ;
        },
        // 减1
        DECREMENT(state){
            state.count --;
        },
        // 加输入值
        INCREMENT_WITH_VALUE(state, value){
            state.count += value;
        },
        // 显示和隐藏waiting
        SHOW_WAITING_MESSAGE(state){
            state.waiting = true;
        },
        HIDE_WAITNG_MESSAGE(state){
            state.waiting = false;
        }
    },
    actions:{
        inscreament({commit}){
            commit("INSCREAMENT");
        },
        decreament({commit}){
            commit("DECREMENT");
        },
        //提交
        incrementWithValue({commit},value){
            //显示loading
            commit('SHOW_WAITING_MESSAGE');
            //异常处理
            setTimeout(function(){
                if(isNaN(value)){
                    alert("Not an Interger");
                }else {
                    //loading隐藏
                    commit("HIDE_WAITNG_MESSAGE");
                    //提交数据
                    commit("INCREMENT_WITH_VALUE",parseInt(value));
                }
            },2000);
        }
    }
})
export default store;