<template>
  <div class="list">

  </div>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {
      newItem: {
        description: ''
      }
    }
  },

  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.list {
  height: calc(100% - 20px);
  border-radius: 10px;
  background-color: beige;
}
</style>