<template>
    <nav :class="fixedClass.root">
        <slot />
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { OptionsNNav as Options } from "../../types";

withDefaults(defineProps<Options>(), {
    justify: "flex-start",
});

const fixedClass = computed<{ root: string }>(() => {
    return {
        root: "root",
    };
});
</script>

<style scoped>
.root {
    justify-content: v-bind(justify);
    @apply w-full h-max shadow-lg flex flex-row gap-4 items-center py-2 px-12;
}
</style>
