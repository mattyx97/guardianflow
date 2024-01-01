<script setup lang="ts">
const user = useUser();
const props = defineProps<{
  open: boolean;
}>();
const emit = defineEmits<{
  "update:open": [open: boolean];
}>();
function generatePassword() {
  var length = 12,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  const password = generatePassword();
  const azienda = user.value?.aziendaId;

  console.log(formData.get("ruolo"));

  try {
    $fetch("/api/utente/addUtente", {
      method: "POST",
      body: {
        username: formData.get("email"),
        nome: formData.get("nome"),
        cognome: formData.get("cognome"),
        ruolo: formData.get("ruolo"),
        password: password,
        azienda_id: azienda,
      },
    });
  } catch (e) {
    const { data: error } = e as {
      data: {
        message: string;
      };
    };
  }
};
</script>

<template>
  <!-- MODAL AGGIUNGI UTENTE -->
  <div
    :open="open"
    id="hs-vertically-centered-modal"
    class="hs-overlay hs-overlay-backdrop-open:bg-black/50 hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
  >
    <div
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
    >
      <form method="post" action="/api/Piano/editPiano" @submit.prevent="handleSubmit">
        <div class="flex flex-col w-full bg-[#171717] shadow-sm rounded-xl">
          <div class="flex items-center justify-between px-4 py-3">
            <h3 class="font-bold text-white">Aggiungi utente</h3>
            <button
              type="button"
              class="flex items-center justify-center text-sm font-semibold text-red-500 rounded-full cursor-pointer hover:scale-125"
              data-hs-overlay="#hs-vertically-centered-modal"
            >
              <Icon name="material-symbols-light:close-small-outline-rounded" size="35" />
            </button>
          </div>

          <div class="flex flex-col items-center gap-3 p-4 overflow-y-auto text-[#171717]">
            <div class="flex flex-col justify-center w-full gap-3 text-white">
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="border outline-none w-full bg-[#171717] peer p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                  placeholder="you@email.com"
                />
                <label
                  for="hs-floating-input-email"
                  class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Email
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  class="border w-full outline-none bg-[#171717] peer p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                  placeholder="Nome"
                />
                <label
                  for="hs-floating-input-name"
                  class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Nome
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  required
                  class="border outline-none w-full bg-[#171717] p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent peer focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                  placeholder="Cognome"
                />
                <label
                  for="hs-floating-input-surname"
                  class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Cognome
                </label>
              </div>
              <select
                required
                id="ruolo"
                name="ruolo"
                class="block w-full px-4 py-3 text-sm border bg-[#171717] border-gray-200 rounded-lg outline-none disabled:opacity-50"
              >
                <option>Admin</option>
                <option>Moderatore</option>
              </select>
            </div>
          </div>
          <div class="flex items-center justify-end px-4 py-3 gap-x-2">
            <button
              type="submit"
              class="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg gap-x-10 hover:border-transparent hover:-translate-y-1 hover:scale-105"
            >
              Salva
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- FINE MODAL -->
</template>
