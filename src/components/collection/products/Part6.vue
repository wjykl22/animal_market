<template>
  <img @click="goService5" class="img-scale" src="../../../assets/picture/collection/product1/collection2_07.png">
</template>

<script>
    export default {
        name: "Part6",
      methods: {
        goService5(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.69.7fb93ea4zw5P7v&id=619819788038&ns=1&abbucket=18#detail'
        }
      }
    }
</script>

<style scoped>
  .img-scale{
    cursor: pointer;
  }

</style>
