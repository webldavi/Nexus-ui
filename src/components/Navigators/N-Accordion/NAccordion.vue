<template>
    <div class="root">
        <ul>
            <slot />
        </ul>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ height: string; width: string }>(), {
    height: "max-content",
    width: "24rem",
});
</script>
<style scoped>
.root {
    box-shadow: 0px 0px 10px 0.01rem #808080b5;
    width: v-bind(width);
    min-height: v-bind(height);
    @apply w-96  p-2 rounded-lg bg-gray-100;
}
.root > ul {
    @apply w-full h-max flex flex-col gap-2;
}
.accordion li > div {
    display: none;
}

.accordion .flipY {
    transform: rotate3d(1, 0, 0, 180deg);
}

.accordion svg {
    transition: all 1s cubic-bezier(0, 0.5, 0, 1);
}
</style>
