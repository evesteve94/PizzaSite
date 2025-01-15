<script setup>
import { computed, ref } from 'vue';
import { useCart } from '../composables/useCart.js';
import DealsComponent from '@/components/DealsComponent.vue';

const { cartItems, removeItemFromCart, addItemToCart } = useCart();

// Grouping items by their ID
const groupedItems = computed(() => {
  if (!Array.isArray(cartItems.value)) {
    return [];
  }

  const sortedItems = [...cartItems.value].sort((a, b) => a.id - b.id);
  const groups = [];

  sortedItems.forEach(item => {
    const group = groups.find(g => g.item.id === item.id);
    if (group) {
      group.count += 1;
    } else {
      groups.push({ item, count: 1 });
    }
  });

  return groups;
});

// Reactive discount based on total pizza count
const discount = computed(() => {
  // Filter and count all items with type 'pizza'
  const pizzaCount = cartItems.value.reduce((count, item) => {
    return item.type === 'pizza' ? count + 1 : count;
  }, 0);

  // Apply discount logic
  if (pizzaCount >= 3) {
    return 20; // 20% discount for 3 or more pizzas
  }
  return 0;
});


// Function to calculate the total price of all items before discounts
const calculateItemTotal = (group) => {
  return group.item.price * group.count;
}

// Function to calculate the total price of the order with applied discounts
const calculateTotal = () => {
  let total = 0;
  groupedItems.value.forEach(group => {
    const { item, count } = group;
    total += calculateItemTotal(group);
  });

  // Apply discount for pizzas
  if (discount.value > 0) {
    total *= (1 - discount.value / 100);
  }

  return total;
}

// Delivery fee computation based on total price
const deliveryFee = computed(() => {
  const total = calculateTotal();
  if (total < 399) {
    return 50;
  } else {
    return 0;
  }
});

// Final total price including delivery fee
const totalPrice = computed(() => {
  return (calculateTotal() + deliveryFee.value).toFixed(2);
});
</script>

<template>
    <div class="order-component">
      <h2>Current Order:</h2>
      <ul>
        <!-- Loop over grouped items -->
        <li v-for="(group, i) in groupedItems" :key="i">
          <span class="button-group">
            <button @click="removeItemFromCart(group.item)">-</button>
            <span>{{ group.count }} x {{ group.item.name }}</span>
            <button @click="addItemToCart(group.item)">+</button>
          </span>
          <span>{{ group.item.price }}:-</span>
          <span>{{ (group.item.price * group.count).toFixed(2) }}:-</span>
        </li>
  
        <!-- Show delivery fee dynamically based on free delivery -->
        <li>
            <span>Discount:</span> 
            <span>{{ discount }}%</span>
        </li>
        <li>
          <span>Total:</span> 
          <span>{{ calculateTotal().toFixed(2) }}:-</span>
        </li>
        <li>
          <span>Delivery Fee:</span> 
          <span>{{ deliveryFee }}:-</span>
        </li>
        <li class="total-price">
          <span>Total Price:</span> 
          <span>{{ totalPrice }}:-</span>
        </li>
  
      </ul>
      <DealsComponent/>
    </div>
  </template>
  

<style scoped>
.order-component {
  min-width: 500px;
  max-width: 800px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  backdrop-filter: blur(3px);
  background: rgba(105, 90, 205, 0.452);
}

.total-price {
  font-size: 1.5rem;
}



li {
  margin-top: 0.5rem;
  width: 500px;
  display: flex;
  justify-content: space-between;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}

button {
  background-color: skyblue;
  color: slateblue;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
