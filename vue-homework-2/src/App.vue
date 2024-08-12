<template>
  <div class="main-container">
    <div class="left-content">
      <button @click="updateProperty">Поменять значение</button>
      <p>{{ myObject.property1 }}</p>
      <p>{{ myObject.property2 }}</p>

      <button @click="changeMessage">Изменить сообщение</button>
      <p>{{ message }}</p>

      <input type="text" @input="submitText" placeholder="Введите текст">
      <p>{{ userInput }}</p>

      <button @click="filterItems">Фильтровать элементы</button>
      <ul>
        <li v-for="item in filteredItems" :key="item.id">{{item.name}}</li>
      </ul>

      <h3>Цена с налогом: {{priceWithTax}}</h3>
      <h3>Окончательная цена: {{finalPrice}}</h3>

      <h3>Ответ API: {{ apiResponse }}</h3>
    </div>

    <div class="right-content">
      <ToggleComponent />
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from "vue";
import ToggleComponent from "@/components/ToggleComponent.vue";

export default {
  components: { ToggleComponent },
  setup() {
    const myObject = reactive({
      property1: "Привет!",
      property2: 42,
    });

    const updateProperty = () => {
      myObject.property1 = "Пока!";
      myObject.property2 = 100;
    };

    const message = ref("Good morning!");
    const apiResponse = ref("");

    const changeMessage = () => {
      message.value = "Goodbye!";
    };

    let userInput = ref("");

    const submitText = (event) => {
      userInput.value = event.target.value;
    };

    const items = ref([
      { id: 1, name: "яблоко", type: "fruit" },
      { id: 2, name: "морковь", type: "vegetable" },
      { id: 3, name: "апельсин", type: "fruit" },
      { id: 4, name: "капуста", type: "vegetable" },
    ]);

    const filteredItems = ref(items.value);

    const filterItems = () => {
      filteredItems.value = items.value.filter(
          (item) => item.type === "fruit"
      );
    };

    const basePrice = ref(100);
    const taxRate = ref(15);
    const discount = ref(10);
    const priceWithTax = computed(() => {
      return basePrice.value * (1 + taxRate.value);
    });
    const finalPrice = computed(() => {
      return priceWithTax.value - discount.value;
    });

    watch(
        () => myObject.property1,
        (newVal, oldVal) => {
          console.log(`property1 изменился с "${oldVal}" на "${newVal}"`);
        }
    );

    watch(
        () => message.value,
        (newVal, oldVal) => {
          console.log(`message изменилось с "${oldVal}" на "${newVal}"`);
        }
    );

    watch(
        () => message.value,
        async (newVal) => {
          console.log(`message изменилось, выполняется API-запрос`);
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newVal.length}`);
            const data = await response.json();
            apiResponse.value = data.title;
          } catch (error) {
            console.error("Ошибка при выполнении API-запроса:", error);
          }
        }
    );

    return {
      myObject,
      updateProperty,
      message,
      changeMessage,
      submitText,
      userInput,
      filteredItems,
      filterItems,
      items,
      basePrice,
      taxRate,
      discount,
      priceWithTax,
      finalPrice,
      apiResponse

    };
  },
};
</script>

<style>
button {
  background-color: lightpink;
  color: black;
  border-radius: 5px;
}
.main-container {
  display: flex;
  gap: 20px;
}

.left-content {
  flex: 1;
}

.right-content {
  flex: 1;
}
</style>
