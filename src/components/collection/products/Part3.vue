<template>
<!--  <div>-->
<!--    <img class="img-float-1" alt="该图无法显示" src="../../../assets/picture/collection/product1/back1.png">-->

<!--    <div class="div-float-2">-->
<!--      <div class="row">-->
<!--        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>-->
<!--        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">-->
<!--          <img class="" alt="该图无法显示" src="../../../assets/picture/collection/product1/part3_1.png">-->
<!--        </div>-->
<!--        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">-->
<!--          <img class="" alt="该图无法显示" src="../../../assets/picture/collection/product1/part3_2.png">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div>
    <img @click="goService2" class="img-scale" src="../../../assets/picture/collection/product1/collection2_04.png">
  </div>
</template>

<script>
    export default {
        name: "Part3",
      methods: {
        goService2(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.142.7fb93ea4zw5P7v&id=621796865551&ns=1&abbucket=18#detail'
        }
      }
    }
</script>

<style scoped>
  .img-scale{
    cursor: pointer;
  }



</style>
