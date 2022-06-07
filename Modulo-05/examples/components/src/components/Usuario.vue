<template>
    <div>
        <h2>{{ reverseName() }}</h2>
        <button @click="reloadName()">Reload</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                //required: true,
                default: function () {
                    return Array(10).fill(0).join('')
                }
            },
        },
        methods: {
            reverseName() {
                return this.name.split('').reverse('').join('')
            },
            reloadName() {
                this.name = "Pedro"
                this.$emit('changeName', this.name)
            }
        }
    }
</script>