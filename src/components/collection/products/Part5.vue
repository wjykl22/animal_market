<template>
  <img @click="goService4" class="img-scale" src="../../../assets/picture/collection/product1/collection2_06.png">
</template>

<script>
    export default {
        name: "Part5",
      methods: {
        goService4(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.80.7fb93ea4zw5P7v&id=619826212563&ns=1&abbucket=18#detail'
        }
      }
    }
</script>

<style scoped>
  .img-scale {
    cursor: pointer;
  }

</style>
