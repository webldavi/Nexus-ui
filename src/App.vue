<template>
  <div class="w-full h-screen">
    <NNav justify="space-between"> <span>dawdwa</span> </NNav>

    <div class="w-full p-2 flex flex-wrap flex flex-row gap-4">
      <NButton bg="#2dd12d38" text="#378745">Teste</NButton>

      <NInput type="text" placeholder="teste" variant="" />
      <NInput type="number" placeholder="teste" variant="" />
      <NInput type="email" placeholder="teste" variant="warn" />
      <NInput type="password" placeholder="teste" variant="error" />
      <NInput type="date" placeholder="teste" variant="success" />
    </div>
  </div>
</template>

<script>
import NButton from "./components/N-Button/NButton.vue";
import NNav from "./components/N-Nav/NNav.vue";
import NInput from "./components/N-Input/NInput.vue";
export default {
  name: "App",
  components: { NButton, NNav, NInput },
};
</script>

<style></style>
