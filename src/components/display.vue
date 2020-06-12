<template>
    <div>
        <h3>Count is {{count}}</h3>
        <h3>AnoterIncrement is {{countAnother}}</h3>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        data(){
          return{}
        },
        computed: {
            ...mapState(["count"]),
            countAnother: function () {  // 获取state
                return this.$store.getters.countAnother;
            }
        }    
    }
</script>
<style scoped>
h3{
    font-size: 30px;
}
</style>