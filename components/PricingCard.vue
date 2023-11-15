<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  image: String,
  title: String,
  subtitle: String,
  price: String,
  features: Array,
  type: String,
});
</script>

<template>
  <div
    class="relative pricingCard h-[405px] w-[275px] sm:h-[451px] sm:w-[306px] lg:h-[657.5px] lg:w-[446px] xl:h-[789px] xl:w-[536px] bg-contain lg:bg-cover px-4 py-6 flex flex-col items-center text-center gap-2"
  >
    <div class="pricingCard__header space-y-4">
      <img :src="image" alt="icon for text" class="pricingCard__icon mx-auto" />
      <div class="mt-3 lg:mt-6 space-y-2">
        <h3 class="pricingCard__title text-[20px] lg:text-[24px] text-darkBlue">
          {{ title }}
        </h3>
        <p class="pricingCard__subtitle text-sm lg:text-base">{{ subtitle }}</p>
      </div>
    </div>
    <div
      class="pricingCard__pricing w-full my-2 lg:my-8 pt-3 lg:pt-6 pb-4 lg:pb-8 space-y-2 lg:space-y-4 border-t border-b border-darkBlue"
    >
      <div class="pricingCard__price font-michroma">
        <span class="text-[24px] lg:text-[40px]">${{ price }}</span>
        <span v-if="type == 'month'" class="text-[18px] lg:text-[24px]"
          >/mo</span
        >
        <span v-if="type == 'year'" class="text-[18px] lg:text-[24px]"
          >/yr</span
        >
      </div>
      <nuxt-link
        to="/buynow"
        class="block py-1 lg:py-2 w-full bg-darkBlue text-white text-lg lg:text-2xl hover:bg-darkBlue/80"
        >Buy Game</nuxt-link
      >
    </div>
    <div
      class="pricingCard__body text-left max-h-[33%] overflow-scroll xs:overflow-auto overscroll-contain xs:overscroll-auto"
    >
      <ul class="pricingCard__features px-2 space-y-1.5 lg:space-y-3">
        <li
          v-for="feature in features"
          :key="feature"
          class="pricingCard__feature flex gap-3 items-center text-sm lg:text-base"
        >
          <Icon icon="material-symbols:check" class="text-base text-darkBlue" />
          <p class="flex-1">{{ feature }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricingCard {
  background-image: url("/pricingCard.png");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
