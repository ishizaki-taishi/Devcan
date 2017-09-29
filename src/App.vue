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
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
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






    <main>



        <template>
            <v-tabs dark fixed centered>
                <v-toolbar class="cyan">
                  <v-text-field solo label="Search" append-icon="keyboard_voice" prepend-icon="search"></v-text-field>
                  <v-tabs-bar class="cyan" slot="extension">


                      <v-tabs-slider class="yellow"></v-tabs-slider>
                      <v-tabs-item v-for="(tab, i) in tabs" :key="i" :href="'#tab-' + i">
                          {{ tab }}
                      </v-tabs-item>
                  </v-tabs-bar>
              </v-toolbar>
              <v-tabs-items>

              <v-tabs-content v-for="i in 3" :key="i" :id="'tab-' + i">

                  <v-card flat>
                      <v-card-text>
                          <app-table></app-table>
                      </v-card-text>
                  </v-card>

              </v-tabs-content>
          </v-tabs-items>
      </v-tabs>
  </template>






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



</v-app>
</template>

<script>
console.clear();

import AppTable from './Table.vue';

const items = [{
        title: 'Device List'
    },
    ...Array.from({ length: 10 }).map(() => ({ title: Math.random() }))
];

export default {

    data() {
        return {

            tabs: ['all', 'android', 'ios'],

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
