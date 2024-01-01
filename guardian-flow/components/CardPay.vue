<script setup lang="ts">
const { data: piano } = useFetch("/api/Piano/getPiano");
//@ts-ignore
</script>

<template>
  <div class="flex flex-col gap-3 p-4 text-white bg-[#171717] shadow-sm rounded-xl md:p-5">
    <div class="flex flex-col">
      <h1 class="mb-3 font-bold">Il tuo piano</h1>
      <div class="flex flex-col md:flex-row items-center gap-5 md:gap-20">
        <div class="flex flex-row gap-7">
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <h1 class="text-4xl">{{ piano?.[0].nome.split(" ")[0] ?? "" }}</h1>
              <!-- STATO PIANO -->
              <!-- <div class="flex items-center gap-2 px-1 border border-black rounded-lg">
              <Icon name="fluent-emoji-flat:green-circle" size="20" />
              <h1>ATTIVO</h1>
            </div> -->
            </div>
            <!-- descrizione piano -->
          </div>
          <div class="flex flex-row items-baseline">
            <h1 class="text-5xl">{{ piano?.[0].prezzo }}</h1>
            <h1 class="text-xs" v-if="piano?.[0]?.nome?.split(' ')[1] == 'Mese'">/al mese</h1>
            <h1 class="text-xs" v-else>/all'anno</h1>
          </div>
        </div>

        <div>
          <NuxtLink
            to="../Piano/Modpiani"
            class="py-[9px] px-[1px] text-sm text-md rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-md"
          >
            <span
              class="p-2 items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white hover:bg-gradient-to-t ease-in hover:from-red-500 hover:via-red-600 hover:to-red-700"
            >
              MODIFICA PIANO
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-row items-center gap-5 font-bold">
        <h1>Prossima data di fatturazione</h1>
        <h1>02/02/2023</h1>
      </div>

      <h1>Il prossimo pagamento dovrà essere effettuato al seguente iban:</h1>
      <h1>IT53E0300203280772747229526</h1>
    </div>
  </div>
</template>
