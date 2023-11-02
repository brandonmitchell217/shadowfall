<template>
  <div class="relative p-0.5 pb-6 w-[18vw] lg:w-[24vw] text-center">
    <div class="relative">
      <NuxtImg :src="image" alt="character image" width="400" height="448" />
    </div>

    <span class="uppercase text-darkBlue text-[24px] lg:text-[32px]">{{
      name
    }}</span>

    <CharacterCardBG class="absolute -top-6 -left-6 -right-6 bottom-0 -z-[1]" />
  </div>
</template>

<script setup>
import CharacterCardBG from "../../../assets/characterCard.svg";
defineProps({
  name: String,
  image: String,
});
</script>
