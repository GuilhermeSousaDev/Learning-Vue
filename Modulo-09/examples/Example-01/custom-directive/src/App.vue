<template>
  <div id="app">
    <p v-color="'blue'">Custom Blue Directive</p>
    <p v-color.slow="color">Custom Red Directive</p>
    <p v-color:background.slow="color">Custom arg Red Directive</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      color: 'red'
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
