<script setup>
defineProps({
  name: String,
  image: String,
});
</script>

<template>
  <div class="characterCard relative text-center p-4 py-6 lg:px-6 lg:py-10">
    <div class="relative">
      <NuxtImg :src="image" alt="character image" width="400" height="448" />
    </div>

    <span
      class="uppercase text-darkBlue text-[18px] sm:text-[24px] lg:text-[32px]"
      >{{ name }}</span
    >
  </div>
</template>

<style scoped lang="scss">
.characterCard {
  background-image: url("/characterCard.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
