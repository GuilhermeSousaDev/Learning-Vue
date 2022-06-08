<template>
    <div>
        <h2>{{ reverseName() }}</h2>
        <button @click="reloadName">Reload</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
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