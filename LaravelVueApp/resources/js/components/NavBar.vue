<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li ><v-icon style="color:blue"  v-if="auth" x-large>mdi-account</v-icon></li>
                    <b-nav-item :to="{ name:'home'}" exact>Home</b-nav-item>
                    <b-nav-item :to="{ name:'about'}" exact>About</b-nav-item>
                    <b-nav-item :to="{ name:'register'}" exact>Register</b-nav-item>
                    <b-nav-item :to="{ name:'dashboard'}" exact>DashBoard</b-nav-item>
                    <!--<b-nav-item v-if="authenticated" :to="{ name:'logout' }" exact>logout</b-nav-item>-->
                    <!--<v-icon color="green darken-2" >mdi-account</v-icon>-->
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-if="!auth" :to="{ name:'login'}" exact><v-icon style="color:green">mdi-login</v-icon></b-nav-item>
                    <b-nav-item v-if="auth" :to="{ name:'logout'}" exact><v-icon style="color:red">mdi-logout</v-icon></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
        props: ['auth'],
        data(){
            return{
                isLoggedIn: false,
            }
        },
        computed:{
            setLoggedIn: function (){
                return this.isLoggedIn = this.auth
            }
        },
        methods:{
        },
        created(){
            if(this.auth){
                this.$store.commit("setIsLoggedIn")
            }

            this.$store.state.loggedOut == true
        }
    }
</script>
