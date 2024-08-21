<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/parent">Parent</router-link>
    </nav>
    <div class="select-container">
      <h2>Выберите опцию:</h2>
      <CustomSelect :options="selectOptions" v-model="selectedOption" />
      <p>Вы выбрали: {{ selectedOption }}</p>
    </div>

    <router-view/>
  </div>
</template>

<script>
import CustomSelect from '@/views/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    CustomSelect
  },
  data() {
    return {
      selectedOption: '',
      selectOptions: ['Option 1', 'Option 2', 'Option 3']
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.select-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: inline-block;
}

h2 {
  margin-bottom: 10px;
  color: #2c3e50;
}
</style>
