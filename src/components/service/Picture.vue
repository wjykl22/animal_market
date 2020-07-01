<template>
    <div>
      <img class="img-scale div-margin" src="../../assets/picture/service/dog.png" alt="图片无法显示">
      <div class="img-float top-1">
        <span class="customer">CUSTOMER CENTER</span>
      </div>
      <div class="img-float top-2">
        <span class="mail">frewhite_service@hostmail.com</span>
      </div>
      <div class="img-float top-3">
        <span class="time">Weekdays 9:00-18:00/Lunch 13:00-14:30</span>
      </div>
      <div class="img-float top-4">
        <span class="time">Close on weeks and holidays</span>
      </div>
<!--      <img class="img-float img-scale top-1" src="../../assets/picture/service/words_top1.png" alt="图片无法显示">-->
<!--      <img alt="图片无法显示" class="img-float img-scale top-2" src="../../assets/picture/service/words_top2.png">-->

      <div class="row question">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <img alt="无法显示图片" class="support div-margin-bottom" src="../../assets/picture/service/question.png">
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        <div>
          <div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
            <img class="support" alt="无法显示图片" src="../../assets/picture/service/div1.png">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
          <img class="support" alt="无法显示图片" src="../../assets/picture/service/div2.png">
        </div>

        <div class="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
      </div>

      <div class="row question">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span class="review">
              Review
            </span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <img class="support img-right" alt="无法显示图片" src="../../assets/picture/service/icon1.png">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>

      <div class="row line-margin">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8" style="overflow:hidden">
          <img alt="无法显示图片" src="../../assets/picture/service/line1.png">
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
      <div class="row line-margin">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <span class="text2">
              fabulous design
            </span>
            <span class="text2">
              Aesthetic perfection
            </span>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <img class="support img-right" alt="无法显示图片" src="../../assets/picture/service/icon2.png">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
      <div class="row line-margin">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8" style="overflow:hidden">
          <img alt="无法显示图片" src="../../assets/picture/service/line1.png">
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
      <div class="row line-margin">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <span class="text3">
              Incredible ingredient that feels so amazing
            </span>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <img class="support img-right" alt="无法显示图片" src="../../assets/picture/service/icon2.png">
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
      <div class="row line-margin">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8" style="overflow:hidden">
          <img alt="无法显示图片" src="../../assets/picture/service/line1.png">
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
      <div class="foot-reset"></div>
    </div>
</template>

<script>
    export default {
        name: "Picture"
    }
</script>

<style scoped>
  .div-margin-bottom{
    margin-bottom: 2rem;
  }
.line-margin{
  margin-top: 10px;
  margin-bottom: 10px;
}
  .foot-reset {
    position: relative;
    margin-bottom: 300px;
  }
  .img-right {
    float: right;
    margin-right: 20px;
  }
  .support {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
  .image-icon {
    position:absolute;
    text-align: center;
    top: 20%;
    left:50%;
    transform: translateX(-50%);
    z-index:1;
  }
  .question {
    margin-top: 4rem;
  }
  .div-margin{
    margin-top: 100px;
  }

  .img-scale {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .img-float {
    position:absolute;
    text-align: center;
    left:50%;
    transform: translateX(-50%);
    z-index:1;
  }

  @media (min-width: 1200px){
    .time {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 2rem;
    }
    .mail {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 2rem;
    }
    .customer{
      font-size: 4rem;
      font-weight: bolder;
      color: #f3f3f3;
    }
    .review {
      font-size: 2rem;
      color: #67818A;
      font-weight: bolder;
    }
    .text2 {
      font-size: 1.5rem;
      color: #67818A;
      font-weight: bold;
    }
    .text3 {
      font-size: 1.5rem;
      color: #67818A;
    }
    .top-1 {
      top:50rem;
    }
    .top-2 {
      top:60rem;
    }
    .top-3 {
      top:66rem;
    }
    .top-4 {
      top:70rem;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .time {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 2rem;
    }
    .mail {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 2rem;
    }
    .customer{
      font-size: 4rem;
      font-weight: bolder;
      color: #f3f3f3;
    }
    .top-1 {
      top:35rem;
    }
    .top-2 {
      top:45rem;
    }
    .top-3 {
      top:40rem;
    }
    .top-4 {
      top:50rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .time {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 2rem;
    }
    .mail {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 2rem;
    }
    .customer{
      font-size: 4rem;
      font-weight: bolder;
      color: #f3f3f3;
    }
    .top-1 {
      top:32rem;
    }
    .top-2 {
      top:38rem;
    }
    .top-3 {
      top:42rem;
    }
    .top-4 {
      top:46rem;
    }
  }
  @media (max-width: 767px){
    .time {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 1.5rem;
    }
    .mail {
      font-weight: initial;
      color: #f1f1f1;
      font-size: 1rem;
    }
    .customer{
      font-size: 2rem;
      font-weight: bolder;
      color: #f3f3f3;
    }
    .top-1 {
      width: 100%;
      top:27rem;
    }
    .top-2 {
      top:30rem;
    }
    .top-3 {
      width: 100%;
      top:32rem;
    }
    .top-4 {
      width: 100%;
      top:34rem;
    }
  }
</style>
