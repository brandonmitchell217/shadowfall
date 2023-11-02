<script setup>
defineProps({
  color: {
    type: String,
    default: "transparent",
    required: false,
  },
});
</script>

<template>
  <div class="inside">
    <svg
      width="202"
      height="40"
      viewBox="0 0 202 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-auto min-h-[34px] sm:w-auto"
    >
      <path
        d="M194.66 31.6336L194.657 31.6359L186.302 39.5H0.5V0.5H201.5V25.282L194.66 31.6336Z"
        v-bind:fill="color == 'transparent' ? 'none' : color"
        v-bind:stroke="color == 'transparent' ? 'black' : color"
        :class="`transition duration-200 ${
          color == 'transparent'
            ? 'group-hover:fill-black'
            : 'group-hover:fill-none '
        }`"
      />
    </svg>
  </div>
</template>

<style scoped>
.inside {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
