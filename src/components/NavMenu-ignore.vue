<template>
  <div class="container-fluid">
    <div id="define-header" class="navbar-header">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="../assets/picture/test_icon.png">
          </a>
        </div>
      </div>
      <ul class="nav nav-pills" id="menu">
        <li role="presentation" data-menuanchor="page1" class="active"><a href="#page1">About</a></li>
        <li role="presentation" data-menuanchor="page2"><a href="#page2">Collection</a></li>
        <li role="presentation" data-menuanchor="page3"><a href="#page3">Shop</a></li>
        <li role="presentation" data-menuanchor="page3"><a href="#page3">Service</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">EN <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "NavMenu-ignore"
    }
</script>

<style scoped>
    a{
      font-size: 20px;
      color: #64737A;
      font-weight: bolder;
    }
    a:link{
      color: #64737A;
    }
    a:hover {
      color: #95BECA;
      opacity:0.3;
    }
    .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
      background-color:rgba(0,0,0,0);
      color: #000000;
    }
    #menu {
      position: fixed;
      top: 20px;
      right: 100px;
      z-index: 70;
      -webkit-font-smoothing: antialiased;
      letter-spacing: 1px;
      font-size: 1.1em
    }
    li{
      margin-right: 50px;
    }
    #define-header{
      background-color:rgba(0,0,0,0);
    }

    #logal{
      left: 0px;
    }
    .navbar-brand {
      padding-top: 8px;
      left: 10px;
    }
    .container-fluid{
      overflow: hidden;
      z-index: 9999;
      position: fixed;
      padding:5px;
      left: 80px;
      top: 10px;
    }
</style>
