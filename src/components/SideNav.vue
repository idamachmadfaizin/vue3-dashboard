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
                        <h3 class="text-gray-500 text-base font-semibold uppercase tracking-widest md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">Profile</h3>

                        <a href="#" class="flex items-center text-purple-600">
                            <i class="bx bx-home nav-icon"></i>
                            <span class="nav-name">Home</span>
                        </a>
                        
                        <div class="nav-dropdown">
                            <a href="#" class="flex items-center text-gray-600 hover:text-purple-600">
                                <i class="bx bx-user nav-icon"></i>
                                <span class="nav-name">Profile</span>
                                <i class="bx bx-chevron-down nav-icon nav-dropdown-icon"></i>
                            </a>

                            <div class="bg-gray-200 rounded-md mt-4">
                                <div class="grid gap-2 py-3 pr-10 pl-7">
                                    <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Passwords</a>
                                    <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Mail</a>
                                    <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Accounts</a>
                                </div>
                            </div>
                        </div>

                        <a href="#" class="flex items-center text-gray-600 hover:text-purple-600">
                            <i class="bx bx-message-rounded nav-icon"></i>
                            <span class="nav-name">Messages</span>
                        </a>
                    </div>

                </div>
                <!-- <a href="#" class="flex items-center text-gray-600 hover:text-purple-600 mt-20">
                    <i class="bx bx-log-out nav-icon"></i>
                    <span class="transition duration-300 md:group-hover:opacity-100 text-sm overflow-hidden">Log Out</span>
                </a> -->
            </div>
            <a href="#" class="flex items-center text-gray-600 hover:text-purple-600 mt-20">
                <i class="bx bx-log-out nav-icon"></i>
                <span class="nav-name">Log out</span>
            </a>
        </nav>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'SideNav'
})
</script>

<style scoped>

</style>