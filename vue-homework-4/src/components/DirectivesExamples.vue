<template>
  <div class="container mt-4">
    <div class="mb-3">
      <label for="rowsInput" class="form-label">Количество строк</label>
      <input type="number" id="rowsInput" v-model="rows" class="form-control" min="1">
    </div>
    <div class="mb-3">
      <label for="columnsInput" class="form-label">Количество столбцов</label>
      <input type="number" id="columnsInput" v-model="columns" class="form-control" min="1">
    </div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th v-for="col in columns" :key="'header-' + col">Столбец {{ col }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in rows" :key="'row-' + row">
        <td v-for="col in columns" :key="'row-' + row + '-col-' + col">
        </td>
      </tr>
      </tbody>
    </table>

    <div>
      <ul>
        <li v-for="fruit in fruits" :key="fruit.id">
          <strong>{{fruit.name}}</strong>
          <ul>
            <li v-for="detail in fruit.details" :key="detail">
             {{detail}}
            </li>
          </ul>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DirectivesExamples',
  data(){
    return{
      rows: 5,
      columns: 5,
      fruits: [
        {
          id: 1,
          name: 'Яблоко',
          details: ['Зеленое', 'Красное', 'Желтое', 'Используется в пирогах']
        },
        {
          id: 2,
          name: 'Банан',
          details: ['Желтый', 'Используется в смузи', 'Отличный источник калия']
        },
        {
          id: 3,
          name: 'Апельсин',
          details: ['Оранжевый', 'Используется в соках', 'Богат витамином C']
        }
      ]
    }
  }
}
</script>
<style>

</style>

