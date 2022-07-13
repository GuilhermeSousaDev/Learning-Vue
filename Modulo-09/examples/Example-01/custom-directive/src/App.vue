<template>
  <div id="app">
    <p v-color="'blue'">Custom Blue Directive</p>
    <p v-color.slow.alternate="color">Custom Red Directive</p>
    <p v-color:background.slow.alternate="color">Custom arg Red Directive</p>
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

        if (binding.modifiers['slow']) slowing = 3000;

        const colorOne = binding.value;
        const colorTwo = 'purple';
        let primaryColor = colorOne;

        setTimeout(() => {
          if (binding.modifiers['alternate']) {
            setInterval(() => {
              primaryColor = primaryColor === colorOne ? colorTwo : colorOne;
              applyColor(primaryColor);
            }, 1000); 
          } else {
            applyColor(binding.value);
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
