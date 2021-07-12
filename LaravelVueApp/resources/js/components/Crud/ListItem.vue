<template>
    <div class="container">
        <div class ="row justify-content-md-center">
            <div class ="col">
                <input 
                    type = "checkbox"
                    @change ="updateCheck()"
                    v-model="item.completed"
                />
            </div>
            <div class ="col">
                <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }}</span>
            </div>
            <div class ="col">
                <button @click="removeItem()" class="btn btn-lg btn-danger btn-block">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
  //import Navbar from '../components/Navbar.vue'
  export default {
      props: ['item'],
      methods:{
          updateCheck(){
              console.log(this.item)
              axios.put('http://127.0.0.1:8000/api/item/' + this.item.id, {
                  item: this.item
              })
              .then((response)=>{
                  if( response.status == 200 ){
                      this.$emit('itemchanged');
                  }
              })
              .catch((error)=>{
                  console.log(error);
              })
          },
          removeItem(){
              axios.delete('http://127.0.0.1:8000/api/item/' + this.item.id,)
                  .then(response=>{
                      if(response.status == 200){
                          this.$emit('itemchanged');
                      }
                  })
                  .catch(error=>{
                      console.log(error);
                  })
          }
      }
  }
</script>

<style scoped>
    .completed{
        text-decoration: line-through;
        color: #999999;
    }
    
    .itemText{
        width: 100%;
        margin-left: 20px;
    }
    .item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>