<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
const { data: anomalies } = await useFetch("/api/Dashboard/getNumAnomalie");

/* layout */
definePageMeta({
  layout: "gestionale",
});
const user = useAuthenticatedUser();
const mesi = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];

const options = {
  chart: {
    id: "vuechart-example",
    
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    
    categories: [
      "Gen",
      "Feb",
      "Mar",
      "Apr",
      "Mag",
      "Giu",
      "Lug",
      "Ago",
      "Set",
      "Ott",
      "Nov",
      "Dic",
    ],
    labels: {
      style: {
        colors:"#FFFFFF",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors:"#FFFFFF",
      },
    },
  },
  
  grid: {
    borderColor: "#FFFFFF",
    
    lineStyle: {
      dotted: true,  // Imposta le linee della griglia come tratteggiate
    },
  },
  dataLabels: {
    enabled: false,
  },
};
const series = [
  {
    name: "Numero anomalie:",
  data:anomalies.value,
    color: "#2db5bb",
  },
];
console.log("anomalieeee",anomalies.value);
</script>

<template>
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 flex flex-col gap-12">
    <h1 class="text-4xl text-white">Ciao, {{ user.nome }}</h1>
    <div
      class="grid items-center justify-center gap-5 mt-3 grid-col-1 md:grid-col-3 lg:grid-cols-6"
    >
      <CardWarnings class="col-span-2" />
      <CardWarningsStatus class="col-span-2" />
      <CardAccount class="col-span-2" />
    </div>

    <div class="bg-[#171717] rounded-xl p-4">
        <h1 class="text-2xl text-white font-bold">Resoconto anomalie</h1>
      <ClientOnly>
        <VueApexCharts
          class="mt-7"
          type="area"
          height="200"
          :options="options"
          :series="series"
        />
      </ClientOnly>
    </div>
  </div>
</template>
