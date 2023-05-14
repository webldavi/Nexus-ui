<template>
    <div :class="[fixedClass.root]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { OptionsNFlex } from "../../types";

const { wrap = "nowrap" } = defineProps<OptionsNFlex>();

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
    flex-wrap: v-bind(wrap);
}
</style>
