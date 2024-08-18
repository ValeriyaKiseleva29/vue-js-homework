<template>
  <div class="text-center mb-4">
    <button @click="toggleTheme" class="btn" :class="themeButtonClass">
      Переключить тему
    </button>
  </div>
</template>
<script>
export default {
  name: 'ThemeSwitcher',
  data(){
    return{
      isDarkTheme: false,
    };
  },
  computed: {
    themeButtonClass() {
      return this.isDarkTheme ? 'btn-light' : 'btn-dark';
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      if (this.isDarkTheme) {
        document.body.classList.add('bg-dark', 'text-white');
        document.body.classList.remove('bg-light', 'text-dark');
      } else {
        document.body.classList.add('bg-light', 'text-dark');
        document.body.classList.remove('bg-dark', 'text-white');
      }
    }
  },
  mounted() {
    document.body.classList.add('bg-light', 'text-dark');
  }
};
</script>

<style scoped>

</style>