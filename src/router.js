import Home from "./components/Home"
import About from "./components/About"
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
//定义路由
//每个路由应该映射一个组件
const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
      },
    {
        path: '/about',
        name:"about",
        component:About
    }
];

//创建router实例，然后出入'routes'配置
const router = new VueRouter({
    routes:routes
});

export default router;