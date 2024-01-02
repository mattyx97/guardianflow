<script setup lang="ts">
definePageMeta({
  layout: false,
});
const isLoading = ref(false);
const open = ref(false);

/* FUNCTIONS */
/* function onSubmit() {
  isLoading.value = true;
  authStore
    .login({
      email: credentials.email,
      password: credentials.password,
    })
    .then(() => {
      useRouter().push("/gestionale/");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
} */

function openModal() {
  open.value = true;
  console.log(open.value);
}
</script>

<template>
  <!-- WRAPPER CENTRATO -->
  <div class="absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-3/4">
    <!-- CARD -->
    <div
      class="w-[95vw] max-w-[350px] rounded-lg px-4 py-8 sm:w-[350px] shadow-[0px_0px_15px_8px_rgba(0,0,0,0.1);]"
    >
      <!-- HEADER -->
      <div class="mb-4 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Area Riservata</h1>
        <p class="text-sm text-muted-foreground">Inserisci i tuoi dati</p>
      </div>

      <!-- FORM -->
      <form class="flex flex-col w-full gap-2">
        <label class="flex flex-col space-y-1">
          <span>Email</span>
          <input
            type="email"
            class="p-2 border rounded-md focus:border-2 focus:outline-black"
            :disabled="isLoading"
            required
          />
        </label>

        <label class="flex flex-col space-y-1">
          <span>Password</span>
          <input
            type="password"
            class="p-2 border rounded-md ring-none focus:border-2 focus:outline-black"
            :disabled="isLoading"
            required
          />
        </label>

        <button
          class="w-full mt-5 p-2 border rounded-md bg-green-500 hover:bg-green-700 text-white"
          :disabled="isLoading"
          :class="{ 'bg-gray-400': isLoading }"
        >
          <Icon v-if="isLoading" name="svg-spinners:90-ring" size="20" />
          <span v-else>Accedi</span>
        </button>
      </form>
      <!-- LINK RESET PSW -->
      <div class="flex justify-center">
        <button class="mt-5 text-sm font-bold m-auto" @click="openModal()">
          Hai dimenticato la password?
        </button>
      </div>
    </div>
  </div>
</template>
