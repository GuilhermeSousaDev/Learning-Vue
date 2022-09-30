<template>
    <nav>
        <div class="left-side">
            <router-link to="/">{{ logo }}</router-link> 
            <router-link to="/">Home</router-link>
            <router-link to="/portfolio">Portfólio</router-link >
            <router-link to="/actions">Actions</router-link >
        </div>
        <div class="right-side">
            <strong @click="$store.dispatch('changeActionCashValue')">Finish Day</strong>
            <strong @click="showInfo = showInfo? false : true">Save & Load</strong>
            <div id="save-load-info" v-if="showInfo">
                <span>Save</span> <br> <br>
                <span>Load</span>
            </div>
            <strong>Cash: {{ cash | money }}</strong>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            showInfo: false,
        }
    },
    computed: {
        logo() {
            return 'stocktrader'.toUpperCase();
        },
        cash() {
            return this.$store.state.cash;
        },
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
        cursor: pointer;
    }
    #save-load-info {
        position: absolute;
        border: 1px solid black;
        padding: 15px;
        left: 65%;
        top: 50px;
    }
    #save-load-info > span:hover {
        background: black;
        color: white;
        cursor: pointer;
    }
</style>