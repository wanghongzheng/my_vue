export default {
    increment({commit}){
        commit("INCREMENT")
    },
    decrement({commit}){
        commit("DECREMENT")
    },
    incrementWithValue({commit}, value){
        commit("SHOW_WAITING_MESSAGE");
        let intValue = parseInt(value.value)
        let anotherValue = value.anotherValue
        setTimeout(function() {

            if(isNaN(intValue)) {
                alert("Not an Interger")
            }else {    
                commit("HIDE_WAITING_MESSAGE");
                commit("INCREMENT_WITH_VALUE", {intValue, anotherValue})
            }
        }, 2000)
    }
}