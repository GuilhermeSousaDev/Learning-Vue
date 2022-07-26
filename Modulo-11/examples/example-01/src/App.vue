<template>
  <div id="app">
    <h1>Animações</h1>
    <hr>
    <button>Show Message</button>
    <div class="fade">
      <p>{{ msg }}</p>
    </div>
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
.fade-enter {

}
.fade-enter-active {

}
.fade-enter-to {
  
}
.fade-leave {
  
}
.fade-leave-active {
  
}
.fade-leave-to {
  
}
</style>
