<template>
  <div>
    <h1>Виберіть компонент для відображення</h1>

    <label>
      <input type="radio" value="A" v-model="selectedComponent" /> Компонент A
    </label>
    <label>
      <input type="radio" value="B" v-model="selectedComponent" /> Компонент B
    </label>
    <label>
      <input type="radio" value="C" v-model="selectedComponent" /> Компонент C
    </label>

    <div>
      <ComponentA v-if="selectedComponent === 'A'" />
      <ComponentB v-if="selectedComponent === 'B'" />
      <ComponentC v-if="selectedComponent === 'C'" />
    </div>

    <HelloWorld/>
    <LocalComponent/>
    <GlobalComponent/>
    <IfShowComparison />
    <DynamicAttributes />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import LocalComponent from '@/components/LocalComponent.vue';
import GlobalComponent from '@/components/GlobalComponent.vue';
import IfShowComparison from '@/components/IfShowComparison.vue';
import ComponentA from '@/components/ComponentA.vue';
import ComponentB from '@/components/ComponentB.vue';
import ComponentC from '@/components/ComponentC.vue';
import DynamicAttributes from '@/components/DynamicAttributes.vue';

export default {
  name: 'App',
  data() {
    return {
      selectedComponent: 'A'
    };
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    HelloWorld,
    LocalComponent,
    GlobalComponent,
    IfShowComparison,
    DynamicAttributes
  }
}
</script>

<style>

</style>
