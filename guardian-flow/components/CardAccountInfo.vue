<script setup lang="ts">
const openModal = ref(false);
const showAlertConfirm = ref();
const showAlertNotConfirm = ref();
const user = useAuthenticatedUser();

const passChange = ref(false);
function open() {
  openModal.value = true;
  console.log(openModal.value);
}

function onSave() {
  openModal.value = false;

  if (passChange.value == false) {
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
  passChange.value = true;
}
</script>

<template>
  <div class="flex flex-col gap-3 p-4 bg-white border shadow-sm rounded-xl md:p-5">
    <h1 class="font-bold">Il tuo account</h1>
    <div>
      <ul>
        <li>
          <div class="flex gap-2">
            <h1>Nome e Cognome:</h1>
            <h1>{{ user.nome }} {{ user.cognome }}</h1>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <h1>Email:</h1>
            <h1>{{ user.username }}</h1>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <h1>Permessi:</h1>
            <h1>{{ user.permessi }}</h1>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <button
        data-hs-overlay="#hs-sign-out-alert-small-window"
        @click="open()"
        type="button"
        class="p-2 text-xs border border-black rounded-lg hover:bg-black hover:text-white"
      >
        MODIFICA PASSWORD
      </button>
    </div>
    <!-- Modal -->
    <div
      id="hs-sign-out-alert-small-window"
      class="hs-overlay hidden w-full h-full mt-[10%] fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div
        class="m-3 mt-0 lg:min-w-[25%] transition-all ease-out opacity-0 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-xs sm:w-full sm:mx-auto"
      >
        <div class="relative flex flex-col bg-white shadow-lg rounded-xl">
          <div class="absolute top-2 end-2">
            <button
              type="button"
              class="flex items-center justify-center text-sm font-semibold !text-red-500 border border-transparent rounded-lg w-7 h-7 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-overlay="#hs-sign-out-alert-small-window"
            >
              <Icon name="ic:round-close" size="25" class="hover:scale-125" />
            </button>
          </div>

          <div class="flex flex-col gap-5 p-4 overflow-y-auto text-center sm:p-10">
            <!-- End Icon -->

            <h3 class="mb-2 text-xl font-bold text-black">Modifica la tua password</h3>
            <form @submit.prevent="onSave()">
              <label class="flex flex-col items-start justify-center gap-2">
                <span class="text-sm text-black">Password attuale</span>
                <input
                  type="password"
                  class="block w-full py-3 pl-2 text-sm bg-transparent border rounded-xl focus:border-red-500 focus:outline-none focus:border-2 focus:ring-0 disabled:pointer-events-none"
                  placeholder="Enter password"
                />
              </label>

              <label class="flex flex-col items-start justify-center gap-2 mt-2">
                <span class="text-sm text-black">Nuova password</span>
                <input
                  type="password"
                  class="block w-full py-3 pl-2 text-sm bg-transparent border rounded-xl focus:border-red-500 focus:outline-none focus:border-2 focus:ring-0 disabled:pointer-events-none"
                  placeholder="Enter password"
                />
              </label>

              <label class="flex flex-col items-start justify-center gap-2 mt-2">
                <span class="text-sm text-black">Conferma password</span>
                <input
                  type="password"
                  class="block w-full py-3 pl-2 text-sm bg-transparent border rounded-xl focus:border-red-500 focus:outline-none focus:border-2 focus:ring-0 disabled:pointer-events-none"
                  placeholder="Enter password"
                />
              </label>

              <div class="grid mt-6 gap-y-2">
                <button
                  type="submit"
                  class="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border text-white bg-red-500 shadow-md disabled:pointer-events-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  data-hs-overlay="#hs-sign-out-alert-small-window"
                >
                  Conferma
                </button>
              </div>
            </form>
          </div>
        </div>
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
            <h3 class="font-semibold text-gray-800 dark:text-white">Successfully updated.</h3>
            <p class="text-sm text-gray-700 dark:text-gray-400">
              You have successfully updated your email preferences.
            </p>
          </div>
        </div>
      </div>
      <div v-if="showAlertNotConfirm" class="p-4 bg-red-500 border-red-500 border-s-4" role="alert">
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
            <p class="text-sm text-gray-700 dark:text-gray-400">Your purchase has been declined.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
