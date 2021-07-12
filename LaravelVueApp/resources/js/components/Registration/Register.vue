<template>
  <div>
     <div class="container text-dark">
       <div class="row justify-content-md-center">
         <div class="col-md-5 p-3 login justify-content-md-center">
          <form>
              <h2>Zarejestruj się</h2>
              <div class="form-group">
                <input type="text" name="name" id="name" v-model="form.name" class="form-control" placeholder="name">
              </div>
              <div class="form-group">
                <input type="email" name="email" id="email" v-model="form.email" class="form-control" placeholder="email">
              </div>
              <div class="form-group">
                <input type="password" name="password" id="pass" v-model="form.password" class="form-control" placeholder="password">
              </div>
              <div class="form-group">
                <input type="password" name="password" id="pass" v-model="form.password_confirmation" class="form-control" placeholder="Confirm Password">
              </div> 
              <div class="form-group">
                <button @click.prevent="saveForm" type="submit" class="btn btn-lg btn-primary btn-block">Zarejestruj się</button>
              </div>
          </form>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            form:{
                name: '',
                email: '',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            console.log(this.form)
            axios.post('http://127.0.0.1:8000/api/register', this.form).then(() =>{
                console.log('saved');
                this.$router.push({ name: "login"}); 
            }).catch((error) =>{
                console.log(error.response.data.detail);
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>
