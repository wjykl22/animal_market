import Vue from 'vue'
//需要将路由的包给导入
import Router from 'vue-router'
import App from "../App";
import Footer from '../components/Footer'
import About from "../components/about/About";
import Collection from "../components/collection/Collection";
import Fullpage from "../components/Fullpage";
import Products from "../components/collection/products/Products";
import Product1 from "../components/collection/Product1";
import Service from "../components/service/Service";

// 1.通过该函数来导入插件或者.vue组件
Vue.use(Router)

const routes = [
  //创建路由组件并配置映射关系
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Fullpage',
    component: Fullpage

  },
  {
    path:'/about',
    name: 'abouts',
    components: {
      default: About
    }
  },
  {
    path: '/collection',
    component: Collection,
    children: [
      {
        path: '/',
        name: 'products1',
        component: Product1
      },
      {
        path: 'products',
        name: 'products',
        component: Products
      }
    ]
  },

  {
    path: '/service',
    name: 'service',
    component: Service
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
  routes: routes,
  mode: 'history'
})

export default router
