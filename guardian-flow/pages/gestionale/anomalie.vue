<script setup lang="ts">
/* layout */
definePageMeta({
  layout: "gestionale",
});

const Anomaly = [
  {
    anomalyID: 1,
    anomalyDate: "2021-10-10",
    anomalyProtocol: "TCP",
    anomalyPort: 80,
    anomalyIPSorg: "",
    anomalyIPDest: "",
    anomalyStatus: true,
  },
];
</script>

<template>
  <!-- table -->
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden border rounded-lg shadow">
        <div class="flex flex-row p-3">
          <h1 class="text-2xl">Anomalie</h1>
        </div>
        <table class="min-w-full overflow-auto">
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
          <tbody class="overflow-auto divide-y divide-gray-200">
            <AnomalieTableRow
              :anomalyID="1"
              anomalyDate="08/07/2023"
              anomalyProtocol="TCP"
              :anomalyPort="8080"
              anomalyIPSorg="192.0.0.0"
              anomalyIPDest="192.0.0.0"
              :anomalyStatus="false"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
