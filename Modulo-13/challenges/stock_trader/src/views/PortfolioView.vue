<template>
    <div class="bought_actions" v-if="actions.length">
        <div v-for="action in actions" class="bought_action">
            <div class="bought_action-info">
                <span>{{ action.name }}</span> 
                <span>( Price: {{ action.price | money }} | Qtde: {{ action.quantity }} )</span>
            </div>
            <div class="buy-bought_action">
                <input 
                    type="number" 
                    value="0"
                    @change="e => quantity_actions = e.target.value" 
                />
                <button @click="sellAction(action)">Sell</button>
            </div>
        </div>
    </div>
    <div class="no_actions" v-else>
        <span>No Actions in Portfolio</span>
        <router-link to="/actions">Buy Actions Here!</router-link>
    </div>
</template>

<script>
export default {
    name: 'PortfolioView',
    data() {
        return {
            quantity_actions: 0,
        }
    },
    methods: {
        sellAction(action) {
            if (this.quantity_actions < 0) return;

            if (this.quantity_actions > action.quantity) return;

            const payload = {
                ...action,
                quantity: action.quantity - this.quantity_actions,
                selled_actions: this.quantity_actions,
            }

            const cashPayload = action.price * this.quantity_actions;

            this.$store.commit('updateCash', cashPayload);

            this.$store.dispatch('sellAction', payload);
        }
    },
    computed: {
        actions() {
            return this.$store.getters.bought_actions;
        }
    }
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
.bought_action-info {
    text-align: start;
    padding: 5px;
    background: #42b983;
}
.buy-bought_action {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid black;
}
.buy-bought_action > input {
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}
.buy-bought_action > button {
    border-radius: 5px;
    cursor: pointer;
}
.buy-bought_action > button:hover {
    background: #42b983;
    border-radius: 5px;
    cursor: pointer;
}
</style>