<script setup lang="ts">
const props  = defineProps<{
  title?: string;
  description?: string;
  priceMese?: number;
  priceAnno?: number;
}>();
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-12 m-5 lg:flex-row lg:items-start">
    <div class="flex flex-col max-w-[600px]">
      <h1 class="text-2xl font-bold">Cosa include il piano {{$props.title}}</h1>
      <h1>
        {{$props.description}}
      </h1>
    </div>
    <CardPayment />
  </div>
</template>
