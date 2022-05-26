<template>
    <div class="counter">
      <span>{{ count }}</span>
      <button @click="add()">Add</button>
      <button @click="sub()">Sub</button>
    </div>
</template>

<script>
    export default {
      data() {
          return {
            count: 0,
          }
      },

      methods: {
            add () {
              this.count ++
            },
            sub () {
              this.count --
            }
        }
    }
</script>
