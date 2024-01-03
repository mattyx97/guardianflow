<script setup lang="ts">
const { data: anomalies } = useFetch("/api/getLatestVulnerability");

function countDayFromDate(date: string) {
  const today = new Date();
  const date2 = new Date(date);
  const diffTime = Math.abs(today.getTime() - date2.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
</script>

<template>
  <div
    class="flex flex-col p-4 text-black bg-white border shadow-sm rounded-xl md:p-5"
  >
    <h3 class="text-lg font-bold text-gray-800">Security warnings</h3>
    <p class="mt-2">
      <div class="flex justify-between">
        <h1 class="font-bold">Ultimi warnings</h1>
        <h1 class="font-bold">Age</h1>
      </div>
      <ul>
        <li v-for="anomalia in anomalies" class="flex items-center justify-between">
          <div class="flex items-center justify-center gap-2">
            <Icon name="fluent-emoji-flat:red-circle" v-if="anomalia.stato==0" size="10"/>
            <Icon name="fluent-emoji-flat:green-circle" v-else-if="anomalia.stato==1" size="10"/>
            <Icon name="fluent-emoji-flat:orange-circle" v-else size="10"/>
          <h1 class="text-[10px]">{{ anomalia.id }}</h1>
        </div>
        <h1 class="">{{ countDayFromDate(anomalia.data) }} days</h1>
        </li>
       
       
      </ul>
    </p>
  </div>
</template>
