import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	city: 'beijingxi'
  },
  mutations: {
  	changeC2(state, city){
  		state.city = city;
  	}
  }
})
