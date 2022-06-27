<script>
import TodoList from './components/TodoList.vue';

export default {
    created() {
        this._loadValueInStorage();
    },
    updated() {
        this._setProgress();
    },
    data() {
        return {
            range: 0,
            inpValue: "",
            todoList: []
        };
    },
    methods: {
        addTodo() {
            if (this.inpValue) {
                const existedTodo = this.todoList.filter(todos => todos.text === this.inpValue);
                if (!existedTodo.length) {
                    const todo = {
                        id: this.todoList.length + 1 || 1,
                        text: this.inpValue,
                        selected: false
                    };
                    this.todoList.push(todo);
                    this.inpValue = "";

                    this._setOrUpdateValueInStorage();
                }
            }
        },
        removeTodo(id) {
            this.todoList = this.todoList.filter(todo => todo.id !== id);

            this._setOrUpdateValueInStorage();
            this._setProgress();
        },
        selectTodo(id) {
            const todo = this.todoList.filter(todo => todo.id === id)[0];
            todo.selected = !todo.selected;

            this._setOrUpdateValueInStorage();
            this._setProgress();
        },
        _setOrUpdateValueInStorage() {
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },
        _loadValueInStorage() {
            if (localStorage.getItem("todoList")) {
                this.todoList = JSON.parse(localStorage.getItem("todoList"));
                this._setProgress();
            }
        },
        _setProgress() {
            const selectedItems = this.todoList.filter(todo => todo.selected === true);
            this.range = Math.round(selectedItems.length * 100 / this.todoList.length);
        },
    },
    components: { TodoList }
}
</script>

<template>
  <h1>Todo list</h1>
  {{ range }}% <br>
  <progress v-if="range" max="100" :value="range"></progress>
  <br>
  <input type="text" v-bind:value="inpValue" @input="e => inpValue = e.target.value" />
  <br>
  <button @click="addTodo()">Add Todo</button>

  <TodoList 
    :todoList="todoList" 
    :removeTodo="removeTodo"
    :selectTodo="selectTodo"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todoList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 50px;
}

.todo {
  border: 2px solid black;
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
  margin-top: 10px;
}

.selected {
  background: green;
}

#removeTodo {
  width: 5px;
  height: 5px;
  border: 1px solid black;
  padding: 2px;
  cursor: pointer;
}

#removeTodo:hover {
  color: white;
  background: black;
}
</style>
