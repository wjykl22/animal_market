<template>
  <nav class="nav navbar-inverse navbar-fixed-top">
    <Header/>
    <div class="self-container" style="padding-top: 10px">
      <div class="navbar-header">
        <!--在移动端的时候导航条折叠起来，三横的样式出现，点击该样式可以显示或隐藏导航条上的内容-->
        <button class="navbar-toggle" data-toggle="collapse" data-target="#menus" aria-expanded="false"
                aria-controls="navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/home" class="navbar-brand"><img style="height: 28px" src="../assets/picture/logol.png">
        </router-link>
      </div>
      <div id="menus" class="collapse navbar-collapse">
        <ul class="nav navbar-nav" id="menu">
          <li @click="clickMenueItem" role="presentation" data-menuanchor="page1" class="active">
            <router-link to="/about"><img class="button" src="../assets/picture/navmenue/about.png" alt="无法显示"/>
            </router-link>
          </li>
          <li @click="clickMenueItem" role="presentation" data-menuanchor="page2">
            <router-link to="/collection"><img class="button" src="../assets/picture/navmenue/collection.png"
                                               alt="无法显示图片"></router-link>
          </li>
          <li @click="clickMenueItem" role="presentation" data-menuanchor="page3">
            <router-link to="/service"><img class="button" src="../assets/picture/navmenue/service.png"></router-link>
          </li>
          <!--          <li role="presentation" data-menuanchor="page4"><a href="#page3">{{$t('NavMenu.service')}}</a></li>-->
          <!--          <li class="dropdown">-->
          <!--            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN <span class="caret"></span></a>-->
          <!--            <ul class="dropdown-menu">-->
          <!--              <li @click="changeLanguagetoENUS"><a href="#" >EN</a></li>-->
          <!--              <li @click="changeLanguagetoZHCN"><a href="#" >ZH</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->
          <div class="icon-li">
            <li role="presentation"><a><img class="button" src="../assets/picture/icon3.png"></a>
            </li>
            <li role="presentation"><a><img class="button" src="../assets/picture/icon2.png"></a>
            </li>
            <li role="presentation"><a><img class="button" src="../assets/picture/icon1.png"></a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script>
  import Header from "./Header";

  export default {
    name: "NavMenu",
    components: {Header},
    methods: {
      clickMenueItem() {
        var a = document.querySelector(".navbar-toggle");
        $(".navbar-nav li a").on("click",function () {
          a.click();
        });
      },
    }
  };


</script>


<style scoped>
  .self-container{
    background-color: rgba(51, 54, 56, 0.1);
  }
  .icon-li{
    margin-top: 0.8rem;
  }

  @media (max-width: 767px) {
    .navbar-brand {
      margin-left: 1rem;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
      color: #f1f1f1;
    }

    a {
      font-size: 20px;
      color: #5555;
      font-weight: bolder;
    }

    a:link {
      color: #555;
    }

    a:hover {
      color: #95BECA;
      opacity: 0.3;
    }

    nav {
      background-color: rgba(0, 0, 0, 0);
      height: 50px;
    }

    .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .active > a:hover {
      background-color: rgba(0, 0, 0, 0);
      color: #FFFFFF;
    }


    .navbar-inverse .navbar-toggle {
      border-color: rgba(0,0,0,0.6);
      border-width: 1.5px;
    }

    .navbar-inverse .navbar-collapse, .navbar-inverse {
      border: 0px;
    }

    .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .navbar-inverse .navbar-toggle .icon-bar {
      background-color: rgba(0,0,0,0.6);
    }

    .icon-bar {
      display: block;
      width: 15px;
      height: 2px;
    }

    ul {
      margin-right: 5px;
    }

    .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus, .navbar-inverse .navbar-nav > .open > a:hover {
      background-color: rgba(0, 0, 0, 0);
    }

    .navbar-inverse .navbar-nav > li > a {
      color: #F5F5F5;
    }

    #menus {
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1.5px solid #FFFFFF;
      background-color: rgba(255, 255, 255, 0.6);
    }

    .self-container {
      margin: auto;
    }
  }

  @media (min-width: 1200px) {
    .navbar-brand {
      margin-left: 5rem;
    }
    .icon-li {
      position: absolute;
      right: 2rem;
      margin-left: 10px;
    }

    .nav > li > a {
      left: 20%;
      transform: translateX(-80%);
    }

    .navbar-nav {
      float: none;
    }

    li {
      margin-right: 45px;
      display: inline-block;
    }

    a {
      font-size: 20px;
      color: #5555;
      font-weight: bolder;
    }

    a:link {
      color: #555;
    }

    a:hover {
      color: #95BECA;
      opacity: 0.3;
    }

    nav {
      background-color: rgba(0, 0, 0, 0);
      height: 40px;
    }

    .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .active > a:hover {
      background-color: rgba(0, 0, 0, 0);
      color: #000000;
    }

    #menu {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      list-style-type: none;
      margin: 0 auto;

    }

    .navbar-inverse .navbar-toggle {
      border-color: #000000;
      border-width: 1.5px;
    }

    .navbar-inverse .navbar-collapse, .navbar-inverse {
      border: 0px;
    }

    .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .navbar-inverse .navbar-toggle .icon-bar {
      background-color: #000000;
    }

    .icon-bar {
      display: block;
      width: 15px;
      height: 2px;
    }

    ul {
      margin-right: 5px;
    }

    .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus, .navbar-inverse .navbar-nav > .open > a:hover {
      background-color: rgba(0, 0, 0, 0);
    }

    .navbar-inverse .navbar-nav > li > a {
      color: #333;
    }

    .self-container {
      margin: auto;
    }
  }
  @media (min-width: 767px) and (max-width: 1199px){
    .navbar-brand {
      margin-left: 2rem;
    }
    #menu {
      text-align: center;
    }
    .icon-li {
      position: absolute;
      right: 0;
      margin-left: 1rem;
    }
    .navbar-nav {
      float: none;
    }
    .nav > li > a {
      left: 20%;
      transform: translateX(-80%);
    }

    li {
      margin-right: 2rem;
      display: inline-block;
    }

    a {
      font-size: 20px;
      color: #5555;
      font-weight: bolder;
    }

    a:link {
      color: #555;
    }

    a:hover {
      color: #95BECA;
      opacity: 0.3;
    }

    nav {
      background-color: rgba(0, 0, 0, 0);
      height: 40px;
    }

    .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .active > a:hover {
      background-color: rgba(0, 0, 0, 0);
      color: #000000;
    }

    #menu {

      display: flex;
      flex-direction: row;
      justify-content: center;
      list-style-type: none;

    }

    .navbar-inverse .navbar-toggle {
      border-color: #000000;
      border-width: 1.5px;
    }

    .navbar-inverse .navbar-collapse, .navbar-inverse {
      border: 0px;
    }

    .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .navbar-inverse .navbar-toggle .icon-bar {
      background-color: #000000;
    }

    .icon-bar {
      display: block;
      width: 15px;
      height: 2px;
    }

    ul {
      margin-right: 5px;
    }

    .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus, .navbar-inverse .navbar-nav > .open > a:hover {
      background-color: rgba(0, 0, 0, 0);
    }

    .navbar-inverse .navbar-nav > li > a {
      color: #333;
    }

    .self-container {
      margin: auto;
    }
  }
</style>
