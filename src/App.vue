<template>
  <div id="app">
    <NavMenu/>

    <!--<router-link to="/home"></router-link>用于配置路由跳转功能-->
    <!--占位<router-view></router-view>-->
    <!--以下是正式代码-->
<!--    <Fullpage/>-->
    <router-view></router-view>
<!--    <router-view name="abouts"></router-view>-->
  </div>
</template>

<script>
  import Fullpage from "./components/Fullpage";
  import NavMenu from "./components/NavMenu";
  import About from "./components/about/About";
  export default {
    name: 'app',
    components: {
      About,
      NavMenu,
      Fullpage
    },
    methods: {
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop <= 200){
          $(".self-container").css("background-color", "rgba(51, 54, 56, 0.1)")
        }else {
          $(".self-container").css("background-color", "rgba(51, 54, 56, 0.0)")
        }
      }
    },
    mounted() {
      //事件监听滚动条
      window.addEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style>


</style>
