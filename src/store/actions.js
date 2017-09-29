import {

    GET_DEVICES,
    GET_DEVICE_TYPES,

    TAB_CHANGE

} from './mutation-types';


export default {

    [GET_DEVICES]({ commit }) {
        commit(GET_DEVICES);
    },

    [GET_DEVICE_TYPES]({ commit }) {
        commit(GET_DEVICE_TYPES);
    },

    [TAB_CHANGE]({ commit }, { type }) {
        commit(TAB_CHANGE, type);
    }


}
