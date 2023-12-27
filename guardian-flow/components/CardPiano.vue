<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  priceMese?: number;
  priceAnno?: number;
}>();
</script>

<template>
  <div
    class="flex flex-col md:w-full max-w-[250px] lg:max-w-[300px] py-2 bg-white group hover:text-white border border-gray-300 shadow-md rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-[#ED1C24]"
  >
    <div class="p-4 text-center lg:p-5">
      <h3 class="text-lg font-bold">{{ $props.title }}</h3>
      <div class="flex flex-col items-center mt-5 text-center">
        <div class="flex flex-row items-end">
          <p class="mt-1 text-3xl font-bold">{{ $props.priceMese }}</p>
          <p class="font-bold">€/mese</p>
        </div>
        <div class="flex flex-row items-end">
          <p class="mt-1 text-3xl font-bold">{{ $props.priceAnno }}</p>
          <p class="font-bold">€/anno</p>
        </div>
      </div>
      <p class="mt-5 text-gray-500 group-hover:text-white">
        Il piano Small è la soluzione ideale per le piccole imprese. Con una capacità di analisi
        fino a 300 GB di traffico di rete al mese oppure 3TB annuali.
      </p>
      <NuxtLink
        to="/checkout"
        class="inline-flex items-center shadow-md group-hover:text-black justify-center px-3 py-2 mt-5 text-sm font-semibold transition duration-150 rounded-lg group-hover:bg-white text-white bg-[#ED1C24] gap-x-2 !cursor-pointer"
      >
        Acquista
      </NuxtLink>
    </div>
  </div>
</template>
