<template>
    <div>
        <p>Editar Usuário</p>
        <p>Idade do Usuário <strong>{{ age }}</strong></p>
        <button @click="changeAge()">Change Age</button>
    </div>
</template>

<script>
import barramento from '../barramento'

export default {
    props: {
        age: {
            type: Number
        },
    },
    methods: {
        changeAge() {
            this.age = 33;
            barramento.$emit('changedAge', this.age)
        }
    }
}
</script>