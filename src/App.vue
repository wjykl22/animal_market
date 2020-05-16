<template>
  <div id="app">

    <!--<router-link to="/home"></router-link>用于配置路由跳转功能-->
    <!--占位<router-view></router-view>-->
    <!--以下是正式代码-->
    <Fullpage/>
  </div>
</template>

<script>
  import Fullpage from "./components/Fullpage";
  export default {
    name: 'app',
    components: {
      Fullpage
    }
  }
</script>

<style>


</style>
