<script setup lang="ts">
const errorMessage = ref<string | null>(null);

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
    await navigateTo("/"); // profile page
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
      <div class="flex flex-row gap-3 items-center">
        <h1 class="text-xl font-semibold tracking-tight">Autenticazione a due fattori</h1>
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
              Apri l'app di autenticazione a due fattori
            </span>
          </button>
        </div>
      </div>
    </div>

    <form method="post" action="/api/2fa" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-5">
        <input
          type="text"
          class="py-2 px-4 w-full border border-gray-200 rounded-lg text-sm"
          placeholder="XXXXX"
          name="token2FA"
          id="token2FA"
        />
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 w-full rounded-lg"
        >
          Verifica
        </button>
      </div>
    </form>
  </div>
</template>
