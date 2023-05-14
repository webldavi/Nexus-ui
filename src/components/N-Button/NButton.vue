<template>
    <button @click="emit('button-click')" :class="fixedClass">
        <slot />
    </button>
</template>

<script setup lang="ts">
import {
    OptionsNButton as Options,
} from "../../types";
import { computed } from "vue";
const emit = defineEmits(["button-click"]);

withDefaults(defineProps<Options>(), {
    bg: "#dbdbdb",
    text: "#444",
    size: "12",
});

const fixedClass = computed<string>(() => {
    return "button-container";
});
</script>

<style scoped>
.button-container {
    background-color: v-bind(bg);
    color: v-bind(text);
    font-size: v-bind(size);
    @apply transition-all w-max h-max hover:scale-105 p-2 rounded-lg font-mono font-bold hover:shadow-md;
}
</style>
