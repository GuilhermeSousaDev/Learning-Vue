<template>
  <div id="app">
    <h1>Vue http</h1>

    <button @click="createUser()">Create User</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methdos: {
    async createUser() {
      const user = {
        name: 'Gui',
        email: 'gui@gmail.com'
      }
      
      const res = await this.$http.post('users.json', user);
      console.log(res);
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
