<template>
  <div>
    <h5>Дочерний компонент</h5>
    <p>Этот текст отображается в дочернем компоненте внутри родительского</p>
    <button @click="goBack">Вернуться к родительскому компоненту</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    goBack(){
      this.$router.push('/parent');
    }
  }
};
</script>
