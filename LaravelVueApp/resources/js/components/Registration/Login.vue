<template>
  <div>
    <div class="container paddingTop2rem text-dark">
      <div class="row justify-content-md-center">
        <div class="col-md-5 p-3 login justify-content-md-center">
          <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
          <form >
            <div class="form-group">
              <input type="email" name="email" id="mail" v-model="form.email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="password" name="password" id="pass" v-model="form.password" class="form-control" placeholder="Password">
            </div>
            <button @click.prevent="loginUser" type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
             <div class="form-group">
              <p>Zapomniałeś hasła?<b-nav-item  :to="{ name:'login' }"> zresetuj hasło</b-nav-item ></p>
            </div>
            <div class="form-group">
              <p>Nie masz konta? <b-nav-item :to="{ name:'register' }"> zarejestruj się</b-nav-item ></p>
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
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods:{
            loginUser(){
                axios.post('http://127.0.0.1:8000/api/login', this.form).then(() =>{
                    location.reload()
                }).catch((error) =>{
                  this.errors = error.response.data.errors;
                })
            }
        },
        created(){
          if(this.$store.state.isLoggedIn){
            this.$router.push({ name: "dashboard"});
          }
        }
    }
</script>