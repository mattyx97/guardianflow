<script setup lang="ts">
import Analisi from "@/assets/Analisi.svg";
import Setting from "@/assets/Setting.svg";
import AI from "@/assets/AI.svg";
import Sicurezza from "@/assets/Sicurezza.svg";
import GFLogo from "@/assets/Falco_Bianco.png"
</script>

<template>
  <div>
    <!--PARTE IL NOSTRO PROGETTO-->
    <div class="flex flex-col lg:flex-row justify-between items-center md:gap-5 mx-[15%]">
      <img :src="GFLogo" alt="Logo protezione" class="max-w-[40%] hidden lg:block" />
      <div class="flex flex-col max-w-[600px] gap-5">
        <h1 class="font-bold text-xl text-center lg:text-start md:text-2xl">IL NOSTRO PROGETTO</h1>
        <p class="font-light text-md text-center md:text-lg lg:text-start">
          Guardian Flow è il risultato di una profonda ricerca e sviluppo nel
          campo della sicurezza informatica. Il nostro obiettivo è offrire alle
          aziende una difesa proattiva e intelligente contro minacce emergenti
          nel vasto mondo digitale. Ciò che ci distingue è il nostro sistema
          all'avanguardia basato su Intelligenza Artificiale (IA) non
          supervisionata, noto come Guardian Flow.
        </p>
      </div>
    </div>

    <!-- TRE VANTAGGI -->
    <div class="flex flex-col">
      <h1 class="text-center font-bold text-2xl p-3">I nostri vantaggi</h1>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-5 mx-[15%] mt-5">
        <div
          class="flex flex-col bg-white border shadow-md rounded-xl items-center max-w-[300px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img class="max-w-[150px] p-3" :src="AI" alt="Image Description" />
          <div class="p-4 md:p-5 cursor-default">
            <h3 class="text-lg font-bold text-gray-800">
              Rilevazione Anomalie
            </h3>
            <p class="mt-1 text-gray-500 font-light">
              Guardian Flow va oltre i tradizionali sistemi di sicurezza che si
              basano su firme, rilevando attivamente anomalie non ancora
              conosciute nel traffico di rete.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col bg-white border shadow-md rounded-xl items-center max-w-[300px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            class="p-3 max-w-[150px]"
            :src="Analisi"
            alt="Image Description"
          />
          <div class="p-4 md:p-5 cursor-default">
            <h3 class="text-lg font-bold text-gray-800">Notifiche Immediate</h3>
            <p class="mt-1 text-gray-500 font-light">
              Il nostro sistema è progettato per notificare tempestivamente
              l'utente in caso di anomalie rilevate, consentendo una risposta
              rapida e efficace.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col bg-white border shadow-md rounded-xl items-center max-w-[300px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            class="max-w-[150px] p-3"
            :src="Setting"
            alt="Image Description"
          />
          <div class="p-4 md:p-5 cursor-default">
            <h3 class="text-lg font-bold text-gray-800">
              Baseline personalizzata
            </h3>
            <p class="mt-1 text-gray-500 font-light">
              Offriamo la possibilità di costruire una baseline personalizzata
              per ogni cliente. Questo consente a Guardian Flow di adattarsi
              alle specifiche esigenze di sicurezza dell'azienda.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECONDA PARTE -->
    <div class="flex flex-col-reverse lg:flex-row-reverse mx-[15%] mt-5 justify-center items-center gap-5">
        <img :src="Sicurezza" alt="Immagine protezione" class="max-w-[40%]">
      <div class="flex flex-col justify-center max-w-[800px] gap-5">
        <h1 class="font-bold text-xl text-center lg:text-start md:text-2xl">Protezione senza confini</h1>
        <p class="font-light text-md md:text-lg text-center lg:text-start">
          Il nostro sistema Guardian Flow si distingue per la sua capacità di
          monitorare il traffico di rete di un'azienda in tempo reale.
          Utilizzando un'IA non supervisionata, Guardian Flow va oltre i
          tradizionali sistemi basati su firme, rilevando non solo le minacce
          conosciute, ma anche individuando anomalie ancora sconosciute.
          Guardian Flow sfrutta l'intelligenza artificiale non supervisionata
          per analizzare il traffico di rete in modo dinamico. Questo significa
          che il sistema è in grado di apprendere autonomamente e rilevare
          anomalie senza la necessità di essere costantemente addestrato su
          nuovi dati. Ciò consente a Guardian Flow di identificare minacce in
          evoluzione, offrendo una sicurezza avanzata e dinamica.
        </p>
      </div>
    </div>
  </div>
</template>
