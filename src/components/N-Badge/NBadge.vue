<template>
    <div :class="[fixedClass]">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

type Options = {
    size: string;
    bg: string;
};

withDefaults(defineProps<Options>(), {
    size: "16px",
    bg: "#e0e0",
});

const fixedClass = computed<string>(() => {
    return "fixedClass";
});
</script>

<style scoped>
.fixedClass {
    background-color: v-bind(bg);
    font-size: v-bind(size);
    @apply w-max h-max px-3 py-1 rounded-full flex items-center justify-center;
}
</style>
