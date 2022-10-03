<template>
    <div class="action-info">
        <span>{{ action.name }}</span>
        <span>( Price: {{ action.price | money }} )</span>
    </div>
</template>

<script>
    export default {
        name: 'Action',
        props: ['action']
    }
</script>

<style>
    .action-info {
        text-align: start;
        padding: 5px;
        background: #42b983;
    }
</style>