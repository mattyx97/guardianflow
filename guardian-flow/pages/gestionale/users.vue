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

              <!-- MODAL AGGIUNGI UTENTE -->
              <div
                id="hs-vertically-centered-modal"
                class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
              >
                <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
                >
                  <div
                    class="w-full flex flex-col bg-white border shadow-sm rounded-xl"
                  >
                    <div
                      class="flex justify-between items-center py-3 px-4 border-b"
                    >
                      <h3 class="font-bold text-gray-800">Aggiungi utente</h3>
                      <button
                        type="button"
                        class="flex justify-center items-center cursor-pointer text-sm font-semibold rounded-full text-red-500 hover:scale-125"
                        data-hs-overlay="#hs-vertically-centered-modal"
                      >
                        <Icon
                          name="material-symbols-light:close-small-outline-rounded"
                          size="35"
                        />
                      </button>
                    </div>
                    <div
                      class="p-4 overflow-y-auto flex gap-3 flex-col items-center"
                    >
                      <div class="flex flex-col gap-3 justify-center w-full">
                        <div class="relative">
                          <input
                            type="email"
                            id="hs-floating-input-email"
                            required
                            class="border outline-none w-full peer p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                            placeholder="you@email.com"
                          />
                          <label
                            for="hs-floating-input-email"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                            >Email</label
                          >
                        </div>
                        <div class="relative">
                          <input
                            type="text"
                            id="hs-floating-input-name"
                            required
                            class="border w-full outline-none peer p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                            placeholder="Nome"
                          />
                          <label
                            for="hs-floating-input-name"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                            >Nome</label
                          >
                        </div>
                        <div class="relative">
                          <input
                            type="text"
                            id="hs-floating-input-surname"
                            required
                            class="border outline-none w-full p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent peer focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                            placeholder="Cognome"
                          />
                          <label
                            for="hs-floating-input-surname"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                            >Cognome</label
                          >
                        </div>
                        <select
                          required
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 border outline-none"
                        >
                          <option>Admin</option>
                          <option>Moderatore</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="flex justify-end items-center gap-x-2 py-3 px-4 border-t"
                    >
                      <button
                        type="button"
                        class="py-2 px-3 inline-flex w-full justify-center gap-x-10 text-sm font-semibold rounded-lg text-white bg-red-500 hover:border-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                      >
                        Salva
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- FINE MODAL -->
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
                user-Email="Utente"
                user-nome="Ciao"
                user-cognome="Ciao"
                user-permessi="ciao"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
