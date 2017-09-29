<template>
<div>


    <v-data-table :headers="headers" :items="currentDevices" hide-actions class="elevation-1">


        <template slot="items" scope="props">


            <td>
                <v-checkbox primary hide-details :input-value="true"></v-checkbox>
            </td>

            <td class="text-xs-right">{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.os }}</td>
            <td class="text-xs-right">{{ props.item.version }}</td>
            <td class="text-xs-right">{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.userId }}</td>
            <td class="text-xs-right">{{ props.item.userName }}</td>

        </template>
    </v-data-table>


</div>
</template>

<script>
import random_name from 'node-random-name';

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

import devices from '../devices.json';

const items = devices.map((device) => ({

    deviceId: device.id,
    os: device.os,
    osVersion: device.version,
    deviceName: device.name,
    employeeId: device.userId, //Math.random() * 700 | 0,
    employeeName: device.userName, //random_name({ seed: Math.random() })

}));


import { mapGetters } from 'vuex';


export default {

    props: {
        tab: String
    },

    computed: mapGetters(['headers', 'devices', 'currentDevices', 'iosDevices']),

    components: {},
}
</script>
