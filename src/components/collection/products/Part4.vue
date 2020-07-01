<template>
  <img @click="goService3" class="img-scale" src="../../../assets/picture/collection/product1/collection2_05.png">
</template>

<script>
    export default {
        name: "Part4",
      methods: {
        goService3(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.28.7fb93ea4zw5P7v&id=620649907437&ns=1&abbucket=18#detail'
        }
      }
    }
</script>

<style scoped>
  .img-scale{
    cursor: pointer;
  }

</style>
