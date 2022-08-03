<template>
  <div id="app">
    <h1>Animações</h1>
    <hr>
    <button @click="show === false? show = true : show = false">Show Message</button>
    <transition
      :css="false"
      @enter="enter"
      @before-leave="beforeLeave"
      @before-enter="beforeEnter"
      @leave="leave"
    >
      <div style="background: green; width: 0px; height: 200px;" v-if="show">{{ msg }}</div>
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
      show: false,
      initialWidth: 0,
    }
  },
  methods: {
    animated(el, done, negative) {
      let count = 1;

      const time = setInterval(() => {
        const newWidth = this.initialWidth + (negative ? -count * 10 : count * 10);
        el.style.width = `${newWidth}px`;
        count++;
        if (count > 30) {
          clearInterval(time);
          done();
        }
      }, 50);
    },
    beforeEnter(el) {
      this.initialWidth = 0;
      el.style.width = `${this.initialWidth}px`;
    },
    enter(el, done) {
      this.animated(el, done, false);
    },
    beforeLeave(el) {
      this.initialWidth = 300;
      el.style.width = `${this.initialWidth}px`;
    },
    leave(el, done) {
      this.animated(el, done, true);
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
};
.msg {
  background-color: aqua;
};
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
