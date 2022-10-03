<template>
    <div class="actions">
        <div v-for="(action, i) in actions" class="action">
            <Action :action="action" />
            <BuyAction :action="action" :index="i" />
        </div>
    </div>
</template>

<script>
import Action from './Action.vue';
import BuyAction from './BuyAction.vue';

export default {
    name: 'Actions',
    components: { Action, BuyAction },
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
</style>