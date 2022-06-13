<script setup>
import Usuario from './components/Usuario.vue'
import EditUsuario from './components/EditUsuario.vue';
</script>

<template>
  <div class="container">
    <p>Componente Pai {{ name }}</p>
    <p>Idade: {{ age }}</p>
    <button @click="changeName()">Change</button>
    <hr>
    <Usuario 
      :name="name" 
      :age="age"
      :reloadName="reloadName"
    />
    <hr>
    <EditUsuario :age="age"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Pedro',
        age: 17
      }
    },
    methods: {
      changeName () {
        this.name = 'Ana'
      },
      reloadName () {
        this.name = 'Pedro'
      },
      changeAge () {
        this.age = 33;
      }
    },
    created() {
      barramento.$on('changedAge', age => {
        console.log(age)
      })
    }
  }
</script>