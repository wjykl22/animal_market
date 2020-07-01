<template>
  <div class="section page2">
    <PageText2/>
    <Page2/>
    <!--背景图片-->
    <Footer/>
    <!--其他代码 ... -->
  </div>

</template>

<script>
  import Footer from "./Footer";
  import Page1 from "./Page1";
  import PageText from "./PageText";
  import Page2 from "./Page2";
  import PageText2 from "./PageText2";
    export default {
        name: "Section2",
      components: {PageText2, Page2, Footer}


    }
</script>

<style scoped>
  @media (min-width: 1200px){
    .page2{
      /* 加载背景图片 */
      background-image: url(../assets/picture/dog.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: local;  /*此条属性必须设置否则可能无效*/
      position: relative;
      width: 1920px;
      height: 1080px;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px){
    .page2{
      /* 加载背景图片 */
      background-image: url(../assets/picture/dog_1200.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: local;  /*此条属性必须设置否则可能无效*/
      position: relative;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 991px){
    .page2{
      /* 加载背景图片 */
      background-image: url(../assets/picture/dog_992.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: local;  /*此条属性必须设置否则可能无效*/
      position: relative;
      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }
  @media (max-width: 767px){
    .page2{
      /* 加载背景图片 */
      background-image: url(../assets/picture/dog_992.jpg);
      /* 背景图垂直、水平均居中 */
      background-position: 0px 0px;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
      background-attachment: local;  /*此条属性必须设置否则可能无效*/

      /* 让背景图基于容器大小伸缩 */
      background-size: cover;
    }
  }


</style>
