<script setup lang="ts">
import Falco_Nero from "@/assets/Falco Nero.png";

const newMessage = ref("");
/* array per impostazioni navbar */
const navOptions = [
  {
    name: "Dashboard",
    icon: "svg-spinners:blocks-scale",
    link: "/gestionale/dashboard",
  },
  {
    name: "Profilo",
    icon: "mdi:account",
    link: "/gestionale/Utente/user",
  },
 
  {
    name: "Anomalie",
    icon: "mingcute:warning-fill",
    link: "/gestionale/dashboard/anomalie",
  },
];

const navOptionsAdmin = [
  {
    name: "Dashboard",
    icon: "svg-spinners:blocks-scale",
    link: "/gestionale/dashboard",
  },
  {
    name: "Profilo",
    icon: "mdi:account",
    link: "/gestionale/Utente/user",
  },
  {
    name: "Gestione utenti",
    icon: "mdi:account-group",
    link: "/gestionale/GestioneUtenti/users",
  },
  {
    name: "Anomalie",
    icon: "mingcute:warning-fill",
    link: "/gestionale/dashboard/anomalie",
  },
];
/* array chatbot */
const messages = ref([
  {
    type: "question",
    text: "Ciao come posso aiutarti?",
    suggestions: [
      "",
      "How many Starter Pages & Examples are there?",
      "Is there a PRO version?",
    ],
  },
]);
const utente = useUser();

const handleLogout = async () => {
  console.log("logout");
  // if (!(e.target instanceof HTMLFormElement)) return;
  await $fetch("/api/utente/logout", {
    method: "POST",
    redirect: "manual",
  });
  await navigateTo("/login");
};

function sendMessage() {
  if (newMessage.value.trim() !== "") {
    messages.value.push({
      type: "answer", // 'question' o 'answer' a seconda del tipo di messaggio
      text: newMessage.value.trim(),
    });
    messages.value.push({
      type: "question", // 'question' o 'answer' a seconda del tipo di messaggio
      text: 'Non possiamo rispondere a questa domanda, sarà aperta una segnalazione al nostro team tecnico, ti ricontatteremo il prima possibile.',
    });
    newMessage.value = "";
  }
}

const open = ref(false);
</script>

<template>
  <Body class="bg-[#1e1e1e]">
    <!-- Navigation Toggle -->
    <div class="flex justify-end p-2 lg:hidden bg-[#171717]">
      <button
        type="button"
        class="inline-flex items-center justify-center p-2 text-white bg-[#171717] border border-gray-200 rounded-lg shadow-sm gap-x-2 disabled:opacity-50 disabled:pointer-events-none"
        data-hs-overlay="#sidebar-mini"
        aria-controls="sidebar-mini"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Toggle Navigation</span>
        <svg
          class="flex-shrink-0 w-4 h-4"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>
    <!-- End Navigation Toggle -->

    <!-- Sidebar -->
    <div
      id="sidebar-mini"
      class="hs-overlay hs-overlay-backdrop-open:bg-black/50 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-20 bg-[#171717] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
    >
      <div class="flex flex-col items-center justify-center py-4 gap-y-2">
        <div
          v-for="option in utente?.permessi=='admin' ? navOptionsAdmin :navOptions"
          class="hs-tooltip inline-block [--placement:right]"
        >
          <NuxtLink
            :to="option.link"
            class="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white"
          >
            <Icon :name="option.icon" size="20" />
            <span
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-[#171717] text-xs text-white rounded-lg whitespace-nowrap"
              role="tooltip"
            >
              {{ option.name }}
            </span>
          </NuxtLink>
        </div>
        <NuxtLink
          to="/"
          @click="handleLogout()"
          class="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white"
        >
          <Icon name="mdi:logout" size="20" />
          <span
            class="hover:text-red-500 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-[#171717] text-xs text-white rounded-lg whitespace-nowrap"
            role="tooltip"
          >
            Logout
          </span>
        </NuxtLink>
      </div>
    </div>

    <div class="w-screen py-6 px-4 sm:px-6 md:px-4 lg:px-[7rem]">
      <div class="fixed bottom-2 right-4">
        <button @click="open = !open" class="rounded-full">
          <img :src="Falco_Nero" alt="Logo" class="w-12 rounded-full" />
        </button>
      </div>
      <slot />
    </div>
    <!-- End Sidebar -->
  </Body>

  <!-- Chat Bubble -->
  <div
    v-if="open"
    class="fixed p-3 m-3 rounded-md right-14 bg-black/50 bottom-11 max-h-[80%] overflow-x-auto"
  >
    <ul class="space-y-5">
      <li
        v-for="(message, index) in messages"
        :key="index"
        :class="{
          'me-11': message.type === 'question',
          'ms-auto': message.type === 'answer',
        }"
      >
        <div
          v-if="message.type === 'question'"
          class="flex max-w-lg gap-x-2 sm:gap-x-4"
        >
          <img
            class="inline-block rounded-full h-9 w-9"
            :src="Falco_Nero"
            alt="Logo"
          />
          <div
            class="p-4 space-y-2 bg-[#1e1e1e] border border-red-500 rounded-2xl"
          >
            <h2 class="text-white text-md">
              {{ message.text }}
            </h2>
            <div class="space-y-1.5" v-if="message.suggestions">
              <p class="text-white text-md">
                Sono l'assistente automatico di GuardianFlow
              </p>
              <p class="text-sm text-white">
                Fammi pure una domanda, ti risponderò il prima possibile
              </p>
            </div>
          </div>
        </div>
        <div
          v-if="message.type === 'answer'"
          class="flex max-w-lg gap-x-2 sm:gap-x-4 ms-auto"
        >
          <div class="space-y-3 grow text-end">
            <div class="inline-block p-4 bg-[#171717] shadow-sm rounded-2xl">
              <p class="text-sm text-white">{{ message.text }}</p>
            </div>
          </div>
          <span
            class="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-[#1e1e1e]"
          >
            <span class="text-sm font-medium leading-none text-white">AZ</span>
          </span>
        </div>
      </li>
    </ul>
    <!-- Input per scrivere nuovi messaggi -->
    <div class="flex justify-center">
      <div
        class="flex items-center justify-center gap-3 p-3 bg-transparent w-max"
      >
        <div
          class="w-full rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-[1px] shadow-md"
        >
          <input
            v-model="newMessage"
            type="text"
            class="p-2 flex h-full w-full items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white"
            placeholder="Scrivi un messaggio..."
          />
        </div>

        <button
          @click="sendMessage()"
          class="p-[1px] text-md rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-md"
        >
          <span
            class="p-2 flex h-full w-full items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white hover:bg-gradient-to-t ease-in hover:from-red-500 hover:via-red-600 hover:to-red-700"
          >
            INVIA
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
