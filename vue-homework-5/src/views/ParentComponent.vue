<template>
  <div>
    <h4>Родительский компонент</h4>
    <button v-if="$route.path === '/parent'" @click="toGoChild">Перейти в дочерний компонент</button>
    <CustomInput v-model="inputValue" label="Введите текст для родительского компонента:" />

    <p>Вы ввели: {{ inputValue }}</p>

    <router-view></router-view>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  name: 'ParentComponent',
  components: {
    CustomInput
  },
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    toGoChild() {
      this.$router.push('/parent/child');
    }
  }
};
</script>

<style>

</style>
