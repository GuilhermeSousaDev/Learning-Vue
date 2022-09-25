<template>
    <div class="actions">
        <div v-for="action in actions" class="action">
            <div class="action_info">
                <span>{{ action.name }}</span> <span>( {{ action.price }} )</span>
                <div class="buy_action">
                    <input type="number" v-model="quantity_actions" />
                    <button @click="buyAction()">Buy</button>
                </div>
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
        buyAction() {
            console.log(quantity_actions);
        }
    },
    computed: {
        actions() {
            return this.$store.state.actions;
        }
    }
}
</script>