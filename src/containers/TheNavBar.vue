<template>
    <header class="fixed top-0 left-0 w-full bg-white border shadow-sm px-4 z-50 md:py-0 md:pr-12 md:pl-24">
        <div class="flex items-center h-14 justify-between md:h-16">
            <img src="../assets/perfil.jpg" alt="perfil" class="rounded-full w-10 h-10 md:order-1">

            <a href="#" class="text-gray-800 font-medium hidden md:block">Brand-name</a>

            <!-- Search -->
            <div class="flex py-2 px-3 bg-gray-100 rounded-md md:w-2/6 sm:w-5/12">
                <input type="search" placeholder="Search" class="w-full border-none outline-none bg-gray-100">
                <i class='bx bx-search text-xl text-gray-400'></i>
            </div>

            <!-- Menu Toggle -->
            <div class="text-gray-700 cursor-pointer text-xl md:hidden">
                <i class='bx bx-menu' id="header-toggle"></i>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'TheNavBar'
})
</script>

<style scoped>

</style>