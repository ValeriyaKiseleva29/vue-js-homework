<template>
  <div>
    <h1>Дані з API:</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axiosInstance from '@/axiosInstance';

export default {
  name: 'HelloWorld',
  data() {
    return {
      data: null,
      error: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axiosInstance.get('/data-endpoint');
        this.data = response.data;
      } catch (error) {
        this.error = 'Сталася помилка при отриманні даних';
      }
    }
  }
};
</script>

<style scoped>

</style>
