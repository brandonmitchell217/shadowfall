<template>
  <div
    :class="`lg:hidden absolute -bottom-52 left-0 right-0 py-6 bg-white flex flex-col items-center justify-center shadow-md transition-all duration-300`"
  >
    <ul class="flex flex-col justify-evenly items-center gap-3">
      <li>
        <NuxtLink @click="isOpen = !isOpen" to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink @click="isOpen = !isOpen" to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink @click="isOpen = !isOpen" to="/contact">Contact Us</NuxtLink>
      </li>
      <li class="flex mt-2">
        <Button
          @click="isOpen = !isOpen"
          href="/buynow"
          text="Buy Game"
          color="black"
          className="text-white min-w-[200px] text-center hover:text-black pt-1"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Button from "./Button/PrimaryButton.vue";
defineProps({
  isOpen: Boolean,
});
</script>
