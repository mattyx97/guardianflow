<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-3 p-4 text-white bg-[#171717] shadow-sm rounded-xl md:p-5"
  >
    <div class="flex flex-col">
      <h1 class="mb-3 font-bold">Il tuo piano</h1>
      <div class="flex flex-row items-center gap-20">
        <div class="flex flex-row gap-7">
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <h1 class="text-xl">Organization</h1>
              <!-- STATO PIANO -->
              <!-- <div class="flex items-center gap-2 px-1 border border-black rounded-lg">
              <Icon name="fluent-emoji-flat:green-circle" size="20" />
              <h1>ATTIVO</h1>
            </div> -->
            </div>
            <!-- descrizione piano -->
          </div>
          <div class="flex flex-row items-baseline">
            <h1 class="text-5xl">50€</h1>
            <h1 class="text-xs">al mese</h1>
          </div>
        </div>

        <div>
          <NuxtLink to="../Piano/Modpiani" class="text-sm px-3 py-3 border-2 border-[#1e1e1e] hover:bg-[#1e1e1e] rounded-lg">
            MODIFICA PIANO
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
