<template>
  <div
    :class="[fixedClass]"
    :style="{ backgroundColor: options.bg, fontSize: options.size }"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";

interface Options {
  size: string;
  bg: string;
}

const options = withDefaults(defineProps<Options>(), {
  size: "16px",
  bg: "#e0e0",
});

const fixedClass = computed<string>(() => {
  return "fixedClass";
});
</script>

<style scoped>
.fixedClass {
  @apply px-3 py-1 rounded-full flex items-center justify-center;
}
</style>
