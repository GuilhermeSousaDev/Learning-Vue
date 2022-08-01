<template>
  <div id="app">
    <h1>Animações</h1>
    <hr>
    <button @click="show === false? show = true : show = false">Show Message</button>
    <transition
      :css="false"
      @before-enter=""
      @after-enter=""
      @enter=""
      @enter-cancelled=""

      @before-leave=""
      @after-leave=""
      @leave=""
      @leave-cancelled=""
    >
      <div v-if="show" class="box"></div>
    </transition>
  </div>
</template>

<script>
import 'animate.css';

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
.msg {
  background-color: aqua;
}
@keyframes fade-in {
  from { transform: translateX(10px) }
  to { transform: translateX(0) }
}
@keyframes fade-out {
  from { transform: translateX(0) }
  to { transform: translateX(10px) }
}
.fade-enter-active {
  animation: fade-in 2s ease;
}
.fade-leave-active {
  animation: fade-out 2s ease;
}

@keyframes slide-in {
  from { transform: translateY(40px) }
  to { transform: translateY(0) }
}
@keyframes slide-out {
  from { transform: translateY(0) }
  to { transform: translateY(40px) }
}
.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
