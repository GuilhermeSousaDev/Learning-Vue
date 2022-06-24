<script>
  export default {
    //created() {
    //  this.todoList.push([...localStorage.getItem('todoList').split(',')]);
    //  console.log(this.todoList[0])
    //},
    updated() {
      const selectedItems = this.todoList.filter(todo => todo.selected === true);

      this.range = Math.round(selectedItems.length * 100 / this.todoList.length);
    },
    data() {
      return {
        range: 0,
        inpValue: '',
        todoList: []
      }
    },
    methods: {
      addTodo() {
        if (this.inpValue) {
          const todo = {
            id: this.todoList.length + 1 || 1,
            text: this.inpValue,
            selected: false
          }
          this.todoList.push(todo);
          //localStorage.setItem('todoList', this.todoList);
          this.inpValue = '';
        }
      },
      removeTodo(id) {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
      },
      selectTodo(id) {
        const todo = this.todoList.filter(todo => todo.id === id)[0];
        todo.selected = !todo.selected;
      }
    },
  }
</script>

<template>
  <h1>Todo list</h1>
  {{ range }}% <br>
  <progress max="100" :value="range"></progress> 
  <br>
  <input type="text" v-bind:value="inpValue" @input="e => inpValue = e.target.value" />
  <br>
  <button @click="addTodo()">Add Todo</button>

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
