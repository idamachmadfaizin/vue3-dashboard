<template>
    <router-link
        class="flex items-center px-4 md:px-6 text-gray-500 hover:text-purple-700"
        :to="to"
    >
        <i class="text-sm mr-2 md:text-xl" :class="[icon]"></i>
        <span
            class="sm:opacity-100 transition duration-300 text-sm whitespace-nowrap"
            :class="[showText]"
        >
            {{ text }}
        </span>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheSideNavItem',
    props: {
        text: { type: String, required: true },
        icon: { type: String, required: true },
        to: { type: String, required: true },
    },
    computed: {
        showText(): string {
            return this.$store.state.isSideNavEnter ? 'md:opacity-100' : 'md:opacity-0'
        }
    }
})
</script>

<style scoped>
@layer base {
    .active {
        @apply text-purple-700 border-purple-700 md:border-l-4 md:px-5;
    }
}
</style>