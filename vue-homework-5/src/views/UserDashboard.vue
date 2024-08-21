<template>
  <div>
    <h1>Панель пользователя</h1>
    <p>Только авторизованные пользователи могут видеть эту страницу.</p>
    <button @click="goToHome">Вернуться на главную страницу</button>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style>

</style>