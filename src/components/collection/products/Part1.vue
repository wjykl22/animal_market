<template>
<!--    <div>-->
<!--      <div class="row">-->
<!--        <div class="col-rm-padding col-lg-6 col-md-6 col-sm-6 col-xs-6" style="overflow:hidden">-->
<!--          <img alt="无法显示图片" class="img-scale" src="../../../assets/picture/collection/product1/side.png">-->
<!--        </div>-->
<!--        <div class="col-rm-padding col-lg-6 col-md-6 col-sm-6 col-xs-6">-->
<!--          <img alt="无法显示图片" class="img-scale" src="../../../assets/picture/collection/product1/product1.png">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  <!-- 上方手写 -->

  <div>
    <img @click="goService" alt="无法显示图片" style="cursor: pointer" class="img-scale img-margin" src="../../../assets/picture/collection/product1/collection2_02.png">
  </div>
</template>
<script>
    export default {
        name: "Part1",
      methods: {
        goService(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.142.7fb93ea4zw5P7v&id=621796865551&ns=1&abbucket=18#detail'
        }
      }
    }
</script>

<style scoped>
  .col-rm-padding {
    padding: 0;
  }
  .foot-reset {
    position: relative;
    margin-bottom: 300px;
  }
  .img-margin {
    margin-top: 15rem;
  }

</style>
