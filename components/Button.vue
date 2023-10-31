<script setup>
import Background from "./ui/Button/Background.vue";

defineProps({
  href: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "transparent",
    required: false,
  },
  className: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<template>
  <button
    v-if="href == undefined"
    :class="`relative py-1 font-bold text-base sm:text-xl transition duration-200 group ${className}`"
  >
    {{ text }}
    <Background v-bind:color="color" />
  </button>

  <a
    v-else
    v-bind:href="href"
    :class="`relative py-1 font-bold text-base sm:text-xl transition duration-200 group ${className}`"
    >{{ text }}
    <Background v-bind:color="color" />
  </a>
</template>
