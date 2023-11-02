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
  center: {
    type: Boolean,
    default: false,
    required: false,
  },
  colored: {
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
    } ${center ? 'text-center' : 'text-left'}`"
  >
    <h1
      :class="`text-xl sm:text-3xl xl:text-5xl ${
        colored ? 'text-darkBlue sm:max-w-[75%] mx-auto' : ''
      }`"
    >
      {{ title }}
    </h1>
    <p
      :class="`text-base sm:text-lg xl:text-2xl ${
        colored ? 'sm:max-w-[55%] mx-auto' : 'lg:max-w-[65%]'
      }`"
    >
      {{ description }}
    </p>
  </div>
</template>
