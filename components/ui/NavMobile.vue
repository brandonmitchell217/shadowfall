<template>
  <div
    :class="`${
      isOpen ? '-bottom-48' : '-top-72'
    } lg:hidden absolute left-0 right-0 py-6 bg-white flex flex-col items-center justify-center `"
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
    </ul>
    <div class="flex">
      <Button
        href="/"
        text="Buy Game"
        color="black"
        className="text-white min-w-[200px] text-center hover:text-black"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
});
</script>
