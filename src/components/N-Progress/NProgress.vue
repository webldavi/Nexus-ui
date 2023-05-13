<template>
  <div :class="[fixedClass.root, sizeClass]" :style="{ width: options.width }">
    <div
      :class="fixedClass.percentage"
      :style="{
        backgroundColor: options.color,
        width: `${options.percentage}%`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Options = {
  size?: string;
  percentage: string;
  width?: string;
  color?: string;
}

const options = withDefaults(defineProps<Options>(), {
  size: "md",
  width: "100%",
  color: "blue",
});

const fixedClass = computed<{ root: string; percentage: string }>(() => {
  return {
    root: "root",
    percentage: "percentage",
  };
});

const sizeClass = computed<Array<Object>>(() => {
  return [
    {
      lg: options.size == "lg",
      md: options.size == "md",
      sm: options.size == "sm",
    },
  ];
});
</script>


<style scoped>
.root {
  @apply w-full rounded-full bg-gray-300 relative overflow-hidden;
}
.percentage {
  @apply absolute z-10 left-0 h-full rounded-full;
}
.lg {
  @apply h-6;
}
.md {
  @apply h-4;
}
.sm {
  @apply h-2;
}
</style>
