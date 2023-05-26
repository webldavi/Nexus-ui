<template>
    <div class="root">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { OptionsNBox as Options } from "../../../types";
withDefaults(defineProps<Options>(), {
    height: "max-content",
    width: "max-content",
    bg: "#444",
    text: "#fff",
});
</script>

<style scoped>
.root {
    width: v-bind(width);
    height: v-bind(height);
    background-color: v-bind(bg);
    color: v-bind(text);
    @apply p-2 rounded-lg;
}
</style>
