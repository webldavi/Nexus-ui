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
            <div :class="[fixedClass.progress, variantClass]"></div>
        </NAlert>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { OptionsNNotify as Options } from "../../types";

const width = ref(100);

const options = withDefaults(defineProps<Options>(), {
    variant: "defualt",
});

const emit = defineEmits(["close-notify"]);

const fixedClass = computed<{
    root: Array<string>;
    alertSlot: Array<string>;
    progress: Array<string>;
}>(() => {
    return {
        root: ["root"],
        alertSlot: ["alertSlot"],
        progress: ["progress"],
    };
});

const variantClass = computed<Array<object>>(() => {
    return [
        { "notify-default": options.variant == "default" },
        { "notify-warn": options.variant == "warn" },
        { "notify-success": options.variant == "success" },
        { "notify-error": options.variant == "error" },
    ];
});

onMounted(() => {
    const interval = setInterval(() => {
        if (options.isOpen) {
            width.value -= 1;
            if (width.value == 0) {
                clearInterval(interval);
                emit("close-notify");
            }
        } else {
            clearInterval(interval);
        }
    }, (1000 * 5) / 100);
});
</script>

<script lang="ts">
import NAlert from "../N-Alert/NAlert.vue";
export default {
    components: {
        NAlert,
    },
};
</script>
<style scoped>
.root {
    @apply w-52 h-max flex flex-col gap-1 overflow-hidden;
}

.alertSlot {
    @apply w-full flex flex-row justify-between gap-4 relative;
}

.progress {
    width: v-bind(width);
    @apply absolute bottom-0 left-0 rounded-tr-lg h-1.5;
}
.notify-default {
    @apply bg-blue-900/50;
}

.notify-warn {
    @apply bg-yellow-900/50;
}
.notify-success {
    @apply bg-green-900/50;
}
.notify-error {
    @apply bg-red-900/50;
}
</style>
