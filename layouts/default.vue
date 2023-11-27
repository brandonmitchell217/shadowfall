<script setup>
import { computed } from "vue";
import NavHeader from "../components/ui/AppNav.vue";
import Footer from "../components/ui/AppFooter.vue";
import { useFavicon, usePreferredDark } from "@vueuse/core";

useHead({
  title: "Shadowfall",
  meta: [
    { name: "Shadowfall", content: "Shadowfall" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Shadowfall" },
    { name: "og:title", content: "Shadowfall" },
    { name: "og:description", content: "Shadowfall" },
    { name: "og:image", content: "Shadowfall" },
    { name: "og:url", content: "Shadowfall" },
    { name: "apple-mobile-web-app-title", content: "Shadowfall" },
    { name: "application-name", content: "Shadowfall" },
    { name: "msapplication-tooltip", content: "Shadowfall" },
    { name: "msapplication-starturl", content: "/" },
    { name: "msapplication-tap-highlight", content: "no" },
    { name: "full-screen", content: "yes" },
    { name: "browsermode", content: "application" },
    { name: "nightmode", content: "enable/disable" },
    { name: "layoutmode", content: "fitscreen/standard" },
    { name: "imagemode", content: "force" },
    { name: "screen-orientation", content: "portrait" },
    { name: "x5-orientation", content: "portrait" },
    { name: "browsermode", content: "application" },
    { name: "x5-page-mode", content: "app" },
    { name: "msapplication-navbutton-color", content: "#000000" },
    { name: "apple-mobile-web-app-status-bar-style", content: "#000000" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-touch-fullscreen", content: "yes" },
    { name: "apple-mobile-web-app-title", content: "Shadowfall" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "HandheldFriendly", content: "true" },
    { name: "MobileOptimized", content: "320" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "format-detection", content: "telephone=no" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

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
