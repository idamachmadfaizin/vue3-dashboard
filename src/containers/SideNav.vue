<template>
    <div class="group fixed top-0 -left-full h-screen pt-4 px-4 bg-white shadow-sm z-50 transition-all duration-300 md:w-17 md:hover:w-60 md:left-0 md:px-6 md:pt-5 md:pb-0" id="nav">
        <nav class="nav-container flex h-full flex-col justify-between content-center pb-12 overflow-auto">
            <div>
                <a href="#" class="flex items-center text-gray-500 hover:text-gray-700 font-semibold mb-10">
                    <i class="bx bxs-disc nav-icon"></i>
                    <span class="opacity-0 transition duration-300 group-hover:opacity-100">Bedimcode</span>
                </a>

                <!-- Nav List -->
                <div class="grid gap-10">
                    <div class="nav-items">
                        <div v-for="(nav, iNav) in navs" :key="iNav">
                            <h3 v-if="isSubtitle(nav)" class="text-gray-500 text-base font-semibold uppercase tracking-widest md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">{{ nav.text }}</h3>

                            <a v-else-if="!nav.items" href="#" class="flex items-center text-purple-600">
                                <i class="nav-icon" :class="[nav.icon]"></i>
                                <span class="nav-name">{{ nav.text }}</span>
                            </a>
                            
                            <div v-else class="nav-dropdown">
                                <a href="#" class="flex items-center text-gray-600 hover:text-purple-600">
                                    <i class="nav-icon" :class="[nav.icon]"></i>
                                    <span class="nav-name">{{ nav.text }}</span>
                                    <i class="bx bx-chevron-down nav-icon nav-dropdown-icon"></i>
                                </a>

                                <div class="bg-gray-200 rounded-md mt-4">
                                    <div class="grid gap-2 py-3 pr-10 pl-7">
                                        <a v-for="(item, iItem) in nav.items" :key="iItem" :href="item.to" class="text-sm font-medium text-gray-500 hover:text-gray-700">{{ item.text }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-20 grid gap-5">
                <a href="#" class="flex items-center text-gray-600 hover:text-purple-600">
                    <i class="bx bx-log-out nav-icon"></i>
                    <span class="nav-name">Log out</span>
                </a>
                <a href="#" class="flex items-center text-gray-600 hover:text-purple-600">
                    <i class="bx bx-log-out nav-icon"></i>
                    <span class="nav-name">Log out</span>
                </a>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { navs, navFoots, IParent } from './_nav';

export default defineComponent({
    name: 'SideNav',
    data() {
        return {
            navs,
            navFoots,
        }
    },
    methods: {
        isSubtitle({ to, icon, badge, items }: IParent) {
            return !to && !icon && !badge && !items
        },
        isDropdown({ items }: IParent){
            return items && items.length > 0
        }
    }
})
</script>

<style scoped>
.nav-container {
    scrollbar-width: none;
}
.nav-container::-webkit-scrollbar {
    display: none;
}

@layer base {
    .bg-primary {
        @apply bg-purple-500
    }
    .bg-primary-light {
        @apply bg-purple-50
    }
    .title-color {
        @apply text-purple-900
    }
    .text-primary {
        @apply text-red-500
    }
    .text-primary-light {
        @apply text-red-50
    }

    .nav-icon {
        @apply text-sm mr-2 md:text-xl
    }

    .nav-name {
        @apply opacity-0 transition duration-300 md:group-hover:opacity-100 text-sm whitespace-nowrap
    }

    .nav-items {
        @apply grid gap-y-6 md:gap-y-7
    }

    .nav-dropdown {
        @apply overflow-hidden max-h-5 transition-all duration-500 ease-in-out
    }
    .nav-dropdown:hover {
        max-height: 100rem;
    }
    .nav-dropdown-icon {
        @apply ml-auto transition-all duration-500
    }
    .nav-dropdown:hover .nav-dropdown-icon {
        @apply transform rotate-180
    }

    .active {
        @apply text-purple-500
    }
}
</style>