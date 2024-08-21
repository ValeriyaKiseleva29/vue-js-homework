<template>
  <div @click="toggle" :class="['toggle-switch', { 'toggle-on': value }]">
    <div class="toggle-knob"></div>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    modelValue: {
      type: Boolean,
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
    toggle() {
      this.value = !this.value;
    }
  }
};
</script>

<style scoped>
.toggle-switch {
  width: 60px;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-knob {
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.2s;
  transform: translateX(0);
}

.toggle-on .toggle-knob {
  transform: translateX(30px);
}

p {
  margin-left: 70px;
  font-size: 16px;
}
</style>
