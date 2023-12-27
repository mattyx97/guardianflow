<script setup lang="ts">
const Utente = defineProps<{
  userEmail?: string;
  userNome?: string;
  userCognome?: string;
  userPermessi?: string;
}>();
const openModal = ref(false);

</script>

<template>

  <!-- INIZIO RIGA TABELLA -->
  <tr class="cursor-pointer hover:bg-gray-100">
    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
      {{ $props.userEmail }}
    </td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">{{ $props.userNome }}</td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">
      {{ $props.userCognome }}
    </td>
    <td class="px-6 py-4 text-sm whitespace-nowrap">
      {{ $props.userPermessi }}
    </td>
    <!-- drop -->
    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
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
        <button
                type="button"
                class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                data-hs-overlay="#hs-vertically-centered-modal1"
              >
                Modifica
              </button>

          <button
            class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:outline-none focus:bg-gray-100 hover:bg-red-500 hover:text-white"
          >
            Elimina
          </button>
        </div>
      </div>
    </td>
  </tr>

  <ModalEdit :open="true" />
</template>
