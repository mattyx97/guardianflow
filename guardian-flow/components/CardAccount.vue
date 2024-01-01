<script setup lang="ts">
const user = useAuthenticatedUser();
</script>

<template>
  <div
    class="flex flex-col gap-5 p-4 text-white bg-[#171717]  shadow-sm rounded-xl md:p-5 lg:h-[250px]"
  >
    <h3 class="text-2xl font-bold text-white">Il tuo account</h3>
    <h1>{{ user.nome }} {{ user.cognome }}</h1>

    <div class="flex justify-between gap-10">
      <div class="flex flex-col gap-[5px]">
        <div class="flex flex-col text-white gap-2">
          <h1 class="font-bold text-2xl">Permessi</h1>
          <h1 class="font-bold text-md">{{ user.permessi }}</h1>
          <h1 class="text-xs" v-if="user.permessi == 'admin'">
            Accesso completo
          </h1>
          <h1 class="text-xs" v-else>Accesso parziale</h1>
        </div>
      </div>
    </div>
  </div>
</template>
