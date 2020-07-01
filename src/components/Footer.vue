<template>
  <!-- Footer -->
  <div>
    <footer class="navbar-fixed-bottom hidden-xs">
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
          <div>
            <ul>
              <li>浙ICP备18041831号-1</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <footer class="navbar-fixed-bottom visible-xs">
      <div class="row foot-box">
        <div class="row">
          <div class="col-md-6">
            <div class="div-center">
              <span style="color: #B1B9BC;margin: 5px">{{$t('Footer.customer_center')}}</span>
            </div>
            <div id="div-line-sm"></div>
            <div id="div-email-sm" style="text-align: center">frewhite_service@hotmail.com</div>
            <div id="div-time-sm" style="text-align: center">{{$t('Footer.weekdays')}} 9:00-18:00</div>
          </div>
          <div class="col-md-6">
            <div id="div-icon-sm" style="text-align: center">
              <a href="https://www.instagram.com/frewhite_official/">
                <img src="../assets/picture/ins.png">
              </a>
              <img src="../assets/picture/facebook.png">
              <img src="../assets/picture/youtube.png">
            </div>
            <div style="text-align: center">
              <ul>
                <li>C 2019 FREWHITE all rights reserved</li>
              </ul>
            </div>
            <div style="text-align: center">
              <ul>
                <li>浙ICP备18041831号-1</li>
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
  footer {
    /* 加载背景图片 */
    background-image: url(../assets/picture/foot.png);
    opacity:0.8;
  }
  @media (min-width: 768px){
    ul{
      list-style: none;
      margin-bottom: 5px;
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
      margin: 5px;
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
    .div-center {
      text-align: center;
    }
    ul{
      list-style: none;
      margin-bottom: 5px;
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
      margin: 5px;
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
