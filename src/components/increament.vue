<template>
<div >
    <div v-if ="show" class="loading">
        数据提交中。。。。
    </div>
    <div v-else>
        <div>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </div>
        <div>
            <input type="text" v-model="incrementValue" class="input">
            <button @click="incrementWithValue" class="addButton">增加</button>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
    data(){
        return {
              incrementValue: 0
        }
    },
    computed: {
        show: function() {
            return this.$store.state.waiting;
        },
        countAnother: function(){
            return this.$store.getters.countAnother;
        }
    },
    methods:{
        ...mapActions(["increment","decrement"]),
        incrementWithValue(){
            this.$store.dispatch("incrementWithValue",{value:this.incrementValue,anotherValue:this.countAnother});
        }
    }
}
</script>
<style scoped>
    div {
                 margin: 10px;
    }
    button {
        width: 100px;
        height: 100px;
    }
    .addButton {
        width: 80px;
        height: 60px;
    }
    .input {
        height: 50px;
        line-height: 50px;
    }
    .loading{
        background: rgba(0,0,0,0.3);
        height: 100%;
    }
</style>