<script setup lang="ts">
/* layout */
definePageMeta({
  layout: "gestionale",
  middleware: ["protected"],
});

const user = useAuthenticatedUser();
function openUrl() {
  window.open('https://firebasestorage.googleapis.com/v0/b/events-5a52c.appspot.com/o/Fattura.pdf?alt=media&token=8780b19c-323a-40ff-a31a-1f21f5508e9f', '_blank')
}
</script>

<template>
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
      <!-- CARD IL TUO PIANO -->
      <CardPay class="col-span-3" />

      <!-- CARD LOGIN HISTORY -->
      <CardLoginInfo class="col-span-3 md:col-span-2" />

      <!-- CARD ACCOUNT INFO -->
      <CardAccountInfo class="col-span-3" />

      <!-- CARD 2FA -->
      <Card2FA class="col-span-3 md:col-span-2" />
    </div>
    <!-- table -->
    <div v-if="user.permessi=='admin'" class="-m-1.5 overflow-x-auto max-w-[1400px] mt-2 text-white">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden rounded-lg shadow bg-[#171717]">
          <div class="flex flex-row p-3">
            <h1 class="text-2xl">Storico pagamenti</h1>
          </div>
          <table class="min-w-full">
            <thead class="p-2 border-b border-[#30363D]">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Data pagamento
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Mensiltà
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Totale
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Esito
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Tipo piano
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-white uppercase text-end">
                  Opzioni
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="cursor-pointer hover:bg-[#1f1f1f]">
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">25/1/2024</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Gennaio</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">156€</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Pagato</td>
                <td class="px-6 py-4 text-sm whitespace-nowrap">Medium</td>
                <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                  <div class="hs-tooltip inline-block [--placement:right]">
                    <button
                      type="button"
                      class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2"
                      @click="openUrl()"
                    >
                      <Icon name="tabler:file-invoice" size="20" />
                      <span
                        class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute bg-[#171717] text-white z-10 py-1 px-2 text-xs font-medium rounded shadow-md"
                        role="tooltip"
                      >
                        Scarica fattura
                      </span>
                    </button>
             
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
