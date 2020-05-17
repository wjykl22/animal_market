<template>
<div>
  <NavMenu/>
  <full-page :options="options" id="fullpage">
    <Section1/>
    <!--<div class="section">
      <div class="slide">
        <h3>Slide 2.1</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.2</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.3</h3>
      </div>
    </div>-->
    <!--<Section3/>-->
  </full-page>
</div>
</template>

<script>
    import Section3 from "./Section3";
    import NavMenu from "./NavMenu";
    import Section1 from "./Section1";
    import NavMenu2 from "./NavMenu";
    export default {
        name: "Fullpage",
      components: {NavMenu, Section1, Section3},
      data () {
          return {
          options: {
            licenseKey: 'YOUR_KEY_HERE',
            afterLoad: this.afterLoad,
            scrollOverflow: true,
            scrollBar: false,
            menu: '#menu',
            navigation: false,
            anchors: ['page1', 'page2', 'page3'],
            sectionsColor: ['#ffffff', '#ffffff', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
          }
        }
      },
    }
</script>

<style scoped>

  h3 {
    font-size: 5em;
    text-align: center;
    color: #fff;
    font-weight: 700
  }
  /*设置导航栏的样式*/



</style>
