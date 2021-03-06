import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body)


Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)



new Vue({
	el:' #app',
	router,
	store,
  	render: h => h(App)
}).$mount('#app')
