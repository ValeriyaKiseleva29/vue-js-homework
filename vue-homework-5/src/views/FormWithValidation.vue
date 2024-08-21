<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Имя пользователя:</label>
        <input id="username" v-model="form.username" type="text" @blur="validateUsername"/>
        <span v-if="errors.username" class="error">{{ errors.username }}</span>
      </div>

      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="form.email" type="email" @blur="validateEmail"/>
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div>
        <label for="password">Пароль:</label>
        <input id="password" v-model="form.password" type="password" @blur="validatePassword"/>
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>

    <p v-if="submitStatus === 'success'" class="success">Регистрация прошла успешно!</p>
    <p v-if="submitStatus === 'error'" class="error">Исправьте ошибки и попробуйте снова.</p>
  </div>
  <FormExample/>
</template>

<script>
import FormExample from "@/views/FormExample.vue";
export default {
  name: 'FormWithValidation',
  components: {FormExample},
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      errors: {
        username: null,
        email: null,
        password: null
      },
      submitStatus: ''
    };
  },
  methods: {
    validateUsername() {
      if (this.form.username.length < 3) {
        this.errors.username = 'Имя пользователя должно содержать минимум 3 символа';
      } else {
        this.errors.username = null;
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Введите корректный email';
      } else {
        this.errors.email = null;
      }
    },
    validatePassword() {
      if (this.form.password.length < 6) {
        this.errors.password = 'Пароль должен содержать минимум 6 символов';
      } else {
        this.errors.password = null;
      }
    },
    submitForm() {
      this.validateUsername();
      this.validateEmail();
      this.validatePassword();

      if (!this.errors.username && !this.errors.email && !this.errors.password) {
        this.submitStatus = 'success';
        console.log('Форма отправлена:', this.form);
      } else {
        this.submitStatus = 'error';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}

.success {
  color: green;
  font-size: 1em;
}

form div {
  margin-bottom: 15px;
}
</style>
