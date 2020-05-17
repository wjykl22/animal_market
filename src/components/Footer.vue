<template>
  <!-- Footer -->
  <div>
    <footer class="navbar-fixed-bottom hidden-xs" style="background-color:rgba(0,0,0,0.5);">
      <div class="row foot-box">
        <div class="col-xs-6 foot-left">
          <div>
            <span style="color: #B1B9BC;margin: 5px">{{$t('Footer.customer_center')}}</span>
          </div>
          <div id="div-line"></div>
          <div id="div-email">frewhite_service@hotmail.com</div>
          <div id="div-time">{{$t('Footer.weekdays')}} 9:00-18:00</div>
        </div>
        <div class="col-xs-6 foot-right text-right">
          <div id="div-icon">
            <a href="https://www.instagram.com/frewhite_official/">
              <img src="../assets/picture/ins.png">
            </a>
            <img src="../assets/picture/facebook.png">
            <img src="../assets/picture/youtube.png">
          </div>
          <div>
            <ul>
              <li>{{copyright}}</li>
            </ul>

          </div>
        </div>
      </div>
    </footer>

    <footer class="navbar-fixed-bottom visible-xs" style="background-color:rgba(0,0,0,0.5);">
      <div class="row foot-box">
        <div class="row">
          <div class="col-md-6">
            <div>
              <span style="color: #B1B9BC;margin: 5px">{{$t('Footer.customer_center')}}</span>
            </div>
            <div id="div-line-sm"></div>
            <div id="div-email-sm">frewhite_service@hotmail.com</div>
            <div id="div-time-sm">{{$t('Footer.weekdays')}} 9:00-18:00</div>
          </div>
          <div class="col-md-6">
            <div id="div-icon-sm">
              <a href="https://www.instagram.com/frewhite_official/">
                <img src="../assets/picture/ins.png">
              </a>
              <img src="../assets/picture/facebook.png">
              <img src="../assets/picture/youtube.png">
            </div>
            <div>
              <ul>
                <li>C 2019 FREWHITE all rights reserved</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- Footer -->
</template>

<script>
    export default {
        name: "Footer",
      data(){
          return{
            copyright:"© 2019 FREWHITE all rights reserved"
          }
      }

    }
</script>

<style scoped>
  @media (min-width: 768px){
    ul{
      list-style: none;
    }
    ul li{
      display: inline-block;
      font-size: 12px;
      color: #FFFFFF;
    }
    .foot-box{
      margin-right: 15px;
      margin-left: 15px;
    }
    .foot-left{
      margin-top: 10px;
      margin-bottom: 1px;
    }
    .foot-right{
      margin-top: 10px;
      margin-bottom: 1px;

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
  }
  @media (max-width: 767px){
    ul{
      list-style: none;
    }
    ul li{
      display: inline-block;
      font-size: 12px;
      color: #FFFFFF;
    }
    .foot-box{
      margin-right: 15px;
      margin-left: 15px;

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
      text-align:center;
    }
    #div-line-sm{
      border: 1px solid #B7BEC1;
      width:200px;
      height:0;
      background-color: #B7BEC1;
      text-align:center;
      margin: auto;
    }
    #div-email-sm{
      color: #FFFFFF;
      font-size: larger;
      margin: 5px
    }
    #div-time-sm{
      color: #B7BEC1; font-size: small;
      margin: 5px
    }
    #div-icon-sm{
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
  }


</style>
