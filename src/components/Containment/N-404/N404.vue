<template>
    <div :class="fixedClass.root">
        <h1 :class="fixedClass.title">404</h1>
        <p :class="fixedClass.text">
            <slot />
        </p>
        <div :class="fixedClass.imgContainer">
            <img src="../../../assets/404.png" :class="fixedClass.img" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const fixedClass = computed<{
    root: string;
    title: string;
    text: string;
    imgContainer: string;
    img: string;
}>(() => {
    return {
        root: "root",
        title: "title",
        text: "text",
        imgContainer: "imgContainer",
        img: "img",
    };
});
</script>

<style scoped>
.root {
    box-shadow: 0px 0px 25px 0.01rem #808080b5;
    @apply w-[32rem] h-96 bg-gray-100 border border-gray-300 relative rounded-xl flex flex-col items-center gap-4 p-4 font-mono;
}

.title {
    @apply text-6xl text-gray-950/75 font-bold z-10;
}
.text {
    @apply text-3xl z-10 text-gray-950/75 font-bold;
}
.imgContainer {
    @apply absolute opacity-50 top-0 w-full h-full flex items-center justify-center;
}
.img {
    @apply w-full h-full;
}
</style>
