<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";
/* layout */
definePageMeta({
  layout: "gestionale",
});
const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team" },
  { text: "NUMBER", value: "number" },
  { text: "POSITION", value: "position" },
  { text: "HEIGHT", value: "indicator.height" },
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
  { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "COUNTRY", value: "country" },
];

const items: Item[] = [
  {
    player: "Stephen Curry",
    team: "GSW",
    number: 30,
    position: "G",
    indicator: { height: "6-2", weight: 185 },
    lastAttended: "Davidson",
    country: "USA",
  },
  {
    player: "Lebron James",
    team: "LAL",
    number: 6,
    position: "F",
    indicator: { height: "6-9", weight: 250 },
    lastAttended: "St. Vincent-St. Mary HS (OH)",
    country: "USA",
  },
  {
    player: "Kevin Durant",
    team: "BKN",
    number: 7,
    position: "F",
    indicator: { height: "6-10", weight: 240 },
    lastAttended: "Texas-Austin",
    country: "USA",
  },
  {
    player: "Giannis Antetokounmpo",
    team: "MIL",
    number: 34,
    position: "F",
    indicator: { height: "6-11", weight: 242 },
    lastAttended: "Filathlitikos",
    country: "Greece",
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
                            class="border outline-none w-full peer p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
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
                            class="border w-full outline-none peer p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
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
                            class="border outline-none w-full p-4 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 peer focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
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
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border outline-none"
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
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg hover:text-white border border-black hover:bg-green-500 hover:border-transparent"
                      >
                        Salva
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  edmondo888@gmail.com
                </td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Edmondo</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">De Simone</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Admin</td>
                <td
                  class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end"
                >
                  <div class="relative inline-flex hs-dropdown">
                    <button
                      id="hs-dropdown-custom-icon-trigger"
                      type="button"
                      class="flex items-center justify-center text-sm font-semibold text-gray-800 hs-dropdown-toggle disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <Icon name="humbleicons:dots-horizontal" size="20" />
                    </button>

                    <div
                      class="z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2"
                      aria-labelledby="hs-dropdown-custom-icon-trigger"
                    >
                      <a
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        href="#"
                      >
                        Modifica
                      </a>
                      <a
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm  focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
                        href="#"
                      >
                        Elimina
                      </a>
                    </div>
                  </div>
                </td>
              </tr>

              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  giuseppe@gmail.com
                </td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Giuseppe</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Cerella</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Admin</td>
                <td
                  class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end"
                >
                  <div class="relative inline-flex hs-dropdown">
                    <button
                      id="hs-dropdown-custom-icon-trigger"
                      type="button"
                      class="flex items-center justify-center text-sm font-semibold text-gray-800 hs-dropdown-toggle disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <Icon name="humbleicons:dots-horizontal" size="20" />
                    </button>

                    <div
                      class="z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2"
                      aria-labelledby="hs-dropdown-custom-icon-trigger"
                    >
                      <a
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        href="#"
                      >
                        Modifica
                      </a>
                      <a
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
                        href="#"
                      >
                        Elimina
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  giuseppe@gmail.com
                </td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Giuseppe</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Cerella</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Admin</td>
                <td
                  class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end"
                >
                  <div class="relative inline-flex hs-dropdown">
                    <button
                      id="hs-dropdown-custom-icon-trigger-2"
                      type="button"
                      class="flex items-center justify-center text-sm font-semibold text-gray-800 hs-dropdown-toggle disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <Icon name="humbleicons:dots-horizontal" size="20" />
                    </button>

                    <div
                      class="z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2"
                      aria-labelledby="hs-dropdown-custom-icon-trigger-2"
                    >
                      <a
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        href="#"
                      >
                        Modifica
                      </a>
                      <a
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
                        href="#"
                      >
                        Elimina
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
