<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cta: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>
<template>
  <div
    :class="`${
      cta
        ? 'space-y-2 xl:space-y-6 text-left'
        : 'space-y-2 xl:space-y-8 text-center'
    }`"
  >
    <h1 class="text-xl sm:text-3xl xl:text-5xl">{{ title }}</h1>
    <p class="text-base sm:text-lg xl:text-2xl">{{ description }}</p>
  </div>
</template>
