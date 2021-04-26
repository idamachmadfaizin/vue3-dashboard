<template>
    <router-link :to="to" class="flex items-center px-4 md:px-6 text-gray-500 hover:text-purple-700 font-semibold mb-10">
        <i class="bx bxs-disc text-sm md:text-xl mr-2"></i>
        <span class="opacity-0 transition duration-300 whitespace-nowrap group-hover:opacity-100">{{ text }}</span>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheSideNavHeader',
    props: {
        text: { type: String, required: true },
        to: { type: String, required: true },
    }
})
</script>
