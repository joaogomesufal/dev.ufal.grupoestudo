import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './routes.js'

import 'vuetify/dist/vuetify.min.css' 
import 'font-awesome/css/font-awesome.min.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/scss/menu.scss'
import './assets/scss/message-console.scss'

Vue.use(Vuetify)
Vue.use(Vuetify, {
 iconfont: 'fa4'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
