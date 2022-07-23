import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('countLetters', function(value) {
  return `${value} (${value.length})`
});

Vue.mixin({
  data() {
    return {
      word: 'I Like Apple'
    }
  },
  computed: {
    tradeSpaces() {
      return this.word.split(' ').join(',');
    },
    countLetters() {
      return `${this.word} (${this.word.length})`;
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
