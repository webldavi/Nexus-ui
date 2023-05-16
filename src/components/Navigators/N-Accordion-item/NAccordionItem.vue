<template>
    <li class="root" :class="conditionalClass.root" ref="rootElement">
        <div class="containerTitle" @click="updateIsOpen">
            <span>
                <slot name="title" />
            </span>
            <div class="containerIcon" :class="conditionalClass.icon">
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
        </div>
        <div class="containerBody" ref="bodyElement">
            <slot name="body" />
        </div>
    </li>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const isOpen = ref<boolean>(false);
const rootElement = ref<HTMLDivElement>();
const bodyElement = ref<HTMLDivElement>();
function updateIsOpen() {
    isOpen.value = !isOpen.value;
    if (rootElement.value && bodyElement.value) {
        rootElement.value.style.height = isOpen.value
            ? (rootElement.value.style.height =
                  rootElement.value?.clientHeight +
                  bodyElement.value?.clientHeight +
                  "px")
            : (rootElement.value.style.height =
                  rootElement.value?.clientHeight -
                  bodyElement.value?.clientHeight +
                  "px");
    }
}

const conditionalClass = computed(() => {
    return {
        root: isOpen.value ? "opened" : "closed",
        icon: isOpen.value ? "iconOpened" : "IconClosed",
    };
});
</script>

<style scoped>
.root {
    @apply w-full flex flex-col transition-all gap-2 overflow-hidden border-b border-gray-300 rounded-lg;
}
.containerTitle {
    @apply w-full h-max p-2 flex flex-row justify-between gap-1 cursor-pointer;
}
.containerIcon {
    @apply w-max h-max transition-all;
}
.containerBody {
    @apply w-full px-2 pb-4 rounded-lg bg-gray-100 flex items-center justify-center;
}
.opened {
    height: max-content;
}
.closed {
    height: 2.5rem;
}
.iconOpened {
    transform: rotate(90deg);
}
</style>
