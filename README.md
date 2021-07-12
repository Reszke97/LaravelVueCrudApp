# LaravelVueCrudApp

# Prosta aplikacja typu CRUD z wykorzystaniem Laravel 8 jako **backend** i Vue 2 jako **frontend**

## Przygotowanie composera za pomocą komendy: **composer global require laravel/installer**

## Tworzenie aplikacji za pomocą komendy **laravel new vueApp**

## Uruchomienie serwera laravel: **php artisan serve**

## Uruchomienie vue: **npm run watch**

## Do Rejestracji i logowania wykorzystany został gotowy moduł autentykacji **Laravel Sanctum** https://laravel.com/docs/8.x/sanctum
## Do frontendu wykorzystany został **Bootstrap Vue** oraz **Vuetify** z paczką ikonek od **MDI** https://materialdesignicons.com/

Struktura plików **Vue**:
```js
  ./components
    ├── /About
    │     ├── About.vue                  // komponent, w którym znajdują się informację o nas
    │     └── Home.vue                   // komponent, w którym znajduję się strona główna
    ├── /CRUD
    │   ├── AdditemForm.vue              // komponent, odpowiedzialny za dodawanie nowego elemntu do listu i 
    │   ├── DashBoard.vue                // komponent rodzic, z którego korzystają wszystkie komponenty w ./CRUD dostępny po zalogowaniu, po zalogowaniu jest wyśwtielany
    │   ├── Listitem.vue                 // komponent odpowiedzialny za logikę do wyświetlania listy zadań
    │   └── ListView.vue                 // komponent wyświetlający listę zadań przy użyciu komponentu Listitem
    │
    ├── /Registration
    │   ├── Login.vue                    // komponent odpowiedzialny za logowanie
    │   ├── Logout.vue                   // komponent odpowiedzialny za wylogowanie
    │   └── Register.vue                 // komponent odpowiedzialny za rejestracje
    │
    └── NavBar.vue                       // komponent odpowiedzialny za wyświetlenie paska nawigacji
   app.js                                // główny plik aplikacji Vue, w którym tworzony jest obiekt klasy Vue
   bootstrap.js                          // plik, w którym zdefiniowany jest bootstrap
   routes.js                             // plik, w którym zdefionowane są scieżki do Vue Router
   store.js                              // plik, w którym zdefiniowany jest vuex store
   vuetify.js                            // plik, w którym zdefiniowany jest vuetify
```

Aby pliki **js** i **css** były widoczone należy podać je w pliku **webpack.mix.js** w folderze głównym projektu:
```js
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix 
    .vue()
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')

```

Aby **bootstrap** i **vuetify** oraz inne static'i były widoczne należy zaimportować je do pliku znajdującego się w folderze **sass**:
```js
// Fonts
@import url('https://fonts.googleapis.com/css?family=Nunito');

// Variables
@import 'variables';

// Bootstrap
@import '~bootstrap/scss/bootstrap';

@import '~vuetify/dist/vuetify.min.css';
//Icons
@import '~@mdi/font/css/materialdesignicons.min.css';
```

Aby vuetify był widoczny należy stworzyć plik **vuteify.js** i do instancji **Vue** dodać **vuetify**:
```js
import Vuetify from 'vuetify';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);
export default new Vuetify(
    {icons: {iconfont:'mdi'}}
)
```
Następnie w  **app.js** imprtujemy plik **vuetify.js** i dodajemy go przy tworzeniu obiektu **Vue**:
```js
require('./bootstrap');


import Vue from 'vue';
import vuetify from './vuetify.js';
import router from './routes.js';
import bootstrapvue from './bootstrapvue.js';
import store from './store.js';
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
window.Vue = require('vue').default;
// Aby blade.php widział komponent z Vue należy dodać poniższą linię kodu wraz z wybranym komponentem
Vue.component('navbar',require('./components/NavBar.vue').default);

const app = new Vue({
    el: '#app',
    router,
    //dashboard,
    vuetify,
    bootstrapvue,
    store,
});

```
 

