import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({

    strict: process.env.NODE_ENV !== 'production',

    state: {

        devices: [],


        tabs: [],

        currentTab: '',

        items: [],

        headers: [
            { text: '', sortable: false },
            { text: 'Device ID', value: 'a' },
            { text: 'OS', value: 'b' },
            { text: 'OS Version' },
            { text: 'Device Name' },
            { text: 'Employee ID' },
            { text: 'Employee Name' },
        ]
    },

    actions,
    mutations,
    getters,

});

export default store;
