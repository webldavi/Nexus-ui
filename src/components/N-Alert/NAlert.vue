<template>
    <div :class="[fixedClass, variantClass]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { OptionsNAlert as Options } from "../../types";

const options = withDefaults(defineProps<Options>(), {
    variant: "default",
});
const fixedClass = computed<string>(() => {
    return "fixedClass";
});

const variantClass = computed<Array<Object>>(() => {
    return [
        {
            default: options.variant == "default",
        },
        {
            success: options.variant == "success",
        },
        {
            warn: options.variant == "warn",
        },
        {
            error: options.variant == "error",
        },
    ];
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NAlert",
    // Other component options
});
</script>

<style scoped>
.fixedClass {
    @apply p-3 border rounded-lg drop-shadow;
}

.default {
    @apply border-blue-500 bg-blue-200 text-blue-900;
}

.success {
    @apply border-green-500 bg-green-200 text-green-900;
}

.warn {
    @apply border-yellow-500 bg-yellow-200 text-yellow-900;
}

.error {
    @apply border-red-500 bg-red-200 text-red-900;
}
</style>
