<script setup lang="ts">


const frequenza = ref("mensile");
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold">I nostri piani</h1>
  </div>
  <div
    class="flex flex-col gap-12 mt-[5%] p-5 md:flex-row justify-center items-center"
  >
    <div>
      <div class="border-b border-[#1e1e1e1e]">
        <!-- MENU TOGGLE -->
        <nav
          class="-mb-0.5 flex justify-center space-x-6 text-md"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-[#ED1C24] hs-tab-active:text-[#ED1C24] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-[#ED1C24] focus:outline-none focus:text-[#ED1C24] disabled:opacity-50 disabled:pointer-events-none active"
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
            class="hs-tab-active:font-semibold hs-tab-active:border-[#ED1C24] hs-tab-active:text-[#ED1C24] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-[#ED1C24] focus:outline-none focus:text-[#ED1C24] disabled:opacity-50 disabled:pointer-events-none"
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

      <div class="mt-10">
        <!-- SEZIONE MENSILE -->
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
        >
          <div class="flex flex-col gap-5 md:flex-row" v-if="frequenza === 'mensile'">
            <CardPiano
              title="Small"
              description="Il piano Small è la soluzione ideale per le piccole imprese. Con una capacità di analisi fino a 300 GB di traffico di rete al mese oppure 3TB annuali."
              :price="91"
              frequenza="mese"
            />
            <CardPiano
              title="Medium"
              description="Il piano Medium è progettato per le aziende in crescita. Con la capacità di analizzare fino a 500 GB di traffico di rete al mese oppure 6.5TB annuali."
              :price="156"
              frequenza="mese"
            />
            <CardPiano
              title="Big"
              description="Il piano Big è ottimizzato per aziende di medie dimensioni. Con una capacità di analisi fino a 700 GB di traffico di rete al mese oppure 9 TB annuali."
              :price="221"
              frequenza="mese"
            />
            <CardPiano
              title="Huge"
              description="Il piano Huge è la scelta perfetta per aziende su larga scala. Con una capacità di analisi fino a 1 TB di traffico di rete al mese oppure 14 TB annuali."
              :price="351"
              frequenza="mese"
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
          <div class="flex flex-col gap-5 md:flex-row" v-if="frequenza === 'annuale'">
            <CardPiano
              title="Small"
              description="Il piano Small è la soluzione ideale per le piccole imprese. Con una capacità di analisi fino a 300 GB di traffico di rete al mese oppure 3TB annuali."
              :price="1092"
              frequenza="anno"
            />
            <CardPiano
              title="Medium"
              description="Il piano Medium è progettato per le aziende in crescita. Con la capacità di analizzare fino a 500 GB di traffico di rete al mese oppure 6.5TB annuali."
              :price="1874"
              frequenza="anno"
            />
            <CardPiano
              title="Big"
              description="Il piano Big è ottimizzato per aziende di medie dimensioni. Con una capacità di analisi fino a 700 GB di traffico di rete al mese oppure 9 TB annuali."
              :price="2652"
              frequenza="anno"
            />
            <CardPiano
              title="Huge"
              description="Il piano Huge è la scelta perfetta per aziende su larga scala. Con una capacità di analisi fino a 1 TB di traffico di rete al mese oppure 14 TB annuali."
              :price="4212"
              frequenza="anno"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
