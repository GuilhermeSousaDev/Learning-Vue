<template>
    <div>
        <h1>User Page</h1>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'User',
        watch: {
            $route(to, from) {
                this.id = to.params.id;
            }
        },
        methods: {
            backToHome() {
                this.$router.push('/');
            }
        }
    }
</script>