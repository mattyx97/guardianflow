<script setup lang="ts">
const Piano = [
  {
    title: "Small",
    description: "ciao",
    priceMese: 10,
    priceAnno: 100,
  },
  {
    title: "Medium",
    description: "ciao",
    priceMese: 10,
    priceAnno: 100,
  },
  {
    title: "Large",
    description: "ciao",
    priceMese: 10,
    priceAnno: 100,
  },
  {
    title: "Huge",
    description: "ciao",
    priceMese: 10,
    priceAnno: 100,
  },
];
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold">I nostri piani</h1>
  </div>
  <div
    class="flex flex-col gap-12 mt-[10%] p-5 md:flex-row justify-center items-center"
  >
    <CardPiano title="Small" :priceMese="91" :priceAnno="1092" />
    <CardPiano
      title="Medium"
      description="ciao"
      :priceMese="156"
      :priceAnno="1874"
    />
    <CardPiano
      title="Big"
      description="ciao"
      :priceMese="221"
      :priceAnno="2652"
    />
    <CardPiano
      title="Huge"
      description="ciao"
      :priceMese="351"
      :priceAnno="4212"
    />
  </div>
</template>
