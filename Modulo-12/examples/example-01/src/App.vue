<template>
  <div id="app">
    <h1>Vue http</h1>

    <div>
      <input type="text" placeholder="name" v-model="user.name">
      <input type="text" placeholder="email" v-model="user.email">
    </div>

    <button @click="createUser()">Create User</button>
    <button @click="getUsers()">Get Users</button>

    <div>
      <div v-for="(user, id) in users" :key="id">
        <strong>Name: </strong> {{ user.name }} <br>
        <strong>Email: </strong> {{ user.email }} <br>
        <strong>Id: </strong> {{ id }}
      </div>
    </div>
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
      },
      users: []
    }
  },
  methods: {
    createUser() {
      if (this.user.name && this.user.email) {
        this.$http.post('users.json', this.user)
          .then(res => {
            console.log(res)
            this.user = {}
          });
      }
    },
    getUsers() {
      this.$http.get('users.json')
        .then(interceptData => {
          this.users = interceptData;
        });
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
