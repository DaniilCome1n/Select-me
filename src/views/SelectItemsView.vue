<template>
  <div class="main">
    <h1>{{title}}</h1>
    <selectItems :items="items" :selectedItems="selectedItems" @selected_items="showSelectedItems"></selectItems>
  </div>
</template>

<script>
import SelectItems from "../components/SelectItems.vue";
export default {
  name: "selectItemsView",
  components: {
    SelectItems
  },
  data() {
    const items = [];
    for (let i = 0; i < 300; i++) {
      let id = i + 1;
      items[i] = { id: id, title: `Элемент ${id}` };
    }
    return {
      items: items,
      title: this.$route.meta.title,
      selectedItems: []
    };
  },
  methods: {
    showSelectedItems(data) {
      this.selectedItems = data;
    }
  }
};
</script>

<style lang="scss">
.main {
  padding-left: 25px;
}
</style>