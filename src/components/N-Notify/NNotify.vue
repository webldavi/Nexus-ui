<template>
  <div :class="[fixedClass.root]" v-show="isOpen" id="N_Notify">
    <NAlert :variant="options.variant">
      <div :class="[fixedClass.alertSlot]">
        <slot />
        <button @click="emit('close-notify')">
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
        </button>
      </div>
    </NAlert>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from "vue";
import NAlert from "../N-Alert/NAlert.vue";

const options = defineProps({
  isOpen: {
    type: Boolean,
    required: false,
  },
  variant: {
    type: String,
    required: false,
    default: () => "default",
  },
});
const emit = defineEmits(["close-notify"]);
const fixedClass = computed({
  get() {
    return {
      root: ["w-max h-max p-2"],
      alertSlot: ["w-full flex flex-row justify-between gap-4"],
    };
  },
});
</script>
