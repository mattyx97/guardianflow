<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  priceMese?: number;
  priceAnno?: number;
}>();

const user = useUser();
if (user.value) {
  await navigateTo("/"); // redirect to profile page
}

const errorMessage = ref<string | null>(null);

const handleSubmit = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  const formData = new FormData(e.target);
  try {
    await $fetch("/api/signup", {
      method: "POST",
      body: {
        username: formData.get("email"),
        password: formData.get("password"),
      },
      redirect: "manual",
    });
    await navigateTo("/"); // profile page
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
  <div class="flex flex-col items-center justify-center gap-x-20 m-5 lg:flex-row lg:items-start">
    <div class="flex flex-col max-w-[600px]">
      <h1 class="text-2xl font-bold">Procedi all'acquisto del piano {{ $props.title }}</h1>
      <h1>
        {{ $props.description }}
      </h1>
      <div>
        <h1 class="text-2xl font-bold">Cosa include il piano {{ $props.title }}</h1>

        <ul class="space-y-3 mt-3">
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Baseline personalizzata</span>
          </li>
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Analisi del traffico</span>
          </li>
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Notifica anomalie</span>
          </li>
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Dashboard interattiva</span>
          </li>
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Gestione utenti subordinati</span>
          </li>
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Gestione anomalie rilevate</span>
          </li>
          <li class="flex gap-2 items-center">
            <svg
              class="flex-shrink-0 h-4 w-4 mt-0.5 text-green-500"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Gestione storico pagamenti</span>
          </li>
        </ul>
      </div>
    </div>
    <CardPayment />
  </div>
</template>
