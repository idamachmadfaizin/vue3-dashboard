<template>
    <a :href="href" class="flex items-center text-gray-500 hover:text-purple-700">
        <i class="text-sm mr-2 md:text-xl" :class="[icon]"></i>
        <span class="opacity-0 transition duration-300 md:group-hover:opacity-100 text-sm whitespace-nowrap">{{ text }}</span>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavItem',
    props: {
        text: { type: String, required: true },
        icon: { type: String, required: true },
        href: { type: String, required: true },
    }
})
</script>
