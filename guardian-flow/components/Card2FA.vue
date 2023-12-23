<script setup lang="ts">
//@ts-nocheck
import auth from "@/assets/2faWhite.png";

const qrCode = ref<string | null>(null);
const token = ref<string | null>(null);
const secreet = ref<string | null>(null);

const user = useAuthenticatedUser();
const twoFactorEnabled = ref<boolean>(false);

const mostraDiv = ref(true);

onMounted(() => {
  twoFactorEnabled.value = user.value.twoFactorEnabled;
});

/* funzione per fare il setup dell'autenticazione a due fattori */
async function setup2FA() {
  mostraDiv.value = false;
  try {
    // Richiedi al server di iniziare il processo di setup del 2FA
    const response = await $fetch("/api/utente/2fa/setup", {
      method: "POST",
      body: {
        uid: user.value.userId,
      },
    });
    console.log(response);
    qrCode.value = response.qrCodeImageUrl; // L'immagine del QR code da visualizzare
  } catch (error) {
    console.error("Errore nell'attivazione del 2FA:", error);
  }
}
/* funzione per verifcare il token */
async function verifyToken() {
  try {
    // Invia il token inserito dall'utente al server per la verifica
    const response = await $fetch("/api/utente/2fa/verify", {
      method: "POST",
      body: {
        token: token.value,
        secreet: secreet.value,
        userId: user.value.userId,
      },
    });
    console.log(response);
    if (response.verified) {
      alert("2FA attivato con successo!");
      twoFactorEnabled.value = true;
      qrCode.value = null;
    } else {
      alert("Verifica del token fallita. Riprova.");
    }
  } catch (error) {
    console.error("Errore nella verifica del token 2FA:", error);
  }
}
</script>

<template>
  <div
    class="flex flex-col gap-3 p-4 text-white bg-[#171717] shadow-sm rounded-xl md:p-5"
  >
    <h1 class="font-bold">Autenticazione 2FA</h1>

    <div class="flex justify-center gap-5 p-4 md:flex-row">
      <div>
        <img
          :src="auth"
          alt="Autenticazione 2FA"
          class="w-[50px] hidden md:block"
        />
      </div>
      <div class="flex items-center gap-2" :class="{ hidden: !mostraDiv }">
        <!-- BOTTONE PER 2FA -->
        <button
          v-if="twoFactorEnabled"
          class="flex flex-row items-center gap-2 cursor-none"
        >
          <Icon v-elese name="fluent-emoji-flat:green-circle" size="20" />
          <h1>ATTIVA</h1>
        </button>

        <button
          v-else
          class="p-[1px] text-md rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-md"
          @click="setup2FA"
        >
          <span
            class="p-3 flex h-full w-full items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white hover:bg-gradient-to-t ease-in hover:from-red-500 hover:via-red-600 hover:to-red-700"
          >
            <Icon name="fluent-emoji-flat:red-circle" size="20" />
            <h1>NON ATTIVA</h1>
          </span>
        </button>
      </div>
      <div
        v-if="qrCode"
        class="flex flex-col items-center justify-center gap-3 text-center"
      >
        <p>Scansiona questo QR code con la tua app di autenticazione:</p>

        <img :src="qrCode" class="lg:max-w-[25%]" />

        <div class="flex flex-col gap-3">
          <input
            class="px-2 py-3 border-2 border-[#2b2b2b] bg-[#171717] rounded-lg"
            type="text"
            v-model="token"
            placeholder="Inserisci il tuo token 2FA"
          />
          <button
            @click="verifyToken"
            class="p-[1px] text-md rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-md"
          >
            <span
              class="p-2 flex h-full w-full items-center justify-center bg-[#171717] rounded-md focus:outline-none text-white hover:bg-gradient-to-t ease-in hover:from-red-500 hover:via-red-600 hover:to-red-700"
            >
              Verifica Token
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
