<script setup lang="ts">
const Utente = defineProps<{
  userKey?: string;
  userEmail?: string;
  userNome?: string;
  userCognome?: string;
  userPermessi?: string;
}>();
const openModal = ref(false);
const elimina = ref(false);
const showAlertConfirm = ref();
const showAlertNotConfirm = ref();

function eliminaFunction() {
  $fetch("/api/utente/removeUser", {
    method: "POST",
    body: JSON.stringify({
      user_id: Utente.userKey,
    }),
  });

  elimina.value = true;
  if (elimina.value == true) {
    showAlertConfirm.value = true;
    setTimeout(() => {
      showAlertConfirm.value = null;
    }, 3000);
  } else {
    showAlertNotConfirm.value = true;
    setTimeout(() => {
      showAlertNotConfirm.value = null;
    }, 3000);
  }
}
</script>

<template>
  <!-- INIZIO RIGA TABELLA -->
  <tr class="cursor-pointer hover:bg-[#1f1f1f]">
    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
      {{ $props.userEmail }}
    </td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.userNome }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">
      {{ $props.userCognome }}
    </td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">
      {{ $props.userPermessi }}
    </td>
    <!-- drop -->
    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
      <div class="relative inline-flex hs-dropdown">
        <button
          id="hs-dropdown-custom-icon-trigger"
          type="button"
          class="flex items-center justify-center text-sm font-semibold text-white hs-dropdown-toggle disabled:opacity-50 disabled:pointer-events-none"
        >
          <Icon name="humbleicons:dots-horizontal" size="20" />
        </button>

        <div
          class="z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-[#171717] text-white shadow-md rounded-lg p-2 mt-2"
          aria-labelledby="hs-dropdown-custom-icon-trigger"
        >
          <button
            type="button"
            class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:outline-none hover:bg-[#1e1e1e]"
            data-hs-overlay="#hs-vertically-centered-modal1"
          >
            Modifica
          </button>

          <button
            @click="eliminaFunction()"
            class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
          >
            Elimina
          </button>
        </div>
      </div>
    </td>
  </tr>

  <ModalEdit :open="true" />
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
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
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
</template>
