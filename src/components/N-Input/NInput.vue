<template>
  <input :type="type" :class="[fixedClass, typeClass, optionsClass]" />
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const options = defineProps({
  type: {
    type: String,
    required: false,
    default: () => "text",
  },
  variant: {
    type: String,
    required: false,
    default: () => "",
  },
});

const inputTypes = ref(["text", "number", "email", "password", "date"]);

const fixedClass = computed({
  get() {
    return "border transition-all outline-none rounded-lg";
  },
});

const typeClass = computed({
  get() {
    return [
      {
        "pr-2 shadow pl-4 py-1": inputTypes.value.includes(options.type),
      },
    ];
  },
});

const optionsClass = computed({
  get() {
    return [
      {
        "border-gray-700": !options.variant,
      },
      {
        "border-red-500":
          options.variant == "error" && inputTypes.value.includes(options.type),
      },
      {
        "border-yellow-500":
          options.variant == "warn" && inputTypes.value.includes(options.type),
      },
      {
        "border-green-500":
          options.variant == "success" &&
          inputTypes.value.includes(options.type),
      },
    ];
  },
});
</script>
