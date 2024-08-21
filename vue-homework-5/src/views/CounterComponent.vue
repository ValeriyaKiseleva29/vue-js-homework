<template>
  <div>
    <h2>Счетчик</h2>
    <p>Значение счетчика: {{ value }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  },
  methods: {
    increment() {
      this.value += 1;
    },
    decrement() {
      this.value -= 1;
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
