<template>
  <div id="app">
    <h1>Calculator</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './main/Calculator.vue';

export default {
  name: 'App',
  components: { Calculator },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}
</style>
