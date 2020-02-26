<template>
  <div class="home">
    <p class="info">
      Простое приложение на Vue.js. Реализован компонент отображения выбранных
      элементов,компонент выбора элементов из списка с возможностью живого
      поиска и компонент,который объединяет предыдущие компоненты.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Homepage"
    };
  }
};
</script>
<style lang="scss" scoped>
.info {
  font-size: 30px;
  padding-right: 30px;
}
</style>
