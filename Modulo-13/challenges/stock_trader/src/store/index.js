import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cash: 10000,
    actions: [
      {
        id: 1,
        name: 'BMW',
        price: 110,
      },
      {
        id: 2,
        name: 'Google',
        price: 200,
      },
      {
        id: 3,
        name: 'Apple',
        price: 250,
      },
      {
        id: 4,
        name: 'Twitter',
        price: 12,
      }
    ],
    bought_actions: []
  },
  getters: {
  },
  mutations: {
    buyAction(state, payload) {
      state.actions.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
