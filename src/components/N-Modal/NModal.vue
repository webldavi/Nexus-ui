<template>
  <div
    :class="[fixedClass.root, optionsClass.blur]"
    :style="{ backgroundColor: options.bg }"
  >
    <div
      :class="[
        sizeClass.modal,
        'rounded-3xl flex flex-col gap-2 p-4 overflow-hidden bg-white',
      ]"
      :style="{ backgroundColor: options.modal }"
    >
      <div class="flex flex-row justify-between border-b border-gray-300">
        <div>
          <slot name="title" />
        </div>
        <span @click="emit('close-modal')" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <div class="flex-1">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const emit = defineEmits(["close-modal"]);

const options = defineProps({
  bg: {
    type: String,
    required: false,
    default: () => "rgb(0 0 0 / 81%)",
  },
  modal: {
    type: String,
    required: false,
    default: () => "white",
  },
  size: {
    type: String,
    required: false,
    default: () => "full",
  },
  blur: {
    type: Boolean,
    required: false,
    default: () => true,
  },
});

const fixedClass = computed({
  get() {
    return {
      root: "fixed z-20 top-0 left-0 p-6 sm:p-12 w-screen h-screen bg-black/50 flex justify-center items-center",
    };
  },
});

const sizeClass = computed({
  get() {
    return {
      modal: [
        { "w-full h-full": options.size == "full" },
        { "w-120 h-105": options.size == "md" },
        { "w-96 h-52": options.size == "sm" },
      ],
    };
  },
});

const optionsClass = computed({
  get() {
    return {
      blur: [{ "backdrop-blur-sm": options.blur }],
    };
  },
});
</script>
