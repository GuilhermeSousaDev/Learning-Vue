<template>
    <div class="todoList" v-if="todoList.length">
        <template v-for="todo in todoList">
            <div v-if="todo.selected === true">
                <div class="todo selected" @click="selectTodo(todo.id)">
                    <span @click="removeTodo(todo.id)" id="removeTodo">x</span>
                    <p>{{ todo.text }}</p>
                </div>
            </div>
            <div v-else class="todo" @click="selectTodo(todo.id)">
                <span @click="removeTodo(todo.id)" id="removeTodo">x</span>
                <p>{{ todo.text }}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array,
            required: true,
        },
        removeTodo: {
            type: Function,
            required: true,
        },
        selectTodo: {
            type: Function,
            required: true,
        }
    },
}
</script>