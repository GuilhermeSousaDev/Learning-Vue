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
        quantity: 0,
        purchased: false,
      },
      {
        id: 2,
        name: 'Google',
        price: 200,
        quantity: 0,
        purchased: false,
      },
      {
        id: 3,
        name: 'Apple',
        price: 250,
        quantity: 0,
        purchased: false,
      },
      {
        id: 4,
        name: 'Twitter',
        price: 12,
        quantity: 0,
        purchased: false,
      }
    ],
  },
  getters: {
    bought_actions(state) {
      return state.actions.filter(action => action.purchased === true);
    }
  },
  mutations: {
    buyAction(state, payload) {
      state.actions = payload.actions;
      state.cash -= payload.selectedAction.price * payload.selectedAction.quantity;
    },
    sellAction(state, payload) {
      state.actions = payload;
    },
    changeActionCashValue(state, payload) {
      state.actions = payload;
    },
    updateCash(state, payload) {
      state.cash += payload;
    }
  },
  actions: {
    buyAction({ state, commit }, payload) {
      state.actions[payload.index].purchased = true;
      state.actions[payload.index].quantity = payload.quantity;

      const buyActionPayload = {
        actions: state.actions,
        selectedAction: state.actions[payload.index],
      }

      commit('buyAction', buyActionPayload);
    },
    sellAction({ state, commit }, payload) {
      if (payload.quantity === 0) {
        state.actions = state.actions.filter(action => action.id !== payload.id);
      }

      state.actions.map(action => {
        if (action.id === payload.id) {
          action.quantity -= payload.selled_actions; 
        }
      });

      commit('sellAction', state.actions);
    },
    changeActionCashValue({ state, commit }) {
      state.actions.map(action => {
        const max = action.price + 20;
        const min = action.price < 20 ? action.price : action.price - 10;

        action.price = Math.floor(Math.random() * (max - min) + min);
      });

      commit('changeActionCashValue', state.actions);
    }
  },
  modules: {
  }
})
