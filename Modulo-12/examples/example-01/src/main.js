import Vue from 'vue';
import App from './App.vue';

import './plugins/axios';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
