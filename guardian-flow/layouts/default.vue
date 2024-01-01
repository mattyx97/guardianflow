<script setup lang="ts">
import Falco_Bianco from "@/assets/Falco_Bianco.png";

const navOptions = [
  {
    nome: "Home",
    link: "/",
  },
  {
    nome: "I nostri piani",
    link: "/piani",
  },
  {
    nome: "Chi siamo",
    link: "/chisiamo",
  },
  {
    nome: "Contattaci",
    link: "/contatti",
  },
];
</script>

<template>
  <header class="z-50 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap">
    <nav
      class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <img class="w-20" :src="Falco_Bianco" alt="Logo" />
        <!-- HAMBURGER -->
        <div class="sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm hs-collapse-toggle gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent"
            data-hs-collapse="#navbar-image-and-text-1"
            aria-controls="navbar-image-and-text-1"
            aria-label="Toggle navigation"
          >
            <svg
              class="flex-shrink-0 w-4 h-4 hs-collapse-open:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="flex-shrink-0 hidden w-4 h-4 hs-collapse-open:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="navbar-image-and-text-1"
        class="justify-between hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-5 mt-5 ite sm:flex-row sm:items-center sm:mt-0 sm:justify-center"
        >
          <NuxtLink
            v-for="option in navOptions"
            :to="option.link"
            class="font-medium hover:font-bold"
            aria-current="page"
            >{{ option.nome }}</NuxtLink
          >
          <NuxtLink to="/login" class="font-medium hover:font-bold hover:text-red-600 sm:hidden " aria-current="page">
            <h1 class="">Login</h1>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/login" class="hidden p-2 border-2 rounded-full hover:text-red-700 sm:block">
        <Icon name="tdesign:login" size="20" />
      </NuxtLink>
    </nav>
  </header>

  <slot />
</template>
