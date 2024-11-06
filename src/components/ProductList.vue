<!-- src/components/ProductList.vue -->
<template>
  <div class="w-full md:w-2/3 p-4">
    <h2 class="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
    <div v-for="product in products" :key="product.id" class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div>
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-500">Mã SP: {{ product.code }}</p>
        <p class="text-gray-700">Giá: {{ formatCurrency(product.price) }}</p>
      </div>
      <button @click="addToBill(product)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Thêm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToBill(product) {
      this.$emit('add-to-bill', product);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
