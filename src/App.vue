<template>
  <div id="app">
    <Navbar></Navbar>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss" >
@import "./assets/css/normalize.css";

html,
body {
  height: 100%;
  font-family: "Open Sans", sans-serif;

  #app {
    height: 100%;
  }
}
</style>
