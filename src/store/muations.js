export default {
    // 加1
    INCREMENT(state) {
        state.count++;
    },
    // 减1
    DECREMENT(state) {
        state.count--
    },
    INCREMENT_WITH_VALUE(state, value){
        state.count = state.count + value.intValue + value.anotherValue;
    },
    // 显示和隐藏waiting
    SHOW_WAITING_MESSAGE(state){
        state.waiting = true;
    },
    HIDE_WAITING_MESSAGE(state){
        state.waiting = false;
    }
}