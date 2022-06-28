<template>
    <div>
        <h1>Todo list</h1>
        {{ range }}% <br>
        <progress v-if="range" max="100" :value="range"></progress>
        <br>
        <input 
            type="text" 
            v-bind:value="inpValue" @input="e => chooseTaskName(e)" 
            @keydown.enter="addTodo()"
        />
        <br>
        <button @click="addTodo()">Add Todo</button>
    </div>
</template>

<script>
    export default {
        props: {
            range: {
                type: Number,
                required: true,
                default: 0,
            },
            inpValue: String,
            addTodo: Function,
            chooseTaskName: Function
        }
    }
</script>