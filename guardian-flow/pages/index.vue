<script setup lang="ts">
import logo from "@/assets/Falco_Bianco.png";
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row items-center justify-center">
    <div class="flex flex-col p-3 md:max-w-[50%] gap-5">
      <h1 class="text-xl md:text-2xl font-bold text-center md:text-start">La Tua Difesa Intelligente</h1>
      <p class="font-light text-gray-500 text-md text-center md:text-start md:text-lg">
        Se siete alla ricerca di una soluzione avanzata per garantire la
        sicurezza e l'integrità del vostro traffico di rete, siete nel posto
        giusto. Guardian Flow è un sistema all'avanguardia che sfrutta
        l'intelligenza artificiale non supervisionata per rilevare e mitigare le
        anomalie nel vostro traffico di rete, fornendo una protezione efficace
        contro minacce interne ed esterne.
      </p>
    </div>
      <img :src="logo" alt="Logo Guardian Flow" class="max-w-[50%]"/>
  </div>
</template>
