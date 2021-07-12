import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isAuthenticated: false,
        isLoggedIn: false,
        loggedOut: false,
    },
    mutations:{
        setIsAuthenticated (state){
            state.isAuthenticated = true;
        },

        setIsLoggedIn (state){
            state.isLoggedIn = true
        },

        hasLoggedOut (state){
            state.loggedOut = true
        },
    },
    getters:{
        loggedIn (state) {
          return state.isLoggedIn;
        }
    },
    actions:{
        isAuthenticated(context){
            axios.get('http://127.0.0.1:8000/api/authenticated')
            .then(()=>{
                next()
            })
            .catch(()=>{
                return next({ name: 'Login'})
            })
        }
        
    },
})