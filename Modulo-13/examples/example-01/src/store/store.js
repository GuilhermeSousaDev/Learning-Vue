import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        quantity: 0,
        price: 0
    },
    getters: {
        totalValue(state) {
            return state.products.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)        
        }
    },
    mutations: {
        addProduct(state, payload) {
            state.products.push(payload);
        },
        setQuantity(state, payload) {
            state.quantity = payload;
        },
        setPrice(state, payload) {
            state.price = payload;
        }
    },
    actions: {
        addProduct({ commit }, payload) {
            setTimeout(() => {
                commit('addProduct', payload);
            }, 1000);
        },
    }
})