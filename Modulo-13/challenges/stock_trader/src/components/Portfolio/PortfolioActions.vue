<template>
    <div>
        <div class="bought_action-info">
            <span>{{ action.name }}</span>
            <span>( Price: {{ action.price | money }} | Qtde: {{ action.quantity }} )</span>
        </div>
        <div class="buy-bought_action">
            <input type="number" :value="quantity_actions" @change="e => quantity_actions = e.target.value" />
            <button 
                @click="sellAction()"
                :disabled="isInvalidSell"
            >
            Sell
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioActions',
    props: ['action'],
    data() {
        return {
            quantity_actions: 0,
        }
    },
    methods: {
        sellAction() {
            const payload = {
                ...this.action,
                quantity: this.action.quantity - this.quantity_actions,
                selled_actions: this.quantity_actions,
            }

            const cashPayload = this.action.price * this.quantity_actions;

            this.$store.commit('updateCash', cashPayload);
            
            this.$store.dispatch('sellAction', payload);
            
            this.quantity_actions = 0;
        }
    },
    computed: {
        isInvalidSell() {
            return this.quantity_actions > this.action.quantity 
            || this.quantity_actions <= 0; 
        }
    }
}
</script>

<style>
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

.buy-bought_action>input {
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}

.buy-bought_action>button {
    border-radius: 5px;
    cursor: pointer;
}

.buy-bought_action>button:hover {
    background: #42b983;
    border-radius: 5px;
    cursor: pointer;
}
</style>