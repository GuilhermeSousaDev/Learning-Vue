<template>
    <div>
        <h3>Users List</h3>
        <ul>
            <router-link tag="li" to="user/1">
                User 1</router-link>
            <router-link tag="li" to="/user/2">
                User 2</router-link>
            <li @click="showUserDetails(3)">User 3</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'UserList',
        methods: {
            showUserDetails(id) {
                this.$router.push(`/user/${id}`);
            }
        }
    }
</script>