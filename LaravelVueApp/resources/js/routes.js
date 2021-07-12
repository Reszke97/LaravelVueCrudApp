import VueRouter from 'vue-router';
import Home from './components/About/Home';
import About from './components/About/About';
import Login from './components/Registration/Login';
import Register from './components/Registration/Register';
import Logout from './components/Registration/Logout';
import DashBoard from './components/Crud/DashBoard';
import Vue from 'vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'font-semibold',
    routes: [
        {path: '/', name:'home', component: Home,},
        {path: '/about', name:'about', component: About,},
        //{path: '*', name:'notfound', component: NotFound,},
        {path: '/login', name:'login', component: Login,},
        {path: '/register', name:'register', component: Register,},
        {path: '/logout', name:'logout', component: Logout,},
        {
            path: '/dashboard', name:'dashboard', component: DashBoard,
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'login'})
                })
            }
        },
    ]
})