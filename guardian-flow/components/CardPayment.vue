<script setup lang="ts">
const user = useUser();
if (user.value) {
  await navigateTo("/"); // redirect to profile page
}

const errorMessage = ref<string | null>(null);

//function that generate a random secure password
function generatePassword() {
  var length = 12,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  const password = generatePassword();

  try {
    await $fetch("/api/utente/signup", {
      method: "POST",
      body: {
        username: formData.get("username"),
        password: password,
      },
      redirect: "manual",
    });
    await navigateTo("/"); // profile page
  } catch (e) {
    const { data: error } = e as {
      data: {
        message: string;
      };
    };
    errorMessage.value = error.message;
  }
};
</script>
<template>
  <!-- Card Section -->
  <div class="max-w-[500px]">
    <!-- Card -->
    <div class="bg-white rounded-xl border border-gray-300 shadow-md p-4 sm:p-7">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Procedi all'acquisto</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Inserisci i dati utili al completamento dell'acquisto
        </p>
      </div>

      <form method="post" action="/api/utente/signup" @submit.prevent="handleSubmit">
        <!-- Section -->
        <div class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
          <label for="af-payment-billing-contact" class="inline-block text-sm font-medium">
            I tuoi dati
          </label>

          <div class="mt-2 space-y-3">
            <input
              id="af-payment-billing-contact"
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Nome*"
            />
            <input
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Cognome*"
            />
            <input
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Email*"
              name="username"
              id="username"
            />
          </div>
        </div>
        <!-- End Section -->

        <!-- Section -->
        <div class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
          <label for="af-payment-billing-address" class="inline-block text-sm font-medium">
            Informazioni aziendali
          </label>

          <div class="mt-2 space-y-3">
            <input
              id="af-payment-billing-address"
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Nome azienda*"
            />
            <input
              id="af-payment-billing-address"
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="P.IVA*"
            />
            <input
              id="af-payment-billing-address"
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Email aziendale*"
            />
            <input
              id="af-payment-billing-address"
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Numero di telefono*"
            />
          </div>
        </div>
        <!-- End Section -->

        <!-- Section -->
        <div class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
          <label for="af-payment-payment-method" class="inline-block text-sm font-medium">
            Metodo di pagamento
          </label>

          <div class="mt-2 space-y-3">
            <input
              id="af-payment-payment-method"
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Intestatario carta*"
            />
            <input
              type="text"
              class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
              placeholder="Numero carta*"
            />
            <div class="grid sm:flex gap-3">
              <input
                type="text"
                class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
                placeholder="Data di scadenza*"
              />
              <input
                type="text"
                class="py-2 px-3 w-full border border-gray-200 text-sm rounded-lg disabled:pointer-events-none"
                placeholder="CVV*"
              />
            </div>
          </div>
          <div class="flex py-3 gap-2 items-center">
            <h1 class="text-2xl font-bold">Totale:</h1>
            <h1>prezzo€</h1>
          </div>
        </div>
        <!-- End Section -->
        <div class="mt-3 flex justify-center gap-x-2">
          <button
            type="submit"
            class="text-sm font-bold rounded-lg bg-[#ED1C24] text-white shadow-md w-full inline-flex justify-center py-3 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 disabled:pointer-events-none"
          >
            Paga Ora
          </button>
        </div>
      </form>
      <p class="error">{{ errorMessage }}</p>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Card Section -->
</template>
