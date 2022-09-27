<template>
    <div class="actions">
        <div v-for="action in actions" class="action">
            <div class="action-info">
                <span>{{ action.name }}</span> 
                <span>( Price: {{ action.price | money }} )</span>
            </div>
            <div class="buy-action">
                <input 
                    type="number" 
                    value="0"
                    @change="e => quantity_actions = Number(e.target.value)" 
                />
                <button @click="buyAction(action)">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActionView',
    data() {
        return {
            quantity_actions: 0,
        }
    },
    methods: {
        buyAction(action) {
            const payload = {
                ...action,
                quantity: this.quantity_actions,
            }

            if (this.quantity_actions <= 0) return;

            if (this.quantity_actions * action.price > this.$store.state.cash) return;
            
            return this.$store.commit('buyAction', payload);
        }
    },
    computed: {
        actions() {
            return this.$store.state.actions;
        },
    }
}
</script>

<style>
    .actions {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
    .action {
        width: 300px;
        margin-left: 20px;
    }
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
    .buy-action > input {
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: 1px solid gray;
        margin-bottom: 10px;
    }
    .buy-action > button {
        border-radius: 5px;
        cursor: pointer;
    }
    .buy-action > button:hover {
        background: #42b983;
        border-radius: 5px;
        cursor: pointer;
    }
</style>