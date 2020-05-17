<template>
  <nav class="nav navbar-inverse navbar-fixed-top">
    <div class="self-container" style="padding-top: 30px">
      <div class="navbar-header">
        <!--在移动端的时候导航条折叠起来，三横的样式出现，点击该样式可以显示或隐藏导航条上的内容-->
        <button class="navbar-toggle" data-toggle="collapse" data-target="#menus">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand"><img style="height: 28px" src="../assets/picture/logol.png"></a>
      </div>
      <div id="menus" class="collapse navbar-collapse">
        <ul class="nav navbar-nav" id="menu">
          <li role="presentation" data-menuanchor="page1" class="active"><a href="#page1">{{$t('NavMenu.about')}}</a></li>
          <li role="presentation" data-menuanchor="page2"><a href="#page2">{{$t('NavMenu.collection')}}</a></li>
          <li role="presentation" data-menuanchor="page3"><a href="#page3">{{$t('NavMenu.shop')}}</a></li>
          <li role="presentation" data-menuanchor="page4"><a href="#page3">{{$t('NavMenu.service')}}</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li @click="changeLanguagetoENUS"><a href="#" >EN</a></li>
              <li @click="changeLanguagetoZHCN"><a href="#" >ZH</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script>
    export default {
        name: "NavMenu",
        methods:{
          changeLanguagetoZHCN(){
            this.$i18n.locale = 'zh-cn'
          },
          changeLanguagetoENUS(){
            this.$i18n.locale = 'en-us'
          }
        }
    }
</script>


<style scoped>
  @media (max-width: 767px){
    .navbar-inverse .navbar-nav .open .dropdown-menu>li>a{
      color: #f1f1f1;
    }
    a{
      font-size: 20px;
      color: #5555;
      font-weight: bolder;
    }
    a:link{
      color: #555;
    }
    a:hover {
      color: #95BECA;
      opacity:0.3;
    }
    nav{
      background-color:rgba(0,0,0,0);
      height: 50px;
    }
    .navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover{
      background-color:rgba(0,0,0,0);
      color: #FFFFFF;
    }
    #menu{
      float: right;
    }
    .navbar-inverse .navbar-toggle {
      border-color: #FFFFFF;
      border-width: 1.5px;
    }
    .navbar-inverse .navbar-collapse, .navbar-inverse {
      border: 0px;
    }
    .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
      background-color:rgba(0,0,0,0.2);
    }
    .navbar-inverse .navbar-toggle .icon-bar {
      background-color: #FFFFFF;
    }
    .icon-bar {
      display: block;
      width: 15px;
      height: 2px;
    }
    ul{
      margin-right: 5px;
    }
    .navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {
      background-color:rgba(0,0,0,0);
    }
    .navbar-inverse .navbar-nav>li>a {
      color: #F5F5F5;
    }
    #menus{
      padding-bottom: 10px;
      border-bottom:1.5px solid #FFFFFF;
    }
    .self-container{
      width: 90%;
      margin: auto;
    }
  }
  @media (min-width: 768px){
    a{
      font-size: 20px;
      color: #5555;
      font-weight: bolder;
    }
    a:link{
      color: #555;
    }
    a:hover {
      color: #95BECA;
      opacity:0.3;
    }
    nav{
      background-color:rgba(0,0,0,0);
      height: 50px;
    }
    .navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover{
      background-color:rgba(0,0,0,0);
      color: #000000;
    }
    #menu{
      float: right;
    }
    .navbar-inverse .navbar-toggle {
      border-color: #000000;
      border-width: 1.5px;
    }
    .navbar-inverse .navbar-collapse, .navbar-inverse {
      border: 0px;
    }
    .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
      background-color:rgba(0,0,0,0.2);
    }
    .navbar-inverse .navbar-toggle .icon-bar {
      background-color: #000000;
    }
    .icon-bar {
      display: block;
      width: 15px;
      height: 2px;
    }
    ul{
      margin-right: 5px;
    }
    .navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {
      background-color:rgba(0,0,0,0);
    }
    .navbar-inverse .navbar-nav>li>a {
      color: #333;
    }
    #menus{
      padding-bottom: 10px;
      border-bottom:1.5px solid #000000;
    }
    .self-container{
      width: 90%;
      margin: auto;
    }
  }
</style>
