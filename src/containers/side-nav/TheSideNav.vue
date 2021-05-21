<template>
    <div
        class="fixed top-0 md:left-0 h-screen pt-4 md:pt-5 bg-white shadow-sm z-50 transition-all duration-300 md:pb-0"
        :class="[showSideNav, hoveredSideNavClass]"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
    >
        <nav
            class="nav-container flex h-full flex-col justify-between content-center pb-12 overflow-auto"
        >
            <div>
                <TheSideNavHeader :to="'/'" :text="'Brand-name'" />

                <!-- Nav List -->
                <div class="grid gap-10">
                    <!-- nav items -->
                    <div v-for="(nav, iNav) in navs" :key="iNav" class="grid gap-y-6 md:gap-y-7">
                        <TheSideNavSubtitle v-if="nav.children && nav.children.length > 0" :text="nav.text" />
                        <TheSideNavItem v-else-if="nav.text && nav.icon && nav.to" :text="nav.text" :to="nav.to" :icon="nav.icon" />

                        <template v-if="nav.children && nav.children.length > 0">
                            <template v-for="({ text, icon, to, items }, iParent) in nav.children" :key="iParent">
                                <TheSideNavItem v-if="!items && text && icon && to" :text="text" :icon="icon" :to="to" />
                                <TheSideNavDropdown v-if="items && text && icon" :text="text" :icon="icon" :to="to" :items="items" />
                            </template>
                        </template>
                    </div>
                </div>
            </div>
            
            <!-- Nav Foot -->
            <div class="mt-20 grid gap-5">
                <template v-for="({ text, icon, to }, iNavFoot) in navFoots" :key="iNavFoot">
                    <TheSideNavItem v-if="text && icon && to" :text="text" :icon="icon" :to="to" />
                </template>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { navs, navFoots } from '../_nav';

import TheSideNavSubtitle from './TheSideNavSubtitle.vue'
import TheSideNavItem from './TheSideNavItem.vue'
import TheSideNavDropdown from './TheSideNavDropdown.vue'
import TheSideNavHeader from './TheSideNavHeader.vue'
import store, { mutations } from '../../store/store';
import { BreakpointHelper } from '../../shared/helpers/breakpoint.helper';

export default defineComponent({
    name: 'TheSideNav',
    components: {
        TheSideNavHeader,
        TheSideNavSubtitle,
        TheSideNavItem,
        TheSideNavDropdown,
    },
    data() {
        return {
            navs,
            navFoots,
        }
    },
    methods: {
        onEnter(): void {
            store.commit(mutations.onEnterSideNav.name)
        },
        onLeave(): void {
            const bp = new BreakpointHelper()
            if (!bp.isSm) { store.commit(mutations.onLeaveSideNav.name) }
        },
    },
    computed: {
        showSideNav(): string {
            return this.$store.state.isSideNavShow ? 'left-0' : '-left-full'
        },
        hoveredSideNavClass(): string {
            return this.$store.state.isSideNavEnter ? 'md:w-60' : 'md:w-17'
        },
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
</style>