# LaravelVueCrudApp

# Prosta aplikacja typu CRUD z wykorzystaniem Laravel 8 jako **backend** i Vue 2 jako **frontend**

## Do Rejestracji i logowania wykorzystany został gotowy moduł autentykacji **Laravel Sanctum** https://laravel.com/docs/8.x/sanctum
## Do frontendu wykorzystany został **Bootstrap Vue** oraz **Vuetify** z paczką ikonek od **MDI** https://materialdesignicons.com/

Struktura plików **Vue**:

Struktura plików:
```js
  ./components
    ├── /About
    │     ├── About.vue                     //Komponent do date time pickera
    │     └── Home.vue                   //Komponent bazowy
    ├── /CRUD
    │   ├── AdditemForm.vue
    │   ├── DashBoard.vue
    │   ├── Listitem.vue
    │   └── ListView.vue
    │
    ├── /Registration
    │   ├── Login.vue
    │   ├── Logout.vue
    │   └── Register.vue
    │
    └── NavBar.vue
   app.js
   bootstrap.js
   routes.js
   store.js
   vuetify.js
```
