import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import App from './App.vue';
import './stylus/main.styl';

Vue.use(Vuetify);

import store from './store/store';

new Vue({
    el: '#app',
    store,

    render: h => h(App)
});
