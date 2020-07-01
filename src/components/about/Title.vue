<template>
  <div>
    <div class="menu-rest"></div>
    <div class="title">
      <img @click="goAbout" class="img-scale" src="../../assets/picture/about/about.png" alt="无法显示图片">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Title",
    methods: {
      goAbout(){
        this.$router.push({path: '/about'})
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
      width: 20%;
      height: auto;
    }
    .menu-rest {
      height: 150px;
    }
  }

</style>
