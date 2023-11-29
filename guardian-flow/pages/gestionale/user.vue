<script setup lang="ts">
/* layout */
definePageMeta({
  layout: "gestionale",
});
</script>

<template>
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
      <!-- CARD IL TUO PIANO -->
      <CardPay class="col-span-3" />

      <!-- CARD LOGIN HISTORY -->
      <CardLoginInfo class="col-span-2" />

      <!-- CARD ACCOUNT INFO -->
      <CardAccountInfo class="col-span-3" />

      <!-- CARD 2FA -->
      <Card2FA class="col-span-2" />
    </div>

    <div class="-m-1.5 overflow-x-auto max-w-[1400px] mt-2">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden border rounded-lg shadow">
          <div class="flex flex-row p-3">
            <h1 class="text-2xl">Storico pagamenti</h1>
          </div>
          <table class="min-w-full">
            <thead class="p-2 border-b">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Data pagamento
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Mensltà
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Totale
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Esito
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start"
                >
                  Tipo piano
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
                <td class="px-6 py-4 text-sm whitespace-nowrap">Pagato</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Basic</td>
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                  <button type="button" class="items-center">
                    <Icon name="humbleicons:dots-horizontal" size="20" />
                  </button>
                </td>
              </tr>

              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">07/11/2023</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Ottobre</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Pagato</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Basic</td>
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                  <button type="button" class="items-center">
                    <Icon name="humbleicons:dots-horizontal" size="20" />
                  </button>
                </td>
              </tr>

              <tr class="cursor-pointer hover:bg-gray-100">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">07/11/2023</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Ottobre</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">394€</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Pagato</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Basic</td>
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
