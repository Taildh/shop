<!-- src/components/Bill.vue -->
<template>
  <div class="bg-gray-100 p-4 w-full md:w-1/3">
    <h2 class="mb-4 font-bold text-2xl">Hóa Đơn</h2>
    <div class="mb-4">
      <div v-if="billItems.length === 0" class="text-gray-500"></div>
      <div v-else id="PrintMyBill">
        <div
          v-for="item in billItems"
          :key="item.id"
          class="flex justify-between items-center mb-2"
        >
          <div>
            <h3 class="font-semibold">{{ item.name }}</h3>
            <p class="text-gray-500">Giá: {{ formatCurrency(item.price) }}</p>
          </div>
          <div class="flex items-center">
            <button
              @click="decreaseQuantity(item)"
              class="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white"
            >
              -
            </button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button
              @click="increaseQuantity(item)"
              class="bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-white"
            >
              +
            </button>
          </div>
        </div>
        <div class="mt-4 pt-2 border-t">
          <p class="font-bold text-lg">Tổng tiền: {{ formatCurrency(total) }}</p>
        </div>
      </div>
    </div>
    <Print :content="billContent" />
    <button
      @click="printBill"
      v-print="'#PrintMyBill'"
      class="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded w-full text-white"
    >
      In Hóa Đơn
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import print from 'vue3-print-nb'

export default {
  name: 'Bill',
  components: {
    print,
  },
  props: {
    billItems: {
      type: Array,
      required: true,
    },
  },
  emits: ['update-bill'],
  setup(props, { emit }) {
    const billContent = ref(null)

    const increaseQuantity = (item) => {
      emit('update-bill', { ...item, quantity: item.quantity + 1 })
    }

    const decreaseQuantity = (item) => {
      if (item.quantity > 0) {
        emit('update-bill', { ...item, quantity: item.quantity - 1 })
      }
    }

    const printBill = () => {
      if (billContent.value) {
        console.log(billContent.value)
        // billContent.value.print();
      }
    }

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
    }

    const total = computed(() => {
      return props.billItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    })

    return {
      billContent,
      increaseQuantity,
      decreaseQuantity,
      printBill,
      formatCurrency,
      total,
    }
  },
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
