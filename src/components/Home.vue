<template>
    <div id="homeComponent">
        <h1>欢迎，使用</h1>
        <a> {{message}}</a>
    </div>
</template>
<script>
export default {
    data () {
        return {
            message: "我是home组件"
        }
    }
}
</script>