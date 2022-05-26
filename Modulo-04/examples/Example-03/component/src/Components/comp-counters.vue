<template>
    <div id="counters">     
        <h1>Contadores</h1>
        <app-counter v-for="c in 5" :key="c"></app-counter>
    </div>
</template>

<script lang="ts">
    import counter from '../Components/comp-counter.vue';
    
    export default {
        components: { 'app-counter': counter }
    }
</script>

<style>
</style>