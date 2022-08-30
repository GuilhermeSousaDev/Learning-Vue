<template>
    <div>
        <h3>Users Details</h3>

        <p>ID: <strong>{{ id }}</strong></p>
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
    }
</script>