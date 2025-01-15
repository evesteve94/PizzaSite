<script setup>
import OrderComponent from '@/components/OrderComponent.vue';
</script>

<template>
<main>
    <OrderComponent
    :items="[{name: 'test', price: 100}]"
    />
    
</main>

</template>

<style>
main {
  min-width: 800px;;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 1rem; */
  /* padding: 1rem; */
  /* margin: 0.5rem; */
  padding-top: 0.5rem;
  height: 85vh;
  backdrop-filter: blur(4px); /* Apply blur */
  background: rgba(105, 90, 205, 0.452); /* Optional: Add a slight tint */
  
}
</style>