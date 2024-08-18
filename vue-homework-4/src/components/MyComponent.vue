<template>
  <div class="container mt-2">
    <div>
      <button @click="generateItems" class="btn btn-danger mx-2 my-2 rounded">обновить список</button>
      <ul>
        <li v-for="(item, index) in items" :key="index" :style="item.style">
          {{item.text}}
        </li>
      </ul>
    </div>
    <button @click="toggleAnimation" class="btn btn-primary mb-3">Анимировать элемент</button>
    <div :class="{'animated-element': isActive}" class="element border rounded"></div>
  </div>
</template>
<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      items: [],
      isActive: false
    };
  },
  created() {
    this.generateItems();
  },
  methods: {
    generateItems() {
      this.items = [];
      for (let i = 0; i < 10; i++) {
        const randomColor = this.getRandomColor();
        const randomFontSize = this.getRandomFontSize();
        this.items.push({
          text: `Элемент ${i + 1}`,
          style: {
            backgroundColor: randomColor,
            fontSize: randomFontSize + 'px'
          }
        });
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getRandomFontSize() {
      return Math.floor(Math.random() * 13) + 12;
    },
    toggleAnimation(){
      this.isActive = !this.isActive;
    }

  }
}

</script>
<style scoped>
.element {
  width: 100px;
  height: 100px;
  background-color: #007bff;
  transition: all 0.5s ease;
}
.animated-element {
  transform: translateX(100px) rotate(45deg);
  background-color: #dc3545;
  width: 150px;
  height: 150px;
}
</style>