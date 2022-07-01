<script>
import TodoList from './TodoList.vue';
import TodoListManagment from './TodoListManagment.vue';

export default {
    created() {
        this._loadValueInStorage();
    },
    data() {
        return {
            range: 0,
            inpValue: "",
            todoList: []
        };
    },
    watch: {
      todoList: {
        deep: true,
        handler() {
          this._setOrUpdateValueInStorage();
          this._setProgress();
        }
      }
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
                }
            }
        },
        removeTodo(id) {
            this.todoList = this.todoList.filter(todo => todo.id !== id);
        },
        selectTodo(id) {
            const todo = this.todoList.filter(todo => todo.id === id)[0]; 
            todo.selected = !todo.selected;
        },
        chooseTaskName(e) {
            this.inpValue = e.target.value;
        },  
        _setOrUpdateValueInStorage() {
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },
        _loadValueInStorage() {
            if (localStorage.getItem("todoList")) {
                this.todoList = JSON.parse(localStorage.getItem("todoList"));
            }
        },
        _setProgress() {
            const selectedItems = this.todoList.filter(todo => todo.selected === true);
            
            if(!isNaN(Math.round(selectedItems.length * 100 / this.todoList.length))) {
                this.range = Math.round(selectedItems.length * 100 / this.todoList.length);
            } else {
                this.range = 0;
            }
        },
    },
    components: { TodoList, TodoListManagment }
}
</script>

<template>
  <TodoListManagment
    :range="range"
    :inpValue="inpValue"
    :addTodo="addTodo"
    :chooseTaskName="chooseTaskName"
  />

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
