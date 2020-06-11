<template>
    <div id="secondcomponent">
        <h1>欢迎,使用</h1>
        <a> {{message}}</a>
        <display></display>
        <increament></increament>
    </div>
</template>
<script>
import display from "./display";
import increament from "./increament"
export default {
    data () {
        return {
            message: "我是about组件"
        }
    },
    components:{
        display,
        increament
    }
}
</script>