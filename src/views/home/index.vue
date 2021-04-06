<template>
  <v-app>
      <!-- 应用程序导航条 -->
      <v-app-bar :dark="dark" app>
        <v-toolbar :dark="dark" flat>
          <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
          <!-- v-flex弹性布局组件,v-switch开关按钮,切换黑暗主题 -->
          <v-flex xs1>
            <v-switch :label="dark ? '明亮':'暗黑' " v-model="dark" color="dark" hide-details />
          </v-flex>
          <!-- 顶部导航标题 -->
          <v-flex xs3></v-flex>
          <v-toolbar-title v-text="title" />
          <v-spacer /> 
          <!-- 调色板 -->
          <!-- <v-btn icon @click.stop="dark = !dark">
            <v-icon>>invert_colors</v-icon>
          </v-btn> -->
          <!-- 顶部导航用户菜单 -->
          <v-btn icon @click.stop="dark = !dark">
            <v-icon>account_box</v-icon>
          </v-btn>
        </v-toolbar>
      </v-app-bar>
      <!-- 左侧导航条 -->
      <v-navigation-drawer
        :dark="dark"
        :mini-variant="miniVariant"
        v-model="drawer"
        enable-resize-watcher
        :mini-variant-width="miniVariantWidth"
        fixed
        app
      >
        <v-toolbar flat>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="@/assets/logo.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>勇敢</v-list-item-title>
                <v-list-item-subtitle>追逐梦想</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-toolbar>
        <v-divider />
        <div>
          <v-list>
            <v-list-item to="/home/viewBoard">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>仪表盘</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <v-list flat>
          <v-list-group
            v-for="item in menuList"
            :key="item.id"
            v-model="item.active"
            :prepend-icon="item.action"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.id"
              :to="item.path + subItem.path"
            >
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <!-- 内容主题-展示具体功能 -->
      <v-content>
        <v-breadcrumbs :items="breadItems">
          <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
          </template>
      </v-breadcrumbs>
        <!-- 定义一个路由锚点,home的子组件内容将在这里展示 -->
        <router-view />
      </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    dark: false, // 主体是否深色
    miniVariant: false, // 是否展示为mini图标
    drawer: true, // 左侧导航是否隐藏
    title: "练习Ui组件", // 导航标题
    miniVariantWidth: 200,
    menuList: [],
    pathName: {},
    breadItems: []       
  }),
  created() {
    this.getMenuList();
  },
  computed: {
    path() {
      return this.$route.path;
    }
  },
  watch: {
    path() {
      this.breadItems = this.getBreadItems();
    }
  },
  methods:{
    getMenuList() {
      axios.get('/static/leftmenu.json').then(
        response => {
          this.menuList = response.data;
          this.getPathname();
          this.breadItems = this.getBreadItems();
        },
        error => {
          console.log(error);
        }
      )
    },
    // 获取路径对应的名称数组
    getPathname(){
      this.menuList.forEach(item => {
        const p1 = item.path.slice(1);
        this.pathName[p1] = item.title;
        item.items.forEach(item1 => {
          this.pathName[item1.path.slice(1)] = item1.title;
        })
      })
    },
    getBreadItems() {
      const urls = this.$route.path.split("/");
      const item1 = this.pathName[urls[1]];
      const item2 = this.pathName[urls[2]]

      const bread = [
        {
          text:item1,
          disabled: true,
          href: "breadcrumbs_"+item1
        },{
          text:item2,
          disabled: true,
          href: "breadcrumbs_"+item2
        }
      ]
      return bread;
    }

  }
}
</script>
