<script setup lang="ts">
const errorMessage = ref<string | null>(null);


/* funzione per inviare i dati */
const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);

  try {
    await $fetch("/api/utente/2fa", {
      method: "POST",
      body: {
        token2FA: formData.get("token2FA"),
      },
    });
    await navigateTo("/gestionale/dashboard"); // redirect to profile page

  } catch (e) {
    const { data: error } = e as {
      data: {
        message: string;
      };
    };
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div
    class="flex flex-col gap-5 justify-center w-[95vw] max-w-[350px] rounded-lg px-4 py-8 sm:w-[350px] shadow-[0px_0px_15px_8px_rgba(0,0,0,0.1);]"
  >
    <!-- HEADER -->
    <div class="flex flex-col items-center">
      <Icon name="lucide:smartphone" size="40" />
      <div class="flex flex-row items-center gap-3">
        <h1 class="text-xl font-semibold tracking-tight">
          Autenticazione a due fattori
        </h1>
        <div class="hs-tooltip inline-block [--placement:right]">
          <button
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 gap-2 hs-tooltip-toggle"
          >
            <Icon name="material-symbols:info-outline-rounded" size="20" />
            <span
              class="absolute z-10 inline-block px-2 py-1 text-xs font-medium transition-opacity bg-white rounded shadow-md opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible"
              role="tooltip"
            >
              Apri l'app di autenticazione a due fattori
            </span>
          </button>
        </div>
      </div>
    </div>

    <form method="post" action="/api/utente/2fa" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-5">
        <input
          type="text"
          class="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg"
          placeholder="XXXXX"
          name="token2FA"
          id="token2FA"
        />
        <button
          type="submit"
          class="p-[1px] text-md rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-md"
        >
          <span
            class="p-2 flex h-full w-full items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white hover:bg-gradient-to-t ease-in hover:from-red-500 hover:via-red-600 hover:to-red-700"
          >
            Verifica
          </span>
        </button>
      </div>
    </form>
  </div>
</template>
