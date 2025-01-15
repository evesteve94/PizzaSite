<script setup>
import MenuItem from '@/components/MenuItem.vue';
defineProps({
  items: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['select'])
</script>

<template>
<div class="menu-section">
    <h2>{{ type.toUpperCase() }}</h2>
    <MenuItem
    v-for="item in items"
    :key="item.id"
     :item="item"
     @select="emit('select', $event)"
     />
</div>

</template>

<style scoped>

h2 {
  width: 100%;
  background-color: slateblue;
  text-align: center;
  letter-spacing: 10px;
  font-size: 1.5rem;
  border-right: skyblue solid 5px;
    border-left: skyblue solid 5px;
    margin-top: 0.5rem;
}

.menu-section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* padding: 0.5rem; */
}

</style>