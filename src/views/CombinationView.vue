<template>
  <div class="main">
    <h1>{{title}}</h1>
    <combination></combination>
  </div>
</template>

<script>
import Combination from "../components/Combination.vue";
export default {
  name: "combinationView",
  components: {
    Combination
  },
  data() {
    return {
      title: this.$route.meta.title
    };
  }
};
</script>

<style lang="scss">
.main {
  padding-left: 25px;

  
}
</style>