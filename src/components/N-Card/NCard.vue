<template>
  <div
    :class="[fixedClass, sizeClass]"
    :style="{ backgroundColor: options.bg, borderColor: options.border }"
  >
    <div class="w-full rounded-3xl overflow-hidden">
      <slot name="image" />
    </div>
    <div>
      <slot name="title" />
    </div>
    <div class="w-full h-max break-words">
      <slot name="desc" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const options = defineProps({
  bg: {
    type: String,
    required: false,
    default: () => "transparent",
  },
  border: {
    type: String,
    required: false,
    default: () => "rgb(17, 24, 39)",
  },
  size: {
    type: String,
    required: false,
    default: () => "md",
  },
});

const fixedClass = computed({
  get() {
    return "p-4 drop-shadow-md rounded-3xl border border-gray-900 flex flex-col gap-2";
  },
});

const sizeClass = computed({
  get() {
    switch (options.size) {
      case "sm":
        return "w-48";
      case "md":
        return "w-64";
      case "lg":
        return "w-96";
      default:
        return "w-64";
    }
  },
});
</script>
