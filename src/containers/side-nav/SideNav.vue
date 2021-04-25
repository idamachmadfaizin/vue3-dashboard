<template>
    <div class="group fixed top-0 -left-full h-screen pt-4 px-4 bg-white shadow-sm z-50 transition-all duration-300 md:w-17 md:hover:w-60 md:left-0 md:px-6 md:pt-5 md:pb-0" id="nav">
        <nav class="nav-container flex h-full flex-col justify-between content-center pb-12 overflow-auto">
            <div>
                <NavHeader :href="'/'" :text="'Brand-name'"></NavHeader>

                <!-- Nav List -->
                <div class="grid gap-10">
                    <!-- nav items -->
                    <div v-for="(nav, iNav) in navs" :key="iNav" class="grid gap-y-6 md:gap-y-7">
                        <h3 class="text-gray-500 text-base font-semibold uppercase tracking-widest md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">{{ nav.name }}</h3>

                        <template v-for="({ text, icon, to, items }, iParent) in nav.children" :key="iParent">
                            <NavItem v-if="!items && text && icon && to" :text="text" :icon="icon" :href="to"></NavItem>
                            <NavDropdown v-if="items && text && icon && to" :text="text" :icon="icon" :href="to" :items="items" ></NavDropdown>
                        </template>
                    </div>
                </div>
            </div>
            
            <!-- Nav Foot -->
            <div class="mt-20 grid gap-5">
                <template v-for="({ text, icon, to }, iNavFoot) in navFoots" :key="iNavFoot">
                    <NavItem v-if="text && icon && to" :text="text" :icon="icon" :href="to"></NavItem>
                </template>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { navs, navFoots } from '../_nav';
import NavItem from './NavItem.vue'
import NavDropdown from './NavDropdown.vue'
import NavHeader from './NavHeader.vue'

export default defineComponent({
    name: 'SideNav',
    components: {
        NavHeader,
        NavItem,
        NavDropdown,
    },
    data() {
        return {
            navs,
            navFoots,
        }
    },
    methods: { }
})
</script>

<style scoped>
.nav-container {
    scrollbar-width: none;
}
.nav-container::-webkit-scrollbar {
    display: none;
}
</style>