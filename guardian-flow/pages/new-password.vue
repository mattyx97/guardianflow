<script setup lang="ts">
definePageMeta({
  layout: false,
});
const isLoading = ref(false);
const open = ref(false);

const user = useUser();
if (user.value) {
  await navigateTo("/gestionale/dashboard"); // redirect to profile page
}

/* FUNCTIONS */
/* function onSubmit() {
  isLoading.value = true;
  authStore
    .login({
      email: credentials.email,
      password: credentials.password,
    })
    .then(() => {
      useRouter().push("/gestionale/");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
} */

const errorMessage = ref<string | null>(null);
const route = useRoute()


const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  try {
    const response = await $fetch("/api/utente/validateResetPassword", {
      method: "POST",
      body: {
        password: formData.get("email"),
        token: route.query.token,
      },
    });
    await navigateTo("/gestionale/dashboard"); // redirect to profile page
  } catch (e) {
    const { data: error } = e as {
      data: {
        message: string;
      };
    };
    errorMessage.value = error.message;
  }
};
function openModal() {
  open.value = true;
  console.log(open.value);
}
</script>

<template>
  <!-- WRAPPER CENTRATO -->
  <div class="absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-3/4">
    <!-- CARD -->
    <div
      class="w-[95vw] max-w-[350px] rounded-lg px-4 py-8 sm:w-[350px] shadow-[0px_0px_15px_8px_rgba(0,0,0,0.1);]"
    >
      <!-- HEADER -->
      <div class="mb-4 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Password dimenticata</h1>
        <p class="text-sm text-muted-foreground">Inserisci la nuova password</p>
      </div>

      <!-- FORM -->
      <form
        class="flex flex-col w-full gap-2"
        method="post"
    
        @submit.prevent="handleSubmit"
      >
        <label class="flex flex-col space-y-1">
          <span>Password</span>
          <input
            type="password"
            class="p-2 border rounded-md focus:border-2 focus:outline-black"
            :disabled="isLoading"
            required
            id="email"
            name="email"

          />
        </label>


        <button
          class="w-full p-2 mt-5 text-white bg-red-500 border rounded-md hover:bg-red-700"
          :disabled="isLoading"
          :class="{ 'bg-gray-400': isLoading }"
        >
          <Icon v-if="isLoading" name="svg-spinners:90-ring" size="20" />
          <span v-else>Invia email</span>
        </button>
      </form>
      <!-- LINK RESET PSW -->
     
    </div>
  </div>
</template>
