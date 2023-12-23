<script setup lang="ts">
const { data: anomalies } = useFetch("/api/Dashboard/getLatestVulnerability");

/* funzione per ricavare differenza giorni */
function countDayFromDate(date: string) {
  const today = new Date();
  const date2 = new Date(date);
  const diffTime = Math.abs(today.getTime() - date2.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
</script>

<template>
  <div class="flex flex-col p-4 text-white bg-[#171717] shadow-sm rounded-xl md:p-5 lg:h-[250px]">
    <h3 class="text-2xl font-bold text-white">Ultime anomalie</h3>
    <div class="mt-2 overflow-y-auto">
      <div class="flex justify-between">
        <h1 class="font-bold text-md">ID anomalie</h1>
        <h1 class="font-bold">Età</h1>
      </div>
      <ul class="flex flex-col gap-3">
        <li v-for="anomalia in anomalies" class="flex items-center justify-between">
          <div class="flex items-center justify-center gap-3">
            <Icon name="fluent-emoji-flat:red-circle" v-if="anomalia.stato == 0" size="10" />
            <Icon name="fluent-emoji-flat:green-circle" v-else-if="anomalia.stato == 1" size="10" />
            <Icon name="fluent-emoji-flat:orange-circle" v-else size="10" />
            <h1 class="text-xs">{{ anomalia.id }}</h1>
          </div>
          <h1 class="text-sm">{{ countDayFromDate(anomalia.data) }} giorni</h1>
        </li>
      </ul>
    </div>
  </div>
</template>
