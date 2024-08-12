<script>
import {ref, computed, onMounted, watch} from "vue";

export default {
  setup(){
    const state = ref ('Начальное состояние');
    const toggleState = () => {
      state.value = state.value === 'Начальное состояние'
          ? 'Состояние изменено'
          : 'Начальное состояние';
  };
    const formData = ref ('');
    const errorMessage = ref ('');
    const validateForm = () => {
      if (formData.value.trim() === ''){
        errorMessage.value = 'Поле не может быть пустым';
      } else if (formData.value.length < 5){
        errorMessage.value = 'Длинна текста должна быть не меньше 5 символов';
      } else {
        errorMessage.value = '';
        alert('Данные введены корректно');
      }
    };
    const firstName = ref('Валерия');
    const lastName = ref('Киселёва');
    const fullName = computed(() =>{
      return `${firstName.value} ${lastName.value}`;
    });
    const users = ref([
      {id: 1, name:'Роман',    age:29, isActive: true},
      {id: 2, name:'Валерия',  age:35, isActive: false},
      {id: 3, name:'Олег',     age:30, isActive: true},
      {id: 4, name:'Катерина', age:23, isActive: false},
      {id: 5, name:'Ярослава', age:15, isActive: true},
    ]);
    const activeUsers = computed(() => {
      return users.value.filter(user => user.isActive);
    });


    const localData = ref ('Локальные данные');
    const fetchedData = ref(null);
    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        fetchedData.value = data;
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    });
       const combinedData = computed(() =>{
         if (fetchedData.value){
           return `${localData.value} - ${fetchedData.value.title} (${fetchedData.value.id})`;
         } else {
           return `Данные загрузаются...`;
         }
       });
    watch(
        () => combinedData.value,
        (newVal, oldVal) => {
          console.log(`combinedData изменилось с "${oldVal}" на "${newVal}"`);
        }
    );
    watch(
        () => users.value,
        (newVal, oldVal) => {
          console.log('Объект users изменился:', oldVal, '->', newVal);
        },
        { deep: true, immediate: true }
    );





    return {
      state,
      toggleState,
      errorMessage,
      formData,
      validateForm,
      fullName,
      firstName,
      lastName,
      users,
      activeUsers,
      localData,
      fetchedData,
      combinedData,

    };
  }
};

</script>

<template>
<div>
  <button @click="toggleState">Изменить состояние</button>
  <p>Текущее состояние: {{state}}</p>

  <button @click="validateForm">Проверить данные</button>
  <input type="text" v-model="formData">
  <p v-if="errorMessage" style="color: red">{{errorMessage}}</p>

  <p>Имя: {{ firstName }}</p>
  <p>Фамилия: {{ lastName }}</p>
  <p>Полное имя: {{ fullName }}</p>

  <h3>Все пользователи</h3>
  <ul>
    <li v-for="user in users" :key="user.id">
        {{user.name}}({{user.age}} лет) - {{user.isActive ? 'Активен' : 'Неактивен'}}
    </li>
  </ul>

  <h3>Активные пользователи</h3>
  <ul>
    <li v-for="user in activeUsers" :key="user.id">
    {{user.name}}({{user.age}})
    </li>
  </ul>

  <p>Локальные данные: {{ localData }}</p>
  <p>Данные из HTTP-запроса: {{ fetchedData?.title || 'Загрузка...' }}</p>
  <p>Комбинированные данные: {{ combinedData }}</p>
</div>
</template>

<style>

</style>