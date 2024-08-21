<template>
  <div class="custom-select-wrapper">
    <select v-model="selectedValue" class="custom-select">
      <option value="" disabled>Выберите опцию</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
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
.custom-select-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  padding: 5px;
  border-radius: 5px;
  background-color: #35495e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #42b983;
  border-radius: 5px;
  background-color: #ffffff;
  color: #35495e;
  transition: all 0.3s ease;
}

.custom-select:focus {
  border-color: #42b983;
  outline: none;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.5);
}

.custom-select option {
  padding: 10px;
}
</style>
