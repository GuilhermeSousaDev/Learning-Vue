<script setup>
import Usuario from './components/Usuario.vue'
</script>

<template>
  <p>Componente Pai</p>
  {{ name }}
  <button @click="changeName()">Change</button>
  <Usuario 
    :name="name" 
    @changeName="name = $event"  
  />
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