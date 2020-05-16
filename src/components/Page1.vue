<template>
<div class="page">1</div>
</template>

<script>
    export default {
        name: "Page1"
    }
</script>

<style scoped>
  @media (min-width: 1200px){
    .page{
      width: 30px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position:fixed;
      right: 85%;
      top: 70%;
      border-top:2px solid #000000;
      font-size: 25px;
      font-weight: bolder;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .page{
      width: 30px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position:fixed;
      right: 89%;
      top: 70%;
      border-top:2px solid #000000;
      font-size: 25px;
      font-weight: bolder;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .page{
      width: 30px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position:fixed;
      right: 83%;
      top: 70%;
      border-top:2px solid #000000;
      font-size: 25px;
      font-weight: bolder;
    }
  }
  @media (max-width: 767px){
    .page{
      width: 30px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position:fixed;
      right: 90%;
      top: 70%;
      border-top:2px solid #000000;
      font-size: 25px;
      font-weight: bolder;
    }
  }

</style>
