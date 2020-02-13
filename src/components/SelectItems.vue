<template>
    <div>
            
        <div class="itemsBox">
            <div  v-for="(item,index) in localSelectedItems" :key="item.id" class="classSelectedItem" >
                {{item.title}} <a @click="remove(index)" class="removeButton">X</a>
            </div>
        </div>
        
        <button id="show-modal" @click="showModal = true,$emit('selected_items',localSelectedItems)" >Выбрать элементы</button>
        <modal name="modal" v-if="showModal" @selected_items="showSelectedItems" @close="showModal = false"  :items="items" :selectedItems="selectedItems" >
            </modal>
    </div>
</template>

<script>
import Modal from './Modal.vue';
export default {
    name:'select-items',
    data() {
        
        return {
            showModal:false,
            localSelectedItems:this.selectedItems,
        }
    },
    components:{
        Modal,
    },
    methods:{
        showSelectedItems(data){
            this.localSelectedItems = data;
        },
        remove(index){
        this.localSelectedItems.splice(index,1)
      },
    },
    props:['items','selectedItems']
    
    
}
</script>

<style lang="scss">
    .itemsBox{
    display: flex;
    flex-direction: row;

      .classSelectedItem{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 30px;
      width: 140px;
      margin: 2px;
      padding-top: 10px;
      border-radius: 5px;
      background-color: rgb(58, 66, 66);
      color: white;

      .removeButton{
        display: block;
        position: relative;
        cursor: pointer;
        color: rgb(175, 86, 86);
        font-weight: 900;
        right: 0;
      }
    }
  }
</style>