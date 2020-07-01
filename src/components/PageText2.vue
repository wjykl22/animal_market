<template>
  <div class="page-text"><span>{{$t('PageText.natural_pet_care_solution')}}</span></div>
</template>

<script>
    export default {
        name: "PageText2",
    }
</script>

<style scoped>

  .page-text {
    font-weight: bold;
  }
  @media (min-width: 1200px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 5%;
      top: 50%;
      font-size: 40px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 10rem;
      top: 50%;
      font-size: 35px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 10rem;
      top: 50rem;
      color: #1a1a1a;
      font-size: 4rem;
    }
  }
  @media (max-width: 767px){
    .page-text{
      height: 50px;
      top: 32rem;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 1.5rem;
      color: #ffffff;
      font-size: 3rem;
    }
  }

</style>
