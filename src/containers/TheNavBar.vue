<template>
    <header class="fixed top-0 left-0 w-full bg-white border shadow-sm px-4 z-50 md:py-0 md:pr-12 md:pl-24">
        <div class="flex items-center h-14 justify-between md:h-16">

            <a
                href="#"
                class="text-gray-800 font-medium hidden md:block transition-all duration-300"
                :class="[showText]"
            >
                Brand-name
            </a>

            <!-- Search -->
            <div class="flex py-2 px-3 bg-gray-100 rounded-md mx-5 md:mx-0 md:w-2/6 sm:w-5/12">
                <input type="search" placeholder="Search" class="w-full border-none outline-none bg-gray-100">
                <i class='bx bx-search text-xl text-gray-400'></i>
            </div>

            <img src="../assets/perfil.jpg" alt="perfil" class="rounded-full w-10 h-10" @click="toggle">

        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mutations } from '../store/store'
export default defineComponent({
    name: 'TheNavBar',
    methods: {
        toggle() {
            if (window.innerWidth < 768 )
                this.$store.commit(mutations.toggleSidebar.name)
        }
    },
    computed: {
        sideNavToggleIcon(): string {
            return this.$store.state.isSideNavShow ? 'bx-x' : 'bx-menu'
        },
        showText(): string {
            return this.$store.state.isSideNavEnter ? 'opacity-0' : 'opacity-100'
        },
    }
})
</script>

<style scoped>

</style>