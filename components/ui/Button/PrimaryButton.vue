<script setup>
import Background from "./ButtonBackground.vue";

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
    :class="`relative font-bold text-lg sm:text-xl text-center transition duration-200 group ${className}`"
  >
    <span class="relative z-20">{{ text }}</span>
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
          v-bind:fill="
            color == 'transparent'
              ? 'none'
              : color == 'darkBlue'
              ? '#3040D3'
              : color
          "
          v-bind:stroke="
            color == 'transparent'
              ? 'black'
              : color == 'darkBlue'
              ? '#3040D3'
              : color
          "
          :class="`transition duration-200 ${
            color == 'transparent'
              ? 'group-hover:fill-black'
              : color == 'darkBlue'
              ? 'group-hover:fill-darkBlue'
              : 'group-hover:fill-none '
          }`"
        />
      </svg>
    </div>
    <Background v-bind:color="color == 'darkBlue' ? '#3040D3' : color" />
  </button>

  <a
    v-else
    v-bind:href="href"
    :class="`relative xs:py-1 font-bold text-lg sm:text-xl text-center transition duration-200 group ${className}`"
  >
    <span class="relative z-20">{{ text }}</span>
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
  </a>
</template>

<style scoped>
.inside {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
