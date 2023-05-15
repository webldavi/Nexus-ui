<template>
    <input
        :type="type"
        v-model="inputValue"
        :class="[fixedClass, typeClass, optionsClass]"
    />
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { OptionsNInput as Options } from "../../../types";

const emit = defineEmits(["input-change"]);
const inputValue = ref("");

watch(inputValue, () => {
    emit("input-change", inputValue.value);
});

const options = withDefaults(defineProps<Options>(), {
    type: "text",
    variant: "",
});

const inputTypes = ref(["text", "number", "email", "password", "date"]);

const fixedClass = computed<string>(() => {
    return "fixedClass";
});

const typeClass = computed<Array<object>>(() => {
    return [
        {
            typeClass: inputTypes.value.includes(options.type),
        },
    ];
});

const optionsClass = computed(() => {
    return [
        {
            default: !options.variant,
        },
        {
            error:
                options.variant == "error" &&
                inputTypes.value.includes(options.type),
        },
        {
            warn:
                options.variant == "warn" &&
                inputTypes.value.includes(options.type),
        },
        {
            success:
                options.variant == "success" &&
                inputTypes.value.includes(options.type),
        },
    ];
});
</script>
<style scoped>
.fixedClass {
    @apply border transition-all outline-none rounded-lg;
}

.typeClass {
    @apply pr-2 shadow pl-4 py-1;
}

.default {
    @apply border-gray-700;
}

.error {
    @apply border-yellow-500;
}

.warn {
    @apply border-yellow-500;
}

.success {
    @apply border-green-500;
}
</style>
