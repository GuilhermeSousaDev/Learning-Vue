<template>
    <div>
        <h1>Menu</h1>

        <router-link to="/">Home</router-link>
        <router-link to="/user">User</router-link>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style>
    a {
        margin-left: 50px
    }
</style>