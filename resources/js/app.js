/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import ExampleComponent from './components/ExampleComponent.vue';
import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";

import {createRouter, createWebHistory} from 'vue-router';
import {createApp} from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const router = createRouter({
    routes: [
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
        {
            path: '/tasks/create',
            name: 'task.create',
            component: TaskCreateComponent
        },
        {
            path: '/tasks/:taskID',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
        {
            path: '/tasks/:taskID/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        },
    ],
    history: createWebHistory(),
});

const app = createApp({});

app.use(router)

app.component('example-component', ExampleComponent);
app.component('header-component', HeaderComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.globEager('./**/*.vue')).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
