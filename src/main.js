import Vue from 'vue'
import './plugins/base'
import vuetify from './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
