<template>
    <div class="max-w-lg mx-auto">
      <div v-for="item in items" :key="item.id" class="flex items-center p-4 bg-white shadow-md rounded-lg mb-4">
        <div class="flex flex-col flex-1">
          <span class="text-gray-500 font-bold">{{ item.code }}</span>
          <span class="text-gray-700">{{ item.name }}</span>
          <div class="flex items-center">
            <button @click="decreaseQuantity(item)" class="text-red-500 text-lg font-bold">-</button>
            <span class="mx-2 text-red-500 font-bold">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="text-gray-500 text-lg font-bold">+</button>
          </div>
        </div>
        <div class="text-right">
          <span class="block text-gray-500">{{ item.price.toLocaleString() }}</span>
          <span class="block text-lg font-bold">{{ (item.price * item.quantity).toLocaleString() }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, code: "SP000018", name: "Kẹo extra xylitol bạc hà hũ 56g", price: 22000, quantity: 1 },
          { id: 2, code: "SP000012", name: "Son dưỡng Sheer cam", price: 75000, quantity: 1 },
          { id: 3, code: "SP000024", name: "Mì bò hầm cải chua Reeva hộp 100g", price: 15000, quantity: 1 },
          { id: 4, code: "SP000001", name: "Thuốc lá 555 nội", price: 24000, quantity: 1 },
          { id: 5, code: "SP000008", name: "Nước ép Necta đào 1L", price: 38000, quantity: 1 },
          { id: 6, code: "SP000010", name: "Coca chai 390ml", price: 7000, quantity: 1 },
        ],
      };
    },
    methods: {
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) item.quantity--;
      },
    },
  };
  </script>
  
  <style>
  /* You can add any additional styling if needed here */
  </style>
  