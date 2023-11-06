<script setup>
import { computed } from "vue";
import NavHeader from "../components/ui/AppNav.vue";
import Footer from "../components/ui/AppFooter.vue";
import { useFavicon, usePreferredDark } from "@vueuse/core";

const isDark = usePreferredDark();

const favicon = computed(() =>
  isDark.value ? "/favicon_dark.svg" : "/favicon.svg"
);

const icon = useFavicon(favicon);
</script>
<template>
  <main class="overflow-x-hidden scroll-smooth">
    <NavHeader />
    <slot />

    <Footer />
  </main>
</template>
