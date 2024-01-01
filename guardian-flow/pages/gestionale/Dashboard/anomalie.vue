<script setup lang="ts">
import { type Anomalia } from "@/types";
/* layout */
definePageMeta({
  layout: "gestionale",
});
const { data: anomalies } = useFetch("/api/Dashboard/getAllVulnerability");
</script>

<template>
  <div class="mx-auto max-w-[85rem] py-10 sm:px-2 lg:px-8 lg:py-14">
    <div class="-m-1.5 overflow-x-auto max-w-[1400px]">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden bg-[#171717] rounded-lg shadow">
          <div class="flex flex-row p-3">
            <h1 class="text-2xl text-white">Anomalie</h1>
          </div>
          <!-- table -->
          <table class="min-w-full">
            <thead class="p-2 border-b border-[#1e1e1e]">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Identificativo
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Data rilevazione
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Protocollo
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Porta
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  IP sorgente
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  IP destinazione
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium text-white uppercase text-start"
                >
                  Stato
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-white uppercase text-end">
                  Opzioni
                </th>
              </tr>
            </thead>
            <tbody v-for="anomalia in anomalies" class="overflow-auto divide-y divide-gray-200">
              <AnomalieTableRow
                :anomalyID="anomalia.id"
                :anomalyDate="new Date(anomalia.data)"
                :anomalyProtocol="anomalia.protocollo"
                :anomalyPort="anomalia.porta"
                :anomalyIPSorg="anomalia.ip_sorgente"
                :anomalyIPDest="anomalia.ip_destinazione"
                :anomalyStatus="anomalia.stato"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
