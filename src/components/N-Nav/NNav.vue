<template>
  <nav
    class="w-full h-max shadow-lg flex flex-row gap-4 items-center py-2 px-12"
    :style="{
      justifyContent: `${options.justify}`,
    }"
  >
    <slot />
  </nav>
</template>

<script setup lang="ts">

const options = withDefaults(defineProps<{ justify: string }>(), {
  justify: "flex-start",
});
</script>

<style scoped>
</style>
