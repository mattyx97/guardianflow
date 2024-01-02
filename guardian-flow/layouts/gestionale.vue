<script setup lang="ts">
const navOptions = [
  {
    name: "Dashboard",
    icon: "svg-spinners:blocks-scale",
    link: "/gestionale/dashboard",
  },
  {
    name: "Profilo",
    icon: "mdi:account",
    link: "/gestionale/Utente/user",
  },
  {
    name: "Gestione utenti",
    icon: "mdi:account-group",
    link: "/gestionale/GestioneUtenti/users",
  },
  {
    name: "Anomalie",
    icon: "mingcute:warning-fill",
    link: "/gestionale/dashboard/anomalie",
  },
  {
    name: "Logout",
    icon: "mdi:logout",
    link: "/",
  },
];
</script>

<template>
  <!-- Navigation Toggle -->
  <div class="flex justify-end p-2 lg:hidden">
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
      data-hs-overlay="#sidebar-mini"
      aria-controls="sidebar-mini"
      aria-label="Toggle navigation"
    >
      <span class="sr-only">Toggle Navigation</span>
      <svg
        class="flex-shrink-0 w-4 h-4"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  </div>
  <!-- End Navigation Toggle -->

  <!-- Sidebar -->
  <div
    id="sidebar-mini"
    class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-20 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
  >
    <div class="flex flex-col items-center justify-center py-4 gap-y-2">
      <div v-for="option in navOptions" class="hs-tooltip inline-block [--placement:right]">
        <NuxtLink
          :to="option.link"
          class="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
        >
          <Icon :name="option.icon" size="20" />
          <span
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap"
            role="tooltip"
          >
            {{ option.name }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="w-full px-4 sm:px-6 md:px-4 lg:px-[7rem]">
    <slot />
  </div>
  <!-- End Sidebar -->
</template>
