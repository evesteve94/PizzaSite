<script setup>
import { onMounted, computed, ref } from 'vue';
import { useMenu } from '../composables/useMenu.js';
import { useImage } from '../composables/useImage.js'; // Import the useImage composable
import DisplayItem from '@/components/DisplayItem.vue';
import MenuSection from '@/components/MenuSection.vue';

// Use the menu composable
const { menu, isLoading, error, fetchMenu } = useMenu();

// Fetch the menu on component mount
onMounted(() => {
  fetchMenu();
});

const { getImage } = useImage(); // Get the getImage function

const menuTypes = computed(() => {
  return Array.isArray(menu.value) ? [...new Set(menu.value.map(item => item.type))] : [];
});

const selectedItem = ref(null);

// Compute the image URL based on item type and name
const getItemImage = (item) => {
  if (!item) return null; // Check for null or undefined
  if (item.type === 'pizza') {
    return item.imgUrl; // Use the imgUrl directly for pizzas
  } else {
    return getImage(item.name); // Use the getImage function for non-pizza items
  }
};
</script>

<template>
  <main>
    <!-- Loading and error states -->
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="menu-container" v-if="menu.length > 0">
        <!-- Render a MenuSection for each menu type -->
        <MenuSection 
          v-for="type in menuTypes" :key="type"
          :type="type"
          :items="menu.filter(item => item.type === type)" 
          @select="selectedItem = $event"
        />
      </div>
      <div v-else>
        <p>No menu items available.</p>
      </div>
    </div>

    <!-- DisplayItem with image check -->
    <DisplayItem 
    :item="selectedItem" 
    :image="selectedItem ? getItemImage(selectedItem) : null" />
  </main>
</template>

<style scoped>
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

.menu-container {
  max-width: 500px;  
  min-width: 250px;
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  /* padding: 1rem;  */
  padding-right: 1rem;
  padding-left: 1rem;
  box-sizing: border-box; /* Ensure padding doesn't add to overall width/height */
  /* border-radius: 0.5rem; */
  /* gap: 1rem; */
  /* border: 3px solid slateblue; */
  /* padding: 0.5rem; */
  /* background-color: slateblue; */
}

.menu-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Edge */
}
</style>
