<template>
  <div id="app">
    <h1>Form Challenge</h1>

    <form v-if="!submited">
      <FullName :changeFullName="changeFullName" />
      <input type="text" placeholder="Email" v-model="form.email" />
      <input type="text" placeholder="Password" v-model="form.password" />
      <span>
        Save Form ?
        <input type="checkbox" v-model="form.saveForm" />
      </span>

      <button @click="submited = true">Enviar</button>
    </form>
    <div v-else class="result-form">
      <p>Nome Completo: {{ form.fullName }}</p>
      <p>Email: {{ form.email }}</p>
      <p>Password: {{ form.password }}</p>
      <p>Save Form: {{ form.saveForm }}</p>
      <button @click="submited = false">Voltar</button>
    </div>
  </div>
</template>

<script>
import FullName from './components/FullName'

export default {
  name: 'App',
  components: {
    FullName
  },
  data() {
    return {
      form: {
        fullName: '',
        saveForm: false
      },
      submited: false
    }
  },
  methods: {
      changeFullName(value) {
        this.form.fullName = value;
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
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form > input {
  margin-bottom: 10px;
}
form > span {
  margin-bottom: 10px;
}
</style>
