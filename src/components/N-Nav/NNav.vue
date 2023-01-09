<template>
  <nav
    class="w-full shadow-lg flex flex-row gap-4 items-center py-2 px-12"
    :style="{
      justifyContent: `${options.justify}`,
    }"
  >
    <slot />
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

const options = defineProps({
  justify: {
    type: String,
    required: false,
    default: () => "flex-start",
  },
});
</script>

<style></style>
