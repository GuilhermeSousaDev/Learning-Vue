<template>
  <div id="app">
    <Menu />

    <transition
      mode="out-in"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rollOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from './components/Menu/index.vue';
export default {
    name: "App",
    components: { Menu }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
