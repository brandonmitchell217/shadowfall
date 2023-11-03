<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  title: String,
  image: String,
  href: { String, default: "/" },
});

const selectedIcon = computed(() => {
  switch (props.image) {
    case "shapes":
      return "/shapes.svg";
    case "shield":
      return "/shield.svg";
    case "swords":
      return "/swords.svg";
    default:
      return "/shapes.svg";
  }
});
</script>

<template>
  <nuxt-link :to="href">
    <div
      class="card group h-full w-full px-2 pt-8 relative text-center flex flex-col items-center lg:gap-3"
    >
      <img
        :src="selectedIcon"
        alt="icon for text"
        class="w-9 h-auto xs:h-9 xs:w-auto xs:scale-75 md:scale-100 lg:scale-75 xl:scale-100"
      />
      <span
        class="font-bold text-[15px] md:text-[1rem] leading-none xl:leading-snug max-w-[82.5%] mx-auto"
        >{{ title }}</span
      >
      <div class="absolute bottom-6 right-5 text-2xl">
        <Icon name="icon-park-solid:right-c" />
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
.card {
  background-image: url("/miniCardBG.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
