import './bootstrap';
import Vue from 'vue';
import Board from './Board.vue';
import apolloProvider from './apollo.config.js';
window.Vue = Vue;

Vue.component('Board', Board);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    apolloProvider
});
