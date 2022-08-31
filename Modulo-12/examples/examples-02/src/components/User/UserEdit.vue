<template>
    <div>
        <h3>Users Edit</h3>

        <p><strong>ID: </strong> {{ id }} </p>
    </div>
</template>

<script>
    export default {
        name: 'UserEdit',
        props: ['id']
    }
</script>