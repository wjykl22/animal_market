<template>
  <div>
    <img @click="goService6" class="img-scale" src="../../../assets/picture/collection/product1/collection2_08.png">
    <img @click="goService7" class="img-scale" src="../../../assets/picture/collection/product1/collection2_09.png">
  </div>
</template>

<script>
    export default {
        name: "Part7",
      methods: {
        goService6(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.39.7fb93ea4zw5P7v&id=624883658275&ns=1&abbucket=18#detail'
        },
        goService7(){
          window.location.href = 'https://item.taobao.com/item.htm?spm=a230r.1.14.91.7fb93ea4zw5P7v&id=625168739919&ns=1&abbucket=18#detail\n'
        }
      }
    }
</script>

<style scoped>
.img-scale{
  cursor: pointer;
}
</style>
