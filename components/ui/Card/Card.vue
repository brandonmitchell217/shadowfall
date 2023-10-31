<script setup>
import Shapes from "../../../assets/shapes.svg";
defineProps({
  title: String,
  image: String,
});
</script>

<template>
  <div
    class="card h-64 w-full relative pt-8 px-8 bg-white border-black border text-center flex flex-col items-center gap-6"
  >
    <Shapes width="40" height="40" />
    <span>{{ title }}</span>
    <Icon
      name="icon-park-solid:right-c"
      class="absolute right-4 bottom-4 z-10 text-4xl text-darkBlue"
    />
  </div>
</template>
