<template>
  <div>
    <Title/>
    <Picture/>
    <Footer/>
  </div>
</template>

<script>
  import Title from "./Title";
  import Picture from "./Picture";
  import Footer from "../Footer";

  export default {
    name: "About",
    components: {Footer, Picture, Title}
  }
</script>

<style scoped>


</style>
