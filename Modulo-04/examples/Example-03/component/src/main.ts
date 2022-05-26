import Vue from "vue";
import App from "./App.vue";
import counters from "./Components/comp-counters.vue";

Vue.config.productionTip = false;
Vue.component("app-counters", counters);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
