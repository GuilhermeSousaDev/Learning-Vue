<template>
  <div id="app">
    <h1>Vue http</h1>

    <div v-for="message in messages" :key="message.text">
      <span :class="message.type">
        {{ message.text }}
      </span>
    </div>

    <div>
      <input type="text" placeholder="name" v-model="user.name">
      <input type="text" placeholder="email" v-model="user.email">
    </div>

    <button v-if="!isUpdate" @click="createUser()">Create User</button>
    <button v-else @click="updateUser()">Update User</button>
    <button @click="getUsers()">Get Users</button>

    <div>
      <div v-for="(user, id) in users" :key="id">
        <strong>Name: </strong> {{ user.name }} <br>
        <strong>Email: </strong> {{ user.email }} <br>
        <strong>Id: </strong> {{ id }}
        <button @click="deleteUser(id)">Delete</button>
        <button @click="showUser(id)">Show</button>
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
      users: [],
      messages: [],
      isUpdate: false,
      selectedId: null
    }
  },
  methods: {
    clear() {
      this.user = {};
      this.messages = [];
    },
    success() {
      this.messages.push({
        text: 'Operation realizated with success',
        type: 'success'
      });
    },
    danger() {
      this.messages.push({
        text: 'Error for Delete User',
        type: 'danger'
      });
    },
    createUser() {
      if (this.user.name && this.user.email) {
        this.$http.post('users.json', this.user)
          .then(_ => {
            this.clear();
            this.success();
          });
      }
    },
    getUsers() {
      this.$http.get('users.json')
        .then(interceptData => {
          this.clear();
          this.users = interceptData;
        });
    },
    deleteUser(id) {
      this.$http.delete(`users/${id}`)
        .then(_ => {
          this.clear();
          this.success();
        })
        .catch(_ => this.danger());
    },
    updateUser() {
      if (this.user.name && this.user.email) {
        this.$http.put(`users/${this.selectedId}.json`, this.user)
          .then(_ => {
            this.clear();
            this.success();
          })
          .catch(_ => this.danger());
      }
    },
    showUser(id) {
      this.user = { ...this.users[id] };
      this.isUpdate = true;
      this.selectedId = id;
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

.success {
  background: green;
  border-radius: 10px;
  margin-bottom: 10px;
}

.danger {
  background: 'red';
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
