<script setup>
import { ref, computed } from 'vue';
    const productLists = ref(null);

    const response = await fetch(`http://localhost:3000/product/list`);
    const data = await response.json();
    productLists.value = data;


</script>

<template>
    <div class="about">
        <h1>Product Lists</h1>
        <ul v-if="productLists && productLists.length">
            <li v-for="product of productLists">
            <p><strong>Product Name: {{ product.description }}</strong></p>
            <p>Price: {{ product.price }}</p>
            </li>
        </ul>
    </div>    
</template>