<template>
    <div>
        <h3>Users Edit</h3>

        <p><strong>ID: </strong> {{ id }} </p>
        <p><strong>Complet: </strong> {{ $route.query.completed? 'Yes' : 'No' }} </p>
        <p><strong>Language</strong> {{ $route.query.lang }} </p>
    </div>
</template>

<script>
    export default {
        name: 'UserEdit',
        props: ['id']
    }
</script>