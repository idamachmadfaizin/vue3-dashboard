<template>
    <!-- <router-link to="/" class="flex items-center text-gray-500 hover:text-gray-700 font-semibold mb-10">
        <i class="bx bxs-disc text-sm md:text-xl mr-2"></i>
        <span class="opacity-0 transition duration-300 whitespace-nowrap group-hover:opacity-100">{{ text }}</span>
    </router-link> -->
    <a :href="href" class="flex items-center text-gray-500 hover:text-gray-700 font-semibold mb-10">
        <i class="bx bxs-disc text-sm md:text-xl mr-2"></i>
        <span class="opacity-0 transition duration-300 whitespace-nowrap group-hover:opacity-100">{{ text }}</span>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: '',
    props: {
        text: { type: String, required: true },
        href: { type: String, required: true },
    }
})
</script>
