<template>
  <div>
    <HelloWorld/>
    <MyComponent/>
    <ThemeSwitcher/>
    <DirectivesExamples/>
    <PaginatedList/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MyComponent from "@/components/MyComponent.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import DirectivesExamples from "@/components/DirectivesExamples.vue"
import PaginatedList from "@/components/PaginatedList.vue"
export default defineComponent({
  components: {
    HelloWorld,
    MyComponent,
    ThemeSwitcher,
    DirectivesExamples,
    PaginatedList
  },
  name: 'App'
});
</script>

<style>

</style>
