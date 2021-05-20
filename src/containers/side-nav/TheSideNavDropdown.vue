<template>
    <div
        class="overflow-hidden px-4 md:px-6 max-h-5 transition-all duration-500 ease-in-out"
        @click="expandSwitch"
        :class="[expandedHeightClass]"
    >
        <div class="flex items-center text-gray-600 hover:text-purple-700 cursor-pointer">
            <i class="text-sm md:text-xl mr-2" :class="[icon]"></i>
            <span class="sm:opacity-100 transition duration-300 text-sm whitespace-nowrap" :class="[showText]">{{ text }}</span>
            <i class="bx bx-chevron-down text-sm md:text-xl mr-2 ml-auto transition-all duration-500 transform" :class="[expandedRotateClass]"></i>
        </div>

        <div class="bg-gray-200 rounded-md mt-4">
            <div class="grid gap-2 py-3 pr-10 pl-7">
                <router-link
                    v-for="(item, iItem) in items"
                    :key="iItem"
                    :to="item.to"
                    class="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                    {{ item.text }}
                </router-link>
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
    data() {
        return {
            isExpanded: false,
        }
    },
    methods: {
        expandSwitch(): void {
            this.isExpanded = !this.isExpanded
        },
    },
    computed: {
        showText(): string {
            return this.$store.state.isSideNavEnter ? 'md:opacity-100' : 'md:opacity-0'
        },
        expandedHeightClass(): string {
            return this.$store.state.isSideNavEnter && this.isExpanded ? 'max-h-400' : ''
        },
        expandedRotateClass(): string {
            return this.$store.state.isSideNavEnter && this.isExpanded ? 'rotate-180' : ''
        },
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