<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>


    <button @click="goToUser(1)">Страница 1</button>
    <button @click="goToUser(2)">Страница 2</button>
    <button @click="goToAbout">Вернуться на страницу About</button>

    <CounterComponent v-model="counterValue" />
    <p> {{ counterValue }}</p>

    <ToggleSwitch v-model="toggleState" />
    <p>Состояние переключателя: {{ toggleState ? 'Включено' : 'Выключено' }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import CounterComponent from '@/views/CounterComponent.vue'
import ToggleSwitch from '@/views/ToggleSwitch.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CounterComponent,
    ToggleSwitch
  },
  data() {
    return {
      counterValue: 0,
      toggleState: false
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  },
  methods: {
    goToUser(userId) {
      this.$router.push(`/user/${userId}`);
    },
    goToAbout() {
      this.$router.push('/about');
    }
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  gap: 20px;
}
</style>
