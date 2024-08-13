<template>
  <div>
    <h1>Информация</h1>
    <p>имя: {{ person.name }}</p>
    <p>возраст: {{ person.age }}</p>

    <!-- Задание 1 -->
    <button @click="changeName">Изменить имя</button>

    <!-- Задание 2 -->
    <button @click="changeAge">Изменить возраст</button>

    <!-- Задание 3 -->
    <input type="text" @input="updateName" placeholder="Введите новое имя" />

    <!-- Задание 4 -->
    <h2>Отфильтрованные элементы</h2>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- Задание 5 -->
    <button @click="toggleComponentState">Переключить состояние компонентов</button>
    <div v-if="isComponentVisible">
      <p>Этот компонент виден</p>
    </div>

    <!-- Задание 6 -->
    <h2>Проверка формы</h2>
    <form @submit.prevent="validateForm">
      <input type="text" v-model="formData.name" placeholder="Введите имя" />
      <input type="text" v-model="formData.age" @input="validateAgeInput" placeholder="Введите возраст" inputmode="numeric" pattern="[0-9]*" />
      <button type="submit">Отправить</button>
    </form>
    <p v-if="formError">{{ formError }}</p>

    <!-- Задание 7 -->
    <p>Приветствие: {{ greeting }}</p>

    <!-- Задание 8 -->
    <h2>Отфильтрованный список</h2>
    <ul>
      <li v-for="item in filteredByActiveStatus" :key="item.id">{{ item.name }} ( {{ item.active }})</li>
    </ul>

    <!-- Задание 9 -->
    <h2>Комбинированные данные</h2>
    <p>{{ combinedData }}</p>

    <!-- Задание 10 -->
    <h2>Калькулятор скидки</h2>
    <label for="price">Цена товара:</label>
    <input type="text" v-model="price" id="price" placeholder="Введите цену товара" />

    <label for="discount">Процент скидки:</label>
    <input type="text" v-model="discountPercentage" id="discount" placeholder="Введите процент скидки" />

    <h2>Результаты:</h2>
    <p>Сумма скидки: {{ discountAmount }} грн</p>
    <p>Итоговая цена: {{ finalPrice }} грн</p>

    <!-- Задание 11 -->
    <h2>Watchers</h2>
    <button @click="incrementCounter">Увеличить счетчик</button>
    <p>Значение счетчика: {{ counter }}</p>
    <p>{{ counterMessage }}</p>

    <!-- Задание 12 -->
    <h2>Отслеживание изменений имени</h2>
    <p>{{ nameChangeMessage }}</p>

    <!-- Задание 13 -->
    <h2>Отправка API при изменении скидки</h2>
    <p>{{ apiResponse }}</p>

    <!-- Задание 14 -->
    <h2>Отслеживание изменений итоговой цены</h2>
    <p>{{ finalPriceMessage }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: 'Валерия',
        age: 29
      },
      items: [
        {id: 1, name: 'Яблоко', category: 'фрукт'},
        {id: 2, name: 'Морковь', category: 'овощ'},
        {id: 3, name: 'Банан', category: 'фрукт'},
        {id: 4, name: 'Картофель', category: 'овощ'}
      ],
      filterCriteria: 'фрукт',
      isComponentVisible: true,
      formData: {
        name: '',
        age: ''
      },
      formError: '',
      newItems: [
        {id: 1, name: 'Маша', active: true},
        {id: 2, name: 'Саша', active: false},
        {id: 3, name: 'Света', active: true},
        {id: 4, name: 'Даша', active: false}
      ],
      apiResponseData: null,
      price: 0,
      discountPercentage: 0,
      personMessage: '',
      counter: 0,
      counterMessage: '',
      nameChangeMessage: '',
      apiResponse: '',
      finalPriceMessage: '',
    };
  },
  methods: {
    changeName() {
      this.person.name = 'Лера';
    },
    changeAge() {
      this.person.age = 35;
    },
    updateName(event) {
      this.person.name = event.target.value;
    },
    filterItemsByCategory() {
      return this.items.filter(item => item.category === this.filterCriteria);
    },

    toggleComponentState() {
      this.isComponentVisible = !this.isComponentVisible;
    },

    validateForm() {
      if (this.formData.name === '' || this.formData.age === '') {
        this.formError = 'Все поля должны быть заполнены';
      } else if (!isNaN(this.formData.name)) {
        this.formError = 'Имя не может быть числом';
      } else if (this.formData.age <= 0) {
        this.formError = 'Возраст должен быть положительным числом';
      } else {
        this.formError = '';
        alert('Форма успешно отправлена');
        this.formData.name = '';
        this.formData.age = '';
      }
    },
    validateAgeInput(event) {
      let value = event.target.value;
      if (value < 0) {
        this.formData.age = 0;
      } else {
        this.formData.age = value.replace(/[^0-9]/g, '');
      }
    },
    fetchApiData() {
      setTimeout(() => {
        this.apiResponseData = {
          serverMessage: 'Данные получены с сервера',
          serverValue: 42
        };
      }, 1000);
    },
    sendApiRequest(newDiscount) {
      setTimeout(() => {
        this.apiResponse = `API запрос отправлен с новым значением скидки: ${newDiscount}%`;
      }, 500);
    },
    incrementCounter() {
      this.counter += 1;
    }
  },
  computed: {
    filteredItems() {
      return this.filterItemsByCategory();
    },
    greeting() {
      return `Привет, ${this.person.name}! Тебе ${this.person.age} лет.`;
    },
    filteredByActiveStatus() {
      return this.newItems.filter(item => item.active);
    },
    combinedData() {
      if (!this.apiResponseData) {
        return 'Загрузка данных...';
      }
      return `${this.apiResponseData.serverMessage}. Возраст пользователя: ${this.person.age}. Значение с сервера: ${this.apiResponseData.serverValue}.`;
    },
    discountAmount() {
      return (this.price * this.discountPercentage) / 100;
    },
    finalPrice() {
      return this.price - this.discountAmount;
    }
  },
  mounted() {
    this.fetchApiData();
  },
  watch: {
    counter(newValue) {
      this.counterMessage = `Счетчик изменился, новое значение: ${newValue}`;
    },
    'person.name'(newName) {
      this.nameChangeMessage = `Имя изменено на: ${newName}`;
    },
    discountPercentage(newDiscount) {
      this.sendApiRequest(newDiscount);
    },
    finalPrice(newPrice) {
      this.finalPriceMessage = `Итоговая цена изменилась на: ${newPrice} грн`;
    },
    person: {
      handler(newPerson) {
        console.log(`Имя изменено на: ${newPerson.name}, возраст изменен на: ${newPerson.age}`);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style>
body{
  background-color: lightskyblue;
}
button {
  background-color: lightpink;
  color: black;
  border-radius: 10px;
}
</style>
