<template>
    <div>
        <h2>{{ reverseName() }}</h2>
        <p>Idade do Usuário <strong>{{ age }}</strong></p>
        <button @click="reloadName()">Reload</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true
            },
            reloadName: Function,
        },
        methods: {
            reverseName() {
                return this.name.split('').reverse('').join('')
            }
        }
    }
</script>