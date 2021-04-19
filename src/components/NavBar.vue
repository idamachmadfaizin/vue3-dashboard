<template>
    <header class="fixed top-0 left-0 w-full bg-gray-50 border shadow-sm px-4 z-50 md:py-0 md:pr-12 pb-24">
        <div class="flex items-center h-14 justify-between md:h-16">
            <img src="../assets/perfil.jpg" alt="perfil" class="rounded-full w-10 h-10 md:order-1">

            <a href="#" class="text-gray-500 font-medium hidden md:block">Brand-name</a>

            <!-- Search -->
            <div class="flex py-2 px-3 bg-gray-200 rounded-md w-9/12 sm:w-5/12">
                <input type="search" placeholder="Search" class="w-full border-none outline-none bg-gray-200">
                <i class='bx bx-search text-xl'></i>
            </div>

            <!-- Menu Toggle -->
            <div class="text-gray-700 cursor-pointer text-xl md:hidden">
                <i class='bx bx-menu' id="header-toggle"></i>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'NavBar'
})
</script>

<style scoped>

</style>