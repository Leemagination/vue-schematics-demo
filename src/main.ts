import Antd from 'ant-design-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugins from './components/index'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
