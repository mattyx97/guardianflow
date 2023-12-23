<script setup lang="ts">
const user = useUser();
const props = defineProps<{
  open: boolean;
}>();
const emit = defineEmits<{
  "update:open": [open: boolean];
}>();
const addUtente = ref(false);
const showAlertConfirm = ref();
const showAlertNotConfirm = ref();
/* funzione per validare il nome */
function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
}
/* funzione per validare cognome */
function validateCognome(cognome: string): boolean {
  const cognomeRegex = /^[a-zA-Z]+$/;
  return cognomeRegex.test(cognome);
}
/* funzione per genereare una password  che verrà inviata tramite email */
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
/* funzione per inviare i dati del form */
const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  const password = generatePassword();
  const nome = formData.get("nome") as string;
  const cognome = formData.get("cognome") as string;

  if (!validateName(nome) || !validateCognome(cognome)) {
    showAlertNotConfirm.value = true; // Mostra l'alert di errore
    setTimeout(() => {
      showAlertNotConfirm.value = false;
    }, 3000);
    return;
  }
  const azienda = user.value?.aziendaId;
  console.log(formData.get("ruolo"));

  try {
    const response = await $fetch("/api/utente/addUtente", {
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

    if (response.statusCode === 200) {
      addUtente.value = true;
      showAlertConfirm.value = true; // Mostra l'alert di conferma
      setTimeout(() => {
        addUtente.value = false;
      }, 3000);
    } else {
      addUtente.value = false;
      showAlertNotConfirm.value = true; // Mostra l'alert di errore
      setTimeout(() => {
        showAlertNotConfirm.value = false;
      }, 3000);
    }
  } catch (e) {
    const { data: error } = e as { data: { message: string } };
    // Gestisci l'errore qui se necessario
    showAlertNotConfirm.value = true; // Mostra l'alert di errore
    setTimeout(() => {
      showAlertNotConfirm.value = false;
    }, 3000);
  }
};
/* notifica */
if (addUtente.value == false) {
  showAlertNotConfirm.value = false;
  setTimeout(() => {
    showAlertNotConfirm.value = null;
  }, 3000);
} else {
  showAlertConfirm.value = true;
  setTimeout(() => {
    showAlertConfirm.value = null;
  }, 3000);
}
</script>

<template>
  <!-- MODAL AGGIUNGI UTENTE -->
  <div
    :open="open"
    id="hs-modal"
    class="hs-overlay hs-overlay-backdrop-open:bg-black/50 hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
  >
    <div
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
    >
      <div class="flex flex-col w-full bg-[#171717] shadow-sm rounded-xl">
        <form
          method="post"
          action="/api/Piano/editPiano"
          @submit.prevent="handleSubmit"
        >
          <div class="flex items-center justify-between px-4 py-3">
            <h3 class="font-bold text-white">Aggiungi utente</h3>
            <button
              type="button"
              class="flex items-center justify-center text-sm font-semibold text-red-500 rounded-full cursor-pointer hover:scale-125"
              data-hs-overlay="#hs-modal"
            >
              <Icon
                name="material-symbols-light:close-small-outline-rounded"
                size="35"
              />
            </button>
          </div>

          <div
            class="flex flex-col items-center gap-3 p-4 overflow-y-auto text-[#171717]"
          >
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
        </form>
      </div>
    </div>
    <!-- alert -->
    <div class="fixed top-0 right-0">
      <div
        v-if="showAlertConfirm"
        class="p-4 bg-green-400 border-t-2 border-teal-500 rounded-lg"
        role="alert"
      >
        <div class="flex">
          <div class="">
            <!-- Icon -->
            <span
              class="inline-flex items-center justify-center w-8 h-8 text-teal-800 bg-green-400 border-4 border-teal-100 rounded-full"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <!-- End Icon -->
          </div>
          <div class="ms-3">
            <h3 class="font-semibold text-gray-800 dark:text-white">
              Successfully updated.
            </h3>
            <p class="text-sm text-gray-700 dark:text-gray-400">
              Utente aggiunto.
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="showAlertNotConfirm"
        class="p-4 bg-red-500 border-red-500 border-s-4"
        role="alert"
      >
        <div class="flex">
          <div class="">
            <!-- Icon -->
            <span
              class="inline-flex items-center justify-center w-8 h-8 text-red-800 bg-red-200 border-4 border-red-100 rounded-full dark:border-red-900 dark:bg-red-800 dark:text-red-400"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            <!-- End Icon -->
          </div>
          <div class="ms-3">
            <h3 class="font-semibold text-gray-800 dark:text-white">Error!</h3>
            <p class="text-sm text-gray-700 dark:text-gray-400">
              Utente non aggiunto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FINE MODAL -->
</template>
