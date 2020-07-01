<template>
  <div>
    <div class="menu-rest"></div>
    <div class="title">
      <img @click="goService1" class="img-scale" src="../../assets/picture/collection/collection.png" alt="无法显示图片">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Title",
    methods: {
      goService1(){
        this.$router.push({path: '/collection'})
      }
    }
  }
</script>

<style scoped>
  .img-scale{
    cursor: pointer;
  }
  .menu-rest {
    height: 180px;
  }
  img {
    left: 20%;
    position:absolute;
  }
  @media (max-width: 767px) {
    .img-scale{
      width: 30%;
      height: auto;
    }
    .menu-rest {
      height: 150px;
    }
  }

</style>
