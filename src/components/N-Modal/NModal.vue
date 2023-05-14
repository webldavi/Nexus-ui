<template>
    <div
        :class="[fixedClass.root, optionsClass.blur]"
        :style="{ backgroundColor: options.bg }"
    >
        <div
            :class="[sizeClass.modal, 'modal']"
            :style="{ backgroundColor: options.modal }"
        >
            <div class="title-container">
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

<script setup lang="ts">
import { computed } from "vue";
import { OptionsNModal as Options } from "../../types";

const emit = defineEmits(["close-modal"]);

const options = withDefaults(defineProps<Options>(), {
    bg: "rgb(0 0 0 / 81%)",
    modal: "white",
    size: "full",
    blur: true,
});

const fixedClass = computed<{ root: string }>(() => {
    return {
        root: "root",
    };
});

const sizeClass = computed<{ modal: Array<Object> }>(() => {
    return {
        modal: [
            { full: options.size == "full" },
            { md: options.size == "md" },
            { sm: options.size == "sm" },
        ],
    };
});

const optionsClass = computed<{ blur: Array<Object> }>(() => {
    return {
        blur: [{ "backdrop-blur": options.blur }],
    };
});
</script>

<style scoped>
.root {
    @apply fixed z-20 top-0 left-0 p-6 sm:p-12 w-screen h-screen bg-black/50 flex justify-center items-center overflow-hidden;
}

.modal {
    @apply rounded-3xl flex flex-col gap-2 p-4 overflow-hidden bg-white;
}

.title-container {
    @apply flex flex-row justify-between border-b border-gray-300;
}

@keyframes full {
    0% {
        opacity: 0;
        @apply w-2 h-2;
    }
    100% {
        opacity: 1;
        @apply w-full h-full;
    }
}
@keyframes md {
    0% {
        opacity: 0;
        @apply w-2 h-2;
    }
    100% {
        opacity: 1;
        @apply w-120 h-105;
    }
}
@keyframes sm {
    0% {
        opacity: 0;
        @apply w-2 h-2;
    }
    100% {
        opacity: 1;
        @apply w-96 h-96;
    }
}

.full {
    animation: full 0.7s;
    @apply h-full w-full;
}

.md {
    animation: md 0.7s;
    @apply h-120 w-105;
}

.sm {
    animation: sm 0.7s;
    @apply h-96 w-96;
}

.blur {
    @apply backdrop-blur-sm;
}
</style>
