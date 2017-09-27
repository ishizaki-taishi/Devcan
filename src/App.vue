<template>
<v-app light>


    <v-navigation-drawer persistent :clipped="true" enable-resize-watcher>

        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-list>

                    <div v-for="(item, i) in items">

                        <v-subheader insert v-if="Math.random() > 0.5">Test</v-subheader>

                        <v-list-tile :key="i" value="true">

                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title + i.toString()"></v-list-tile-title>
                            </v-list-tile-content>

                        </v-list-tile>

                    </div>

                </v-list>

            </v-flex>
        </v-layout>

    </v-navigation-drawer>



    <v-toolbar fixed>

        <v-icon light>devices</v-icon>

        <v-toolbar-title v-text="title"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
            <v-icon>web</v-icon>
        </v-btn>
        <v-btn icon @click.stop="fixed = !fixed">
            <v-icon>remove</v-icon>
        </v-btn>


        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon>menu</v-icon>
        </v-btn>

    </v-toolbar>

    <v-tabs>

        <v-toolbar>

            <v-tabs-bar slot="extension">
                <v-tabs-slider></v-tabs-slider>
                <v-tabs-item v-for="i in 5" :key="i" :href="'#tab-' + i">
                    Item {{ i }}
                </v-tabs-item>
            </v-tabs-bar>

        </v-toolbar>

        <v-tabs-items>
            <v-tabs-content v-for="i in 3" :key="i" :id="'tab-' + i">
                <v-card flat>
                    <v-card-text>{{ "text" }}</v-card-text>
                </v-card>
            </v-tabs-content>
        </v-tabs-items>
    </v-tabs>


    <main>
        <v-container fluid>




            <v-slide-y-transition mode="out-in">
                <v-layout column align-center>





                    <app-table></app-table>

                    <!--<img src="/public/v.png" alt="Vuetify.js" class="mb-5" />-->


                    <blockquote>
                        test
                    </blockquote>

                </v-layout>
            </v-slide-y-transition>



        </v-container>
    </main>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer">
        <v-list>
            <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-icon light>compare_arrows</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>


    <v-footer :fixed="fixed">
        <span>footer</span>
    </v-footer>

    <br v-for="i in 30">


</v-app>
</template>

<script>
console.clear();

import AppTable from './Table.vue';

const items = Array.from({ length: 10 }).map(() => ({ title: 'test' }));

console.log(AppTable);


export default {

    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Devcan'
        }
    },

    components: {
        AppTable
    },
}
</script>
