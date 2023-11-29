<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-3 p-4 bg-white border shadow-sm rounded-xl md:p-5">
    <h1 class="font-bold">Il tuo account</h1>
    <div>
      <ul>
        <li>
          <div class="flex gap-2">
            <h1>Nome e Cognome:</h1>
            <h1>Giuseppe Cerella</h1>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <h1>Email:</h1>
            <h1>g.cerella@gmail.com</h1>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <h1>Permessi:</h1>
            <h1>Admin</h1>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center ">
            <button class="p-2 text-xs border border-black rounded-lg hover:bg-black hover:text-white">MODIFICA PASSWORD</button>
   </div>
  </div>
</template>
