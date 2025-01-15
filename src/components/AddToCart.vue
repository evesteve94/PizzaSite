<script setup>
import { useCart } from '../composables/useCart.js';

const { addItemToCart } = useCart();    

defineProps({
  item: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <button @click="addItemToCart(item)">Add to cart</button>
</template>


<style scoped>
button {
  background-color: slateblue;
  color: skyblue;
  padding: 10px 20px;
  border: none;
  border-bottom: skyblue solid 2px;
  border-left: skyblue solid 2px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.5rem;
  cursor: pointer;
}

button:hover {
  transform: skewX(-15deg);
  transition: transform 0.2s ease;
}
</style>
