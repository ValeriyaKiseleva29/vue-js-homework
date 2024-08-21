<template>
  <div>
    <h5>Пустая страница для примера</h5>
    <p>Страница под номером {{ userId }}</p>
    <button @click="goBack">Вернуться на главную страницу</button>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style>

</style>
