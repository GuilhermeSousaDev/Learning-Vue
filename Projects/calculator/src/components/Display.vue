<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
    name: 'Display',
    props: ['value'],
}
</script>

<style>
.display {
  grid-column: span 4;
  background: #0004;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1rem;
  overflow: hidden;
}
</style>