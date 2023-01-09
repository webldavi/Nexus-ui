<template>
  <div class="w-full h-screen">
    <NNav justify="space-between"> <span>dawdwa</span> </NNav>

    <div class="w-full p-2 flex flex-wrap flex flex-row gap-4">
      <div class="w-full flex flex-wrap gap-4">
        <NButton bg="#2dd12d38" text="#378745">Teste</NButton>
        <NInput type="text" placeholder="teste" variant="" />
        <NInput type="number" placeholder="teste" variant="" />
        <NInput type="email" placeholder="teste" variant="warn" />
        <NInput type="password" placeholder="teste" variant="error" />
        <NInput type="date" placeholder="teste" variant="success" />
      </div>

      <NCard>
        <template #image>
          <img src="https://webldavi.vercel.app/turingCommunity.png" />
        </template>

        <template #title>
          <h1 class="font-mono font-bold">TITULO</h1>
        </template>

        <template #desc>
          <span class="font-mono font-bold text-gray-800"
            >DESC DESC DESC DESC DESC DESC DESC DESC DESC DEDSC DESC DESC DESC
            DESC</span
          >
        </template>
      </NCard>
    </div>
  </div>
</template>

<script setup>
import NButton from "./components/N-Button/NButton.vue";
import NNav from "./components/N-Nav/NNav.vue";
import NInput from "./components/N-Input/NInput.vue";
import NCard from "./components/N-Card/NCard.vue";
</script>

<style></style>
