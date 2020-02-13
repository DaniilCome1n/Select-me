<template>
    <div class="mainBox">
        <div class="itemsBox">
          <div 
          v-for="(item,index) in selectedItems" 
          :key="item.id"
          class="classSelectedItem"
          >
          {{item.title}}
          <a @click="remove(index)" class="removeButton">X</a>
        </div>
        </div>
        
        <h1>Выбрано {{selectedItems.length}} элемента</h1> 
         
    </div>
</template>


<script>

export default {
    data() {
      return {
        name:'selected-items',
      }
    },
    methods:{
      remove:function(index){
        this.selectedItems.splice(index,1)
      }
    },
    props:['selectedItems'],
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


