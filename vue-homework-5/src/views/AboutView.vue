<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="goToHome">Вернуться на страницу Home</button>
  </div>
  <FormWithValidation />
</template>

<script>
import FormWithValidation from "@/views/FormWithValidation.vue";
export default {
  name: 'AboutView',
  components: {FormWithValidation},
  computed: {
    title() {
      return this.$route.meta.title;
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>
