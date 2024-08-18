<template>
  <div class="container mt-4">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in paginatedItems" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <nav class="mt-4">
      <ul class="pagination">
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{active: page === currentPage}">
          <button class="page-link" @click="currentPage = page">
            {{page}}
          </button>
        </li>
      </ul>
    </nav>
    <div class="mt-4">
      <input type="text" v-model="filterTerm" class="form-control" placeholder="Фильтровать элементы" @input="filterItems"/>
      <ul class="list-group mt-3">
        <li class="list-group-item"
            v-for="item in filteredItems"
            :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaginatedList",
  data() {
    return {
      items: [],
      currentPage: 1,
      itemsPerPage: 1,
      filterTerm: "",
      listItems: [],
      filteredItems: []
    };
  },
  methods: {
    filterItems() {
      this.filteredItems = this.listItems.filter(item =>
          item && item.name && item.name.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  mounted() {
    this.items = Array.from({ length: 20 }, (v, k) => ({
      id: k + 1,
      name: `Элемент ${k + 1}`
    }));
    this.listItems = Array.from({ length: 20 }, (v, k) => ({
      id: k + 1,
      name: `Фрукт ${k + 1}`
    }));
    this.filteredItems = this.listItems;
  }
};
</script>



<style scoped>
.pagination .active .page-link {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
