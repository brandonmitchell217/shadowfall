<script setup>
import NavHeader from "../components/ui/AppNav.vue";
import Footer from "../components/ui/AppFooter.vue";
</script>
<template>
  <main class="overflow-x-hidden scroll-smooth">
    <NavHeader />
    <slot />

    <Footer />
  </main>
</template>
