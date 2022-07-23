import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', function(value) {
  return value.split('').reverse().join('');
});

Vue.mixin({
  data() {
    return {
      globalMixin: 'Global Mixin Data',
    }
  },
  created() {
    console.log('Created - Global Mixin')
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
