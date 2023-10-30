<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "transparent",
    required: false,
  },
});
</script>

<template>
  <button
    :class="`px-8 py-4 rounded-3xl border border-${color} font-bold text-xl bg-${color} transition duration-200`"
  >
    {{ text }}
  </button>
</template>
