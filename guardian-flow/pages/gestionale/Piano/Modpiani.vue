<script setup lang="ts">
/* layout */
definePageMeta({
  layout: "gestionale",
  middleware: ["protected"],
});

const status = ref("Small");
const frequenza = ref("mensile");
</script>

<template>
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="flex flex-row justify-between p-10 gap-9">
      <!-- INIZIO MENU -->
      <div>
        <div class="border-b-2 border-[#171717]">
          <!-- MENU TOGGLE -->
          <nav
            class="-mb-0.5 flex justify-center space-x-6 text-md"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-red-600 hs-tab-active:text-red-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-white hover:text-red-600 focus:outline-none focus:text-red-500 disabled:opacity-50 disabled:pointer-events-none active"
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
              class="hs-tab-active:font-semibold hs-tab-active:border-red-600 hs-tab-active:text-red-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-white hover:text-red-600 focus:outline-none focus:text-red-500 disabled:opacity-50 disabled:pointer-events-none"
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
                v-model="status"
              />
              <LabelPianoMod
                title="Medium"
                description="Il piano Medium è progettato per le aziende in crescita. Con la capacità di analizzare fino a 500 GB di traffico di rete al mese oppure 6.5TB annuali."
                :price="156"
                frequenza="mese"
                v-model="status"
              />
              <LabelPianoMod
                title="Big"
                description="Il piano Big è ottimizzato per aziende di medie dimensioni. Con una capacità di analisi fino a 700 GB di traffico di rete al mese oppure 9 TB annuali."
                :price="221"
                frequenza="mese"
                v-model="status"
              />
              <LabelPianoMod
                title="Huge"
                description="Il piano Huge è la scelta perfetta per aziende su larga scala. Con una capacità di analisi fino a 1 TB di traffico di rete al mese oppure 14 TB annuali."
                :price="351"
                frequenza="mese"
                v-model="status"
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
              />
              <LabelPianoMod
                title="Medium"
                description="Il piano Medium è progettato per le aziende in crescita. Con la capacità di analizzare fino a 500 GB di traffico di rete al mese oppure 6.5TB annuali."
                :price="1874"
                frequenza="anno"
                v-model="status"
              />
              <LabelPianoMod
                title="Big"
                description="Il piano Big è ottimizzato per aziende di medie dimensioni. Con una capacità di analisi fino a 700 GB di traffico di rete al mese oppure 9 TB annuali."
                :price="2652"
                frequenza="anno"
                v-model="status"
              />
              <LabelPianoMod
                title="Huge"
                description="Il piano Huge è la scelta perfetta per aziende su larga scala. Con una capacità di analisi fino a 1 TB di traffico di rete al mese oppure 14 TB annuali."
                :price="4212"
                frequenza="anno"
                v-model="status"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CARD PAGAMENTO -->
      <div class="rounded-lg text-white flex flex-col bg-[#171717] w-[40%] p-3">
        <h1 class="text-xl font-bold py-2">Procedi all'acquisto</h1>
        <div class="text-white flex flex-col gap-5 mt-3">
          <div>
            <label for="input-label" class="block text-sm font-medium mb-2"
              >Nome e Cognome</label
            >
            <input
              type="email"
              id="input-label"
              class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none"
              placeholder="Nome e Cognome"
            />
          </div>
          <div>
            <label for="input-label" class="block text-sm font-medium mb-2"
              >Numero della carta
            </label>
            <input
              type="email"
              id="input-label"
              class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none"
              placeholder="5555 5555 5555 5555"
            />
          </div>
          <div>
            <label for="input-label" class="block text-sm font-medium mb-2"
              >Data di scadenza
            </label>
            <input
              type="date"
              id="input-label"
              class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none text-white"
            />
          </div>
          <div>
            <label for="input-label" class="block text-sm font-medium mb-2"
              >CVV
            </label>
            <input
              type="text"
              id="input-label"
              class="py-3 px-4 w-full bg-[#1e1e1e] rounded-lg text-sm focus:border-none text-white"
              placeholder="CVV"
            />
          </div>
          <div class="flex flex-row gap-2 text-white text-xl">
            <h1>Totale:</h1>
            <h1 class="font-bold">300$</h1>
          </div>
          <div class="flex justify-center mt-3">
            <button
              class="bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg"
            >
              ACQUISTA
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>