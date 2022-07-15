<template>
  <div id="app">
    {{ num }}
    <p v-fn:click="() => callFnDirective()">Gus</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      num: 0
    }
  },
  directives: {
    'fn': {
      bind(el, binding, vnode) {
        if (binding.arg === 'click') {
          console.log(binding.value)
          console.log(binding.expression)
          el.addEventListener('click', () => binding.value());
        }
      }
    },
    methods: {
      callFnDirective() {
        this.num++;
      }
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
