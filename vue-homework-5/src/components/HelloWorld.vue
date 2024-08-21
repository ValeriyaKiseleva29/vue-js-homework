<template>
  <div>
    <h4>Динамическое изменение</h4>

    <textarea v-model="userInput" placeholder="Введите 'красный' или 'синий'"></textarea>
    <div :class="dynamicClass" class="box"></div>


    <SelectComponent v-model="selectedOption" :options="selectOptions" />
    <button @click="changeOption">Программно выбрать 'Опция 2'</button>
  </div>
</template>

<script>
import SelectComponent from "@/views/SelectComponent.vue";

export default {
  name: 'HelloWorld',
  components: { SelectComponent },
  data() {
    return {
      userInput: '',
      selectedOption: '',
      selectOptions: [
        { value: 'option1', text: 'Опция 1' },
        { value: 'option2', text: 'Опция 2' },
        { value: 'option3', text: 'Опция 3' }
      ]
    };
  },
  computed: {
    dynamicClass() {
      if (this.userInput.toLowerCase().includes('красный')) {
        return 'red';
      } else if (this.userInput.toLowerCase().includes('синий')) {
        return 'blue';
      } else {
        return '';
      }
    }
  },
  methods: {
    changeOption() {
      this.selectedOption = 'option2';
    }
  }
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
}
.red {
  background-color: red;
  color: white;
}

.blue {
  background-color: blue;
  color: white;
}
</style>
