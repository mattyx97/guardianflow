<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
/* layout */
definePageMeta({
  layout: "gestionale",
});
const user = useAuthenticatedUser();
console.log(user.value.userId);
const mesi = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
const data = [
  {
    anno: 2021,
    mese: 1,
    ricariche: 100,
  },
  {
    anno: 2021,
    mese: 2,
    ricariche: 200,
  },
  {
    anno: 2021,
    mese: 3,
    ricariche: 300,
  },
  {
    anno: 2021,
    mese: 4,
    ricariche: 400,
  },
  {
    anno: 2021,
    mese: 5,
    ricariche: 500,
  },
  {
    anno: 2021,
    mese: 6,
    ricariche: 600,
  },
  {
    anno: 2021,
    mese: 7,
    ricariche: 700,
  },
  {
    anno: 2021,
    mese: 8,
    ricariche: 800,
  },
  {
    anno: 2021,
    mese: 9,
    ricariche: 900,
  },
  {
    anno: 2021,
    mese: 10,
    ricariche: 1000,
  },
  {
    anno: 2021,
    mese: 11,
    ricariche: 1100,
  },
  {
    anno: 2021,
    mese: 12,
    ricariche: 1200,
  },
];
const optionsRicMensili = {
  chart: {
    id: "vuechart-example",
    zoom: {
      enabled: false,
    },
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
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};
const seriesRicMedieMensili = [
  {
    name: "€",
    data: data,
    color: "#54B03B",
  },
];
</script>

<template>
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <h1 class="text-4xl">Ciao, {{ user.nome }}</h1>
    <div
      class="grid items-center justify-center grid-col-1 md:grid-col-3 lg:grid-cols-6 gap-5 mt-3"
    >
      <CardWarnings class="col-span-2" />
      <CardWarningsStatus class="col-span-2" />
      <CardAccount class="col-span-2" />
    </div>

    <ClientOnly>
      <VueApexCharts
        class="mt-7"
        type="area"
        height="200"
        :options="optionsRicMensili"
        :series="seriesRicMedieMensili"
      />
    </ClientOnly>
  </div>
</template>
