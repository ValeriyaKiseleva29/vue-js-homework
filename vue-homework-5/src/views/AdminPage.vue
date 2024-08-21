<template>
  <div>
    <h1>Админская страница</h1>
    <p>Только администраторы могут видеть эту страницу.</p>
    <button @click="goToHome">Вернуться на главную страницу</button>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style>

</style>