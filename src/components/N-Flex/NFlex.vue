<template>
    <div :class="[fixedClass.root]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Options = {
    width: string;
    height: string;
    justify: string;
    align: string;
    direction: string;
    gap: string;
};

defineProps<Options>();

const fixedClass = computed<{ root: string }>(() => {
    return {
        root: "root",
    };
});
</script>

<style scoped>
.root {
    display: flex;
    width: v-bind(width);
    height: v-bind(height);
    justify-content: v-bind(justify);
    align-items: v-bind(align);
    flex-direction: v-bind(direction);
    gap: v-bind(gap);
}
</style>
