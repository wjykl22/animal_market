<template>
  <!-- Footer -->
  <footer class="navbar-fixed-bottom">
    <div class="row foot-box">
      <div class="col-xs-6 foot-left">
        <div>
          <span style="color: #B1B9BC;margin: 5px">CUSTOMER CENTER</span>
        </div>
        <div id="div-line"></div>
        <div id="div-email">frewhite_service@hotmail.com</div>
        <div id="div-time">Weekdays 9:00-18:00</div>
      </div>
      <div class="col-xs-6 foot-right text-right">
        <div id="div-icon">
          <img src="../assets/picture/test_icon.png">
          <img src="../assets/picture/test_icon.png">
          <img src="../assets/picture/test_icon.png">
        </div>
        <div>
          <ul>
            <li>ABOUT</li>
            <span class="list"></span>
            <li>TERMS OF USER</li>
            <span class="list"></span>
            <li>HELP</li>
            <span class="list"></span>
            <li>PRIVACY PLOCY</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer -->
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  ul li{
    display: inline-block;
    font-size: 12px;
    color: #FFFFFF;
  }
  .foot-box{
    margin: 15px;

  }
  .foot-left{
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .foot-right{
    margin-top: 30px;
    margin-bottom: 10px;

  }
  footer{
    background-color: #64737A;
  }
  #div-line{
    border: 1px solid #B7BEC1;
    width:200px;
    height:0;
    background-color: #B7BEC1;
    margin: 5px
  }
  #div-email{
    color: #FFFFFF;
    font-size: larger;
    margin: 5px
  }
  #div-time{
    color: #B7BEC1; font-size: small;
    margin: 5px
  }
  #div-icon{
    margin: 10px;
  }
  img{
    margin-left: 10px;

  }
  .list{
    padding:12px 3px 0px 3px;
    margin-left: 6px;
    border-left: 1px solid #FFFFFF;
    font-size: 0;
  }
</style>
