<template>
  <div id="app">
    <h1>Animações</h1>
    <hr>
    <button @click="show === true? show = false : show = true">Show Message</button>
    <transition name="fade" v-if="show">
      <p>{{ msg }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Info User Message',
      show: false
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
};
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
</style>
