<template>
    <div class="group overflow-hidden max-h-5 transition-all duration-500 ease-in-out hover:max-h-400">
        <a
            :href="href"
            class="flex items-center text-gray-600 hover:text-purple-700"
        >
            <i class="text-sm md:text-xl mr-2" :class="[icon]"></i>
            <span class="opacity-0 transition duration-300 md:group-hover:opacity-100 text-sm whitespace-nowrap">{{ text }}</span>
            <i class="bx bx-chevron-down text-sm md:text-xl mr-2 ml-auto transition-all duration-500 group-hover:transform group-hover:rotate-180"></i>
        </a>

        <div class="bg-gray-200 rounded-md mt-4">
            <div class="grid gap-2 py-3 pr-10 pl-7">
                <a
                    v-for="(item, iItem) in items"
                    :key="iItem"
                    :href="item.to"
                    class="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >{{ item.text }}</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { INavItem } from '../_nav';

export default defineComponent({
    name: 'NavDropdown',
    props: {
        text: { type: String, required: true },
        icon: { type: String, required: true },
        href: { type: String, required: true },
        items: { type: Object as () => INavItem[], required: true },
    }
})
</script>

