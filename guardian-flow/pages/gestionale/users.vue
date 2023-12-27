<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";
/* layout */
definePageMeta({
  layout: "gestionale",
});

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
        <div class="overflow-hidden border rounded-lg shadow">
          <div class="flex flex-row p-3">
            <h1 class="text-2xl">Utenti</h1>
            <div class="flex gap-2 m-auto">
              <input
                type="text"
                class="p-2 border rounded-md ring-none focus:border-2 focus:outline-black"
                placeholder="Ricerca utente..."
              />
              <button
                type="button"
                class="items-center p-2 border rounded-md"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <Icon
                  name="ic:baseline-plus"
                  size="25"
                  class="transition duration-100 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                />
              </button>

             <ModalAdd :open="true" />
            </div>
          </div>
          <!-- INIZIO TABELLA -->
          <table class="min-w-full">
            <thead class="p-2 border-b">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Nome
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Cognome
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Permessi
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end"
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
