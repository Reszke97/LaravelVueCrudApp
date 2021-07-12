<template>
    <div v-if="user" class="container">
       <div class="row justify-content-md-center">
         <div class="col-md-5 p-3 login justify-content-md-center">
            <div class="row">
                <div class="col">
                    Name: {{user.name}}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Email: {{user.email}}
                </div>
            </div>
            <add-item-form /> 
            <list-view 
                :items="items"
                v-on:reloadlist = "getList()" 
            />
         </div>
       </div>
    </div>
</template>


<script>
import addItemForm from './AdditemForm.vue';
import listView from './ListView.vue';
export default{
  components:{
    addItemForm,
    listView,
  },
  data(){
      return{
          user: null,
          items:[],
          loggedIn: 'false',
      }
  },
  methods:{
      getList(){
          axios.get('http://127.0.0.1:8000/api/items')
          .then((response)=>{
              this.items = response.data;
          })
          .catch((error)=>{
              console.log(error);
          })
      }
  },
  mounted(){
      axios.get('/api/user').then((res)=>{
          this.user = res.data
      })
      this.getList();
  },
  computed:{
      setLoggedIn: function (){
          this.loggedIn = true;
      }
  },
  created(){
      
  }
  
}
</script>

<style scoped>

</style>