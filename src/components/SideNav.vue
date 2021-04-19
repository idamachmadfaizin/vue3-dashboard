<template>
    <div class="nav fixed top-0 -left-full h-screen p-4 bg-gray-50 shadow-sm z-50 transition duration-300 md:w-72 md:left-0 md:py-5 md:pr-6 md:pb-0">
        <nav class="flex h-full flex-col justify-between pb-12 overflow-auto">
            <div>
                <a href="#" class="flex items-center text-gray-500 hover:text-gray-700 font-semibold mb-10">
                    <i class='bx bxs-disc text-sm mr-2 md:text-lg' ></i>
                    <span class="nav__logo-name">Bedimcode</span>
                </a>

                <!-- Nav List -->
                <div class="grid gap-10">
                    <div class="nav-items">
                        <h3 class="nav-subtitle">Profile</h3>

                        <a href="#" class="nav__link active">
                            <i class='bx bx-home nav__icon' ></i>
                            <span class="nav__name">Home</span>
                        </a>
                        
                        <div class="nav__dropdown">
                            <a href="#" class="nav__link">
                                <i class='bx bx-user nav__icon' ></i>
                                <span class="nav__name">Profile</span>
                                <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                            </a>

                            <div class="nav__dropdown-collapse">
                                <div class="nav__dropdown-content">
                                    <a href="#" class="nav__dropdown-item">Passwords</a>
                                    <a href="#" class="nav__dropdown-item">Mail</a>
                                    <a href="#" class="nav__dropdown-item">Accounts</a>
                                </div>
                            </div>
                        </div>

                        <a href="#" class="nav__link">
                            <i class='bx bx-message-rounded nav__icon' ></i>
                            <span class="nav__name">Messages</span>
                        </a>
                    </div>

                    <div class="nav-items">
                        <h3 class="nav-subtitle">Menu</h3>

                        <div class="nav__dropdown">
                            <a href="#" class="nav__link">
                                <i class='bx bx-bell nav__icon' ></i>
                                <span class="nav__name">Notifications</span>
                                <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                            </a>

                            <div class="nav__dropdown-collapse">
                                <div class="nav__dropdown-content">
                                    <a href="#" class="nav__dropdown-item">Blocked</a>
                                    <a href="#" class="nav__dropdown-item">Silenced</a>
                                    <a href="#" class="nav__dropdown-item">Publish</a>
                                    <a href="#" class="nav__dropdown-item">Program</a>
                                </div>
                            </div>

                        </div>

                        <a href="#" class="nav__link">
                            <i class='bx bx-compass nav__icon' ></i>
                            <span class="nav__name">Explore</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-bookmark nav__icon' ></i>
                            <span class="nav__name">Saved</span>
                        </a>
                    </div>
                </div>
            </div>
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