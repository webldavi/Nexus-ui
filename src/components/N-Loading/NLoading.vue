<template>
    <div :class="fixedClass.root">
        <div :class="fixedClass.center"></div>
        <div :class="fixedClass.corner"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

withDefaults(
    defineProps<{
        bg: string;
        spinner: string;
        corner: string;
        size: string;
    }>(),
    {
        bg: "white",
        spinner: "#1cff42",
        corner: "#006611",
        size: "md",
    }
);

const fixedClass = computed<{ root: string; center: string; corner: string }>(
    () => {
        return {
            root: "root",
            center: "center",
            corner: "corner",
        };
    }
);
</script>

<style scoped>
.root {
    background-color: v-bind(spinner);
    width: v-bind(size);
    height: v-bind(size);
    @apply rounded-full flex items-center justify-center p-2 relative overflow-hidden border border-black animate-spin;
}
.center {
    background-color: v-bind(bg);
    @apply w-full h-full rounded-full p-2 z-10 border border-black;
}

.corner {
    background-color: v-bind(corner);
    @apply absolute w-full h-full -bottom-5;
}
</style>
