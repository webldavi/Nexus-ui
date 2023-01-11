<template>
  <div :class="[fixedClass, variantClass]">
    <slot />
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const options = defineProps({
  variant: {
    type: String,
    required: false,
    default: () => "default",
  },
});
const fixedClass = computed({
  get() {
    return "p-3 border rounded-lg drop-shadow";
  },
});

const variantClass = computed({
  get() {
    return [
      {
        "border-blue-500 bg-blue-200 text-blue-900":
          options.variant == "default",
      },
      {
        "border-green-500 bg-green-200 text-green-900":
          options.variant == "success",
      },
      {
        "border-yellow-500 bg-yellow-200 text-yellow-900":
          options.variant == "warn",
      },
      {
        "border-red-500 bg-red-200 text-red-900": options.variant == "error",
      },
    ];
  },
});
</script>
