<template>
  <div id="app">
    <h1>Vue http</h1>

    <div>
      <input type="text" placeholder="name" v-model="user.name">
      <input type="text" placeholder="email" v-model="user.email">
    </div>

    <button @click="createUser()">Create User</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    createUser() {
      if (this.user.name && this.user.email) {
        this.$http.post('users.json', this.user)
          .then(res => console.log(res))
      }
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
</style>
