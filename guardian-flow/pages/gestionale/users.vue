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
              <button type="button" class="items-center p-2 border rounded-md">
                <Icon
                  name="ic:baseline-plus"
                  size="25"
                  class="transition duration-100 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                />
              </button>
            </div>
          </div>
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
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                  <button type="button" class="items-center">
                    <Icon name="humbleicons:dots-horizontal" size="20" />
                  </button>
                </td>
              </tr>

              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">giuseppe@gmail.com</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Giuseppe</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Cerella</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Admin</td>
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                  <button type="button" class="items-center">
                    <Icon name="humbleicons:dots-horizontal" size="20" />
                  </button>
                </td>
              </tr>

              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  edmondo888@gmail.com
                </td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Edmondo</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">De Simone</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Admin</td>
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                  <button type="button" class="items-center">
                    <Icon name="humbleicons:dots-horizontal" size="20" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
