<script setup>
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { useCart } from '@/composables/useCart.js';

// Import shared cart state
const { cartItems, cartItemsLength, cartChange } = useCart();

// Reactive variables for animation
const isAdded = ref(false);
const isRemoved = ref(false);

// Watch for cart changes
watch(cartChange, (change) => {
  if (change?.type === 'increment') {
    isAdded.value = true;
    setTimeout(() => {
      isAdded.value = false;
    }, 300);
  } else if (change?.type === 'decrement') {
    isRemoved.value = true;
    setTimeout(() => {
      isRemoved.value = false;
    }, 300);
  }
});
</script>

<template>
  <RouterLink to="/check-out">
    <div class="cart" :class="{ 'cart-added': isAdded, 'cart-removed': isRemoved }">
      🛒 {{ cartItemsLength }} items
    </div>
  </RouterLink>
</template>

<style scoped>
.cart {
  width: fit-content;
  background-color: slateblue;
  color: skyblue;
  padding: 5px;
  border-radius: 0.5rem;
  border-bottom: skyblue solid 2px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.cart-added {
  transform: scale(1.1);
  background-color: dodgerblue;
}

.cart-removed {
  transform: scale(1.1);
  background-color: tomato;
}
</style>
