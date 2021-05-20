<template>
    <h3
        class="text-base text-gray-500 font-semibold uppercase tracking-widest sm:opacity-100 px-4 md:px-6 transition duration-300"
        :class="[showText]"
    >
        {{ text }}
    </h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TheSideNavSubtitle',
    props: {
        text: { type: String, required: true },
    },
    computed: {
        showText(): string {
            return this.$store.state.isSideNavEnter ? 'md:opacity-100' : 'md:opacity-0'
        }
    }
})
</script>
