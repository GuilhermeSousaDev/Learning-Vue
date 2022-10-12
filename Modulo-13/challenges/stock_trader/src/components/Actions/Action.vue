<template>
    <div>
        <div class="action-info">
            <span>{{ action.name }}</span>
            <span>( Price: {{ action.price | money }} )</span>
        </div>
        <div class="buy-action">
            <input 
                type="number" 
                :value="quantity_actions"
                @change="e => quantity_actions = e.target.value" 
            />
            <button 
                :disabled="isInvalidBuy" 
                @click="buyAction(action, index)"
            >
                Buy
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Action',
    props: ['action', 'index'],
    data() {
        return {
            quantity_actions: 0,
        }
    },
    methods: {
        buyAction(action, index) {
            const payload = {
                ...action,
                quantity: this.quantity_actions,
                index,
            }

            this.$store.dispatch('buyAction', payload);
            this.quantity_actions = 0;
        }
    },
    computed: {
        isInvalidBuy() {
            return this.quantity_actions * this.action.price > this.$store.state.cash 
            || this.quantity_actions <= 0;
        }
    }
}
</script>

<style>
.action-info {
    text-align: start;
    padding: 5px;
    background: #42b983;
}

.buy-action {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid black;
}

.buy-action>input {
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}

.buy-action>button {
    border-radius: 5px;
    cursor: pointer;
}

.buy-action>button:hover {
    background: #42b983;
    border-radius: 5px;
    cursor: pointer;
}
</style>