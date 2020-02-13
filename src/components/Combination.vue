<template>
    <div>
       
        <select-items :items="items" :selectedItems="selectedItems">
             <selected-items :selectedItems="selectedItems" ></selected-items>
        </select-items>
    </div>
</template>

<script>
import SelectedItems from './SelectedItems.vue';
import SelectItems from './SelectItems.vue';
export default {
    name:'combination-components',
    data() {
        const selectedItems=[];
      for (let i = 0; i < 3; i++) {
              let min = Math.ceil(1);
              let max = Math.floor(300);
              let res = Math.floor(Math.random() * (max - min + 1)) + min;
              selectedItems[i] = {id:res,title:`Элемент ${res}`}
            }
        const items=[];
        for(let i=0;i<300;i++){
            let id=i+1;
            items[i] = {id:id,title:`Элемент ${id}`}
        }    
        return {
            selectedItems:selectedItems,
            items:items,
        }
    },
    components:{
        SelectedItems,
        SelectItems
    },
    
}
</script>

