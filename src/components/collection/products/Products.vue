<template>
    <div>
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Part6/>
      <Part7/>
    </div>
</template>

<script>
    import Part1 from "./Part1";
    import Part2 from "./Part2";
    import Title from "../../service/Title";
    import Part3 from "./Part3";
    import Part4 from "./Part4";
    import Part6 from "./Part6";
    import Part5 from "./Part5";
    import Part7 from "./Part7";
    export default {
        name: "Products",
      components: {Part7, Part5, Part6, Part4, Part3, Title, Part2, Part1}
    }
</script>

<style scoped>

</style>
