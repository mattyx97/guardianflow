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

const frequenza = ref("mensile");
const pianoPrice = ref(91);

watch(status, () => {
  console.log(status.value);
  pianoPrice.value = getPianoPrice();
});

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

const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);

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
  <div class="mx-auto max-w-[85rem] px-4 md:py-10 sm:px-6 lg:px-8 lg:py-14">
    <h1 class="text-white text-2xl font-bold">Modifica il tuo piano</h1>
    <div
      class="flex flex-col md:flex-row justify-between p-10 gap-9 items-center"
    >
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
        class="rounded-lg text-white flex flex-col bg-[#171717] w-full lg:w-[40%] p-3 md:h-max lg:h-full"
      >
        <h1 class="text-xl font-bold py-2">Procedi all'acquisto</h1>
        <form
          method="post"
          action="/api/Piano/editPiano"
          @submit.prevent="handleSubmit"
        >
          <div class="text-white flex flex-col gap-5 mt-3">
            <div>
              <label for="input-label" class="block text-sm font-medium mb-2"
                >Nome e Cognome</label
              >
              <input
                type="text"
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none"
                placeholder="Nome e Cognome"
              />
            </div>
            <div>
              <label for="input-label" class="block text-sm font-medium mb-2">
                Numero della carta
              </label>
              <input
                type="text"
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none"
                placeholder="1111 - 2222 - 3333 - 4444"
              />
            </div>
            <div>
              <label for="input-label" class="block text-sm font-medium mb-2">
                Data di scadenza
              </label>
              <input
                type="text"
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none text-white"
                placeholder="Data di scadenza"
              />
            </div>
            <div>
              <label for="input-label" class="block text-sm font-medium mb-2"
                >CVV</label
              >
              <input
                type="text"
                id="input-label"
                class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none text-white"
                placeholder="CVV"
              />
            </div>
            <div class="flex flex-row gap-2 text-white text-xl">
              <h1>Totale:</h1>
              <h1 class="font-bold">{{ pianoPrice }}€</h1>
            </div>
            <div class="flex justify-center mt-3">
              <button
                class="bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg"
              >
                ACQUISTA
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
