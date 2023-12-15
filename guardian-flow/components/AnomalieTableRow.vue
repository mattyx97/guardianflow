<script setup lang="ts">
const Anomaly = defineProps<{
  anomalyID?: number;
  anomalyDate?: string;
  anomalyProtocol?: string;
  anomalyPort?: number;
  anomalyIPSorg?: string;
  anomalyIPDest?: string;
  anomalyStatus?: boolean;
}>();
</script>

<template>
  <tr class="cursor-pointer hover:bg-gray-100">
    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">{{ $props.anomalyID }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.anomalyDate }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.anomalyProtocol }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.anomalyPort }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.anomalyIPSorg }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.anomalyIPDest }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.anomalyStatus }}</td>
    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
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
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
            href="#"
          >
            Falso positivo
          </a>
          <a
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
            href="#"
          >
            Elimina
          </a>
        </div>
      </div>
    </td>
  </tr>
</template>
