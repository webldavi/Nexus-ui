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

<script setup>
import { defineProps, computed } from "vue";

const options = defineProps({
  size: {
    type: String,
    required: false,
    default: () => "md",
  },
  percentage: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: false,
    default: () => "100%",
  },
  color: {
    type: String,
    required: false,
    default: () => "blue",
  },
});

const fixedClass = computed({
  get() {
    return {
      root: "w-full rounded-full bg-gray-300 relative overflow-hidden",
      percentage: "absolute z-10 left-0 h-full rounded-full",
    };
  },
});

const sizeClass = computed({
  get() {
    return [
      {
        "h-6": options.size == "lg",
        "h-4": options.size == "md",
        "h-2": options.size == "sm",
      },
    ];
  },
});
</script>
