<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="toggleMessage">Переключити повідомлення</button>
  </div>
</template>

<script>
export default {
  name: 'MessageSwitcher',
  data() {
    return {
      isFirstMessage: true
    };
  },
  computed: {
    message() {
      return this.isFirstMessage ? 'Перше повідомлення' : 'Друге повідомлення';
    }
  },
  methods: {
    toggleMessage() {
      this.isFirstMessage = !this.isFirstMessage;
    }
  }
}
</script>

<style scoped>
h2 {
  color: purple;
}
button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
