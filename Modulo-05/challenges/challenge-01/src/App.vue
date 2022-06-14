<template>
  <div id="app">
    <app-users 
      :users="users" 
    />
    <app-select-user :user="user" />
  </div>
</template>

<script>
import bus from './bus'
import Users from './components/Users.vue'
import SelectUser from './components/SelectUser.vue'

export default {
  name: 'App',
  components: {
    appUsers: Users,
    appSelectUser: SelectUser
  },
  created() {
    bus.$on('selectUser', user => this.user = user)
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ana",
          age: 14,
        },
        {
          id: 2,
          name: "Pedro",
          age: 17,
        },
        {
          id: 3,
          name: "Gustavo",
          age: 21,
        },
        {
          id: 4,
          name: "Thiago",
          age: 23,
        },
      ],
      user: null,
    }
  },
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 540px;
}

.users {
  margin-right: 50px;
}

.selectUser {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  padding: 0.2rem;
  border: 1px solid black;
  width: 20%;
  height: 50%;
}

.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 0.3rem;
}

.user:hover {
  color: white;
  background: black;
  cursor: pointer;
}
</style>
