<script setup lang="ts">
//@ts-nocheck
const route = useRoute().query
</script>
<template>
  <div class="flex flex-col items-center justify-center m-5 gap-x-20 lg:flex-row lg:items-start">
    <div class="flex flex-col max-w-[600px]">
      <h1 class="text-2xl font-bold">Procedi all'acquisto del piano {{ route.titolo }}</h1>
      <h1>
        {{ route.descrizioni }}
      </h1>
      <div>
        <h1 class="text-2xl font-bold">Cosa include il piano {{ route.titolo }}</h1>

        <ul class="mt-3 space-y-3 p-2">
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Baseline personalizzata</span>
          </li>
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Analisi del traffico</span>
          </li>
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Notifica anomalie</span>
          </li>
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Dashboard interattiva</span>
          </li>
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Gestione utenti subordinati</span>
          </li>
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Gestione anomalie rilevate</span>
          </li>
          <li class="flex items-center gap-2">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Gestione storico pagamenti</span>
          </li>
        </ul>
      </div>
    </div>
    <CardPayment :prezzo="route.prezzo" :id="route.id"  />
  </div>
</template>
