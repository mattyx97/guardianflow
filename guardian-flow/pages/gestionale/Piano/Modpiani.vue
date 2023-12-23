<script setup lang="ts">
/* layout */
//@ts-nocheck
definePageMeta({
  layout: "gestionale",
  middleware: ["protected"],
});
const { data: piano } = await useFetch("/api/Piano/getPiano");

const status = ref(piano.value?.[0]?.nome?.split(" ")[0] ?? "Small");

const errorMessage = ref<string | null>(null);
const showAlertConfirm = ref(false);
const showAlertNotConfirm = ref(false);
const frequenza = ref("mensile");
const pianoPrice = ref(91);

/* watch per cambiare il prezzo */
watch(status, () => {
  console.log(status.value);
  pianoPrice.value = getPianoPrice();
});

/* funzione per ottenere il prezzo */
function getPianoPrice(): number {
  if (frequenza.value === "mensile") {
    if (status.value === "Small") {
      return 91;
    } else if (status.value === "Medium") {
      return 156;
    } else if (status.value === "Big") {
      return 221;
    } else if (status.value === "Huge") {
      return 351;
    }
  } else if (frequenza.value === "annuale") {
    if (status.value === "Small") {
      return 1092;
    } else if (status.value === "Medium") {
      return 1874;
    } else if (status.value === "Big") {
      return 2652;
    } else if (status.value === "Huge") {
      return 4212;
    }
  }
  return 0;
}

/* funzione per id */
function getPianoId() {
  if (frequenza.value === "mensile") {
    if (status.value === "Small") {
      return 1;
    } else if (status.value === "Medium") {
      return 2;
    } else if (status.value === "Big") {
      return 3;
    } else if (status.value === "Huge") {
      return 4;
    }
  } else if (frequenza.value === "annuale") {
    if (status.value === "Small") {
      return 5;
    } else if (status.value === "Medium") {
      return 6;
    } else if (status.value === "Big") {
      return 7;
    } else if (status.value === "Huge") {
      return 8;
    }
  }
  return 0;
}

/* funzione per validare il nome nel campo input */
function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}
/* funzione per validare il numero di carta di 16 cifre */
function validateCardNumber(cardNumber: string): boolean {
  const cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
}
/* funzione per validare la data di scadenza */
function validateExpirationDate(expirationDate: string): boolean {
  const today = new Date();
  const [month, year] = expirationDate.split("/");
  // Il mese restituito da JavaScript è basato su 0 (0 per gennaio, 11 per dicembre)
  // quindi sottraiamo 1 dal valore del mese inserito dall'utente.
  const expiry = new Date(parseInt("20" + year), parseInt(month) - 1, 1);

  return expiry > today;
}

/* funzione per validare il cvv 3 cifre solo numeri */
function validateCVV(cvv: string): boolean {
  const cvvRegex = /^[0-9]{3}$/;
  return cvvRegex.test(cvv);
}

