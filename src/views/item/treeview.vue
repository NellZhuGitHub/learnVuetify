<template>
    <v-card style="height:100%;">  
        <v-card-title>User Directory</v-card-title>
        <v-row justify="space-between">
            <v-col cols="3">
                <v-treeview activatable :items="categoryList"  item-key="id" open-on-click>
                    <template v-slot:prepend="{item,open}">
                        <v-icon v-if="!item.icon">{{open ? 'mdi-folder-open' : 'mdi-folder'}}</v-icon>
                        <v-icon v-else>{{open ? 'mdi-bird' : 'mdi-'+item.icon}}</v-icon>
                    </template>
                </v-treeview>
            </v-col>
            <v-divider vertical />
            <v-col class="pa-6">
                <v-content>
                    <router-view />
                </v-content>
            </v-col>
        </v-row>
    </v-card>
    
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        categoryList: [],
    }),
    created() {
        this.getCategoryList();
    },
    methods: {
        getCategoryList(){
            axios.get('/static/treeview.json').then(
                response => {
                    console.log(response.data);
                    this.categoryList = response.data;
                },
                error => {
                    console.log(error);
                }
            )
        }
    }
}
</script>