import {
    GET_DEVICES,
    GET_DEVICE_TYPES,
    TAB_CHANGE
} from './mutation-types';


import devices from '../../devices.json';


export default {



    /**
     * デバイス一覧を取得する
     */
    [GET_DEVICES](state) {


        state.devices.push(...devices);

    },

    /**
     * デバイスの種類一覧を取得する
     */
    [GET_DEVICE_TYPES](state) {

        const keys = {};

        for (const device of state.devices) {
            keys[device.os] = true;
        }

        state.tabs.push(...Object.keys(keys));

    },

    [TAB_CHANGE](state, type) {
        state.currentTab = type;
        console.log(type);
    }

}
