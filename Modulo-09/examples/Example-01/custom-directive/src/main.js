import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('color', {
  bind(el, binding) {
    let slowing = 0;

    if (binding.modifiers['slow']) slowing = 3000;

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, slowing);
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
