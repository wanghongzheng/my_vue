<template>
    <div>
        <router-link  to="/home/phone" class="routerLink">手机</router-link>
        <router-link to="/home/tablet" class="routerLink">平板</router-link>
        <router-link to="/home/computer" class="routerLink">电脑</router-link>
        <router-view></router-view>
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
<style scoped>
.routerLink{
	margin:10px;
}
</style>