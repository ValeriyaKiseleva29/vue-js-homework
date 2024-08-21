<template>
  <div>
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, страница, которую вы ищете, не существует.</p>
    <button @click="goToHome">Вернуться на главную страницу</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style>

</style>
