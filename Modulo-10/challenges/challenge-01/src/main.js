import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('countLetters', function(value) {
  return value.split('').map(letter => `${letter} (${letter.length})`);
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
      return this.word.split('').map(letter => `${letter} (${letter.length})`);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
