<script setup lang="ts">
/* array login history */
const loginhistory = [
  {
    data: "25 Gennaio 2024",
    esito: "Successo",
  },
  {
    data: "24 Gennaio 2024",
    esito: "Fallito",
  },
  {
    data: "23 Gennaio 2024",
    esito: "Successo",
  },
];
</script>

<template>
  <div class="flex flex-col gap-3 p-4 text-white bg-[#171717] shadow-sm rounded-xl md:p-5">
    <h1 class="font-bold">Login history</h1>
    <div class="flex justify-center overflow-x-auto max-h-[200px] w-full">
      <table class="">
        <thead>
          <tr>
            <th class="px-6 py-3">Data</th>
            <th class="px-6 py-3">Esito</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(login, index) in loginhistory">
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <Icon
                  v-if="loginhistory[index].esito == 'Successo'"
                  name="fluent-emoji-flat:green-circle"
                  size="15"
                />
                <Icon v-else name="fluent-emoji-flat:red-circle" size="15" />
                <h1>{{ loginhistory[index].data }}</h1>
              </div>
            </td>
            <td class="px-6 py-4">{{ loginhistory[index].esito }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
