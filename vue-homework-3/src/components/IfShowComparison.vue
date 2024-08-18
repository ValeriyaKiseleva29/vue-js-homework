<template>
  <div>
    <button @click="toggleVisibility">Перемкнути видимість</button>
    <p v-if="isVisible">Цей елемент використовує v-if</p>
    <p v-show="isVisible">Цей елемент використовує v-show</p>
  </div>
</template>

<script>
export default {
  name: 'IfShowComparison',
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style scoped>
button {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
