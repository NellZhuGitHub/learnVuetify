<template>
    <div>
    <v-container>
        <v-flex class="d-flex flex-grow-1 flex-column"> 
            <v-row>
                <v-col cols="xs-4">
                    <v-card style="min-height:380px; background-color: #00355e;border-color: #00355e;color: #edf0f2;">
                        <v-card-title>
                            <div>营业额</div>
                            <v-spacer />
                            <v-btn plain class="primary--text">查看报告</v-btn>
                        </v-card-title>
                        <v-flex class="d-flex flex-column">
                            <div class="pa-2">
                                <div class="text-h4">$26,368.49</div>
                                <div>$17,562.59与上周</div>
                            </div>
                            <v-spacer />
                            <div class="pa-2 pb-2">
                                <div class="">每周销售</div>
                                <v-flex class="d-flex">
                                    <div class="text-h4">$1,568.32</div>
                                    <v-spacer />
                                    <div class="d-flex flex-column">
                                        <div class="purple--text text--accent-4">3.2%</div>
                                        <div>与上周</div>
                                    </div>
                                </v-flex>
                            </div>
                        </v-flex>
                        <div style="min-height: 120px;">我是chart图</div>
                    </v-card>
                </v-col>
                <v-col cols="xs-4">
                    <v-card class="h-full" style="min-height:380px;">
                        <v-card-title>
                            <div>活动</div>
                            <v-spacer />
                            <v-btn class="rounded outlined">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-timeline>
                                <v-timeline-item right>Monday</v-timeline-item>
                                <v-timeline-item right>Tuesday</v-timeline-item>
                                <v-timeline-item right>Wensday</v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="xs-4">
                    <v-card class="d-flex flex-column" style="min-height:380px;">
                        <v-card-title>
                            流量来源
                            <v-spacer /> 

                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="md-6">
                    <v-card style="">
                        <v-card-title>最近的订单</v-card-title>
                        <v-data-table :headers="headers" :items="desserts">
    
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="md-6">
                    <v-flex class="d-flex flex-column">
                        <v-card>
                            <v-flex class="d-flex flex-column">
                                <v-card-title>订单</v-card-title>
                                <div class="px-4 pd-4">
                                    <v-flex class="d-flex">
                                        <div class="title-h4">432</div>
                                        <v-spacer />
                                        <v-flex class="d-flex flex-column text-right">
                                            <div>4.3%</div>
                                            <div>于上周</div>
                                        </v-flex>
                                    </v-flex>
                                </div>
                                <v-spacer /> 
                                <div style="min-height:60px;"></div>
                            </v-flex>
                        </v-card>
                        <v-card class="mt-4">
                            <v-flex class="d-flex flex-column">
                                <v-card-title>顾客</v-card-title>
                                <div class="px-4 pd-4">
                                    <v-flex class="d-flex">
                                        <div class="title-h4">178</div>
                                        <v-spacer />
                                        <v-flex class="d-flex flex-column text-right">
                                            <div>2.13%</div>
                                            <div>于上周</div>
                                        </v-flex>
                                    </v-flex>
                                </div>
                                <v-spacer /> 
                                <div style="min-height:60px;"></div>
                            </v-flex>
                        </v-card>
                    </v-flex>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="md-6">
                    <v-card>
                        <v-text-field  placeholder="filter tasks" solo flat hide-details class="pa-1 py-2 elevation-2">
                            <template v-slot:prepend-inner><v-icon>search</v-icon></template>
                            <template v-slot:append-inner><icon></icon></template>
                        </v-text-field>
                        <v-divider />
                        <div>
                            <v-flex class="d-flex pa-2 task-item">
                                <v-checkbox></v-checkbox>
                                <div class="flex-grow-1">
                                    <div class="font-weight-bold">find the report on one winged airplanes</div>
                                    <div>✈️ one wing is the way to go</div>
                                    <div><v-chip x-small outlined  text-color="primary" color="primary">work</v-chip></div>
                                </div>  
                                <v-spacer />
                                <div class="d-flex align-center"><v-btn icon><v-icon>mdi-delete-outline</v-icon></v-btn></div>
                            </v-flex>
                            <v-flex class="d-flex pa-2 task-item">
                                <v-checkbox></v-checkbox>
                                <div class="flex-grow-1">
                                    <div class="font-weight-bold">🤘 get marshmallows for camping</div>
                                    <div>we need it for reasons 🤤</div>
                                    <div><v-chip x-small outlined text-color="orange" color="orange"> Groceries </v-chip></div>
                                </div>
                                <v-spacer />
                                <div class="d-flex align-center"><v-btn icon><v-icon>mdi-delete-outline</v-icon></v-btn></div>
                            </v-flex>
                            <v-flex class="d-flex pa-2 task-item">
                                <v-checkbox></v-checkbox>
                                <div class="flex-grow-1">
                                    <div class="font-weight-bold">🤘 get marshmallows for camping</div>
                                    <div>we need it for reasons 🤤</div>
                                    <div><v-chip x-small outlined text-color="orange" color="orange"> Groceries </v-chip></div>
                                </div>
                                <v-spacer />
                                <div class="d-flex align-center"><v-btn icon><v-icon>mdi-delete-outline</v-icon></v-btn></div>
                            </v-flex>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="md-6">
                    <v-card>
                        <v-card-title>支持票</v-card-title>
                        <v-data-table :headers="ticketsHeaders" :items='tickets' hide-default-footer search>
                            <template v-slot:item.priority={item}><v-chip label >{{item.priority}}</v-chip></template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </v-container>
    <v-footer>
        Built with
        <v-icon style="color:red;">mdi-heart</v-icon>
        <a href="https:baidu.com" target="_blank" class="text-decoration-none">@baidu</a>
    </v-footer>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        headers: [
            {
                text: 'Desserts(100g serving)',
                value: "name",
                align: 'start',
                sortable: true
            },
            { text: 'Calories', value: 'calories'},
            { text: "Fat (g)", value: "fat" },
            { text: "Carbs (g)", value: "carbs" },
            { text: "Protein (g)", value: "protein" },
            { text: "Iron (%)", value: "iron" }
        ],
        desserts: [],
        ticketsHeaders: [
            {text: 'ticket ID', value: 'ticketId'},
            {text: 'user', value: 'user'},
            {text: 'priority', value: 'priority'},
            {text: 'status', value: 'status'},
            {text: 'createDate', value: 'createDate'}
        ],
        tickets: []
    }),
    mounted() {
        this.getData();  
    },
    methods:{
        getData() {
            axios.get("/static/datatable.json").then(
                response => {
                    console.log(response);
                    this.desserts = response.data;
                },
                error => {
                    console.log(error);
                }
            ),
            axios.get("/static/viewtable.json").then(
                response => {
                    this.tickets = response.data;
                },
                error => {
                    console.log(error)
                }
            )
        }
    }

}
</script>

<style scoped>
.task-item {
    border-bottom: 1px solid hsla(0,0%,39.2%,.1);
}
.error {
    background-color: var(--v-error-base) !important;
    border-color: var(--v-error-base) !important;
}
.v-data-table table tbody tr:not(.v-data-table__selected):hover {
    box-shadow: 0 28px 15px -2px rgb(0 0 0 / 12%);
	transform:translateY(-4px);
}
</style>
