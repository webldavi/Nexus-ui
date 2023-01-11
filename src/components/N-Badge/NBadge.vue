<template>
  <div
    :class="[fixedClass]"
    :style="{ backgroundColor: options.bg, fontSize: options.size }"
  >
    <slot />
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";
const options = defineProps({
  size: {
    type: String,
    required: false,
    default: () => "15px",
  },
  bg: {
    type: String,
    required: false,
    default: () => "#e0e0",
  },
});

const fixedClass = computed({
  get() {
    return "px-3 py-1 rounded-full";
  },
});
</script>
