<template>
    <div class="row">
        <div class="col">
            <div class="login">
            <form>
                <div class="form-group">
                    <input type="text" name="name" id="name" v-model="item.name"  class="form-control" placeholder="Description">
                </div>
                <div class="form-group row">
                    <div class="col">
                        <button @click="addItem()" class="btn btn-lg btn-success btn-block">Add task</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
    data: function() {
        return {
            item:{
                name: ""
            }
        }
    },
    methods:{
        addItem(){
            if( this.item.name == ''){
                return;
            }

            axios.post('http://127.0.0.1:8000/api/item/store',{
                item: this.item
            })
            .then((response)=>{
                if(response.status==201){
                    this.item.name = '';
                }
            })
            .catch((error)=>{
                console.log(error);
            })
            
        },
    },
}
</script>

<style scoped>
    .w50{
        width: 50%;
    }
</style>