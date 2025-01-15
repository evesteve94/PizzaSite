import { ref, watch } from 'vue';

const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')) || []); // Singleton state
const cartItemsLength = ref(cartItems.value.length); // Length state
const cartChange = ref(null); // Track "increment" or "decrement"

export function useCart() {
  const addItemToCart = (item) => {
    const existingItems = [...cartItems.value];
    existingItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(existingItems));
    cartItems.value = existingItems; // Update reactive state
  };

  const removeItemFromCart = (item) => {
    const existingItems = [...cartItems.value];
    const index = existingItems.findIndex((cartItem) => cartItem.id === item.id); // Match by ID or unique property
    if (index !== -1) {
      existingItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(existingItems));
      cartItems.value = existingItems; // Update reactive state
    }
  };

  // Watch for changes in `cartItems` to detect increment/decrement
  watch(
    cartItems,
    (newItems, oldItems) => {
      const newLength = newItems.length;
      const oldLength = oldItems.length;

      if (newLength > oldLength) {
        cartChange.value = { type: 'increment', timestamp: Date.now() }; // Ensure unique value
      } else if (newLength < oldLength) {
        cartChange.value = { type: 'decrement', timestamp: Date.now() }; // Ensure unique value
      }

      // Update cart length
      cartItemsLength.value = newLength;
    },
    { deep: true }
  );

  return { cartItems, addItemToCart, removeItemFromCart, cartItemsLength, cartChange };
}
