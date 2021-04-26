<template>
    <h3 class="text-base text-gray-500 font-semibold uppercase tracking-widest px-4 md:px-6 md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">{{ text }}</h3>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TheSideNavSubtitle',
    props: {
        text: { type: String, required: true },
    }
})
</script>
