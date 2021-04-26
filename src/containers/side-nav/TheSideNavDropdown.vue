<template>
    <div class="group overflow-hidden px-4 md:px-6 max-h-5 transition-all duration-500 ease-in-out hover:max-h-400">
        <router-link
            :to="to"
            class="flex items-center text-gray-600 hover:text-purple-700"
        >
            <i class="text-sm md:text-xl mr-2" :class="[icon]"></i>
            <span class="transition duration-300 md:group-hover:opacity-100 text-sm whitespace-nowrap" :class="[showText]">{{ text }}</span>
            <i class="bx bx-chevron-down text-sm md:text-xl mr-2 ml-auto transition-all duration-500 group-hover:transform group-hover:rotate-180"></i>
        </router-link>

        <div class="bg-gray-200 rounded-md mt-4">
            <div class="grid gap-2 py-3 pr-10 pl-7">
                <router-link
                    v-for="(item, iItem) in items"
                    :key="iItem"
                    :to="item.to"
                    class="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >{{ item.text }}</router-link
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { INavItem } from '../_nav';

export default defineComponent({
    name: 'TheSideNavDropdown',
    props: {
        text: { type: String, required: true },
        icon: { type: String, required: true },
        to: { type: String, required: true },
        items: { type: Object as () => INavItem[], required: true },
    },
    computed: {
        showText(): string {
            return this.$store.state.sideNavShow ? 'opacity-100' : 'opacity-0'
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