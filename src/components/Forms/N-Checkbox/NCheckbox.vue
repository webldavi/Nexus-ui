<template>
    <button :class="fixedClass" @click="updateCheckbox()">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
        >
            <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
            />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits } from "vue";
import { OptionsNCheckbox as Options } from "../../../types";

const emit = defineEmits(["checked"]);

const options = withDefaults(defineProps<Options>(), {
    color: "blue",
    unClickColor: "black",
});

const historyColor = ref(options.color);
const check = ref(false);
function updateCheckbox() {
    check.value = !check.value;
    historyColor.value = check.value ? options.color : options.unClickColor;
    emit("checked", check.value);
}

const fixedClass = computed<string>(() => {
    return "fixedClass";
});
</script>

<style scoped>
.fixedClass {
    color: v-bind("historyColor");
    @apply h-12 w-12 rounded-full bg-white;
}
</style>
