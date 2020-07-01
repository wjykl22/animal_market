<template>
  <div>
    <div class="big-dog">
        <img class="visible-lg animal" alt="无法显示图片" src="../../assets/picture/about/big_dog.png">
      <img class="visible-md animal" alt="无法显示图片" src="../../assets/picture/about/big_dog_1200.jpg">
      <img class="visible-sm animal" alt="无法显示图片" src="../../assets/picture/about/big_dog_1200.jpg">
      <img class="visible-xs animal" alt="无法显示图片" src="../../assets/picture/about/big_dog_1200.jpg">
    </div>
    <div class="frewhite">
      <img alt="无法显示图片" class="animal" src="../../assets/picture/about/frewhite.png"/>
    </div>
    <div class="words-1">
      <img class="img-words-1 animal" alt="无法显示图片" src="../../assets/picture/about/words1.png">
    </div>
    <div class="words-2">
      <img alt="无法显示图片" class="animal" src="../../assets/picture/about/words2.png">
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><img class="animal cat-margin dog-right" alt="无法显示图片"
                                                            src="../../assets/picture/about/two_dog_2.png"></div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><img class="animal dog-left" alt="无法显示图片" src="../../assets/picture/about/two_dog_2.png"></div>
    </div>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10" style="text-align: center"><img class="animal"
        src="../../assets/picture/about/diagram.png"
        alt="无法显示图片"></div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
    </div>
    <PictureGroup/>
    <div class="frewhite">
      <img class="animal" src="../../assets/picture/about/frewhite_lucency.png" alt="无法显示图片">
    </div>
    <div class="foot-reset"></div>
  </div>
</template>

<script>
  import PictureGroup from "./PictureGroup";
  import Footer from "../Footer";

  export default {
    name: "Picture",
    components: {Footer, PictureGroup}
  }
</script>

<style scoped>
  .big-dog {
    margin-top: 100px;
  }
  .frewhite {
    position: relative;
    margin-top: 80px;
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
  }

  .words-1 {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
  }

  .words-2 {
    text-align: center;
  }

  .diagram {
    margin-bottom: 80px;
    position: relative;
    width: 880px;
    left: 50%;
    transform: translateX(-50%);
  }

  .foot-reset {
    position: relative;
    margin-bottom: 500px;
  }

  .animal {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .dog-right {
    position: relative;
    float: right;
  }

  .dog-left {
    position: relative;
    float: left;
  }

  @media (max-width: 767px) {
    .big-dog {
      margin-top: 70px;
    }
  }

</style>
