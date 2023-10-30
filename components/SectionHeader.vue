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
  <div :class="cta ? 'space-y-6 text-left' : 'space-y-8 text-center'">
    <h1 class="text-5xl">{{ title }}</h1>
    <p class="text-2xl">{{ description }}</p>
  </div>
</template>
