<template>
    <div :class="[fixedClass.root]" :style="{ backgroundColor: options.bg }">
        <div
            v-for="(item, index) in options.items"
            :key="index"
            :class="[fixedClass.container, conditionalClass(index).container]"
        >
            <div
                :class="[fixedClass.divider]"
                @click="itemsCache[index].isOpen = !itemsCache[index].isOpen"
            >
                <span>{{ item.title }}</span>

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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>

            <div
                :class="[fixedClass.textDesc]"
                :style="{ backgroundColor: options.bgText }"
            >
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { OptionsNAccordion as Options } from "../../../types";

const options = withDefaults(defineProps<Options>(), {
    bg: "#272727",
    bgText: "#373636",
});

const itemsCache = ref(options.items);

const fixedClass = computed<{
    root: string;
    container: string;
    divider: string;
    textDesc: string;
}>(() => {
    return {
        root: "root",
        container: "container",
        divider: "divider",
        textDesc: "textDesc",
    };
});

const conditionalClass = computed(() => {
    return (index: number) => ({
        container: itemsCache.value[index].isOpen ? "opened" : "closed",
    });
});
</script>
<style scoped>
@keyframes open {
    0% {
        @apply h-[1.25rem];
    }
    100% {
        @apply h-max;
    }
}

@keyframes closed {
    0% {
        @apply h-max;
    }
    100% {
        @apply h-[1.25rem];
    }
}
.root {
    @apply w-96 rounded-lg flex flex-col gap-6 p-4 text-white;
}

.container {
    @apply h-[1.25rem] transition-all w-full flex flex-col gap-4 items-start justify-start overflow-hidden;
}

.divider {
    @apply transition-all cursor-pointer w-full flex flex-row gap-2 justify-between;
}

.textDesc {
    @apply w-full break-words p-2 rounded-lg;
}

.opened {
    animation: open 0.5s;
    @apply h-max;
}
.closed {
    animation: closed 0.5s;
    @apply h-[1.25rem];
}
</style>
