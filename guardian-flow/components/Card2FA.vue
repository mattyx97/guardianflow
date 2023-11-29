<script setup lang="ts">
import auth from "@/assets/2fa.png";
</script>

<template>
  <div class="flex flex-col gap-3 p-4 bg-white border shadow-sm rounded-xl md:p-5">
    <h1 class="font-bold">Autenticazione 2FA</h1>
    <div class="flex flex-row justify-center gap-5 p-4">
      <div>
        <img :src="auth" alt="Autenticazione 2FA" class="w-[50px]" />
      </div>
      <div class="flex items-center gap-2 px-3 py-1 border border-black rounded-lg hover:bg-black hover:text-white">
        <!-- BOTTONE PER 2FA -->
        <button class="flex flex-row items-center gap-2 ">
            <Icon name="fluent-emoji-flat:red-circle" size="20"/>
            <h1>NON ATTIVA</h1> 
        </button>
      </div>
    </div>
  </div>
</template>
