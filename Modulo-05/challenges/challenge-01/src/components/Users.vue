<template>
    <div class="users">
        <div class="user" v-for="user of users" :key="user.id" @click="selectUser(user.id)">
            <span>{{ user.id }}</span>
            <h1>{{ user.name }}</h1>
        </div>
    </div>
</template>

<script>
import bus from '../bus'

export default {
    name: 'app-users',
    props: {
        users: {
            type: Array,
            required: true
        },
    },
    methods: {
        selectUser(userId) {
            const selectedUser = this.users.filter(user => user.id === userId)[0];

            bus.$emit('selectUser', selectedUser);
        }
  },
}
</script>