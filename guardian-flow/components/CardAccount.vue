<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-5 p-4 text-black bg-white border shadow-sm rounded-xl md:p-5"
  >
    <h3 class="text-lg font-bold text-gray-800">Il tuo account</h3>
    <div class="flex items-center justify-between gap-10 p-2">
      <div class="flex flex-col gap-[5px]">
        <h1 class="font-bold text-md">Admin</h1>
        <div class="flex flex-col">
          <h1 class="font-bold text-md">Permessi</h1>
          <h1 class="text-xs">Accesso completo</h1>
        </div>
        <div class="flex flex-col">
          <h1 class="font-bold text-md">Ultimo log-in</h1>
          <h1 class="text-xs">7 Novembre 2023</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">33</h1>
        <h1 class="text-xs">Login nell'ultimo mese</h1>
      </div>
    </div>
  </div>
</template>
