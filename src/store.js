import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 20
    },
    mutations: {
        INSCREAMENT(state){
            state.count ++ ;
        },
        DECREMENT(state){
            state.count --;
        },
        INCREMENT_WITH_VALUE(state, value){
            state.count += value;
        }
    },
    actions:{
        inscreament({commit}){
            commit("INSCREAMENT");
        },
        decreament({commit}){
            commit("DECREMENT");
        },
        incrementWithValue({commit},value){
            commit("INCREMENT_WITH_VALUE",parseInt(value));
        }
    }
})
export default store;