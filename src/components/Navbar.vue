<template>
  <div class="navbox">
    <ul class="nav">
      <router-link
        v-for="route in routes"
        :key="route.id"
        :to="route.path"
        tag="li"
      >{{route.meta.title}}</router-link>
    </ul>
    <router-view class="test"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes
    };
  }
};
</script>

<style lang="scss" scoped >
.navbox {
  display: flex;
  flex-direction: row;
  height: 100%;

  .nav {
    margin: 0;
    padding: 20px 0 0 0;
    background-color: #e0dbdb38;
    border-right: 1px solid #9991914d;
    width: 300px;
    height: 100%;

    li {
      display: block;
      width: 300px;
      height: 50px;
      margin-top: 10px;
      color: #4d80cc;
      list-style: none;
      cursor: pointer;
    }
    .router-link-active {
      background-color: #4d80cc;
      color: white;
    }
  }
}
</style>

