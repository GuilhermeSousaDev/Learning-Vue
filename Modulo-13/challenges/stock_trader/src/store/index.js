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
      state.bought_actions.push(payload);
    },
    sellAction(state, payload) {
      const action = state.bought_actions.filter(action => action.id === payload.id);

      if (payload.quantity === 0) {
        state.bought_actions = state.bought_actions.filter(action => action.id !== payload.id);
      } else {
        state.bought_actions.push();
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
