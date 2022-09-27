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
      state.cash -= payload.price * payload.quantity;
    },
    sellAction(state, payload) {
      state.bought_actions = payload;
    },
  },
  actions: {
    sellAction({ state, commit }, payload) {
      if (payload.quantity === 0) {
        state.bought_actions = state.bought_actions.filter(action => action.id !== payload.id);
      }

      state.bought_actions.map(action => {
        if (action.id === payload.id) {
          action.quantity -= payload.selled_actions;
        }
      });

      commit('sellAction', state.bought_actions);
    }
  },
  modules: {
  }
})
