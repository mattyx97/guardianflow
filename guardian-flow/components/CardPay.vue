<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-3 p-4 bg-white border shadow-sm rounded-xl md:p-5">
        <div class="flex flex-col">
            <h1 class="mb-3 font-bold">Il tuo piano</h1>
                <div class="flex flex-row items-center gap-7">
                <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                    <h1 class="text-xl">Organization</h1>
                    <!-- STATO PIANO -->
                    <div class="flex items-center gap-2 px-1 border border-black rounded-lg">
                        <Icon name="fluent-emoji-flat:green-circle" size="20" />
                        <h1>ATTIVO</h1>
                    </div>
                    </div>
                    <!-- escrizione piano -->
                    <h1 class="text-xs text-gray-300">Il nostro miglior piano per le aziende</h1>
                </div>
                <div class="flex flex-row items-baseline">
                    <h1 class="text-5xl">50€</h1>
                    <h1 class="text-xs">al mese</h1>
                </div>
                </div>
        </div>
        <div class="flex flex-col gap-2">
            <div>
                <h1 class="font-bold">Il tuo metodo di pagamento</h1>
                <h1 class="text-xs text-gray-300">Cambia metodo di pagamento</h1>
            </div>
            <div class="flex flex-row items-center gap-7">
                <Icon name="logos:mastercard" size="40" />
                <div>
                    <h1>Mastercard ****2345</h1>
                    <h1>Scade il 02/06</h1>
                </div>
            </div>
        </div>
        <div class="flex justify-center ">
            <button class="p-2 text-xs border border-black rounded-lg hover:bg-black hover:text-white">MODIFICA</button>
        </div>
    </div>
</template>
