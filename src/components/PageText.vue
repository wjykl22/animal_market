<template>
  <div class="page-text">Natural  Pet  Care  Solution.</div>
</template>

<script>
    export default {
        name: "PageText"
    }
</script>

<style scoped>

  @media (min-width: 1200px){
    .page-text{
      width: 350px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-left: 200px;
      position:fixed;
      right: 65%;
      top: 50%;
      font-size: 30px;
      font-weight: lighter;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .page-text{
      width: 350px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-left: 200px;
      position:fixed;
      right: 60%;
      top: 50%;
      font-size: 30px;
      font-weight: lighter;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .page-text{
      width: 350px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-left: 200px;
      position:fixed;
      right: 52%;
      top: 50%;
      font-size: 30px;
      font-weight: lighter;
    }
  }
  @media (max-width: 767px){
    .page-text{
      width: 350px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-left: 20px;
      font-size: 30px;
      font-weight: lighter;
    }
  }

</style>
