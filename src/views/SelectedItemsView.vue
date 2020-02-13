<template>
    <div>
        <h1>{{title}}</h1>
        <selectedItems :selectedItems="selectedItems"></selectedItems>
    </div>
</template>

<script>
import SelectedItems from '../components/SelectedItems.vue'
export default {

    name: 'selectedItemsView',
    components:{
        SelectedItems,
    },
    data() {
        const selectedItems=[];
      for (let i = 0; i < 3; i++) {
              let min = Math.ceil(1);
              let max = Math.floor(300);
              let res = Math.floor(Math.random() * (max - min + 1)) + min;
              selectedItems[i] = {id:res,title:`Элемент ${res}`}
            }
        return {
            title:this.$route.meta.title,
            selectedItems:selectedItems,
            
        }
    },
}
</script>