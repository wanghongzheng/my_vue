import Vue from "vue";
import Vuex from "vuex";
import mutations from "./store/muations.js";
import actions from "./store/action.js";
import getters from "./store/getters.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count:0,
        // 新增waiting  状态
        waiting: false,
        // 额外需要增加的数字
        anotherIncrement: 5
    },
    mutations,
    actions,
    getters
})
export default store;