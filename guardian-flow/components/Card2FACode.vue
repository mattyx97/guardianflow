<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-5 justify-center w-[95vw] max-w-[350px] rounded-lg px-4 py-8 sm:w-[350px] shadow-[0px_0px_15px_8px_rgba(0,0,0,0.1);]"
  >
    <!-- HEADER -->
    <div class="flex flex-col items-center">
      <Icon name="lucide:smartphone" size="40" />
      <div class="flex flex-row gap-3 items-center">
        <h1 class="text-xl font-semibold tracking-tight">
          Autenticazione a due fattori
        </h1>
        <div class="hs-tooltip inline-block [--placement:right]">
          <button
            type="button"
            class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2"
          >
            <Icon name="material-symbols:info-outline-rounded" size="20" />
            <span
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute bg-white z-10 py-1 px-2 text-xs font-medium rounded shadow-md"
              role="tooltip"
            >
              Apri l'app di autenticazione a due fattori (TOTP) o l'estensione
              del browser per visualizzare il codice di autenticazione.
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <input
        type="text"
        class="py-2 px-4 w-full border border-gray-200 rounded-lg text-sm"
        placeholder="XXXXX"
      />
      <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 w-full rounded-lg">
        Verifica
      </button>
    </div>
  </div>
</template>
