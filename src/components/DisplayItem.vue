<script setup>
import {computed} from 'vue';
import AddToCart from '@/components/AddToCart.vue';
import DealsComponent from '@/components/DealsComponent.vue';

defineProps({
    item: {
        type: Object,
        required: false
    },
    image: {
        type: String,   
        required: false
    }
})

</script>

<template>
    <div class="display-item">
        <h3>Possibly the only King-Gizzard-and-the-Lizzard-Wizzard-themed pizzeria in Malmö </h3>
        <div v-if="item" class="display-content">
            
            <div class="header">
                <h4>{{ item.name.toUpperCase() }}</h4>
                <p>Price: {{ item.price }}:-</p>
                <AddToCart
                :item="item"
                />
            </div>
            <div class="body">
                <ul>
                    <li v-if="item.type === 'pizza'" v-for="(topping, i) in item.toppings" :key="i">
                        {{ topping }}
                    </li>
                    <li v-if="item.type === 'salad'" v-for="(ingrident, i) in item.ingredients" :key="i">
                        {{ ingrident }}
                    </li>
                </ul>
                <img :src="image" :alt="item.name" v-if="item.imgUrl" />
                <p class="description">{{ item.description }}</p>
            </div>
        </div>
        <div class="default-content" v-else>
            <h2>Welcome to King Pizzard and the Lizzard Wizzard!</h2>
            <!-- <h3>Possibly the only King-Gizzard-and-the-Lizzard-Wizzard-themed pizzeria in Malmö </h3> -->
            <p>Select an item from the menu</p>
            <img src="https://slajs-assets.s3.eu-north-1.amazonaws.com/capricciosa.png" alt="Capricciosa logo" id="logo" />
        </div>
        <!-- <DealsComponent /> -->
    </div>
  </template>

<style scoped>
h3, h2 {
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 2px;
    background-color: slateblue;
    border-bottom: skyblue solid 3px;
    border-radius: 0.5rem;
}

h4 {
    font-size: 1.5rem;
    letter-spacing: 2px;
}

.display-item{
  max-width: 500px;
  min-width: 500px;
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* margin-top: 1rem; */
  gap: 0.5rem;
  /* border: skyblue solid 5px;
  border-radius: 1rem; */
  /* border-radius: 0.5rem; */
  /* gap: 1rem; */
  /* padding: 0.5rem; */
  overflow: hidden;
}

.display-content {
    background-color: slateblue;
    width: 100%;
    height: fit-content;
    gap: 0;
    border-right: skyblue solid 3px;
    border-left: skyblue solid 3px;
    border-radius: 0.5rem;
}

.header {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    /* border-bottom: 2px solid skyblue; */
    padding: 0.5rem;
    background-color: slateblue;
}

.body {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 1rem; */
    padding: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: rgba(135, 207, 235, 0.209);
    /* font-size: 0.9rem; */
}


li {
    list-style:circle;
    font-size: 1rem;
}

.description {
    width: 100%;
    height: auto;
    padding: 1rem;
    /* background-color: rgba(135, 207, 235, 0.209); */
    /* background-color: skyblue; */
}

.display-content img {
    max-height: 150px;
    max-width: 200px;
    border-radius: 0.5rem;
}

.default-content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    padding: 1rem;
    /* background-color: skyblue; */
}


#logo {
    width:  300px;
    height: auto;
}

</style>