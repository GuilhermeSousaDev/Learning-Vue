import Vue from 'vue';
import Vuex from 'vuex';

import car from './modules/car';
import params from './modules/params';

import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        firstName: 'Maria',
        lastName: 'Silva',
    },
    getters,
    modules: { car, params }
})