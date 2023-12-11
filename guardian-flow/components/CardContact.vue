<script setup lang="ts">
</script>
<template>
<!-- Contact Us -->
<div class="max-w-[500px] px-4 sm:px-6 mx-auto">
  <div class="mt-12 max-w-lg mx-auto">
    <!-- Card -->
    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
      <h2 class="mb-8 text-xl font-semibold text-gray-800 ">
        Contattaci!
      </h2>

      <form>
        <div class="grid gap-4 lg:gap-6">
          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-firstname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium ">Nome</label>
              <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm ">
            </div>

            <div>
              <label for="hs-lastname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium">Cognome</label>
              <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm ">
            </div>
          </div>
          <!-- End Grid -->

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-email-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium">Email</label>
              <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm ">
            </div>

            <div>
              <label for="hs-phone-number-1" class="block mb-2 text-sm text-gray-700 font-medium ">Numero di telefono</label>
              <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm ">
            </div>
          </div>
          <!-- End Grid -->

          <div>
            <label for="hs-about-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium">Mesaggio</label>
            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm"></textarea>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-6 grid">
          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">Invia Email</button>
        </div>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500">
            Ti risponderemo entro 1-2 giorni lavorativi.
          </p>
        </div>
      </form>
    </div>
    <!-- End Card -->
  </div>
</div>
<!-- End Contact Us -->
</template>