<template>
  <div>
    <div class="d-flex align-items-start">
      <div class="me-3">
        <button @click="handleClick" class="btn btn-danger mx-2 my-2 rounded">Нажми на меня</button>
        <ul>
          <li v-for="(time, index) in clickTimes" :key="index">{{ time }}</li>
        </ul>
      </div>
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="userName">Имя</label>
            <input type="text" id="userName" v-model="userName" class="form-control">
          </div>
          <div class="mb-3">
            <label for="nickname">Никнейм</label>
            <input type="text" id="nickname" v-model="nickName" class="form-control">
          </div>
          <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Отправить</button>
        </form>
        <div v-if="errorMessage" class="text-danger ms-3">
          {{ errorMessage }}
        </div>
      </div>
      <button class="btn btn-danger mx-2 my-2 rounded" @click="switchMethod">Кнопка к заданию 1</button>
    </div>

  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      clickTimes: [],
      userName: '',
      nickName: '',
      email: '',
      errorMessage: '',
      useFirstMethod: true
    };
  },
  methods: {
    handleClick() {
      const currentTime = new Date().toLocaleString();
      this.clickTimes.push(currentTime);
    },
    handleSubmit() {
      if (!this.userName || !this.nickName || !this.email) {
        this.errorMessage = 'Введите данные';
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Введите корректный email.';
        return;
      }
      this.errorMessage = '';

      this.userName = '';
      this.nickName = '';
      this.email = '';
    },
    methodOne(){
      alert('Первый метод');
    },
    methodTwo(){
      alert('Второй метод');
    },
    switchMethod(){
      if (this.useFirstMethod){
        this.methodOne();
      } else {
        this.methodTwo();
      }
       this.useFirstMethod = !this.useFirstMethod;
    }
  }
};
</script>

<style>

</style>
