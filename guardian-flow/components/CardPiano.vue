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
    class="flex flex-col md:w-full max-w-[250px] py-2 bg-white group hover:text-white border border-gray-300 shadow-md rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-[#ED1C24]"
  >
    <div class="p-4 lg:p-5 text-center ">
      <h3 class="text-lg font-bold">{{ $props.title }}</h3>
      <div class="flex flex-col items-center text-center mt-5">
        <div class="flex flex-row items-end">
          <p class="mt-1 font-bold text-3xl">{{ $props.priceMese }}</p>
          <p class="font-bold">€/mese</p>
        </div>
        <div class="flex flex-row items-end">
          <p class="mt-1 font-bold text-3xl">{{ $props.priceAnno }}</p>
          <p class="font-bold">€/anno</p>
        </div>
      </div>
      <p class="mt-1 text-gray-500 mt-5 group-hover:text-white">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a
        class="inline-flex items-center shadow-md group-hover:text-white justify-center px-3 py-2 mt-5 text-sm font-semibold transition duration-150 rounded-lg group-hover:text-black group-hover:bg-white text-white bg-[#ED1C24] gap-x-2 !cursor-pointer"
      >
        Acquista
      </a>
    </div>
  </div>
</template>
