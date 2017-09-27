import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import App from './App.vue';
import './stylus/main.styl';

Vue.use(Vuex);
Vue.use(Vuetify);

new Vue({
    el: '#app',
    render: h => h(App)
});
