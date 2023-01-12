<template>
  <div :class="[fixedClass.root]" id="N_Notify">
    <NAlert :variant="options.variant" class="overflow-hidden">
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
      <div
        :class="[fixedClass.progress, variantClass]"
        :style="{
          width: `${width}%`,
        }"
      />
    </NAlert>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits, ref, onMounted } from "vue";
import NAlert from "../N-Alert/NAlert.vue";

const width = ref(100);
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
      root: ["w-52 h-max flex flex-col gap-1 overflow-hidden"],
      alertSlot: ["w-full flex flex-row justify-between gap-4 relative"],
      progress: ["absolute bottom-0 left-0 rounded-tr-lg h-1.5"],
    };
  },
});

const variantClass = computed({
  get() {
    return [
      { "bg-blue-900/50": options.variant == "default" },
      { "bg-yellow-900/50": options.variant == "warn" },
      { "bg-green-900/50": options.variant == "success" },
      { "bg-red-900/50": options.variant == "error" },
    ];
  },
});

onMounted(() => {
  setInterval(() => {
    if (options.isOpen) {
      width.value -= 1;
      if (width.value == 0) {
        clearInterval();
        emit("close-notify");
      }
    } else {
      clearInterval();
    }
  }, (1000 * 5) / 100);
});
</script>
