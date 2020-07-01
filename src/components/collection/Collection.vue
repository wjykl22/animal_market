<template>
    <div>
      <Title/>
      <router-view></router-view>
      <Footer/>
    </div>
</template>

<script>
    import Title from "./Title";
    import Product1 from "./Product1";
    import Footer from "../Footer";
    export default {
        name: "Collection",
      components: {Footer, Product1, Title}
    }
</script>

<style scoped>


</style>
