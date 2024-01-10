<script setup lang="ts">
const user = useUser();

if (user.value) {
  await navigateTo("/"); // redirect to profile page
}

const errorMessage = ref<string | null>(null);

function validateNameIntestatario(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

function validateCognome(cognome: string): boolean {
  const cognomeRegex = /^[a-zA-Z\s]+$/;
  return cognomeRegex.test(cognome);
}

//function that generate a random secure password
function validateCardNumber(cardNumber: string): boolean {
  const cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
}

function validateExpirationDate(expirationDate: string): boolean {
  const today = new Date();
  const [month, year] = expirationDate.split("/");
  // Il mese restituito da JavaScript è basato su 0 (0 per gennaio, 11 per dicembre)
  // quindi sottraiamo 1 dal valore del mese inserito dall'utente.
  const expiry = new Date(parseInt("20" + year), parseInt(month) - 1, 1);

  return expiry > today;
}

function validateCVV(cvv: string): boolean {
  const cvvRegex = /^[0-9]{3}$/;
  return cvvRegex.test(cvv);
}

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
function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  const password = generatePassword();
  const cardNumber = formData.get("cardNumber") as string;
  const expirationDate = formData.get("expirationDate") as string;
  const cvv = formData.get("cvv") as string;
  const username = formData.get("username") as string;
  const nome = formData.get("nome") as string;
  const cognome = formData.get("cognome") as string;
  const intestatario = formData.get("intestatario") as string;
  if (
    !validateName(nome) ||
    !validateCognome(cognome) ||
    !validateNameIntestatario(intestatario)
  ) {
    errorMessage.value = "Si prega di inserire i dati correttamente.";
    return;
  }

  if (
    !validateCardNumber(cardNumber) ||
    !validateExpirationDate(expirationDate) ||
    !validateCVV(cvv)
  ) {
    errorMessage.value =
      "Si prega di inserire informazioni valide per il pagamento.";
    return;
  }

  try {
    await $fetch("/api/utente/signup", {
      method: "POST",
      body: {
        username: formData.get("username"),
        password: password,
        nomeAzienda: formData.get("nomeAzienda"),
        nome: formData.get("nome"),
        cognome: formData.get("cognome"),
        emailAzienda: formData.get("emailAziendale"),
        p_iva: formData.get("pIva"),
        telefono: formData.get("telefono"),
      },
      redirect: "manual",
    });
    await navigateTo("/login"); // profile page
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
    <div
      class="p-4 bg-white border border-gray-300 shadow-md rounded-xl sm:p-7"
    >
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
          Procedi all'acquisto
        </h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Inserisci i dati utili al completamento dell'acquisto
        </p>
      </div>

      <form
        method="post"
        action="/api/utente/signup"
        @submit.prevent="handleSubmit"
      >
        <!-- Section -->
        <div
          class="py-6 border-t border-gray-200 first:pt-0 last:pb-0 first:border-transparent"
        >
          <label
            for="af-payment-billing-contact"
            class="inline-block text-sm font-medium"
          >
            I tuoi dati
          </label>

          <div class="mt-2 space-y-3">
            <input
              id="af-payment-billing-contact"
              type="text"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Nome*"
              name="nome"
            />
            <input
              type="text"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Cognome*"
              name="cognome"
            />
            <input
              type="text"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Email*"
              name="username"
              id="username"
            />
          </div>
        </div>
        <!-- End Section -->

        <!-- Section -->
        <div
          class="py-6 border-t border-gray-200 first:pt-0 last:pb-0 first:border-transparent"
        >
          <label
            for="af-payment-billing-address"
            class="inline-block text-sm font-medium"
          >
            Informazioni aziendali
          </label>

          <div class="mt-2 space-y-3">
            <input
              id="af-payment-billing-address"
              type="text"
              name="nomeAzienda"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Nome azienda*"
            />
            <input
              id="af-payment-billing-address"
              type="text"
              name="pIva"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="P.IVA*"
            />
            <input
              id="af-payment-billing-address"
              type="text"
              name="emailAziendale"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Email aziendale*"
            />
            <input
              id="af-payment-billing-address"
              type="text"
              name="telefono"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Numero di telefono*"
            />
          </div>
        </div>
        <!-- End Section -->

        <!-- Section -->
        <div
          class="py-6 border-t border-gray-200 first:pt-0 last:pb-0 first:border-transparent"
        >
          <label
            for="af-payment-payment-method"
            class="inline-block text-sm font-medium"
          >
            Metodo di pagamento
          </label>

          <div class="mt-2 space-y-3">
            <input
              id="af-payment-payment-method"
              type="text"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Intestatario carta*"
              name="intestatario"
              required
            />
            <input
              type="string"
              class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
              placeholder="Numero carta*"
              name="cardNumber"
              required
            />
            <div class="grid gap-3 sm:flex">
              <input
                type="month"
                class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
                placeholder="Data di scadenza*"
                name="expirationDate"
                required
              />
              <input
                type="number"
                class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg disabled:pointer-events-none"
                placeholder="CVV*"
                name="cvv"
                required
              />
            </div>
          </div>
          <div class="flex items-center gap-2 py-3">
            <h1 class="text-2xl font-bold">Totale:</h1>
            <h1>€</h1>
          </div>
        </div>
        <!-- End Section -->
        <div class="flex justify-center mt-3 gap-x-2">
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
