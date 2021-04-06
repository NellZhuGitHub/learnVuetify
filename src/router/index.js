import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Report from '@/views/reports'
import Category from '@/views/item/treeview'
import ViewBoard from '@/views/viewBoard'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/home/viewBoard',
        children: [{
            name: 'viewBoard',
            path: 'home/viewBoard',
            component: ViewBoard
        },{
            name: 'reports',
            path: 'home/report',
            component: Report
        },{
            name: 'category',
            path: 'item/category',
            component: Category
        }]
    }
]

export default new VueRouter({
    mode: 'hash',
    routes
})