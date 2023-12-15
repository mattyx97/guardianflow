<script setup lang="ts">
const openModal = ref(false);
function open() {
  openModal.value = true;
  console.log(openModal.value);
}
</script>

<template>
  <div
    class="flex flex-col gap-3 p-4 bg-white border shadow-sm rounded-xl md:p-5"
  >
    <h1 class="font-bold">Il tuo account</h1>
    <div>
      <ul>
        <li>
          <div class="flex gap-2">
            <h1>Nome e Cognome:</h1>
            <h1>Giuseppe Cerella</h1>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <h1>Email:</h1>
            <h1>g.cerella@gmail.com</h1>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <h1>Permessi:</h1>
            <h1>Admin</h1>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <button
        data-hs-overlay="#hs-sign-out-alert-small-window"
        @click="open()"
        type="button"
        class="p-2 text-xs border border-black rounded-lg hover:bg-black hover:text-white"
      >
        MODIFICA PASSWORD
      </button>
    </div>
    <!-- Modal -->
    <div
      id="hs-sign-out-alert-small-window"
      class="hs-overlay hidden w-full h-full mt-[10%] fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div
        class="m-3 mt-0 lg:min-w-[25%] transition-all ease-out opacity-0 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-xs sm:w-full sm:mx-auto"
      >
        <div class="relative flex flex-col  bg-white shadow-lg rounded-xl">
          <div class="absolute top-2 end-2">
            <button
              type="button"
              class="flex items-center justify-center text-sm font-semibold !text-red-500 border border-transparent rounded-lg w-7 h-7 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-overlay="#hs-sign-out-alert-small-window"
            >
              <Icon name="ic:round-close" size="25" class="hover:scale-125" />
            </button>
          </div>

          <div class="p-4 flex flex-col gap-5 overflow-y-auto text-center sm:p-10">
            <!-- End Icon -->

            <h3 class="mb-2 text-xl font-bold text-black">
              Modifica la tua password
            </h3>
            <label class="flex flex-col gap-2 items-start justify-center">
              <span class="text-sm text-black">Password attuale</span>
              <input
                type="password"
                class="block w-full py-3 pl-2 text-sm bg-transparent border rounded-xl focus:border-red-500 focus:outline-none focus:border-2 focus:ring-0 disabled:pointer-events-none"
                placeholder="Enter password"
              />
            </label>

            <label class="flex flex-col gap-2 items-start justify-center mt-2">
              <span class="text-sm text-black">Nuova password</span>
              <input
                type="password"
                class="block w-full py-3 pl-2 text-sm bg-transparent border rounded-xl focus:border-red-500 focus:outline-none focus:border-2 focus:ring-0 disabled:pointer-events-none"
                placeholder="Enter password"
              />
            </label>

            <label class="flex flex-col gap-2 items-start justify-center mt-2">
              <span class="text-sm text-black">Conferma password</span>
              <input
                type="password"
                class="block w-full py-3 pl-2 text-sm bg-transparent border rounded-xl focus:border-red-500 focus:outline-none focus:border-2 focus:ring-0 disabled:pointer-events-none"
                placeholder="Enter password"
              />
            </label>

            <div class="grid mt-6 gap-y-2">
              <button
                type="button"
                class="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border text-white bg-red-500 shadow-md disabled:pointer-events-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                data-hs-overlay="#hs-sign-out-alert-small-window"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
