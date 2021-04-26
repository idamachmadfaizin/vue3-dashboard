<template>
    <router-link :to="to" class="flex items-center px-4 md:px-6 text-gray-500 hover:text-purple-700">
        <i class="text-sm mr-2 md:text-xl" :class="[icon]"></i>
        <span class="opacity-0 transition duration-300 md:group-hover:opacity-100 text-sm whitespace-nowrap">{{ text }}</span>
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