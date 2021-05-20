<template>
    <router-link 
        class="flex items-center px-4 md:px-6 text-gray-500 hover:text-purple-700 font-semibold mb-10"
        :to="to"
    >
        <i class="bx bxs-disc text-sm md:text-xl mr-2"></i>
        <span
            class="sm:opacity-100 transition duration-300 whitespace-nowrap"
            :class="[showText]"
        >
            {{ text }}
        </span>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheSideNavHeader',
    props: {
        text: { type: String, required: true },
        to: { type: String, required: true },
    },
    computed: {
        showText(): string {
            return this.$store.state.isSideNavEnter ? 'md:opacity-100' : 'md:opacity-0'
        }
    }
})
</script>
