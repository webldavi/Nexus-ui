<template>
  <div class="w-full h-screen">
    <NNav justify="space-between"> <span>dawdwa</span> </NNav>

    <div class="w-full p-2 flex flex-wrap flex flex-row gap-4">
      <div class="w-full flex flex-wrap gap-4">
        <NButton bg="#2dd12d38" text="#378745">Teste</NButton>
        <NInput
          type="text"
          placeholder="teste"
          variant=""
          @input-change="test"
        />
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
      <div>
        <NButton @button-click="openModal = true"> Open </NButton>
      </div>
      <NModal v-if="openModal" size="md" @close-modal="openModal = false">
        <template #title>
          <span class="font-mono font-bold text-xl">TITULO</span>
        </template>

        <template #body>
          <div class="w-full h-full flex flex-row items-end justify-end gap-4">
            <NButton bg="#65ed515c" text="#1c5114">
              <span class="text-xl">OK</span>
            </NButton>

            <NButton bg="#ff48485c" text="#5e1c1c">
              <span class="text-xl">Cancel</span>
            </NButton>
          </div>
        </template>
      </NModal>

      <div class="w-96 flex flex-col gap-2">
        <NProgress percentage="100" color="#4086ff" size="sm" />
        <NProgress percentage="75" color="#dab535" />
        <NProgress percentage="50" color="#ff4e4e" size="lg" />
        <NProgress percentage="25" color="#60c951" />
      </div>
      <div class="w-96 flex flex-col gap-2">
        <NAlert>This is a alert component</NAlert>
        <NAlert variant="success">This is a alert component</NAlert>
        <NAlert variant="warn">This is a alert component</NAlert>
        <NAlert variant="error">This is a alert component</NAlert>
      </div>
      <div>
        <NBadge>BADGE</NBadge>
      </div>
    </div>
  </div>
</template>

<script setup>
import NButton from "./components/N-Button/NButton.vue";
import NNav from "./components/N-Nav/NNav.vue";
import NInput from "./components/N-Input/NInput.vue";
import NCard from "./components/N-Card/NCard.vue";
import NModal from "./components/N-Modal/NModal.vue";
import NProgress from "./components/N-Progress/NProgress.vue";
import NAlert from "./components/N-Alert/NAlert.vue";
import NBadge from "./components/N-Badge/NBadge.vue";
import { ref } from "vue";
const openModal = ref(false);

function test() {
  console.log("close");
}
</script>

<style></style>
