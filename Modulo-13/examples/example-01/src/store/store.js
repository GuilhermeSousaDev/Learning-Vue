import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: []
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
        }
    }
})