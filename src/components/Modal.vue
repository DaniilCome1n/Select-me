<template>
      <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h1>{{header}}</h1>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <input type="text" v-model="searchedItem" class="modal-body-Input">
                <div class="modal-body-ItemsBox">
                    <div v-for="item in searchedItems" :key="item.id" >
                     <input type="checkbox" v-model="localSelectedItems"  :value="item" :disabled="isSelectLimit && !isSelected(item)" >
                     <label >{{item.title}}</label>
              </div>
                </div>
              
              <div class="modal-body-SelectedItemsBox">
                  <div v-for="(selectedItem,index) in localSelectedItems" :key="selectedItem.id" class="classSelectedItem">
                      {{selectedItem.title}}
                    <a @click="remove(index)" class="removeButton">X</a>
                  </div>
              </div>
              <p>Выбрано {{localSelectedItems.length}} элементов</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              
              <button class="modal-default-button" @click="$emit('close'),$emit('selected_items',localSelectedItems)">
                Добавить элементы
              </button>
              <button class="modal-default-button" @click="$emit('close')">
                Отмена
              </button>
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
  export default {
    name: 'modal',
    data() {
        return {
            checked:true,
            limit:5,
            searchedItem:'',
            localSelectedItems:this.selectedItems,
            header:'Диалог выбора элементов'
        }
    },
    computed:{
        searchedItems: function(){
           if(this.searchedItem){
               return this.items.filter(item=>{
                   return item.title.includes(this.searchedItem);
               });
           }
           return this.items;
        },
        isSelectLimit: function(){
            return this.localSelectedItems.length>=this.limit;
        },
        
    },
    methods: {
      remove(index){
        this.localSelectedItems.splice(index,1)
      },
      isSelected:function(elem){
            return this.localSelectedItems.includes(elem);
      },
      
    },
  
  props:['items','selectedItems'],
  };
</script>

<style>
  
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  
}

.modal-body-ItemsBox{
height: 250px;
  overflow-y: scroll;
}
.modal-body-SelectedItemsBox{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.modal-default-button {
  float: right;
}

.removeButton{
        display: block;
        position: relative;
        cursor: pointer;
        color: rgb(175, 86, 86);
        font-weight: 900;
        right: 0;
}

.classSelectedItem{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 20px;
      width: 140px;
      margin: 2px;
      padding-top: 3px;
      border-radius: 5px;
      background-color: rgb(58, 66, 66);
      color: white;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>