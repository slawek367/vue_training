import Vue from 'vue'
import App from './App.vue'
import Orders from './Orders.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

//new Vue({
    //render: h => h(Orders)
//}).$mount('#orders')