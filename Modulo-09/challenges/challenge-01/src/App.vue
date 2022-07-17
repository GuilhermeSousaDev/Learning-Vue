<template>
  <div id="app">
    {{ num }}
    <p 
      v-fn:mouseenter="getIn"
      v-fn:mouseleave="getOut"
    >
      {{ verb }}
    </p>
    <button v-fn:click="increment">+</button>
    <button v-fn:click="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      num: 0,
      verb: 'empty'
    }
  },
  directives: {
    'fn': {
      bind(el, binding) {
        const events = ['mouseenter', 'mouseleave', 'click'];

        if (events.includes(binding.arg)) {
          el.addEventListener(binding.arg, binding.value);
        }
      }
    },
  },
  methods: {
      increment() {
        this.num++;
      },
      decrement() {
        this.num--;
      },
      getIn() {
        this.verb = 'Entrou';
      },
      getOut() {
        this.verb = 'Saiu';
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
