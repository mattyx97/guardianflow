<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const mesi = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

const options = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Falso Positivo", "Anomalia"],

  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};
const series = [44, 55];
</script>

<template>
  <div class="flex flex-col p-4 text-black bg-white border shadow-sm rounded-xl md:p-5">
    <ClientOnly>
      <VueApexCharts
        type="pie"
        height="200"
        :options="options"
        :series="series"
        :dataLabels="options.dataLabels"
      />
    </ClientOnly>
  </div>
</template>
