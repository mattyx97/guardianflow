<script setup lang="ts">
import logo from "@/assets/contatti.jpg";
</script>
<template>
  <div class="flex ">
    <!-- Parte iniziale -->
    <div class="flex flex-col gap-3 justify-center items-center m-auto">
      <div>
        <img :src="logo" alt="Logo Contatti" class="max-w-[200px]" />
      </div>
      <div class="max-w-[400px]">
        <h1 class="text-2xl font-bold">Hai bisogno di aiuto?</h1>
        <h1 class="text-2xl font-bold">Inviaci un email!</h1>
        <p>
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
