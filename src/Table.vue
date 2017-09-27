<template>
<div>


    <div id="app">
        <v-app id="inspire">

            <v-data-table v-bind:headers="headers" :items="items" hide-actions class="elevation-1">


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

        </v-app>


    </div>

</div>
</template>

<script>
import random_name from 'node-random-name';

const items = Array.from({ length: 10 }).map(() => ({

    deviceId: Math.random() * 1000 | 0,

    os: selectRandom(['ios', 'android', 'windows']),
    osVersion: (Math.random() * 10).toString().replace('.', '').split('').join('.').substr(0, 5),
    deviceName: (Math.random() * 100).toString(36).replace('.', ''),

    employeeId: Math.random() * 700 | 0,
    employeeName: random_name({ seed: Math.random() })

}));

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}





export default {

    data() {
        return {

            headers: [
                { text: '', sortable: false },
                { text: 'Device ID', value: 'a' },
                { text: 'OS', value: 'b' },
                { text: 'OS Version', align: 'left', sortable: false },
                { text: 'Device Name' },
                { text: 'Employee ID' },
                { text: 'Employee Name' },


            ],

            items: items
        }

    },

    components: {},
}
</script>
