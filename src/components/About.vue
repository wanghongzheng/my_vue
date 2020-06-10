<template>
    <div id="secondcomponent">
        <h1>欢迎,使用</h1>
        <a> {{message}}</a>
    </div>
</template>
<script>
export default {
    data () {
        return {
            message: "我是about组件"
        }
    }
}
</script>