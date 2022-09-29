<template>
  <div id="app">
    <Navbar />
    <transition
      mode="out-in"
      enter-active-class="route-enter"
      leave-active-class="route-leave"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Navbar from './components/NavBar.vue';

  export default {
    components: { Navbar }
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

@keyframes routeEnter {
  from {
    transform: translateY(70px);
  }
  to {
    transform: translateY(0px);
  }
}


@keyframes routeLeave {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(70px);
  }
}

.route-enter {
 animation: routeEnter 0.5s;
}

.route-leave {
 animation: routeLeave 0.5s;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
