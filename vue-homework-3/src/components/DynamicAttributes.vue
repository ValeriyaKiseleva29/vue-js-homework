<template>
  <div>
    <h2>Динамічне додавання/видалення атрибутів</h2>

    <label>
      <input type="checkbox" v-model="isDisabled" /> Заблокувати кнопку
    </label>
    <label>
      <input type="checkbox" v-model="isReadonly" /> Зробити поле тільки для читання
    </label>

    <br><br>

    <button :disabled="isDisabled">Натисни мене</button>

    <br><br>

    <input type="text" :readonly="isReadonly" placeholder="Введіть текст тут" />
  </div>
</template>

<script>
export default {
  name: 'DynamicAttributes',
  data() {
    return {
      isDisabled: false,
      isReadonly: false
    };
  }
}
</script>

<style scoped>
h2 {
  color: darkblue;
}
label {
  display: block;
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
