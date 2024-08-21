<template>
  <div>
    <h2>Пример формы с различными типами полей ввода</h2>

    <div>
      <label for="textInput">Текстовое поле:</label>
      <input id="textInput" v-model="formData.textInput" type="text" />
    </div>

    <div>
      <label for="numberInput">Числовое поле:</label>
      <input id="numberInput" v-model.number="formData.numberInput" type="number" />
    </div>

    <div>
      <label for="checkboxInput">Чекбокс:</label>
      <input id="checkboxInput" v-model="formData.checkboxInput" type="checkbox" />
    </div>

    <h3>Значения модели:</h3>
    <p>Текстовое поле: {{ formData.textInput }}</p>
    <p>Числовое поле: {{ formData.numberInput }}</p>
    <p>Чекбокс: {{ formData.checkboxInput ? 'Выбран' : 'Не выбран' }}</p>

    <button @click="updateModel">Изменить значения модели</button>
  </div>
</template>

<script>
export default {
  name: 'FormExample',
  data() {
    return {
      formData: {
        textInput: '',
        numberInput: 0,
        checkboxInput: false
      }
    };
  },
  methods: {
    updateModel() {
      this.formData.textInput = 'Новое значение текста';
      this.formData.numberInput = 42;
      this.formData.checkboxInput = true;
    }
  }
};
</script>

<style>
form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 5px;
  font-size: 16px;
}
</style>
