<template>
  <div id="app">
    <h1>Super Quiz</h1>
    
    <Quiz />
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue';

export default {
    name: "App",
    components: { Quiz }
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
