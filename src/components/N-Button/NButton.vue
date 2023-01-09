<template>
  <button
    class="transition-all hover:scale-110 p-2 rounded-lg font-mono font-bold hover:shadow-md"
    :style="{
      backgroundColor: options.bg,
      color: options.text,
      fontSize: `${options.size}px`,
    }"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const options = defineProps({
  bg: {
    type: String,
    required: false,
    default: () => "#dbdbdb",
  },
  text: {
    type: String,
    required: false,
    default: () => "#444",
  },
  size: {
    type: String,
    required: false,
    default: () => "12",
  },
});
</script>

<style></style>
