<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  title: String,
  image: String,
  description: String,
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
  <div
    class="card group px-6 py-8 w-[271px] h-[349px] sm:w-[339px] sm:h-[436px]"
  >
    <div class="flex flex-col justify-center items-center gap-6 text-center">
      <div class="space-y-4">
        <img
          :src="selectedIcon"
          alt="icon for text"
          class="mx-auto w-9 h-auto xs:h-9 xs:w-auto xs:scale-75 md:scale-100 lg:scale-75 xl:scale-100"
        />
        <span
          class="block font-bold text-[1rem] xl:text-[18px] leading-none xl:leading-snug"
          >{{ title }}</span
        >
      </div>
      <p v-if="description" class="text-left text-[14px] leading-snug">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-image: url("/featureCard.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
