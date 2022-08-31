<template>
    <div>
        <h3>Users Details</h3>

        <p>ID: <strong>{{ id }}</strong></p>
        <router-link tag="button" :to="`/user/${id}/edit`">Edit</router-link>
        <button @click="backToHome()">Voltar</button>
    </div>
</template>

<script>
    export default {
        name: 'UserDetails',
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