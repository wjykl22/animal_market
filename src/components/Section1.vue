<template>
  <div class="section">
    <PageText/>
    <Page1/>
    <!--背景图片-->
<!--    <Footer/>-->
    <!--其他代码 ... -->
  </div>

</template>

<script>
  import Footer from "./Footer";
  import Page1 from "./Page1";
  import PageText from "./PageText";
    export default {
        name: "Section1",
      components: {PageText, Page1, Footer}


    }
</script>

<style scoped>
  @media (min-width: 1200px){
    .section{
      /* 加载背景图片 */
      background-image: url(../assets/picture/cat_1920.png);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      position: relative;
      width: 1920px;
      height: 1080px;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .section{
      /* 加载背景图片 */
      background-image: url(../assets/picture/cat_1200.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: fixed;  /*此条属性必须设置否则可能无效*/
      position: relative;
      width: 1920px;
      height: 1080px;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .section{
      /* 加载背景图片 */
      background-image: url(../assets/picture/cat_992.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: fixed;  /*此条属性必须设置否则可能无效*/
      position: relative;
      width: 1920px;
      height: 1080px;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }
  @media (max-width: 767px){
    .section{
      /* 加载背景图片 */
      background-image: url(../assets/picture/cat_768.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: fixed;  /*此条属性必须设置否则可能无效*/
      position: relative;
      width: 1920px;
      height: 1080px;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }


</style>
