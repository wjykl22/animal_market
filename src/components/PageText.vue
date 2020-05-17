<template>
  <div class="page-text"><span>{{$t('PageText.natural_pet_care_solution')}}</span></div>
</template>

<script>
    export default {
        name: "PageText",
    }
</script>

<style scoped>

  @media (min-width: 1200px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 5%;
      top: 50%;
      font-size: 40px;
      font-weight: lighter;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 5%;
      top: 50%;
      font-size: 35px;
      font-weight: lighter;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 5%;
      top: 50%;
      font-size: 35px;
      font-weight: lighter;
    }
  }
  @media (max-width: 767px){
    .page-text{
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 4%;
      color: ghostwhite;
      font-size: 35px;
      font-weight: lighter;
    }
  }

</style>
