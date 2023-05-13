<template>
  <div
    @click="emit('card-click')"
    :class="[fixedClass, sizeClass]"
    :style="{ backgroundColor: options.bg, borderColor: options.border }"
  >
    <div class="container-image">
      <slot name="image" />
    </div>
    <div>
      <slot name="title" />
    </div>
    <div class="container-dec">
      <slot name="desc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["card-click"]);
type Options = {
  bg?: string;
  border?: string;
  size?: string;
}
const options = withDefaults(defineProps<Options>(), {
  bg: "transparent",
  border: "rgb(17, 24, 39)",
  size: "md",
});

const fixedClass = computed<string>(() => {
  return "fixedClass";
});

const sizeClass = computed<string>(() => {
  switch (options.size) {
    case "sm":
      return "sm";
    case "md":
      return "md";
    case "lg":
      return "lg";
    default:
      return "md";
  }
});
</script>

<style scoped>
.fixedClass {
  @apply p-4 drop-shadow-md rounded-3xl border border-gray-900 flex flex-col gap-2;
}

.sm {
  @apply w-48;
}

.md {
  @apply w-64;
}

.lg {
  @apply w-96;
}

.container-desc {
  @apply w-full h-max break-words;
}

.container-image {
  @apply w-full rounded-3xl overflow-hidden;
}
</style>
