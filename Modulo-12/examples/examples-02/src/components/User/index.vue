<template>
    <div>
        <h1>User Page</h1>
        <router-view name="menu" />
        <router-view />
        <br>
        <button @click="backToHome()">Back</button>
    </div>
</template>

<script>
    export default {
        name: 'User',
        methods: {
            backToHome() {
                this.$router.push('/');
            }
        }
    }
</script>