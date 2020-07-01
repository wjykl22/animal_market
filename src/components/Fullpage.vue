<template>
<div>
  <full-page ref="fullpage  " :options="options" id="fullpage">
    <Section1/>
    <Section2/>
<!--    <section3/>-->

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
    import NavMenu from "./NavMenu";
    import Section1 from "./Section1";
    import Section2 from "./Section2";
    export default {
        name: "Fullpage",
      components: {Section2, Section1},
      data () {
          return {
          options: {
            licenseKey: 'YOUR_KEY_HERE',
            afterLoad: this.afterLoad,
            scrollOverflow: true,
            scrollBar: false,
            menu: '#menu',
            navigationPosition: 'right',
            navigation: true,
            loopHorizontal: true,
            navigationTooltips: ["FirstPage","SecondPage"],
            anchors: ['page1', 'page2'],
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
