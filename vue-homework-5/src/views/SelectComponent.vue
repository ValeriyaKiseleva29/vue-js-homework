<template>
  <div>
    <select id="options" v-model="selectedValue">
      <option value="" disabled>Выберите значение</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <p>Выбранное значение: {{ selectedValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  }
};
</script>

<style scoped>
select {
  padding: 8px;
  font-size: 16px;
  margin-top: 10px;
}

p {
  margin-top: 10px;
  font-size: 16px;
}
</style>
