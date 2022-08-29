<template>
    <div>
        <h1>User Page</h1>

        <p>ID: <strong>{{ id }}</strong></p>
        <button @click="backToHome()">Voltar</button>
    </div>
</template>

<script>
    export default {
        name: 'User',
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        methods: {
            backToHome() {
                this.$router.push('/');
            }
        }
    }
</script>