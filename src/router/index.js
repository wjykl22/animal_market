import Vue from 'vue'
//需要将路由的包给导入
import Router from 'vue-router'
import App from "../App";
import Footer from '../components/Footer'

// 1.通过该函数来导入插件或者.vue组件
Vue.use(Router)

const routers = [
  //创建路由组件并配置映射关系
  {
    path:'/foot',
    component: Footer
  }
  //重定向
  /*{
    path: '',
    redirect:''
  }*/
]

//2.创建路由对象
const router = new Router({
  //配置组件和路由的映射关系
  routers,
  mode: 'history'
})

export default router
