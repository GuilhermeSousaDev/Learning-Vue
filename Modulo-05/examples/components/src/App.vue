<script setup>
import Usuario from './components/Usuario.vue'
</script>

<template>
  <button @click="changeName()">Change</button>
  <Usuario />
</template>

<script>
  export default {
    data() {
      return {
        name: 'Pedro'
      }
    },
    methods: {
      changeName () {
        this.name = 'Ana';
      }
    },
  }
</script>