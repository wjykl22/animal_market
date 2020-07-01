<template>
    <div class="div-center">
      <div>
        <img class="background" alt="图片无法显示" src="../../assets/picture/collection/products.png">
      </div>
      <router-link to="/collection/products">
        <div class="div-float up words">
          <img class="words" alt="图片无法显示" src="../../assets/picture/collection/cn_words.png">
          <img class="icon words" alt="无法显示图片" src="../../assets/picture/collection/icon.png">
        </div>
        <div class="div-float words down">
          <img class="words" alt="图片无法显示" src="../../assets/picture/collection/en_words.png">
        </div>
      </router-link>
      <div>
        <img class="bottom-image" alt="图片无法显示" src="../../assets/picture/collection/products2.png">
      </div>
      <div class="foot-reset"/>
    </div>
</template>

<script>
    export default {
        name: "Product1"
    }
</script>

<style scoped>
  .bottom-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .background {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 40px auto;
  }
  .div-float {
    position:absolute;
    text-align: center;
    width: 100%;
    left:50%;
    transform: translateX(-50%);
    z-index:1;
  }
  .div-center {
    text-align: center;
  }
  .up {
    top:48%;
  }
  .down {
    top:55%;
  }
  .icon {
    margin-left: 15px;
  }

  .words {

    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
  }
  .foot-reset {
    position: relative;
    margin-bottom: 150px;
  }

  @media (max-width: 767px){
    .icon {
      display: none;
    }
  }


</style>
