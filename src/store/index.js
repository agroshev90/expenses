import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth'
import info from './info'
import rp from 'request-promise'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_COIN
    try {
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,BTC,RUB,EUR&format=1`)
      return await res.json()
    } catch (e) {
      console.log(e)
    }
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info
  },
});
