import Home from "./components/Home"
import About from "./components/About"
import User from "./components/User"
import phonpe from "./components/phone"
import tablet from "./components/tablet"
import computer from "./components/computer"
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
//定义路由
//每个路由应该映射一个组件
const routes = [
    {
        path: "/home",
        name: "home",
        // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
        component: Home,
        children:[
            {
                path:'phone',
                component:phonpe
            },
            {
                path:'tablet',
                component:tablet
            },
            {
                path:'computer',
                component:computer
            },
            {
                // 当进入到home时，下面的组件显示
                path:'',
                component:phonpe
            },
        ]
      },
    {
        path: '/about',
        name:"about",
        component:About
    },
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: "/user/:id",
        name:'user',
        component: User
    }
];

//创建router实例，然后出入'routes'配置
const router = new VueRouter({
    routes:routes
});

export default router;