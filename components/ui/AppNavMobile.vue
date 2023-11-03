<script setup>
import Button from "./Button/PrimaryButton.vue";
defineProps({
  isOpen: Boolean,
});
</script>

<template>
  <div
    :class="`${
      isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'
    } lg:hidden absolute -bottom-52 left-0 right-0 py-6 bg-white flex flex-col items-center justify-center shadow-md transition-all duration-300`"
  >
    <ul class="flex flex-col justify-evenly items-center gap-3">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact Us</nuxt-link>
      </li>
      <li class="flex mt-2">
        <Button
          href="/buynow"
          text="Buy Game"
          color="black"
          className="text-white min-w-[200px] text-center hover:text-black"
        />
      </li>
    </ul>
  </div>
</template>
