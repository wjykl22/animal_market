<template>
<div class="page">
  <span>2</span>
</div>
</template>

<script>
    export default {
        name: "Page2"
    }
</script>

<style scoped>
  @media (min-width: 1200px){
    .page{
      width: 30px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 5%;
      top: 70rem;
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
      position: absolute;
      left: 10rem;
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
      position: absolute;
      left: 10rem;
      top: 70rem;
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
      position: absolute;
      left: 3.5rem;
      top:46rem;
      border-top:2px solid #000000;
      font-size: 25px;
      color: #000000;
      font-weight: bolder;
    }
  }

</style>
