<template>
<div>


    <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1">


        <template slot="items" scope="props">

                    <td>
                        <v-checkbox
                        primary
                        hide-details
                        :input-value="true"
                       ></v-checkbox>
                    </td>

                    <td class="text-xs-right">{{ props.item.deviceId }}</td>
                    <td class="text-xs-right">{{ props.item.os }}</td>
                    <td class="text-xs-right">{{ props.item.osVersion }}</td>
                    <td class="text-xs-right">{{ props.item.deviceName }}</td>
                    <td class="text-xs-right">{{ props.item.employeeId }}</td>
                    <td class="text-xs-right">{{ props.item.employeeName }}</td>

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



export default {

    data() {
        return {

            headers: [
                { text: '', sortable: false },
                { text: 'Device ID', value: 'a' },
                { text: 'OS', value: 'b' },
                { text: 'OS Version' },
                { text: 'Device Name' },
                { text: 'Employee ID' },
                { text: 'Employee Name' },

                /* , align: 'left', sortable: false */

            ],

            items: items
        }

    },

    components: {},
}
</script>
