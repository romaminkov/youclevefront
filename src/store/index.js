import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseServer: 'http://127.0.0.1:8000'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getServerUrl:state => {
      return state.baseServer
    }
  }
})
