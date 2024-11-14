<!-- src/App.vue -->
<template>
  <div class="bg-gray-200 p-6 min-h-screen">
    <div class="flex md:flex-row flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Product List -->
      <ProductList :products="products" @add-to-bill="handleAddToBill" />

      <!-- Bill -->
      <Bill :billItems="billItems" @update-bill="handleUpdateBill" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ProductList from './components/ProductList.vue';
import Bill from './components/Bill.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    Bill,
  },
  setup() {
    const products = ref([
      { id: 1, code: "SP000018", name: "Kẹo extra xylitol bạc hà hũ 56g", price: 22000 },
      { id: 2, code: "SP000012", name: "Son dưỡng Sheer cam", price: 75000 },
      { id: 3, code: "SP000024", name: "Mì bò hầm cải chua Reeva hộp 100g", price: 15000 },
      { id: 4, code: "SP000001", name: "Thuốc lá 555 nội", price: 24000 },
      { id: 5, code: "SP000008", name: "Nước ép Necta đào 1L", price: 38000 },
      { id: 6, code: "SP000010", name: "Coca chai 390ml", price: 7000 },
    ]);

    const billItems = ref([]);

    const handleAddToBill = (product) => {
      const existingItem = billItems.value.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        billItems.value.push({ ...product, quantity: 1 });
      }
    };

    const handleUpdateBill = (updatedItem) => {
      const index = billItems.value.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        billItems.value[index].quantity = updatedItem.quantity;
        console.log(billItems.value[index].quantity);
        
        if (billItems.value[index].quantity === 0) {
          billItems.value.splice(index, 1);
        }
      }
    };

    return {
      products,
      billItems,
      handleAddToBill,
      handleUpdateBill,
    };
  },
};
</script>

<style>
/* Add any global styles here */
</style>
