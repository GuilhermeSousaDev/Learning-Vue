<template>
    <div>
        <h3>Users Details</h3>

        <p>ID: <strong>{{ id }}</strong></p>
        <router-link 
            tag="button" 
            :to="{ 
                name: 'editUser', 
                params: { id }, 
                query: { completed: true, lang: 'pt-br' } ,
                hash: '#rodape'
            }"
        >
            Edit
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'UserDetails',
        data() {
            return {
                id: this.$route.params.id,
            }
        }
    }
</script>