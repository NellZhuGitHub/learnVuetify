import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'

//导入样式注册器
import './register/assets'

// 导入组件注册器
import './register/component'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
