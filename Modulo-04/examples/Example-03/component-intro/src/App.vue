<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      },
    }
  }
</script>

<style>

</style>