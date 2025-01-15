<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['select'])
</script>

<template>
  <div 
  class="menu-item"
  @click="emit('select', item)">
    <h3>{{ item.name }}</h3>
    <p>{{ item.price }}:-</p>   
  </div>
</template>

<style scoped>
.menu-item {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    /* border: skyblue solid 1px; */
    border-radius: 0.5rem;
    cursor: pointer;
    /* background-color: rgba(135, 207, 235, 0.37); */
    background-color: slateblue;
    padding: 0.5rem;
    border-bottom: skyblue solid 2px;
    font-weight: 800;
    transform: skewX(-15deg);
}

.menu-item:hover{
    transform: scale(1.08);
    transition: 0.3s ease;
}
</style>