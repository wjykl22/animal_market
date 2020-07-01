<template>
  <div>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 cat-div">
        <img class="animal" src="../../assets/picture/about/cat1.png" alt="无法显示图片">
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div><img class="animal dog-right" src="../../assets/picture/about/dog1.png" alt="无法显示图片"></div>
        <div><img class="animal dog-right" src="../../assets/picture/about/dog2.png" alt="无法显示图片"></div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <img class="animal" src="../../assets/picture/about/dog3.png" alt="无法显示图片">
      </div>
    </div>
    <div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PictureGroup"
    }
</script>

<style scoped>
  .cat-div {
    text-align: center;
  }
  .animal {
    max-width:100%;
    max-height:100%;
    width: auto;
    height: auto;
  }
  .dog-right {
    position: relative;
    float: right;
  }

</style>
