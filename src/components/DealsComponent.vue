<template>
    <div class="deals-component">
            <h4>Deals</h4>
            <p>20% off on all pizzas when buying 3 or more pizzas</p>
            <p>Free delivery on orders over 399:-</p>
            <p>* Free drink when ordering a drink maybe? all purchases are final. You have no right to an attorney or to remain silent about your purchases.</p>.

    </div>
</template>

<style scoped>
    .deals-component {
        width: 100%;
        height: auto;
        text-align: right;
        padding-right: 1rem;
        padding-left: 1rem;
        font-size: 10px;
        /* background-color: skyblue; */
        overflow-y: auto; /* Enable vertical scrolling if content overflows */
    }
    
.deals-component::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Edge */
}

    h4 {
        font-size: 1.5rem;
    }
</style>