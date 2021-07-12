require('./bootstrap');


import Vue from 'vue';
import vuetify from './vuetify.js';
import router from './routes.js';
import bootstrapvue from './bootstrapvue.js';
import store from './store.js';
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
window.Vue = require('vue').default;
Vue.component('navbar',require('./components/NavBar.vue').default);


/*router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
      if (!store.getters.loggedIn) {
        next({ name: 'login' })
      } else {
        next()
      }
    } else {
      next()
    }
  })*/

const app = new Vue({
    el: '#app',
    router,
    //dashboard,
    vuetify,
    bootstrapvue,
    store,
});
