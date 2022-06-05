<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Nome do Usuário: <strong>{{ reverseName() }}</strong></p>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            otherName: this.name,
        }
    },
    methods: {
        reverseName () {
            return this.name.split('').reverse().join('')
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
