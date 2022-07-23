<template>
  <div id="app">
    <h1>Filters and Mixins</h1>
    <hr>
    <p>{{ cpf | cpf | reverse }}</p>
    <input type="text" :value="cpf | cpf | reverse" />

    <Fruits />
    <hr>
    <div>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="add" />
    </div>

    <h1>{{ globalMixin }}</h1>
  </div>
</template>

<script>
import Fruits from './components/Fruits.vue';
import FruitsMixin from './mixins/FruitsMixin';

export default {
  name: 'App',
  components: {
    Fruits
  },
  mixins: [FruitsMixin],
  filters: {
    cpf(value) {
      const arr = value.split('');

      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-');

      return arr.join('');
    }
  },
  data() {
    return {
      cpf: '60080070090',
      fruits: ['banana']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
