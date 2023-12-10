<script setup lang="ts">
import Falco_Bianco from "@/assets/Falco_Bianco.png";
</script>

<template>
  <div class="border border-black">
    <!--PARTE IL NOSTRO PROGETTO-->
    <div class="flex p-3 m-auto justify-center items-center gap-5">
      <div class="flex flex-col max-w-[500px]">
        <h1 class="font-bold text-xl">Il nostro progetto</h1>
        <p>
          Guardian Flow è il risultato di una profonda ricerca e sviluppo nel
          campo della sicurezza informatica. Il nostro obiettivo è offrire alle
          aziende una difesa proattiva e intelligente contro minacce emergenti
          nel vasto mondo digitale. Ciò che ci distingue è il nostro sistema
          all'avanguardia basato su Intelligenza Artificiale (IA) non
          supervisionata, noto come Guardian Flow.
        </p>
      </div>
      <div class="flex">
        <img :src="Falco_Bianco" alt="Logo" class="w-[300px]" />
      </div>
    </div>

    <!-- SECONDA PARTE -->
    <div
      class="flex flex-row-reverse p-3 m-auto max-w-[700px] justify-center items-center gap-5"
    >
      <div class="flex flex-col justify-center">
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
      <div class="flex flex-row justify-between px-20 gap-12">
        <div class="flex flex-col text-center">
          <h1 class="font-bold text-lg">Rilevazione anomalie</h1>
          <p>
            Guardian Flow va oltre i tradizionali sistemi di sicurezza che si
            basano su firme, rilevando attivamente anomalie non ancora
            conosciute nel traffico di rete.
          </p>
        </div>
        <div class="flex flex-col text-center">
          <h1 class="font-bold text-lg">Notifiche immediate</h1>
          <p>
            Il nostro sistema è progettato per notificare tempestivamente
            l'utente in caso di anomalie rilevate, consentendo una risposta
            rapida e efficace.
          </p>
        </div>
        <div class="flex flex-col text-center">
          <h1 class="font-bold text-lg">Baseline personalizzata</h1>
          <p>
            Offriamo la possibilità di costruire una baseline personalizzata per
            ogni cliente. Questo consente a Guardian Flow di adattarsi alle
            specifiche esigenze di sicurezza dell'azienda.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
