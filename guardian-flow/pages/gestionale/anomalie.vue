<script setup lang="ts">
/* layout */
definePageMeta({
  layout: "gestionale",
});
</script>

<template>
  <!-- table -->
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden border rounded-lg shadow">
        <div class="flex flex-row p-3">
          <h1 class="text-2xl">Anomalie</h1>
        </div>
        <table class="min-w-full">
          <thead class="p-2 border-b">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                Identificativo
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                Data rilevazione
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                Protocollo
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                Porta
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                IP sorgente
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                IP destinazione
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
              >
                Stato
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
              <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">07/11/2023</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">Ottobre</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
              <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
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
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
                        href="#"
                      >
                        Falso positivo
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
</template>
