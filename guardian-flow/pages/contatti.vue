<script setup lang="ts">
import Supporto from "@/assets/Supporto.jpg";
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <!-- Parte iniziale -->
    <div class="flex flex-col gap-5 justify-center items-center m-auto">
      <div>
        <img :src="Supporto" alt="Logo Contatti" class="max-w-[300px]" />
      </div>
      <div class="max-w-[400px]">
        <h1 class="text-2xl font-bold text-center md:text-start">Hai bisogno di aiuto?</h1>
        <h1 class="text-2xl font-bold text-center md:text-start">Inviaci un email!</h1>
        <p class="text-center md:text-start">
          Hai domande, suggerimenti o desideri semplicemente condividere le tue
          idee con noi? Siamo qui per ascoltarti! Utilizza il modulo sottostante
          per inviarci un'email e il nostro team ti risponderà nel minor tempo
          possibile.
        </p>
      </div>
    </div>
    <CardContact />
  </div>
</template>
