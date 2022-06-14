<template>
    <div class="selectUser">
        <div v-if="user">
            <h1>Id: {{ user.id }}</h1>
            <h1>Name: {{ user.name }}</h1>
            <h1>Age: {{ user.age }}</h1>
        </div>
        <h1 v-else>Nenhum Usuário Selecionado</h1>
    </div>
</template>

<script>
    export default {
        name: 'app-select-user',
        props: ['user']
    }
</script>