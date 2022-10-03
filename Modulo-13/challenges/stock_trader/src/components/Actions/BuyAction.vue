<template>
    <div>
        <div class="buy-action">
            <input type="number" value="0" @change="e => quantity_actions = Number(e.target.value)" />
            <button @click="buyAction(action, index)">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuyAction',
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

            if (this.quantity_actions <= 0) return;

            if (this.quantity_actions * action.price > this.$store.state.cash) return;

            return this.$store.dispatch('buyAction', payload);
        }
    },
}
</script>

<style>
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