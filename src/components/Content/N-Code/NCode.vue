<template>
    <div class="root" ref="slot">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { OptionsNCode as Options } from "../../../types";

const slot = ref<HTMLDivElement>();
const options = withDefaults(defineProps<Options>(), {
    theme: "dracula",
    lang: "js",
    editor: true,
    height: "max-content",
    width: "max-content",
});
const url = ref(
    `https://n0d3rr-sh.vercel.app/#/editor/${options.theme}/${options.lang}?disable=${options.editor}`
);
onMounted(() => {
    if (slot.value) {
        slot.value.innerHTML = `<iframe src="${
            url.value +
            "&text=" +
            encodeURIComponent(
                JSON.parse(JSON.stringify(slot.value.textContent))
            )
        }" id="iframe"></iframe>`;
    }
});
</script>

<style>
#iframe {
    width: 100%;
    height: 100%;
}
</style>
<style scoped>
.root {
    width: v-bind(width);
    height: v-bind(height);
    @apply rounded-lg overflow-hidden flex gap-16;
}
</style>
