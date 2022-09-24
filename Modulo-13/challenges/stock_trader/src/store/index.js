import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cash: 10000,
    actions: [
      {
        name: 'BMW',
        price: 110,
      },
      {
        name: 'Google',
        price: 200,
      },
      {
        name: 'Apple',
        price: 250,
      },
      {
        name: 'Twitter',
        price: 12,
      }
    ],
    bought_actions: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
