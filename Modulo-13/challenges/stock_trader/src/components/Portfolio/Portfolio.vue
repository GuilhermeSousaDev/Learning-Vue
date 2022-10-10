<template>
    <div class="bought_actions" v-if="actions.length">
        <div v-for="action in actions" class="bought_action">
            <PortfolioActions :action="action" />
        </div>
    </div>
    <div class="no_actions" v-else>
        <span>No Actions in Portfolio</span>
        <router-link to="/actions">Buy Actions Here!</router-link>
    </div>
</template>


<script>
import PortfolioActions from './PortfolioActions.vue';

export default {
    name: "Portfolio",
    components: { PortfolioActions },
    computed: {
        actions() {
            return this.$store.getters.bought_actions;
        }
    },
}
</script>

<style>
.no_actions {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 540px
}
.no_actions a {
    margin-top: 30px;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    color: black;
}
.no_actions a:hover {
    background: #42b983;
}
.bought_actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.bought_action {
    width: 300px;
    margin-left: 20px;
}
</style>