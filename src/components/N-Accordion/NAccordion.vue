<template>
  <div :class="[fixedClass.root]" :style="{ backgroundColor: options.bg }">
    <div
      :class="[fixedClass.container]"
      v-for="(item, index) in options.items"
      :key="index"
      :style="{ height: itemsCache[index].isOpen ? 'max-content' : '1.25rem' }"
    >
      <div
        :class="[fixedClass.divider]"
        @click="itemsCache[index].isOpen = !itemsCache[index].isOpen"
      >
        <span>{{ item.title }}</span>

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

      <div
        :class="[fixedClass.textDesc]"
        :style="{ backgroundColor: options.bgText }"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";

interface Infos {
  title: string;
  text: string;
  bg: string;
  bgText: string;
  isOpen: boolean;
}
type Options = {
  items: Array<Infos>;
  bg: string;
  bgText: string;
};
const options = withDefaults(defineProps<Options>(), {
  bg: "#272727",
  bgText: "#373636",
});

const itemsCache = ref(options.items);

interface fixed {
  root: string;
  container: string;
  divider: string;
  textDesc: string;
}

const fixedClass = computed<fixed>(() => {
  return {
    root: "root",
    container: "container",
    divider: "divider",
    textDesc: "textDesc",
  };
});
</script>
<style scoped>
.root {
  @apply w-96 rounded-lg flex flex-col gap-6 p-4 text-white;
}

.container {
  @apply transition-all w-full flex flex-col gap-4 items-start justify-start overflow-hidden;
}

.divider {
  @apply transition-all cursor-pointer w-full flex flex-row gap-2 justify-between;
}

.textDesc {
  @apply w-full break-words p-2 rounded-lg;
}
</style>
