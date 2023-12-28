<script setup lang="ts">
import { type Anomalia } from "@/types";
import VueApexCharts from "vue3-apexcharts";
const { data: anomalies } = await useFetch("/api/Dashboard/getAllVulnerability");

const options = {
  chart: {
    width: 380,
    type: "pie",
    
  },
  labels: ["Falso Positivo", "Anomalia"],
  colors: ["#32CD32", "#ED1C24"],

  grid: {
    show: false,  
  },
  dataLabels: {
    enabled: false,  
  },
  
  
  
};

const series = computed(() => {
  const falsoPositivo =
    anomalies.value?.filter((anomalia) => anomalia.stato == true).length || 0;
  const anomalia =
    anomalies.value?.filter((anomalia) => anomalia.stato == false).length || 0;
  return [falsoPositivo, anomalia];
});
</script>

<template>
  <div
    class="flex flex-col p-4   bg-[#171717] shadow-sm rounded-xl md:p-5 lg:h-[250px]"
  >
    <ClientOnly>
      <VueApexCharts
      id="grafico"
        type="pie"
        height="200"
        :options="options"
        :series="series"
        :dataLabels="options.dataLabels"
      />
    </ClientOnly>
  </div>
</template>


<style>

.apexcharts-legend-text{
  color: white !important;
}

</style>