/* funzione per inviare  dati dal form */
const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  const cardNumber = formData.get("cardNumber") as string;
  const expirationDate = formData.get("expirationDate") as string;
  const cvv = formData.get("cvv") as string;
  const name = formData.get("name") as string;

  if (!validateName(name)) {
    showAlertNotConfirm.value = true; // Mostra l'alert di errore
    setTimeout(() => {
      showAlertNotConfirm.value = false;
    }, 3000);
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
    $fetch("/api/Piano/editPiano", {
      method: "POST",
      body: {
        id_piano: getPianoId(),
      },
    });
    navigateTo("/gestionale/Utente/user");
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
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <h1 class="text-2xl font-bold text-white">Modifica il tuo piano</h1>
    <div class="flex justify-between p-10 md:flex-col lg:flex-row gap-9">
      <!-- INIZIO MENU -->
      <div class="md:w-[50%]">
        <div class="border-b-2 border-[#171717]">
          <!-- MENU TOGGLE -->
          <nav
            class="-mb-0.5 flex justify-center space-x-6 text-md"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-[#ED1C24] hs-tab-active:text-[#ED1C24] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-white hover:text-[#ED1C24] focus:outline-none focus:text-[#ED1C24] disabled:opacity-50 disabled:pointer-events-none active"
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab"
              @click="frequenza = 'mensile'"
            >
              Mensile
            </button>
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-[#ED1C24] hs-tab-active:text-[#ED1C24] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-white hover:text-[#ED1C24] focus:outline-none focus:text-[#ED1C24] disabled:opacity-50 disabled:pointer-events-none"
              id="horizontal-alignment-item-2"
              data-hs-tab="#horizontal-alignment-2"
              aria-controls="horizontal-alignment-2"
              role="tab"
              @click="frequenza = 'annuale'"
            >
              Annuale
            </button>
          </nav>
        </div>

        <div class="mt-3">
          <!-- SEZIONE MENSILE -->
          <div
            id="horizontal-alignment-1"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-1"
          >
            <div class="flex flex-col gap-5" v-if="frequenza === 'mensile'">
              <LabelPianoMod
                title="Small"
                description="Il piano Small è la soluzione ideale per le piccole imprese. Con una capacità di analisi fino a 300 GB di traffico di rete al mese oppure 3TB annuali."
                :price="91"
                frequenza="mese"
                :id="1"
                v-model="status"
              />
              <LabelPianoMod
                title="Medium"
                description="Il piano Medium è progettato per le aziende in crescita. Con la capacità di analizzare fino a 500 GB di traffico di rete al mese oppure 6.5TB annuali."
                :price="156"
                frequenza="mese"
                v-model="status"
                :id="2"
              />
              <LabelPianoMod
                title="Big"
                description="Il piano Big è ottimizzato per aziende di medie dimensioni. Con una capacità di analisi fino a 700 GB di traffico di rete al mese oppure 9 TB annuali."
                :price="221"
                frequenza="mese"
                v-model="status"
                :id="3"
              />
              <LabelPianoMod
                title="Huge"
                description="Il piano Huge è la scelta perfetta per aziende su larga scala. Con una capacità di analisi fino a 1 TB di traffico di rete al mese oppure 14 TB annuali."
                :price="351"
                frequenza="mese"
                v-model="status"
                :id="4"
              />
            </div>
          </div>
          <!-- SEZIONE ANNUALE -->
          <div
            id="horizontal-alignment-2"
            class="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <div class="flex flex-col gap-5" v-if="frequenza === 'annuale'">
              <LabelPianoMod
                title="Small"
                description="Il piano Small è la soluzione ideale per le piccole imprese. Con una capacità di analisi fino a 300 GB di traffico di rete al mese oppure 3TB annuali."
                :price="1092"
                frequenza="anno"
                v-model="status"
                :id="5"
              />
              <LabelPianoMod
                title="Medium"
                description="Il piano Medium è progettato per le aziende in crescita. Con la capacità di analizzare fino a 500 GB di traffico di rete al mese oppure 6.5TB annuali."
                :price="1874"
                frequenza="anno"
                v-model="status"
                :id="6"
              />
              <LabelPianoMod
                title="Big"
                description="Il piano Big è ottimizzato per aziende di medie dimensioni. Con una capacità di analisi fino a 700 GB di traffico di rete al mese oppure 9 TB annuali."
                :price="2652"
                frequenza="anno"
                v-model="status"
                :id="7"
              />
              <LabelPianoMod
                title="Huge"
                description="Il piano Huge è la scelta perfetta per aziende su larga scala. Con una capacità di analisi fino a 1 TB di traffico di rete al mese oppure 14 TB annuali."
                :price="4212"
                frequenza="anno"
                v-model="status"
                :id="8"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CARD PAGAMENTO -->
      <div
        class="rounded-lg text-white flex flex-col bg-[#171717] w-full lg:w-[40%] p-3"
      >
        <h1 class="py-2 text-xl font-bold">Procedi all'acquisto</h1>
        <form
          method="post"
          action="/api/Piano/editPiano"
          @submit.prevent="handleSubmit"
        >
          <div class="flex flex-col gap-5 mt-3 text-white">
            <div>
              <label for="input-label" class="block mb-2 text-sm font-medium"
                >Nome e Cognome</label
              >
              <input
                type="text"
                name="name"
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none"
                placeholder="Nome e Cognome"
                required
              />
            </div>
            <div>
              <label for="input-label" class="block mb-2 text-sm font-medium">
                Numero della carta
              </label>
              <input
                type="number"
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none"
                placeholder="5555 5555 5555 5555"
                name="cardNumber"
                required
              />
            </div>
            <div>
              <label for="input-label" class="block mb-2 text-sm font-medium">
                Data di scadenza
              </label>
              <input
                type="month"
                name="expirationDate"
                id="input-label"
                required
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none text-white"
                placeholder="Data di scadenza"
              />
            </div>
            <div>
              <label for="input-label" class="block mb-2 text-sm font-medium"
                >CVV</label
              >
              <input
                type="number"
                name="cvv"
                required
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none text-white"
                placeholder="CVV"
              />
            </div>
            <div class="flex flex-row gap-2 text-xl text-white">
              <h1>Totale:</h1>
              <h1 class="font-bold">{{ pianoPrice }}€</h1>
            </div>
            <div class="flex justify-center mt-3">
              <button
                class="p-3 text-white bg-red-700 rounded-lg hover:bg-red-800"
              >
                ACQUISTA
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- alert -->
  <div class="fixed top-0 right-0">
    <div
      v-if="showAlertConfirm"
      class="p-4 bg-green-400 border-t-2 border-teal-500 rounded-lg"
      role="alert"
    >
      <div class="flex">
        <div class="">
          <!-- Icon -->
          <span
            class="inline-flex items-center justify-center w-8 h-8 text-teal-800 bg-green-400 border-4 border-teal-100 rounded-full"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
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
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <!-- End Icon -->
        </div>
        <div class="ms-3">
          <h3 class="font-semibold text-gray-800 dark:text-white">
            Successfully updated.
          </h3>
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Utente aggiunto.
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="showAlertNotConfirm"
      class="p-4 bg-red-500 border-red-500 border-s-4"
      role="alert"
    >
      <div class="flex">
        <div class="">
          <!-- Icon -->
          <span
            class="inline-flex items-center justify-center w-8 h-8 text-red-800 bg-red-200 border-4 border-red-100 rounded-full dark:border-red-900 dark:bg-red-800 dark:text-red-400"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
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
          </span>
          <!-- End Icon -->
        </div>
        <div class="ms-3">
          <h3 class="font-semibold text-gray-800 dark:text-white">Error!</h3>
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Pagamento non effettuato.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
