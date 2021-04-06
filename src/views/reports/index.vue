<template>
    <div>
        <v-card>
            <v-card-title>
                <v-btn small raised color="primary">新增数据</v-btn>
                <v-spacer/>
                <v-text-field append-icon="search" single-line></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
                <template v-slot:item.option={item}>
                    <v-icon small class="mr-2" @click="editData(item)">edit</v-icon>
                    <v-icon small @click="deleteData(item)">delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
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
            { text: "Iron (%)", value: "iron" },
            { text: "操作", value:"option", sortable: false}
        ],
        desserts: []
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
            )
        },
        editData(item) {
            console.log(item.id);
        },
        deleteData() {
            this.$message.confirm('此操作将会永久删除商品,确定还要删除吗?')
            .then(() => {
                this.$message.info("删除成功")
            })
            .catch(() => {
                // 取消删除
                this.$message.info('已取消删除')
            })
        }
    }
}
</script>
