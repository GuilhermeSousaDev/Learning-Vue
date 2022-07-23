<template>
  <div id="app">
    <h1>Using Filters</h1>
    <p>{{ word | tradeSpaces }}</p>
    <p>{{ word | countLetters }}</p>
    <hr>
    <h1>Computed Props in Global Mixin</h1>
    <p>{{ tradeSpaces }}</p>
    <p>{{ countLetters }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      word: 'Work Flow'
    }
  },
  filters: {
    tradeSpaces(value) {
      return value.split(' ').join(',');
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
