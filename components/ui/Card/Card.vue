<!-- TODO: Figure out better way to do hover effects using svgs -->
<template>
  <a v-if="href">
    <div
      :class="`card group ${
        large
          ? 'max-w-[312px] h-[430px] p-10 xl:gap-4'
          : 'h-52 md:w-[169px] xl:w-[200px] md:h-[200px] xl:h-[231px] px-4 md:px-10 pt-8 xl:gap-6 '
      } relative text-center flex flex-col items-center gap-4 xs:gap-3 lg:gap-1.5 `"
    >
      <img
        :src="selectedIcon"
        alt="icon for text"
        class="w-9 h-auto xs:h-9 xs:w-auto xs:scale-75 md:scale-100 lg:scale-75 xl:scale-100"
      />
      <span
        class="font-bold text-[15px] md:text-[1rem] xl:text-[18px] leading-none xl:leading-snug"
        >{{ title }}</span
      >
      <p v-if="description" class="text-left text-[14px] leading-snug">
        {{ description }}
      </p>
      <Icon
        v-if="description == undefined"
        name="icon-park-solid:right-c"
        class="absolute right-6 xs:right-4 md:right-6 lg:right-4 xl:right-6 bottom-12 xs:bottom-[60px] md:bottom-8 z-10 text-4xl xs:text-2xl md:text-4xl lg:text-3xl xl:text-4xl text-darkBlue group-hover:text-black"
      />
      <CardBG
        class="absolute -z-10 top-0 left-0 right-0 bottom-0 group-hover:stroke-black"
      />
    </div>
  </a>

  <div
    v-else
    :class="`card group ${
      large ? 'max-w-[312px] h-[430px] p-10 xl:gap-4' : 'h-64 px-4 xl:gap-6'
    } relative text-center flex flex-col items-center gap-4 xs:gap-3 lg:gap-1.5 `"
  >
    <img
      :src="selectedIcon"
      alt="icon for text"
      class="w-9 h-auto xs:h-9 xs:w-auto xs:scale-75 md:scale-100 lg:scale-75 xl:scale-100"
    />
    <span
      class="font-bold text-[1rem] xl:text-[18px] leading-none xl:leading-snug"
      >{{ title }}</span
    >
    <p v-if="description" class="text-left text-[14px] leading-snug">
      {{ description }}
    </p>
    <Icon
      v-if="description == undefined"
      name="icon-park-solid:right-c"
      class="absolute right-6 xs:right-4 md:right-6 lg:right-4 xl:right-6 bottom-12 xs:bottom-[60px] md:bottom-12 lg:bottom-14 xl:bottom-10 z-10 text-4xl xs:text-2xl md:text-4xl lg:text-3xl xl:text-4xl text-darkBlue group-hover:text-black"
    />
    <CardBG
      class="absolute -z-10 top-0 left-0 right-0 bottom-0 group-hover:stroke-black"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import CardBG from "../../../assets/cardBG2.svg";

const props = defineProps({
  title: String,
  image: String,
  description: String,
  href: String,
  large: { Boolean, default: false },
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
