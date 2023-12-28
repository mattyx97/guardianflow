<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";
/* layout */
definePageMeta({
  layout: "gestionale",
});
const save = ref(false);
const Utente = [
  {
    userEmail: "ciao",
    userNome: "ciao",
    userCognome: "ciao",
    userPermessi: "ciao",
  },
  {
    userEmail: "ciao",
    userNome: "ciao",
    userCognome: "ciao",
    userPermessi: "ciao",
  },
  {
    userEmail: "ciao",
    userNome: "ciao",
    userCognome: "ciao",
    userPermessi: "ciao",
  },
];
</script>

<template>
  <!-- table -->
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="-m-1.5 overflow-x-auto max-w-[1400px]">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden text-white rounded-lg shadow bg-[#171717]">
          <div class="flex flex-row p-3">
            <h1 class="text-2xl">Utenti</h1>
            <div class="flex gap-2 m-auto">
              <div class="w-full rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-[1px] shadow-md">
                <input
                  type="text"
                  class="p-2 flex h-full w-full items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white"
                  placeholder="Ricerca utente..."
                />
              </div>

              <button
                type="button"
                class="p-2 text-white bg-gradient-to-b from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:outline-none shadow-md font-medium rounded-lg text-center"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <Icon name="ic:baseline-plus" size="25" />
              </button>

              <ModalAdd :open="true" />
            </div>
          </div>
          <!-- INIZIO TABELLA -->
          <table class="min-w-full">
            <thead class="p-2 border-b border-[#30363D]">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Nome
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Cognome
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Permessi
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-end"
                >
                  Opzioni
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <UsersTableRow
                user-Email="edmondo888@gmail.com"
                user-nome="Edmondo"
                user-cognome="De Simone"
                user-permessi="Moderatore"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
