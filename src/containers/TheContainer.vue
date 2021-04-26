<template>
    <TheNavBar />
    <TheSideNav />
    <main>
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavBar from "./TheNavBar.vue";
import TheSideNav from "./side-nav/TheSideNav.vue";

export default defineComponent({
    name: 'TheContainer',
    components: {
        TheNavBar,
        TheSideNav,
    }
})
</script>

<style>

</style>