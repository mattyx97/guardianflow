<script setup lang="ts">
import Falco_Bianco from "@/assets/Falco_Bianco.png";
import Analisi from "@/assets/Analisi.svg";
import Setting from "@/assets/Setting.svg";
import AI from "@/assets/AI.svg";
import AnimazioneTest from "@/assets/AnimazioneTest.json";

</script>

<template>
  <div>
    <!--PARTE IL NOSTRO PROGETTO-->
    <div class="flex p-3 justify-center items-center gap-5 border-b m-3">
      <div class="flex flex-col max-w-[600px]">
        <h1 class="font-bold text-xl text-center">Il nostro progetto</h1>
        <p class="text-center">
          Guardian Flow è il risultato di una profonda ricerca e sviluppo nel
          campo della sicurezza informatica. Il nostro obiettivo è offrire alle
          aziende una difesa proattiva e intelligente contro minacce emergenti
          nel vasto mondo digitale. Ciò che ci distingue è il nostro sistema
          all'avanguardia basato su Intelligenza Artificiale (IA) non
          supervisionata, noto come Guardian Flow.
        </p>
      </div>
        <LottiePlayer
          autoplay
          controls
          loop
          style="width: 400px"
          src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
          speed="1"
          debug
        ></LottiePlayer>
    </div>

    <!-- SECONDA PARTE -->
    <div class="flex flex-row p-3 m-auto justify-center items-center gap-5">
      <div class="flex flex-col justify-center max-w-[800px]">
        <h1 class="font-bold text-xl text-center">Protezione senza confini</h1>
        <p class="text-center">
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
    <!-- TRE VANTAGGI -->
    <div class="flex flex-col p-5">
      <h1 class="text-center font-bold text-xl p-3">I nostri vantaggi</h1>
      <div class="flex flex-row justify-between px-20 gap-12 mt-5">
        <div
          class="flex flex-col bg-white border shadow-sm rounded-xl items-center max-w-[300px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img class="max-w-[150px] p-3" :src="AI" alt="Image Description" />
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">
              Rilevazione Anomalie
            </h3>
            <p class="mt-1 text-gray-500 dark:text-gray-400">
              Guardian Flow va oltre i tradizionali sistemi di sicurezza che si
              basano su firme, rilevando attivamente anomalie non ancora
              conosciute nel traffico di rete.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col bg-white border shadow-sm rounded-xl items-center max-w-[300px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            class="p-3 max-w-[150px]"
            :src="Analisi"
            alt="Image Description"
          />
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">Notifiche Immediate</h3>
            <p class="mt-1 text-gray-500 dark:text-gray-400">
              Il nostro sistema è progettato per notificare tempestivamente
              l'utente in caso di anomalie rilevate, consentendo una risposta
              rapida e efficace.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col bg-white border shadow-sm rounded-xl items-center max-w-[300px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            class="max-w-[150px] p-3"
            :src="Setting"
            alt="Image Description"
          />
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">
              Baseline personalizzata
            </h3>
            <p class="mt-1 text-gray-500 dark:text-gray-400">
              Offriamo la possibilità di costruire una baseline personalizzata
              per ogni cliente. Questo consente a Guardian Flow di adattarsi
              alle specifiche esigenze di sicurezza dell'azienda.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
