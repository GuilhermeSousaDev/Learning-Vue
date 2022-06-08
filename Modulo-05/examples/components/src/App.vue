<script setup>
import Usuario from './components/Usuario.vue'
</script>

<template>
  <p>Componente Pai {{ name }}</p>
  <button @click="changeName()">Change</button>
  <Usuario 
    :name="name" 
    :reloadName="reloadName"
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
        this.name = 'Ana'
      },
      reloadName () {
        this.name = 'Pedro'
      }
    },
  }
</script>