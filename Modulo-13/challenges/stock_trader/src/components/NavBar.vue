<template>
    <nav>
        <div class="left-side">
            <router-link to="/">{{ logo }}</router-link> 
            <router-link to="/">Home</router-link>
            <router-link to="/portfolio">Portfólio</router-link >
            <router-link to="/actions">Actions</router-link >
        </div>
        <div class="right-side">
            <strong>Finish Day</strong>
            <strong>Save & Load</strong>
            <strong>Seu Saldo: {{ cash | money }}</strong>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    computed: {
        logo() {
            return 'stocktrader'.toUpperCase();
        },
        cash() {
            return this.$store.state.cash;
        }
    }
}
</script>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1.5rem;
        box-shadow: 2px 2px 5px gray;
    }

    .left-side a {
        margin: 5px;
        text-decoration: none;
    }
    .right-side strong {
        margin: 12px;
    }
</style>