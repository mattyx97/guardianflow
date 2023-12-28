<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  price: number;
  frequenza: string;
}>();

const stato = defineModel();

</script>

<template>
  <!-- CARD -->
  <div class="flex flex-col md:flex-row bg-[#171717] p-3 rounded-lg items-center gap-3">
    <label
      class="relative flex items-center p-3 rounded-full cursor-pointer"
      htmlFor="red"
    >
      <input
        v-model="stato"
        :value="props.title"
        name="color"
        type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#ED1C24] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#ED1C24] checked:before:bg-[#ED1C24] hover:before:opacity-10"
      />
      <span
        class="absolute text-[#ED1C24] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </label>
    <div class="text-white flex flex-col gap-2">
      <h1 class="text-xl font-bold">{{ $props.title }}</h1>
      <h1 class="">
        {{ $props.description }}
      </h1>
    </div>

    <div class="flex flex-col  mt-5 text-center text-white">
      <div class="flex flex-row items-end">
        <p class="mt-1 text-3xl font-bold">{{ $props.price }}€</p>
        <p class="font-bold">/{{ $props.frequenza }}</p>
      </div>
    </div>
  </div>
</template>
