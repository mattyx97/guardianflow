<script setup lang="ts">
import { type Anomalia } from "@/types";
import VueApexCharts from "vue3-apexcharts";
const { data: anomalies } = await useFetch("/api/getAllVulnerability");

const mattia = "x";
const options = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Falso Positivo", "Anomalia"],
  colors: ["#32CD32", "#FF0000"],

  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

const series = computed(() => {
  const falsoPositivo = anomalies.value?.filter(anomalia => anomalia.stato == true).length || 0;
  const anomalia = anomalies.value?.filter(anomalia => anomalia.stato == false).length || 0;
  return [falsoPositivo, anomalia];
});
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
