<script setup lang="ts">
//@ts-nocheck
import auth from "@/assets/2fa.png";

const qrCode = ref<string | null>(null);
const token = ref<string | null>(null);
const secreet = ref<string | null>(null);

const user = useAuthenticatedUser();
const twoFactorEnabled = ref<boolean>(false);

onMounted(() => {
  twoFactorEnabled.value = user.value.twoFactorEnabled;
});
async function setup2FA() {
  try {
    // Richiedi al server di iniziare il processo di setup del 2FA
    const response = await $fetch("/api/2fa/setup", {
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

async function verifyToken() {
  try {
    // Invia il token inserito dall'utente al server per la verifica
    const response = await $fetch("/api/2fa/verify", {
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
  <div class="flex flex-col gap-3 p-4 bg-white border shadow-sm rounded-xl md:p-5">
    <h1 class="font-bold">Autenticazione 2FA</h1>
    <div class="flex flex-row justify-center gap-5 p-4">
      <div>
        <img :src="auth" alt="Autenticazione 2FA" class="w-[50px]" />
      </div>
      <div
        class="flex items-center gap-2 px-3 py-1 border border-black rounded-lg hover:bg-black hover:text-white"
      >
        <!-- BOTTONE PER 2FA -->
        <button v-if="twoFactorEnabled" class="flex flex-row items-center gap-2">
          <Icon v-elese name="fluent-emoji-flat:green-circle" size="20" />
          <h1>ATTIVA</h1>
        </button>
        <button v-else class="flex flex-row items-center gap-2" @click="setup2FA">
          <Icon name="fluent-emoji-flat:red-circle" size="20" />
          <h1>NON ATTIVA</h1>
        </button>
      </div>
      <div v-if="qrCode">
        <p>Scansiona questo QR code con la tua app di autenticazione:</p>
        <img :src="qrCode" />
        <div>
          <input type="text" v-model="token" placeholder="Inserisci il tuo token 2FA" />
          <button @click="verifyToken">Verifica Token</button>
        </div>
      </div>
    </div>
  </div>
</template>
