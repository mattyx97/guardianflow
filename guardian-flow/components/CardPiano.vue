<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  priceMese?: number;
  priceAnno?: number;
}>();
</script>

<template>
  <div class="flex flex-col py-2 bg-white border shadow-sm rounded-xl">
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800">{{ $props.title }}</h3>
      <p class="mt-1 text-gray-500">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <div class="flex gap-2">
        <p class="mt-1 text-gray-700">{{ $props.priceMese }}€/mese</p>
        <p class="mt-1 text-gray-700">{{ $props.priceAnno }}€/anno</p>
      </div>
      <a
        class="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-semibold transition duration-150 border rounded-lg hover:text-white hover:bg-red-600 gap-x-2 disabled:opacity-50 disabled:pointer-events-none"
      >
        Acquista
      </a>
    </div>
  </div>
</template>
