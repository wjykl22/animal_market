<template>
    <div>
      <img class="header_bar" src="../assets/picture/header/header_bar.png" alt="图片无法显示">
      <img class="header_word" src="../assets/picture/header/frewhite.png" alt="图片无法显示"/>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .header_word {
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    top:10px;
    z-index:1;
  }
  .header_bar {
    opacity:0.8;
  }

  .img-scale {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

</style>
