<template>
  <button
    @click="emit('button-click')"
    class="button-container"
    :style="{
      backgroundColor: options.bg,
      color: options.text,
      fontSize: `${options.size}px`,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["button-click"]);

interface Options {
  bg?: string;
  text?: string;
  size?: string;
}

const options = withDefaults(defineProps<Options>(), {
  bg: "#dbdbdb",
  text: "#444",
  size: "12",
})
</script>

<style scoped>
.button-container {
  @apply transition-all w-max h-max hover:scale-110 p-2 rounded-lg font-mono font-bold hover:shadow-md;
}
</style>
