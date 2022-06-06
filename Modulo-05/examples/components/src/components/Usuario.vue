<template>
    <div>
        <h2>{{ name }}</h2>
        <button @click="reverseName()">Reverse</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                //required: true,
                default: "Anonimo"
            },
        },
        methods: {
            reverseName() {
                return this.name.split('').reverse('').join('')
            }
        }
    }
</script>