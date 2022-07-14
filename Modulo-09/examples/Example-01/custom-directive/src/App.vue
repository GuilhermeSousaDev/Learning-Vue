<template>
  <div id="app">
    <p v-color="'blue'">Custom Blue Directive</p>
    <p v-color.slow.alternate="{ 
      colorOne: 'blue', colorTwo: 'purple', interval: 5000, slow: 1000 
    }">Custom Red Directive</p>
    <p v-color:background.slow.alternate="{ 
      colorOne: 'red', colorTwo: 'purple', slow: 1000, interval: 5000 
    }">Custom arg Red Directive</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  directives: {
    'color': {
      bind(el, binding) {
        const applyColor = color => {
          if (binding.arg === 'background') {
            el.style.backgroundColor = color;
          } else {
            el.style.color = color;
          }
        }

        let slowing = 0;

        if (binding.modifiers['slow']) slowing = binding.value.slow;

        const colorOne = binding.value.colorOne;
        const colorTwo = binding.value.colorTwo;
        let primaryColor = colorOne;

        setTimeout(() => {
          if (binding.modifiers['alternate']) {
            setInterval(() => {
              primaryColor = primaryColor === colorOne ? colorTwo : colorOne;
              applyColor(primaryColor);
            }, binding.value.interval); 
          } else {
            applyColor(binding.value.colorOne);
          }
        }, slowing);
      }
    }
  },
  data() {
    return {
      color: 'red'
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
